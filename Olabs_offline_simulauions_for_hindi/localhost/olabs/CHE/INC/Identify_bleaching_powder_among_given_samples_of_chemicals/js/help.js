var tripClickFlag=false;
$(document).ready(function() {
	$('#Inference').bind('click',function(){
		if(msgcount==0){
				trip = new Trip([{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[0],
					expose : false,
					delay : 7000
				}]);
		}
		else{
			trip = new Trip([{
				sel : $('#Inference'),
				position : 'e',
				content : inferenceMsg[1],
				expose : false,
				delay : 6000
			}]); 
		}
		trip.start();
		window.trip = trip;				
	});	

	$('#olabmenuBar li:first-child').bind('click',function(){
		removeTrip();
		tripClickFlag=true;
		if(helpcount ==0)
		{
			trip = new Trip([
			{
				sel : $('.tabled'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#blackCloth'),
				position : 'n',
				content :helpMsg[1] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#tweezerOpen'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#glassRodDiv'),
				position : 'w',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;			
			
		}
		else if(helpcount ==1)
		{
			trip = new Trip([
			{
				sel : $('#blackCloth'),
				position : 'n',
				content :helpMsg[1] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#tweezerOpen'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#glassRodDiv'),
				position : 'w',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
		else if(helpcount ==2)
		{
			trip = new Trip([
			{
				sel : $('#tweezerOpen'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#glassRodDiv'),
				position : 'w',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
		else if(helpcount ==3)
		{
			trip = new Trip([
			{
				sel : $('#glassRodDiv'),
				position : 'w',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			}
			]);
			trip.start(); 
			window.trip = trip;			
		}
});			
	});