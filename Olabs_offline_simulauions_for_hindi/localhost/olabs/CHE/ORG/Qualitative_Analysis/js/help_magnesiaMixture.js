
	function magnesiaMixtureHelp(){
			
		var trip = new Trip([
		{
			sel : $('#MgMix_dropperCtrlDrag'),
			position : 'w',
			content : HelpMsg_magnesiaMixture[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#MgMix_hclCtrlDrag'),
			position : 'w',
			content :HelpMsg_magnesiaMixture[1],
			
			expose : false,
			delay : 6000
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

