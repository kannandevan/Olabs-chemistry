// JavaScript Document

$(document).ready(function() {
		//$(".nano").nanoScroller();
		//alert($(".nano").nanoScroller())
		
		var msghelp;
		
		//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });
		if(testFlag==1||testFlag==0)
		{	
		
		if((testFlag==1)&&(CompFlag==1))
		{
			msghelp=contentArray[3];
			
		}
		else if((testFlag==1)&&(CompFlag==2))
		{
			
			msghelp=contentArray[10];
		}
		
			var trip = new Trip([
			{
				sel : $('#reactionCombo'),
				position : 'e',
				content : contentArray[0],
				expose : false,
				delay : 3000
			},
			
			{
				sel : $('#mixtureCombo'),
				position : 'e',
				content : contentArray[1],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#Start'),
				position : 'e',
				content : contentArray[2],
				expose : false,
				delay :3000
			},
			{
				sel : $('#spatulaImg'),
				position : 'n',
				content :msghelp,
				expose : false,
				delay : 5000
			}, 
			{
				sel : $('#startKnob'),
				position : 'n',
				content : contentArray[4],
				
				expose : false,
				delay : 3000
			},
			{
				sel : $('#testtubeFull'),
				position : 'n',
				content : contentArray[5],
				
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
		
		else if(testFlag==2)
		{
				var trip = new Trip([
			
			{
				sel : $('#reactionCombo'),
				position : 'e',
				content : contentArray[0],
				expose : false,
				delay : 2000
			},
			
			{
				sel : $('#mixtureCombo'),
				position : 'e',
				content : contentArray[1],
				expose : false,
				delay : 2000
			},
			{
				sel : $("#rheoSlider"),
				position : 'e',
				content : contentArray[6],
				expose : false,
				delay : 3000
			},
			
			{
				sel : $('#Start'),
				position : 'e',
				content : contentArray[12],
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
			
		}
		else if(testFlag==3)
		{
		var trip = new Trip([
			{
				sel : $('#reactionCombo'),
				position : 'e',
				content : contentArray[0],
				expose : false,
				delay : 2000
			},
			
			{
				sel : $('#mixtureCombo'),
				position : 'e',
				content :contentArray[1],
				expose : false,
				delay : 2000
			},
			{
				sel : $('#powerSlider'),
				position : 'e',
				content :contentArray[8] ,
				expose : false,
				delay : 3000
			},
			{
				sel : $('#distanceSlider'),
				position : 'e',
				content : contentArray[9],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#Start'),
				position : 'e',
				content :contentArray[2],
				expose : false,
				delay : 3000
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
	
	
	
	
	
		$('#inferenceImg').bind('click  ',function(){
			var divId;
		if(testFlag==1)
		{
			if(startFlag==1)
			{
				msg1=msgArray[0];
				divId=document.getElementById('inferenceImg');
				
			}
			else if(startFlag==2)
			{
				msg1=msgArray[1];
								divId=document.getElementById('inferencehelp');

			}
		var trip = new Trip([
		{
		sel : $(divId),
		position : 'e',
		content : msg1,		
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
		/////////////
		if(testFlag==2)
		{
			if(startFlag==3)
			{
				msg2=msgArray[2];
			}
			else if(startFlag==4)
			{
				msg2=msgArray[3];
			}
		var trip = new Trip([
		{
		sel : $('#inferencehelp'),
		position : 'e',
		content : msg2,
		
		expose : false,
		delay : 10000
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
		if(startFlag==5)
			{
				msg3=msgArray[4];
			}
			else if(startFlag==6)
			{
				msg3=msgArray[5];
			}
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : msg3,
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
		}
		trip.start(); 
		window.trip = trip;
	});
});
