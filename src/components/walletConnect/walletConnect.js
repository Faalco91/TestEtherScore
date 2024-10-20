'use client'
import React, { useState } from 'react';
import { useWallet } from '../contexts/walletContext';
import styles from './walletConnect.module.css'

import WalletModal from '../walletModal/walletModal';

const WalletConnection = () => {

  const {walletAddress, walletBalance ,handleConnectWallet} = useWallet();

    // Crée un état pour gérer l'ouverture/fermeture de la modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour ouvrir la modal
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    // Fonction pour fermer la modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className={styles.connection}>
      {walletAddress ? (
        <div>
          <a className={styles.btnConnect} onClick={handleOpenModal}>Consulter mon Wallet</a>
          {isModalOpen && <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>
      ) : (
        <a className={styles.btnConnect} onClick={handleConnectWallet}>
          Me connecter à mon wallet
        </a>
      )}
    </div>
  );
};

export default WalletConnection;
