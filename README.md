EtherScore

Description

EtherScore is a mini website designed to display the ETH balance of the user's cryptocurrency wallet. This project was created as part of a technical assessment for the position of Frontend Developer (Web3). The application allows users to easily connect to their wallet via the Metamask extension and offers a customizable experience with support for multiple languages and a dark mode.

Table of Contents

Features
Technologies Used
Installation
Features

Connect via Metamask: Users can connect to their cryptocurrency wallet using the Metamask extension.
Display ETH Balance: Once connected, the ETH balance of the wallet is displayed on the interface.
Interface Customization:
Language change for better accessibility.
Dark mode for an improved visual experience.
Logout: A logout button is available once the user is connected.
Recent Transactions (optional): Display the last 10 transactions with relevant details such as status, date, sender, and recipient, along with a link to Etherscan.
Technologies Used

Frontend: React.js
Blockchain Library: ethers.js
Translation: i18next
UI Components: NextUI
Styling: TailwindCSS
Installation

To install EtherScore, follow the steps below:

Clone the repository:
bash
Copier le code
git clone https://github.com/username/etherscore.git
Install the dependencies:
bash
Copier le code
npm install
Start the project:
bash
Copier le code
npm run dev
Open http://localhost:3000 with your browser to see the result.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

