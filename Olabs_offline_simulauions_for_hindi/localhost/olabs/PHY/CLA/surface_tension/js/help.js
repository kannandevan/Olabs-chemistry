// JavaScript Document
$(document).ready(function() {
	
	$('#olabmenuBar li:first-child').bind('click',function(){
		var trip = new Trip([
		{
		sel : $('#beaker_div'),
		position : 'e',
		content : Hlp_msg[0],
		expose : false,
		delay : 4000
		}, 
		{
				sel : $('#arrow_right'),
				position : 'n',
				content : Hlp_msg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#arrow_down'),
				position : 'e',
				content : Hlp_msg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#microScope'),
				position : 'e',
				content : Hlp_msg[3],
				expose : false,
				delay : 5500
			},
			
		])
		trip.start(); 
		window.trip = trip;
		});
		
		
	
	
});
