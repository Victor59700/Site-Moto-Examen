import React from "react";
import "../Style/Basket.css";
import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <>
      <div className="BoutonAccueil">
        <Link to="/homepage">
          <button>Retour à Accueil</button>
        </Link>
      </div>
      <div className="Card">
        <h2>Ma réservation</h2>
        <button>Valider</button>
      </div>
    </>
  );
};

export default Basket;
