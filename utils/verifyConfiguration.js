
module.exports = function () {
    const ACCEPTED_ENVS = ['development', 'test', 'production'];
    if (!ACCEPTED_ENVS.includes(process.env.NODE_ENV)) {
        throw new Error(`NODE_ENV non valide dans le fichier .env. Devrait être l'un des ${ACCEPTED_ENVS.join(', ')}`);
    } else if (typeof process.env.SECRET !== 'string' || process.env.SECRET.length < 10) {
        throw new Error('Secret non valide fourni dans env. Bon secret requis .');
    } else if (process.env.NODE_ENV === 'production' && (process.env.JAWSDB_URL === undefined || process.env.JAWSDB_URL === '')) {
        throw new Error("La base de données de production n'est pas correctement configurée. Fournissez une URL");
    } else if (process.env.NODE_ENV !== 'production' && (process.env.LOCALDB_URL === undefined || process.env.LOCALDB_URL === '')) {
        throw new Error('Aucune URL de connexion fournie pour la base de données locale');
    }
};