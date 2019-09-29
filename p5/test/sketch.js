var myState = 0;
var myTimer = 0;
var sb = 255;
var song1;

function preload(){
  song1 = loadSound('assets/music/ForATK302_mixdown.mp3');
}

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background(sb);
    fill('white');
    text("text", 10, 10);
      sb -=1;
      if(sb <= 0){
      sb = 255;
        myState = 1;
      }
      song1.play();
    break;

    case 1:
    background(sb);
      sb -=1;
      myTimer++;
        if(myTimer > 200){
          myTimer = 0;
          myState = 2;
        }
    break;

    case 2:
    background(sb);
      sb -=1;
    myTimer++;
      if(myTimer > 200){
        myTimer = 0;
        myState = 3;
      }
    break;

    case 3:
    break;

    case 4:
    break;
  }
}

function mouseReleased(){
  if(myState == 0) {
    myState = 1;
  }
}
