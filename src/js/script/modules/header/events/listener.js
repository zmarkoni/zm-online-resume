var HeaderManager = require('../models/header-manager-new.js');

//Listener izvrsava ono sto cuje
var Events = function() {

    $(window).on('scroll', function() {
        new HeaderManager().scrollHeader();
    });

    $(window).on('resize', function() {
        new HeaderManager().fixHeaderHeight(); //call on window resize
    });

    //moze i TRIGER kad nesto odmah hocu da se desi

};

module.exports = Events;