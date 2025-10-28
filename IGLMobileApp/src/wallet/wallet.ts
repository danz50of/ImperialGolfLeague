import SignClient from '@walletconnect/sign-client';

let client: SignClient | null = null;

export async function initWalletConnect() {
  if (client) return client;

  client = await SignClient.init({
    projectId: 'YOUR_PROJECT_ID', // Replace with your WalletConnect Cloud project ID
    metadata: {
      name: 'Imperial Golf League',
      description: 'IGL Mobile Wallet',
      url: 'https://imperialgolfleague.com',
      icons: ['https://yourdomain.com/icon.png'],
    },
  });

  client.on('session_proposal', (proposal) => {
    console.log('🔗 Session proposal received:', proposal);
    // You’ll need to handle approval manually
  });

  client.on('session_created', (session) => {
    console.log('✅ Session created:', session);
  });

  client.on('session_delete', (session) => {
    console.log('❌ Session deleted:', session);
  });

  return client;
}

export function getClient() {
  return client;
}
