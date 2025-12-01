// JavaScript Document
$(document).ready(function() {
		var msghelp,msg1;
		//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });
		if(reactantFlag==1)
		{
			var trip = new Trip([
			{
				sel : $('#DropperDiv'),
				position : 'e',
				content :contentArray[6],
				expose : false,
				delay : 3000
			},
				{
				sel : $('#DropperDiv'),
				position : 'e',
				content :contentArray[7],
				expose : false,
				delay : 3000
			},
				{
				sel : $('#DropperDiv'),
				position : 'e',
				content :contentArray[8],
				expose : false,
				delay : 3000
			},
				{
				sel : $('#DropperDiv'),
				position : 'e',
				content :contentArray[9],
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
		}
		else if(reactantFlag==2)
		{
			var trip = new Trip([
			{
				sel : $('#sampleSolutionDiv'),
				position : 'n',
				content :contentArray[10],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#corkStandImg'),
				position : 'n',
				content :contentArray[11],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#burnerDiv'),
				position : 'n',
				content :contentArray[12],
				expose : false,
				delay : 3000
			},
				{
				sel : $('#matchsticImg'),
				position : 's',
				content :contentArray[13],
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
		else if(reactantFlag==3)
		{
			if(acidFlag==1)
			{
			var trip = new Trip([
			{
				sel : $('#sampleSolutionDiv'),
				position : 'n',
				content :contentArray[14],
				expose : false,
				delay : 3000
			}			
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
		else if(acidFlag==2)
			{
			var trip = new Trip([
			{
				sel : $('#sampleSolutionDiv'),
				position : 'n',
				content :contentArray[15],
				expose : false,
				delay : 3000
			},
				{
				sel : $('#phenophthaleinDiv'),
				position : 'n',
				content :contentArray[16],
				expose : false,
				delay : 3000
			}],
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
		trip.start(); 
		window.trip = trip;
	});

$('#acidDiv').bind('click  ',function(){
	if(setResult==1)
	{
	if(acidInference==1)
		{
			var divId;
		if(acidInference==1)
		{
		if(reactantFlag==1)
		{
			if(ansFlag==1)
			{
				msg1=contentArray[0];
			}
		}
		else if(reactantFlag==2)
		{
			if(ansFlag==1)
			{
				msg1=contentArray[2];
			}
		}
		else if(reactantFlag==3)
		{
			if(ansFlag==1)
			{
				msg1=contentArray[4];
			}
			
		}
		var trip = new Trip([
		{
		sel : $('#inferenceDiv'),
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
		$("#inferenceDiv").css({display:'none' });
		},
		onTripStop : function() {
		console.log("onTripStop");
		},
		backToTopWhenEnded : true,
		delay : 2000
		});
		trip.start(); 
		window.trip = trip;
		}
		}
	}
	});
$('#baseDiv').bind('click',function(){
	if(setResult)
	{
	if(acidInference==1)
		{
	if(reactantFlag==1)
		{
			if(ansFlag==3)
			{
				msg1=contentArray[1];
			}
			
		}
		else if(reactantFlag==2)
		{
			if(ansFlag==3)
			{
				msg1=contentArray[3];
			}
		}
		else if(reactantFlag==3)
		{
			if(ansFlag==3)
			{
				msg1=contentArray[5];
			}
		}
		var trip = new Trip([
		{
		sel : $('#inferenceDiv'),
		position : 'e',
		content : msg1,		
		expose : false,
		delay : 8000
		},],
		{
		onTripStart : function() {
		console.log("onTripStart");
		},
		onTripEnd : function() {
		$("#inferenceDiv").css({display:'none' });
		},
		onTripStop : function() {
		console.log("onTripStop");
		},
		backToTopWhenEnded : true,
		delay : 4000
		});
		trip.start(); 
		window.trip = trip;
		}
	}
	});
});