var exam_room_events = {
  enter_room: show_exam_room,
  countdown: start_counter,
  iphone_questions: {}
};

function show_exam_room(case_study) {
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
  poster_1 = assets_events.exam_room_asset(case_study, 'poster_1');
  poster_2 = assets_events.exam_room_asset(case_study, 'poster_2');
  tv = assets_events.exam_room_asset(case_study, 'tv');

  $('.exam-room #poster_1 img').attr('src', poster_1);
  $('.exam-room #poster_2 img').attr('src', poster_2);
}


function setup_questions(case_study) {
  exam_room_events.iphone_questions = IPHONE[LANGUAGE][case_study];
}

function get_selected_questions(id) {
  questions = [];
  switch (id) {
    case 'iphone':
      questions = exam_room_events.iphone_questions; break; 
  }

  return questions;
}

function attach_questions(id) {
  questions = get_selected_questions(id);
  $container = $('.fb-exam#' + id + '-exam');
  set_scenario_text($container, questions);
  set_questions($container, questions);
}

function set_scenario_text($container, questions) {
  $container.find('.scenario-text').text(questions['scenarios'][0]['text']);
}

function set_questions($container, questions) {
  $.each(questions['scenarios'][0]['questions'], function(index, val) {
    $question = $container.find('.question_' + index);
    $question.find('.text').text(val['question']);

    $.each(val['answers'], function(i, answer) {
      html = '<input type="checkbox" value="' + i + '" />' + answer['text'] + '<br />';
      $question.find('.answers').append(html);
    });
  });
}

function start_exam($el) {
  $el = $el.closest('.exam');
  id = $el.attr('id');
  attach_questions(id);

  $.fancybox({
    href: '#' + id + '-exam',
    width: '100%',
    height: '100%',
    autoSize: false,
    margin: 0,
    closeBtn: false
  });
}

function get_next_prev_btn_reference($target, type) {
  $container = $target.parents('.fb-exam').first().find('.questions');
  return $container.children("[data-" + type + "-btn]:visible").first();
}

function next_question(id) {
  if (id === null) {
    $.fancybox.close();
    return;
  }  

  $scope = $('.fb-exam:visible');
  change_next_btn_label($scope, id)
  $scope.find('.question').addClass('hide');
  $scope.find('.question.question_' + id).removeClass('hide');
}

function change_next_btn_label($container, id) {
  label = id == '2' || id == 2 ? 'Submit' : 'Next';
  $container.find('.next-btn').text(label);
}

function submit_exam() {
  // TODO
}

$(document).ready(function(){
  $('.exam-room .exam').on('click', function(jsEvent){
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