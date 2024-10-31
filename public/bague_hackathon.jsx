import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bague(props) {
  const groupRef = useRef();
  const { scene } = useGLTF("/BAGUE_4.glb");

  useEffect(() => {
    const container = document.createElement("div");
    container.style.height = "425vh";
    container.style.position = "absolute";
    container.style.width = "100%";
    container.style.top = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "-1";
    document.body.appendChild(container);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Animation de rotation
    tl.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      ease: "power1.inOut",
      duration: 1,
    });

    gsap.fromTo(
      groupRef.current.material,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.out" }
    );

    // Cleanup
    return () => {
      container.remove();
      tl.kill();
    };
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/BAGUE_4.glb");
