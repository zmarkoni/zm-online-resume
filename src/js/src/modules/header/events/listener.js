var $ = require('jquery');
var Sandbox = require('../../../sandbox.js');
var HeaderManager = require('../models/header-manager-new.js');

//Listener izvrsava ono sto cuje
var Events = function() {

    new HeaderManager().fixHeaderHeight();

    if( Sandbox.screen().isLarge() ) {
        // console.log('big only');
        $(window).on('scroll', function() {
            new HeaderManager().scrollHeader();
        });
        $(window).on('resize', function() {
            new HeaderManager().fixHeaderHeight(); //call on window resize
        });
    }

};

module.exports = Events;