var Sandbox = require('../../sandbox.js');

var templateRunner = function() {

    Sandbox.template(require('../../../../templates/about.html'), '#about').renderTemplate();
    Sandbox.template(require('../../../../templates/contact.html'), '#contact').renderTemplate();
    Sandbox.template(require('../../../../templates/experiance.html'), '#experiance').renderTemplate();
    Sandbox.template(require('../../../../templates/projects.html'), '#projects').renderTemplate();
    Sandbox.template(require('../../../../templates/skills.html'), '#skills').renderTemplate();

    $('#navbar .inactive').removeClass('inactive');
};

module.exports = templateRunner;