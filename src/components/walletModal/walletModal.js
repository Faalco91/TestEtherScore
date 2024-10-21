import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useWallet } from "../contexts/walletContext";
import { useTranslation } from 'react-i18next';
import styles from './walletModal.module.css'
import ethIcon from '../../../public/images/currency.png'

export default function WalletModal({ isOpen, onClose }) {

  const { t } = useTranslation();

  const {walletAddress, walletBalance, transaction, handleConnectWallet} = useWallet();

  return (
    <>
      {/* Modal avec backdrop "blur" */}
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}         classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}>
        <ModalContent style={{ maxWidth: '700px', width: '100%' }}>
          <>
            <ModalHeader className="flex flex-col pb-0 gap-1 text-center">
              <div className={styles.modalHeader}><h2>{t("balance")}</h2></div>
            </ModalHeader>
            <ModalBody>
              {walletAddress ? (
                <div> 
                  <div className={styles.ethBalance}>
                    <p>{walletBalance} ETH</p>
                    <div><Image src={ethIcon} width={40} alt='' /></div>
                  </div>
                </div>
              ): (
                <p>{t("error1")}</p>
              )}

              <section className={styles.transactionSection}>
                <h3>{t("transaction")}</h3>
                {transaction && transaction.length > 0 ? (
                  <ul>
                    {transaction.map((transaction) => (
                      <li key={transaction.hash}>
                        <p>Hash: {transaction.hash}</p>
                        <p>Statut: {transaction.status}</p>
                        <p>Émetteur: {transaction.from}</p>
                        <p>Destinataire: {transaction.to}</p>
                        <p>Date: {new Date(transaction.timestamp * 1000).toLocaleString()}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{t("error2")}</p> // Message à afficher si aucune transaction
                )}
              </section>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
