module.exports = function (sequelize, DataTypes) {
    const Panier = sequelize.define('panier', {
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
          
        estvalider: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        estannuler: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        estsupprimer: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        
        },
        {
            schema: 'schemaeasyaoaccount',
        }
        );

    Panier.associate = function (models) { 
        Panier.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });

        Panier.belongsTo(models.service, {
            foreignKey: {
                allowNull: false
            }
        });


    };
    
    


    return Panier;
};
