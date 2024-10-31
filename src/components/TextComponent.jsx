import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TextComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={textRef} style={{ padding: "20px", color: "#ffffff" }}>
      <h1>Three Candle</h1>
      <p>Voici une description de mon modèle 3D affiché à droite.</p>
    </div>
  );
};

export default TextComponent;
