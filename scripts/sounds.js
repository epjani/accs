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

  createjs.Sound.registerSound("sounds/premiu_products/iphone.wav", "premium_products_iphone");
  createjs.Sound.registerSound("sounds/premiu_products/mouse_2.wav", "premium_products_mouse_2");
  createjs.Sound.registerSound("sounds/premiu_products/mouse_1.wav", "premium_products_mouse_1");
  createjs.Sound.registerSound("sounds/premiu_products/phone.wav", "premium_products_phone");
  createjs.Sound.registerSound("sounds/premiu_products/poster_1.wav", "premium_products_poster_1");
  createjs.Sound.registerSound("sounds/premiu_products/poster_2.wav", "premium_products_poster_2");

  createjs.Sound.registerSound("sounds/leisure_group/iphone.wav", "leisure_group_iphone");
  createjs.Sound.registerSound("sounds/leisure_group/mouse_2.wav", "leisure_group_mouse_2");
  createjs.Sound.registerSound("sounds/leisure_group/mouse_1.wav", "leisure_group_mouse_1");
  createjs.Sound.registerSound("sounds/leisure_group/phone.wav", "leisure_group_phone");
  createjs.Sound.registerSound("sounds/leisure_group/poster_1.wav", "leisure_group_poster_1");
  createjs.Sound.registerSound("sounds/leisure_group/poster_2.wav", "leisure_group_poster_2");

  createjs.Sound.registerSound("sounds/network_fleet/iphone.wav", "network_fleet_iphone");
  createjs.Sound.registerSound("sounds/network_fleet/mouse_1.wav", "network_fleet_mouse_1");
  createjs.Sound.registerSound("sounds/network_fleet/phone.wav", "network_fleet_phone");
  createjs.Sound.registerSound("sounds/network_fleet/poster_1.wav", "network_fleet_poster_1");
  createjs.Sound.registerSound("sounds/network_fleet/poster_2.wav", "network_fleet_poster_2");

}

function play_sound(id) {
	createjs.Sound.play(id);
}