// Importation du module MySQL
const mysql = require('mysql');

// Création de la connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',          // Adresse de l'hôte de la base de données
    user: 'UserLocationMoto',   // Nom d'utilisateur pour se connecter à la base de données
    password: 'Moto2005',       // Mot de passe pour se connecter à la base de données
    port: 8889,                 // Port utilisé pour la connexion à la base de données
    database: 'LocationMoto'    // Nom de la base de données à laquelle se connecter
});

// Établissement de la connexion à la base de données
connection.connect((err) => {
    // Vérification s'il y a des erreurs lors de la connexion
    if (err) {
        // Affichage de l'erreur dans la console
        console.log(err.stack); // fournit l'endroit ou l'erreur a lieu.

        // Arrêt de l'exécution du code en cas d'erreur de connexion
        return;
    }

    // Affichage de l'ID du thread de connexion dans la console
    console.log(connection.threadId);
});

// Exportation de l'objet de connexion pour pouvoir l'utiliser dans d'autres fichiers
module.exports = connection;
