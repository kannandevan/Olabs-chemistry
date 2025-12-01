var helpFunctions=[physicalHelp,"","",potassiumHelp,concSulphuricAcidHelp];
helpConfnFuns=[[],[,,],[,,],[,,],[,,],[,,],[silverNitrateHelp,manganeseDioxideHelp,chromylChlorideHelp],[silverNitrateHelp,manganeseDioxideHelp,chlorineWaterHelp],[silverNitrateHelp,manganeseDioxideHelp,chlorineWaterHelp],[oxalicAcidHelp,esterTestHelp,ferricChlorideHelp],[calciumChloridHelp,oxalatePotassiumHelp],[,,],[,magnesiaMixtureHelp]];
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(preliminarySelected){console.log(preliminarySelected);
			helpFunctions[preliminaryIndex]();
		}else{
			helpConfnFuns[confirmationIndex][confirmationSubIndex]();
		}
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
			//$('#inference_Div').hide();
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