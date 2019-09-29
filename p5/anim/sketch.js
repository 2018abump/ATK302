var x = 0;
var y = 0;

function setup() {
  // put setup code here
  createCanvas(300,300);
}

function draw() {
  // put drawing code here
  background(100);
  rect(x, height/2, 10, 10);
  x +=5; //crosses the screen 1 at a time or x ++ or x+=5
    if (x > width) {
      x = 0;
    }

  rect(width/2, y, 10, 10);
  y +=5;
    if(y > height) {
      y = 0;
    }
}
