var WidgetManager = require('./models/widget-manager.js');

var widgetRunner = function() {
    // var w = WidgetManager();
    // w.appendTo('#test-widget');
    // console.log('widget');
    function sayHello() {
        return {
            gulp_inject: '/src/templates/test.html'
        }; // <-- and this!
    };
    var html = sayHello();
    console.log(html);
    $('#test-widget').html(html);
};

module.exports = widgetRunner;