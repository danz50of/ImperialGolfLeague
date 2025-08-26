import { ethers } from "hardhat";
import { expect } from "chai";

describe("AchievementNFT", function () {
  it("should mint a trophy NFT and verify metadata", async function () {
    const [owner, recipient] = await ethers.getSigners();

    const AchievementNFT = await ethers.getContractFactory("AchievementNFT");
    const contract = await AchievementNFT.deploy(owner.address);

    const mintTx = await contract.mintAchievement(
      recipient.address,
      "ipfs://QmPlaceholderHash/trophy_2025.json"
    );
    await mintTx.wait();

    const tokenId = 0;

    const uri = await contract.tokenURI(tokenId);
    expect(uri).to.equal("ipfs://QmPlaceholderHash/trophy_2025.json");

    const ownerOfToken = await contract.ownerOf(tokenId);
    expect(ownerOfToken).to.equal(recipient.address);
  });
});