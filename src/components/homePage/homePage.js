'use client'

import Image from "next/image"
import WalletConnection from "../walletConnect/walletConnect"
import styles from "./homePage.module.css"
import illu1 from '../../../public/images/etherwallet-img.webp'
import { useTranslation } from "react-i18next"

export default function HomePage(){

    const { t } = useTranslation();

    return (
        <section className={styles.mainSection}>
            <div className={styles.mainContainer}>
                <article>
                    <h1>{t('title')}</h1>
                    <p>
                        {t("intro")}
                    </p>
                    <WalletConnection />
                </article>

                <div className={styles.imageContainer}>
                    <Image src={illu1} alt="" />
                </div>
            </div>
        </section>

    )
}