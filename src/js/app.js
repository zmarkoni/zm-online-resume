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

    //Load CSS asynchronly
    var cb = function() {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = 'css/style.css';
        var h = document.getElementsByTagName('head')[0];
        // h.parentNode.insertBefore(l, h);
        h.appendChild(l);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
        webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);

    //Load fonts
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