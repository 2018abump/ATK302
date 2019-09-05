var score = 0;

function setup() {
  // put setup code here
  createCanvas(800,500);
  textAlign(CENTER);

}

function mouseReleased() {
  //background(random(255), random(255), random(255));
  score++ ;
  //fill(255);
  //ellipse(mouseX, mouseY, 30, 30);
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
    stroke(random(255), random(0), random(0));
    strokeWeight(random(4));
  console.log(mouseX + ',' + mouseY);
}

function draw() {
  // put drawing code here
  //fill(255);
  //ellipse(width/2, height/2, 120, 120);
  //ellipse(120, 256, 180, 180);
  //ellipse(121, 168, 120, 120);
//  ellipse(128, 100, 150,150);
  //rect(mouseX, mouseY, 30, 50);
  textSize(50);
  fill(0);
  rect(0, 0, 90, 90);
  fill(255);
  text(score, 30, 60);
  //fill(0);
  //text('Alyssa Bump', width/2, height/2);
}
