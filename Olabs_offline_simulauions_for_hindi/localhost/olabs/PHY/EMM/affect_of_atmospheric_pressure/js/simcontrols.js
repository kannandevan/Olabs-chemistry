var help;
var help = 0;
var dropCount = 0;
// var tripClickFlag = false;
var Imageflame = [];
var ImageWaterBoil = [];
var Imagebeakerfogg = [];
var ImageAMeter = [];
var ImageBMeter = [];
var ImageCMeter = [];
var ImageDMeter = [];
var ImageEMeter = [];

$(document).ready(function () {

	for (a = 0; a < 15; a++) {
		Imageflame[a] = "../PHY/EMM/affect_of_atmospheric_pressure/images/flameAnimat/" + (a + 1) + ".png"
	}
	for (b = 0; b < 10; b++) {
		ImageWaterBoil[b] = "../PHY/EMM/affect_of_atmospheric_pressure/images/waterBoil/" + (b + 1) + ".png"
	}
	for (c = 0; c < 25; c++) {
		Imagebeakerfogg[c] = "../PHY/EMM/affect_of_atmospheric_pressure/images/foggAnimat/" + (c + 1) + ".png"
	}
	for (d = 0; d < 50; d++) {
		ImageAMeter[d] = "../PHY/EMM/affect_of_atmospheric_pressure/images/MeterAni15MA/" + (d + 1) + ".png"
	}
	for (e = 0; e < 45; e++) {
		ImageBMeter[e] = "../PHY/EMM/affect_of_atmospheric_pressure/images/MeterAni175MB/" + (e + 1) + ".png"
	}
	for (f = 0; f < 40; f++) {
		ImageCMeter[f] = "../PHY/EMM/affect_of_atmospheric_pressure/images/MeterAni2MC/" + (f + 1) + ".png"
	}
	for (g = 0; g < 35; g++) {
		ImageDMeter[g] = "../PHY/EMM/affect_of_atmospheric_pressure/images/MeterAni225MD/" + (g + 1) + ".png"
	}
	for (h = 0; h < 30; h++) {
		ImageEMeter[h] = "../PHY/EMM/affect_of_atmospheric_pressure/images/MeterAni25ME/" + (h + 1) + ".png"
	}
}) //onload ends

window.onload = function () {
	document.getElementById("expName").innerHTML = gt.gettext("Affect of Atmospheric Pressure");
	// $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	
	helpMsg = [gt.gettext("Click on the round bottom flask"), gt.gettext("Click on the single bored cork"),
	gt.gettext("Click on the glass tube"), gt.gettext("Click on the rubber tube"),
	gt.gettext("Click on the knob of the burner"), gt.gettext("Click on the pinch cork"),
	gt.gettext("Click on the Next button"), gt.gettext("Choose the correct answer"),
	gt.gettext("Click on the pinch cork"), gt.gettext("Select the option for rubber tube length"),
	gt.gettext("Click on the Reset button<br> to do the experiment again"),];

	ImageInitLoad(Imageflame, "fireAniDiv", "fire", "fireAnimation")
	ImageInitLoad(ImageWaterBoil, "waterBoilAniDiv", "waterBoil", "waterBoilAnimation")
	ImageInitLoad(Imagebeakerfogg, "beakerfoggDiv", "beakfogg", "beakerfoggAni")
	ImageInitLoad(ImageAMeter, "MeterAni15MDivA", "Ani15MA", "Meter15MAniA")
	ImageInitLoad(ImageBMeter, "MeterAni175MDivB", "Ani175MB", "Meter175MAniB")
	ImageInitLoad(ImageCMeter, "MeterAni2MDivC", "Ani2MC", "Meter2MAniC")
	ImageInitLoad(ImageDMeter, "MeterAni225MDivD", "Ani225MD", "Meter225MAniD")
	ImageInitLoad(ImageEMeter, "MeterAni25MDivE", "Ani25ME", "Meter25MAniE")
	
};

$(document).ready(function () {
	gt = new Gettext({ 'domain': 'messages' });
	$("#p1").html(gt.gettext("Select the rubber tube length:"));
	$('#DropRubLen option[value="none"]').text(gt.gettext("Select a meter"));
    $('#DropRubLen option[value="1.5M"]').text(gt.gettext("1.5M"));
    $('#DropRubLen option[value="1.75M"]').text(gt.gettext("1.75M"));
    $('#DropRubLen option[value="2M"]').text(gt.gettext("2M"));
    $('#DropRubLen option[value="2.25M"]').text(gt.gettext("2.25M"));
    $('#DropRubLen option[value="2.5M"]').text(gt.gettext("2.5M"));
	figureOneIntro();
	figure1Screen3();
	$("#Next").attr('value',gt.gettext('Next'));

	$("#reset").click(function () {//*--Function to click reload button to reset all events---
		window.location.reload();
	});
}) //onload ends	

function figureOneIntro() {
	$(".sim-controls").hide();
	$(".sim-div").css({ "width": "100%" });
	help = 0;
	roundflaskCore();
}
function roundflaskCore() {
	$("#flaskwithwater").css({ "cursor": "pointer" })
	$("#flaskwithwater").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		$("#flaskwithwater").animate({ top: "25.5%" }, 1000, 'linear');
		$("#flaskwithwater").animate({ left: "27.3%" }, 1000, 'linear');
		setTimeout(function () {
			$('#flaskwithwater').css('pointer-events', 'none');
		}, 1000);
		setTimeout(function () {
		$("#simHelp").css({ "pointer-events": "" })
		help = 1;
		corkCore();}, 2000);
	});
}
function corkCore() {
	$("#cork").css({ "cursor": "pointer" })
	$("#cork").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		$("#cork").animate({ top: "5.5%", width: "4%", height: "7%" }, 1000, 'linear');
		$("#cork").animate({ left: "32.5%" }, 1000, 'linear');
		$("#cork").delay(500).animate({ top: 25.5 + '%' },
			{ duration: 1500, step: function (now) { } });
		setTimeout(function () {
			$('#cork').css('pointer-events', 'none');
		}, 1000);

		setTimeout(function () {
			$("#simHelp").css({ "pointer-events": "" })
			help = 2;
			glasstube();}, 3800);
	});
}
function glasstube() {
	$("#glasstube").css({ "cursor": "pointer" })
	$("#glasstube").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		$("#glasstube").animate({ top: "10.5%" }, 1500, 'linear');
		$("#glasstube").animate({ left: "29.4%" }, 1500, 'linear');
		$("#glasstube").animate({ deg: 90 },
			{ duration: 1500, step: function (now) { removeTrip(); $(this).css({ transform: 'rotate(' + now + 'deg)' }); } }
		);
		$("#glasstube").delay(500).animate({ top: 27.5 + '%', left: 29.4 + '%' },
			{ duration: 1500, step: function (now) { } });
		setTimeout(function () {
			$('#glasstube').css('pointer-events', 'none');
		}, 1000);
		
		setTimeout(function () {
			$("#simHelp").css({ "pointer-events": "" })
			help = 3;
			rubbertubetube();}, 5500);
		
	});
}
function rubbertubetube() {
	$("#rubbertube").css({ "cursor": "pointer" })
	$("#rubbertube").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		$("#rubbertube").animate({ height: 4 +'%',top: "2.5%" }, 1500, 'linear');
		$("#rubbertube").animate({ left: "27.5%", width: 14 + '%' }, 1500, 'linear');
		$("#rubbertube").animate({ deg: 90 },
			{ duration: 1500, step: function (now) { removeTrip(); $(this).css({ transform: 'rotate(' + now + 'deg)' }); } }
		);
		$("#rubbertube").delay(500).animate({  top: 10.5 + '%', left: 27.5 + '%' }, { duration: 1500, step: function (now) { } });
		setTimeout(function () {
			$('#rubbertube').css('pointer-events', 'none');
		}, 1000);
		
		setTimeout(function () {
			$("#simHelp").css({ "pointer-events": "" })
			help = 4;burner();}, 5000);
		
	});
}
function burner() {
	$("#burnerDiv").css({ "cursor": "pointer" })
	$("#burnerDiv").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		ImageAnimationOneTime("fireAnimation", "fire", Imageflame, 20, 30)
		$("#water").fadeOut();
		ImageAnimationOneTime("waterBoilAnimation", "waterBoil", ImageWaterBoil, 50, 16)
		ImageAnimationOneTime("beakerfoggAni", "beakfogg", Imagebeakerfogg, 60, 5)
		$('#burnerDiv').css('pointer-events', 'none');
		help = 5;
		setTimeout(function () {
			$("#waterHalf").fadeIn();
			$("#simHelp").css({ "pointer-events": "" })
			pinchCork()
		}, 9000);
	});
}
function pinchCork() {
	$("#pinchcork").css({ "cursor": "pointer" })
	$("#pinchcork").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		$('#labburner,#labroundflask,#labcork,#labglasstube,#labpinchcork,#labrubbertube').fadeOut();
		removeTrip();
		$("#pinchcork").animate({ top: "1.5%" }, 2000, 'linear');
		$("#pinchcork").animate({ left: "33.3%" }, 2000, 'linear');
		$("#pinchcork").delay(500).animate({ top: 10.5 + '%', left: 33.3 + '%' },
			{
				duration: 1500, step: function (now) { }
			});
		$("#pinchcork").delay(500).animate({ left: 31.3 + '%' },
			{
				duration: 1500, step: function (now) { }
			});
		setTimeout(function () {
			$('#pinchcork').css('pointer-events', 'none');
		}, 1000);
		setTimeout(function () {
			$("#simHelp").css({ "pointer-events": "" })
			help = 6;
			$('#Next').fadeIn();
		}, 7000);
	});
}
function questioAns() {

	QuizCoreExecuter(1, gt.gettext("What will happen when we remove pinch cork?"), gt.gettext("Water flows from the container to flask."),
		gt.gettext("Water flows from the flask to container."), 'null', 'null', gt.gettext("Water flows from the container to flask."), 1, 1)
	ScreenThreeCore();

}
function ScreenThreeCore() {
	$("#page1Div").hide();
	$(".sim-controls,#page2Div").show();
	$(".sim-div").css({ "width": "80%" });
	// help=8;
	pinchCorkCore();
}
function pinchCorkCore() {
	$("#pinchcorkOne").css({ "cursor": "pointer" });
	$("#pinchcorkOne").click(function () {
		$("#simHelp").css({ "pointer-events": "none" })
		removeTrip();
		$("#pinkwater").fadeOut();
		ImageAnimationOneTime("Meter25MAniE", "Ani25ME", ImageEMeter, 180, 0)
		// $("#pinchcorkOne").animate({ top: 88.5 + '%', left: 85.3 + '%' });
		$("#pinchcorkOne").fadeOut();
		setTimeout(function () {
			$("#pinchcorkOne").css('pointer-events', 'none');
			$("#DropRubLen").prop("disabled", false);
			// $("#DropRubLen").css('pointer-events', '');
			$("#DropRubLen").css({ "cursor": "pointer" });
			$("#pinkwater,#pinchcorkSev").fadeIn();
			$("#simHelp").css({ "pointer-events": "" })
			help = 9;
		}, 5500);
		
		removeTrip();
		DropdownCore();
	});
}
function DropdownCore() {

	$("#DropRubLen").change(function () {
		sel = $(this).val()
		if (sel == "1.5M") {
			$("#simHelp").css({ "pointer-events": "none" })
			$("#DropRubLen").css('pointer-events', 'none');
			$("#pinkwater,#pinchcorkOne,#pinchcorkThr,#pinchcorkFou,#pinchcorkFiv,#pinchcorkSix,#pinchcorkSev").fadeOut();
			removeTrip();
			dropCount++;
			$("select option[value='1.5M']").prop('disabled', true);
			ImageAnimationOneTime("Meter15MAniA", "Ani15MA", ImageAMeter, 200, 0)
			// console.log("AA");
			setTimeout(function () {
				$("#simHelp").css({ "pointer-events": "" })
				$("#pinkwater,#pinchcorkTwo").fadeIn();
				$("#DropRubLen").css('pointer-events', '');
			}, 10000);
		}
		else if (sel == "1.75M") {
			$("#simHelp").css({ "pointer-events": "none" })
			// $("#pinchcorkTwo").animate({ top: 88.5 + '%', left: 85.3 + '%' });
			$("#DropRubLen").css('pointer-events', 'none');
			$("#pinkwater,#pinchcorkTwo,#pinchcorkOne,#pinchcorkFou,#pinchcorkFiv,#pinchcorkSix,#pinchcorkSev").fadeOut();
			removeTrip();
			dropCount++;
			$("select option[value='1.75M']").prop('disabled', true);
			ImageAnimationOneTime("Meter175MAniB", "Ani175MB", ImageBMeter, 200, 0)
			setTimeout(function () {
				$("#simHelp").css({ "pointer-events": "" })
				$("#pinkwater,#pinchcorkThr").fadeIn();
				$("#DropRubLen").css('pointer-events', '');
			}, 8800);
		}
		else if (sel == "2M") {
			$("#simHelp").css({ "pointer-events": "none" })
			// $("#pinchcorkThr").animate({ top: 88.5 + '%', left: 85.3 + '%' });
			$("#DropRubLen").css('pointer-events', 'none');
			$("#pinkwater,#pinchcorkThr,#pinchcorkTwo,#pinchcorkOne,#pinchcorkFiv,#pinchcorkSix,#pinchcorkSev").fadeOut();
			removeTrip();
			dropCount++;
			$("select option[value='2M']").prop('disabled', true);
			ImageAnimationOneTime("Meter2MAniC", "Ani2MC", ImageCMeter, 180, 0)
			setTimeout(function () {
				$("#simHelp").css({ "pointer-events": "" })
				$("#pinkwater,#pinchcorkFou").fadeIn();
				$("#DropRubLen").css('pointer-events', '');
			}, 7300);
		}
		else if (sel == "2.25M") {
			$("#simHelp").css({ "pointer-events": "none" })
			// $("#pinchcorkFou").animate({ top: 88.5 + '%', left: 85.3 + '%' });
			$("#DropRubLen").css('pointer-events', 'none');
			$("#pinkwater,#pinchcorkFou,#pinchcorkThr,#pinchcorkTwo,#pinchcorkOne,#pinchcorkSix,#pinchcorkSev").fadeOut();
			removeTrip();
			dropCount++;
			$("select option[value='2.25M']").prop('disabled', true);
			ImageAnimationOneTime("Meter225MAniD", "Ani225MD", ImageDMeter, 180, 0)
			setTimeout(function () {
				$("#simHelp").css({ "pointer-events": "" })
				$("#pinkwater,#pinchcorkFiv").fadeIn();
				$("#DropRubLen").css('pointer-events', '');
			}, 6500);
		}
		else if (sel == "2.5M") {
			$("#simHelp").css({ "pointer-events": "none" })
			// $("#pinchcorkFiv").animate({ top: 88.5 + '%', left: 85.3 + '%' });
			$("#DropRubLen").css('pointer-events', 'none');
			$("#pinkwater,#pinchcorkFiv,#pinchcorkFou,#pinchcorkThr,#pinchcorkTwo,#pinchcorkOne,#pinchcorkSev").fadeOut();
			removeTrip();
			dropCount++;
			$("select option[value='2.5M']").prop('disabled', true);
			ImageAnimationOneTime("Meter25MAniE", "Ani25ME", ImageEMeter, 180, 0)
			setTimeout(function () {
				$("#simHelp").css({ "pointer-events": "" })
				$("#pinkwater,#pinchcorkSix").fadeIn();
				$("#DropRubLen").css('pointer-events', '');
			}, 5500);
		}
		if (dropCount == 5) {
			$("#DropRubLen").prop("disabled", true);
			$("#DropRubLen").css({ "cursor": "not-allowed" });
			setTimeout(function () {
			// $("#pinkwater").css({opacity: 0.1});
			$("#insfrNote").fadeIn();
			help = 10;
			removeTrip();
		    }, 5500);
			// $("#Next7").delay(1000).fadeIn(1000);
		}
	});
}

function figure1Screen3() {
	$("#Next").click(function () {
		removeTrip();
		$("#DropRubLen").prop("disabled", true);
		$("#DropRubLen").css({ "cursor": "not-allowed" });
		help = 7;
		removeTrip();
		questioAns();
		// ScreenThreeCore();
	});
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
				clearInterval(CLEARImageAnimation);
			}
			else {
				GlobalVariable = 0;
				ANIMATIONTimesReached++;
			}
		}
	}, ANIMATIONSpeed);
}