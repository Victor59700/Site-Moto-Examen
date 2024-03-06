// Importation de la bibliothèque Axios
import axios from 'axios';

// Définition de la fonction fetchMoto
function fetchMoto() {
  // Envoi d'une requête HTTP GET à l'URL spécifiée
  // et retour de la promesse renvoyée par axios.get
  return axios.get("http://127.0.0.1:3030/Moto");
}

// Exportation de la fonction fetchMoto en tant que membre
// d'un objet par défaut
export default {
  fetchMoto
};
