var cars = [];
var frogPos ;
var myState = 0;
var timer = 0;
var yoda, yodaL, yodaR;
var bird;
var birds = [];
var splashBG, losepic, winpic, playpic;
var paint;
var lostsound;
var hound;
var hounds = [];
var player;
var song1;

function preload(){
  lostsound = loadSound('assets/hit-crunch-distortion-reverb-trail-off_MJxR43Ed.mp3');
  lostsound.stop();

  song1 = loadSound("assets/ForATK302_mixdown.mp3");
  song1.loop();
}

function setup() {

  createCanvas(800, 800);

paint = loadFont('assets/FingerPaint-Regular.ttf');

  splashBG = loadImage("assets/ATK3022.png");
  losepic = loadImage("assets/ATK302.4.png");
  winpic = loadImage("assets/winbg.png")
  playpic = loadImage("assets/ATK302.1.png");

  // yodaL = loadImage("assets/yodaLeft.gif");
  // yodaR = loadImage("assets/yodaRight.gif");
  // yoda = yodaL;

  player = loadImage("assets/player.png");


  bird = loadImage("assets/bottleatk.png");
  birds[0] = loadImage("assets/bottleatk.png");
  birds[1] = loadImage("assets/bottleatk2.png");
  birds[2] = loadImage("assets/bottleatk3.png");



  // hound = loadImage("assets/hound1.png");
  // hounds[0] = loadImage("assets/hound1.png");
  // hounds[1] = loadImage("assets/hound2.png");

  //spawn cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  // for (var i = 0; i < 1; i++){
  //   hounds.push(new Enemy());
  // }

  frogPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
  imageMode(CENTER);
}

function draw() {

  //game();
  switch(myState) {

  case 0:
  lostsound.stop();
  myState=1;
  break;

  case 1:
  song1.play();
  myState=2
  break;

  case 2:  // splash screen
  image(splashBG, width/2, height/2);
  fill('red');
  textFont(paint, 20);
  text('You have sinned against the Mother and now\nyou only have a short amount of time to redeem yourself.\n Go forth now',60, 60);
  text(35);
  text('Or face the Hound', 300, 300);
  textSize(50);
  text('Click to Begin', width/2, height/2);
  break;

  case 3: // the game state
    game();
    timer++;
    if (timer > 600){
      myState = 5;
      timer = 0;
    }
  break;

  case 4: // the win state
  image(winpic, width/2, height/2);
  fill('red');
  textFont(paint, 20);
  text('You have been redeemed.\n The wrath of the Hound\n will not reach you now.', 450, 300);
  song1.stop();
  break;

  case 5:
  song1.stop();
  myState = 6
  break;

  case 6:
  lostsound.play();
  myState=7
  break;

  case 7: // the lose state
  // if (myState = 5){
  //   song1.pause();
  //   lostsound.play();
  // }
  image(losepic, width/2, height/2);
  fill('white');
  textFont(paint, 20);
  text('Nature can be so unforgiving...\n [click to restart]', 60, 700);
  break;

// case 5:
// lostsound.pause();
// myState = 0;
// break;
  }


}

function mouseReleased(){
  switch(myState){
    case 2:
      myState = 3;
  break;

  case 4: //the win state
    resetTheGame();
    myState = 0;
  break;

  case 7: //the lose state
    resetTheGame();
    myState = 0;
  break;
  }

    // if (myState <= 0) {
    //   myState = 1;
    // }
}

// function Enemy(){
//   //attributes
//   this.pos = createVector(100,100);
//   this.vel = createVector(random -5, 5), random(-5,5));
//   this.houndNum = floor(random(hounds.length));
//   this.timer = 0;
//   this.maxTimer = random(10);
//
//   //methods
//   this.display = function() {
//     // fill(this.r, this.g, this.b);
//     // rect(this.pos.x, this.pos.y, 100, 50);
//     // ellipse(this.pos.x-45, this.pos.y+25, 50, 50);
//     // ellipse(this.pos.x+45, this.pos.y+25, 50, 50);
//     //image(bird, this.pos.x, this.pos.y, 100, 100);
//
//     image(hounds[this.houndNum], this.pos.x, this.pos.y, 100, 100);
//
//
//   this.timer++;
//   if (this.timer > 20){
//     this.birdNum = this.birdNum + 1;
//     this.timer = 0;
//
//   }
//   //dont go past the array
//   if (this.houndNum > 1){
//     this.houndNum = 0;
//   }
//
//   this.drive = function() {
//     this.pos.add(this.vel);
//
//     if (this.pos.x > width) this.pos.x = 0;
//     if (this.pos.x < 0) this.pos.x = width;
//     if (this.pos.y > height) this.pos.y = 0;
//     if (this.pos.y < 0) this.pos.y = height;
//
//   }
// }
// }

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds.length-1));
  this.timer = 0;
  this.maxTimer = random(10, 30);

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
  image(playpic, width/2, height/2);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  //   hounds[i].display();
  //   hounds[i].drive();
  }

  if(cars.length == 0){
    myState = 4;
  }
  //
  // if(hounds[i].pos.dist(frogPos)<30){
  //   myState =2;
  // }

  // draw the frog

   // fill('green') ;
  // ellipse(frogPos.x, frogPos.y, 60, 60) ;

  // image(yoda, frogPos.x, frogPos.y, 120, 120);
  image(player, frogPos.x, frogPos.y, 120, 120);
  checkForKeys() ;
}

function resetTheGame(){
  cars = [];
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  // hounds = [];
  // for )var i = 0; i < 1; i++){
  //   hounds.push(new Enemy());
  // }
  timer = 0;
}
