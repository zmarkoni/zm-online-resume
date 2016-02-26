//Wrap plugins which are included in project
var ScrollWatch = require('scrollwatch');

var Extensions = {

    localScrollWatch: function(options) {
        return ScrollWatch(options);
    }
};

module.exports = Extensions;