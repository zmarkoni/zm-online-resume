var Screen = require('./sandbox/screen');


var Sandbox = {

    screen: function() {
        return new Screen();
    }
};

module.exports = Sandbox;