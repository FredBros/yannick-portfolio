import React,{useRef, useEffect} from 'react'
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function ImageTween({ data, delay }) {
  const imgRef = useRef();
  const imgContainerRef = useRef();
  const ctx = useRef();
  const hoverTween = useRef();
  const imgTween = useRef();

  const onMouseEnterHandler = () => {
    hoverTween.current.play();
  };
  const onMouseLeaveHandler = () => {
    hoverTween.current.reverse();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          autoAlpha: 0,
          scale: 0,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.inOut",
          delay: delay || 0
        }
      );
    });

    ctx.add(() => {
      // hover image useEffect
      hoverTween.current = gsap.to(imgRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: "power4.inOut",
        paused: true,
      });
    }, imgContainerRef.current);

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
    });
    // appearance
    ctx.add(() => {});
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="image-container" ref={imgContainerRef}>
        <div
          className="image"
          ref={imgRef}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Image src={data.url} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        .image {
          overflow: hidden;
          height: 130%;
          width: 100%;
          margin: 0 auto;
          transform: translateY(-30%);
        }
      `}</style>
    </>
  );
}

export default ImageTween;