// Triggers and events shared accross the app
var main_variables = {
  language: 'en',
  employee_name: 'Test name'
};
TOP_MENU_HEIGHT = 30;
BOTTOM_MENU_HEIGHT = 90;
EVALUATION_PROMPTED = false;

var is_mobile = false;
var isPortrait;

var initial_sounds_loaded = false;

$(document).ready(function() {

  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = md.mobile() != null || md.phone() != null;

  $(document).on('click', '.bottom-menu .menu a.menu-item', function() {
    showOverlay($(this), false);
  });

  $('#lobby-menu a').click(function() {
    showOverlay($("#" + $(this).data('trigger-for')), false);
  });

  $('#top-menu a').click(function() {
    var triggerFor = $(this).data('trigger-for');
    var fancyId = 'fb-' + $(this).data('trigger-for');

    var content = $('#' + triggerFor + '-overlay').find('.content').html();
    // set overlay content
    $('#' + fancyId).find('.content .text').html(content);

    $.fancybox({
      href: '#' + fancyId,
      width: '80%'
    });
  });

  $("#top-menu .toggle-menu").click(function(e) {
    e.stopPropagation();

    toggleTopMenu();
  })

  if(!is_mobile) {
    init_bubble_tooltips('.tt-bubble', 'small');
  }

  $('area').click(function(jsEvent){
    href = $(jsEvent.target).attr('href');
    if (href == '#' || href == '')
      return false;
  });

  $(".globe-fb-trigger").click(function(){
    open_globe_content();
  });

  init_sounds();

  configure_for_devices();
  if(is_mobile) {
    handleMobileOrientation();

    window.onorientationchange = handleMobileOrientation;
  }
});

function toggleTopMenu() {
    $("#top-menu .links").toggle();

    if($("#top-menu .links").is(":visible")) {
      $(document).bind("click", topMenuClickHandler);
    }
    else {
      $(document).unbind("click", topMenuClickHandler);
    }
}

function topMenuClickHandler() {
  toggleTopMenu();
}

function init_sounds() {
  createjs.Sound.addEventListener("fileload", handleLoad);
}

function handleLoad(event) {
  if (!initial_sounds_loaded) {
    setTimeout(createjs.Sound.play, 400, "moped_driving");
    setTimeout(createjs.Sound.play, 2600, "steps");
    setTimeout(createjs.Sound.play, 5200, "door_opening");
    initial_sounds_loaded = true;
  }
}
window.onload = function(e){
  load_sounds();
  if (navigator.userAgent.match(/firefox/i)) {
    $('.animations').attr('src', 'img/animations/intro.gif?rnd=' + Math.random()).removeClass('vis-hidden')
  }
  $('body').removeClass('hide');
  setImageSize();
  setTimeout(lobby_events.goto_lobby, 6600);
  // lobby_events.goto_lobby();
}

function showOverlay($el, autoHide) {
  var triggerElOffset = $el.offset();
  var element_id = $el.attr('id');
  var $overlay = $("#" + element_id + "-overlay");

  $overlay.css({
    top: triggerElOffset.top - $overlay.height() - 18,
    left: (triggerElOffset.left + $el.width() / 2) - $overlay.width() / 2
  });

  $(document).bind('keyup', overlayKeyupHandler);
  if (!lobby_events.documents_read()) {
    read_lobby_document(element_id);
  }
  showOverlayBackground($el, autoHide);
  $overlay.show();
}

function showOverlayBackground($initiator, autoHide) {
  var $overlayBackground = $('.overlay-background');

  if(autoHide) {
    var initiatorBoundary = {
      x1: $initiator.offset().left,
      x2: $initiator.offset().left + $initiator.outerWidth(),
      y1: $initiator.offset().top,
      y2: $initiator.offset().top + $initiator.outerHeight()
    };
    $overlayBackground.mousemove(function(event) {
      if (event.pageX < initiatorBoundary.x1 || event.pageX > initiatorBoundary.x2 || event.pageY < initiatorBoundary.y1 || event.pageY > initiatorBoundary.y2) {
        $(this).off('mousemove');
        hideOverlay();
      }
    });
  }

  $overlayBackground.show();
}

function hideOverlay() {
  $(document).unbind('keyup', overlayKeyupHandler);
  $('.overlay-background').hide();
  $('.overlay').hide();
}

function overlayKeyupHandler(e) {
  if (e.keyCode == 27 /* ESCAPE */) {
    hideOverlay();
  }
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

function handleMobileOrientation() {
  if(window.orientation == 0) {
    // portrait
    isPortrait = true;
    $("body").removeClass('landscape').addClass('portrait');
    $('.lobby-img.show-on-mobile').attr('src', 'img/lobby-mobile.jpg');
    $('.exam-room-img.show-on-mobile').attr('src', 'img/exam_room-mobile.png');
  }
  else {
    // landscape

    isPortrait = false;
    $("body").removeClass('portrait').addClass('landscape');
    $('.lobby-img.show-on-mobile').attr('src', 'img/lobby.jpg');
    $('.exam-room-img.show-on-mobile').attr('src', 'img/exam_room.jpg');
  }

  resizeHandler();
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

function resizeHandler() {
  setImageSize();
  adjustClockTickerFontSize();
}

function adjustClockTickerFontSize() {
  var $elements = $('.common-elements:visible, .clock-ticker:visible');
  $elements.each(function(_, obj) {
    var $el = $(obj);
    var height = parseInt($el.height());
    var fontSize = parseInt(height * 0.65); // 65% of container height
    var fontSizeSmaller = parseInt(height * 0.45); // 45% of container height

    // container element
    $el.css({'font-size': fontSize + 'px', 'line-height': height + 'px'});

    // total points element
    var $totalPoints = $el.siblings('.total-points');
    if($totalPoints.length === 0) {
      $totalPoints = $el.find('.total-points');
    }
    var totalPointsHeight = parseInt($totalPoints.height());
    $totalPoints.css({'font-size': fontSizeSmaller-5 + 'px', 'line-height': totalPointsHeight + 'px'});


    // attempts
    var $attempts = $el.siblings('.attempts');
    if($attempts.length === 0) {
      $attempts = $el.find('.attempts');
    }

    var attemptsHeight = parseInt($attempts.height());
    $attempts.css({'font-size': fontSizeSmaller-5 + 'px', 'line-height': attemptsHeight + 'px' });

    // ticker element
    var $tickerContent = $el.find('.ticker .content');
    if($tickerContent.length > 0) {
      var tickerHeight = parseInt($tickerContent.height());
      $tickerContent.css({'font-size': fontSizeSmaller + 'px', 'line-height': tickerHeight + 'px'});
    }
  });
}

if (typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}