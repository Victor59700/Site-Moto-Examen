import React, { useContext, useState } from 'react';
import '../Style/LoginPage.css'; // Importe le fichier de styles CSS
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConnexionService from '../Services/ConnexionService';
import AuthContext from '../Context/AuthContext';


const LoginPage = () => {
  const [email, setemail] = useState('');
  const [mdp, setmdp] = useState('');
  const {  setUser,  setIsAuthenticated } = useContext(AuthContext);

  const handleUsermailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setmdp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  const handleConnexion = async (event) => {

    try {
      const userData = { email_utilisateur: email, mot_de_passe: mdp };
    
      const response = await ConnexionService.Connexion(userData)
    
      setUser(response.data.userSQL)
      setIsAuthenticated(true)
      toast.success('Connexion Réussi')
    } catch (error) {
      console.log(error);
      toast.error("Connexion échoué")
    }
  };

  return (
<>
<div className='BoutonAccueil'>
<Link to="/homepage">
  <button>Retour à Accueil</button>  
</Link>
</div>

    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
         Email
          <input type="text" value={email} onChange={handleUsermailChange} />
          
        </label>
        <br />
        <label>
          Mot de passe
          <input type="password" value={mdp} onChange={handlePasswordChange} />
        </label>
        <br />
        <Link to="/catalog">
        <button onClick={handleConnexion}>Se connecter</button>
        </Link>
      </form>
    </div>
    </>
  );
};




export default LoginPage;
