var $ = require('jquery');

var template = function(html, container) {
    this.html = html;
    this.container = container;
};

template.prototype = {

    renderTemplate: function() {
        $(this.container).html(this.html);
    }
};

module.exports = template;