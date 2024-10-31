/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 candle.gltf 
Author: Nortenko Dmytro (https://sketchfab.com/leondp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/three-candles-and-a-golden-candlestick-9d46daabbefe4b4eab74d9da349dd015
Title: Three candles and a golden candlestick
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Candle(props) {
  const { nodes, materials } = useGLTF("/candle.gltf");

  const groupRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  // Rotation continue de l'objet
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  // Effet d'apparition fluide avec gsap.timeline
  useEffect(() => {
    if (isLoaded && groupRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        groupRef.current.position,
        { x: 2 }, // Commence à droite
        {
          x: 0, // Se termine au centre
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5, // Laisse un peu de temps avant de commencer
        }
      );
    }
  }, [isLoaded]);

  return (
    <group
      ref={groupRef}
      dispose={null}
      position={[2, -1, 0]} // Position initiale pour l'effet de translation
      scale={[0.03, 0.03, 0.03]}
      {...props}
      onUpdate={() => {
        if (!isLoaded) setIsLoaded(true);
      }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.fire}
            position={[10.955, 106.092, -5.188]}
            rotation={[-Math.PI / 2, 0, 1.261]}
            scale={[100, 100, 121.073]}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.candlestick}
            position={[0, 19.686, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.candles}
            position={[1.329, 50.636, -0.736]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/candle.gltf");
