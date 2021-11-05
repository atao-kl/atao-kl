module.exports = function (sequelize, DataTypes) {
    const Facture = sequelize.define('facture', {
        emailfacturation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
        cp: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                },
            },
         adresseFacturation: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
        },
        titre: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        objet: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
    },
    datefacture :{
        type: DataTypes.DATE,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    totalht: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    montanttva: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    netht: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    totalttc: {
        type: DataTypes.FLOAT,
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
    estproformat: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    estrecursive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    estsupprimer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    datesrecursive:{
        type: DataTypes.DATE,
        allowNull: false,
    }
},
{
    schema: 'schemaeasyaoaccount',
}
);

    Facture.associate = function (models) { 
        Facture.belongsTo(models.client, {
            foreignKey: {
                allowNull: false
            }
        });

       Facture.belongsTo(models.reglement, {
            foreignKey: {
                allowNull: false
            }
        });
        Facture.belongsTo(models.tva, {
            foreignKey: {
                allowNull: false
            }
        });
        Facture.belongsTo(models.article, {
            foreignKey: {
                allowNull: false
            }
        });
        Facture.belongsTo(models.remise, {
            foreignKey: {
                allowNull: false
            }
        });   
        
    };
      
    return Facture;
};
