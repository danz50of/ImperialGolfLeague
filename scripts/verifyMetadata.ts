import axios from 'axios';

const metadataMap = [
  { name: "Jason A Kruk", cid: "bafkreiahol4fimtdlpyjw5qaqlblna25ap24gazf4pbhll4gtya5w3kpz4" },
  { name: "Angela Coster", cid: "bafkreifujzbocpvwu7ls4vjbzcx5yube6wldufyromigcpmvzhovow5b5m" },
  { name: "Craig Recchia", cid: "bafkreignz2iqvu4srzvrbj2423wx2hmgffajcbhfnjzkyblmoju3dv46re" },
  { name: "Keith Listermann", cid: "bafkreic3bkdbn3hgugcfbdmoaubwuv2resyxhug7yeemojvpltu7kya6na" },
  { name: "JD Olmstead", cid: "bafkreiaglgwhrolotd7q27ouks4dmfbiyyhsfmvnexxvwkdd2q6tjidjrq" },
  { name: "Daniel A Zabinski", cid: "bafkreie5xfus6llgbpvwd42immkfhucioceixzreaj63evcvlfgvvharka" },
  { name: "Mark Cooney", cid: "bafkreiefh6rhmmp33vgf6z4wvh5fhmv4tiliy5aoxn6r2lxesljqliqwsa" },
  { name: "Paul Braden", cid: "bafkreibpwgcjesazkosuhhlbq2u5bvxejd2erxf5vnuwm7gxpwfynh3tyi" },
  { name: "Jason Ertz", cid: "bafkreiadkdequr4fa2h4lpmmg4kor5rhrlxugoyanakf7tylkfje2ehfly" },
  { name: "Todd Mares", cid: "bafkreiharru7clbq5alxo5lk5zatk2qqha6vkggxpi63rxcninvpmjuocy" }
];

async function verifyMetadata(name: string, cid: string) {
  const url = `https://blush-urgent-swordtail-261.mypinata.cloud/ipfs/${cid}`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(`✅ Verified metadata for ${name}`);
    console.log(`🧾 Name: ${data.name}`);
    console.log(`🖼️ Image: ${data.image}`);
    console.log(`📜 Attributes:`);

    data.attributes.forEach((attr: any) => {
      console.log(`   - ${attr.trait_type}: ${attr.value}`);
    });

    console.log("--------------------------------------------------");
  } catch (error: any) {
    console.error(`❌ Failed to fetch metadata for ${name}`);
    console.error(`CID: ${cid}`);
    console.error(error.message);
    console.log("--------------------------------------------------");
  }
}

async function main() {
  for (const entry of metadataMap) {
    await verifyMetadata(entry.name, entry.cid);
  }
}

main().catch((err) => {
  console.error("❌ Script error:", err.message);
});