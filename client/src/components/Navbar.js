import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import React from 'react';
import logo from '../images/logo.png';
/*import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';*/
import { AiFillShop, AiOutlineShoppingCart, AiOutlineSearch, AiTwotoneHome, AiOutlineStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";



const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="logo">
            <Link className="nav-link" to={"/"}>
              <img src={logo} alt={"logo"} width="220" height="50" />
            </Link>
          </div>
          <div className="collapse navbar-collapse nav-right" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto  " >
              <li  className="nav-item right"> 
                  <Link className="nav-link" to={"/"}> 
                  <AiTwotoneHome fontSize="20px"  color="#F39200" backgroundColor="#F39200" /> <br/> 
                   Présentation</Link>
              </li>
              <li className="nav-item right">
                  <Link className="nav-link" to={"/recherche"}> 
                  <AiOutlineSearch fontSize="20px"  color="#F39200" backgroundColor="#F39200" /> <br/>
                  Recherche</Link>
              </li>
                {isLoggedIn() ?
                 <>
              <li className="nav-item right">
                  <Link className="nav-link" to={"/mesFavoris"}> 
                  <AiOutlineStar fontSize="20px"  color="#F39200" backgroundColor="#F39200" /> 
                  <br/> Mes Favoris</Link>
              </li>
                </>
                 :
                 <>
                 </>
                 }
              <li className="nav-item right">
                  <Link className="nav-link" to={"/nosOffres"}>
                  <AiFillShop fontSize="20px"  color="#F39200" backgroundColor="#F39200" /> <br/>
                      Nos offres</Link>
              </li>
                <li className="nav-item right">
                  <Link className="nav-link" to={"/#"}>
                  <AiOutlineShoppingCart fontSize="20px"  color="#F39200" backgroundColor="#F39200" />
                      <br/>
                      Panier</Link>
              </li>

              <li  className="nav-item right">
              <FaUserCircle fontSize="20px"  color="#F39200" backgroundColor="#F39200" />
                            <br /> Mon compte
                  <ul className='children'>
                  {isLoggedIn() ?
                        <>
                    <li><Link className="nav-link" onClick={() => getProfile()} to={"/"}>mes information</Link></li>
                    <li><Link className="nav-link" to={"/#"}>tite2</Link></li>
                    
                        <li>
                            <Link className="nav-link" onClick={() => logout()} to='/'>
                              Déconnecter</Link>
                        </li>
                          </>
                          :
                          <>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>
                              Login
                           </Link>
                        </li>
                          </>
                       }   
                    </ul>
                
                
                 </li>
               
              </ul>
            </div>  
        </nav>
        </div>
       
        
    );
};

export default Navbar;