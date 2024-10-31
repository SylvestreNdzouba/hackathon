import React, { useEffect, useRef } from "react";

export default function AuraEffect() {
  const auraRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const auraPos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const aura = document.createElement("div");
    aura.classList.add("mouse-aura");
    aura.style.zIndex = "11";
    document.body.appendChild(aura);
    auraRef.current = aura;

    const moveAura = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animateAura = () => {
      if (auraRef.current) {
        auraPos.current.x += (mouseX.current - auraPos.current.x) * 0.05;
        auraPos.current.y += (mouseY.current - auraPos.current.y) * 0.05;

        const auraStyle = auraRef.current.style;
        auraStyle.left = `${auraPos.current.x}px`;
        auraStyle.top = `${auraPos.current.y}px`;
      }
      requestAnimationFrame(animateAura);
    };

    document.addEventListener("mousemove", moveAura);
    requestAnimationFrame(animateAura);

    return () => {
      document.removeEventListener("mousemove", moveAura);
      document.body.removeChild(aura);
    };
  }, []);

  return null;
}
