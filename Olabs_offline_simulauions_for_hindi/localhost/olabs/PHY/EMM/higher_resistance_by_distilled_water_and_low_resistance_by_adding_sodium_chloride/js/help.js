var tripFlag = false;
var trip;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (help == 0) {
            {
                ResponsiveHelpMessage('#text',"null",'s',helpMsg[0],false,5000)	
                    // trip = new Trip([
                    //     {
                    //         sel : $("#text"),
                    //         position : 's',
                    //         content : helpMsg[0],
                    //         expose : false,
                    //         delay : 5000
                    //     }
                    // ]);
                    // trip.start(); 
                    // window.trip = trip;
            }
        }
        else if (help == 1) {
            {
                ResponsiveHelpMessage('#check',"null",'s',helpMsg[1],false,5000)
                // trip = new Trip([
				// 	{
				// 		sel : $("#check"),
				// 		position : 's',
				// 		content : helpMsg[1],
				// 		expose : false,
				// 		delay : 5000
				// 	}
                // ]);
				// trip.start(); 
				// window.trip = trip;
            }
        }
        else if (help == 2) {
            {
                ResponsiveHelpMessage('#electA',"null",'n',helpMsg[2],false,5000)
            }
        }
        else if (help == 3) {
            {
                ResponsiveHelpMessage('#electB',"null",'n',helpMsg[3],false,5000)               
            }
        }
        else if (help == 4) {
            {
                ResponsiveHelpMessage('#battNagtv',"null",'n',helpMsg[4],false,5000)               
            }
        }
        else if (help == 5) {
            {
                ResponsiveHelpMessage('#keyRight',"null",'n',helpMsg[5],false,5000)               
            }
        }
        else if (help == 6) {
            {
                ResponsiveHelpMessage('#nextOne',"null",'w',helpMsg[6],false,5000)               
            }
        }
        else if (help == 7) {
            {
                ResponsiveHelpMessage('#glassRodTwo',"null",'n',helpMsg[7],false,5000)               
            }
        }
        else if (help == 8) {
            {
                ResponsiveHelpMessage('#handOne',"null",'n',helpMsg[8],false,5000)               
            }
        }
        else if (help == 9) {
            {
                ResponsiveHelpMessage('#nextTwo',"null",'w',helpMsg[6],false,5000)                  
            }
        }
        else if (help == 10) {
            {
                ResponsiveHelpMessage('#glassRodThree',"null",'n',helpMsg[10],false,5000)               
            }
        }
        else if (help == 11) {
            {
                ResponsiveHelpMessage('#handTwo',"null",'n',helpMsg[11],false,5000)               
            }
        }
        else if (help == 12) {
            {
                ResponsiveHelpMessage('#nextThree',"null",'w',helpMsg[12],false,5000)                  
            }
        }
        else if (help == 13) {
            {
                ResponsiveHelpMessage('#glassRodFour',"null",'n',helpMsg[13],false,5000)               
            }
        }
        else if (help == 14) {
            {
                ResponsiveHelpMessage('#handThree',"null",'n',helpMsg[14],false,5000)               
            }
        }
        else if (help == 15) {
            {
                ResponsiveHelpMessage('#nextFour',"null",'w',helpMsg[15],false,5000)                  
            }
        }
        else if (help == 16) {
            {
                ResponsiveHelpMessage('#glassRodFive',"null",'n',helpMsg[16],false,5000)               
            }
        }
        else if (help == 17) {
            {
                ResponsiveHelpMessage('#helpSpatula',"null",'n',helpMsg[17],false,5000)               
            }
        }
        else if (help == 18) {
            {
                ResponsiveHelpMessage('#handFour',"null",'n',helpMsg[18],false,5000)               
            }
        }
        else if (help == 19) {
            {
                ResponsiveHelpMessage('#nextFive',"null",'w',helpMsg[19],false,5000)                  
            }
        }
        else if (help == 20) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[20],false,5000)
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

