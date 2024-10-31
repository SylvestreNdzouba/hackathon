import { useEffect } from "react";
import gsap from "gsap";

export default function RevealOverlay() {
  useEffect(() => {
    const overlay = document.querySelector(".reveal-overlay");

    gsap.fromTo(
      overlay,
      {
        webkitMaskImage:
          "radial-gradient(circle at 50% 80%, transparent 0%, rgba(0,0,0,0) 0%, black 20%)",
        maskImage:
          "radial-gradient(circle at 50% 80%, transparent 0%, rgba(0,0,0,0) 0%, black 20%)",
      },
      {
        webkitMaskImage:
          "radial-gradient(circle at 50% 80%, transparent 100%, rgba(0,0,0,0.5) 110%, black 120%)",
        maskImage:
          "radial-gradient(circle at 50% 80%, transparent 100%, rgba(0,0,0,0.5) 110%, black 120%)",
        duration: 2.5,
        delay: 1,
        ease: "power2.inOut",
        onComplete: () => overlay.remove(),
      }
    );
  }, []);

  return (
    <div
      className="reveal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
