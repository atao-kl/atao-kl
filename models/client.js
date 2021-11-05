const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const Client = sequelize.define(
        'client',
     {
       // L'email ne peut pas être nul, et doit être un email correct avant la création 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // Le mot de passe ne peut pas être nul
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING,
          },
        prenom: {
            type: DataTypes.STRING
          },
        nom_entreprise: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
          },
        newslettre: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
          },
        promotions: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        jconditions: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        type_client: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
        ville: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
        pays: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
        nbr_dce_acheter: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
        nbr_favoris_ajouter: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            nbr_dce_gratuit: {
                type: DataTypes.INTEGER,
                allowNull: true,
            defaultvalue: null,
            }
        },
        
        
        {
            sequelize,
            schema: 'schemaeasyaoaccount',
            timestamps: true,
            // Cela force tout 'utilisateur' par défaut à exclure le mot de passe lorsque nous les interrogeons ;
             // de cette façon, nous n'exposons même pas un mot de passe haché
            defaultScope: {
                attributes: { exclude: ['password'] }
            },
            // Si vous souhaitez afficher le mot de passe, pour une raison quelconque, nous exposons avec :
             // db.Client.scope('withPassword').findAll() etc 
            scopes: {
                withPassword: {
                    attributes: {}
                }
            }
        }
        );

    /* Création d'une méthode personnalisée pour notre modèle User. Cela vérifiera si un mot de 
    passe non haché saisi par l'utilisateur peut être comparé au mot de passe haché stocké dans 
    notre base de données    */

    Client.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    
    /* Les hooks sont des méthodes automatiques qui s'exécutent au cours des différentes phases du cycle
     de vie du modèle utilisateur*/
     // Dans ce cas, avant qu'un Utilisateur ne soit créé, nous hacherons automatiquement son mot de passe

    Client.addHook('beforeCreate', function (Client) {
        Client.password = bcrypt.hashSync(
            Client.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    

    
   Client.associate = function (models) { 

        Client.belongsTo(models.secteuractivite, {
            foreignKey: {
                allowNull: false
            }
        });
        
    };
    
  


    return Client;
};
