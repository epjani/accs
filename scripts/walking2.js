var walking = {
  canvas: document.getElementById('canvas'), // get our canvas tag in the DOM
  ctx: canvas.getContext('2d'), // set the context of the canvas
  character: new Image(), // create a new image object for our sprite sheet
  player: { // create our player object
    x: 0, // set the player’s x position
    y: 50, // set the player’s y position
    w: 120, // set the player’s width
    h: 168, // set the player’s height
    sx: 0, // set the player’s image’s source x position
    sy: 301, // set the player’s image’s source y position
    faceRight: true, // this will tell the code our player is facing right to start
    faceLeft: false, // this is set to false so our player will face right
    counter: 0, // counter we use to know when to change frames
    step: 20, // we change frames every 15 frames, so increase or decrease this number if you want the player to walk faster or slower
    nextStep: 0, // this increases with each frame change
    endStep: 147,  // when counter equals this number, everything resets and we go back to the first frame
    start: { // sets the start postions of our source
      rightX: 0, // start x position when facing right
      leftX: 100, // start x position when facing left
      y: 301 // start y position is the same for both
    }
  },
  key: { // the variables we’ll use to see if a key is being pressed
    right: false,
    left: false
  },

  drawPlayer: function() {
    this.move(0, true, false);
    player.x += 1;
    if (player.x > canvas.width + player.w + 1) {
      player.x = -player.w;
    }
    ctx.drawImage(character, player.sx, player.sy, player.w, player.h, player.x, player.y, player.w, player.h);
  },

  move: function(yPos, right, left) {
    this.player.faceRight = right;
    this.player.faceLeft = left;
    if (player.counter === player.endStep) {
      player.sx = 0;
      player.counter = 0;
      player.nextStep = player.step;
    } else if (player.counter === player.nextStep) {
      if (player.sy === player.start.y) {
        player.sx = 0;
      } else if (player.sy === yPos) {
        player.sx += player.w;
      }
      player.sy = yPos;
      player.nextStep += player.step;
    }
    player.counter += 1;
  },

  reset: function() {
    this.player.sy = player.start.y;
    this.player.counter = 0;
    this.player.nextStep = 0;
  },

  drawBG: function() {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#FFF';
    this.ctx.fillRect(0, 185, this.canvas.width, 15);
  },

  clearCanvas: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  loop: function() {
    //clearCanvas();
    this.drawBG();
    this.drawPlayer();
    this.requestAnimFrame(loop);
  },

  init: function() {
    this.character.src = 'img/rider_scene1.png';

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.loop();
  }  
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();
walking.init();
