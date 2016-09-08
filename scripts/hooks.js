$(document).ready(function() {
	var $scope = $('.data-configuration');
	/* Please set following variables here */

	// main_variables.language
	// Describes language used accross application
	// Default: main_variables.language = 'en'
	// Possible values: en/fr
	var language = $scope.find('.global-configuration').data('language');
	if (language != '') { main_variables.language = language; }

	// main_variables.employee_name
	// Name of person who is taking the courses
	// Default: main_variables.employee_name = 'Test name'
	var employee_name = $scope.find('.employee-data').data('name');
	if (employee_name != '') { main_variables.employee_name = employee_name; }

	// lobby_events.finished_case_studies
	// Array of shortcodes for case studies that employee already finished
	// Default: lobby_events.finished_case_studies = []
	// Possible values: 'premium_products', 'leisure_group', 'network_fleet'
	lobby_events.finished_case_studies = $scope.find('.case-study-data[data-passed="true"]').map(function() { return $(this).data('name') });

	// lobby_events.attempts
	// Hash with case study shortcodes as keys ('premium_products', 'leisure_group', 'network_fleet') where value represent number of attempts
	// Default: 0 for each case study
	var premium_products_attempts = parseInt($scope.find('.case-study-data[data-name="premium_products"]').data('attempts'));
	var leisure_group_attempts = parseInt($scope.find('.case-study-data[data-name="leisure_group"]').data('attempts'));
	var network_fleet_attempts = parseInt($scope.find('.case-study-data[data-name="network_fleet"]').data('attempts'));
	
	if (!isNaN(premium_products_attempts)) { lobby_events.attempts.premium_products = premium_products_attempts; }
	if (!isNaN(leisure_group_attempts)) { lobby_events.attempts.leisure_group = leisure_group_attempts; }
	if (!isNaN(network_fleet_attempts)) { lobby_events.attempts.network_fleet = network_fleet_attempts; }
});


function submit_evaluation() {
	// Submit following form: $('.evaluation-form')
}

function submit_case_study(case_study_name, score) {
	// Implement this
}