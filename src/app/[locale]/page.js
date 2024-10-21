import Image from "next/image";

import HomePage from "@/components/homePage/homePage";
import Header from "@/components/header/header";
import 'tailwindcss/tailwind.css';
import TranslationsProvider from "@/components/TranslationsProvider";

import initTranslations from "../i18n";

const i18Namespaces = ['home'];


export default async function Home({ params: { locale } }) {
  const {resources} = await initTranslations( locale, i18Namespaces );

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18Namespaces}>
      <div>
        <main>
          <Header />
          <HomePage />
        </main>
      </div>
    </TranslationsProvider>
  );
}
