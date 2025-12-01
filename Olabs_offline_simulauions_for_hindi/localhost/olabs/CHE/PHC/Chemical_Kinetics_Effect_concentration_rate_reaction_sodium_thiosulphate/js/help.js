// JavaScript Document


$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){

		tripFlag=1;
		$(".content").scrollTop(0);
		
				trip = new Trip([{//common help
				sel : $('#volume_slider'),
				position : 'e',
				content : helprarr[0],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Na2s03Measuring_cylinder'),
				position : 'n',
				content : helprarr[1],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#waterMeasuring_cylinder'),
				position : 'w',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('.knob'),
				position : 'e',
				content : helprarr[3],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#conical_img'),
				position : 'w',
				content : helprarr[4],
				expose : false,
				delay : 6000
			},
			{
				sel : $('.knob'),
				position : 'e',
				content : helprarr[5],
				expose : false,
				delay : 6000
			},
			
			]);
			trip.start(); 
			window.trip = trip;	
		


});	
});