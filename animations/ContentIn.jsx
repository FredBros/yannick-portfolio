import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";



function ContentIn({ children, delay }) {
  const el = useRef();
//   let text = gsap.utils.toArray(el.current);
//   console.log(text);

  useEffect(() => {
    let text = gsap.utils.toArray(".div > *" );
    const ctx = gsap.context(() => {
      gsap.from(text, {
        autoAlpha: 0,
        duration: 1,
        delay: delay || 0,
        stagger: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return <div className ="div"ref={el}>{children}</div>;
}


export default ContentIn;
