# 🧱 Contract Deployment Log – Imperial Golf League

This log tracks all deployed smart contracts across environments, including addresses, timestamps, and notes.

---

## 🌐 Network: Polygon Mainnet
**Deployment Date:** October 24, 2025  
**Deployer Address:** `0x60ddC96ffeE551949c5e0713113BF04D19b92C6f` (Rabby signer)  
**Safe Owner Address:** `0x6cbD6Dc6515d96af4a38789c65742Ce971F2912F`

### ✅ AchievementNFT
- **Contract Name:** `AchievementNFT`
- **Address:** `0x404F1fbCCe98aC168C786AceCc59b0fE9AbD7ba3`
- **Constructor Args:** `initialOwner = Safe wallet`
- **Verified:** ✅ [Polygonscan](https://polygonscan.com/address/0x404f1fbcce98ac168c786acecc59b0fe9abd7ba3#code)
- **Notes:** Used for minting championship trophy NFTs. Ownership assigned to Safe. Metadata URI prep in progress.

### ✅ SeasonalNFT
- **Contract Name:** `SeasonalNFT`
- **Address:** `0xDfa703a1C56D4833A4b7A71E43b208f466c7127C`
- **Constructor Args:** `initialOwner = Safe wallet`
- **Verified:** ✅ [Polygonscan](https://polygonscan.com/address/0xDfa703a1C56D4833A4b7A71E43b208f466c7127C#code)
- **Notes:** Includes `mintSeasonal`, `batchMintSeasonal`, and `getSeasonInfo`. Participation NFT minting next.

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
**Deployment Date:** August 29 – September 2, 2025  
**Deployer Address:** `0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE`

### ⏳ SeasonalNFT
- **Contract Name:** `SeasonalNFT`
- **Address:** `0x62021953D6b235Cf4b527a7Ea5172ea608536De2` (8/29/2025)  
- **Address:** `0x8b029AB9172AEF9bd75EcefC9000C0c4897eBA2b` (9/2/2025)
- **Notes:** Minted to test address on 9/2. Ownership and metadata flow under review.

### ⏳ AchievementNFT
- **Contract Name:** `AchievementNFT`
- **Address:** `0x5934b27939715a8eF6dc400f4c15E330d7dF7438` (8/29/2025)  
- **Address:** `0xffD4b59197582b439265e9C29828df74ae735346` (9/2/2025)
- **Constructor Args:** `[TO BE FILLED]`
- **Notes:** `[TO BE FILLED]`

---

## 🧠 Deployment Tips
- Always confirm constructor args match contract expectations
- Log token IDs and metadata URIs in `season-log.md`
- Tag each deployment in Git with semantic versioning (e.g. `v2025-dev-cycle-1`)