
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
				var decision = "Run back to the car";
				var result = decision.link("Detour Story A6.html");
				document.getElementById("goBackToCar").innerHTML = result;
				document.getElementById("goBackToCar").style.cssFloat = "right"
			}
			
			function showDecisionA7() {
				var decision = "Follow the blood trail";
				var result = decision.link("Detour Story A7.html");
				document.getElementById("followBloodTrail").innerHTML = result
				document.getElementById("followBloodTrail").style.cssFloat = "right"
			}
			
			function showDecisionA9() {
				var decision = "Follow the footsteps";
				var result = decision.link("Detour Story A9.html");
				document.getElementById("followFootsteps").innerHTML = result;
				document.getElementById("followFootsteps").style.cssFloat = "left"
			}