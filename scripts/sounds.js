sounds = {
	beep: "beep"
}

function load_sounds() {
  createjs.Sound.registerSound("sounds/beep.mp3", sounds.beep);
}

function play_sound(id) {
	createjs.Sound.play(id);
}