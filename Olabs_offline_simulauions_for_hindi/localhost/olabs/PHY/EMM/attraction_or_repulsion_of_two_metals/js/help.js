var trip;
var tripFlag = false;
var helpcount = 1,
	help = 1;
let tripDuration = 2000;
var helpPos = "e";
var helpText = "Not defined";
var helpSelector = "#simHelp"
var tVar = 0;

$(document).ready(function () {

	$('#simHelp').bind('click', function () {
		tripFlag = true;
	
		$(".control-scroll-area").animate({ scrollTop: '600px' });
		

		if (tVar == 0) {
			var trip = new Trip([
				{
					sel: $(helpSelector),
					content: helpText,
					expose: false,
					delay: tripDuration,
					position: helpPos,
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else {
			helpPos = "s";
			helpText = "Click on the Reset button to<br>redo the experiment.";
			helpSelector = "#simReset"
			ResponsiveHelpMessage("#simReset", "s", helpText, false, tripDuration)

		}



	});


	$('#inference').bind('click', function () {
		tripFlag = true;
		tVar = 1;
		trip = new Trip([

			{
				sel: $('#inference'),
				content: "Parallel currents attract each other.<br>" +
					"Antiparallel currents repel each other.",
				expose: false,
				position: 'e',
				delay: 4000
			},

		]);


		trip.start();
		window.trip = trip;

	});


});


function removeTrip() {
	var trip = new Trip([
		{
			sel: $('#mainDiv'),
			position: 's',
			content: "",
			expose: true,
			delay: 0
		}
	]);
	trip.start();
	$('.trip-block').remove();
	trip.stop();
}
function ResponsiveHelpMessage(sel, positionParam, message, exposeFlag, delayValue) {
	setTimeout(function () {
		removeTrip()
		setTimeout(function () {
			var trip = new Trip([
				{
					sel: $(sel),
					position: positionParam,
					content: message,
					expose: exposeFlag,
					delay: delayValue
				}
			]);
			trip.start();
			window.trip = trip;
			$(".trip-block ").css({ display: "block" })
		})
	})
}