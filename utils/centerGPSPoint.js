function rad2degr(rad) {
  return (rad * 180) / Math.PI;
}
function degr2rad(degr) {
  return (degr * Math.PI) / 180;
}
const centerGPSPoint = (path) => {

  // take first and last points [[],[]]
const latLngInDegr = [Object.values(path.at(0)), Object.values(path.at(-1))];

    // function getLatLngCenter(latLngInDegr) {
    var LATIDX = 0;
    var LNGIDX = 1;
    var sumX = 0;
    var sumY = 0;
    var sumZ = 0;

    for (var i=0; i<latLngInDegr.length; i++) {
        var lat = degr2rad(latLngInDegr[i][LATIDX]);
        var lng = degr2rad(latLngInDegr[i][LNGIDX]);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
    }

    var avgX = sumX / latLngInDegr.length;
    var avgY = sumY / latLngInDegr.length;
    var avgZ = sumZ / latLngInDegr.length;

    var lng = Math.atan2(avgY, avgX);
    var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    var lat = Math.atan2(avgZ, hyp);

    const centerArray = [rad2degr(lat), rad2degr(lng)];

const center = {
  lat: rad2degr(lat),
  lng: rad2degr(lng),
};
  return center
  
}

export  {centerGPSPoint}