var help = 0,Inference_msg;
//FLAME
var yy_imglength = 15;
var yy_imgstart = 1;
var yy_imgPath =
"../CHE/INC/Process_of_Evaporation/images/Flame/";
var yy_img="Flame ani1000"
var Imageflame = [];
for (i = 1; i <= yy_imglength; i++) {
    if (i < 10) {
        Imageflame.push(yy_imgPath + "Flame ani1000" + i + ".png");
    } else if (i < 100 && i > 9) {
        Imageflame.push(yy_imgPath + "Flame ani100" + i + ".png");
    }
   
}
//spirit EVAPORATION
var zz_imglength = 60;
var zz_imgstart = 1;
var zz_imgPath =
"../CHE/INC/Process_of_Evaporation/images/SPIRITEVAPORATION/";
var zz_img="SPIRITEVAPORATION000"
var ImageSpirit = [];
for (i = 1; i <= zz_imglength; i++) {
    if (i < 10) {
        ImageSpirit.push(zz_imgPath + "SPIRITEVAPORATION000" + i + ".png");
    } else if (i < 100 && i > 9) {
        ImageSpirit.push(zz_imgPath + "SPIRITEVAPORATION00" + i + ".png");
    }
   
}
//TIMER

var t_imglength = 50;
var t_imgstart = 1;
var t_imgPath =
"../CHE/INC/Process_of_Evaporation/images/TIMER/";
var t_img="CLOCK000"
var Imagtimer = [];
for (i = 1; i <= t_imglength; i++) {
    if (i < 10) {
        Imagtimer.push(t_imgPath + "CLOCK000" + i + ".png");
    } else if (i < 100 && i > 9) {
        Imagtimer.push(t_imgPath + "CLOCK00" + i + ".png");
    }
   
}
//WATER BOILING
var xx_imgLength = 87;


var xx_imgPath =
"../CHE/INC/Process_of_Evaporation/images/WATERBOILINGANDDRAINING/";
var xx_img = "WATEREVAPORATION000";
var Imageboil = [];

for (i = 1; i <= xx_imgLength; i++) {
    if (i < 10) {
        Imageboil.push(xx_imgPath + "WATEREVAPORATION000" + i + ".png");
    } else if (i < 100 && i > 9) {
        Imageboil.push(xx_imgPath + "WATEREVAPORATION00" + i + ".png");
            }
           
        }
    
$(document).ready(function () {
    $("#simReset").click(function () {
     
        removeTrip()
     
    });

  
    help = 0; 
//    console.log(help)
    gt = new Gettext({ 'domain': 'messages' });
    //helpmsg array
    $("#expName").html(gt.gettext("Process of Evaporation"));

    $("#inferenceText").html(gt.gettext("Discussion"))
    $("#inferenceText1").html(gt.gettext("At all temperatures, including room temperature, all liquids undergo evaporation. Nevertheless, the evaporation of liquids with higher boiling points occurs at a significantly slower pace and may not be readily observable. Conversely, liquids with lower boiling points experience rapid evaporation."))

    $("#nextbtn2").html(gt.gettext("Next"))
    $("#infotext2").html(gt.gettext("Spirit is a volatile liquid and has a lower boiling point when compared to water. Hence, spirit evaporates faster than water at room temperature."))

    $("#text1").html(gt.gettext("Be careful while handling burner"))
    $("#infotext1").html(gt.gettext("The liquid phase changes to gaseous phase, as water evaporates on heating. The molecules move and vibrate so quickly that they escape into the atmosphere as molecules of water vapour."))

    helpMsg = [
        gt.gettext("Drag and drop the<br>beaker containing<br>50mL  of water towards<br>the China dish"),
        gt.gettext("Drag and drop the China dish<br>containing 50mL  of water<br>onto the tripod stand"),
        gt.gettext("Click the burner knob<br>to turn on the flame"),
        gt.gettext("Click on Inference<br>icon to see the inference<br>message"),    
        gt.gettext("Click on the<br>Next button"), 
        gt.gettext("Click on the cap to<br>open the Spirit bottle"),
        gt.gettext("Drag and drop the<br>bottle towards the<br>China dish"),
        gt.gettext("Drag and drop the China dish<br>onto the Tripod Stand"),
        gt.gettext(" Click on Inference button<br>to see the inference message"),
        gt.gettext( "Click on Reset button<br>to redo the experiment"),
        gt.gettext("Click on the<br>Next button<br>to see the discussion")
    ]


Inference_msg = [gt.gettext("The liquid phase changes to gaseous phase, as water evaporates on heating.<br>The molecules move and vibrate so quickly that they escape into the<br>atmosphere as molecules of water vapour."),
gt.gettext("Spirit is a volatile liquid and has a lower boiling point<br>when compared to water. Hence, spirit evaporates<br>faster than water at room temperature."),

]
//  nextButton()

    $(".sim-controls").hide();
     $(".sim-div").css({"width":"100%"});
    $("#screen2").hide();
   
    $("#wholeBeakerA").css('cursor', 'pointer');

    $("#wholeBeakerA").draggable({
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                $(this).animate({
                    top: "48%", // top position in % (percentage)
                    left: "71%", // left position in % (percentage)
                })
            
            }
        },containment:"#screen1",
        drag: function () {
           
         
      
       removeTrip()

        }
    });
    $("#beakerdrop").droppable({
        accept: "#wholeBeakerA",
        drop: function () {
            help=50

            $("#wholeBeakerA").draggable('disable');
            $("#wholeBeakerA").css('cursor', 'auto');
         
            $("#beakerdrop").css({ 'display': 'none' });
           
            $('#wholeBeakerA').css({
                left: '55%',                           
                top: '25%'

            });
            $("#wholeBeakerA").animate(
                //rotate spatula
                { deg: -94 },
                {
                    duration: 1200,
                    step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg" })
                     
                    }
                    })
                $("#waterTopA").fadeOut()
                $("#waterRotateA").fadeIn() 
                setTimeout(function(){
                    // $("#pour").show()

                    $("#pour").fadeIn().delay(500),
                    $("#pour").show("blind", { direction: "up" }, function () { $("#pour").hide("blind", { direction: "down" })})
                        $("#waterRotateA").fadeOut(900) 
                        // $("#CHINADISHWATER").fadeIn(1800)
                        },900) 
                        setTimeout(function(){
                                $("#wholeBeakerA").animate(
                                    //rotate spatula
                                    { deg: 0 },
                                    {
                                        duration: 1200,
                                        step: function (now) {
                                            $(this).css({ transform: "rotate(" + now + "deg" })
                                        
                                        }
                                        }
                                    )       
                            $('#wholeBeakerA').animate({left: '71%',top: '48%' },function(){
                                chinadishDragdrop();
                              
                            })
                        },3000)}
                      });
                   
                });
  function chinadishDragdrop(){
    help=1
        $("#waterchina").css('cursor', 'pointer');
        $("#waterchina").draggable({
            revert: function (is_valid_drop) {
                if (!is_valid_drop) {
                    $(this).animate({
                        top: "63%", // top position in % (percentage)
                        left: "42%", // left position in % (percentage)
                    })
                
                }
            },containment:"#screen1",
            drag: function () {
                console.log("drag")
                removeTrip()
           }    
        });
        $("#chinadishDrop").droppable({
            accept: "#waterchina",
            drop: function(){
                help=51
                 $("#waterchina").draggable('disable');
                $("#waterchina").css('cursor', 'auto');
             
                $("#chinadishDrop").css({ 'display': 'none' });
               
                $('#waterchina').animate({
                    left: '12%',                          
                    top: '19%'
    
                });
                help=2
                burnerClick() 
             
              
            }
            
        })
     
  }
  
   function burnerClick() {
 
    $("#BurnerOn").css('cursor', 'pointer');
    $("#BurnerOn").click(function () {
     
        removeTrip()
    
      
        console.log("click")
        $("#BurnerOn").hide()
        $("#BurnerOn1").show()
        $("#BurnerOn").css('cursor', 'auto');
        help=52
        ImageAnimationOneTime("flameon", "flames", Imageflame, 100, 10)
      
        // $("#CHINADISHWATER").fadeOut(2000)
        $("#alert1").show()
        $(".line-1,.line-2").fadeIn(1000)

        ImageAnimationOneTime("boilclass", "boils", Imageboil, 200, 0)
        ImageAnimationOneTime("timeset", "timing", Imagtimer, 325, 0)
       
       
            
        $("#BurnerOn").off('click');
    $("#BurnerOn1").off('click');
    setTimeout(function(){
        $("#alert1").hide() 
        $("#BurnerOn").show()  
        $(".line-1,.line-2").hide()
        setTimeout(function(){
        $("#info1").show();
        },500)
    },17000)
    setTimeout(function(){
        help=3
        $("#info1").hide();
       
        $("#inference1").css('cursor', 'pointer');
    $("#inference1").css({ "display": "block" });
},22000)
removeTrip()

   })
  
 }

function nextButton() {
  
           $("#nextbtn").show();
            $("#nextbtn").css('cursor', 'pointer');
           $("#nextbtn ").click(function () {
         
            $(".trip-block").hide();
           help=5;
                $("#screen1").css({ "display": "none" });
                $("#screen2").css({ "display": "block" });
                $("#instruction2").css({ "display": "block" });
                $("#instruction1").css({ "display": "none" });
                $("#instruction2").css({ "display": "block" });
                $("#inference1").css({ "display": "block" });
            
                capClick()
              })
}
function capClick(){
   
    $("#SPIRITBOTTLECAP").css('cursor', 'pointer');
    $("#SPIRITBOTTLECAP").click(function () {
      help=6
      removeTrip()
               $('#SPIRITBOTTLECAP').animate({
                
            left: '73%',                          
            top: '69%'

        },
        //spirit bottle drag and drop
        function(){
            help=6
            $("#SPIRITBOTTLECAP").css({"pointer-events":"none"})
            $("#SPIRITBOTTLE").css('cursor', 'pointer');
              $("#SPIRITBOTTLE").draggable({
                revert: function (is_valid_drop) {
                    if (!is_valid_drop) {
                        help=6
                        $(this).animate({
                            top: "43%", // top position in % (percentage)
                            left: "82%", // left position in % (percentage)
                        })
                    
                    }
                },containment:"#screen2",
                drag: function () {
                    console.log("drag")
                    removeTrip()
                    help=55
               } 
            })
            $("#spiritDrop").droppable({
                accept: "#SPIRITBOTTLE",
                drop: function () {
                    
                    $("#SPIRITBOTTLE").draggable('disable');
                    $("#SPIRITBOTTLE").css('cursor', 'auto');
                    $("#spiritDrop").css({ 'display': 'none' });
                    $('#SPIRITBOTTLE').animate({
                        left: '62%',                          
                        top: '28%'
        
                    },function(){
                        help=55
                        $("#SPIRITBOTTLE").animate(
                            //rotate spatula
                            { deg: -110 },
                            {
                                duration: 1200,
                                step: function (now) {
                                    $(this).css({ transform: "rotate(" + now + "deg" })
                                
                                }
                                }
                            ) 
                            setTimeout(function(){
                            $("#pour2").fadeIn().delay(500),
                            $("#pour2").show("blind", { direction: "up" }, function () { $("#pour2").hide("blind", { direction: "down" })})
                            $("#CHINADISHSPIRIT2").fadeIn(1800)
                           
                        },1000)
                        setTimeout(function(){
                            help=55
                            $("#SPIRITBOTTLE").animate(
                                //rotate spatula
                                { deg: 0 },
                                {
                                    duration: 1200,
                                    step: function (now) {
                                        $(this).css({ transform: "rotate(" + now + "deg" })
                                      
                                    }
                                    }
                                )  
                        $('#SPIRITBOTTLE').animate({
                            left: '82%',                          
                            top: '43%'
            
                        },function(){

                            $('#SPIRITBOTTLECAP').animate({
                                left: '84%',                          
                                top: '39%'
                
                            });
                          
                            $("#spiritChina").css('cursor', 'pointer');
                            help=7;
                            $("#spiritChina").draggable({
                              revert: function (is_valid_drop) {
                                  if (!is_valid_drop) {
                                    help=7;
                                      $(this).animate({
                                          top: "63%", // top position in % (percentage)
                                          left: "52%", // left position in % (percentage)
                                      })
                                  
                                  }
                              },containment:"#screen2",
                              drag: function () {
                                  console.log("drag")
                                  removeTrip()
                                  help=55

                             } 
                          })
                          $("#spiritDropdish").droppable({
                            accept: "#spiritChina",
                            drop: function () {
                                help=55
                                $("#spiritChina").draggable('disable');
                                $("#spiritChina").css('cursor', 'auto');
                                $("#spiritDropdish").css({ 'display': 'none' });
                                $(".line-3,.line-4").fadeIn(1000)
                                ImageAnimationOneTime("timeset", "timing", Imagtimer, 300, 0)
                                ImageAnimationOneTime("spiritLevel", "spirit", ImageSpirit, 250, 0)
                                $('#spiritChina').css({
                                    left: '20%',                          
                                    top: '27%'
                    
                                }
                                
                                //     setTimeout(function(){
                                //         // help=8
                                        
                                //         help=55
                                //         // $(".timer").hide();
                                //         // $(".line-1,.line-2").fadeIn(3000)
                                //         console.log("evaporation")
                                       
                                //         // $(".line-1,.line-2").hide()                                                                                                           
                                // },110)
                              
                                )
                                setTimeout(function(){
                                    help=44
                                    $(".line-3,.line-4").hide() 
                                    $("#info2").css({ 'display': 'block' });
                                },15000)
                                setTimeout(function(){
                                    removeTrip()
                                    help=8
                                    $("#info2").css({ 'display': 'none' });
                                    $("#inference2").css('cursor', 'pointer');
                                    $("#inference2").css({ 'display': 'block' });
                                 
                                   
         
                                        $("#nextbtn2").click(function () {
                                            help=9
                                            removeTrip()
                                            $("#screen2").css({ 'display': 'none' });
                                            $("#blackBoarddiv").css({ 'display': 'block' });
                                
                                
                                        });
                                   
                                                    
                                               
                              
                                },21000)
                            }

                          })
                        });
                    },3000)
                        }
                        
                    );
                   
                }

            })
        });
    })
    
}
// function removeTrip() {
//     if (tripClickFlag == true) {
//         $('.trip-block').hide();
//         trip.stop();
//         tripClickFlag = false;
//     }
// }
$(window).on('load',function() {
    ImageInitLoad(Imageboil, "waterboil", "boils", "boilclass")
   
    ImageInitLoad(Imageflame, "flame", "flames", "flameon")
  
    ImageInitLoad(ImageSpirit, "spiritEvaporate", "spirit", "spiritLevel")
    ImageInitLoad(Imagtimer, "timer", "timing", "timeset")
  
    // ImageInitLoad(Imagespirit, "spiritLevel", "spiritEvp", "spiritEvaporate")
 


});


//animation
function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
    for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length; ANIMATIONForloop++) {
        var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
        $("#" + ANIMATIONDivName).append($tempx2);
    }
}
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
    var GlobalVariable = 0;
    var ANIMATIONTimesReached = 0;
    var CLEARImageAnimation = setInterval(function () {
        $('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
        $('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
        GlobalVariable++;
        if (GlobalVariable == ANIMATIONImageArray.length) {
            $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
            $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
            if (ANIMATIONTimesReached >= ANIMATIONTimes) {
                $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
                clearInterval(CLEARImageAnimation);
            }
            else {
                GlobalVariable = 0;
                ANIMATIONTimesReached++;
            }
        }
    }, ANIMATIONSpeed);
}