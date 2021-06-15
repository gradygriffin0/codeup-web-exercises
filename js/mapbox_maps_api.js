"use strict";

// global variables for my api token, map object, and applying token to my map;
const myToken = MAPBOX_TOKEN;
var map;
mapboxgl.accessToken = myToken;

// call to generate map object;
getMap();

function getMap() {
    map = new mapboxgl.Map({
        container: "map",
        center: [-98.44880829595778, 29.50121046110793],
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 9
    })
}
selectZoom();
function selectZoom(){
    $('#zoom').change(setZoom);
}
function setZoom(){
    map.setZoom( $('#zoom').val());

}

// setMarker generates the marker, calling it to marker makes it so the marker is changeable
// let markerJs = setMarker([-98.482132, 29.494401]);
// let markerWings = setMarker([-98.396032, 29.51381]);
// let markerTwins = setMarker([-98.503763, 29.519955]);
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point).addTo(map);
}

let restaurants = [
    {
        name: "J. Alexander's",
        marker: setMarker([-98.482132, 29.494401]),
        description: "This is my favorite restaurant, I have eaten here my whole life, and even worked here.",
    },
    {
        name: "Buffalo Wild Wings",
        marker: setMarker([-98.396032, 29.51381]),
        description: "This is my second favorite restaurant, their wings are fire. I goto B-Dubs on their BOGO day with my mates all the time.",

    },
    {
        name: "Twin Peaks",
        marker: setMarker([-98.503763, 29.519955]),
        description: "This is my third favorite restaurant. I love their from-scratch food and their 29degree draft beer. Perfect for watching a game with friends."
    }

];

// markerClick(marker);
// function markerClick(marker){
//
//     marker.setPopup("This is my favorite restaurant, J. Alexander's");
//
//     // marker.on('click', function(e){
//     //     setPopup("This is my favorite restaurant, J. Alexander's");
//     // })
// }



// function to create new popup and append it to map and marker
setPopup(restaurants);
function setPopup(arr) {
    arr.forEach(function (object) {
        let popup = new mapboxgl.Popup().setHTML(`<div><h4>${object.name}</h4><p>${object.description}</p></div>`).addTo(map);
        object.marker.setPopup(popup);
        object.marker.togglePopup();
    })

}

// adds click event to the map.
addMapEvent();
function addMapEvent(marker){
    map.on('click', function(e){
        console.log(e.lngLat);
        // marker.setLngLat(e.lngLat).addTo(map);
         weatherRequest(e.lngLat);

    })

}


// call setGeocoder to save the returned object to geocoder variable,
// which we will be using
let geocoder = setGeocoder();

function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,

        mapboxgl: mapboxgl,

        marker: false,
    })
}

// calling our appending function with the stored geocoder object
addGeocoderToMap(geocoder);

function addGeocoderToMap(geocoder) {
    // appends geocoder with addControl built-in method
    document.getElementById("geocodeHouse").appendChild(geocoder.onAdd(map))

}

addGeocoderEvent(geocoder);

function addGeocoderEvent(geocoder) {
    geocoder.on('result', function (e) {
        marker.setLngLat(e.result.geometry.coordinates);
        setPopup(e.result.place_name);
        console.log(e.result);
    })
}

function weatherRequest(lngLat){
    let lat = lngLat.lat;
    console.log(lat);
    let lng = lngLat.lng;
    console.log(lng);
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: lat,
            lon: lng,
            units: "imperial"
        },
        success: function(data){
            console.log(data);
            return data
        }
    })
}

// startPopup();
// function startPopup(){
//     new mapboxgl.Popup({ closeOnClick: false })
//         .setLngLat(map.center)
//         .setHTML('<h1>Click a marker to see my favorite restaurants</h1>')
//         .addTo(map);
// }
