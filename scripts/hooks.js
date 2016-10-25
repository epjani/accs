var case_study_mapping = {
  'skuid1': 'premium_products',
  'skuid2': 'leisure_group',
  'skuid3': 'network_fleet'
};

// TODO: Please set this to 'false' once when endpoint url is set correctly. If false, this raises popup saying that something went wrong with fetching data from server
var _employee_data_loaded = true;

$(document).ready(function () {
  main_variables.language = 'en';

  if (typeof (_employee_data) !== "undefined") {
    main_variables.employee_name = _employee_data.name;

    $.each(_employee_data.case_studies, function (i, cs) {
      if (cs.passed) {
        lobby_events.finished_case_studies.push(case_study_by_sku(i));
      }

      lobby_events.attempts[case_study_by_sku(i)] = cs.attempts;
    });

    _employee_data_loaded = true;

  }
});


function submit_evaluation() {
  console.log($('.evaluation-form').serialize());
  //alert('submitting evaluation')
  var data = [];
  $('form.evaluation-form input[type="radio"]').each(function () {
    if ($(this).is(':checked')) {
      data.push({
        Question: $(this).closest('div.grade').find('div.text').text(),
        Answer: $(this).closest('div.radio').text(),
        FieldType: 4,
        FieldName: $(this).attr('name')
      });
    }
  });
  $('form.evaluation-form textarea').each(function () {
    data.push({
      Question: $(this).parent().find('label:first').text(),
      Answer: $(this).val(),
      FieldType: 2,
      FieldName: $(this).attr('name')
    });
  });
  $.ajax({
    url: 'sys/data/se/'+ qs('sku') + '/' + qs('TransactionID') + '/' + qs('userid'),
    type: 'post',
    dataType: 'jsonp',
    data: { data: JSON.stringify(data) },
    success: function (x) {
      if (x.valid) {
        //TODO: if there is need to say that evaluation is sent
      } else {
        //TODO: if there is need to say that there is error while sending evaluation
      }
    }
  });
}

function submit_case_study(case_study_name, score) {
  var sku = sku_by_case_study(case_study_name);
  // TODO: Implement this. This only triggers once when case study is passed

  //alert('Submit case study: ' + case_study_name + ' -- ' + score);

  _employee_data.case_studies[sku].passed = true;
  if (_employee_data.case_studies[sku].score < score) {
    _employee_data.case_studies[sku].score = score;
  }

  //TODO: send completion if every case study is completed
  sys_save_data();

  if (check_if_all_three_are_completed()) {
    sys_send_completion();
  }

};
function sys_send_completion() {
  var total = 0;
  var max = 40 * 3;
  total += _employee_data.case_studies["skuid1"].score;
  total += _employee_data.case_studies["skuid2"].score;
  total += _employee_data.case_studies["skuid3"].score;

  var percent = (total * 100) / max;

  //just for testing
  if (percent > 100) {
    percent = 100;
  }

  $.ajax({
    url: 'sys/data/sc/' + qs('sku') + '/' + qs('TransactionID') + '/' + qs('userid'),
    dataType: 'jsonp',
    type: 'post',
    data: { score: percent },
    success: function (x) {
      if (x.valid) {
        //TODO: if there is need for displaying message when cs is completed do it here
      } else {
        ///TODO: if it's not possible to send completion display error
      }
    }
  });
};
function check_if_all_three_are_completed() {
  if (_employee_data.case_studies["skuid1"].passed
    && _employee_data.case_studies["skuid2"].passed
    && _employee_data.case_studies["skuid3"].passed) {
    return true;
  }
  return false;
}
function submit_attempts(case_study_name, attempts) {
  var sku = sku_by_case_study(case_study_name);
  // TODO: Implement this. Set number of attempts per case study.
  //alert('asking for submit attempts ' + case_study_name + ' - ' + attempts);
  if (typeof (_employee_data) !== "undefined") {
    _employee_data.case_studies[sku].attempts++;

    sys_save_data();
  }

  return 3;
}
function sys_save_data() {
  var _url = 'sys/data/update/' + qs('sku') + '/' + qs('TransactionID') + '/' + qs('userid') + '/data';
  $.ajax({
    url: _url,
    type: 'post',
    dataType: 'jsonp',
    data: { data: JSON.stringify(_employee_data) },
    success: function (x) {
      if (x.valid) {
        //TODO: if there is logic for success implement it.
        //console.log('data saved');
      } else {
        //TODO: show error unable to save data
      }
    }
  });
}
function case_study_by_sku(sku) {
  return case_study_mapping[sku];
}

function sku_by_case_study(case_study) {
  return value_to_key(case_study, case_study_mapping);
}

function value_to_key(val, array) {
  for (var key in array) {
    this_val = array[key];
    if (this_val == val) {
      return key;
      break;
    }
  }
}