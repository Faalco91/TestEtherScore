'use client'

import React, { createContext, useContext, useState } from 'react';
import { metamaskConnect } from '../metamaskConnect/metamaskConnect';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWallerBalance] = useState(null);

  const handleConnectWallet = async () => {
    const [address, balance] = await metamaskConnect();
    if (address) {
      setWalletAddress(address);
      setWallerBalance(balance);
    }
  };

    // Fonction pour déconnecter le portefeuille
    const handleDisconnectWallet = () => {
      setWalletAddress(null); // Réinitialise l'adresse du portefeuille
      setWallerBalance(null);
    };
  

  return (
    <WalletContext.Provider value={{ walletAddress, walletBalance, handleConnectWallet, handleDisconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
