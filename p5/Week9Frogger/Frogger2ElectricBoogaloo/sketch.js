var cars = [];
var frogPos ;
var myState = 0;
var timer = 0;
var yoda, yodaL, yodaR;
var bird;
var birds = [];

function setup() {

  createCanvas(800, 800);

  yodaL = loadImage("Assets/yodaLeft.gif");
  yodaR = loadImage("Assets/yodaRight.gif");
  yoda = yodaL;

  bird = loadImage("Assets/bird1.png");
  birds[0] = loadImage("Assets/bird1.png");
  birds[1] = loadImage("Assets/bird2.png");
  birds[2] = loadImage("Assets/bird3.png");

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  imageMode(CENTER);
}

function draw() {

background(100);
  //game();
  switch(myState) {

  case 0:  // splash screen
  fill('red');
  text('Welcome to the Game.', width/2, height/2);
  break;

  case 1: // the game state
    game();
    timer++;
    if (timer > 600){
      myState = 3;
      timer = 0;
    }
  break;

  case 2: // the win state
  fill('red');
  text('Congrats, I guess. You apparently won.', width/2, height/2);
  break;

  case 3: // the lose state
  fill('red');
  text('Haha you failed!', width/2, height/2);
  break;

  }

}

function mouseReleased(){
  switch(myState){
    case 0:
      myState = 1;
  break;

  case 2: //the win state
    resetTheGame();
    myState = 0;
  break;

  case 3: //the lose state
    resetTheGame();
    myState = 0;
  break;
  }
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0;
  this.timer = 0;

  // methods
  this.display = function() {
    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 100, 50);
    // ellipse(this.pos.x-45, this.pos.y+25, 50, 50);
    // ellipse(this.pos.x+45, this.pos.y+25, 50, 50);
    //image(bird, this.pos.x, this.pos.y, 100, 100);

    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

  this.timer++;
  if (this.timer > 20){
    this.birdNum = this.birdNum + 1;
    this.timer = 0;
  }

    //dont go past the array
    if (this.birdNum > 2){
      this.birdNum = 0;
    }

  }



  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed(){
  if (keyCode === LEFT_ARROW) yoda = yodaL;
  if (keyCode === RIGHT_ARROW) yoda = yodaR;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function game(){
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }

  if(cars.length == 0){
    myState = 2;
  }

  // draw the frog
   fill('green') ;
  // ellipse(frogPos.x, frogPos.y, 60, 60) ;

  image(yoda, frogPos.x, frogPos.y, 120, 120);
  checkForKeys() ;
}

function resetTheGame(){
  cars = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}