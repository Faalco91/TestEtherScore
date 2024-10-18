//Importation de ethers.js afin d'intéragir avec Ethereum une fois connecté à MetaMask
import { ethers } from 'ethers';

//Cette fonction asynchrone va permettre à un utilisateur de se connecter à Metamask puis de récupérer l'adresse du portefeuille
export const metamaskConnect = async () => {
    try {
      //Cette condition vérifie si Metamask est disponible en tant qu'extension dans le navigateur via la présence de window.ethereum
      if (typeof window.ethereum !== 'undefined') {
  
        const provider = new ethers.BrowserProvider(window.ethereum); //Création d'un nouveau "provider" ethers.js qui a pour rôle de servire de pont afin de communiquer entre l'application et la blockchain Ethereum via MetaMask
        await provider.send("eth_requestAccounts", []); // Demande à MetaMask d'afficher une interface pour se connecter au compte utilisateur

        const signer = await provider.getSigner(); //Récupère l'utilisateur qui contrôle les transactions depuis MetaMask
        const userAddress = await signer.getAddress(); //Récupère l'adresse du wallet
        
        return userAddress; // Permet de retourner l'adresse du portefeuille une fois connecté à Metamask

      } else {
        console.error("MetaMask is not installed.");
      }
    } catch (err) { //Affiche les erreurs liées aux tentatives de connexion à MetaMask
        console.error("Connection failed:", err);
        return null;
    }
  };
  