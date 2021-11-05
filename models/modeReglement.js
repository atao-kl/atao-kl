module.exports = function (sequelize, DataTypes) {
    const ModeReglement = sequelize.define('modereglement', {
        nommodereglement: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        active: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },
    },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  ModeReglement.associate = function (models) { 
        ModeReglement.belongsTo(models.reglement, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return ModeReglement;
};




