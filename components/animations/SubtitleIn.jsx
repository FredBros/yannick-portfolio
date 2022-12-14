import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function useArrayRef() {
  // create a ref array and initialize it to an empty array
  const refs = useRef([]);
  refs.current = [];
  //push all the refs in the array
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const SubtitleIn = ({ children, delay }) => {
  
  const [refs, setRefs] = useArrayRef();

  useEffect(() => {
    //animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        refs.current,
        {
          autoAlpha: 0,
          y: "100%",
        },
        {
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.3,
          delay: delay || 0,
          y: "0%",
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, [refs, delay]);

  let words = children.split(" ");

  if (!children) {
    return null;
  }
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span
          className="words"
          ref={setRefs}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {word + (i !== word.length - 1 ? "\u00A0" : "")}
        </span>
        <style jsx>{`
          .words {
            opacity: 0;
          }
        `}</style>
      </span>
    );
  });
};

export default SubtitleIn;
