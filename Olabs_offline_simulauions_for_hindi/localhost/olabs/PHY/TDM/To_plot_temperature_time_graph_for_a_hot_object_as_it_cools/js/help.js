var tripFlag=false;
var trip
$(document).ready(function() {

	$('#simHelp').bind('click',function(){
		//alert(helpcount)
		removeTrip();
		tripFlag=true;
		
		if(helpcount ==0)
		{
			trip = new Trip([
			{
				sel : $('#sliderRoomTemp'),
				position : 's',
				content : helpMsg[0],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
       else if(helpcount == 1)
		{
			trip = new Trip([
			{
				sel : $('#calorimeterDiv'),
				position : 'n',
				content : helpMsg[1],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 2)
		{
			trip = new Trip([
			{
				sel : $('#beakerDiv'),
				position : 'n',
				content : helpMsg[2],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 3)
		{
			trip = new Trip([
			{
				sel : $('#calorimeterLidDiv'),
				position : 'n',
				content : helpMsg[3],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 4)
		{
			trip = new Trip([
			{
				sel : $('#thermometer'),
				position : 'n',
				content : helpMsg[4],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 5)
		{
			trip = new Trip([
			{
				sel : $('#burnerOff'),
				position : 'n',
				content : helpMsg[5],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 6)
		{
			trip = new Trip([
			{
				sel : $('#stopWatchDiv'),
				position : 'e',
				content : helpMsg[6],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 7)
		{
			trip = new Trip([
			{
				sel : $('#nextButton'),
				position : 'w',
				content : helpMsg[7],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
        else if(helpcount == 8)
		{
			trip = new Trip([
			{
				sel : $('#plotGraph'),
				position : 's',
				content : helpMsg[8],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
		else if(helpcount == 9)
		{
			trip = new Trip([
			{
				sel : $('#nextButton1'),
				position : 'w',
				content : helpMsg[9],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
		else if(helpcount == 10)
		{
			trip = new Trip([
			{
				sel : $('#nextButton2'),
				position : 'w',
				content : helpMsg[9],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
		else if(helpcount == 11)
		{
			trip = new Trip([
			{
				sel : $('#simReset'),
				position : 's',
				content : helpMsg[10],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
		else if(helpcount == 9)
		{
			
		}
		else if(helpcount == 12)
		{
			trip = new Trip([
			{
				sel : $('#ConnextButton'),
				position : 'w',
				content : helpMsg[9],
				expose : false,
				delay : 4000
			}]);
			trip.start(); 
			window.trip = trip;	
		}
});			
	});

	function removeTrip()
	{
		var trip = new Trip([
			{
				sel : $('#mainDiv'),
				position : 's',
				content : "",
				expose : true,
				delay : 0
			}
		]);
		trip.start();
		$('.trip-block').remove();
		trip.stop();
	}
	function ResponsiveHelpMessage(elementId,elementClass,positionParam,message,exposeFlag,delayValue)
	{
		var finalElementName;
		if(elementId=="null")
			finalElementName=elementClass
		else
			finalElementName=elementId;
		setTimeout(function()
		{    
			removeTrip()
			setTimeout(function()
			{
				var trip = new Trip([
					{
						sel : $(finalElementName),
						position : positionParam,
						content : message,
						expose : exposeFlag,
						delay : delayValue
					}
				]);
				trip.start();
				window.trip = trip;
				$(".trip-block ").css({display:"block"})
			})
		})
	}