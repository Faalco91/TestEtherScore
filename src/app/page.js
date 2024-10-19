import Image from "next/image";
import styles from "./page.module.css";

import HomePage from "@/components/homePage/homePage";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Header />
        <HomePage />
      </main>

    </div>
  );
}
