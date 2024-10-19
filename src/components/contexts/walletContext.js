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

  const handleDisconnectWallet = () => {
    setWalletAddress(null);
  };  

  return (
    <WalletContext.Provider value={{ walletAddress, handleConnectWallet, handleDisconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
