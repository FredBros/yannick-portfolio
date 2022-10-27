import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import SplitType from "split-type";



function ExpandedMenu({toggle}) {
const menu=useRef()
const tl = useRef();
const ctx = useRef();
const text = useRef()
const textSplited = SplitType.create('.text-splited');


useEffect(() => {
  tl.current = gsap.timeline({
    paused: true,
  });
  tl.current.to(menu.current, {
    transform: "translateY(0)",
    duration: 0.7,
  });
  tl.current.to(text.current, {
    yPercent: -100,
    duration: 0.2,
  });
}, []);



useEffect(() => {
toggle ? tl.current.play() : tl.current.reverse()
},[toggle])

  return (
    <>
      <div className="menu-container" ref={menu}>
        <div className="menu">{`Menu : ${toggle}`}</div>
        <ul>
          <li className="nav-item">
            <h1 className='text-splited' ref={text}>TEST</h1>
          </li>
        </ul>
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
        ul {
          list-style: none;
        }
        li {
          overflow: hidden;
        }
        h1 {
          margin: 0;
          transform: translateY(100%);
          line-height: 1;
        }
      `}</style>
    </>
  );
}

export default ExpandedMenu;