module.exports = function (sequelize, DataTypes) {
    const EmployeEasyAO = sequelize.define('employeeasyao', {
        service: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
             }
        
            },
            {
                schema: 'schemaeasyaoaccount',
            }
            );

   
    EmployeEasyAO.associate = function (models) { 
        EmployeEasyAO.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    

    return EmployeEasyAO;
};
