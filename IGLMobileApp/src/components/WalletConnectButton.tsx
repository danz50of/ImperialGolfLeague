import React, { useContext } from 'react';
import { Button } from 'react-native';
import { WalletConnectContext } from './WalletConnectProvider';

export const WalletConnectButton = () => {
  const { client } = useContext(WalletConnectContext);

  const handleConnect = async () => {
    const uri = 'wc:...'; // Replace with actual URI from dapp or pairing
    await client.pair({ uri });
  };

  return <Button title="Connect Wallet" onPress={handleConnect} />;
};