import SignClient from '@walletconnect/sign-client';

let client: SignClient | null = null;

export const initWalletConnect = async () => {
  client = await SignClient.init({
    projectId: 'YOUR_PROJECT_ID', // Replace with your WalletConnect Cloud project ID
    relayUrl: 'wss://relay.walletconnect.com',
    metadata: {
      name: 'IGLMobileApp',
      description: 'Imperial Golf League Wallet',
      url: 'https://imperialgolfleague.com',
      icons: ['https://yourdomain.com/icon.png'],
    },
  });
};

export const getClient = () => client;