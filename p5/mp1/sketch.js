function setup() {
  // put setup code here
    createCanvas(800, 800);

}

function draw() {
  // put drawing code here
background("grey");
noStroke();


if (mouseIsPressed){
  background(188, random(124), random(124));
  fill("#2C2C2C")
    rect(0, 237, windowWidth, 500);
  fill("#575757")
    rect(152, 542, 300, 500);
    rect(16, 142, 300, 500);
  fill("#C6C6C6")
    rect(101, 258, 200, 430);
  fill("#7A7A7A")
    rect(0, 546, 800, 200);
  fill("#9F9F9F")
    rect(550, 155, 375, 400);
  fill(random(255), random(0),random(0));
    ellipse(544, 325, 100, 130);
    ellipse(64, 150, 100, 50);
    triangle(40, 108, 18, 149,45, 140);
    triangle(60, 77, 46, 140, 76, 135);
    triangle(91, 77,79, 128, 107, 146);
    triangle(502, 290, 518, 223,537, 290);
    triangle(558, 165, 526, 286, 562, 285);
  fill("#E2E200")
    rect(179, 305, 10, 20);
    rect(179, 356, 10, 20);
    rect(179, 396, 10, 20);
    rect(179, 406, 10, 20);

    rect(470, 312, 10, 20);

    rect(644, 214, 10, 20);
    rect(644, 244, 10, 20);
    rect(644, 284, 10, 20);
    rect(644, 324, 10, 20);

    rect(46, 230, 10, 20);
    rect(46, 321, 10, 20);
    //body
  fill("#162CA2") ;
    ellipse(330, 110, 120, 120);
  fill("#FFFFFF")
    rect(278, 106, 100, 15);
  fill('black')
    ellipse(300, 111, 5, 5);
    ellipse(354, 111, 5, 5);
  fill("#162CA2")
    rect(320,189, 20, 30);
    rect(138,203, 150, 20)
    rect(127,201, 20, 150)
    rect(247,202, 200, 200);
    rect(585,72, 20, 150);
    rect(447, 201, 150, 20);
    rect(438,392, 200, 20);
    rect(618, 404, 20, 150);
    rect(90, 394, 200, 20);
    rect(89, 407, 20, 150);
  fill("#EC2004")
      ellipse(348, 304, 170, 170);
  fill("#FFFFFF")
      ellipse(348, 304, 130, 130);
  fill("#EC2004")
      ellipse(348, 304, 100, 100);
  fill("#1849CA")
      ellipse(348, 304, 80, 80);
  fill("#FFFFFF")
      rect(329, 285, 30, 30);
      triangle(329, 285, 346, 262, 358, 285);
      triangle(358, 286, 383, 297, 358, 314);
      triangle(330, 311, 330, 286, 309, 299);
      triangle(330, 311, 324, 332, 344, 312);
      triangle(344, 312, 363, 332, 357, 313);

      //textbox
      fill("#FFFFFF")
        rect(130, 448, 500, 50);
      fill("#000000")
        text('Now the Fire Nation is attacking the United States, and it is up to Stove Dodgers,\n donning the name of Captain Amerininja, to stop them. With his crazy mad ninjas skills,\n he vows to protect America, beat the baddies, and give Lys an A+ in this class.', 137, 458);

} else {
    fill("#c9c9c9") ;
      ellipse(330, 110, 120, 120);
      rect(320,189, 20, 30);
      rect(247,202, 200, 200);
      rect(32, 196, 300, 20);
      rect(338, 194, 300, 20);
      rect(249, 397, 20, 300);
      rect(418, 394, 20, 300);


      //textbox
      fill("#FFFFFF")
        rect(130, 448, 500, 80);
      fill("#000000")
        text('Stove Dodgers was a normal American teenager. Born from a Japanese family skilled in\n martial arts, Stove had learned techniques of the Old Masters. His Grandpa would tell him\n stories of how old Japan had been at peace... until the Fire Nation attacked. Stove\n used to think these were just fantasy stories, but little did he know that they were\n true.', 137, 458);
}
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY);
}
