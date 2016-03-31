var Screen = require('./sandbox/screen');
var Template = require('./sandbox/template');

var Sandbox = {

    screen: function() {
        return new Screen();
    },
    template: function(html, container) {
        return new Template(html, container);
    }

};

module.exports = Sandbox;