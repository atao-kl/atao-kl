import  React, { useRef, useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import axios from 'axios';
import '../css/Singup.css';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';


/** Private
  * @Signup Fonction qui permet creer d'un nouveau client
  * @param {table} clients - table contient tous les client EasyAO
  * @isLoggedIn Pour savoir si le client est déjà inscrit 
  * @author DEVAO - Khadija Lamsiah
  **/

const Signup = () => {
  const [ captchaValue, setCaptchaValue ] = useState(null);  
  const reRef = useRef();

  const [captchaSingun, setCaptchaSingun] = useState([]);
  const [refresh] = useState(0);
  const [refreshCaptchaSingun] = useState(0);
 
  useEffect(() => {
      fetchCaptchaSingun();
  }, [refreshCaptchaSingun]);

  
const fetchCaptchaSingun = async () => {
      try {          
        const { data } = await axios.get('/api/captchar/');
        setCaptchaSingun(data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
};



  function onChange(value) {
      console.log("Captcha value:", value);
      setCaptchaValue(value)
    }

 /*test auth-user */
    const { signup, isLoggedIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom_entreprise, setNomEntreprise] = useState('');
    const [secteuractiviteId, setsecteuractiviteId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailConfirme, setEmailConfirme] = useState('');
    const [passwordConfirme, setPasswordConfirme] = useState('');
    const [type_client, setTypeclient] = useState('decouverte');
    
    const [codeMaile, setCodeMaile] = useState('');
    const [newslettre, setNewslettre] = useState(false);
    const [promotions, setPromotions] = useState(false);
    const [jconditions, setJconditions] = useState(false);  
    const [errorPassword, setErrorPassword] = useState('');
    const [errorNom, setErrorNom] = useState('');
    const [errorPrenom, setErrorPrenom] = useState('');
    const [errorEntreprise, setErrorEntreprise] = useState('');
    const [errorSecteur, setErrorSecteur] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorEmailConfirme, setErrorEmailConfirme] = useState('');
    const [errorPasswordConfirme, setErrorPasswordConfirme] = useState('');
    
    

     /*redirection page login */   
    const [redirectToLogin, toggleRedirect] = useState(false);
    /*la from inscription */
    const { from } = location.state || { from: { pathname: '/' } };
   
    const [secteuractivites, setSecteuractivites] = useState([]);
     /* refresh liste secteurActivites */

    useEffect(() => {
        fetchSecteuractivites();
    }, [refresh]);

     /*remplir la liste secteurActivites */
    const fetchSecteuractivites = async () => {
        try { 
        const { data } = await axios.get('/api/secteuractivites');
        setSecteuractivites(data);
        console.log(data);
        } catch (err) {
        // Handle Error Here
        console.error(err);
        }
        };
/** Private
  * inscription client decouverte 
  * @author Lamsiah khadija
  **/
    /* boutton inscription */
    const handleSubmit = event => {
      
        event.preventDefault();
        let isValid = true;
        //captchaValue est a jour, on le met ici
         if (!nom) {
            isValid = false; 
            setErrorNom("S'il vous plait entrez votre nom."); 
        }
         else { setErrorNom ("") }

           if (!prenom) {
            isValid = false; 
            setErrorPrenom("S'il vous plait entrez votre prenom."); 
           }
            else { setErrorPrenom ("") }
           if (!nom_entreprise) {
            isValid = false; 
           
             setErrorEntreprise("S'il vous plait entrez votre nom d'entreprise.")
           }
           else { setErrorEntreprise ("") }
           
          if (!secteuractiviteId) {
            isValid = false; 
             
             setErrorSecteur("S'il vous plait entrez votre secteur d'activité.")
           } 
           else {
            setErrorSecteur ("")
           }
           if (!email) {
            isValid = false;
            setErrorEmail ("S'il vous plait entrez votre email.")
          }
          if (typeof email != "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
              isValid = false;
              setErrorEmail ("S'il vous plait entrez votre email.")
            } else {
                setErrorEmail ("")
            }
          }
          if (!emailConfirme) {
            isValid = false;
            setErrorEmailConfirme ("S'il vous plait Confirmez votre email .")
          }
          else {
            setErrorEmailConfirme ("")
          }
          
        if (typeof email != "undefined" && typeof emailConfirme != "undefined") { 
            if (email != emailConfirme) { 
              isValid = false;  
              setErrorEmailConfirme ("Les e-mail ne correspondent pas.")
            } else {
              setErrorEmailConfirme ("")
            }
        }
        
          if (!validator.isStrongPassword(password, {
            minLength: 12, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            isValid = false; 
            setErrorPassword("Veuillez entrer votre mot de passe")
            alert ("Le mot de passe doit contenir au moins 12 caractères avec 1 caractère en majuscules, 1 en minuscule, 1 symbole et un numéro.")
             
          }
          else {
            setErrorPassword("")
          }
          if (!passwordConfirme) {    
            isValid = false;
            setErrorPasswordConfirme("Veuillez entrer votre mot de passe de confirmation.");   
          } 
          
          else if (typeof password != "undefined" && typeof passwordConfirme != "undefined") { 
            if (password != passwordConfirme) { 
              isValid = false; 
              setErrorPasswordConfirme("Les mots de passe ne correspondent pas.");
            } 
            
        } 
        else {
            setErrorPasswordConfirme("")
          }
           
           /* faire appel a la fonction d'inscription */ 
            if(isValid){          
                signup(email, password, nom, prenom, nom_entreprise,newslettre, promotions, jconditions ,
                    secteuractiviteId, type_client).then(res => {
                    history.replace(from);                   
                });
            }                    
    };
/* test s'il est déjà connecter */ 
    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }
    
    if (redirectToLogin) {
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }
   
    return (
           
    <div className="container">
        <div className="row">
        <center> <p className="ident bordure">
                Mes informations
            </p></center>
        <div className="col-md-12 mt-12 identInscrip">

            <form onSubmit={handleSubmit} >

            <div className="form-group esp " >
                <input 
                    name='nom'
                    placeholder='Nom *'
                    type='nom'
                    autoComplete='nom'
                    value={nom}
                    onChange={event => setNom(event.target.value)}
                    style={{width: '40%'}}
                /> 
                
                 <input 
                    name='prenom'
                    placeholder='Prénom *'
                    type='prenom'
                    autoComplete='prenom'
                    value={prenom}
                    onChange={event => setPrenom(event.target.value)}
                     style={{ width: '40%' , float: 'right'}}
                />
                
               
                </div> 
                <div className="form-group esp " > 
                <span className="text-danger" style={{width: '40%'}}> {errorNom} </span>
                <span className="text-danger"  style={{ width: '40%' , float: 'right'}}>{errorPrenom}</span>
                </div> 
                <div className="form-group esp">
                <input 
                    name='nom_entreprise'
                    placeholder='Entreprise *'
                    type='entreprise'
                    autoComplete='nom_entreprise'
                    value={nom_entreprise}
                    onChange={event => setNomEntreprise(event.target.value)}
                    style={{width: '40%' }}
                /> 
                 <select 
                    name='secteuractiviteId'
                    id='secteuractiviteId'
                    autoComplete='secteuractiviteId'
                    onChange={event => setsecteuractiviteId(event.target.value)}
                 >
                     <option selected>Secteur Activité * </option>
                    {secteuractivites.map(secteuractivite => { 
                     return ( 
                     <option  value={secteuractivite.id}>{secteuractivite.title}</option>
                     );
                    })}
                    </select>                   
                </div>
                <div className="form-group esp " > 
                <span className="text-danger" style={{width: '40%'}}> {errorEntreprise} </span>
                <span className="text-danger"  style={{ width: '40%' , float: 'right'}}>{errorSecteur}</span>
                </div>
                <div className="form-group esp">
                <input 
                    name='email'
                    placeholder='Adresse e-mail *'
                    type='email'
                    autoComplete='username'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    style={{ width: '40%'}}
                />           
                <input 
                    name='emailConfirme'
                    placeholder='Confirmer votre adresse e-mail *'
                    type='email'
                    autoComplete='email2'
                    value={emailConfirme}
                    onChange={event => setEmailConfirme(event.target.value)}
                     style={{ width: '40%' , float: 'right'}}
                />                
               </div>
                <div className="form-group esp " > 
                    <span className="text-danger" style={{width: '40%'}}> {errorEmail} </span>
                     <span className="text-danger"  style={{ width: '40%' , float: 'right'}}> {errorEmailConfirme} </span>
                </div>
                <div className="form-group esp">
                    <input 
                        name='password'
                        placeholder='Mot de passe *'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        style={{ width: '40%'}}
                    />
                    <input 
                        name='passwordConfirme'
                        placeholder='Confirmer votre mot de passe *'
                        type='password'
                        autoComplete='passwordConfirme'
                        value={passwordConfirme}
                        onChange={event => setPasswordConfirme(event.target.value)}
                         style={{ width: '40%' , float: 'right'}}
                    />                  
                </div>
                <div className="form-group esp " > 
                    <span className="text-danger" style={{width: '40%'}}> {errorPassword} </span>
                     <span className="text-danger"  style={{ width: '40%' , float: 'right'}}> {errorPasswordConfirme} </span>
                </div>       
                <div className="form-group esp ">
                    <button name="veriferEmail"  disabled={!codeMaile} type="submit"  style={{ width: '40%'}}  className="btn1 btn-primar btn-circle"  >
                        Verifier mon adress e-mail
                    </button>
                    <input 
                        name='codeMaile'
                        placeholder='Entrer le code reçu par e-mail'
                        type='codeMaile'
                        autoComplete='codeMaile'
                        value={codeMaile}
                        onChange={event => setCodeMaile(event.target.value)}
                         style={{ width: '40%' , float: 'right'}}
                    />
                 </div>
                 <div className="form-group esp ">                 
                    <input 
                        name='newslettre'
                        type='checkbox'
                        autoComplete='newslettre'
                        value={true}
                        onChange={event => setNewslettre(event.target.value)}                        
                    />
                    <label htmlFor="huey">&nbsp;Je souhaite recevoir les Newsletters EasyAO</label>
                    <br/>
                      <input 
                        name='promotions'
                        type='checkbox'
                        autoComplete='promotions'
                        value={true}
                        onChange={event => setPromotions(event.target.value)}                       
                    />
                    <label htmlFor="huey">&nbsp;Je souhaite recevoir des promotions de la part d'EasyAO et ou de ses partenaires</label>
                    <br/>
                      <input 
                        name='jconditions'
                        type='checkbox'
                        autoComplete='jconditions'
                        value={true}
                        onChange={event => setJconditions(event.target.value)}
                    />
                    <label htmlFor="huey">&nbsp;J'accepte des conditions générales d'utilisation de EasyAO </label>
                 </div>
                 <div className="form-group esp ">
                 <center><button type="submit" name="inscript"  disabled={!captchaValue} className=" btn1 btn-primar btn-circle">Je m'nscris</button></center>                 
                 </div>
                 <div className="form-group esp ">
                    <p>
                    <a href=""   style={{ width: '40%' , float: 'right'}} onClick={() => toggleRedirect(true)}>Vous avez déjà un compte? </a>
                    </p> 
                    {captchaSingun.map(captcha => 
                    <div style={{ width: '40%'}}>
                    {captcha.page == 'singup'?
                    <ReCAPTCHA
                      ref={reRef}
                     /* sitekey="6LdiJg0dAAAAAPjuYWGewLBCluu5hU8hPDRkSyKz"*/ 
                      sitekey= {captcha.key}                    
                      onChange={onChange}
                      style={{ width: '40%' }}
                    />
                    : null
                    }
                    </div>
                    ) }
                    </div>         
            </form>
            </div>
        </div>
        </div>
    );
};

export default Signup;