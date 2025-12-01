// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
	$(".content").scrollTop(0);
	var trip;
   	if(start_experiment == true){ /** Start experiment */
   		if($protractor == protractor_label[1]){ /** Show protractor */
	    	trip = new Trip([
		   {
		        sel : $('#close'),
		        position : 'n',
		        content : helpArray[2],
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#drag_protractor'),
		        position : 'n',
		        content :helpArray[3], 
		        expose : false,
		        delay : 3000
		    },
			{
		        sel : $('#rotate_clockwise'),
		        position : 'n',
		        content : helpArray[4],
		        expose : false,
		        delay : 3000
		    }
	    	]);
	    }
	 }else{/** Not start  */
	   		trip = new Trip([
		   {
		        sel : $('#start_button'),
		        position : 'e',
		        content : helpArray[0],
		        expose : false,
		        delay : 4000
		    },
			{
		        sel : $('#protractor_button'),
		        position : 'e',
		        content :helpArray[1], 
		        expose : false,
		        delay : 4000
		    }
	    	]);	   
	}
    trip.start(); 
    window.trip = trip;
})
		
})

	

