# 🏌️‍♂️ Imperial Golf League Protocol

Welcome to the official documentation for the **Imperial Golf League Protocol**, a seasonal, tokenized golf ecosystem combining real-world play, mobile gameplay, NFT utility, and decentralized governance.

---

## 📦 Overview

The Imperial Golf League is a hybrid sports DAO that operates from **May to August** each year. Players can participate in real-world golf competitions or play via a mobile app to earn **AA-RON tokens**, unlock gameplay-enhancing NFTs, and vote on league rules through a governance system.

---

## 🧱 Smart Contract Architecture

### 1. ERC-721 Membership Contract

- **NFTs**:
  - `Membership NFT` → seasonal access
  - `Membership+ NFT` → includes governance rights
- **Traits**:
  - `season`, `tier`, `expiryDate`, `votingPower`
- **Features**:
  - Soulbound or transferable
  - Mintable via app or admin dashboard

---

### 2. ERC-20 AA-RON Token

- **Purpose**:
  - Earned through mobile golf gameplay
  - Used for purchasing NFTs, upgrades, or staking
- **Features**:
  - Mintable by backend/game engine
  - Burnable for perks or governance boosts
  - Optional: inflation schedule or seasonal resets

---

### 3. ERC-721 Utility NFT Contract

- **NFTs**:
  - `Mulligan NFT` → retry a shot
  - `Free Drop NFT` → avoid penalty
  - `Gimmie NFT` → auto-putt within range
- **Traits**:
  - `type`, `usesRemaining`, `rarity`, `season`
- **Mechanics**:
  - Consumable in gameplay
  - Tradable or burnable
  - Optional: seasonal exclusivity

---

### 4. Governance Contract

- **Voting Rights**:
  - Based on `Membership+ NFT` ownership
  - Optional: AA-RON staking boosts voting power
- **Proposal Lifecycle**:
  - `createProposal`, `vote`, `execute`
- **Topics**:
  - Rule changes, comp formats, entry fees
- **Seasonal Governance**:
  - Voting resets each season
  - Archived proposals stored for transparency

---

### 5. Season Manager Contract

- **Purpose**:
  - Tracks active season
  - Controls minting windows, rule sets, NFT availability
- **Features**:
  - `startSeason`, `endSeason`, `setRules`
  - Emits events for front-end sync
  - Optional: auto-rotate metadata or game logic

---

## 📱 Gameplay Integration

- **Play Golf → Earn AA-RON**
- **Spend AA-RON → Buy Utility NFTs or Upgrade Membership**
- **Hold Membership+ → Vote on League Rules**
- **Seasonal Reset**:
  - New NFTs, new rules, fresh governance votes

---

## 🛠️ Development Notes

- Initial trophy NFT minted via OpenSea’s shared SeaDrop contract (`0xFF33BF842fCCb0784370f04E8Def08506a6b2756`)
- Plan to migrate to a custom ERC-721 contract for full control
- Governance and token mechanics will be modular and extensible
- All metadata hosted via IPFS or Arweave for immutability
- Front-end will include:
  - Voting dashboard
  - AA-RON wallet
  - NFT marketplace
  - Seasonal leaderboard

---

## 🔮 Future Considerations

- DAO expansion with community proposals
- Multi-chain support (Polygon, Base, etc.)
- Dynamic NFT traits based on gameplay
- Real-world event integration and sponsorships

---

## 🧑‍💻 Contributors

- **Dan** — Systems Architect, Blockchain/Game Strategist  
- **Copilot** — AI Companion & Technical Collaborator

---

> This README is a living document. Updates will reflect new seasons, contract deployments, and governance decisions.