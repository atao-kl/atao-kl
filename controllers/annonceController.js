const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;


  /** Private
  * @ControllerAnnonce  Contrôleur qui contient les APi lier a la table annonces
  * @param {table} annonces - table contient les annonces d'un seul client
  * @author DEVAO - Khadija Lamsiah
  **/

router.get('/', isAuthenticated, function(req, res) {
    db.annonce.findAll(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.post('/', isAuthenticated, function(req, res) {
    db.annonce.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.put('/:ao_keyid', isAuthenticated, function(req, res) {
    db.annonce.update(req.body, { where: { ao_keyid: req.params.ao_keyid }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.delete('/:ao_keyid', isAuthenticated, function(req, res) {
    db.annonce.destroy({ where: { ao_keyid: req.params.ao_keyid }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;