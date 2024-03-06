import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHarley from '../Pictures/LogoHarley.webp';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // Utilise le state pour gérer l'affichage du menu déroulant
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

const navigate = useNavigate()
  // Fonction pour basculer l'état du menu déroulant
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Fonction pour fermer le menu déroulant
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Fonction de déconnexion
  const Deconnection = () => {
    setUser(null);
    setIsAuthenticated(false);
    setTimeout(() => {
      navigate("/");
    }, 1000); 
    
 
  };

  return (
    <div className="header"> 
      <Link to="/">
        <img src={LogoHarley} alt="LogoHarley" className='image'/>  
      </Link>
     <div className="Colortitle">
      <h1>H-D Location </h1>
      </div>
      <h1>"Louez Votre Harley-Davidson,Vibrez sur la Route"</h1>
      
 {!isAuthenticated ? (

  <div className="dropdown">
        {/* Utilise onClick pour déclencher la fonction toggleDropdown */}
        <button className="ButtonHeader" onClick={toggleDropdown}>
          Rejoignez-nous 
        </button>
        <Link to="/basket" onClick={closeDropdown}>
        <button className='ButtonBasket'>
        
         Réservation
       
        </button>
     </Link>
        {/* Condition pour afficher le menu déroulant en fonction de l'état */}
        {dropdownOpen && (
          <div className="dropdown-content">
            {/* Lien vers la page d'inscription avec gestionnaire d'événements */}
            <Link to="/inscription" onClick={closeDropdown}>
              S'inscrire
            </Link>
            {/* Lien vers la page de connexion avec gestionnaire d'événements */}
            <Link to="/connexion" onClick={closeDropdown}>
              Se connecter
            </Link>
    
          </div>

        )}
      </div>

):
(<div className="dropdown">
{/* Utilise onClick pour déclencher la fonction toggleDropdown */}
<button className="ButtonHeader" onClick={toggleDropdown}>
<p>{user.nom} {user.prenom}</p></button>
<Link to="/basket" onClick={closeDropdown}>
<button className='ButtonBasket'>

 Réservation

</button>
</Link>
{/* Condition pour afficher le menu déroulant en fonction de l'état */}
{dropdownOpen && (
  <div className="dropdown-content">
    {/* Lien vers la page d'inscription avec gestionnaire d'événements */}
    <Link to="/catalog" onClick={closeDropdown}>
     Catalogue
    </Link>
    {/* Lien vers la page de connexion avec gestionnaire d'événements */}
    <Link to="/" onClick={() => {Deconnection()}}>
      Déconnexion
    </Link>

  </div>

)}
</div>)

}

      
    </div>
  );
};

export default Header;
