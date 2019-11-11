var namesArray = [];
var circles = [];
var yes;
var no;
var x = 0;

function preload() {
  yes = loadImage("assets/checkmarksign2.png");
  no = loadImage("assets/xsign.png");
}

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1JQWPmSHFQFhz52lM6y3yLLJkbIKUSHYiNJ7FVn6IMV0'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++){
    namesArray.push(new Circle(data[i].Name, data[i].Answer));
    circles.push(new Circle());
  }

}


function draw() {
  background('black');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myAnswer) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.answer = myAnswer;
  this.vel = createVector(random(-5, 5), random(-5, 5));

  this.display = function() {

    // put an ellipse here


    if (this.answer == "Yes") {
      image(yes, this.pos.x, this.pos.y, 100, 100);
    }
    if (this.answer == "No") {
      image(no, this.pos.x, this.pos.y, 100, 100);
    }
    if (this.answer == "Um, actually, hot dogs are the meaning of life") {
      fill('pink');
      ellipse(this.pos.x, this.pos.y, 100, 100);
    }
    fill('purple');
    text(this.name, this.pos.x, this.pos.y);

    text("Is A Hot Dog A Sandiwch Visual Survey Responses", x, 30);
    x +=0.2;
      if (x > 800) {
        x = 0;
      }
  }



  // this.drive = function() {
  //   this.pos.add(this.vel);
  //
  //   if (this.pos.x > width) this.pos.x = 0;
  //   if (this.pos.x < 0) this.pos.x = width;
  //   if (this.pos.y > height) this.pos.y = 0;
  //   if (this.pos.y < 0) this.pos.y = height;
  //
  //   for (var i = 0; i < circles.length; i++) {
  //     circles[i].display();
  //     circles[i].drive();
  //   }

  // this.drive = function() {
  //   this.pos.add(this.vel);
  //   if (this.pos.x > width) this.pos.x = 0;
  //   if (this.pos.x < 0) this.pos.x = width;
  //   if (this.pos.y > height) this.pos.y = 0;
  //   if (this.pos.y < 0) this.pos.y = height;
  // }
}
