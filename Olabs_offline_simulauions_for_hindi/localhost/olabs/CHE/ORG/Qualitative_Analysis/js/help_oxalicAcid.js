
	function oxalicAcidHelp(){
			
		var trip = new Trip([
		{
			sel : $('#act_Wglass'),
			position : 'w',
			content : HelpMsg_oxalicAcid[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#acetateSalt'),
			position : 'e',
			content :HelpMsg_oxalicAcid[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#actOxalicAcid'),
			position : 'w',
			content :HelpMsg_oxalicAcid[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#act_dragItem1_1'),
			position : 'w',
			content :HelpMsg_oxalicAcid[3],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#act_hand'),
			position : 'w',
			content :HelpMsg_oxalicAcid[4],
			
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

