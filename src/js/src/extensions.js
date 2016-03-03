//Wrap plugins which are included in project
var ScrollWatch = require('scrollwatch');
//var GoogleAPI = require('googleapis');

var Extensions = {

    localScrollWatch: function(options) {
        return ScrollWatch(options);
    },
    // localGoogleAPI: function() {
    //     return GoogleAPI(options);
    // }
};

module.exports = Extensions;