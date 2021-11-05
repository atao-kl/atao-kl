module.exports = function (sequelize, DataTypes) {
    const Captchar = sequelize.define('captchar', {
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Email: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
        page: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },   
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  
    
    


    return Captchar;
};
