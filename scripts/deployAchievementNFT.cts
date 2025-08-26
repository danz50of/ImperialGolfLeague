import { ethers } from "hardhat";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("🚀 Deploying AchievementNFT with address:", deployer.address);

  const AchievementNFT = await ethers.getContractFactory("AchievementNFT");
  const contract = await AchievementNFT.deploy(deployer.address);

  await contract.deployed();

  console.log("✅ AchievementNFT deployed to:", contract.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});