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

    // window.addEventListener('load', function() {
    //
    //     var script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = 'https://maps.googleapis.com/maps/api/js?v=3&callback=initGmaps';
    //     document.body.appendChild(script);
    // });
};

module.exports = Extensions;