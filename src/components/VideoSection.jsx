import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const VideoFooter = () => {
  const textRef = useRef(null);

  return (
    <div class="video-container">
      <video
        controls
        autoPlay
        loop
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          width: "400px",
          height: "auto",
          zIndex: "5",
        }}
      >
        <source src="/Composition.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoFooter;
