var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){

  console.log(help)
        if(help==0) {
                ResponsiveHelpMessage('#scale',"null",'n',FirstHelpInstruction,false,6000)
        }
        else if(help==1) {
                ResponsiveHelpMessage('#pendulums',"null",'w',SecondhelpInstruction,false,6000)    
        }
                else if(help==2) {
                ResponsiveHelpMessage('#thedragabbleinsidedragDiv',"null",'w',ThirdhelpInstruction,false,6000)
        }
        else if(help==3) {
                ResponsiveHelpMessage('#InferenceButton',"null",'e',Clickoninference,false,6000)
        }
        else if(help==4) {
                ResponsiveHelpMessage('.questionTextAlignment',"null",'n',answerhelp,false,4000)
        }
        else if(help==5) {
                ResponsiveHelpMessage('#simReset',"null",'s',reset,false,6000)
        }
        else if(help==6) {
            ResponsiveHelpMessage('#FirstNext',"null",'n',nextbutton,false,6000)
    }
        else if(help==99) {
            ResponsiveHelpMessage('#InferenceButton',"null",'e',Clickoninference,false,6000)
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