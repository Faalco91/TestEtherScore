'use client'
/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import React from "react";
import { useWallet } from "../contexts/walletContext";
import Switcher from "../themeSwitcher/themeSwitcher";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../languageSwitcher/languageSwitcher";

export default function Header() {

    const { t } = useTranslation();
    const { handleConnectWallet, handleDisconnectWallet, walletAddress } = useWallet(); 
    
    return (
        <section className={styles.headerSection}>
            <div className={styles.logo}>
                <a><img width="60" height="60" src="https://img.icons8.com/nolan/64/metamask-logo.png" alt="metamask-logo"/></a>
            </div>
            <nav className={styles.navBar}>
            </nav>
            <div className={styles.navBarOptions}>
                <div className={styles.connectBtn}>
                    {walletAddress ? (
                        <a onClick={handleDisconnectWallet}>{t('disconnection')}</a>

                    ):(
                        <a onClick={handleConnectWallet}>{t('connection')}</a>
                    )}
                </div>
                <div>
                    <Switcher />
                </div>
                <div className={styles.languageBtn}>
                    <LanguageChanger />
                </div>

            </div>
        </section>
    )
}