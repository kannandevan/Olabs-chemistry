// var ttttt = 0;
// var ttttt2 = 0;
// var ttttt3 = 0;
// var ttttt4 = 0;
var flag =0;
var interval1;
var interval2;
var rotateElementInterval; 
var temp1 = false,temp2 = false,opt = 0;
var helpMsg,inferenceMsg;
var inferenceCount =0,helpcount = 0;
// dip needle Animation    
var dipNeedleAnimation = [];
 var tempCount = 0;
for (i = 1; i <= 99; i++) {
  if (i < 10) {
    dipNeedleAnimation.push("../PHY/EMM/earth_magnetic_field/images/dipFrontView/COMPASS 1_0000"+ i + ".png");
  } else if (i < 100 && i > 9) {
    dipNeedleAnimation.push("../PHY/EMM/earth_magnetic_field/images/dipFrontView/COMPASS 1_000" + i + ".png");
  }
}
//
          // dip rotation Animation    
          var dipRotationAnimation = [];
          for (i = 1; i <= 99; i++) {
            if (i < 10) {
              dipRotationAnimation.push("../PHY/EMM/earth_magnetic_field/images/dipRotation/COMPASS 1_0000"+ i + ".png");
            } else if (i < 100 && i > 9) {
              dipRotationAnimation.push("../PHY/EMM/earth_magnetic_field/images/dipRotation/COMPASS 1_000" + i + ".png");
            }
          }
          //


$(window).on('load',function() {
  ImageInitLoad(dipRotationAnimation, "dipRotateViewDiv", "dipRotateViewId", "dipRotateViewClass")
  ImageInitLoad(dipNeedleAnimation, "dipRotateDiv", "dipRotateId", "dipRotateClass")
});

$(document).ready(function(){ 
  inferenceMsg = ["Earth’s magnetic field applies a force in a horizontal plane towards the north <br>direction on the north pole of the compass needle and an equal opposite force <br>on the south pole.Hence, magnetic field of earth contains a horizontal component.",
                  "When the dip needle reads 90°,the vertical component of earth’s magnetic field <br> pulls the north pole of the needle downwards and pushes the south pole upwards.",
                  "In this position,the horizontal component of the earth’s magnetic field <br>is fully effective,and the needle points in the direction of the resultant <br>magnetic field.The reading on the circular scale in this position gives <br>the angle of dip.The angle of dip is also known as magnetic inclination.",
];
helpMsg    =  ["Drag and drop the Compass needle on the White board",
                "Rotate the Compass needle using the slider",
                "Drag and drop the Marker to mark the points.",
                "Click on the Compass to place it away from the White board.",
                "Click the Marker to <br>draw the lines",
                "Click on the Compass needle",
                "Click on the Inference button to see the observation",
                "Click on the Next button",
                "Drag and drop the Dip needle on the White board",
                "Rotate the Dip needle using the slider",
                "Drag and drop the correct answer to <br>the corresponding boxes.",
                "Click on the Reset button <br>to repeat the experiment.",
              
];
  $(".sim-controls").css("display","none")
  $(".sim-div").css({"width":"100%"})  
$("#compass1").draggable(      //Drag the compass on the white board.
        {
          containment: "#mainDiv",
          revert: "invalid",
          drag: function () {
            // rotateElement()
            removeTrip();
          }
        })
        $("#board").droppable(
            {
              accept: "#compass1",
              tolerance: "touch",
              drop: function () {
                $("#compass").css({"display":"block"})
                $("#compass1").css({"display":"none"})
                rotateCompassNeedle()
                $("#note1").show()
                rotateElement()
              }
            });    
})

function rotateCompassNeedle(){             // slider change (rotate the compass needle)
  helpcount = 1;
  removeTrip()
      clearInterval(interval2); // clear the interval for rotateCompassNeedle if it's running
      interval1 = setInterval(() => {
      $("#sliderRotate").prop('disabled',false);
      $("#sliderRotate").css({cursor:"pointer"})
      console.log($("#sliderRotate").val());
      var tt = $("#sliderRotate").val();
         
      var rocket = document.querySelector('#c2');  
      rocket.style.transform = 'rotate('+tt+'deg)';
      if(tt == 270){
        $("#sliderRotate").prop('disabled',true);
        $("#sliderRotate").css({cursor:"default"})
        $("#note1").hide()
        $("#note2").show()
        dragMarker()
      }

    }, 0); 
  }
  function dragMarker(callback){                      //   Drag the marker and mark the points.
    clearInterval(rotateElementInterval); 
    helpcount =2;
      $("#marker").css({"cursor": "pointer" })        
      $("#marker").draggable(         
        {
        containment: "#mainDiv",
        revert: "invalid",
        drag: function () {
          removeTrip()
          $("#c2").css({ transform: "rotate(270deg)" });
        }
      })
      $("#board").droppable(
        {
        accept: "#marker",
        tolerance: "touch",
        drop: function () {
          helpcount = 3;
          $("#sliderRotate").val(269);
          $("#sliderRotate").hide()
          $("#sliderRotate2").css({"display":"block"})
          $('#marker').hide();
          $('#marker2').fadeIn();
          $("#marker2").css({ left: "51%", top: "11%" });
          $("#blackdot1").delay(300).fadeIn();
          $("#marker2").animate({ left: "63%", top: "39%" },);
            setTimeout(function () { 
              $("#blackdot2").delay(700).fadeIn();
              $("#marker2").animate({ left: "51%", top: "66%" },  );
                setTimeout(function () { 
                  $("#blackdot3").delay(1100).fadeIn(); 
                  $("#marker2").animate({ left: "39%", top: "39%" },  );
                    setTimeout(function () { 
                      $("#blackdot4").delay(1500).fadeIn(); 
                      $("#marker2").animate({ top: "46%", left: 82 + "%" }, 1200, 'linear');
                      setTimeout(function(){
                        $('#marker').fadeIn();
                        $("#marker").css({ left: "81%", top: "56%" });
                        $('#marker2').hide();
                        $("#marker").draggable("disable");
                        compassMove();    //Click the compass and move back.
                        if (typeof callback === 'function') {
                          callback(); // Execute the callback function
                      }
                      },3000)
              });
            });
          });
        }
      });
    }
  function compassMove(){     // compass move back to previous place.
    $("#c2").css({cursor:"pointer"})
    $("#c2").click(function(){
      helpcount =4;
      removeTrip()
      $("#compass1").css({"display":"block",left: 4 + "%",top: 37 + "%",})
      $("#compass").css({"display":"none"})
      $("#compass1").draggable("disable");
      $("#compass1").css({cursor:"default"});
      clickMarker()
    }) 
  }
function clickMarker(){         //click the marker on the white board and draw the lines.
  var isAnimationInProgress = false;
    $("#marker").click(function() {
      helpcount =5;
      removeTrip()
      $("#marker2").show()
      $("#marker2").css({ left: "26%", top: "42%" });
      $("#marker").hide()
      if (isAnimationInProgress) {
        return; // Animation is already in progress, ignore the click
      }
      isAnimationInProgress = true;
        $("#marker2").stop().animate({ top: "38.1%", left: "77%" }, 1200, 'linear')
        $('#horLine').css({"display":"block"})
        $('#horLine').css({width: 3, opacity: 1}).animate({width: "54%"}, {
          duration: 1200,
          easing: 'linear',
          step: function (now, fx) {
            if (fx.prop === "width" && now >= 54) {
              $("#marker2").css({ left: "52%", top: "15%" }); 
              $("#marker2").stop().animate({ top: "67%", left: "51%" }, 1200, 'linear')
              $('#verLine').css({"display":"block"})
              $('#verLine').css({height: 3, opacity: 1}).animate({height: "62%"}, {
                duration: 1200,
                easing: 'linear',
                step: function (now, fx) {
                }
              })
              setTimeout(function() {
                $("#blackdot2, #blackdot4").hide();
                $("#blackdot3, #blackdot1").hide();
                setTimeout(function(){
                  $("#marker2").stop().animate({ top: "50%", left: "84%" }, 1200, 'linear')
                  $("#marker2").hide()
                  $("#marker").show()
                  $("#board2").show()
                  $('#board').hide();
                  $("#marker").off("click");
                  $("#compass1").css({"cursor": "pointer" })    
                      $("#compass1").click(function(){     //click the compass needle on the white board.
                        rotateElement()
                        removeTrip()
                        $("#note2").hide()
                        $("#board2").css({height: "67%",top: "20%"})
                        $("#compass").css({top: "-8%"})
                        $("#compass1").hide();
                        $("#compass").show();
                        $("#compass").css({"pointer-events": "none"});
                        rotateCompassNeedleSecond()
                      })
                },800)
            }, 700);
              }
          }
        })
     });
}
function rotateCompassNeedleSecond(){          //slider-2 change (rotate the compass needle)
  clearInterval(interval1);                      // clear the interval for rotateCompassNeedle if it's running
  helpcount = 6;
  $("#sliderRotate").css({"display":"none"})
  $("#sliderRotate2").css({"display":"block"})
  $("#sliderRotate2").prop('disabled',false);
  $("#sliderRotate2").css({cursor:"pointer"})
  interval2 = setInterval(() => {
    console.log($("#sliderRotate2").val());
    var rt = $("#sliderRotate2").val();
    var rocket2 = document.querySelector('#c2');  
    rocket2.style.transform = 'rotate('+rt+'deg)';
    if(rt == 360){
      $("#note3").show()
      $("#sliderRotate2").prop('disabled',true);
      $("#sliderRotate2").css({cursor:"default"})
      helpcount = 7;
      $("#inference").show();
      $("#nextButton1").click(function(){
        helpcount = 9;
        // removeTrip()
        $("#inference").hide();
        $("#screen2").show();
        $("#screen1").hide();
        dragDipNeedle();
      })
    }
  
  }, 0); 
}
// ============================================    second screen  ================================================//
function dragDipNeedle(){

  $("#dipNeedle").draggable(      //Drag the compass on the white board.
  {
    containment: "#mainDiv",
    revert: "invalid",
    drag: function () {
      helpcount = 10;
      removeTrip();
    }
  })
  $("#board3").droppable(
    {
      accept: "#dipNeedle",
      tolerance: "touch",
      drop: function () {
        $("#dipNeedle2").css({"display":"block"})
        $("#dipNeedle").css({"display":"none"})
        $("#dipsliderRotate").prop('disabled',false);
        $("#dipsliderRotate").css({cursor:"pointer"})
         $('#dipsliderRotate').on('input', function () {       //slider change
          clearInterval(interval2); 
          console.log(console.log($("#dipsliderRotate").val()))
          $("#dipRotateDiv").css({"display":"block"})
          $("#dipNeedle2").css({"display":"none"})
          var currentValue = parseInt($(this).val());
          showImage(currentValue);
          showImage2(currentValue);
          setTimeout(function(){
            if(($("#dipsliderRotate").val() == 99)&&(tempCount==0))
            {
              helpcount = 7;
              $("#dipsliderRotate").prop('disabled',true);
              $("#inference").show();
              inferenceCount = 1;
              // $("#nextButton2").css({"display":"none"})
              //tempCount = 1;
            }
           
            if(($("#dipsliderRotate").val() == 1)&&(tempCount==1))
            {
              $("#inference").show();
              helpcount = 7;
              inferenceCount = 2;
            }
            $("#nextButton2").click(function(){
              $("#screen2").hide()
              $("#screen3").show()
              $("#inference").hide();
              $("#nextButton3").css({"display":"block"}) 
              helpcount = 12;
              removeTrip()
              $("#nextButton3").click(function(){
                $("#screen3").hide()
                $("#screen4").show()
                // $("#nextButton2").css({"display":"none"})
                helpcount = 13;
                removeTrip()
                activity()
              })
            })
          },1000)
        });
        $('#dipsliderRotate').change(function () {       //slider change
          if(($("#dipsliderRotate").val() != 99)&&(tempCount==1))
          {
            $("#inference").hide();
            $("#nextButton2").css({"display":"none"})
          }
          if(($("#dipsliderRotate").val() != 99)&&(tempCount==0))
          {
            $("#nextButton2").css({"display":"none"})
          }

        });

      }
    });    
}
function showImage(imageCount) {                         //dip needle rotation front view
  var totalImages = dipNeedleAnimation.length;
  if (imageCount >= 1 && imageCount <= totalImages) {
    $('.dipRotateClass').css({ 'display': 'none' });
    $('#dipRotateId' + (imageCount - 1)).css({ 'display': 'block' });
          if($("#dipsliderRotate").val() >=20 && $("#dipsliderRotate").val() <45){
            $('.dipRotateClass').css({top: "12%",left: "73%"})
          }
          else if($("#dipsliderRotate").val() >= 45 && $("#dipsliderRotate").val() <65){
            $('.dipRotateClass').css({top: "-18%",left: "50%"})
          }
          else if($("#dipsliderRotate").val() >= 65){
            $('.dipRotateClass').css({top: "-35%",left: "-5%"})
          }
          else if($("#dipsliderRotate").val() <20){
            $('.dipRotateClass').css({top: "71%",left: "81%"})
          }

  }
}
function showImage2(imageCount) {                     //dip needle rotation
  var totalImagesInDipRotation = dipRotationAnimation.length;
  if (imageCount >= 1 && imageCount <= totalImagesInDipRotation) {
    $('.dipRotateViewClass').css({ 'display': 'none' });
    $('#dipRotateViewId' + (imageCount - 1)).css({ 'display': 'block' });
  }
}
function activity(){
  // declination drag  //
  $("#option1").draggable({ containment: ".sim-interactive-area" }, { appendTo: "body"}, {
    start: function () {
    }
  }, {
    drag: function () {
      $('#dropoption1,#dropoption2').css({ '-webkit-box-shadow': '', 'moz-box-shadow': '', 'box-shadow': '' });
      removeTrip();
    }
  }, {
    revert: function () {
      if (!temp1) {
        return true
      }
    }
  });
  // inclination drag  //
  $("#option2").draggable({ containment: ".sim-interactive-area" }, { appendTo: "body"}, {
    start: function () {
    }
  }, {
    drag: function () {
      $('#dropoption1,#dropoption2').css({ '-webkit-box-shadow': '', 'moz-box-shadow': '', 'box-shadow': '' });
      removeTrip();
     
    }
  }, {
    revert: function () {
      if (!temp2) {
        return true
      }
    }
  });
  // declination drop //
  $("#dropoption1").droppable({
    accept: "#option1,#option2",
    tolerance: "intersect",
    drop: function (event, ui) {
      var dropabbleid = ui.draggable.attr("id")
      if (dropabbleid == "option1") {
        helpcount = 16;
        $("#optionsuccess1").show();
        $("#option1").css("display","none")
        $("#optionsuccess1").css('box-shadow', '0px 0px 15px 5px rgba(0,255,23,0.75)');
        temp1 = true;
        opt++
        if (opt == 2) {
          helpcount = 14;
          $("#nextButton4").css({"display":"block"}) 
          $("#nextButton4").click(function(){
            question()
          })
        }
        $("#dropoption1").css("display","none")
      }
      else {
        drop = true;
        boxFail("#dropoption1")
      }
    }
  })
    // inclination drop //
    $("#dropoption2").droppable({
      accept: "#option1,#option2",
      tolerance: "intersect",
      drop: function (event, ui) {
        var dropabbleid = ui.draggable.attr("id")
        if (dropabbleid == "option2") {
          helpcount = 13;
          $("#optionsuccess2").show();
          $("#option2").css("display","none")
          $("#optionsuccess2").css('box-shadow', '0px 0px 15px 5px rgba(0,255,23,0.75)');
          temp2 = true;
          opt++
          if (opt == 2) {
            helpcount = 14;
            $("#nextButton4").css({"display":"block"}) 
            $("#nextButton4").click(function(){
              question()
            })
          }
          $("#dropoption2").css("display","none")
        }
        else {
          drop = true;
          boxFail("#dropoption2")
        }
      }
    })
}
function boxFail(id3) {
  $(id3).css('-webkit-box-shadow', '0px 0px 15px 5px rgba(255, 8, 0,0.75)');
  $(id3).css('-moz-box-shadow', '0px 0px 15px 5px rgba(255, 8, 0,0.75)');
  $(id3).css('box-shadow', '0px 0px 15px 5px rgba(255, 8, 0,0.75)');
}

function question(){
  $("#screen4").hide();
  // helpcount = 15;
  const data1 = new Questions(["1","Which of the following statements are correct? <br> Statement 1: A Compass needle is an effective instrument to measure the effective magnetic field of the earth. <br> Statement 2: A Compass needle is not an effective instrument to measure the effective magnetic field of the earth. It can only measure horizontal component of a magnetic field. ",["Statement 1 is correct","Statement 2 is correct"],2,4,1,"helpVariableName",[20,10,5,15]])
              const data2 = new Questions(["2","Dip needle can demonstrate __?",["Angle of dip, vertical component of magnetic field ","Horizontal component of magnetic field"],1,4,1,"helpVariableName",[20,10,5,15]])
              const data3 = new Questions(["3","What is the angle of dip at the poles?",["90°","0°"],1,4,1,"helpVariableName",[20,10,5,15]])
              const data4 = new Questions(["4","Find vertical component of magnetic field of earth at this location? <br> B-Resultant magnetic field of earth ",["B cos(30°)","B sin(30°)"],2,4,2,"helpVariableName",[["images/questionImg.png",81],20,10,5,15]])
              var temp = [];
              temp.push(data1);
              temp.push(data2);
              temp.push(data3);
              temp.push(data4);
              QuestionContinues_Call(temp)
}
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
            
              clearInterval(CLEARImageAnimation);
          }
          else {
              GlobalVariable = 0;
              ANIMATIONTimesReached++;
          }
      }
  }, ANIMATIONSpeed);
}
// //       compass needle moving        //
function rotateElement() {
    if (($("#sliderRotate").prop('disabled') === false) || ($("#sliderRotate2").prop('disabled') === false)) {
    $("#c1").css({ transform: "rotate(365deg)" });
    setTimeout(function () {
      $("#c1").css({ transform: "rotate(355deg)" });
    }, 800);
  }
}
rotateElementInterval = setInterval(rotateElement, 1500);


