BOTTOM_MENU_HEIGHT = 90;

var is_mobile = false;

$(document).ready(function(){
  $('#animations').attr('src', 'img/driving.gif');

  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = (md.mobile() != null || md.phone() != null);

  configure_for_devices();  

  $('#map_lobby area').click(function(jsEvent){
    alert('TODO');
  });

  $('#bottom-menu .menu a.menu-item').on('click', function(jsEvent){
    open_fancybox($(jsEvent.target));
  });
  set_tooltip_styles();
  setImageSize();
});

window.onload = function(e){
  setImageSize();
  setTimeout(go_for_a_walk, 2700);
}

function go_for_a_walk() {
  $('#animations').attr('src', 'img/walking.gif');
  setTimeout(enter_lobby, 3000);
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