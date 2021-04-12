
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