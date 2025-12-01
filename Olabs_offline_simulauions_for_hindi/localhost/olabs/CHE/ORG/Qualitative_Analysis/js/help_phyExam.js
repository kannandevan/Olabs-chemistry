
	function physicalHelp(){
			
		var trip = new Trip([
		{
			sel : $('#phySaltDrag'),
			position : 'w',
			content : HelpMsg_physical[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#dropperWraper'),
			position : 'w',
			content :HelpMsg_physical[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#hand'),
			position : 'w',
			content :HelpMsg_physical[2],
			
			expose : false,
			delay : 6000
		},
		
		],
		{
		backToTopWhenEnded : false,
		delay : 4000
		});
		
		trip.start(); 
		window.trip = trip;
	}
		
	