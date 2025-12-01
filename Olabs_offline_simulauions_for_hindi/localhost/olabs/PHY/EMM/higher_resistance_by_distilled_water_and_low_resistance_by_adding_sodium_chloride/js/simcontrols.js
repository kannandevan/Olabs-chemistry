var displayArray, gt, c, ctx;
var count = 0;
var dropCount = 0;
var dropACount = 0;
var dropBCount = 0;
var temp = 0, count = 0, gt, c, ctx, showArr;
var material_index, wire_ctx, droped, wire_length, wire_anim;
var oL, oT, pL, pT;
var mainWidth, mainHeight;
var originalState;
// var tripClickFlag=false;
var help;
var help = 0;
var tempValueStatus=1;
var tempValueStatusAgainTemp=0;
var tempValueStatusAgain=0;
var electrodeTouch = [];
var electrodeMax = [];
var electrodeMini = [];
var electrodeSalt = [];

$(document).ready(function () {

	for (a = 0; a < 40; a++) {
		electrodeTouch[a] = "../PHY/EMM/higher_resistance_by_distilled_water_and_low_resistance_by_adding_sodium_chloride/images/electrodeTouchAnimat/" + (a + 1) + ".png"
	}
	for (b= 0; b < 25; b++) {
		electrodeMax[b] = "../PHY/EMM/higher_resistance_by_distilled_water_and_low_resistance_by_adding_sodium_chloride/images/electrodeMaxAnimat/" + (b + 1) + ".png"
	}
	for (c= 0; c < 25; c++) {
		electrodeMini[c] = "../PHY/EMM/higher_resistance_by_distilled_water_and_low_resistance_by_adding_sodium_chloride/images/electrodeMiniAnimat/" + (c + 1) + ".png"
	}
	for (d= 0; d < 25; d++) {
		electrodeSalt[d] = "../PHY/EMM/higher_resistance_by_distilled_water_and_low_resistance_by_adding_sodium_chloride/images/electrodeSaltAnimat/" + (d + 1) + ".png"
	}
}) //onload ends
$(window).resize(function () {
	setTimeout(function () {
		mainWidth = $("#mainDiv").width();
		mainHeight = $("#mainDiv").height();

		$("#connectionDrawing").css({ width: mainWidth, height: mainHeight });
		oL = $("#mainDiv").offset().left;
		pL = $("#mainDiv").position().left;
		oT = $("#mainDiv").offset().top;
		pT = $("#mainDiv").position().top;

		//console.log({ oL: oL, pL: pL, oT: oT, pT: pT });

		ctx.canvas.width = ctx.canvas.clientWidth;
		ctx.canvas.height = ctx.canvas.clientHeight;
	}, 1000);

})
window.onload = function () {
	ImageInitLoad(electrodeTouch, "electrodeTouchDiv", "electrodeTouchAB", "electrodeTouchAnimation")
	ImageInitLoad(electrodeMax, "electrodeMaxDiv", "electrodeMaxAB", "electrodeMaxAnimation")
	ImageInitLoad(electrodeMini, "electrodeMiniDiv", "electrodeMiniAB", "electrodeMiniAnimation")
	ImageInitLoad(electrodeSalt, "electrodeSaltDiv", "electrodeSaltAB", "electrodeSaltAnimation")
};
$(document).ready(function () {

	var c;
	mainWidth = $("#mainDiv").width();
	mainHeight = $("#mainDiv").height();
	$("#connectionDrawing").css({ width: mainWidth, height: mainHeight });
	oL = $("#mainDiv").offset().left;
	pL = $("#mainDiv").position().left;
	oT = $("#mainDiv").offset().top;
	pT = $("#mainDiv").position().top;
	c = document.getElementById("connectionDrawing");
	ctx = c.getContext("2d");
	ctx.canvas.width = ctx.canvas.clientWidth;
	ctx.canvas.height = ctx.canvas.clientHeight;
	var wire_c = document.getElementById("shunt_wire");
	wire_ctx = wire_c.getContext("2d");
	gt = new Gettext({ 'domain': 'messages' });
	document.getElementById("expName").innerHTML = gt.gettext("Effect of adding Sodium Chloride on the Electrical Conductivity of Distilled Water");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	
	helpMsg = [ gt.gettext("Select the Show circuit<br> diagram option."),
	gt.gettext("Unselect the<br> Show circuit<br> diagram option"),
	gt.gettext("Drag the wire from electrode<br>A to one end of the LED bulb"),
	gt.gettext("Drag the wire from electrode B to<br>the positive terminal of the battery."),
	gt.gettext("Drag the wire from the negative terminal<br>of the battery to one end of the key"),
	gt.gettext("Drag the wire from another end of the<br> key to another end of the LED bulb"),
	gt.gettext("Click on the Next button"),gt.gettext("Click on the Wooden rod"),
	gt.gettext("Click on the Hand"),gt.gettext("Click on the Next button."),
	gt.gettext("Click on the Wooden rod"),gt.gettext("Click on the Hand"),
	gt.gettext("Click on the Next button"),gt.gettext("Click on the Wooden rod"),
	gt.gettext("Click on the Hand"),gt.gettext("Click on the Next button."),
	gt.gettext("Click on the Wooden rod"),gt.gettext("Drag and drop the<br> spatula into the beaker"),
	gt.gettext("Click on the Hand"),gt.gettext("Click on the Next button"),
	gt.gettext("Click on the Reset button<br> to do the experiment again")];

	function initVariables() {
		material_index = 0;
		droped = false;
		wire_length = 300;
	}
	wire_ctx.lineWidth = 8;
	shunt_wire_color = '#C5876B';
	connectionWires = ['inductorSwitch', 'switchBattery', 'batteryInductor', 'bulbInductor', 'inductorBulb'];
	wireColor = "#000000";
	function initVariables() {
		material_index = 0;
		droped = false;
		wire_length = 300;
	}
	getProps("#mainDiv")
	initVariables();
	help=0;
	removeTrip();
	connectorCall();
	chckBoxShowHide();
	figure2();
	figure3();
	figure4();
	figure5();
	figure6();
	$("#reset,#rest1").click(function () {//*--Function to click reload button to reset all events---
		window.location.reload();
	});
}) //onload ends
function connectorCall() {
	
	connector('#electA', '#bulbPostiv', '#electToBulb', wireColor);
	connector('#bulbPostiv', '#electA', '#electToBulb', wireColor);

	connector('#electB', '#battPostiv', '#electToBatP', wireColor);
	connector('#battPostiv', '#electB', '#electToBatP', wireColor);

	connector('#battNagtv', '#keyleft', '#keyToBat', wireColor);
	connector('#keyleft', '#battNagtv', '#keyToBat', wireColor);

	connector('#keyRight', '#bulbN', '#keyTpbulpN', wireColor);
	connector('#bulbN', '#keyRight', '#keyTpbulpN', wireColor);

}
function connector(startPoint, endPoint, connector, wireColor) {
	var elemX, elemY
	$(startPoint).draggable({
		containment: "#mainDiv",
		revert: function (droped) {
			if (!droped) {
				ctx.clearRect(0, 0, mainWidth, mainHeight);
				elementX = getPercentageWRT(elemX, mainWidth);
				elementY = getPercentageWRT(elemY, mainHeight);
				elementX = precisionRound(elementX, 2)
				elementY = precisionRound(elementY, 2)

				$(startPoint).css({
					left: elementX + "%",
					top: elementY + "%"
				});
				$(endPoint).css({ opacity: 0 });
			}
		},
		start: function () {
            removeTrip();
			elemX = $(startPoint).position().left;
			elemY = $(startPoint).position().top;
			var elemWidth = $(startPoint).width() / 2;
			var elemHeight = $(startPoint).height() / 2;

			startX = elemX;
			startY = elemY;

			//console.log({ startX: startX, startY: startY });
			droperInitPos = $(startPoint).css("left");
			$(endPoint).css({ opacity: 0.5 });
		},
		stop: function () { },
		drag: function (e, ui) {
			removeTrip();
			elemXX = $(startPoint).position().left;
			elemYY = $(startPoint).position().top;


			var x = e.clientX - oL - pL;
			var y = e.clientY - oT - pT;

			mouseX = e.pageX - $(e.target).offset().left;
			mouseY = e.pageY - $(e.target).offset().top;;

			// console.log({ mouseX: mouseX, mouseY: mouseY });
			ctx.clearRect(0, 0, mainWidth, mainHeight);
			ctx.strokeStyle = wireColor;
			ctx.beginPath();
			ctx.moveTo(startX, startY);
			ctx.lineTo(x, y);
			ctx.stroke();
		}
	});
	$(endPoint).droppable({
		accept: startPoint,
		drop: function () {
			droped = true;
			count++;
			$(startPoint).css({
				left: $(endPoint).css("left"),
				top: $(endPoint).css("top")
			});
			console.log(count);
			if (count == 1) {
				  help=3;
				  removeTrip();
			}
			else if (count == 2) {
				  help=4;
				  removeTrip();
			}
			else if (count == 3) {
				  help=5;
				  removeTrip();
			}
			if (count == 4) {
				help=6;
				removeTrip();
				$("#nextOne").fadeIn(500);
				$("#check").css({ "cursor": "default" })
				$("#check,#text").css('pointer-events', 'none');
				// keyCore();
			}
			removeTrip();
			$(endPoint).draggable("disable");
			removeTrip();
			$(startPoint).draggable("disable");
			$(endPoint + "," + startPoint).css({ cursor: "default" });
			$(endPoint).hide();
			$(startPoint).hide();
			ctx.clearRect(0, 0, mainWidth, mainHeight);
			$(connector).show();
			droped = false;
			connectedWires = 0;
			for (i = 0; i < connectionWires.length; i++) {
				if ($("#" + connectionWires[i]).css("display") == "block") {
					connectedWires++;
				} else {
					break;
				}
			}
		}
	});
}
function precisionRound(number, precision) {
	var factor = Math.pow(10, precision);
	return Math.round(number * factor) / factor;
}
function chckBoxShowHide() {
	removeTrip();
	$("#check").click(function () {
		// console.log("ASN");
		if((tempValueStatus==1) && (help==0))
		{
			help=1;
		}
		else
		{
			if(tempValueStatus==2)
			{
				help=2;
			}
			if(tempValueStatus>2)
			{
				if(tempValueStatusAgain==0)
				{
					tempValueStatusAgainTemp=help;
					help=1;
					tempValueStatusAgain=1;
				}
				else
				{
					help=tempValueStatusAgainTemp;
					tempValueStatusAgain=0;
				}
			}
		}
		tempValueStatus++;
		removeTrip();
		if ($(this).is(":checked")) {
			removeTrip();
			// help=1;
			// removeTrip();
			$("#circutImgs").hide();
			$("#circuitDiagram").show();
			$("#text").css("color", "black");

		} else {
			removeTrip();	
			$("#circuitDiagram").hide();
			$("#Figurebg,#circutImgs").show();
		}
	});
}
function figureTwoCore()
{
	$("#glassRodTwo").css({ "cursor": "pointer" })
	$("#glassRodTwo").click(function () {
	$("#glassRodTwo").css({ "pointer-events": "none" })
	$("#simHelp").css({ "pointer-events": "none" })
	removeTrip();
	$("#figuretwo").fadeOut();
	ImageAnimationOneTime("electrodeTouchAnimation", "electrodeTouchAB", electrodeTouch, 200, 0)
	setTimeout(function () {	
		setTimeout(function () {	$("#simHelp").css({ "pointer-events": "" })}, 4800);
		help=8;
		keyOneCore();
		removeTrip();}, 3000);

	});
}
function keyOneCore()
{
	setTimeout(function () { 
		$("#figureTwoElectTouch,#keyOne").fadeIn();
		$("#handOne").delay(100).fadeIn();
		$("#handOne").css({ "cursor": "pointer" })
		$("#handOne").click(function () {
			$("#simHelp").css({ "pointer-events": "none" })
			removeTrip();
			$("#handOne").css({ "pointer-events": "none" })
			$("#handOne").animate({ top: "66%" }, 1000, 'linear');
			setTimeout(function () { 
				$("#handOne").animate({ top: "69%" }, 1000, 'linear');
				$("#keyOne").animate({ top: "79.8%" }, 1000, 'linear'); 
				$("#lightOne,#labelOne").delay(800).fadeIn();
				$("#warLabelOne").delay(1000).fadeIn();
				help=9;
				$("#simHelp").css({ "pointer-events": "" })
				$("#nextTwo").fadeIn(1500);
			}, 3000);});
     }, 4800);
}
function keyTwoCore()
{
	setTimeout(function () { 
		$("#figureThreElectMax,#keyTwo").fadeIn();
		$("#handTwo").delay(500).fadeIn();
		$("#handTwo").css({ "cursor": "pointer" })
		$("#handTwo").click(function () {
			$("#simHelp").css({ "pointer-events": "none" })
			removeTrip();
			$("#handTwo").css({ "pointer-events": "none" })
			$("#handTwo").animate({ top: "66%" }, 1000, 'linear');
			setTimeout(function () { 
				$("#handTwo").animate({ top: "69%" }, 1000, 'linear');
				$("#keyTwo").animate({ top: "79.8%" }, 1000, 'linear'); 
				$("#labelTwo").delay(800).fadeIn();
				$("#warLabelTwo").delay(1000).fadeIn();
				help=12;
				$("#simHelp").css({ "pointer-events": "" })
				$("#nextThree").fadeIn(1500);
			}, 3000);});
     }, 1800);
}
function keyThreeCore()
{
	setTimeout(function () { 
		$("#figureThreElectMin,#keyThree").fadeIn();
		$("#handThree").delay(100).fadeIn();
		$("#handThree").css({ "cursor": "pointer" })
		$("#handThree").click(function () {
			$("#simHelp").css({ "pointer-events": "none" })
			removeTrip();
			$("#handThree").css({ "pointer-events": "none" })
			$("#handThree").animate({ top: "66%" }, 1000, 'linear');
			setTimeout(function () { 
				$("#handThree").animate({ top: "69%" }, 1000, 'linear');
				$("#keyThree").animate({ top: "79.8%" }, 1000, 'linear'); 
				$("#lightTwo,#labelThree").delay(800).fadeIn();
				$("#warLabelThree").delay(1000).fadeIn();
				help=15;
				$("#simHelp").css({ "pointer-events": "" })
				$("#nextFour").fadeIn(1000);
			}, 3000);});
     }, 1800);
}
function keyFourCore()
{
	setTimeout(function () { 
		// $("#figureFourElectMax,#keyFour").fadeIn();
		$("#handFour").delay(100).fadeIn();
		$("#handFour").css({ "cursor": "pointer" })
		$("#handFour").click(function () {
			$("#simHelp").css({ "pointer-events": "none" })
			removeTrip();
			$("#handFour").css({ "pointer-events": "none" })
			$("#handFour").animate({ top: "66%" }, 1000, 'linear');
			setTimeout(function () { 
				$("#handFour").animate({ top: "69%" }, 1000, 'linear');
				$("#keyFour").animate({ top: "79.8%" }, 1000, 'linear'); 
				$("#lightThree,#labelFour").delay(800).fadeIn();
				$("#warLabelFour").delay(1000).fadeIn();
				help=19;
				$("#simHelp").css({ "pointer-events": "" })
				$("#nextFive").fadeIn(1000);
			}, 3000);});
     }, 1800);
}
function figureThreeCore()
{
	$("#glassRodThree").css({ "cursor": "pointer" })
	$("#glassRodThree").click(function () {
	$("#glassRodThree").css({ "pointer-events": "none" })
	$("#simHelp").css({ "pointer-events": "none" })
	removeTrip();
	$("#figurethre").fadeOut();
	ImageAnimationOneTime("electrodeMaxAnimation", "electrodeMaxAB", electrodeMax, 200, 0)
	setTimeout(function () {
		setTimeout(function () {	$("#simHelp").css({ "pointer-events": "" })}, 3000);		
		help=11;
		keyTwoCore()}, 3000);
	});
}
function figureFourCore()
{
	$("#glassRodFour").css({ "cursor": "pointer" })
	$("#glassRodFour").click(function () {
	$("#simHelp").css({ "pointer-events": "none" })
	$("#glassRodFour").css({ "pointer-events": "none" })
	removeTrip();
	$("#figureFour").fadeOut();
	ImageAnimationOneTime("electrodeMiniAnimation", "electrodeMiniAB", electrodeMini, 200, 0)
	setTimeout(function () {
		setTimeout(function () {	$("#simHelp").css({ "pointer-events": "" })}, 3000);	
		help=14;
		keyThreeCore()}, 3000);
	});
}
function figureFiveCore()
{
	$("#glassRodFive").css({ "cursor": "pointer" })
	$("#glassRodFive").click(function () {
	$("#simHelp").css({ "pointer-events": "none" })
	$("#glassRodFive").css('pointer-events', 'none');
	removeTrip();
	$("#figureFive").fadeOut();
	ImageAnimationOneTime("electrodeSaltAnimation", "electrodeSaltAB", electrodeSalt, 170, 0)
	setTimeout(function () { $("#figureFourElectMax,#keyFour").fadeIn();}, 4000);
	$("#sodiumSptDrop").show();
	help=17;
	setTimeout(function () 
	{spatulaCore(); 
		$("#simHelp").css({ "pointer-events": "" })}, 3000);
	// setTimeout(function () {keyFourCore()()}, 3000);
	});
}
function spatulaCore()
{
	$("#spatula").css({ "cursor": "pointer" })
	$("#spatulaSodium").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "45%", left: "70%", })}},
		drag: function () {removeTrip()}});
		$("#sodiumSptDrop").droppable
		({
			accept: "#spatulaSodium", drop: function () 
			{
				$("#spatulaSodium").css({ top: "10%", left: "18%" });
				$('#spatulaSodium').css('pointer-events', 'none');
				$("#spatulaSodium").animate({ deg: -25 },
					{ duration: 1000, step: function (now) { removeTrip(); $(this).css({ transform: 'rotate(' + now + 'deg)' }); } }
				);
				$('#sodiumcolSpatu').delay(100).fadeOut();
				$("#sodiumPour").delay(300).show("blind", { direction: "up" }, function () {
				$("#sodiumPour").hide("blind", { direction: "down" })}, 1500);
				$("#sodiuminBek").delay(300).show("blind", { direction: "down" })
				$("#spatulaSodium").animate({ deg: 0 },
					{ duration: 500, step: function (now) { removeTrip(); $(this).css({ transform: 'rotate(' + now + 'deg)' }); } }
				);
				$("#sodiumPour").fadeOut();
				$("#sodiuminBek").delay(3000).fadeOut();
				$("#spatulaSodium").animate({ top: "45%", left: "71%" }, 1000);
				help=18;
				keyFourCore();
				// // $("#lightOne").delay(500).fadeIn();
				// help=19;
				// $("#nextFive").fadeIn(500);
			}
		});
}
function figure2() {
	$("#nextOne").click(function () {
		removeTrip();
		$("#Figurebg,#text,#check").hide();
		$("#canfigure2").show();
		help=7;
		figureTwoCore();
	});
}
function figure3() {
	$("#nextTwo").click(function () {
		removeTrip();
		$("canfigure2").hide();
		$("#canfigure3").show();
		help=10;
		figureThreeCore();
	});
}
function figure4() {
	$("#nextThree").click(function () {
		removeTrip();
		$("canfigure3").hide();
		$("#canfigure4").show();
		help=13;
		figureFourCore();
	});
}
function figure5() {
	$("#nextFour").click(function () {
		removeTrip();
		$("canfigure4").hide();
		$("#canfigure5").show();
		help=16;
		figureFiveCore();
	});
}
function figure6() {
	$("#nextFive").click(function () {
		removeTrip();
		$("canfigure5").hide();
		help=20;
		$("#canfigure6").show();
	});
}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}
// finite animation
function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
	for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length; ANIMATIONForloop++) {
		var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
		$("#" + ANIMATIONDivName).append($tempx2);
	}
}
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
	var GlobalVariable = 0;
	var ANIMATIONTimesReached = 0;
	var CLEARImageAnimation = setInterval(function () {
		$('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
		$('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
		GlobalVariable++;
		if (GlobalVariable == ANIMATIONImageArray.length) {
			$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
			$('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
			if (ANIMATIONTimesReached >= ANIMATIONTimes) {
				$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
				CLEARImageAnimation.clearInterval();
			}
			else {
				GlobalVariable = 0;
				ANIMATIONTimesReached++;
			}
		}
	}, ANIMATIONSpeed);
}
