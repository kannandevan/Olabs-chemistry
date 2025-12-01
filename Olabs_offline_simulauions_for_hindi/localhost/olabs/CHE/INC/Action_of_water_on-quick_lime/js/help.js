// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		if(sceneFlag==1)
		{	
			var trip = new Trip([
			{
				sel : $('#spatulaImg'),
				position : 'n',
				content : gt.gettext('Drag the spatula </br>over the empty beaker to put</br> quick lime into it.'),
				expose : false,
				delay : 5000
			}, 
			{
				sel : $('#waterstillImg'),
				position : 'n',
				content : gt.gettext('Drag the distilled water beaker</br> to the beaker containing quick lime</br> to add water into it.'),
				
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
		else if(sceneFlag==2)
		{
			var trip = new Trip([
			{
				sel : $('#dropperImg'),
				position : 'n',
				content : gt.gettext('Drag the dropper and dip it</br> in the beaker to suck lime water </br>into it, and then drag it to </br>the test tube to pour the solution</br> into the test tube.'),
				expose : false,
				delay : 5000
			}, 
			{
				sel : $('#testtubeImg'),
				position : 'n',
				content : gt.gettext('Drop the solution </br>in the test tube'),
				expose : false,
				delay : 5000
			},
			
			{
				sel : $('#corkTube'),
				position : 'n',
				content : gt.gettext('Drag the cork to the</br> test tube to close it.</br>'),
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
		else if(sceneFlag==3)
		{
		var trip = new Trip([
		{
		sel : $('#BlowbtnImg'),
		position : 'n',
		content : gt.gettext('Click here continuously </br>to blow exhaust air </br>into the tube.'),
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
		$('#inferenceImg').bind('click  ',function(){
		if(sceneFlag==1)
		{
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : gt.gettext('Quick lime reacts vigorously with water releasing a large</br>amount of heat and producing a single product-slaked lime.</br>This is a combination reaction.'),
		
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
		if(sceneFlag==3)
		{
		var trip = new Trip([
		{
		sel : $('#inferenceImg'),
		position : 'e',
		content : gt.gettext('CO<sub>2</sub>(g) contained in exhaled air turns lime water milky. The milky</br> apperance of lime water is due to the formation of white precipitate of </br>calcium carbonate.'),
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
		trip.start(); 
		window.trip = trip;
	});

});
