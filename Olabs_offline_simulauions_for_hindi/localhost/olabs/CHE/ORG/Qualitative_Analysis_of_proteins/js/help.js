// JavaScript Document
$(document).ready(function() {
	
	$('#olabmenuBar li:first-child').bind('click',function(){
	if(helpFlag==0){
		var trip = new Trip([
		{
		sel : $('#dropperOne'),
		position : 'n',
		content : helparray_BiuretTest[0],
		expose : false,
		delay : 4000
		}, 
		{
		sel : $('#dropperTwo'),
		position : 'w',
		content : helparray_BiuretTest[1],
		expose : false,
		delay : 4000
		},
		{
		sel : $('#burnerSwitchOne'),
		position : 'e',
		content : helparray_BiuretTest[2],
		expose : false,
		delay : 4000
		},
		{
		sel : $('#helpTesttubeA'),
		position : 'n',
		content : helparray_BiuretTest[3],
		expose : false,
		delay : 4000
		},
		{
		sel : $('#helpTesttubeB'),
		position : 'n',
		content : helparray_BiuretTest[4],
		expose : false,
		delay : 4000
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
		}
		else{
		var hlpmsg;
		if(helpFlag==1){
		hlpmsg=helparray_XanthoproteicTest
		}
		else if(helpFlag==2){
		hlpmsg=helparray_NinhydrinTest
		}
		else if(helpFlag==3){
		hlpmsg=helparray_MillonTest
		}
		var trip = new Trip([
		{
		sel : $('#dropperOne'),
		position : 'n',
		content : hlpmsg[0],
		expose : false,
		delay : 4000
		}, 
		{
		sel : $('#burnerSwitchOne'),
		position : 'e',
		content : hlpmsg[1],
		expose : false,
		delay : 4000
		},
		{
		sel : $('#helpTesttubeA'),
		position : 'n',
		content : hlpmsg[2],
		expose : false,
		delay : 4000
		},
		{
		sel : $('#helpTesttubeB'),
		position : 'n',
		content : hlpmsg[3],
		expose : false,
		delay : 4000
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
		
		}
		});
	
		$('#inference').bind('click  ',function(){
		
		 var trip = new Trip([
       {
            sel : $('#inference'),
            position : 'e',
            content : inferenceMsg,
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
        backToTopWhenEnded : true,
        delay : 2000
	});
		trip.start(); 
		window.trip = trip;
	});
	
});
