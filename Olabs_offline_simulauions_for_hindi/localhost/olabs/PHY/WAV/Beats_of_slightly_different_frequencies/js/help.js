var tripFlag=false;
var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
      //  alert(helpcount)
        tripFlag = true;
        if(helpcount==0) {
            {
                ResponsiveHelpMessage('#dropdown1',"null",'e',helpMsg[0],false,6000)
            }
        }
        else if (helpcount==1){
            {
                ResponsiveHelpMessage('#dropdown2',"null",'e',helpMsg[1],false,6000)
            }
        }
        else if(helpcount==2) {
            {
                ResponsiveHelpMessage('.steel_rod',"null",'s',helpMsg[2],false,6000)
            }
        }
        else if(helpcount==3) {
            {
                ResponsiveHelpMessage('#check',"null",'e',helpMsg[3],false,6000)
            }
        }
        else if (helpcount==4){
            {
                ResponsiveHelpMessage('#inferenceImg',"null",'e',helpMsg[4],false,6000)
            }
        }
        else if (helpcount==5){
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[5],false,6000)
            }
        }
    });
    $('#inferenceImg').bind('click',function(){
        // $("#dropdown1,#dropdown2").attr("disabled", false); 
        $("#dropdown2").attr("disabled", false); 
        if(dropCnt == 3)
        {
            $("select option[value ='440']").prop('disabled',true);
            
            $("#dropdown1").attr("disabled", false); 
            dropCnt++;
        }
        if(flag==1){
            $("#dropdown1,#dropdown2").attr("disabled", false); 
        }
		tripFlag = true;                                                                                                              
		if (inferenceCount == 0) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferenceMsg[0],false,10000)
            helpcount = 0;
            if(selectCount==4){
                helpcount = 5;
            }
            if((dropCnt == 3)||(dropCnt == 1)||(dropCnt == 2)){
                helpcount = 1;
                // dropCnt++;
            }
            // if(dropCnt==4){
            //     helpcount = 5;
            // }

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