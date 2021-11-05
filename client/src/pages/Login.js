import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import '../css/Login.css';

/** Private
  * @Login Fonction qui permet de se connecter 
  * @param {table} clients - table contient tous les client EasyAO
  * @isLoggedIn Pour savoir si le client est déjà inscrit et connecter 
  * @author DEVAO - Khadija Lamsiah
  **/


const Login = () => {
    const { login, isLoggedIn } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToSignup, toggleRedirect] = useState(false);
    const { from } = location.state || { from: { pathname: '/' } };
    
    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
            console.log(res.data);
        }) .catch((err) => {
            alert ("identifiant ou mot de passe incorrect");
            /*console.log(err);*/
        })
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{

            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    return (
        <div className="row "> 
       
        <center><p  className="ident bordure"> Connectez-vous </p></center>
        <div className="col-md-12 mt-12 identInscrip">
            
            <form onSubmit={handleSubmit}>
            <div className="form-group esp">
                <input 
                    name='email'
                    placeholder='Identifiant'
                    type='email'
                    autoComplete='username'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                </div>
                <div className="form-group esp">
                    <input 
                        name='password'
                        placeholder='Mot de passe'
                        type='password'
                        autoComplete='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                  
                </div>
                <div className="form-group ">
                    <center><button type="submit" className="btn1 btn-primar btn-circle">Connexion</button></center>
                 </div>
                <div className="form-group esp mdp">          
                    <a href="#"  onClick={() => toggleRedirect(true)}>Je n'ai pas de compte</a>
                    <a style={{ float: 'right'}} href="#">Mot de passe oublié</a>
                </div>
               
            </form>
            
            </div>
            </div>     
    );
};

export default Login;