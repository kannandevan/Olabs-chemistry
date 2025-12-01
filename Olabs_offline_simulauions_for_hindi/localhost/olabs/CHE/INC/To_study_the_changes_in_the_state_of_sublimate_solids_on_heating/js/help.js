var tripClickFlag=false;
$(document).ready(function() {
	$('#Inference').bind('click',function(){
				trip = new Trip([{
					sel : $('#Inference'),
					position : 'w',
					content : inferenceMsg[0],
					expose : false,
					delay : 10000
				}]);
	trip.start();
	window.trip = trip;				
	});	

	$('#olabmenuBar li:first-child').bind('click',function(){
		removeTrip();
		console.log(helpcount)
		tripClickFlag=true;
		if(helpcount ==0)
		{
			// responsiveVoice.speak(helpMsg[0],'Hindi Female');
			trip = new Trip([
			{
				sel : $('#bottleCap'),
				position : 'n',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			}
			]);
		}
		else if(helpcount ==1)
		{
			// responsiveVoice.speak("Drag and drop the spatula towards the bottle",'Hindi Female');
			trip = new Trip([
				{
					sel : $('#spatula'),
					position : 's',
					content :helpMsg[1] ,
					expose : false,
					delay : 6000
				}
			]);	
		}
		// else if(helpcount ==2)
		// {
		// 	// responsiveVoice.speak("Drag and drop the spatula containing Ammonium chloride towards the china dish",'Hindi Female');
		// 	trip = new Trip([
		// 		{
		// 			sel : $('#spatula1'),
		// 			position : 'n',
		// 			content :helpMsg[2] ,
		// 			expose : false,
		// 			delay : 6000
		// 		}
		// 	]);	
		// }
		else if(helpcount ==3)
		{
			// /responsiveVoice.speak(helpMsg[3],'Hindi Female');
			trip = new Trip([
				{
					sel : $('#tripod'),
					position : 'w',
					content :helpMsg[2] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==4)
		{
			// responsiveVoice.speak(helpMsg[4],'Hindi Female');
			trip = new Trip([
				{
					sel : $('#funnel'),
					position : 's',
					content :helpMsg[3] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==5)
		{
			// responsiveVoice.speak("Drag and drop the cotton towards the top of the funnel",'Hindi Female');
			trip = new Trip([
				{
					sel : $('#cottonDrag'),
					position : 's',
					content :helpMsg[4] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==6)
		{
			// responsiveVoice.speak(helpMsg[6],'Hindi Female');
			trip = new Trip([
				{
					sel : $('#funnel1'),
					position : 'n',
					content :helpMsg[5] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==7)
		{
			// responsiveVoice.speak("Drag and drop the cotton into the glass bowl",'Hindi Female');
			trip = new Trip([
				{
					sel : $('#cottonDrag2'),
					position : 'w',
					content :helpMsg[6] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==8)
		{
			// responsiveVoice.speak("Drag and drop the wet cotton into the top of the china dish",'Hindi Female');
			trip = new Trip([
				{
					sel : $('#wetCotton'),
					position : 'n',
					content :helpMsg[7] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==9)
		{
			// responsiveVoice.speak(helpMsg[9],'Hindi Female');
			trip = new Trip([
				{
					sel : $('#tripod'),
					position : 's',
					content :helpMsg[8] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		else if(helpcount ==10)
		{
			// responsiveVoice.speak(helpMsg[10],'Hindi Female');
			trip = new Trip([
				{
					sel : $('#reset'),
					position : 'e',
					content :helpMsg[9] ,
					expose : false,
					delay : 6000
				}
			]);
				
		}
		trip.start(); 
		window.trip = trip;		
});			
	});

	