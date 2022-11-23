import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function useArrayRef() {
  // create a ref array and initialize it to an empty array
  const refs = useRef([]);
  refs.current = [];
  //push all the refs in the array
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const TestTitle = ({ children, timeline}) => {

  if (!children) {
    return null;
  }
  const [refs, setRefs] = useArrayRef();

  useEffect(() => {
    //animation
    timeline &&
      timeline.fromTo(
        refs.current,
        {
          autoAlpha: 0,
          y: "100%",
        },
        {
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.2,
          y: "0%",
        },
        ">"
      );
  }, [timeline]);

  const letters = children.split("");

  return letters.map((letter, i) => {
    return (
      <span
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span
          className="letter"
          ref={setRefs}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {letter}
        </span>
        <style jsx>{`
          .letter {
            opacity: 0;
          }
        `}</style>
      </span>
    );
  });

  // return(children)
  // };
};

export default TestTitle;
