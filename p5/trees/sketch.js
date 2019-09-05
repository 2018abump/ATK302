function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); //size of the background; x, y; width, height
}


function draw() {
  background('#9999CC'); //color of background
  noStroke(); //no stroke; no outline

  fill("brown")
  rect(97, 256, 88, 395);

  fill("green")
  triangle(138, 66, 68, 130, 202, 130);
  triangle(136, 103, 54, 198, 221, 205);
  triangle(136, 148, 36, 297, 248, 312);

  fill("yellow")
  ellipse(551, 66, 72, 72)

  fill("white")
  ellipse(357,128, 72,105)
  ellipse(357,110, 105, 72)
  ellipse(408, 139, 103, 106)




  // fill("blue"); //fill color of shapes
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);

fill(255);
  text(mouseX + ',' + mouseY, 30, 30);
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY);
}
