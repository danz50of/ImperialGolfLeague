import { create } from '@web3-storage/w3up-client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Blob } from 'buffer';

dotenv.config();

async function uploadCar(filePath: string) {
  //const { default: FetchBlob } = await import('fetch-blob'); // ✅ Dynamic ESM import
  //const { Blob } = await import('fetch-blob');
  const client = await create();
  console.log('🔑 Agent DID:', client.agent.did());

  const spaceDID = process.env.SPACE_DID as `did:key:${string}`;
  const proofBase64 = process.env.DELEGATION_PROOF!;
  const proofBytes = Buffer.from(proofBase64, 'base64');

  await client.addProof(proofBytes as any);
  await client.setCurrentSpace(spaceDID);

  const resolvedPath = path.resolve(filePath);
  const carBytes = fs.readFileSync(resolvedPath);

  //const carBlob = new FetchBlob([carBytes], { type: 'application/car' });
  
  
  //const carBlob = new Blob([carBytes], { type: 'application/car' });

  try {
    //const cid = await client.uploadCAR(carBlob);
    const cid = await client.uploadCAR(new Uint8Array(carBytes));
    console.log('✅ Upload successful');
    console.log('📦 File:', path.basename(filePath));
    console.log('🆔 CID:', cid);
    console.log(`🔗 ipfs://${cid}/${path.basename(filePath).replace('.car', '')}`);
  } catch (err: any) {
    console.error('❌ Upload failed:', err.message);
    console.error(err.stack);
  }
}

uploadCar(process.argv[2]).catch((err) => {
  console.error('❌ Script error:', err.message);
});