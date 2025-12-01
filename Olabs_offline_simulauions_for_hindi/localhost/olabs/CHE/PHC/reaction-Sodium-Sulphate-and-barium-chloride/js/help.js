// JavaScript Document
$(document).ready(function() {
	
	$('#olabmenuBar li:first-child').bind('click',function(){
    var trip = new Trip([
       {
            sel : $('#bariumDiv'),
            position : 'n',
            content : inferenceMsg[0],
            expose : false,
            delay : 3000
        },
		{
            sel : $('#sodiumDiv'),
            position : 'n',
            content : inferenceMsg[1],
            expose : false,
            delay : 3000
        },
        {
            sel : $('#flaskDiv02'),
            position : 'n',
            content : inferenceMsg[2],
            expose : false,
            delay : 4000
        },
        {
            sel : $('#hclDiv'),
            position : 'n',
            content : inferenceMsg[3],
            expose : false,
            delay : 4000
        }
		
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
});

$('#inferenceDiv').bind('mouseover  ',function(){
		 var trip = new Trip([
       {
            sel : $('#inferenceDiv'),
            position : 'e',
            content : inferenceMsg[4],
            expose : false,
            delay : 3000
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
	$('#inferenceDiv02').bind('mouseover  ',function(){
		 var trip = new Trip([
       {
            sel : $('#inferenceDiv02'),
            position : 'e',
            inferenceMsg : content[5],
            expose : false,
            delay : 3000
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