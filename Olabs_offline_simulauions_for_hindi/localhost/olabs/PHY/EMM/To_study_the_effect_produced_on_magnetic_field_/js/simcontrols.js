var help;
var help = 0;
var candledropOne = [];
var candledropTwo = [];
var boardRotate = [];
var lineSNPen = [];
var ironlineSNPen = [];
var copperlineSNPen = [];
var plasticlineSNPen = [];

$(document).ready(function () {
	for (a = 0; a < 9; a++) {
		candledropOne[a] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/dropAniOne/" + (a + 1) + ".png"
	}
	for (b = 0; b < 9; b++) {
		candledropTwo[b] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/dropAniOne/" + (b + 1) + ".png"
	}
	for (c = 0; c < 7; c++) {
		boardRotate[c] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/boardAni/" + (c + 1) + ".png"
	}
	for (d = 0; d < 100; d++) {
		lineSNPen[d] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/lineOneAni/" + (d + 1) + ".png"
	}
	for (e = 0; e < 156; e++) {
		ironlineSNPen[e] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/ironLineOneAni/" + (e + 1) + ".png"
	}
	for (f = 0; f < 114; f++) {
		copperlineSNPen[f] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/copperLineOneAni/" + (f + 1) + ".png"
	}
	for (g = 0; g < 114; g++) {
		plasticlineSNPen[g] = "../PHY/EMM/To_study_the_effect_produced_on_magnetic_field_pattern_by_bringing_various_materials_in_the_surrounding_space_of_a_bar_magnet/images/plasticLineOneAni/" + (g + 1) + ".png"
	}
})
window.onload = function () {
    gt = new Gettext({ 'domain': 'messages' });
    $(".sim-controls").hide();
    $(".sim-div").css({ "width": "100%" });
	document.getElementById("expName").innerHTML = gt.gettext("Study the Magnetic Field Pattern of Various Materials Using a Bar Magnet");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	helpMsg = [gt.gettext("Drag and drop the Candle on the White sheet"),gt.gettext("Drag and drop the White sheet on the Drawing board"),
	gt.gettext("Drag and drop the Marker on the Drawing board"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Drawing board"),
	gt.gettext("Click on the Compass"),gt.gettext("Drag and drop the<br> Magnet on the<br> Drawing board"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),
	gt.gettext("Click on the Marker"),gt.gettext("Drag and drop the Iron Bar on the Drawing board"),gt.gettext("Click on the Compass"),
	gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),
	gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),
	gt.gettext("Click on the Marker"),gt.gettext("Click on the Compass"),gt.gettext("Click on the Marker"),gt.gettext("Click on the Marker"),
	gt.gettext("Drag and drop the Copper Bar on the Drawing board"),gt.gettext("Drag and drop the Plastic Bar on the Drawing board"),
	gt.gettext("Click on the Reset button<br> to do the experiment again")];

	ImageInitLoad(candledropOne, "candledropDiv", "candledropA", "candledropAnimation")
	ImageInitLoad(candledropTwo, "candledropDivTwo", "candledropB", "candledropAnimationTwo")
	ImageInitLoad(boardRotate, "boardRotateDiv", "boardRotateA", "boardRotateAnimation")
	ImageInitLoad(lineSNPen, "lineSNPenDiv", "lineSNPenA", "lineSNPenAnimation")
	ImageInitLoad(ironlineSNPen, "ironlineSNPenDiv", "ironlineSNPenA", "ironlineSNPenAnimation")
	ImageInitLoad(copperlineSNPen, "copperlineSNPenDiv", "copperlineSNPenA", "copperlineSNPenAnimation")
	ImageInitLoad(plasticlineSNPen, "plasticlineSNPenDiv", "plasticlineSNPenA", "plasticlineSNPenAnimation")
};
$(document).ready(function () {
	help = 0;
	candle();
})
function candle()
{
	$("#candle").css({ "cursor": "pointer" })
	$("#candle").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "15%", left: "91%", })}},
		drag: function () {removeTrip()}});
		$("#candleDiv").droppable
		({
			accept: "#candle", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$('#candle').css('pointer-events', 'none');
				$('#candle,#candleDiv,#candLab').fadeOut();
				$('#candleOne').fadeIn();
				ImageAnimationOneTime("candledropAnimation", "candledropA", candledropOne, 300, 0);
				setTimeout(function () { 
				$('#canDrop').fadeIn();
				$("#candleOne").animate({ left: "78%" }, 2000, );
				}, 2500);
				setTimeout(function () { 
				ImageAnimationOneTime("candledropAnimationTwo", "candledropB", candledropTwo, 300, 0);
				$('#canDropTwo').delay(2000).fadeIn();
			    }, 5000);

				setTimeout(function () { 
				$("#candleOne").animate({ left: "80%", top: "50%" }, 2000, );
				$('#canDropThre').delay(2600).fadeIn();
				}, 8000);

				setTimeout(function () { 
					$("#candleOne").animate({ left: "53%", top: "50%" }, 1000, );
					$('#canDropfour').delay(2000).fadeIn();
					$('#candleOne').delay(2000).fadeOut();
					setTimeout(function () { 
						$("#simHelp").css({ "pointer-events": "" })
						help = 1;
						paperDrop()}, 3000);
				}, 12000);
			}
		});
}
function paperDrop()
{
	$("#paperDropDiv").css({ "cursor": "pointer" })
	$("#paperDropDiv").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "25%", left: "54%", })}},
		drag: function () {removeTrip()}});
		$("#papersetDiv").droppable
		({
			accept: "#paperDropDiv", drop: function () 
			{
				// $("#simHelp").css({ "pointer-events": "none" })
				$("#board").animate({ top: "27%", left: "20%", height: "55%", width: "65%" }, );
				$("#drBorLab").animate({ top: "88%", left: "42%" }, );
				$('#paperDropDiv,#papersetDiv,#sheetlab').fadeOut();
				$('#paperOne,#markerDiv').fadeIn(1000);
				help = 2;
				marker();
			}
		});
}
function marker()
{
	$("#marker").css({ "cursor": "pointer" })
	$("#marker").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "25%", left: "0%", })}},
		drag: function () {removeTrip()}});
		$("#markerDiv").droppable
		({
			accept: "#marker", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$('#marker').hide();
				$('#markerOne').fadeIn();
				$("#markerOne").animate({ top: 11 + "%", opacity: "1", direction: "up" }, 0, 'linear');
				$("#markerOne").animate({ top: 57 + "%", opacity: "1", direction: "down" }, 800, 'linear');
				$('#verLine').show(2000);
				setTimeout(function () { 
				// $("#markerOne").animate({ }, );
				$("#markerOne").animate({ top: "32%", left: 25 + "%" }, 0, 'linear');
				$("#markerOne").animate({ top: "32%", left: 78 + "%" }, 1200, 'linear');
				$('#markerOne,#markerDiv').fadeOut();
				$('#markerTwo').delay(3000).fadeIn();
				$('#horLine').fadeIn(3200);
				setTimeout(function () { 
					$("#simHelp").css({ "pointer-events": "" })
					$('#paperOne,#board,#verLine,#horLine').fadeOut();
					$('#nsBoard').fadeIn();
					help = 3;
					compus();
				}, 3200);
			 }, 3000);

			}
		});
}
function compus()
{
	$("#compusDiv").css({ "cursor": "pointer" })
	$("#compusDiv").click(function () {	
	$("#LabnoteOne").fadeIn();	
	removeTrip();
	$("#compusDiv").animate({ left: "46.5%", top: "42%" }, 1000, );
	$("#compusDiv").css({ "pointer-events": "none" })
	help = 4;
	$("#nsBoard").css({ "cursor": "pointer" })
	$("#nsBoard").click(function () {	
	$("#simHelp").css({ "pointer-events": "none" })
	removeTrip();
	$("#nsBoard").fadeOut();
	ImageAnimationOneTime("boardRotateAnimation", "boardRotateA", boardRotate, 300, 0);
	setTimeout(function () { 
		$("#nsBoardOne").fadeIn();
		$("#simHelp").css({ "pointer-events": "" })
		$("#compusDiv").css({ "pointer-events": "" })
		help = 5;
		$("#compusDiv").click(function () {	
		removeTrip();
		$("#LabnoteOne").fadeOut();	
		// $("#LabnoteOne").hide();	
		$("#compusDiv").fadeOut();
		$("#compusDivOne").delay(1000).fadeIn();
		setTimeout(function () { 
			help = 6;
			magnet();}, 2000);
		});
	}, 2000);
	});});
}
function magnet()
{
	$("#magnetDiv").show();
	$("#magnet").css({ "cursor": "pointer" })
	$("#magnet").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "82%", left: "84%", })}},
		drag: function () {removeTrip()}});
		$("#magnetDiv").droppable
		({
			accept: "#magnet", drop: function () 
			{
				$("#drBorLab").animate({ top: "93%", left: "42%" }, );
				$("#magnet").css({ "pointer-events": "none" })
				$("#magnetDiv,#magLab").hide();
				$("#magnet").animate({ top: "48%", left: "23%", height: "13%", width: "54%" }, );
				$("#nsBoardOne").animate({ top: "24%", left: "15%", height: "69%", width: "70%" }, );
				$("#plastic").animate({ left: "86%" }, );
				$("#ironLab").animate({ top: "43%", left: "85.5%", }, );
				$("#copperRod").animate({ top: "60%", left: "86%", }, );
				$("#copLab").animate({ top: "68%", left: "85.5%", }, );
				$("#iornRod").animate({ top: "35%", left: "86%", }, );
				$("#plasLab").animate({ left: "85%" }, );
				help = 7;
				capusClick();
			}
		});
}
function capusClick()
{
	$("#compusDivOne").css({ "cursor": "pointer" })
	$("#compusDivOne").click(function () {	
	removeTrip();
	$("#compusDivOne").css({ "pointer-events": "none" })
	$("#compusDivOne").animate({ left: "70%", top: "61%" }, 500, );
	$("#compusDivOne").delay(500).css({ transform: 'rotate(' + 160 + 'deg)'}, 500, );
	help = 8;
	$("#markerTwo").css({ "cursor": "pointer" })
	$("#markerTwo").click(function () {
	removeTrip();
	$("#markerTwo").css({ "pointer-events": "none" })
	$("#markerTwo").animate({ left: "69%", top: "50.5%" },  );
	$("#blackdotOne").delay(1000).fadeIn();
	setTimeout(function () { 
	$("#compusDivOne,#markerTwo").hide();
	$("#blackdotOne,#compusDivTwo,#markerTwoTwo").show();
	$("#markerTwoTwo").animate({ left: "0%", top: "25%" },  );
	
	//second compus Dot start
	help = 9;
	$("#compusDivTwo").css({ "cursor": "pointer" })
	$("#compusDivTwo").click(function () {
	removeTrip();
	$("#compusDivTwo").css({ "pointer-events": "none" })
	$("#compusDivTwo").animate({ left: "55%", top: "64%" }, 1000 );
	$("#cNeedleTwo").delay(500).css({ transform: 'rotate(' + 170 + 'deg)'}, 1000);
	help = 10;
	$("#markerTwoTwo").css({ "cursor": "pointer" })
	$("#markerTwoTwo").click(function () {
	removeTrip();
	$("#markerTwoTwo").css({ "pointer-events": "none" })
	$("#markerTwoTwo").animate({ left: "55%", top: "52%" },  );
	setTimeout(function () { 
	$("#compusDivTwo,#markerTwoTwo").hide();
	$("#blackdotTwo,#compusDivThree,#markerThree").show();
	
	//Third compus Dot start
	help = 11;
	$("#compusDivThree").css({ "cursor": "pointer" })
	$("#compusDivThree").click(function () {
	removeTrip();
	$("#compusDivThree").css({ "pointer-events": "none" })
	$("#compusDivThree").animate({ left: "38%", top: "64%" }, 1000 );
	$("#cNeedleThree").delay(500).css({ transform: 'rotate(' + 180 + 'deg)'}, 1000);
	help = 12;
	$("#markerThree").css({ "cursor": "pointer" })
	$("#markerThree").click(function () {
	removeTrip();
	$("#markerThree").css({ "pointer-events": "none" })
	$("#markerThree").animate({ left: "38%", top: "52%" },  );
	setTimeout(function () { 
	$("#blackdotThree").show();
	$("#compusDivThree,#markerThree").hide();
	$("#compusDivFour,#markerFour").show();

	//Fourth compus Dot start
	help = 13;
	$("#compusDivFour").css({ "cursor": "pointer" })
	$("#compusDivFour").click(function () {	
	removeTrip();
	$("#compusDivFour").css({ "pointer-events": "none" })
	$("#compusDivFour").animate({ left: "26%", top: "60%" }, 1000 );
	$("#cNeedleFour").delay(500).css({ transform: 'rotate(' + 210 + 'deg)'}, 2000);
	help = 14;
	$("#markerFour").css({ "cursor": "pointer" })
	$("#markerFour").click(function () {
	removeTrip();
	$("#markerFour").css({ "pointer-events": "none" })
	$("#markerFour").animate({ left: "26.5%", top: "45%" },  );
	setTimeout(function () { 
	$("#blackdotFour").show();
	$("#compusDivFour,#markerFour").hide();
	$("#compusDivFive,#markerFive").show();

	//Fivth compus Dot start
	help = 15;
	$("#compusDivFive").css({ "cursor": "pointer" })
	$("#compusDivFive").click(function () {
	removeTrip();
	$("#compusDivFive").css({ "pointer-events": "none" })
	$("#compusDivFive").animate({ left: "72%", top: "60%" }, 1000 );
	$("#cNeedleFive").delay(500).css({ transform: 'rotate(' + 130 + 'deg)'}, 2000);
	help = 16;
	$("#markerFive").css({ "cursor": "pointer" })
	$("#markerFive").click(function () {
	removeTrip();
	$("#markerFive").css({ "pointer-events": "none" })
	$("#markerFive").animate({ left: "73%", top: "55%" },  );
	setTimeout(function () { 
	$("#blackdotFive").show();
	$("#compusDivFive,#markerFive").hide();
	$("#compusDivSix,#markerSix").show();
	
	//Sixth compus Dot start
	help = 17;
	$("#compusDivSix").css({ "cursor": "pointer" })
	$("#compusDivSix").click(function () {
	removeTrip();
	$("#compusDivSix").css({ "pointer-events": "none" })
	$("#compusDivSix").animate({ left: "62%", top: "70%" }, 1000 );
	$("#cNeedleSix").delay(500).css({ transform: 'rotate(' + 165 + 'deg)'}, 2000);
	help = 18;
	$("#markerSix").css({ "cursor": "pointer" })
	$("#markerSix").click(function () {
	removeTrip();
	$("#markerSix").css({ "pointer-events": "none" })
	$("#markerSix").animate({ left: "62%", top: "59%" },  );
	setTimeout(function () { 
	$("#blackdotSix").show();
	$("#compusDivSix,#markerSix").hide();
	$("#compusDivSev,#markerSev").show();
	
	//Seventh compus Dot start
	help = 19;
	$("#compusDivSev").css({ "cursor": "pointer" })
	$("#compusDivSev").click(function () {	removeTrip();
	$("#compusDivSev").css({ "pointer-events": "none" })
	$("#compusDivSev").animate({ left: "44%", top: "70%" }, 1000 );
	$("#cNeedleSev").delay(500).css({ transform: 'rotate(' + 180 + 'deg)'}, 2000);
	help = 20;
	$("#markerSev").css({ "cursor": "pointer" })
	$("#markerSev").click(function () {removeTrip();
	$("#markerSev").css({ "pointer-events": "none" })
	$("#markerSev").animate({ left: "44%", top: "58%" },  );
	setTimeout(function () { 
	$("#blackdotSev").show();
	$("#compusDivSev,#markerSev").hide();
	$("#compusDivEig,#markerEig").show();

	//Eighth compus Dot start
	help = 21;
	$("#compusDivEig").css({ "cursor": "pointer" })
	$("#compusDivEig").click(function () {removeTrip();
	$("#compusDivEig").css({ "pointer-events": "none" })
	$("#compusDivEig").animate({ left: "32%", top: "70%" }, 1000 );
	$("#cNeedleEig").delay(500).css({ transform: 'rotate(' + 193 + 'deg)'}, 2000);
	help = 22;
	$("#markerEig").css({ "cursor": "pointer" })
	$("#markerEig").click(function () {removeTrip();
	$("#markerEig").css({ "pointer-events": "none" })
	$("#markerEig").animate({ left: "32%", top: "56%" },  );
	setTimeout(function () { 
	$("#blackdotEig").show();
	$("#compusDivEig,#markerEig").hide();
	$("#compusDivNin,#markerNin").show();

	//Ninth compus Dot start
	help = 23;
	$("#compusDivNin").css({ "cursor": "pointer" })
	$("#compusDivNin").click(function () {removeTrip();
	$("#compusDivNin").css({ "pointer-events": "none" })
	$("#compusDivNin").animate({ left: "23%", top: "60%" }, 1000 );
	$("#cNeedleNin").delay(500).css({ transform: 'rotate(' + 215 + 'deg)'}, 2000);
	help = 24;
	$("#markerNin").css({ "cursor": "pointer" })
	$("#markerNin").click(function () {removeTrip();
	$("#markerNin").css({ "pointer-events": "none" })
	$("#markerNin").animate({ left: "24%", top: "44%" },  );
	setTimeout(function () { 
	$("#blackdotNin").show();
	$("#compusDivNin,#markerNin").hide();
	$("#compusDivTen,#markerTen").show();

	//tenth compus Dot start
	help = 25;
	$("#compusDivTen").css({ "cursor": "pointer" })
	$("#compusDivTen").click(function () {removeTrip();
	$("#compusDivTen").css({ "pointer-events": "none" })
	$("#compusDivTen").animate({ left: "69%", top: "36%" }, 1000 );
	$("#cNeedleTen").delay(500).css({ transform: 'rotate(' + 195 + 'deg)'}, 2000);
	help = 26;
	$("#markerTen").css({ "cursor": "pointer" })
	$("#markerTen").click(function () {removeTrip();
	$("#markerTen").css({ "pointer-events": "none" })
	$("#markerTen").animate({ left: "69%", top: "22%" },  );
	setTimeout(function () { 
	$("#blackdotTen").show();
	$("#compusDivTen,#markerTen").hide();
	$("#compusDivEle,#markerEle").show();

	//Eleven compus Dot start
	help = 27;
	$("#compusDivEle").css({ "cursor": "pointer" })
	$("#compusDivEle").click(function () {removeTrip();
	$("#compusDivEle").css({ "pointer-events": "none" })
	$("#compusDivEle").animate({ left: "55%", top: "33%" }, 1000 );
	$("#cNeedleEle").delay(500).css({ transform: 'rotate(' + 188 + 'deg)'}, 2000);
	help = 28;
	$("#markerEle").css({ "cursor": "pointer" })
	$("#markerEle").click(function () {removeTrip();
	$("#markerEle").css({ "pointer-events": "none" })
	$("#markerEle").animate({ left: "55%", top: "20%" },  );

	setTimeout(function () { 
	$("#blackdotEle").show();
	$("#compusDivEle,#markerEle").hide();
	$("#compusDivTwl,#markerTwl").show();

	//twelth compus Dot start
	help = 29;
	$("#compusDivTwl").css({ "cursor": "pointer" })
	$("#compusDivTwl").click(function () {removeTrip();
	$("#compusDivTwl").css({ "pointer-events": "none" })
	$("#compusDivTwl").animate({ left: "38%", top: "33%" }, 1000 );
	$("#cNeedleTwl").delay(500).css({ transform: 'rotate(' + 165 + 'deg)'}, 2000);
	help = 30;
	$("#markerTwl").css({ "cursor": "pointer" })
	$("#markerTwl").click(function () {removeTrip();
	$("#markerTwl").css({ "pointer-events": "none" })
	$("#markerTwl").animate({ left: "38%", top: "22%" },  );

	setTimeout(function () { 
	$("#blackdotThir").show();
	$("#compusDivTwl,#markerTwl").hide();
	$("#compusDivThir,#markerThir").show();

	//Thirtyeen compus Dot start
	help = 31;
	$("#compusDivThir").css({ "cursor": "pointer" })
	$("#compusDivThir").click(function () {removeTrip();
	$("#compusDivThir").css({ "pointer-events": "none" })
	$("#compusDivThir").animate({ left: "26%", top: "36%" }, 1000 );
	$("#cNeedleThir").delay(500).css({ transform: 'rotate(' + 150 + 'deg)'}, 2000);
	help = 32;
	$("#markerThir").css({ "cursor": "pointer" })
	$("#markerThir").click(function () {removeTrip();
	$("#markerThir").css({ "pointer-events": "none" })
	$("#markerThir").animate({ left: "26%", top: "28%" },  );

	setTimeout(function () { 
	$("#blackdotForte").show();
	$("#compusDivThir,#markerThir").hide();
	$("#compusDivForte,#markerForte").show();

	//Forteen compus Dot start
	help = 33;
	$("#compusDivForte").css({ "cursor": "pointer" })
	$("#compusDivForte").click(function () {removeTrip();
	$("#compusDivForte").css({ "pointer-events": "none" })
	$("#compusDivForte").animate({ left: "71%", top: "32%" }, 1000 );
	$("#cNeedleForte").delay(500).css({ transform: 'rotate(' + 199 + 'deg)'}, 2000);
	help = 34;
	$("#markerForte").css({ "cursor": "pointer" })
	$("#markerForte").click(function () {removeTrip();
	$("#markerForte").css({ "pointer-events": "none" })
	$("#markerForte").animate({ left: "71%", top: "17%" },  );

	setTimeout(function () { 
	$("#blackdotFifen").show();
	$("#compusDivForte,#markerForte").hide();
	$("#compusDivFifen,#markerFifen").show();

	//Fifteen compus Dot start
	help = 35;
	$("#compusDivFifen").css({ "cursor": "pointer" })
	$("#compusDivFifen").click(function () {removeTrip();
	$("#compusDivFifen").css({ "pointer-events": "none" })
	$("#compusDivFifen").animate({ left: "62%", top: "26%" }, 1000 );
	$("#cNeedleFifen").delay(500).css({ transform: 'rotate(' + 175 + 'deg)'}, 2000);
	help = 36;
	$("#markerFifen").css({ "cursor": "pointer" })
	$("#markerFifen").click(function () {removeTrip();
	$("#markerFifen").css({ "pointer-events": "none" })
	$("#markerFifen").animate({ left: "62%", top: "15%" },  );

	setTimeout(function () { 
	$("#blackdotSixten").show();
	$("#compusDivFifen,#markerFifen").hide();
	$("#compusDivSixten,#markerSixten").show();

	//Sixten compus Dot start
	help = 37;
	$("#compusDivSixten").css({ "cursor": "pointer" })
	$("#compusDivSixten").click(function () {removeTrip();
	$("#compusDivSixten").css({ "pointer-events": "none" })
	$("#compusDivSixten").animate({ left: "44%", top: "26%" }, 1000 );
	$("#cNeedleSixten").delay(500).css({ transform: 'rotate(' + 167 + 'deg)'}, 2000);
	help = 38;
	$("#markerSixten").css({ "cursor": "pointer" })
	$("#markerSixten").click(function () {removeTrip();
	$("#markerSixten").css({ "pointer-events": "none" })
	$("#markerSixten").animate({ left: "43.6%", top: "15.5%" },  );

	setTimeout(function () { 
	$("#blackdotSevten").show();
	$("#compusDivSixten,#markerSixten").hide();
	$("#compusDivSevten,#markerSevten").show();

	//Seventeen compus Dot start
	help = 39;
	$("#compusDivSevten").css({ "cursor": "pointer" })
	$("#compusDivSevten").click(function () {removeTrip();
	$("#compusDivSevten").css({ "pointer-events": "none" })
	$("#compusDivSevten").animate({ left: "32%", top: "26%" }, 1000 );
	$("#cNeedleSevten").delay(500).css({ transform: 'rotate(' + 147 + 'deg)'}, 2000);
	help = 40;
	$("#markerSevten").css({ "cursor": "pointer" })
	$("#markerSevten").click(function () {removeTrip();
	$("#markerSevten").css({ "pointer-events": "none" })
	$("#markerSevten").animate({ left: "32.6%", top: "18.5%" },  );

	setTimeout(function () { 
	$("#blackdotEigten").show();
	$("#compusDivSevten,#markerSevten").hide();
	$("#compusDivEigten,#markerEigten").show();

	//Eighteen compus Dot start
	help = 41;
	$("#compusDivEigten").css({ "cursor": "pointer" })
	$("#compusDivEigten").click(function () {removeTrip();
	$("#compusDivEigten").css({ "pointer-events": "none" })
	$("#compusDivEigten").animate({ left: "23%", top: "36%" }, 1000 );
	$("#cNeedleEigten").delay(500).css({ transform: 'rotate(' + 140 + 'deg)'}, 2000);
	help = 42;
	$("#markerEigten").css({ "cursor": "pointer" })
	$("#markerEigten").click(function () {removeTrip();
	$("#markerEigten").css({ "pointer-events": "none" })
	$("#markerEigten").animate({ left: "23.6%", top: "28.5%" },  );

	setTimeout(function () { 
	$("#blackdotNinten").show();
	$("#compusDivEigten,#markerEigten").hide();
	$("#compusDivNinten,#markerNinten").show();
	help = 43;
	LineJoinAnimation();

	}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});
	}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});
	}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});
}
function LineJoinAnimation()
{
	$("#markerNinten").css({ "cursor": "pointer" })
	$("#markerNinten").click(function () {
	$("#simHelp").css({ "pointer-events": "none" })
	removeTrip();
	$("#markerNinten").css({ "pointer-events": "none" })
	$("#markerNinten,#nsBoardOne,#magnet,#blackdotOne,#blackdotTwo,#blackdotThree,#blackdotFour,#blackdotFive,#blackdotSix,#blackdotSev,#blackdotEig,#blackdotNin,#blackdotTen,#blackdotEle,#blackdotThir,#blackdotForte,#blackdotFifen,#blackdotSixten,#blackdotSevten,#blackdotEigten,#blackdotNinten").fadeOut();
	ImageAnimationOneTime("lineSNPenAnimation", "lineSNPenA", lineSNPen, 170, 0);
	setTimeout(function () {
		$("#simHelp").css({ "pointer-events": "" })
		$("#markerNinten,#nsBoardOne,#magnet,#blackdotOne,#blackdotTwo,#blackdotThree,#blackdotFour,#blackdotFive,#blackdotSix,#blackdotSev,#blackdotEig,#blackdotNin,#blackdotTen,#blackdotEle,#blackdotThir,#blackdotForte,#blackdotFifen,#blackdotSixten,#blackdotSevten,#blackdotEigten,#blackdotNinten").fadeIn();
		help = 44;
		iornDrop();
	}, 17000);});
		
}
function iornDrop()
{
	$("#iornDiv").show();
	$("#iornRod").css({ "cursor": "pointer" })
	$("#iornRod").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "35%", left: "86%", })}},
		drag: function () {removeTrip()}});
		$("#iornDiv").droppable
		({
			accept: "#iornRod", drop: function () 
			{
				$("#iornDiv,#markerNinten,#compusDivNinten").hide();
				$("#iornRod,#ironLab").fadeOut()
				$("#iornRodOne").fadeIn()
				$("#markerTwenty,#compusDivTwenty").show();
				help = 45;
				iornCoumpusClick();
			}
		});
}
function iornCoumpusClick()
{
	$("#compusDivTwenty").css({ "cursor": "pointer" })
	$("#compusDivTwenty").click(function () {removeTrip();
	$("#compusDivTwenty").css({ "pointer-events": "none" })
	$("#compusDivTwenty").animate({ left: "71%", top: "60%" }, 1000 );
	$("#cNeedleTwenty").delay(500).css({ transform: 'rotate(' + 150 + 'deg)'}, 2000);
	help = 46;
	$("#markerTwenty").css({ "cursor": "pointer" })
	$("#markerTwenty").click(function () {removeTrip();
	$("#markerTwenty").css({ "pointer-events": "none" })
	$("#markerTwenty").animate({ left: "71%", top: "53%" },  );
	setTimeout(function () { 
	$("#blackdotTwenty").show();
	$("#compusDivTwenty,#markerTwenty").hide();
	$("#compusDivTwOne,#markerTwOne").show();
	
	//Twenty One
	help = 47;
	$("#compusDivTwOne").css({ "cursor": "pointer" })
	$("#compusDivTwOne").click(function () {removeTrip();
	$("#compusDivTwOne").css({ "pointer-events": "none" })
	$("#compusDivTwOne").animate({ top: "80%" },  );
	$("#compusDivTwOne").animate({ left: "63%" },  );
	$("#cNeedleTwOne").delay(500).css({ transform: 'rotate(' + 197 + 'deg)'}, 2000);
	help = 48;
	$("#markerTwOne").css({ "cursor": "pointer" })
	$("#markerTwOne").click(function () {removeTrip();
	$("#markerTwOne").css({ "pointer-events": "none" })
	$("#markerTwOne").animate({ left: "63%", top: "70%"},  );
	$("#markerTwOne").css({ transform: 'rotate(' + 13 + 'deg)'}, );
	setTimeout(function () { 
	$("#blackdotTwOne").show();
	$("#compusDivTwOne,#markerTwOne").hide();
	$("#compusDivTwTwo,#markerTwTwo").show();

	//Twenty Two
	help = 49;
	$("#compusDivTwTwo").css({ "cursor": "pointer" })
	$("#compusDivTwTwo").click(function () {removeTrip();
	$("#compusDivTwTwo").css({ "pointer-events": "none" })
	$("#compusDivTwTwo").animate({ top: "77%", left: "54%" }, 1000 );
	$("#cNeedleTwTwo").delay(500).css({ transform: 'rotate(' + 175 + 'deg)'}, 2000);
	help = 50;
	$("#markerTwTwo").css({ "cursor": "pointer" })
	$("#markerTwTwo").click(function () {removeTrip();
	$("#markerTwTwo").css({ "pointer-events": "none" })
	$("#markerTwTwo").animate({ left: "54%", top: "66%"},  );
	setTimeout(function () { 
	$("#blackdotTwTwo").show();
	$("#compusDivTwTwo,#markerTwTwo").hide();
	$("#compusDivTwThr,#markerTwThr").show();
	
	//Twenty Three
	help = 51;
	$("#compusDivTwThr").css({ "cursor": "pointer" })
	$("#compusDivTwThr").click(function () {removeTrip();
	$("#compusDivTwThr").css({ "pointer-events": "none" })
	$("#compusDivTwThr").animate({ top: "77%", left: "37%" }, 1000 );
	$("#cNeedleTwThr").delay(500).css({ transform: 'rotate(' + 185 + 'deg)'}, 2000);
	help = 52;
	$("#markerTwThr").css({ "cursor": "pointer" })
	$("#markerTwThr").click(function () {removeTrip();
	$("#markerTwThr").css({ "pointer-events": "none" })
	$("#markerTwThr").animate({ left: "37%", top: "64%"},  );
	setTimeout(function () { 
	$("#blackdotTwThr").show();
	$("#compusDivTwThr,#markerTwThr").hide();
	$("#compusDivTwFor,#markerTwFor").show();

	//Twenty Four
	help = 53;
	$("#compusDivTwFor").css({ "cursor": "pointer" })
	$("#compusDivTwFor").click(function () {removeTrip();
	$("#compusDivTwFor").css({ "pointer-events": "none" })
	$("#compusDivTwFor").animate({ top: "70%", left: "25%" }, 1000 );
	$("#cNeedleTwFor").delay(500).css({ transform: 'rotate(' + 200 + 'deg)'}, 2000);
	help = 54;
	$("#markerTwFor").css({ "cursor": "pointer" })
	$("#markerTwFor").click(function () {removeTrip();
	$("#markerTwFor").css({ "pointer-events": "none" })
	$("#markerTwFor").animate({ left: "25%", top: "55%"},  );
	setTimeout(function () { 
	$("#blackdotTwFor").show();
	$("#compusDivTwFor,#markerTwFor").hide();
	$("#compusDivTwFiv,#markerTwFiv").show();
	
	//Twenty Four
	help = 55;
	$("#compusDivTwFiv").css({ "cursor": "pointer" })
	$("#compusDivTwFiv").click(function () {removeTrip();
	$("#compusDivTwFiv").css({ "pointer-events": "none" })
	$("#compusDivTwFiv").animate({ top: "60%", left: "21%" }, 1000 );
	$("#cNeedleTwFiv").delay(500).css({ transform: 'rotate(' + 222 + 'deg)'}, 2000);
	help = 56;
	$("#markerTwFiv").css({ "cursor": "pointer" })
	$("#markerTwFiv").click(function () {removeTrip();
	$("#markerTwFiv").css({ "pointer-events": "none" })
	$("#markerTwFiv").animate({ left: "22%", top: "43%"},  );
	setTimeout(function () { 
	$("#blackdotTwFiv").show();
	$("#compusDivTwFiv,#markerTwFiv").hide();
	$("#compusDivTwSix,#markerTwSix").show();
	help = 57;
	IronLineJoinAnimation();

	}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});}, 1000);});});
}
function IronLineJoinAnimation()
{
	$("#markerTwSix").css({ "cursor": "pointer" })
	$("#markerTwSix").click(function () {removeTrip();
	$("#simHelp").css({ "pointer-events": "none" })	
	$("#markerTwSix").css({ "pointer-events": "none" })
	$("#markerNinten,#nsBoardOne,#magnet,#blackdotOne,#blackdotTwo,#blackdotThree,#blackdotFour,#blackdotFive,#blackdotSix,#blackdotSev,#blackdotEig,#blackdotNin,#blackdotTen,#blackdotEle,#blackdotThir,#blackdotForte,#blackdotFifen,#blackdotSixten,#blackdotSevten,#blackdotEigten,#blackdotNinten").fadeOut();
	$("#markerTwSix,#iornRodOne,#blackdotTwenty,#blackdotTwOne,#blackdotTwTwo,#blackdotTwThr,#blackdotTwFor,#blackdotTwFiv").fadeOut();
	ImageAnimationOneTime("ironlineSNPenAnimation", "ironlineSNPenA", ironlineSNPen, 180, 0);
	setTimeout(function () {
		$("#simHelp").css({ "pointer-events": "" })
		$("#nsBoardTwo,#markerTwSev").fadeIn();
		help = 58;
		removeTrip();
		copperDrop();
	}, 28000);});	
}
function copperDrop()
{
	$("#copperDiv").show();
	$("#copperRod").css({ "cursor": "pointer" })
	$("#copperRod").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "60%", left: "86%", })}},
		drag: function () {removeTrip()}});
		$("#copperDiv").droppable
		({
			accept: "#copperRod", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })	
				$("#copperRod,#copperDiv,#markerTwSev,#nsBoardTwo,#copLab").fadeOut()
				ImageAnimationOneTime("copperlineSNPenAnimation", "copperlineSNPenA", copperlineSNPen, 180, 0);
				setTimeout(function () {
					$("#simHelp").css({ "pointer-events": "" })	
					$("#nsBoardTwo,#markerTwSev").fadeIn(1000);
					help = 59;
					removeTrip();
					plasticDrop();
				}, 20000);
			}
		});
}
function plasticDrop()
{
	$("#plasticDiv").show();
	$("#plastic").css({ "cursor": "pointer" })
	$("#plastic").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "85%", left: "86%", })}},
		drag: function () {removeTrip()}});
		$("#plasticDiv").droppable
		({
			accept: "#plastic", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })	
				$("#plastic,#plasticDiv,#markerTwSev,#nsBoardTwo,#plasLab").fadeOut()
				ImageAnimationOneTime("plasticlineSNPenAnimation", "plasticlineSNPenA", plasticlineSNPen, 180, 0);
				setTimeout(function () {
					$("#simHelp").css({ "pointer-events": "" })	
					$("#nsBoardTwo,#markerTwSev").fadeIn(1000);
					$("#page1Div").hide();
					help = 60;
					removeTrip();
					$("#page2Div").delay(5000).show();
				}, 20000);
			}
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