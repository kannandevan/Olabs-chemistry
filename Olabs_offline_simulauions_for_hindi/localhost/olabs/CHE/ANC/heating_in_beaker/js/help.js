var tripFlag=false;
var trip
var r = 52
var tripFlag=false;
	$(document).ready(function() {					   
		$('#simHelp').bind('click',function(){
			 removeTrip();
		   
			tripFlag = true;
			if(helpcount==0) {
				{
					ResponsiveHelpMessage('#tripod',"null",'n',helpMsg[0],false,4000)
				}
			}
		   
			else if(helpcount==1) {
				{
					ResponsiveHelpMessage('#wiregause',"null",'n',helpMsg[1],false,6000)
				}
			}	
			else if(helpcount==2) {
				{
					ResponsiveHelpMessage('#wholeBottle',"null",'n',helpMsg[2],false,6000)
				}
			}	
			else if(helpcount==3) {
				{
					ResponsiveHelpMessage('#wholeBeakerA',"null",'n',helpMsg[3],false,6000)
				}
			}	
			else if(helpcount==4) {
				{
					ResponsiveHelpMessage('#wholeWatchglassA',"null",'n',helpMsg[4],false,6000)
				}
			}	
			else if(helpcount==5) {
				{
					ResponsiveHelpMessage('#burnerOff',"null",'e',helpMsg[5],false,6000)
				}
			}	
			else if(helpcount==6) {
				{
					ResponsiveHelpMessage('#thermometer',"null",'w',helpMsg[6],false,6000)
				}
			}	
			else if(helpcount==7) {
				{
					ResponsiveHelpMessage('#burnerOn',"null",'e',helpMsg[7],false,6000)
				}
			}	
			else if(helpcount==8) {
				{
					ResponsiveHelpMessage('#inference',"null",'w',helpMsg[8],false,6000)
				}
			}	
			else if(helpcount==9) {
				{
					ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[9],false,6000)
				}
			}
		});
		$('#inference').bind('click',function(){
			tripFlag = true;  
			helpcount = 9;
			ResponsiveHelpMessage('#infDummy',"null",'w',infMsg1[0],false,10000)
		});
		
	});






function tripRemoveFunction()
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
    $(".trip-block ").css({display:"none"})
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
        tripRemoveFunction() 
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
        })
    })
}