var trip;
var tripFlag = false;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (showArr == 0) {
                {
                    ResponsiveHelpMessage('null',".questionText",'n',helparr[0],false,7000)
                }
        }

        else if (showArr == 1) {
            {
                ResponsiveHelpMessage('#actTypes', "null", 'e', helparr[1], false, 6000)
            }
        }
        else if (showArr == 2) {
            {
                ResponsiveHelpMessage('#rubber', "null", 'n', helparr[2], false, 6000)
            }
        }
        else if (showArr == 3) {
            {
                ResponsiveHelpMessage('#matchStick', "null", 'n', helparr[3], false, 6000)
            }
        }
        else if (showArr == 4) {
            {
                ResponsiveHelpMessage('#slideConn', "null", 'n', helparr[4], false, 6000)
            }
        }
        else if (showArr == 5) {
            {
                ResponsiveHelpMessage('#bottleCap', "null", 'n', helparr[5], false, 6000)
            }
        }
        else if (showArr == 6) {
            {
                ResponsiveHelpMessage('#spatulaDiv', "null", 'w', helparr[6], false, 6000)
            }
        }
        else if (showArr == 7) {
            {
                ResponsiveHelpMessage('#spatulaDivBehind', "null", 'n', helparr[7], false, 6000)
            }
        }
        else if (showArr == 8) {
            {
                ResponsiveHelpMessage('#glassrod', "null", 'n', helparr[8], false, 6000)
            }
        }
        else if (showArr == 9) {
            {
                ResponsiveHelpMessage('#slideConn', "null", 's', helparr[9], false, 6000)
            }
            
        }
        else if (showArr == 10) {
            {
                ResponsiveHelpMessage('#slideConn', "null", 'n', helparr[10], false, 6000)
            }
            
        } else if (showArr == 11) {
            {
                ResponsiveHelpMessage('#inference', "null", 'e', helparr[11], false, 6000)
            }
            
        } else if (showArr == 12) {
            {
                ResponsiveHelpMessage('#simReset', "null", 's', helparr[12], false, 6000)
            }
            
        }
        //////////////////////////////////////////////////////
        if (showArr == 13) {
                $(".control-div").animate({ 'scrollTop': '600px' },function(){

                {
                    ResponsiveHelpMessage('#tempValue','null','e',helparrCapill[0],false,7000)
                }
            })         
        }

        else if (showArr == 14) {
            $(".control-div").animate({ 'scrollTop': '600px' },function(){

            {
                ResponsiveHelpMessage('#capCapill', "null", 'n', helparrCapill[1], false, 6000)
            }
        })

        }
        else if (showArr == 15) {
            {
                ResponsiveHelpMessage('#spatulaDivCapill', "null", 'w', helparrCapill[2], false, 6000)
            }
        }
        else if (showArr == 16) {
            {
                ResponsiveHelpMessage('#spatulaDivBehindCapill', "null", 'w', helparrCapill[3], false, 6000)
            }
        }
        else if (showArr == 17) {
            {
                ResponsiveHelpMessage('#glassrodCapill', "null", 'n', helparrCapill[4], false, 6000)
            }
        }
        else if (showArr == 18) {
            {
                ResponsiveHelpMessage('#clampOne', "null", 'n', helparrCapill[5], false, 6000)
            }
        }
        else if (showArr == 19) {
            {
                ResponsiveHelpMessage('#clampTwo', "null", 'n', helparrCapill[5], false, 6000)
            }
        }
        else if (showArr == 20) {

            {
                ResponsiveHelpMessage('#clampOne', "null", 's', helparrCapill[6], false, 6000)
            }
        }
        else if (showArr == 21) {
            {
                ResponsiveHelpMessage('#clampTwo', "null", 's', helparrCapill[6], false, 6000)
            }
        }
        else if (showArr == 22) {
            $(".control-div").animate({ 'scrollTop': '600px' },function(){

            {
                ResponsiveHelpMessage('null', ".capillaryTubes", 'n', helparrCapill[7], false, 6000)
            }
        })
        }
        else if (showArr == 23) {
            {
                ResponsiveHelpMessage('#inferenceCapill', "null", 'e', helparrCapill[8], false, 6000)
            }
            
        } 
        else if (showArr == 24) {
            {
                ResponsiveHelpMessage('#standAreaCapill', "null", 's', helparrCapill[6], false, 6000)
            }
            
        } 
        else if (showArr == 25){
            ResponsiveHelpMessage('#planeScale', "null", 'n', helparrCapill[9], false, 6000)
        }
        
    });
    $('#inference').bind('click', function () {
        showArr = 12;
        tripFlag = true;
        if (inferenceArr == 0) {
            ResponsiveHelpMessage('#inference', "null", 'e', inferArr[0], false, 6000)

        }

    });
    $('#inferenceCapill').bind('click', function () {
        showArr = 12;
        tripFlag = true;
        if (inferenceArr == 0) {
            ResponsiveHelpMessage('#inferenceCapill', "null", 'e', inferArr[1], false, 6000)

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

