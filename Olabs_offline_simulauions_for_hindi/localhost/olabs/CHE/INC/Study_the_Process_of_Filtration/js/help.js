// JavaScript Document
var tripFlag = false;
$(document).ready(function () {
	// $('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click', function () {

		tripFlag = true;


		if (helpCount == 0) {


			var trip = new Trip([

				{
					sel: $('#funnelDiv'),
					position: 'n',
					content: FirstfunnelHelp,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 1) {


			var trip = new Trip([

				{
					sel: $('#filterpaperBoxClose'),
					position: 'w',
					content: FilterpaperClick,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 2) {


			var trip = new Trip([

				{
					sel: $('#filterpaperBoxOpen'),
					position: 'w',
					content: FilterpaperClick2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 3) {


			var trip = new Trip([

				{
					sel: $('#FirstfilterPaper'),
					position: 'n',
					content: Filterpaper,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 4) {


			var trip = new Trip([

				{
					sel: $('#SecondfilterPaper'),
					position: 'n',
					content: Filterpaper,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 5) {


			var trip = new Trip([

				{
					sel: $('#firStFilterpaper'),
					position: 'e',
					content: Filterpaper,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 6) {


			var trip = new Trip([

				{
					sel: $('#firStFilterpaper7'),
					position: 'w',
					content: Filterpaper,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 7) {


			var trip = new Trip([

				{
					sel: $('#firStFilterpaper14'),
					position: 'w',
					content: Filterpaper,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 8) {


			var trip = new Trip([

				{
					sel: $('#waterBottle'),
					position: 'w',
					content: Waterbottle,
					expose: false,
					delay: 3000

				},
			]);
		}

		else if (helpCount == 9) {


			var trip = new Trip([

				{
					sel: $('#SecondEmptyBeaker_id'),
					position: 'n',
					content: BeakerDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 10) {


			var trip = new Trip([

				{
					sel: $('#simReset'),
					position: 's',
					content: helpMsg,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 13) {


			var trip = new Trip([

				{
					sel: $('#TheInference_img'),
					position: 'e',
					content: Clickinference,
					expose: false,
					delay: 2000

				},
			]);
		}
		



		// //////////////
		trip.start();
		window.trip = trip;
	});



});
