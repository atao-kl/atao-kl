module.exports = function (sequelize, DataTypes) {
    const ClientPrestaBanque = sequelize.define('clientprestabanque', {
        nomclientprestabanque: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
      
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  

    return ClientPrestaBanque;
};
