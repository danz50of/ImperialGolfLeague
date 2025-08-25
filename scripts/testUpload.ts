import { create } from '@web3-storage/w3up-client';
import dotenv from 'dotenv';
import fs from 'fs';
import { Buffer } from 'buffer';

dotenv.config();

async function uploadMetadataCAR() {
  const client = await create();
  console.log('🔑 Agent DID:', client.agent.did());

  const spaceDID = process.env.SPACE_DID as `did:key:${string}`;
  const proofBase64 = process.env.DELEGATION_PROOF!;
  const proofBytes = Buffer.from(proofBase64, 'base64');

  await client.addProof(proofBytes as any);
  await client.setCurrentSpace(spaceDID);

  const carBytes = fs.readFileSync('./assets/2025ChampionMetadata.car');

  try {
    const cid = await client.uploadCAR(carBytes);
    console.log('✅ Metadata uploaded. CID:', cid);
    console.log(`🔗 ipfs://${cid}/2025ChampionMetadata.json`);
  } catch (err: any) {
    console.error('❌ Upload failed:', err.message);
    console.error(err.stack);
  }
}

uploadMetadataCAR().catch((err) => {
  console.error('❌ Script error:', err.message);
});