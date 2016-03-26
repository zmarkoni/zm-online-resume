var Screen = require('./sandbox/screen');
var Template = require('./sandbox/template');

var Sandbox = {

    screen: function() {
        return new Screen();
    },
    template: function(html, container) {
        return new Template(html, container);
    },
    parseHtml: function(html) {
        console.log(html);
        return {
            // gulp_inject: html //does not work ????
            gulp_inject: '/src/templates/about.html'
        };
    },

};

module.exports = Sandbox;