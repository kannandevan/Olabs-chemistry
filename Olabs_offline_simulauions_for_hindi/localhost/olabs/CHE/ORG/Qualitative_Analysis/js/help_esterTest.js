
function esterTestHelp(){
		
	var trip = new Trip([
	{
		sel : $('#esterSaltDrag'),
		position : 'w',
		content : HelpMsg_esterTest[0],
		expose : false,
		delay : 6000
	}, 
	{
		sel : $('#ester_h2so4'),
		position : 'w',
		content :HelpMsg_esterTest[1],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#esterBurnerOff'),
		position : 'e',
		content :HelpMsg_esterTest[2],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#ester_dragItem1_1'),
		position : 'w',
		content :HelpMsg_esterTest[3],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#esterBeakerWrap'),
		position : 'w',
		content :HelpMsg_esterTest[4],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#esterTesttubeCopy'),
		position : 'e',
		content :HelpMsg_esterTest[5],
		
		expose : false,
		delay : 6000
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
	delay : 4000
	});
	
	trip.start(); 
	window.trip = trip;
}
	
	
$('#inference_Div').bind('click  ',function(){ //////////////////////////
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
			$('#inference_Div').hide();
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

