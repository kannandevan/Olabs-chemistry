var tripFlag=false;
var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
      //  alert(helpcount)
      if(QuestionDisplayStatus == true)
      {
        ResponsiveHelpMessage('null',".borderTop",'n',"Choose the correct answer to continue",false,4000)
      }
      else
      {
        tripFlag = true;
        if(helpcount==0) {
            {
                ResponsiveHelpMessage('#compass1',"null",'e',helpMsg[0],false,4000)
            }
        }
        else if(helpcount==1) {
            {
                ResponsiveHelpMessage('#sliderRotate',"null",'s',helpMsg[1],false,4000)
            }
        }
        else if(helpcount==2) {
            {
                ResponsiveHelpMessage('#marker',"null",'w',helpMsg[2],false,4000)
            }
        }
        else if (helpcount==3){
            {
                ResponsiveHelpMessage('#c2',"null",'s',helpMsg[3],false,4000)
            }
        }
        else if (helpcount==4){
            {
                ResponsiveHelpMessage('#marker',"null",'s',helpMsg[4],false,4000)
            }
        }
        else if (helpcount==5){
            {
                ResponsiveHelpMessage('#compass1',"null",'s',helpMsg[5],false,4000)
            }
        }
        else if (helpcount==6){
            {
                ResponsiveHelpMessage('#sliderRotate2',"null",'s',helpMsg[1],false,4000)
            }
        }
        else if (helpcount==7){
            {
                ResponsiveHelpMessage('#inference',"null",'e',helpMsg[6],false,4000)
            }
        }
        else if (helpcount==8){
            {
                ResponsiveHelpMessage('#nextButton1',"null",'w',helpMsg[7],false,1000)
                removeTrip()
            }
        }
        else if (helpcount==9){
            {
                ResponsiveHelpMessage('#dipNeedle',"null",'e',helpMsg[8],false,4000)
            }
        }
        else if (helpcount==10){
            {
                ResponsiveHelpMessage('#dipsliderRotate',"null",'s',helpMsg[9],false,4000)
                // $("#inference").hide();
            }
        }
        else if (helpcount==11){
            {
                ResponsiveHelpMessage('#nextButton2',"null",'w',helpMsg[7],false,4000)
            }
        }
        else if (helpcount==12){
            {
                ResponsiveHelpMessage('#nextButton3',"null",'w',helpMsg[7],false,4000)
            }
        }
        else if (helpcount==13){
            {
                ResponsiveHelpMessage('#option1',"null",'s',helpMsg[10],false,4000)
            }
        }
        else if (helpcount==14){
            {
                ResponsiveHelpMessage('#nextButton4',"null",'w',helpMsg[7],false,4000)
            }
        }
        else if (helpcount==15){
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[11],false,4000)
            }
        }
        else if (helpcount==16){
            {
                ResponsiveHelpMessage('#option2',"null",'s',helpMsg[10],false,4000)
            }
        }
      }

    });
    $('#inference').bind('click',function(){
		tripFlag = true;                                                                                                              
		if (inferenceCount == 0) {
			ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[0],false,8000)
             $("#nextButton1").show();
             $("#sliderRotate2").val("359")
             helpcount = 8;
            //  $("#sliderRotate2").prop('disabled',true);
             
		}  
        else if (inferenceCount == 1){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[1],false,8000)
            $("#dipsliderRotate").prop('disabled',false);
            helpcount =10;
            tempCount = 1;
            $("#nextButton2").css({"display":"none"})
        }
        else if (inferenceCount == 2){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[2],false,8000)
            $("#dipsliderRotate").prop('disabled',false);
            // helpcount =10;
            // tempCount = 2;
            $("#nextButton2").css({"display":"block"}) 
              helpcount =11;
              tempCount = 0;
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


