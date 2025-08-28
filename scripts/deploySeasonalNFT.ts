import { ethers } from "hardhat";
import dotenv from "dotenv";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import hre from "hardhat";

dotenv.config();

async function main() {
  
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying SeasonalNFT with address:", deployer.address);
  
  const SeasonalNFT = await ethers.getContractFactory("SeasonalNFT");
  const seasonalContract = await SeasonalNFT.deploy(deployer.address);

  console.log("✅ seasonalNFT deployed to:", seasonalContract.target);
  console.log("📍 Network:", hre.network.name);

  const owner = await seasonalContract.owner();
  console.log(`👑 Contract owner: ${owner}`);

  const currentId = await seasonalContract.currentTokenId();
  console.log(`📦 Current token ID: ${currentId.toString()}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});