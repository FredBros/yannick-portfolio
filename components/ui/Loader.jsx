import React from "react";
import { ThreeCircles } from "react-loader-spinner";



function Loader() {
  return (
    <div className="loader">
      <ThreeCircles
        height="100"
        width="100"
        color="var(--color6)"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="var(--color4)"
        middleCircleColor="var(--color3)"
      />


      <style jsx>{`
              .loader{
      position: absolute;
      top: 30%;
      left: 50%;
      transform : translate(-50%, -50%);
      }
            `}</style>
    </div>
  );
}

export default Loader