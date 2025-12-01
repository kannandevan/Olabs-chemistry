var trip;
var tripFlag = false,ebn=false,gls=false;
$(document).ready(function () {
    $('#simHelp').bind('click', function () {
        tripFlag = true;
        if (showArr == 0) {
                {
                    ResponsiveHelpMessage('null',".varTitle",'e',helparr[0],false,7000)
                }
        }

        else if (showArr == 1) {
            {
                ResponsiveHelpMessage('#silk', "null", 'w', helparr[1], false, 6000)
            }
        }
        else if (showArr == 2) {
            {
                ResponsiveHelpMessage('#glassRodCanvaSec', "null", 'n', helparr[2], false, 6000)
            }
        }
        else if (showArr == 3) {
            {
                ResponsiveHelpMessage('#silkThree', "null", 'w', helparr[3], false, 6000)
            }
        }
        else if (showArr == 4) {
            {
                ResponsiveHelpMessage('#woolen ', "null", 'w', helparr[4], false, 6000)
            }
        }
        else if (showArr == 5) {
            {
                ResponsiveHelpMessage('#ebonRodCanvaSec', "null", 'n', helparr[5], false, 6000)
            }
        }
        else if (showArr == 6) {
            {
                ResponsiveHelpMessage('#woolenThree', "null", 'w', helparr[6], false, 6000)
            }
        }
        else if (showArr == 7) {
            {
                ResponsiveHelpMessage('#next', "null", 'w', helparr[7], false, 6000)
            }
        }
        else if (showArr == 8) {
            {
                ResponsiveHelpMessage('#inference', "null", 'e', helparr[8], false, 6000)
            }
        }
        else if (showArr == 9) {
            {
                ResponsiveHelpMessage('#simReset', "null", 's', helparr[9], false, 6000)
            }
        }
        else if (showArr == 10) {
            {
                ResponsiveHelpMessage('#glassebonsilk', "null", 'n', helparr[1], false, 6000)
            }
        }
        else if (showArr == 11) {
            {
                ResponsiveHelpMessage('#glassebonRodCanvaSec', "null", 'n', helparr[2], false, 6000)
            }
        }
        else if (showArr == 12) {
            {
                ResponsiveHelpMessage('#glassebonwoolen', "null", 'w', helparr[10], false, 6000)
            }
        }
        
    });
    $('#inference').bind('click', function () {
        tripFlag = true;
        $("#zoom1,#zoom2,#zoom3").css({"display":"none"})
        if (inferenceArr == 0) {
            gls=true;
            showArr=0;
            ResponsiveHelpMessage('#inference', "null", 'e', inferArr[0], false, 6000)
            if(gls==true && ebn==true){
                $("#eboRodSel,#glassRodSel").attr("disabled", true);
                $("#next").css("display", "block");
                showArr = 7
            }
            else if(gls==true){
                $("#eboRodSel").attr("disabled", false);
                            $("#eboRodSel").css("pointer-events", "auto");

           }
           else {
               $("#glassRodSel").attr("disabled", false);
               $("#glassRodSel").css("pointer-events", "auto");

           }
        }
        else if (inferenceArr == 1) {
            ebn=true;
            showArr=0;
            if(gls==true && ebn==true){
                $("#eboRodSel,#glassRodSel").attr("disabled", true);
                $("#next").css("display", "block");
                showArr=7;              
            }
            else if(gls==true){
                 $("#eboRodSel").attr("disabled", false);
                             $("#eboRodSel").css("pointer-events", "auto");
            }
            else {
                $("#glassRodSel").attr("disabled", false);
                $("#glassRodSel").css("pointer-events", "auto");
            }
            ResponsiveHelpMessage('#inference', "null", 'e', inferArr[1], false, 6000)

        }
        else if (inferenceArr == 2) {
            if(count==2){
                showArr = 9;
                setTimeout(function(){
                    $("#finalObs").css({"display":"block"})
                    $("#inference").css({"display":"none"})
                },6000)
            }
            ResponsiveHelpMessage('#inference', "null", 'e', inferArr[2], false, 6000)

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

