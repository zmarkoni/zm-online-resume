/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');


//var testRunner = require('./src/modules/test/runner.js');
// var testModule = require('./src/modules/module_revealing.js');
var headerRunner = require('./src/modules/header/runner.js');
var navigationRunner = require('./src/modules/navigation/runner.js');
var scrollRunner = require('./src/modules/scroll-watch/runner.js');

var Application = function() {

    //new testRunner();
    new scrollRunner();
    new headerRunner();
    new navigationRunner();
};


$(function() {
  new Application();
});