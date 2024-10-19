'use client'
import React, { useState } from 'react';
import { metamaskConnect } from '../metamaskConnect/metamaskConnect';
import styles from './walletConnect.module.css'

const WalletConnection = () => {

  const [walletAddress, setWalletAddress] = useState(null); //Utilisation de useState pour stocker l'adresse du portefeuille
  const handleConnectWallet = async () => {
    const address = await metamaskConnect(); // Appel à la fonction metamaskConnect pour se connecter à MetaMask
    if (address) {
      setWalletAddress(address); // Mise à jour de l'état avec l'adresse du portefeuille une fois connecté
    }
  };

  return (
    <div className={styles.connection}>
      {walletAddress ? (
        <div>
          <p>Vous êtes bien connecté au wallet {walletAddress}</p>
        </div>
      ) : (
        <button className={styles.btnConnect} onClick={handleConnectWallet}>
          Consultez votre wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnection;
