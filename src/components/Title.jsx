import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Title = () => {
  const textRef = useRef(null);

  return (
    <div>
      <h1
        style={{
          fontSize: "500px",
          color: "#E7E1E3",
          textAlign: "center",
        }}
      >
        Molten
      </h1>
    </div>
  );
};

export default Title;
