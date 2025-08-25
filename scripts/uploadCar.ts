import { create } from '@web3-storage/w3up-client';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

dotenv.config();

// Helper to wrap a Buffer in a BlobLike-compatible object
function bufferToBlobLike(buffer: Buffer) {
  return {
    size: buffer.length,
    type: 'application/car',
    stream() {
      return Readable.from(buffer) as any as ReadableStream<Uint8Array>;
    }
  };
}

async function uploadCar(filePath: string) {
  const client = await create();
  console.log('🔑 Agent DID:', client.agent.did());

  const spaceDID = process.env.SPACE_DID as `did:key:${string}`;
  const proofBase64 = process.env.DELEGATION_PROOF!;
  const proofBytes = Buffer.from(proofBase64, 'base64');

  await client.addProof(proofBytes as any);
  await client.setCurrentSpace(spaceDID);

  const resolvedPath = path.resolve(filePath);
  const carBytes = fs.readFileSync(resolvedPath);
  const carBlob = bufferToBlobLike(carBytes);

  try {
    const cid = await client.uploadCAR(carBlob);
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