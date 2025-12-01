
	function concSulphuricAcidHelp(){
			
		var trip = new Trip([
		{
			sel : $('#concH_SaltDrag'),
			position : 'w',
			content : HelpMsg_concSulphuricAcid[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#concH_h2so4_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_concSulphuricAcid[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#concH_glassRodWrap'),
			position : 'w',
			content :HelpMsg_concSulphuricAcid[2],
			
			expose : false,
			delay : 6000
		},
				{
			sel : $('#concH_starchPaper'),
			position : 'w',
			content : HelpMsg_concSulphuricAcid[3],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#concH_starchPaper'),
			position : 'w',
			content :HelpMsg_concSulphuricAcid[4],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#concH_cork'),
			position : 'w',
			content :HelpMsg_concSulphuricAcid[5],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#concH_dTube'),
			position : 'w',
			content :HelpMsg_concSulphuricAcid[6],
			
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
	

