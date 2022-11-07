import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import SplitType from "split-type";
import useSplintedText from "../../hooks/useSplintedText"



function ExpandedMenu({toggle}) {
const menu=useRef()
const tl = useRef();
const ctx = useRef();
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
const texts = [
  { text: "À propos", Size: "h1" },
  { text: "Services", Size: "h1" },
  { text: "Contact", Size: "h1" },
  { text: "Expérience", Size: "h1" },
  { text: "Mes convoyages", Size: "h1" },
  { text: "Diplômes", Size: "h1" },
  // { text: "Skippeur", Size: "h4" },
  // { text: "professionnel", Size: "h4" },
  // { text: "Basé à Lorient,", Size: "h4" },
  // { text: "France", Size: "h4" },
];

const { fullSplitedText, content } = useSplintedText(texts);


useEffect(() => {
  console.log(fullSplitedText, content);
  const splitedText1 = SplitType.create(text1.current);
  const splitedText2 = SplitType.create(text2.current);
  const splitedText3 = SplitType.create(text3.current);
  const splitedText4 = SplitType.create(text4.current);
  const splitedText5 = SplitType.create(text5.current);
  const splitedText6 = SplitType.create(text6.current);
  // const splitedText7 = SplitType.create(text7.current);
  // const splitedText8 = SplitType.create(text8.current);
  // const splitedText9 = SplitType.create(text9.current);
  // const splitedText10 = SplitType.create(text10.current);
  // const fullTexts = [text1.current, text2.current];
  const fullSplitedTexts = [
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
  // console.log("fullSplitedTexts", fullSplitedTexts);
const fullSplitedTextsFlat = fullSplitedTexts.flat()
  // console.log("fullSplitedTexts", fullSplitedTextsFlat);
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({
      paused: true,
    });
    tl.current.to(menu.current, {
      y: "0",
      duration: 0.3,
    });
    tl.current.to(fullSplitedTexts, {
      // splitedText1.chars
      yPercent: -100,
      duration: 0.2,
      stagger: { amount: 1 },
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
        <ul>
          <li className="nav-item">
            <h1 ref={text1}>À propos</h1>
          </li>
          <li className="nav-item">
            <h1 ref={text2}>Services</h1>
          </li>
          <li className="nav-item">
            <h1 ref={text3}>Contact</h1>
          </li>
          <li className="nav-item">
            <h1 ref={text4}>Expérience</h1>
          </li>
          <li className="nav-item">
            <h1 ref={text5}>Mes convoyages</h1>
          </li>
          <li className="nav-item">
            <h1 ref={text6}>Diplômes</h1>
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
          opacity: 1;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color5);
          transform: translateY(100%);
        }
        ul {
          list-style: none;
        }
        li {
          overflow: hidden;
        }
        h1, h4 {
          margin: 0;
          transform: translateY(100%);
        }
      `}</style>
    </>
  );
}

export default ExpandedMenu;