module.exports = function (sequelize, DataTypes) {
    const HistoriqueClient = sequelize.define('historiqueclient', {
        type_produit_acheter : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        achat_ou_depense: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        date_historique:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        
        date_debutabon:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_finabon:{
            type: DataTypes.DATE,
            allowNull: false,
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );
    HistoriqueClient.associate = function (models) { 
        HistoriqueClient.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return HistoriqueClient;
};