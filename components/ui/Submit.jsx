import React,{useEffect, useRef, useState}  from 'react'
import { gsap } from "gsap";


import { HiArrowNarrowRight } from "react-icons/hi";

function Submit({ text, isSending, isSend, isSubmitted }) {


  const [isHover, setIsHover] = useState(false);
  const button = useRef();
  const content = useRef();
  const arrow = useRef();
  const fullColor = useRef();
  const ctx = useRef();
  const tl = useRef();


  // Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power1.inOut",
        },
      });

      tl.current.to(fullColor.current, {
        right: 0,
        duration: 0.4,
      });
      tl.current.to(
        content.current,
        {
          padding: "0.5em 3.5em 0.5em 0.5em",
          duration: 0,
        },
        ">"
      );

      tl.current.to(
        fullColor.current,
        {
          left: "calc(100% - 3em)",
          duration: 0.3,
        },
        0.4
      );

      tl.current.to(
        arrow.current,
        {
          right: 0,
          duration: 0.2,
        },
        0.3
      );
    }, button.current);

    return () => {
      ctx.revert();
    };
  }, []);

  // Trigger animation
  useEffect(() => {
    isHover ? tl.current.play() : tl.current.reverse();
  }, [isHover]);

 
  // buttonValue
    const buttonValue = () => {
      if (isSending) {
        console.log("isSending", isSending);
        return "sending";}
      if(isSend && isSubmitted){
        console.log("Envoie réussi");
return "Merci ❤"
        }
        if(isSend && !isSubmitted){
        console.log("Erreur de l'envoie");
return "Erreure 🤔"      
};
      return text;
    }

  return (
    <>
      <div
        className="submit-button"
        ref={button}
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      >
        <input
          type="submit"
          className="to-click"
          value={buttonValue().toUpperCase()}
          ref={content}
        />
        <div className="full-color" ref={fullColor}></div>
        <div className="arrow" ref={arrow}>
          <HiArrowNarrowRight
            color="white"
            fontSize="2em"
            className="arrow-svg"
          />
        </div>
      </div>

      <style jsx>{`
        .submit-button {
          position: relative;
          display: inline-block;
        }
        input {
          font-size: var(--font-size-base);
          font-family: "Open Sans", sans-serif;
          color: inherit;
          border: solid 2px var(--foreground);
          border-left: none;
          border-right: none;
          font-size: inherit;
          padding: 0.5em 2em;
        }
        .to-click {
          cursor: none;
        }
        .arrow,
        .full-color {
          position: absolute;
          height: 100%;
          top: 0;
          bottom: 0;
        }
        .full-color {
          left: 0;
          right: 100%;
          background-color: var(--foreground);
        }
        .arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          left: calc(100% - 2.99em);
          right: 3em;
          transform: scaleX(1);
          transform-origin: left;
          background-color: var(--foreground);
        }
        .arrow-svg {
          transform: translateX(-100%);
        }
      `}</style>
    </>
  );
}

export default Submit
