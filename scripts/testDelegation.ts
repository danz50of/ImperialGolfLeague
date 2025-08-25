import { create } from '@web3-storage/w3up-client';
import { Delegation } from '@web3-storage/access';
import dotenv from 'dotenv';
dotenv.config();

async function inspectDelegation() {
  const client = await create();

  const agentDID = client.agent.did();
  console.log('🔍 Agent DID:', agentDID);

  const spaceDID = process.env.SPACE_DID!;
  console.log('🔍 Target Space DID:', spaceDID);

  const base64 = process.env.DELEGATION_PROOF!;
  const bytes = Buffer.from(base64, 'base64');

  // ✅ Extract the delegation from bytes
  const extracted = await Delegation.extract(bytes);

  if (!extracted.ok) {
    console.error('❌ Delegation extraction failed:', extracted.error);
    return;
  }

  const delegation = extracted.ok;
  console.log('✅ Delegation extracted.');
  console.log('🔐 Delegation audience DID:', delegation.audience.did());
  console.log('🔐 Delegation issuer DID:', delegation.issuer.did());

  // ✅ Add the delegation to your agent
  await client.addProof(delegation);
  console.log('✅ Delegation proof added successfully.');
}

inspectDelegation().catch(console.error);