module.exports = function (sequelize, DataTypes) {
    const ParametreCompte = sequelize.define('parametrecompte', {
        type_compte: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
             },
          
             period_recherch: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            nbr_max_ao_afficher: {
                type: DataTypes.INTEGER,
                allowNull: true,
            defaultValue: null,
            },
            nbr_max_dce_gratuit: {
                type: DataTypes.INTEGER,
                allowNull: true,
            defaultvalue: null,
            },
            nbr_max_favoris_ajouter: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            nbr_dce_gratuitte_lecharger: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null,
            },
            sourcing: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null,
            },
            recherche_objet: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            recherche_avis_clotures: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            recherche_avis_attribution: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            dedoublonage: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            sauvegarde_recherche: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            donnees_essentielles: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            contacts: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            departement_execution: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            avis_complet: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            partage_annonces: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            ajout_agenda: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            gestion_favoris: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            grille_ao: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
    {
        schema: 'schemaeasyaoaccount',
    }
    );

  /* ParametreCompte.associate = function (models) { 
        ParametreCompte.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };*/
    
    return ParametreCompte;
};
