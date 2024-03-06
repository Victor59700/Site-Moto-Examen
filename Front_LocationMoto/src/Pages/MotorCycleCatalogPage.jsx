import React, { useEffect, useState } from "react";
import MotoService from "../Services/MotoService";
import '../Style/MotorCycleCatalogPage.css';
import { Link } from "react-router-dom";

const MotorCycleCatalogPage = () => {
  const [motos, setMotos] = useState([]);

  const getMoto = async () => {
    try {
      const response = await MotoService.fetchMoto();
      console.log(response);
      setMotos(response.data);
    } catch (error) {
      console.error("Error fetching moto data:", error);
    }
  };

  useEffect(() => {
    getMoto();
  }, []);

  return (

<>

    <div className="main">  
    <h1>Catalogue de nos motos </h1>
   <div className='BoutonRetour'>
<Link to="/homepage">

  <button>Retour à Accueil</button>  
</Link>
</div>
    </div>
      <ul className="cards">
        {motos.map((m) => (
          <li key={m.id} className="cards_item">
            <div className="card">
              <div className="card_image"><img src={m.image_url} alt={m.modele} /></div>
              <div className="card_content">
                <h2 className="card_title">{m.modele}</h2>
                  <p className="Année">Année : {m.annee} </p>
                  <p className="Type de moto">Type : {m.type_moto}</p>
                  <p className="Permis"> Permis : {m.Permis}</p>
                  <p className="Description">Description : {m.description}</p>
                  <p className="prix_journalier">Tarif journalier : {m.prix_journalier}  Euros</p>
                  
                  <Link to="/basket">
           <button className="btn card_btn">Réserver</button>
               </Link>
           </div> 
            </div>
          </li> 
     
        ))}
      </ul>

    </>
  );
};

export default MotorCycleCatalogPage;
