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

//function call to create geocoder thru setGeocoder; then adds it to map thru addGeocoderToMap;
let marker = setMarker([-98.4152, 29.5119]);
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
//adds the searchbar event marker;
addGeocoderEvent(geocoder);
//call setpopup and pass in the text we want appended to our marker
setPopup("Hello this is a popup");

//creates and returns a new geocoder;
function setGeocoder(){
    return new MapboxGeocoder({
        // apply access token
        accessToken: mapboxgl.accessToken,
        // set mapboxgl to my existing mapboxgl
        mapboxgl: mapboxgl,
        // dont use your marker, use mine..
        marker: false,
    })
}

// function to add our geocoder to the existing map;
function addGeocoderToMap(geocoder){
    // gets map and adds control
    map.addControl(geocoder);
}
//adds event listener and sets new marker location;
function addGeocoderEvent(geocoder){
    geocoder.on('result', function(e){
        // when the event fires the lngLat is set to
        marker.setLngLat(e.result.geometry.coordinates)
        setPopup(e.result.place_name);
    })

}



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


function setPopup(textDetails){
    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
    marker.setPopup(popup);
}
