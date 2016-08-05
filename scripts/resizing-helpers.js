// Helpers intendeng for resizing

function setImageSize(){  
  $image = $('.resizable');

  var max_width = $(window).width();
  var max_height = $(window).height();

  var width = $image.width();
  var height = $image.height();

  max_height -= BOTTOM_MENU_HEIGHT;
  if (is_mobile) { max_height -= TOP_MENU_HEIGHT; }

  dimensions = calculateAspectRatioFit(width, height, max_width, max_height);

  $image.css('width', dimensions.width).css('height', dimensions.height);
  if(!is_mobile) { setFooterWidth(dimensions.width); }
}

function calculateAspectRatioFit(src_width, src_height, max_width, max_height) {
  var ratio = (is_mobile) ?  max_width / src_width : Math.min(max_width / src_width, max_height / src_height);
  return { width: src_width * ratio, height: src_height * ratio, ratio: ratio };
}

function setFooterWidth(width) {
  $('.bottom-menu').css('width', width);
}