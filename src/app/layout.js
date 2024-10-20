import localFont from "next/font/local";
import { NextUIProvider } from "@nextui-org/react";
import { WalletProvider } from "@/components/contexts/walletContext";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Etherwallet",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
        <NextUIProvider>
          <WalletProvider>
              {children}
          </WalletProvider>
        </NextUIProvider>
        </Providers>

      </body>
    </html>
  );
}
