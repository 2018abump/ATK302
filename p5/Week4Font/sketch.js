var flower ;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  flower = loadFont('assets/IndieFlower-Regular.ttf');
}

function draw() {
  // put drawing code here
  background(100);
  textFont(flower, 16);
  fill('red');
  text("hello world", 10, 30);

  textSize(60);
  text("world hello", x, 100);
  x++ ;
  if (x > width) {
    x = 0;
  }

}
