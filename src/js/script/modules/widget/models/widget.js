//require packages
var $ = require('jquery');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

inherits(Widget, EventEmitter);

module.exports = Widget;

function Widget(opts) {
  //ovaj if mi i ne treba, to radi da ne bi u app.js pozivao Widget sa new
    if(!(this instanceof Widget)){ //if this is not widget create Widget instance , this postaje Widget a prethodno je bio Window
      // console.log("new widget");
      return new Widget(opts);
    }
    this.element = document.createElement('div');
}

Widget.prototype.appendTo = function (target) { //target = "#placeholder"
  if (typeof target === "string"){
    target = document.querySelector(target); // sada target postaje <div id="placeholder"></div>
  }
  target.appendChild(this.element);
  this.emit('append', target);
}
