# How We Handle Concurrency in Python (Interview Prep)

Examples from the **Colleague-Search** project.

---

## Background: Why Concurrency in Python?

- **Concurrency** = doing multiple things in overlapping time periods (not necessarily at the same instant).
- **Goals**: use waiting time (I/O) for something else, and handle many requests or tasks without serializing everything.
- **Python’s GIL (Global Interpreter Lock)**: only one thread runs Python bytecode at a time. So threads don’t give true CPU parallelism for pure Python computation. They *do* help for **I/O-bound** work, because when a thread blocks on I/O (network, disk), the GIL is released and other threads can run.
- We use **threads** for I/O-heavy pipelines (APIs, DB, search), **locks** to protect shared state, and **async/await** in the API layer for many concurrent connections without one thread per request.

---

## 1. Thread-based concurrency with `concurrent.futures.ThreadPoolExecutor`

We use this where we have **CPU-light, I/O-heavy work** (API calls, DB, OpenSearch) and want to run many tasks in parallel.

**Why `concurrent.futures` (and not raw `threading`)?**

- **Higher-level API**: we submit callables and get back `Future` objects; we don’t manage `Thread` objects or `join()` by hand.
- **Bounded parallelism**: `max_workers` caps how many threads exist, so we avoid creating hundreds of threads for hundreds of tasks.
- **Context manager**: `with ThreadPoolExecutor(...) as executor` ensures the pool is shut down and threads are joined when we’re done.

**How it works:**

- `executor.submit(callable, *args, **kwargs)` schedules the callable on a worker thread and returns a `Future`. The main thread can keep submitting or do other work.
- `concurrent.futures.wait(futures)` blocks until all given futures are done (optionally we can use `return_when=FIRST_EXCEPTION` to stop on first failure).
- While worker threads are blocked on I/O (e.g. HTTP or DB), the GIL is released, so other threads can run and we get real overlap of I/O.

### Example 1 – Running multiple indexers in parallel

In `colleague-search-indexer`, we run many indexers (patent, membership, geography, etc.) in parallel. Each indexer is I/O-heavy (APIs, OpenSearch, DB). Running them in one thread would serialize all that waiting; a thread pool lets them wait in parallel.

```python
# colleague-search-indexer/src/os_pipelines/all_indexer_runner.py

def run_indexers(self, active_fmno_set, batch_id):
    batch_size = int(os.environ.get("BATCH_SIZE", default=Constants.BATCH_OF_HUNDRED))

    with concurrent.futures.ThreadPoolExecutor(max_workers=Constants.MAX_THREAD_INDEXER_LIMIT) as executor:
        if self.run_specific_indexers_only and len(self.run_specific_indexers_only) > 0 and self.run_specific_indexers_only[0] != '':
            self.run_specific_indexers(executor, self.run_specific_indexers_only, active_fmno_set, batch_size, batch_id)
        else:
            self.run_all_indexers(executor, active_fmno_set, batch_size, batch_id)

    self.log("AllIndexer: All threads have finished.")
```

- **`max_workers`**: we cap the number of concurrent indexers (e.g. 5–10) so we don’t overload external services or the DB. The exact value is from config/constants.
- Inside `run_all_indexers` we do `executor.submit(indexer_fn, ...)` for each indexer and collect `futures`, then `concurrent.futures.wait(futures)` so we only continue (e.g. completion activity, logging) after **all** indexers have finished.

### Example 2 – Parallel API requests inside an indexer

In indexers like `person_functions_indexer` and `geography_indexer`, we have many API URLs to hit. Instead of calling them one by one, we fan out to a fixed-size thread pool and collect results in a queue.

```python
# colleague-search-indexer/src/os_pipelines/person_functions_indexer.py

def run_parallel_requests(self, api_urls, result_queue, lock):
    worker_count = int(os.environ.get('PRACTICE_FOCUS_THREAD_COUNT', default='10'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=worker_count) as executor:
        futures = [executor.submit(self.make_api_request, url, result_queue, lock) for url in api_urls]
        concurrent.futures.wait(futures)
```

- **Bounded parallelism**: even if there are 100 URLs, only `worker_count` (e.g. 10) threads run at a time, which limits load on the API and our process.
- **Shared queue**: each `make_api_request` puts its result into `result_queue`. Because the queue is shared, we pass a `lock` and use it when putting (see next section).
- **“Run many, then sync”**: we submit all work, then `wait(futures)` so the caller only proceeds when every request has completed (success or error).

---

## 2. Synchronization with `threading.Lock`

Whenever multiple threads touch **shared mutable state** (queues, files, connection pools), we protect it with a lock so that only one thread at a time can run the critical section.

**Why a lock?**

- Without a lock, two threads can interleave: e.g. both read the same counter, both increment, both write back — one update is lost. Or two threads write to the same file and output is interleaved/corrupt.
- A **lock** (mutex) ensures only one thread holds it at a time. Others block until the holder releases (e.g. when exiting `with lock:`).

**Usage:**

- `lock = threading.Lock()` once (e.g. per queue or per shared resource).
- `with lock:` around any code that reads or updates the shared state. Keep the code inside short so we don’t hold the lock longer than needed.

**Note:** `threading.Lock` is **not** reentrant: the same thread cannot acquire it twice without deadlocking. If we need reentrancy (e.g. same thread calling a method that also takes the lock), we’d use `threading.RLock()`.

### Example – Thread-safe writes to shared queue and logging

In the same indexer, when each worker puts into the shared `result_queue`, we do it under the lock so only one thread writes at a time. We also use the lock when putting error entries, so the queue and log state stay consistent.

```python
# colleague-search-indexer/src/os_pipelines/person_functions_indexer.py

try:
    data = connections.retrieve_data_from_api_gateway(...)
    with lock:
        result_queue.put({"functions url": url, "response": data})
except Exception as e:
    self.log("Exception while making API request >>>>>>>>" + str(e))
    with lock:
        result_queue.put({"functions url with error": url, "error": str(e)})
```

- **Critical section**: only the `put()` (and optionally log) need to be under the lock. We do the actual API call *outside* the lock so other threads can run while one is waiting on I/O.
- If we didn’t use the lock, two threads could interleave their `put()` and internal queue state could be corrupted, or ordering/visibility could be wrong.

### Example – Thread-safe CSV writing

In `colleague-search-ml-service/tests/data_extract.py` we use a lock so only one thread writes to the CSV at a time. CSV writers are not thread-safe; interleaved `writerow` calls would mix lines from different threads.

```python
with csv_lock:  # Ensure only one thread writes to the CSV file at a time
    if not results:
        writer.writerow({...})
    else:
        for idx, result in enumerate(results[:10], start=1):
            writer.writerow({...})
```

- **Single shared resource**: one file, one `writer`; all writers go through `csv_lock` so each logical “row” is written atomically from the file’s perspective.

---

## 3. Async I/O with `async` / `await` (FastAPI)

In the **ML service** we use **async endpoints** so the server can handle many concurrent HTTP requests without dedicating one thread per request.

**How async fits in:**

- **Cooperative multitasking**: an `async` function runs until it hits `await`; then it yields to the event loop, which can run other coroutines. When the awaited I/O is ready, the coroutine resumes.
- **Single thread (typically)**: one thread runs the event loop; many coroutines can be “in progress” while waiting on I/O. So we get high concurrency without many OS threads.
- **Good for I/O-bound servers**: while one request is waiting on `await request.json()` or a DB/HTTP call, the loop can serve other requests. We use `await` for I/O so we don’t block the loop.

**When we use async vs threads:**

- **Async (FastAPI endpoints)**: many concurrent *connections* (requests), each doing a bit of work and then waiting on I/O. One thread + event loop is enough.
- **ThreadPoolExecutor**: batch or pipeline jobs where we want a fixed pool of workers doing heavier or more independent I/O (e.g. many indexers or many API URLs). We can also use `asyncio.to_thread()` or `run_in_executor` to run blocking code from async code without blocking the event loop.

```python
# colleague-search-ml-service/src/controller.py

async def autosuggest(request: Request = None, api_key: str = None):
    authenticate(request)
    # ... e.g. await some I/O
    return all_named_entities_aggregations

async def expertise_search(...):
    body = await request.json()  # yields while reading body
    # ... search logic, possibly more await
    return response
```

- **`await request.json()`**: reading the body is I/O; the coroutine yields, so other requests can be processed until the body is ready.
- All I/O in these handlers should be awaited (or run in an executor if we must call blocking code) so the event loop is never blocked.

---

## Complete flow example: where each is used

Below is one end-to-end flow showing **async**, **ThreadPoolExecutor**, and **Lock** in a single pipeline. Each bullet is where that tool is used.

**Scenario:** User calls a “run export” API. The API (async) accepts the request and kicks off a background export. The export fetches data from many URLs in parallel (thread pool) and writes results to a shared CSV (lock).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  1. ASYNC (API layer)                                                        │
│  Request hits FastAPI. Handler uses async/await so other requests can run   │
│  while this one waits on I/O (e.g. reading body, calling downstream).        │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  2. THREAD POOL (batch work)                                                 │
│  Export runs in a thread pool: N workers each fetch one URL. Overlap I/O     │
│  (network) while staying within max_workers.                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  3. LOCK (shared state)                                                      │
│  Each worker puts its result into a shared queue / writes a row to a CSV.   │
│  Lock ensures only one thread writes at a time → no corrupted output.       │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Minimal code sketch:**

```python
# ------ 1. ASYNC: API entry (e.g. FastAPI) ------
# Many clients can call this at once; event loop serves them without one thread per request.

async def run_export_endpoint(request: Request):
    body = await request.json()          # yield while reading body
    job_id = body["job_id"]
    urls = body["urls"]
    # Kick off export (e.g. in a thread so we don't block the event loop)
    loop = asyncio.get_event_loop()
    result = await loop.run_in_executor(None, run_export_sync, job_id, urls)
    return {"status": "ok", "job_id": job_id}


# ------ 2. THREAD POOL + 3. LOCK: sync export (runs in executor or standalone) ------
# Bounded parallelism: only max_workers threads fetch URLs at once.
# Lock: only one thread writes to result_queue / CSV at a time.

result_queue = queue.Queue()
write_lock = threading.Lock()

def run_export_sync(job_id, urls):
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(fetch_and_store, url, result_queue, write_lock) for url in urls]
        concurrent.futures.wait(futures)
    # All done; e.g. flush result_queue to CSV or DB
    return persist_results(result_queue)

def fetch_and_store(url, result_queue, write_lock):
    data = requests.get(url).json()      # I/O: GIL released, other threads can run
    with write_lock:                      # LOCK: protect shared result_queue
        result_queue.put({"url": url, "data": data})
```

**Where each is used:**

| Layer | Tool | Role in this flow |
|-------|------|-------------------|
| **API** | **async/await** | `run_export_endpoint` is async; `await request.json()` and `await loop.run_in_executor(...)` yield so other requests are served. No thread per request. |
| **Export** | **ThreadPoolExecutor** | `run_export_sync` uses a pool of 10 threads; each thread runs `fetch_and_store` for one URL. Many URLs are fetched in parallel (I/O overlap). |
| **Shared output** | **threading.Lock** | `fetch_and_store` uses `write_lock` only around `result_queue.put(...)`. Prevents two threads from mutating the queue at the same time and keeps output consistent. |

So in one flow: **async** at the edge, **threads** for parallel I/O in the batch step, **lock** wherever shared state (queue, file, counter) is updated by more than one thread.

---

## Summary for the interviewer

| Approach | Use case |
|----------|----------|
| **ThreadPoolExecutor** | Parallel I/O (indexers, parallel API calls) with a fixed max worker count; good when we have many independent I/O tasks. |
| **threading.Lock** | Protect shared state (queues, files, any mutable shared object) when multiple threads read/write it. |
| **async/await** | Non-blocking API handlers so one thread can serve many concurrent requests by yielding on I/O. |

**Why threads and not multiprocessing?** Our parallel work is mostly I/O (APIs, OpenSearch, DB). Threads allow overlapping I/O and avoid process spawn/memory overhead. We’re not CPU-bound, so the GIL is not the bottleneck.

**Why async in the API?** To scale concurrent requests without “one thread per request.” One event loop can juggle many requests that spend most of their time waiting on I/O.

**Quick pitfalls to mention:**

- **Lock scope**: keep the code inside `with lock:` minimal; don’t do slow or blocking I/O while holding the lock.
- **GIL**: threads don’t speed up CPU-bound Python code; use multiprocessing or native extensions for that.
- **Mixing sync and async**: from async code, don’t call blocking I/O directly; use `run_in_executor` or an async-native client so the event loop isn’t blocked.
