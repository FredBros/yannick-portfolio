import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

function SubtitleIn({children, delay}) {

const el = useRef();

useEffect(() => {
  const splitedText = SplitType.create(el.current, {
    types: "words"
  });
  const ctx = gsap.context(() => {
    gsap.from(splitedText.words, {
      // autoAlpha: 0,
      y: "100%",
      stagger: 0.1,
      duration: 0.3,
      delay: delay || 0,
    });
  });
  return () => ctx.revert();
}, []);

  return <div ref={el}>{children}</div>;
}

export default SubtitleIn