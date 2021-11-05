import createPersistedState from 'use-persisted-state';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const tokenState = createPersistedState('token');
const clientState = createPersistedState('client');
const useAuth = () => {
    const [token, setToken] = tokenState('');
    const [client, setClient] = clientState({});

    const login = async (email, password) => {
        return axios.post('api/auth/login',
            { email: email, password: password })
            .then(res => {
                setToken(res.data.token);
                setClient(res.data.client);
                console.log("client",res.data.client);
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                return res;
            });
    };

    const signup = async (email, password, nom, prenom, nom_entreprise, newslettre, promotions, jconditions, secteuractiviteId, type_client) => {
        return axios.post('api/auth/signup',
            { email: email, password: password, nom: nom, prenom: prenom, nom_entreprise : nom_entreprise, newslettre: newslettre, 
                promotions: promotions, jconditions: jconditions, secteuractiviteId: secteuractiviteId, type_client: type_client})
            .then(res => {
                setToken(res.data.token);
                setClient(res.data.client);
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                return res;
            });
    };
    
    
    const logout = () => {
        axios.defaults.headers.common.Authorization = null;
        setToken('');
        setClient({});
        window.location.reload('/');
    };

    const isTokenExpired = () => {
        try {
            const decoded = jwtDecode(token);
            return decoded.exp < Date.now() / 1000;
        }
        catch (err) {
            return false;
        }
    };

    const getProfile = () => {
        return jwtDecode(token);
    };

    const getToken = () => {
        return token;
    };

    const isLoggedIn = () => {
        return token !== undefined && token !== '' && !isTokenExpired();
    };

    return {
        login,
        logout,
        client,
        getProfile,
        isLoggedIn,
        signup,
        getToken
    };
};

export default useAuth;