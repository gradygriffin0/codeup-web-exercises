"use strict";

//mapbox token;
const token = "pk.eyJ1IjoiZ3JhZG1hbiIsImEiOiJja3Bwbjg2emIwNjVtMnFtb3NqNGxodmZoIn0.eYT2GG1ZKWBdIQDT-Z_7wQ";

//globally sets mapboxgl token to your token
mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
    //goes to id of html element of where deploying
    container: "map",
    //style from the website
    style: 'mapbox://styles/mapbox/streets-v11',
    // long, lat array
    center: [-98.4152, 29.5119],
    // level of zoom
    zoom: 16

});

let marker = setMarker([-98.4152, 29.5119]);
function setMarker(point) {
    // set a new object, set the longitude and latitude, then add to existing map obj;
    return (new mapboxgl.Marker().setLngLat(point).addTo(map));
}

addMapEvent(marker);
function addMapEvent(marker){
    map.on('click', function(e){
        marker.setLngLat(e.lngLat).addTo(map);
    })
}
