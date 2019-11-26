function Quote( x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.show = function() {
    textSize(32);
    fill(255, 0, 200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
