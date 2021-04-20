

function saveGame() {
var url=location.href;
localStorage.setItem("url",url);
alert('Game saved. You can click "Continue" on the main menu to resume your playthrough from here.');
}

function loadGame() {
var url = localStorage.getItem("url",url);
	if (url !== null) {
		window.location.href = url;
	}
	
	else {
		alert('No save game data is available. Please begin a new journey by clicking "New Game"');
	}
}