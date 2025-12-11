// JavaScript Document
var tripFlag = false;
$(document).ready(function() {
		// $('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){

		console.log(sceneFlag);
		tripFlag = true;
		// if(ttttt2==1)
		// {
		// 	{
		// 		trip = new Trip([
					
		// 			{
		// 				sel : $('#reset'),
		// 				position : 'e',
		// 				content : helpMsg[9],
		// 				expose : false,
		// 				delay : 6000
		// 			}
		// 		]);
		// 		trip.start(); 
		// 		window.trip = trip;
		// 	}
		// }
		// if(QuestionDisplayStatus)
		// {
		// 	trip = new Trip([
		// 		{
		// 			sel : $('#2'),
		// 			position : 'w',
		// 			content : "Please select correct answer",
		// 			expose : false,
		// 			delay : 3000
		// 		}
		// 	]);
		// 	trip.start(); 
		// 	window.trip = trip;
		// }
		
		// else
		 if(sceneFlag==1){
		var trip = new Trip([

		{
				sel : $('#Show_lines'),
				position : 'e',
				content : theHelp[0],
				expose : false,
				delay : 4000
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
		else if(sceneFlag==2){
			var trip = new Trip([

				{
						sel : $('#TheScale'),
						position : 'n',
						content : theHelp[1],
						expose : false,
						delay : 4000
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
		else if(sceneFlag==3){
			var trip = new Trip([

				{
						sel : $('#the_table'),
						position : 'n',
						content : theaxisShiw,
						expose : false,
						delay : 4000
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
		else if(sceneFlag==4){
			var trip = new Trip([

				{
						sel : $('#join_lines'),
						position : 'n',
						content : theHelp[3],
						expose : false,
						delay : 4000
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
		else if(sceneFlag==5){
			var trip = new Trip([

				{
						sel : $('#Show_cordinates'),
						position : 'n',
						content : theHelp[4],
						expose : false,
						delay : 4000
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
		else if(sceneFlag==6){
			var trip = new Trip([

				{
						sel : $('#Show_calculations'),
						position : 'n',
						content : theHelp[5],
						expose : false,
						delay : 4000
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
		else if(sceneFlag==7){
			var trip = new Trip([

				{
						sel : $('#hide_calculations'),
						position : 'n',
						content : theHelp[6],
						expose : false,
						delay : 4000
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
		else if(sceneFlag==8){
			$(".content").animate({ scrollTop: '600px' },function(){
			var trip = new Trip([

				{
						sel : $('#Show_Distance'),
						position : 'n',
						content : theHelp[7],
						expose : false,
						delay : 4000
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
				trip.start(); 
		window.trip = trip;

			});
		}
		else if(sceneFlag==9){
			$(".content").animate({ scrollTop: '600px' },function(){
				var trip = new Trip([

					{
							sel : $('#Hide_Distance'),
							position : 'n',
							content : theHelp[8],
							expose : false,
							delay : 4000
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
					trip.start(); 
		window.trip = trip;

			});
			
		}

		else if(sceneFlag==9){
			$(".content").animate({ scrollTop: '600px' },function(){
				var trip = new Trip([

					{
							sel : $('#Hide_Distance'),
							position : 'n',
							content : theHelp[8],
							expose : false,
							delay : 4000
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
					trip.start(); 
		window.trip = trip;

			});
			
		}
		
		else if(sceneFlag==10){
			$(".content").animate({ scrollTop: '600px' },function(){
				var trip = new Trip([

					{
							sel : $('#theInference'),
							position : 'e',
							content : inferencehelp,
							expose : false,
							delay : 4000
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
					trip.start(); 
		window.trip = trip;

			});
			
		}
		else if(sceneFlag==11){
			$(".content").animate({ scrollTop: '600px' },function(){
				var trip = new Trip([

					{
							sel : $('#reset'),
							position : 'e',
							content : ResetOnce,
							expose : false,
							delay : 4000
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
					trip.start(); 
		window.trip = trip;

			});
			
		}

		trip.start(); 
		window.trip = trip;
		});
		

	
});
