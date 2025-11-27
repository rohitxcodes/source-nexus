# Open Source Gamification Platform

A platform that gamifies open-source contributions through points, levels, badges, and leaderboards to increase developer engagement and retention.

## Problem

- New contributors find OSS intimidating and unrewarding
- Developers contribute once then disappear
- Current recognition systems (stars, commits) lack motivational value

## Solution

Transform contributions into a progression-based system with:

- **Points** - Quantified rewards for code, reviews, docs, and community support
- **Levels** - Rank progression from Rookie to Legend
- **Badges** - Achievement credentials for milestones
- **Streaks** - Daily contribution tracking with bonuses
- **Missions** - Targeted tasks with XP rewards
- **Leaderboards** - Global and filtered rankings
- **Quality Gates** - Only reviewed, merged contributions count

## Key Features

### Progression System
```
Rookie → Builder → Contributor → Maintainer → Champion → Legend
```

### Achievements

| Badge | Criteria |
|-------|----------|
| Bug Slayer | 50+ bug fixes |
| Doc Expert | 20+ documentation PRs |
| Merge Master | 100+ merged PRs |
| Code Reviewer | 300+ reviews |
| Streak Champion | 30-day streak |

### Missions
- Fix 3 bugs this week → +150 XP
- Review 5 PRs → +80 XP
- Improve documentation → +60 XP

## Tech Stack

- Node.js, Express
- PostgreSQL, Redis
- GitHub OAuth & API

## Getting Started

```bash
# Clone and install
git clone https://github.com/your-org/oss-gamification.git
cd oss-gamification
npm install

# Setup environment
cp .env.example .env

# Run migrations and start
npm run db:migrate
npm run dev
```

## Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push and open PR




**Status:** Active Development
