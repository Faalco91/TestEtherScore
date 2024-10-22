# Etherwallet - Etherscore Technical Test

## Description
Etherwallet is a mini website designed to display the ETH balance of the user's cryptocurrency portfolio and the last 10 transactions. This project was carried out as part of a technical evaluation for the position of Frontend Developer (Web3). The application allows users to easily connect to their wallet via the Metamask extension and offers a customizable experience with support for multiple languages and a dark mode.


## Table of contents
- Features](#features)
- [Technologies Used](#technologies-used)
- Installation

## Features
- Login via Metamask** : Users can connect to their cryptocurrency wallet using the Metamask extension.
- ETH balance display** : Once connected, the ETH balance of the wallet is displayed on the interface.
- Interface customisation** :
  - Language change for improved accessibility.
  - Dark mode for an enhanced visual experience.
- Logout**: A logout button is available once the user is logged in.
- Recent transactions** (optional): Display of the last 10 transactions with relevant details such as status, date, sender, and recipient, with a link to Etherscan.

## Technologies used
- Frontend**: React.js
- Blockchain library**: ethers.js
- Translation**: i18next
- UI components**: NextUI
- Stylization**: TailwindCSS

## Installation
To install EtherScore, follow the steps below:
1. Clone the :
   ``bash
   git clone https://github.com/username/etherscore.git
2. Install the dependencies:
   npm install
4. Run the project :
   npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimise and automatically load [Geist](https://vercel.com/font), a new font family for Vercel.
