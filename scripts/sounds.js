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
}

function play_sound(id) {
	createjs.Sound.play(id);
}