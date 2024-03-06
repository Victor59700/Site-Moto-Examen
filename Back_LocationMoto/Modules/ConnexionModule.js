const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const loginService = require('../Services/ConnexionService');
const SECRET = "js15544+-!/kJDHDYDU05";








const comparePasswords = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        console.log(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
};



router.post('/', async (req, res) => {
    const userData = req.body
    console.log(userData)
    const { email_utilisateur, mot_de_passe } = req.body;
console.log("Email et mot de passe reçus :", email_utilisateur, mot_de_passe);

// Vérifier si les champs requis sont présents
if (!email_utilisateur || !mot_de_passe) {
    return res.status(400).json({ message: "Veuillez entrer des identifiants corrects" });
}

    try {
        // Récupérer les informations de l'utilisateur à partir de la base de données
        const userSQL = await loginService.login({ email_utilisateur });
        console.log(userSQL)
        console.log("mot de passe react",mot_de_passe + "mot de passe sql", userSQL.mot_de_passe)
        const passwordMatch = await comparePasswords(mot_de_passe, userSQL.mot_de_passe)
        if (!passwordMatch) {
            return res.status(400).json({ "message": "Mot de passe incorrect" });
        }

        // Vérifier si l'utilisateur existe
        if (!userSQL) {
            return res.status(400).json({ message: "Identifiant incorrect" });
        }

       

        // Créer et envoyer le token si l'authentification est réussie
        const token = jwt.sign({ user: userSQL }, SECRET, { expiresIn: '3 hours' });

        res.status(200).json({ access_token: token, message: 'Connexion réussie', userSQL: userSQL });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Une erreur serveur est survenue lors de la vérification" });
    }
});

module.exports = router;
