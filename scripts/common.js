BOTTOM_MENU_HEIGHT = 0;

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

function setCanvasSize() {
  var maxWidth = window.innerWidth;
  var maxHeight = window.innerHeight - BOTTOM_MENU_HEIGHT;
  var ratio = 0; // Used for aspect ratio

  var width = background_image.naturalWidth; // Current image width
  var height = background_image.naturalHeight  - BOTTOM_MENU_HEIGHT; // Current image height

  if (width > maxWidth){
    ratio = maxHeight / height;
    var newHeight = maxHeight;
    var newWidth = width * ratio;

    if (newWidth > maxWidth) {
      ratio = maxWidth / width;
      newWidth = maxWidth;
      newHeight = height * ratio;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;

    height = height * ratio; // Reset height to match scaled image
    width = width * ratio; // Reset width to match scaled image 
  }

  // Check if current height is larger than max
  if (height > maxHeight) {
    ratio = maxHeight / height; // get ratio for scaling image
    var newHeight = maxHeight;
    var newWidth = width * ratio;
    canvas.width = newWidth;
    canvas.height = newHeight;
    width = width * ratio; // Reset width to match scaled image
  }
  
  var scaleXValue = newWidth / width;
  var scaleYValue = newHeight / height;

  ctx.scale(scaleXValue, scaleYValue); /* This is always new canvas width / old canvas width */

}

function setImageSize(){
  $image = $('#animations');

  var max_width = $(window).width();
  var max_height = $(window).height();  
  if (!is_mobile) { max_height -= BOTTOM_MENU_HEIGHT; }
  var width = $image.width();
  var height = $image.height();
  
  dimensions = calculateAspectRatioFit(width, height, max_width, max_height);
  
  $image.css('width', dimensions.width);
  $image.css('height', dimensions.height);
}

function calculateAspectRatioFit(src_width, src_height, max_width, max_height) {
    var ratio = Math.min(max_width / src_width, max_height / src_height);
    return { width: src_width * ratio, height: src_height * ratio };
 }

$(document).ready(function(){
  canvas.hidden = true;
  $('#animations').attr('src', 'img/driving.gif');
  
  setCanvasSize();
  setImageSize();
  
  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = md.mobile() != null || md.phone() != null;

  if (is_mobile) {
    $('#bottom-menu').hide();
    $('.full-screen-btn').show();
  }
  $(window).bind('orientationchange', function(){ setImageSize(); });
  
});

$('.full-screen-btn').on('click', function(){
  setFullScreen(document.body);
});
function setFullScreen(element) {

  if (element.requestFullscreen) {
  element.requestFullscreen();
} else if (element.webkitRequestFullscreen) {
  element.webkitRequestFullscreen();
} else if (element.mozRequestFullScreen) {
  element.mozRequestFullScreen();
} else if (element.msRequestFullscreen) {
  element.msRequestFullscreen();
}
}
