import SignClient from '@walletconnect/sign-client';
import { TextDecoder, TextEncoder } from 'util';


if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

let client: SignClient | null = null;

export const initWalletConnect = async () => {
  client = await SignClient.init({
    projectId: 'IGLMobileApp', // Replace with your WalletConnect Cloud project ID
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