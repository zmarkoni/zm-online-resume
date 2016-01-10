var $ = require('jquery');

module.exports = function (someText) { //ne mogu da stavim ime funkcije!
  var z = $('#app .h1').text(someText);
  return z;
}