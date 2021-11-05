
import useAuth from '../hooks/auth';
import React, {useState, useEffect} from 'react';
import '../css/Recherche.css';
import axios from 'axios';
 /** Private
  * @Recherche Fonction qui permet de incrémenter nbr des Ao ajouter a la grille mes favoris
  * @param {table} clients - table contient nbr des favoris déjà ajouter au grille mes favoris
  * @param {table} annonces - table ou on va ajouter les annonces de mes favoris
  * @isLoggedIn Pour savoir si le client est déjà connecter
  * @author DEVAO - Khadija Lamsiah
  **/

const Recherche = () => {
    //const [annonce, setAnnonce] = useState([]);
    const { isLoggedIn, getProfile } = useAuth();
    const [redirectUpdateClient, toggleRedirect] = useState(false);
    const [favorisClient, setFavorisClient] = useState([]);
    const [refresh] = useState(0);
   
    useEffect(() => {
        fetchClient();
    }, [refresh]);
const fetchClient = async () => {
        try {          
         const id = getProfile().id;
          const { data } = await axios.get('/api/clients/' + id);
          setFavorisClient(data.nbr_favoris_ajouter);
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
};


    if (redirectUpdateClient) {
       ///const param = event.row.data;
        //axios.post('/api/annonce/' + ao_ref, ao_num_dossier, ao_objet, ao_orgname, ao_suivi , ao_dpt_org, ao_dpt_exe,ao_dateclo, ao_datepub)
       /* axios.post('/api/annonce/' + param)    
        .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })*/
            fetchClient();    
            
console.log("favorisClient",favorisClient);
         const nbr = favorisClient + 1;
         console.log("favorisClient", favorisClient);
         console.log("nbr", nbr);

        if (nbr == 1000) {
            alert ("Vous pouvez pas ajouter plus des AO a vos favoris il faut supprimer des AO.")
        }
        else {
            const id = getProfile().id;
            axios.put('/api/clients/' + id ,{nbr_favoris_ajouter: nbr } )
             .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            toggleRedirect(false)
        }        
    }       

    return (
        <div className="row ">        
            <center><p className="titreRecherche"> Recherche !  </p>   </center>           
            <div className="col-md-12 mt-12 identInscrip">               
                      
                    <div className="form-group ">
                    {isLoggedIn() ?
                        <>
                     <center> <button type="submit" className="btn1 btn-primar btn-circle" onClick={() => toggleRedirect(true)}>
                      Ajouter A mes favoris </button></center>
                      </>
                          :
                          <>
                          </>
                      } 
                    </div>

            </div>    
        </div>       
    );
};


export default Recherche;

