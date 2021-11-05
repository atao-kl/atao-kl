module.exports = function (sequelize, DataTypes) {
    const Annonce = sequelize.define(
        'annonce',
     {
        ao_keyid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ao_ref: {
            type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
        },
        ao_num_dossier: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        ao_objet: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
          },
        ao_orgname: {
            type: DataTypes.STRING,
            allownull: true,
            defaultvalue: null,
        },
        ao_suivi: {
            type: DataTypes.STRING,
            allownull: true,
            defaultvalue: null,
        },          
        ao_dpt_org: {
            type: DataTypes.INTEGER,
            allownull: true,
            defaultvalue: null,
            },
        ao_dpt_exe: {
            type: DataTypes.INTEGER,
            allownull: true,
            defaultvalue: null,
            },
        ao_dateclo: {
            type: DataTypes.DATE,
            allownull: true,
            defaultvalue: null,
            },
        ao_datepub: {
            type: DataTypes.DATE,
            allownull: true,
            defaultvalue: null,
            }
        },
        {

            schema: 'schemaeasyaoclient',
        }
        );

    return Annonce;
};
