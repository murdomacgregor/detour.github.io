
			function showDecisionA1() {
				var decision = "Pull over and sleep";
				var result = decision.link("Detour Story A1.html");
				document.getElementById("pullover").innerHTML = result
				document.getElementById("pullover").style.cssFloat = "left";
			}
		
			function showDecisionB1() {
				var decision = "Keep driving";
				var result = decision.link("Detour Story B1.html");
				document.getElementById("keepdriving").innerHTML = result;
				document.getElementById("keepdriving").style.cssFloat = "right";
			}

			function showDecisionA2() {
				var decision = "Leave the car and investigate";
				var result = decision.link("Detour Story A2.html");
				document.getElementById("investigate").innerHTML = result
				document.getElementById("investigate").style.cssFloat = "left"
			}
			
			function showDecisionC1() {
				var decision = "Stay in the car and go to sleep";
				var result = decision.link("Detour Story C1.html");
				document.getElementById("sleepincar").innerHTML = result;
				document.getElementById("sleepincar").style.cssFloat = "right"
			}
			
			function showDecisionA3() {
				var decision = "Put note in your pocket";
				var result = decision.link("Detour Story A3.html");
				document.getElementById("keepNote").innerHTML = result
				document.getElementById("keepNote").style.cssFloat = "left"
			}
			
			function showDecisionA4() {
				var decision = "Leave note in the outhouse";
				var result = decision.link("Detour Story A4.html");
				document.getElementById("dropNote").innerHTML = result;
				document.getElementById("dropNote").style.cssFloat = "right"
			}
			
			function showDecisionA5() {
				var decision = "Inspect the blood";
				var result = decision.link("Detour Story A5.html");
				document.getElementById("inspectBlood").innerHTML = result
				document.getElementById("inspectBlood").style.cssFloat = "left"
			}
			
			function showDecisionA6() {
				var decision = "Go back to the car";
				var result = decision.link("Detour Story A6.html");
				document.getElementById("goBackToCar").innerHTML = result;
				document.getElementById("goBackToCar").style.css.margin ="0 auto";
			}
			
			function showDecisionA7() {
				var decision = "Follow the blood trail";
				var result = decision.link("Detour Story A9.html");
				document.getElementById("followBloodTrail").innerHTML = result
				document.getElementById("followBloodTrail").style.cssFloat = "right"
			}
			
			function showDecisionA9() {
				var decision = "Follow the footsteps";
				var result = decision.link("Detour Story A7.html");
				document.getElementById("followFootsteps").innerHTML = result;
				document.getElementById("followFootsteps").style.cssFloat = "left"
			}

			function showDecisionA6Nope() {
				var decision = "Nope. Back to the car.";
				var result = decision.link("Detour Story A6.html");
				document.getElementById("goBackToCarA6Nope").innerHTML = result;
				document.getElementById("goBackToCarA6Nope").style.margin = "0 auto";
			}

			function showDecisionBackToOuthouseBeforeNote() {
				var decision = "Turn back to the outhouse";
				var result = decision.link("Detour Story A2.html");
				document.getElementById("turnBackToOuthouseBeforeNote").innerHTML = result;
				document.getElementById("turnBackToOuthouseBeforeNote").style.cssFloat = "right";
			}

			function showDecisionBackToOuthouseNoNote() {
				var decision = "Turn back to the outhouse";
				var result = decision.link("Detour Story A3.html");
				document.getElementById("turnBackToOuthouseNoNote").innerHTML = result;
				document.getElementById("turnBackToOuthouseNoNote").style.cssFloat = "right";
			}
			
			function showDecisionBackToOuthouseNote() {
				var decision = "Turn back to the outhouse";
				var result = decision.link("Detour Story A4.html");
				document.getElementById("turnBackToOuthouseNote").innerHTML = result;
				document.getElementById("turnBackToOuthouseNote").style.cssFloat = "right";
			}
			
			function showDecisionD2() {
				var decision = "Check out your car";
				var result = decision.link("Detour Story D2.html");
				document.getElementById("checkOutYourCar").innerHTML = result;
				document.getElementById("checkOutYourCar").style.cssFloat = "left";
			}
			
			
			function showDecisionA65() {
				var decision = "Go back to the car";
				var result = decision.link("Detour Story A65.html");
				document.getElementById("goBackToCarA65").innerHTML = result;
				document.getElementById("goBackToCarA65").style.margin = "0 auto";
			}
			
			function showDecisionA65R() {
				var decision = "Go back to the car";
				var result = decision.link("Detour Story A65.html");
				document.getElementById("goBackToCarA65Right").innerHTML = result;
				document.getElementById("goBackToCarA65Right").style.cssFloat = "right";
			}
			
			function showDecisionA66() {
				var decision = "Go back to the car";
				var result = decision.link("Detour Story A66.html");
				document.getElementById("goBackToCarA66").innerHTML = result;
				document.getElementById("goBackToCarA66").style.cssFloat = "right";
			}
			
			function youDied() {
				var decision = "Start over?";
				var result = decision.link("index.html");
				document.getElementById("startOver").innerHTML = result;
				document.getElementById("startOver").style.margin = "0 auto";
			}
			
			function showDecisionFollowFish() {
				var decision = "Follow the Fish";
				var result = decision.link("Detour Story A12F.html");
				document.getElementById("followFish").innerHTML = result;
				document.getElementById("followFish").style.cssFloat = "left";
			}

			
			function showDecisionFollowSnake() {
				var decision = "Follow the Snake";
				var result = decision.link("Detour Story A12S.html");
				document.getElementById("followSnake").innerHTML = result;
				document.getElementById("followSnake").style.cssFloat = "right";
			}
			
			function showDecisionFollowCrow() {
				var decision = "Follow the Crow";
				var result = decision.link("Detour Story A12C.html");
				document.getElementById("followCrow").innerHTML = result;
				document.getElementById("followCrow").style.margin = "0 auto";
			}
			
			function showDecisionEnterCrowTemple() {
				var decision = "Enter Crow Temple";
				var result = decision.link("Detour Story A13C.html");
				document.getElementById("enterCrowTemple").innerHTML = result;
				document.getElementById("enterCrowTemple").style.margin = "0 auto";
			}
			