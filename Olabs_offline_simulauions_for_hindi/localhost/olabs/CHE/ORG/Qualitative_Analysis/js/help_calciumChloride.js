
	function calciumChloridHelp(){
			
		var trip = new Trip([
		{
			sel : $('#cacl2_dropperCtrlDrag'),
			position : 'w',
			content : HelpMsg_calciumChlorid[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#cacl2_hno3CtrlDrag'),
			position : 'w',
			content :HelpMsg_calciumChlorid[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cacl2_BurnerOff'),
			position : 'e',
			content :HelpMsg_calciumChlorid[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cacl2_AgNO3CtrlDrag'),
			position : 'w',
			content :HelpMsg_calciumChlorid[3],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cacl2_Nh4ohCtrlDrag'),
			position : 'w',
			content :HelpMsg_calciumChlorid[4],
			
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

