import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Candle2(props) {
  const { nodes, materials } = useGLTF("/candle.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.fire}
            position={[10.955, 106.092, -5.188]}
            rotation={[-Math.PI / 2, 0, 1.261]}
            scale={[100, 100, 121.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.candlestick}
            position={[0, 19.686, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
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

useGLTF.preload("/candle.glb");
