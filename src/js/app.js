/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');

var ScrollRunner = require('./src/modules/scroll-watch/runner.js');
var HeaderRunner = require('./src/modules/header/runner.js');
var NavigationRunner = require('./src/modules/navigation/runner.js');
//var MailRunner = require('./src/modules/google-email/runner.js');
var MapRunner = require('./src/modules/google-map/runner.js');

var Application = function() {

    //new testRunner();
    //new ScrollRunner();
    new HeaderRunner();
    new NavigationRunner();
    //new MailRunner();
    new MapRunner();
};


$(function() {
    new Application();
});
