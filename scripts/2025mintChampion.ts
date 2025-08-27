import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import hre from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";     //DEV Address (Will change)
//  const contractAddress = "0xd0B87C0B2CF9509ef09e73654D6E2F250B90b03c"; // AMOY Address
//  const recipient = "0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE"; // ✅ DZ Polygon Test
  const recipient = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";  //  Account 17 in Local 8/26/2025
  const tokenURI = "ipfs://QmSWRXi4aoSiZLb9z923x2WchCnvBYhcyDw52tC1KQ9hp6/2025ChampionMetaData.json";

  const trophyContract = await ethers.getContractAt("AchievementNFT", contractAddress);
  const tx = await trophyContract.mintAchievement(recipient, tokenURI);
  const receipt = await tx.wait();

  console.log(`✅ Trophy minted to ${recipient}`);
  console.log(`🧾 Transaction hash: ${receipt.hash}`);
  console.log(`📥 Receipt status: ${receipt.status}`);
  console.log("🧾 Full receipt:", receipt);
}

main().catch((error) => {
  console.error("❌ Minting failed:", error.message);
  process.exitCode = 1;
});//testing