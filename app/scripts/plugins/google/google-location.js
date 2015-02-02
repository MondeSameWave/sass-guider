$(document).ready(function() {
    // Google maps initialization
    $('.map-container').each(function(){
        var map_latitude = $(this).data('latitude');
        var map_longitude = $(this).data('longitude');
        var map_id = $(this).attr('id');
        setUpMap(map_latitude,map_longitude,map_id);
    });
});
/* Google Map styling */
var styles = [
    { stylers: [ { hue: "#e9533f" }, { saturation: -20 } ] },
    { featureType: "road", elementType: "geometry", stylers: [ { color: "#7f7f7f" } ] }
];
function setUpMap(latitude,longitude,elemID){
    var image = new google.maps.MarkerImage('img/map-point.png', new google.maps.Size(70,70), new google.maps.Point(0,0), new google.maps.Point(35,35));
    var mapLatLng = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {zoom:14,center:mapLatLng,mapTypeId: google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,scrollwheel:!1,draggable:!0,navigationControl:!1};
    var map = new google.maps.Map(document.getElementById(elemID), mapOptions);
    new google.maps.Marker({ position: mapLatLng, map: map, icon: image });
    map.setOptions({styles: styles});
}