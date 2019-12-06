let w = 600;
let h = 600;
let cnv;
var ship;
this
var quotes = [];
var drops =[];
let phrases = ["cooool", "nice","great","fantastic", ""];

let state = 'title';


function setup() {
  cnv = createCanvas(w, h);
  cnv.mouseClicked(canvasClicked);
  textAlign(CENTER);
  ship = new Ship();

quotes.push(new Quote(random(phrases)))

}
function draw() {

  if (state === 'title') {
    title();
  } else if (state === 'level 1'){
    level1();
  }
}

function canvasClicked(){
  console.log('canvas is clicked');
}

function mousePressed() {
  state = 'level 1';
}

function title() {
  background(252, 195, 200);
  textSize(40);
  fill(218,112,214);
  text( 'you are..',300,300);
  textSize(15);
  text( 'Use the left and right arrow keys to move, hit space to fire',300,500)

}

function level1(){
  background(129, 218, 237);



  ship.show();
  ship.move();

  if (random(1) <= 0.01){
    quotes.push(new Quote(random(phrases)));
  }

  for (let i = 0; i < quotes.length; i++){
    quotes[i].display();
    quotes[i].move();
  }


  for ( var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();

  for ( var j = 0; j < quotes.length; j++) {
    if (drops[i].hits(quotes[j])) {
      quotes[j].grow();
      drops[i].disappear(i,1);

      console.log("BOOM");
    }
  }
}
for ( var i = drops.length-1; i >= 0; i--) {
  if (drops[i].toDelete) {
    drops.splice(i, 1);
  }
}
for ( var i = quotes.length-1; i >= 0; i--) {
  if (quotes[i].toDelete) {
    quotes.splice(i, 1);
  }
  }
for ( var i = 0; i < quotes.length; i++) {
  quotes[i].display();
  quotes[i].move();
  }

}

function keyReleased() {
  ship.setDir(0);
}

function keyPressed(){
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }


  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
