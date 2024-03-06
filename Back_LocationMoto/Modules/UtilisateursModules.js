// Importation du framework Express et création d'un routeur
const express = require("express");
const router = express.Router();
const saltRounds = 10; // Le coût du hachage - plus c'est élevé, plus c'est sécurisé
const bcrypt = require('bcrypt');

// Importation du service Motoservice
const Utilisateursservice = require("../Services/UtilisateursServices");

// Fonction pour hacher un mot de passe
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};

// Définition de la route pour les requêtes GET sur le chemin "/"
router.post("/", async (req, res) => {
    const utilisateurs = req.body
    console.log(utilisateurs) 
    try {
       const hashedPassword = await hashPassword(utilisateurs.mdp)
console.log(hashedPassword)

const emailExists = await Utilisateursservice.checkIfEmailExists(utilisateurs.email)
console.log(emailExists)
if (emailExists) {
    // Si l'adresse e-mail est déjà utilisée, renvoyer un message d'erreur
    return res.status(400).json({ status: 400, message: "L'adresse mail existe déjà" });
} else {
    utilisateurs.mdp = hashedPassword


Utilisateursservice.fetchutilisateurs(utilisateurs)
        // Envoi des données récupérées en tant que réponse
      res.status(200).json(utilisateurs); 
    } 
    } catch (err) {
        // Gestion des erreurs
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});

// Exportation du routeur pour l'utiliser dans d'autres fichiers
module.exports = router;
