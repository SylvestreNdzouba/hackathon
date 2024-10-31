import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const VideoSection = () => {
  const textRef = useRef(null);

  return (
    <div>
      <p
        className="molten-3"
        style={{
          fontSize: "500px",
          color: "#FAD5EB",
          textAlign: "center",
          lineHeight: "0.8",
        }}
      >
        Molten
        <br />
        Molten
        <br />
        Molten
        <br />
      </p>
    </div>
  );
};

export default VideoSection;
