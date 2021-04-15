			var radiostatic0 = new Audio("Sounds/car radio static.mp3");
			var radiostatic1 = new Audio("Sounds/car radio static 2.mp3");
			var A2doorClose = new Audio("Sounds/doorOpen.mp3");
			var A2doorOpen = new Audio("Sounds/doorClose.mp3");
			var A2noteSnatch = new Audio("Sounds/noteOnWallSnatch.mp3");
			var backgroundMusic = new Audio("Sounds/backgroundMusic.mp3");
			var theEndD2 = new Audio("Sounds/youDiedGunshot.mp3");
			var isPlaying = false;
		
			function toggleAudio0(){
			isPlaying ? radiostatic0.pause() : radiostatic0.play();
			};
			
			radiostatic0.loop = true;
			
			radiostatic0.onplaying = function() {
				isPlaying = true;
			};
	
			radiostatic0.onpause = function() {
				isPlaying = false;
			};
			
			function toggleAudio1(){
			isPlaying ? radiostatic1.pause() : radiostatic1.play();
			};
			
			radiostatic1.loop = true;
			
			radiostatic1.onplaying = function() {
				isPlaying = true;
			};
	
			radiostatic1.onpause = function() {
				isPlaying = false;
			};
			
			function doorOpenSound(){
			isPlaying ? A2doorClose.pause() : A2doorClose.play();
			};
			
			A2doorClose.loop = false;
			
			A2doorClose.onplaying = function() {
				isPlaying = true;
			};
	
			A2doorClose.onpause = function() {
				isPlaying = false;
			};
			
			function doorCloseSound(){
			isPlaying ? A2doorOpen.pause() : A2doorOpen.play();
			};
			
			A2doorOpen.loop = false;
			
			A2doorOpen.onplaying = function() {
				isPlaying = true;
			};
	
			A2doorOpen.onpause = function() {
				isPlaying = false;
			};
			
			function grabOuthouseNote(){
			isPlaying ? A2noteSnatch.pause() : A2noteSnatch.play();
			};
			
			A2noteSnatch.loop = false;
			
			A2noteSnatch.onplaying = function() {
				isPlaying = true;
			};
	
			A2noteSnatch.onpause = function() {
				isPlaying = false;
			};
			
			function grabWindshieldNote(){
			isPlaying ? A2noteSnatch.pause() : A2noteSnatch.play();
			};
			
			A2noteSnatch.loop = false;
			
			A2noteSnatch.onplaying = function() {
				isPlaying = true;
			};
	
			A2noteSnatch.onpause = function() {
				isPlaying = false;
			};
			
			function youDiedMusic(){
			isPlaying ? theEndD2.pause() : theEndD2.play();
			};
			
			theEndD2.loop = false;
			
			theEndD2.onplaying = function() {
				isPlaying = true;
			};
	
			theEndD2.onpause = function() {
				isPlaying = false;
				
			};
			
			function mainMenuMusic(){
			isPlaying ? backgroundMusic.pause() : backgroundMusic.play();
			};
			
			backgroundMusic.loop = false;
			
			backgroundMusic.onplaying = function() {
				isPlaying = true;
			};
	
			backgroundMusic.onpause = function() {
				isPlaying = false;
			};
			