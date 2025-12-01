var helpFunctions=[mohrsHelp,potashAlumHelp,potassiumFerricOxalateHelp];
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".content").scrollTop(0);	
		
		if(!helpclickFlag){
			if(simulationTypeIndex==1 &&( mohr_scene==3 || mohr_scene==4)){
				helpFunctions[0]();
			}else{
				helpFunctions[simulationTypeIndex]();
			}
		}
	});
		
		
		$('#inference').bind('click  ',function(){
		 var trip = new Trip([
       {
            sel : $('#inference'),
            position : 'e',
            content : inferenceMsg,
            expose : false,
            delay : 5000
        },
		
		
	],
	
        {
        onTripStart : function() {
            helpclickFlag=true;
        },
        onTripEnd : function() {
            helpclickFlag=false;
        },
        onTripStop : function() {
    
        },
        backToTopWhenEnded : true,
        delay : 2000
	});
		trip.start(); 
		window.trip = trip;
	});
	
});