// JavaScript Document
$(document).ready(function() {
	//document.getElementById("helpdiv").style.display="block"
	$('#olabmenuBar li:first-child a').html("HELP");
	//$('#olabmenuBar li:first-child').unbind('click',function(){})
	/*$('#olabmenuBar li:first-child').bind('click',function(){
	 if($('#helpDiv').css('display') == 'block'){ 
	 alert("Reset the simulation to enable help");
	}
	else{
	var trip = new Trip([
       {
		   
            sel : $('#nail1Img'),
            position : 'n',
            content : 'Drag the iron nail to immerse it in the test tube.',
            expose : false,
            delay : 5000
        }, 
		{
			sel : $('#testTube'),
            position : 'e',
            content : 'Click on the thread to remove the immersed iron nail</br>from the test tube. ',
            expose : false,
            delay : 5000
        },
    ], {
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
});	*/


	
	
	
	
	$('#inferenceImg').bind('click  ',function(){
		 var trip = new Trip([
       {
            sel : $('#inferenceImg'),
            position : 'e',
            content : contentArray[0],
            expose : false,
            delay : 8000
        },
		{
            sel : $('#TesttubegreenSolnImg'),
            content : contentArray[1],
            expose : false,
            delay : 8000
        },
		{
            sel : $('#resultdiv'),
            position : 'n',
            content : contentArray[2],
            expose : false,
            delay : 4000
        }
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