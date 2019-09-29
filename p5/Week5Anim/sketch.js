var x = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background('grey');
  text("YAS QUEEN", x, height/2);
  x +=2;
    if (x > 800) {
      x = 0;
    }
}
