import { create } from '@web3-storage/w3up-client';
import { File } from 'web3.storage';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Buffer } from 'buffer';

dotenv.config();

async function testUpload() {
  const client = await create();
  console.log('🔑 Agent DID:', client.agent.did());

  const spaceDID = process.env.SPACE_DID as `did:key:${string}`;
  const proofBase64 = process.env.DELEGATION_PROOF!;
  const proofBytes = Buffer.from(proofBase64, 'base64');

  await client.addProof(proofBytes as any);
  await client.setCurrentSpace(spaceDID);

  // ✅ Load file from disk
  const filePath = path.resolve('test.txt');
  const fileData = fs.readFileSync(filePath);
  const file = new File([fileData], 'test.txt', { type: 'text/plain' });

  try {
    const cid = await client.uploadFile(file);
    console.log('✅ Upload successful. CID:', cid);
    console.log(`🔗 ipfs://${cid}/test.txt`);
  } catch (err: any) {
    console.error('❌ Upload failed:', err.message);
    console.error(err.stack);
  }
}

testUpload().catch((err) => {
  console.error('❌ Script error:', err.message);
});