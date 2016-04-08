var lobby_events = {
	clicked_areas: {
		brouchure1: false,
		brouchure2: false,
		brouchure3: false,
		poster: false,
		introduction: false,
		instructions: false
	},
	bind_click_events: lobby_click_events(),
	bind_go_to_exam_events: lobby_go_to_case_study_click(),
	documents_read: are_documents_read,
	read_documents: read_all_the_documents
};


function lobby_click_events() {
	$('#map_lobby area, .read-document').click(function(jsEvent){
    $target = get_read_element($(jsEvent.target));

    if ($target !== undefined) {
    	read_lobby_document($target.attr('id'));
    }
  });
}

function are_documents_read() {
	var are_all_read = true;
	var keys = Object.keys(lobby_events.clicked_areas);
	$.each(keys, function(i, key) {
		if (!is_read(key))
			are_all_read = false;
	});
	return are_all_read;
}

function read_all_the_documents() {
	// TODO => Attach when we get user info from server. If that user has already clicked things arround...
	var keys = Object.keys(lobby_events.clicked_areas);
	$.each(keys, function(i, key) {
		read_lobby_document(key);
	});
}

function lobby_go_to_case_study_click() {
	$('.go-to-exam, .select-case-study').click(function(jsEvent) {
		if (lobby_events.documents_read()) {
			go_to_case_study();
		} else {
			lobby_requirements_warning();
		}
	});
}

function go_to_case_study() {
	alert('TODO: implement next room');
}

function lobby_requirements_warning() {
	message = "You have to read: " + non_clicked_elements_stringified();
	$('#fb-warning .content').text(message);
	$.fancybox({
	  href: '#fb-warning'
	});
}

function non_clicked_elements_stringified() {
	invalid_elements = [];
	var keys = Object.keys(lobby_events.clicked_areas);
	$.each(keys, function(i, key) {
		if (!is_read(key)) {
			invalid_elements.push($('#' + key).attr('title'));
		}
	});

	return invalid_elements.join(", ");
}

function get_read_element($target) {
	if ($target.hasClass('read-document'))
		return $target;
	else if ($target.parent().hasClass('read-document'))
		return $target.parent();
	return undefined;
}

function read_lobby_document(id) {
	lobby_events.clicked_areas[id] = true;
}

function is_read(doc_id) {
	return lobby_events.clicked_areas[doc_id];
}