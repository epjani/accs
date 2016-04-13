// Helpers intendeng for resizing

function setImageSize(){
  if(is_mobile) {
    return;
  }

  $image = $('.resizable');

  var max_width = $(window).width();
  var max_height = $(window).height();
  if (!is_mobile) { max_height -= BOTTOM_MENU_HEIGHT; }
  var width = $image.width();
  var height = $image.height();

  dimensions = calculateAspectRatioFit(width, height, max_width, max_height);
  console.log(dimensions);

  $image.css('width', dimensions.width).css('height', dimensions.height);
  setFooterWidth(dimensions.width);
}

function calculateAspectRatioFit(src_width, src_height, max_width, max_height) {
  var ratio = Math.min(max_width / src_width, max_height / src_height);
  return { width: src_width * ratio, height: src_height * ratio, ratio: ratio };
}

function setFooterWidth(width) {
  $('#bottom-menu').css('width', width);
}