function Drop( x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
//size of drop and
  this.show = function() {
    fill(100, 149, 237);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

this.hits = function(quote) {
  var d = dist(this.x, this.y, quote.x, quote.y);
  if d < this.r + quote.r) {
    return true;
  } else {
    return false;
  }
}


//changes the speed of the drop
  this.move = function() {
    this.y = this.y - 2;
  }
}
