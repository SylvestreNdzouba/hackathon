import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const textRef = useRef(null);

  return (
    <>
      <div className="container" style={{ backgroundColor: "black" }}>
        <div>
          Avec Molten, redécouvrez l&apos;art de vivre l&apos;instant présent
          sous une
          <br /> lumière nouvelle. Offrez-vous la signature raffinée d&apos;un
          objet qui
          <br /> disparaît pour mieux imprimer son empreinte.
        </div>

        <div>
          <h5>Réseaux</h5>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>

        <div>
          <h5>A propos</h5>
          <ul>
            <li>
              <a href="#">Mes oeuvres</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="estelle" style={{ marginBottom: "-20vh" }}>
        <div className="left">@ESTELLE SCHMITZ</div>
        <div className="right">
          <div>COOKIES</div>
          <div>COOKIES</div>
          <div>MENTIONS LEGALES</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
