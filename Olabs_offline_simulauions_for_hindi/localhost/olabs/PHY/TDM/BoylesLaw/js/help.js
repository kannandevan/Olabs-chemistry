// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
	$(".content").scrollTop(0);
   	   if(document.getElementById('scaleBtn').value==scaleLabel[0]){//show scalealert(document.getElementById('scaleBtn').value)
	   	   var trip = new Trip([
		   {
		        sel : $('#quillTubeDiv'),
		        position : 'n',
		        content : helpMessage[0],
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#scaleBtn'),
		        position : 'e',
		        content :helpMessage[3], 
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#quillTubeDiv'),
		        position : 's',
		        content : helpMessage[1],
		        expose : false,
		        delay : 3000
		    }, 
			{
		        sel : $('#quillTubeDiv'),
		        position : 's',
		        content :helpMessage[2], 
		        expose : false,
		        delay : 3000
		    }
	    	]);
	   }else{
	   		var trip = new Trip([
		   {
		        sel : $('#quillTubeDiv'),
		        position : 'n',
		        content : helpMessage[0],
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#scaleBtn'),
		        position : 'e',
		        content :helpMessage[3], 
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#scaleInside'),
		        position : 'w',
		        content : helpMessage[1],
		        expose : false,
		        delay : 3000
		    }, 
			{
		        sel : $('#scalearrowImg'),
		        position : 'w',
		        content :helpMessage[2], 
		        expose : false,
		        delay : 3000
		    }
	    	]);
	   }
    trip.start(); 
    window.trip = trip;
})
		
})

	

