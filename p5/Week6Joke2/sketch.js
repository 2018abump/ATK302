var myState = 0;
var timer = 100;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('red');
      text("What do you call a fish with no eyes?", width / 2, height / 2);
      timer-- ;
      if (timer <= 5) {
        myState = myState + 1;
      }
      break;

    case 1:
      background('blue');
      fill('white');
      text("A fsh", width / 2, height / 2);
      break;
  }
}
