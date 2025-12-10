# Product Requirements Document (PRD)

## Product Name: CodeQuest (Working Title)

## Version: 1.0 — MVP

## Document Owner: Product Team

## Last Updated: 10 Dec 2025

## Tech Stack: MERN (MongoDB, Express, React, Node.js), JWT Authentication, WebSockets (future), Judge0 API

---

# 1. Overview

## 1.1 Background

Traditional coding platforms like LeetCode are intimidating for beginners due to complex UI, lack of guidance, and low engagement. Students—especially from Tier 2/3 cities—require a simplified, structured, and gamified experience.

## 1.2 Product Vision

Build a gamified coding platform that simplifies DSA learning using:

- Level-based progression
- XP rewards
- Clean UI for beginners
- Lightweight social competition

The product should feel like _“Duolingo for DSA”_.

## 1.3 MVP Objective

Validate whether a simplified, gamified UI improves beginner engagement and completion rates of coding problems.

---

# 2. Goals & Non-Goals

## 2.1 Goals (MVP Deliverables)

- Provide a structured level map (15 levels)
- Deliver an in-browser coding environment
- Implement XP-based progression
- Persist user progress
- Enable a simple global leaderboard

## 2.2 Non-Goals (Excluded from MVP)

- Clans / Group systems
- Real-time 1v1 coding battles
- Multi-language support
- Achievements, badges, avatars
- Animated level map
- In-app chat
- Complex gamification (streaks, quests, seasons)

---

# 3. User Personas

### Beginner Programmer

- Age 17–23
- Learning DSA for the first time
- Easily intimidated by complex UIs
- Needs hand-holding and structure

### Casual Learner

- Solves coding problems occasionally
- Motivated by gamification
- Prefers short, guided challenges

### Competitive Learner

- Engages for leaderboard and ranking
- Adds natural virality and retention

---

# 4. Core MVP Features

---

## 4.1 User Authentication (JWT)

### Requirements

- Sign up (username, email, password)
- Login with JWT-based auth
- JWT middleware for protected routes
- Persist XP and completed levels

### Success Criteria

- Authentication success ≥ 98%
- Secure token handling

---

## 4.2 Level Map

### Description

A list/grid representing levels 1–15.

### Requirements

- Locked/unlocked states
- Level access sequential
- On-click navigation to challenge screen
- Indicators: Completed / Unlocked / Locked

### Success Criteria

- Levels load in < 200ms
- State persists reliably

---

## 4.3 Challenge Screen (Coding Interface)

### Requirements

- Problem title + description
- Sample test cases
- Monaco-based editor
- JavaScript as language (MVP)
- Run Code → executes via Judge0
- Submit Code → validates hidden test cases
- Show results (pass/fail)
- XP reward + next level unlock on success

### Performance Target

- Code execution \< 1.5s

---

## 4.4 XP & Progression System

### Requirements

- +50 XP per completed level
- XP visible on navbar/header
- Stored in user profile
- Auto-unlock next level

### KPIs

- 40% of users complete Level 1
- 20% complete Level 5

---

## 4.5 Leaderboard

### Requirements

- Display top 10 users by XP
- Show: Rank, Username, XP
- Cached response for performance

### Performance

- Load time \< 300ms

---

# 5. System Architecture

---

## 5.1 Frontend (React)

### Screens

- Landing Page
- Login / Signup
- Level Map
- Challenge Screen
- Leaderboard
- Navigation Bar (XP + links)

### Integrations

- Axios → backend API
- JWT → stored in httpOnly cookie or memory
- Monaco Editor
- Context API / Redux

---

## 5.2 Backend (Node.js + Express)

### Endpoints

| Endpoint         | Method | Description                  |
| ---------------- | ------ | ---------------------------- |
| /auth/signup     | POST   | Create user                  |
| /auth/login      | POST   | JWT login                    |
| /levels          | GET    | Fetch all level data         |
| /level/:id       | GET    | Fetch problem details        |
| /submit          | POST   | Execute code via Judge0      |
| /progress/update | POST   | Update XP + completed levels |
| /leaderboard     | GET    | Fetch top 10 users           |

### Middleware

- JWT authentication
- Error handling

---

## 5.3 Database Schema (MongoDB)

### User Schema

```json
{
  "_id": "...",
  "username": "string",
  "email": "string",
  "passwordHash": "string",
  "xp": 0,
  "completedLevels": [1, 2, 3],
  "createdAt": "date"
}
```
