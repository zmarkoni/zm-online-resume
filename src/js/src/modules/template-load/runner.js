// var TemplateManager = require('./models/template-manager.js');
var Sandbox = require('../../sandbox.js');

var templateRunner = function() {

    function aboutParseHtml() {
        return { gulp_inject: './src/templates/about.html' };
    };
    var about = aboutParseHtml();

    function contactParseHtml() {
        return { gulp_inject: './src/templates/contact.html' };
    };
    var contact = contactParseHtml();

    function experianceParseHtml() {
        return { gulp_inject: './src/templates/experiance.html' };
    };
    var experiance = experianceParseHtml();

    function projectsParseHtml() {
        return { gulp_inject: './src/templates/projects.html' };
    };
    var projects = projectsParseHtml();

    function skillsParseHtml() {
        return { gulp_inject: './src/templates/skills.html' };
    };
    var skills = skillsParseHtml();


    Sandbox.template(about, '#about').renderTemplate();
    Sandbox.template(contact, '#contact').renderTemplate();
    Sandbox.template(experiance, '#experiance').renderTemplate();
    Sandbox.template(projects, '#projects').renderTemplate();
    Sandbox.template(skills, '#skills').renderTemplate();
};

module.exports = templateRunner;