import { ethers } from 'ethers';

export const metamaskConnect = async () => {
    try {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const userAddress = await signer.getAddress();
            
            // Vérifie le réseau
            const network = await provider.getNetwork();
            console.log("Current Network ID:", network.chainId); // Log de l'ID de la chaîne
            
            if (Number(network.chainId) !== 11155111) {
                console.error("Please switch to the Sepolia testnet.");
                return null;
            }

            // Récupération du solde
            const balance = await provider.getBalance(userAddress); // Récupère le solde
            const balanceInEth = ethers.formatEther(balance); // Convertit le solde en Ether
            console.log("User Address:", userAddress);
            console.log("Balance in ETH:", balanceInEth); // Affiche le solde

            return [ userAddress, balanceInEth ]; // Retourne l'adresse et le solde

        } else {
            console.error("MetaMask is not installed.");
        }
    } catch (err) {
        console.error("Connection failed:", err);
        return null;
    }
};
