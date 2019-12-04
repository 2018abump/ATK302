// var direction = 0;
var mariah;
// var canada;
// var russian
// var california;
// var despacito;
// var vocaloid;
// var bluegrass;
// var hindi;
// var north;
// var south;
// var comicsans;
// var east;
// var west;
// var turnAxis;
//
function preload() {
  mariah = loadImage('Assets/AIWFCIY.jpg');
  // canada = loadImage('Assets/Can.jpg');
  // russian = loadImage('Assets/CDB.jpg');
  // california = loadImage('Assets/CG.jpg');
  // despacito = loadImage('Assets/D.jpg');
  // vocaloid = loadImage('Assets/IP.jpg');
  // bluegrass = loadImage('Assets/TLO.jpg');
  // hindi = loadImage('Assets/TTT.jpg');
  // up = loadImage('assets/OTR.jpg');
  // down = loadImage('assets/KAP.jpg');

  // knives = loadSound('Assets/black-veil-bridesknives-and-pens-lyrics-youtubemp3free.org.mp3');
  // caligirls = loadSound('Assets/california-girls-by-katy-perry-ft-snoop-dog-lyrics-youtubemp3free.org.mp3');
  // tunak = loadSound('Assets/daler-mehndi-tunak-tunak-tun-video-youtubemp3free.org.mp3');
  // miku = loadSound('Assets/hatsune-miku-ievan-polkka-project-diva-theatre-hd-youtubemp3free.org.mp3');
  // anthem = loadSound('Assets/hymne-natonal-du-canada-en-franais-youtubemp3free.org.mp3');
  // jb = loudSound('Assets/JustinBieber-Despacito(Lyrics)ftLuisFonsiDaddyYankee[Pop].mp3');
  // bop = loudSound('Assets/kidz-bop-kids-old-town-road-youtubemp3free.org.mp3');
  // christmas = loadSound('Assets/mariah-carey-all-i-want-for-christmas-is-you-lyrics-youtubemp3free.org.mp3');
  // chum = loadSound('Assets/Weirdrussiansinger-ChumDrumBedrum.mp3');
}
//
// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   comicsans = loadFont('assets/NotoSansJP-Bold.otf');
//
//   knives.loop();
//   knives.stop();
//   caligirls.loop();
//   caligirls.stop();
//   tunak.loop();
//   tunak.stop();
//   miku.loop();
//   miku.stop();
//   anthem.loop();
//   anthem.stop();
//   jb.loop();
//   jb.stop();
//   bop.loop();
//   bop.stop();
  // christmas.loop();
  // christmas.stop();
//   chum.loop();
//   chum.stop();
//
//   anglemode(DEGREES);
// }
//
// function deviceTurned() {
//   if (turnAxis === 'Y') {
//     if (value === 0) {
//       value = 255;
//     } else if (value === 255) {
//       value = 0;
//     }
//   }
// }
//
// function draw() {
//   // put drawing code here
//   background('green');
//   textFont(comicsans, 30);
//   fill(250, 237, 39);
//   fill(value);
//   rect(25, 25, 50, 50);
//
//
//   switch (direction) {
//     case 0:
//       text("Direction: North \nAll I Want For Christmas Is You by Mariah Carey", 100, 500);
//       image(mariah, 0, 0, 600, 450);
//       break;
//
//     case 1:
//       textFont(comicsans, 30);
//       text("Direction: South \nThe Lucky One by Alison Krauss and Union Station", 100, 500);
//       image(bluegrass, 0, 0, 450, 450);
//       break;
//
//     case 2:
//       textFont(comicsans, 30);
//       text("Direction: East \nTunak Tunak Tun by Daler Mehndi", 100, 500);
//       image(hindi, 0, 0, 650, 450);
//       break;
//
//     case 3:
//       textFont(comicsans, 30);
//       text("Direction: West \nCalifornia Girls by Katy Perry", 100, 500);
//       image(california, 0, 0, 650, 450);
//       break;
//
//     case 4:
//       textFont(comicsans, 30);
//       text("Direction: Northeast \nChum Drum Bedrum by Vitas", 100, 500);
//       image(russian, 0, 0, 450, 450);
//       break;
//
//     case 5:
//       textFont(comicsans, 30);
//       text("Direction: Northwest \nFrench Canadian National Anthem", 100, 500);
//       image(canada, 0, 0, 450, 450);
//       break;
//
//     case 6:
//       textFont(comicsans, 30);
//       text("Direction: Southeast \nIevan Polkka sung by Len Kagamine and Many Other Vocaloids", 100, 500);
//       image(vocaloid, 0, 0, 450, 450);
//       break;
//
//     case 7:
//       textFont(comicsans, 30);
//       text("Direction: Southwest \nDespacito by Luis Fonsi, Daddy Yankee, and Justin Bieber", 100, 500);
//       image(despacito, 0, 0, 650, 450);
//       break;
//
//     case 8:
//       textFont(comicsans, 30);
//       text("Direction: Straight Up \nOld Town Road sung by Kidz Bop", 100, 500);
//       image(up, 0, 0, 450, 450);
//       break;
//
//     case 9:
//       textFont(comicsans, 30);
//       text("Direction: Straight Down \nKnives and Pens by Black Veil Brides", 100, 500);
//       image(down, 0, 0, 450, 450);
//       break;
//   }
//
// }

// let magSensor = new Magnetometer({
//   frequency: 60
// });
// magSensor.addEventListener('reading', e => {
//   console.log("Magnetic field along the X-axis " + magSensor.x);
//   console.log("Magnetic field along the Y-axis " + magSensor.y);
//   console.log("Magnetic field along the Z-axis " + magSensor.z);
// });
// magSensor.start();


var alpha, beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;

var myState = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
  // requestT() ;

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {

  background('#c6f5ff'); // light blue

  // alpha is the direction! It starts at 0 when you load the page. If you turn to the left, it goes up,
  // all the way from 1 to 360. If you turn to the right, you'll start at 360 and go down.

  if ((alpha > 90) && (alpha < 0) && (myState != 2)) { // degrees for 1st song; you can change these!
    myState = 1;
  }

  if ((alpha > 16) && (alpha < 30) && (myState != 4)) { // degrees for 2nd song
    myState = 3; // we have to skip a state because each state needs to go to a "hangout" state
  }

  if ((alpha > 31) && (alpha < 45) && (myState != 6)) { // degrees for 2nd song
    myState = 5; // we have to skip a state because each state needs to go to a "hangout" state
  }

  // add the rest to 360...


  // The States of Playing Music

  switch (myState) {
    // states for song 1
    case 1: // this is for the first song.
      // christmas.play() ;
      myState = 2; // Don't hang out here in the "needle-drop" state!!!
      break;

    case 2:
      // put some pretty images here or something, for song1
      image(mariah, 0, 0);
      text("playing song 1", 100, 150);
      break;

      // states for song 2
    case 3: // this is for the 2nd song.
      // song2.play() ;
      myState = 4; // go directly to the next state so we don't keep needle-dropping!
      break;

    case 4:
      // pretty stuff to hang out here.
      text("playing song 2", 100, 150);
      break;

      // states for song 2
    case 5:
      // song2.play() ;
      myState = 6;
      break;

    case 6:
      // pretty stuff to hang out here.
      text("playing song 3", 100, 150);
      break;

  }



  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha.toFixed(0), 25, 50);
  text("beta: " + beta.toFixed(0), 25, 70);
  text("gamma: " + gamma.toFixed(0), 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);


  text("x = " + x.toFixed(0), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(0), 25, 170);
  text("z = " + z.toFixed(0), 25, 190);
  text("myState = " + myState, 25, 210);

}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
