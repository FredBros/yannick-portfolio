import React, {useState, useEffect}from 'react'


import {
  ImageTween,
  Map
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

const DeliveryCard = ({data}) => {


  return (
    <div className="delivery-card">
      {/* <div className="text-wrap"> */}
      <h2>{data.title}</h2>
      <div className="text">
        <RichText content={data.content.raw} />
      </div>
      {/* </div> */}
      <div className="image-wrapper">
        <ImageTween data={data.picture} noZoomIn={true} />
      </div>
      <div className="map-wrap">
        <Map path={data.gpsCoord} />
      </div>
      <style jsx>{`
        .delivery-card {
          border: 1px solid var(--foreground);
          margin: 5vw 0;
          padding: 2vw;
          max-width: 500px;
        }
        .image-wrapper {
          width: 100%;
          max-width: 500px;
          height: 20vh;
          margin: 30px auto;
        }
        @media screen and (min-width: 992px) {
          .delivery-card {
            max-width: 900px;
            margin: 5vh 0;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            column-gap: 3vw;
            row-gap : 2vh;
          }
          h2 {
            grid-column: 1 / 7;
            grid-row: 1 / 2;
          }
          .text {
            grid-column: 1 / 5;
            grid-row: 2 / 3;
          }
          .map-wrap {
            grid-column: 1 / 5;
            grid-row: 3 / 4;
          }
          .image-wrapper {
            grid-column: 5 / 7;
            grid-row: 2 / 4;
            height: 100%;
            max-width: none;
            margin: 0;
          }
        }
      
      `}</style>
    </div>
  );
}

export default DeliveryCard