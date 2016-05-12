
function attach_questions(id) {
  var questions = get_selected_questions(id);
  var $container = $('.fb-exam#' + id + '-exam');

  if (questions['scenarios'].length == 1) {
    set_question_main_text($container, questions['scenarios'][0]);
    set_questions($container, questions['scenarios'][0]);
    change_next_btn_label($container, id);
    $container.find('.questions').addClass('active');
  } else {
    $container.find('.questions').addClass('hide');
    setup_scenarios($container, questions);
    show_scenarios($container)
  }

  // style checkboxes
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
  var $scenario_container = $container.find('.scenarios');
  $container.find('.next-btn').addClass('hide');
  set_scenarios_text(questions, $scenario_container);
  set_scenarios_questions($container, questions);
  $scenario_container.find('.scenario-template').remove();
}

function set_scenarios_questions($container, questions) {
  $.each(questions['scenarios'], function(i, scen) {
    var $template = $container.find('.q-template').clone().addClass('scenario-' + i).removeClass('q-template');
    $template.attr('data-scenario', i);
    set_question_main_text($template, scen);
    set_questions($template, scen);
    $container.find('.content').append($template);
  });
  $container.find('.q-template').remove();
}

function set_scenarios_text(questions, $scenario_container) {
  $.each(questions['scenarios'], function(i, scen) {
    var $template = $scenario_container.find('.scenario-template').clone().removeClass('scenario-template').addClass('select-scenario select-scenario-' + i);
    $template.attr('data-index', i);
    $template.find('.text').text(scen['text']);
    $scenario_container.append($template);
  });
}

function set_question_main_text($container, questions) {
  $scenario_text = $container.find('.scenario-text');

  if ($scenario_text.text().trim() == "")
    $scenario_text.text(questions['text']);
}

function set_questions($container, questions) {
  $.each(questions['questions'], function(index, val) {
    $question = $container.find('.question_' + index);
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
    }
  });
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

function next_question(id) {
  if (id === null) {
    $.fancybox.close();
    return;
  }  

  $scope = $('.fb-exam:visible .questions.active');
  change_next_btn_label($scope, id)
  $scope.find('.question').addClass('hide');
  $scope.find('.question.question_' + id).removeClass('hide');
}

function change_next_btn_label($container, id) {
  label = id == '2' || id == 2 ? 'Submit' : 'Next';
  $container.parents('.fb-exam').first().find('.next-btn').text(label);
}

function submit_exam(id) {
  var $container = $('.fb-exam#' + id + '-exam .questions.active');
  if ($container.data('scenario') != null && ($container.data('scenario') != undefined )) {
    $container.parents('.content').find('.scenarios .select-scenario-' + $container.data('scenario') + ' a').addClass('done');
  } else {
    $container.parents('.content').find('.scenarios a').addClass('done');
  }
  calculate_points($container, id);
  set_score();
  set_exam_type_as_finished($container, id);
  clean_scenario($container, id);
  if (should_end_case_study()) {
    end_case_study();
  }
  $container.removeClass('active');
  $.fancybox.close();
}

function should_end_case_study() {
  return array_equal(exam_room_events.all_scenarios, exam_room_events.finished_scenarios);
}

function end_case_study() {
  exam_room_events.update_ticker(get_end_study_text());
  $('.exam-room .exit-trigger').addClass('done');

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

function calculate_points($container, id) {
  exam_room_events.total_points += get_question_points($container, 0, id);
  exam_room_events.total_points += get_question_points($container, 1, id);
  exam_room_events.total_points += get_question_points($container, 2, id);
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
}

$(document).ready(function() {
  $('.fb-exam .scenarios ').on('click', 'a.start:not(".done")', function(jsEvent){
    $target = $(jsEvent.target);
    if (!$target.data('finished')){
      $container = $target.parents('.fb-exam');      
      scenario_index = $target.parents('.select-scenario').data('index');
      start_scenario($container, scenario_index);
    }
  });
});