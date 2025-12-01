// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		helpFlag=true;
		$(".content").scrollTop(0);
	   	   if(zoomFlag==false){
		   	   var trip = new Trip([
			   {
			        sel : $('#tubeHelp'),
			        position : 's',
			        content : helpMessage[0],
			        expose : false,
			        delay : 3000
			    },
				{
			        sel : $('#tubeHelp'),
			        position : 's',
			        content :helpMessage[1], 
			        expose : false,
			        delay : 3000
			    },
				{
			        sel : $('#zoomInClick'),
			        position : 'w',
			        content : helpMessage[2],
			        expose : false,
			        delay : 3000
			    }
		    	]);
		   }else{
		   		var trip = new Trip([
			   {
			        sel : $('#zoomOutClick'),
			        position : 'w',
			        content : helpMessage[3],
			        expose : false,
			        delay : 3000
			    }
		    	]);
		   }
	    trip.start(); 
	    window.trip = trip;
	})
		
})

	

