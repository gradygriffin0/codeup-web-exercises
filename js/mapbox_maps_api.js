"use strict";
const myToken = "pk.eyJ1IjoiZ3JhZG1hbiIsImEiOiJja3Bxejhvc3EwOGhtMm5xdjRkeXpndDFiIn0.PUaRuIJpcgSE8tI2yZptvA";
var map;
mapboxgl.accessToken = myToken;
getMap();

function getMap(){
    map = new mapboxgl.Map({
        container: "map",
        center: [-98.482132, 29.494401],
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 18
    })
}

function setMarker(point){
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}