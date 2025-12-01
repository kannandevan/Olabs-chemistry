var tripFlag=false;
var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
        // alert(helpcount)
        tripFlag = true;
        if(helpcount==0) {
            {
                ResponsiveHelpMessage('#checkCir',"null",'s',helpMsg[0],false,4000)
            }
        }
        else if(helpcount==1) {
            {
                ResponsiveHelpMessage('#ammeter',"null",'s',helpMsg[1],false,4000)
            }
        }
        else if(helpcount==2) {
            {
                ResponsiveHelpMessage('#key',"null",'w',helpMsg[2],false,4000)
            }
        }
        else if (helpcount==3){
            {
                ResponsiveHelpMessage('#rhSliderPosition',"null",'e',helpMsg[3],false,4000)
            }
        }
        else if (helpcount==4){
            {
                ResponsiveHelpMessage('#check',"null",'e',helpMsg[4],false,4000)
            }
        }
        else if (helpcount==5){
            {
                ResponsiveHelpMessage('#nextbutton',"null",'s',helpMsg[5],false,4000)
            }
        }
        else if (helpcount==6){
            {
                ResponsiveHelpMessage('#nextbutton2',"null",'w',helpMsg[5],false,6000)
            }
            
        }
        else if (helpcount==7){
            {
                ResponsiveHelpMessage('#rhSliderPosition2',"null",'e',helpMsg[3],false,4000)
            }
        }
        else if (helpcount==8){
            {
                ResponsiveHelpMessage('#check2',"null",'s',helpMsg[4],false,4000)
            }
        }
        else if (helpcount==9){
            {
                ResponsiveHelpMessage('#nextbutton3',"null",'w',helpMsg[5],false,4000)
            }
        }
        else if (helpcount==10){
            {
                ResponsiveHelpMessage('#inference',"null",'w',helpMsg[6],false,4000)
            }
        }
        else if (helpcount==11){
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[7],false,4000)
            }
        }

    });
    $('#inference').bind('click',function(){
		tripFlag = true;                                                                                                              
		if (inferenceCount == 0) {
			ResponsiveHelpMessage('#inference',"null",'w',inferenceMsg[0],false,6000)
            helpcount = 11;
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