# Technical Interview Summary

## 1. JavaScript (Core Concepts)

- What is the output of `1 / 0` in JavaScript?
- What is the `typeof Infinity`?
- What is the `typeof NaN`?
- Why does `NaN` return type `"number"`?
- Since JavaScript is single-threaded, how does it handle millions of requests per second in Express/Node?
- Explain how the event loop works.
- What are the limitations of JavaScript?
- When should JavaScript NOT be used?
- What is the difference between JavaScript and TypeScript (beyond "superset")?
- What are the advantages of TypeScript?
- Demonstrate how a callback works (write your own example).
- What happens if a callback parameter is not a function (e.g., number/string)?
- How would you handle "callback is not a function" without using try-catch?
- What are the states of a Promise?
- What is the difference between `Promise.any()` and `Promise.race()`?

---

## 2. React

- What is batching in React?
- Why was batching improved in React 18?
- What is the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)?
- What is hydration?
- How does hydration work?
- What state management techniques do you use for large-scale applications?
- How would you manage state in SSR?
- When would you use Redux?

---

## 3. Backend / API Design

- How do you handle API versioning?
- How do you ensure backward compatibility?
- What metrics do you consider when scaling an API?
- How do you improve API performance?
- What caching strategies do you use?
- What factors determine whether to choose Monolith vs Microservices architecture?
- Why do large companies still use monolithic architecture despite heavy traffic?
- What considerations affect architecture choice (team size, load, product stage, etc.)?

---

## 4. AWS & Cloud

- What is the difference between AWS Elastic Beanstalk (EBS) and Amazon Elastic Container Service (ECS)?
- What is horizontal scaling?
- What is vertical scaling?
- How do you scale applications in Kubernetes?
- How do you define min/max pods?
- How do you handle infrastructure performance tuning?

---

## 5. Databases (PostgreSQL & General Concepts)

- What databases have you worked with?
- Which SQL flavor have you used?
- Write a query to find the 2nd highest mark from a table.
- How do you optimize a slow SQL query?
- What strategies improve query performance?
  - Indexing
  - Using EXPLAIN
  - Avoiding `SELECT *`
  - Normalization
  - Read replicas
  - Caching
- What is the difference between vertical and horizontal partitioning?
- What is sharding?
- How is sharding implemented in search databases?

---

## 6. System Design & Architecture

- What metrics do you evaluate when scaling systems?
- What are the considerations before choosing microservices?
- How does load impact architectural decisions?
- What is your approach to database read/write scaling?
- How would you design a payment service?
- What is your strategy for performance optimization at:
  - Application layer
  - Infrastructure layer
  - Database layer

---

## 7. Company / Role Questions

- What kind of projects does your company handle?
- What does a tech lead’s day look like?
- What is the company headcount?
- What technologies are most used across projects?

---

# Overall Interview Focus

The interview heavily focused on:

- JavaScript fundamentals (deep conceptual understanding)
- Asynchronous behavior & event loop
- Promises
- React rendering internals
- Backend scaling strategies
- AWS infrastructure knowledge
- Database optimization
- System design thinking
- Microservices vs Monolith trade-offs