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
}

function play_sound(id) {
	createjs.Sound.play(id);
}