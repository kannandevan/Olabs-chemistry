var Firstimage = ["../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/1.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/2.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/3.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/4.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/5.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/6.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/7.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/8.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/9.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/10.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/11.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/12.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/11.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/10.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/9.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/8.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/7.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/6.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/5.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/4.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/3.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/2.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/halfmilky/1.png"]

var secondAnimation = ["../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/1.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/2.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/3.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/1.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/4.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/5.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/6.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/7.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/8.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/9.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/10.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/11.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/12.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/13.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/14.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/15.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/16.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/17.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/18.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/19.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/20.png",
  "../CHE/INC/prepare_a_colloidal_solution_of_sulphur/images/FinalMilkywater/21.png"]
var tripFlag = false;
var alertmsg = 0;
var wM = false;
var helpCount = 0;
  var firstHelpmsg;
  var secondHelpmsg;
  var ThirdHelpmsg;
  var ShakeMsg;
  var toAnothertestube;
  var FourthHelpmsg;
  var fifthHelpmsg;
  var sixthHelpmsg;
  var seventhHelpmsg;
  var Common_Next;
  var eighthHelpmsg;
  var ninethHelpmsg;
  // finalpageHelp
  var Thelastscreenfirsthelp;
  var thelastscreenSecondhelp;
  var toAnothertestubeScreen2;
  var RepeateAllmsg;
  // inference MSg
  var FirstWarningMsg;
  var Firstpage;

  var TheFirstInference_msg;
  var theSecondInference_msg;
  var theThirdInference_msg;

  var theFinalhelpmsg;

  var QuestionHelp;
  var QuestionHelp2;
$(window).on('load', function () {
  gt = new Gettext({ 'domain': 'messages' });


  document.getElementById("expName").innerHTML = gt.gettext("Prepare a Colloidal Solution of Sulphur");
  helpCount = 0;
  QuestionHelp = 1;
  QuestionHelp2 = 0;


  firstHelpmsg = gt.gettext("Click and drag the distilled water and <br>  drop it in the test tube");
  secondHelpmsg = gt.gettext("Drop it in the test tube");
  ThirdHelpmsg = gt.gettext("Drag the test tube and drop it <br> towards the Kipp's apparatus");
  ShakeMsg = gt.gettext("Drag the test tube upwards to <br> shake");
  toAnothertestube = gt.gettext("Drag the test tube and <br>drop it in the empty test tube")
  FourthHelpmsg = gt.gettext("Drop it into the Kipp's apparatus")
  fifthHelpmsg = gt.gettext("Click the knob to open the valve")
  sixthHelpmsg = gt.gettext("Click the knob to close the valve")
  seventhHelpmsg = gt.gettext("Drag and drop the dropper towards the test tube")
  Common_Next = gt.gettext("Click on the Next button")
  eighthHelpmsg = gt.gettext("Drag the spatula and drop <br> it in the watch glass")
  ninethHelpmsg = gt.gettext("Drag the spatula and drop <br> it in the test tube")
  // finalpageHelp
  Thelastscreenfirsthelp = gt.gettext("Drag and drop the funnel to empty test tube A")
  thelastscreenSecondhelp = gt.gettext("Drag and drop the filter paper above the funnel")
  toAnothertestubeScreen2 = gt.gettext("Drag the test tube and <br>drop it in the empty test tube A")
  RepeateAllmsg = gt.gettext("Repeat the previous three steps for <br> the other two test tubes B and C")
  // inference MSg
  FirstWarningMsg = gt.gettext("Please wash and use the funnel")
  Firstpage = gt.gettext("The solution will smell like a rotten egg")

  TheFirstInference_msg = gt.gettext("A colloidal solution is heterogenous, it appears translucent.<br> It cannot  be filtered completely through filter paper.<br> Here solute particles do not easily settle down on standing.")
  theSecondInference_msg = gt.gettext("A true solution is homogenous and transparent. <br>It can be completely filtered through filter paper.<br> It remains stable on standing.")
  theThirdInference_msg = gt.gettext("A suspension is heterogeneous mixture. <br>The particles of a suspension are visible<br>to the naked eye. They settle down on <br>standing and can be separated by filtration.")

  theFinalhelpmsg = gt.gettext("Click on the Reset button <br>to repeat the experiment again")
  QuizCoreExecuter(1,
     "Fog is a colloidal solution of:",
   "Solid in gas",
   "Gas in liquid",
   "Liquid in gas",
   "Gas in gas",
   "Liquid in gas",
    1, 2)

  ImageInitLoad(Firstimage, "testtubeWater1Animation", "newtesttubeWater1Animation", "testtubeWater1Animation_class")
  ImageInitLoad(secondAnimation, "testtubeWater2Animation", "newtesttubeWater2Animation", "testtubeWater2Animation_class")
  CommonQuestionHelp = gt.gettext("Choose the correct answer");
  $("#thealertP").html(gt.gettext("The solution will smell like a rotten egg"));
  $("#theInstruction1").html(gt.gettext("Instructions:"));
  $("#theFirstInstruction").html(gt.gettext("1. Click and drag the distilled water and drop it in the test tube."));
  $("#theInstruction2").html(gt.gettext("2. Drag the test tube and drop it into the Kipp's apparatus."));
  $("#theInstruction3").html(gt.gettext("3. Click the knob to open the valve."));
  $("#theInstruction4").html(gt.gettext("4. Click the knob to close the valve."));
  $("#theInstruction5").html(gt.gettext("5. Drag and drop the dropper towards the test tube."));
  $("#theInstruction6").html(gt.gettext("6. Drag the test tube upwards to shake."));
  $("#theInstruction7").html(gt.gettext("7. Drag and drop the dropper towards the test tube."));
  $("#theInstruction8").html(gt.gettext("8. Drag the test tube and drop it in the empty test tube."));
  $(".nextBtn").html(gt.gettext("Next"));
});

$(document).ready(function () {



  drop = false;
  // ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes)
  DragElement("#theFirstwater_bootle", "", "#theFirstwater_bootle", 0, 345, 90, 51)
  removeTrip()
  $("#firstpageFirstDropareaDiv").droppable({
    tolerance: "touch",
    accept: "#theFirstwater_bootle", drop: function () {
      drop = true;
      bottleAnimate()
      helpCount = 1;

      $("#theFirstwater_bootle").css({ "cursor": "auto" })
      $("#theFirstDragabbletesttube_div").css({ "cursor": "grab" })

      setTimeout(function () {
        // $("#firstPageFirst_Testube_water").show("blind", { direction: "up" });
        $("#firstPageFirst_Testube_water").fadeIn();
      }, 900);


      DragElement("#theFirstDragabbletesttube_div", "", "#theFirstDragabbletesttube_div", 0, 11, 41, 51.3)

      $("#firstpageKibbsTestubedroparea").droppable({
        tolerance: "touch",
        accept: "#theFirstDragabbletesttube_div", drop: function () {
          drop = true;
          helpCount = 2;

          $("#theFirstDragabbletesttube_div").animate({ left: 70 + "%", top: 56 + "%" }, function () {
            $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 11 + 'deg)' })

            $(".firstPage-Kibbs-tapclose").css({ "cursor": "pointer" })
            $(".firstPage-Kibbs-tapopen").css({ "cursor": "pointer" })
          })
          $("#firstPageKibbs-close").click(function () {
            $(this).hide()
            $("#firstPageKibbs-open").show();
            helpCount = 3;
            $("#theCommonWarningfunction").fadeIn();

            $("#kipsgaspassingmsgmaindiv").show("blind", { direction: "down" });

            // ********************************************************The warning msg
            // inference(Firstpage, "#TheWarning_img", 4000)

            $("#theFirstDragabbletesttube_div").css({ "cursor": "auto" })

            $("#firstPageKibbs-open").click(function () {
              $(this).hide();
              $("#theCommonWarningfunction").fadeOut();
              $("#firstPageKibbs-close").show();
              $(".firstPage-Kibbs-tapclose").css({ "pointer-events": "none" });
              helpCount = 4;
              $("#kipsgaspassingmsgmaindiv").hide("blind", { direction: "down" });


              $("#firstpageKibbsTestubedroparea").hide();

              setTimeout(function () {
                $("#theFirstDragabbletesttube_div").animate({ left: 41 + "%", top: 51.3 + "%" })
                $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 0 + 'deg)' })
                drop = false;
                $("#FirstDropperdiv").css({ "cursor": "grab" })

                DragElement("#FirstDropperdiv", "", "#FirstDropperdiv", 0, 0, 60.3, 42.8)

              }, 2000);
            })


          })



          $("#theFirstDragabbletesttube_div").draggable({ disabled: true });

          $("#firstpageFirstDropareaDiv").droppable({
            tolerance: "touch",
            accept: "#FirstDropperdiv", drop: function () {
              drop = true;
              helpCount = 5;
              $("#FirstDropperdiv").css({ "cursor": "auto" })



              $("#FirstDropperdiv").animate({ left: 39.9 + "%", top: 17.1 + "%" })
              $("#FirstDropperdiv").draggable({ disabled: true });



              waterDrop(2)
              $("#firstPage_Dropper_solution").animate({ top: 59 + "%" }, 2000)
              setTimeout(function () {
                ImageAnimationOneTime("testtubeWater1Animation_class", "newtesttubeWater1Animation", Firstimage, 100, 0)

              }, 1800)

              setTimeout(function () {
                $("#FirstDropperdiv").animate({ left: 60.3 + "%", top: 42.8 + "%" })
                $("#firstPage_Dropper_solution").animate({ top: 48 + "%" })

                drop = false;
                $("#testubeShakeArea").show();
                $("#FirstDropperdiv").draggable({ disabled: true });
                $("#firstpageFirstDropareaDiv").hide();
                $("#theFirstDragabbletesttube_div").draggable({ disabled: false });
                $("#theFirstDragabbletesttube_div").css({ "cursor": "grab" })


                DragElement("#theFirstDragabbletesttube_div", "", "#theFirstDragabbletesttube_div", 0, 0, 41, 51.3)
                $("#testubeShakeArea").show();
              }, 3000)


              $("#testubeShakeArea").droppable({
                tolerance: "touch",
                accept: "#theFirstDragabbletesttube_div", drop: function () {
                  drop = true;
                  ShakingTemp()
                  helpCount = 6;

                  $("#theFirstDragabbletesttube_div").draggable({ disabled: true });
                  $("#testubeShakeArea").hide()
                  $("#FirstDropperdiv").css({ "cursor": "grab" })

                  setTimeout(function () {
                    drop = false;
                    $("#FirstDropperdiv").draggable({ disabled: false });
                    $("#firstpageFirstDropareaDiv2").show();
                    DragElement("#FirstDropperdiv", "", "#FirstDropperdiv", 0, 0, 60.3, 42.8)

                    $("#firstpageFirstDropareaDiv2").droppable({
                      tolerance: "touch",
                      accept: "#FirstDropperdiv", drop: function () {
                        drop = true;
                        helpCount = 7;
                        $("#FirstDropperdiv").css({ "cursor": "auto" })


                        $("#FirstDropperdiv").animate({ left: 39.9 + "%", top: 17.1 + "%" })
                        waterDrop(2)
                        $("#firstPage_Dropper_solution").animate({ top: 59 + "%" }, 2000)
                        setTimeout(function () {
                          ImageAnimationOneTime("testtubeWater2Animation_class", "newtesttubeWater2Animation", secondAnimation, 100, 0)
                        }, 400);


                        setTimeout(function () {
                          $("#firstPageFirst_Testube_milkywater").fadeIn(500);
                          $("#firstPageFirst_Testube_water").fadeOut();
                        }, 2300)
                        setTimeout(function () {
                          $("#FirstDropperdiv").animate({ left: 60.3 + "%", top: 42.8 + "%" })
                          drop = false;
                          $("#firstPage_Dropper_solution").animate({ top: 48 + "%" })
                          $("#theFirstDragabbletesttube_div").css({ "cursor": "grab" })
                          $("#FirstDropperdiv").draggable({ disabled: true });
                          $("#firstpageFirstDropareaDiv2").hide();
                          $("#firstpageTestubeDropper").show();
                          $("#theFirstDragabbletesttube_div").draggable({ disabled: false });

                          DragElement("#theFirstDragabbletesttube_div", "", "#theFirstDragabbletesttube_div", 0, 0, 41, 51.3)

                        }, 3000)
                        $("#firstpageTestubeDropper").droppable({
                          tolerance: "touch",
                          accept: "#theFirstDragabbletesttube_div", drop: function () {
                            drop = true;
                            //
                            helpCount = 8;

                            $("#theFirstDragabbletesttube_div").animate({ left: 24.5 + '%', top: 23 + '%' }, function () {
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 316 + 'deg)' }, 200)
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 295 + 'deg)' }, 200)
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 283 + 'deg)' }, 200)
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 275 + 'deg)' }, 200)
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 270 + 'deg)' }, 200)
                              $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 265 + 'deg)' }, 200)
                              $("#firstPageFirst_Testube_milkywater").fadeOut();
                              $("#firstPageSolutionDrop").fadeIn();
                              $("#theFirstDragabbletesttube_div").animate({ left: 25.5 + '%', top: 26 + '%' }, function () {
                                $("#firstPageFirst_Testube_milkywater2").show("blind", { direction: "down" });
                                $("#firstPageSolutionDrop").fadeOut();
                                $("#theFirstDragabbletesttube_div").draggable({ disabled: true });
                                setTimeout(function () {
                                  $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 256 + 'deg)' }, 200)
                                  $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 3 + 'deg)' }, 200)
                                  $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 2 + 'deg)' }, 200)
                                  $("#theFirstDragabbletesttube_div").css({ transform: 'rotate(' + 0 + 'deg)' }, 200)
                                  $("#theFirstDragabbletesttube_div").animate({ left: 41 + '%', top: 52 + '%' })

                                }, 1000)

                                setTimeout(() => {
                                  $("#FistPageText").fadeIn();
                                  $("#colloidalfirstpagelabel").fadeIn();
                                  $("#FirstNext").fadeIn();
                                }, 2000);

                              })
                            })
                          }
                        })
                      }
                    })
                    // $("#firstPageFirst_Testube").draggable({ disabled: false });
                  }, 2000)
                }
              })
            }
          })
        }
      })
    }
  })
  $("#FirstNext").click(function () {
    $(this).hide();
    $("#first_page_Div").fadeOut();
    $("#theSecondPageDiv").fadeIn();
    drop = false;
    helpCount = 9;
    removeTrip()

    // the Helpinst2
    $("#theInstruction2").html(gt.gettext("2. Drag the spatula and drop it in the watch glass."))
    $("#theInstruction3").html(gt.gettext("3. Drag the spatula and drop it in the test tube."))
    $("#theInstruction4").html(gt.gettext("4. Drag the test tube upwards to shake."))

    $("#theInstruction5").hide();
    $("#theInstruction6").hide();
    $("#theInstruction7").hide();
    $("#theInstruction8").hide();
    $("#theInstruction9").hide();

  })

  $('#changeScreenBtn').bind('click', function () {
    if (tripFlag) {

      pauseTrip1();
      setTimeout(function () {
        resumeTrip1();
      }, 1000);


    }

  });
});


function DragElement(id, shadowid, rotatepos, dragdegree, dropdegree, settimeLeft, settimeTop) {
  $(id).draggable({
    revert: function () {
      if (!drop) {
        drop = true;
        $(shadowid).fadeIn();
        $(rotatepos).css({ transform: 'rotate(' + dragdegree + 'deg)' })
        setTimeout(function () {
          $(id).animate({ left: settimeLeft + "%", top: settimeTop + "%" })


        }, 600);

        return true


      }
    }, drag: function () {
      drop = false;
      $(rotatepos).css({ transform: 'rotate(' + dropdegree + 'deg)' })
      $(shadowid).fadeOut();

      $("#theInferenceMsg").fadeOut();
      $("#theCommonWarningfunction").fadeOut()
      removeTrip()
      $(".nonFilterpowdered").fadeOut();

    }
  });
}
function bottleAnimate() {

  $("#theFirstwater_bootle").animate({ left: 52.7 + "%", top: 20 + "%" }, function () {

    $("#theFirstwater_bootle").css({ transform: 'rotate(' + 289 + 'deg)' })

    $("#waterTothetestube").show("blind", { direction: "up" });
    $("#waterTothetestube").fadeOut()
  })
  setTimeout(function () {
    $("#theFirstwater_bootle").animate({ left: 90 + "%", top: 51 + "%" })
    $("#theFirstwater_bootle").css({ transform: 'rotate(' + 0 + 'deg)' })
    drop = false;
  }, 1000);
  $("#theFirstwater_bootle").draggable({ disabled: true });


}
function waterDrop(a) {
  $("#waterDroptoTesttube").fadeIn(1500);
  setTimeout(function () {
    for (i = 0; i < a; i++) {
      $("#waterDroptoTesttube").animate({ top: 48 + "%", opacity: "1" }, 'linear');
      $("#waterDroptoTesttube").animate({ top: 67 + "%", opacity: "0" }, 'linear');
      $("#waterDroptoTesttube").animate({ top: 70 + "%" }, 200, 'linear');
      $("#waterDroptoTesttube").animate({ top: 47 + "%" }, 200, 'linear');

    }
  }, 200)

}
function ShakingTemp() {

  for (var i = 0; i <= 6; i++) {
    $('#theFirstDragabbletesttube_div').animate(
      { deg: -10 },
      {
        duration: 100,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
    $('#theFirstDragabbletesttube_div').animate(
      { deg: 10 },
      {
        duration: 100,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
  }
  $('#theFirstDragabbletesttube_div').animate(
    { deg: 0 },
    {
      duration: 100,
      step: function (now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    });
  $("#theFirstDragabbletesttube_div").css({ left: 42 + "%", top: 10 + "%" })
  $("#theFirstDragabbletesttube_div").css({ "cursor": "default" })

  setTimeout(function () {
    $("#theFirstDragabbletesttube_div").animate({ left: 41 + "%", top: 52 + "%" })

  }, 2000)
}
function removeTrip() {
  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;
  }

}


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

function inference(inferenceMessageArray, imageId, thedelay) {
  // alert(thePosition)
  tripFlag = true;
  $("#theInferenceMsg").fadeIn();
  $(imageId).fadeIn();
  var trip = new Trip([

    {
      sel: $("#theInferenceMsg"),
      position: 'e',
      content: inferenceMessageArray,
      expose: false,
      delay: thedelay

    },

  ], {

    backToTopWhenEnded: true,
    delay: 2000
  });
  trip.start();
  window.trip = trip;
  $(imageId).click(function () {
    var trip = new Trip([
      {
        sel: $("#theInferenceMsg"),
        position: 'e',
        content: inferenceMessageArray,
        expose: false,
        delay: thedelay

      },

    ], {

      backToTopWhenEnded: true,
      delay: 2000
    });
    trip.start();
    window.trip = trip;

  })

}
function getLang(){
  
}