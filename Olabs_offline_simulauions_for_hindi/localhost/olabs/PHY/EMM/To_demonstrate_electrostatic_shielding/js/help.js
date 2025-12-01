var tripFlag = false;
var trip;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (help == 0) {
            {
                ResponsiveHelpMessage('#glassrod',"null",'n',helpMsg[0],false,5000)	
            }
        }
        else if (help == 1) {
            {
                ResponsiveHelpMessage('#cloth',"null",'n',helpMsg[1],false,5000)
            }
        }   
        else if (help == 2) {
            {
                ResponsiveHelpMessage('#handwithClothOne',"null",'s',helpMsg[2],false,5000)
            }
        } 
        else if (help == 3) {
            {
                // ResponsiveHelpMessage('#handCanDivHelp',"null",'e',helpMsg[3],false,5000)
                trip = new Trip([
                    {
                        sel : $("#handCanDivHelp"),
                        position : 'e',
                        content : helpMsg[3],
                        expose : false,
                        delay : 5000
                    }
                ]);
                trip.start(); 
                window.trip = trip;
            }
        } 
        else if (help == 4) {
            {
                ResponsiveHelpMessage('#wireOne',"null",'n',helpMsg[4],false,5000)
            }
        } 
        else if (help == 5) {
            {
                ResponsiveHelpMessage('#tape',"null",'n',helpMsg[5],false,5000)
            }
        } 
        else if (help == 6) {
            {
                ResponsiveHelpMessage('#standDiv',"null",'e',helpMsg[6],false,5000)
            }
        } 
        else if (help == 7) {
            {
                ResponsiveHelpMessage('#glassrodOne',"null",'n',helpMsg[7],false,5000)
            }
        }
        else if (help == 8) {
            {
                ResponsiveHelpMessage('#cloth',"null",'n',helpMsg[8],false,5000)
            }
        } 
        else if (help == 9) {
            {
                ResponsiveHelpMessage('#handwithClothOne',"null",'s',helpMsg[9],false,5000)
            }
        }   
        else if (help == 10) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[10],false,5000)
            }
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

