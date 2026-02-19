# Interview Recording – Round 2  
**Role:** Lead Agent AI Engineer (P3)  

---

## 🔹 Interview Context

### Interview Panel
- Backend Engineer working on Generative AI (Agent AI Platform team)
- Focus areas:
  - Model Gateway
  - Model Services
  - LLM integrations
  - Responsible AI
  - Ingestion services
  - Knowledge services

---

## 🔹 Candidate Background

- 14 years of experience
- 5 years at a global consulting firm
- Frontend: React, Angular, JavaScript
- Backend: Node.js, Python (FastAPI), Spring Boot (intermediate)
- Search: OpenSearch
- AI: LLM integrations, vector search, semantic + hybrid search
- Infra: AWS, Kubernetes, Docker, EKS, CI/CD
- Event-driven architecture: Kafka
- Caching: Redis

---

# 📌 Interview Questions

---

## 🧠 Generative AI Project Discussion

1. Explain the generative AI project you worked on.
2. In your OpenSearch-based people search system:
   - Where is the search executed?
   - At which layer does it happen?
3. How is your ingestion pipeline implemented?
4. Where have you applied LLM in your search architecture?
5. Which embedding model did you use?
6. How did you implement chunking strategy?
7. How do you parse PDFs or documents before embedding?
8. Are vectors stored as raw text or vector format?
9. If a 10GB file is uploaded, how would you chunk and store it?
10. If you have 1 million resumes indexed:
    - What can cause performance lag?
    - How would you improve search performance?
    - How would you manage resources?
11. How does OpenSearch know which shard to query?
12. What sharding strategy did you use?
13. Why OpenSearch instead of other search engines?

---

## 🏗️ System Design – Agent AI Platform

14. Design an Agent AI Platform where:
    - Users can create agents
    - Attach models (Azure/Gemini/etc.)
    - Run agents independently
15. What microservices would you design?
16. What high-level architecture components would you include?
17. How would you:
    - Deploy?
    - Scale?
    - Monitor?
    - Log?
    - Ensure traceability?
18. Would each agent have separate deployment?
19. How would you scale for:
    - 1000 agents?
    - 1 lakh requests per minute?
20. Horizontal vs Vertical scaling – when to use each?
21. Where would API Gateway fit?
22. Have you written API Gateway policies?
23. How does routing work in API Gateway?

---

## 🐳 DevOps & Infrastructure

24. Where are Docker images pushed?
25. How does CI/CD integrate with an artifact repository?
26. How does Kubernetes pull images?
27. How do you configure Helm charts?

---

## ⚡ Caching

28. Where have you used Redis?
29. Why is Redis fast?
30. Why choose Redis over other caching systems?

---

## 📡 Event-Driven Architecture

31. Have you used Kafka?
32. Explain your Kafka use case.
33. How does read/write microservice communication work?
34. What happens if:
    - A "delete" event is consumed before a "create" event?
35. How do you maintain consistency in Kafka?
36. How do you maintain event ordering?
37. What is a Kafka partition key?
38. How does partition key ensure order?

---

# 🎯 Key Learning Areas Identified

- Kafka partition key (ordering guarantee)
- Low-level system design clarity
- Agent orchestration architecture
- LLM scaling patterns
- Vector DB scaling strategies
- API Gateway policies
- Vertical scaling scenarios
```

