import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import {centerGPSPoint} from "../../utils/centerGPSPoint"



const Map = ({path}) => {
const [isLoaded, setIsLoaded] = useState(false)
const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = centerGPSPoint(path);
// const averageLng = path.reduce((acc, gps) => Number(gps.lng) + acc, 0) / path.length
// // const averageLat = (path.reduce((acc, gps) => Number(gps.lat + 180) + acc, 0) / path.length)-180
// console.log(path)
// // console.log("lat :", averageLat);
// console.log("lng :", averageLng);
// const center = {
//   lat: 0,
//   lng: averageLng,
// };
// const latLngInDeg = path.map((gpsPoint) => Object.values(gpsPoint));
console.log(centerGPSPoint(path));

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


useEffect(() => {
    setIsLoaded(true);
},[])
if(!isLoaded){return null}
   
    return (
      <>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <div className="map-wrap to-click">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={1}
            >
              <Polyline options={pathOptions} path={path} />
            </GoogleMap>
          </div>
        </LoadScript>

        <style jsx>{`
          .map-wrap {
            height: 20vh;
            width: 100%;
          }          
        `}</style>
      </>
    );
}

export default React.memo(Map)