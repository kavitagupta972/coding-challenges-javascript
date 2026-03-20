



# Interview Weak Areas – Analysis (Interview 2)

## 1. IP Whitelisting + API Key Combination
**Question:**  
How would you implement IP whitelisting combined with API key validation per client?

**Issue:**
- Focused only on AWS API Gateway IP whitelisting.
- Pushed back on combining IP + API key instead of discussing design.
- Missed concept of **binding API key to specific IP(s)**.

**Expected:**
- Store mapping: `API Key -> Allowed IPs`
- Validate both:
  - API Key
  - Source IP
- Enforce at API Gateway or middleware layer.

---

## 2. Security Design Discussion (Pushback)
**Question Context:**  
Why not combine multiple security layers (IP + Key)?

**Issue:**
- Became defensive ("why complicate system")
- Did not acknowledge **defense-in-depth principle**

**Expected:**
- Accept trade-offs
- Say: *"Yes, combining improves security though adds complexity"*

---

## 3. Microservices Database Design
**Question:**  
Is it a good practice for microservices to share a database?

**Issue:**
- Justified based on requirement
- Did not mention it's generally **anti-pattern**

**Expected:**
- Each microservice should own its DB
- Shared DB = tight coupling
- Exception: search/indexing systems (like Elasticsearch)

---

## 4. Kubernetes Scaling Explanation
**Question:**  
How does scaling work?

**Issue:**
- Incorrect statement:
  - "Thread creates pod" ❌

**Expected:**
- Kubernetes uses:
  - **HPA (Horizontal Pod Autoscaler)**
  - Based on CPU/Memory metrics
- No concept of "thread creating pod"

---

## 5. Security Tools Awareness
**Question:**  
Experience with tools like OWASP ZAP, Snyk, etc.

**Issue:**
- No awareness
- Could not relate or give alternatives clearly

**Expected:**
- Basic awareness of:
  - OWASP ZAP (DAST)
  - Snyk (dependency scanning)
  - Burp Suite

---

## 6. Load Testing Tools
**Question:**  
Which tool used for load testing?

**Issue:**
- Could not recall tool name

**Expected:**
- Common tools:
  - JMeter
  - Locust (Python)
  - k6
  - Gatling

---

## 7. API Response Time Expectation
**Question:**  
Expected API latency?

**Answer Given:**  
- 3 seconds acceptable ❌

**Issue:**
- Too high for modern systems

**Expected:**
- <200 ms (ideal)
- <500 ms acceptable
- 1 sec max (edge cases)

---

## 8. CAP Theorem
**Question:**  
Explain CAP theorem

**Issue:**
- Did not know
- Tried guessing incorrectly

**Expected:**
- C = Consistency  
- A = Availability  
- P = Partition Tolerance  
- Trade-off: choose 2 of 3

---

## 9. Data Residency / Compliance (GDPR Scenario)
**Question:**  
How to ensure region-based data storage?

**Issue:**
- Answer focused on:
  - Availability Zones ❌
  - CDN ❌
- Missed actual **data residency concept**

**Expected:**
- Region-based deployment:
  - EU → EU region DB
  - US → US region DB
- Use:
  - Geo-routing
  - Separate DB clusters per region

---

## 10. Weak Clarity on Authentication vs Authorization Layers
**Question:**  
Where is auth handled?

**Issue:**
- Confusing explanation:
  - Gateway vs Microservice vs Spring Boot
- Not clearly layered

**Expected:**
- Authentication:
  - API Gateway / Auth Service
- Authorization:
  - Service layer (RBAC/ABAC)

---

## 11. Limited Exposure to Identity Providers
**Question:**  
Experience with Keycloak / Cognito?

**Issue:**
- Only partial / theoretical knowledge

**Expected:**
- At least conceptual clarity:
  - OAuth2 flows
  - OpenID Connect
  - Token lifecycle

---

# Summary

## Key Weak Themes
- System design depth
- Security architecture maturity
- Distributed systems fundamentals
- Performance expectations
- Tooling awareness

## Strong Areas (for confidence)
- CI/CD pipelines
- Practical architecture experience
- React optimization
- Caching strategies
- Real-world system exposure