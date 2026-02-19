# Interview Questions Extracted – Node.js, JavaScript, React

---

# 📌 Section 1: Node.js Internals & Event Loop

1. If Node.js is single-threaded, why does it have a default thread pool of 4 threads?
2. What is the Node.js thread pool?
3. What is libuv?
4. How is libuv different from Node.js?
5. What is the V8 engine?
6. How does V8 relate to Node.js?
7. What is the cluster module in Node.js?
8. Are worker processes threads or separate processes?
9. What is the difference between concurrency and parallelism?
10. How does Node.js handle asynchronous operations at a low level?
11. What is the difference between `process.nextTick()` and `setImmediate()`?
12. When should you use `process.nextTick()`?
13. When should you use `setImmediate()`?
14. How does the event loop work internally?
15. What are microtasks and macrotasks in Node.js?
16. What is event loop lag?
17. What causes event loop blocking?
18. How can CPU-heavy tasks block Node.js?
19. How would you avoid blocking the event loop?

---

# 📌 Section 2: Memory Management in Node.js

20. How does Node.js handle memory management?
21. How does V8 manage garbage collection?
22. Which garbage collection algorithm does V8 use?
23. What are common causes of memory leaks in Node.js?
24. How can global variables cause memory leaks?
25. How can event listeners cause memory leaks?
26. How can improper caching cause memory leaks?
27. How can you analyze memory usage in Node.js?
28. What is `process.memoryUsage()`?
29. What is Node.js profiler?
30. How do you perform CPU profiling in Node.js?
31. How do you perform memory profiling in Node.js?

---

# 📌 Section 3: Building Scalable Node.js Applications

32. How would you structure a scalable Node.js API?
33. What role does an API Gateway play?
34. How would you implement rate limiting?
35. How would you scale a Node.js application horizontally?
36. How do Docker and Kubernetes help in scaling?
37. What is Horizontal Pod Autoscaling?
38. How would you handle authentication and authorization in Node.js?
39. How do you implement JWT-based authentication?
40. What is API versioning and why is it important?
41. How do you maintain backward compatibility in APIs?
42. How would you implement centralized error handling?
43. How do you validate incoming requests?
44. What is express-validator?
45. How do you manage environment configurations (dev, QA, prod)?
46. What logging strategy would you use?
47. How does Splunk help in logging and monitoring?

---

# 📌 Section 4: File Handling & Streams

48. What are the ways to read files in Node.js?
49. What is the difference between synchronous and asynchronous file operations?
50. When would you use synchronous file handling?
51. What are the different types of streams in Node.js?
52. What is a Readable stream?
53. What is a Writable stream?
54. What is a Duplex stream?
55. What is a Transform stream?
56. What is a real-world use case of Duplex streams?
57. What is Server-Sent Events (SSE)?
58. What is WebSocket?
59. What is the difference between WebSocket and Server-Sent Events?
60. Why are WebSockets considered bidirectional?

---

# 📌 Section 5: Component Communication (Angular & React)

61. How do components communicate in Angular?
62. How do components communicate in React?
63. What is state lifting?
64. What is Redux?
65. What is data binding?
66. What is two-way data binding?
67. What is one-way data binding?
68. What is the difference between Guard and Interceptor in Angular?
69. What is the purpose of an HTTP interceptor?
70. What is a route guard?

---

# 📌 Section 6: React Core Concepts

71. What are lifecycle methods in React (Class components)?
72. What are lifecycle phases in Functional components?
73. How does `useEffect` replace lifecycle methods?
74. What is the difference between `componentDidMount` and `useEffect`?
75. What is the difference between props and state?
76. Can props be modified?
77. What is an infinite render loop in React?
78. How can `useEffect` cause infinite loops?
79. What is `useReducer`?
80. When should you use `useReducer` instead of `useState`?
81. What is a reducer function?
82. What is React.memo?
83. What is memoization in React?
84. When should you avoid using React.memo?
85. What is the difference between `useMemo` and `React.memo`?

---

# 📌 Section 7: Advanced JavaScript & Node.js Concepts

86. What is concurrency in JavaScript?
87. What is parallelism?
88. How does Node.js simulate concurrency?
89. How does the libuv thread pool work?
90. What operations use the thread pool in Node.js? (e.g., fs, crypto, DNS)
91. How does `nextTick` differ from Promises in execution priority?
92. In what order are microtasks executed?
93. How do timers (`setTimeout`) interact with I/O callbacks?

---

