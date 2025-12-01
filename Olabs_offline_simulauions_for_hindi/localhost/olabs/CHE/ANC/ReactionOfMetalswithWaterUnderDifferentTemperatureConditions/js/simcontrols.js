var help;
var help = 0;
var Imageflame = [];
var ImagebeakerBoil = [];
var Imagebeakerfogg = [];
var ImageSodiumFire = [];
var ImageMegniupdwn = [];
var Imagebubble = [];
var ImageflameOne = [];
var ImagebubbleOne = [];
// var tripClickFlag = false;

$(document).ready(function () {
	for (a = 0; a < 15; a++) {
		Imageflame[a] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/flameAnimat/" + (a + 1) + ".png"
	}
	for (b = 0; b < 38; b++) {
		ImagebeakerBoil[b] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/beakerAnimat/" + (b + 1) + ".png"
	}
	for (c = 0; c < 25; c++) {
		Imagebeakerfogg[c] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/foggAnimat/" + (c + 1) + ".png"
	}
	for (d = 0; d < 68; d++) {
		ImageSodiumFire[d] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/sodiumAnimat/" + (d + 1) + ".png"
	}
	for (e = 0; e < 166; e++) {
		ImageMegniupdwn[e] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/magniAnimat/" + (e + 1) + ".png"
	}
	for (f = 0; f < 20; f++) {
		Imagebubble[f] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/bubbleAnimat/" + (f + 1) + ".png"
	}
	for (g = 0; g < 15; g++) {
		ImageflameOne[g] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/flameAnimatOne/" + (g + 1) + ".png"
	}
	for (h = 0; h < 15; h++) {
		ImagebubbleOne[h] = "../CHE/ANC/ReactionOfMetalswithWaterUnderDifferentTemperatureConditions/images/bubbleAnimatOne/" + (h + 1) + ".png"
	}
}) //onload ends

window.onload = function () {

	document.getElementById("expName").innerHTML = gt.gettext("Reaction of Metals with Water Under Different Temperature Conditions");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	helpMsg = [gt.gettext("To show or hide the metals information,<br> click or unclick the circle button"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Sodium"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube A"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Magnesium"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube B"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Zinc"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube C"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Lead"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube D"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Iron"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube E"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Aluminium"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube F"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Copper"),
	gt.gettext("Drag and drop the spatula<br> onto the test tube G"), gt.gettext("Click on the Next button"),
	gt.gettext("Click on the knob of the burner"),
	gt.gettext("Drag and drop the boiled<br> water into the test tubes A, B,<br> C, D, E and F, respectively."),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Magnesium"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube A"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Zinc"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube B"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Lead"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube C"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Iron"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube D"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Aluminium"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube E"),
	gt.gettext("Drag and drop the spatula into<br> the watch glass containing Copper"),
	gt.gettext("Drag and drop the <br>spatula onto the test tube F"),
	gt.gettext("Click on the Next button"), gt.gettext("Click on the boiling tube"),
	gt.gettext("Click on the glass wool"), gt.gettext("Click on the single bored cork"),
	gt.gettext("Click on the delivery tube"), gt.gettext("Click on the Next button"),
	gt.gettext("Click on the watch<br>glass containing Zinc"), gt.gettext("Click on the knob of the burner"),
	gt.gettext("Click on the watch<br>glass containing Iron"), gt.gettext("Click on the watch<br>glass containing Aluminium"),
	gt.gettext("Click on the watch<br>glass containing Lead"), gt.gettext("Click on the knob of the burner"),
	gt.gettext("Click on the watch<br>glass containing Copper"),
	gt.gettext("Click on the Reset button<br> to redo the experiment")]



	ImageInitLoad(Imageflame, "InhalationDiv", "inha", "InhalationAni")
	ImageInitLoad(ImagebeakerBoil, "beakerBoilDiv", "beakBoi", "beakerBoilAni")
	ImageInitLoad(Imagebeakerfogg, "beakerfoggDiv", "beakfogg", "beakerfoggAni")
	ImageInitLoad(ImageSodiumFire, "SodiumFireDiv", "SodiumFire", "SodiumFireAni")
	ImageInitLoad(ImageMegniupdwn, "MegniupdwnDiv", "Megniupdwn", "MegniAni")
	ImageInitLoad(Imagebubble, "bubbleDiv", "bubble", "bubbleAni")
	ImageInitLoad(ImageflameOne, "InhalationDivOne", "inhaOne", "InhalationAniOne")
	ImageInitLoad(ImagebubbleOne, "bubbleDivOne", "bubbleOne", "bubbleAniOne")
};

$(document).ready(function () {
	gt = new Gettext({ 'domain': 'messages' });
	$("#coldNote").html(gt.gettext("<p><strong>Reaction of Metals with Cold Water</strong></p>"))
	$("#NextOne,#NextTwo,#NextThree").html(gt.gettext("NEXT"))
	$("#hotNote").html(gt.gettext("<p><strong>Reaction of Metals with Hot Water</strong></p>"))
	$("#SteamNote").html(gt.gettext("<p><strong>Reaction of Metals with Steam</strong></p>"))
	$("#SteamNote1").html(gt.gettext("<p><strong>Reaction of Metals with Steam</strong></p>"));
	$(".instrCls").html(gt.gettext("<b><u>Instructions:</u></b>"))
	$(".pagecls").html(gt.gettext("To show or hide the metals information, click on Circle button."))
	$("#page1P1").html(gt.gettext("1. Drag and drop the spatula into the watch glass containing <b>Sodium</b>."))
	$(".page1P3").html(gt.gettext("3. Drag and drop the spatula into the watch glass containing <b>Magnesium</b>."))
	$("#page1P2").html(gt.gettext("2. Drag and drop the spatula onto the test tube <b>A</b>."))
	$(".page1P5").html(gt.gettext("5. Drag and drop the spatula into the watch glass containing <b>Zinc</b>."))
	$("#page1P4").html(gt.gettext("4. Drag and drop the spatula onto the test tube <b>B</b>."))
	$("#page1P6").html(gt.gettext("6. Drag and drop the spatula onto the test tube <b>C</b>."))
	$(".page1P7").html(gt.gettext("7. Drag and drop the spatula into the watch glass containing <b>Lead</b>."))
	$("#page1P8").html(gt.gettext("8. Drag and drop the spatula onto the test tube <b>D</b>."))
	$(".page1P9").html(gt.gettext("9. Drag and drop the spatula into the watch glass containing <b>Iron</b>."))
	$("#page1P10").html(gt.gettext("10. Drag and drop the spatula onto the test tube <b>E</b>."))
	$(".page1P11").html(gt.gettext("11. Drag and drop the spatula into the watch glass containing <b>Aluminium</b>."))
	$("#page1P12").html(gt.gettext("12. Drag and drop the spatula onto the test tube <b>F</b>."))
	$(".page1P13").html(gt.gettext("13. Drag and drop the spatula into the watch glass containing <b>Copper</b>."))
	$("#page1P14").html(gt.gettext("14. Drag and drop the spatula onto the test tube <b>G</b>."))
	$(".page1P15").html(gt.gettext("15. Click on the Next button."))
	$("#page2P1").html(gt.gettext("1. Click on the knob of the burner."));
	$("#page2P2").html(gt.gettext("2. Drag and drop the boiled water into the test tubes <b>A, B, C, D, E</b> and <b>F</b>, respectively."));
	$("#page2P4").html(gt.gettext("4. Drag and drop the spatula onto the test tube <b>A</b>."));
	$("#page2P6").html(gt.gettext("6. Drag and drop the spatula onto the test tube <b>B</b>."));
	$("#page2P8").html(gt.gettext("8. Drag and drop the spatula onto the test tube <b>C</b>."));
	$("#page2P9").html(gt.gettext("10. Drag and drop the spatula onto the test tube <b>D</b>."));
	$("#page2P10").html(gt.gettext("12. Drag and drop the spatula onto the test tube <b>E</b>."));
	$("#page2P14").html(gt.gettext("14. Drag and drop the spatula onto the test tube <b>F</b>."));
	$(".page1P15").html(gt.gettext("15. Click on the Next button."));
	$("#page3P1").html(gt.gettext("1. Click on the boiling tube."));
	$("#page3P2").html(gt.gettext("2. Click on the glass wool."));
	$("#page3P3").html(gt.gettext("3. Click on the single bored cork."));
	$("#page3P4").html(gt.gettext("4. Click on the delivery tube."));
	$("#page3P5").html(gt.gettext("5. Click on the Next button."));
	$("#page4P1").html(gt.gettext("1. Click on the watch glass containing <b>Zinc</b>."));
	$("#page4P2").html(gt.gettext("2. Click on the knob of the burner."));
	$("#page4P3").html(gt.gettext("3. Click on the watch glass containing <b>Iron</b>."));
	$("#page4P4").html(gt.gettext("4. Click on the knob of the burner."));
	$("#page4P5").html(gt.gettext("5. Click on the watch glass containing <b>Aluminium</b>."));
	$("#page4P6").html(gt.gettext("6. Click on the knob of the burner."));
	$("#page4P7").html(gt.gettext("7. Click on the watch glass containing <b>Lead</b>."));
	$("#page4P8").html(gt.gettext("8. Click on the knob of the burner."));
	$("#page4P9").html(gt.gettext("9. Click on the watch glass containing <b>Copper</b>."));
	$("#page4P10").html(gt.gettext("10. Click on the knob of the burner."));
	$("#page4P11").html(gt.gettext("11. Click on the 'Reset' button to redo the experiment."));
	$("#intro1").html(gt.gettext("<strong>Sodium reacts violently with cold water.The reaction</strong>"));
	$("#intro2").html(gt.gettext("<strong>is so violent and exothermic in the case of sodium</strong>"));
	$("#intro3").html(gt.gettext("<strong>that the evolved hydrogen immediately catches fire.</strong>"));
	$("#intro4").html(gt.gettext("<strong>2Na<sub>(s)</sub> + 2H<sub>2</sub>O<sub>(l)</sub> → 2N<sub>a</sub>OH<sub>(aq)</sub> + H<sub>2(g)</sub></strong>"));
	$("#introOne1").html(gt.gettext("<strong>Magnesium does not react with cold water. It reacts with </strong>"));
	$("#introOne2").html(gt.gettext("<strong>hot water to form magnesium hydroxide and hydrogen. It </strong>"));
	$("#introOne3").html(gt.gettext("<strong>also starts floating due to the bubbles of hydrogen gas </strong>"));
	$("#introOne4").html(gt.gettext("<strong>sticking to its surface.</strong>"));
	$("#introOne5").html(gt.gettext("<strong>Mg<sub>(s)</sub> + 2H<sub>2</sub>O<sub>(l)</sub>→ Mg(OH)<sub>2(aq)</sub> + H<sub>2(g)</sub></strong>"));
	$("#introTwo1").html(gt.gettext("<strong>Metals like aluminium, iron and zinc do not react either</strong>"));
	$("#introTwo2").html(gt.gettext("<strong>with cold or hot water. But they react with steam to form</strong>"));
	$("#introTwo3").html(gt.gettext("<strong>metal oxide and hydrogen gas.</strong>"));
	$("#introTwo4").html(gt.gettext("<strong>&nbsp;&nbsp;2Al<sub>(s)</sub> + 3H<sub>2</sub>O<sub>(g)</sub> → Al<sub>2</sub>O<sub>3(s)</sub> + 3H<sub>2(g)</sub></strong>"));
	$("#introTwo5").html(gt.gettext("<strong>&nbsp;&nbsp;3Fe<sub>(s)</sub> + 4H<sub>2</sub>O<sub>(g)</sub> → Fe<sub>3</sub>O<sub>4(s)</sub> + 4H<sub>2(g)</sub></strong>"));
	$("#introTwo6").html(gt.gettext("<strong>&nbsp;&nbsp;Zn<sub>(s)</sub> + 2H<sub>2</sub>O<sub>(l)</sub> → Zn(OH)<sub>2(aq)</sub> + H<sub>2(g)</sub></strong>"));
	$("#introTwo7").html(gt.gettext("<strong>Metals like lead and copper do not react with cold water,</strong>"));
	$("#introTwo8").html(gt.gettext("<strong>hot water and steam.</strong>"));


	$("#circule").click(function () {
		$("#SodiumTemp1,#MegTemp1,#ZincTemp1,#LeadTemp1,#IronTemp1,#AluTemp1,#CopperTemp1").slideToggle();
	});
	$("#circuleTwo").click(function () {
		$("#MegTemp2,#ZincTemp2,#LeadTemp2,#IronTemp2,#AluTemp2,#CopperTemp2").slideToggle();
	});
	$("#circuleThree").click(function () {
		$("#ZincTemp3,#LeadTemp3,#IronTemp3,#AluTemp3,#CopperTemp3").slideToggle();
	});
	help = 1;
	sodiumCore();
	screenTwoCore();
	screenThreeCore();
	screenFourCore();

	$("#reset").click(function () {//*--Function to click reload button to reset all events---
		window.location.reload();
	});

	const lang = getLang();
	if (lang == "ml-IN") {
		$(".Note").css("font-size", "1.3vw");
	}
}) //onload ends	

//Figure 1 Functions Started
function sodiumCore() {

	$("#spatulaDiv").css({ "cursor": "pointer" })
	$("#spatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () { removeTrip() }
	});
	$("#SodiumDiv").droppable({
		accept: "#spatulaDiv",
		drop: function () {
			$("#spatulaDiv").animate({ top: "73%", left: "5%" });
			$('#spatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })

				}
			})
			$('#spatulaDiv').css('pointer-events', 'none');
			$("#SodiumDiv").hide();
			$('#spatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						//$('#spatulaDiv').animate({ top: "72%", left: "5%" });
						$('#spatulaDiv').css('pointer-events', '');
						//$("#spatulaDiv").css({ "cursor": "pointer" })
						$("#sodiumCryst").show();
					}, 1600);
					//$('#spatulaDiv').css('pointer-events', 'none');
				}
			})
			help = 2;
			setTimeout(function () {
				sodiumDropA();
			}, 2200);
		}
	})
}
function sodiumDropA() {
	$("#spatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "73%", left: "5%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#SodiumADiv").droppable({
		accept: "#spatulaDiv",
		drop: function () {
			$("#spatulaDiv").hide();
			$("#spatula001").show();
			$("#sodiumCryst").fadeOut();
			$("#spatulaDiv").animate({ top: "9%", left: "12%" });
			$('#spatulaDiv').css('pointer-events', 'none');
			$('#spatulaDiv').css('cursor', 'default');
			$("#sodiumCrystOne").show();
			for (i = 0; i < 1; i++) {
				$('#spatulaDiv').css('pointer-events', 'none');
				$('#spatulaDiv').css('cursor', 'default');
				$("#sodiumCrystOne").animate({ top: 14 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#sodiumCrystOne").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#page1Div").css({ opacity: 0.1 });
				$("#AA").delay(200).fadeIn();
				ImageAnimationOneTime("SodiumFireAni", "SodiumFire", ImageSodiumFire, 200, 0)
				$("#sodiumCrystOne").hide();
				setTimeout(function () {
					$("#AA").hide();
					$("#page1Div").css({ opacity: 100 });
				}, 13600);
			}, 1500);
			setTimeout(function () {
				$("#sodiumCryst").fadeOut();
				$("#spatula001").animate({ top: "62%", left: "89%" });
				$('#spatula001').css('pointer-events', 'none');
				$("#spatula001").delay(1000).hide();
				$("#megspatulaDiv").show();
			}, 1400);
			help = 3;
			setTimeout(function () {
				megnisumCore();
			}, 15500);
		}
	})
}
function megnisumCore() {
	$("#SodiumDiv,#SodiumADiv").hide();
	$("#megspatulaDiv").css({ "cursor": "pointer" })
	$("#megspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#megniDiv").droppable({
		accept: "#megspatulaDiv",
		drop: function () {
			$("#megspatulaDiv").animate({ top: "74%", left: "20%" });
			$('#megspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#megspatulaDiv').css('pointer-events', 'none');
			$("#megniDiv").hide();
			$('#megspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#megspatulaDiv').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#magnesiumCryst").show();
					}, 2000);
				}
			})
			help = 4;
			setTimeout(function () {
				megniDropB();
			}, 2200);
		}
	})
}
function megniDropB() {

	$("#megspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "74%", left: "20%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	//
	$("#megniBDiv").droppable({
		accept: "#megspatulaDiv",
		drop: function () {
			$("#megspatulaDiv").hide();
			$("#spatula002").show();
			$("#magnesiumCryst").fadeOut();
			$("#megspatulaDiv").animate({ top: "9%", left: "24%" });
			$('#megspatulaDiv').css('cursor', 'default');
			$('#megspatulaDiv').css('pointer-events', 'none');
			$("#magnesiumCrystOne").show();
			for (i = 0; i < 1; i++) {
				$('#megspatulaDiv').css('cursor', 'default');
				$('#megspatulaDiv').css('pointer-events', 'none');
				$("#magnesiumCrystOne").animate({ top: 14 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#magnesiumCrystOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#spatula002").animate({ top: "62%", left: "89%" });
				$("#magnesiumCryst").fadeOut();
				$('#spatula002').css('pointer-events', 'none');
				$("#spatula002").hide();
				$("#zincspatulaDiv").show();
			}, 1400);
			help = 5;
			zincCore();
		}
	})
}
function zincCore() {
	$("#megniDiv,#megniBDiv").hide();
	$("#zincspatulaDiv").css({ "cursor": "pointer" })
	$("#zincspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#zinDiv").droppable({
		accept: "#zincspatulaDiv",
		drop: function () {
			$("#zincspatulaDiv").animate({ top: "75%", left: "34%" });
			$('#zincspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#zincspatulaDiv').css('pointer-events', 'none');
			$("#zinDiv").hide();
			$('#zincspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#zincspatulaDiv').css('pointer-events', '');
						//$("#zincspatulaDiv").css({ "cursor": "pointer" })
						$("#zincCryst").show();
					}, 2000);
				}
			})
			help = 6;
			setTimeout(function () {
				zincDropC();
			}, 2200);
		}
	})
}
function zincDropC() {

	$("#zincspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "34%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#zincCDiv").droppable({
		accept: "#zincspatulaDiv",
		drop: function () {
			$("#zincspatulaDiv").hide();
			$("#spatula003").show();
			$("#zincCryst").fadeOut();
			$("#zincspatulaDiv").animate({ top: "9%", left: "34%" });
			$('#zincspatulaDiv').css('cursor', 'default');
			$('#zincspatulaDiv').css('pointer-events', 'none');
			$("#zincCrystOne").show();
			for (i = 0; i < 1; i++) {
				$('#zincspatulaDiv').css('cursor', 'default');
				$('#zincspatulaDiv').css('pointer-events', 'none');
				$("#zincCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#zincCrystOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			//$("#zincCryst").hide();
			setTimeout(function () {
				$("#spatula003").animate({ top: "62%", left: "89%" });
				$("#zincCryst").fadeOut();
				$('#spatula003').css('cursor', 'default');
				$("#spatula003").hide();
				$("#leadspatulaDiv").show();
			}, 1400);
			help = 7;
			leadCore();
		}
	})
}
function leadCore() {
	$("#zinDiv,#zincCDiv").hide();
	$("#leadspatulaDiv").css({ "cursor": "pointer" })
	$("#leadspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#leadDiv").droppable({
		accept: "#leadspatulaDiv",
		drop: function () {
			$("#leadspatulaDiv").animate({ top: "75%", left: "49%" });
			$('#leadspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#leadspatulaDiv').css('pointer-events', 'none');
			$("#leadDiv").hide();
			$('#leadspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#leadspatulaDiv').css('pointer-events', '');
						//$("#zincspatulaDiv").css({ "cursor": "pointer" })
						$("#leadCryst").show();
					}, 2000);
				}
			})
			help = 8;
			setTimeout(function () {
				leadDropD();
			}, 2200);
		}
	})
}
function leadDropD() {
	$("#leadspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "49%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#leadDDiv").droppable({
		accept: "#leadspatulaDiv",
		drop: function () {
			$("#leadspatulaDiv").hide();
			$("#spatula004").show();
			$("#leadCryst").hide();
			$("#leadspatulaDiv").animate({ top: "9%", left: "46%" });
			$('#leadspatulaDiv').css('cursor', 'default');
			$('#leadspatulaDiv').css('pointer-events', 'none');
			$("#leadCrysttOne").show();
			for (i = 0; i < 1; i++) {
				$('#leadspatulaDiv').css('cursor', 'default');
				$('#leadspatulaDiv').css('pointer-events', 'none');
				$("#leadCrysttOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#leadCrysttOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			//$("#zincCryst").hide();
			setTimeout(function () {
				$("#spatula004").animate({ top: "62%", left: "89%" });
				$("#leadCryst").hide();
				$('#spatula004').css('cursor', 'default');
				$("#spatula004").hide();
				$("#iornspatulaDiv").show();
			}, 1400);
			help = 9;
			iornCore();
		}
	})
}
function iornCore() {
	$("#leadDiv,#leadDDiv").hide();
	$("#iornspatulaDiv").css({ "cursor": "pointer" })
	$("#iornspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#iornDiv").droppable({
		accept: "#iornspatulaDiv",
		drop: function () {
			$("#iornspatulaDiv").animate({ top: "75%", left: "64%" });
			$('#iornspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#iornspatulaDiv').css('pointer-events', 'none');
			$("#iornDiv").hide();
			$('#iornspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#iornspatulaDiv').css('pointer-events', '');
						//$("#zincspatulaDiv").css({ "cursor": "pointer" })
						$("#iornCryst").show();
					}, 2000);
				}
			})
			help = 10;
			setTimeout(function () {
				iornDropE();
			}, 2200);
		}
	})
}
function iornDropE() {

	$("#iornspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "64%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#iornEDiv").droppable({
		accept: "#iornspatulaDiv",
		drop: function () {
			$("#iornspatulaDiv").hide();
			$("#spatula005").show();
			$("#iornCryst").hide();
			$("#iornspatulaDiv").animate({ top: "9%", left: "56%" });
			$('#iornspatulaDiv').css('cursor', 'default');
			$('#iornspatulaDiv').css('pointer-events', 'none');
			$("#iornCrysttOne").show();
			for (i = 0; i < 1; i++) {
				$('#iornspatulaDiv').css('cursor', 'default');
				$('#iornspatulaDiv').css('pointer-events', 'none');
				$("#iornCrysttOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#iornCrysttOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			//$("#zincCryst").hide();
			setTimeout(function () {
				$("#spatula005").animate({ top: "62%", left: "88%" });
				$("#iornCryst").hide();
				$('#spatula005').css('cursor', 'default');
				$("#spatula005").hide();
				$("#aluminspatulaDiv").show();
			}, 1400);
			help = 11;
			aluminCore();
		}
	})
}
function aluminCore() {
	$("#iornDiv,#iornEDiv").hide();
	$("#aluminspatulaDiv").css({ "cursor": "pointer" })
	$("#aluminspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "88%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#aluminDiv").droppable({
		accept: "#aluminspatulaDiv",
		drop: function () {
			$("#aluminspatulaDiv").animate({ top: "75%", left: "76%" });
			$('#aluminspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#aluminspatulaDiv').css('pointer-events', 'none');
			$("#aluminDiv").hide();
			$('#aluminspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#aluminspatulaDiv').css('pointer-events', '');
						//$("#zincspatulaDiv").css({ "cursor": "pointer" })
						$("#aluminCryst").show();
					}, 2000);
				}
			})
			help = 12;
			setTimeout(function () {
				aluminDropF();
			}, 2200);
		}
	})
}
function aluminDropF() {
	$("#aluminspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "76%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#aluminFDiv").droppable({
		accept: "#aluminspatulaDiv",
		drop: function () {
			$("#aluminspatulaDiv").hide();
			$("#spatula006").show();
			$("#aluminCryst").hide();
			$("#aluminspatulaDiv").animate({ top: "9%", left: "67%" });
			$('#aluminspatulaDiv').css('cursor', 'default');
			$('#aluminspatulaDiv').css('pointer-events', 'none');
			$("#aluminiumCrystOne").show();
			for (i = 0; i < 1; i++) {
				$('#aluminspatulaDiv').css('cursor', 'default');
				$('#aluminspatulaDiv').css('pointer-events', 'none');
				$("#aluminiumCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#aluminiumCrystOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			//$("#zincCryst").hide();
			setTimeout(function () {
				$("#spatula006").animate({ top: "62%", left: "89%" });
				$("#aluminCryst").hide();
				$('#spatula006').css('cursor', 'default');
				$("#spatula006").hide();
				$("#copperspatulaDiv").show();
			}, 1400);
			help = 13;
			copperCore();
		}
	})
}
function copperCore() {
	$("#aluminDiv,#aluminFDiv").hide();
	$("#copperspatulaDiv").css({ "cursor": "pointer" })
	$("#copperspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "62%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#copperDiv").droppable({
		accept: "#copperspatulaDiv",
		drop: function () {
			$("#copperspatulaDiv").animate({ top: "75%", left: "90%" });
			$('#copperspatulaDiv').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#copperspatulaDiv').css('pointer-events', 'none');
			$("#copperDiv").hide();
			$('#copperspatulaDiv').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#copperspatulaDiv').css('pointer-events', '');
						//$("#zincspatulaDiv").css({ "cursor": "pointer" })
						$("#copperCryst").show();
					}, 2000);
				}
			})
			help = 14;
			setTimeout(function () {
				copperDropE();
			}, 2200);
		}
	})
}
function copperDropE() {
	$("#copperspatulaDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "90%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#copperGDiv").droppable({
		accept: "#copperspatulaDiv",
		drop: function () {
			$("#copperspatulaDiv").hide();
			$("#spatula007").show();
			$("#copperCryst").hide();
			$("#copperspatulaDiv").animate({ top: "8%", left: "77%" });
			$('#copperspatulaDiv').css('cursor', 'default');
			$('#copperspatulaDiv').css('pointer-events', 'none');
			$("#copperCrystOne").show();
			for (i = 0; i < 1; i++) {
				$('#copperspatulaDiv').css('cursor', 'default');
				$('#copperspatulaDiv').css('pointer-events', 'none');
				$("#copperCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#copperCrystOne").animate({ top: 64 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			//$("#zincCryst").hide();
			setTimeout(function () {
				$("#spatula007").animate({ top: "62%", left: "89%" });
				$("#copperCryst").hide();
				$('#spatula007').css('cursor', 'default');
				$('#spatula007').css('pointer-events', 'none');
				//$("#copperspatulaDiv").hide();
				//$("#copperspatulaDiv").show();
				//$("#intro").show();
				$("#TubeStandDiv,#waterA,#waterB,#waterC,#waterD,#waterE,#waterF,#waterG,#A,#B,#C,#D,#E,#F,#G").css({ opacity: 0.1 });
				$("#magnesiumCrystOne,#zincCrystOne,#leadCrysttOne,#iornCrysttOne,#aluminiumCrystOne,#copperCrystOne").css({ opacity: 0.1 });
				help = 15;
				$("#intro,#NextOne").fadeIn();
			}, 1400);
			screenTwoCore();
		}
	})
}
//Figure 1 Functions Ended

//Figure 2 Functions Started

function burnurOn() {

	$("#waterInBeaker").show();
	$("#BurnerOn").css({ "cursor": "pointer" })
	$("#BurnerOn").click(function () {
		removeTrip();
		$("#BurnerOn").hide();
		$("#BurnerOne").show();
		ImageAnimationOneTime("InhalationAni", "inha", Imageflame, 10, 25)
		$("#beakerWaterDiv").fadeOut();
		ImageAnimationOneTime("beakerBoilAni", "beakBoi", ImagebeakerBoil, 110, 0)
		ImageAnimationOneTime("beakerfoggAni", "beakfogg", Imagebeakerfogg, 80, 1)
		setTimeout(function () {
			$("#beakerWaterDiv").fadeIn();
		}, 4000);
		help = 17;
		setTimeout(function () {
			$("#BurnerOne").hide();
			$("#BurnerOn").show();
			$('#BurnerOn').css('pointer-events', 'none');
			beakerDropintest();
		}, 4000);
	});
}
function beakerDropintest() {
	$("#beakerWaterDiv").css({ "cursor": "pointer" })
	$("#beakerWaterDiv").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "20%", left: "5%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#beakerDropArea").droppable({
		accept: "#beakerWaterDiv",
		drop: function () {
			$("#beakerWaterDiv").animate({ top: "2%", left: "31%" });
			$('#beakerWaterDiv').animate({ deg: 90 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#beakerWaterDiv').css('pointer-events', 'none');
			$("#waterInBeaker").delay(1500).fadeOut();
			$("#waterVLeft").delay(1500).fadeIn();
			$("#beakerDropArea").hide();
			setTimeout(function () {
				$("#pourlineA").show();
				for (i = 0; i < 3; i++) {
					$("#pourlineA").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
					$("#pourlineA").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
				}
				$("#scwaterA").delay(200).fadeIn();
				$("#pourlineA").fadeOut();
				setTimeout(function () {
					$('#beakerWaterDiv').animate({ deg: 0 }, {
						duration: 2000,
						step: function (now) {
							$(this).css({ transform: 'rotate(' + now + 'deg)' })
							setTimeout(function () {
								$("#beakerWaterDiv").hide();
								$("#beakerWaterDivB").show();
							}, 1800);
						}
					})
				}, 1200);
			}, 2200);
			setTimeout(function () {
				testTubesDropB()
			}, 5200);
		}
	})
}
function testTubesDropB() {
	$("#beakerWaterDivB").animate({ top: "2%", left: "40%" });
	$('#beakerWaterDivB').animate({ deg: 90 }, {
		duration: 2000,
		step: function (now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' })
		}
	})
	$("#waterInBeakerB").delay(1500).fadeOut();
	$("#waterVLeftB").delay(1500).fadeIn();
	setTimeout(function () {
		$("#pourlineB").fadeIn();
		//$("#waterInBeaker").hide();
		for (j = 0; j < 3; j++) {
			$("#pourlineB").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
			$("#pourlineB").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
		}
		$("#scwaterB").delay(500).fadeIn();
		$("#pourlineB").fadeOut();
		setTimeout(function () {
			$('#beakerWaterDivB').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$("#beakerWaterDivB").hide();
						$("#beakerWaterDivC").show();
					}, 1800);
				}
			})
		}, 1200);
	}, 2200);
	setTimeout(function () {
		testTubesDropC()
	}, 5200);
}
function testTubesDropC() {
	$("#beakerWaterDivC").animate({ top: "2%", left: "50%" });
	$('#beakerWaterDivC').animate({ deg: 90 }, {
		duration: 2000,
		step: function (now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' })
		}
	})

	$("#waterInBeakerC").delay(1500).fadeOut();
	$("#waterVLeftC").delay(1500).fadeIn();
	setTimeout(function () {
		$("#pourlineC").fadeIn();
		//$("#waterInBeaker").hide();
		for (j = 0; j < 3; j++) {
			$("#pourlineC").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
			$("#pourlineC").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
		}
		$("#scwaterC").delay(500).fadeIn();
		$("#pourlineC").fadeOut();
		setTimeout(function () {
			$('#beakerWaterDivC').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$("#beakerWaterDivC").hide();
						$("#beakerWaterDivD").show();
					}, 1800);
				}
			})
		}, 1200);
	}, 2200);
	setTimeout(function () {
		testTubesDropD()
	}, 5200);
}
function testTubesDropD() {
	$("#beakerWaterDivD").animate({ top: "2%", left: "60%" });
	$('#beakerWaterDivD').animate({ deg: 90 }, {
		duration: 2000,
		step: function (now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' })
		}
	})
	$("#waterInBeakerD").delay(1500).fadeOut();
	$("#waterVLeftD").delay(1500).fadeIn();
	setTimeout(function () {
		$("#pourlineD").fadeIn();
		//$("#waterInBeaker").hide();
		for (k = 0; k < 3; k++) {
			$("#pourlineD").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
			$("#pourlineD").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
		}
		$("#scwaterD").delay(500).fadeIn();
		$("#pourlineD").fadeOut();
		setTimeout(function () {
			$('#beakerWaterDivD').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$("#beakerWaterDivD").hide();
						$("#beakerWaterDivE").show();
					}, 1800);
				}
			})
		}, 1200);
	}, 2200);
	setTimeout(function () {
		testTubesDropE()
	}, 5200);
}
function testTubesDropE() {
	$("#beakerWaterDivE").animate({ top: "2%", left: "70%" });
	$('#beakerWaterDivE').animate({ deg: 90 }, {
		duration: 2000,
		step: function (now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' })
		}
	})
	$("#waterInBeakerE").delay(1500).fadeOut();
	$("#waterVLeftE").delay(1500).fadeIn();
	setTimeout(function () {
		$("#pourlineE").fadeIn();
		//$("#waterInBeaker").hide();
		for (l = 0; l < 3; l++) {
			$("#pourlineE").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
			$("#pourlineE").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
		}
		$("#scwaterE").delay(500).fadeIn();
		$("#pourlineE").fadeOut();
		setTimeout(function () {
			$('#beakerWaterDivE').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$("#beakerWaterDivE").hide();
						$("#beakerWaterDivF").show();
					}, 1800);
				}
			})
		}, 1200);
	}, 2200);
	setTimeout(function () {
		testTubesDropF()
	}, 5200);
}
function testTubesDropF() {
	$("#beakerWaterDivF").animate({ top: "2%", left: "77.5%" });
	$('#beakerWaterDivF').animate({ deg: 90 }, {
		duration: 2000,
		step: function (now) {
			$(this).css({ transform: 'rotate(' + now + 'deg)' })
		}
	})
	$("#waterInBeakerF").delay(1500).fadeOut();
	$("#waterVLeftF").delay(1500).fadeIn();
	setTimeout(function () {
		$("#pourlineF").fadeIn();
		//$("#waterInBeaker").hide();
		for (m = 0; m < 3; m++) {
			$("#pourlineF").animate({ top: 20 + "%", opacity: "1", direction: "up" }, 300, 'linear');
			$("#pourlineF").animate({ top: 40 + "%", opacity: "1", direction: "down" }, 0, 'linear');
		}
		$("#scwaterF").delay(500).fadeIn();
		$("#pourlineF").fadeOut();
		setTimeout(function () {
			$('#beakerWaterDivF').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$("#waterVLeftF").hide();
						// $("#beakerWaterDivE").hide();
						// $("#beakerWaterDivF").show();
						$("#beakerWaterDivF").animate({ top: "20%", left: "5%" });
					}, 200);
				}
			})
		}, 1200);
	}, 2200);
	help = 18;
	setTimeout(function () {
		megnimCoreScrTwo()
	}, 5200);
}
//Screen 2 spatula functions
function megnimCoreScrTwo() {
	$("#megspatulaDivTwo").css({ "cursor": "pointer" })
	$("#megspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#megniDivScTwo").droppable({
		accept: "#megspatulaDivTwo",
		drop: function () {
			$("#megspatulaDivTwo").animate({ top: "73%", left: "10%" });
			$('#megspatulaDivTwo').animate({ deg: -30 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#megspatulaDivTwo').css('pointer-events', 'none');
			$("#megniDivScTwo").hide();
			$('#megspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#megspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#magnesiumCrystTwo").show();
					}, 2000);
				}
			})
			help = 19;
			setTimeout(function () {
				megniDropAScTwo();
			}, 2200);
		}
	})
}
function megniDropAScTwo() {
	$("#megspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "73%", left: "10%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#megniADivScTwo").droppable({
		accept: "#megspatulaDivTwo",
		drop: function () {
			$("#megspatulaDivTwo").hide();
			$("#scspatula001").show();
			$("#magnesiumCrystTwo").hide();
			$("#megspatulaDivTwo").animate({ top: "10%", left: "42%" });
			$('#megspatulaDivTwo').css('cursor', 'default');
			$('#megspatulaDivTwo').css('pointer-events', 'none');
			$("#scmagnesiumCrystOne").show();
			for (i = 0; i < 1; i++) {
				// $('#megspatulaDiv').css('cursor', 'default');
				// $('#megspatulaDivTwo').css('pointer-events', 'none');
				$("#scmagnesiumCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#scmagnesiumCrystOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#page2Div").css({ opacity: 0.1 });
				$("#AA01").delay(100).fadeIn();
				ImageAnimationOneTime("MegniAni", "Megniupdwn", ImageMegniupdwn, 100, 0)
				setTimeout(function () {
					ImageAnimationOneTime("bubbleAni", "bubble", Imagebubble, 100, 5)
				}, 2200);
				$("#scmagnesiumCrystOne").hide();
				setTimeout(function () {
					$("#AA01").hide();
					$("#page2Div").css({ opacity: 100 });
				}, 16600);
			}, 1500);
			setTimeout(function () {
				$("#scspatula001").animate({ top: "64%", left: "22%" });
				//$("#magnesiumCryst").fadeOut();
				//$('#megspatulaDiv').css('pointer-events', 'none');
				$("#scspatula001").hide();
				$("#zincspatulaDivTwo").show();
			}, 1400);
			help = 20;
			setTimeout(function () {
				zincCoreScrTwo();
			}, 17500);
		}
	})
}
function zincCoreScrTwo() {
	$("#megniDivScTwo,#megniADivScTwo").hide();
	$("#zincspatulaDivTwo").css({ "cursor": "pointer" })
	$("#zincspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#zinDivscTwo").droppable({
		accept: "#zincspatulaDivTwo",
		drop: function () {
			$("#zincspatulaDivTwo").animate({ top: "75%", left: "28%" });
			$('#zincspatulaDivTwo').animate({ deg: -20 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#zincspatulaDivTwo').css('pointer-events', 'none');
			$("#zinDivscTwo").hide();
			$('#zincspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#zincspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#zincCrystTwo").show();
					}, 2000);
				}
			})
			help = 21;
			setTimeout(function () {
				zincDropBScTwo();
			}, 2200);
		}
	})
}
function zincDropBScTwo() {
	$("#zincspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "28%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#zincFDivscTwo").droppable({
		accept: "#zincspatulaDivTwo",
		drop: function () {
			$("#zincspatulaDivTwo").hide();
			$("#scspatula002").show();
			$("#zincCrystTwo").hide();
			$("#zincspatulaDivTwo").animate({ top: "10%", left: "51%" });
			$('#zincspatulaDivTwo').css('cursor', 'default');
			$('#zincspatulaDivTwo').css('pointer-events', 'none');
			$("#sczincCrystOne").show();
			for (i = 0; i < 1; i++) {
				$("#sczincCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#sczincCrystOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#scspatula002").animate({ top: "64%", left: "22%" });
				//$("#magnesiumCryst").fadeOut();
				//$('#megspatulaDiv').css('pointer-events', 'none');
				$("#scspatula002").hide();
				$("#leadspatulaDivTwo").show();
			}, 1400);
			help = 22;
			leadCoreScrTwo();
		}
	})
}
function leadCoreScrTwo() {
	$("#zincFDivscTwo").hide();
	$("#leadspatulaDivTwo").css({ "cursor": "pointer" })
	$("#leadspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#leadDivscTwo").droppable({
		accept: "#leadspatulaDivTwo",
		drop: function () {
			$("#leadspatulaDivTwo").animate({ top: "74%", left: "43%" });
			$('#leadspatulaDivTwo').animate({ deg: -20 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#leadspatulaDivTwo').css('pointer-events', 'none');
			$("#leadDivscTwo").hide();
			$('#leadspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#leadspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#leadCrystTwo").show();
					}, 2000);
				}
			})
			help = 23;
			setTimeout(function () {
				leadDropBScTwo();
			}, 2200);
		}
	})
}
function leadDropBScTwo() {
	$("#leadspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "74%", left: "43%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#leadBDivscTwo").droppable({
		accept: "#leadspatulaDivTwo",
		drop: function () {
			$("#leadspatulaDivTwo").hide();
			$("#scspatula003").show();
			$("#leadCrystTwo").hide();
			$("#leadspatulaDivTwo").animate({ top: "10%", left: "60%" });
			$('#leadspatulaDivTwo').css('cursor', 'default');
			$('#leadspatulaDivTwo').css('pointer-events', 'none');
			$("#scleadCrysttOne").show();
			for (i = 0; i < 1; i++) {
				$("#scleadCrysttOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#scleadCrysttOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#scspatula003").animate({ top: "64%", left: "22%" });
				//$("#magnesiumCryst").fadeOut();
				//$('#megspatulaDiv').css('pointer-events', 'none');
				$("#scspatula003").hide();
				$("#iornspatulaDivTwo").show();
			}, 1400);
			help = 24;
			iornCoreScrTwo();
		}
	})
}
function iornCoreScrTwo() {
	$("#leadBDivscTwo").hide();
	$("#iornspatulaDivTwo").css({ "cursor": "pointer" })
	$("#iornspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});

	$("#iornDivscTwo").droppable({
		accept: "#iornspatulaDivTwo",
		drop: function () {
			$("#iornspatulaDivTwo").animate({ top: "75%", left: "59%" });
			$('#iornspatulaDivTwo').animate({ deg: -20 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#iornspatulaDivTwo').css('pointer-events', 'none');
			$("#iornDivscTwo").hide();
			$('#iornspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#iornspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#iornCrystTwo").show();
					}, 2000);
				}
			})
			help = 25;
			setTimeout(function () {
				ironDropBScTwo();
			}, 2200);
		}
	})
}
function ironDropBScTwo() {
	$("#iornspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "59%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#iornCDivscTwo").droppable({
		accept: "#iornspatulaDivTwo",
		drop: function () {
			$("#iornspatulaDivTwo").hide();
			$("#scspatula004").show();
			$("#iornCrystTwo").hide();
			$("#iornspatulaDivTwo").animate({ top: "10%", left: "70%" });
			$('#iornspatulaDivTwo').css('cursor', 'default');
			$('#iornspatulaDivTwo').css('pointer-events', 'none');
			$("#sciornCrysttOne").show();
			for (i = 0; i < 1; i++) {
				$("#sciornCrysttOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#sciornCrysttOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#scspatula004").animate({ top: "64%", left: "22%" });
				$("#scspatula004").hide();
				$("#aluminspatulaDivTwo").show();
			}, 1400);
			help = 26;
			aluminCoreScrTwo();
		}
	})
}
function aluminCoreScrTwo() {
	$("#iornCDivscTwo").hide();
	$("#aluminspatulaDivTwo").css({ "cursor": "pointer" })
	$("#aluminspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#aluminDivscTwo").droppable({
		accept: "#aluminspatulaDivTwo",
		drop: function () {
			$("#aluminspatulaDivTwo").animate({ top: "75%", left: "75%" });
			$('#aluminspatulaDivTwo').animate({ deg: -20 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#aluminspatulaDivTwo').css('pointer-events', 'none');
			$("#iornCDivscTwo").hide();
			$('#aluminspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#aluminspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#aluminCrystTwo").show();
					}, 2000);
				}
			})
			help = 27;
			setTimeout(function () {
				aluminDropBScTwo();
			}, 2200);
		}
	})
}
function aluminDropBScTwo() {
	$("#aluminDivscTwo").hide();
	$("#aluminspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "75%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#aluminDDivscTwo").droppable({
		accept: "#aluminspatulaDivTwo",
		drop: function () {
			$("#aluminspatulaDivTwo").hide();
			$("#scspatula005").show();
			$("#aluminCrystTwo").hide();
			$("#aluminspatulaDivTwo").animate({ top: "10%", left: "79%" });
			$('#aluminspatulaDivTwo').css('cursor', 'default');
			$('#aluminspatulaDivTwo').css('pointer-events', 'none');
			$("#scaluminiumCrystOne").show();
			for (i = 0; i < 1; i++) {
				$("#scaluminiumCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#scaluminiumCrystOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#scspatula005").animate({ top: "64%", left: "22%" });
				$("#scspatula005").hide();
				$("#copperspatulaDivTwo").show();
			}, 1400);
			help = 28;
			copperCoreScrTwo();
		}
	})
}
function copperCoreScrTwo() {
	$("#aluminDivscTwo").hide();
	$("#copperspatulaDivTwo").css({ "cursor": "pointer" })
	$("#copperspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "64%", left: "22%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#copperDivscTwo").droppable({
		accept: "#copperspatulaDivTwo",
		drop: function () {
			$("#copperspatulaDivTwo").animate({ top: "75%", left: "89%" });
			$('#copperspatulaDivTwo').animate({ deg: -20 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
				}
			})
			$('#copperspatulaDivTwo').css('pointer-events', 'none');
			$("#aluminDivscTwo").hide();
			$('#copperspatulaDivTwo').animate({ deg: 0 }, {
				duration: 2000,
				step: function (now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' })
					setTimeout(function () {
						$('#copperspatulaDivTwo').css('pointer-events', '');
						//$("#megspatulaDiv").css({ "cursor": "pointer" })
						$("#copperCrystTwo").show();
					}, 2000);
				}
			})
			help = 29;
			setTimeout(function () {
				copperDropBScTwo();
			}, 2200);
		}
	})
}
function copperDropBScTwo() {
	$("#copperDivscTwo").hide();
	$("#copperspatulaDivTwo").draggable({
		containment: "#mainDiv",
		revert: function (true_drop) {
			if (!true_drop) {
				$(this).animate({
					top: "75%", left: "89%",
				})
			}
		},
		drag: function () {
			removeTrip()
		}
	});
	$("#copperEDivscTwo").droppable({
		accept: "#copperspatulaDivTwo",
		drop: function () {
			$("#copperspatulaDivTwo").hide();
			$("#scspatula006").show();
			$("#copperCrystTwo").hide();
			$("#copperspatulaDivTwo").animate({ top: "10%", left: "88%" });
			$('#copperspatulaDivTwo').css('cursor', 'default');
			$('#copperspatulaDivTwo').css('pointer-events', 'none');
			$("#sccopperCrystOne").show();
			for (i = 0; i < 1; i++) {
				$("#sccopperCrystOne").animate({ top: 16 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#sccopperCrystOne").animate({ top: 62 + "%", opacity: "1", direction: "down" }, 800, 'linear');
			}
			setTimeout(function () {
				$("#scspatula006").animate({ top: "66%", left: "21%" });
				// $("#aluminspatulaDivTwo").hide();
				// $("#copperspatulaDivTwo").show();
				$("#TubeStandDivScr2,#scwaterA,#scwaterB,#scwaterC,#scwaterD,#scwaterE,#scwaterF,#scwaterG,#scA,#scB,#scC,#scD,#scE,#scF,#scG").css({ opacity: 0.1 });
				$("#sczincCrystOne,#scleadCrysttOne,#sciornCrysttOne,#scaluminiumCrystOne,#sccopperCrystOne").css({ opacity: 0.1 });
				help = 30;
				$("#introOne,#NextTwo").fadeIn();
			}, 1400);
			screenThreeCore();
		}
	})
}
//Figure 2 Functions Ended

//Figure 3 FunctionsStarted

function tubeClick() {
	$('#testTubeH').css({ 'cursor': 'pointer' });
	$("#testTubeH").click(function () {
		removeTrip();
		$("#testTubeH").animate({ top: 27 + '%', left: 7 + '%', width: 35 + '%', height: 15 + '%' });
		$('#testTubeH').css('pointer-events', 'none');
		setTimeout(function () {
			help = 32;
			removeTrip();
			woolClick();
		}, 500)
	});
}
function woolClick() {
	$('#glasswool').css({ 'cursor': 'pointer' });
	$("#glasswool").click(function () {
		removeTrip();
		$("#glasswool").animate({ top: 28 + '%', left: 7 + '%', width: 8 + '%', height: 13 + '%' });
		help = 33;
		removeTrip();
		corkClick();
		$('#glasswool').css('pointer-events', 'none');
	});
}
function corkClick() {
	$('#cork').css({ 'cursor': 'pointer' });
	$("#cork").click(function () {
		removeTrip();
		$("#cork").animate({ top: 28 + '%', left: 34.5 + '%', width: 8 + '%', height: 12 + '%' });

		help = 34;
		removeTrip();
		DtubeClick();

		$('#cork').css('pointer-events', 'none');
	});
}
function DtubeClick() {
	$('#DTubeDiv').css({ 'cursor': 'pointer' });
	$("#DTubeDiv").click(function () {
		removeTrip();
		$("#delTube").animate({ top: 32 + '%', width: 37 + '%', height: 45 + '%', left: 31 + '%' });
		help = 35;
		$("#NextThree").show();
		$('#DTubeDiv').css('pointer-events', 'none');
	});
}
//Figure 3 Functions Ended

//Figure 4 FunctionsStarted

function zincSteamCore() {
	$('#thzinc').css({ 'cursor': 'pointer' });
	$("#thzinc").click(function () {
		removeTrip();
		$('#thzinc').css('pointer-events', 'none');
		$("#thezincCryst").fadeIn();
		$('#scthreBurnerOn').css({ 'cursor': 'pointer' });
		help = 37;
		$("#scthreBurnerOn").click(function () {
			removeTrip();
			$('#scthreBurnerOn').css('pointer-events', 'none');

			ImageAnimationOneTime("InhalationAniOne", "inhaOne", ImageflameOne, 15, 20)
			$("#fogtube").delay(2000).fadeIn();
			$("#thezincCryst").delay(2000).fadeOut();
			//setTimeout (function(){  $("#scthreBurnerOn").show(); $("#scBurnerOne").hide(); }, 4500)
			$("#delTubeOne").delay(2000).fadeOut();
			$("#tubefog").delay(2000).fadeIn();
			setTimeout(function () {
				ImageAnimationOneTime("bubbleAniOne", "bubbleOne", ImagebubbleOne, 100, 3)
				$("#fogtube").delay(5500).fadeOut();
				$("#delTubeOne").delay(5500).fadeIn();
				$("#tubefog").delay(5500).fadeOut();
				help = 38;
				setTimeout(function () { ironSteamCore(); }, 6000)
			}, 3000)
		});
	});
}
function ironSteamCore() {
	$('#thiorn').css({ 'cursor': 'pointer' });
	$("#thiorn").click(function () {
		removeTrip();
		$('#thiorn').css('pointer-events', 'none');
		$("#theiornCrystt").fadeIn();
		$('#scthreBurnerOn').css('pointer-events', '');
		$('#scthreBurnerOn').css({ 'cursor': 'pointer' });
		help = 37;
		$("#scthreBurnerOn").click(function () {
			removeTrip();
			$('#scthreBurnerOn').css('pointer-events', 'none');

			ImageAnimationOneTime("InhalationAniOne", "inhaOne", ImageflameOne, 15, 20)
			$("#fogtube").delay(2000).fadeIn();
			$("#theiornCrystt").delay(2000).fadeOut();
			//setTimeout (function(){  $("#scthreBurnerOn").show(); $("#scBurnerOne").hide(); }, 4500)
			$("#delTubeOne").delay(2000).fadeOut();
			$("#tubefog").delay(2000).fadeIn();
			setTimeout(function () {
				ImageAnimationOneTime("bubbleAniOne", "bubbleOne", ImagebubbleOne, 100, 3)
				$("#fogtube").delay(5500).fadeOut();
				$("#delTubeOne").delay(5500).fadeIn();
				$("#tubefog").delay(5500).fadeOut();
				help = 39;
				setTimeout(function () { aluminSteamCore(); }, 6300)
			}, 3000)
		});
	});
}
function aluminSteamCore() {
	$('#thaluminium').css({ 'cursor': 'pointer' });
	$("#thaluminium").click(function () {
		removeTrip();
		$('#thaluminium').css('pointer-events', 'none');
		$("#thealuminCryst").fadeIn();
		$('#scthreBurnerOn').css('pointer-events', '');
		$('#scthreBurnerOn').css({ 'cursor': 'pointer' });
		help = 37;
		$("#scthreBurnerOn").click(function () {
			removeTrip();
			$('#scthreBurnerOn').css('pointer-events', 'none');

			setTimeout(function () {
				ImageAnimationOneTime("InhalationAniOne", "inhaOne", ImageflameOne, 15, 20)
			}, 5000)
			$("#fogtube").delay(1000).fadeIn();
			$("#thealuminCryst").delay(3000).fadeOut();
			//setTimeout (function(){  $("#scthreBurnerOn").show(); $("#scBurnerOne").hide(); }, 4500)
			$("#delTubeOne").delay(2000).fadeOut();
			$("#tubefog").delay(2000).fadeIn();
			setTimeout(function () {
				ImageAnimationOneTime("bubbleAniOne", "bubbleOne", ImagebubbleOne, 100, 3)
			}, 3000)
			$("#fogtube").delay(1000).fadeOut();
			$("#delTubeOne").fadeIn();
			$("#tubefog").fadeOut();
			$("#threBurnerOne").hide();

			setTimeout(function () { help = 40; leadSteamCore(); }, 10000)
		});
	});
}
function leadSteamCore() {
	$("#scthreBurnerOn").hide();
	$("#BurnerOnThree").show();
	$('#thlead').css({ 'cursor': 'pointer' });
	$("#thlead").click(function () {
		removeTrip();
		$('#thlead').css('pointer-events', 'none');
		$("#theleadCrystt").show();
		//$('#scthreBurnerOn').css('pointer-events', '');
		help = 41;
		$('#BurnerOnThree').css({ 'cursor': 'pointer' });
		$("#BurnerOnThree").click(function () {
			removeTrip();
			ImageAnimationOneTime("InhalationAniOne", "inhaOne", ImageflameOne, 15, 20)
			$('#BurnerOnThree').css('pointer-events', 'none');

			help = 42
			setTimeout(function () {
				copperSteamCore();
			}, 5000)
		});
	});
}
function copperSteamCore() {
	$('#thcopper').css({ 'cursor': 'pointer' });
	$("#thcopper").click(function () {
		removeTrip();
		$('#thcopper').css('pointer-events', 'none');
		$("#theleadCrystt").hide();
		$("#thecopperCryst").show();
		$('#BurnerOnThree').css('pointer-events', '');
		$('#BurnerOnThree').css({ 'cursor': 'pointer' });
		help = 41;
		$("#BurnerOnThree").click(function () {
			removeTrip();
			ImageAnimationOneTime("InhalationAniOne", "inhaOne", ImageflameOne, 15, 20)
			$('#BurnerOnThree').css('pointer-events', 'none');

			setTimeout(function () {
				$("#waterjarOne,#delTubeOne,#testTubeHOne,#glasswoolOne").css({ opacity: 0.1 });
				$("#introTwo").fadeIn();
				help = 43;
				helpfinal();
			}, 4600);
		});
	});
}
function helpfinal() {
	// help=43;
}
//Figure 4 Functions Ended

function screenTwoCore() {
	//$("#NextOne").show();
	$("#NextOne").click(function () {
		removeTrip();
		$("#page1Div,.varTitle").hide();
		$("#page2Div,.varTitle1").show();
		help = 16;
		burnurOn();
	});
}
function screenThreeCore() {
	//$("#NextTwo").show();
	$("#NextTwo").click(function () {
		removeTrip();
		$("#page2Div,.varTitle1").hide();
		$("#page3Div,.varTitle2").show();
		help = 31;
		tubeClick();
	});
}
function screenFourCore() {
	// $("#NextThree").show();
	$("#NextThree").click(function () {
		removeTrip();
		$("#page3Div,.varTitle2").hide();
		$("#page4Div,.varTitle3").show();
		help = 36;
		zincSteamCore();
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
				CLEARImageAnimation.clearInterval();
			}
			else {
				GlobalVariable = 0;
				ANIMATIONTimesReached++;
			}
		}
	}, ANIMATIONSpeed);
}

function getLang() {
	let lang;
	try {
		const iframeElement = window.frameElement;
		const mySrc = iframeElement.src;

		const url = new URL(mySrc);
		lang = url.searchParams.get('elink_lan');

	} catch (error) {
		console.error('Could not access frameElement due to same-origin policy.');
		document.getElementById('message').textContent = 'Error: Cannot access frame details due to security restrictions.';
	}
	return lang;
}