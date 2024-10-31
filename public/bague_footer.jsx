import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function BagueFooter(props) {
  const groupRef = useRef();
  const { scene } = useGLTF("/BAGUE_5.glb");

  useEffect(() => {
    const rotate = () => {
      gsap.to(groupRef.current.rotation, {
        y: groupRef.current.rotation.y + Math.PI * 2, // Rotation complète
        duration: 5, // Durée de la rotation
        ease: "none", // Pas d'accélération
        onComplete: rotate, // Relance la fonction pour une rotation continue
      });
    };

    rotate(); // Démarre la rotation

    return () => {
      gsap.killTweensOf(groupRef.current.rotation); // Nettoyage
    };
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/BAGUE_5.glb");
