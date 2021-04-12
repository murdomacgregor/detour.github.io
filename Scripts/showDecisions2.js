			<p id="investigate"></p>
			function showDecisionA2() {
				var decision = "Leave the car and investigate";
				var result = decision.link("Detour Story A2.html");
				document.getElementById("investigate").innerHTML = result
				document.getElementById("investigate").style.cssFloat = "left"
			}
			
			<p id="sleepincar"></p>
			function showDecisionC1() {
				var decision = "Stay in the car and go to sleep";
				var result = decision.link("Detour Story C1.html");
				document.getElementById("sleepincar").innerHTML = result;
				document.getElementById("sleepincar").style.cssFloat = "right"
			}