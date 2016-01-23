/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove



var $ = require('jquery');
var scrollRunner = require('./script/modules/scroll-watch/runner.js');
var Widget = require('./script/modules/widget/runner.js');
// var testModule = require('./script/modules/module_revealing.js');


var Application = function() {
  //require modules

    //initialize modules
  // var w = Widget();
  // w.on('append', function(target) {
  //     console.log('appended to ' + target.outerHTML);
  //     console.log('an event occurred!');
  // });
  // w.appendTo('#placeholder');

   scrollRunner();

   // console.log(testModule.greetings);
   // testModule.setName("Jelena");
   // testModule.getName();
   // testModule.updatePlaceholder('Hello from testModule !!!!!!!!!!!!!!!!')

};


$(function() {
  new Application();
});
