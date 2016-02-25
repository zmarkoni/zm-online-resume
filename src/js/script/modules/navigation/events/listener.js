
var navigationManager = require('../models/navigation-manager.js');

var Events = function() {

    $('body').on('click', '.js_nav_link', function(event) {
        new navigationManager().scrollToSection(event);
    });

    //call on mobile only add logic
    $('body').on('click', '.js_mobile_menu', function(event) {
        new navigationManager().mobileNavigation(event);
    });


    // $(window).scroll(stickyNavigation);
    // $(window).on('scroll', function() {
    //     new navigationManager().stickyNavigation();
    // });
};

module.exports = Events;