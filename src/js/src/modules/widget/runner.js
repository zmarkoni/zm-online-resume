var WidgetManager = require('./models/widget-manager.js');

var widgetRunner = function() {
    var w = WidgetManager();
    w.appendTo('#test-widget');
    console.log('widget');
};

module.exports = widgetRunner;