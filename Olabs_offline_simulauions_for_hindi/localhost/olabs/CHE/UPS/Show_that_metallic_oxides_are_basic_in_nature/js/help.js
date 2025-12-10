// JavaScript Document
var tripFlag = false;
$(document).ready(function() {
		$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		tripFlag = true;
		// console.log(sceneFlag)

		if(sceneFlag==0){
		
		var trip = new Trip([
		{
				sel : $('#Burner_On'),
				position : 'e',
				content : help_msg[0],
				expose : false,
				delay : 3000
				
			}
			
		
		], {
		onTripStart : function() {
		
		},
		onTripEnd : function() {
		
		},
		onTripStop : function() {
		
		},
		backToTopWhenEnded : true,
		delay : 2000
		});
		}
		else if(sceneFlag==1){
			var trip = new Trip([
			{
				sel : $('#tongs'),
				position : 'n',
				content : help_msg[1],
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==2){
			// alert("2");
			var trip = new Trip([
			{
				sel : $('#tongs'),
				position : 'n',
				content : help_msg[2],
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==3){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#WaterBottle'),
				position : 'w',
				content : help_msg[3],
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==4){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#Blue_Litmus_paper'),
				position : 'n',
				content : help_msg[4],
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==5){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#Red_Litmus_paper'),
				position : 'n',
				content : help_msg[5],
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==6){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#inference_button'),
				position : 'e',
				content : clickinfernce,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(sceneFlag==7){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#simReset'),
				position : 'w',
				content : resetmsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}


		trip.start(); 
		window.trip = trip;
		});
		
		$('#inference_button').bind('click',function(){

			

			if(infs==1){
				
				sceneFlag = 3;

				$(".Water-bottle").css({ "cursor": "pointer" })
				$("#WaterBottle").draggable({

                    revert: function () {
                      if (!drop) {
                        return true
                      }
                    }, drag: function () {
                      removeTrip()
                      $("#inference_button").hide();
                       removeTrip()

                    }
                  });

				
				var trip = new Trip([
		
				{
				sel : $('#inferncemsglocatio'),
				position : 'e',
				content : inference[0],
				expose : false,
				delay : 15000
					},
				], {
				
				// backToTopWhenEnded : true,
				// delay : 2000
				});
				}
				else if(infs==2){
					sceneFlag=7;
					var trip = new Trip([
					{
					sel : $('#inferncemsglocatio'),
					position : 'e',
					content : inference2[0],
					expose : false,
					delay : 15000
				},
						
						
					
					], {
					
					// backToTopWhenEnded : true,
					// delay : 2000
					});
					}
				
	
			
	
	
	
			//aa
	
		
			trip.start(); 
			window.trip = trip;
			});
	
});
