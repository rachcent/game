let w = 600;
let h = 600;
var ship;
var quotes = [];
var drops =[];
let phrases = ["cooool", "nice","great"];

function setup() {
  createCanvas(w, h);
  textAlign(CENTER);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for ( var i = 0; i < 6; i++) {
    quotes[i] = new Quote(random(phrases));
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
      quotes[j].grow();
      drops[i].disappear();

      console.log("BOOM");
    }
  }
}


  for ( var i = 0; i < quotes.length; i++) {
    quotes[i].display();
    quotes[i].move();
    }
  }
    for ( var i = drops.length-1; i >= 0; i--) {
      if (drops[i].toDelete) {
        drops.splice(i, 1);
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
