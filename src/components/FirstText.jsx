import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FirstText = () => {
  const textRef = useRef(null);

  return (
    <div style={{ marginBottom: "50vh" }}>
      <h2
        style={{
          fontWeight: "1000",
          color: "#FAD5EB",
          fontSize: "142.71px",
          textAlign: "center",
          lineHeight: "0.9",
        }}
      >
        L'ÉCLAT
        <br /> D'UN INSTANT,
        <br /> LA SAVEUR
        <br /> D'UN MOMENT
        <br />
      </h2>
      <p
        style={{
          color: "#FAD5EB",
          textAlign: "center",
          paddingLeft: "25vw",
          paddingRight: "25vw",
          marginTop: "-7vh",
        }}
      >
        La bague à consommer sans modération pensée par la visionnaire, Estelle
        Schmitz. Entre artifice et authentique, Molten promet l'expérience rare
        et poétique de l&apos;unique, où chaque flamme se révèle avec style.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "#F7F5F0",
            color: "#51082A",
            paddingRight: "7vw",
            paddingLeft: "7vw",
            borderRadius: "20px",
            marginTop: "5px",
            fontSize: "2vh",
          }}
        >
          DÉCOUVRIR
        </button>
      </div>
    </div>
  );
};

export default FirstText;
