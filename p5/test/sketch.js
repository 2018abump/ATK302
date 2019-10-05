var myState = 0;
var myTimer = 200;
var sb = 255;
var song1;
var pic1, pic2, pic3, pic4;
var paint;
var x = 0;

function preload(){
  song1 = loadSound('assets/music/ForATK302_mixdown.mp3_4.mp3');

  song1.loop();
  song1.stop();
}

function setup() {
  // put setup code here
  createCanvas(800, 800);

  paint = loadFont('assets/font/FingerPaint-Regular.ttf');

  pic1 = loadImage('assets/pics/ATK302.1.png');
  pic2 = loadImage('assets/pics/ATK302.2.png');
  pic3 = loadImage('assets/pics/ATK302.3.png');
  pic4 = loadImage('assets/pics/ATK302.4.png');
}

function draw() {
  // put drawing code here
  switch(myState){

    case 0:
      background(0);
      textFont(paint, 20);
      fill('red');
      textSize(30);
      text("Fear creates sustainability", 300, 300);
      textFont('Helvetica', 15);
      text("Click to Begin", width/2, height/2);
      push();
        translate(x, 50);
        x++ ;
        if (x > width) {
          x = 0;
        }

        words();

        pop();
      song1.pause();
    break;

    case 1: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 2;  // go immediately (the next time) to the next state
      break;

    case 2:
      background(0);
      tint(sb);
      image(pic1, 0, 0);
        sb -=1;
        if(sb <= 0){
        sb = 255;
        // myState = 3;
        }
        myTimer++;
          if(myTimer > 250){
            myTimer = 0;
            myState = 3
          }
    break;

    case 3:
    background(0);
    tint(sb);
    image(pic2, 0, 0);
      sb -=1;
      if(sb <=0){
        sb = 255;
      }
      myTimer++;
        if(myTimer > 250){
          myTimer = 0;
          myState = 4
        }
    break;

    case 4:
    background(0);
    tint(sb);
    image(pic3, 0, 0);
      sb -=1;
      if(sb <= 0){
      sb = 255;
      // myState = 3;
      }
      myTimer++;
        if(myTimer > 250){
          myTimer = 0;
          myState = 5;
        }
    break;

    case 5:
    background(0);
    // tint(sb);
    tint(sb);
    image(pic4, 0,0);
      sb -=1;
      if(sb <= 0){
      sb = 255;
      }
      textFont(paint, 20);
      text("Do Not Litter", 50, 300);
    myTimer++;
      if(myTimer > 250){
        myTimer = 0;
        myState = 0;
      }
    break;
}
}

// function mouseReleased(){
//   myState = myState + 1;
//   if (myState > 1) {
//     myState = 0;
//   }
// }

function mouseReleased(){
  //add one to myState
  myState ++;
    if (myState <= 0) {
      myState = 1;
    }
}

function words(){
    text("do not click other slides", width/2, height/2 +20);
}
