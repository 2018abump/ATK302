var myState = 0;
var timer = 100
var x = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  noStroke();
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  // put drawing code here

  background('blue');
  fill('#f4d100');
    rect(width/2,height/2, 150, 400);
    timer-- ;
    if (timer <= 0) {
      myState = myState + 1;
      timer = 100;
    }

    push();
      translate(x, 50);
      x++ ;
      if (x > width) {
        x = 0;
      }

    car();

    pop();

    switch(myState){
      case 0:
        fill('grey');
        ellipse(width/2, height/2 +150, 100, 100); //green

        fill('grey');
        ellipse(width/2, height/2, 100, 100); //yellow

        fill('red');
          ellipse(width/2, height/2 -150, 100, 100); //red
      break;

      case 1:
      fill('grey');
      ellipse(width/2, height/2 +150, 100, 100); //green

      fill('yellow');
      ellipse(width/2, height/2, 100, 100); //yellow

      fill('grey');
        ellipse(width/2, height/2 -150, 100, 100); //red
      break;

      case 2:
      fill('green');
      ellipse(width/2, height/2 +150, 100, 100); //green

      fill('grey');
      ellipse(width/2, height/2, 100, 100); //yellow

      fill('grey');
        ellipse(width/2, height/2 -150 ,100, 100); //red

      break;

      case 3:
      myState = 0;
      break;
    }

}

function car(){
  fill('red');
  rect(44, 672, 150, 45);
  fill('black');
  ellipse(0, 693, 40, 40);
  ellipse(110, 693, 40, 40)
}

function mouseReleased(){
  console.log(mouseX + ',' + mouseY);
}
