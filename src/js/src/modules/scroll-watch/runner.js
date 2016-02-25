// var Events = require('./events/listener.js');
var scrollWatchManager = require('./models/scrollWatch-manager');
var Extensions = require('../../extensions.js');

var scrollRunner = function() { //ne mogu da stavim ime funkcije!
    // new Events();

    new Extensions.watchForScroll({
        watchOnce: false, //always watch element
        onElementInView: function() {
            scrollWatchManager.addClass;
        }
    });

    console.log('Runner');
}

module.exports = scrollRunner;