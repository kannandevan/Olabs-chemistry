var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){

        console.log(help)
  
        
        
        if(help==0) {
            {
                ResponsiveHelpMessage('#changeInLength',"null",'e',FirstHelplinstruction,false,6000)

            }
        }
        else if(help==1) {
            {
              
                ResponsiveHelpMessage('#JourneyLength',"null",'e',SecondHelplinstruction,false,6000)

               
            }
        }
        if(help==2) {
            {
                ResponsiveHelpMessage('#StringWithoutDrag',"null",'s',Dragelement,false,6000)
            }
        }
        if(help==3) {
            {
                ResponsiveHelpMessage('#firstPagebutton',"null",'e',commonclick,false,6000)
            }
        }

        if(help==4) {
            {
                // ResponsiveHelpMessage('#resultwindow',"null",'n',calculateval,false,6000)

                ResponsiveHelpMessage('#Theinputtime',"null",'n',firtResulthelp,false,3500)

                // setTimeout(() => {

                // 
                // setTimeout(() => {

                //    
                        
                //     }, 4000);
                    
                // }, 4000);

             

            }
        }
        if(help==17){
            ResponsiveHelpMessage('#Theinputjourney',"null",'n',SecondResulthelp,false,3500)
        }
        if(help==18){
            ResponsiveHelpMessage('#firtsResult',"null",'n',ThirdResulthelp,false,3500)
        }

        if(help==65) {
            {
                // ResponsiveHelpMessage('#resultwindow',"null",'n',calculateval,false,6000)

                ResponsiveHelpMessage('#Theinputlength',"null",'n',firtResulthelp2,false,3500)

                // setTimeout(() => {

                // ResponsiveHelpMessage('#Theinputtimeperiod',"null",'n',SecondResulthelp2,false,3500)
                // setTimeout(() => {

                //     ResponsiveHelpMessage('#SecondResult',"null",'n',ThirdResulthelp2,false,3500)
                        
                //     }, 4000);
                    
                // }, 4000);

             

            }
        }
        if(help==19) {
            {
                ResponsiveHelpMessage('#Theinputtimeperiod',"null",'n',SecondResulthelp2,false,3500)
            }
        }
        if(help==20) {
            {
                ResponsiveHelpMessage('#SecondResult',"null",'n',ThirdResulthelp2,false,3500)
            }
        }



        if(help==78) {
            {
                ResponsiveHelpMessage('#CheckResult',"null",'n',CheckResult,false,6000)
            }
        }



        if(help==5) {
            {
                ResponsiveHelpMessage('#firstPagebutton',"null",'n',CommonNext,false,6000)
            }
        }
        if(help==6) {
            {
                ResponsiveHelpMessage('#inference',"null",'e',clickinfernce,false,6000)
            }
        }
        if(help==7) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',reset,false,6000)
            }
        }




    });





    $("#inference").click(function(){
        ResponsiveHelpMessage('#inference',"null",'e',theInferencemsg,false,6000)
        help=7;

    })

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