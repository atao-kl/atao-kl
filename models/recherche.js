module.exports = function (sequelize, DataTypes) {
    const Recherche = sequelize.define('recherche', {
        nom_recherche: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        
        },
        criteres_recherche: {
            type: DataTypes.JSON ,
            allowNull: false,
        }
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

    Recherche.associate = function (models) { 
        Recherche.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recherche;
};
