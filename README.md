# ♠️ H5-SATTEBAAZII — Real-Time Digital Chip Betting Companion for Real-Life Card Games

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

> **IMPORTANT DISCLAIMER**: **100% Virtual Chips.** There are strictly **NO** real-money transactions, deposits, withdrawals, cryptocurrencies, cash prizes, or monetary valuations of any kind. H5-SATTEBAAZII is an open-source real-time multiplayer digital chip tracking and betting companion for friends playing real-life physical card games.

---

## 🌟 Project Overview

**H5-SATTEBAAZII** is a real-time multiplayer digital chip management and betting companion app. 

When playing poker or card games with friends in real life, carrying bulky physical chipsets or writing down messy bets on paper causes delays and arguments. **H5-SATTEBAAZII** solves this:
- Players sit around their physical table with their **real deck of cards**.
- Each player opens **H5-SATTEBAAZII** on their phone or laptop.
- Everyone receives **500 virtual chips** and joins a room using a unique code like `H5-7X92`.
- The app authoritatively tracks turns, calls, raises, all-ins, folds, pot totals, and action logs in real time.
- When betting concludes, players reveal their physical cards, and the table host taps to award the pot to the winner (or splits the pot evenly)!

---

## 💡 Why I Built This

Playing physical card games in college dorms or apartments often runs into the same problem: nobody has an expensive ceramic chip set, or there aren't enough chips of each denomination. Pen-and-paper tracking ruins the flow of the game.

I built **H5-SATTEBAAZII** to provide the ideal companion experience:
1. **Server-Authoritative Fairness**: Eliminates calculation disputes. The server validates every chip deduction, raise constraint, turn rotation, and pot calculation.
2. **Cardless Digital Chip Engine**: Zero virtual cards to distract from the tactile joy of holding real physical cards with your friends.
3. **Physical Showdown Awarding**: Clean, intuitive host controls to award the pot to whichever player wins the physical hand at the table, or split the pot on ties.
4. **Sub-15ms Live WebSockets**: Instant updates on every player's phone with synthesized chip clinks, glowing turn halos, and countdown timers.

---

## 🎮 Game Rules & Table Mechanics

### Starting Chips & Room Creation
- Every player starts with **500 virtual chips**.
- The room host configures the **Minimum Bet** (e.g. 25 chips) and **Max Players** (2 to 8 seats).
- A room code is generated (e.g. `H5-7X92`) for 1-click sharing.

### Betting Cycle
When the round begins, the initial bet requirement is set to the **Minimum Bet**:
- **Call**: Matches the current required bet (`callAmount = currentBet - player.currentRoundContribution`). If chips are fewer than the required call, the player goes **All-In**.
- **Check**: Free pass when the player has already matched the required bet.
- **Raise**: Increases the round bet (minimum raise is `currentBet + minimumBet`). Supports quick multipliers: `Min`, `2x`, `3x`, `Pot`, `All-In`.
- **Fold**: Concedes the round. A safety confirmation modal prevents accidental taps. Folded players become inactive, their chips remain in the pot, and they cannot claim the pot.
- **All-In**: Pushes all remaining chips into the pot.

### Showdown & Win Conditions
1. **Uncontested Win**: If all opponents fold, the sole surviving player automatically claims the pot immediately.
2. **Physical Hand Showdown (2+ players remain)**: When all active bets match, the table enters Showdown. Players reveal their physical cards at the table. The table host selects which player won the hand (or splits the pot evenly), instantly awarding the chips.
3. **Continuous Play**: Chip balances carry over, broke players are eliminated, and the host or auto-countdown initiates the next round.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom casino felt radial gradients & glassmorphism
- **Real-Time Client**: Socket.IO Client with typed event signatures & auto-reconnect
- **Audio Engine**: Pure Web Audio API synthesizer (chip clinks, card whooshes, fanfare — zero external audio files)
- **Celebration Effects**: Canvas Confetti multi-burst animations
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js 20+ & Express
- **Real-Time Server**: Socket.IO with authoritative in-memory room state manager
- **Database & ORM**: Prisma ORM (SQLite for zero-config local runs, seamless PostgreSQL support)
- **Validation**: Strict server-authoritative action validators & sliding rate limiters
- **Execution & Transpilation**: TypeScript & tsx

---

## 🚀 Quick Start (Local Setup)

### 1. Clone & Install
```bash
git clone https://github.com/parthmwon/h5-sattebaazii.git
cd h5-sattebaazii

# Install root, server, and client dependencies
npm run install:all
```

### 2. Configure Database
The server is pre-configured with SQLite for instant zero-dependency execution.
```bash
cd server
npx prisma db push
cd ..
```

### 3. Run Development Servers
In two separate terminals:

```bash
# Terminal 1: Backend Server (Port 3001)
npm run dev:server

# Terminal 2: Frontend Client (Port 5173)
npm run dev:client
```

Open your browser at [http://localhost:5173](http://localhost:5173).

---

## 🧪 Testing Multiplayer Locally

To test multiplayer in action with 3 distinct players:

1. **Host Tab**: Open [http://localhost:5173](http://localhost:5173) in your normal browser tab.
   - Click **Create Table**.
   - Enter name: `Alex (Host)`, Minimum Bet: `25`.
   - Copy the generated Room Code (e.g. `H5-7X92`).
2. **Player 2 Tab**: Open an **Incognito / Private** window at [http://localhost:5173](http://localhost:5173).
   - Click **Join with Code**.
   - Enter name: `Bob` and the Room Code.
3. **Player 3 Tab**: Open a second private window or another browser (Edge / Firefox / Brave).
   - Click **Join with Code**.
   - Enter name: `Charlie` and the Room Code.
4. On the **Host Tab**, click **Start Game Round #1**:
   - Everyone sees their 500 chips.
   - Turn rotates clockwise; players call, raise, and fold.
   - If a contested showdown occurs, the host awards the pot to whichever player had the winning hand in real life!

### Running Automated Test Suite
To run the automated tests (GameEngine test suite + 3-player socket simulation):
```bash
npm --prefix server test
```

---

## 🚢 Deployment Guide

### Backend (Render, Railway, or Fly.io)
1. Set the working directory to `server/`.
2. Build command: `npm run build && npx prisma db push`
3. Start command: `npm start`
4. Set environment variables:
   - `PORT`: `3001`
   - `NODE_ENV`: `production`
   - `CLIENT_URL`: `https://your-frontend-domain.com`
   - `DATABASE_URL`: `"file:./dev.db"` (or PostgreSQL connection string)

### Frontend (Vercel, Netlify, Cloudflare Pages)
1. Set the root directory to `client/`.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set environment variables:
   - `VITE_SERVER_URL`: `https://your-backend-domain.com`

---

## 📄 License
MIT License. Free to use for your card nights, portfolio showcase, or personal learning!
