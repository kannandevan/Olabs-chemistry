/*
author:anishasl
Date:21/12/2013
file name:help.js
*/
$(document).ready(function() {
		//$(".nano").nanoScroller();
		//alert($(".nano").nanoScroller())
		
		var msghelp;
		
		//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });
				
			var trip = new Trip([
			{
				sel : $('#leftTubeDiv'),
				position : 'e',
				content : contentArray[0],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#TurningFork'),
				position : 'e',
				content : contentArray[1],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#ProtractorBtn'),
				position : 'e',
				content : contentArray[2],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#tubeBtn'),
				position : 'e',
				content : contentArray[3],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#waveBtn'),
				position : 'e',
				content : contentArray[4],
				expose : false,
				delay : 3000
			},
			],
			{
				onTripStart : function() {
				console.log("onTripStart");
			},
				onTripEnd : function() {
				console.log("onTripEnd");
			},
				onTripStop : function() {
				console.log("onTripStop");
			},
			backToTopWhenEnded : true,
			delay : 2000
			});	
		trip.start(); 
		window.trip = trip;
		});
});