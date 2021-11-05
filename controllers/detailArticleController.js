const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/** Private
  * @ControllerDetailsarticle  Contrôleur qui contient les APi lier a la table detailsarticles
  * @param {table} detailsarticles - table contient les detailsarticles 
  * @author DEVAO - Khadija Lamsiah
  **/

/* retun afficher tous les detailsarticle */
router.get('/', function(req, res) {
    db.detailsarticle.findAll(req.query)
        .then(dbModel => res.json(dbModel));
        /*.catch(err => res.status(422).json(err));*/
});


/* retun afficher detailsarticle avec id */
router.get('/:id', isAuthenticated, function(req, res) {
    db.detailsarticle.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun ajouter detailsarticle */
router.post('/', isAuthenticated, function(req, res) {
    db.detailsarticle.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun modifier detailsarticle avec id */
router.put('/:id', isAuthenticated, function(req, res) {
    db.detailsarticle.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* retun supprimer detailsarticle avec id */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.detailsarticle.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
