// JavaScript Document
var trip;
var callbackFirst
var callbackSecond
var tripClickFlag=false;
$(document).ready(function() {

	
	
	 $('#inference').bind('click',function(){
		// $('.content').scrollTop(0);
	 			trip = new Trip([
	 			{
	 				sel : $('#inference'),
	 				position : 'e',
	 				content : inferenceText,
	 				expose : false,
	 				delay : 7000
	 			}]); 
			helpcount = 20;
		trip.start(); 
		window.trip = trip;
	// $("#inference").delay(6000).hide("fade",200)	
	});


$('#olabmenuBar li:first-child').bind('click',function(){
	// $('.content').scrollTop(0);
	tripClickFlag=true
	if((helpcount==0)&&(help==1))
	{
	trip = new Trip([
		{
			
			sel : $('#watchglassUnder'),
			position : 's',
			content : helpMsg[0],
			expose : false,
			delay : 4000
		},
	
		// {	
		// 	sel : $('#oxlCap'),
		// 	position : 'n',
		// 	content : helpMsg[1],
		// 	expose : false,
		// 	delay : 4000
		// },
		// {	
		// 	sel : $('#wholeSpatula'),
		// 	position : 'n',
		// 	content : helpMsg[2],
		// 	expose : false,
		// 	delay : 4000
		// },
		// {	
		// 	sel : $('#wholeSpatula'),
		// 	position : 'n',
		// 	content : helpMsg[3],
		// 	expose : false,
		// 	delay : 4000
		// }

	]);
	trip.start(); 
	window.trip = trip;
	}
	else if((helpcount==1)&&(help==1))
	{
		trip = new Trip([
			{	
				sel : $('#oxlCap'),
				position : 'n',
				content : helpMsg[1],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#wholeSpatula'),
			// 	position : 'n',
			// 	content : helpMsg[2],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#wholeSpatula'),
			// 	position : 'n',
			// 	content : helpMsg[3],
			// 	expose : false,
			// 	delay : 4000
			// }
		
		
			
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==2)&&(help==1))
		{
			trip = new Trip([

				{	
					sel : $('#wholeSpatula'),
					position : 'n',
					content : helpMsg[2],
					expose : false,
					delay : 4000
				},
				// {	
				// 	sel : $('#wholeSpatula'),
				// 	position : 'n',
				// 	content : helpMsg[3],
				// 	expose : false,
				// 	delay : 4000
				// }
			
			
				
			]);
			trip.start(); 
			window.trip = trip;
			}
			else if((helpcount==3)&&(help==1))
			{
				trip = new Trip([

					{	
						sel : $('#wholeSpatula'),
						position : 'n',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					}
				
				
					
				]);
				trip.start(); 
				window.trip = trip;
				}
				else if((helpcount==4)&&(help==1))
				{
					trip = new Trip([

						{	
							sel : $('#nxtBtn'),
							position : 'w',
							content : nextMsg,
							expose : false,
							delay : 4000
						}
					
					
						
					]);
					trip.start(); 
					window.trip = trip;
					}
		// else if((helpcount==5)&&(help==1))
		// {
		// 	trip = new Trip([
		//  {
		// 	sel : $('#nxtBtn'),
		// 	position : 'n',
		// 	content : nextMsg,
		// 	expose : false,
		// 	delay : 4000
		//  }

		// 	]);	

		// }
		else if((helpcount==6)&&(help==2))
		{
		trip = new Trip([
			{
				
				sel : $('#funnel'),
				position : 'n',
				content : helpMsg2[0],
				expose : false,
				delay : 4000
			},
		
			// {	
			// 	sel : $('#watchglassUnder2'),
			// 	position : 's',
			// 	content : helpMsg2[1],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[2],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[3],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[4],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[5],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==7)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#watchglassUnder2'),
				position : 's',
				content : helpMsg2[1],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[2],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[3],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[4],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[5],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==8)&&(help==2))
		{
		trip = new Trip([	

			{	
				sel : $('#washBottle'),
				position : 'n',
				content : helpMsg2[2],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[3],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[4],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[5],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==9)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#funnel'),
				position : 'n',
				content : helpMsg2[3],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[4],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[5],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==10)&&(help==2))
		{
		trip = new Trip([	

			{	
				sel : $('#volFlaskCaponTable'),
				position : 's',
				content : helpMsg2[4],
				expose : false,
				delay : 4000
			},
		
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[5],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==11)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#volFlask'),
				position : 'n',
				content : helpMsg2[5],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#volFlaskCap'),
			// 	position : 'n',
			// 	content : helpMsg2[6],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCap'),
			// 	position : 'n',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==12)&&(help==2))
		{
		trip = new Trip([	

			{	
				sel : $('#volFlaskCap'),
				position : 'n',
				content : helpMsg2[6],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[7],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCap'),
			// 	position : 'n',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==13)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#funnel'),
				position : 'n',
				content : helpMsg2[7],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#washBottle'),
			// 	position : 'n',
			// 	content : helpMsg2[8],
			// 	expose : false,
			// 	delay : 4000
			// },
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==14)&&(help==2))
		{
		trip = new Trip([	

			{	
				sel : $('#washBottle'),
				position : 'n',
				content : helpMsg2[8],
				expose : false,
				delay : 4000
			},
		
			// {	
			// 	sel : $('#funnel'),
			// 	position : 'n',
			// 	content : helpMsg2[9],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==15)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#funnel'),
				position : 'n',
				content : helpMsg2[9],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#dropper'),
			// 	position : 's',
			// 	content : helpMsg2[10],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==16)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#dropper'),
				position : 'w',
				content : helpMsg2[10],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#volFlaskCaponTable'),
			// 	position : 's',
			// 	content : helpMsg2[11],
			// 	expose : false,
			// 	delay : 4000
			// },
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==17)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#volFlaskCaponTable'),
				position : 's',
				content : helpMsg2[11],
				expose : false,
				delay : 4000
			},
			// {	
			// 	sel : $('#volFlask'),
			// 	position : 'n',
			// 	content : helpMsg2[12],
			// 	expose : false,
			// 	delay : 4000
			// }
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==18)&&(help==2))
		{
		trip = new Trip([	
			{	
				sel : $('#volFlask'),
				position : 'n',
				content : helpMsg2[12],
				expose : false,
				delay : 4000
			}
		]);
		trip.start(); 
		window.trip = trip;
		}
		else if((helpcount==19)&&(help==2))
		{
		
				trip = new Trip([	
					{	
						sel : $('#inference'),
						position : 'e',
						content : inferenceMsg,
						expose : false,
						delay : 4000
					}
				])
				trip.start(); 
				window.trip = trip;


		}
		else if((helpcount==20)&&(help==2))
		{
			$('.content').animate({ 'scrollTop': '500px' },function(){
				trip = new Trip([
					{	
					   sel : $('#reset'),
					   position : 'e',
					   content : resetMsg,
					   expose : false,
					   delay : 4000
					}
			 ])
			 trip.start(); 
			 window.trip = trip;
					// callbackSecond();
		
				})
			// callbackFirst();
			// callbackFirst(callbackSecond);

		}	


	});




});
// else if (showArr == 23) {

// 	$(".content").animate({ 'scrollTop': '500px' },function(){

// 	trip = new Trip([



// 		{

// 			sel: $('#check2'),

// 			position: 'e',

// 			content: helprarr[23],

// 			expose: false,

// 			delay: 4000

// 		},

// 	])

// 	trip.start();

// 	window.trip = trip;

// });

// }



	
		



// function callbackSecond()

// {
// 	   trip = new Trip([
// 	   {	
// 		  sel : $('#reset'),
// 		  position : 'e',
// 		  content : resetMsg,
// 		  expose : false,
// 		  delay : 4000
// 	   }
// ])
// }