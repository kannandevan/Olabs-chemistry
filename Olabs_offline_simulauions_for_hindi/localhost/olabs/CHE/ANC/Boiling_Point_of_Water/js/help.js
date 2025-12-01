// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
			
			var trip = new Trip([
			{
				sel : $('#spatula'),
				position : 'n',
				content : HelpMsg[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#cork'),
				position : 'n',
				content :HelpMsg[1],
				
				expose : false,
				delay : 6000
			},
			{
				sel : $('#thermometer'),
				position : 'e',
				content :HelpMsg[2],
				
				expose : false,
				delay : 6000
			},
			{
				sel : $('#deliveryTube'),
				position : 'w',
				content :HelpMsg[3],
				
				expose : false,
				delay : 6000
			},
			{
				sel : $('#burnerOff'),
				position : 'n',
				content :HelpMsg[4],
				
				expose : false,
				delay : 6000
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
			backToTopWhenEnded : false,
			delay : 4000
			});
		
		trip.start(); 
		window.trip = trip;
		});
		
		
		$('#inference_Div').bind('click  ',function(){
		 var trip = new Trip([
       {
            sel : $('#inference_Div'),
            position : 'e',
            content : inferenceMsg,
            expose : false,
            delay : 5000
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
