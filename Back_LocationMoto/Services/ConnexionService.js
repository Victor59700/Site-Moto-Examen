const conn = require('./Database');

const login = (email) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM utilisateurs WHERE email = ?`;
        conn.query(sql, [email.email_utilisateur], (error, result) => {
            if (error) {
                console.error('Erreur lors de la récupération de l\'email :', error);
                reject(error);
            } else {
                // Si l'utilisateur est trouvé, result contient ses informations
                // Sinon, result sera un tableau vide
                resolve(result.length > 0 ? result[0] : null);
            }
        });
    });
};

module.exports = {
    login
};
