module.exports = function (sequelize, DataTypes) {
    const Reglement = sequelize.define('reglement', {
        etat: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        codereglement: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
        montant: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        estsupprimer: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },
    },
    {  schema: 'schemaeasyaoaccount',
    }
      
    );

   /* Reglement.associate = function (models) { 
        Reglement.belongsTo(models.Facture, {
            foreignKey: {
                allowNull: false
            }
        });
    };*/

    return Reglement;
};
