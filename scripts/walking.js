var canvas = document.getElementById('canvas'), // get our canvas tag in the DOM
ctx = canvas.getContext('2d'), // set the context of the canvas
character = new Image(), // create a new image object for our sprite sheet
driver = { // create our driver object
  x: 0, // set the driver’s x position
  y: 50, // set the driver’s y position
  w: 120, // set the driver’s width
  h: 168, // set the driver’s height
  sx: 0, // set the driver’s image’s source x position
  sy: 301, // set the driver’s image’s source y position
  faceRight: true, // this will tell the code our driver is facing right to start
  faceLeft: false, // this is set to false so our driver will face right
  counter: 0, // counter we use to know when to change frames
  step: 20, // we change frames every 15 frames, so increase or decrease this number if you want the driver to walk faster or slower
  nextStep: 0, // this increases with each frame change
  endStep: 147,  // when counter equals this number, everything resets and we go back to the first frame
  start: { // sets the start postions of our source
    rightX: 0, // start x position when facing right
    leftX: 100, // start x position when facing left
    y: 301 // start y position is the same for both
  }
},
key = { // the variables we’ll use to see if a key is being pressed
  right: false,
  left: false
};

function drawDriver() {
  move(0, true, false);
  driver.x += 1;
  if (driver.x > canvas.width + driver.w + 1) {
    driver.x = -driver.w;
  }
  ctx.drawImage(character, driver.sx, driver.sy, driver.w, driver.h, driver.x, driver.y, driver.w, driver.h);
}

function move(yPos, right, left) {
  driver.faceRight = right;
  driver.faceLeft = left;
  if (driver.counter === driver.endStep) {
    driver.sx = 0;
    driver.counter = 0;
    driver.nextStep = driver.step;
  } else if (driver.counter === driver.nextStep) {
    if (driver.sy === driver.start.y) {
      driver.sx = 0;
    } else if (driver.sy === yPos) {
      driver.sx += driver.w;
    }
    driver.sy = yPos;
    driver.nextStep += driver.step;
  }
  driver.counter += 1;
}

function reset() {
  driver.sy = driver.start.y;
  driver.counter = 0;
  driver.nextStep = 0;
}

function drawBG() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 185, canvas.width, 15);
}


function loopDriver() {
  //clearCanvas();
  drawBG();
  drawDriver();
  requestAnimFrame(loopDriver);
}

function init() {
  character.src = 'img/rider_scene1.png';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  loopDriver();
}


init();