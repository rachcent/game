class Ship {
  constructor(){
  this.x = w/2;
  this.xdir = 0;
}

  display() {
    fill(255);
    rectMode(CENTER);
    image(playerImg, this.x, h-20, 20, 40);
    // rect(this.x, h-20, 20, 40);
  }

  setDir(dir) {
  this.xdir = dir;
}
  move (dir) {
  this.x += this.xdir*5;
}
}

//
//
//
// function Ship() {
//   this.x = width/2;
//   this.xdir = 0;
//
//   this.show = function() {
//     fill(255);
//     rectMode(CENTER);
//     rect(this.x, height-20, 20, 40);
//   }
//
//   this.setDir = function(dir) {
//   this.xdir = dir;
// }
//   this.move = function(dir) {
//   this.x += this.xdir*5;
// }
// }
