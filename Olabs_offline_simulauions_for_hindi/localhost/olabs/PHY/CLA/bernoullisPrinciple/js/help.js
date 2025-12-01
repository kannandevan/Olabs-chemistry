var trip;
var tripFlag=false;
var inferOne=0, inferTwo=0, inferThree=0, inferFour=0, inferFive=0;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
        removeTrip();
        tripFlag = true;
        if(showArr==0) {
            {
                ResponsiveHelpMessage('#next',"null",'s',helparr[0],false,7000)
            }
        }
       
        else if(showArr==1) {
            {
                ResponsiveHelpMessage('null',".questionText",'n',helparr[1],false,7000)
            }
        }
        else if(showArr==2) {
            {
                ResponsiveHelpMessage('#mouth',"null",'e',helparr[2],false,7000)
            }
        }
        else if(showArr==3) {
            {
                ResponsiveHelpMessage('#next1',"null",'w',helparr[3],false,7000)
            }
        }
        else if(showArr==4) {
            {
                ResponsiveHelpMessage('#actTypes',"null",'e',helparr[4],false,7000)
            }
        }
        else if(showArr==5) {
            {
                ResponsiveHelpMessage('#mouth1',"null",'e',helparr[6],false,7000)
            }
        }
		else if(showArr==6) {
            {
                ResponsiveHelpMessage('#inferenceImg',"null",'e',helparr[13],false,7000)
            }
        }
        else if(showArr==7) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helparr[12],false,7000)
            }
        }
        else if(showArr==8) {
            {
                ResponsiveHelpMessage('#piston',"null",'w',helparr[9],false,7000)
            }
        }
        else if(showArr==9) {
            {
                ResponsiveHelpMessage('#burnerKnob',"null",'e',helparr[10],false,7000)
            }
        }
        else if(showArr==10) {
            {
                ResponsiveHelpMessage('#holeClose',"null",'e',helparr[11],false,7000)
            }
        }
        else if(showArr==11) {
            {
                ResponsiveHelpMessage('null',".questionText",'n',helparr[5],false,7000)
            }
        }
        else if(showArr==12) {
            {
                ResponsiveHelpMessage('#mouth2',"null",'w',helparr[8],false,7000)
            }       
        }
//         else if(count==4 &&  inferOne==1 && inferTwo==1 &&  inferThree==1 &&  inferFour==1  &&  inferFive==1)
// {
//     alert("reset")
// }
    });
    $('#inferenceImg').bind('click',function(){
        removeTrip();
        showArr=3;
		tripFlag = true;  
		if (inferenceArr == 0) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[0],false,10000)
            // inferOne=1;
		}  
		else if (inferenceArr == 1) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[1],false,10000)
            // inferTwo=1;

		}  
		else if (inferenceArr == 2) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[2],false,10000)
inferThree=1;
		}  
		else if (inferenceArr == 3) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[3],false,10000)
inferFour=1;
		}  
		else if (inferenceArr == 4) {
			ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[4],false,10000)
inferFive=1
		}  
		// else if (inferenceArr == 5) {
		// 	ResponsiveHelpMessage('#inferenceImg',"null",'e',inferArr[5],false,10000)

		// }  
	});
    
});

function tripRemoveFunction() {
    var trip = new Trip([
        {
            sel: $('#mainDiv'),
            position: 'n',
            content: "",
            expose: true,
            delay: 0
        }
    ]);
    trip.start();
    $(".trip-block ").css({ display: "none" })
    trip.stop();
}
function ResponsiveHelpMessage(elementId, elementClass, positionParam, message, exposeFlag, delayValue) {
    var finalElementName;
    if (elementId == "null")
        finalElementName = elementClass
    else
        finalElementName = elementId;
    setTimeout(function () {
        tripRemoveFunction()
        setTimeout(function () {
            var trip = new Trip([
                {
                    sel: $(finalElementName),
                    position: positionParam,
                    content: message,
                    expose: exposeFlag,
                    delay: delayValue
                }
            ]);
            $(".trip-block ").css({ display: "block" })
            trip.start();
            window.trip = trip;
        })
    })
}
