var tripFlag = false;
var trip;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (help == 0) {
            {
                ResponsiveHelpMessage('#candle',"null",'w',helpMsg[0],false,5000)	
            }
        }
        else if (help == 1) {
            {
                ResponsiveHelpMessage('#paper',"null",'n',helpMsg[1],false,5000)
            }
        }   
        else if (help == 2) {
            {
                ResponsiveHelpMessage('#marker',"null",'e',helpMsg[2],false,5000)
            }
        }  
        else if (help == 3) {
            {
                ResponsiveHelpMessage('#compusDiv',"null",'e',helpMsg[3],false,5000)
            }
        } 
        else if (help == 4) {
            {
                ResponsiveHelpMessage('#nsBoard',"null",'n',helpMsg[4],false,5000)
            }
        } 
        else if (help == 5) {
            {
                ResponsiveHelpMessage('#compus',"null",'e',helpMsg[5],false,5000)
            }
        }
        else if (help == 6) {
            {
                ResponsiveHelpMessage('#magnet',"null",'n',helpMsg[6],false,5000)
            }
        }
        else if (help == 7) {
            {
                ResponsiveHelpMessage('#compusDivOne',"null",'e',helpMsg[7],false,5000)
            }
        }
        else if (help == 8) {
            {
                ResponsiveHelpMessage('#markerTwo',"null",'e',helpMsg[8],false,5000)
            }
        }
        else if (help == 9) {
            {
                ResponsiveHelpMessage('#compusDivTwo',"null",'e',helpMsg[9],false,5000)
            }
        }
        else if (help == 10) {
            {
                ResponsiveHelpMessage('#markerTwoTwo',"null",'e',helpMsg[10],false,5000)
            }
        }
        else if (help == 11) {
            {
                ResponsiveHelpMessage('#compusDivThree',"null",'e',helpMsg[11],false,5000)
            }
        }
        else if (help == 12) {
            {
                ResponsiveHelpMessage('#markerThree',"null",'e',helpMsg[12],false,5000)
            }
        }
        else if (help == 13) {
            {
                ResponsiveHelpMessage('#compusDivFour',"null",'e',helpMsg[13],false,5000)
            }
        }
        else if (help == 14) {
            {
                ResponsiveHelpMessage('#markerFour',"null",'e',helpMsg[14],false,5000)
            }
        }
        else if (help == 15) {
            {
                ResponsiveHelpMessage('#compusDivFive',"null",'e',helpMsg[15],false,5000)
            }
        }
        else if (help == 16) {
            {
                ResponsiveHelpMessage('#markerFive',"null",'e',helpMsg[16],false,5000)
            }
        }
        else if (help == 17) {
            {
                ResponsiveHelpMessage('#compusDivSix',"null",'e',helpMsg[17],false,5000)
            }
        }
        else if (help == 18) {
            {
                ResponsiveHelpMessage('#markerSix',"null",'e',helpMsg[18],false,5000)
            }
        }
        else if (help == 19) {
            {
                ResponsiveHelpMessage('#compusDivSev',"null",'e',helpMsg[19],false,5000)
            }
        }
        else if (help == 20) {
            {
                ResponsiveHelpMessage('#markerSev',"null",'e',helpMsg[20],false,5000)
            }
        }            
        else if (help == 21) {
            {
                ResponsiveHelpMessage('#compusDivEig',"null",'e',helpMsg[21],false,5000)
            }
        }
        else if (help == 22) {
            {
                ResponsiveHelpMessage('#markerEig',"null",'e',helpMsg[22],false,5000)
            }
        }
        else if (help == 23) {
            {
                ResponsiveHelpMessage('#compusDivNin',"null",'e',helpMsg[23],false,5000)
            }
        }
        else if (help == 24) {
            {
                ResponsiveHelpMessage('#markerNin',"null",'e',helpMsg[24],false,5000)
            }
        }
        else if (help == 25) {
            {
                ResponsiveHelpMessage('#compusDivTen',"null",'e',helpMsg[25],false,5000)
            }
        }
        else if (help == 26) {
            {
                ResponsiveHelpMessage('#markerTen',"null",'e',helpMsg[26],false,5000)
            }
        }
        else if (help == 27) {
            {
                ResponsiveHelpMessage('#compusDivEle',"null",'e',helpMsg[27],false,5000)
            }
        }
        else if (help == 28) {
            {
                ResponsiveHelpMessage('#markerEle',"null",'e',helpMsg[28],false,5000)
            }
        }
        else if (help == 29) {
            {
                ResponsiveHelpMessage('#compusDivTwl',"null",'e',helpMsg[29],false,5000)
            }
        }
        else if (help == 30) {
            {
                ResponsiveHelpMessage('#markerTwl',"null",'e',helpMsg[30],false,5000)
            }
        }
        else if (help == 31) {
            {
                ResponsiveHelpMessage('#compusDivThir',"null",'e',helpMsg[31],false,5000)
            }
        }
        else if (help == 32) {
            {
                ResponsiveHelpMessage('#markerThir',"null",'e',helpMsg[32],false,5000)
            }
        }
        else if (help == 33) {
            {
                ResponsiveHelpMessage('#compusDivForte',"null",'e',helpMsg[33],false,5000)
            }
        }
        else if (help == 34) {
            {
                ResponsiveHelpMessage('#markerForte',"null",'e',helpMsg[34],false,5000)
            }
        }
        else if (help == 35) {
            {
                ResponsiveHelpMessage('#compusDivFifen',"null",'e',helpMsg[35],false,5000)
            }
        }
        else if (help == 36) {
            {
                ResponsiveHelpMessage('#markerFifen',"null",'e',helpMsg[36],false,5000)
            }
        }
        else if (help == 37) {
            {
                ResponsiveHelpMessage('#compusDivSixten',"null",'e',helpMsg[37],false,5000)
            }
        }
        else if (help == 38) {
            {
                ResponsiveHelpMessage('#markerSixten',"null",'e',helpMsg[38],false,5000)
            }
        }
        else if (help == 39) {
            {
                ResponsiveHelpMessage('#compusDivSevten',"null",'e',helpMsg[39],false,5000)
            }
        }
        else if (help == 40) {
            {
                ResponsiveHelpMessage('#markerSevten',"null",'e',helpMsg[40],false,5000)
            }
        }
        else if (help == 41) {
            {
                ResponsiveHelpMessage('#compusDivEigten',"null",'e',helpMsg[41],false,5000)
            }
        }
        else if (help == 42) {
            {
                ResponsiveHelpMessage('#markerEigten',"null",'e',helpMsg[42],false,5000)
            }
        }
        else if (help == 43) {
            {
                ResponsiveHelpMessage('#markerNinten',"null",'e',helpMsg[43],false,5000)
            }
        }
        else if (help == 44) {
            {
                ResponsiveHelpMessage('#iornRod',"null",'w',helpMsg[44],false,5000)
            }
        }
        else if (help == 45) {
            {
                ResponsiveHelpMessage('#compusDivTwenty',"null",'e',helpMsg[45],false,5000)
            }
        }
        else if (help == 46) {
            {
                ResponsiveHelpMessage('#markerTwenty',"null",'e',helpMsg[46],false,5000)
            }
        }
        else if (help == 47) {
            {
                ResponsiveHelpMessage('#compusDivTwOne',"null",'e',helpMsg[47],false,5000)
            }
        }
        else if (help == 48) {
            {
                ResponsiveHelpMessage('#markerTwOne',"null",'e',helpMsg[48],false,5000)
            }
        }
        else if (help == 49) {
            {
                ResponsiveHelpMessage('#compusDivTwTwo',"null",'e',helpMsg[49],false,5000)
            }
        }
        else if (help == 50) {
            {
                ResponsiveHelpMessage('#markerTwTwo',"null",'e',helpMsg[50],false,5000)
            }
        }
        else if (help == 51) {
            {
                ResponsiveHelpMessage('#compusDivTwThr',"null",'e',helpMsg[51],false,5000)
            }
        }
        else if (help == 52) {
            {
                ResponsiveHelpMessage('#markerTwThr',"null",'e',helpMsg[52],false,5000)
            }
        }
        else if (help == 53) {
            {
                ResponsiveHelpMessage('#compusDivTwFor',"null",'e',helpMsg[53],false,5000)
            }
        }
        else if (help == 54) {
            {
                ResponsiveHelpMessage('#markerTwFor',"null",'e',helpMsg[54],false,5000)
            }
        }
        else if (help == 55) {
            {
                ResponsiveHelpMessage('#compusDivTwFiv',"null",'e',helpMsg[55],false,5000)
            }
        }
        else if (help == 56) {
            {
                ResponsiveHelpMessage('#markerTwFiv',"null",'e',helpMsg[56],false,5000)
            }
        }
        else if (help == 57) {
            {
                ResponsiveHelpMessage('#markerTwSix',"null",'e',helpMsg[57],false,5000)
            }
        }
        else if (help == 58) {
            {
                ResponsiveHelpMessage('#copperRod',"null",'w',helpMsg[58],false,5000)
            }
        }
        else if (help == 59) {
            {
                ResponsiveHelpMessage('#plastic',"null",'w',helpMsg[59],false,5000)
            }
        }
        else if (help == 60) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[60],false,5000)
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

