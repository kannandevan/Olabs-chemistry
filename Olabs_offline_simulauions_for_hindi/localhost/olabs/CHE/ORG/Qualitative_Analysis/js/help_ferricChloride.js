
function ferricChlorideHelp(){
		
	var trip = new Trip([
	{
		sel : $('#fericDropperWraper1'),
		position : 'w',
		content : HelpMsg_ferricChloride[0],
		expose : false,
		delay : 6000
	}, 
	{
		sel : $('#fericDropperWraper2'),
		position : 'w',
		content :HelpMsg_ferricChloride[1],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#fericFunnel'),
		position : 'w',
		content :HelpMsg_ferricChloride[2],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#ferricTesttube1'),
		position : 'w',
		content :HelpMsg_ferricChloride[3],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#ferricTesttube1'),
		position : 'w',
		content :HelpMsg_ferricChloride[4],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#fericDropperWraper3'),
		position : 'w',
		content :HelpMsg_ferricChloride[5],
		
		expose : false,
		delay : 6000
	},
		{
		sel : $('#fericBurnerOff'),
		position : 'e',
		content :HelpMsg_ferricChloride[6],
		
		expose : false,
		delay : 6000
	},
	{
		sel : $('#fericDropperWraper4'),
		position : 'w',
		content :HelpMsg_ferricChloride[7],
		
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

