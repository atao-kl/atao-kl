module.exports = function (sequelize, DataTypes) {
    const Service = sequelize.define('service', {
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
        
        }
        ,{
            schema: 'schemaeasyaoaccount',
          }
        );

    Service.associate = function (models) { 
        Service.belongsTo(models.remise, {
            foreignKey: {
                allowNull: false
            }
        });

        Service.belongsTo(models.tva, {
            foreignKey: {
                allowNull: false
            }
        });


    };
    
    


    return Service;
};
