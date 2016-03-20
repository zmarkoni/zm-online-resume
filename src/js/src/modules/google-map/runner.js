// var Events = require('./events/listener.js');
var MapRunner = function() {
    var apiKey = 'AIzaSyC5SklzulGWAjXKdyMA9MBOXCOFiCVam2w';

    var myLatlng = {
        lat: 45.267135,
        lng: 19.833550
    };
    var mapOptions = {
        element: document.getElementById('map'),
        center: myLatlng,
        zoom: 4
        // zoomControl: false,
        // scaleControl: false,
        // scrollwheel: false,
        // disableDoubleClickZoom: true
    };


    require('google-maps-api')(apiKey);

    var map = require('google-maps-api/map')(mapOptions).then(function(map) {

        // do something with the map here

        //use the google.maps object as you please
        console.log('zzz');
        // var map;

        var contentString = '<div id="content">' +
            '<span class="map_title">Novi Sad</span>' +
            '</div>';

        // map = new google.maps.Map(document.getElementById('map'), {
        //     center: myLatlng,
        //     zoom: 4
        // });

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Novi Sad'
        });

        //Events
        google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
            infowindow.open(map, marker);
        });

        // map.addListener('center_changed', function() {
        //     // 3 seconds after the center of the map has changed, pan back to the
        //     // marker.
        //     window.setTimeout(function() {
        //         map.panTo(marker.getPosition());
        //     }, 1000);
        // });

        marker.addListener('click', function() {
            map.setZoom(4);
            map.setCenter(marker.getPosition());
        });
    });
};

module.exports = MapRunner;