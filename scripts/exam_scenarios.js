var player;

function attach_questions(id) {
  var questions = get_selected_questions(id);
  var $container = $('.fb-exam#' + id + '-exam');

  if (questions['scenarios'].length == 1) {
    var $infoHeader = $container.find('.info-header-container .info-header').first();
    set_question_main_text($container, questions['scenarios'][0], $infoHeader);
    set_questions($container, questions['scenarios'][0], $infoHeader, 0);
    change_next_btn_label($container, id);
    $container.find('.questions').addClass('active');
    $container.find('.scenarios .select-scenario-0 .start').click();
    $('.scenario-select-container').hide();
    $('.scenario-select-container').parents('.footer').css('display', 'block');
  } else {
    $('.scenario-select-container').show();
    $('.scenario-select-container').parents('.footer').css('display', 'flex');
    $container.find('.questions').addClass('hide');
    setup_scenarios($container, questions);
    show_scenarios($container);
    if ($container.find('.scenarios a.start.done').length == 0) {
      $('.inside-fb-select-scenario').show();
      $('.inside-fb-select-scenario').find('.fancybox').show();
    }
  }

   style_checkboxes($container);
}

function style_checkboxes($container) {
  $container.find('.answers input[type="checkbox"]').iCheck({
    checkboxClass: 'icheckbox_minimal-orange',
  });
}

function attach_common_elements(id) {
  var $container = $('.fb-exam#' + id + '-exam');
  var $common_elements = $container.find('.common-elements');

  var $clock = $('.exam-room .clock').first().clone();
  var $score = $('.exam-room .total-points').first().clone();
  var $attemts = $('.exam-room .attempts').first().clone();
  var $footer = $('.bottom-menu').first().clone();

  var collection = $().add($clock).add($score).add($attemts);
  collection.css({'font-size': '', 'line-height': ''});

  $common_elements.html('');
  $common_elements.append($clock).append($score).append($attemts);

  if($container.find('.bottom-menu').length == 0) {
    $container.append($footer);
  }
}

function show_scenarios($container) {
  $container.find('.scenarios').removeClass('hide');
  $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
}

function setup_scenarios($container, questions) {
  var $scenario_container = $container.find('.scenarios-content');
  $container.find('.next-btn').addClass('hide');
  set_scenarios_text(questions, $scenario_container);
  set_scenarios_questions($container, questions);
  $scenario_container.find('.scenario-template').remove();
}

function set_scenarios_questions($container, questions) {
  $.each(questions['scenarios'], function(i, scen) {
    var $q_template = $container.find('.q-template')
    if ($q_template.length > 0) {
      var $template = $q_template.clone().addClass('scenario-' + i).removeClass('q-template');
    }
    else {
      var $template = $container.find('.questions.scenario-' + i)
    }

    $template.attr('data-scenario', i);

    var $infoHeader = $container.find('.info-header-container .info-header').first();
    set_question_main_text($template, scen, $infoHeader);
    set_questions($template, scen, $infoHeader, i);
    $container.find('.content:not(".warning")').append($template);
  });
  $container.find('.q-template').remove();
}

function set_scenarios_text(questions, $scenario_container) {
  $.each(questions['scenarios'], function(i, scen) {
    var $template = $scenario_container.find('.scenario-template').clone().removeClass('scenario-template').addClass('select-scenario select-scenario-' + i);

    if ($template.length == 0) {
      var $template = $scenario_container.find('.select-scenario.select-scenario-' + i);
      if ($template.length == 0) {
        var $template = $scenario_container.find('.select-scenario').clone().attr('class', '').addClass('select-scenario select-scenario-' + i);
      }
    }
    $template.attr('data-index', i);
    $template.find('.view-from').text(scen['from']);
    $template.find('.view-topic').text(scen['topic']);
    $scenario_container.append($template);
  });
}

function set_question_main_text($container, questions, $infoHeader) {
  var $scenario_text = $container.find('.scenario-text');

  if ($scenario_text.text().trim() == "") {
    if(questions['img']) {
      var $img = $("<img>");
      $img.attr("src", questions['img']);
      if(!is_mobile) {
        $img.attr("align", "left");
        $img.attr("width", questions['width'])
      }
      else {
        $img.attr("width", '80%').css('margin', '15px 10%');

      }

      $container.find('.icon img').attr('src', questions['icon']);
      $scenario_text.append($img);
    }



    if(questions['videoId']) {
      var $videoContainer = $("<div>");
      $videoContainer.attr("id", "video-player");
      if(is_mobile) {
        $videoContainer.attr("align", "middle");
      }
      else {
        $videoContainer.attr("align", "left");
      }
      $scenario_text.append($videoContainer);

      player = initVideoPlayer(questions['videoId']);
    }

    $scenario_text.append(questions['text']);

    if($infoHeader.length > 0) {
      set_question_info_header($scenario_text, $infoHeader.clone(), {to: 'You', from: questions['from'], topic: questions['topic']});
    }
  }
}

function set_questions($container, questions, $infoHeader, scenario_index) {
  $.each(questions['questions'], function(index, val) {
    var $question = $container.find('.question_' + index);
    if ($question.find('.text').text().trim() == "") {
      $question.find('.text').text(val['question']);

      $.each(val['answers'], function(i, answer) {
        var chk_id = "chk_" + scenario_index + "_" + index + "_" + i;
        html = '<div class="answer_row">';
        html += '<input type="checkbox" id="' + chk_id + '" name="question_' + index + '" value="' + i + '" />';
        html += '<label for="' + chk_id + '">' + answer['text'] + '</label>';
        html += '</div>';
        $question.find('.answers').append(html);
        $question.find('.answers').attr('data-correct-number', val['valid'].length);
      });

      if($infoHeader.length > 0) {
        set_question_info_header($question, $infoHeader.clone(), {to: 'You', from: questions['from'], topic: questions['topic']});
      }
    }
  });

  html = '<div class="alternate-questions">';
  $.each(questions['alternate_questions'], function(index, val) {
    next_btn = $container.find('.questions .question_' + index).data('next-btn');
    back_btn = $container.find('.questions .question_' + index).data('back-btn');
    if (next_btn != undefined && back_btn != undefined) {
      next_btn = next_btn.replace(')', ', true)');
      back_btn = back_btn.replace(')', ', true)')
    } else {
      next_btn = $container.find('.question_' + index).data('next-btn').replace(')', ', true)');
      back_btn = $container.find('.question_' + index).data('back-btn').replace(')', ', true)');
    }

    html += '<div class="question hide a-question_' + index + '" data-next-btn="' + next_btn + '" data-back-btn="' + back_btn + '"><p class="text">' + val['question'] + '</p><div class="answers" data-correct-number="' + val['valid'].length + '">';
    $.each(val['answers'], function(i, answer) {
      var chk_id = 'chk_a_' + scenario_index + '_' + index + '_' + i;
      html += '<div class="answer_row"><input type="checkbox" id="' + chk_id + '" name="question_' + index + '" value="' + i + '" />';
      html += '<label for="' + chk_id + '">' + answer['text'] + '</label></div>';
    });
    html += '</div></div>';
  });
  html += '</div>';

  $attach_alternate_to = $container.find('.content');
  if ($attach_alternate_to.length == 0) {
    $attach_alternate_to = $container;
  } else {
    $attach_alternate_to = $container.find('.questions');
  }
  $attach_alternate_to.append(html);
}

function set_question_info_header($question, $infoHeader, values) {
  $infoHeader.find('.to').text(values['to']);
  $infoHeader.find('.from').text(values['from']);
  $infoHeader.find('.topic').text(values['topic']);

  // remove current question info header, if any
  $question.find('.info-header').remove();

  $question.prepend($infoHeader);
}

function start_exam($el) {
  $el = $el.closest('.exam');
  id = $el.attr('id');

  switch (id) {
    case 'iphone':
    case 'mouse':
    case 'phone': {
      play_sound(id);
      break;
    }
    case 'poster1':
    case 'poster2': {
      play_sound('swish');
      break;
    }
  }
  attach_questions(id);
  attach_common_elements(id);

  $.fancybox({
    href: '#' + id + '-exam',
    width: '100%',
    height: '100%',
    autoSize: false,
    margin: 0,
    closeBtn: false,
    keys : {
      close  : null
    },
    afterShow: function() {
      adjustClockTickerFontSize();
    }
  });

  play_current_text_sound(id);
}

function play_current_text_sound(id) {
  createjs.Sound.stop();
  var sound_name = exam_room_events.the_case_study + '_' + id;
  setTimeout(play_sound, 800, sound_name);
}

function get_next_prev_btn_reference($target, type) {
  $container = $target.parents('.fb-exam').first().find('.questions.active, .questions.active .alternate-questions');
  return $container.children("[data-" + type + "-btn]:visible").first();
}

function next_question(id, skip_warning, alternative=false) {
  stopVideo();
  createjs.Sound.stop();

  if (id === null) {
    $.fancybox.close();
    return;
  }


  if (alternative) {
    $scope = $('.fb-exam:visible .alternate-questions');
  } else {
    $scope = $('.fb-exam:visible .questions.active');
  }
  $current = $scope.find('.question:not(".hide")');

  if (!$current.hasClass('scenario-text')) {
    if (one_question_answered($current) || skip_warning) {
      if (!skip_warning) {
        $current.find('input').prop('disabled', 'disabled');
      }
      go_to_next_question_set($scope, id, alternative)
    } else {
      $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
      $scoped_warning_box.show();
      $scoped_warning_box.find('.fancybox').show();
    }
  } else {
    go_to_next_question_set($scope, id, alternative)
  }

}

function quit_submit_warning() {
  $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning, .fb-exam:visible .inside-fb-select-scenario');
  $scoped_warning_box.hide();
  $scoped_warning_box.find('.fancybox').hide();
}

function go_to_next_question_set($scope, index, alternative=false) {
  if (alternative) {
    $selector = $scope.parents('.content').find('.questions.active .question.a-question_' + (index-1) + ':not(".hide")');
  } else {
    $selector = $scope.parents('.content').find('.questions.active .question.question_' + (index-1) + ':not(".hide")');     
  }
  
  $scope.find('.question').addClass('hide');

  change_next_btn_label($scope, index);

  if (index == "text") {
    var scenario_index = $scope.data('scenario');
    var scenario_name = get_scenario_sound_name($scope.parents('.fb-exam'), scenario_index);
    play_sound(scenario_name);
  }

  if (index == 'scenarios') {
    $container = $scope.parents('.fb-exam').first();
    if ($container.length > 0) {
      if ($container.find('.scenarios .select-scenario').length > 0 ) {
        $container.find('.scenarios').removeClass('hide');
        $container.find('.back-btn').removeClass('hide');
      } else {
        $container.find('.questions.active .scenario-text').removeClass('hide');
        next_question(null, true);
      }
    }
  } else {    

    var passed = true;

    try {
      if (!$selector.data('praised') && index != 'text') {
        $selector.attr('data-praised', 'true');
        passed = handle_points(index-1, true, alternative);
      }
    } catch(e) {}

    if (passed || alternative || index - 1 == -1) {
      $scope.parents('.content').find('.active .question.question_' + index).removeClass('hide');
    } else {
      show_alternate($scope.parents('.content').first(), index-1);
    }
  }
}

function show_alternate($scope, index) {
  $container = $scope.find('.active .alternate-questions');
  $container.find('.a-question_' + index).removeClass('hide');
}

function handle_points(index, show_feedback, alternative=false) {
  if (alternative) {
    $container = $target.parents('.fb-exam').first().find('.questions.active .alternate-questions');
  } else {
    $container = $target.parents('.fb-exam').first().find('.questions.active');
  }
  var id = $container.parents('.fb-exam').attr('id').replace('-exam', '');
  passed = calculate_points($container, id, index, show_feedback, alternative);
  set_score();

  return passed;
}

function one_question_answered($question_set) {
  return $question_set.find('input:checked').length > 0
}

function change_next_btn_label($container, id) {
  var $rootElement;
  if($container.hasClass('fb-exam')) {
    $rootElement = $container;
  }
  else {
    $rootElement = $container.parents('.fb-exam').first();
  }

  if (parseInt(id) >= 0 ) {
    var label = 'Submit';
  } else {
    var label =  'Next';
  }

  var $btn = $rootElement.find('.next-btn');
  $btn.text(label);

  $btn.removeClass('submit');
  if(label == 'Submit')
    $btn.addClass('submit');
}

function last_feedback(id, alternative=false) {
  if (alternative) {
    var $container = $('.fb-exam#' + id + '-exam .alternate-questions');
  } else {
    var $container = $('.fb-exam#' + id + '-exam .questions.active');
  }
  var question_points = get_question_points($container, 2, id);

  if (question_points > 0) {
    handle_success_exam();
    $('.correct-answer-warning .close-warning, .correct-answer-warning .text').attr('onclick', 'javascript:submit_exam("' + id + '",false);');
  } else {
    handle_unsuccess_exam();   
    if (alternative) {      
      $('.incorrect-answer-warning .close-warning, .incorrect-answer-warning .text').attr('onclick', 'javascript:submit_exam("' + id + '",false);');
    } else {
      $container.find('.question').addClass('hide');
      show_alternate($container.parents('.content').first(), 2);
    }
  }



}

function submit_exam(id, forced) {

  $('.correct-answer-warning .close-warning, .correct-answer-warning .text, .incorrect-answer-warning .close-warning, .incorrect-answer-warning .text').attr('onclick', 'javascript:;');

  var $container = $('.fb-exam#' + id + '-exam .questions.active');
  var $question = $container.parents('.content').first().find('.question:not(".hide")');

  if (forced || one_question_answered($question)) {
    if (!forced)
      handle_points(2, false, true);
    if ($container.data('scenario') != null && ($container.data('scenario') != undefined )) {
      $container.parents('.content').find('.scenarios .select-scenario-' + $container.data('scenario') + ' a').addClass('done');
    } else {
      $container.parents('.content').find('.scenarios a').addClass('done');
    }

    if (!forced) {
      var all_scenarios_finished = set_exam_type_as_finished($container, id);
      handle_end_of_scenario($container, all_scenarios_finished);
    }

  } else {
    $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
    $scoped_warning_box.show();
    $scoped_warning_box.find('.fancybox').show();
  }

}

function handle_end_of_scenario($container, scenarios_finished) {
  clean_scenario($container, id);

  $container.removeClass('active');
  if ($container.parents('.multiple-scenarios').length > 0 && !scenarios_finished) {
    $container.parents('.multiple-scenarios').find('.scenarios').removeClass('hide');
    next_question('scenarios', true);
  } else {
    $.fancybox.close();
  }

  if (should_end_case_study()) {
    end_case_study();
    show_exam_credits();
    $container.parents('.content').find('.alternate-questions').remove();
  }
  return ;
}

function should_end_case_study() {
  return array_equal(exam_room_events.scenarios_with_exam, exam_room_events.finished_scenarios);
}

function end_case_study() {
  exam_room_events.update_ticker(get_end_study_text());
  $('.exam-room .exit-trigger').addClass('done');

  var undone_exams = $(exam_room_events.scenarios_with_exam).not(exam_room_events.finished_scenarios).get();
  $.each( undone_exams , function(i, id){
    $('.exam-room .exam#' + id).addClass('done');
  });
  if (is_study_passed()) {
    submit_case_study(exam_room_events.the_case_study, exam_room_events.total_points);
    lobby_events.finished_case_studies.push(exam_room_events.the_case_study);
    lobby_events.finished_case_studies = Array.from(new Set(lobby_events.finished_case_studies));
  }
}

function is_study_passed() {
  return exam_room_events.total_points >= 144;
}

function get_end_study_text() {
  return is_study_passed() ? 'CONGRATULATIONS YOU PASSED!' : 'SORRY YOU WERE UNSUCCESSFUL AT THIS ATTEMPT. PLEASE EXIT AND TRY AGAIN.';
}

function set_exam_type_as_finished($container, id) {
  scenarios_count = get_selected_questions(id)['scenarios'].length;
  done_scenarios_count = $container.parents('.content').find('.scenarios a.done').length;
  all_scenarios_finished = done_scenarios_count >= scenarios_count;

  if (all_scenarios_finished) {
    exam_room_events.finished_scenarios.push(id);
    update_exam_room_assets();
  }

  return all_scenarios_finished;
}

function clean_scenario($container, id) {
  $container.find('.question').addClass('hide');
  $container.find('.scenario-text').removeClass('hide');  
  clean_scenario_content($container, id);
}

function update_exam_room_assets() {
  var DEFAULT_IMAGES = ['phone', 'mouse', 'iphone'];
  $('.exam-room .exit-trigger').removeClass('done');

  $.each(exam_room_events.all_scenarios, function(i, exam) {
    var triggerClass = '.exam-room .' + exam + '-trigger';
    var $trigger = $(triggerClass);

    if($.inArray(exam, exam_room_events.finished_scenarios) >= 0) {
      $trigger.addClass('done');
      $trigger.find('a').addClass('done');
      if(is_mobile) {
        $(triggerClass + '-tt-mobile').hide();
      }
      else {
        if (exam != 'tv') {
          $trigger.find('a').tooltip('disable');
          $trigger.find('a').attr("title", "");   // see http://stackoverflow.com/questions/24704020/how-to-re-enable-jquery-tooltip-after-disabled-true/24707759#24707759
        }
      }

      if ($.inArray(exam, DEFAULT_IMAGES) >= 0) {
        $trigger.find('img.replaceable').attr('src', 'img/exam_room/' + exam + '_done.png');
      } else {
        var src = assets_events.exam_room_asset(exam_room_events.the_case_study, exam + '_done');
        $trigger.find('img.replaceable').attr('src', src);
      }
    } else {
      $trigger.removeClass('done');
      $trigger.find('a').removeClass('done')
      if (exam != 'tv') {
        if(is_mobile) {
          $(triggerClass + '-tt-mobile').show();
        }
        else {
          $trigger.find('a').tooltip('enable');
        }
      }

      if ($.inArray(exam, DEFAULT_IMAGES) >= 0) {
        $trigger.find('img.replaceable').attr('src', 'img/exam_room/' + exam + '.png');
      } else {
        var src = assets_events.exam_room_asset(exam_room_events.the_case_study, exam);
        $trigger.find('img.replaceable').attr('src', src);
      }
    }
  });
}

function clean_scenario_content($container, id) {
  $container.find('.scenario-text').html('');
  $.each($container.find('.question'), function(i, q) {
    $(q).find('.text').html('');
    $(q).find('.answers').html('');
  });
}

function set_score() {
  $('.total-points').text('Score: ' + exam_room_events.total_points);
}

function calculate_points($container, id, index, show_feedback, alternative=false) {
  var question_points = get_question_points($container, index, id, alternative)
  exam_room_events.total_points += question_points;
  if (show_feedback) {
    if (question_points > 0) {
      handle_success_exam();
    } else {
      handle_unsuccess_exam();
    }
  }

  return question_points > 0;
}

function show_exam_credits() {

  if (lobby_events.finished_case_studies.length >= 3) {
    $('#fb-warning .content').html('<div class="text">Congratulations! You have successfully completed all three Case Studies.</div>');
  } else {
    if (is_study_passed()) {
      $('#fb-warning .content').html('<div class="text">You have completed this scenario please proceed to the next.</div>');
    } else {
      $('#fb-warning .content').html('<div class="text">You have failed the scenario please try again.</div>');
    }
  }

  $.fancybox({
    href: '#fb-warning',
    width: '400px',
    height: '153px',
    autoSize: false,
    scrolling: 'no'
  });
}

function handle_success_exam() {
  show_correct_popup();
  play_sound(sounds.correct);
}

function handle_unsuccess_exam() {
  show_incorrect_popup();
  play_sound(sounds.incorrect);
}


var CORRECT_EXPRESSIONS = ["WAY TO GO!", "CONGRATS!", "SUPERSTAR", "AMAZING!", "PERFECT!"];
var INCORRECT_EXPRESSIONS = ["BUMMER!", "NEXT TIME!", "SO CLOSE!", "SORRY!", "TRY AGAIN!"];

function show_correct_popup() {
  $('.bg-overlay').removeClass('hide');
  $('.correct-answer-warning .blue .text').text(CORRECT_EXPRESSIONS[Math.floor(Math.random()*CORRECT_EXPRESSIONS.length)]);
  $('.correct-answer-warning').removeClass('hide');
}

function show_incorrect_popup() {
  $('.bg-overlay').removeClass('hide');
  $('.incorrect-answer-warning .red .text').text(INCORRECT_EXPRESSIONS[Math.floor(Math.random()*INCORRECT_EXPRESSIONS.length)]);
  $('.incorrect-answer-warning').removeClass('hide');
}

function hide_question_popup() {
  $('.bg-overlay, .correct-answer-warning, .incorrect-answer-warning').addClass('hide');
}

function get_question_points($container, index, id, alternative=false) {
  var scenario = $('.questions.active').data('scenario');

  if (scenario) {
    scenario = parseInt(scenario);
  } else {
    scenario = 0;
  }


  if (alternative) {
    var checked = $container.find('.a-question_' + index + ' input[type="checkbox"]:checked');
    var valid_answers = get_selected_questions(id)['scenarios'][scenario]['alternate_questions'][index]['valid'];
  } else {
    var checked = $container.find('.question_' + index + ' input[type="checkbox"]:checked');
    var valid_answers = get_selected_questions(id)['scenarios'][scenario]['questions'][index]['valid'];
  }

  var answers = extract_correct_answers(checked);  
  
  if ($.isArray(valid_answers)) {
    var points = array_equal(answers, valid_answers) ? 10 : 0;
  } else {
    var points = array_equal(answers, valid_answers['answers']) ? 10 : 0;
    if (points < 0) {
      points = array_equal(answers, valid_answers['aggregate']) ? 10 : 0;
    }
  }
  return points;
}

function extract_correct_answers(checkboxes) {
  var answers = [];
  $.each(checkboxes, function(i, c) {
    answers.push(parseInt($(c).val()));
  });
  return answers;
}

function start_scenario($container, index, $target) {
  createjs.Sound.stop();
  $container.find('.scenario-text').addClass('hide');

  $container.find('.scenarios').addClass('hide');
  $container.find('.next-btn, .back-btn').removeClass('hide');
  $container.find('.questions').addClass('hide').removeClass('active');
  $container.find('.questions .question').addClass('hide');

  $container.find('.questions.scenario-' + index + ' .scenario-text').removeClass('hide');
  $container.find('.questions.scenario-' + index).removeClass('hide').addClass('active');
  // if (!$target.hasClass('started')) {
  //   $container.find('input:checkbox').prop('checked', false);
  //   style_checkboxes($container);
  // }
  $target.addClass('started');
  sound_name = get_scenario_sound_name($container, index);
  play_sound(sound_name);
}

function first_scenario() {
  $('.select-scenario-0 a.start').click();
}

function last_scenario() {
  $('.select-scenario-1 a.start').click();
}

function get_scenario_sound_name($container, index) {
  scenario_name = $container.attr('id').replace('-exam', '');
  sound_name = exam_room_events.the_case_study + '_' + scenario_name;

  if (index != null) {
    sound_name = sound_name + '_' + parseInt(index + 1);
  }

  return sound_name;
}

$(document).ready(function() {
  $('.fb-exam .scenarios ').on('click', 'a.start:not(".done")', function(jsEvent){
    $target = $(jsEvent.target);
    if (!$target.data('finished')){
      $container = $target.parents('.fb-exam');
      change_next_btn_label($container, 'text');
      scenario_index = $target.parents('.select-scenario').data('index');
      start_scenario($container, scenario_index, $target);
    }
  });

  $(".correct-answer-warning .close-warning, .correct-answer-warning .content .text, .incorrect-answer-warning .close-warning, .incorrect-answer-warning .content .text").on('click', function() {
    hide_question_popup();
  });

  $('.inside-fb-select-scenario .close-warning').on('click', function() {
    quit_submit_warning();
  });

  $('.answers').on('ifChecked', 'input', function(event){
    $answers = $(this).parents('.answers').first();
    correct_count = parseInt($answers.data('correct-number'));
    answered_count = $answers.find('.checked').length + 1;

    if (answered_count >= correct_count) {
      $answers.find('.answer_row .icheckbox_minimal-orange:not(".checked") input').prop('disabled', 'disabled');
      $(this).prop('disabled', '');
    }
  });

  $('.answers').on('ifUnchecked', 'input', function(event){
    $answers = $(this).parents('.answers').first();
    correct_count = parseInt($answers.data('correct-number'));
    answered_count = $answers.find('.checked').length - 1;

    if (answered_count < correct_count) {
      $answers.find('.answer_row input').prop('disabled', '');
    }
  });
});
