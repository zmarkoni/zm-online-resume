var $ = require('jquery');

var template = function(html, container) {
    this.html = html;
    this.container = container;
};

template.prototype = {

    renderTemplate: function() {
        if(this.html != undefined && (this.container).length != 0) {
            $(this.container).html(this.html);
        }

    }
};

module.exports = template;