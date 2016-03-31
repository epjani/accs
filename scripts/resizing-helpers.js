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
  if (is_mobile)
    return false;

  $image = $('.resizable');

  var max_width = $(window).width();
  var max_height = $(window).height();
  if (!is_mobile) { max_height -= BOTTOM_MENU_HEIGHT; }
  var width = $image.width();
  var height = $image.height();

  dimensions = calculateAspectRatioFit(width, height, max_width, max_height);

  $image.css('width', dimensions.width).css('height', dimensions.height);
  setFooterWidth(dimensions.width);
}

function calculateAspectRatioFit(src_width, src_height, max_width, max_height) {
  var ratio = Math.min(max_width / src_width, max_height / src_height);
  return { width: src_width * ratio, height: src_height * ratio };
}

function setFooterWidth(width) {
  $('#bottom-menu').css('width', width);
}