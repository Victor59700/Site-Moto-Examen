import React, { useEffect, useState } from "react";
import MotoService from "../Services/MotoService";
import '../Style/MotorCycleCatalogPage.css';
import { Link } from "react-router-dom";

const MotorCycleCatalogPage = ({ user, addToCart }) => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    getMotos();
  }, []);

  const getMotos = async () => {
    try {
      const response = await MotoService.fetchMoto();
      setMotos(response.data);
    } catch (error) {
      console.error("Error fetching moto data:", error);
    }
  };

  const handleAddToCart = (moto) => {
    if (user) {
      addToCart(moto);
    } else {
      alert("Vous devez être connecté pour réserver une moto.");
      // Rediriger l'utilisateur vers la page de connexion
      window.location.href = "/connexion";
    }
  };

  return (
    <>
      <div className="main">  
        <h1>Catalogue de nos motos </h1>
        <div className='BoutonRetour'>
          <Link to="/homepage">
            <button>Retour à l'accueil</button>  
          </Link>
        </div>
      </div>
      <ul className="cards">
        {motos.map((moto) => (
          <li key={moto.id} className="cards_item">
            <div className="card">
              <div className="card_image"><img src={moto.image_url} alt={moto.modele} /></div>
              <div className="card_content">
                <h2 className="card_title">{moto.modele}</h2>
                <p className="Année">Année : {moto.annee} </p>
                <p className="Type de moto">Type : {moto.type_moto}</p>
                <p className="Permis"> Permis : {moto.permis}</p>
                <p className="Description">Description : {moto.description}</p>
                <p className="prix_journalier">Tarif journalier : {moto.prix_journalier} Euros</p>
                <button className="btn card_btn" onClick={() => handleAddToCart(moto)}>Réserver</button>
              </div> 
            </div>
          </li> 
        ))}
      </ul>
    </>
  );
};

export default MotorCycleCatalogPage;
