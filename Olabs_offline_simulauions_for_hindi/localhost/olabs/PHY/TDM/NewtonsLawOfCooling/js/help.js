var help_message;
// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
	   $(".content").scrollTop(160);	
   	   var trip = new Trip([
	    {
	        sel : $('#stopwatch_button'),
	        position : 'e',
	        content : help_message,
	        expose : false,
	        delay : 4000
	    }
    	]);
   		trip.start(); 
    	window.trip = trip;
	})		
})

	

