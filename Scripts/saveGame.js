

function savedGame() {
var url=location.href;
localStorage.setItem("url",url);
}

function loadGame() {
	localStorage.getItem("url",url);
	window.location.href = url
}