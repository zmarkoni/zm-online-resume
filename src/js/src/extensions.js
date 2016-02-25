//Wrap plugins which are included in project
var ScrollWatch = require('scrollwatch');

var Extensions = {

    watchForScroll: function(options) {
        return ScrollWatch(options);
    }
};

module.exports = Extensions;