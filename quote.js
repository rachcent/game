class Quote  {
  constructor(_text){
  this.r = 30;
  this.x = random(w);
  this.y = -random(100) - this.r;
  this.text = _text;
  this.toDelete = false;
  this.numLetters = this.text.length;
}

//once ball hits, it grows
  grow() {
    this.r = this.r + 25;
  }
//letters moving down
  move(){
    this.y++;
   }

  disappear(){
    this.toDelete = true;
  }

  display() {

    textSize(this.r);
    noStroke();
    fill(204, 255, 204, 200  - this.r / 35);
    //length of box is 15
    rect(this.x, this.y, 15 * this.numLetters, 30 );
    fill(0, 0, 200, 150 - this.r / 20);
    text(this.text, this.x, this. y+10);

  }
}
