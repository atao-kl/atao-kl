module.exports = function (sequelize, DataTypes) {
    const SecteurActivite = sequelize.define('secteuractivite', {
        title: {
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

    return SecteurActivite;
};
