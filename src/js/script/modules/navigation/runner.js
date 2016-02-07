window.jQuery = $ = require('jquery');
var jQuery = require("jquery-easing");
var bs = require('bootstrap/dist/js/bootstrap');//mogu i da ucitam samo potreban bootsrap js plugin
var smoothScroll = require("jquery-smooth-scroll");

var navigationRunner = function() { //ne mogu da stavim ime funkcije!

    applyNavigation();
    checkHash();
    /* NAVIGATION FUNCTIONS */
    //jQuery to collapse the navbar on scroll
    // $(window).scroll(function() {
    //     if ($(".navbar").offset().top > 50) {
    //         $(".navbar-fixed-top").addClass("top-nav-collapse");
    //     } else {
    //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //     }
    // });

    function applyNavigation() {
        applyClickEvent();
        applyNavigationFixForPhone();
        applyScrollSpy();
        applyStickyNavigation();
    }

    // $(window).on('resize', function() {
    //     lnStickyNavigation = $('.scroll_down').offset().top;
    //     console.log('scroll offset: ' + lnStickyNavigation);
    // });



    function applyClickEvent() {
        //remove jquery easing plugin
        // $('.nav_link').bind('click', function(event) {
        //     var $anchor = $(this);
        //     $('html, body').stop().animate({
        //         scrollTop: $($anchor.attr('href')).offset().top
        //     }, 1500, 'easeInOutExpo');
        //     event.preventDefault();
        // });
        $('.nav_link').smoothScroll({
            afterScroll: function() {
                console.log('we made it!');
            }
        });

        $('.nav_link').on('click', function(e) {
            e.preventDefault();

            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 400);
            }
            return false;
        });
    }

    function applyNavigationFixForPhone() {
        $('.nav_link').click(function(event) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        });
    }

    function applyScrollSpy() {
        $("#navbar-example").scrollspy();
        $('#navbar-example').on('activate.bs.scrollspy', function() {
            // debugger;
            window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
        });
    }

    function applyStickyNavigation() {
        lnStickyNavigation = $('.scroll_down').offset().top + 20;

        $(window).on('scroll', function() {
            stickyNavigation();
        });

        stickyNavigation();
    }

    function stickyNavigation() {
        if ($(window).scrollTop() > lnStickyNavigation) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    }

    /* HASH FUNCTION */

    function checkHash() {
        lstrHash = window.location.hash.replace('#/', '#');

        if ($('a[href=' + lstrHash + ']').length > 0) {
            $('a[href=' + lstrHash + ']').trigger('click');
        }
    }

}
module.exports = navigationRunner;