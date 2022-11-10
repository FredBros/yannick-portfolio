import React, { useEffect, useRef, useState } from "react";
// import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 function useArrayRef() {
   // create a ref array and initialize it to an empty array
   const refs = useRef([]);
   refs.current = [];
   //push all the refs in the array
   return [refs, (ref) => ref && refs.current.push(ref)];
 }

function TextSplitTween({ children }) {
  const [refs, setRefs] = useArrayRef();
  const triggerRef = useRef();

  useEffect(() => {
    const splitTextTween = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        // markers: true,
      },
    });
    splitTextTween.fromTo(
      refs.current,
      {
        autoAlpha: 0,
        display: "inline-block",
        y: "100%",
      },
      {
        autoAlpha: 1,
        delay: 0.2,
        display: "inline-block",
        duration: 1.5,
        ease: "back.inOut",
        stagger: 0.05,
        y: "0%",
      }
    );
  }, [refs]);

  let words = children.split(" ");

  return words.map((word, i) => {
    return (
      <span
        ref={triggerRef}
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span
          ref={setRefs}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {word + (i !== word.length - 1 ? "\u00A0" : "")}
        </span>
      </span>
    );
  });
}

export default TextSplitTween;

























// function TextSplitTween({ children }) {
//     const [text, setText] = useState()
//     const [isLoaded, setIsLoaded] = useState(false)
//   function splittedTextFoo(children) {
//     if (children.type === "h1") {
//       const text = new SplitType(`#${children.props.id}`, { types: "chars" });
//     //   console.log("chars");
//     //   console.log(text.chars);
//       return text.chars;
//     }
//     if (children.type === "h2") {
//       const text = new SplitType(`#${children.props.id}`, { types: "words" });
//     //   console.log("words");
//     //   console.log(text.words);
//       return text.words;
//     }
//     const text = new SplitType(`#${children.props.id}`, { types: "lines" });
//     // console.log("lines");
//     console.log(text.lines);
//     // return text.lines;
//   }

//   useEffect(() => {
   
//   const splittedText = splittedTextFoo(children);
//   console.log("splittedText : ", children.type, splittedText);
//   setText(splittedText);
//   setIsLoaded(true)

// },[])
  


//   console.log("splittedText out of useEffect: ", text);

//   return <>{children}</>;
// }

// export default TextSplitTween;
