import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

async function uploadToPinata(filePath: string) {
  const resolvedPath = path.resolve(filePath);
  const fileStream = fs.createReadStream(resolvedPath);
  const fileName = path.basename(filePath);

  const form = new FormData();
  form.append('file', fileStream, fileName); // ✅ Include filename explicitly

  try {
    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', form, {
      maxBodyLength: Infinity, // ✅ Prevents Axios from choking on large files
      headers: {
        ...form.getHeaders(), // ✅ Includes correct Content-Type with boundary
        pinata_api_key: process.env.PINATA_API_KEY!,
        pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY!
      }
    });

    const cid = response.data.IpfsHash;
    console.log('✅ Upload successful');
    console.log('🆔 CID:', cid);
    console.log(`🔗 ipfs://${cid}/${fileName}`);
  } catch (err: any) {
    console.error('❌ Upload failed:', err.message);
    console.error(err.response?.data || err.stack);
  }
}

uploadToPinata(process.argv[2]).catch((err) => {
  console.error('❌ Script error:', err.message);
});