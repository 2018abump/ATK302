var song1;

function preload(){
  song1 = loadSound('assets/DaydreamBelieverMonkees.mp3')
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(255, 0 ,0);

}

function draw() {
  // put drawing code here
}

function mouseReleased(){
  //if song is play, pause it
  //otherwise, play it
  if (song1.isPlaying()){
    song1.pause();
  }else{
  song1.play();
  }
}

//song1.pause()  sont1.isPlaying()
