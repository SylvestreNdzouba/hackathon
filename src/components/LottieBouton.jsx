// src/components/LottieAnimation.jsx
import React, { useState } from "react";
//import { Lottie } from "lottie-react";
import Lottie from "lottie-react";
const LottieBouton = () => {
  const [isPlaying, setIsPlaying] = useState(false); // État pour contrôler la lecture

  const handleClick = () => {
    setIsPlaying(!isPlaying); // Inverse l'état de lecture au clic
  };

  return <></>;
};

export default LottieBouton;
