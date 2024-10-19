import Image from "next/image"
import WalletConnection from "../walletConnect/walletConnect"
import styles from "./homePage.module.css"
import illu1 from '../../../public/images/etherwallet-img.webp'

export default function HomePage(){
    return (
        <section className={styles.mainSection}>
            <div className={styles.mainContainer}>
                <article>
                    <h1>Gérez votre Portefeuille Crypto</h1>
                    <p>Connectez-vous à MetaMask et prenez le contrôle de votre portefeuille Ethereum en toute simplicité. 
                        Suivez vos 10 dernières transactions, consultez votre solde, et prochainement, gérez vos actifs de manière sécurisée. 
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