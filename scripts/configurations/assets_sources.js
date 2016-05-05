var assets_events = {
  exam_room_asset: get_exam_room_asset
}

function get_exam_room_asset(case_study, asset) {
  return 'img/exam_room/' + main_variables.language + '/' + case_study + '/' + asset + '.png';
}
