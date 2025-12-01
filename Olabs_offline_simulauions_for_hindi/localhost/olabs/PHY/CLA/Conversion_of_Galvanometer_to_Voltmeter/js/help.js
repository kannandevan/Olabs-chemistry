var tripClickFlag=false;
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
		//removeTrip();
		console.log(helpcount1)
		tripClickFlag=true;
			if((helpcount==0)&&(page==0))
			{
				trip = new Trip([
				{
					sel : $('#DropboxTest'),
					position : 'e',
					content : help_msg[0],
					expose : false,
					delay : 4000
				},
				{
					sel : $('#resistanceTextbox'),
					position : 'n',
					content :help_msg[1] ,
					expose : false,
					delay : 4000
				},
				{
					sel : $('#submitButton'),
					position : 'e',
					content :help_msg[2] ,
					expose : false,
					delay : 4000
				}
				
				]);
			}
			else if((helpcount==1)&&(page==0)){
				trip = new Trip([
					{
						sel : $('#resistanceTextbox'),
						position : 'n',
						content :help_msg[1] ,
						expose : false,
						delay : 4000
					},
					{
						sel : $('#submitButton'),
						position : 'e',
						content :help_msg[2] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			else if((helpcount==2)&&(page==0)){
				trip = new Trip([
					{
						sel : $('#submitButton'),
						position : 'e',
						content :help_msg[2] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			else if((helpcount==3)&&(page==0)){
				trip = new Trip([
					{
						sel : $('#nextButton'),
						position : 'w',
						content :help_msg[3] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			for(var j=0;j<=6;j++){
				if(a[j]==0)
				{
					helpcount1=j;
					break;
				}

			}
			console.log(a)
			if((helpcount1==0)&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#show_hideCircuit'),
						position : 'e',
						content : help_msg[4],
						expose : false,
						delay : 4000
					}
				])
			}
			// 		{
			// 			sel : $('#gMeterRed'),
			// 			position : 'e',
			// 			content : help_msg[5],
			// 			expose : false,
			// 			delay : 4000
			// 		},
			// 		{
			// 			sel : $('#radioOpt1div'),
			// 			position : 'e',
			// 			content :help_msg[6] ,
			// 			expose : false,
			// 			delay : 4000
			// 		},
			// 		{
			// 			sel : $('#insertKey'),
			// 			position : 'e',
			// 			content :help_msg[7] ,
			// 			expose : false,
			// 			delay : 4000
			// 		},
			// 		{
			// 			sel : $('#rheoSlider'),
			// 			position : 'e',
			// 			content :help_msg[8] ,
			// 			expose : false,
			// 			delay : 4000
			// 		},
			// 		{
			// 			sel : $('#Gneedle'),
			// 			position : 'e',
			// 			content :help_msg[9] ,
			// 			expose : false,
			// 			delay : 4000
			// 		}
			// 	]);
			// }
			else if(((helpcount1==1)||(helpcount1==0))&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#gMeterRed'),
						position : 'e',
						content : help_msg[5],
						expose : false,
						delay : 4000
					}
				]);
			}
			else if((helpcount1==2)&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#radioOpt1div'),
						position : 'e',
						content :help_msg[6] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			else if((helpcount1==3)&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#insertKey'),
						position : 'e',
						content :help_msg[7] ,
						expose : false,
						delay : 4000
					}
				]);
			}

			else if((helpcount1==4)&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#rheoSlider'),
						position : 'e',
						content :help_msg[8] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			else if((helpcount1==5)&&(page==1))
			{
				trip = new Trip([
					{
						sel : $('#Gneedle'),
						position : 'e',
						content :help_msg[9] ,
						expose : false,
						delay : 4000
					}
				]);
			}
			
		trip.start(); 
		window.trip = trip;			
	});		
});