import React, { useContext } from 'react';
import { Button } from 'react-native';
import { WalletConnectContext } from './WalletConnectProvider';

const WalletConnectButton = () => {
  const client = useContext(WalletConnectContext);

  const handleConnect = async () => {
    if (!client) return;

    const { uri, approval } = await client.connect({
      requiredNamespaces: {
        eip155: {
          methods: ['eth_sendTransaction', 'personal_sign'],
          chains: ['eip155:1'],
          events: ['chainChanged', 'accountsChanged'],
        },
      },
    });

    console.log('Pairing URI:', uri);
    const session = await approval();
    console.log('Session approved:', session);
  };

  return <Button title="Connect Wallet" onPress={handleConnect} />;
};

export default WalletConnectButton;