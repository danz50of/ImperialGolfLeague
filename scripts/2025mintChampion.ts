import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x8a791620dd6260079bf849dc5567adc3f2fdc318";
  const recipient = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
  const tokenURI = "ipfs://QmSWRXi4aoSiZLb9z923x2WchCnvBYhcyDw52tC1KQ9hp6/2025ChampionMetaData.json";

  const tx = await trophyContract.mintAchievement(
    recipient,
    tokenURI,
    {
      gasLimit: 250000,
      maxPriorityFeePerGas: ethers.parseUnits("33", "gwei"),
      maxFeePerGas: ethers.parseUnits("33", "gwei")
    }
  );


  const tx = await trophyContract.mintAchievement(recipient, tokenURI);

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