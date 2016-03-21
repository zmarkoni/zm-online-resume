/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');


var HeaderRunner = require('./src/modules/header/runner.js');
var NavigationRunner = require('./src/modules/navigation/runner.js');
//var ScrollRunner = require('./src/modules/scroll-watch/runner.js');
var WidgetRunner = require('./src/modules/widget/runner.js');

var Application = function() {
    //new ContentRender();
    new HeaderRunner();
    new NavigationRunner();
    //new ScrollRunner();
    //new WidgetRunner();
};


$(function() {
    new Application();
});
