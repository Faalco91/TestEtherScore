import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useWallet } from "../contexts/walletContext";
import styles from './walletModal.module.css'
import ethIcon from '../../../public/images/currency.png'

export default function WalletModal({ isOpen, onClose }) {

  const {walletAddress, walletBalance ,handleConnectWallet} = useWallet();

  return (
    <>
      {/* Modal avec backdrop "blur" */}
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}         classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}>
        <ModalContent style={{ maxWidth: '900px', width: '100%' }}>
          <>
            <ModalHeader className="flex flex-col gap-1 text-center"><h2>Adresse du Wallet : {walletAddress}</h2></ModalHeader>
            <ModalBody>
              {walletAddress ? (
                <div> 
                  <div className={styles.ethBalance}>
                    <p>{walletBalance} ETH.</p>
                    <div><Image src={ethIcon} width={70} alt='' /></div>
                  </div>
                </div>
              ): (
                <p>Erreur: Veuillez réessayer ulterieurement.</p>
              )}

              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
              </p>
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
