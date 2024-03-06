// Importation de la bibliothèque Axios
import axios from 'axios';

// Définition de la fonction de connexion
function Connexion(userData) {
  // Envoi d'une requête HTTP POST à l'URL spécifiée
  // avec les données utilisateur et retour de la promesse renvoyée par axios.post
  return axios.post("http://127.0.0.1:3030/Connexion", userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Exportation de la fonction de connexion
export default {Connexion};
