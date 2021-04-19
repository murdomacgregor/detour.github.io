document.getElementById("result").innerHTML = localStorage.getItem("possessNote");

if result == "yes" {
	document.getElementById("p5").innerHTML = "You check the note you found in the outhouse. It has the numbers "501" written in what seems like blood. Maybe this could be the code for the keypad?";
else {
	document.getElementById("p5").innerHTML = "You don't have the first note with you. Was there a number on the note? Maybe that number is the number needed for this keypad... You will have to guess.";
}