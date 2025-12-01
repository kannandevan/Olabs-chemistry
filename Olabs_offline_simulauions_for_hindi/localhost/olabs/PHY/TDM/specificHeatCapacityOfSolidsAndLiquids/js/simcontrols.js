var displayArray, gt, c, ctx, helpMsg = new Array();
var helprarr, inferenceMsg, count = 0, waterAnim, fireAnim;
var showArr = 0;
var count = 0, objectDistance = 50;
var mc = 40, mw = 50, ms = 20, t1 = 25, t2 = 75, materialofcalorimeter = "copper", sc = 0.386;
var materialofcalorimeter_l = "copper";
var mc_l = 40, ml_l = 50, ms_l = 20, materialofsolid_l = "A", ss_l = 0.375, materialofliquid = "A";
var sl_l = 1.72;
var t1_l = 25, t2_l = 75, sc_l = 0.386;
var materialofsolid = "A";
var ss = 0.375;
var sw = 4.18, x1 = 0, x2 = 0;
var A;
var methodselector = "solid";
var flag = false;
var imageArray =
	["../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0001.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0002.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0003.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0004.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0005.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0006.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0007.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0008.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0009.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0010.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0011.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0012.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0013.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0014.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/flame ani0015.png"

	]
var imageArrayClock =
	["../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0001.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0002.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0003.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0004.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0005.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0006.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0007.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0008.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0009.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0010.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0011.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0012.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0013.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0014.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0015.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0016.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0017.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0018.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0019.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0020.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0021.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0022.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0023.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0024.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0025.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0026.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0027.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0028.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0029.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0030.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0031.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0032.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0033.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0034.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0035.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0036.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0037.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0038.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0039.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0040.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0041.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0042.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0043.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0044.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0045.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0046.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0047.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0048.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0049.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/Clock Animation0050.png",

	]
var imageArray2 =
	["../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0001.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0002.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0003.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0004.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0005.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0006.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0007.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0008.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0009.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0010.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0011.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0012.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0013.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0014.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0015.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0016.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0017.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0018.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0019.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0020.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0021.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0022.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0023.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0024.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0025.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0026.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0027.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0028.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0029.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0030.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0031.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0032.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0033.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0034.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0035.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0036.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0037.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0038.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0039.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0040.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0041.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0042.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0043.png", "../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0044.png",
		"../PHY/TDM/specificHeatCapacityOfSolidsAndLiquids/images/RECOVER_Chrysanthemum Stunt0045.png"

	]

	// --- SLIDER VALUE UPDATE FUNCTION ---
// This function is necessary for the slider to update the <span> element you defined.
// It must be globally accessible because it's called via the 'oninput' attribute in your HTML.
function valuemassofcalorimeter() {
    // Get the current value from the range input
    var sliderValue = document.getElementById("massofcalorimeter").value;

    // Update the text in the <span> element
    document.getElementById("valuemassofcalorimeter").textContent = sliderValue;
}

function valuemassofwater() {
    // Get the current value from the range input
    var sliderValue = document.getElementById("massofwater").value;

    // Update the text in the <span> element
    document.getElementById("valuemassofwater").textContent = sliderValue;
}

function valuemassofsolid() {
    // Get the current value from the range input
    var sliderValue = document.getElementById("massofsolid").value;

    // Update the text in the <span> element
    document.getElementById("valuemassofsolid").textContent = sliderValue;
}


window.onload = function () {
	gt = new Gettext({ 'domain': 'messages' });
	// document.getElementById("expName").innerHTML = gt.gettext("Specific Heat Capacity of Solid And Liquid");
	$('#expName').html(gt.gettext("Specific Heat Capacity of Solid And Liquid"));
	
    $('.labName').html(gt.gettext("Developed by Amrita University Under research grant from<br>Ministry of Electronics and Information Technology"));
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));

	$('#instruction').html(gt.gettext("INSTRUCTION:"));

	$('#instruction1').html(gt.gettext("Drag and Drop the bottle cap to start the experiment"));


    $('#text_001').html(gt.gettext("Select the method"));
	$('#text_002').html(gt.gettext("Select mass of calorimeter (m<sub>c</sub>g):"));
	$('#text_003').html(gt.gettext("Temperature of water (t1):"));



$('[data-translatable-label]').each(function() {
    // Get the original HTML content (which should contain only the static text)
    var originalHtml = $(this).html().trim(); 
    
    // Translate the text
    var translatedHtml = gt.gettext(originalHtml);
    
    // Replace the content with the translated text
    $(this).html(translatedHtml); 
    
    console.log("Translated Label: " + translatedHtml);
});

// 2. Logic for translating generic elements (H5, buttons, paragraphs, etc.)
// This targets elements using the simpler 'data-translate' attribute.
$('[data-translate]').each(function() {
    var originalHtml = $(this).html();
    $(this).html(gt.gettext(originalHtml));
});

// 3. Logic for translating input values (used for min/max values or button values)
$('[data-translate-value]').val(function (index, originalVal) {
    // This typically only works for input types that display text via the 'value' attribute, 
    // like text inputs or submit buttons.
    return gt.gettext(originalVal);
});




$('[data-translate-text]').each(function() {
    var originalText = $(this).text(); 
    var translatedText = gt.gettext(originalText);
    $(this).text(translatedText); 
    console.log(originalText + ' translated to ' + translatedText);
});

$('[data-translate-value]').val(function (index, originalVal) {
    return gt.gettext(originalVal);
});


	$(document).ready(function () {
		$("#next").click(function () {
			$(".content").animate({ scrollTop: '300px' });
			$("#scene1").css({ "display": "none" })
			$("#scene2").css({ "display": "block" })
			$('#Measuring_Jar_reading').html('0.0');
			if (methodselector == 'solid') {
				$("#solidMaterial").css({ "display": "block" });
				$("#liquidMaterial").css({ "display": "none" });
				$("#reset1").css({ "display": "none" })
				$("#reset").css({ "display": "block" })
				showArr = 10;
				removeTrip();
			}
			else if (methodselector == 'liquid') {
				$("#liquidMaterial").css({ "display": "block" });
				$("#solidMaterial").css({ "display": "none" });
				$("#reset2").css({ "display": "none" })
				$("#reset4").css({ "display": "block" })
				showArr = 10;
				showArr = 35;
				removeTrip();
			}
		})

		displayArray = ['block', 'none'];
		helprarr = [
			gt.gettext("Select the method"),
			gt.gettext("Select material of calorimeter"),
			gt.gettext("Select mass of calorimeter"),
			gt.gettext("Select mass of water"),
			gt.gettext("Drag and drop the<br>selected cylinder towards<br> the weighing machine"),
			gt.gettext("Drag and drop the <br> beaker containing <br> water towards the <br>weighing <br>machine"),
			gt.gettext("Click on the calorimeter to open"),
			gt.gettext("Drag and drop the<br>selected cylinder containing<br>water towards the calorimeter"),
			gt.gettext("Drag and drop the thermometer towards the calorimeter"),
			gt.gettext(" Click on the Next button"),
			gt.gettext("Select material of solid"),
			gt.gettext("Select mass of the solid"),
			gt.gettext("Select the temperature<br>upto which solid is heated"),
			gt.gettext("Drag and drop the solid<br>towards the weighing machine"),
			gt.gettext("Drag and drop the solid<br>towards the thread"),
			gt.gettext("Drag and drop the solid<br>wounded in thread<br>towards the beaker"),
			gt.gettext("Click on the burner to turn it ON"),
			gt.gettext("Click on the calorimeter to open"),
			gt.gettext("Drag and drop the solid<br>wounded in thread<br>towards the calorimeter"),
			gt.gettext("Click on the calorimeter to close"),
			gt.gettext("Click on the calorimeter<br>again to stir the water"),
			gt.gettext("Click on the Show Result check box"),
			gt.gettext("Click on the Fetch data check box"),
			gt.gettext("Click on the Result check box"),
			gt.gettext("Select mass of liquid"),
			gt.gettext("Select material of liquid"),
			gt.gettext("Click on the Reset button"),
			gt.gettext("Click on the burner to turn it OFF")


		]
		////inference label
		inferenceMsg = [
			gt.gettext("Strength of electromagnet increases when -<br>1. Number of turns of wire increases<br>2. Number of electric cells in the circuit increases<Br>3. Iron bolt is used as core of electromagnet<br> instead of plastic<Br>4. Thickness of iron bolt increases<br>Stronger electromagnets attracts more nails.")

		]

$('[data-translate-text]').each(function() {
    var originalText = $(this).text(); 
    var translatedText = gt.gettext(originalText);
    $(this).text(translatedText); 
    console.log(originalText + ' translated to ' + translatedText);
});

$('[data-translate-value]').val(function (index, originalVal) {
    return gt.gettext(originalVal);
});
		$('#Measuring_Jar_reading').html('0.0');
		$("#resultFinal").css({ "cursor": "pointer" })
		$("#fetchData").css({ "cursor": "pointer" })
		$("#scene2").css({ "display": "none" })
		$("#scene1").css({ "display": "block" })
		$("#check").prop('disabled', true);
		$("#check").prop('disabled', true);
		$("#checkLiquid").prop('disabled', true);
		$("#reset3").css({ "display": "none" })
		$("#reset").css({ "display": "none" })
		console.log(materialofcalorimeter)

		$("#check2").prop('disabled', true);
		$("#check2").css({ "cursor": "default" })

		$("#check").click(function () {
			$("#check").prop('disabled', true);

			if ($(this).is(":checked")) {
				$("#resultData").show();
				showArr = 22
				$(".content").animate({ scrollTop: '500px' });
				$("#reset3").css({ "display": "block" })
				$("#reset,#reset1").css({ "display": "none" })
				$("#check1").click(function () {
					$("#check1").prop('disabled', true);
					removeTrip();
					showArr = 23;
					$("#check2").prop('disabled', false);
					$("#check2").css({ "cursor": "pointer" })

					$("#check2").click(function () {
						$("#check2").prop('disabled', true);
						removeTrip();
						$(".content").animate({ scrollTop: '600px' });
						showArr = 36;
	
					})
				})
				$("#reset,#reset1").css({ "display": "none" })

				

			} else {
				$("#resultData").hide();
				$("#reset").css({ "display": "block" })
				$("#reset3").css({ "display": "none" })
			}
		});
		$("#checkLiquid2").prop('disabled', true);
		$("#checkLiquid2").css({ "cursor": "default" })
		$("#checkLiquid").click(function () {
			$("#checkLiquid").prop('disabled', true);

			if ($(this).is(":checked")) {
				$(".content").animate({ scrollTop: '600px' });
				$("#resultDataLiquid").show();
				$("#resultData").hide();
				$("#reset4").css({ "display": "none" })
				$("#reset5").css({ "display": "block" })

				$("#checkLiquid1").click(function () {
					$("#checkLiquid1").prop('disabled', true);
				
					removeTrip();
					showArr = 29
					$("#checkLiquid2").prop('disabled', false);
					$("#checkLiquid2").css({ "cursor": "pointer" })

					$("#checkLiquid2").click(function () {
						$("#checkLiquid2").prop('disabled', true);
						removeTrip();
						$(".content").animate({ scrollTop: '800px' });
						showArr = 37
						$("#reset5").css({ "display": "block" })
						$("#reset4").css({ "display": "none" })
	
	
					})
				})
				
				removeTrip();
				showArr = 28;

			} else {
				$("#resultDataLiquid").hide();

			}
		});
		$("#materialofcalorimeter").click(function () {
			removeTrip();
			showArr = 3;
		})

		$("#materialofcalorimeter").change(function () {
			materialofcalorimeter = $(this).val();
			if (materialofcalorimeter == 'copper') {
				sc = 0.386;
				removeTrip();
				showArr = 3;
				console.log(materialofcalorimeter)
				$("#copperBack,#copperFront,#copperBack1,#copperFront1,#copperBack2,#copperFront2").css({ "display": "block" });
				$("#alumBack,#alumFront,#alumBack1,#alumFront1,#alumBack2,#alumFront2").css({ "display": "none" });
			}
			else if (materialofcalorimeter == 'aluminium') {
				sc = 0.900;
				removeTrip();

				$("#copperBack,#copperFront,#copperBack1,#copperFront1,#copperBack2,#copperFront2").css({ "display": "none" });
				$("#alumBack,#alumFront,#alumBack1,#alumFront1,#alumBack2,#alumFront2").css({ "display": "block" })
			}
		});
		$("#materialofsolid").click(function () {
			removeTrip();
			showArr = 11;

		})
		$("#materialofsolid").change(function () {
			materialofsolid = $(this).val();
			if (materialofsolid == 'A') {
				ss = 0.375;
				console.log(materialofsolid)
				removeTrip();
				showArr = 11;


			}
			else if (materialofsolid == 'B') {
				ss = 0.460;
			}
		});
		$("#materialofsolid_l").click(function () {
			removeTrip();
			showArr = 32;

		})

		$("#materialofsolid_l").on('change', function () {
			materialofsolid_l = $(this).val();
			if (materialofsolid_l == 'A') {
				ss_l = 0.375;
			}
			else if (materialofsolid_l == 'B') {
				ss_l = 0.460;
			}
		});

		$("#materialofliquid_l").click(function () {
			removeTrip();
			showArr = 33;

		})


		$("#materialofliquid_l").on('change', function () {
			materialofliquid = $(this).val();
			if (materialofliquid == 'A') {
				sl_l = 1.72;
			}
			else if (materialofliquid == 'B') {
				sl_l = 1.67;
			}
		});
		$("#materialofcalorimeter_l").click(function () {
			removeTrip();
			showArr = 25;


		})
		$("#materialofcalorimeter_l").on('change', function () {
			removeTrip();
			showArr = 25
			materialofcalorimeter_l = $(this).val();
			if (materialofcalorimeter_l == 'copper') {
				sc_l = 0.386;
				$("#copperBack,#copperFront,#copperBack1,#copperFront1,#copperBack2,#copperFront2").css({ "display": "block" });
				$("#alumBack,#alumFront,#alumBack1,#alumFront1,#alumBack2,#alumFront2").css({ "display": "none" });
			}
			else if (materialofcalorimeter_l == 'aluminium') {
				sc_l = 0.900;
				$("#copperBack,#copperFront,#copperBack1,#copperFront1,#copperBack2,#copperFront2").css({ "display": "none" });
				$("#alumBack,#alumFront,#alumBack1,#alumFront1,#alumBack2,#alumFront2").css({ "display": "block" });
			}
		});
		showArr = 0;
		$("#methodselector").click(function () {
			removeTrip();
			if (methodselector == 'solid') {
				showArr = 2;
				


			}
			else if (methodselector == 'liquid') {
				showArr = 24;

			}

		}
		)

		$("#methodselector").change(function () {
			methodselector = $(this).val();
			if (methodselector == 'solid') {
				removeTrip();

				$("#solidSelection,#waterText,#nameBoard2").css({ "display": "block" });
				$("#liquidSelection").css({ "display": "none" });
				$("#beakerWaterLiquid,#liquidText,#nameBoard1").css({ "display": "none" });
				$("#beakerWater").css({ "display": "block" });

			}
			else if (methodselector == 'liquid') {
				removeTrip();
				showArr = 24;
				$("#liquidSelection,#liquidText,#nameBoard1").css({ "display": "block" });
				$("#solidSelection,#waterText,#nameBoard2").css({ "display": "none" });
				$("#beakerWaterLiquid").css({ "display": "block" });
				$("#beakerWater").css({ "display": "none" });

			}
		});
		$("#copper").css({ "cursor": "pointer" })
		$("#copper").draggable(
			{
				
				revert: "invalid",
				tolerance: "touch",
				drag: function () {
					removeTrip();
					$("#methodselector").prop('disabled', true);
					$("#materialofcalorimeter,#materialofcalorimeter_l").prop('disabled', true);
					$("#massofcalorimeter,#massofcalorimeter_l").prop('disabled', true);
					$("#massofwater,#massofliquid_l").prop('disabled', true);
				}
			})

		$("#weighDropArea").droppable({
			accept: "#copper",
			drop: function () {
				$("#copper").animate({ left: 13 + "%", top: 30 + "%" })
				$("#weighDropArea").hide()
				$("#copper").css({ "cursor": "default" })
				$("#copper").css({ "pointer-events": "none" })
				$("#Measuring_Jar_reading").empty()
				showArr = 6;


				if (methodselector == 'solid') {
					$("#Measuring_Jar_reading").html(mc + "g");
				}
				else if (methodselector == 'liquid') {
					$("#Measuring_Jar_reading").html(mc_l + "g");
				}

				$("#beaker").css({ "cursor": "pointer" })

				console.log(mc)
				$("#beaker").draggable(
					{
						
						revert: "invalid",
						tolerance: "touch",
						drag: function () {
							removeTrip();
							
						}
					})

				$("#beakerDropArea").droppable({
					accept: "#beaker",
					drop: function () {
						showArr = 7;
						$("#beaker").animate({ left: 23 + "%", top: 0 + "%" })
						setTimeout(function () {
							$("#beaker").draggable("disable")
							$("#beaker").css({ "cursor": "none" })
							if (methodselector == 'solid') {
								$("#Measuring_Jar_reading").html(parseInt(mw) + parseInt(mc) + "g");


							}
							else if (methodselector == 'liquid') {
								$("#Measuring_Jar_reading").html(parseInt(ml_l) + parseInt(mc_l) + "g");

							}

						}, 3500)
						console.log((mw + mc))
						$('#beaker').animate(
							{ deg: -58 },
							{
								duration: 1000,
								step: function (now) {
									$(this).css({ transform: 'rotate(' + now + 'deg)' })
									// var setin = setInterval(waterDrop, 2000);
									setTimeout(function(){
										// $("#waterpouring").show();
										// $("#waterpouring").animate({'height':'100%'},1000)
										// $("#caloriWater").fadeIn(2200,function(){
										// $("#waterpouring").hide();

										// });

										$("#waterpouring").show();
										$("#waterpouring").animate({ 'height': '100%' }, 1000, function() {
											$("#caloriWater").fadeIn(1600, function() {
												$("#waterpouring").hide();
											});
										});


									},1000)
									

									//waterDrop();
									
									$("#beakerWater,#beakerWaterLiquid").fadeOut();
									$("#beakerBendWater").fadeIn();
									$("#beakerBendWater").css({ "display": "block" });

									$("#copper").draggable("enable")
									setTimeout(function () {
										// clearInterval(setin);
										$('#beaker').animate(
											{ deg: 0 },
											{
												duration: 1000,
												step: function (now) {
													$(this).css({ transform: 'rotate(' + now + 'deg)' })
													if (methodselector == 'solid') {

														$("#beakerWater").fadeIn();

													}
													else if (methodselector == 'liquid') {
														$("#beakerWaterLiquid").fadeIn();
													}
													$("#beakerBendWater").fadeOut();
													$("#beakerBendWater").css({ "display": "none" });
													$('#beaker').animate({ left: '81' + "%" }, 1000, function () {
														$('#beaker').css({ top: '40' + "%" }, 1000);

													}
													)

													$('#copper').css({ 'cursor': 'pointer' });
													$('#beaker').css({ 'cursor': 'default' });
												}
											})
										$('#calori').css({ 'cursor': 'pointer' });
										$('#copper').css({ 'cursor': 'default' });
										$("#calori").click(function () {
											console.log("Hai")
											if (x1 == 0) {
												showArr = 8;
												x1 = 1;
											}

											$('#calori').css({ 'cursor': 'default' });
											$('#copper').css({ 'cursor': 'pointer' });
											$("#copper").draggable("enable")
											$("#copper").css({ "pointer-events": "auto" })
											removeTrip();

											$("#caloriTop,#caloriTopHalf").animate({ left: -50 + "%" })

											$("#copper").draggable({

												containment: "canvasBox",
												revert: "invalid",
												tolerance: "touch",

												drag: function () {
													$('#calori').css({ 'pointer-events': 'none' });

													removeTrip();
													console.log(showArr);
												}
											})
											$("#caloriDropArea").droppable({
												accept: "#copper",
												drop: function () {
													showArr = 9;

													$("#calori").css({ 'pointer-events': "none" })
													$("#Measuring_Jar_reading").empty()
													$('#Measuring_Jar_reading1').html('0.0');
													$("#caloriDropArea").hide()
													$("#thermoDropArea").show()

													$("#copper").show()
													$("#copper").css({ left: 57 + "%", top: 8 + "%" })
													setTimeout(function () {
														$("#copper").hide();
														$("#copper1").show();

														setTimeout(function () {
															$("#copper1").animate({ left: 59.3 + "%", top: 42 + "%" })
														}, 500)

														setTimeout(function () {
															console.log("Ssss")
															$("#caloriTopClose,#caloriTopHalfClose").css({ "display": "block" })
															$("#caloriTop,#caloriTopHalf").css({ "display": "none" })
															$("#caloriTopClose,#caloriTopHalfClose").animate({ left: 15 + "%" })
															$('#thermometer').css({ 'cursor': 'pointer' });

															setTimeout(function () {

																$("#thermometer").draggable({
																	containment: "canvasBox",
																	revert: "invalid",
																	tolerance: "touch",

																	drag: function () {
																		removeTrip();

																	}
																})
																$("#thermoDropArea").droppable({
																	accept: "#thermometer",
																	drop: function () {
																		showArr = 1;
																		$('#thermometer1').css({ 'display': 'block' });
																		$('#thermometer').css({ 'display': 'none' });
																		$('.line1').css({ 'display': 'block' });
																		$("#alertMsg,#direct").css({ display: 'block' });

																		setTimeout(function () {
																			$(".line1").animate({ height: + 30 + "%", top: 39 + "%" })

																		}, 2000)
																		setTimeout(function () {


																			$('#next').css({
																				'pointer-events': 'auto',
																				'display': 'block',
																				'cursor': 'pointer'
																			});



																		}, 3500)
																		maxval = 10;
																	}
																})

															}, 500)

														}, 1000)

													})
												}
											})

										})


									}, 3500)

								}
							})
					}
				})
			}
		})
		$("#weighDropArea2").show()

		// ############################################
		// Scene2
		// ############################################
		flag = true;
		// showArr = 10;

		if (flag == true) {

			$("#solid").css({ "cursor": "pointer" })
			// showArr = 10;

			$("#solid").draggable(
				{
					
					revert: "invalid",
					tolerance: "touch",
					drag: function () {

						$("#materialofsolid,#materialofsolid_l,#materialofliquid_l").prop('disabled', true);
						$("#tempofsolid,#tempofsolid_l").prop('disabled', true);
						$("#massofsolid,#massofsolid_l").prop('disabled', true);
					}
				})

			$("#weighDropArea2").droppable({
				accept: "#solid",
				drop: function () {
					removeTrip();
					showArr = 14;
					$("#solid").animate({ left: 13 + "%", top: 36 + "%" },
						function () {
							$("#solid").css({ "display": "none" })

						}
					)

					$("#weighDropArea2").hide()
					$("#solid").css({ "cursor": "default" })
					$("#solid").css({ "pointer-events": "none" })
					setTimeout(function () {
						$("#solidRotDiv").css({ "display": "block" })

					}, 500)
					setTimeout(function () {

						if (methodselector == 'solid') {
							$("#Measuring_Jar_reading").html(ms + "g");
						}
						else if (methodselector == 'liquid') {
							$("#Measuring_Jar_reading").html(ms_l + "g");

						}
					}, 1000);

					$("#solidRot").css({ "cursor": "pointer" })
					$("#solidRotDiv").draggable(
						{
							
							revert: "invalid",
							tolerance: "touch",
							drag: function () {
								removeTrip();
								showArr = 15;
								$("#Measuring_Jar_reading").empty()
							}
						})

					$("#threadArea").droppable({
						accept: "#solidRotDiv",
						drop: function () {
							$("#solidRotDiv,#ThreadText,#nameBoard").css({ "display": "none" })
							$("#solidThreadLieDiv").css({ "display": "block" })
							$("#thread").css({ "display": "none" })
							$("#Measuring_Jar_reading").empty()

							$("#solidThreadLieDiv").css({ "cursor": "pointer" })
							$("#solidThreadLieDiv").draggable(
								{
									
									revert: "invalid",
									tolerance: "touch",
									drag: function () {
										
										$("#solidThreadLieDiv").css({ width: 25 + "%", height: 15 + "%" })
									}
								})

							$("#burnDropArea").droppable({
								accept: "#solidThreadLieDiv",
								drop: function () {
									removeTrip();
									showArr = 16;
									$("#solidThreadLieDiv").css({ "display": "none" })
									$("#solidThread").css({ "display": "block" })
									$("#burnerOff2").css({ "cursor": "pointer" })

									$("#burnerOff2").click(function () {
										fireAnim = ImageAnimationINFinity("newFireAnimation", "testFire", imageArray, 100)
										waterAnim = ImageAnimationINFinity("newBubbleAnimation", "testBub", imageArray2, 100)
										ImageAnimationOneTime("newClockAnimation", "testClock", imageArrayClock, 100, 0)
										$("#alertMsg1,#direct1").css({ "display": "block" });
										removeTrip()
										showArr = 17
										if (methodselector == 'solid') {
											$("#alertMsg,#direct").css({ display: 'block' });
											//$("#tempSolid").html(t2)
											console.log($("#tempofsolid").val())
											$("#tempSolid").html($("#tempofsolid").val())

										}
										else {
											$("#tempSolid").html($("#tempofsolid_l").val())
											console.log($("#tempofsolid_l").val())


										}

										$(".line2").css({ "display": "block" })
										setTimeout(function () {
											$('#solidThread').css({ 'z-index': '1' });
											$(".line2").animate({ height: + 18 + "%", top: 34 + "%" })

										}, 4500)

										console.log("vhbvhvh")
										$("#burnerOff2").css({ "display": "none" })
										$("#burnerTripod").css({ "display": "block" })
										$("#weighMachine").animate({ "left": -23 + "%" }, function () {
											$("#weighMachine").css({ "display": "none" })
											$("#calori2,#copper2").css({ "display": "block" })
											$("#calori2").css({ "cursor": "pointer" })

											$("#calori1").css({ "display": "none" })
											$("#calori2").animate({ "left": 27 + "%" })
											$("#copper2").animate({ "left": 36 + "%", "top": 51 + "%" })
											$("#burnerOff2").css({ "pointer-events": "none" })
											$("#calori2").click(function () {
												$('#calori2').css({ 'cursor': 'default' });
												$('#solidThread').css({ 'cursor': 'pointer' });
												$("#alertMsg1,#direct1").css({ "display": "none" });

												removeTrip();
												showArr = 18;

												$("#caloriTop2,#caloriTopHalf2").animate({ left: -50 + "%" })

												$("#solidThread").draggable(
													{
														
														revert: "invalid",
														tolerance: "touch",
														drag: function () {

															$("#caloriTop2,#caloriTopHalf2").css({ "display": "none" })
															$("#caloriTopClose2,#caloriTopHalfClose2").css({ "display": "block" })
															$("#calori2").css({ "cursor": "pointer" })
															removeTrip();
															showArr = 19;
														}
													})
												$("#caloriDropArea2").droppable({
													accept: "#solidThread",
													drop: function () {
														$('#solidThread').css({ 'left': 38 + '%', top: 14 + "%" })

														setTimeout(function () {
															$('#solidThread').animate({ 'top': 35 + '%' }, function () {
																$('#solidThread').fadeOut()
																$("#calori2").click(function () {

																	$("#calori2").css({ "cursor": "pointer" })
																	removeTrip();
																	showArr = 20
																	$("#caloriTopClose2,#caloriTopHalfClose2").animate({ left: 15 + "%" })
																	$("#copper2").css({ "z-index": "2" })
																	$("#calori2").click(function () {
																	

																		var setinterStirrerAni = setInterval(stirAnimate, 1000);
																		setTimeout(function () {
																			$("#calori2").css({ "pointer-events": "none" })
																			removeTrip();
																			showArr = 38
																			setTimeout(function () {
																				$("#burnerTripod").css({ "cursor": "pointer" })

																			$("#burnerTripod").click(function () {
																				if (methodselector == 'solid') {
																					showArr = 21
		
																					removeTrip()

																				}
																				else if (methodselector == 'liquid') {
																					showArr = 27
																					removeTrip()

																				}
		
																			$("#burnerOff2").css({ "display": "block" })
																			$("#burnerTripod").css({ "display": "none" })
																			$("#check").prop('disabled', false);


																			$("#checkLiquid").prop('disabled', false);
																			clearAnimation(fireAnim, "fireAnimation")
																			clearAnimation(waterAnim, "bubbleAnimation")
																			})
																		},2000)
																			clearInterval(setinterStirrerAni);
					

																			
																		}, 4000)

																	})

																})

															})
														})

													}
												})


											})

										})


									})

								}
							})
						}
					})

					console.log(ms)
				}
			})
		}

	})
}
$(window).on('load',function() {

	ImageInitLoad(imageArray, "fireAnimation", "testFire", "newFireAnimation")
});
$(window).on('load',function() {

	ImageInitLoad(imageArray2, "bubbleAnimation", "testBub", "newBubbleAnimation")
});
$(window).on('load',function() {

	ImageInitLoad(imageArrayClock, "clockAnimation", "testClock", "newClockAnimation")
});
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
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
	var GlobalVariable = 0;
	var ANIMATIONTimesReached = 0;
	var CLEARImageAnimation = setInterval(function () {
		$('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
		$('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
		GlobalVariable++;
		if (GlobalVariable == ANIMATIONImageArray.length - 1) {
			$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
			$('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
			if (ANIMATIONTimesReached >= ANIMATIONTimes) {
				$('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
				CLEARImageAnimation.clearIntervel();
			}
			else {
				GlobalVariable = 0;
				ANIMATIONTimesReached++;
			}
		}
	}, ANIMATIONSpeed);
}

function stirAnimate() {
	$("#Stirrer3").animate({
		top: -14 + "%", left: 15 + "%"
	}, 600);
	$("#Stirrer3").animate({
		top: -40 + "%", left: 15 + "%"
	}, 600);

}
function FetchDataliquid() {
	document.getElementById("valuehc-calorimeter_l").innerHTML = sc_l;
	document.getElementById("valuemass-solid_l").innerHTML = ms_l;
	document.getElementById("valuetemp-solid_l").innerHTML = t2_l;
	document.getElementById("valuehc-solid_l").innerHTML = ss_l;
	$("#check1").prop('disabled', true);

}
function FetchDatasolid() {
	document.getElementById("valuehc-calorimeter").innerHTML = sc;
	document.getElementById("valuemass-solid").innerHTML = ms;
	document.getElementById("valuetemp-solid").innerHTML = t2;
	document.getElementById("valuehc-water").innerHTML = 4.18;
	$("#checkLiquid1").prop('disabled', true);

}
function result() {
	if (methodselector == "solid") {
		mc = Number(mc);
		ms = Number(ms);
		mw = Number(mw);
		ss = Number(ss);
		sc = Number(sc);
		sw = Number(sw);
		t1 = Number(t1);
		t2 = Number(t2);

		var Numerator = (ss * ms * t2) + (sw * mw * t1) + (sc * mc * t1);
		var denominator = (mw * sw) + (mc * sc) + (ms * ss);
		var t3 = Numerator / denominator;
		document.getElementById("valuefinaltemp").innerHTML = t3.toFixed(2);
		console.log("dsds")

		var Numerator1 = (mw) * (sw) * (t3 - t1) + (mc * sc * (t3 - t1))
		var denominator1 = (ms * (t2 - t3));
		ss = Numerator1 / denominator1;

		document.getElementById("valuehc-solid").innerHTML = ss.toFixed(2);
	}
	else if (methodselector == "liquid") {
		mc_l = Number(mc_l);
		ms_l = Number(ms_l);
		ml_l = Number(ml_l);
		ss_l = Number(ss_l);
		sc_l = Number(sc_l);
		sl_l = Number(sl_l);
		t1_l = Number(t1_l);
		t2_l = Number(t2_l);

		var Numerator2 = (mc_l * sc_l * t1_l) + (ml_l * sl_l * t1_l) + (ms_l * ss_l * t2_l);
		var denominator2 = (mc_l * sc_l) + (ml_l * sl_l) + (ms_l * ss_l);
		var t3_l = Numerator2 / denominator2;

		document.getElementById("valuefinaltempl").innerHTML = t3_l.toFixed(2);

		var Numerator3 = (ms_l * ss_l * (t2_l - t3_l)) - (mc_l * sc_l * (t3_l - t1_l));
		var denominator3 = (ml_l * (t3_l - t1_l));
		sl_l = Numerator3 / denominator3;

		document.getElementById("valuehc-liquidl").innerHTML = sl_l.toFixed(2);
	}
}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}
function valuemassofcalorimeter_l() {
	removeTrip();
	showArr = 26;

	var x = document.getElementById("massofcalorimeter_l").value;
	document.getElementById("valuemassofcalorimeter_l").innerHTML = x;
	mc_l = x;
	alert(mc_l)
	return x;
}
function valuemassofsolid_l() {
	removeTrip();
	showArr = 34;
	var x = document.getElementById("massofsolid_l").value;
	document.getElementById("valuemassofsolid_l").innerHTML = x;
	ms_l = x;
	return x;
}

// // Value Mass of Liquid
function valuemassofliquid_l() {
	removeTrip();
	showArr = 5;
	var x = document.getElementById("massofliquid_l").value;
	document.getElementById("valuemassofliquid_l").innerHTML = x;
	ml_l = x;
	return x;
}



// // Value temp of Solid
function valuetempofsolid_l() {
	removeTrip();
	showArr = 13;
	var x = document.getElementById("tempofsolid_l").value;
	document.getElementById("valuetempofsolid_l").innerHTML = x;
	t2_l = x;
	return x;
}
function valuemassofcalorimeter() {
	removeTrip();
	showArr = 4;

	var x = document.getElementById("massofcalorimeter").value;
	document.getElementById("valuemassofcalorimeter").innerHTML = x;
	mc = x;
	return x;


}
// Value Mass of Water
function valuemassofwater() {
	removeTrip();
	showArr = 5;

	var x = document.getElementById("massofwater").value;
	document.getElementById("valuemassofwater").innerHTML = x;
	mw = x;
	return x;
}
function valuemassofsolid() {
	removeTrip();
	showArr = 12;
	var x = document.getElementById("massofsolid").value;
	document.getElementById("valuemassofsolid").innerHTML = x;
	ms = x;
	return x;
}
// Value temp of solid 
function valuetempofsolid() {
	removeTrip();
	showArr = 13;
	var x = document.getElementById("tempofsolid").value;
	document.getElementById("valuetempofsolid").innerHTML = x;
	t2 = x;
	return x;
}



