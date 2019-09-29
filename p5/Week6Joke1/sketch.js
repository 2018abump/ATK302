var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('red');
      text("What did the fish say when he swam in to a wall?", width / 2, height / 2);
      break;

    case 1:
      background('blue');
      fill('white');
      text("Dam!", width / 2, height / 2);
      break;
  }
}

  function mouseReleased() {
    myState = myState + 1;
    if (myState > 1) {
      myState = 0;
    }
  }
