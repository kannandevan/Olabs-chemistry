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
	 				delay : 8000
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
				
				sel : $('#meas_cyl'),
				position : 'w',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			},
		
			{	
				sel : $('#drop'),
				position : 'w',
				content : helpMsg[1],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#cork'),
				position : 'n',
				content : helpMsg[2],
				expose : false,
				delay : 4000
			}]);
		}
		else if((helpcount==1)&&(help==1))
		{
			trip = new Trip([
			
			    {	
					sel : $('#drop'),
					position : 'w',
					content : helpMsg[1],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#cork'),
					position : 'n',
					content : helpMsg[2],
					expose : false,
					delay : 4000
				}]);
			}
			else if((helpcount==2)&&(help==1))
		{
			trip = new Trip([
				{
					sel : $('#cork'),
					position : 'n',
					content : helpMsg[2],
					expose : false,
					delay : 4000
				}]);
			}
			else if((helpcount==3)&&(help==1))
			{
				trip = new Trip([
					{
						sel : $('#next_btn'),
						position : 'w',
						content : nxtmsg,
						expose : false,
						delay : 4000
					}]);
				}
			else if((helpcount==4)&&(help==2))
			{
				trip = new Trip([
					{
						sel : $('#testube2'),
						position : 'w',
						content : helpMsg[3],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#thermometer'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testube2'),
						position : 'e',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork2'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testube2'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
		
				]);

			}
			else if((helpcount==5)&&(help==2))
			{
				trip = new Trip([
					{
						sel : $('#thermometer'),
						position : 'w',
						content : helpMsg[4],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testube2'),
						position : 'e',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork2'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#testube2'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
		
				]);

			}
			else if((helpcount==6)&&(help==2))
			{
				trip = new Trip([
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[5],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#burnerarea'),
						position : 'e',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork3'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
		
				]);

			}
			else if((helpcount==7)&&(help==2))
			{
				trip = new Trip([
					{
						sel : $('#burner_off'),
						position : 'e',
						content : helpMsg[6],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork3'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
		
				]);

			}
			else if((helpcount==8)&&(help==2))
			{
				trip = new Trip([
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[7],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#cork3'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
		
				]);

			}
			else if((helpcount==9)&&(help==2))
			{
				trip = new Trip([
				    {
						sel : $('#cork3'),
						position : 'e',
						content : helpMsg[8],
						expose : false,
						delay : 4000
					},
					{
						sel : $('#tststand_top'),
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
						sel : $('#tststand_top'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 4000
					}
					
		
				]);


			}
			
			trip.start(); 
			window.trip = trip;
	
		});

		
	
});
