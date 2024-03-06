// Importation de la connexion à la base de données
const conn = require("./Database");



// Définition de la fonction fetchmoto qui récupère les données des motos depuis la base de données
const fetchutilisateurs = (utilisateur) => {
    return new Promise((resolve, reject) => {
        // Définition de la requête SQL pour sélectionner toutes les lignes de la table Motos
        let sql = `insert into utilisateurs (nom, prenom, email, mot_de_passe,telephone,adresse)
        values(?,?,?,?,?,?)`

        // Exécution de la requête SQL en utilisant la connexion à la base de données
        conn.query(sql,[utilisateur.nom, utilisateur.prenom, utilisateur.email, utilisateur.mdp, utilisateur.tel, utilisateur.adresse], (err , result) => {
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

const checkIfEmailExists = (email) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT COUNT(*) AS count FROM utilisateurs WHERE email = ?`
        conn.query(sql, [email], (err,result) => {
            if (err) {
                reject(err);
            }else{
                const count = result[0].count; // assigne la valeur extraite de la propriété count de la première ligne de la requête SQL
                resolve(count > 0); // Renvoie true si l'adresse email existe déjà, sinon false
            }
        });
    });
};


// Exportation de la fonction fetchmoto pour pouvoir l'utiliser dans d'autres fichiers
module.exports = {
    fetchutilisateurs,
    checkIfEmailExists
};
