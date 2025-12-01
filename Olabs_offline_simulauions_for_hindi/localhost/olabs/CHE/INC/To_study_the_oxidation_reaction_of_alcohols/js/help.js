// JavaScript Document
var trip;
var tripClickFlag=false;
$(document).ready(function() {
	
	 $('#inference').bind('click',function(){
	 			trip = new Trip([
	 			{
	 				sel : $('#inference'),
	 				position : 'e',
	 				content : inferenceText,
	 				expose : false,
	 				delay : 7000
	 			}]); 

		trip.start(); 
		window.trip = trip;
	});
	$('#inference2').bind('click',function(){
		trip = new Trip([
		{
			sel : $('#inference2'),
			position : 'e',
			content : inferenceText2,
			expose : false,
			delay : 5000
		}]); 

trip.start(); 
window.trip = trip;
});
$('#inference3').bind('click',function(){
	trip = new Trip([
	{
		sel : $('#inference3'),
		position : 'e',
		content : inferenceText3,
		expose : false,
		delay : 4000
	}]); 

trip.start(); 
window.trip = trip;
});

$('#olabmenuBar li:first-child').bind('click',function(){
	tripClickFlag=true
	if((helpcount==0)&&(help==1))
	{
	trip = new Trip([
		{
			
			sel : $('#ethnlCap'),
			position : 'w',
			content : helpMsg[0],
			expose : false,
			delay : 4000
		}
		
	]);
	}
	else if((helpcount==1)&&(help==1))
	{
		trip = new Trip([
		
			{	
				sel : $('#ethnlBottle'),
				position : 'w',
				content : helpMsg[1],
				expose : false,
				delay : 4000
			}
		]);
		}
		else if((helpcount==2)&&(help==1))
	{
		trip = new Trip([
			{
				sel : $('#spiritLampCap'),
				position : 'w',
				content : helpMsg[2],
				expose : false,
				delay : 4000
			}
		]);
		}
		else if((helpcount==3)&&(help==1))
		{
			trip = new Trip([
				{	
					sel : $('#preSptLmpEmpty'),
					position : 'n',
					content : helpMsg[3],
					expose : false,
					delay : 4000
				}
			]);
			}
			else if((helpcount==4)&&(help==1))
			{
				trip = new Trip([
					{	
						sel : $('#jetTubeShadow'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					}
				]);
				}
				else if((helpcount==5)&&(help==1))
				{
					trip = new Trip([
						{	
							sel : $('#lighter'),
							position : 'n',
							content : helpMsg[5],
							expose : false,
							delay : 4000
						}
					]);
					}
		else if((helpcount==6)&&(help==1))
		{
			trip = new Trip([
				{
					sel : $('#nextBtn'),
					position : 'w',
					content : helpMsg[6],
					expose : false,
					delay : 4000
				}]);
			}
		else if((helpcount==7)&&(help==2))
		{
			trip = new Trip([
				{
					sel : $('#mainMeasCyl'),
					position : 'n',
					content : helpMsg[7],
					expose : false,
					delay : 4000
				}
			
	
			]);

		}
		else if((helpcount==8)&&(help==2))
		{
			trip = new Trip([
				
				{
					sel : $('#mainTestTube'),
					position : 'n',
					content : helpMsg[8],
					expose : false,
					delay : 4000
				}
			
	
			]);

		}
		else if((helpcount==9)&&(help==2))
		{
			trip = new Trip([
				
			
				{
					sel : $('#burnerarea'),
					position : 'e',
					content : helpMsg[9],
					expose : false,
					delay : 4000
				}
			
	
			]);

		}
		else if((helpcount==10)&&(help==2))
		{
			trip = new Trip([
				
				
				{
					sel : $('#burnerarea'),
					position : 'e',
					content : helpMsg[10],
					expose : false,
					delay : 4000
				},

			
	
			]);

		}
		else if((helpcount==11)&&(help==2))
		{
			trip = new Trip([
				

				{
					sel : $('#mainTestTube'),
					position : 'e',
					content : helpMsg[11],
					expose : false,
					delay : 4000
				}
			
	
			]);

		}
		else if((helpcount==12)&&(help==2))
		{
			trip = new Trip([
				
				
				{
					sel : $('#dropper'),
					position : 'w',
					content : helpMsg[12],
					expose : false,
					delay : 4000
				}
			
	
			]);

		}
		else if((helpcount==13)&&(help==2))
		{
			trip = new Trip([
				{
					sel : $('#nextBtn2'),
					position : 'w',
					content : helpMsg[13],
					expose : false,
					delay : 4000
				}
			]);
			}
		else if((helpcount==14)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#filterFirst'),
					position : 'n',
					content : helpMsg[14],
					expose : false,
					delay : 4000
				}
				]);

		}
		else if((helpcount==15)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#filterFold'),
					position : 's',
					content : helpMsg[15],
					expose : false,
					delay : 4000
				}
				]);

		}
		else if((helpcount==16)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#mainTestTube2'),
					position : 'e',
					content : helpMsg[16],
					expose : false,
					delay : 4000
				}
				]);

		}
		else if((helpcount==17)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#mainTestTube3'),
					position : 'e',
					content : helpMsg[17],
					expose : false,
					delay : 4000
				}
				]);

		}
		else if((helpcount==18)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#mainSpatula'),
					position : 'w',
					content : helpMsg[18],
					expose : false,
					delay : 4000
				}
				]);

		}

		else if((helpcount==19)&&(help==3))
		{
			trip = new Trip([
				{
					sel : $('#simReset'),
					position : 'w',
					content : resetMsg,
					expose : false,
					delay : 4000
				}
				]);

		}
	

		trip.start(); 
		window.trip = trip;

	});




});
