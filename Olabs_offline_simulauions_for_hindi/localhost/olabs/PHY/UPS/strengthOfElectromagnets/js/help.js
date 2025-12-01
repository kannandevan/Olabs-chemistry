var tripClickFlag = false;
$(document).ready(function () {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click', function () {

		tripClickFlag = true;
		$(".content").scrollTop(0);
		if (showArr == 0) {
			trip = new Trip([
				{//common help
					sel: $('#check'),
					position: 's',
					content: helprarr[0],
					expose: false,
					delay: 4000
				},
				
				// {
				// 	sel: $('#boltTop'),
				// 	position: 'e',
				// 	content: helprarr[1],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $(connect),
				// 	position: 'n',
				// 	content: helprarr[2],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $('#boltBottom'),
				// 	position: 'e',
				// 	content: helprarr[3],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $('#safetyPin'),
				// 	position: 'n',
				// 	content: helprarr[4],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#plate'),
				// 	position: 'e',
				// 	content: helprarr[5],
				// 	expose: false,
				// 	delay: 6000
				// },
				// {
				// 	sel: $('#safetyPin'),
				// 	position: 'n',
				// 	content: helprarr[6],
				// 	expose: false,
				// 	delay: 4000
				// },
				
			
			]);
			trip.start();
			window.trip = trip;


		}
		else if (showArr == 1) {
			trip = new Trip([
				{
					sel: $('#safetyPin'),
					position: 'n',
					content: helprarr[4],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}

		else if (showArr == 2) {
			trip = new Trip([
				{
					sel: $('#plate'),
					position: 'e',
					content: helprarr[5],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 3) {
			trip = new Trip([
				{
					sel: $('#safetyPin'),
					position: 'n',
					content: helprarr[6],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 4) {
			// trip = new Trip([
			// 	{

			// 	},
			// ]);
			// trip.start();
			// window.trip = trip;

		}

		else if (showArr == 5) {
			trip = new Trip([
				{
					sel: $('#check'),
					position: 'n',
					content: helprarr[7],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 6) {
			trip = new Trip([
				{
					sel: $('#check'),
					position: 'n',
					content: helprarr[0],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 7) {
			trip = new Trip([
				{
					sel: $(connect),
					position: 'n',
					content: helprarr[2],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 8) {
			trip = new Trip([
				{
					sel: $('#boltBottom'),
					position: 'e',
					content: helprarr[3],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 9) {
			trip = new Trip([
				{
					sel: $('#boltTop'),
					position: 'e',
					content: helprarr[1],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 11) {
			trip = new Trip([
				{
					sel: $('#safetyPin'),
					position: 'n',
					content: helprarr[4],
					expose: false,
					delay: 7000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		// else if (showArr == 10) {
		// 	trip = new Trip([
		// 		{
		// 			sel: $('#dropdown'),
		// 			position: 'e',
		// 			content: helprarr[7],
		// 			expose: false,
		// 			delay: 4000
		// 		}
		// 	]);
		// 	trip.start();
		// 	window.trip = trip;

		// }
	});



	$('#inferenceImg').bind('click', function () {

		tripFlag = 1;

		trip = new Trip([{
			sel: $('#inferenceImg'),
			position: 's',
			content: inferenceMsg[0],
			expose: false,
			delay: 7000
		},

		]);
		trip.start();
		window.trip = trip;
	})
	
});