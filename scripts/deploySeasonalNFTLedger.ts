import { ethers } from "hardhat";
import { LedgerSigner } from "@ethersproject/hardware-wallets";

async function main() {
  const provider = ethers.provider;
  const ledger = new LedgerSigner(provider);

  const deployerAddress = await ledger.getAddress();
  console.log("🚀 Deploying SeasonalNFT with address:", deployerAddress);

  const SeasonalNFTFactory = await ethers.getContractFactory("SeasonalNFT");
  const bytecode = SeasonalNFTFactory.bytecode;
  const abi = SeasonalNFTFactory.interface;

  const constructorArgs = abi.encodeDeploy([deployerAddress]);
  const txData = bytecode + constructorArgs.slice(2); // remove '0x' from encoded args

  const gasEstimate = await provider.estimateGas({
    from: deployerAddress,
    data: txData,
  });

  const tx = {
    from: deployerAddress,
    data: txData,
    gasLimit: gasEstimate,
    chainId: 137,
  };

  const sentTx = await ledger.sendTransaction(tx);
  console.log("📦 Transaction sent:", sentTx.hash);

  const receipt = await provider.waitForTransaction(sentTx.hash);
  console.log("✅ Contract deployed at:", receipt.contractAddress);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});