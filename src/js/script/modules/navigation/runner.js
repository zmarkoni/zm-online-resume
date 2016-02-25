var Events = require('./events/listener.js');

var navigationRunner = function() {
    new Events(); // init LISTENER
};

module.exports = navigationRunner;