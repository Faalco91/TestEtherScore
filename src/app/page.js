import Image from "next/image";

import HomePage from "@/components/homePage/homePage";
import Header from "@/components/header/header";
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <HomePage />
      </main>

    </div>
  );
}
