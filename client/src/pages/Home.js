
import useAuth from '../hooks/auth';
import React from 'react';
import { Link } from 'react-router-dom';

/** Private
  * @Home page d'accueil 
  * @author DEVAO - Khadija Lamsiah
  **/
const Home = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div className="container">
            <div className="row">
                <p >
                EasyAO
                </p>
               <ul>
                {isLoggedIn() ?
                    <>
                        <li>Bonjour, {getProfile().email}</li>
                        <li>Bonjour, {getProfile().nbr_favoris_ajouter}</li>
                        
                        <li><Link onClick={() => logout()} to='/'>Déconnecter</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/signup">Inscrivez-vous</Link></li>
                        <li><Link to="/login">Connexion</Link></li>
                    </>
                }
                
            </ul>
            </div>   
        </div>
        
    );
};


export default Home;





