var mapDiv = document.getElementById("mapDiv");
var LatLng = new google.maps.LatLng(35.8800, 76.5151);
var mapProp = {
    center: LatLng,
    zoom: 10,
    mapTypeId: 'satellite'
};

var map = new google.maps.Map(mapDiv, mapProp);

new google.maps.Marker({
    position: LatLng,
    title: "Mt. Everest",
    map: map
});