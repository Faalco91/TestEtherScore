import Image from "next/image";
import styles from "./page.module.css";

import HomePage from "@/components/homePage/homePage";
import Header from "@/components/header/header";
import 'tailwindcss/tailwind.css' 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <HomePage />
      </main>

    </div>
  );
}
