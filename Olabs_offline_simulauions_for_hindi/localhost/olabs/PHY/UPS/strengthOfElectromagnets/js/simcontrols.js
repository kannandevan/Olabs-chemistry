var displayArray, gt, c, ctx, helpMsg = new Array();
var helprarr, inferenceMsg, pinClick = 0;
var showArr = 0;
var count = 0;
var material_index, wire_ctx, droped, wire_length, wire_anim;
var connect = '#batteryEnd1'
var wirelen = "#wirePinBat1"
var dragFlag = false;
var dragNail = false;


function drawWire(wireColor, endpoint) {
	wire_ctx.clearRect(10, 20, 290, 60);
	wire_ctx.strokeStyle = wireColor;
	wire_ctx.beginPath();
	wire_ctx.moveTo(11, 68);
	wire_ctx.lineTo(wire_length, 68);
	wire_ctx.stroke();
	wire_ctx.closePath();
	if (endpoint >= wire_length) {
		clearTimeout(wire_anim);
	} else {
		wire_anim = setTimeout(function () {
			wire_length--;
			drawWire(wireColor, endpoint);
		}, 20);
	}
}
window.onload = function () {
	gt = new Gettext({ 'domain': 'messages' });
	///title
	//console.log(connectionWires.length);
	document.getElementById("expName").innerHTML = gt.gettext("Strength of Electromagnets");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#instruction').html(gt.gettext("INSTRUCTION:"));
	$('#instruction1').html(gt.gettext("Drag and Drop the bottle cap to start the experiment"));
	var c = document.getElementById("connectionDrawing");
	var wire_c = document.getElementById("shunt_wire");
	ctx = c.getContext("2d");
	wire_ctx = wire_c.getContext("2d");
	wire_ctx.lineWidth = 8;
	shunt_wire_color = '#C5876B';
	connectionWires = ['bolt_battery', 'battery_switch', 'bolt_switch'];
	console.log(connectionWires.length);
	wireColor = "#C5876B";
	function initVariables() {
		material_index = 0;
		droped = false;
		wire_length = 300;
	}
	initVariables();
	$(document).ready(function () {
		////help label
		displayArray = ['block', 'none'];
		helprarr = [
			gt.gettext("Click on the check box to show/hide the circuit diagram"),
			gt.gettext("Drag and drop the copper wire from the top of the iron<br>bolt towards the positive end of the battery to connect"),
			gt.gettext("Drag and drop the copper wire from<br>the negative end of the battery<br>towards the right push pin to connect"),
			gt.gettext("Drag and drop the copper wire from the bottom<br> of the iron bolt towards the left push pin to connect"),
			gt.gettext("Click on the safety pin to on the connection"),
			gt.gettext("Drag and drop the dish <br>containing iron nails towards the<br> bottom of the iron bolt"),
			gt.gettext("Click on the safety pin to off the connection<br> to try other combinations and observe"),


		]
		////inference label
		inferenceMsg = [
			gt.gettext("Strength of electromagnet increases when -<br>1. Number of turns of wire increases<br>2. Number of electric cells in the circuit increases<Br>3. Iron bolt is used as core of electromagnet<br> instead of plastic<Br>4. Thickness of iron bolt increases<br>Stronger electromagnets attracts more nails.")

		]
		connectorCall();
		// console.log(connect)
		drawWire(shunt_wire_color[material_index], 300);

		$("#batteryEnd2,#batteryEnd3,#batteryEnd4").css({ display: "none" })
		/////function to disable dropdown on selection

		function dis() {
			$("#core").attr("disabled", true);
			$("#turns").attr("disabled", true);
			$("#cells").attr("disabled", true);
		}

		function disFalse() {
			$("#core").attr("disabled", false);
			$("#turns").attr("disabled", false);
			$("#cells").attr("disabled", false);
		}			// disFalse()

		////Click the checkbox
		// $("#check").click(function () {
		// 	if ($(this).is(":checked")) {
		// 		$("#circuitDiagraml").show();
		// 		showArr = 5;
		// 		$("#text").css("color", "black");
		// 		removeTrip()

		// 	} else {
		// 		showArr = 0;
		// 		$("#circuitDiagraml").hide();
		// 	}
		// });
		$("#check").click(function () {
			if ($(this).is(":checked")) {
				$("#circuitDiagram").show();
				showArr = 5;
				$("#text").css("color", "black");
				removeTrip()

			} else {
				showArr = 9;
				removeTrip()

				$("#circuitDiagram").hide();
			}
		});
		////change the dropdown values
		$("#core").change(function () {
			var selValue = $(this).val();
			showArr = 11;
			if (selValue == "thickIron") {
				$("#thickBolt").css({ display: "block" })
				$("#thickCopperwire").css({ display: "block" })
				$("#thinCopperwire").css({ display: "none" })
				$("#thinBolt,#plasticPipe").css({ display: "none" })

			}
			else if (selValue == "thinIron") {
				$("#plasticPipe,#thickBolt").css({ display: "none" })
				$("#thinBolt").css({ display: "block" })
				$("#thickCopperwire").css({ display: "none" })
				$("#thinCopperwire").css({ display: "block" })
			}

			else {
				$("#plasticPipe").css({ display: "block" })
				$("#thinCopperwire").css({ display: "none" })
				$("#thickCopperwire").css({ display: "block" })

				$("#thinBolt,#thickBolt").css({ display: "none" })
			}
		});
		$("#turns").change(function () {
			showArr = 11;

			var selValue = $(this).val();
			if (selValue == "20") {
				$("#copper20,#thinCopper20").css({ display: "block" })
				$("#copper40,#copper60,#thinCopper40,#thinCopper60").css({ display: "none" })


			}
			else if (selValue == "40") {
				$("#copper40,#thinCopper40").css({ display: "block" })
				$("#copper20,#copper60").css({ display: "none" })
			}
			else {
				$("#copper60,#thinCopper60").css({ display: "block" })
				$("#copper20,#copper40").css({ display: "none" })
			}
		})

		$("#cells").change(function () {
			showArr = 11;

			var selValue = $(this).val();
			if (selValue == "2") {
				$("#battery2").css({ display: "block" })
				$("#battery3,#battery4,#battery5").css({ display: "none" })
				$("#batteryEnd1").css({ display: "block" })
				$("#batteryEnd2,#batteryEnd3,#batteryEnd4").css({ display: "none" })
				wirelen = "#wirePinBat1";

				if (connectionWires.length == count) {
					$("#wirePinBat1").css({ display: "block" })
					$("#wirePinBat2,#wirePinBat3,#wirePinBat4").css({ display: "none" })
				}


				connect = "#batteryEnd1";

				connectorCall();
			}
			else if (selValue == "3") {
				$("#battery3").css({ display: "block" })
				$("#battery4,#battery5").css({ display: "none" })
				$("#batteryEnd2").css({ display: "block" })
				connect = "#batteryEnd2";
				wirelen = "#wirePinBat2"


				if (connectionWires.length == count) {
					$("#wirePinBat2").css({ display: "block" })

					$("#wirePinBat1,#wirePinBat3,#wirePinBat4").css({ display: "none" })

				}


				connectorCall();
				$("#batteryEnd1,#batteryEnd3,#batteryEnd4").css({ display: "none" })
			}
			else if (selValue == "4") {
				$("#battery3,#battery4").css({ display: "block" })
				$("#battery5").css({ display: "none" })
				$("#batteryEnd3").css({ display: "block" })
				wirelen = "#wirePinBat3"

				if (connectionWires.length == count) {

					$("#wirePinBat1,#wirePinBat2,#wirePinBat4").css({ display: "none" })
					$("#wirePinBat3").css({ display: "block" })
				}
				connect = "#batteryEnd3";
				connectorCall();
				$("#batteryEnd1,#batteryEnd2,#batteryEnd4").css({ display: "none" })
			}
			else {
				$("#battery3,#battery4,#battery5").css({ display: "block" })
				$("#batteryEnd4").css({ display: "block" })
				wirelen = "#wirePinBat4"
				connect = "#batteryEnd4";
				connectorCall();
				if (connectionWires.length == count) {

					$("#wirePinBat4").css({ display: "block" })
					$("#wirePinBat2,#wirePinBat3,#wirePinBat1").css({ display: "none" })
				}
				$("#batteryEnd1,#batteryEnd2,#batteryEnd3").css({ display: "none" })
			}
		});
		////switch off connection of the switch


		////connecting wires
		function connectorCall() {
			connector('#boltTop', '#batteryBegin', '#wireBoltBat', wireColor);
			connector('#batteryBegin', '#boltTop', '#wireBoltBat', wireColor);
			connector(connect, '#switchRight', wirelen, wireColor);
			connector('#switchRight', connect, wirelen, wireColor);
			connector('#boltBottom', '#switchLeft', '#wireBoltPin', wireColor);
			connector('#switchLeft', '#boltBottom', '#wireBoltPin', wireColor);
		}

		function connector(startPoint, endPoint, connector, wireColor) {

			var elemX, elemY
			$(startPoint).draggable({
				containment: "#canvasBox",
				revert: function () {
					if (!droped) {
						ctx.clearRect(0, 0, 570, 345);
						$(startPoint).css({
							left: elemX,
							top: elemY
						});
						$(endPoint).css({ 'opacity': 0 });
						$("#boltHelp").css({ display: "none" })
						$("#boltTop").css({ display: "block" })
						$("#boltBottom").css({ display: "block" })

					}
				},
				start: function () {
					elemX = $(startPoint).css('left');
					elemY = $(startPoint).css('top');
					droperInitPos = $(startPoint).css('left');
					startX = (parseInt(elemX.substring(0, elemX.length - 2)) / 2) + (parseInt(elemX.substring(0, elemX.length - 2)) / 35) + 7;
					startY = (parseInt(elemY.substring(0, elemY.length - 2)) / 2) - (parseInt(elemY.substring(0, elemY.length - 2)) / 16) + 5;
					$(endPoint).css({ 'opacity': 0.5 });
				},
				stop: function () { },
				drag: function () {
					var elemXX = $(startPoint).css('left');
					var elemYY = $(startPoint).css('top');
					mouseX = (parseInt(elemXX.substring(0, elemXX.length - 2)) / 2) + (parseInt(elemXX.substring(0, elemXX.length - 2)) / 35) + 10;
					mouseY = (parseInt(elemYY.substring(0, elemYY.length - 2)) / 2) - (parseInt(elemYY.substring(0, elemYY.length - 2)) / 16) + 8;
					ctx.clearRect(0, 0, 570, 345);
					ctx.strokeStyle = wireColor;
					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(mouseX, mouseY);
					ctx.stroke();
					removeTrip()

				}
			});
			$(endPoint).droppable({
				accept: startPoint,
				drop: function () {
					droped = true;
					count++;
					$(startPoint).css({
						left: $(endPoint).css('left'),
						top: $(endPoint).css('top')

					});
					console.log(count)
					if (count == 1) {
						showArr = 7;
					}
					else if (count == 2) {
						showArr = 8;
					}
					else {
						showArr = 9;

					}
					if (connectionWires.length == count) {
						$("#safetyPin").css({ cursor: "pointer" })
						showArr = 1
						var pinFlag = true;
						$("#safetyPin").click(function () {
							pinClick++;

							if (pinFlag) {
								switchOn();
								dis();
								$("#nailInplate").css({ cursor: "pointer" })
		
								dragDish()

								pinFlag = false;

							}
							else {
								disFalse();
								switchOff();
								pinFlag = true;
								// $("#inferenceImg").css({ display: "none" })


							}
							if (dragNail == true) {
								$("#inferenceImg").show();
								$("#inferenceImg").css({ cursor: "pointer" })

							}

						})


					}
					$(endPoint).draggable('disable');
					$(startPoint).draggable('disable');
					$(endPoint + ',' + startPoint).css({ 'cursor': 'default' });
					$(endPoint).hide();
					$(startPoint).hide();
					ctx.clearRect(0, 0, 570, 345);
					$(connector).show();
					droped = false;
					connectedWires = 0;
					for (i = 0; i < connectionWires.length; i++) {
						if ($("#" + connectionWires[i]).css('display') == 'block') {
							connectedWires++;
						} else {
							break;
						}

					}
				}

			});
		}
	})
}

function switchOn() {
	removeTrip()
	// $("#nailInplate").draggable("enable")
	$("#safetyPin").css({ cursor: "pointer" })
	$('#safetyPin').animate(
		{ deg: 3 },
		{
			duration: 0,
			step: function (now) {
				$('#safetyPin').css({ transform: 'rotate(' + now + 'deg)' });
				$("#safetyPin").css({ top: 239 + "px", left: 305 + "px" });
			}

		})
}
function switchOff() {
	$("#safetyPin").css({ cursor: "pointer" })
	removeTrip()
	showArr = 4
	$("#nailInplate").draggable("disable")
	$('#safetyPin').animate(
		{ deg: -17 },
		{
			duration: 100,
			step: function (now) {
				// $("#inferenceImg").css({ display: "none" })
				$('#safetyPin').css({ transform: 'rotate(' + now + 'deg)' });
				$("#safetyPin").css({ top: 247 + "px", left: 307 + "px" });
				$("#nailStickfew,#nailStick,nailsLeft").children().css({ display: "none" })
				$("#inferenceImg").css({ display: "none" })
			}
		})
	$("#nail70").delay(100).fadeIn(500)

}
function dragDish() {
	if(pinClick>=2){
		showArr = 3

	}
	else{
		showArr = 2

	}

	$("#nailInplate").draggable(
		{
			containment: "#canvasBox",
			revert: "invalid",
			drag: function () {
				removeTrip()
			}
		});

	$("#attractArea").droppable(
		{
			tolerance: "touch",
			accept: "#nailInplate",
			drop: function () {
				showArr = 3

				dragNail = true;
				$('#nailInplate').animate({ left: '22px', top: '193px' });
				$("#nailInplate").draggable("disable");
				$("#nailStick").css({ display: "block" })
				$("#nailStickfew").css({ display: "block" })
				$("#nailsLeft").css({ display: "block" })
				$("#nail70In").css({ display: "none" })
				$("#safetyPin").css({ cursor: "pointer" })

				if (dragFlag == true) {
					$("#inferenceImg").show();
					$("#inferenceImg").css({ cursor: "pointer" })
				}

			}

		})
	var turns = $('#turns :selected').text();

	var cells = $('#cells :selected').text();

	var core = $('#core :selected').text();
	nailAttract(core, turns, cells);
}
function nailAttract(core, turns, cells) {
	var coreVal;
	if (core == "Thin Iron") {
		coreVal = 8;
	}
	else if (core == "Thick Iron") {
		coreVal = 12;

	} else {
		coreVal = 4;
	}

	var turnVal;
	if (turns == "60") {
		turnVal = 60;
	}
	else if (turns == "40") {
		turnVal = 40;
	}
	else {
		turnVal = 20;
	}

	var cellVal;
	if (cells == "5") {
		cellVal = 5;
	}
	else if (cells == "4") {
		cellVal = 4;
	}
	if (cells == "3") {
		cellVal = 3;
	}
	if (cells == "2") {
		cellVal = 2;
	}
	var multiplier = (turns / 10) + (cells * 2);
	var val = coreVal * multiplier;
	dragFlag = true

	$("#nailsLeft,#nailStick,#nailStickfew").children().delay(500).fadeOut(500);
	if (val >= 192) {

		console.log({ material: core, cells: cells, turns: turns, sticky: 45, plate: 25 });
		$("#nailStick45,#nail25").delay(100).fadeIn(500, function () {
			// $("#nail70").css({ display: "none" })
			$("#nail70").fadeOut()

		})

	}
	else if (val == 168) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 40, plate: 30 });
		$("#nailStick40,#nail30").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()

		})
	}
	else if (val > 120 && val < 168) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 35, plate: 35 });
		$("#nailStick35,#nail35").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()

		})

	}
	else if (val > 96 && val <= 120) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 30, plate: 40 });
		$("#nailStick30,#nail40").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()

		})

	}
	else if (val > 96 && val <= 120) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 30, plate: 40 });
		$("#nailStick30,#nail40").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()
		})
	}
	else if (val == 96) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 25, plate: 45 });
		$("#nailStick25,#nail45").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()
		})
	}
	else if (val > 64 && val < 96) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 20, plate: 50 });
		$("#nailStick20,#nail50").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()
		})
	}
	else if (val >= 24 && val <= 32) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 0, plate: 70 });
		$("#nail70").show()
	}
	else if (val == 64) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 15, plate: 55 });
		$("#nailStick15,#nail55").delay(100).fadeIn(500, function () {
			$("#nail70").fadeOut()
		})
		if (coreVal == 4 && turnVal == 60 && cellVal == 5) {
			$("#nailStick5,#nail70").delay(100).fadeIn(500, function () {
				$("#nail70").css({ display: "block" })
				$("#nailStick15").hide()

			})

		}
	}
	else if (val == 56) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 4, plate: 70 });
			$("#nailStick4,#nail70").delay(100).fadeIn(500, function () {
				$("#nail70").css({ display: "block" })

			})

		
	}
	else if (val > 32 && val <= 48) {
		console.log({ material: core, cells: cells, turns: turns, sticky: 2, plate: 70 });
		$("#nailStick2,#nail70").delay(100).fadeIn(500, function () {
			$("#nail70").css({ display: "block" })
		})
		if (coreVal == 8 && turnVal == 20 && cellVal == 2) {
			console.log({ material: core, cells: cells, turns: turns, sticky: 10, plate: 60 });
			$("#nailStick2").hide()

			$("#nailStick10,#nail60").delay(100).fadeIn(500, function () {
				$("#nail70").fadeOut()
			})
		}
		else if (coreVal == 4 && turnVal == 60 && cellVal == 3) {
			console.log({ material: core, cells: cells, turns: turns, sticky: 4, plate: 70 });
			$("#nailStick4").delay(100).fadeIn(500, function () {
				$("#nailStick2").hide()
				$("#nail70").css({ display: "block" })
			})
		}
		else {
			console.log({ material: core, cells: cells, turns: turns, sticky: 0, plate: 70 });
			
				$("#nail70").css({ display: "block" })
		}

	}

}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}
