
	function oxalatePotassiumHelp(){
			
		var trip = new Trip([
		{
			sel : $('#oxalateKMnO4Salt'),
			position : 'w',
			content : HelpMsg_oxalate_potassium[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#oxalateKMnO4_h2so4_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_oxalate_potassium[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#oxalateKMnO4BurnerOff'),
			position : 'e',
			content :HelpMsg_oxalate_potassium[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#oxalateKMnO4_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_oxalate_potassium[3],
			
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

