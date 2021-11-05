module.exports = function (sequelize, DataTypes) {
    const SauvegardeUtilisateur = sequelize.define('sauvegardeutilisateur', {
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
             },
        ip_utilisateur: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
             }
        
            },
            {
                schema: 'schemaeasyaoaccount',
            }
            );

   
    SauvegardeUtilisateur.associate = function (models) { 
        SauvegardeUtilisateur.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    

    return SauvegardeUtilisateur;
};
