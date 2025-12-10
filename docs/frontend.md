packages/web/
├─ public/
├─ src/
│ ├─ pages/
│ │ ├─ index.js # Landing
│ │ ├─ signin.js
│ │ ├─ signup.js
│ │ ├─ map.js # Level map
│ │ ├─ level/[id].js # Challenge screen (dynamic)
│ │ └─ leaderboard.js
│ ├─ components/
│ │ ├─ Navbar.js
│ │ ├─ LevelCard.js
│ │ ├─ EditorPanel.js
│ │ └─ LeaderboardCard.js
│ ├─ context/
│ │ └─ AuthContext.js
│ ├─ lib/
│ │ └─ api.js # axios instance
│ ├─ styles/
│ └─ utils/
│ └─ jwt.js
├─ package.json
└─ tailwind.config.js
