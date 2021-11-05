const bcrypt = require('bcryptjs');
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
        'user',
        {

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
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
             iputilisateur: {
                    type: DataTypes.STRING,
                    allowNull: true,
                   
                },
            telephone : {
                    type: DataTypes.STRING,
                    allowNull: true,               
                }
  
        },
        {
           schema: 'schemaeasyaoaccount',
        },
       {
            defaultScope: {
                attributes: { exclude: ['password'] }
            },
            scopes: {
                withPassword: {
                    attributes: {}
                }
            }
        }
    );

  User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook('beforeCreate', function (user) {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
  

    return User;
};
