const jwt = require('jsonwebtoken');
const util = require('util');
const router = require('express').Router();
const db = require('../models');

const signAsync = util.promisify(jwt.sign);

router.post('/login', async (req, res) => {
    try {        
        const { email, password } = req.body;
        const client = await db.client.scope('withPassword').findOne({ where: {email:email }});
        if (!client) {
            res.status(400).send('client non trouvé.');
        }
        const isGoodPassword = await client.validPassword(password);
        if (!isGoodPassword) {
            res.status(400).send('Mot de passe incorrect.');
        }
        const token = await signAsync(
            { id: client.id, email: client.email, nbr_favoris_ajouter: client.nbr_favoris_ajouter,
                type_client : client.type_client  },
            process.env.SECRET,
            {
                expiresIn: '24h',
                algorithm: 'HS256'
            }
        );
        res.json({
            token, client: {
                id: client.id,
                email: client.email,
                nbr_favoris_ajouter: client.nbr_favoris_ajouter,
                type_client : client.type_client
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, password, nom, prenom, nom_entreprise , newslettre, promotions, jconditions, secteuractiviteId, type_client } = req.body;
        const client = await db.client.create({
            email,
            password,
            nom,
            prenom,
            nom_entreprise,
            newslettre, 
            promotions, 
            jconditions,
            secteuractiviteId,
            type_client
        });
        if (!client) {
            res.status(400).send('Impossible de créer le client.');
        }       
        else{           
            const token = await signAsync(
                { id: client.id, email: client.email, nbr_favoris_ajouter: client.nbr_favoris_ajouter,
                    type_client : client.type_client },
                process.env.SECRET,
                {
                    expiresIn: '24h',
                    algorithm: 'HS256'
                }               
            );
            res.json({
                token, client: {
                    id: client.id,
                    email: client.email,
                    nbr_favoris_ajouter: client.nbr_favoris_ajouter,
                    type_client : client.type_client
                }
            }); 
           // window.location.reload('/felicitation');          
          }
    }    
    catch (err) {
        console.error(err);
        res.status(500).json(err);        
    }   
});

module.exports = router;
