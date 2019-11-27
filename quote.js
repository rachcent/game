class Quote  {
  constructor(_text){
  this.r = 30;
  this.x = random(w);
  this.y = -random(300) - this.r;
  this.text = _text;
  this.numLetters = this.text.length;
}


  grow() {
    this.r = this.r + 10;
  }

  move(){
    this.y++;
   }

  display() {

    textSize(this.r);
    fill(255, 0, 200, 255-this.r/5);
    rect(this.x, this.y, 15 * this.numLetters, 30);
    fill(0, 0, 200, 255-this.r/5);
    text(this.text,this.x, this.y);

  }
}
