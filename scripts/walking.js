// background_image.src = 'img/scene_2.jpg';

// background_image.onload = function() {
//   setCanvasSize();
// }

// driver = { // create our driver object
//   x: 60, // set the driver’s x position
//   y: 340, // set the driver’s y position
//   w: 120, // set the driver’s width
//   h: 168, // set the driver’s height
//   sx: 0, // set the driver’s image’s source x position
//   sy: 301, // set the driver’s image’s source y position
//   faceRight: true, // this will tell the code our driver is facing right to start
//   faceLeft: false, // this is set to false so our driver will face right
//   counter: 0, // counter we use to know when to change frames
//   step: 20, // we change frames every 15 frames, so increase or decrease this number if you want the driver to walk faster or slower
//   nextStep: 0, // this increases with each frame change
//   endStep: 147,  // when counter equals this number, everything resets and we go back to the first frame
//   start: { // sets the start postions of our source
//     rightX: 0, // start x position when facing right
//     leftX: 100, // start x position when facing left
//     y: 301 // start y position is the same for both
//   },
//   natural_w: 1200,
//   natural_h: 168
// },
// key = { // the variables we’ll use to see if a key is being pressed
//   right: false,
//   left: false
// };

// function drawDriver() {
//   moveDriver(0, true, false);
//   driver.x += 1;
//   if (driver.x > canvas.width + driver.w + 1) {
//     driver.x = -driver.w;
//   }
//   ctx.drawImage(character, driver.sx, driver.sy, driver.w, driver.h, driver.x, driver.y, driver.natural_w, driver.natural_h);
// }

// function moveDriver(yPos, right, left) {
//   driver.faceRight = right;
//   driver.faceLeft = left;
//   if (driver.counter === driver.endStep) {
//     driver.sx = 0;
//     driver.counter = 0;
//     driver.nextStep = driver.step;
//   } else if (driver.counter === driver.nextStep) {
//     if (driver.sy === driver.start.y) {
//       driver.sx = 0;
//     } else if (driver.sy === yPos) {
//       driver.sx += driver.w;
//     }
//     driver.sy = yPos;
//     driver.nextStep += driver.step;
//   }
//   driver.counter += 1;
// }

// function drawDriverBG() {  
//   ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
// }


// function loopDriver() {
//   drawDriverBG();
//   drawDriver();
//   requestAnimFrame(loopDriver);
// }

// function initDriverWalking() {
//   character.src = 'img/rider_scene1.png';
//   loopDriver();
// }


// initDriverWalking();