import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MoltenFooter = () => {
  const textRef = useRef(null);

  return (
    <div
      style={{
        backgroundColor: "black",
        overflow: "hidden",
        height: "400px",
      }}
    >
      <div
        className="moltenSection"
        style={{
          fontSize: "500px",
          color: "white",
          textAlign: "center",
        }}
      >
        Molten
      </div>
    </div>
  );
};

export default MoltenFooter;
