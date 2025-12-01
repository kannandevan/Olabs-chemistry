// JavaScript Document
$(document).ready(function() {
	
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(sceneFlag==1)
		{	
			var trip = new Trip([
			{
				sel : $('#Acid_TestTube'),
				position : 'n',
				content : HelpMsgOne,
				expose : false,
				delay : 3000
			}, 
			{
				sel : $('#Water_TestTube'),
				position : 'n',
				content : HelpMsgTwo,
				
				expose : false,
				delay : 3000
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
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==2)
		{
			var trip = new Trip([
			{
				sel : $('#Dropper'),
				position : 'e',
				content : HelpMsgThree,
				expose : false,
				delay : 5500
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
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==3)
		{
		var trip = new Trip([
		{
		sel : $('#Acid_Flask'),
		position : 'n',
		content : HelpMsgFive,
		expose : false,
		delay : 5000
		}, 
		], {
		onTripStart : function() {
		console.log("onTripStart");
		},
		onTripEnd : function() {
		console.log("onTripEnd");
		},
		onTripStop : function() {
		console.log("onTripStop");
		},
		backToTopWhenEnded : true,
		delay : 2000
		});
		}
		trip.start(); 
		window.trip = trip;
		});
		
		
		$('#inference_Div').bind('click  ',function(){
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
	
});
