var player;

function attach_questions(id) {
  var questions = get_selected_questions(id);
  var $container = $('.fb-exam#' + id + '-exam');

  if (questions['scenarios'].length == 1) {
    var $infoHeader = $container.find('.info-header-container .info-header').first();
    set_question_main_text($container, questions['scenarios'][0], $infoHeader);
    set_questions($container, questions['scenarios'][0], $infoHeader);
    change_next_btn_label($container, id);
    $container.find('.questions').addClass('active');
  } else {
    $container.find('.questions').addClass('hide');
    setup_scenarios($container, questions);
    show_scenarios($container);
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
  var $footer = $('.bottom-menu').first().clone();

  $common_elements.html('');
  $common_elements.append($clock).append($score);

  if($container.find('.bottom-menu').length == 0) {
    $container.append($footer);
  }
}

function show_scenarios($container) {
  $container.find('.scenarios').removeClass('hide');
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
    var $template = $container.find('.q-template').clone().addClass('scenario-' + i).removeClass('q-template');
    $template.attr('data-scenario', i);

    var $infoHeader = $container.find('.info-header-container .info-header').first();    
    set_question_main_text($template, scen, $infoHeader);
    set_questions($template, scen, $infoHeader);        
    $container.find('.content:not(".warning")').append($template);    
  });
  $container.find('.q-template').remove();
}

function set_scenarios_text(questions, $scenario_container) {
  $.each(questions['scenarios'], function(i, scen) {
    var $template = $scenario_container.find('.scenario-template').clone().removeClass('scenario-template').addClass('select-scenario select-scenario-' + i);
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
      $img.attr("align", "left");

      $scenario_text.append($img);
    }

    

    if(questions['videoId']) {
      var $videoContainer = $("<div>");
      $videoContainer.attr("id", "video-player");
      $videoContainer.attr("align", "left");
      $scenario_text.append($videoContainer);

      player = initVideoPlayer(questions['videoId']);
    }
  
    $scenario_text.append(questions['text']);

    if($infoHeader.length > 0) {
      set_question_info_header($scenario_text, $infoHeader.clone(), {to: 'You', from: questions['from'], topic: questions['topic']});      
    }
  }
}

function set_questions($container, questions, $infoHeader) {  
  $.each(questions['questions'], function(index, val) {
    var $question = $container.find('.question_' + index);
    if ($question.find('.text').text().trim() == "") {
      $question.find('.text').text(val['question']);

      $.each(val['answers'], function(i, answer) {
        var chk_id = "chk_" + index + "_" + i;
        html = '<div class="answer_row">';
        html += '<input type="checkbox" id="' + chk_id + '" name="question_' + index + '" value="' + i + '" />';
        html += '<label for="' + chk_id + '">' + answer['text'] + '</label>';
        html += '</div>';
        $question.find('.answers').append(html);
      });

      if($infoHeader.length > 0) {
        set_question_info_header($question, $infoHeader.clone(), {to: 'You', from: questions['from'], topic: questions['topic']});      
      }
    }
  });
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
    }
  });
}

function get_next_prev_btn_reference($target, type) {
  $container = $target.parents('.fb-exam').first().find('.questions');
  return $container.children("[data-" + type + "-btn]:visible").first();
}

function next_question(id, skip_warning) {
  stopVideo();

  if (id === null) {
    $.fancybox.close();
    return;
  }  

  $scope = $('.fb-exam:visible .questions.active');
  $current = $scope.find('.question:not(".hide")');

  if (!$current.hasClass('scenario-text')) {
    if (one_question_answered($current) || skip_warning) {
      go_to_next_question_set($scope, id)
    } else {
      $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
      $scoped_warning_box.show();
      $scoped_warning_box.find('.fancybox').show();
    } 
  } else {
    go_to_next_question_set($scope, id)
  }
}

function quit_submit_warning() {
  $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
  $scoped_warning_box.hide();
  $scoped_warning_box.find('.fancybox').hide();
}

function go_to_next_question_set($scope, index) {
  change_next_btn_label($scope, index);  
  $scope.find('.question').addClass('hide');
  $scope.find('.question.question_' + index).removeClass('hide');
  handle_points(index-1);
}

function handle_points(index) {
  $container = $target.parents('.fb-exam').first().find('.questions');
  var id = $container.parents('.fb-exam').attr('id').replace('-exam', '');
  calculate_points($container, id, index);
  set_score();
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

  var label = id == '2' || id == 2 ? 'Submit' : 'Next';  
  var $btn = $rootElement.find('.next-btn');
  $btn.text(label);

  $btn.removeClass('submit');
  if(label == 'Submit')
    $btn.addClass('submit');  
}

function submit_exam(id) {

  var $container = $('.fb-exam#' + id + '-exam .questions.active');

  if (one_question_answered($container.find('.question:not(".hide")'))) {
    handle_points(2);
    if ($container.data('scenario') != null && ($container.data('scenario') != undefined )) {
      $container.parents('.content').find('.scenarios .select-scenario-' + $container.data('scenario') + ' a').addClass('done');
    } else {
      $container.parents('.content').find('.scenarios a').addClass('done');
    }
    
    set_exam_type_as_finished($container, id);
    clean_scenario($container, id);
    if (should_end_case_study()) {
      end_case_study();
    }
    $container.removeClass('active');    
    $.fancybox.close();
  } else {
    $scoped_warning_box = $('.fb-exam:visible .inside-fb-warning');
    $scoped_warning_box.show();
    $scoped_warning_box.find('.fancybox').show();
  } 
  
}

function should_end_case_study() {
  return array_equal(exam_room_events.all_scenarios, exam_room_events.finished_scenarios);
}

function end_case_study() {
  exam_room_events.update_ticker(get_end_study_text());
  $('.exam-room .exit-trigger').addClass('done');

  var undone_exams = $(exam_room_events.all_scenarios).not(exam_room_events.finished_scenarios).get();
  $.each( undone_exams , function(i, id){
    $('.exam-room .exam#' + id).addClass('done');
  });
  if (is_study_passed()) {
    lobby_events.finished_case_studies.push(exam_room_events.the_case_study);
  }
}

function is_study_passed() {
  return exam_room_events.total_points >= 162;
}

function get_end_study_text() {
  return is_study_passed() ? 'CONGRATULATIONS YOU PASSED!' : 'SORRY YOU WERE UNSUCESSFUL AT THIS ATTEMPT. PLEASE EXIT AND TRY AGAIN.';
}

function set_exam_type_as_finished($container, id) {
  scenarios_count = get_selected_questions(id)['scenarios'].length;
  done_scenarios_count = $container.parents('.content').find('.scenarios a.done').length;
  if (done_scenarios_count >= scenarios_count) {
    exam_room_events.finished_scenarios.push(id);
    update_exam_room_assets();
  }
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
    var $trigger = $('.exam-room .' + exam + '-trigger');

    if($.inArray(exam, exam_room_events.finished_scenarios) >= 0) {
      $trigger.addClass('done');
      $trigger.find('a').addClass('done').tooltip('disable');
      if ($.inArray(exam, DEFAULT_IMAGES) >= 0) {
        $trigger.find('img').attr('src', 'img/exam_room/' + exam + '_done.png');
      } else {
        var src = assets_events.exam_room_asset(exam_room_events.the_case_study, exam + '_done');
        $trigger.find('img').attr('src', src);
      }
    } else {
      $trigger.removeClass('done');
      $trigger.find('a').removeClass('done').tooltip('enable');
      if ($.inArray(exam, DEFAULT_IMAGES) >= 0) {
        $trigger.find('img').attr('src', 'img/exam_room/' + exam + '.png');
      } else {
        var src = assets_events.exam_room_asset(exam_room_events.the_case_study, exam);
        $trigger.find('img').attr('src', src);
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

function calculate_points($container, id, index) {
  var question_points = get_question_points($container, index, id)
  exam_room_events.total_points += question_points;
  if (question_points > 0) {
    show_correct_popup();
    play_sound(sounds.correct);
  } else {
    show_incorrect_popup();
    play_sound(sounds.incorrect);
  }

}

function show_correct_popup() {
  $('.bg-overlay').removeClass('hide');
  $('.correct-answer-warning').removeClass('hide');
}

function show_incorrect_popup() {
  $('.bg-overlay').removeClass('hide');
  $('.incorrect-answer-warning').removeClass('hide');
}

function hide_question_popup() {
  $('.bg-overlay, .correct-answer-warning, .incorrect-answer-warning').addClass('hide');
}

function get_question_points($container, index, id) {
  var checked = $container.find('.question_' + index + ' input[type="checkbox"]:checked');
  var answers = extract_correct_answers(checked);
  var valid_answers = get_selected_questions(id)['scenarios'][0]['questions'][index]['valid'];
  if ($.isArray(valid_answers)) {
    var points = array_equal(answers, valid_answers) ? 10 : -5;
  } else {
    var points = array_equal(answers, valid_answers['answers']) ? 10 : -5;
    if (points < 0) {
      points = array_equal(answers, valid_answers['aggregate']) ? 10 : -5;
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

function start_scenario($container, index) {
  $container.find('.scenarios').addClass('hide');
  $container.find('.next-btn').removeClass('hide');
  $container.find('.questions.scenario-' + index).removeClass('hide').addClass('active');
  $container.find('input:checkbox').prop('checked', false);
   style_checkboxes($container);
}

$(document).ready(function() {
  $('.fb-exam .scenarios ').on('click', 'a.start:not(".done")', function(jsEvent){
    $target = $(jsEvent.target);
    if (!$target.data('finished')){
      $container = $target.parents('.fb-exam');
      change_next_btn_label($container, 0);
      scenario_index = $target.parents('.select-scenario').data('index');
      start_scenario($container, scenario_index);
    }
  });

  $(".correct-answer-warning .close-warning, .incorrect-answer-warning .close-warning").on('click', function() {
    hide_question_popup();
  });
});