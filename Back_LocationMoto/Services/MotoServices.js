// Importation de la connexion à la base de données
const conn = require("./Database");

// Définition de la fonction fetchmoto qui récupère les données des motos depuis la base de données
const fetchmoto = () => {
    return new Promise((resolve, reject) => {
        // Définition de la requête SQL pour sélectionner toutes les lignes de la table Motos
        let sql = `SELECT * FROM LocationMoto.Motos;`;

        // Exécution de la requête SQL en utilisant la connexion à la base de données
        conn.query(sql, (err , result) => {
            // Vérification s'il y a des erreurs lors de l'exécution de la requête SQL
            if (err) {
                // Rejet de la promesse avec l'erreur en cas d'erreur
                reject(err);
            }
            // Résolution de la promesse avec les résultats de la requête SQL
            resolve(result);
        });
    });
};

// Exportation de la fonction fetchmoto pour pouvoir l'utiliser dans d'autres fichiers
module.exports = {
    fetchmoto
};
