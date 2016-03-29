BOTTOM_MENU_HEIGHT = 100;

var canvas = document.getElementById('canvas'); // get our canvas tag in the DOM
var ctx = canvas.getContext('2d'); // set the context of the canvas
var background_image = new Image();
var is_mobile = false;

function drawBG(timeout){
  ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


$(document).ready(function(){
  canvas.hidden = true;
  $('#animations').attr('src', 'img/driving.gif');    
  
  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = md.mobile() != null || md.phone() != null;

  if (is_mobile) {
    $('#bottom-menu').hide();
    $('.full-screen-btn').show();
  }

  $(window).bind('orientationchange', function(){ setImageSize(); });
  setCanvasSize();
  setImageSize();
});

window.onload = function(e){ 
  setCanvasSize();
  setImageSize(); 
}
