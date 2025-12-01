// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(sceneFlag==1)
		{
			$(".content").scrollTop(0);	
			var trip = new Trip([
			{
				sel : $('#label1'),
				position : 'e',
				content : HelpMSG_One,
				expose : false,
				delay : 3000
			}, 
			{
				sel : $('#ObjectsImg'),
				position : 'e',
				content :  HelpMSG_Two,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#weightImages'),
				position : 'e',
				content :  HelpMSG_Three,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#label1'),
				position : 'e',
				content : HelpMSG_Four,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#turnerPointer'),
				position : 'e',
				content : HelpMSG_Five,
				expose : false,
				delay : 3000
			},
			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : false,
			delay : 2000
			});
		}
		trip.start(); 
		window.trip = trip;
		});
		
	
	
});
