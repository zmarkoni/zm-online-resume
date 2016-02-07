var $ = require('jquery');

var headerRunner = function() { //ne mogu da stavim ime funkcije!

    fixHeader();

    function fixHeader() {
        var windowHeight = $(window).height();
        $('.header').css({
            height: windowHeight
        });
    }

    $(window).on('resize', function() {
		fixHeader();
	});

}
module.exports = headerRunner;