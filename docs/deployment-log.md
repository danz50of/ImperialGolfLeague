# 🧱 Contract Deployment Log – Imperial Golf League

This log tracks all deployed smart contracts across environments, including addresses, timestamps, and notes.

---

## 🌐 Network: Localhost (Hardhat DEV)
**Deployment Date:** August 28, 2025  
**Deployer Address:** `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

### ✅ SeasonalNFT
- **Contract Name:** `SeasonalNFT`
- **Address:** `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`
- **Constructor Args:** `"ImperialGolfSeason", "IGS"`, `initialOwner = deployer`
- **Notes:** Includes `mintSeasonNFT`, `batchMintSeasonNFT`, and `getSeasonInfo`. Panic code resolved with safe `currentTokenId()` logic.

### ✅ AchievementNFT
- **Contract Name:** `AchievementNFT`
- **Address:** `[ADD ONCE DEPLOYED]`
- **Constructor Args:** `[ADD IF APPLICABLE]`
- **Notes:** Used for minting championship trophy NFTs. Metadata pinned and verified.

---

## 🌐 Network: Amoy (Polygon Testnet)
**Deployment Date:** 8-29-2025  
**Deployer Address:** 0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE

### ⏳ SeasonalNFT
- **Contract Name:** SeasonalNFT
- **Address:** 0x62021953D6b235Cf4b527a7Ea5172ea608536De2
- **Notes:** `[TO BE FILLED]`

### ⏳ AchievementNFT
- **Contract Name:** AchievementNFT
- **Address:** 0x5934b27939715a8eF6dc400f4c15E330d7dF7438
- **Constructor Args:** `[TO BE FILLED]`
- **Notes:** `[TO BE FILLED]`

---

## 🧠 Deployment Tips
- Always confirm constructor args match contract expectations
- Log token IDs and metadata URIs in `season-log.md`
- Tag each deployment in Git with semantic versioning (e.g. `v2025-dev-cycle-1`)