import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"; // 👈 Replace with actual deployed address
  const seasonYear = 2025;
  const seasonType = "physical";

  const recipients = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
    "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
  ];

  const playerNames = [
    "Jason A Kruk",
    "Angela Coster",
    "Craig Recchia",
    "Keith Listermann",
    "JD Olmstead",
    "Daniel A Zabinski",
    "Mark Cooney",
    "Paul Braden",
    "Jason Ertz",
    "Todd Mares"
  ];

  const tokenURIs = [
    "ipfs://bafkreiahol4fimtdlpyjw5qaqlblna25ap24gazf4pbhll4gtya5w3kpz4",  // Jason
    "ipfs://bafkreifujzbocpvwu7ls4vjbzcx5yube6wldufyromigcpmvzhovow5b5m",  // Angela
    "ipfs://bafkreignz2iqvu4srzvrbj2423wx2hmgffajcbhfnjzkyblmoju3dv46re",  // Craig
    "ipfs://bafkreic3bkdbn3hgugcfbdmoaubwuv2resyxhug7yeemojvpltu7kya6na",  // Keith
    "ipfs://bafkreiaglgwhrolotd7q27ouks4dmfbiyyhsfmvnexxvwkdd2q6tjidjrq",  // JD
    "ipfs://bafkreie5xfus6llgbpvwd42immkfhucioceixzreaj63evcvlfgvvharka",  // DZabinski
    "ipfs://bafkreiefh6rhmmp33vgf6z4wvh5fhmv4tiliy5aoxn6r2lxesljqliqwsa",  // Mark
    "ipfs://bafkreibpwgcjesazkosuhhlbq2u5bvxejd2erxf5vnuwm7gxpwfynh3tyi",  // Paul
    "ipfs://bafkreiadkdequr4fa2h4lpmmg4kor5rhrlxugoyanakf7tylkfje2ehfly",  // Ertz
    "ipfs://bafkreiharru7clbq5alxo5lk5zatk2qqha6vkggxpi63rxcninvpmjuocy"   // Todd
  ];

  const seasonalContract = await ethers.getContractAt("SeasonalNFT", contractAddress);

  for (let i = 0; i < recipients.length; i++){

    const recipient = recipients[i];
    const playerName = playerNames[i];
    const tokenURI = tokenURIs[i];

  console.log(`🚀 Minting NFT for ${playerName} to ${recipient}...`);

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


}

main().catch((error) => {
  console.error("❌ Minting failed:", error);
  process.exitCode = 1;
});