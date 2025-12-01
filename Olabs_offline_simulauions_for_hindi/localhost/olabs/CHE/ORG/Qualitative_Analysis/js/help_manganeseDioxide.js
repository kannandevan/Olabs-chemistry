
	function manganeseDioxideHelp(){
			
		var trip = new Trip([
		{
			sel : $('#cl_md_SaltDrag'),
			position : 'w',
			content : HelpMsg_manganeseDioxide[0],
			expose : false,
			delay : 6000
		}, 
		{
			sel : $('#cl_md_MnO2Drag'),
			position : 'w',
			content :HelpMsg_manganeseDioxide[1],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_md_h2so4_dropperCtrlDrag'),
			position : 'w',
			content :HelpMsg_manganeseDioxide[2],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_md_BurnerOff'),
			position : 'e',
			content :HelpMsg_manganeseDioxide[3],
			
			expose : false,
			delay : 6000
		},
		{
			sel : $('#cl_md_starchIodidePaper'),
			position : 'w',
			content :HelpMsg_manganeseDioxide[4],
			
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

