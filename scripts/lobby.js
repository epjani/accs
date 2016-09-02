var lobby_events = {
	clicked_areas: {
		poster: false,
		introduction: false,
		instructions: false,
    globe: false
	},
	bind_click_events: lobby_click_events(),
	bind_go_to_exam_events: lobby_go_to_case_study_click(),
	documents_read: are_documents_read,
	read_documents: read_all_the_documents,
	hide_room: hide_lobby,
	goto_lobby: enter_lobby,
	finished_case_studies: [],
	case_study_texts: {
		en: {
			premium_products: "Premium Products Case Study",
			leisure_group: "Leisure Group Case Study",
			network_fleet: "Network Fleet Case Study"
		},
		fr: {
			premium_products: "Premium Products Case Study",
			leisure_group: "Leisure Group Case Study",
			network_fleet: "Network Fleet Case Study"
		}
	},
  attempts: {
    premium_products: 0,
    leisure_group: 0,
    network_fleet: 0
  }
};


function lobby_click_events() {
	$('.read-document').click(function(jsEvent){
    $target = get_read_element($(jsEvent.target));

    if ($target !== undefined) {
    	if (!lobby_events.documents_read()) {
    		read_lobby_document($target.data('read-doc-id'));
    	}
    }
  });

  $(".poster-fb-trigger").click(function() {
  	$('#poster-area').click();
  });
}

function total_atempts() {
	return lobby_events.attempts['premium_products'] + lobby_events.attempts['leisure_group'] + lobby_events.attempts['network_fleet'];
}

function enter_lobby() {
  $('.animations').hide();
  $('.lobby').show();
  setImageSize();
  $('map').imageMapResize();
  set_lobby_assets();
  show_whiteboard_tooltips();
}

function set_lobby_assets() {
	$.each(lobby_events.finished_case_studies, function(i, cs) {
		$cstudy = $('.cs-selection#' + cs);
		$cstudy.addClass('done');
		$cstudy.find('img').attr('src', 'img/whiteboard/' + cs + '_done.png');
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
	$('.cs-selection').click(function(jsEvent) {

	  // if (true /*lobby_events.documents_read()*/) {
	  if (lobby_events.documents_read()) {
			$target = $(jsEvent.target);
			if ($target.hasClass('cs-selection')) {
				case_study = $target.attr('id');
			} else {
				case_study = $target.parents('.cs-selection').first().data('case-study');
			}

      if (lobby_events.attempts[case_study] >= 2) {
        lobby_warning("<div class=\"text\">You already attempted this case study 2 times.</div>")
      } else {
        open_exam_room();
        $('.whiteboard a').mouseout();
        setTimeout(go_to_case_study, 1500, case_study);
      }

		} else {
			lobby_warning('<div class="text">Please review introduction, instructions, globe and poster before proceeding to the case study.</div>');
		}
	});
}

function go_to_case_study(case_study) {
	hide_lobby();
	exam_room_events.enter_room(case_study);
}

function hide_lobby() {
	$('.container .lobby').hide();

  if(is_mobile) {
    var imgSrc = "img/lobby-mobile.jpg";
  }
  else {
    var imgSrc = "img/lobby.jpg";
  }
  $('.lobby img.lobby-img').attr('src', imgSrc);

}

function lobby_warning(message) {
	// message = "You have to read: " + non_clicked_elements_stringified();
	$('#fb-warning .content').html(message);
	$.fancybox({
	  href: '#fb-warning',
	  width: 500,
	  height: 'auto',
	  autoSize: false
	});
	play_sound(sounds.incorrect);
}

function non_clicked_elements_stringified() {
	invalid_elements = [];
	var keys = Object.keys(lobby_events.clicked_areas);
	$.each(keys, function(i, key) {
		if (!is_read(key)) {
			invalid_elements.push($('#' + key).data('title'));
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
	show_whiteboard_tooltips();
	update_element_assets(id);
}

function update_element_assets(id) {
	switch (id) {
		case 'globe':
		case 'poster': {
			$('img#' + id + '-img').attr('src', 'img/' + id + '_done.png');
			break;
		}
		case 'introduction':
		case 'instructions': {
			$('li#' + id + '-img').addClass('done');
		}
	}

}

function show_whiteboard_tooltips() {
  if (lobby_events.documents_read()) {
    set_whiteboard_tooltips();
    $('.whiteboard a').mouseover();
  }
}

function open_exam_room() {
	play_sound(sounds.door_opening);

  var imgSrc = "img/lobby-open.jpg";
  if(is_mobile) { var imgSrc = "img/lobby-open-mobile.jpg"; }

	$('.lobby img.lobby-img').attr('src', imgSrc);
}

function is_read(doc_id) {
	return lobby_events.clicked_areas[doc_id];
}

function set_whiteboard_tooltips() {
	$('.whiteboard a').tooltip({
		position: {
      my: "left bottom",
      at: "right center",
      of: $(".whiteboard"),
      collision: "fit"
    },
    tooltipClass: "tooltip-bubble",
    content: function() {
      var content = $("<div class='content'>");
      if(is_mobile) {
        var imgEl = $("<img alt='' src='img/tt-bubble-mobile.png' />");
      }
      else {
        var imgEl = $("<img alt='' src='img/tt-bubble.png' />");
      }
      var textEl = $("<div class='text'>");
      textEl.text($(this).data("tt-text"));
      content.append(imgEl);
      content.append(textEl);

      return content;
    }
  });
}

function open_globe_content() {
	$.fancybox({
		href: '#globe-fb',
		fitToView : false,
		autoSize  : false,
		width			: '90%',
		height    : 'auto'
	});
}