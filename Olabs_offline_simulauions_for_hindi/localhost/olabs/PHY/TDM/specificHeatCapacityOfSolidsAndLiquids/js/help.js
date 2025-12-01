var tripClickFlag = false;
$(document).ready(function () {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click', function () {
		console.log( showArr)
		tripClickFlag = true;

		if (showArr == 0) {
			
			trip = new Trip([

				{//common help
					sel: $('#methodselector'),
					position: 'e',
					content: helprarr[0],
					expose: false,
					delay: 4000
				},

				// {
				// 	sel: $('#materialofcalorimeter'),
				// 	position: 'e',
				// 	content: helprarr[1],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $("#valuemassofcalorimeter"),
				// 	position: 'e',
				// 	content: helprarr[2],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#valuemassofwater'),
				// 	position: 'e',
				// 	content: helprarr[3],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#copper'),
				// 	position: 'n',
				// 	content: helprarr[4],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#beaker'),
				// 	position: 'n',
				// 	content: helprarr[5],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#calori'),
				// 	position: 'n',
				// 	content: helprarr[6],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#copper'),
				// 	position: 'n',
				// 	content: helprarr[7],
				// 	expose: false,
				// 	delay: 4000
				// },

				// {
				// 	sel: $('#thermometer'),
				// 	position: 'n',
				// 	content: helprarr[8],
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
					sel: $('#next'),
					position: 'w',
					content: helprarr[9],
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
					sel: $('#materialofcalorimeter'),
					position: 'e',
					content: helprarr[1],
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
					sel: $("#valuemassofcalorimeter"),
					position: 'e',
					content: helprarr[2],
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
					sel: $('#valuemassofwater'),
					position: 'e',
					content: helprarr[3],
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
					sel: $('#copper'),
					position: 'n',
					content: helprarr[4],
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
					sel: $('#beaker'),
					position: 'n',
					content: helprarr[5],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 7) {
			trip = new Trip([
				{
					sel: $('#calori'),
					position: 'n',
					content: helprarr[6],
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
					sel: $('#copper'),
					position: 'n',
					content: helprarr[7],
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
					sel: $('#thermometer'),
					position: 'n',
					content: helprarr[8],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 10) {
			$(".content").animate({ scrollTop: '300px' });

			trip = new Trip([

				{
					sel: $('#selMaterialSolid'),
					position: 'e',
					content: helprarr[10],
					expose: false,
					delay: 4000
				},

				// {
				// 	sel: $('#selMassSolid'),
				// 	position: 'e',
				// 	content: helprarr[11],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $("#selTempSolid"),
				// 	position: 'e',
				// 	content: helprarr[12],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $('#solid'),
				// 	position: 'n',
				// 	content: helprarr[13],
				// 	expose: false,
				// 	delay: 7000
				// },
				// {
				// 	sel: $('#solidRotDiv'),
				// 	position: 'n',
				// 	content: helprarr[14],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#solidThreadLieDiv'),
				// 	position: 'n',
				// 	content: helprarr[15],
				// 	expose: false,
				// 	delay: 6000
				// },
				// {
				// 	sel: $('#burner'),
				// 	position: 'e',
				// 	content: helprarr[16],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#caloriHolderBack2'),
				// 	position: 'w',
				// 	content: helprarr[17],
				// 	expose: false,
				// 	delay: 4000
				// },

				// {
				// 	sel: $('#solidThread'),
				// 	position: 'n',
				// 	content: helprarr[18],
				// 	expose: false,
				// 	delay: 4000
				// },

				// {
				// 	sel: $('#caloriHolderBack2'),
				// 	position: 'n',
				// 	content: helprarr[19],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#caloriHolderBack2'),
				// 	position: 'n',
				// 	content: helprarr[20],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#check'),
				// 	position: 'e',
				// 	content: helprarr[21],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#check1'),
				// 	position: 'e',
				// 	content: helprarr[22],
				// 	expose: false,
				// 	delay: 4000
				// },
				// {
				// 	sel: $('#check2'),
				// 	position: 'e',
				// 	content: helprarr[23],
				// 	expose: false,
				// 	delay: 4000
				// },



			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 11) {
			trip = new Trip([

				{
					sel: $('#selMassSolid'),
					position: 'e',
					content: helprarr[11],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 12) {
			trip = new Trip([

				{
					sel: $('#selTempSolid'),
					position: 'e',
					content: helprarr[12],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 13) {
			trip = new Trip([

				{
					sel: $('#solid'),
					position: 'n',
					content: helprarr[13],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 14) {
			trip = new Trip([

				{
					sel: $('#solidRotDiv'),
					position: 'n',
					content: helprarr[14],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 15) {
			trip = new Trip([

				{
					sel: $('#solidThreadLieDiv'),
					position: 'n',
					content: helprarr[15],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 16) {
			trip = new Trip([

				{
					sel: $('#burnerOff2'),
					position: 'w',
					content: helprarr[16],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 17) {
			trip = new Trip([

				{
					sel: $('#caloriHolderBack2'),
					position: 'w',
					content: helprarr[17],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 18) {
			trip = new Trip([

				{
					sel: $('#solidThread'),
					position: 'n',
					content: helprarr[18],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 19) {
			trip = new Trip([

				{
					sel: $('#caloriHolderBack2'),
					position: 'n',
					content: helprarr[19],
					expose: false,
					delay: 4000
				}
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 20) {
			trip = new Trip([

				{
					sel: $('#caloriHolderBack2'),
					position: 'n',
					content: helprarr[20],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 21) {
			$(".content").animate({ 'scrollTop': '600px' },function(){
			trip = new Trip([

				{
					sel: $('#check'),
					position: 'e',
					content: helprarr[21],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 22) {
			$(".content").animate({ 'scrollTop': '400px' },function(){
			trip = new Trip([

				{
					sel: $('#check1'),
					position: 'e',
					content: helprarr[22],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 23) {
			$(".content").animate({ 'scrollTop': '500px' },function(){
			trip = new Trip([

				{
					sel: $('#check2'),
					position: 'e',
					content: helprarr[23],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 24) {
			trip = new Trip([

				{
					sel: $('#materialofcalorimeter_l'),
					position: 'e',
					content: helprarr[1],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 25) {
			trip = new Trip([

				{
					sel: $('#valuemassofcalorimeter_l'),
					position: 'e',
					content: helprarr[2],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 26) {
			trip = new Trip([

				{
					sel: $('#valuemassofliquid_l'),
					position: 'e',
					content: helprarr[24],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 27) {
			$(".content").animate({ 'scrollTop': '600px' },function(){

			trip = new Trip([
				{
					sel: $('#checkLiquid'),
					position: 'e',
					content: helprarr[21],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 28) {
			$(".content").animate({ 'scrollTop': '400px' },function(){

			trip = new Trip([

				{
					sel: $('#checkLiquid1'),
					position: 'e',
					content: helprarr[22],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 29) {
			$(".content").animate({ 'scrollTop': '600px' },function(){

			trip = new Trip([

				{
					sel: $('#checkLiquid2'),
					position: 'e',
					content: helprarr[23],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		});
		}
		else if (showArr == 30) {
			trip = new Trip([

				{
					sel: $('#materialofsolid_l'),
					position: 'e',
					content: helprarr[10],
					expose: false,
					delay: 4000
				},
				{
					sel: $('#materialofliquid_l'),
					position: 'e',
					content: helprarr[25],
					expose: false,
					delay: 4000
				},
				{
					sel: $('#valumassofsolid_l'),
					position: 'e',
					content: helprarr[11],
					expose: false,
					delay: 4000
				},
				{
					sel: $('#valuetempofsolid_l'),
					position: 'e',
					content: helprarr[12],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 31) {
			trip = new Trip([

				{
					sel: $('#materialofsolid_l'),
					position: 'e',
					content: helprarr[10],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 32) {
			trip = new Trip([


				{
					sel: $('#materialofliquid_l'),
					position: 'e',
					content: helprarr[25],
					expose: false,
					delay: 4000
				},

			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 33) {
			trip = new Trip([

				{
					sel: $('#valuemassofsolid_l'),
					position: 'e',
					content: helprarr[11],
					expose: false,
					delay: 4000
				},

			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 34) {
			trip = new Trip([

				{
					sel: $('#valuetempofsolid_l'),
					position: 'e',
					content: helprarr[12],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 35) {
			trip = new Trip([

				{
					sel: $('#materialofsolid_l'),
					position: 'e',
					content: helprarr[10],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 36) {
			$(".content").animate({ 'scrollTop': '900px' },function(){
				trip = new Trip([

					{
						sel: $('#reset3'),
						position: 'e',
						content: helprarr[26],
						expose: false,
						delay: 4000
					},
	
				])
				trip.start();
				window.trip = trip;
			});
			
		}
		else if (showArr == 37) {
			$(".content").animate({ 'scrollTop': '900px' },function(){
				trip = new Trip([

					{
						sel: $('#reset5'),
						position: 'e',
						content: helprarr[26],
						expose: false,
						delay: 4000
					},
	
				])
				trip.start();
				window.trip = trip;
			});
			
		}
		else if (showArr == 38) {
			trip = new Trip([

				{
					sel: $('#burnerTripod'),
					position: 'w',
					content: helprarr[27],
					expose: false,
					delay: 4000
				},

			])
			trip.start();
			window.trip = trip;
		}
		// else if (showArr == 37) {
		// 	trip = new Trip([

		// 		{
		// 			sel: $(''),
		// 			position: 'e',
		// 			content: helprarr[25],
		// 			expose: false,
		// 			delay: 4000
		// 		},

		// 	])
		// 	trip.start();
		// 	window.trip = trip;
		// }

	})

});