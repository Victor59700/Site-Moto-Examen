import React, { useRef } from "react";
import PictureHome from "../Pictures/PictureHome.jpg";
import Slider from "../Pages/Slider";
import "../Style/HomePage.css";
import { useNavigate } from "react-router-dom";
import ImageLocation from "../Pictures/ImageLocation.jpeg";

const HomePage = () => {
  const topRef = useRef(null);
  const midRef = useRef(null);
  const phoRef = useRef(null);
  const contRef = useRef(null);
  const overlayTextRef = useRef(null);
  const navigate = useNavigate();

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRegistration = () => {
    midRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPhoto = () => {
    phoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCont = () => {
    contRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={topRef}></div>
      <div className="Container">
        <div className="ImageContainer">
          <img src={PictureHome} alt="PictureHome" className="Picture" />
          <div className="OverlayText" ref={overlayTextRef}>
            <div className="TexteForme">
              <h3>La Location d'une Harley en quelques clics !</h3>
              <p>
                - H-D Location vous propose une vaste gamme de motos Harley
                Davidson, <br />
                comprenant à la fois des modèles récents et des modèles plus
                anciens, <br />
                soigneusement entretenus et révisés.
              </p>
              <h3>La location d'une moto n'a jamais été aussi simple !</h3>
              <ul>
                <li>En quelques clics, choisissez votre moto.</li>
                <li>Réservez en ligne.</li>
                <li>Récupéré votre moto auprès de l'agence HD location.</li>
              </ul>
              <p>
                - Une création de compte client vous sera demandée dans le cas
                où vous n’avez pas encore de compte chez nous. <br />
                - En revanche, si vous avez déjà un compte client, il vous
                suffit simplement de vous connecter avec vos identifiants
                personnels. <br />
                Dès que vous avez votre compte client créé ou connecté, vous
                pourrez directement réservé en ligne votre moto.
              </p>
              <p>
                - A la suite de votre réservation, <br />
                un mail récapitulatif vous sera transmis dans le but de bien
                confirmer votre réservation, <br />
                ainsi que de vous apporter toutes les informations nécessaires
                avant le jour de votre location.
              </p>
            </div>

            <div className="TextHome">
              <h3>Quel permis pour quel véhicule ?</h3>
              <p>
                Dans le cadre de la location, il est nécessaire de posséder un
                permis A, A2 pour circuler en moto. <br />
                Sur chacun des véhicules proposés à la location par H-D
                Location, vous retrouverez une mention claire et précise sur le
                type de permis demandé. <br />
                Si vous ne trouvez pas le permis indiqué, il est clairement
                indiqué sur votre permis de conduire. <br />
                Dans le parc de motos dédiés à la location H-D Location, vous
                pouvez louer un véhicule avec le permis A2. <br />
                Le véhicule devra respecter les conditions de restrictions de
                puissance soit 47,5 chevaux.{" "}
              </p>

              <h3>Dans le cadre d’un permis de conduire étranger</h3>
              <p>
                Vous pouvez conduire une moto de notre parc avec un permis
                européen. Avant toute réservation, votre permis de conduire doit
                :{" "}
              </p>
              <ul>
                <li>
                  - être valable aucune expiration, suspension ou révocation
                </li>
                <br />
                <li>- être valide dans la catégorie moto </li>
                <br />
                <li>être utilisable dans l’Union Européenne </li>
                <br />
                <li>
                  être délivré par l’un des états membres de l’Union Européenne
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
        <div className="ButtonHome">
          <button className="ButtonHome" onClick={scrollToTop}>
            Présentation
          </button>
          <button className="ButtonHome" onClick={scrollToRegistration}>
            Conditions
          </button>
          <button className="ButtonHome" onClick={scrollToPhoto}>
            Photos
          </button>
          <button
            className="ButtonHome"
            onClick={() => {
              navigate("/catalog");
            }}
          >
            Louer une moto{" "}
          </button>
          <button className="ButtonHome" onClick={scrollToCont}>
            Contact
          </button>
        </div>

        <div ref={midRef}></div>
        <div className="presentation">
          <h2>Comment récupérer la moto ?</h2>
          <p>
            -Vous devez vous rendre à l’agence indiquée sur votre mail de
            confirmation afin de récupérer le véhicule que vous avez réservé en
            ligne.
          </p>
          <p>
            -Nous vous demandons de bien vous munir des pièces justificatives
            demandées afin de vérifier et compléter votre dossier de location
          </p>
          <ul>
            <li>Votre permis de conduire</li>
            <li>Votre carte bancaire</li>
            <li>Votre carte d’identité</li>
            <li>Votre caution</li>
          </ul>
          <p>
            -Dès que votre contrat de location est complété, nous vous
            remettrons les clés du véhicule. La caution du véhicule loué vous
            sera également demandée. Vous ferez l’état des lieux du véhicule
            avec le responsable de l’agence. Avant le départ, nous vous
            conseillons de poser toutes vos questions.
          </p>
          <p>Vous êtes prêts pour partir à l’aventure ! 🏍️</p>
          <img src={ImageLocation} alt="Picture" className="Picturelocation" />
          <h2>"Never ride faster than your angel can fly"</h2>
        </div>
        <video
          controls
          autoPlay
          loop
          muted
          className="horizontal-video"
          width="100%"
          height="350px"
          controlsList="nodownload"
        >
          <source
            src="https://cdn.discordapp.com/attachments/1188779583017861120/1198945189784469504/pexels-yash-rao-8343314_2160p.mp4?ex=65f81eb8&is=65e5a9b8&hm=c610a18eded6a85fdba8557b22ade2403fd11599f43543d0cb8ee0c9499bc9a4&"
            type="video/mp4"
          />
        </video>
        <Slider phoRef={phoRef} />
        <br />
        <br />
        <br />
        <div className="Maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.2553453090345!2d3.1014294766424917!3d50.65947867229122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3298acf97f9e9%3A0x2695f07943f9175e!2s133%20Av.%20Poincar%C3%A9%2C%2059700%20Marcq-en-Bar%C5%93ul!5e1!3m2!1sfr!2sfr!4v1707139936729!5m2!1sfr!2sfr"
            width="1710"
            height="220"
          ></iframe>
        </div>
        <div className="Contact" ref={contRef}>
          <div className="Horaire">
            <h1> 🕛 Nos Horaires d'ouverture </h1>
            <p>
              {" "}
              Lundi au Samedi de 10h à 19h. <br />
              Fermé les dimanche, et jours fériés.
            </p>
            <p>
              📞 Téléphone : 06 71 76 97 44 <br />
              ✉️ Email : HD-location@orange.fr
            </p>
          </div>
          <div className="Adresse">
            <h1>📍 Adresse</h1>
            <p>
              133 Avenue Poincaré
              <br />
              59700 Marcq-en-Barœul <br />
              Tram Clemenceau Hippodrome
            </p>
          </div>
          <div className="Texteline">
            <div className="Réseaux">
              <h1>Nos Réseaux Sociaux</h1>
              <div className="LogoRéseaux">
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt="Logo Facebook"
                    href="https://www.facebook.com/photo/?fbid=106391088488280&set=a.106391115154944"
                    target="_blank"
                  />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                    alt="Logo Instagram"
                  />
                </a>
                <a href="https://twitter.com/?lang=fr" target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                    alt="Logo Twitter"
                  />
                </a>
                <a href="https://www.tiktok.com/fr/" target="_blank">
                  <img
                    src="https://img.freepik.com/vecteurs-premium/logo-tik-tok_578229-290.jpg"
                    alt="Logo Tiktok"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
