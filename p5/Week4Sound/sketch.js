var song1;

function preload(){
  song1 = loadSound('assets/DaydreamBelieverMonkees.mp3')
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  background(255, 0 ,0);
  song1.play();
}

function draw() {
  // put drawing code here
}
