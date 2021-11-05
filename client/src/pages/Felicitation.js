

import React from 'react';
import { useHistory} from 'react-router-dom';
import '../css/Felicitation.css';
/** Private
  * @Felicitation on affiche cette page une seule foit aprés l'inscription de client 
  * @author DEVAO - Khadija Lamsiah
  **/ 
const Felicitation = () => {
    /*const { isLoggedIn, logout, getProfile } = useAuth();*/
    let history = useHistory();

    /* l'orsqu'on click sur le boutton redirection page recherche */
    const redirect = () => {     
        /* route page recherche */  
        history.push('/recherche')
      }
    return (
        <div className="container">
            <div className="row">
                <p className="titreFilicitation">
                Felicitation !
                </p>
                 <p>
                    Merci de vous être inscrit sur EsayAO! <br/>
                    Nous vous avons envoyé un email afin de valider votre inscription. Vous pourrez accéder à nos services une fois votre email validé!
                </p>
                <button type="submit" onClick={redirect}  style={{width: '20%'}}  className="btn1 btn-primar btn-circle">Rechercher un marché</button>      
            </div>   
        </div>
        
    );
};


export default Felicitation;

