var ship;
var quotes = [];
var drops =[];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for ( var i = 0; i < 6; i++) {
    quotes[i] = new Quote(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  for ( var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
  for ( var j = 0; j < quotes.length; j++) {
    if (drops[i].hits(quotes[j])) {
      console.log("BOOM");
    }
}
}
  for ( var i = 0; i < quotes.length; i++) {
    quotes[i].show();
  }
}

function keyPressed(){
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }


  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
