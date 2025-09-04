import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xffD4b59197582b439265e9C29828df74ae735346";
  const recipient = "0xE2DC81182eEb74e5472d8244cc9b8cDD4e2a78bE";
  const tokenURI = "ipfs://QmSWRXi4aoSiZLb9z923x2WchCnvBYhcyDw52tC1KQ9hp6/2025ChampionMetaData.json";

  const trophyContract = await ethers.getContractAt("AchievementNFT", contractAddress);

  const tx = await trophyContract.mintAchievement(
    recipient,
    tokenURI,
    {
      gasLimit: 250000,
      maxPriorityFeePerGas: ethers.parseUnits("33", "gwei"),
      maxFeePerGas: ethers.parseUnits("33", "gwei")
    }
  );

  const receipt = await tx.wait();

  console.log(`✅ Trophy minted to ${recipient}`);
  console.log(`🧾 Transaction hash: ${receipt.hash}`);
  console.log(`📥 Receipt status: ${receipt.status}`);

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