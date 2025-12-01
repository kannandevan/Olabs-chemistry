
var rowNo = 2;
var helpcount = 0
var beadCount1 = 1, beadTotalCount = 1, beadCount2 = 1;
var beadTotalCountPage3 = 1, page3BeadCount1 = 1, page3BeadCount2 = 1;
var Droped = false;
var Droped2 = false;
var Droped3 = false;
var Droped4 = false;
var Droped5 = false;
var Droped6 = false;
var Droped7 = false;
var Droped8 = false;
var Droped9 = false;
var Droped10 = false;
var Droped11 = false;
var Droped12 = false;
var beaker1BeadsArr = [], beaker2BeadsArr = [];
var temp = 1, greenBeadCount = 0, yellowBeadCount = 0, ygBeadCount = 0, helpcount = 0;
var helpMsg;
var path = "../CHE/ANC/heating_in_beaker/images/flame/"
var imageArray1 = [path + "0001.png", path + "0002.png", path + "0003.png", path + "0004.png", path + "0005.png", path + "0006.png", path + "0007.png", path + "0008.png", path + "0009.png", path + "0010.png", path + "0011.png"
	, path + "0012.png", path + "0013.png", path + "0014.png", path + "0015.png"];

$(window).on('load', function () {
	ImageInitLoad(imageArray1, "verticalcut", "vcut", "cutCls");
});


$(document).ready(function () {
	gt = new Gettext({ 'domain': 'messages' });
	document.getElementById("expName").innerHTML = gt.gettext("Heating of Solution in a Beaker");
	$("#tripod").css({ cursor: "pointer" })
	helpMsg = [
		gt.gettext("Drag the tripod towards the burner"), 
		gt.gettext("Drag the wire gauze towards the top of the tripod"), 
		gt.gettext("Drag and drop the wash bottle near the beaker"), 
		gt.gettext("Drag the beaker to the top of the wire gauze"), 
		gt.gettext("Drag the watch glass containing porcelain chips to the top of the beaker"), 
		gt.gettext("Click on the burner switch to turn on flame"), 
		gt.gettext("Drag the thermometer to the beaker to measure the temperature"), 
		gt.gettext("Click on the burner switch to turn off flame"), 
		gt.gettext("Click on the Inference button"), 
		gt.gettext("Click on the Reset button to redo<br> the simulation")
	];
	infMsg1 = [
		gt.gettext("Heating a solution, such as water in a beaker, results in an increase in  <br>temperature due to the absorption of energy. This energy input causes<br>the water molecules to gain kinetic energy, leading to faster molecular<br>motion and,consequently, a rise in temperature. The process is essential<br>for various applications, including dissolving solutes,chemical reactions, <br> and general laboratory procedures. Monitoring temperature changes during <br>heating provides valuable information about the thermal properties of the <br>solution and aids in experimental control and analysis.")]
	// helpMsg2 = [gt.gettext("Click on the F1 Male"), gt.gettext("Click on the F1 Female")]
	// helpMsg3 = [gt.gettext("Drag the beads into corresponding matched boxes."), gt.gettext("Perform the worksheet with these values."), gt.gettext("Click on the reset button to do the experiment again.")];
	$("#botlabdiv").html(gt.gettext("WATER"));
	$("#porclabel").html(gt.gettext("PORCELAIN CHIPS"));
	$("#thermolabel").html(gt.gettext("THERMOMETER"));
	$("#tripodlabel").html(gt.gettext("TRIPOD STAND"));
	$("#burnerlabel").html(gt.gettext("BURNER"));
	$("#beakerlabel").html(gt.gettext("BEAKER"));
	$("#wirelabel").html(gt.gettext("WIRE GAUZE"));

	rowT = 16.6;
	createTable("#page1Div", "table1Row", "tableRow", "tableRow1", "tableRow2", "tableRow3", rowT);
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$("#tripod").draggable({
		containment: ".sim-div", revertDuration: 0,
		revert: function () {
			if (!Droped) {
				setTimeout(function () {
					$("#tripod").css({ left: "64%", top: "24%" });
				}, 10)
				return true;
			}
		},
		drag: function () {
			removeTrip();
			$("#tripoddiv").css({ 'display': 'none' });
		}
	})
	$("#dropA").droppable({
		accept: "#tripod",
		drop: function () {
			helpcount = 1;
			Droped = true;
			$("#tripod").css({ cursor: "default" })
			$("#wiregause").css({ cursor: "pointer" })
			$("#tripod").css({ left: "3%", top: "51%" });
			$('#tripod').draggable('disable');
			$("#wiregause").draggable({
				containment: ".sim-div", revertDuration: 0,
				revert: function () {
					if (!Droped2) {
						setTimeout(function () {
							$("#wiregause").css({ left: "32%", top: "79%" });
						}, 10)
						return true;
					}
				},
				drag: function () {
					removeTrip();
					$("#wirelabdiv").css({ 'display': 'none' });
				}
			})
			$("#dropA").droppable({
				accept: "#wiregause",
				drop: function () {
					helpcount = 2;
					Droped2 = true;
					$("#wiregause").css({ cursor: "default" })
					$("#wholeBottle").css({ cursor: "pointer" })
					$("#wiregause").css({ left: "2%", top: "51%" });
					$('#wiregause').draggable('disable');
					$("#dropA").hide()
					$("#dropB").show()

					$("#wholeBottle").draggable({
						containment: ".sim-div", revertDuration: 0,
						revert: function () {
							if (!Droped3) {
								setTimeout(function () {
									$("#wholeBottle").css({ left: "39%", top: "41%" });
								}, 10)
								return true;
							}
						},
						drag: function () {
							removeTrip();
						}
					})
					$("#dropB").droppable({
						accept: "#wholeBottle",
						drop: function () {
							helpcount = 3;
							Droped3 = true;
							$("#wholeBottle").css({ cursor: "default" })
							$("#wholeBeakerA").css({ cursor: "pointer" })
							$("#wholeBottle").css({ left: "4%", top: "45%" });
							$('#wholeBottle').draggable('disable');
							$("#wholeBottle").css({ left: 37 + '%', top: 4 + '%' })
							$("#wholeBottle").animate(
								{ deg: -70 },
								{
									duration: 1200, step: function (now) {
										$(this).css({ transform: 'rotate(' + now + 'deg)' });
									}
								});
							$("#pourline").delay(1200).show("fade", 500, function () { $("#beakerWaterA").show("blind", { direction: "down" }) }),
								$("#wholeBottle").animate({ left: 37 + '%', top: 4 + '%' }, { duration: 800 }),
								$("#wholeBottle").animate({ left: 40 + '%', top: 4 + '%' }, { duration: 800 }),
								$("#pourline").delay(500).hide("fade", 500),
								$("#wholeBottle").animate(

									{ deg: 0 },
									{
										duration: 1200, step: function (now) {
											$(this).css({ transform: 'rotate(' + now + 'deg)' });

										}
									}
								);
							$("#wholeBottle").animate({ left: 39 + '%', top: 44 + '%' }, function () {
								$('#funnel').draggable('enable');
								$("#dropA").show();
								$("#dropB").hide();
							})

							$("#wholeBeakerA").draggable({
								containment: ".sim-div", revertDuration: 0,
								revert: function () {
									if (!Droped4) {
										setTimeout(function () {
											$("#wholeBeakerA").css({ left: "28%", top: "51%" });
										}, 10)
										return true;
									}
								},
								drag: function () {
									removeTrip();
									$("#beakerdiv").css({ 'display': 'none' });
								}
							})

							$("#dropA").droppable({
								accept: "#wholeBeakerA",
								drop: function () {
									helpcount = 4;
									Droped4 = true;
									$('#wholeBeakerA').draggable('disable');
									$("#wholeBeakerA").css({ cursor: "default" })
									$("#wholeWatchglassA").css({ cursor: "pointer" })
									$("#wholeBeakerA").css({ left: "9%", top: "30%" });

									$("#wholeWatchglassA").draggable({
										containment: ".sim-div", revertDuration: 0,
										revert: function () {
											if (!Droped5) {
												setTimeout(function () {
													$("#wholeWatchglassA").css({ left: "48%", top: "64%" });
												}, 10)
												return true;
											}
										},
										drag: function () {
											removeTrip();
										}
									})

									$("#dropC").droppable({
										accept: "#wholeWatchglassA",
										drop: function () {
											helpcount = 5;
											Droped5 = true;
											$("#wholeWatchglassA").css({ cursor: "default" })
											$('#wholeWatchglassA').draggable('disable');
											$("#burnerOff").css({ cursor: "pointer" })
											$("#wholeWatchglassA").css({ left: 11 + '%', top: 11 + '%' })
											$("#wholeWatchglassA").animate(
												{ deg: -70 },
												{
													duration: 1200, step: function (now) {
														$(this).css({ transform: 'rotate(' + now + 'deg)' });
													}
												});
											$("#powderfall").delay(1200).show("fade", 500, function () { $("#powderfall").hide("blind", { direction: "down" }), $("#porcelain").hide("fade") })
											$("#porcelain2").delay(1400).show("fade", 500),

												$("#wholeWatchglassA").delay(500).animate(

													{ deg: 0 },
													{
														duration: 1200, step: function (now) {
															$(this).css({ transform: 'rotate(' + now + 'deg)' });

														}
													}
												);
											$("#wholeWatchglassA").animate({ left: 48 + '%', top: 64 + '%' }, function () {
											})

											$("#burnerOff").click(function () {
												helpcount = 6;
												$("#burnerOff").css({ cursor: "default" })
												$("#thermometer").css({ cursor: "pointer" })
												$("#burnerOn,#verticalcut").show();
												$("#burnerOff").hide();
												ImageAnimationINFinity("cutCls", "vcut", imageArray1, 10)

												$("#thermometer").draggable({
													containment: ".sim-div", revertDuration: 0,
													revert: function () {
														if (!Droped6) {
															setTimeout(function () {
																$("#thermometer").css({ left: "90%", top: "35%" });
															}, 10)
															return true;
														}
													},
													drag: function () {
														removeTrip();
													}
												})
												$("#dropC").droppable({
													accept: "#thermometer",
													drop: function () {
														helpcount = 7;
														Droped6 = true;
														$('#thermometer').draggable('disable');
														$("#thermometer").css({ cursor: "default" })
														$("#burnerOn").css({ cursor: "pointer" })
														$("#wholeBeakerA").css('zIndex', '2');
														$("#thermometer").css({ left: 14 + '%', top: 7 + '%' })
														$("#thermoread").show("fade", 700, function () {
															$("#thermoread").delay(3000).hide("fade")
														});
														$("#burnerOn").click(function () {
															helpcount = 8;
															removeTrip();
															$("#burnerOff,#inference").show();
															$("#burnerOn,#verticalcut").hide();
														})
													}
												})
											})
										}
									})
								}
							})
						}
					})
				}
			})
		}
	})
































});
function selectImage() {
	$("#page4tableBead" + temp).css({ cursor: 'pointer' });
	if (beadPairImg == 'GreenPairBead') {
		dragdrop("#page4tableBead" + temp, '#greenBeadDropBox');
	}
	else if ((beadPairImg == 'GYPairBead') || (beadPairImg == 'YGPairBead')) {
		dragdrop("#page4tableBead" + temp, '#gyBeadDropBox');
	}
	else if (beadPairImg == 'YellowPairBead') {
		dragdrop("#page4tableBead" + temp, '#yellowBeadDropBox');
	}
}

function createTable(container, tableName, tableRow, tableRow1, tableRow2, tableRow3, rowT) {
	var rowTop = rowT;

	for (i = 2; i <= 8; i++) {
		var divOne = $('<div></div>').attr({ class: tableRow, id: tableName + i });
		$(container).append(divOne);
		$("#" + tableName + i).css({ top: rowTop + '%' });
		rowTop += 8;
	}
	rowTop = rowT;
	for (i = 10; i <= 16; i++) {
		var divOne = $('<div></div>').attr({ class: tableRow1, id: tableName + i });
		$(container).append(divOne);
		$("#" + tableName + i).css({ top: rowTop + '%' });
		rowTop += 8;
	}
	rowTop = rowT;
	for (i = 18; i <= 24; i++) {
		var divOne = $('<div></div>').attr({ class: tableRow2, id: tableName + i });
		$(container).append(divOne);
		$("#" + tableName + i).css({ top: rowTop + '%' });
		rowTop += 8;

	}
	rowTop = rowT;
	for (i = 26; i <= 32; i++) {
		var divOne = $('<div></div>').attr({ class: tableRow3, id: tableName + i });
		$(container).append(divOne);
		$("#" + tableName + i).css({ top: rowTop + '%' });
		rowTop += 8;

	}
}

function removeTrip() {
	if (tripFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripFlag = false;
	}
}



// Animation function 
// function ImageAnimationOneTime(ANIMATIONImageClassName,ANIMATIONImageIdName,ANIMATIONImageArray,ANIMATIONSpeed,ANIMATIONTimes)
// {   var GlobalVariable=0;
//         var ANIMATIONTimesReached=0;
//         var CLEARImageAnimation=setInterval(function() {
//             $('#'+ANIMATIONImageIdName+(GlobalVariable-1)).css({'display':'none'});
//             $('#'+ANIMATIONImageIdName+GlobalVariable).css({'display':'block'});
//             GlobalVariable++;
//             if(GlobalVariable==ANIMATIONImageArray.length)
//             {
//                 $('.'+ANIMATIONImageClassName).css({'display':'none'});
//                 $('#'+ANIMATIONImageIdName+(0)).css({'display':'block'});
//                 if(ANIMATIONTimesReached>=ANIMATIONTimes)
//                 {
//                     $('.'+ANIMATIONImageClassName).css({'display':'none'});
//                     CLEARImageAnimation.clearIntervel();
//                 }
//                 else
//                 {
//                     GlobalVariable=0;
//                     ANIMATIONTimesReached++;
//                 }
//             }
//         },ANIMATIONSpeed);
//     }

// function ImageInitLoad(ANIMATIONImageArray,ANIMATIONDivName,ANIMATIONImageIdName,ANIMATIONImageClassName)
//     {
//         for(var ANIMATIONForloop=0;ANIMATIONForloop<ANIMATIONImageArray.length;ANIMATIONForloop++)
//         {
//             var $tempx2=$("<img src='"+ANIMATIONImageArray[ANIMATIONForloop]+"'/>").attr({id:ANIMATIONImageIdName+ANIMATIONForloop,class:ANIMATIONImageClassName,display:"none"});
//             $("#"+ANIMATIONDivName).append($tempx2);
//         }
//     }


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
