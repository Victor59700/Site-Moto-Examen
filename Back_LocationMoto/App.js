// Importation du module Express
const express = require('express');
// Création de l'application Express
const app = express();
// Définition du port sur lequel l'application va écouter
const port = 3030;
// Importation du module CORS pour gérer les requêtes cross-origin
const cors = require('cors');
// Importation du module MotoModules qui gère les routes liées aux motos
const Moto = require("./Modules/MotoModules");
const Utilisateurs = require("./Modules/UtilisateursModules");
const Connexion = require("./Modules/ConnexionModule");
// Middleware pour gérer les requêtes avec des données JSON
app.use(express.json());
// Middleware pour permettre les requêtes cross-origin
app.use(cors());

// Route principale, renvoie un message de bienvenue
app.get('/', (req, res) => {
    res.send('Welcome home');
});

// Utilisation du module MotoModules pour les routes liées aux motos
app.use("/Moto", Moto);
app.use("/Utilisateurs", Utilisateurs);
app.use("/Connexion", Connexion)
// Lancement du serveur et écoute sur le port spécifié
app.listen(port, () => {
    console.log("Node application is running on port " + port);
});
