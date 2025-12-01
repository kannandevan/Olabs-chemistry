
// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
	$(".content").scrollTop(0);
   	if(selectedIndex==0){ //Water equivalent	
   		var trip = new Trip([
	   {
	        sel : $('#beaker1Drag'),
	        position : 'n',
	        content : helpArray[0],
	        expose : false,
	        delay : 3000
	    },
		{
	        sel : $('#beaker2Drag'),
	        position : 'n',
	        content :helpArray[1], 
	        expose : false,
	        delay : 3000
	    },
		{
	        sel : $('#thermometer'),
	        position : 'w',
	        content : helpArray[2],
	        expose : false,
	        delay : 3000
	    }
    	]);
	 }else{//Enthalpy of dissolution
   		var trip = new Trip([
	   {
	        sel : $('#beaker1Drag'),
	        position : 'n',
	        content : helpArray[0],
	        expose : false,
	        delay : 3000
	    },
		{
	        sel : $('#watchglass'),
	        position : 'n',
	        content :helpArray[3], 
	        expose : false,
	        delay : 3000
	    },
		{
	        sel : $('#thermometer'),
	        position : 'w',
	        content : helpArray[2],
	        expose : false,
	        delay : 3000
	    }
    	]);
	}
    trip.start(); 
    window.trip = trip;
})
		
})

	

