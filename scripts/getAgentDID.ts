import { create } from '@web3-storage/w3up-client';

async function showAgentDID() {
  const client = await create();
  console.log('Agent DID:', client.agent.did());
}

showAgentDID();