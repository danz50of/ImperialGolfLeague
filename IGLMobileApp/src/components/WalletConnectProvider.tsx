import React, { createContext, useEffect, useState } from 'react';
import { initWalletConnect, getClient } from '../wallet/wallet';
import SignClient from '@walletconnect/sign-client';

export const WalletConnectContext = createContext<SignClient | null>(null);

export const WalletConnectProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<SignClient | null>(null);

  useEffect(() => {
    const setup = async () => {
      await initWalletConnect();
      setClient(getClient());
    };
    setup();
  }, []);

  return (
    <WalletConnectContext.Provider value={client}>
      {children}
    </WalletConnectContext.Provider>
  );
};