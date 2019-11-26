function Quote(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;


  this.grow = function() {
    this.r = this.r + 15;
  }

  this.show = function() {
    textSize(this.r);
    fill(255, 0, 200);
    text("amazing",this.x, this.y);
  }
}
