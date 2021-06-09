const mapboxtoken = 'pk.eyJ1IjoidGlmZmFubnloYWRkZW4iLCJhIjoiY2twcG44N2czMDY3YjJ2cXhxNmpwODJjNyJ9.L2nQht2QLSDX6AJetKqfXg'

mapboxgl.accessToken = mapboxtoken;

var map = new mapboxgl.Map( {
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-97.1081, 32.7357],
    zoom: 12
});

setMarker([-9.1081, 32.7357]);
//call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

let geocoder = setGeocoder();
addGeocoderToMap(geocoder);
addGeocoderEvent(geocoder);
setPopup()

    //  creates and returns a new gEOcODER (SEARCH BOX)
    function setGeocoder() {

    return new mapboxgl.MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
    }

    function addGeocoderToMap(geocoder) {
        map.addControl(geocoder);

}
// adds event listener to geocoder and sets new marker location
function addGeocoderEvent(geocoder) {
    geocoder.on("result", function(event) {
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.resultPlaceName)
    })

}
// creates the marker
function setMarker(point) {

    let marker = new mapboxgl.Marker().setLngLat(point)
                            .addTo(map);



}
// adds event to the map that changes location of marker
// based on where the user clicks
function addMapEvent(marker) {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
              .addTo(map);
    })
}

function setPopup(textDetails) {
    let popup = newmapboxgl.Popup()
        .setHTML(`<p>${textDetails}</p>`)
        .addTo(map);

    marker.setPopup(popup);
}