const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

/** Private
  * @ControllerUser Contrôleur qui contient les APi lier a la table users
  * @param {table} users - table contient les users 
  * @author DEVAO - Khadija Lamsiah
  **/


/* afficher tous les user */
router.get('/', isAuthenticated, function(req, res) {
    db.user.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* afficher  user avec id */
router.get('/:id', isAuthenticated, function(req, res) {
    db.user.findByPk(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* ajouter  user avec id */
router.post('/', isAuthenticated, function(req, res) {
    db.user.scope('withPassword')
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* modifier user avec id */
router.put('/:id', isAuthenticated, function(req, res) {
    db.user.update(req.body, { where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/* supprimer  user avec id */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.user.destroy({ where: { id: req.params.id }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
