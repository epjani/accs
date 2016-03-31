BOTTOM_MENU_HEIGHT = 90;

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

  // $(window).bind('orientationchange', function(){ setImageSize(); });

  setCanvasSize();
  setImageSize();

  setTimeout(go_for_a_walk, 2850);

  $('#map_lobby area').click(function(jsEvent){
    alert('TODO');
  });

  $('#bottom-menu .menu a.menu-item').on('click', function(jsEvent){
    open_fancybox($(jsEvent.target));
  });
  set_tooltip_styles();
});

window.onload = function(e){
  setCanvasSize();
  setImageSize();
}

function go_for_a_walk() {
  $('#animations').attr('src', 'img/walking.gif');
  setTimeout(enter_lobby, 3200);
}

function enter_lobby() {
  $('#animations').hide();
  $('#map_lobby, #lobby').show();
  setImageSize();
  $('map').imageMapResize();
}

function open_fancybox($el) {
  $el = $el.closest('.fb-trigger');

  $.fancybox({
    href: '#fb-' + $el.attr('id')
  });
}

function set_tooltip_styles() {
  $('area').tooltip({
    track: true,
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    }
  });
}