import { ethers } from "hardhat";
import dotenv from "dotenv";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import hre from "hardhat";

dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("🚀 Deploying AchievementNFT with address:", deployer.address);

  const AchievementNFT = await ethers.getContractFactory("AchievementNFT");
  const contract = await AchievementNFT.deploy(deployer.address);

  console.log("✅ AchievementNFT deployed to:", contract.target);
  console.log("📍 Network:", hre.network.name);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});