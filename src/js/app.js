//Entry point for application

var $ = require('jquery');

var WebFont = require('webfontloader');
var TemplateRunner = require('./src/modules/template-load/runner.js');
var HeaderRunner = require('./src/modules/header/runner.js');
var NavigationRunner = require('./src/modules/navigation/runner.js');

var Application = function() {

    new HeaderRunner();
    new NavigationRunner();

    //Load CSS asynchronly
    var cb = function() {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = 'css/style.css';
        var h = document.getElementsByTagName('head')[0];
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

    //Include templates
    new TemplateRunner();
};


$(function() {
    new Application();
});