const router = require('express').Router();

/** Private
  * @index  Contient les Routes
  **/

const secteuractivitesRoutes = require('./secteuractivitesController');
const clientRoutes = require('./clientsController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');
const parametreCompteRoutes = require('./parametreCompteController');
const detailsarticlesRoutes = require('./detailArticleController');
const captcharRoutes = require('./captcharController');
const annonceRoutes = require('./annonceController');


router.use('/api/detailsarticles', detailsarticlesRoutes);
router.use('/api/secteuractivites', secteuractivitesRoutes);
router.use('/api/clients', clientRoutes);
router.use('/api/parametrecomptes', parametreCompteRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/captchar', captcharRoutes);
router.use('/api/annonce', annonceRoutes);


module.exports = router;
