// Triggers and events shared accross the app

BOTTOM_MENU_HEIGHT = 90;

var is_mobile = false;

$(document).ready(function(){

  var md = new MobileDetect(window.navigator.userAgent);
  is_mobile = md.mobile() != null || md.phone() != null;

  configure_for_devices();

  $('#bottom-menu .menu a.menu-item').on('click', function(jsEvent){
    open_fancybox($(jsEvent.target));
  });
  set_tooltip_styles();

  $('area').click(function(jsEvent){
    href = $(jsEvent.target).attr('href');
    if (href == '#' || href == '')
      return false;
  });
});

window.onload = function(e){
  $('body').removeClass('hide');
  setImageSize();
  setTimeout(go_for_a_walk, 2600);
}

function go_for_a_walk() {
  $('#animations').attr('src', 'img/walking.gif');
  setTimeout(enter_lobby, 3100);
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

function set_tooltip_styles() {
  $('area:not(.skip-tooltip)').tooltip({
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