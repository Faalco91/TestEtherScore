'use client'
import React, { useState } from 'react';
import { useWallet } from '../contexts/walletContext';
import styles from './walletConnect.module.css'
import WalletModal from '../walletModal/walletModal';
import { useTranslation } from 'react-i18next';

const WalletConnection = () => {

  const { t } = useTranslation();

  const {walletAddress, handleConnectWallet} = useWallet();

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
          <a className={styles.btnConnect} onClick={handleOpenModal}>{t('cta2')}</a>
          {isModalOpen && <WalletModal isOpen={isModalOpen} onClose={handleCloseModal} />}
        </div>
      ) : (
        <div>
          <a className={styles.btnConnect} onClick={handleConnectWallet}>
          {t('cta1')}
          </a>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;
