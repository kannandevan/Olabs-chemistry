var displayArray, gt, helpMsg = new Array();
var helprarr, inferenceMsg, count = 0;
var zoomFlag = false;
var temp = false;
var temp1 = false;
var showArr = 0;
var spatulaFlag = false;
var imageArrayFlame = [], imageArrayClock = [], flameOne;
window.onload = function () {
	ImageInitLoad(imageArrayFlame, "flame", "testFlame", "newFlameAnimation")
	ImageInitLoad(imageArrayClock, "clock", "testClock", "newClockAnimation")
	ImageInitLoad(imageArrayClock, "clockLast", "testClockLast", "newClockAnimationLast")
};
$(document).ready(function () {
	gt = new Gettext({ 'domain': 'messages' });
  $("[data-translate]").html(function (index, originalHtml) {
    return gt.gettext(originalHtml);
  });

  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("RESET"));
	  document.getElementById("expName").innerHTML = gt.gettext(
    "Crystals of copper sulphate contain water of crystallization"
  );

	displayArray = ['block', 'none'];
	helprarr = [
		gt.gettext("Drag and drop the bottle cap to<br>open the copper sulphate bottle"),
		gt.gettext("Drag and drop the spatula<br>towards the bottle"),
		gt.gettext("Drag and drop the spatula<br> towards the burner"),
		gt.gettext("Click on the burner knob<br>to turn on the burner"),
		gt.gettext("Drag and drop the spatula towards the<br>watchglass after the clock stops"),
		gt.gettext("Click on the watchglass after the clock<br>stops to zoom the copper sulphate crystals"),
		gt.gettext("Click on the inference icon"),

	]
	inferenceMsg = [
		gt.gettext("The blue copper sulphate crystals changes to white,<br>CuSO<sub>4</sub>.5H<sub>2</sub>O -> CuSO<sub>4</sub>.H<sub>2</sub>O -> CuSO<sub>4</sub>"),
		gt.gettext("The white copper sulphate crystals changes to blue,<br>   CuSO<sub>4</sub> + 5H<sub>2</sub>O -> CuSO<sub>4</sub>.5H<sub>2</sub>O"),
	]
	showArr == 1;
	for (i = 0; i < 15; i++) {
		if (i < 9) {
			imageArrayFlame[i] = "../CHE/INC/Determine_the_crystal_of_copper_sulphate_contains_water_of_crystallization/images/flame/Burner Animation_0" + (i + 1) + ".png"
		}
		else
			imageArrayFlame[i] = "../CHE/INC/Determine_the_crystal_of_copper_sulphate_contains_water_of_crystallization/images/flame/Burner Animation_" + (i + 1) + ".png"
	}
	for (i = 0; i < 50; i++) {
		if (i < 9) {
			imageArrayClock[i] = "../CHE/INC/Determine_the_crystal_of_copper_sulphate_contains_water_of_crystallization/images/Clock Animation000" + (i + 1) + ".png"

		}
		else {
			imageArrayClock[i] = "../CHE/INC/Determine_the_crystal_of_copper_sulphate_contains_water_of_crystallization/images/Clock Animation00" + (i + 1) + ".png"
		}
	}
	$('#instruction').html(gt.gettext("Instruction:"));
	$('#instruction1').html(gt.gettext("1. Drag and Drop the bottle cap to start the experiment<br><Br>2. Drag and Drop the spatula towards the bottle."));
	$("#bottleCap").css({ cursor: "pointer" })
	$("#flameField").hide()
	////openbottlecap
	$("#bottleCap").draggable(
		{
			containment: "#canvasBox",
			drag: function () {
				removeTrip()
			}
		});
	////drop
	$("#bgCanvas1").droppable({
		accept: "#bottleCap",
		drop: function () {
			showArr = 1;
			$("#bottleCap").draggable('disable')
			$('#bottleCap').animate({ left: '-71px', top: '51px' });
			$("#bottleCap").css({ cursor: "default" })
			$("#spatulaDiv").css({ cursor: "pointer" })
			$("#spatulaDiv").draggable(
				{
					containment: "#canvasBox",
					revert: function () {
						if (!temp) {
							removeTrip()
							$("#spatulaDiv1").css({ cursor: "pointer" })
							return true
						}
					},
				});
			$("#bottleArea").droppable({
				accept: "#spatulaDiv",
				drop: function () {
					$("#spatulaDiv").css({ cursor: "default" })

					$("#bottleArea").remove();
					showArr = 3
					temp = true;
					$('#spatulaDiv').animate({
						left: '66%',
						top: '43%'
					});
					$('#spatulaDiv1').css({
						transform: 'rotate(' + -35 + 'deg)'
					});
					setTimeout(function () {
						$('#copperBlue1').css({ display: 'block' });
						$('#spatulaDiv').animate({ top: '44%', transform: 'rotate( -35 deg)' });
						$('#spatulaDiv1').css({
							transform: 'rotate(' + 0 + 'deg)'
						});
					}, 1000);
					$("#burnerKnob").css({ "pointer-events": "auto", "cursor": "pointer" })
					$("#spatulaDivArea").remove();
					removeTrip();
					$("#flameField").show()
					burnerClick();
				}
			})
		}
	})
})
function burnerClick() {
	$('#spatulaDiv').draggable('disable');
	$("#burnerKnob").click(function () {
		$('#spatulaDiv').draggable('enable');
		$("#spatulaDiv").css({ cursor: "pointer" })
		removeTrip();
		$('#burnerKnob').css({ "pointer-events": "none" })
		flameOne = ImageAnimationINFinity("newFlameAnimation", "testFlame", imageArrayFlame, 100)
		showArr = 2
		$("#spatulaDiv").draggable(
			{
				containment: "#canvasBox",
				revert: "invalid",
				drag: function () {
					$("#spatulaDiv1").css({ cursor: "pointer" })
					$("#spatulaDiv").css({ cursor: "pointer" })
					removeTrip()
				}
			});
		$("#flameField").droppable(
			{
				accept: "#spatulaDiv",
				drop: function () {
					removeTrip();
					showArr = 4;
					$("#spatulaDiv").css({ cursor: "default" })
					$("#spatulaDiv1").css({ cursor: "default" })
					$("#burnerKnob").css({ cursor: "pointer" })
					$('#bottleCap').animate({ top: '-25px', left: '4px' }, 600);
					$('#spatulaDiv').css({ left: '17.5%', top: '22%' });
					$("#copperBlue1").show();
					$('#spatulaDiv').draggable('disable');
					$("#bottleCap").draggable("disable")
					ImageAnimationOneTime("newClockAnimation", "testClock", imageArrayClock, 100, 1)

					$(function faded() {
						$("#copperBlue1").delay(6000).fadeOut(5000, function () {
						})
						$("#copperWhite1").delay(6000).fadeIn(5000, function () {
							$("#spatulaDiv1").css({ cursor: "pointer" })
							$("#inferenceImg").show();
							showArr = 6;
							$('#flameField').css("display", "none")
							$("#inferenceImg").css({ cursor: "pointer" })
							clearAnimation(flameOne, "newFlameAnimation")
							$("#burner").show();
							setTimeout(function () {
								$('#spatulaDiv').draggable("enable");
								$('#spatulaDiv').draggable({
									drag: function () {
										removeTrip();
										$('#bottleArea').hide();
										$('#flameField').droppable("disable")
										$("#inferenceImg").hide();
										$('#shift').css({ display: "none" });
										$('#burner').css({ display: "none" });
									}
								})

								$("#mainDiv").droppable(
									{
										drop: function () {
											removeTrip();
											$("#spatulaDiv1").css({ cursor: "default" })
											$("#spatulaDiv").draggable('disable')

											$("#watchglassArea").css({ cursor: "pointer" })
											showArr = 5
											$('#spatulaDiv').css({ left: 321 + 'px', top: 207 + 'px' });
											$('#spatulaDiv').animate(
												{ deg: -39 },
												{
													duration: 1000,
													step: function (now) {
														$(this).css({ transform: 'rotate(' + now + 'deg)' });
													}

												});
											setTimeout(function () {
												ImageAnimationOneTime("newClockAnimation", "testClock", imageArrayClock, 100, 1)

											}, 1000)
											$('#spatulaDiv').animate(
												{ deg: 0 },
												{
													duration: 1000,
													step: function (now) {
														$(this).animate({ top: "73%", left: "56%" });

														$('#spatulaDiv').css({ transform: 'rotate(' + now + 'deg)' });
														$('#copperWhite1').css({ display: 'none' });
														$('#copperWhite').css({ display: 'block' });
														$("#copperWhite").delay(5000).fadeOut(4000, function () {
														})
														$("#copperBlue2").delay(5000).fadeIn(4000, function () {
															$("#watchglassArea").css({ cursor: "pointer" });
															$("#copperBlue2").css({ cursor: "pointer" });
															$("#inferenceImg1").css({ display: 'block' });
															$("#inferenceImg1").css({ cursor: "pointer" })
															setTimeout(function () {
																watchglassZoomView();
															}, 3000)
														})
													}
												})
										}
									}
								)

							}, 3000)
						})
					})
				}
			});
	})
}
function watchglassZoomView() {
	$("#watchglassArea,#copperBlue2").click(function () {
		removeTrip();
		showArr = 7;
		$("#zoomImg").css({ display: 'block' });
		$("#watchglassDiv").hide();
		$("#bgCanvas1", "#zoomout,#spatulaDiv").css({ "display": 'none' });
		$("#copperBlue2,#spatulaDiv2,#spatulaDiv1").css({ "display": "none" })
		$("#bgCanvas2,#watchglassZoom").delay(100).fadeIn(500)
		$('#inference').css({ display: displayArray[0] });
		$("#inference").show("scale", 500)
	});
}
/////control help button
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}
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

function ImageAnimationINFinity(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed) {
	var GlobalVariable = 0;
	var ANIMATIONTimesReached = 0;
	var CLEARImageAnimation = setInterval(function () {
		$('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
		$('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
		GlobalVariable++;
		if (GlobalVariable == ANIMATIONImageArray.length) {
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
