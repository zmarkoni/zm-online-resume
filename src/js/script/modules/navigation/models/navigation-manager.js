window.jQuery = $ = require('jquery');
var jQuery = require("jquery-easing");

var navigationManager = function() {};

navigationManager.prototype = {

    mobileNavigation: function() {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
        console.log('mobileNavigation works!');
    },

    scrollToSection: function(event) {
        var target = $(event.currentTarget.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          console.log('scrollToSection works!');
          return false;
        }

    }
};

module.exports = navigationManager;

/* NAVIGATION FUNCTIONS */
//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// $(window).on('resize', function() {
//     lnStickyNavigation = $('.scroll_down').offset().top;
//     console.log('scroll offset: ' + lnStickyNavigation);
// });


// function stickyNavigation() {
//     lnStickyNavigation = $('.js_scroll_down').offset().top + 20;
//     if ($(window).scrollTop() > lnStickyNavigation) {
//         $('.js_header').addClass('fixed');
//     } else {
//         $('.js_header').removeClass('fixed');
//     }
// }