import { create } from '@web3-storage/w3up-client';
import { File } from 'web3.storage';

async function testUpload() {
  const client = await create(); // This creates or loads the agent automatically

  // If you’ve already delegated access via CLI or console, this should work
  const file = new File(['Hello, Imperial Golf League!'], 'test.txt');
  const cid = await client.uploadFile(file);

  console.log('✅ Upload successful. CID:', cid);
  console.log(`🔗 IPFS URI: ipfs://${cid}/test.txt`);
}

testUpload().catch((err) => {
  console.error('❌ Upload failed:', err);
});