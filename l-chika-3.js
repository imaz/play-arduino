var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led10 = new five.Led(10);
  var led11 = new five.Led(11);
  var led9 = new five.Led(9);
  led9.blink(500);
  led11.blink(500);
  led10.blink(500);
});
