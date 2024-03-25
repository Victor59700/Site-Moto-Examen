import React from "react";
import "../Style/Basket.css";
import { Link } from "react-router-dom";

const Basket = ({ selectedMoto, removeFromCart, handleValidation }) => {
  const handleRemove = () => {
    removeFromCart();
  };

  return (
    <>
      <div className="BoutonAccueil">
        <Link to="/homepage">
          <button>Retour à l'accueil</button>
        </Link>
      </div>
      <div className="Card">
        <h2>Ma réservation</h2>
        {selectedMoto ? (
          <div className="SelectedMoto">
            <p><img src={selectedMoto.image_url} alt={selectedMoto.modele} /></p>
            <p>Modèle : {selectedMoto.modele}</p>
            <p>Année : {selectedMoto.annee}</p>
            <p>Permis : {selectedMoto.permis}</p>
            <p>Type : {selectedMoto.type_moto}</p>
            <p>Tarif journalier : {selectedMoto.prix_journalier} Euros</p>
            <button onClick={handleRemove}>Supprimer</button>
          </div>
        ) : (
          <p>Aucune moto sélectionnée</p>
        )}
        <button onClick={handleValidation}>Valider</button>
      </div>
    </>
  );
};

export default Basket;
