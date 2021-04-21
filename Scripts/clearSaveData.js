function clearSaveGame(){
	var result = confirm("Starting a new game will erase any previously saved progress. Are you sure you would like to start a new game?");
	if (result) {
var url = localStorage.getItem("url",url);
localStorage.removeItem("url");

window.location.href="Detour BYP.html";
}
}