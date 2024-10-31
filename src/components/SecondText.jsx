import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SecondText = () => {
  const textRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10vw", // Espace entre les deux divs
        marginTop: "50vh", // Espace avec le texte précédent
      }}
    >
      <div style={{ textAlign: "left" }}>
        {" "}
        {/* Alignement à gauche */}
        <h3
          style={{
            fontSize: "105px",
            lineHeight: "0.9",
            fontWeight: "1000",
            margin: 0, // Retirer la marge
            padding: 0,
            color: "#E7E1E3", // Retirer le padding
          }}
        >
          DES <br />
          MATÉRIAUX
          <br /> D&apos;EXCEPTION
          <br /> TOXIQUE &
          <br />
          ALLERGÈNE
        </h3>
      </div>
      <div>
        <p
          style={{
            fontSize: "3vh",
            lineHeight: "2",
          }}
        >
          FIL D&apos;AME DE PLOMB{" "}
          <sup style={{ fontSize: "1.5vh" }}>Toxique</sup>
          <br />
          CIRE PARFUMEE <sup style={{ fontSize: "1.5vh" }}>Cancérigène</sup>
          <br />
          PUR COBALT <sup style={{ fontSize: "1.5vh" }}>Diamant de sang</sup>
        </p>
      </div>
    </div>
  );
};

export default SecondText;
