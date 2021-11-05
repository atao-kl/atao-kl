module.exports = function (sequelize, DataTypes) {
    const Tva = sequelize.define('tva', {
        nom_tva : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valeur_tva:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
      
    },
    {
            schema: 'schemaeasyaoaccount',
        }
    );

    return Tva;
};
