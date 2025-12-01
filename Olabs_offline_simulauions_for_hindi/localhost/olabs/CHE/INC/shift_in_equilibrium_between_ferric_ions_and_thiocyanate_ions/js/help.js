// JavaScript Document
var tripFlag = false;
$(document).ready(function () {
	// $('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click', function () {

		tripFlag = true;
		console.log(helpCount)
		if (helpCount == 0) {


			var trip = new Trip([

				{
					sel: $('#ContolsWatchglassFerric'),
					position: 'e',
					content: CommonClickPowder,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 1) {


			var trip = new Trip([

				{
					sel: $('#theSpatulaDiv'),
					position: 'w',
					content: SpatulaDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 2) {


			var trip = new Trip([

				{
					sel: $('#theSpatulaDiv'),
					position: 'w',
					content: SpatulaDrag2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 3) {


			var trip = new Trip([

				{
					sel: $('#firstPageFourthbeakerDiv'),
					position: 'n',
					content: WaterBeakerDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 4) {


			var trip = new Trip([

				{
					sel: $('#GlassRodOfpageone'),
					position: 'n',
					content: CommonGlassrodMsg,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 5) {


			var trip = new Trip([

				{
					sel: $('#ContolsWatchglassPottasium'),
					position: 'e',
					content: CommonClickPowder2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 6) {


			var trip = new Trip([

				{
					sel: $('#theSpatulaDiv'),
					position: 'w',
					content: SpatulaDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 7) {


			var trip = new Trip([

				{
					sel: $('#theSpatulaDiv'),
					position: 'w',
					content: SpatulaDrag3,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 8) {


			var trip = new Trip([

				{
					sel: $('#firstPageFourthbeakerDiv'),
					position: 'n',
					content: WaterBeakerDrag2,
					expose: false,
					delay: 3000

				},
			]);
		}

		else if (helpCount == 9) {


			var trip = new Trip([

				{
					sel: $('#GlassRodOfpageone'),
					position: 'n',
					content: CommonGlassrodMsg2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 10) {

			var trip = new Trip([

				{
					sel: $('#firstPageSecondbeakerDiv'),
					position: 'n',
					content: SolutionBeakerDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 11) {

			var trip = new Trip([

				{
					sel: $('#firstPageFirstbeakerDiv'),
					position: 'n',
					content: SolutionBeakerDrag,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 12) {

			var trip = new Trip([

				{
					sel: $('#FirstNext'),
					position: 'w',
					content: Common_Next,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 13) {

			var trip = new Trip([

				{
					sel: $('#theSeondpagefirstBeaker'),
					position: 'n',
					content: BeakerDragSeconpage1,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 14) {

			var trip = new Trip([

				{
					sel: $('#theSeondpagesecondBeaker'),
					position: 'n',
					content: BeakerDragSeconpage2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 15) {

			var trip = new Trip([

				{
					sel: $('#theSeondpageThirdBeaker'),
					position: 'n',
					content: BeakerDragSeconpage3,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 16) {

			var trip = new Trip([

				{
					sel: $('#theSeondpageFourthBeaker'),
					position: 'w',
					content: BeakerDragSeconpage4,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 17) {

			var trip = new Trip([

				{
					sel: $('#TheSecondNext'),
					position: 'w',
					content: Common_Next,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 18) {

			var trip = new Trip([

				{
					sel: $('#thefirstTestubeDiv'),
					position: 'n',
					content: thirdpagefirstinfo,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 19) {

			var trip = new Trip([

				{
					sel: $('#TheSecondBuretteButton'),
					position: 'n',
					content: buretteClickopen,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 20) {

			var trip = new Trip([

				{
					sel: $('#TheSecondBuretteButtonOpen'),
					position: 'n',
					content: buretteClickclose,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 21) {

			var trip = new Trip([

				{
					sel: $('#thecommonHelpdiv'),
					position: 'e',
					content: RepeateAllmsg,
					expose: false,
					delay: 3000

				},
			]);
		}

		else if (helpCount == 22) {

			var trip = new Trip([

				{
					sel: $('#theSecondTestubeDiv'),
					position: 'n',
					content: thirdpagefirstinfoBurette1,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (repeateNext==1 && helpCount == 36) {

			var trip = new Trip([

				{
					sel: $('#theSecondTestubeDiv'),
					position: 'n',
					content: theRepeatePottasiumhelp,
					expose: false,
					delay: 3000

				},
			]);
		}










		else if (helpCount == 23) {

			var trip = new Trip([

				{
					sel: $('#TheFirstBuretteButton'),
					position: 'n',
					content: buretteClickopen,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 24) {

			var trip = new Trip([

				{
					sel: $('#TheFirstBuretteButtonOpen'),
					position: 'n',
					content: buretteClickclose,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 25) {

			var trip = new Trip([

				{
					sel: $('#thecommonHelpdiv'),
					position: 'e',
					content: RepeateAllmsg2,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 26) {

			var trip = new Trip([

				{
					sel: $('#thefirstTestubeDiv'),
					position: 'n',
					content: thirdpagefirstinfoburette3,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 27) {

			var trip = new Trip([

				{
					sel: $('#TheThirdBuretteButton'),
					position: 'n',
					content: buretteClickopen,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 28) {

			var trip = new Trip([

				{
					sel: $('#TheThirdBuretteButtonOpen'),
					position: 'n',
					content: buretteClickclose,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 29) {

			var trip = new Trip([

				{
					sel: $('#thecommonHelpdiv'),
					position: 'e',
					content: RepeateAllmsg,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 30) {

			var trip = new Trip([

				{
					sel: $('#thefinalNext'),
					position: 'w',
					content: Common_Next,
					expose: false,
					delay: 3000

				},
			]);
		}
		else if (helpCount == 39) {

			var trip = new Trip([

				{
					sel: $('#TheInference_img'),
					position: 'w',
					content: commoninferencebtn,
					expose: false,
					delay: 3000

				},
			]);
		}









		else if (repeateNext==1 && helpCount == 31) {

			var trip = new Trip([

				{
					sel: $('#simReset'),
					position: 'w',
					content: theFinalhelpmsg,
					expose: false,
					delay: 3000

				},
			]);
		}
		



		// //////////////
		trip.start();
		window.trip = trip;
	});



});
