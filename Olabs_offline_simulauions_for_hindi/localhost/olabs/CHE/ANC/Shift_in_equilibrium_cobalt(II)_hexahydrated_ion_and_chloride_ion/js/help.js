var trip;
var tripFlag=false;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
         removeTrip();
       
        tripFlag = true;
        if(help==0) {
            {
                ResponsiveHelpMessage('#ccDiv',"null",'n',helpMsg[0],false,6000)
            }
        }
       
        else if(help==5) {
            {
                ResponsiveHelpMessage('#acetoneCap',"null",'w',helpMsg[5],false,6000)
            }
        }
        else if(help==6) {
            {
                ResponsiveHelpMessage('#acetoneDiv',"null",'w',helpMsg[6],false,6000)
            }
        }
        else if(help==7) {
            {
                ResponsiveHelpMessage('#acetoneBottle',"null",'w',helpMsg[7],false,6000)
            }
        }
        else if(help==8) {
            {
                ResponsiveHelpMessage('#acetoneBottle',"null",'w',helpMsg[8],false,6000)
            }
        }
        else if(help==9) {
            {
                ResponsiveHelpMessage('#acetoneBottle',"null",'w',helpMsg[9],false,6000)
            }
        }
        else if(help==10) {
            {
                ResponsiveHelpMessage('#acetoneBottle',"null",'w',helpMsg[10],false,6000)
            }
        }
        else if(help==11) {
            {
                ResponsiveHelpMessage('#dwDiv',"null",'n',helpMsg[11],false,6000)
            }
        }
        else if(help==12) {
            {
                ResponsiveHelpMessage('#dwDiv',"null",'n',helpMsg[12],false,6000)
            }
        }
        else if(help==13) {
            {
                ResponsiveHelpMessage('#dwDiv',"null",'n',helpMsg[13],false,6000)
            }
        }
        else if(help==14) {
            {
                ResponsiveHelpMessage('#dwDiv',"null",'n',helpMsg[14],false,6000)
            }
        }
        else if(help==15) {
            {
                ResponsiveHelpMessage('#inf',"null",'e',helpMsg[15],false,1000)
            }
        }
        else if(help==16) {
            {
                ResponsiveHelpMessage('.nxtbutton',"null",'w',helpMsg[16],false,6000)
            }
        }
        else if(help==17) {
            {
                ResponsiveHelpMessage('#scn2_ccDiv',"null",'n',helpMsg[17],false,6000)
            }
        }
        else if(help==18) {
            {
                ResponsiveHelpMessage('#scn2_dwDiv',"null",'n',helpMsg[18],false,6000)
            }
        }
        else if(help==19) {
            {
                ResponsiveHelpMessage('#X_div',"null",'n',helpMsg[19],false,6000)
            }
        }
        else if(help==20) {
            {
                ResponsiveHelpMessage('#scn2_dwDiv',"null",'n',helpMsg[20],false,6000)	
            }
        }
        else if(help==21) {
            {
                ResponsiveHelpMessage('#scn2_dwDiv',"null",'n',helpMsg[21],false,6000)
            }
        }
        else if(help==22) {
            {
                ResponsiveHelpMessage('#scn2_dwDiv',"null",'n',helpMsg[22],false,6000)
            }
        }
        else if(help==23) {
            {
                ResponsiveHelpMessage('#scn2_dwDiv',"null",'n',helpMsg[23],false,6000)
            }
        }
        else if(help==24) {
            {
                ResponsiveHelpMessage('#scn2_hclDiv',"null",'w',helpMsg[24],false,6000)
            }
        }
        else if(help==25) {
            {
                ResponsiveHelpMessage('#scn2_hclDiv',"null",'w',helpMsg[25],false,6000)
            }
        }
        else if(help==26) {
            {
                ResponsiveHelpMessage('#scn2_hclDiv',"null",'w',helpMsg[26],false,6000)
            }
        }
        else if(help==27) {
            {
                ResponsiveHelpMessage('#scn2_hclDiv',"null",'w',helpMsg[27],false,6000)
            }
        }
        else if(help==28) {
            {
                ResponsiveHelpMessage('#scn2_hclDiv',"null",'w',helpMsg[28],false,6000)
            }
        }
        else if(help==29) {
            {
                ResponsiveHelpMessage('#inf2',"null",'e',helpMsg[15],false,1000)
            }
        }
        else if(help==30) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[29],false,6000)
            }
        }

    });
    $('#inf').bind('click',function(){
        help=16;
		tripFlag = true;    
        ResponsiveHelpMessage('#inf',"null",'e',Inference_msg[0],false,10000)
	});
    $('#inf2').bind('click',function(){
        help=30;
		tripFlag = true;   
        ResponsiveHelpMessage('#inf2',"null",'e', Inference_msg[1],false,10000) 
            setTimeout(function(){
                removeTrip();
                $("#eqnDiv").css({'display':'block'});
                $("#inf2").css({'display':'none'});
            },12000);
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
function tripRemoveFunction()
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
    $(".trip-block ").css({display:"none"})
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
        tripRemoveFunction() 
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
        })
    })
}