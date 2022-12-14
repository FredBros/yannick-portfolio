import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);



function ContentIn({ children, delay, toggle }) {
   const el = useRef();
   const contentTl = useRef();
 

  useEffect(() => {
    toggle(true);
    const element = el.current;
    el.current.style.fontKerning = "none";
    const splittedText = SplitType.create(el.current, {
      types: "words",
    });
    const targets = gsap.utils.toArray(splittedText.words);
    const ctx = gsap.context(() => {
      contentTl.current = gsap.timeline({});
      gsap.from(targets, {
        autoAlpha: 0,
        duration: 0.1,
        delay: delay || 0,
        stagger: 0.05,
      });
    });
    return () => {
      ctx.revert();
      SplitType.revert(element);
    };
  }, [delay, toggle]);

  if (!children) {
    return null;
  }

  return (
    
    <div className="div" ref={el}>
        {children} 
      </div> 
  );
}


export default ContentIn;


