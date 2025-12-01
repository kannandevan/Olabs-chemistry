
	function chromylChlorideHelp(){
			
		var trip = new Trip([
		{
			sel : $('#cl_cc_Salt'),
			position : 'w',
			content : HelpMsg_chromylChloride[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#cl_cc_potassiumDichro'),
			position : 'w',
			content :HelpMsg_chromylChloride[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_h2so4_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_chromylChloride[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_cork'),
			position : 'w',
			content :HelpMsg_chromylChloride[3],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_dTube'),
			position : 'w',
			content :HelpMsg_chromylChloride[4],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_BurnerOff'),
			position : 'e',
			content :HelpMsg_chromylChloride[5],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_ch3cooh_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_chromylChloride[6],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_cc_leadAct_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_chromylChloride[7],
			
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

