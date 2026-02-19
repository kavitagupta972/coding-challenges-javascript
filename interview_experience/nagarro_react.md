# Interview Questions Extracted from Recording

---

# 📌 Section 1: Architecture & Application Design

## 1️⃣ Micro-Frontend & Repo Strategy

1. What is the difference between Monorepo, Modular Monorepo, and Polyrepo?
2. When designing a micro-frontend architecture, how would you choose between Monorepo vs Polyrepo?
3. What are the advantages and disadvantages of Module Federation?
4. What happens when a remote micro-frontend version changes?
5. How would you dynamically load the latest remote version without redeploying the host?
6. How would you handle versioning of micro-frontends in a large-scale constantly changing application?
7. How would you solve dependency/version conflicts in Module Federation?

---

## 2️⃣ Large Scale Application Design (.com style global app)

8. If you are designing a large-scale global application (multi-region, multi-language, public + private, job portal, blogs, analytics etc.), what are the key architectural considerations?
9. How would you design:
   - Public vs Private sections?
   - Role-based permissions?
   - Logging & authentication?
10. How would you ensure scalability of such an application?
11. How would you design the system so that different regions/languages are supported?
12. How would you design performance at the application level (not component level)?

---

# 📌 Section 2: Role-Based Access Control (RBAC)

13. How would you implement Role-Based Access Control in a React application?
14. How would you guard UI sections based on user permissions?
15. Where would you store user permission data?
16. How would you prevent unauthorized users from accessing UI sections?
17. How would you design permission guards in React components?

---

# 📌 Section 3: Internationalization (i18n)

18. How would you handle multi-language support in a large React application?
19. Where should translation files be stored? (Local vs S3 vs CDN)
20. How would you dynamically load translations based on route?
21. How would you prevent users from seeing raw i18n keys during translation loading?
22. How would you handle namespace registration delays in React i18n?
23. How would you structure translation JSON files (region-based, route-based)?
24. How would you optimize translation loading for performance?
25. How would CDN caching help in translation loading?
26. How would you avoid full deployment when translations change?

---

# 📌 Section 4: Accessibility (Modal Accessibility)

27. How do you build a fully accessible modal?
28. How do you trap focus inside a modal?
29. How do you prevent background scrolling when modal is open?
30. How do you implement keyboard navigation inside modal?
31. What semantic HTML tags should be used inside a modal?
32. Should we use `<dialog>` element or `<div>`?
33. What ARIA roles are required for modal?
34. What is `aria-modal`?
35. How do you implement tab cycling (focus loop)?
36. How do screen readers interpret modal content?
37. How do you make modal accessible for blind users?

---

# 📌 Section 5: JavaScript Core (Event Loop)

38. What is the JavaScript Event Loop?
39. What is the difference between Microtask Queue and Macrotask Queue?
40. Give examples of microtasks.
41. Give examples of macrotasks.
42. How does the event loop prevent blocking?
43. What is the priority between microtask and macrotask?

---

# 📌 Section 6: React + Event Loop

44. How does the JavaScript event loop affect React?
45. Where does `useEffect` execution sit in the event loop?
46. How is `useEffect` converted internally when compiled to JavaScript?
47. How does React reconciliation work?
48. How does dependency array affect re-rendering?
49. What happens internally when a dependency changes?
50. What is batching in React?
51. How does React schedule updates?
52. What is the difference between Angular’s old rendering and React reconciliation?

---

# 📌 Section 7: useEffect + Async

53. What happens when you call `fetch` inside `useEffect`?
54. How does async/await behave inside useEffect?
55. How does asynchronous code interact with rendering?
56. What happens if the component unmounts before async completes?
57. How do you clean up async operations inside useEffect?

---


