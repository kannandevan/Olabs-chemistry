// var trip;
var tripFlag = false;
var trip;
// var tripClickFlag=false;
$(document).ready(function () {
    // $('#olabmenuBar li:first-child a').html("HELP");
    $('#simHelp').bind('click', function () {
        // removeTrip();
        // $('.flex-container').css('overflow', 'hidden');
        tripFlag = true;
       
        // tripClickFlag=true;	
        if (help == 0) {
            {
                ResponsiveHelpMessage('#circule',"null",'w',helpMsg[0],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $('#circule'),
                //         position: 'w',
                //         content: helpMsg[0],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 1) {
            {
                ResponsiveHelpMessage('#spatulaDiv', "null", 'w', helpMsg[1], false, 5000)

            }
        }
        else if (help == 2) {
            {
                ResponsiveHelpMessage('#spatula',"null",'n',helpMsg[2],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#spatula"),
                //         position: 'n',
                //         content: helpMsg[2],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 3) {
            {
                ResponsiveHelpMessage('#megspatulaDiv', "null", 'w', helpMsg[3], false, 5000)
            }
        }
        else if (help == 4) {
            {
                ResponsiveHelpMessage('#megspatula',"null",'n',helpMsg[4],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#megspatula"),
                //         position: 'n',
                //         content: helpMsg[4],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 5) {
            {
                ResponsiveHelpMessage('#zincspatulaDiv', "null", 'w', helpMsg[5], false, 5000)
            }
        }
        else if (help == 6) {
            {
                ResponsiveHelpMessage('#zincspatula',"null",'n',helpMsg[6],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#zincspatula"),
                //         position: 'n',
                //         content: helpMsg[6],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 7) {
            {
                ResponsiveHelpMessage('#leadspatulaDiv', "null", 'w', helpMsg[7], false, 5000)
            }
        }
        else if (help == 8) {
            {
                ResponsiveHelpMessage('#leadspatula',"null",'n',helpMsg[8],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#leadspatula"),
                //         position: 'n',
                //         content: helpMsg[8],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 9) {
            {
                ResponsiveHelpMessage('#iornspatulaDiv', "null", 'w', helpMsg[9], false, 5000)
            }
        }
        else if (help == 10) {
            {
                ResponsiveHelpMessage('#iornspatula',"null",'n',helpMsg[10],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#iornspatula"),
                //         position: 'n',
                //         content: helpMsg[10],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 11) {
            {
                ResponsiveHelpMessage('#aluminspatulaDiv', "null", 'w', helpMsg[11], false, 5000)
            }
        }
        else if (help == 12) {
            {
                ResponsiveHelpMessage('#aluminspatula',"null",'n',helpMsg[12],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#aluminspatula"),
                //         position: 'n',
                //         content: helpMsg[12],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 13) {
            {
                ResponsiveHelpMessage('#copperspatulaDiv', "null", 'w', helpMsg[13], false, 5000)
            }
        }
        else if (help == 14) {
            {
                ResponsiveHelpMessage('#copperspatula',"null",'w',helpMsg[14],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#copperspatula"),
                //         position: 'w',
                //         content: helpMsg[14],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 15) {
            {
                ResponsiveHelpMessage('#NextOne',"null",'w',helpMsg[15],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#NextOne"),
                //         position: 'w',
                //         content: helpMsg[15],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 16) {
            {
                ResponsiveHelpMessage('#BurnerOn',"null",'e',helpMsg[16],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#BurnerOn"),
                //         position: 'e',
                //         content: helpMsg[16],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 17) {
            {
                ResponsiveHelpMessage('#waterHelpDiv',"null",'e',helpMsg[17],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#waterHelpDiv"),
                //         position: 'e',
                //         content: helpMsg[17],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 18) {
            {
                ResponsiveHelpMessage('#megspatulaDivTwo', "null", 'n', helpMsg[18], false, 8000)
            }
        }
        else if (help == 19) {
            {
                ResponsiveHelpMessage('#megspatulaTwo',"null",'n',helpMsg[19],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#megspatulaTwo"),
                //         position: 'n',
                //         content: helpMsg[19],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 20) {
            {
                ResponsiveHelpMessage('#zincspatulaDivTwo', "null", 'n', helpMsg[20], false, 8000)
            }
        }
        else if (help == 21) {
            {
                ResponsiveHelpMessage('#zincspatulaTwo',"null",'n',helpMsg[21],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#zincspatulaTwo"),
                //         position: 'n',
                //         content: helpMsg[21],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 22) {
            {
                ResponsiveHelpMessage('#leadspatulaDivTwo', "null", 'n', helpMsg[22], false, 8000)
            }
        }
        else if (help == 23) {
            {
                ResponsiveHelpMessage('#leadspatulaTwo',"null",'n',helpMsg[23],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#leadspatulaTwo"),
                //         position: 'n',
                //         content: helpMsg[23],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        //
        else if (help == 24) {
            {
                ResponsiveHelpMessage('#iornspatulaDivTwo', "null", 'n', helpMsg[24], false, 8000)
            }
        }
        else if (help == 25) {
            {
                ResponsiveHelpMessage('#iornspatulaTwo',"null",'n',helpMsg[25],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#iornspatulaTwo"),
                //         position: 'n',
                //         content: helpMsg[25],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 26) {
            {
                ResponsiveHelpMessage('#aluminspatulaDivTwo', "null", 'n', helpMsg[26], false, 8000)
            }
        }
        else if (help == 27) {
            {
                ResponsiveHelpMessage('#aluminspatulaTwo',"null",'n',helpMsg[27],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#aluminspatulaTwo"),
                //         position: 'n',
                //         content: helpMsg[27],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 28) {
            {
                ResponsiveHelpMessage('#copperspatulaDivTwo', "null", 'n', helpMsg[28], false, 8000)
            }
        }
        else if (help == 29) {
            {
                ResponsiveHelpMessage('#copperspatulaTwo',"null",'w',helpMsg[29],false,8000)
                // trip = new Trip([
                //     {
                //         sel: $("#copperspatulaTwo"),
                //         position: 'w',
                //         content: helpMsg[29],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 30) {
            {
                ResponsiveHelpMessage('#NextTwo',"null",'w',helpMsg[30],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#NextTwo"),
                //         position: 'w',
                //         content: helpMsg[30],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 31) {
            {
                ResponsiveHelpMessage('#testTubeH',"null",'n',helpMsg[31],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#testTubeH"),
                //         position: 'n',
                //         content: helpMsg[31],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 32) {
            {
                ResponsiveHelpMessage('#glasswool',"null",'n',helpMsg[32],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#glasswool"),
                //         position: 'n',
                //         content: helpMsg[32],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 33) {
            {
                ResponsiveHelpMessage('#cork',"null",'n',helpMsg[33],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#cork"),
                //         position: 'n',
                //         content: helpMsg[33],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 34) {
            {
                ResponsiveHelpMessage('#delTube',"null",'n',helpMsg[34],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#delTube"),
                //         position: 'n',
                //         content: helpMsg[34],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 35) {
            {
                ResponsiveHelpMessage('#NextThree',"null",'w',helpMsg[35],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#NextThree"),
                //         position: 'w',
                //         content: helpMsg[35],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 36) {
            {
                ResponsiveHelpMessage('#thzinc',"null",'n',helpMsg[36],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#thzinc"),
                //         position: 'n',
                //         content: helpMsg[36],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 37) {
            {
                ResponsiveHelpMessage('#scthreBurnerOn',"null",'e',helpMsg[37],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#scthreBurnerOn"),
                //         position: 'e',
                //         content: helpMsg[37],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 38) {
            {
                ResponsiveHelpMessage('#thiorn',"null",'n',helpMsg[38],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#thiorn"),
                //         position: 'n',
                //         content: helpMsg[38],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 39) {
            {
                ResponsiveHelpMessage('#thaluminium',"null",'n',helpMsg[39],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#thaluminium"),
                //         position: 'n',
                //         content: helpMsg[39],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 40) {
            {
                ResponsiveHelpMessage('#helpDivLead',"null",'n',helpMsg[40],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#helpDivLead"),
                //         position: 'n',
                //         content: helpMsg[40],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 41) {
            {
                ResponsiveHelpMessage('#BurnerOnThree',"null",'e',helpMsg[41],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#BurnerOnThree"),
                //         position: 'e',
                //         content: helpMsg[41],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 42) {
            {
                ResponsiveHelpMessage('#thcopper',"null",'n',helpMsg[42],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#thcopper"),
                //         position: 'n',
                //         content: helpMsg[42],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        else if (help == 43) {
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[43],false,5000)
                // trip = new Trip([
                //     {
                //         sel: $("#simReset"),
                //         position: 's',
                //         content: helpMsg[43],
                //         expose: false,
                //         delay: 5000
                //     }
                // ]);
                // trip.start();
                // window.trip = trip;
            }
        }
        // trip.start(); 
        // window.trip = trip;	
    });
});


// function tripRemoveFunction() {
//     var trip = new Trip([
//         {
//             sel: $('#mainDiv'),
//             position: 'n',
//             content: "",
//             expose: true,
//             delay: 0
//         }
//     ]);
//     trip.start();
//     $(".trip-block ").css({ display: "none" })
//     trip.stop();
// }
// function ResponsiveHelpMessage(elementId, elementClass, positionParam, message, exposeFlag, delayValue) {
//     var finalElementName;
//     if (elementId == "null")
//         finalElementName = elementClass
//     else
//         finalElementName = elementId;
//     setTimeout(function () {
//         tripRemoveFunction()
//         setTimeout(function () {
//             var trip = new Trip([
//                 {
//                     sel: $(finalElementName),
//                     position: positionParam,
//                     content: message,
//                     expose: exposeFlag,
//                     delay: delayValue
//                 }
//             ]);
//             $(".trip-block ").css({ display: "block" })
//             trip.start();
//             window.trip = trip;
//         })
//     })
// }

// function tripRemoveFunction() {
//     var trip = new Trip([{
//         sel: $('#mainDiv'),
//         position: 's',
//         content: "",
//         expose: true,
//         delay: 0
//     }]);
//     trip.start();
//     $(".trip-block ").css({ display: "none" })
//     trip.stop();
// }

// function ResponsiveHelpMessage(elementId, elementClass, positionParam, message, exposeFlag, delayValue) {
//     var finalElementName;
//     if (elementId == "null")
//         finalElementName = elementClass
//     else finalElementName = elementId;
//     setTimeout(function () {
//         tripRemoveFunction()
//         setTimeout(function () {
//             var trip = new Trip([
//                 {
//                     sel: $(finalElementName),
//                     position: positionParam,
//                     content: message,
//                     expose: exposeFlag,
//                     delay: delayValue
//                 }]);
//             trip.start();
//             window.trip = trip;
//         })
//     })
// }


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