import { ethers } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();
  const contract = await ethers.getContractAt(
    "AchievementNFT",
    process.env.CONTRACT_ADDRESS,
    deployer
  );

  const recipient = process.env.CHAMPION_ADDRESS;
  const tokenURI = "ipfs://<CID-of-metadata>";

  const tx = await contract.mintAchievement(recipient, tokenURI);
  console.log("🏆 Trophy minted to:", recipient);
  console.log("🔗 Transaction hash:", tx.hash);
  await tx.wait();
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});