module.exports = function (sequelize, DataTypes) {
    const Article = sequelize.define('article', {
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        statut: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
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

  
    
    


    return Article;
};
