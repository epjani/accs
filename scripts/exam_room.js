var exam_room_events = {
  enter_room: show_exam_room,
  exit_room: hide_exam_room,
  countdown: start_counter,
  iphone_questions: {},
  phone_questions: {},
  mouse_questions: {},
  poster1_questions: {},
  poster2_questions: {},
  total_points: 0,
  all_scenarios: ['iphone', 'phone', 'mouse', 'poster1', 'poster2'],
  finished_scenarios: [],
  the_case_study: '',
  timer: null
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
  exam_room_events.timer = window.setInterval(function(){
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
  set_score();
  update_exam_room_assets();
}


function setup_questions(case_study) {
  exam_room_events.iphone_questions = IPHONE[LANGUAGE][case_study];
  exam_room_events.phone_questions = PHONE[LANGUAGE][case_study];
  exam_room_events.mouse_questions = MOUSE[LANGUAGE][case_study];
  exam_room_events.poster1_questions = POSTER1[LANGUAGE][case_study];
  exam_room_events.poster2_questions = POSTER2[LANGUAGE][case_study];
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
    case 'poster2':
      questions = exam_room_events.poster2_questions; break;
  }

  return questions;
}

function array_equal(arr1, arr2) {
  return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
}

function hide_exam_room() {
  clear_exam_room_assets();
  $('.container .exam-room').hide();
  enter_lobby();
  $.fancybox.close();
}

function clear_exam_room_assets() {
  clearInterval(exam_room_events.timer);
  exam_room_events.iphone_questions = {};
  exam_room_events.phone_questions = {};
  exam_room_events.mouse_questions = {};
  exam_room_events.poster1_questions = {};
  exam_room_events.poster2_questions = {};
  exam_room_events.total_points = 0;
  exam_room_events.finished_scenarios = [];
  exam_room_events.the_case_study = '';
  exam_room_events.timer = null;
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

  $('.exam-room .exit-trigger').on('click', function(jsEvent) {
    $('#fb-warning .content').html('Are you sure you want to exit case study?<br /><button onclick="exam_room_events.exit_room();">Yes</button><button onclick="$.fancybox.close();">Cancel</button>');
    $.fancybox({
      href: '#fb-warning'
    });
  });
});