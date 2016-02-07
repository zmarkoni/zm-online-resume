var $ = require('jquery');
var skrollr = require('skrollr');

var headerRunner = function() { //ne mogu da stavim ime funkcije!

    fixHeaderHeight();

    $(window).on('scroll', function() {
        scrollHeader();
    });

    $(window).on('resize', function() {
        fixHeaderHeight();
    });





    function fixHeaderHeight() {
        var windowHeight = $(window).height();
        $('.header').css({
            height: windowHeight
        });
    }

    function scrollHeader() {
        // var windowScroll = $(window).scrollTop();
        // console.log('window scroll: ' + windowScroll);
        // var scrollValue = 'center';
        // console.log('scrollValue: ' + scrollValue);
        // if (windowScroll > 20) {
        //     scrollValue = -windowScroll;
        // } else if (windowScroll < 20) {
        //     scrollValue = 'center';
        // }
        //
        // $('.header').animate({
        //     backgroundPositionY: scrollValue
        // }, 0, 'linear');


        // if (docWidth1 > 640) {
            var parallax = $('.parallax');

            var st = $(window).scrollTop(); //documentElement.scrollTop

            parallax.css({
                '-webkit-transform': 'translateY(' + -st / 3 + 'px)',
                '-ms-transform': 'translateY(' + -st / 3 + 'px)',
                'transform': 'translateY(' + -st / 3 + 'px)'
            });

        //}
    }

}
module.exports = headerRunner;