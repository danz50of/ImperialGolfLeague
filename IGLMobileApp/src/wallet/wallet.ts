import SignClient from '@walletconnect/sign-client';

let client: SignClient | null = null;

export async function initWalletConnect() {
  if (client) return client;

  client = await SignClient.init({
    projectId: 'YOUR_PROJECT_ID',
    metadata: {
      name: 'Imperial Golf League',
      description: 'IGL Mobile Wallet',
      url: 'https://imperialgolfleague.com',
      icons: ['https://yourdomain.com/icon.png'],
    },
  });

  return client;
}

export function getClient() {
  return client;
}