'use client'

import React, { createContext, useContext, useState } from 'react';
import { metamaskConnect } from '../metamaskConnect/metamaskConnect';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  const handleConnectWallet = async () => {
    const address = await metamaskConnect();
    if (address) {
      setWalletAddress(address);
    }
  };

  return (
    <WalletContext.Provider value={{ walletAddress, handleConnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
