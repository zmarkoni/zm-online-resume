var $ = require('jquery');
var cubeManager = require('../models/cube-manager.js');

var CubeEvents = function() {

    $('body').on('mouseenter mouseleave', '.js_cube', function(event) {
        new cubeManager().stopCube(event);
    });

    $('body').on('click', '.js_cube .plane', function() {
        new cubeManager().showLink(event);
    });

};

module.exports = CubeEvents;
