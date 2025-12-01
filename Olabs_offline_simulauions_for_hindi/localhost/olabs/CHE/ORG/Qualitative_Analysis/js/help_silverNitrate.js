
	function silverNitrateHelp(){
			
		var trip = new Trip([
		{
			sel : $('#cl_sn_dropperCtrlDrag'),
			position : 'w',
			content : HelpMsg_silverNitrate[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#cl_sn_hno3CtrlDrag'),
			position : 'w',
			content :HelpMsg_silverNitrate[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_sn_BurnerOff'),
			position : 'e',
			content :HelpMsg_silverNitrate[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_sn_AgNO3CtrlDrag'),
			position : 'w',
			content :HelpMsg_silverNitrate[3],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_sn_Nh4ohCtrlDrag'),
			position : 'w',
			content :HelpMsg_silverNitrate[4],
			
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

