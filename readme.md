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

## 🏆 Trophy Registry

All trophy assets are tracked via a Markdown + JSON registry. Each entry includes:

- Trophy name and season
- IPFS CID for image and metadata
- Minting status and token ID
- Chain reference (e.g., Polygon Amoy Testnet)

This registry supports DAO governance, seasonal storytelling, and legacy tracking.

---

## 📱 Gameplay Integration

- **Play Golf → Earn AA-RON**
- **Spend AA-RON → Buy Utility NFTs or Upgrade Membership**
- **Hold Membership+ → Vote on League Rules**
- **Seasonal Reset**:
  - New NFTs, new rules, fresh governance votes

---

## 🛠️ Development Notes

- Trophy NFTs are minted via custom ERC-721 contracts on **Polygon Amoy Testnet** (Chain ID: `80002`, Currency: `POL`)
- All metadata is hosted via **IPFS (Pinata)** for immutability and CID tracking
- Trophy minting flow is fully automated and tracked via registry
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
- Arweave support for archival redundancy

---

## 🧑‍💻 Contributors

- **Jason** — Visionary and Featureset PM  
- **Dan** — Systems Architect, Blockchain/Game Strategist  
- **Copilot** — AI Companion & Technical Collaborator

---

## 🗂️ Git Layout

- **dev** — Local testing, contract logic using Hardhat  
- **testnet** — QA, trophy minting, DAO simulation using Polygon Amoy  
- **main** — Production-ready deployments using Polygon PoS mainnet

> This README is a living document. Updates will reflect new seasons, contract deployments, and governance decisions.

---

## 🧪 Hardhat 3 Beta Project (`mocha` and `ethers`)

This project uses Hardhat 3 Beta for contract deployment and testing. All examples are adapted for Polygon Amoy compatibility and DAO simulation.

### Running Tests


## Scripts

- Start test node:  npx hardhat node
- Run deployScripts:  npx hardhat run scripts/deployContracts.ts --network localhost

#     *******  Prepare testnet  *******
##    *******  8-29-2025        *******
##    *******  AMOY Protocal    *******

### Scripts and their order of operations

- npx hardhat run scripts/deploySeasonalNFT.ts --network amoy
- npx hardhat run scritps/deployAchievementNFT.ts --network amoy

==============================
🚀 Verify Contract on Amoy
==============================

Command format:
npx hardhat verify --network amoy <contract_address> <constructor_args>

Example:
npx hardhat verify --network amoy 0x5934b27939715a8eF6dc400f4c15E330d7dF7438 "0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE"
