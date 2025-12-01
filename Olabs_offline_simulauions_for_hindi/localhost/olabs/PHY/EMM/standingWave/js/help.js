var trip;
var tripFlag = false;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (showArr == 0) {
            $(".control-div").animate({ 'scrollTop': '0px' },function(){
                {
                    ResponsiveHelpMessage('#actTypes', "null", 'e', helparr[0], false, 6000)
                }
            })         
        }

        else if (showArr == 1) {
            $(".control-div").animate({ 'scrollTop': '50px' },function(){

            {
                ResponsiveHelpMessage('#springLen', "null", 'e', helparr[1], false, 6000)
            }
        })

        }
        else if (showArr == 2) {
            $(".control-div").animate({ 'scrollTop': '600px' },function(){

            {
                ResponsiveHelpMessage('#soundVelo', "null", 'e', helparr[2], false, 6000)
            }
        })
        }
        else if (showArr == 3) {
            {
                ResponsiveHelpMessage('#start', "null", 'w', helparr[3], false, 6000)
            }
        }
        else if (showArr == 4) {
            {
                ResponsiveHelpMessage('#next', "null", 'w', helparr[4], false, 6000)
            }
        }
        else if (showArr == 5) {
            {
                ResponsiveHelpMessage('#simReset', "null", 's', helparr[5], false, 6000)
            }
        }
        else if (showArr == 6) {
            $(".control-div").animate({ 'scrollTop': '50px' },function(){

            {
                ResponsiveHelpMessage('#springLenTwo', "null", 'e', helparr[1], false, 6000)
            }
        })
        }
        else if (showArr == 7) {
            $(".control-div").animate({ 'scrollTop': '600px' },function(){


            {
                ResponsiveHelpMessage('#soundVeloTwo', "null", 'e', helparr[2], false, 6000)
            }
            })
        }
        else if (showArr == 8) {
            {
                ResponsiveHelpMessage('#startOpen', "null", 'w', helparr[3], false, 6000)
            }
        }
        else if (showArr == 9) {
            {
                ResponsiveHelpMessage('#nextOpen', "null", 'w', helparr[4], false, 6000)
            }
            
        }
        else if (showArr == 10) {
            {
                ResponsiveHelpMessage('#next', "null", 'w', helparr[6], false, 6000)
            }
            
        } else if (showArr == 11) {
            {
                ResponsiveHelpMessage('#nextOpen', "null", 'w', helparr[6], false, 6000)
            }
            
        }
    });
    $('#inferenceImg').bind('click', function () {
        showArr = 3;
        tripFlag = true;
        if (inferenceArr == 0) {
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

