			var radiostatic0 = new Audio("Sounds/car radio static.mp3");
			var radiostatic1 = new Audio("Sounds/car radio static 2.mp3");
			var A2doorClose = new Audio("Sounds/doorOpen.mp3");
			var A2doorOpen = new Audio("Sounds/doorClose.mp3");
			var A2noteSnatch = new Audio("Sounds/noteOnWallSnatch.mp3");
			var backgroundMusic = new Audio("Sounds/backgroundMusic.mp3");
			var theEndD2 = new Audio("Sounds/youDiedGunshot.mp3");
			var theEndD3 = new Audio("Sounds/youDied.mp3");
			var buttonPress1 = new Audio("Sounds/buttonPress1.mp3");
			var buttonPress2 = new Audio("Sounds/buttonPress2.mp3");
			var buttonDelete = new Audio("Sounds/buttonDelete.mp3");
			var buttonEnter = new Audio("Sounds/buttonEnter.mp3");
			var metalClose = new Audio("Sounds/doorCloseAndLock F.mp3");
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

			function youDiedMusicGas(){
			isPlaying ? theEndD3.pause() : theEndD3.play();
			};
			
			theEndD3.loop = false;
			
			theEndD3.onplaying = function() {
				isPlaying = true;
			};
	
			theEndD3.onpause = function() {
				isPlaying = false;
				
			};
			
			function mainMenuMusic(){
			isPlaying ? backgroundMusic.pause() : backgroundMusic.play();
			};
			
			backgroundMusic.loop = true;
			
			backgroundMusic.onplaying = function() {
				isPlaying = true;
			};
	
			backgroundMusic.onpause = function() {
				isPlaying = false;
			};
			
			function pressButton1(){
			isPlaying ? buttonPress1.pause() : buttonPress1.play();
			};
			
			buttonPress1.loop = false;
			
			buttonPress1.onplaying = function() {
				isPlaying = true;
			};
	
			buttonPress1.onpause = function() {
				isPlaying = false;
			};
			
			function pressButton2(){
			isPlaying ? buttonPress2.pause() : buttonPress2.play();
			};
			
			buttonPress2.loop = false;
			
			buttonPress2.onplaying = function() {
				isPlaying = true;
			};
	
			buttonPress2.onpause = function() {
				isPlaying = false;
			};
			
			function enterButton(){
			isPlaying ? buttonEnter.pause() : buttonEnter.play();
			};
			
			buttonEnter.loop = false;
			
			buttonEnter.onplaying = function() {
				isPlaying = true;
			};
	
			buttonEnter.onpause = function() {
				isPlaying = false;
			};

			function deleteButton(){
			isPlaying ? buttonDelete.pause() : buttonDelete.play();
			};
			
			buttonDelete.loop = false;
			
			buttonDelete.onplaying = function() {
				isPlaying = true;
			};
	
			buttonDelete.onpause = function() {
				isPlaying = false;
			};			
			
			
			function metalDoorCloseAndLock(){
			isPlaying ? metalClose.pause() : metalClose.play();
			};
			
			metalClose.loop = false;
			
			metalClose.onplaying = function() {
				isPlaying = true;
			};
	
			metalClose.onpause = function() {
				isPlaying = false;
			};	