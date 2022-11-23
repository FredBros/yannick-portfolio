import React, { useState, useEffect, useRef } from "react";
import { TitleIn } from "../";
import { gsap } from "gsap";

const Title = ({ text, delay }) => {
  if (!text) return null;
  const [tl, setTl] = useState();
  const title = text.split(" ");
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: delay || 0 });
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  return (
    <h1 ref={titleRef} className="title-component">
      {title.map((word, index) => (
        <span key={index}>
          <TitleIn titleRef={titleRef} timeline={tl}>
            {word + (index !== title.length - 1 ? "\u00A0" : "")}
          </TitleIn>
        </span>
      ))}
      <style jsx>{`
        .title-component {
          font-size: var(--font-size-xxl);
        }
        span {
          display: inline-block;
        }
        
      `}</style>
    </h1>
  );
};

export default Title;
