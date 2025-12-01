var trip;
var tripFlag = false;
var helpcount = 1,
	help = 1;
let tripDuration = 25000;
var selector = '';
var helpMsg = '';
var helpPos = '';
var inferenceFlag = false;
// var helpMsg = [
// 	"Drag and drop egg into any of these beaker containing dilHCL",
// 	"Drag and drop egg into any of these beaker containing dilHCL",
// 	"Drag and drop deshelled egg into big Beaker",
// 	"Drag and drop deshelled egg into big Beaker",
// 	"Click here",
// 	"Drag and drop deshelled egg into Water or salt solution",
// 	"Drag and drop deshelled egg into water",
// 	"Drag and drop deshelled egg into salt solution",
// 	"Please wait"
// ];

// inferenceMsg = "The de-shelled egg when placed in water swells because the concentration of water molecules outside the egg is much higher than the concentration of water molecules inside the egg, as a result of which endosmosis takes place and water from the beaker enters the egg.<br/> Exosmosis takes place when the de-shelled egg is placed in a salt solution. The water comes out from the de-shelled egg into the salt solution. The loss of water results in the shrinkage of the egg"
$(document).ready(function () {
gt = new Gettext({ 'domain': 'messages' });
	$('#simHelp').on('click', function () {
		setTimeout(function () {
			tripFlag = true;
			var trip = new Trip([
				{
					sel: $(selector),
					content: helpMsg,
					expose: false,
					delay: tripDuration,
					position: helpPos,
				}
			]);
			setTimeout(function () {
				trip.start();
				window.trip = trip;
			},100)

		},100);


		if(hlp == 100){
			setTimeout(function(){
				var trip = new Trip([
					{
						sel: $(selector),
						content: helpMsg,
						expose: false,
						delay: tripDuration,
						position: helpPos,
					}
				]);
				setTimeout(function () {
					trip.start();
					window.trip = trip;
				},100)
			},200)
		}

	});


	$('#inference').bind('click', function () {
		$("#btnNext3").hide();
		$("#simHelp").pointerEnable();
		inferenceFlag = true;
		tripFlag = true;
		$("#glassRod").pointerEnable();
		if (inference == 1) {
			$("#note0").fadeOut();

			helpMsg = gt.gettext("Drag and drop Glass rod towards the Boiling tube B");
			selector = ".glass-rod";
			helpPos = "w"
			setTimeout(function () {
				trip = new Trip([

					{
						sel: $('#inference'),
						content: gt.gettext("When a drop of sodium carbonate decahydrate<br>solution is dropped on red litmus, it turns blue."),
						expose: false,
						position: 'e',
						delay: 9000
					},

				]);
			})


		}

		else if (inference == 2) {
			$("#note0").fadeOut();
			helpMsg = gt.gettext("Drag and drop Glass rod towards the Boiling tube C");
			selector = ".glass-rod";
			helpPos = "w"
			setTimeout(function () {
				trip = new Trip([
					{
						sel: $('#inference'),
						content: gt.gettext("When a drop of ammonium chloride is added to red litmus <br>there is no change in the litmus paper."),
						expose: false,
						position: 'e',
						delay: 9000
					},

				])
			})


		}
		else if (inference == 3) {
			$("#btnNext2").fadeIn();
			helpMsg = gt.gettext("Click on the Next button.");
			selector = "#btnNext2";
			helpPos = "w"

			setTimeout(function () {
				trip = new Trip([

					{
						sel: $('#inference'),
						content: gt.gettext("When a drop of sodium chloride is added to red litmus<br> there is no effect on the litmus paper."),
						expose: false,
						position: 'e',
						delay: 9000
					},

				]);
			})



		}
		else if (inference == 4) {
			$("#bottleCap").pointerEnable();
			helpMsg = gt.gettext("Click here to open the dil. HCL Bottle cap");
			selector = "#bottleCap";
			helpPos = "n"

			setTimeout(function () {
				trip = new Trip([

					{
						sel: $('#inference'),
						content: gt.gettext("When dilute hydrochloric acid reacts with sodium carbonate decahydrate,<br>sodium chloride, carbon dioxide and water are formed.<br>A brisk effervescence is seen in the release of carbon dioxide." + "<br>Na<sub>2</sub>CO<sub>3</sub>(s) + 2 HCl → 2NaCl(aq) + CO<sub>2</sub>(g) + H<sub>2</sub>O(l)"),
						expose: false,
						position: 'e',
						delay: tripDuration
					},

				]);

			})

		}
		else if (inference == 5) {
			setTimeout(function () {
				trip = new Trip([

					{
						sel: $('#inference'),
						content: gt.gettext("When ammonium chloride reacts with dil. HCL,<br> the resultant salt will be ammonium chloride. It is an acidic salt."),
						expose: false,
						position: 'e',
						delay: tripDuration
					},

				])
			})

			$("#bottleCap").pointerEnable();
			helpMsg = gt.gettext("Click here to open the dil. HCL Bottle cap");
			selector = "#bottleCap";
			helpPos = "n"
		}
		else if (inference == 6) {
			setTimeout(function () {
				trip = new Trip([

					{
						sel: $('#inference'),
						content: gt.gettext("Hydrochloric acid reacts with sodium hydroxide<br> to form sodium chloride (the salt) and water on the boiling tube.<br> sodium chloride is comprise of Na<sup>+</sup> cations from the base (NaOH)<br> and Cl<sup>-</sup> anions from the acid (HCl)."+"<br> HCl+NaOH→H<sub>2</sub>O+NaCl"),
						expose: false,
						position: 'e',
						delay: tripDuration
					},

				])
			})


			setTimeout(function () {
				$("#note").fadeIn(function () {
					setTimeout(function () {
						$("#note").fadeOut();
						$("#btnNext3").fadeIn();
						$("#simHelp").pointerEnable();
						helpMsg = "Click on the Next button.";
						selector = "#btnNext3";
						helpPos = "w"
					}, 5000)
				})
			}, 2000)
		} else if (inference == 7) {

			$("#simHelp").pointerDisable();
			setTimeout(function () {

				trip = new Trip([
					{
						sel: $('#inference'),
						content: gt.gettext("Pass the liberated gas evolved from the boiling tube through <br> the lime water in a test tube. The lime water turns milky.<br/>" +"The gas evolved when dil. HCL reacts with sodium carbonate decahydrate<br> is passed through lime water, lime water turns milky or <br> white precipitate of calcium carbonate is formed.<br>"+ " Ca(OH)<sub>2</sub> (aq) + CO<sub>2</sub> (g) →  CaCO<sub>3</sub> (s) + H<sub>2</sub>O (l)"),
						expose: false,
						position: 'e',
						delay: tripDuration
					},
				]);
				setTimeout(() => {
					$("#inference").hide();

					$("#simHelp").pointerEnable()
					helpMsg = gt.gettext("Observe the Colour of Lime water");
					selector = ".test-tube-div";
					helpPos = "s"

					$(".test-tube-div").animate({
						left: '-135%',
						top: '-139%'
					}, function () {

						setTimeout(() => {

							setTimeout(() => {
								removeTrip();
								$(".test-tube-div").animate({
									left: '-159%',
									top: '20%'
								});
								setTimeout(function () {
									$(".test-solution-div").animate({
										'background-color': 'rgba(255, 255, 255,0.30)'
									}, 5000, function () {
										inference = 8;
										$("#inference").fadeIn();
										$("#simHelp").pointerEnable();

										helpMsg = gt.gettext("Click on the Inference button to see the observation.");
										selector = "#inference";
										helpPos = "e"
									});
								}, 5000)
							});
						}, 6000)
					});
				}, tripDuration);
			})
		}
		if (inference == 8) {
			helpMsg = gt.gettext("Click on the Reset<br>button to redo<br>the experiment.");
			selector = "#simReset";
			helpPos = "s"
			trip = new Trip([
				{
					sel: $('#inference'),
					content: gt.gettext("On passing this gas in excess, it becomes clear again.<br> This confirms the presence of carbon dioxide.<br>"+ "Equation: CaCO<sub>3</sub> (s) + H<sub>2</sub>O (l) + CO<sub>2</sub> (g) →   Ca(HCO<sub>3</sub>)<sub>2</sub> (aq). <br>"+ "On passing excess CO<sub>2</sub> through Lime water,<br> calcium hydrogen carbonate is formed.<br> It is soluble in water and forms a colourless solution."),
					expose: false,
					position: 'e',
					delay: tripDuration
				},
			]);
		}
		setTimeout(function () {
			trip.start();
			window.trip = trip;
		});
	});
});
