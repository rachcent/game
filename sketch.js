var ship;
var quotes = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for ( var i = 0; i < 6; i++){
    quotes [i] = new Quote(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  for ( var i = 0; i < quotes.length; i++){
    quotes[i].show();
}
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
