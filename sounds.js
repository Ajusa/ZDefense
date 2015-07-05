var currentMusic;
function loadRandomMusic(){
	song = randomNumber(1,5);  //Gets a random song number, since they are named things like 1.mp3
	song = toString(song); //Makes it a string so we can load it in correctly
	currentMusic = new Audio("music/"+song+".mp3");
	currentMusic.play(); //Rock out brah!
}