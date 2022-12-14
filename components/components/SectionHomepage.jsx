import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import {ImageTween, Title, Content} from "../index"

gsap.registerPlugin(ScrollTrigger);

function SectionHomepage({ content, link }) {
  const imgContainerRef = useRef();

  const sectionRef = useRef();
  const textTl = useRef();
  const ctx = useRef();
  const contentRef = useRef();


  useEffect(() => {

    const splitedContent = SplitType.create(contentRef.current, {
      types: "words",
    });

    const ctx = gsap.context(() => {
      
      textTl.current = gsap.timeline({
        defaults: { ease: "easeInOut" },
        paused: false,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
        },
      });
    
      textTl.current.fromTo(
        splitedContent.words,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.1,
          ease: "easeInOut",
          stagger: 0.05,
          autoAlpha: 1,
        }
      );
      return () => {
        ctx.revert();
      };
    }, sectionRef);

    // return () => {
    //   ctx.revert();
    // };
  }, []); //fin de useEffect


  return (
    <>
      <section ref={sectionRef} className="home-section">
        <Link href={link || null}>
          <div className="text know-more">
            <div className="title-container">
              <a  className="know-more-link">
                <Title text={content.title} delay={0.3}></Title>
              </a>
            </div>

            <h3
              className="description"
              id={`description${content.id}`}
              ref={contentRef}
            >
              {content.description}
            </h3>
            {/* <div className="description">
              <Content data={content.description} />
            </div> */}
          </div>
        </Link>
        <div className="image-wrap" ref={imgContainerRef}>
          <ImageTween data={content.image} />
        </div>
      </section>

      <style jsx>{`
        section {
          margin-top: 5vh;
          padding-bottom: 60px;
          border-bottom: solid var(--foreground) 2px;
        }
        .text {
          position: sticky;
          margin-bottom: 50px;
          top: 50px;
        }
        .title-container {
          text-align: center;
          margin-bottom: 40px;
        }
        .title {
          padding: 0 4px;
          overflow: hidden;
        }

        .image-wrap {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          height: 30vh;
          max-width: 500px;
        }
        .image {
          overflow: hidden;
          width: 100%;
          height: 130%;

          transform: translateY(-30%);
        }

        @media screen and (min-width: 992px) {
          section {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
          }
          .text {
            align-self: start;
            margin-bottom: 0;
          }

          .image-wrap {
            grid-column: 8 / 13;
            height: 100%;
            min-height: 60vh;
            width: 100%;
          }
          .image {
            width: 100%;
          }
          .text {
            grid-column: 1 / 7;
          }
          h2 {
            font-size: var(--font-size-xxl);
          }
        }
      `}</style>
    </>
  );
}

export default SectionHomepage;
