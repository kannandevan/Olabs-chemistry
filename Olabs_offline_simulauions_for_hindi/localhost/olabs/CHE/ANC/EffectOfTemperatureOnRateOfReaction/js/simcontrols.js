var displayArray, gt, c, ctx, helpMsg = new Array();
var helprarrConc, inferenceMsg, waterAnim, waterAnim2, count = 0;
var showArr = 0, showArrTemp, S = 132;
var count = 0, flag = 1;
var methodselector = 'conc', fireAnim, bubbleAnim, showInfer = 0;
var turns = 1;
var int = null;
var flagVariable1 = 0, flagVariable2 = 0;
var mes=1

var originalState;

var imageArrayWater =
	["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10002.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10004.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10006.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10008.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10010.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10012.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10013.png"

	]
var imageArrayWater2 =
	["../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10001.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10002.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10003.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10004.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10005.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10006.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10007.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10008.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10009.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10010.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10011.png", "../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10012.png",
		"../CHE/ANC/EffectOfTemperatureOnRateOfReaction/images/water/Untitled-10013.png"

	]

window.onload = function () {
	gt = new Gettext({ 'domain': 'messages' });
	document.getElementById("expName").innerHTML = gt.gettext("Effect of Temperature on Rate of Reaction");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));


	$(document).ready(function () {
		displayArray = ['block', 'none'];
		helprarrConc = [
			////
			///conc help
			//0=22 23 0-12
			gt.gettext("Select the method"),
			gt.gettext("Click on the cap to open th HCl bottle"),
			gt.gettext("Drag and drop<br>the bottle towards<br>the burette"),
			gt.gettext("Choose the correct answer"),
			gt.gettext("Click on the cap<br>to open the<br>Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub><br>bottle"),
			gt.gettext("Drag and drop<br>the bottle<br>towards the<br>measuring cylinder"),
			gt.gettext("Choose the correct answer"),
			gt.gettext("Drag and drop the measuring<br>cylinder towards the conical flask"),
			gt.gettext("Drag and drop the<br>conical flask towards<br>the laboratory stand"),
			gt.gettext("Click on the stopcock<br>of the burette<br>to pour the solution"),
			gt.gettext("Click on the stopcock<br>of the burette<br> again to stop"),
			gt.gettext("Click on the stopwatch<br>to start the timer"),
			gt.gettext("Drag and drop the conical flask<br>towards the canvas to shake it"),

			//13-22
			gt.gettext("Click on the stopcock<br>of the burette<br>to pour the solution again"),
			gt.gettext("Click on the stopcock<br>of the burette<br> again to stop"),
			gt.gettext("Drag and drop the conical flask towards the tile"),
			gt.gettext("Click on the stopwatch<br>to stop the timer<br>when the 'X' mark disappear"),
			gt.gettext("Click on the next button to redo<br>the experiment with next concentration"),
			gt.gettext("Click on the next button to show graph"),
			gt.gettext("Click on the show the graph "),
			gt.gettext("Click to plot the values"),
			gt.gettext("Click on the  inference button<br>to view the observation"),
			gt.gettext("Click on the reset button to redo the experiment"),


		]


		//temp help
		///25 0-22
		helprarrTemp = [
			///5 0-4
			// showArr 23
			gt.gettext("Click on the cap to<br>open the Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub><br>bottle"),
			gt.gettext("Drag and drop<br>the bottle<br>towards the<br>measuring cylinder"),
			gt.gettext("Drag and drop the measuring<br>cylinder towards the conical flask"),
			gt.gettext("Choose the correct answer"),
			gt.gettext("Drag and drop the<br>thermometer towards<br>the conical flask"),
			//////////
			////1st type 11
			/// 5-17 28-39

			gt.gettext("Click on the thermometer<br>to remove it"),
			gt.gettext("Drag and drop the<br>conical flask towards<br>the laboratory stand"),
			gt.gettext("Choose the correct answer"),
			gt.gettext("Click on the stopcock<br>of the burette<br> to pour the solution"),
			gt.gettext("Click on the stopcock<br>of the burette<br> again to stop"),
			gt.gettext("Click on the stopwatch<br>to start the timer"),
			gt.gettext("Drag and drop the conical flask<br>towards the canvas to shake it"),
			gt.gettext("Click on the stopcock<br>of the burette<br> to pour the solution again"),
			gt.gettext("Click on the stopcock<br>of the burette<br> again to stop"),
			gt.gettext("Drag and drop the conical flask towards the tile"),
			gt.gettext("Click on the stopwatch<br>to stop the timer<br>when the 'X' mark disappear"),
			gt.gettext("Click on the next button to redo<br>the experiment with next temperature"),
			gt.gettext("Click on the next button to show graph"),

			// 2nd type 5
			//18-24,  40-47
			gt.gettext("Drag and drop the<br>conical flask on<br>to the tripod stand"),
			gt.gettext("Click on the burner to turn On"),
			gt.gettext("Click on the burner to turn Off"),
			gt.gettext("Click on the show the graph "),
			gt.gettext("Click to plot the values"),
			gt.gettext("Click on the inference button<br>to view the observation"),
			gt.gettext("Click on the reset button to redo the experiment"),


		]

		inferenceMsg = [
			gt.gettext("The rate of a reaction decreases with the<br>passage of time as the concentration<br>of reactants decreases"),
			gt.gettext("The rate of reaction<br>increases with increase<br>in temperature ")


		]
		console.log()
		$('#instruction').html(gt.gettext("Instructions: "));
		$('#instruction1').html(gt.gettext("<br><br>1. Click on the check box to show/hide the circuit diagram<br><br>2. Click on the bottle cap<br><br>3. Drag and drop the spatula towards the bottle<br><br>4. Drag and drop the spatula towards the beaker<br><br>5. Click on the beaker<br><br>6. Drag and drop the first copper wire towards the beaker<br><br>7. Drag and drop the second copper wire towards the beaker <br><br>8. Connect the end of the copper wire towards the positive terminal of the battery<br><br>9. Connect the end of the copper wire towards the switch<br><br>10.Connect the negative terminal of the battery towards the switch<br><br>11. Drag and drop the key towards the switch<br><br>12. Drag and drop the key<br>outside the switch"))
		$("#graphVerticalLineTemp").animate({ height: 88 + "%" }, 400);
		$("#graphHorizontalTemp").show("blind", { direction: "right" }, 500);
		$("#showGraph,#showGraphTemp,#plotGraph,#plotGraphTemp").prop('disabled', true);
		$("#stopTxt").css({ "display": "block" });
		$("#methodselector").css({ "cursor": "pointer" })

		$("#methodselector").click(function () {
			$("#methodselector").css({ "cursor": "default" })

			removeTrip();
			if (methodselector == 'conc') {
				showArr = 1;
			}
			else if (methodselector == 'temper') {
				showArr = 23;
			}
		}
		)
		$("#methodselector").change(function () {
			methodselector = $(this).val();
			if (methodselector == 'conc') {
				removeTrip();
				$("#effectOfConc,#tableConc,#graphControl").css({ "display": "block" })
				$("#effectOfTemp,#tableTemp,#graphControlTemp").css({ "display": "none" })
			}
			else if (methodselector == 'temper') {
				removeTrip();
				$("#effectOfConc,#tableConc,#graphControl,#graphPaperTemp").css({ "display": "none" })
				$("#effectOfTemp,#tableTemp,#graphControlTemp").css({ "display": "block" })
				roomTemp();
			}
		})

		originalState = $("#effectOfConc").html();
		core();
	})
}
function core() {


	if (turns == 1) {
		$("#concVal").html("0.5")
		$("#concVal2").html("0.5")
		$(".concValTot").html("1")
	}
	// ###############################effect of conc###################################################
	//open the bottle

	$("#glassStopHcl").css({ "cursor": "pointer" })
	$("#glassStopHcl").click(function () {
		$("#alertMsg2").fadeOut()

		$("#methodselector").prop('disabled', true);
		showArr = 2;
		$("#glassStopHcl").css({ "pointer-events": "none" });
		$("#glassStopHcl").animate({ top: 29 + "%" }, function () {
			$("#glassStopHcl").animate({ left: 81 + "%" }, function () {
				$("#glassStopHcl").animate({ top: 78 + "%" })
			})
		})
		$("#glassStopHcl").css({ "pointer-events": "none" })
		$("#bottleComHcl").css({ "cursor": "pointer" })
		$("#bottleComHcl").draggable({
			containment: "#canvasBox",
			revert: "invalid",
			tolerance: "touch",
			drag: function () {
				removeTrip();
			}
		})
		$("#buretteDrop").droppable({
			accept: "#bottleComHcl",
			drop: function () {
				$("#bottleComHcl").css({ left: 26 + "%", top: 6 + "%" })
				setTimeout(function () {
					showArr = 3;
					if (flagVariable1 == 0) {
						flagVariable1 = 1;
						QuizCoreExecuter(1, "Is HCl a gas or liquid", "Gas", "Solid", "Liquid", "All of these", "Gas", 1, 2)
					}
					else {
						showArr = 4;
					}
				}, 5000);
				setTimeout(function () {
					$('#bottleComHcl').animate(
						{ deg: -70 },
						{
							duration: 1000,
							step: function (now) {

								$(this).css({ transform: 'rotate(' + now + 'deg)' })
								$("#bottleBendWaterHcl").css({ "display": "block" });
								$("#bottleWaterHcl").css({ "display": "none" });
								setTimeout(function () {
									$("#waterpouring").show();
									$("#waterpouring").animate({ 'height': '40%' }, 1000)
									$("#buretteWatClose").fadeIn(1000, function () {
										$("#waterpouring").css({ "display": "none" });

									});
								}, 1000)
								setTimeout(function () {
									$('#bottleComHcl').animate(
										{ deg: 0 },
										{
											duration: 1000,
											step: function (now) {
												// showArr = 48;
												// showArr = 4;

												$(this).css({ transform: 'rotate(' + now + 'deg)' })
												$("#bottleBendWaterHcl").css({ "display": "none" });
												$("#bottleWaterHcl").css({ "display": "block" });
												$("#bottleComHcl").animate({ left: 70 + "%", top: 45 + "%" }, function () {
													$("#glassStopHcl").animate({ left: 72.8 + "%", top: 33.2 + "%" })
													$("#bottleComHcl").draggable("disable")

												})
											}

										})


									$("#bottleComNa,#glassStopNa").css({ "cursor": "pointer" })
									$("#bottleComHcl,#glassStopHcl").css({ "cursor": "default" })
									$("#glassStopNa").css({ "pointer-events": "auto" })

								}, 2000)
							}
						})
				}, 1000)


				ImageInitLoad(imageArrayWater, "waterAnimation", "test1", "newWaterAnimation")

				HClConcDrop();
				showArr = 4;

			}
		})

	});
	// }
	//////////////////////////////////////////////////////////////////////////////////////////
}

function HClConcDrop() {

	$("#glassStopNa").click(function () {
		showArr = 5;
		removeTrip();
		$("#glassStopNa").css({ "pointer-events": "none" });
		$("#glassStopNa").animate({ top: 29 + "%" }, function () {
			$("#glassStopNa").animate({ left: 81 + "%" }, function () {
				$("#glassStopNa").animate({ top: 78 + "%" })
				$("#glassStopHcl").css({ "pointer-events": "none" })
			})
		})
		$("#bottleComNa").draggable({
			containment: "#canvasBox",
			revert: "invalid",
			tolerance: "touch",
			drag: function () {
				removeTrip();


			}
		})
		$("#measCylDrop").droppable({
			accept: "#bottleComNa",
			drop: function () {
				$("#bottleComNa").css({ left: 66 + "%", top: 9 + "%" })
				showArr = 7;

				setTimeout(function () {
					$('#bottleComNa').animate(
						{ deg: -80 },
						{
							duration: 1000,
							step: function (now) {
								$(this).css({ transform: 'rotate(' + now + 'deg)' })
								$("#bottleBendWaterNa").css({ "display": "block" });
								$("#bottleWaterNa").css({ "display": "none" });

								setTimeout(function () {
									$("#waterpouringNa").show();
									$("#waterpouringNa").animate({ 'height': '40%' }, 1000)
									$("#cylWaterConc").fadeIn(1000, function () {
										$("#waterpouringNa").css({ "display": "none" });
									});
								}, 600)
							}
						})
				}, 1000)

				setTimeout(function () {
					$('#bottleComNa').animate(
						{ deg: 0 },
						{
							duration: 1000,
							step: function (now) {
								$(this).css({ transform: 'rotate(' + now + 'deg)' })
								$("#bottleBendWaterNa").css({ "display": "none" });
								$("#bottleWaterNa").css({ "display": "block" });
								$("#bottleComNa").animate({ left: 85 + "%", top: 45 + "%" }, function () {
									$("#glassStopNa").animate({ left: 87.3 + "%", top: 33.2 + "%" })

								})
								$("#bottleComNa").draggable("disable")
								$("#bottleComNa,#glassStopNa,#bottleWaterNa").css({ "cursor": "default" })
								$("#glassStopNa").css({ "pointer-events": "none" })
								$("#measCylConc").css({ "cursor": "pointer" })

							}
						})
				}, 3000)
				setTimeout(function () {
					showArr = 6;
					if (flagVariable2 == 0) {
						flagVariable2 = 1;
						QuizCoreExecuter(2, "Na₂S₂O₃ is a ", "Strong base", "Strong acid", "Weak acid", "Weak base", "Weak base", 1, 2)
					}
					else {
						showArr = 7;
					}
				}, 5000);
				$("#measCylConc").draggable({
					containment: "#canvasBox",
					revert: "invalid",
					tolerance: "touch",
					drag: function () {
						removeTrip();

					}
				})
				$("#conFlaskDrop").droppable({
					accept: "#measCylConc",
					drop: function () {
						showArr = 8;

						$("#measCylConc").css({ left: 52.4 + "%", top: 11 + "%" })
						setTimeout(function () {
							$('#measCylConc').animate(
								{ deg: -88 },
								{
									duration: 1000,
									step: function (now) {

										$(this).css({ transform: 'rotate(' + now + 'deg)' })
										$("#coniConc").css({ "cursor": "pointer" })
									}
								})
						}, 1000)
						setTimeout(function () {
							$("#cylWaterConc").css({ "display": "none" });
							$("#cylWaterBendConc").css({ "display": "block" });
							$("#waterpouringCon").show();
							$("#waterpouringCon").animate({ 'height': '109%' }, 1000, function () {
								$('#measCylConc').animate(
									{ deg: 0 },
									{
										duration: 1000,
										step: function (now) {

											$(this).css({ transform: 'rotate(' + now + 'deg)' })
											$("#cylWaterBendConc").css({ "display": "none" });
											setTimeout(function () {
												$("#measCylConc").css({ left: 58 + "%", top: 24 + "%" })
												$('#measCylConc').draggable('disable')
												$("#measCylConc").css({ "cursor": "default" })
											}, 1000)
											$("#coniConc").draggable({
												containment: "#canvasBox",
												revert: "invalid",
												tolerance: "touch",
												drag: function () {
													removeTrip();
												}
											})
											$("#buretteDownDrop").droppable({
												accept: "#coniConc",
												drop: function () {
													showArr = 9;

													$("#coniConc").css({ "cursor": "default" })

													$("#coniConc").css({ left: 15.4 + "%", top: 61 + "%", width: + 12 + "%", height: + 26 + "%" })
													$("#coniWaterConc").css({ left: 6 + "%", height: 34 + "%", top: + 43 + "%", width: + 89 + "%" })
													$("#conicalFlaskConc").css({ height: 75 + "%", width: 93 + "%" })
													$("#measCylDrop,#buretteDrop").css({ "display": "none" });
													$("#buretteTap").css({ "pointer-events": "auto", "cursor": "pointer" })
													$("#stopWatchOff").css({ "display": "block" });
													$("#buretteDownDrop").css({ "display": "none" });
													$("#coniConc").draggable("disable")
													$("#alertMsg").css({ display: 'block' });
													$("#buretteTap").click(function () {
														showArr = 10;
														removeTrip();
														waterAnim = ImageAnimationINFinity("newWaterAnimation", "test1", imageArrayWater, 100)
														
														
														if (mes == 1) {
															$("#buretteWatClose").animate({
																height: "29%",
																top: "24%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
															//alert("buretteTapOpen1")
															$("#coniWaterConc").animate({
																height: "39%",
																top: "40%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
														}
														if (mes == 2) {
															$("#buretteWatClose").animate({
																height: "29%",
																top: "24%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
															//alert("buretteTapOpen2")
															$("#coniWaterConc").animate({
																height: "39%",
																top: "40%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
														}
														else if (mes == 3) {
															$("#buretteWatClose").animate({
																height: "29%",
																top: "24%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
															//alert("buretteTapOpen3")
															$("#coniWaterConc").animate({
																height: "39%",
																top: "40%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
														} else if (mes == 4) {
															$("#buretteWatClose").animate({
																height: "29%",
																top: "24%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
															//alert("buretteTapOpen4")
															$("#coniWaterConc").animate({
																height: "39%",
																top: "40%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
														}else if (mes == 5) {
															$("#buretteWatClose").animate({
																height: "29%",
																top: "24%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
															//alert("buretteTapOpen5")
															$("#coniWaterConc").animate({
																height: "39%",
																top: "40%"
															}, {
																duration: 2000, // Adjust as needed in milliseconds
																easing: "swing" // Or choose another easing function
															});
														}


														$("#buretteClose").css({ "display": "none" });
														$("#buretteTapClose").css({ "cursor": "pointer" })
														$("#buretteTapClose").css({ "display": "block" });
														$("#buretteTapClose").click(function () {
															showArr = 11;
															removeTrip();
															$("#alertMsg").css({ display: 'none' });
															clearAnimation(waterAnim, "waterAnimation")
															$("#buretteClose").css({ "display": "block" });
															$("#buretteTapClose").css({ "cursor": "default" })
															$("#conFlaskDrop").css({ "display": "none" });
															$("#stopWatchOff").css({ "cursor": "pointer" })
															$("#stopWatchOff").click(function () {
																showArr = 12;
																removeTrip();
																
																$("#stopWatchOff").css({ "pointer-events": "none" });
																$(".timerDisplay").css({ "display": "block" });
																var timerRef = document.querySelector('.timerDisplay');
																$("#stopWatchOff").css({ "display": "none" })
																$("#stopWatchOn,.timerDisplay").css({ "display": "block" })
																$("#stopWatchOn").css({ "cursor": "pointer" });
																$("#coniConc").css({ "cursor": "pointer" })
																$("#stopWatchOn").css({ "cursor": "default" })
																$("#conFlaskDropShake").css({ "display": "block" });
																$("#coniConc").draggable("enable")
																removeTrip();
																$("#conFlaskDropShake").droppable({
																	accept: "#coniConc",
																	drop: function () {
																		showArr = 13;
																		$("#buretteTapClose").css({ "cursor": "pointer" })
																		$("#conFlaskDropShake").css({ "display": "none" });
																		Shaking();
																		$("#coniConc").draggable("disable")
																		$("#coniConc").animate({ left: 15.4 + "%", top: 61 + "%" }, function () {
																			$("#alertMsg,#alertText2").css({ display: 'block' });
																			$("#alertText").css({ display: 'none' });

																			$("#buretteTapClose").click(function () {
																				showArr = 14;
																				removeTrip();
																				$("#buretteWatClose").animate({
																					height: "25%",
																					top: "31%"
																				}, {
																					duration: 2000, // Adjust as needed in milliseconds
																					easing: "swing" // Or choose another easing function
																				});
																				

																				if (mes == 1) {
																					$("#buretteWatClose").animate({
																						height: "25%",
																						top: "27%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																					//alert("buretteTapClose1")
																					$("#coniWaterConc").animate({
																						height: "42%",
																						top: "37%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																				}
																				if (mes == 2) {
																					$("#buretteWatClose").animate({
																						height: "25%",
																						top: "27%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																					//alert("buretteTapClose2")
																					$("#coniWaterConc").animate({
																						height: "42%",
																						top: "37%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																				}
																				else if (mes == 3) {
																					$("#buretteWatClose").animate({
																						height: "25%",
																						top: "27%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																					//alert("buretteTapClose3")
																					$("#coniWaterConc").animate({
																						height: "42%",
																						top: "37%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																				} else if (mes == 4) {
																					$("#buretteWatClose").animate({
																						height: "22%",
																						top: "31%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																					//alert("buretteTapClose4")
																					$("#coniWaterConc").animate({
																						height: "45%",
																						top: "34%",
																						left: "9%",
																						width: "83%",
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																				}else if (mes == 5) {
																					$("#buretteWatClose").animate({
																						height: "22%",
																						top: "31%"
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																					//alert("buretteTapClose5")
																					$("#coniWaterConc").animate({
																						height: "52%",
																						top: "29%",
																						left: "12%",
																						width: "77%",
																					}, {
																						duration: 2000, // Adjust as needed in milliseconds
																						easing: "swing" // Or choose another easing function
																					});
																				}















																				$("#buretteClose,#alertText").css({ "display": "none" });
																				$("#buretteTapClose").css({ "cursor": "pointer" })
																				ImageInitLoad(imageArrayWater2, "waterAnimation2", "test2", "newWaterAnimation2")
																				waterAnim2 = ImageAnimationINFinity("newWaterAnimation2", "test2", imageArrayWater2, 100)
																				$("#buretteTapClose").css({ "display": "block" });

																				$("#buretteTapClose").click(function () {
																					showArr = 15;
																					removeTrip();
																					$("#buretteTapClose").css({ "pointer-events": "none" });
																					$("#buretteTap").css({ "pointer-events": "none" });
																					clearAnimation(waterAnim2, "waterAnimation2")
																					$("#buretteClose").css({ "display": "block" });
																					$("#coniConc").draggable("enable")
																					$("#buretteTapClose").css({ "cursor": "default" })
																					$("#coniConc").css({ "cursor": "pointer" })
																					removeTrip();
																					$("#conFlaskDrop").css({ "display": "none" });

																					$("#crossTileDrop").droppable({
																						accept: "#coniConc",
																						drop: function () {
																							showArr = 16;
																							$("#coniConc").animate({ left: 38.7 + "%", top: 62 + "%" })
																							$("#coniWaterConc").fadeOut(6000)
																							$("#alertMsg,#alertText2").css({ display: 'none' });
																							$("#coniConc").draggable("disable")
																							$("#coniConc").css({ "cursor": "default" })

																							$("#FadedconiWaterConc").fadeIn(6000, function () {
																								$("#stopWatchOn").css({ "cursor": "pointer" })
																								setTimeout(function () {
																									$("#stopWatchOn").click(function () {
																										if (turns == 5)
																											showArr = 18;
																										else {
																											showArr = 17;

																										}
																										removeTrip();
																										$("#next").css({ "display": "block" })
																										$("#timerMsg").css({ "display": "block" })

																										$("#coniConc").draggable("disable")
																										$("#next").css({ "cursor": "pointer" })
																										$("#stopWatchOff").css({ "display": "block" })
																										$("#stopWatchOn").css({ "display": "none" })
																										if (turns == 1) {
																											timerRef.innerHTML = '00 : 02 : 10';
																										}
																										else if (turns == 2) {
																											timerRef.innerHTML = '00 : 02 : 03 ';
																										}
																										else if (turns == 3) {
																											timerRef.innerHTML = '00 : 01 : 50 ';
																										}
																										else if (turns == 4) {
																											timerRef.innerHTML = '00 : 01 : 24 ';
																										}
																										else {
																											timerRef.innerHTML = '00 : 00 : 30 ';
																										}
																										clearInterval(int);
																									});
																								})
																								$("#next").click(function () {
																									showArr = 1;
																									removeTrip();
																									if (turns == 1) {
																										//alert("mes2")
																										mes=2
																										$("#resConc1").css({ "display": "block" })
																									}
																									else if (turns == 2) {
																										//alert("mes3")
																										mes=3
																										$("#resConc2").css({ "display": "block" })
																									}
																									else if (turns == 3) {
																										//alert("mes4")
																										mes=4
																										$("#resConc3").css({ "display": "block" })
																									}
																									else if (turns == 4) {
																										//alert("mes5")
																										mes=5
																										$("#resConc4").css({ "display": "block" })

																									}
																									else if (turns == 5) {

																										$("#resConc5").css({ "display": "block" })
																									}
																									$("#next").css({ "pointer-events": "none" });

																									$("#glassStopHcl").css({ "pointer-events": "none" });
																									$("#effectOfConc").html("");

																									setTimeout(refreshPage, 1000)
																									turns++;
																									
																								})
																							})
																						}
																					})
																				})
																			})
																		})
																	}
																})
															})
														})
													})
												}
											})
										}
									})
							})
							$("#coniWaterConc").fadeIn(1000, function () {
								$("#waterpouringCon").css({ "display": "none" });
							})
						}, 2000)
					}
				})
			}
		})
	})
}
function refreshPage() {
	$("#effectOfConc").html(originalState);
	repeat();
}

function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
	for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length - 1; ANIMATIONForloop++) {
		var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
		$("#" + ANIMATIONDivName).append($tempx2);
	}
}
function ImageAnimationINFinity(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed) {
	var GlobalVariable = 0;
	var ANIMATIONTimesReached = 0;
	var CLEARImageAnimation = setInterval(function () {
		$('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
		$('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
		GlobalVariable++;
		if (GlobalVariable == ANIMATIONImageArray.length - 1) {
			$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
			$('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
			GlobalVariable = 0;
			ANIMATIONTimesReached++;
		}
	}, ANIMATIONSpeed);
	return (CLEARImageAnimation);
}
function clearAnimation(myInterval, imgClass) {
	clearInterval(myInterval);
	$("." + imgClass).remove();

}
function Shaking() {
	// console.log("i")
	for (var i = 0; i <= 6; i++) {

		$('#coniConc').animate(
			{ deg: -10 },
			{
				duration: 100,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
				}
			});
		$('#coniConc').animate(
			{ deg: 10 },
			{
				duration: 100,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
				}
			});
	}
	$('#coniConc').animate(
		{ deg: 0 },
		{
			duration: 100,
			step: function (now) {
				$(this).css({ transform: 'rotate(' + now + 'deg)' });
			}
		});
	$("#coniConc").css({ left: 38 + "%", top: 17 + "%", width: + 12 + "%", height: + 26 + "%" })
	$("#coniConc").css({ "cursor": "default" })

}


function repeat() {

	$("#alertMsg2").css({ "display": "block" })
	// setTimeout(function () {
	// 	$("#alertMsg2").fadeOut()

	// }, 2000)
	if (turns == 2) {
		core()
		$("#concVal").html("1")

		$("#concVal2").html("1")
		$(".concValTot").html("2")
		// mes=2;
	}
	else if (turns == 3) {
		core()
		$("#concVal").html("2")
		$("#concVal2").html("2")
		$(".concValTot").html("4")
		// mes=3
	}
	else if (turns == 4) {
		core()
		$("#concVal").html("4")
		$("#concVal2").html("4")
		$(".concValTot").html("8")
		// mes=4
	} else if (turns == 5) {
		core()
		$("#concVal").html("8")
		$("#concVal2").html("8")
		$(".concValTot").html("16")
// mes=5
	}
	else {

		showArr = 19

		$("#next,#alertMsg2").css({ "display": "none" })
		$("#showGraph,#plotGraph").prop('disabled', false);
		$("#glassStopHcl").css({ "pointer-events": "none" });

		$("#showGraph").click(function () {
			removeTrip();
			showArr = 20

			$("#graphPaper").css({ "display": "block" })
			$("#showGraph").prop('disabled', true);
			$("#plotGraph").click(function () {

				showArr = 21;

				removeTrip();
				$("#graphVerticalLine").animate({ height: 88 + "%" }, 400);
				$("#graphHorizontal").show("blind", { direction: "right" }, 500);
				$("#GraphLine").css({ "display": "block" })
				$("#plotGraph").prop('disabled', true);
				$("#inferenceImg").css({ "display": "block" })
				$("#inferenceImg").css({ "cursor": "pointer" })

				$("#inferenceImg").click(function () {
					showArr = 22;
				})

			})
		})
	}

}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}