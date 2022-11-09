import React, {useRef, useEffect} from 'react'
import Parallax from "parallax-js";
import Image from "next/image";


function Portrait({picture}) {
  const parallaxEl = useRef();

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  // const parallaxInstance = new Parallax(containerPortrait.current);
  return (
    <>
      <div
        className="container-portait"
        id="scene"
        ref={parallaxEl}
        data-relative-input="true"
      >
        <div className="portrait-background" data-depth="0.2">
          <Image
            src="/sea-bg.jpg"
            alt="background portrait"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="portrait-picture" data-depth="0.5">
          <Image
            src={picture.url}
            alt="background portrait"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <style jsx>{`
        .container-portait {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .portrait-background {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .portrait-picture {
          position: relative;
          width: 120%;
          height: 120%;
          top: -10% !important;
          left: -10% !important;
        }
      `}</style>
    </>
  );
}

export default Portrait