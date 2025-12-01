var tripClickFlag = false;
$(document).ready(function () {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click', function () {
		tripClickFlag = true;
		$(".content").scrollTop(0);
		if (showArr == 0) {
			trip = new Trip([
				{
					sel: $('#selectMethod'),
					position: 'n',
					content: helprarrConc[0],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 1) {
			trip = new Trip([
				{
					sel: $('#glassStopHcl'),
					position: 'n',
					content: helprarrConc[1],
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
					sel: $('#bottleHcl'),
					position: 'n',
					content: helprarrConc[2],
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
					sel: $('.questionLayout'),
					position: 'w',
					content: helprarrConc[3],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 4) {
			trip = new Trip([
				{
					sel: $('#glassStopNa'),
					position: 'n',
					content: helprarrConc[4],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 5) {
			trip = new Trip([
				{
					sel: $('#bottleComNa'),
					position: 'n',
					content: helprarrConc[5],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 6) {
			trip = new Trip([
				{
					sel: $('.questionLayout'),
					position: 'w',
					content: helprarrConc[6],
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
					sel: $('#measCylConc'),
					position: 'n',
					content: helprarrConc[7],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;

		}
		

		else if (showArr ==8 ) {
			trip = new Trip([
				{
					sel: $('#coniConc'),
					position: 'n',
					content: helprarrConc[8],
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
					sel: $('#buretteTap'),
					position: 'e',
					content: helprarrConc[9],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 10) {
			trip = new Trip([
				{
					sel: $('#buretteTapClose'),
					position: 'e',
					content: helprarrConc[10],
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
					sel: $('#stopWatchOff'),
					position: 'w',
					content: helprarrConc[11],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 12) {
			trip = new Trip([
				{
					sel: $('#coniConc'),
					position: 'e',
					content: helprarrConc[12],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		
		else if (showArr == 13) {
			trip = new Trip([
				{
					sel: $('#buretteTap'),
					position: 'e',
					content: helprarrConc[13],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 14) {
			trip = new Trip([
				{
					sel: $('#buretteTapClose'),
					position: 'e',
					content: helprarrConc[14],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 15) {
			trip = new Trip([
				{
					sel: $('#coniConc'),
					position: 'e',
					content: helprarrConc[15],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 16) {
			trip = new Trip([
				{
					sel: $('#stopWatchOn'),
					position: 'w',
					content: helprarrConc[16],
					expose: false,
					delay: 4000

				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 17) {
						trip = new Trip([
							{
								sel: $('#next'),
								position: 'w',
								content: helprarrConc[17],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
			
					}
					else if (showArr == 18) {
						trip = new Trip([
							{
								sel: $('#next'),
								position: 'w',
								content: helprarrConc[18],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
			
					}
					else if (showArr == 19) {
						trip = new Trip([
							{
								sel: $('#showGraph'),
								position: 'e',
								content: helprarrConc[19],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
			
					}else if (showArr == 20) {
						trip = new Trip([
							{
								sel: $('#plotGraph'),
								position: 'e',
								content: helprarrConc[20],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
					}
				
					else if (showArr == 21) {
						trip = new Trip([
							{
								sel: $('#inferenceImg'),
								position: 'e',
								content: helprarrConc[21],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
					}
					else if (showArr == 22) {
						trip = new Trip([
							{
								sel: $('#reset'),
								position: 'e',
								content: helprarrConc[22],
								expose: false,
								delay: 4000
							}
						]);
						trip.start();
						window.trip = trip;
					}
		
		//////temp help
		else if (showArr == 23) {
			trip = new Trip([
				{
					sel: $('#glassStopNaTemp'),
					position: 'n',
					content: helprarrTemp[0],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 24) {
			trip = new Trip([
				{
					sel: $('#bottleNaTemp'),
					position: 'n',
					content: helprarrTemp[1],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 25) {
			trip = new Trip([
				{
					sel: $('#measCylTemp'),
					position: 'n',
					content: helprarrTemp[2],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 26) {
			trip = new Trip([
				{
					sel: $('.questionLayout'),
					position: 'w',
					content: helprarrTemp[3],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 27) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'w',
					content: helprarrTemp[4],
					expose: false,
					delay: 4000
				},
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 28) {
			trip = new Trip([
				{
					sel: $('#thermometer'),
					position: 'n',
					content: helprarrTemp[5],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 29) {
			trip = new Trip([
				{
					sel: $('#coniTemp'),
					position: 'n',
					content: helprarrTemp[6],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 30) {
			trip = new Trip([
				{
					sel: $('.questionLayout'),
					position: 'w',
					content: helprarrTemp[7],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 31) {
			trip = new Trip([
				{
					sel: $('#buretteTapTemp'),
					position: 'e',
					content: helprarrTemp[8],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 32) {
			trip = new Trip([
				{
					sel: $('#buretteTapTemp'),
					position: 'e',
					content: helprarrTemp[9],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 33) {
			trip = new Trip([
				{
					sel: $('#stopWatchOffTemp'),
					position: 'w',
					content: helprarrTemp[10],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 34) {
			trip = new Trip([
				{
					sel: $('#coniTemp'),
					position: 'e',
					content: helprarrTemp[11],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 35) {
			trip = new Trip([
				{
					sel: $('#buretteTapCloseTemp'),
					position: 'e',
					content: helprarrTemp[12],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 36) {
			trip = new Trip([
				{
					sel: $('#buretteTapCloseTemp'),
					position: 'e',
					content: helprarrTemp[13],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	else if (showArr == 37) {
			trip = new Trip([
				{
					sel: $('#coniTemp'),
					position: 'e',
					content: helprarrTemp[14],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 38) {
			trip = new Trip([
				{
					sel: $('#stopWatchOnTemp'),
					position: 'w',
					content: helprarrTemp[15],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 39) {
			trip = new Trip([
				{
					sel: $('#nextTemp'),
					position: 'w',
					content: helprarrTemp[16],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 40) {
			trip = new Trip([
				{
					sel: $('#nextTemp'),
					position: 'w',
					content: helprarrTemp[17],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	
		
		else if (showArr == 41) {
			trip = new Trip([
				{
					sel: $('#coniTemp'),
					position: 'n',
					content: helprarrTemp[18],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	else if (showArr == 42) {
			trip = new Trip([
				{
					sel: $('#burner'),
					position: 'e',
					content: helprarrTemp[19],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	else if (showArr == 43) {
			trip = new Trip([
				{
					sel: $('#burner'),
					position: 'e',
					content: helprarrTemp[20],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	else if (showArr == 44) {
			trip = new Trip([
				{
					sel: $('#showGraphTemp'),
					position: 'e',
					content: helprarrTemp[21],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	else if (showArr == 45) {
			trip = new Trip([
				{
					sel: $('#plotGraphTemp'),
					position: 'e',
					content: helprarrTemp[22],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}	
		
		else if (showArr == 46) {
			trip = new Trip([
				{
					sel: $('#inferenceImg1'),
					position: 'e',
					content: helprarrTemp[23],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 47) {
			trip = new Trip([
				{
					sel: $('#resetTemp'),
					position: 'e',
					content: helprarrTemp[24],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;
		}
	
		else if (showArr == 48) {
			trip = new Trip([
				{
					sel: $('#thermometer1'),
					position: 'w',
					content: helprarrTemp[4],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 49) {
			trip = new Trip([
				{
					sel: $('#thermometer1'),
					position: 'e',
					content: helprarrTemp[5],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 50) {
			trip = new Trip([
				{
					sel: $('#coniTemp'),
					position: 'e',
					content: helprarrTemp[6],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
	})
	
	$('#inferenceImg').bind('click', function () {

		// tripFlag = 1;

		trip = new Trip([{
			sel: $('#inferenceImg'),
			position: 'e',
			content: inferenceMsg[0],
			expose: false,
			delay: 7000
		},

		]);
		trip.start();
		window.trip = trip;
	})
	
	$('#inferenceImg1').bind('click', function () {

		// tripFlag = 1;

		trip = new Trip([{
			sel: $('#inferenceImg1'),
			position: 'e',
			content: inferenceMsg[1],
			expose: false,
			delay: 7000
		},

		]);
		trip.start();
		window.trip = trip;
	})

});