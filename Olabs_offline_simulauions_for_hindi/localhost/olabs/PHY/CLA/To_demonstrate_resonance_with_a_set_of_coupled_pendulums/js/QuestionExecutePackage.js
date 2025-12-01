// Created date : 26-09-2022.
// Office       : CREATE OLabs.
// Created At   : OLabs Research Center.
// ===========================
//    DO NOT EDIT THE CODE
// ===========================
// Have any error/issue while usnig this file Pls contact OLabs team.


var totalScore = 0;
function QuizCoreExecuter(questionNo, question, op1, op2, op3, op4, answer, score, totalQuestion) {
	removeTrip()
	var questionStatus = 0;
	//============ CREATING THE LAYOUT ==========
	$('.questionLayout').css({ 'display': 'block' });
	var $divOne = $('<div></div>').attr({ class: "questionLayout", id: "questionNumber" + questionNo });
	$("#mainDiv").append($divOne);
	var $divTwo = $('<div></div>').attr({ class: "questionNumber" });
	$("#questionNumber" + questionNo).append($divTwo);
	var $divThree = $('<span></span>').attr({ class: "questionNumberTestDesign" });
	$(".questionNumber").append($divThree);
	$(".questionNumberTestDesign").text("Level " + questionNo + "/" + totalQuestion);
	//span 2 of question number
	var $divFour = $('<span></span>').attr({ class: "questionNumberScoreDesign" });
	$(".questionNumber").append($divFour);
	$(".questionNumberScoreDesign").text("Score " + totalScore + "/" + totalQuestion);
	//display question
	var $divFive = $('<div></div>').attr({ class: "questionText" });
	$("#questionNumber" + questionNo).append($divFive);
	var $divsix = $('<span></span>').attr({ class: "questionTextAlignment" });
	$(".questionText").append($divsix);
	$(".questionTextAlignment").text(question);
	var random = [];
	//============ ARRAY PUSHING ~> QUESTION 1 ==========
	if (op1 != "null") { random.push(op1); }
	//============ ARRAY PUSHING ~> QUESTION 2 ==========
	if (op2 != "null") { random.push(op2); }
	//============ ARRAY PUSHING ~> QUESTION 3 ==========
	if (op3 != "null") { random.push(op3); }
	//============ ARRAY PUSHING ~> QUESTION 4 ==========
	if (op4 != "null") { random.push(op4); }
	
	//============ QUESTION RANDOM CREATER ==========
	// random.sort(function (){
	// 	return 0.5 - Math.random();
	// });
	var temp = "";
	//============ QUESTION 1 OPTION CREATER ==========
	if (random[0]) {
		var $divSeven = $('<div></div>').attr({ class: "OptionOne", id: "choice" + questionNo + "1" });
		$("#questionNumber" + questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({ class: 'optionTestDesign', id: questionNo + "choice1" });
		$("#choice" + questionNo + "1").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({ class: 'optionNo' });
		$("#" + questionNo + "choice1").append($t2);
		$("#" + questionNo + "choice1").text("1. ");
		// inner 3
		var $t3 = $('<span></span>').attr({ class: questionNo + "quesOption1" });
		$("#" + questionNo + "choice1").append($t3);
		$("." + questionNo + "quesOption1").text(random[0]);
	}
	//============ QUESTION 2 OPTION CREATER ==========
	if (random[1]) {
		var $divSeven = $('<div></div>').attr({ class: "OptionTwo", id: "choice" + questionNo + "2" });
		$("#questionNumber" + questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({ class: 'optionTestDesign', id: questionNo + "choice2" });
		$("#choice" + questionNo + "2").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({ class: 'optionNo' });
		$("#" + questionNo + "choice2").append($t2);
		$("#" + questionNo + "choice2").text("2. ");
		// inner 3
		var $t3 = $('<span></span>').attr({ class: questionNo + "quesOption2" });
		$("#" + questionNo + "choice2").append($t3);
		$("." + questionNo + "quesOption2").text(random[1]);
	}
	//============ QUESTION 3 OPTION CREATER ==========
	if (random[2]) {
		var $divSeven = $('<div></div>').attr({ class: "OptionThree", id: "choice" + questionNo + "3" });
		$("#questionNumber" + questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({ class: 'optionTestDesign', id: questionNo + "choice3" });
		$("#choice" + questionNo + "3").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({ class: 'optionNo' });
		$("#" + questionNo + "choice3").append($t2);
		$("#" + questionNo + "choice3").text("3. ");
		// inner 3
		var $t3 = $('<span></span>').attr({ class: questionNo + "quesOption3" });
		$("#" + questionNo + "choice3").append($t3);
		$("." + questionNo + "quesOption3").text(random[2]);
	}
	//============ QUESTION 4 OPTION CREATER ==========
	if (random[3]) {
		var $divSeven = $('<div></div>').attr({ class: "OptionFour", id: "choice" + questionNo + "4" });
		$("#questionNumber" + questionNo).append($divSeven);
		// inner 1
		var $t1 = $('<span></span>').attr({ class: 'optionTestDesign', id: questionNo + "choice4" });
		$("#choice" + questionNo + "4").append($t1);
		// inner 2
		var $t2 = $('<span></span>').attr({ class: 'optionNo' });
		$("#" + questionNo + "choice4").append($t2);
		$("#" + questionNo + "choice4").text("4. ");
		// inner 3
		var $t3 = $('<span></span>').attr({ class: questionNo + "quesOption4" });
		$("#" + questionNo + "choice4").append($t3);
		$("." + questionNo + "quesOption4").text(random[3]);
	}
	//============ QUESTION 1 HANDLER ==========
	$("#choice" + questionNo + "1").click(function () {
		var answerData = $("." + questionNo + "quesOption1").html();
		//============ QUESTION 1 MATCH WITH ANSWER ==========
		if (answerData == answer) {
			if (questionStatus == 0) {
				totalScore++;
				$(".questionNumberScoreDesign").text("Score " + totalScore + "/" + totalQuestion);
			}
			$("#choice" + questionNo + "2").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "3").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "4").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "1").css({ 'background-color': '#02f80259' })
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' })
			// paperStyleAnimate()
			setTimeout(function () {
				
				$("#confetti-canvas").css({ 'display': 'none' });

				help=99;
				inferencerepeate=1;
				removeTrip();
				$("#InferenceButton").css('pointer-events', 'auto');

				setTimeout(function () {
					$("#confetti-canvas").remove();
					$("#questionNumber" + questionNo).remove();
				}, 2000);
			}, 4000);
		}
		//============ QUESTION 1 NOT MATCH WITH ANSWER ==========
		else {
			$("#choice" + questionNo + "1").css({ 'background-color': '#f443367d' });
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' })
			questionStatus = 1;
		}
	});
	//============ QUESTION 2 HANDLER ==========
	$("#choice" + questionNo + "2").click(function () {
		var answerData = $("." + questionNo + "quesOption2").html();
		//============ QUESTION 2 MATCH WITH ANSWER ==========
		if (answerData == answer) {
			if (questionStatus == 0) {
				totalScore++;
				$(".questionNumberScoreDesign").text("Score " + totalScore + "/" + totalQuestion);
			}
			$("#choice" + questionNo + "1").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "3").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "4").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "2").css({ 'background-color': '#02f80259' })
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' })
			// paperStyleAnimate()
			setTimeout(function () {
				
				$("#confetti-canvas").css({ 'display': 'none' });

				setTimeout(function () {
					$("#questionNumber" + questionNo).remove();
				}, 2000);

				setTimeout(() => {

					QuizCoreExecuter(3,"Two simple pendulums are tied to a common thread.The length of the first simple pendulum is 15 cm.After pulling the first pendulum, the second simple pendulum oscillates with a much lesser amplitude than the first when the first one oscillates. Which of the following describes the second simple pendulum's length?", "6 cm", "15 cm", "", "", "6 cm", 1, 3)

				}, 500);
			}, 4000);
			
		}
		//============ QUESTION 2 NOT MATCH WITH ANSWER ==========
		else {
			$("#choice" + questionNo + "2").css({ 'background-color': '#f443367d' });
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' });
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' });
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' });
			questionStatus = 1;

		}
	});
	//============ QUESTION 3 HANDLER ==========
	$("#choice" + questionNo + "3").click(function () {
		var answerData = $("." + questionNo + "quesOption3").html();
		//============ QUESTION 3 MATCH WITH ANSWER ==========
		if (answerData == answer) {
			if (questionStatus == 0) {
				totalScore++;
				$(".questionNumberScoreDesign").text("Score " + totalScore + "/" + totalQuestion);
			}
			$("#choice" + questionNo + "1").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "2").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "4").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "3").css({ 'background-color': '#02f80259' })
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' })
			// paperStyleAnimate()
			setTimeout(function () {
				$("#confetti-canvas").css({ 'display': 'none' });

				setTimeout(function () {
					$("#questionNumber" + questionNo).remove();
				}, 2000);
				setTimeout(() => {
					QuizCoreExecuter(2, "What is the reason for higher amplitude of the simple pendulum C?", "Natural frequency of heavier pendulum and Simple pendulum C is not same", "Natural frequency of heavier pendulum and Simple pendulum C is same", "", "", "Natural frequency of heavier pendulum and Simple pendulum C is same", 2, 3)
				}, 600);

			}, 4000);
		}
		//============ QUESTION 3 NOT MATCH WITH ANSWER ==========
		else {
			$("#choice" + questionNo + "3").css({ 'background-color': '#f443367d' });
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "4").css({ 'background-color': '#35aad303' })
			questionStatus = 1;
		}
	});
	//============ QUESTION 4 HANDLER ==========
	$("#choice" + questionNo + "4").click(function () {
		var answerData = $("." + questionNo + "quesOption4").html();
		//============ QUESTION 4 MATCH WITH ANSWER ==========
		if (answerData == answer) {
			if (questionStatus == 0) {
				totalScore++;
				$(".questionNumberScoreDesign").text("Score " + totalScore + "/" + totalQuestion);
			}
			$("#choice" + questionNo + "1").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "2").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "3").css({ 'pointer-events': 'none' });
			$("#choice" + questionNo + "4").css({ 'background-color': '#02f80259' })
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' })
			// paperStyleAnimate()
			setTimeout(function () {
			
				$("#confetti-canvas").css({ 'display': 'none' });

				setTimeout(function () {
					$("#questionNumber" + questionNo).remove();
				}, 2000);
			}, 4000);
		}
		//============ QUESTION 4 NOT MATCH WITH ANSWER ==========
		else {
			$("#choice" + questionNo + "4").css({ 'background-color': '#f443367d' });
			$("#choice" + questionNo + "1").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "2").css({ 'background-color': '#35aad303' })
			$("#choice" + questionNo + "3").css({ 'background-color': '#35aad303' })
			questionStatus = 1;
		}
	});
}
function paperStyleAnimate() {
	var maxParticleCount = 200; //set max confetti count
	var particleSpeed = 2; //set the particle animation speed
	var startConfetti; //call to start confetti animation
	var stopConfetti; //call to stop adding confetti
	var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
	var removeConfetti; //call to stop the confetti animation and remove all confetti immediately


	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	startConfettiInner();

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {

		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function () {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			// document.body.appendChild(canvas);
			$("#mainDiv").append(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function () {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
		maxParticleCount = 0;
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
}