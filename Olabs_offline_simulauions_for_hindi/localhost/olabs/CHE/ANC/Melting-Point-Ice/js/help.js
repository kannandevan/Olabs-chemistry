// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(sceneFlag==1)
		{	
			var trip = new Trip([
			{
				sel : $('#watchGlass'),
				position : 'w',
				content : HelpMSG_One,
				expose : false,
				delay : 3000
			}, 
			{
				sel : $('#burnerOff'),
				position : 'e',
				content :  HelpMSG_Two,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#stir1'),
				position : 'e',
				content :  HelpMSG_Three,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#result'),
				position : 'e',
				content :  HelpMSG_Four,
				expose : false,
				delay : 3000
			},
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
			backToTopWhenEnded : false,
			delay : 2000
			});
		}
		trip.start(); 
		window.trip = trip;
		});
		
	
	
});
