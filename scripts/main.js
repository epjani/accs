// Triggers and events shared accross the app

BOTTOM_MENU_HEIGHT = 90;
LANGUAGE = 'en';

var is_mobile = false;

$(document).ready(function(){

  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = md.mobile() != null || md.phone() != null;

  configure_for_devices();

  $('#bottom-menu .menu a.menu-item').on('click', function(jsEvent){
    open_fancybox($(jsEvent.target));
  });

  init_bubble_tooltips('.tt-bubble', 'small');
  init_area_bubble_tooltips('.area-tt-bubble', 'small');

  $('area').click(function(jsEvent){
    href = $(jsEvent.target).attr('href');
    if (href == '#' || href == '')
      return false;
  });
});

window.onload = function(e){
  $('body').removeClass('hide');
  setImageSize();
  // setTimeout(enter_lobby, 6600);
  enter_lobby();
}

function enter_lobby() {
  $('#animations').hide();
  $('.lobby').show();
  setImageSize();
  $('map').imageMapResize();
}

function open_fancybox($el) {
  $el = $el.closest('.fb-trigger');

  $.fancybox({
    href: '#fb-' + $el.attr('id'),
    width: 600,
    autoSize: false
  });
}

function configure_for_devices() {
  if (is_mobile) {
    $('body').addClass('mobile-view');
    $('.hide-on-mobile').hide();
    $('.show-on-mobile').show();
  } else {
    $('.hide-on-mobile').show();
    $('.show-on-mobile').hide();
  }
}

function toggle_menu() {
  $("#top-menu .links").toggle();
}

function init_bubble_tooltips(selector, tt_class) {
  $(selector).tooltip({ 
    position: {
      my: "left bottom",
      at: "center center",
      collision: "fit"
    },
    show: { delay: 300 },
    track: true,
    tooltipClass: "tooltip-bubble " + tt_class,
    content: function() {
      return getBubbleContent.call(this, tt_class);
    }
  });
}

function init_area_bubble_tooltips(selector, tt_class) {
  $(selector).tooltip({ 
    track: true,
    position: {
      using: function(_, feedback) {
        var center = getAreaCenter(feedback.target.element[0].toElement);
        $(this).css({top: center.y - 110, left: center.x + 170})
      }
    },
    tooltipClass: "tooltip-bubble " + tt_class,
    content: function() {
      return getBubbleContent.call(this, tt_class);
    }
  });
}

function getBubbleContent(tt_class) {
  var content = $("<div class='content'>");
  var img_url = tt_class == 'small' ? 'img/tt-bubble-small.png' : 'img/tt-bubble.png';
  var imgEl = $("<img alt='' src='" + img_url + "' />");
  var textEl = $("<div class='text'>");
  textEl.text($(this).data("tt-text"));
  content.append(imgEl);
  content.append(textEl);
  
  return content;
}

function getAreaCenter(area) {
  var maxX = 0, minX = Infinity, maxY = 0, minY = Infinity;
  var i = 0, coords = area.getAttribute('coords').split(',');

  while (i < coords.length) {
      var x = parseInt(coords[i++],10),
          y = parseInt(coords[i++],10);

      if (x < minX) minX = x;
      else if (x > maxX) maxX = x;

      if (y < minY) minY = y;
      else if (y > maxY) maxY = y;
  }

  return {
      x: minX + (maxX - minX) / 2,
      y: minY + (maxY - minY) / 2
  };
}

if (typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}