import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextSplitTween from "../ui/TextSplitTween";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function SectionHomepage({ content, link }) {
  const imgRef = useRef();
  const sectionRef = useRef();
  const imgTl = useRef();
  const ctx = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      imgTl.current = gsap.timeline({
        defaults: { ease: "none" },
        paused: false,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "center center",
          end: "bottom top",
          scrub: 1,
        },
      });
      imgTl.current.to(imgRef.current, {
        autoAlpha: 0,
        scale: 0.2,
      });
    }, sectionRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Link href={link || null}>
        <section ref={sectionRef}>
          <div className="text">
            <div className="title">
              <a href="/">
                <h2
                  className="hover-underline-animation"
                  id={`title${content.id}`}
                >
                  {content.title}
                </h2>
              </a>
            </div>
            <h3 className="description" id={`description${content.id}`}>
              {content.description}
            </h3>
          </div>
          <div className="image-container" ref={imgRef}>
            <div className="image">
              <Image
                src={content.image.url}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </Link>
      <style jsx>{`
        section {
          cursor: pointer;
          margin-top: 100px;
          padding-bottom: 60px;
          border-bottom: solid var(--foreground) 2px;
        }
        .text {
          position: sticky;
          top: 50px;
        }
        .title {
          text-align: center;
          margin: 40px auto;
        }
        .description {
          margin: 60px 0;
        }
        .image-container {
          overflow: hidden;
        }
        .image {
          overflow: hidden;
          position: relative;
          height: 40vh;
          max-width: 500px;
          margin: 0 auto;
        }
        .image {
          transition: transform 0.2s;
        }
        .image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

export default SectionHomepage;
