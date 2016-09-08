sounds = {
	beep: "beep",
	door_opening: "door_opening",
	correct: "correct",
	incorrect: "incorrect"
}

function load_sounds() {
  createjs.Sound.registerSound("sounds/beep.mp3", sounds.beep);
  createjs.Sound.registerSound("sounds/door_opening.mp3", sounds.door_opening);
  createjs.Sound.registerSound("sounds/correct.mp3", sounds.correct);
  createjs.Sound.registerSound("sounds/incorrect.mp3", sounds.incorrect);
  createjs.Sound.registerSound("sounds/steps_long.mp3", "steps");
  createjs.Sound.registerSound("sounds/mouse.mp3", "mouse");
  createjs.Sound.registerSound("sounds/swish.mp3", "swish");
  createjs.Sound.registerSound("sounds/ringing.mp3", "phone");
  createjs.Sound.registerSound("sounds/iphone.mp3", "iphone");
  createjs.Sound.registerSound("sounds/moped_driving.mp3", "moped_driving");


  createjs.Sound.registerSound("sounds/case_studies/premium_products/iphone.mp3", "premium_products_iphone");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/mouse_2.mp3", "premium_products_mouse_2");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/mouse_1.mp3", "premium_products_mouse_1");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/phone.mp3", "premium_products_phone");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/poster_1.mp3", "premium_products_poster1");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/poster_2.mp3", "premium_products_poster2");

  createjs.Sound.registerSound("sounds/case_studies/leisure_group/iphone.mp3", "leisure_group_iphone");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/mouse_2.mp3", "leisure_group_mouse_2");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/mouse_1.mp3", "leisure_group_mouse_1");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/phone.mp3", "leisure_group_phone");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/poster_1.mp3", "leisure_group_poster1");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/poster_2.mp3", "leisure_group_poster2");

  createjs.Sound.registerSound("sounds/case_studies/network_fleet/iphone.mp3", "network_fleet_iphone");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/mouse_1.mp3", "network_fleet_mouse");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/phone.mp3", "network_fleet_phone");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/poster_1.mp3", "network_fleet_poster1");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/poster_2.mp3", "network_fleet_poster2");

}

function play_sound(id) {
	createjs.Sound.play(id);
}