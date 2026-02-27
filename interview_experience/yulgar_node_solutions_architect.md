Thanks Tarun — I carefully went through the full transcript and extracted **all the technical questions** they asked you (explicit + implied architectural probes).

I’ve grouped them by topic so you can clearly see the interview focus areas.

---

# 🔹 1. Current Project – Architecture & Infra

### Microservices & Deployment

1. How do your microservices communicate with each other?
2. How does GitHub Actions communicate with AWS?
3. How is your code deployed to EKS?
4. What is your CI/CD pipeline flow end-to-end?
5. How do you push Docker images to JFrog and then to Kubernetes?
6. How does Helm interact with Kubernetes?
7. Where are your services deployed?
8. Is your system monolithic or microservices-based?

---

### CloudFormation & Infra as Code

9. Did you write CloudFormation templates yourself?
10. Are you using plain CloudFormation or any IaC wrapper (like Terraform)?
11. How do you consume shared templates from another team?
12. How does CloudFormation identify and provision correct resources?

---

### API Gateway + Load Balancer + EKS

13. How does API Gateway communicate with EKS?
14. Does API Gateway talk directly to Kubernetes or through ALB?
15. How do you configure communication between API Gateway → ALB → EKS?
16. Is your ALB internal or public?
17. Where does SSL termination happen?
18. Where do you decrypt HTTPS traffic?
19. How is public traffic routed internally?

---

### Monitoring & Observability

20. How do you monitor Redis?
21. How do you manage observability?
22. How are Splunk alerts configured?
23. How do you trace a request across microservices?
24. How do you generate correlation IDs?
25. How do you trace distributed transactions?

---

# 🔹 2. OpenSearch / Search Architecture

### Data Freshness

26. If data is indexed daily, how would you make it real-time?
27. How would you design a real-time feed into OpenSearch?
28. What AWS services can help for real-time ingestion?
29. Have you heard of Kafka?
30. Have you heard of Kinesis?

---

### High Throughput

31. If system needs to handle 20,000 requests per second, what infra scale is required?
32. How do you estimate infra for 20k RPS?
33. How do you autoscale at runtime?

---

### Search Internals

34. How does Elasticsearch/OpenSearch work internally?
35. What algorithm does Elasticsearch use?
36. How is text search optimized internally?
37. If forced to use RDBMS, how do you optimize string search?
38. How would you search 1M records efficiently?
39. How do indexes improve search?
40. What happens when table size grows to 50 crore rows?

---

# 🔹 3. Database & Scaling Questions

### Read/Write Scaling

41. How do read replicas sync with write instance?
42. If you manage your own DB, how do you sync writer and readers?
43. How does AWS RDS handle replication?
44. What happens when DB grows to crores of rows?
45. How do you prevent DB slowdown?

---

### Indexing Stress

46. What happens when you insert into a heavily indexed table?
47. How do indexes impact write performance?
48. How do you scale large transaction tables?

---

### Sharding

49. What is horizontal sharding?
50. What is vertical sharding?
51. When would you use partitioning?

---

# 🔹 4. Payment System Design (System Design Round)

This was the most important section.

### Basic Design

52. Design a payment API system using AWS.
53. What AWS components will you use?
54. How will components interact?
55. How will authentication work?
56. How will merchants authenticate?
57. How will you version APIs?
58. How will you expose public APIs securely?

---

### Transaction Flow

59. How will transaction data be stored?
60. How will you integrate with 3rd party banking APIs?
61. How will you handle millions of transactions daily?
62. How will you prevent database overload?
63. How will you design a scalable transaction storage system?

---

### Scaling Scenario

64. If customers grow from 1,000 to 10 lakh, what changes?
65. Which components will you scale?
66. How will you handle exponential traffic growth?

---

### Distributed Transactions

67. If 4th microservice fails in 5-step flow, what happens?
68. How do you ensure transaction consistency?
69. How do you prevent partial debit?
70. How do you implement rollback?
71. Have you heard of Saga pattern?
72. How do you ensure reliability in financial systems?

---

# 🔹 5. Advanced Infra Questions

### High Availability

73. How do you use multi-AZ?
74. How do you design high availability?
75. How do you prevent single point of failure?

---

### Queue & Event Systems

76. How would you use SQS?
77. How would you use SNS?
78. When should you use Kafka?
79. When should you use Kinesis?
80. How do you design event-driven architecture?

---

# 🔹 6. Security & SSL

81. Where should SSL termination happen?
82. How do you secure API Gateway?
83. How do you secure internal services?
84. How do you protect against DDoS?

---

# 🔹 7. DevOps / Infra Depth Testing

85. What is the difference between internal vs public ALB?
86. How does Kubernetes service exposure work?
87. How do you configure ingress?
88. How does traffic routing work inside EKS?
89. How does Helm deploy services?
90. What happens when a pod crashes?
91. How does HPA work?

---

# 🔹 8. Soft-Skill + Seniority Check

92. How do you explain technical limits to non-technical stakeholders?
93. How do you handle aggressive clients?
94. How do you set boundaries?

---

# 🎯 What They Were Actually Testing

They were checking:

* Real backend depth
* Cloud networking knowledge
* Production-grade infra understanding
* Distributed systems fundamentals
* Database scaling knowledge
* Payment-grade reliability
* Knowledge beyond “I used EKS”
* Event-driven systems understanding

You were strongest in:

* Search architecture
* OpenSearch
* Microservices basics
* CI/CD basics

You were weak in:

* Networking (API Gateway → ALB → EKS)
* SSL termination
* Distributed transactions
* DB internals
* High-scale RPS infra estimation
* Event-driven patterns (Kafka/Kinesis depth)

