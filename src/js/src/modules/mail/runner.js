// var Events = require('./events/listener.js');

var MailManager = require('./models/mail-manager.js');

var MailRunner = function() {
    new MailManager(); //call on init
    // new Events(); // init LISTENER
};

module.exports = MailRunner;