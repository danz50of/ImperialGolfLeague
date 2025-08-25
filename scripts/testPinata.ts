import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

async function testPinataAuth() {
  try {
    const response = await axios.get('https://api.pinata.cloud/data/testAuthentication', {
      headers: {
        'pinata_api_key': process.env.PINATA_API_KEY!,
        'pinata_secret_api_key': process.env.PINATA_SECRET_API_KEY!
      }
    });

    console.log('✅ Authentication successful');
    console.log('👤 Authenticated as:', response.data?.pinataUserInfo?.email);
  } catch (err: any) {
    console.error('❌ Authentication failed:', err.message);
    console.error(err.response?.data || err.stack);
  }
}

testPinataAuth();