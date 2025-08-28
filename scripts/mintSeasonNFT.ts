import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
  const contractAddress = "0xYourDeployedContractAddress"; // Replace with actual address
  const recipient = "0xRecipientWalletAddress";            // Replace with target wallet
  const tokenURI = "ipfs://QmYourCID/2025SeasonMeta.json"; // Replace with actual IPFS URI

  const seasonYear = 2025;
  const seasonType = "physical";
  const playerName = "Dan Zabinski";

  const seasonalContract = await ethers.getContractAt("SeasonalNFT", contractAddress);

  const tx = await seasonalContract.mintSeasonNFT(
    recipient,
    tokenURI,
    seasonYear,
    seasonType,
    playerName
  );

  const receipt = await tx.wait();

  console.log(`✅ Minted Season NFT to ${recipient}`);
  console.log(`🧾 Transaction hash: ${receipt.hash}`);
  console.log(`📥 Receipt status: ${receipt.status}`);

  const tokenId = await seasonalContract.currentTokenId();
  console.log(`🏷️ Token ID: ${tokenId.toString()}`);

  const seasonInfo = await seasonalContract.getSeasonInfo(tokenId);
  console.log(`📅 Season Year: ${seasonInfo.seasonYear}`);
  console.log(`🎮 Season Type: ${seasonInfo.seasonType}`);
  console.log(`🧑 Player Name: ${seasonInfo.playerName}`);
}

main().catch((error) => {
  console.error("❌ Minting failed:", error);
  process.exitCode = 1;
});