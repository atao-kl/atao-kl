module.exports = function (sequelize, DataTypes) {
    const DetailsArticle = sequelize.define('detailsarticle', {
        titre: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
             },
        designation: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

        totalht: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        prixht: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        periode_service: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        quantite_article: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        
        },
        {
            schema: 'schemaeasyaoaccount',
        }
        );
    
        
    DetailsArticle.associate = function (models) { 
        DetailsArticle.belongsTo(models.article, {
            foreignKey: {
                allowNull: false
            }
        });
        
        
    };
    
    


    return DetailsArticle;
};
