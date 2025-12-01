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
var help=0;
var tempValueStatus=1;
var tempValueStatusAgainTemp=0;
var tempValueStatusAgain=0,pageCount=0;

$(document).ready(function () {
	//$('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click', function () {
		tripClickFlag = true;

	});
});
$(window).resize(function () {
	setTimeout(function () {
		mainWidth = $("#mainDiv").width();
		mainHeight = $("#mainDiv").height();

		$("#connectionDrawing").css({ width: mainWidth, height: mainHeight });
		oL = $("#mainDiv").offset().left;
		pL = $("#mainDiv").position().left;
		oT = $("#mainDiv").offset().top;
		pT = $("#mainDiv").position().top;


		ctx.canvas.width = ctx.canvas.clientWidth;
		ctx.canvas.height = ctx.canvas.clientHeight;
	}, 1000);

})
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
	document.getElementById("expName").innerHTML = gt.gettext("Voltage Measuring Device has Non Infinite Resistance");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
    helpMsg = [ gt.gettext("Select the show circuit<br> diagram option."),
	            gt.gettext("Unselect the show<br> circuit diagram option."),
				gt.gettext("Drag wire from positive of<br> the voltmeter to A carbon<br> resistors of 10 k&#8486;."),
				gt.gettext("Drag wire from the negative of<br> the voltmeter to B carbon<br> resistors of 10 k&#8486;."),
				gt.gettext("Drag wire from the positive<br> of the cell to A carbon<br> resistors of 10 k&#8486;."),  
				gt.gettext("Drag wire from the negative<br> of the cell to the key holder."), 
				gt.gettext("Drag wire from key holder to<br> C carbon resistors of 10 k&#8486;."), 
				gt.gettext("Drag and drop the key<br> into the key holder."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Drag and drop the key<br> into the key holder."),
				gt.gettext("Select the option<br> for cell values."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Drag and drop the key<br> into the key holder."),
				gt.gettext("Select the option<br> for cell values."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Drag and drop the key<br> into the key holder."),
				gt.gettext("Select the option<br> for cell values."),
				gt.gettext("Click on the Next button."),
				gt.gettext("Click on the Reset button<br> to do the experiment again"),];

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
	initVariables();
	connectorCall();
	getProps("#mainDiv")
	initVariables();
	Figure1();
	help=0;
	removeTrip();
	connectorCall();
	figure2();
	figure2Screen2();
	figure3screen2();

	$("#reset,#rest1").click(function () {//*--Function to click reload button to reset all events---
		window.location.reload();
	});
}) //onload ends
function connectorCall() {

	connector('#voltmeterPostiv', '#corbanA', '#voltTocorbanA', wireColor);
	connector('#corbanA', '#voltmeterPostiv', '#voltTocorbanA', wireColor);

	connector('#voltmeterNagativ', '#corbanB', '#voltTocorbanB', wireColor);
	connector('#corbanB', '#voltmeterNagativ', '#voltTocorbanB', wireColor);

	connector('#cellPostiv', '#corbanAtoA', '#cellTocorbanA', wireColor);
	connector('#corbanAtoA', '#cellPostiv', '#cellTocorbanA', wireColor);

	connector('#cellNagativ', '#keyLeft', '#cellPostivtoKeyL', wireColor);
	connector('#keyLeft', '#cellNagativ', '#cellPostivtoKeyL', wireColor);

	connector('#keyRight', '#corbanC', '#corbanCtoKeyR', wireColor);
	connector('#corbanC', '#keyRight', '#corbanCtoKeyR', wireColor);
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
				//   console.log({
				// 	elemX: elemX,
				// 	elemY: elemY,
				// 	mainWidth: mainWidth,
				// 	mainHeight: mainHeight,
				// 	elementX: elementX + "%",
				// 	elementY: elementY + "%"
				//   })
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
			// console.log(count);
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
			else if (count == 4) {
				  help=6;
				  removeTrip();
			}
			// else {
			//   showArr = 8;
			// }
			if (count == 5) {
				help=7;
				removeTrip();
				keyCore();
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
function keyCore() {
	// 	  help=12;
	// 	  removeTrip();
	$('#key').css({ 'cursor': 'pointer' });
	$("#key").draggable(
		{
			containment: "#canvas",
			revert: "invalid",
			tolerance: 'touch',
			drag: function () {
				$("#check").css({ "cursor": "default" })
				$("#check,#text").css('pointer-events', 'none');
			}
		})
	$("#keyDrop").droppable({
		accept: "#key",
		drop: function () {
			$("#key").css({ top: 31.5 + "%", left: 78.5 + "%" });
			$('#key,#text').css('pointer-events', 'none');
			help=8;
			removeTrip();
			$("#Next2").fadeIn(500);
		}
	})
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
				// console.log("SBN")
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
			removeTrip();
			$("#circutImgs").hide();
			$("#circuitDiagram").show();
			$("#text").css("color", "black");

		} else {
			removeTrip();
			// help=0;
			// removeTrip();
			removeTrip();
			$("#circuitDiagram").hide();
			$("#Figurebg,#circutImgs").show();
		}
	});
}
function keyDropSccen1() {
	help=9;
	removeTrip();
	$("#DropnVoltCel").prop("disabled", true);
	$("#DropnVoltCel").css({ "cursor": "not-allowed" });
	$('#key1').css({ 'cursor': 'pointer' });
	$("#key1").draggable(
		{
			containment: "#canvas",
			revert: "invalid",
			tolerance: 'touch',
			drag: function () {
			}
		})
	$("#keyDrop1").droppable({
		accept: "#key1",
		drop: function () {
			$("#key1").css({ top: 26.6 + "%", left: 85 + "%" });
			$("#DropnVoltCel").prop("disabled", false);
			$("#DropnVoltCel").css({ "cursor": "" });
			help=10;
			removeTrip();
			DropdownCore();
		}
	});
}
function DropdownCore() {
	$("#DropnVoltCel").change(function () {
		sel = $(this).val()
		if (sel == "8") {
			removeTrip();
			$("#Note100KB,#Note100KC,#Note100KD,#Note100KE").hide();
			dropCount++;
			// console.log("AA");
			$("select option[value='8']").prop('disabled', true);
			$("#VoltmeterZoom").show();
			$("#VoltNidleZoom").show();
			setTimeout(function () {
				$("#VoltNidleZoom").css({ top: 67.5 + '%', left: 13.5 + '%' }).delay(5000);
				$("#VoltNidleZoom").css({ transform: 'rotate(' + 29 + 'deg)' }).delay(5000);
				$("#VoltNidle1").css({ top: 55 + '%', left: 51.2 + '%' }).delay(5000);
				$("#VoltNidle1").css({ transform: 'rotate(' + 30 + 'deg)' }).delay(5000);
				$("#Note100KA").show('slide', { direction: 'right' }, 2000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
			}, 500)
		}
		else if (sel == "8.5") {
			removeTrip();
			$("#Note100KA,#Note100KC,#Note100KD,#Note100KE").hide();
			dropCount++;
			// console.log(dropCount);
			// console.log("BB");
			$("select option[value='8.5']").prop('disabled', true);
			$("#VoltmeterZoom").show();
			$("#VoltNidleZoom").show();
			setTimeout(function () {
				$("#VoltNidleZoom").css({ top: 67.5 + '%', left: 13.5 + '%' }).delay(5000);
				$("#VoltNidleZoom").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				$("#VoltNidle1").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				$("#Note100KB").show('slide', { direction: 'right' }, 2000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
			}, 500)
		}
		else if (sel == "9") {
			removeTrip();
			$("#Note100KA,#Note100KB,#Note100KD,#Note100KE").hide();
			dropCount++;
			// console.log(dropCount);
			// console.log("CC");
			$("select option[value='9']").prop('disabled', true);
			$("#VoltmeterZoom").show();
			$("#VoltNidleZoom").show();
			setTimeout(function () {
				$("#VoltNidleZoom").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoom").css({ transform: 'rotate(' + 36 + 'deg)' }).delay(5000);
				$("#VoltNidle1").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1").css({ transform: 'rotate(' + 39 + 'deg)' }).delay(5000);
				$("#Note100KC").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "9.5") {
			removeTrip();
			$("#Note100KA,#Note100KB,#Note100KC,#Note100KE").hide();
			dropCount++;
			// console.log(dropCount);
			// console.log("DD");
			$("select option[value='9.5']").prop('disabled', true);
			$("#VoltmeterZoom").show();
			$("#VoltNidleZoom").show();
			setTimeout(function () {
				$("#VoltNidleZoom").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoom").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#VoltNidle1").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#Note100KD").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "10") {
			removeTrip();
			$("#Note100KA,#Note100KB,#Note100KC,#Note100KD").hide();
			dropCount++;
			// console.log(dropCount);
			// console.log("EE");
			$("select option[value='10']").prop('disabled', true);
			$("#VoltmeterZoom").show();
			$("#VoltNidleZoom").show();
			setTimeout(function () {
				$("#VoltNidleZoom").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoom").css({ transform: 'rotate(' + 51 + 'deg)' }).delay(5000);
				$("#VoltNidle1").css({ top: 55 + '%', left: 52 + '%' }).delay(5000);
				$("#VoltNidle1").css({ transform: 'rotate(' + 48 + 'deg)' }).delay(5000);
				$("#Note100KE").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		if (dropCount == 5) {
			//$('#DropnVoltCel').css('pointer-events', 'none');
			$("#DropnVoltCel").prop("disabled", true);
			$("#DropnVoltCel").css({ "cursor": "not-allowed" });
			help=11;
	        removeTrip();
			$("#Next3").delay(1000).fadeIn(1000);
		}
	});
}
function fig3Screen1Core() {
	$("#DropnVoltCel1").prop("disabled", true);
	$("#DropnVoltCel1").css({ "cursor": "not-allowed" });
	$('#key2').css({ 'cursor': 'pointer' });
	$("#key2").draggable(
		{
			containment: "#canvas",
			revert: "invalid",
			tolerance: 'touch',
			drag: function () {
			}
		})
	$("#keyDrop2").droppable({
		accept: "#key2",
		drop: function () {
			$("#key2").css({ top: 26.6 + "%", left: 85 + "%" });
			$("#DropnVoltCel1").prop("disabled", false);
			$("#DropnVoltCel1").css({ "cursor": "" });
			$('#key2').css({ 'cursor': 'pointer' });
			help=14;
			removeTrip();
			Dropdown2Core();
		}
	});
}
function Dropdown2Core() {
	
	$("#DropnVoltCel1").change(function () {
		sel = $(this).val()
		if (sel == "8A") {
			removeTrip();
			$("#Note90KB,#Note90KC,#Note90KD,#Note90KE").hide();
			//$("#Note100K8B").hide();
			dropACount++;
			//console.log("AA");
			$("select option[value='8A']").prop('disabled', true);
			$("#VoltmeterZoomA").show();
			$("#VoltNidleZoomA").show();
			setTimeout(function () {
				$("#VoltNidleZoomA").css({ top: 67.5 + '%', left: 13 + '%' }).delay(5000);
				$("#VoltNidleZoomA").css({ transform: 'rotate(' + 29 + 'deg)' }).delay(5000);
				$("#VoltNidle1A").css({ top: 55 + '%', left: 51.2 + '%' }).delay(5000);
				$("#VoltNidle1A").css({ transform: 'rotate(' + 30 + 'deg)' }).delay(5000);
				$("#Note90KA").show('slide', { direction: 'right' }, 2000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
			}, 500)
		}
		else if (sel == "8.5A") {
			removeTrip();
			$("#Note90KA,#Note90KC,#Note90KD,#Note90KE").hide();
			//$("#Note100KA").hide();
			dropACount++;
			//console.log(dropCount);
			//console.log("BB");
			$("select option[value='8.5A']").prop('disabled', true);
			$("#VoltmeterZoomA").show();
			$("#VoltNidleZoomA").show();
			setTimeout(function () {
				$("#VoltNidleZoomA").css({ top: 67.5 + '%', left: 13.5 + '%' }).delay(5000);
				$("#VoltNidleZoomA").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				$("#VoltNidle1A").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1A").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
				$("#Note90KB").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "9A") {
			removeTrip();
			$("#Note90KA,#Note90KB,#Note90KD,#Note90KE").hide();
			dropACount++;
			//console.log(dropCount);
			//console.log("CC");
			$("select option[value='9A']").prop('disabled', true);
			$("#VoltmeterZoomA").show();
			$("#VoltNidleZoomA").show();
			setTimeout(function () {
				$("#VoltNidleZoomA").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoomA").css({ transform: 'rotate(' + 36 + 'deg)' }).delay(5000);
				$("#VoltNidle1A").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1A").css({ transform: 'rotate(' + 39 + 'deg)' }).delay(5000);
				$("#Note90KC").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "9.5A") {
			removeTrip();
			$("#Note90KA,#Note90KB,#Note90KC,#Note90KE").hide();
			dropACount++;
			//console.log(dropCount);
			//console.log("DD");
			$("select option[value='9.5A']").prop('disabled', true);
			$("#VoltmeterZoomA").show();
			$("#VoltNidleZoomA").show();
			setTimeout(function () {
				$("#VoltNidleZoomA").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoomA").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#VoltNidle1A").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1A").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#Note90KD").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "10A") {
			removeTrip();
			$("#Note90KA,#Note90KB,#Note90KC,#Note90KD").hide();
			dropACount++;
			//console.log(dropCount);
			//console.log("EE");
			$("select option[value='10A']").prop('disabled', true);
			$("#VoltmeterZoomA").show();
			$("#VoltNidleZoomA").show();
			setTimeout(function () {
				$("#VoltNidleZoomA").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoomA").css({ transform: 'rotate(' + 51 + 'deg)' }).delay(5000);
				$("#VoltNidle1A").css({ top: 55 + '%', left: 52 + '%' }).delay(5000);
				$("#VoltNidle1A").css({ transform: 'rotate(' + 48 + 'deg)' }).delay(5000);
				$("#Note90KE").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		if (dropACount == 5) {
			//$('#DropnVoltCel').css('pointer-events', 'none');
			$("#DropnVoltCel1").prop("disabled", true);
			$("#DropnVoltCel1").css({ "cursor": "not-allowed" });
			help=15;
	        removeTrip();
			$("#Next5").delay(1000).fadeIn(1000);
		}
	});
}
function fig4Screen1Core() {
	$("#DropnVoltCel2").prop("disabled", true);
	$("#DropnVoltCel2").css({ "cursor": "not-allowed" });
	$('#key3').css({ 'cursor': 'pointer' });
	$("#key3").draggable(
		{
			containment: "#canvas",
			revert: "invalid",
			tolerance: 'touch',
			drag: function () {
			}
		})
	$("#keyDrop3").droppable({
		accept: "#key3",
		drop: function () {
			$("#key3").css({ top: 26.6 + "%", left: 85 + "%" });
			$("#DropnVoltCel2").prop("disabled", false);
			$("#DropnVoltCel2").css({ "cursor": "" });
			$('#key3').css({ 'cursor': 'pointer' });
			help=18;
	        removeTrip();
			Dropdown3Core();
		}
	});
}
function Dropdown3Core() {

	$("#DropnVoltCel2").change(function () {
		sel = $(this).val()
		if (sel == "8B") {
			removeTrip();
			$("#Note125KB,#Note125KC,#Note125KD,#Note125KE").hide();
			//$("#Note100K8B").hide();
			dropBCount++;
			//console.log("AA");
			$("select option[value='8B']").prop('disabled', true);
			$("#VoltmeterZoomB").show();
			$("#VoltNidleZoomB").show();
			setTimeout(function () {
				$("#VoltNidleZoomB").css({ top: 67.5 + '%', left: 13 + '%' }).delay(5000);
				$("#VoltNidleZoomB").css({ transform: 'rotate(' + 33 + 'deg)' }).delay(5000);
				$("#VoltNidle1B").css({ top: 55 + '%', left: 51.2 + '%' }).delay(5000);
				$("#VoltNidle1B").css({ transform: 'rotate(' + 33 + 'deg)' }).delay(5000);
				$("#Note125KA").show('slide', { direction: 'right' }, 2000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
			}, 500)
		}
		else if (sel == "8.5B") {
			removeTrip();
			$("#Note125KA,#Note125KC,#Note125KD,#Note125KE").hide();
			//$("#Note100KA").hide();
			dropBCount++;
			//console.log(dropCount);
			//console.log("BB");
			$("select option[value='8.5B']").prop('disabled', true);
			$("#VoltmeterZoomB").show();
			$("#VoltNidleZoomB").show();
			setTimeout(function () {
				$("#VoltNidleZoomB").css({ top: 67.5 + '%', left: 13.5 + '%' }).delay(5000);
				$("#VoltNidleZoomB").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				$("#VoltNidle1B").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1B").css({ transform: 'rotate(' + 34 + 'deg)' }).delay(5000);
				//$('#VoltNidleZoom').animate({ transform: 'rotate(' + 30 + 'deg)' },'slow',function(){});
				//$("#VoltNidleZoom").show("slow");
				$("#Note125KB").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "9B") {
			removeTrip();
			$("#Note125KA,#Note125KB,#Note125KD,#Note125KE").hide();
			dropBCount++;
			//console.log(dropCount);
			//console.log("CC");
			$("select option[value='9B']").prop('disabled', true);
			$("#VoltmeterZoomB").show();
			$("#VoltNidleZoomB").show();
			setTimeout(function () {
				$("#VoltNidleZoomB").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoomB").css({ transform: 'rotate(' + 38 + 'deg)' }).delay(5000);
				$("#VoltNidle1B").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1B").css({ transform: 'rotate(' + 40 + 'deg)' }).delay(5000);
				$("#Note125KC").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "9.5B") {
			removeTrip();
			$("#Note125KA,#Note125KB,#Note125KC,#Note125KE").hide();
			dropBCount++;
			//console.log(dropCount);
			//console.log("DD");
			$("select option[value='9.5B']").prop('disabled', true);
			$("#VoltmeterZoomB").show();
			$("#VoltNidleZoomB").show();
			setTimeout(function () {
				$("#VoltNidleZoomB").css({ top: 67.5 + '%', left: 14 + '%' }).delay(5000);
				$("#VoltNidleZoomB").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#VoltNidle1B").css({ top: 55 + '%', left: 51.5 + '%' }).delay(5000);
				$("#VoltNidle1B").css({ transform: 'rotate(' + 45 + 'deg)' }).delay(5000);
				$("#Note125KD").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		else if (sel == "10B") {
			removeTrip();
			$("#Note125KA,#Note125KB,#Note125KC,#Note125KD").hide();
			dropBCount++;
			//console.log(dropCount);
			//console.log("EE");
			$("select option[value='10B']").prop('disabled', true);
			$("#VoltmeterZoomB").show();
			$("#VoltNidleZoomB").show();
			setTimeout(function () {
				$("#VoltNidleZoomB").css({ top: 67.5 + '%', left: 14.3 + '%' }).delay(5000);
				$("#VoltNidleZoomB").css({ transform: 'rotate(' + 51 + 'deg)' }).delay(5000);
				$("#VoltNidle1B").css({ top: 55 + '%', left: 52 + '%' }).delay(5000);
				$("#VoltNidle1B").css({ transform: 'rotate(' + 53 + 'deg)' }).delay(5000);
				$("#Note125KE").show('slide', { direction: 'right' }, 2000);
			}, 500)
		}
		if (dropBCount == 5) {
			$("#DropnVoltCel2").prop("disabled", true);
			$("#DropnVoltCel2").css({ "cursor": "not-allowed" });
			help=20;
	        removeTrip();
			$("#Next7").delay(1000).fadeIn(1000);
		}
	});
}
function Figure1() {
	help=0;
	removeTrip();
	removeTrip();
	chckBoxShowHide();
}
function figure2() {
	$("#Next2").click(function () {
		removeTrip();
		$("#Figurebg,#text,#check,.varTitle,#reset").hide();
		$("#canfigure2,#DropnVoltCel,#rest1,.varTitle1,#lableDiv").show();
		$("#DropnVoltCel").prop("disabled", true);
		$("#DropnVoltCel").css({ "cursor": "not-allowed" });
		keyDropSccen1();
	});
}
function figure2Screen2() {
	$("#Next3").click(function () {
		removeTrip();
		help=13;
		removeTrip();
		$("#Figurebg,#text,#check,.varTitle,#reset,#canfigure2,#lableDiv,.varTitle1,#canfigure3").hide();
		$("#DropnVoltCel1,.varTitle2,#canfigure4").show();
		fig3Screen1Core();
	});
}
function figure3screen2() {
	$("#Next5").click(function () {
		removeTrip();
		help=17;
		removeTrip();
		$("#Figurebg,#text,#check,.varTitle,#reset,#canfigure2,#lableDiv,.varTitle1,.varTitle2,#canfigure3,#canfigure4,#canfigure5").hide();
		$("#DropnVoltCel2,.varTitle3,#canfigure6").show();
		$("#DropnVoltCel2").prop("disabled", true);
		$("#DropnVoltCel2").css({ "cursor": "not-allowed" });
		fig4Screen1Core();
	});
}

function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}

