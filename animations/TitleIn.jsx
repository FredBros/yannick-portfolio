import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";


const TitleIn = ({ children, delay}) => {
const el=useRef()

useEffect(()=>{

  const splitedText = SplitType.create(el.current, {
    types: "chars",
  });
  const ctx= gsap.context(()=>{
    gsap.from(splitedText.chars, {
      // autoAlpha: 0,
      y: "100%",
      stagger: 0.05,
      duration: 0.2,
      delay: delay || 0,
    });
  })
  return() => ctx.revert()
},[])

  return <div ref={el}> {children}</div>;
}

export default TitleIn;