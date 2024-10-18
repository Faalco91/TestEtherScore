import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/homePage/homePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomePage />
      </main>

    </div>
  );
}
