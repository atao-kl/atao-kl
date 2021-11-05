const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/** Private
  * @Controllercaptchar  Contrôleur qui contient les APi lier a la table captchars
  * @param {table} captchars - table contient les captchars 
  * @author DEVAO - Khadija Lamsiah
  **/


/* retun afficher tous les captchar */
router.get('/', function(req, res) {
    db.captchar.findAll(req.query)
        .then(dbModel => res.json(dbModel));
        /*.catch(err => res.status(422).json(err));*/
});


/* retun afficher captchar avec id */
router.get('/:id', isAuthenticated, function(req, res) {
    db.captchar.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun ajouter captchar */
router.post('/', isAuthenticated, function(req, res) {
    db.captchar.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun modifier captchar avec id */
router.put('/:id', isAuthenticated, function(req, res) {
    db.captchar.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun supprimer captchar avec id */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.captchar.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
