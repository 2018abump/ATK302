function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); //size of the background; x, y; width, height
  background('#C31D10'); //color of background
  noStroke(); //no stroke; no outline

  fill("blue"); //fill color of shapes
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(0, 0, 100, 200); //x=81, y=81, rectangle is 63px wide and 63px long

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
