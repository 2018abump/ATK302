var catPic;

function setup() {
  // put setup code here
  createCanvas(800,800);
catPic = loadImage("assets/cat.jpg");
}

function draw() {
  // put drawing code here
image(catPic, 10, 10);
tint(0, 153, 204, 126);
image(catPic, 20, 0);
  //image(image name, x, y)
}
