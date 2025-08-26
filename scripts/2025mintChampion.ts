import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xd0B87C0B2CF9509ef09e73654D6E2F250B90b03c";
  const recipient = "0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE"; // ✅ DZ Polygon Test
  const tokenURI = "ipfs://QmSWRXi4aoSiZLb9z923x2WchCnvBYhcyDw52tC1KQ9hp6/2025ChampionMetaData.json";

  const trophyContract = await ethers.getContractAt("AchievementNFT", contractAddress);
  const tx = await trophyContract.mintAchievement(recipient, tokenURI);
  const receipt = await tx.wait();

  console.log(`✅ Trophy minted to ${recipient}`);
  console.log(`🧾 Transaction hash: ${receipt.transactionHash}`);
}

main().catch((error) => {
  console.error("❌ Minting failed:", error.message);
  process.exitCode = 1;
});