var exam_room_events = {
  enter_room: show_exam_room,
  countdown: start_counter,
  iphone_questions: {},
  phone_questions: {},
  mouse_questions: {},
  poster1_questions: {},
  total_points: 0,
  finished_scenarios: [],
  the_case_study: ''
};

function show_exam_room(case_study) {
  exam_room_events.the_case_study = case_study;
  set_exam_room_assets(case_study);
  $('.container .exam-room').show();  
  $('map').imageMapResize();
  start_counter();
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

function set_exam_room_assets(case_study) {
  setup_questions(case_study);
  poster_1 = assets_events.exam_room_asset(case_study, 'poster1');
  poster_2 = assets_events.exam_room_asset(case_study, 'poster2');
  tv = assets_events.exam_room_asset(case_study, 'tv');

  $('.exam-room #poster1 img').attr('src', poster_1);
  $('.exam-room #poster2 img').attr('src', poster_2);
}


function setup_questions(case_study) {
  exam_room_events.iphone_questions = IPHONE[LANGUAGE][case_study];
  exam_room_events.phone_questions = PHONE[LANGUAGE][case_study];
  exam_room_events.mouse_questions = MOUSE[LANGUAGE][case_study];
  exam_room_events.poster1_questions = POSTER1[LANGUAGE][case_study];
}

function get_selected_questions(id) {
  questions = [];
  switch (id) {
    case 'iphone':
      questions = exam_room_events.iphone_questions; break;
    case 'phone':
      questions = exam_room_events.phone_questions; break;
    case 'mouse':
      questions = exam_room_events.mouse_questions; break;
    case 'poster1':
      questions = exam_room_events.poster1_questions; break;
  }

  return questions;
}

function array_equal(arr1, arr2) {
  return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
}

$(document).ready(function(){
  $('.exam-room').on('click', ".exam:not(.done)", function(jsEvent){
    start_exam($(jsEvent.target));
  });

  $('.exam-room .exams .next-btn').on('click', function(jsEvent) {
    $target = $(jsEvent.target);    
    reference = get_next_prev_btn_reference($target, 'next').data('next-btn');
    eval(reference);
  });

  $('.exam-room .exams .back-btn').on('click', function(jsEvent) {
    $target = $(jsEvent.target);    
    reference = get_next_prev_btn_reference($target, 'back').data('back-btn');
    eval(reference);
  });
});