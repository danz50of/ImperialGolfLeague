import React, { createContext, useEffect, useState } from 'react';
import { initWalletConnect, getClient } from '../wallet/wallet';

export const WalletConnectContext = createContext<any>(null);

export const WalletConnectProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    initWalletConnect().then(setClient);
  }, []);

  return (
    <WalletConnectContext.Provider value={{ client }}>
      {children}
    </WalletConnectContext.Provider>
  );
};