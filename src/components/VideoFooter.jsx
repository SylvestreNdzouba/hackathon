import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const VideoFooter = () => {
  const textRef = useRef(null);

  return (
    <div class="video-container">
      <video controls>
        <source src="/VideoBouton.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoFooter;
