// Importation du framework Express et création d'un routeur
const express = require("express");
const router = express.Router();

// Importation du service Motoservice
const Motoservice = require("../Services/MotoServices");

// Définition de la route pour les requêtes GET sur le chemin "/"
router.get("/", async (req, res) => {
    try {
        // Appel asynchrone à la méthode fetchmoto du service Motoservice
        const Moto = await Motoservice.fetchmoto();

        // Envoi des données récupérées en tant que réponse
        res.status(200).json(Moto);
    } catch (err) {
        // Gestion des erreurs
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

// Exportation du routeur pour l'utiliser dans d'autres fichiers
module.exports = router;
