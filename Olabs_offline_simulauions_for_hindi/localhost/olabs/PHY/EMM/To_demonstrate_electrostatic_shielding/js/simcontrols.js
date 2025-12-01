var help;
var help = 0;
var electrodeTouch = [];
var electrodeTouchMax = [];
var electrodeTouchMin = [];

$(document).ready(function () {
	for (a = 0; a < 50; a++) {
		electrodeTouch[a] = "../PHY/EMM/To_demonstrate_electrostatic_shielding/images/clothAni/" + (a + 1) + ".png"
	}
	for (b = 0; b < 25; b++) {
		electrodeTouchMax[b] = "../PHY/EMM/To_demonstrate_electrostatic_shielding/images/goldLeafMax/" + (b + 1) + ".png"
	}
	for (c = 0; c < 15; c++) {
		electrodeTouchMin[c] = "../PHY/EMM/To_demonstrate_electrostatic_shielding/images/goldLeafMin/" + (c + 1) + ".png"
	}
})
window.onload = function () {
    gt = new Gettext({ 'domain': 'messages' });
    $(".sim-controls").hide();
    $(".sim-div").css({ "width": "100%" });
	document.getElementById("expName").innerHTML = gt.gettext("To demonstrate Electrostatic Shielding");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	helpMsg = [gt.gettext("Click on the Glass Rod"),gt.gettext("Drag and drop the<br> Silk Cloth on the Glass Rod"),
	gt.gettext("Drag and drop the<br> hand with Glass Rod on<br> Charged Electroscope"),
	gt.gettext("Drag and drop the<br> hand with Glass Rod on<br> the Glass Rod Stand"),
	gt.gettext("Drag and drop the<br> Wire on Metal Can"),
	gt.gettext("Drag and drop the<br> Tape on Metal Can"),
	gt.gettext("Drag and drop the<br> Stand with Metal Can<br> on Charged Electroscope"),
	gt.gettext("Click on the Glass Rod"),gt.gettext("Drag and drop the<br> Silk Cloth on the Glass Rod"),
	gt.gettext("Drag and drop the<br> hand with Glass Rod on<br> Charged Electroscope"),
	gt.gettext("Click on the Reset button<br> to do the experiment again")]

	ImageInitLoad(electrodeTouch, "electrodeTouchDiv", "electrodeTouchAB", "electrodeTouchAnimation")
	ImageInitLoad(electrodeTouchMax, "electrodeTouchMaxDiv", "electrodeTouchAMax", "electrodeTouchMaxAnimation")
	ImageInitLoad(electrodeTouchMin, "electrodeTouchMinDiv", "electrodeTouchBMin", "electrodeTouchMinAnimation")

};
$(document).ready(function () {
	help = 0;
	glassRod();

})
function glassRod()
{
	$("#glassrod").css({ 'cursor': 'pointer' });
	$("#glassrod").click(function () { 
	help = 1;removeTrip();
	$("#handwithCloth").fadeIn();
	$("#glassrod").fadeOut();
	$("#cloth").css({ "cursor": "pointer" })
	$("#cloth").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "77%", left: "67%", })}},
		drag: function () {removeTrip()}});

		$("#handAniDiv").droppable
		({
			accept: "#cloth", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" });
				$('#cloth').css({ top: "15%", left: "70%" }, );
				$("#cloth").hide();
				$('#glassrod,#cloth').css('pointer-events', 'none');
				$("#handwithCloth,#cloth,#handAniDiv").fadeOut();
				ImageAnimationOneTime("electrodeTouchAnimation", "electrodeTouchAB", electrodeTouch, 100, 0)
				setTimeout(function () {$("#handwithClothOne,#cloth").fadeIn();
				$("#cloth").animate({ top: "77%", left: "67%" }, )}, 5000);
				setTimeout(function () {$("#simHelp").css({ "pointer-events": "" })
				help = 2;
				silkRubGlassRod();}, 5500);
			}
		});
	});
}
function silkRubGlassRod()
{
	$("#handwithClothOne").css({ 'cursor': 'pointer' });
	$("#handwithClothOne").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "0%", left: "75%", })}},
		drag: function () {removeTrip()}});
		$("#electrodeDiv").droppable
		({
			accept: "#handwithClothOne", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$("#electrodeDiv").hide();
				$('#handwithClothOne').css('pointer-events', 'none');
				$("#handwithClothOne").animate({ top: "6%", left: "54%", height: "31%", width: "20%" }, );
				ImageAnimationOneTime("electrodeTouchMaxAnimation", "electrodeTouchAMax", electrodeTouchMax, 250, 0)
				$(".glowBorder,#labelGleaf").fadeIn();
				$("#electroscope").delay(200).fadeOut();
				setTimeout(function () {$("#electroscopeMax").fadeIn();
				$("#handwithClothOne").animate({ top: "2%", left: "54%", height: "35%", width: "15%" }, );
				$(".glowBorder,#labelGleaf").fadeOut();
				}, 6000);
				setTimeout(function () {$("#simHelp").css({ "pointer-events": "" })
				help = 3;
				glassRodonStand();}, 7000);
			}
		});
}
function glassRodonStand()
{
	$("#glassRodDiv").fadeIn();
	$('#handwithClothOne').css('pointer-events', '');
	$("#handwithClothOne").css({ 'cursor': 'pointer' });
	$("#handwithClothOne").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "2%", left: "54%", })}},
		drag: function () {removeTrip()}});
		$("#glassRodDiv").droppable
		({
			accept: "#handwithClothOne", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$('#handwithClothOne,#glassRodDiv').fadeOut();
				$('#electroscopeMax').delay(200).fadeOut();
				$('#glassrodOne').fadeIn();
				ImageAnimationOneTime("electrodeTouchMinAnimation", "electrodeTouchBMin", electrodeTouchMin, 300, 0)
				$(".glowBorder,#labelGleafMin").fadeIn();
				setTimeout(function () {$("#electroscopeMin").fadeIn();
				$("#simHelp").css({ "pointer-events": "" })
				help = 4;
				$(".glowBorder,#labelGleafMin").fadeOut();
				wire();}, 4000);
			}
		});
}
function wire()
{
	$("#wireDiv").show();
	$("#wireOne").css({ 'cursor': 'pointer' });
	$("#wireOne").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "76%", left: "22%", })}},
		drag: function () {removeTrip()}});
		$("#wireDiv").droppable
		({
			accept: "#wireOne", drop: function () 
			{
				$('#wireOne').css('pointer-events', 'none');
				$('#wireOne,#wireDiv').fadeOut();
				$('#wireTwo').fadeIn();
				help = 5;
				tape();
			}
		});
}
function tape()
{
	$("#tapeDiv").show();
	$("#tape").css({ 'cursor': 'pointer' });
	$("#tape").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "77%", left: "36%", })}},
		drag: function () {removeTrip()}});
		$("#tapeDiv").droppable
		({
			accept: "#tape", drop: function () 
			{
				$('#tape').css('pointer-events', 'none');
				$('#tape,#tapeDiv').fadeOut();
				$('#tapetoStick').fadeIn();
				help = 6;
				standCan();
			}
		});
}
function standCan()
{
	$("#standDiv,#standCanDiv").show();
	$("#standDiv").css({ 'cursor': 'pointer' });
	$("#standDiv").draggable({
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "10%", left: "2%", })}},
		drag: function () {removeTrip()}});
		$("#standCanDiv").droppable
		({
			accept: "#standDiv", drop: function () 
			{
				
				$('#alertDiv').fadeIn();
				$('#standCanDiv').hide();
				$('#standDiv').css('pointer-events', 'none');
				$("#electroscopeMin").animate({ top: "39%", left: "49%", height: "45%", width: "15%" }, );
				$("#stand").animate({ top: "1%", left: "-11%", height: "100%", width: "134%" }, );
				$("#standDiv").animate({ top: "12%", left: "36%", height: "77%", width: "26%" }, );
				$('#metalCan,#standClip,#wireTwo,#tapetoStick,#standClipFront').hide();
				$('#metalCanDummy,#standClipDummy,#wireTwoDummy,#tapetoStickDummy,#standClipFrontDummy').show();
				help = 7;
				glassroadCan();
			}
		});
}
function glassroadCan()
{
	$("#handCanDiv").show();
	$("#glassrodOne").css({ 'cursor': 'pointer' });
	$("#glassrodOne").click(function () { 
	help = 8;
	$('#cloth').css('pointer-events', '');
	$("#handwithCloth,#handAniDiv").fadeIn();
	$("#glassrodOne,#alertDiv").fadeOut();
	$("#cloth").css({ "cursor": "pointer" })
	$("#cloth").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "77%", left: "67%", })}},
		drag: function () {removeTrip()}});

		$("#handAniDiv").droppable
		({
			accept: "#cloth", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$('#cloth').css({ top: "15%", left: "70%" }, );
				$("#cloth").hide();
				$('#glassrod,#cloth').css('pointer-events', 'none');
				$("#handwithCloth,#cloth,#handAniDiv").fadeOut();
				ImageAnimationOneTime("electrodeTouchAnimation", "electrodeTouchAB", electrodeTouch, 100, 0)
				$("#handwithClothOne").css({ top: "0%", left: "75%", height: "20%", width: "25%" }, );
				setTimeout(function () {$("#handwithClothOne,#cloth").fadeIn();
				$("#cloth").animate({ top: "78%", left: "68%", height: "9%" }, );}, 5000);
				setTimeout(function () {$("#simHelp").css({ "pointer-events": "" })
				help = 9;
				silkRubGlassRodTwo();}, 5500);
			}
		});
	});
}
function silkRubGlassRodTwo()
{
	$("#handwithClothOne").css({ 'cursor': 'pointer' });
	$("#handwithClothOne").draggable({
		//appendTo: "body", helper:"clone",
		containment: "#mainDiv", revert: function (true_drop) 
		{ if (!true_drop) { $(this).animate({ top: "0%", left: "75%", })}},
		drag: function () {removeTrip()}});
		$("#handCanDiv").droppable
		({
			accept: "#handwithClothOne", drop: function () 
			{
				$("#simHelp").css({ "pointer-events": "none" })
				$('#handwithClothOne').css('pointer-events', 'none');
				$("#handwithClothOne").animate({ top: "0%", left: "55%", height: "20%", width: "20%" }, );
				setTimeout(() => {
					help = 10;
					$("#simHelp").css({ "pointer-events": "" })	
					$("#page1Div").hide();
					$("#page2Div").show();
				}, 4000);

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