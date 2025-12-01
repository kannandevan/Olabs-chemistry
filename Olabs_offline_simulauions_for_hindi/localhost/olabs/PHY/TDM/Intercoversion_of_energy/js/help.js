var trip;
var tripClickFlag=false;
$(document).ready(function() {					   
	// $('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click',function(){  
        // alert("from help file"+help)
        console.log(help)    
        tripClickFlag = true;
            if(help==0)
            {
                ResponsiveHelpMessage('#thread',"null",'n',helpMsg[0],false,8000)
            }
            else if(help==1) 
            {
                ResponsiveHelpMessage('#wheel',"null",'n',helpMsg[1],false,8000)
            }
            else if(help==2) 
            {
                ResponsiveHelpMessage('#clickDiv1',"null",'s',helpMsg[2],false,8000)
            }
            else if(help==3) 
            {
                ResponsiveHelpMessage('#clickDiv2',"null",'n',helpMsg[3],false,8000)
            }
            else if(help==4) 
            {
                ResponsiveHelpMessage('null',".OptionTwo",'s',helpMsg[4],false,8000)
            }
            else if(help==5) 
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[5],false,8000)
            }
            else if(help==6) 
            {
                ResponsiveHelpMessage('null',".Quize",'s',helpMsg[6],false,8000)
            }
            else if(help==7) 
            {
                ResponsiveHelpMessage('#Inference',"null",'e',helpMsg[7],false,8000)
            }
            else if(help==99) 
            {
                // ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[5],false,8000)
            }
         
    });


    $('#Inference').bind('click', function () {
    //    help=18;
            tripFlag = 1;
            trip = new Trip([{
                sel: $('#Inference'),
                position: 'e',
                content: Inference_msg[0],
                expose: false,
                delay: 80000
            },
        
            ]);
            trip.start();
            window.trip = trip;
        })
   
      
});
// responsive help functions tripRemoveFunction() and ResponsiveHelpMessage(elementId,elementClass,positionParam,message,exposeFlag,delayValue)
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