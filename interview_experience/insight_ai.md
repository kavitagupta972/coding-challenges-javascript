# AI / Python Full Stack Interview – Extracted Technical Questions

## 1. AI Experience

- Can you talk more about your AI-related experience?
- What exactly have you developed in the AI space?
- How are you using AI in your current search application?

---

## 2. Role & Contribution

- What was your specific role in this project?
- Were you more of an individual contributor or leading the team?
- What percentage of time did you spend coding vs mentoring/reviewing?

---

## 3. NER (Named Entity Recognition)

- How are you performing NER in your application?
- Which transformer-based model are you using?
- How does spaCy fit into your pipeline?
- How do you extract entities from user queries?

---

## 4. Model Training & Fine-Tuning

- You mentioned training the model — how exactly did you train it?
- What were the step-by-step stages in your data training pipeline?
- How was your training dataset structured?
- Did you perform fine-tuning?
- Did you modify the model architecture?
- Did you create any custom model?
- What was your hands-on contribution in model training?
- What preprocessing steps were involved?
- What evaluation metrics were used?

---

## 5. Embeddings & Vector Database

- You mentioned embeddings — how are you generating them?
- Which embedding model are you using?
- How are vectors stored?
- Are you using PostgreSQL vector feature or OpenSearch?
- How is the vector configuration defined?
- What is the embedding dimension?
- How does KNN retrieval work?
- What similarity metric are you using (cosine, L2, dot product)?
- What happens step-by-step during vector retrieval?

---

## 6. OpenSearch Implementation

- How are you storing embeddings in OpenSearch?
- What index type are you using?
- How is the OpenSearch schema designed?
- How do you retrieve relevant documents?

---

## 7. RAG (Retrieval-Augmented Generation)

- How does your RAG pipeline work?
- How do you pass context to the LLM?
- How do you ground responses?
- How do you prevent hallucination?
- What happens after OpenSearch returns results?
- How do you construct prompts?
- Do you enforce structured output?

---

## 8. Python Backend / API Layer

- What exactly are you writing in Python?
- What logic exists inside your API layer?
- Are you just calling the LLM API or doing more processing?
- What preprocessing/postprocessing do you perform?
- How do you structure your backend?
- How do you handle tokenization?
- How do you manage errors and retries?

---

## 9. Knowledge Graph (Neo4j)

- What did you implement using Neo4j?
- How was Neo4j integrated into the system?
- How was data ingested into Neo4j?
- What was the ingestion pipeline?
- How did you convert JSON to Turtle (TTL) format?
- What are your nodes?
- What are your relationships?
- How did you design the schema?
- How does graph traversal work?
- How does fallback search work using the graph?

---

## 10. Cypher Query (Hands-on Validation)

- Can you write a Cypher query for your example?
- How would you query parent/child nodes?
- How would you traverse sibling relationships?

---

## 11. System Architecture

- What is the complete request flow from UI to LLM?
- How is the frontend interacting with backend?
- How is context passed between components?
- What layers exist in your architecture?

---

## 12. AI Engineering Depth Check

- Did you fine-tune any LLM?
- Do you understand the training lifecycle?
- What happens during tokenization?
- How does transformer architecture work at high level?
- How do embeddings get generated internally?
- What optimizations did you implement?

---

## 13. Performance & Scaling (Implied but Expected)

- How do you optimize search latency?
- How do you cache embeddings?
- How do you manage token limits?
- How do you scale the vector search?
- How do you evaluate search relevance?
