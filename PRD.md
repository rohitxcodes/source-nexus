

# **PRD — Source Nexus**

### **1. Product Overview**

**Product Name:** Source Nexus
**Version:** 1.0.0
**Product Type:** Web platform that gamifies open-source contributions

Source Nexus is a backend + frontend system that motivates developers to contribute consistently and meaningfully to public repositories via progression mechanics, achievements, missions, and competition.

---

### **2. Target Users**

| User Type                | Primary Needs                          |
| ------------------------ | -------------------------------------- |
| New OSS developers       | Guided missions + motivation           |
| Regular OSS contributors | Points + badges + rankings             |
| Repository maintainers   | Quality filtering + impact ratings     |
| Hiring companies         | Public reputation proof + leaderboards |

---

### **3. Core Product Goals**

| Goal                           | KPI                                   |
| ------------------------------ | ------------------------------------- |
| Drive contribution volume      | 5,000+ monthly valid contributions    |
| Increase contributor retention | 35%+ users maintain 7-day streak      |
| Reward quality not spam        | 70%+ rewarded PRs marked 4★+ impact   |
| Create competitive ecosystem   | 20+ repos onboarded with leaderboards |

---

### **4. Core Features & Requirements**

#### **4.1 Authentication & Profiles**

* Login/Signup via GitHub OAuth
* Profiles must include:

  * GitHub handle, avatar, bio, country
  * XP bar, level, streak stats
  * Public shareable contributor card
* No anonymous scoring; every profile must link to a real GitHub account.

---

#### **4.2 Contribution XP (Points System)**

Base XP rewards for accepted events:

| Contribution Event          | XP         |
| --------------------------- | ---------- |
| PR merged                   | 50         |
| Bug-fix PR merged           | 40         |
| Documentation PR merged     | 25         |
| Issue closed by contributor | 30         |
| PR reviewed (approved)      | 15         |
| First-ever merged PR        | 20         |
| 3+ day streak bonus         | +5 per day |

Additional logic:

* Maintainers rate impact 1★–5★
  `impact multiplier = 1★ (1x), 5★ (2x)`
* Auto-scan must reject spam commits or low-quality PRs.
* XP breakdown must be transparent in UI and API.

---

#### **4.3 Level System**

User progression:

| Level Title | XP Required |
| ----------- | ----------- |
| Rookie      | 0           |
| Contributor | 300         |
| Builder     | 800         |
| Champion    | 2,500       |
| Legend      | 10,000      |

Requirements:

* One active level per user
* Level visible on profile + leaderboards + contributor card
* XP must roll forward; level thresholds configurable in admin.

---

#### **4.4 Badge System**

Badge engine must ship with 15+ badges for v1.

Examples:

| Badge         | Unlock Condition                   |
| ------------- | ---------------------------------- |
| Bug Slayer    | 20+ accepted bug fixes             |
| Doc Titan     | 15+ docs PRs merged                |
| Merge Mage    | 50+ total PRs merged               |
| Peer Reviewer | 100+ PR reviews approved           |
| First Flame   | User’s first merged PR             |
| Streak Master | 30-day active streak               |
| Multirepo     | 5+ different repos PR merged       |
| Polyglot      | 4+ programming languages PR merged |

Requirements:

* Badges are public + sharable via link
* Badge evaluation runs whenever XP is awarded
* Badge assets stored in CDN or cloud bucket.

---

#### **4.5 Mission/Quest System**

Mission types:

* Global weekly quests
* Repo-specific quests
* Personal user quests

Example quests:

* Fix 3 bugs across 3 public repos → +150 XP
* Review 5 PRs → +80 XP
* 2 PRs merged from different repos → +120 XP
* Docs improvement → +60 XP

Requirements:

* Mission refresh every Monday 9:00 AM (India time)
* Mission must track progress + completion history
* Missions grant XP only after validation.

---

#### **4.6 Leaderboard System**

Required boards:

| Board                | Sorted By              |
| -------------------- | ---------------------- |
| Global Leaderboard   | Total XP               |
| Country Leaderboard  | XP filtered by country |
| Repo Leaderboard     | XP by specific repo    |
| Weekly Leaderboard   | Reset weekly           |
| All-Time Leaderboard | Persist forever        |

Requirements:

* Real-time updates via webhook pipeline
* No tie rankings; tie-break via total PR count
* Cache optimized using Redis

---

### **5. Supported Integration & Event Detection**

Must detect events via:

* GitHub pull request webhooks
* GitHub issue closed hooks
* OAuth profile metadata
* Repository language breakdown via GitHub API

Pipeline Trigger:

```
Webhook Received → Validate signature → Analyze contribution
→ Maintainer impact score → Calculate XP → Update streak → Assign badges → Update leaderboard → Store event in DB
```

---

### **6. Technical Specifications**

#### **6.1 API Endpoint Requirements**

**Auth Routes**

```
POST /api/v1/auth/login
GET  /api/v1/auth/profile (secured)
GET  /api/v1/auth/logout
```

**Contributor & Score APIs**

```
GET  /api/v1/user/{github_handle}/score
GET  /api/v1/streak/{github_handle}
GET  /api/v1/badges/{github_handle}
```

**Leaderboard APIs**

```
GET /api/v1/leaderboard/global
GET /api/v1/leaderboard/country/{country_name}
GET /api/v1/leaderboard/repo/{repo_name}
GET /api/v1/leaderboard/weekly
GET /api/v1/leaderboard/all-time
```

**Webhook**

```
POST /api/v1/webhooks/github  (verify using signature header)
```

---

### **7. Permission Matrix**

| Feature                          | Public User | Maintainer | Admin |
| -------------------------------- | ----------- | ---------- | ----- |
| Earn XP                          | ✓           | ✗          | ✗     |
| Earn badges                      | ✓           | ✗          | ✗     |
| Get leaderboard ranks            | ✓           | ✗          | ✗     |
| Rate impact score                | ✗           | ✓          | ✗     |
| Configure XP rules               | ✗           | ✗          | ✓     |
| Add new badges                   | ✗           | ✗          | ✓     |
| Configure missions               | ✗           | ✗          | ✓     |
| Moderate fake/spam contributions | ✗           | ✓          | ✓     |

---

### **8. Data Model Requirements**

**Users**

```
id, github_handle, avatar, country,
totalXP, level, created_at
```

**Contributions**

```
id, user_id, repo_name, pr_url,
event_type (bugfix/docs/review/issue),
impact_score (1–5), xp_awarded,
timestamp, is_rewarded
```

**Streaks**

```
github_handle, current_streak,
longest_streak, last_active_date
```

**Badges**

```
id, user_id, badge_name,
badge_asset_url, earned_at
```

**Missions**

```
mission_id, user_id, github_handle,
mission_type, target, progress,
xp_bonus, started_at, completed_at
```

---

### **9. Security & Integrity Requirements**

* Verify all webhooks via GitHub signature headers
* Rate limit all XP award routes
* Reject bot/spam using code scan + PR quality heuristics
* No rewarding auto-generated contributions
* Secure token rotation

---

### **10. v1 Release Scope**

You **must build in this order:**

1. GitHub OAuth + Profiles
2. Webhook receiver + validation
3. Contribution analyzer + XP awarding
4. Streak tracking
5. Badge evaluation engine
6. Leaderboards + Redis caching
7. Mission scheduler

Avoid building reward store/UI-heavy features in v1. Core engine matters first.

---

### **11. Success Definition**

✅ Real GitHub accounts get XP only for accepted PRs/issues/reviews
✅ Streaks update without failures
✅ Badges unlock correctly via analyzer pipeline
✅ Leaderboard refreshes in real-time < 100ms cached delivery
✅ Spam contributions never rewarded

---

### **Final Summary**

**Source Nexus is an open ecosystem that rewards developers based on validated, meaningful contributions via XP, streak bonuses, missions, badges, and public leaderboards, powered by GitHub integration and real-time caching.**


