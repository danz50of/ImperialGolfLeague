import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const folderPath = './assets/2025Champion'; // 👈 Update this path as needed

async function uploadFolderToPinata(folderPath: string) {
  const resolvedFolderPath = path.resolve(folderPath);
  const form = new FormData();

  const files = fs.readdirSync(resolvedFolderPath);
  for (const file of files) {
    const filePath = path.join(resolvedFolderPath, file);
    const fileStream = fs.createReadStream(filePath);

    // 👇 This preserves folder structure in IPFS
    form.append('file', fileStream, {
      filepath: `2025Champion/${file}`, // 👈 Folder name inside IPFS
    });
  }

  try {
    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', form, {
      maxBodyLength: Infinity,
      headers: {
        ...form.getHeaders(),
        pinata_api_key: process.env.PINATA_API_KEY!,
        pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY!,
      },
    });

    const cid = response.data.IpfsHash;
    console.log('✅ Folder upload successful');
    console.log('🆔 Root CID:', cid);
    console.log(`🔗 Metadata URI: ipfs://${cid}/2025Champion/metadata.json`);
    console.log(`🖼️ Image URI: ipfs://${cid}/2025Champion/trophy.png`);
  } catch (err: any) {
    console.error('❌ Upload failed:', err.message);
    console.error(err.response?.data || err.stack);
  }
}

uploadFolderToPinata(folderPath).catch((err) => {
  console.error('❌ Script error:', err.message);
});