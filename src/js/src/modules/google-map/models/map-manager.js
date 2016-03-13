// var $ = require('jquery');
// var googleAPI = require('googleapis');

var MapManager = function() {

    var apiKey = 'AIzaSyC5SklzulGWAjXKdyMA9MBOXCOFiCVam2w';

    var map;

    initMap();

    var initMap = function() {

        var myLatlng = {
            lat: 45.267135,
            lng: 19.833550
        };

        var contentString = '<div id="content">' +
            '<span class="map_title">Novi Sad</span>' +
            '</div>';

        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatlng,
            zoom: 4
        });

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

        map.addListener('center_changed', function() {
            // 3 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
                map.panTo(marker.getPosition());
            }, 1000);
        });

        marker.addListener('click', function() {
            map.setZoom(4);
            map.setCenter(marker.getPosition());
        });
    }

};

module.exports = MapManager;