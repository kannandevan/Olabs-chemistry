// JavaScript Document
$(document).ready(function() {
	
	//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(testFlag==1||testFlag==0)
		{	
			var trip = new Trip([
			{
				sel : $('#chinadishImg'),
				position : 'n',
				content : tripmsg[0],
				expose : false,
				delay : 2000
			}, 
			{
				sel : $('#funnelImg'),
				position : 'n',
				content :tripmsg[1],
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
			
			if(nextFlag==1)
			{
				var trip = new Trip([
			{
				sel : $('#SpatullaDiv'),
				position : 'n',
				content : tripmsg[2],
				expose : false,
				delay : 8000
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
		}
		
		else if(testFlag==2)
		{
			if(sandFlag==1)
	{
		 divId="#chinadishImg3";
	}
	else if(sandFlag==2)
	{
		 divId="#chinadishImg4";
	}
			var trip = new Trip([
			{
				sel : $(divId),
				position : 'n',
				content : tripmsg[3],
				expose : false,
				delay : 5000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content : tripmsg[4],
				expose : false,
				delay : 2000
			}, 
			{
				sel : $('#animLoad3'),
				position : 'n',
				content : tripmsg[5],
				expose : false,
				delay : 4000
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
			if(nextFlag==2)
			{
				var trip = new Trip([
			{
				sel : $('#SpatullaDiv'),
				position : 'n',
				content : tripmsg[6],
				expose : false,
				delay : 8000
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
		}
		else if(testFlag==3)
		{
		var trip = new Trip([
		{
		sel : $('#EvapSolution'),
		position : 'n',
		content : tripmsg[7],
		expose : false,
		delay : 5000
		},
			{
		sel : $('#SpatullaDiv'),
		position : 'n',
		content : tripmsg[8],
		expose : false,
		delay : 8000
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
				//sel : $('#precautionImg'),Carefully heat sugar solution because under intense heat, sugar decomposes.


		$('#inferenceImg').bind('click  ',function(){
		if(testFlag==1)
		{
			if(naphFlag==1)
			{
				msg1=msgArray[0];
			}
			else if(naphFlag==2)
			{
				msg1=msgArray[1];
			}
				else if(naphFlag==3)
			{
				msg1=msgArray[2];
			}
				else if(naphFlag==4)
			{
				msg1=msgArray[3];
			}
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : msg1,
		
		expose : false,
		delay : 2000
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
		/////////////
		if(testFlag==2)
		{
			if(sandFlag==1)
			{
				msg2=msgArray[4];
			}
			else if(sandFlag==2)
			{
				msg2=msgArray[5];
			}
			
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : msg2,
		
		expose : false,
		delay : 2000
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
		////////////////
		if(testFlag==3)
		{
		if(saltFlag==1)
			{
				msg3=msgArray[6];
			}
			else if(saltFlag==2)
			{
				msg3=msgArray[7];
			
			}
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : msg3,
		expose : false,
		delay : 2000
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
		trip.start(); 
		window.trip = trip;
	});

/////////////

		$('#precautionImg').bind('click  ',function(){
		msg4=msgArray[8];
		var trip = new Trip([
		{
		sel : $('#precautionImg'),
		position : 'e',
		content : msg4,
		expose : false,
		delay : 4000
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

/////////////
});


