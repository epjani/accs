sounds = {
	beep: "beep",
	door_opening: "door_opening",
	correct: "correct",
	incorrect: "incorrect"
}

function load_sounds() {
  createjs.Sound.registerSound("sounds/beep.mp3", sounds.beep);
  createjs.Sound.registerSound("sounds/door_opening.wav", sounds.door_opening);
  createjs.Sound.registerSound("sounds/correct.wav", sounds.correct);
  createjs.Sound.registerSound("sounds/incorrect.wav", sounds.incorrect);
  createjs.Sound.registerSound("sounds/steps.mp3", "steps");
  createjs.Sound.registerSound("sounds/mouse.mp3", "mouse");
  createjs.Sound.registerSound("sounds/swish.wav", "swish");
  createjs.Sound.registerSound("sounds/ringing.mp3", "phone");
  createjs.Sound.registerSound("sounds/iphone.mp3", "iphone");
  createjs.Sound.registerSound("sounds/moped_driving.mp3", "moped_driving");


  createjs.Sound.registerSound("sounds/case_studies/premium_products/iphone.wav", "premium_products_iphone");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/mouse_2.wav", "premium_products_mouse_2");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/mouse_1.wav", "premium_products_mouse_1");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/phone.wav", "premium_products_phone");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/poster_1.wav", "premium_products_poster1");
  createjs.Sound.registerSound("sounds/case_studies/premium_products/poster_2.wav", "premium_products_poster2");

  createjs.Sound.registerSound("sounds/case_studies/leisure_group/iphone.wav", "leisure_group_iphone");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/mouse_2.wav", "leisure_group_mouse_2");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/mouse_1.wav", "leisure_group_mouse_1");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/phone.wav", "leisure_group_phone");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/poster_1.wav", "leisure_group_poster1");
  createjs.Sound.registerSound("sounds/case_studies/leisure_group/poster_2.wav", "leisure_group_poster2");

  createjs.Sound.registerSound("sounds/case_studies/network_fleet/iphone.wav", "network_fleet_iphone");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/mouse_1.wav", "network_fleet_mouse");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/phone.wav", "network_fleet_phone");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/poster_1.wav", "network_fleet_poster1");
  createjs.Sound.registerSound("sounds/case_studies/network_fleet/poster_2.wav", "network_fleet_poster2");

}

function play_sound(id) {
	createjs.Sound.play(id);
}