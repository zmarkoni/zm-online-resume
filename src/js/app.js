/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

var $ = require('jquery');

var WebFont = require('webfontloader');
var TemplateRunner = require('./src/modules/template-load/runner.js');
var HeaderRunner = require('./src/modules/header/runner.js');
var NavigationRunner = require('./src/modules/navigation/runner.js');
//var ScrollRunner      = require('./src/modules/scroll-watch/runner.js');
// var WidgetRunner     = require('./src/modules/widget/runner.js');




var Application = function() {

    new HeaderRunner();
    new NavigationRunner();
    //new ScrollRunner();
    // new WidgetRunner();

    WebFont.load({
        google: {
            families: ['Roboto']
        },
        custom: {
            families: ['FontAwesome'],
            urls: ['//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css']
        }
    });

    new TemplateRunner();
};


$(function() {
    new Application();
});