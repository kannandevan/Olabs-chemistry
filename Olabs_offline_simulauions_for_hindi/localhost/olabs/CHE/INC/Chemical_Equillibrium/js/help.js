// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		
    var trip = new Trip([
       {
            sel : $('#dropperDiv1'),
            position : 'n',
            content : gt.gettext('Drag the dropper to add<br/>the solution to the test tube.'),
            expose : false,
            delay : 3000
        },
		{
            sel : $('#dropperDiv2'),
            position : 'n',
            content : gt.gettext('Drag the dropper to add<br/>the solution to the test tube.'),
            expose : false,
            delay : 3000
        },
        {
            sel : $('#dropperDivDUP'),
            position : 'w',
            content : gt.gettext('Drag the dropper to add<br/>the solution to the test tube.'),
            expose : false,
            delay : 3000
        }
	
		
    ], {
        onTripStart : function() {
            //console.log("onTripStart");
        },
        onTripEnd : function() {
            //console.log("onTripEnd");
        },
        onTripStop : function() {
            //console.log("onTripStop");
        },
        backToTopWhenEnded : true,
        delay : 2000
    });

        trip.start(); 
        window.trip = trip;
});

$('#inferenceDiv').bind('click  ',function(){
	
	    
		var trip = new Trip([
		 
       {
		   
            sel : $('#inferenceDiv'),
            position : 'e',
            content : inferenceMsg,
            expose : false,
            delay : 2000
        }
	],
        {
        onTripStart : function() {
            //console.log("onTripStart");
        },
        onTripEnd : function() {
            //console.log("onTripEnd");
        },
        onTripStop : function() {
            //console.log("onTripStop");
        },
        backToTopWhenEnded : true,
        delay : 2000
	});
		trip.start(); 
		window.trip = trip;
	});
	

});