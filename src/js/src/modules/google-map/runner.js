// var Events = require('./events/listener.js');

var MapRunner = function() {


    if(google && 'maps' in google) {
        console.log('Google maps loaded');
        initMap();
    } else {
        window.addEventListener('load', function() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC5SklzulGWAjXKdyMA9MBOXCOFiCVam2w&callback=initMap';
            document.body.appendChild(script);
        });
    }

    // var apiKey = 'AIzaSyC5SklzulGWAjXKdyMA9MBOXCOFiCVam2w';



    function initMap() {
        var map;

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

module.exports = MapRunner;