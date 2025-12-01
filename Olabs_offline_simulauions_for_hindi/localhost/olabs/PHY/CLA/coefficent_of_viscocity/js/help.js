// JavaScript Document
$(document).ready(function() {
	
	$('#olabmenuBar li:first-child').bind('click',function(){
		var trip = new Trip([
		{
		sel : $('#normalBall'),
		position : 'e',
		content : Hlp_msg[0],
		expose : false,
		delay : 4000
		}, 
		{
		sel : $('#arrowSmall_A'),
		position : 'n',
		content : Hlp_msg[1],
		expose : false,
		delay : 4000
		},
		], {
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
