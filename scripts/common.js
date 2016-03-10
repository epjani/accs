BOTTOM_MENU_HEIGHT = 152;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setCanvasSize() {	
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - BOTTOM_MENU_HEIGHT;
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
setCanvasSize();