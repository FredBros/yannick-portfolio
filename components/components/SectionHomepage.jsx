import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextSplitTween from "../ui/TextSplitTween";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function SectionHomepage({ content, link }) {
  const imgRef = useRef();
  const imgContainerRef = useRef();

  const sectionRef = useRef();
  const imgTl = useRef();
  const textTl = useRef();
  const ctx = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const hoverTween = useRef();
  const imgTween = useRef();





  const onMouseEnterHandler = () => {
    hoverTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    hoverTween.current.reverse();
  };



  useEffect(() => {
    const splitedTitle = SplitType.create(titleRef.current, {
      types: "words",
    });

    const splitedContent = SplitType.create(contentRef.current, {
      types: "words",
    });

    

    const ctx = gsap.context(() => {
      
      textTl.current = gsap.timeline({
        defaults: { ease: "easeInOut" },
        paused: false,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      });
      textTl.current.fromTo(
        splitedTitle.words,
        {
          y: "100%",
        },
        {
          duration: 0.1,
          ease: "easeInOut",
          stagger: 0.05,
          y: "0%",
        }
      );
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

    // hover image useEffect
    ctx.add(() => {
      hoverTween.current = gsap.to(imgRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: "power4.inOut",
        paused: true,
      });
    }, sectionRef.current);

    // parallax image effect
    ctx.add(() => {
      imgTween.current = gsap.to(imgRef.current, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: imgContainerRef.current,
          scrub: true,
          // markers: true,
        },
      });
    })

    
   
    

    return () => {
      // ctx.revert();
      
    };
  }, []); //fin de useEffect

console.log(content.description);

  return (
    <>
      <section ref={sectionRef}>
        <Link href={link || null}>
          <div className="text know-more">
            <div className="title-container">
              <a href="/" className="know-more-link">
                <h2 className="title" id={`title${content.id}`} ref={titleRef}>
                  {content.title}
                </h2>
              </a>
            </div>

            <h3
              className="description"
              id={`description${content.id}`}
              ref={contentRef}
            >
              {content.description}
            </h3>
          </div>
        </Link>
        <div className="image-container" ref={imgContainerRef}>
          <div
            className="image"
            ref={imgRef}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <Image
              src={content.image.url}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          margin-top: 100px;
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

        .image-container {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          height: 40vh;
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
            height: 100vh;
          }
          .text {
            align-self: start;
            margin-bottom: 0;
          }

          .image-container {
            grid-column: 8 / 13;
            height: 100%;
            width : 100%;
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
