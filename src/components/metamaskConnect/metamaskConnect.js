import { ethers } from 'ethers';

const ETHERSCAN_API_KEY = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY; // Remplace par ta clé d'API Etherscan



export const metamaskConnect = async () => {
    try {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();
            
            // Vérifie le réseau
            const network = await provider.getNetwork();
            console.log("Current Network ID:", network.chainId);
            
            if (Number(network.chainId) !== 11155111) {
                console.error("Please switch to the Sepolia testnet.");
                return null;
            }
            const balance = await provider.getBalance(userAddress); // Récupère le solde
            const balanceInEth = ethers.formatEther(balance); // Convertit le solde en Ether
            console.log("User Address:", userAddress);
            console.log("Balance in ETH:", balanceInEth); // Affiche le solde

            // Récupérer les 10 dernières transactions
            const transactions = await getRecentTransactions(userAddress);

            return [ userAddress, balanceInEth, transactions ]; // Retourne l'adresse et le solde

        } else {
            console.error("MetaMask is not installed.");
        }
    } catch (err) {
        console.error("Connection failed:", err);
        return null;
    }
};


const getRecentTransactions = async (address) => {
    try {
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`);
        const data = await response.json();
        
        if (data.status === '1') {
            
            // Retourne les 10 dernières transactions
            return data.result.slice(0, 10).map(tx => ({
                hash: tx.hash,
                from: tx.from,
                to: tx.to,
                value: ethers.formatEther(tx.value),
                timeStamp: new Date(tx.timeStamp * 1000).toLocaleString(),
                status: tx.isError === '0' ? 'Success' : 'Failed',
            }));
        } else {
            console.error("Error fetching transactions:", data.message);
            return [];
        }
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
    }
};
