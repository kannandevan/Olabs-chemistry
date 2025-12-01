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
                ResponsiveHelpMessage('#wholeBeakerA',"null",'n',helpMsg[0],false,8000)
            }
            else if(help==1) 
            {
                ResponsiveHelpMessage('#CHINADISH',"null",'n',helpMsg[1],false,8000)
            }
            else if(help==2) 
            {
                ResponsiveHelpMessage('#BurnerOn',"null",'s',helpMsg[2],false,8000)
            }
            else if(help==3) 
            {
                ResponsiveHelpMessage('#inference1',"null",'e',helpMsg[3],false,8000)
            }
            else if(help==4) 
            {
                ResponsiveHelpMessage('#nextbtn',"null",'s',helpMsg[4],false,8000)
            }
            else if(help==5) 
            {
                ResponsiveHelpMessage('#SPIRITBOTTLECAP',"null",'w',helpMsg[5],false,8000)
            }
            else if(help==6) 
            {
                ResponsiveHelpMessage('#SPIRITBOTTLE',"null",'n',helpMsg[6],false,8000)
            }
                else if(help==7) 
                {
                    ResponsiveHelpMessage('#spiritChina',"null",'n',helpMsg[7],false,8000)
                }
                else if(help==8) 
                {
                    ResponsiveHelpMessage('#inference2',"null",'e',helpMsg[8],false,8000)
                }
                else if(help==9) 
                {
                    ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[9],false,8000)
                }
                else if(help==10) 
                {
                    ResponsiveHelpMessage('#nextbtn2',"null",'s',helpMsg[10],false,8000)
                }
                
    });


    $('#inference1').bind('click', function () {
        setTimeout(function(){
          
            help = 4;
            nextButton()
         
        },500)


            tripFlag = 1;
            trip = new Trip([{
                sel: $('#inference1'),
                position: 'e',
                content: Inference_msg[0],
                expose: false,
                delay: 8000
            },
        
            ]);
            trip.start();
            window.trip = trip;
        })
        $('#inference2').bind('click', function () {
            setTimeout(function(){
                help = 10;
            $("#nextbtn2").css({
                'display': 'block'
            });
        },500)

            tripFlag = 1;
            trip = new Trip([{
                sel: $('#inference2'),
                position: 'e',
                content: Inference_msg[1],
                expose: false,
                delay: 9000
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