const mapboxtoken = 'pk.eyJ1IjoidGlmZmFubnloYWRkZW4iLCJhIjoiY2twcG44N2czMDY3YjJ2cXhxNmpwODJjNyJ9.L2nQht2QLSDX6AJetKqfXg'
mapboxgl.accessToken = mapboxtoken;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 9
});

var whiskeyCakeMarker = new mapboxgl.Marker()
    .setLngLat([-98.61821, 29.59339])//whiskey cake
    .addTo(map);

var whiskeyPopup = new mapboxgl.Popup()
    .setHTML("<p> mmm Whiskey Cake!</p>") ///mmm whiskey  cake
    .addTo(map)

whiskeyCakeMarker.setPopup(whiskeyPopup)

