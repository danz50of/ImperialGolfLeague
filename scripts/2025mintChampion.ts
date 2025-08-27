import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const recipient = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
  const tokenURI = "ipfs://QmSWRXi4aoSiZLb9z923x2WchCnvBYhcyDw52tC1KQ9hp6/2025ChampionMetaData.json";

  const trophyContract = await ethers.getContractAt("AchievementNFT", contractAddress);

  const tx = await trophyContract.mintAchievement(recipient, tokenURI);
  const receipt = await tx.wait();

  console.log(`✅ Trophy minted to ${recipient}`);
  console.log(`🧾 Transaction hash: ${receipt.hash}`);
  console.log(`📥 Receipt status: ${receipt.status}`);

  // Assuming tokenId is incremented internally and starts at 0
  // Query balance and infer tokenId
  const balance = await trophyContract.balanceOf(recipient);
  const tokenId = await trophyContract.currentTokenId();

  console.log(`✅ Minted token ID (inferred): ${tokenId}`);

  const owner = await trophyContract.ownerOf(tokenId);
  console.log(`🎯 Owner of token ${tokenId}: ${owner}`);
}

main().catch((error) => {
  console.error("❌ Minting failed:", error);
  process.exitCode = 1;
});