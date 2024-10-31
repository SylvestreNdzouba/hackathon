import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Estelle = () => {
  const textRef = useRef(null);

  return (
    <div
      className="image-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        zIndex: "10",
        position: "relative",
      }}
    >
      <h3
        style={{
          fontSize: "105px",
          color: "#FAD5EB",
          fontWeight: "1000",
        }}
      >
        ESTELLE
        <br />
        SCHMITZ
      </h3>
      <a href="/estelle.png">
        {/* Ajout d'un texte ou d'une image pour rendre le lien visible */}
        <img src="/estelle.png" alt="Estelle" />
      </a>
      <p style={{ width: "500px", textAlign: "left" }}>
        Estelle Schmitz est une artiste et créatrice belge engagée, reconnue
        pour ses créations avant-gardistes qui interrogent les normes de la mode
        et de l'art contemporain. Elle explore le langage des émotions par des
        œuvres hybrides, à la fois poétiques et subversives. Fascinée par la
        dualité des matériaux, elle a fondé Molten, un projet qui critique la
        superficialité de la mode moderne. Elle aspire à transformer les
        accessoires en œuvres d'art éphémères, incitant à une réflexion sur
        notre consommation et sur la perception de la beauté.
      </p>
    </div>
  );
};

export default Estelle;
