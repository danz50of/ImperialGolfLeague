const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("🚀 Deploying AchievementNFT with address:", deployer.address);

  const AchievementNFT = await hre.ethers.getContractFactory("AchievementNFT");
  const contract = await AchievementNFT.deploy(deployer.address);

  await contract.deployed();

  console.log("✅ AchievementNFT deployed to:", contract.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exit(1);
});