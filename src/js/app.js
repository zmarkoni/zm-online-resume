/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');

//var testRunner = require('./src/modules/test/runner.js');
// var testModule = require('./src/modules/module_revealing.js');
var ScrollRunner = require('./src/modules/scroll-watch/runner.js');
var HeaderRunner = require('./src/modules/header/runner.js');
var NavigationRunner = require('./src/modules/navigation/runner.js');
//var MailRunner = require('./src/modules/mail/runner.js');

var Application = function() {

    //new testRunner();
    new ScrollRunner();
    new HeaderRunner();
    new NavigationRunner();
    //new MailRunner();
};


$(function() {
    new Application();
});
