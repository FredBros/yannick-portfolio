import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";



const Map = ({path}) => {
    console.log(path)
const [isLoaded, setIsLoaded] = useState(false)

const containerStyle = {
  width: "100%",
  height: "20vh",
};

const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
console.log(key)
const center = path[0];
// key = AIzaSyBGlacV3j-b_k46zmwVE_vv754-xw_U0Eg

const pathOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,  
  zIndex: 1,
};

const onLoad = (polyline) => {
  console.log("polyline: ", polyline);
};

useEffect(() => {
    setIsLoaded(true);
},[])
if(!isLoaded){return null}
   
    return (
      <>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={1}
          >
            <Polyline options={pathOptions} path={path} onLoad={onLoad} />
          </GoogleMap>
        </LoadScript>

        <style jsx>{`
          .map-wrap {
            height: 24vw;
            width: 100%;
          }
        `}</style>
      </>
    );
}

export default React.memo(Map)