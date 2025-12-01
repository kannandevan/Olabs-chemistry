// JavaScript Document
var trip;
var tripClickFlag = false;
$(document).ready(function () {

	$('#inference').bind('click', function () {
		trip = new Trip([
			{
				sel: $('#inference'),
				position: 'e',
				content: inferenceText,
				expose: false,
				delay: 7000
			}]);
				helpcount = 14;
		trip.start();
		window.trip = trip;
		// $("#inference").delay(6000).hide("fade",200)	
	});
	$('#olabmenuBar li:first-child').bind('click', function () {
		console.log("hpc"+helpcount,"hlp"+help)
		tripClickFlag = true
		if ((helpcount == 0) && (help == 1)) {
			trip = new Trip([
				{

					sel: $('#calorimeterTop'),
					position: 'n',
					content: helpMsg[0],
					expose: false,
					delay: 4000
				}
			]);
		}

		if ((helpcount == 80) && (help == 1)) {
			trip = new Trip([
				{

					sel: $('#wholeBeakerHcl'),
					position: 'n',
					content: newHlpmsg,
					expose: false,
					delay: 4000
				}
			]);
		}





		else if ((helpcount == 1) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#wholeMeasuringcylinder'),
					position: 'n',
					content: helpMsg[1],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 2) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#calorimeterTop'),
					position: 'n',
					content: helpMsg[2],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 3) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'w',
					content: helpMsg[3],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 4) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'e',
					content: helpMsg[4],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 5) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'n',
					content: helpMsg[5],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 6) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#wholeBeaker'),
					position: 'n',
					content: helpMsg[6],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 7) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#calorimeterTop'),
					position: 'n',
					content: helpMsg[7],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 8) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#wholeMeasuringcylinder'),
					position: 'n',
					content: helpMsg[8],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 9) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#stirrer'),
					position: 'n',
					content: helpMsg[9],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 10) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#calorimeterTop'),
					position: 'n',
					content: helpMsg[10],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 11) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#stirrer'),
					position: 'n',
					content: helpMsg[11],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 12) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'w',
					content: helpMsg[12],
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 13) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#inference'),
					position: 'e',
					content: inferenceMsg,
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 14) && (help == 1)) {
			trip = new Trip([
				{
					sel: $('#nxtBtn'),
					position: 'w',
					content: nextMsg,
					expose: false,
					delay: 4000
				}
			]);
		}
		else if ((helpcount == 14) && (help == 2)) {
			trip = new Trip([
				{
					sel: $('#reset'),
					position: 'e',
					content: resetMsg,
					expose: false,
					delay: 4000
				}
			]);
		}
		trip.start();
		window.trip = trip;

	});




});
