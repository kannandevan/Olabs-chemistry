var helpMsg;
var Droped = false, helpcount = 0, temp = 0;
var imageArray1 = [
	"../CHE/INC/To_study_the_changes_in_the_state_of_sublimate_solids_on_heating/images/FlameAnimation/Flame1.png",
	"../CHE/INC/To_study_the_changes_in_the_state_of_sublimate_solids_on_heating/images/FlameAnimation/Flame2.png",
	"../CHE/INC/To_study_the_changes_in_the_state_of_sublimate_solids_on_heating/images/FlameAnimation/Flame3.png",
	"../CHE/INC/To_study_the_changes_in_the_state_of_sublimate_solids_on_heating/images/FlameAnimation/Flame4.png",
	"../CHE/INC/To_study_the_changes_in_the_state_of_sublimate_solids_on_heating/images/FlameAnimation/Flame5.png"];

$(document).ready(function () {
	gt = new Gettext({ 'domain': 'messages' });
	document.getElementById("reset").value = gt.gettext("Reset");
	$("#text_con_0").html(gt.gettext("Ammonium Chloride"));
	$("#text_con_1").html(gt.gettext("Ammonium Chloride"));
	$("#text_con_2").html(gt.gettext("Drag and drop the spatula towards the bottle."));
	$("#text_con_3").html(gt.gettext("Drag and drop the funnel towards the china dish."));
	$("#text_con_4").html(gt.gettext("Drag and drop the cotton towards the top of the funnel."));
	$("#text_con_5").html(gt.gettext("Drag and drop the china dish towards tripod stand."));
	$("#text_con_6").html(gt.gettext("Drag and drop the cotton into the glass bowl."));
	$("#text_con_7").html(gt.gettext("Drag and drop the wet cotton into the top of the china dish."));
	$("#text_con_8").html(gt.gettext("Click on the knob of the burner."));
	$("#instruction").html(gt.gettext("<u><b>Instructions:</b></u>"));



	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#expName').html(gt.gettext("To study the changes in the state of sublimate solids on heating"));
	$(".labName").html(gt.gettext("Developed by Amrita University Under research grant from <br> Department of Electronics & Information Technology"));
	helpMsg = [
		gt.gettext("Click on the cap"), 
		gt.gettext("Drag and drop the spatula<br> towards the bottle"), 
		gt.gettext("Choose the correct answer."), 
		gt.gettext("Drag and drop the funnel towards the china dish"), 
		gt.gettext("Drag and drop <br> the cotton towards<br> the top of the funnel"), 
		gt.gettext("Drag and drop the china dish towards tripod stand"), 
		gt.gettext("Drag and drop the cotton<br> into the glass bowl"), 
		gt.gettext("Drag and drop the<br> wet cotton into the <br>top of the china dish"), 
		gt.gettext("Click on the knob of the burner"), 
		gt.gettext("Click on the Reset button to do the experiment again")]
	inferenceMsg = [
		gt.gettext("Ammonium Chloride is NH<sub>4</sub>Cl, which decomposes<br>  into Ammonia and Hydrochloric Acid when<br> heated by thermal decomposition.<br>NH<sub>4</sub>Cl[s]→NH<sub>3</sub>[g]+HCl[l]")];
	$('#bottleCap').click(function () {
		
		removeTrip();
		$(this).animate({ top: "128px" }, 500)
		$(this).animate({ left: "370px" }, 500)
		$(this).animate({ left: "370px", top: "200px" }, 500)
		$(this).css({ 'pointer-events': 'none' })
		$(this).css({ 'cursor': 'default' });
		$("#spatulaDiv").css({ 'cursor': 'pointer' });
		dragdrop("#spatulaDiv", "#spatulaDropArea")
		helpcount = 1;
	});

	$('#burnerOff').click(function () {
		temp = 4;
		removeTrip();
		$("#burnerOff").hide();
		$("#burnerOn").show();
		ImageAnimationOneTime("flameCls", "Flame", imageArray1, "burnerDiv", 30, 70);//animation of left plant
		$("#funnelFog").fadeIn(7000, function () {
			helpcount = 3;
			QuizCoreExecuter(1, gt.gettext("Which of the following substances will undergo sublimation?"), gt.gettext("Dry ice"), gt.gettext("Common salt"), gt.gettext("Sugar"), gt.gettext("Sand"), gt.gettext("Dry ice"), "4", 4)
			$("#Inference,#burnerOff").show();
			$("#burnerOff").css({ 'cursor': 'default', 'pointer-events': 'none' });
		})
	});

	//*--Function to click reset button to reset all events---
	$("#reset").click(function () {
		window.location.reload();
	});
});

function dragdrop(dragElement, dropArea) { //Drag function
	$(dragElement).draggable({
		containment: "#canvasBox", revertDuration: 0,
		revert: function () {
			if (!Droped) {
				if (dragElement == '#cottonDrag') {
					$("#cottonDrag").css({ 'width': '42px' });
				}
				return true;
			}
		},
		drag: function () {
			removeTrip();
			//$(dropArea).css({'z-index':2});
			if (dragElement == '#cottonDrag') {
				$("#cottonDrag").css({ 'width': '15px' });
			}
		}
	});

	$(dropArea).droppable({
		accept: dragElement,
		drop: function () {
			if (dragElement == '#spatulaDiv') {
				temp = 1;
				helpcount = 3;
				Droped = true;
				$(dragElement).css({ left: "327px", top: "132px", transform: 'rotate(' + 311 + 'deg)' })
				$("#bottle").css({ 'z-index': 1 });
				$(dragElement).animate({ left: "327px", top: "145px" }, 1000, function () {
					$("#powder").css({ 'display': 'block' });
					$(dragElement).animate({ left: "327px", top: "110px" }, function () {
						$(dragElement).css({ transform: 'rotate(' + 0 + 'deg)' });
						$(dragElement).animate({ left: "222px", top: "103px" }, 500, function () {
							$(dragElement).css({ transform: 'rotate(' + 340 + 'deg)' });
							$('#bottleCap').animate({ left: "316px", top: "145px" })
							Droped = false;
							$("#powder").fadeOut();
							$("#powderDrop").animate({ height: "71px" }, 1000, function () {
								$("#powderDrop").css({ opacity: 0 });
								$("#spatulaDiv").css({ 'cursor': 'default' });
								$("#funnel").css({ 'cursor': 'pointer' });
								$(dragElement).css({ transform: 'rotate(' + 0 + 'deg)' });
								QuizCoreExecuter(1, gt.gettext("What happens if naphthalene is used instead of ammonium chloride, Will it undergo the sublimation Process"), gt.gettext("No"), gt.gettext("Yes"), "null", "null", gt.gettext("Yes"), "1", 4)
								$(dragElement).animate({ left: "196px", top: "260px" });
								$(dragElement).draggable("disable")
								dragdrop("#funnel", "#spatulaPowderDropArea")
							});
						});
					});
				})
			}
			else if (dragElement == '#funnel') {
				helpcount = 5;
				Droped = true;
				$(dragElement).css({ left: "189px", top: "90px", transform: 'rotate(' + 180 + 'deg)' });
				$(dragElement).animate({ left: "189px", top: "109px" }, function () {
					$("#dishWithFunnel").css({ 'display': 'block' });
					$("#dish,#funnel").css({ 'display': 'none' });
					$("#cottonDrag").css({ 'cursor': 'pointer' });
					dragdrop("#cottonDrag", "#spatulaPowderDropArea");
					Droped = false;
				})
			}
			else if (dragElement == '#cottonDrag') {
				temp = 2
				helpcount = 3;
				Droped = true;
				$(dragElement).css({ left: "228px", top: "97px", width: "11px", transform: 'rotate(' + 71 + 'deg)' });
				$(dragElement).animate({ top: "107px" }, function () {
					Droped = false;
					$("#cottonDrag").css({ 'display': 'none' });
					$("#cottonDrag1").css({ 'display': 'block' });
					$("#dishWithFunnel").css({ 'cursor': 'pointer' });
					QuizCoreExecuter(1, gt.gettext("In the procedure of sublimation, the inverted funnel is plugged with cotton because __________"), gt.gettext("Cotton stops external air from entering the funnel"), gt.gettext("Cottons helps in the elimination"), gt.gettext("Ammonium chloride is an evaporating substance, which directly evaporates on heating without converting into the liquid phase"), gt.gettext("All of these"), gt.gettext("Ammonium chloride is an evaporating substance, which directly evaporates on heating without converting into the liquid phase"), "2", 4)
					dragdrop("#dishWithFunnel", "#dishDropArea");
				});
			}
			else if (dragElement == '#dishWithFunnel') {
				helpcount = 7;
				Droped = true;
				$(dragElement).css({ left: "72px", top: "100px" });
				$(dragElement).animate({ top: "121px" }, function () {
					Droped = false;
					$("#cottonDrag2").css({ 'cursor': 'pointer' });
					$("#cottonDrag2").css({ 'display': 'block' });
					dragdrop("#cottonDrag2", "#cottonDropArea");
				})
			}
			else if (dragElement == '#cottonDrag2') {
				helpcount = 8;
				Droped = true;
				$(dragElement).css({ left: "465px", top: "128px" });
				$(dragElement).animate({ top: "174px" }, 500, function () {
					$(dragElement).css({ 'display': 'none' });
					$("#wetCotton").css({ 'display': 'block', 'cursor': 'pointer' });
					Droped = false;
				})
				dragdrop("#wetCotton", "#dishDropArea");
			}
			else if (dragElement == '#wetCotton') {
				temp = 3;
				helpcount = 3;
				Droped = true;
				$(dragElement).css({ left: "72px", top: "110px", width: "73px" });
				$(dragElement).animate({ top: "121px" }, 500, function () {
					$("#q3").css({ 'display': 'none' });
					$("#qusDiv,#q4").css({ 'display': 'block' });
					$("#burnerOff").css({ 'cursor': 'pointer' });
					$("#burnerOff").css({ 'pointer-events': 'auto' })
					$("#dishDropArea").css({ 'z-index': '5' })
					QuizCoreExecuter(1, gt.gettext("What happens when ammonium chloride is heated?"), gt.gettext("Forms Ammonia and HCl"), gt.gettext("No changes"), "null", "null", gt.gettext("Forms Ammonia and HCl"), 3, 4)
				})
			}
		}

	});
}

// Animation function 
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONSpeed, ANIMATIONTimes) {
	var GlobalVariable = 0;
	var ANIMATIONTimesReached = 0;
	for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length - 1; ANIMATIONForloop++) {
		var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
		$("#" + ANIMATIONDivName).append($tempx2);
	}
	var CLEARImageAnimation = setInterval(function () {
		$('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
		$('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
		GlobalVariable++;
		if (GlobalVariable == ANIMATIONImageArray.length - 1) {
			$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
			$('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
			if (ANIMATIONTimesReached >= ANIMATIONTimes) {
				$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
				//  CLEARImageAnimation.clearIntervel();
			}
			else {
				GlobalVariable = 0;
				ANIMATIONTimesReached++;
			}
		}
	}, ANIMATIONSpeed);
}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}