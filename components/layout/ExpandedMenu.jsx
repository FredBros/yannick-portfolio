import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from "gsap";



function ExpandedMenu({toggle}) {
const menu=useRef()
const tl = useRef();
const ctx = useRef();
const text = useRef()

useEffect(() => {
tl.current= gsap.timeline({
  paused: true
})
tl.current.to(menu.current,
  {
   transform: 'translateY(0)',
    duration: 0.7,
  }); 
tl.current.to(text.current, {
  yPercent: 100,
  duration: 2,
 
});
   
},[])


useEffect(() => {
toggle ? tl.current.play() : tl.current.reverse()
},[toggle])

  return (
    <>
      <div className="menu-container" ref={menu}>
        <div className="menu">{`Menu : ${toggle}`}</div>
        <h1 ref={text}>TEST</h1>
      </div>
      <style jsx>{`
        .menu-container {
          opacity: 1;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color5);
          transform: translateY(100vh);
        }
        h1 {          
          overflow: hidden;
          
        }
      `}</style>
    </>
  );
}

export default ExpandedMenu;