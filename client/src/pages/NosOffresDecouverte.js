
import useAuth from '../hooks/auth';
import { useEffect, useState } from 'react';
import '../css/NosOffresDecouverte.css';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  /** Private
  * @NosOffres Fonction qui permet d'afficher les paramètres du contre par type client 
  * @param {table} parametrecomptes - table contient les paramètres liés avec différents types user
  * @isLoggedIn Pour savoir si le client est déjà inscrit
  * @author DEVAO - Khadija Lamsiah
  **/

const NosOffres = () => {
  const [parametrecomptes, setParametrecomptes] = useState([]);
  const [refresh, toggleRefresh] = useState(0);
  const refreshParent = () => {
      toggleRefresh(refresh + 1);
  };

 useEffect(() => {
      fetchParametrecomptes();
  }, [refresh]);

  async function fetchParametrecomptes() {
      const { data } = await axios.get('/api/parametrecomptes');
      setParametrecomptes(data);
      
  }

const { isLoggedIn } = useAuth();
const [redirectToSignup, toggleRedirect] = useState(false);
const location = useLocation();
if (redirectToSignup) {
  return <Redirect to={{
      pathname: '/signup'
  }}
  />;
}

    return (
      <div> 
        <form>     
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="active">
                <th style={{background:"#fff"}}><center></center></th>
                <th><center><h3>Version d'essai</h3><h4 className="text-muted text-sm class essai">Gratuit</h4></center></th>
                <th>
               <center>
                      <h3>Offre Découverte</h3><h4 className="text-muted text-sm">Gratuit</h4>
                      {isLoggedIn() ?
                       <>  </>
                      :
                      <>
                      <button type="submit" className="btn1 btn-primar btn-circle" onClick={() => toggleRedirect(true)}>
                        Je m'inscris</button>
                      </>
                      } 
                    </center>
                
                </th>
                <th>
                  <center>
                    <h3>Service Premium</h3><h4 className="text-muted text-sm"><font style={{color: "#F39200"}}>59 &euro;</font>/mois</h4>
                    <button type="submit" className="btn1 btn-primar btn-circle" onClick="#"> Je m'abonne </button>
                  </center>
                </th>
            </tr>      
          </thead>

          <tbody>
          <tr>
          <td>Sourcing</td>
           {parametrecomptes.map(Parametrecompte => 
              
              <td >
              {Parametrecompte.type_compte == 'essai'? <div>{Parametrecompte.sourcing}</div>: 
              Parametrecompte.type_compte == 'decouverte'? <div>{Parametrecompte.sourcing}</div>: 
              Parametrecompte.type_compte == 'Premium'? <div>{Parametrecompte.sourcing}</div>: null
              }

            </td>
            ) }
            </tr>
            <tr>
              <td>Periode de recherche</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.type_compte == 'essai'? <div>{Parametrecompte.period_recherch} mois</div>: 
              Parametrecompte.type_compte == 'decouverte'? <div>{Parametrecompte.period_recherch} mois</div>: 
              Parametrecompte.type_compte == 'Premium'? <div>{Parametrecompte.period_recherch} mois</div>:null
              }
              </td>
               ) }
            </tr>
            <tr>
              <td>Recherche dans l'objet du marché</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
                
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.recherche_objet   ? <CheckCircleIcon fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.recherche_objet  ? <CheckCircleIcon fontSize="small" sx={{color:"#F39200"}} />: 
              Parametrecompte.type_compte == 'Premium' && Parametrecompte.recherche_objet ? <CheckCircleIcon fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
            
              <td>Recherche dans les avis et les marché cloturés</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.recherche_avis_clotures  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' &&  Parametrecompte.recherche_avis_clotures  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
             Parametrecompte.type_compte == 'Premium' && Parametrecompte.recherche_avis_clotures ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Recherche dans les avis d'attribution</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.recherche_avis_attribution ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.recherche_avis_attribution  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.recherche_avis_attribution  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Affichage</td>
              {parametrecomptes.map(Parametrecompte => 
              <td>
              {Parametrecompte.type_compte == 'essai'? <div>{Parametrecompte.nbr_max_ao_afficher} annonces/recherche</div>: 
              Parametrecompte.type_compte == 'decouverte'? <div>{Parametrecompte.nbr_max_ao_afficher} annonces/recherche</div>: 
              Parametrecompte.type_compte == 'Premium'? <div>{Parametrecompte.nbr_max_ao_afficher}annonces/recherche</div>:null
              }
              </td>
              ) }
            </tr>
           
            <tr>
              <td>Dédoublonage</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.dedoublonage ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.dedoublonage  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.dedoublonage  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Sauvgarde des recherches</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.sauvegarde_recherche ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.sauvegarde_recherche  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.sauvegarde_recherche  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Données essentielles du marché</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.donnees_essentielle ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.donnees_essentielle  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.donnees_essentielle  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Contacts</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.contacts ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.contacts  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.contacts  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Département d'éxecution</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.departement_execution ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.departement_execution  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.departement_execution  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>avis complet et standardisation des annonces</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.avis_complet ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.avis_complet  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.avis_complet  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Telechargement et outil d'annalyse DCE</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte. nbr_dce_gratuitte_lecharger ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte. nbr_dce_gratuitte_lecharger  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte. nbr_dce_gratuitte_lecharger  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Partage des annonces</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.partage_annonces ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.partage_annonces  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.partage_annonces  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Ajout dans l'agenda</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.ajout_agenda ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.ajout_agenda  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.ajout_agenda  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Gestion des favoris</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.gestion_favoris ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.gestion_favoris  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.gestion_favoris  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
            <tr>
              <td>Grille de suivi des appel d'offre</td>
              {parametrecomptes.map(Parametrecompte => 
             <td>
              {Parametrecompte.type_compte == 'essai' && Parametrecompte.grille_ao ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'decouverte' && Parametrecompte.grille_ao  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:
               Parametrecompte.type_compte == 'Premium' && Parametrecompte.grille_ao  ? <CheckCircleIcon  fontSize="small" sx={{color:"#F39200"}} />:<div> -</div>}
              </td>
              ) }
            </tr>
          </tbody>

        </table>
         </form>  
        </div>  
    );
};


export default NosOffres;

