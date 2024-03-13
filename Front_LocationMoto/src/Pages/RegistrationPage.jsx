import React, { useState } from 'react';
import '../Style/RegistrationPage.css';
import { Link } from 'react-router-dom';
import InscriptionService from '../Services/InscriptionService';
import { toast } from 'react-toastify';


const RegistrationPage = () => {

  const [utilisateur, setUtilisateur] = useState({

    nom:'',
    prenom:'',
     email:'', 
    mdp:'',
    tel:'', 
    adresse:'',

  });

  const handleChange = (e) => {

const {name,value} = e.currentTarget;
setUtilisateur({...utilisateur, [name]:value})
console.log(utilisateur)
  }

  const inscription = async (e) => {
    e.preventDefault();


    try {
      const response = await InscriptionService.Inscription(utilisateur)
      console.log(response)
      toast.success('Inscription réussite')


    } catch (error) {
      console.log(error)
      toast.error(" Inscription échoué")

    }
  }


return (
  <>
    <div className='BoutonAccueil'>
      <Link to='/homepage'>
        <button>Retour à Accueil</button>
      </Link>
    </div>
    <div className='registration-container'>
      <h2>Inscription</h2>
      <form  className='registration-form'>
        <label>
          Prénom 
          <input
            type='text'
            name='prenom'
            value={utilisateur.prenom}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nom 
          <input
            type='text'
            name='nom'
            value={utilisateur.nom}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email 
          <input
            type='email'
            name='email'
            value={utilisateur.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Téléphone 
          <input
            type='tel'
            name='tel'
            value={utilisateur.tel}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Adresse 
          <input
            type='text'
            name='adresse'
            value={utilisateur.adresse}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mot de passe 
          <input
            type='password'
            name='mdp'
            value={utilisateur.mdp}
            onChange={handleChange}
          />
        </label>
        <br />
        <Link to="/homepage">
        <button onClick={inscription}>S'inscrire</button>
        </Link>
        <script src="https://www.google.com/recaptcha/api.js"></script>
        
      </form>
    </div>
  </>
);
};

export default RegistrationPage;