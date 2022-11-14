import React, { useEffect, useRef } from "react";
import { Portrait } from "../";
import SplitType from "split-type";
import gsap from "gsap";

function Hero({ content }) {
  const { picture, description } = content;
  const text0 = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const img = useRef();
  const heroTl = useRef();
  const ctx = useRef();
  const hero = useRef();

  useEffect(() => {
    const splitedText0 = SplitType.create(text0.current, {
      types: "lines",
    });
    const splitedText1 = SplitType.create(text1.current, {
      types: "words",
    });
    const splitedText2 = SplitType.create(text2.current, {
      types: "words",
    });
    const ctx = gsap.context(() => {
      heroTl.current = gsap.timeline({
        paused: false,
      });
      heroTl.current.fromTo(
        splitedText0.lines,
        {
          y: "100%",
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.3,
          ease: "easeInOut",
          stagger: 0.05,
          y: "0%",
        }
      );
      heroTl.current.fromTo(
        splitedText1.words,
        {
          y: "100%",
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "easeInOut",
          stagger: 0.05,
          y: "0%",
        },
        0.2
      );
      heroTl.current.fromTo(
        img.current,
        {
          autoAlpha: 0,
          scale: 0,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.inOut",
        },
        0.2
      );
      heroTl.current.fromTo(
        splitedText2.words,
        {
          y: "100%",
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "easeInOut",
          stagger: 0.05,
          y: "0%",
        },0.5
      );

      return () => {
        ctx.revert();
      };
    }, hero);
  }, []);
  return (
    <section className="container-section-hero" ref={hero}>
      <h3 className="description" ref={text0}>
        {description}
      </h3>
      <h1 className="role" ref={text1}>
        Skipper <br />
        professionnel
      </h1>
      <div className="portait" ref={img}>
        <Portrait picture={picture} />
      </div>
      <h1 className="name" ref={text2}>
        Yannick
        <br />
        Brossard
      </h1>
      {/* </MediaQuery> */}

      <style jsx>{`
        .container-section-hero {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-column-gap: 10px;
          grid-template-rows: 10% 1fr 35% 1fr;
          align-items: center;
          align-content: start;
          height: calc(100vh - 24px);
          padding: 20px 0 40px;
        }

        .description {
          grid-column: 1 / 7;
          grid-row: 1;
        }
        .role {
          grid-column: 1 / 7;
          grid-row: 2;
        }
        .portait {
          grid-column: 1 / 5;
          grid-row: 3;
          height: 100%;
        }
        .name {
          grid-column: 1 / 7;
          grid-row: 4;
        }

        @media screen and (min-width: 992px) {
          .container-section-hero {
            height: calc(100vh - 48px);
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: 25% 1fr 25%;
            row-gap: 30px;
          }
          .role {
            grid-column: 1 / 7;
            grid-row: 1;
          }
          .name {
            grid-column-start: 13;
            grid-row: 3;
            justify-self: end;
            text-align: end;
          }
          .description {
            grid-column: 2 / 7;
            grid-row: 3;
          }
          .portait {
            grid-column: 1 / 9;
            grid-row: 2;
          }
        }
        @media screen and (min-width: 1200px) {
          .description {
            grid-column: 3 / 7;
        }
        }
      `}</style>
    </section>
  );
}

export default Hero;
