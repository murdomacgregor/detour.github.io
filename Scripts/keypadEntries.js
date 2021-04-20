var keypadAnswer = 0

function keypadZero(){
	keypadAnswer = 50;
}

function keypadOne(){
	keypadAnswer = 501;
}

function keypadTwo(){
	keypadAnswer = 0;
}

function keypadThree(){
	keypadAnswer = 0;
}

function keypadFour(){
	keypadAnswer = 0;
}

function keypadFive(){
	keypadAnswer = 5;
}

function keypadSix(){
	keypadAnswer = 0;
}

function keypadSeven(){
	keypadAnswer = 0;
}

function keypadEight(){
	keypadAnswer = 0;
}

function keypadNine(){
	keypadAnswer = 0;
}

function keypadDelete(){
	keypadAnswer = 0;
}

function checkAnswer(){
		if (keypadAnswer == 501) {
		window.location.href = "Detour Story A15C.html";
		}
		
		else {
			window.location.href = "Detour Story D3.html";
		}
	}
