module.exports = function (sequelize, DataTypes) {
    const Permission = sequelize.define('permission', {
        nom_permission: {
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

  

    return Permission;
};
