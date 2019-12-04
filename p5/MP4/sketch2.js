var alpha, beta, gamma; // orientation data
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
var frogPos;

var direction = 0;
var mariah, canada, russian, califronia, despacito, vocaloid, bluegrass, hindi;
var north;
var south;
var east;
var west;
var comicsans;
var turnAxis;



var peppa;
var trochut;

function preload() {
  mariah = loadImage('Assets/AIWFCIY.jpg');
  canada = loadImage('Assets/Can.jpg');
  russian = loadImage('Assets/CDB.jpg');
  california = loadImage('Assets/CG.jpg');
  despacito = loadImage('Assets/D.jpg');
  vocaloid = loadImage('Assets/IP.jpg');
  bluegrass = loadImage('Assets/TLO.jpg');
  hindi = loadImage('Assets/TTT.jpg');
  // up = loadImage('assets/OTR.jpg');
  // down = loadImage('assets/KAP.jpg');

  knives = loadSound('Assets/black-veil-bridesknives-and-pens-lyrics-youtubemp3free.org.mp3');
  caligirls = loadSound('Assets/california-girls-by-kety-perry-ft-snoop-dog-lyrics-youtubemp3free.org.mp3');
  tunak = loadSound('Assets/daler-mehndi-tunak-tunak-tun-video-youtubemp3free.org.mp3');
  miku = loadSound('Assets/hatsune-miku-ievan-polkka-project-diva-theatre-hd-youtubemp3free.org.mp3');
  anthem = loadSound('Assets/hymne-natonal-du-canada-en-franais-youtubemp3free.org.mp3');
  jb = loudSound('Assets/JustinBeiber-Despacito(Lyrics)ftLuisFonsiDaddyYankee[Pop].mp3');
  bop = loudSound('Assets/kidz-bop-kids-old-town-road-youtubemp3free.org.mp3');
  christmas = loadSound('Assets/mariah-carey-all-i-want-for-christmas-is-you-lyrics-youtubemp3free.org.mp3');
  chum = loadSound('Assets/Weirdrussiansinger-ChumDrumBedrum.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // peppa = loadImage("Assets/pepper.jpg");
  // myF = loadFont("Assets/fonts/Trochut-Regular.ttf");
  // penguin.play();
  // thasOk.play();

  alpha = 0;
  beta = 0;
  gamma = 0;


  frogPos = createVector(width / 2, height - 80);


  frogPos = createVector(width / 2, height - 80);

  imageMode(CENTER);
  rectMode(CENTER);

  comicsans = loadFont('assets/NotoSansJP-Bold.otf');

  knives.loop();
  knives.stop();
  caligirls.loop();
  caligirls.stop();
  tunak.loop();
  tunak.stop();
  miku.loop();
  miku.stop();
  anthem.loop();
  anthem.stop();
  jb.loop();
  jb.stop();
  bop.loop();
  bop.stop();
  christmas.loop();
  christmas.stop();
  chum.loop();
  chum.stop();

  anglemode(DEGREES);
}

// function draw() {
//   background("yellow");
//   push();
//   rotateZ(radians(rotationZ));
//   fill("red");
//   rect(200, 200, 200);
//
//   pop();
//   fill("white");
//   text("communism", rotationZ, width / 2, height / 2);
//
//   //rotateX(radians(rotationX));
//   //rotateY(radians(rotationY));
//   xPosition = map(gamma, -60, 60, 0, width);
//   yPosition = map(beta, -30, 30, 0, height);
//
//   push(); // before you use translate, rotate, or scale commands, push and then pop after
//
//   translate(xPosition, yPosition); // move everything over by x, y
//
//   rotate(radians(alpha)); // using alpha in here so it doesn't feel bad
//
//   image(peppa, 0, 0, 500, 500);
//
//   frogPos.x = xPosition;
//   frogPos.y = yPosition;
//
//
//
//   // DECORATIONS
//   // Just a bunch of text commands to display data coming in from addEventListeners
//   textAlign(LEFT);
//   textSize(20);
//   fill('black');
//   text("orientation data:", 25, 25);
//   textSize(15);
//   text("alpha: " + alpha, 25, 50);
//   text("beta: " + beta, 25, 70);
//   text("gamma: " + gamma, 25, 90);
//   textSize(20);
//   text("acceleration data:", 25, 125);
//   textSize(15);
//   text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
//   text("y = " + y.toFixed(2), 25, 170);
//   text("z = " + z.toFixed(4), 25, 190);
//
//   // MORE DECORATIONS - write that pretty ATK type on top.
//
//
// }

function draw() {
  // put drawing code here
  background('green');
  textFont(comicsans, 30);
  fill(250, 237, 39);
  fill(value);
  rect(25, 25, 50, 50);



  switch (direction) {
    case 0:

      text("Direction: North \nAll I Want For Christmas Is You by Mariah Carey", 100, 500);
      image(mariah, 0, 0, 600, 450);
      break;

    case 1:
      textFont(comicsans, 30);
      text("Direction: South \nThe Lucky One by Alison Krauss and Union Station", 100, 500);
      image(bluegrass, 0, 0, 450, 450);
      break;

    case 2:
      textFont(comicsans, 30);
      text("Direction: East \nTunak Tunak Tun by Daler Mehndi", 100, 500);
      image(hindi, 0, 0, 650, 450);
      break;

    case 3:
      textFont(comicsans, 30);
      text("Direction: West \nCalifornia Girls by Katy Perry", 100, 500);
      image(california, 0, 0, 650, 450);
      break;

    case 4:
      textFont(comicsans, 30);
      text("Direction: Northeast \nChum Drum Bedrum by Vitas", 100, 500);
      image(russian, 0, 0, 450, 450);
      break;

    case 5:
      textFont(comicsans, 30);
      text("Direction: Northwest \nFrench Canadian National Anthem", 100, 500);
      image(canada, 0, 0, 450, 450);
      break;

    case 6:
      textFont(comicsans, 30);
      text("Direction: Southeast \nIevan Polkka sung by Len Kagamine and Many Other Vocaloids", 100, 500);
      image(vocaloid, 0, 0, 450, 450);
      break;

    case 7:
      textFont(comicsans, 30);
      text("Direction: Southwest \nDespacito by Luis Fonsi, Daddy Yankee, and Justin Bieber", 100, 500);
      image(despacito, 0, 0, 650, 450);
      break;

    case 8:
      textFont(comicsans, 30);
      text("Direction: Straight Up \nOld Town Road sung by Kidz Bop", 100, 500);
      image(up, 0, 0, 450, 450);
      break;

    case 9:
      textFont(comicsans, 30);
      text("Direction: Straight Down \nKnives and Pens by Black Veil Brides", 100, 500);
      image(down, 0, 0, 450, 450);
      break;
  }

}

function deviceTurned() {
  if (value === 0) {
    value = 255;
  } else if (value === 255) {
    value = 0;
  }
}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// function mouseReleased () {
//   if (penguin.isPlaying()) {
//     penguin.pause() ;
//   } else {
//     thasOk.play() ;
//   }
// }


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

// let magSensor = new Magnetometer({frequency: 60});
// magSensor.addEventListener('reading', e => { console.log("Magnetic field along the X-axis " + magSensor.x);
// console.log("Magnetic field along the Y-axis " + magSensor.y);
// console.log("Magnetic field along the Z-axis " + magSensor.z); });
// magSensor.start();

''
