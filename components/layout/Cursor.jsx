import React, { useState, useEffect } from "react";



const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [knowMoreHovered, setknowMoreHovered] = useState(false);

  useEffect(() => {


    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    handleLinkHoverEvents();
    handleKnowMoreEvents();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseDown = () => {
    setClicked(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };
  const getBackgroundColor = () => {
    if (clicked) return "#fff";
    if (linkHovered) return "#fff";
    if (knowMoreHovered) return "#ffffff40"
     return "transparent";
  };


  const setScaleLinkHovered = () => {
   if (clicked) return "translate(-50%, -50%) scale(0.9)";
   if (linkHovered) return "translate(-50%, -50%) scale(1.5)";
   if (knowMoreHovered) return "translate(-50%, -50%) scale(4)";
   return "translate(-50%, -50%) scale(1)";
  };

  const getMixBlendMode = () => {
if (knowMoreHovered) return "normal"
return "difference";
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a:not(.know-more-link) ").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };
  const handleKnowMoreEvents = () => {
    document.querySelectorAll(".know-more").forEach((el) => {
      el.addEventListener("mouseover", () => setknowMoreHovered(true));
      el.addEventListener("mouseout", () => setknowMoreHovered(false));
    });
  };

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <div
      className="cursor"
      style={{
        
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        backgroundColor: getBackgroundColor(),
        transform: setScaleLinkHovered(),
        mixBlendMode: getMixBlendMode(),
        backdropFilter: knowMoreHovered ?  "blur( 2px )" : "none",
      }}
    >
      
      {knowMoreHovered ? (<div className="popup-container">
        <p>en savoir plus</p>
      </div>) : null}
      <style jsx>{`
        .cursor {
          width: 40px;
          height: 40px;
          border: 2px solid #fff;
          border-radius: 100%;
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 200;

          transition-property: opacity, background-color, transform;
          transition-duration: 500ms;
          transition-timing-function: ease;
        }
        .popup-container {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        p {
            font-size: 5px;
          margin-left: -100%;
          margin-right: -100%;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Cursor;
