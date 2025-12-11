// JavaScript Document


var burnerFlag = new Boolean(false);
var completeAni04Flag = new Boolean(false);//flag for completion of Anim04
var completeAni05Flag = new Boolean(false);//flag for completion of Anim05
var redFlag = new Boolean(false);//flag for red litmus
var blueFlag = new Boolean(false);//flag for blue litmus
var spatulaFlag = new Boolean(false);//flag for click on the glass plate
var tempValue = 27;
var i = -30;
var zTop = 100;
var propertyFlag = 1;
var solutionFlag = 0;
var info_msg;

/// canvas for bgforStep1 image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 775;
BGCanvas.height = 440;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function () {
	bgCtx.drawImage(bgImg, 0, 0, 800, 350);
};
bgImg.src = simPath + 'images/BG.png';

//for first still image
var stilImageCanvas = document.getElementById("init_setUpCanvas");
stilImageCanvas.width = 569;
stilImageCanvas.height = 440;
var stillCtx = stilImageCanvas.getContext('2d');
var stillImg = new Image;
var stillimg2 = new Image;
stillImg.onload = function () {
	stillCtx.drawImage(stillImg, -20, 5);
};
stillImg.src = simPath + 'images/stillImage01.png';

/// canvas for bgfor step2 image
var BGCanvas02 = document.getElementById("bgCanvas02");
BGCanvas02.width = 775;
BGCanvas02.height = 440;
var bgCtx02 = BGCanvas02.getContext('2d');
var bgImg02 = new Image;
bgImg02.onload = function () {
	bgCtx02.drawImage(bgImg02, 0, 0, 800, 375);
};
bgImg02.src = simPath + 'images/BG02.png';

var stage;
var selectedAnimation = "";
//onload
$(document).ready(function () {
	document.getElementById("BG02BeakerId").style.visibility = "hidden";
	document.getElementById("BG03BeakerId").style.visibility = "hidden";
	document.getElementById("BG04BeakerId").style.visibility = "hidden";
	document.getElementById("bgCanvas02").style.visibility = "hidden";
	document.getElementById("bgCanvas03").style.visibility = "hidden";
	document.getElementById("animLoadClock").style.visibility = "hidden";
	document.getElementById("infertooltpImg").style.display = "none";
	document.getElementById("infertooltpId").style.display = "none";
	document.getElementById("infertooltpId").innerHTML = gt.gettext("Click here to see the inference");
	document.getElementById("soapImageId").style.visibility = "hidden";
	document.getElementById("filterDiv").style.visibility = "hidden";
	document.getElementById("on_stateBurnerId").style.visibility = "hidden";
	document.getElementById("offStateId").style.visibility = "hidden";
	document.getElementById("onStateId").style.visibility = "hidden";
	document.getElementById("expName").innerHTML = gt.gettext("Saponification:The Process of Making Soap");
	$('#InstrLbl').html(gt.gettext("Instructions"));
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the measuring cylinder containing Coconut oil to pour it into the beaker.");
	document.getElementById("reset").value = gt.gettext("Reset");
	document.getElementById("coconut_lbl").innerHTML = gt.gettext("Coconut oil(25ml)");
	document.getElementById("NaOH_lbl").innerHTML = gt.gettext("(20%) NaOH solution(30ml)");

	$(".controlHolder").css("display", "none")
	$(".canvasHolder").css({ "width": "99%" })

	$("#vegOilDiv").qtip({
		content: gt.gettext('Click on the measuring cylinder containing Coconut oil to pour it into the beaker.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'

		}
	});
	$("#vegOilDiv").trigger("mouseover");
	$("#NaOHDiv").qtip({
		content: gt.gettext('Click on the measuring cylinder containing Sodium Hydroxide to pour it into the beaker.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#rodDiv").qtip({
		content: gt.gettext('Click on the glass rod to stir the mixture.'),
		position: {
			corner: {
				target: 'rightMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomLeft'
		}
	});

	$("#BeakerDivMixture").qtip({
		content: gt.gettext('Click on the beaker to heat the mixture'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});

	$("#BeakerDivPlaceback").qtip({
		content: gt.gettext('Click on the beaker to remove it from the Bunsen burner.'),
		position: {
			corner: {
				target: 'topright',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 250,
			padding: 2,
			height: 25,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});

	$("#RedLitmus").qtip({
		content: gt.gettext('Click on the red litmus paper to dip it into the soap suspension.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#BlueLitmus").qtip({
		content: gt.gettext('Click on the blue litmus paper to dip it into the soap suspension.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#Spatula").qtip({
		content: gt.gettext('Click on the watch glass to add common salt to the soap suspension.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#stirClickDiv").qtip({
		content: gt.gettext('Click on the glass rod to stir the contents.'),
		position: {
			corner: {
				target: 'rightMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#BeakerDivToFunnel").qtip({
		content: gt.gettext('Click on the beaker to filter the contents.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#Spoon").qtip({
		content: gt.gettext('Click on the Spatula to take soap from the funnel.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});

	$("#filterDiv").qtip({
		content: gt.gettext('Click on the filter paper to dry the soap.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#offStateId").qtip({
		content: gt.gettext('Click here to turn on the burner.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
	$("#onStateId").qtip({
		content: gt.gettext('Click here to turn off the burner.'),
		position: {
			corner: {
				target: 'topMiddle',
				tooltip: 'bottomMiddle'
			}
		},
		style: {
			width: 180,
			padding: 2,
			background: '#FFFF99',
			color: 'black',
			textAlign: 'center',
			fontSize: 15 + "px",
			border: {
				width: 1,
				radius: 5,
				color: '#FFFFCC'
			},
			tip: 'bottomMiddle'
		}
	});
});


// function for vegOil (CylindrA)
function playVegOilDiv_Fn() {
	$("#vegOilDiv").qtip("destroy");
	document.getElementById("vegOilDiv").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
	document.getElementById("init_setUpCanvas").style.visibility = "hidden";
	document.getElementById("inferenceDiv01").style.visibility = "hidden";

	// document.getElementById("coconut_lbl").style.visibility = "hidden";
	// document.getElementById("NaOH_lbl").style.visibility = "hidden";

	document.getElementById("labelCoconutoil").style.visibility = "visible";
	document.getElementById("labelNaoh").style.visibility = "visible";
}

//function for animation01 completed
function completeAni01() {

	//code for play oil anim
	document.getElementById("NaOHDiv").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the measuring cylinder containing Sodium Hydroxide to pour it into the beaker.");
	$("#NaOHDiv").trigger("mouseover");

}
// function for NaoH(CylindrB)
function playNaOHDiv_Fn() {
	$("#NaOHDiv").qtip("destroy");
	document.getElementById("NaOHDiv").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject02);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
}
//function for completion of NaoH soln
function completeAni02() {
	document.getElementById("rodDiv").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the glass rod to stir the mixture.");
	$("#rodDiv").trigger("mouseover");
	document.getElementById("NaOHDiv").style.visibility = "hidden";
}

//function to stir the content vegOil+NaoH in beaker
function playForStir() {
	$("#rodDiv").qtip("destroy");
	document.getElementById("rodDiv").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject03);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
}

function completeAni03() {
	document.getElementById("nextbtnId").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the information icon to see the inference.</br></br>Click on the 'NEXT STEP' icon to go to the next process.");
	document.getElementById("imgInfrm").style.visibility = "visible";
}

///FN for next button...
function next_FN() {
	document.getElementById("nextbtnId").style.visibility = "hidden";
	document.getElementById("init_setUpCanvas").style.visibility = "hidden";
	document.getElementById("vegOilDiv").style.visibility = "hidden";
	document.getElementById("NaOHDiv").style.visibility = "hidden";
	// 
	document.getElementById("coconut_lbl").style.visibility = "hidden";
	document.getElementById("NaOH_lbl").style.visibility = "hidden";
	document.getElementById("labelCoconutoil").style.visibility = "hidden";
	document.getElementById("labelNaoh").style.visibility = "hidden";
	//

	if (document.getElementById("imgInfrm").style.visibility == "visible") {
		document.getElementById("bgCanvas").style.visibility = "hidden";
		document.getElementById("bgCanvas02").style.visibility = "visible";
		document.getElementById("init_setUpCanvas").style.visibility = "hidden";
		document.getElementById("imgInfrm").style.visibility = "hidden";
		document.getElementById("msgTxt").innerHTML = gt.gettext("Turn on the burner by clicking the knob of the burner.")
		$("#offStateId").trigger("mouseover");
		document.getElementById("animLoad").style.visibility = "hidden";
		document.getElementById("BG02BeakerId").style.visibility = "visible";
		document.getElementById("offStateId").style.visibility = "visible";
	}
	if (completeAni05Flag == true) {
		document.getElementById('BeakerDivPlaceback').style.visibility = "hidden"
		document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the red litmus paper to dip it into the soap suspension.<br/><br/>Click on the information icon to see the inference.</br></br> Then click on the blue litmus paper to dip it into the soap suspension.")
		document.getElementById("RedLitmus").style.visibility = "visible";
		$("#RedLitmus").trigger("mouseover");
		document.getElementById("animLoadFlame").style.visibility = "hidden";
		document.getElementById("animLoad").style.visibility = "hidden";
		document.getElementById("bgCanvas03").style.visibility = "visible";
		document.getElementById("BG03BeakerId").style.visibility = "visible";
	} if (blueFlag == true) {
		document.getElementById("bgCanvas03").style.visibility = "visible";
		document.getElementById('BeakerDivMixture').style.visibility = "hidden";
		document.getElementById('BG02BeakerId').style.visibility = "hidden";
		document.getElementById("BG03BeakerId").style.visibility = "hidden";
		document.getElementById("offStateId").style.visibility = "hidden";
		document.getElementById("animLoad").style.visibility = "visible";
		//document.getElementById("msgTxt").innerHTML= "Click on the watch glass to add common salt to the soap suspension.";
		document.getElementById("RedLitmus").style.visibility = "hidden";
		$("#RedLitmus").qtip("destroy");
		$("#BlueLitmus").qtip("destroy");
		$("#BeakerDivMixture").qtip("destroy");
		$("#offStateId").qtip("destroy");

	} if (spatulaFlag == true) {
		document.getElementById("Spatula").style.visibility = "hidden";
		document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the beaker to filter the contents.");
		document.getElementById("BeakerDivToFunnel").style.visibility = "visible";
		$("#Spatula").qtip("destroy");
		$("#BeakerDivToFunnel").trigger("mouseover");
		document.getElementById("animLoad").style.visibility = "hidden";
		document.getElementById("BG04BeakerId").style.visibility = "visible";

	} if (Flag == 1) {
		document.getElementById("BeakerDivToFunnel").style.visibility = "hidden";
		$("#BeakerDivToFunnel").qtip("destroy");
		document.getElementById("BG04BeakerId").style.visibility = "hidden";
		document.getElementById("animLoad").style.visibility = "visible";
		document.getElementById("Spatula").style.visibility = "hidden";
	}
}
//function for heating the Oil+NaoH in the beaker till it get whitish paste
function playForHeatBeaker() {
	document.getElementById('BeakerDivMixture').style.visibility = "hidden";
	$("#BeakerDivMixture").qtip("destroy");
	document.getElementById('BG02BeakerId').style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject04);
	stage.start();
	document.getElementById("animLoad").style.top = "-61px";
	document.getElementById("animLoad").style.left = "-14px";
	document.getElementById("animLoad").style.visibility = "visible";
}
//function for animation of clock
function clock() {
	document.getElementById("animLoadClock").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoadClock'),
		swiffyobjectClock);
	stage.start();
	document.getElementById("animLoadClock").style.visibility = "visible";
}
function completeAni04() {
	completeAni04Flag = true
	document.getElementById("imgInfrm").style.visibility = "visible";
	document.getElementById('BeakerDivPlaceback').style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the information icon to see the inference.</br></br>Click on the beaker to remove it from the Bunsen burner for allow it to cool.")
	$("#BeakerDivPlaceback").trigger("mouseover");
}
//function for place back the beaker ,allow it to cool
function playForBeakerPlaceback() {

		$("#BeakerDivPlaceback").qtip("destroy");
		document.getElementById("imgInfrm").style.visibility = "hidden";
		document.getElementById('BeakerDivPlaceback').style.visibility = "hidden";
		document.getElementById("animLoad").innerHTML = "";
		var stage = new swiffy.Stage(document.getElementById('animLoad'),
			swiffyobject05);
		stage.start();
		
		document.getElementById("animLoad").style.left = "-70px";
		document.getElementById("animLoad").style.top = "-92px";
		document.getElementById("animLoad").style.visibility = "visible";
}

function completeAni05() {
	completeAni05Flag = true
	document.getElementById("msgTxt").innerHTML = gt.gettext("Turn off the burner by clicking the knob of the burner. ");
	document.getElementById("onStateId").style.visibility = "visible";
	$("#onStateId").trigger("mouseover");
}

//function for click on red litmus
function playRedLitmus() {
	$("#RedLitmus").qtip("destroy");
	document.getElementById("RedLitmus").style.visibility = "hidden";
	document.getElementById("BG03BeakerId").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject06);
	stage.start();
	document.getElementById("animLoad").style.left = "-54px";
	document.getElementById("animLoad").style.top = "-100px";
	document.getElementById("animLoad").style.visibility = "visible";
}
//code for play RedLitmus turns blue
function completeAni06() {
	redFlag = true;
	document.getElementById("imgInfrm").style.visibility = "visible";
	document.getElementById("BlueLitmus").style.visibility = "visible";
	$("#BlueLitmus").trigger("mouseover");
}

//function for click on blue litmus
function playBlueLitmus() {
	$("#BlueLitmus").qtip("destroy");
	document.getElementById("BlueLitmus").style.visibility = "hidden";
	document.getElementById("imgInfrm").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject07);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
}
//
function completeAni07() {
	blueFlag = true;
	document.getElementById("imgInfrm").style.visibility = "visible";
	//informVisibility()
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the information icon to see the inference.<br/><br/>Click on the watch glass to add common salt to the soap suspension.");
	//document.getElementById("nextBtn").style.visibility="visible";
	document.getElementById("Spatula").style.visibility = "visible";
	$("#Spatula").trigger("mouseover");

}

function clickSpatula() {
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject08);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
	document.getElementById("BG03BeakerId").style.visibility = "hidden";
	document.getElementById("Spatula").style.visibility = "hidden";
	$("#Spatula").qtip("destroy");

}

function completeAni08() {
	$("#stirClickDiv").trigger("mouseover");
	document.getElementById("stirClickDiv").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the glass rod to stir the contents.");
}
//function for click glass rod
function stirClick() {
	document.getElementById("stirClickDiv").style.visibility = "hidden";
	$("#stirClickDiv").qtip("destroy");
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject09);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
}
//function for completion of stir click
function completeAni09() {
	spatulaFlag = true;
	document.getElementById("imgInfrm").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the information icon to see the inference.</br></br>Click on the 'NEXT STEP' icon to go to the next process.");
	document.getElementById("nextbtnId").style.visibility = "visible";
}
var Flag = 0
//function to click beaker and pour to the funnel to filter the contents
function clickBeakerToFunnel() {
	document.getElementById("BeakerDivToFunnel").style.visibility = "hidden";
	$("#BeakerDivToFunnel").qtip("destroy");
	document.getElementById("BG04BeakerId").style.visibility = "hidden";
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject10);

	stage.start();
	document.getElementById("animLoad").style.left = "-107px";
	document.getElementById("animLoad").style.top = "-121px";
	document.getElementById("animLoad").style.visibility = "visible";
}
function completeAni10() {
	Flag = 1;
	document.getElementById("Spoon").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the spatula to take soap from the funnel.");
	$("#Spoon").trigger("mouseover");
}
//function to click spoon
function clickSpoon() {
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject11);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
	document.getElementById("Spoon").style.visibility = "hidden";
	$("#Spoon").qtip("destroy");
}
var completeAni12Flag = 0
function completeAni11() {
	document.getElementById("filterDiv").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the filter paper to dry the soap.");
	$("#filterDiv").trigger("mouseover");
}
//function to click filter paper 
function clickFilterPaper() {
	$("#filterDiv").qtip("destroy");
	document.getElementById("animLoad").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoad'),
		swiffyobject12);
	stage.start();
	document.getElementById("animLoad").style.visibility = "visible";
	document.getElementById("filterDiv").style.visibility = "hidden";

}
function completeAni12() {
	completeAni12Flag = 1;
	document.getElementById("soapImageId").style.visibility = "visible";
	document.getElementById("imgInfrm").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the information icon to see the inference.</br></br>Soap is prepared.");
}
//function to on burner
function OntheBurner() {
	document.getElementById("offStateId").style.visibility = "hidden";
	$("#offStateId").qtip("destroy");
	document.getElementById("on_stateBurnerId").style.visibility = "visible";
	document.getElementById('BeakerDivMixture').style.visibility = "visible";
	document.getElementById("animLoadFlame").innerHTML = "";
	var stage = new swiffy.Stage(document.getElementById('animLoadFlame'),
		swiffyobjectFlame);
	stage.start();
	document.getElementById("animLoadFlame").style.visibility = "visible";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the beaker to heat the mixture.");
	$("#BeakerDivMixture").trigger("mouseover");
}
//function to off the burner
function OfftheBurner() {
	document.getElementById("onStateId").style.visibility = "hidden";
	$("#onStateId").qtip("destroy");
	document.getElementById("on_stateBurnerId").style.visibility = "hidden";
	document.getElementById("animLoadFlame").style.visibility = "hidden";
	document.getElementById("msgTxt").innerHTML = gt.gettext("Click on the 'NEXT STEP' icon to go to the next process.");
	document.getElementById("nextbtnId").style.visibility = "visible";

}
//function for "click on the inform icon" tooltip
function informVisibility() {
	document.getElementById("infertooltpImg").style.display = "block";
	document.getElementById("infertooltpId").style.display = "block";
}
///information message....
function infirmationFN1() {
	document.getElementById("imgTool").style.visibility = "visible";
	document.getElementById("infrmiconClick").style.visibility = "visible";//
	document.getElementById("tooltpMSG").innerHTML = gt.gettext("The reaction between vegetable oil and sodium hydroxide solution is exothermic.");
	if (completeAni04Flag == true) {
		document.getElementById("tooltpMSG").innerHTML = gt.gettext("Whitish paste is formed and is made up of soap (suspension) and glycerol.");
	} if (redFlag == true) {
		document.getElementById("tooltpMSG").innerHTML = gt.gettext("Red litmus changes to blue indicating that soap solution is basic in nature.");
	} if (blueFlag == true) {
		document.getElementById("tooltpMSG").innerHTML = gt.gettext("No change in the colour of blue litmus indicating that soap suspension is not acidic in nature.");
	} if (spatulaFlag == true) {
		document.getElementById("tooltpMSG").innerHTML = gt.gettext("After adding common salt, soap in the suspension gets precipitated out as solid.");
	} if (completeAni12Flag == 1) {
		document.getElementById("tooltpMSG").innerHTML = gt.gettext("Soap is prepared.");
		document.getElementById("tooltpMSG").style.top = 10 + "px";
		document.getElementById("imgTool").style.height = 30 + "px";
	}
	document.getElementById("infertooltpImg").style.display = "none";
	document.getElementById("infertooltpId").style.display = "none";
}
//function for mouse over tooltip
function overtoolTip() {
	informVisibility();
}
//function to remove tooltip
function removetooltip() {
	document.getElementById("imgTool").style.visibility = "hidden";
	document.getElementById("infrmiconClick").style.visibility = "hidden";
	document.getElementById("inferenceDiv01").style.visibility = "hidden";
	document.getElementById("infertooltpImg").style.display = "none";
	document.getElementById("infertooltpId").style.display = "none";
	document.getElementById("tooltpMSG").innerHTML = "";
}
