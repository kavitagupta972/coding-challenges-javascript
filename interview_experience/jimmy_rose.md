# Interview Recording – Client Introduction & Technical Discussion

---

## 🔹 Introduction from Recruiter

- Recruiter apologized for speaking quickly (Scottish accent).
- Company is a **software consultancy** with clients in:
  - UK
  - US

- The discussed client:
  - UK-based
  - Protects **underwater fiber optic cables**
  - Works with large global companies

---

## 🌊 Client Business Overview

### What the Client Does

- Protects underwater internet cables.
- Uses:
  - **Unmanned vessels**
  - AIS (Automatic Identification System) ship tracking data
- Tracks ships crossing protected cable zones.
- If a cable is cut:
  - System generates a report
  - Identifies which ship likely caused damage
  - Provides legal traceability

---

## 🛠 Current Technical Setup

- Outsourced build to external development company.
- Tech stack:
  - **Java (Backend)**
  - **React (Frontend)**
  - **AWS**
- Application:
  - Large interactive map
  - Uses AIS data for vessel tracking
- Currently an **MVP**
- Reporting system not working well.
- Documentation exists and is reportedly detailed.

---

## 🚧 Current Challenge

- Client wants to:
  - Bring development in-house
  - Build internal tech team
- Needs:
  - Someone to understand documentation
  - Map architecture
  - Stabilize MVP
  - Refactor & improve sustainability
  - Create roadmap for future features

---

# 📌 Technical Questions Asked

---

## 🔹 Java Backend Experience

1. Tell me about your recent Java backend experience.
2. What frameworks do you work with?
3. Walk me through the architecture of a recent Java application.

---

### Candidate Answer Summary

- Spring Boot
- Microservices architecture
- 6 backend services
- 2 frontend micro-frontends
- AWS + EKS
- Docker + Kubernetes
- PostgreSQL
- Redis (caching)
- Inter-service communication
- Event-driven communication between read/write services

---

## 🔹 Refactoring Scenario (Backend)

**Question:**

You see a 500-line controller method that:
- Calls multiple external APIs
- Contains business logic
- Updates DB
- Runs in single transaction

How would you refactor without breaking production?

---

### Key Areas Discussed

- Separation of concerns
- Splitting:
  - API calls
  - Business logic
  - DB logic
- Feature toggles
- Incremental rollout
- Logging (Splunk)
- Error handling
- Gradual deployment
- No downtime strategy

---

## 🔹 Frontend Performance Scenario

**Problem:**
- React frontend calls backend every 5 seconds
- Fetches ship position for 200 vessels
- Causing high server load

### Question:
How would you redesign this while keeping the map responsive?

---

### Candidate Approach

1. Replace pull-based polling with push-based model.
2. Use WebSockets.
3. Update only changed ship positions.
4. Use Redis for caching repeated data.
5. Avoid full map re-render.
6. Use requestAnimationFrame.
7. Optimize React rendering.

---

### Follow-up Question

- Have you used WebSockets before?
- What else could help?

---

## 🔹 Logistics Questions

- When can you start?
- Notice period discussion.
- Background checks required.
- Business-to-business contract model.
- Laptop/equipment responsibility clarification.

---

# 🎯 Key Themes From This Round

- Legacy system understanding
- MVP stabilization
- Backend refactoring strategy
- Real-time system optimization
- Push vs Pull architecture
- WebSocket usage
- Microservices scalability
- Documentation-driven onboarding
- Client communication (non-technical stakeholders)

---

