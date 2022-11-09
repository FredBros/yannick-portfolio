import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import SplitType from "split-type";
import Link from "next/link"



function ExpandedMenu({toggle}) {
const menu=useRef()
const tl = useRef();
const ctx = useRef();

const text0 = useRef()
const text1 = useRef()
const text2 = useRef()
const text3 = useRef()
const text4 = useRef()
const text5 = useRef()
const text6 = useRef()
const text7 = useRef()
const text8 = useRef()
const text9 = useRef()
const text10 = useRef()



useEffect(() => {
  const splitedText0 = SplitType.create(text0.current);
  const splitedText1 = SplitType.create(text1.current);
  const splitedText2 = SplitType.create(text2.current);
  const splitedText3 = SplitType.create(text3.current);
  const splitedText4 = SplitType.create(text4.current);
  const splitedText5 = SplitType.create(text5.current);
  const splitedText6 = SplitType.create(text6.current);
  
  const fullSplitedTexts = [
    splitedText0.chars,
    splitedText1.chars,
    splitedText2.chars,
    splitedText3.chars,
    splitedText4.chars,
    splitedText5.chars,
    splitedText6.chars,
    // splitedText7.chars,
    // splitedText8.chars,
    // splitedText9.chars,
    // splitedText10.chars,
    text7.current,
    text8.current,
    text9.current,
    text10.current,
  ];
const fullSplitedTextsFlat = fullSplitedTexts.flat()
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({
      paused: true,
    });
    tl.current.to(menu.current, {
      y: "0",
      duration: 0.2,
    });
    tl.current.to(fullSplitedTexts, {
      yPercent: -100,
      duration: 0.15,
      stagger: { amount: 0.7 },
    });
    return () => {
      ctx.revert();
    };
  }, menu);
}, []);



useEffect(() => {
toggle ? tl.current.play() : tl.current.reverse()
},[toggle])



  return (
    <>
      <div className="menu-container" ref={menu}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/">
              <a>
                <h1 ref={text0}>Accueil</h1>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a>
                <h1 ref={text1}>À propos</h1>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a>
                <h1 ref={text2}>Services</h1>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a>
                <h1 ref={text3}>Contact</h1>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/delivery">
              <a>
                <h1 ref={text4}>Convoyages</h1>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/diplome">
              <a>
                <h1 ref={text5}>Diplômes</h1>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <h4 ref={text7}>Skippeur</h4>
          </li>
          <li>
            <h4 ref={text8}>professionnel</h4>
          </li>
          <li>
            <h4 ref={text9}>Basé à Lorient,</h4>
          </li>
          <li>
            <h4 ref={text10}>France</h4>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .menu-container {
          z-index: 50;
          opacity: 1;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color5);
          transform: translateY(100%);
          display: flex;
          flex-direction: column;
          padding: 50px 20px;
          justify-content: space-between;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        .nav-list {
          text-align: center;
        }
        li {
          overflow: hidden;
        }
        .nav-item {
          margin-bottom: 20px;
        }
        h1,
        h4 {
          margin: 0;
          transform: translateY(100%);
        }
      `}</style>
    </>
  );
}

export default ExpandedMenu;