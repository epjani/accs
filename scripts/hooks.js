
var case_study_mapping = {
	'skuid1': 'premium_products',
	'skuid2': 'leisure_group',
	'skuid3': 'network_fleet'
};

// TODO: Please set this to 'false' once when endpoint url is set correctly. If false, this raises popup saying that something went wrong with fetching data from server
var _employee_data_loaded = true;

$(document).ready(function() {
	main_variables.language = 'en';

	if (typeof(_employee_data) !== "undefined") {
		main_variables.employee_name = _employee_data.name;

		$.each(_employee_data.case_studies, function(i, cs) {
			if(cs.passed) {
				lobby_events.finished_case_studies.push(case_study_by_sku(i));
			}

			lobby_events.attempts[case_study_by_sku(i)] = cs.attempts;
		});

		_employee_data_loaded = true;

	}
});


function submit_evaluation() {
	// TODO: Submit following form: $('.evaluation-form')
}

function submit_case_study(case_study_name, score) {
	var sku = sku_by_case_study(case_study_name);
	// TODO: Implement this. This only triggers once when case study is passed
}

function submit_attempts(case_study_name, attempts) {
	var sku = sku_by_case_study(case_study_name);
	// TODO: Implement this. Set number of attempts per case study.
}

function case_study_by_sku(sku) {
	return case_study_mapping[sku];
}

function sku_by_case_study(case_study) {
	return value_to_key(case_study, case_study_mapping);
}

function value_to_key(val,array){
    for (var key in array) {
      this_val = array[key];
      if(this_val == val){
          return key;
          break;
      }
    }
}