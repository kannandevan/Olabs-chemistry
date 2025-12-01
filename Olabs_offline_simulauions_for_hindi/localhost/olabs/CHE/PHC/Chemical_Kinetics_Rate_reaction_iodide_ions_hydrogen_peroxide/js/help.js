// JavaScript Document
var trip;
var tripFlag=false;
$(document).ready(function() {					   
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		tripFlag=true;
		$(".content").scrollTop(0);
		
				trip = new Trip([{//common help
				sel : $('#volume_slider'),
				position : 'e',
				content : helprarr[0],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#conical_flask'),
				position : 'e',
				content : helprarr[1],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_cylinder'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#H2SO4_bottle'),
				position : 'e',
				content : helprarr[3],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_cylinder'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#water_beaker'),
				position : 'e',
				content : helprarr[4],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_cylinder'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#starch_bottle'),
				position : 'e',
				content : helprarr[5],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_cylinder'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#sulphide_bottle'),
				position : 'w',
				content : helprarr[6],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_cylinder'),
				position : 'n',
				content : helprarr[2],
				expose : false,
				delay : 6000
			},
				{
				sel : $('#H2O2_bottle'),
				position : 'w',
				content : helprarr[7],
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;	
		


});	
});