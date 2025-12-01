var tripFlag=false;
var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
        // console.log(helpcount)
        tripFlag = true;
        if(helpcount==0) {
            {
                ResponsiveHelpMessage('#hand_trans',"null",'s',helpMsg[0],false,6000)
            }
        }
        else if(helpcount==1) {
            {
                ResponsiveHelpMessage('#Inference',"null",'e',helpMsg[1],false,6000)
            }
        }
        else if(helpcount==2) {
            {
                ResponsiveHelpMessage('#next',"null",'s',helpMsg[2],false,1000)
            }
        }
        else if (helpcount==3){
            {
                ResponsiveHelpMessage('#handArea2',"null",'s',helpMsg[0],false,6000)
            }
        }
        else if (helpcount==4){
            {
                ResponsiveHelpMessage('#Inference',"null",'e',helpMsg[1],false,6000)
                // $("#simHelp").css({
                //     "pointer-events": "none",
                //     "cursor": "none"
                //       });
            }
        }
        else if (helpcount==5){
            {
                ResponsiveHelpMessage('#next2',"null",'s',helpMsg[2],false,6000)
            }
        }
        else if (helpcount==6){
            {
                ResponsiveHelpMessage('null',".questionText",'n',helpMsg[8],false,6000)
            }
            
        }
        else if (helpcount==7){
            {
                ResponsiveHelpMessage('#spring2',"null",'s',helpMsg[3],false,6000)
            }
        }
        else if (helpcount==8){
            {
                ResponsiveHelpMessage('#slinky3',"null",'n',helpMsg[4],false,6000)
            }
        }
        else if (helpcount==9){
            {
                ResponsiveHelpMessage('#hand_trans3',"null",'s',helpMsg[0],false,6000)
            }
        }
        else if (helpcount==10){
            {
                ResponsiveHelpMessage('#Inference',"null",'e',helpMsg[1],false,6000)
            }
        }
        else if (helpcount==11){
            {
                ResponsiveHelpMessage('#next3',"null",'s',helpMsg[2],false,6000)
            }
        }
        else if (helpcount==12){
            {
                ResponsiveHelpMessage('#slinky4',"null",'s',helpMsg[5],false,6000)
            }
        }
        else if (helpcount==13){
            {
                ResponsiveHelpMessage('#spring4',"null",'s',helpMsg[6],false,6000)
            }
        }
        else if (helpcount==14){
            {
                ResponsiveHelpMessage('#hand_trans4',"null",'s',helpMsg[0],false,6000)
            }
        }
        else if (helpcount==15){
            {
                ResponsiveHelpMessage('#Inference',"null",'e',helpMsg[1],false,6000)
            }
        }
        else if (helpcount==16){
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[7],false,6000)
            }
        }
    
    });
    $('#Inference').bind('click',function(){
		tripFlag = true;                                                                                                              
		if (inferenceCount == 0) {
			ResponsiveHelpMessage('#Inference',"null",'e',inferenceMsg[0],false,10000)
            $("#next").show();
            helpcount = 2;
		}  
        else if (inferenceCount == 1){
            ResponsiveHelpMessage('#Inference',"null",'e',inferenceMsg[1],false,10000)
            $("#next2").show()
            helpcount = 5;
        }
        else if (inferenceCount == 2){
            ResponsiveHelpMessage('#Inference',"null",'e',inferenceMsg[2],false,10000)
            $("#next3").show()
            helpcount = 11;
        }
        else if (inferenceCount == 3){
            ResponsiveHelpMessage('#Inference',"null",'e',inferenceMsg[3],false,10000)
            helpcount = 16;
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