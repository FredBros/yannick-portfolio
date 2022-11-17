import React, { useState, useEffect, useRef } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { gsap } from "gsap";


function AccordionItem({ title, content }) {


  const [isActive, setIsActive] = useState(false);


  const tl = useRef();
  const itemRef = useRef();
  const contentRef = useRef();
  const spanRef= useRef()


  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });
      tl.current.to(contentRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      });
      tl.current.to(spanRef.current, {
        duration: 0.5,
        ease: "power2.inOut",
        rotation:0,
      },0);
    }, itemRef);

    return()=>{
        ctx.revert()
    }
  },[]);

  useEffect(() => {
    isActive ? tl.current.play() : tl.current.reverse();
  }, [isActive]);

  return (
    <div className="accordion-item" ref={itemRef}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <button>
          <p>{title}</p>
          <div className="plus">
            <span className="span1"></span>
            <span className="span2" ref={spanRef}></span>
          </div>
        </button>
      </div>
      <div className="accordion-content-container" ref={contentRef}>
        <div className="accordion-content">
          <RichText content={content} />
        </div>
      </div>
      <style jsx>{`
        .accordion-item {
          border-bottom: solid 1px;
        }
        .accordion-content-container {
          overflow: hidden;
          height: 0;
        }
        .accordion-content {
          padding-bottom: 28px;
        }
        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: transparent;
          padding: 28px 0;
          text-align: left;
          text-transform: none;
        }
        .plus {
          position: relative;
          width: 18px;
          height: 18px;
        }
        span {
          position: absolute;
          width: 18px;
          height: 2px;
          background-color: var(--foreground);
          top: 8px;
        }
        .span2 {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
}

export default AccordionItem;
