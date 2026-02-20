# Technical Interview Questions

## Python & Concurrency

1. How are you handling concurrency in Python?
2. How does Python’s GIL (Global Interpreter Lock) affect your system?
3. How are you bypassing or handling the GIL problem?
4. Which concurrency libraries are you using?
5. What is the difference between multiprocessing and multithreading?
6. What is the difference between `__new__` and `__init__`?
7. Explain object creation vs object initialization.
8. Have you used metaclasses?
9. Have you used decorators or mixins?

---

## API Design & Security

10. How do you implement API versioning?
11. Is versioning handled at gateway level or application level?
12. How do you secure your APIs?
13. What authentication mechanism are you using?
14. Where is RBAC implemented?
15. Are you using middleware for authentication?

---

## Large Data Processing

16. How do you process large files (MBs / GBs)?
17. How do you handle ingestion failures?
18. What happens if processing fails midway?
19. How do you validate incoming files (CSV, JSON, PDF)?
20. How are invalid records handled?
21. Do you implement retry mechanisms?
22. How do you monitor failures?
23. Is there any dashboard for tracking failed jobs?

---

## Pagination & Reliability

24. How have you implemented pagination?
25. What is offset-based pagination?
26. What is cursor-based pagination?
27. What are best practices for large dataset pagination?
28. What is Circuit Breaker pattern?
29. What is graceful failure?
30. How do you implement graceful failure?

---

## OpenSearch / Search System

31. What is your role in configuring OpenSearch?
32. How are embeddings generated?
33. How does OpenSearch store vectors?
34. Why OpenSearch instead of Elasticsearch?
35. How is sharding handled?
36. How is scaling handled?
37. Have you worked with Apache Solr?
38. What is Apache Lucene?
39. How do you convert a user query into a search query?
40. What is Named Entity Recognition (NER)?
41. How are vectors searched?

---

## RAG & LLM

42. Where is RAG used in your system?
43. How is context passed to the LLM?
44. Are you using multi-agent architecture?
45. Are you fine-tuning or training models?
46. Which LLM are you using?
47. Is augmentation actually happening in your pipeline?

---

## System Design & Scaling

48. How are ingestion jobs deployed?
49. How are you using Kubernetes for scaling?
50. What is HPA (Horizontal Pod Autoscaling)?
51. How do you configure OpenSearch infrastructure?
52. How do you handle traffic spikes?
53. How do you measure system load?
54. How do you handle partial failures in distributed systems?