var exam_room_events = {
  enter_room: show_exam_room,
  countdown: start_counter
};

function show_exam_room() {
  $('.container .exam-room').show();
  setImageSize();
}

function start_counter() {
  var start_time = (new Date()).getTime();
  var seconds_left;
  var timer = window.setInterval(function(){
    var now = (new Date()).getTime();
    seconds_left = 1800 - (now - start_time) / 1000;
    minutes_left = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left - (minutes_left * 60));
    if (seconds - 10 < 0) {
      seconds = '0' + seconds;
    }
    display_time(minutes_left, seconds);
  });
}

function display_time(minutes, seconds) {
  $clock = $('.exam-room .clock .content');
  $clock.find('.minutes').text(minutes);
  $clock.find('.seconds').text(seconds);
}