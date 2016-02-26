// var Events = require('./events/listener.js');
// var ScrollWatchManager = require('./models/scrollWatch-manager');
var Extensions = require('../../extensions.js');

var ScrollRunner = function() { //ne mogu da stavim ime funkcije!
    // console.log('Runner');
    // new Events();

    // new ScrollWatchManager().WatchScroll;
    Extensions.localScrollWatch({
        watchOnce: false, //always watch element
        onElementInView: function(data) {
            $(data.el).addClass('active'); //THIS CAN BE ADDED BY DEFAULT
            console.log('onElementInView');
        }
    });

};

module.exports = ScrollRunner;