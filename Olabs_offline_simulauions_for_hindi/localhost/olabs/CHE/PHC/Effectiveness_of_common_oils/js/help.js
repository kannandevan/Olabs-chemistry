// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){

				var trip = new Trip([
		{
		sel : $('#jar'),
		position : 'n',
		content : Hlp_msg[0],
		expose : false,
		delay : 4000
		}, 
		{
				sel : $('#bottle'),
				position : 'e',
				content : Hlp_msg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#stopwatch'),
				position : 'w',
				content : Hlp_msg[2],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#droprimg'),
				position : 'n',
				content : Hlp_msg[3],
				expose : false,
				delay : 5500
			},
			{
				sel : $('#droprimg'),
				position : 'n',
				content : Hlp_msg[4],
				expose : false,
				delay : 5500
			},
				{
				sel : $('#bottle'),
				position : 'e',
				content : Hlp_msg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#stopwatch'),
				position : 'w',
				content : Hlp_msg[2],
				expose : false,
				delay : 4000
			},
		])
		trip.start(); 
		window.trip = trip;
		});
	});
		