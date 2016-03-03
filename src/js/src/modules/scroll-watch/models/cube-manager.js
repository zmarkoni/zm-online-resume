var $ = require('jquery');
var cubeManager = function() {};
cubeManager.prototype = {

    stopCube: function(event) {
        var cube = event.currentTarget;
        $(cube).toggleClass('pause_rotate');
    },

    showLink: function(){
        var plane = event.currentTarget;
        $(plane).css('transform', 'rotateX(-90deg) translateY(-190px) translateZ(100px)');
    }

};
module.exports = cubeManager;