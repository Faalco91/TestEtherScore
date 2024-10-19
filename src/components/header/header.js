'use client'
/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import React from "react";
import { useWallet } from "../contexts/walletContext";


export default function Header() {

    const { handleConnectWallet, handleDisconnectWallet, walletAddress } = useWallet(); 
    

    return (
        <section className={styles.headerSection}>
            <div className={styles.logo}>
                <a><img width="60" height="60" src="https://img.icons8.com/nolan/64/metamask-logo.png" alt="metamask-logo"/></a>
            </div>
            <div className={styles.navBarContainer}>
            <nav className={styles.navBar}>
                <ul>
                    <li><a>Accueil</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <div className={styles.navBarOptions}>
                <div className={styles.connectBtn}>
                    {walletAddress ? (
                        <a onClick={handleDisconnectWallet}>Déconnectez-vous</a>

                    ):(
                        <a onClick={handleConnectWallet}>Connectez-vous</a>
                    )}
                </div>
                <div className={styles.languageBtn}>
                    <btn>FR</btn>
                </div>
            </div>
            </div>
        </section>
    )
}