import React, {useState, useEffect}from 'react'


import {
  SubtitleIn,
  Content,
  ImageTween,
  SectionContainer,
  SectionContact,
  Grid,
  Title,
  Map
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

const DeliveryCard = ({data}) => {


// const [isLoaded, setIsLoaded] = useState(false)
// useEffect(() => {
//   setIsLoaded(true)
// }, [])

// if(!isLoaded) {return null}

  return (
    <div className="delivery-card">
      <h2>{data.title}</h2>
      <RichText content={data.content.raw} />
      <div className="image-wrapper">
        <ImageTween data={data.picture} noZoomIn={true} />
      </div>
      <Map path={data.gpsCoord} />
      <style jsx>{`
        .delivery-card {
          border: 1px solid var(--foreground);
          margin: 5vw 0;
          padding: 2vw;
        }
        .image-wrapper {
          width: 100%;
          max-width: 500px;
          height: 20vh;
          margin: 30px auto;
        }
        @media screen and (min-width: 992px) {
          .delivery-card {
            margin: 5vh 0;
          }
        }
      `}</style>
    </div>
  );
}

export default DeliveryCard