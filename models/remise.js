module.exports = function (sequelize, DataTypes) {
    const Remise = sequelize.define('remise', {
        nom_remise : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valeur_remise:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        condition_remise: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date_debut_remise:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_fin_remise:{
            type: DataTypes.DATE,
            allowNull: false,
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

    return Remise;
};