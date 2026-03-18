# ❌ Interview Weak Areas – Question Breakdown (Tarun Nagpal)

This document lists the **questions where performance was weak or could be significantly improved**, along with the reason and expected direction.

---

## 1. FastAPI Dependency Injection

### ❓ Question
Explain how FastAPI dependency injection works and why it is useful.

### ❌ What Went Wrong
- Answer was vague and generic
- Did not mention `Depends()`
- No concrete example (DB session, auth, etc.)

### ✅ Expected Answer Direction
- FastAPI uses `Depends()` to inject dependencies
- Helps reuse logic (DB, auth, config)
- Manages lifecycle per request

---

## 2. Database Transactions (Critical Miss 🚨)

### ❓ Question
How do you ensure multiple DB writes succeed/fail together?

### ❌ What Went Wrong
- Only mentioned `commit`
- No mention of transactions or rollback
- Missed core DB concept (ACID)

### ✅ Expected Answer Direction
- Use transactions (`session.begin`)
- Ensure atomicity
- Rollback on failure

---

## 3. SQL Injection Prevention

### ❓ Question
How do you prevent SQL injection when using ORM?

### ❌ What Went Wrong
- Mentioned:
  - Rate limiting ❌ (irrelevant)
  - Stop words ❌ (not standard)
- Weak explanation of ORM protection

### ✅ Expected Answer Direction
- ORM uses parameterized queries
- Avoid string concatenation
- Input validation is secondary

---

## 4. FastAPI + ORM Depth

### ❓ Question Context
Usage of SQLAlchemy with FastAPI

### ❌ What Went Wrong
- Surface-level understanding
- No mention of:
  - Session handling
  - Transactions
  - Dependency injection with DB

### ✅ Expected Answer Direction
- DB session via dependency injection
- Scoped session per request
- Transaction handling

---

## 5. Next.js Knowledge

### ❓ Question
Difference between Next.js and React

### ❌ What Went Wrong
- Answer limited to SSR vs CSR
- Said no practical experience and stopped

### ✅ Expected Answer Direction
- SSR, SSG, ISR
- File-based routing
- API routes
- Performance benefits

---

## 6. Communication & Terminology

### ❓ Observed Issues
- Mispronunciations / unclear terms:
  - "Jawski" → JavaScript
  - "NOD" → Node.js
  - "Sequel alchemy" → SQLAlchemy

### ❌ Impact
- Reduces confidence
- Makes answers sound less precise

### ✅ Expected Improvement
- Use correct terminology consistently
- Speak slower and clearer

---

## 7. Concept Depth (General Pattern)

### ❓ Observed Across Questions
- Dependency Injection
- ORM
- Security

### ❌ What Went Wrong
- Answers based on usage, not concepts
- Lack of internal understanding

### ✅ Expected Improvement
- Explain "how it works internally"
- Use correct technical terms
- Give structured answers

---

# 📊 Summary

## 🔴 Critical Gaps
- Database Transactions
- SQL Injection Prevention
- FastAPI Dependency Injection

## 🟡 Moderate Gaps
- ORM depth
- Next.js knowledge
- Communication clarity

---

# 🎯 Focus Areas for Improvement

1. Transactions (ACID, rollback)
2. ORM fundamentals
3. FastAPI internals (`Depends`)
4. Security basics (SQL injection)
5. Clean technical communication

---

# 🚀 Goal

Fixing these will move you from:
👉 **7 / 10 → 8.5+ / 10 candidate**
