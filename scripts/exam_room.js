var exam_room_events = {
  enter_room: show_exam_room,
  exit_room: hide_exam_room,
  countdown: start_counter,
  iphone_questions: {},
  phone_questions: {},
  mouse_questions: {},
  poster1_questions: {},
  poster2_questions: {},
  tv_questions: {},
  total_points: 0,
  all_scenarios: ['iphone', 'phone', 'mouse', 'poster1', 'poster2'],
  finished_scenarios: [],
  the_case_study: '',
  update_ticker: change_ticker_text,
  ticker_text: default_ticker_text,
};

function change_ticker_text(text) {
  $('.ticker .content').attr('data-marquee', text);
}

function show_exam_room(case_study) {
  exam_room_events.the_case_study = case_study;
  set_exam_room_assets(case_study);
  exam_room_events.update_ticker(exam_room_events.ticker_text());  
  exam_room_events.countdown();  
  $('.container .exam-room').show();  
  setImageSize();
  $('map').imageMapResize();
  adjustClockTickerFontSize();
}

function start_counter() {
  var min_45 = 2700000;
  // var min_45 = 7000;
  if (CountdownTriggered == true) {
    CountDown.Resume(min_45, true);
  } else {
    CountDown.Start(min_45);
  }

}

function display_time(minutes, seconds) {
  $clock = $('.clock .content');
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
  exam_room_events.iphone_questions = IPHONE[main_variables.language][case_study];
  exam_room_events.phone_questions = PHONE[main_variables.language][case_study];
  exam_room_events.mouse_questions = MOUSE[main_variables.language][case_study];
  exam_room_events.poster1_questions = POSTER1[main_variables.language][case_study];
  exam_room_events.poster2_questions = POSTER2[main_variables.language][case_study];
  exam_room_events.tv_questions = TV[main_variables.language][case_study];
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
    case 'tv':
      questions = exam_room_events.tv_questions; break;
  }

  return questions;
}

function array_equal(arr1, arr2) {
  return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
}

function hide_exam_room() {
  $.fancybox.close();
  $('img#exam_room').attr('src', 'img/exam_room_open.jpg');
  play_sound(sounds.door_opening);
  $('[data-praised]').removeAttr('data-praised');
  setTimeout( function() { EndTime = 0
    if (lobby_events.finished_case_studies.length >= 3) {
      prompt_evaluation_screen(exam_room_events.the_case_study);
    }
    clear_exam_room_assets();
    $('.container .exam-room').hide();
    enter_lobby();
    $('img#exam_room').attr('src', 'img/exam_room.jpg');
  }, 1500);
  
}

function clear_exam_room_assets() {
  CountDown.Pause();
  display_time('', '');
  exam_room_events.iphone_questions = {};
  exam_room_events.phone_questions = {};
  exam_room_events.mouse_questions = {};
  exam_room_events.poster1_questions = {};
  exam_room_events.poster2_questions = {};
  exam_room_events.tv_questions = {};
  exam_room_events.total_points = 0;
  exam_room_events.finished_scenarios = [];
  exam_room_events.the_case_study = '';
  $('a.start').removeClass('done');
  $('.scenario-text').text('');
  $('.questions .question .text, .questions .question .answers').text('');
}

function default_ticker_text() {
  var case_study_text = lobby_events.case_study_texts[main_variables.language][exam_room_events.the_case_study];
  var default_texts = {
    en: "Welcome " + main_variables.employee_name + " to " + case_study_text,
    fr: "Welcome " + main_variables.employee_name + " to " + case_study_text
  }
  return default_texts[main_variables.language];
}

function pause_exam() {
  CountDown.Pause();
  $.fancybox({
    href: '#fb-break',
    closeBtn: false,
    width: '300px',
    height: 'auto',
    autoSize: false,
    helpers     : {
      overlay : {
        css      : {
            cursor : 'default'
        },
        closeClick: false
      }
    }
  });
}

function continue_exam() {
  CountDown.Resume();
  $.fancybox.close();
}

function prompt_evaluation_screen(case_study) {
  $('.evaluation-container').removeClass('hide');
  $('.bg-overlay').removeClass('hide').addClass('grey');
  $('.evaluation-container .evaluation-case-study').val(case_study);
}

function clear_evaluation() {
  $('.evaluation-container input[type="radio"]').prop('checked', false);
  $('.evaluation-container textarea').val('');
  $('.evaluation-container').addClass('hide');
  $('.bg-overlay').addClass('hide').removeClass('grey');
  $('.evaluation-container .first-slide').removeClass('hide');
  $('.evaluation-container .second-slide').addClass('hide');
  $('.evaluation-container .previous').addClass('hide');
  $('.evaluation-container .next').text("NEXT");
}


$(document).ready(function(){

  $('.evaluation-container').on('click', '.next', function(jsEvent) {
    jsEvent.stopPropagation();
    jsEvent.preventDefault();
    if ($(jsEvent.target).text() == "SUBMIT") {
      submit_evaluation();
      clear_evaluation();
    } else {
      $('.evaluation-container .first-slide').addClass('hide');
      $('.evaluation-container .second-slide').removeClass('hide');
      $('.evaluation-container .previous').removeClass('hide');
      $('.evaluation-container .next').text("SUBMIT");
    }
  });

  $('.evaluation-container').on('click', '.previous', function(jsEvent) {
    jsEvent.stopPropagation();
    jsEvent.preventDefault();
    $('.evaluation-container .first-slide').removeClass('hide');
    $('.evaluation-container .second-slide').addClass('hide');
    $('.evaluation-container .previous').addClass('hide');
    $('.evaluation-container .next').text("NEXT");
  });

  $('.exam-room').on('click', ".exam:not(.done)", function(jsEvent){
    start_exam($(jsEvent.target));
  });

  $('.exam-room .exams .next-btn').on('click', function(jsEvent) {
    createjs.Sound.stop();
    $target = $(jsEvent.target);
    reference = get_next_prev_btn_reference($target, 'next').data('next-btn');
    eval(reference);
  });

  $('.exam-room .exams .back-btn').on('click', function(jsEvent) {
    $target = $(jsEvent.target);
    reference = get_next_prev_btn_reference($target, 'back').data('back-btn');
    if (reference == undefined || reference == null || reference == []) {
      reference = 'next_question(null, true);';
    }
    eval(reference);
  });

  $('.exam-room .exit-trigger').on('click', function(jsEvent) {
    $target = $(jsEvent.target).parents('.exit-trigger').first();
    if ($target.hasClass('done')) {
      exam_room_events.exit_room();
    } else {
      $('#fb-warning .content').html('<div class="text">Are you sure you want to exit?<br />If you choose to exit now, your progress will not be saved.</div><div class="btn-container"><button class="red-btn" onclick="exam_room_events.exit_room();">Yes</button><button style="margin-left:10px;" class="blue-btn" onclick="$.fancybox.close();">Cancel</button></div>');
      $.fancybox({
        href: '#fb-warning',
        width: '400px'
      });
    }
  });

  $('.exam-room').on('click', '#break', function(jsEvent) {
    pause_exam();
  });

  $('#iphone.exam').on('mouseover', function(jsEvent) {
    var $target = get_exam_target(jsEvent);

    if (!$target.hasClass('done')) {
      ringing_iphone_image_interval = setInterval(function(){ set_ringing_image('iphone'); }, 320);
      play_sound('phone');
      ringing_iphone_interval = setInterval(function() { play_sound('phone'); }, 1200);
    }
  }).on('mouseout', function(jsEvent) {
    var $target = get_exam_target(jsEvent);

    if (!$target.hasClass('done')) {
      $('#iphone.exam img').attr('src', 'img/exam_room/iphone.png');
      clearInterval(ringing_iphone_image_interval);
      clearInterval(ringing_iphone_interval);
      createjs.Sound.stop();
    }
  });

  $('#phone.exam').on('mouseover', function(jsEvent) {
    var $target = get_exam_target(jsEvent);
    
    if (!$target.hasClass('done')) {
      ringing_phone_image_interval = setInterval(function(){ set_ringing_image('phone'); }, 320);
      play_sound('phone');
      ringing_phone_interval = setInterval(function(){ play_sound('phone'); }, 1200);
    }
  }).on('mouseout', function(jsEvent) {
    $('#phone.exam img').attr('src', 'img/exam_room/phone.png');
    clearInterval(ringing_phone_image_interval);
    clearInterval(ringing_phone_interval);
    createjs.Sound.stop();
  });

});

function get_exam_target(jsEvent) {
  $target = $(jsEvent.target);
  if (!$target.hasClass('exam')) {
    $target = $target.parents('.exam'); 
  }

  return $target;
}

function set_ringing_image(id) {
  var $img = $('#' + id + '.exam img');
  var phone = '';

  if ($img.data('ringing') != '') {
    phone = id + '.png';
    $img.data('ringing', '');
  } else {
    phone = id + '_ringing.png';
    $img.data('ringing', 'ringing');
  }

  $img.attr('src', 'img/exam_room/' + phone);
}
