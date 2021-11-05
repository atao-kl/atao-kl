import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import useAuth from './hooks/auth';
import Home from './pages/Home';
import Felicitation from './pages/Felicitation';
import Recherche from './pages/Recherche';
import NosOffres from './pages/NosOffres';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MesFavoris from './pages/MesFavoris';
import NosOffresDecouverte from './pages/NosOffresDecouverte';



function App() {
    const { getToken, logout } = useAuth();
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        const { message } = error.toJSON();
        if(message === 'Request failed with status code 401'){
            logout();
        }
        return Promise.reject(error);
    });
    
    
    return (
        <Router>
             <Navbar />
      <div className="auth-wrapper">
        <div className="auth-inner">
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/felicitation'>
                    <Felicitation />
                </Route>
                <Route path='/recherche'>
                    <Recherche />
                </Route>
                <PrivateRoute exact path='/mesFavoris'>
                    <MesFavoris />
                </PrivateRoute>
                <Route path='/nosOffres'>
                    <NosOffres />
                </Route>
                <Route path='/nosOffresDecouverte'>
                    < NosOffresDecouverte />
                </Route>
            </Switch>
            </div>
      </div>
      
        </Router>
    );
}

function PrivateRoute({ children, ...rest }) {
    const { isLoggedIn } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn() ? (
                    children
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default App;
