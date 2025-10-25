import { ethers } from "hardhat";
import dotenv from "dotenv";
import hre from "hardhat";

dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying SeasonalNFT with deployer:", deployer.address);

  const safeAddress = process.env.SAFE_ADDRESS;
  if (!safeAddress) {
    throw new Error("❌ SAFE_ADDRESS not set in .env");
  }

  const SeasonalNFT = await ethers.getContractFactory("SeasonalNFT");
  const seasonalContract = await SeasonalNFT.deploy(safeAddress);

  console.log("✅ SeasonalNFT deployed to:", seasonalContract.target);
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