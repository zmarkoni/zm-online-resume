// var $ = require('jquery');
// var Sandbox = require('../../../sandbox.js');
var MapManager = require('../models/map-manager.js');

//Listener izvrsava ono sto cuje
var Events = function() {

    window.addEventListener('load', function() {

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC5SklzulGWAjXKdyMA9MBOXCOFiCVam2w&callback=MapRunner';
        document.body.appendChild(script);
    });

};

module.exports = Events;