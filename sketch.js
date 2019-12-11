let w = 600;
let h = 600;
let cnv;
var ship;
var quotes = [];
var drops =[];
let phrases = ["cooool", "nice","great","fantastic", ""];
let state = 'title';
let shipImg;
let dropImg;
let bgImg;
var x1 = 0;
var x2;
var scrollSpeed = 2;
var i = 0
var song;
var button;
var music;

function preload(){
  playerImg = loadImage('assets/ship.png');
  bgImg = loadImage('assets/bg2.png');
  level1Img = loadImage('assets/level1bg.png');
  music = loadSound('assets/restaurantsong.mp3');
  // dropImg = loadImage('/assets')
}


function setup() {
  cnv = createCanvas(w, h);
  cnv.mouseClicked(canvasClicked);
  textAlign(CENTER);
  ship = new Ship();
  x2 = width;

  music.setVolume(0.3);
  music.play();


quotes.push(new Quote(random(phrases)))

}
function draw() {
   i = i + 1

  if (state === 'title') {
    title();
  } else if (state === 'level 1'){
    level1();
  }
}

function canvasClicked(){
  console.log('canvas is clicked');
}


function title() {

  image(bgImg, x1, 0, w, h);
  image(bgImg, x2, 0, w, h);
  x1 -= scrollSpeed-.5;
  x2 -= scrollSpeed-.5;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }


  noStroke();
  fill(218,112,214,100);
  rect(w/2, h/2, 300, + 200,20);
  rect(w/2, h/2, 250, + 150,20);
  rectMode(CENTER);
  fill(250);
  textSize(60);
  textFont('Raleway');
  text( 'You are...',w/2,h/5+200,);
  textSize(15);
  text( '☆ hit enter to start', w/2, h/2+190)
  text( '☆ Use the left and right arrow keys to move, hit space to grow', w/2, h/2+220)
  textSize(20);
  // text( 'CLICK TO START',w/2,h/5+330);

  fill(218,112,214,100 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(218,112,214,100);
  }
  else {
    noStroke();
  }
  textSize(25);
  text("PRESS START", w/2,h/5+330);
}
function level1(){
  background(level1Img, 129, 218, 237);
  ship.display();
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

  if (keyCode === ENTER) {
      console.log("key is hitting pp")
    state = 'level 1';
  }


  // if (keyCode === ENTER) {
  //   if (!music.isPlaying()){
  //     music.play();
  //     music.setVolume(0.3);
  //
  //   }else{
  //     music.pause();
  //   }
  //   console.log("key is hitting enter")
  // }


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
