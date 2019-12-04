var direction = 0;
var mariah;
var canada;
var russian
var california;
var despacito;
var vocaloid;
var bluegrass;
var hindi;
var north;
var south;
var comicsans;
var east;
var west;
var turnAxis;

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

function deviceTurned() {
  if (turnAxis === 'Y') {
    if (value === 0) {
      value = 255;
    } else if (value === 255) {
      value = 0;
    }
  }
}

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
