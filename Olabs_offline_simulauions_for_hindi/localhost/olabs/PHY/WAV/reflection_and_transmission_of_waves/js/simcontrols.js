var helpcount = 0;
var helpMsg,inferenceMsg;
var inferenceCount =0;
var question_OneStatus=0;
//           Animation-1    //////

var image_length = 80;
var image_path = "../PHY/WAV/reflection_and_transmission_of_waves/images/animation1/";
var imageAnimation1 = [];
for (i = 1; i <= image_length; i++) {
  if (i < 10) {
    imageAnimation1.push(image_path + "CASE 1000" + i + ".png");
  } else if (i < 100 && i > 9) {
    imageAnimation1.push(image_path + "CASE 100" + i + ".png");
  }
}
//
//     Animation-2   //////

var image_length = 80;
var image_path = "../PHY/WAV/reflection_and_transmission_of_waves/images/animation2/";
var imageAnimation2 = [];
for (i = 1; i <= image_length; i++) {
  if (i < 10) {
    imageAnimation2.push(image_path + "top 2_0000" + i + ".png");
  } else if (i < 100 && i > 9) {
    imageAnimation2.push(image_path + "top 2_000" + i + ".png");
  }
}
//
//      Animation-3     /////

var image_length = 80;
var image_path = "../PHY/WAV/reflection_and_transmission_of_waves/images/animation3/";
var imageAnimation3 = [];
for (i = 1; i <= image_length; i++) {
  if (i < 10) {
    imageAnimation3.push(image_path + "CASE 3A000" + i + ".png");
  } else if (i < 100 && i > 9) {
    imageAnimation3.push(image_path + "CASE 3A00" + i + ".png");
  }
}
//
//      Animation-4     /////

var image_length = 80;
var image_path = "../PHY/WAV/reflection_and_transmission_of_waves/images/animation4/";
var imageAnimation4 = [];
for (i = 1; i <= image_length; i++) {
  if (i < 10) {
    imageAnimation4.push(image_path + "CASE 4A000" + i + ".png");
  } else if (i < 100 && i > 9) {
    imageAnimation4.push(image_path + "CASE 4A00" + i + ".png");
  }
}
//


$(window).on('load',function() {
  ImageInitLoad(imageAnimation1, "reflect_fixedend", "reflect", "reflectclass")
  ImageInitLoad(imageAnimation2, "reflect_freeend", "reflecting", "reflectclass2")
  ImageInitLoad(imageAnimation3, "rarerToDenser", "reflectInRarer", "reflectclass3")
  ImageInitLoad(imageAnimation4, "denserToRarer", "reflectInDenser", "reflectclass4")
});

$(document).ready(function(){
  helpMsg = ["Click on the hand",
             "Click on the Inference button to view the observation",
             "Click on the Next button",
             "Drag and drop the heavy spring towards the steel hook",
             "Drag and drop the slinky towards <br>another end of the heavy spring",
             "Drag and drop the slinky towards the steel hook.",
             "Drag and drop the heavy spring towards <br>another end of the slinky.",
             "Click on the Reset button <br>to redo the experiment.",
             "Answer the question to continue",
    ];
  inferenceMsg = ["The pulse reflects back and is inverted with the same speed and amplitude.",
                  "Pulse reflects without inversion at the same amplitude and speed.",
                  "Transmitted pulse: It travels through a heavier spring with<br>a lower speed and amplitude than an incident pulse.<br><br>Reflected pulse: It reflects at the boundary with inversion; the<br>speed is the same as the incident pulse, and the amplitude will<br>be lower than the incident pulse.",
                  "Transmitted pulse: Which travels through<br>slinky with high speed and larger amplitude.<br><br>Reflected pulse: Which travels through the heavier<br>spring with the same speed as the incident pulse.<br>The amplitude is lower than the incident pulse, it<br>is not inverted.",
    ];      
  $(".sim-controls").css("display","none")
  $(".sim-div").css({"width":"100%"})  

  /*******************       screen1       ******************/

  $("#screen1").show()                                     
  $("#handArea").click(function(){     // Click on the hand
    removeTrip();
    helpcount = 1;
          $("#slinky,#hand_trans,#stand,#slinkyLabel,#handArea").hide();
          ImageAnimationOneTime("reflectclass", "reflect", imageAnimation1, 100, 0)    // Show the animation-1
          animCount =1;
          $("#simHelp").css({
          "pointer-events": "none",
          "cursor": "none"
            });
      setTimeout(function(){
      $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
      $("#Inference").css("display","block");
      // $("#case1").css("display","block");
    },8000);
  });

  $("#next").click(function(){    //Click on the Next button.
    $("#Inference").css("display","none");
      $("#screen1").hide()
      removeTrip();
      helpcount = 3;

/**************************       screen2       ***********************/

      $("#screen2").show()
      $("#handArea2").click(function(){           // Click on the hand
        removeTrip();
        helpcount = 4;
          $("#slinky2,#hand_trans2,#stand2,#thread,#slinkyLabel2,#threadLabel,#handArea2").hide();
          ImageAnimationOneTime("reflectclass2", "reflecting", imageAnimation2, 100, 0)    // Show the animation-2
          animCount =2;
          $("#simHelp").css({
            "pointer-events": "none",
            "cursor": "none"
              });
          setTimeout(function(){
            $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
            inferenceCount = 1;
            $("#Inference").css("display","block");
            // $("#case2").css("display","block");
          },8500);

        })
   });

   $("#next2").click(function(){      //Click on the Next button.
    // $("#questDiv").css("display","block");
    removeTrip()
    helpcount = 6;
    selected = 1;
    QuizCoreExecuter(1,"Inversion of reflected pulse happens when the edge of the spring is ______?","Free","Fixed","","","Fixed",1,2);
    var th=setInterval(function()
    {
      helpcount = 6;
      if(question_OneStatus==1)
      {
        clearInterval(th)
        selected = 2;
        QuizCoreExecuter(2,"Does the speed of pulse change when pulse travels from denser medium to rarer medium or vice versa?","Yes","No","","","Yes",1,2);
      }
    })
    $("#screen2").hide()
    $("#Inference").css("display","none");

/****************************      screen3       ****************************/
// $("#questDiv").css("display","none");
    $("#screen3").show()
    helpcount = 7;
        $("#spring2").draggable({   //Drag the spring.
          containment: "#screen3",revert: "invalid",
          drag:function()
          {
          removeTrip();
           },  
        });
        $("#springDroparea").droppable({    //drop the spring
          accept: "#spring2",
          tolerance :"touch",
          drop: function () {
            drop=true;
            helpcount = 8;
            $("#spring2").hide()
            $("#spring2AfterDrag").show()
            $("#spring2").css('cursor', 'default');
            $("#spring2").draggable("disable");
            $("#slinky3").css({cursor:"pointer"})
            $("#slinky3").draggable({         //Drag the slinky.
              containment: "#screen3",revert: "invalid",
              drag:function()
              {
              removeTrip();
               }, 
              });
              $("#slinky3Droparea").droppable({    // drop the slinky.
                accept: "#slinky3",
                tolerance :"touch",
                drop: function () {
                  drop=true;
                  helpcount = 9;
                  $("#slinky3").hide()
                  $("#slinky3AfterDrag").show()
                  $("#slinky3").css('cursor', 'default');
                  $("#slinky3").draggable("disable");
                  $("#hand_trans3").show();
                  // alert();
                  $("#handArea3").click(function(){ 
                    removeTrip();
                    helpcount = 10;
                    $("#slinky3AfterDrag,#hand_trans3,#spring2AfterDrag,#slinkyLabel3,#springLabel,#handArea3").hide();
                    ImageAnimationOneTime("reflectclass3", "reflectInRarer", imageAnimation3, 100, 0)    // Show the animation-3
                    animCount =3;
                    $("#simHelp").css({
                      "pointer-events": "none",
                      "cursor": "none"
                        });
                    setTimeout(function(){
                      $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                      inferenceCount = 2;
                      $("#Inference").css("display","block");
                      $("#Inference").css({top: "24%"})
                      // $("#case3").css("display","block");
                        },8000);
                     })
                      $("#next3").click(function(){ 

/**************************            screen4             *****************************/
                      removeTrip();
                      helpcount = 12; 
                      $("#screen4").show();
                      $("#screen3").hide();
                      $("#Inference").css("display","none");
                      $("#slinky4").draggable({             //Drag the slinky.
                        containment: "#screen4",revert: "invalid",
                        drag:function()
                        {
                        removeTrip();
                         },  
                      });
                        $("#slinky4Droparea").droppable({         //drop the slinky
                          accept: "#slinky4",
                          tolerance :"touch",
                          drop: function () {
                            helpcount =13;
                            drop=true;
                            $("#slinky4").hide()
                            $("#slinky4AfterDrag").show()
                            $("#slinky4").css('cursor', 'default');
                            $("#slinky4").draggable("disable");
                            $("#spring4").css({cursor:"pointer"})
                            $("#spring4").draggable({             //Drag the spring.
                              containment: "#screen4",revert: "invalid",
                              drag:function()
                              {
                              removeTrip();
                               }, 
                              });
                              $("#spring4Droparea").droppable({         //drop the spring
                                accept: "#spring4",
                                tolerance :"touch",
                                drop: function () {
                                  drop=true;
                                  helpcount =14;
                                  $("#spring4").hide()
                                  $("#spring4AfterDrag").show()
                                  $("#spring4").css('cursor', 'default');
                                  $("#spring4").draggable("disable");
                                  $("#hand_trans4").show();
                                  $("#handArea4").click(function(){ 
                                    removeTrip();
                                    helpcount = 15;
                                    $("#slinky4AfterDrag,#hand_trans4,#spring4AfterDrag,#slinkyLabel4,#springLabel2,#handArea4").hide();
                                    ImageAnimationOneTime("reflectclass4", "reflectInDenser", imageAnimation4, 100, 0)    // Show the animation-4
                                    animCount =4;
                                    $("#simHelp").css({
                                      "pointer-events": "none",
                                      "cursor": "none"
                                        });
                                    setTimeout(function(){
                                      $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                                      $("#Inference").css("display","block");
                                      $("#Inference").css({top: "23%"})
                                      inferenceCount = 3;
                                      // $("#case4").css("display","block");
                                       },8000);
                                     })
                                }
                              });
                          }
                        });

                  });
                }
              });
         }
     });
       
   });  
  
});

//===================== ANIMATION FUNCTION ===============
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

        if(animCount ==1)
        userDefinedFunctionForAnimate();
        else if(animCount==2)
        userDefinedFunction2ForAnimate();
        else if(animCount==3)
        userDefinedFunction3ForAnimate();
        else if(animCount==4)
        userDefinedFunction4ForAnimate();

        clearInterval(CLEARImageAnimation);

      }

      else {

        GlobalVariable = 0;

        ANIMATIONTimesReached++;

      }

    }

  }, ANIMATIONSpeed);

} 
function userDefinedFunctionForAnimate(){
  $("#case1").css("display","block");
}
function userDefinedFunction2ForAnimate(){
  $("#case2").css("display","block");
}
function userDefinedFunction3ForAnimate(){
  $("#case3").css("display","block");
}
function userDefinedFunction4ForAnimate(){
  $("#case4").css("display","block");
}
