// Importation de la bibliothèque Axios
import axios from 'axios';

// Définition de la fonction fetchMoto
function Inscription(utilisateur) {
  // Envoi d'une requête HTTP GET à l'URL spécifiée
  // et retour de la promesse renvoyée par axios.get
return axios.post("http://127.0.0.1:3030/Utilisateurs", utilisateur,{
    headers: {
        'Content-Type': 'application/json'
    }
});
}

// Exportation de la fonction fetchMoto en tant que membre
// d'un objet par défaut
export default {
  Inscription
};
