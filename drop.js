function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  //size of drop and
  this.show = function() {
    fill(100, 149, 237);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.disappear = function() {
    this.toDelete = true;
  }

  this.hits = function(quote) {
    if (this.y <= quote.y + 15) {
      var d = dist(this.x, this.y, quote.x, quote.y);
      if (d < this.r + 15 * quote.numLetters/2) {
        return true;
      } else {
        return false;
      }
    }
  }

  //changes the speed of the drop
  this.move = function() {
    this.y = this.y - 2;
  }
}
