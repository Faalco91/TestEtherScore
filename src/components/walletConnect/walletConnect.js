'use client'
import React, { useState } from 'react';
import { useWallet } from '../contexts/walletContext';
import styles from './walletConnect.module.css'

const WalletConnection = () => {

  const {walletAddress, handleConnectWallet} = useWallet();

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
