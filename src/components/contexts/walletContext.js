'use client'

import React, { createContext, useContext, useState } from 'react';
import { metamaskConnect } from '../metamaskConnect/metamaskConnect';
import { ethers } from 'ethers';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {

  const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;


  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [transactions, setTransactions] = useState([]); // État pour stocker les transactions


  const handleConnectWallet = async () => {
    const [address, balance, trs] = await metamaskConnect();
    if (address) {
      setWalletAddress(address);
      setWalletBalance(balance);
      setTransactions(trs); // Récupère les transactions après la connexion
    }
  };

  // Fonction pour récupérer les transactions
  const fetchTransactions = async (address) => {
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`);
      const data = await response.json();
      
      if (data && data.result) {
        // Limite aux 10 dernières transactions
        const recentTransactions = data.result.slice(0, 10);
        setTransactions(recentTransactions);
      } else {
        console.error('Failed to fetch transactions:', data);
      }
  };

  // Fonction pour déconnecter le portefeuille
  const handleDisconnectWallet = () => {
    setWalletAddress(null); // Réinitialise l'adresse du portefeuille
    setWalletBalance(null);
    setTransactions([]);
  };
  

  return (
    <WalletContext.Provider value={{ walletAddress, walletBalance, transactions, handleConnectWallet, handleDisconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
