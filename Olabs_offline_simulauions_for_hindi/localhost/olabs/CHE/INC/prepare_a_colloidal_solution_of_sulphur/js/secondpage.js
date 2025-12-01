var Repeate = 0;
$(document).ready(function () {
  theRepeateSeondpage("#Secondpagewatersolution")


  $("#TheSecondNext").click(function () {
    removeTrip();
    if (Repeate == 0) {

      $("#TheSecondNext").hide();
      $(".Truesolutionpagelabel").hide();
      $("#secondPagelabel").fadeOut();
      $("#theSecondPageDiv").hide()
      $("#theSecondPageDiv").fadeIn()
      $("#secondpagefirstDroparea").fadeIn();
      $("#theFirstwater_bootle2").draggable({ disabled: false });
      $("#Secondpagewatersolution").hide()
      $("#poderOnspatula").animate({ top: 81 + "%", left: 52 + "%" })
      $("#secondnametag").fadeOut();
      $("#secondnametagChalkpowder").fadeIn();
      $("#secondPagelabel").fadeOut();
      $("#Secondpage_powderintesstube").hide();
      theRepeateSeondpage("#Secondpagewatersolution")

      Repeate = 1;
      drop = false;
    }

    else if (Repeate == 1) {
      // the help Instruction 3

      $("#theFirstInstruction").html(gt.gettext("1. Drag and drop the funnel to empty test tube A."))
      $("#theInstruction2").html(gt.gettext("2. Drag and drop the filter paper above the funnel."))
      $("#theInstruction3").html(gt.gettext("3. Drag the test tube and drop it in the empty test tube A."))
      $("#theInstruction4").hide();
      $("#thealertP").html(FirstWarningMsg)
      // End
      drop = false;

      $("#firstFunnel").css({ "cursor": "grab" })

      helpCount = 14;
      $("#TheSecondNext").hide();
      $("#theSecondPageDiv").fadeOut();
      $("#thefourthPage").show();
      DragElement("#firstFunnel", "", "#firstFunnel", 0, 345, 65.4, 64)
      $("#thefirstTestubeareaForPagefour").droppable({
        tolerance: "touch",
        accept: "#firstFunnel", drop: function () {
          drop = true;
          $("#firstFunnel").animate({ left: 36.1 + "%", top: 52 + "%" }, function () {
            $("#firstFunnel").css({ transform: 'rotate(' + 0 + 'deg)' })
            $("#firstFunnel").draggable({ disabled: true });
            $("#firstFunnel").css({ "cursor": "auto" })
            $("#firstFilterpaper").css({ "cursor": "grab" })

            drop = false;
            helpCount = 15;
            DragElement("#firstFilterpaper", "", "#firstFilterpaper", 0, 0, 80, 86)
            $("#thefirstTestubeareaForPagefour").droppable({
              tolerance: "touch",
              accept: "#firstFilterpaper", drop: function () {
                drop = true;
                helpCount = 16;
                $("#firstFilterpaper").animate({ top: 38 + "%", left: 38.5 + "%", height: 4 + "%" }, function () {
                  $("#firstFilterpaper").hide()

                  $("#filterpaperAnimation").show();

                  filterpaperaligh(".filterpaperanim1", "absolute", 35, 38.5);
                  setInterval(filterpaperanim, 100);
                  setTimeout(function () {
                    $("#Filterpaperanim29").animate({ top: 47 + '%' })
                    $("#Filterpaperanim30").animate({ top: 47 + '%' })
                    $("#filterpaperAnimation").fadeOut();
                    $("#firstestubfilterpaper").fadeIn();
                    $("#Dragabbletesttube1").css({ "cursor": "grab" })
                    drop = false;
                    DragElement("#Dragabbletesttube1", "", "#Dragabbletesttube1", 0, 0, 5.5, 47)
                  }, 4000)
                  $("#thefirstTestubeareaForPagefour").droppable({
                    tolerance: "touch",
                    accept: "#Dragabbletesttube1", drop: function () {
                      drop = true;

                      $("#collidalhover").remove();
                      $("#Dragabbletesttube1").draggable({ disabled: true });
                      $("#Dragabbletesttube1").animate({ left: 43 + "%", top: 28 + "%" }, function () {
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 316 + 'deg)' }).delay(400)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 295 + 'deg)' }).delay(400)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 283 + 'deg)' }).delay(400)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 280 + 'deg)' }).delay(400)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 279 + 'deg)' }).delay(200)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 275 + 'deg)' }).delay(200)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 270 + 'deg)' }).delay(100)
                        $("#Dragabbletesttube1").css({ transform: 'rotate(' + 264 + 'deg)' })
                        $("#firstestubMilkySolutiopagefour").show("blind", { direction: "down" });
                        $("#firstestubMilkySolutiopagefourBeforepour").fadeOut()
                        $("#MilkyPoursolution").fadeIn(500);
                        $("#Dragabbletesttube1").css({ "cursor": "auto" })
                        drop = false;
                        inference(TheFirstInference_msg, "#TheInference_img", 7000)
                        setTimeout(() => {
                          $("#Dragabbletesttube1").css({ transform: 'rotate(' + 0 + 'deg)' })
                          $("#MilkyPoursolution").fadeOut();
                          $("#firstestubMilkySolutiopagefourAferpour").fadeIn()
                          $("#Dragabbletesttube1").animate({ left: 5.5 + "%", top: 47 + "%" })
                         
                          $("#thefirstTestubeareaForPagefour").hide();
                          $("#nonFilterpowder").show("blind", { direction: "up" });
                          setTimeout(() => {
                            $("#firstestubfilterpaper").fadeOut();
                            $("#firstFunnel").animate({ top: 64 + "%", left: 65.4 + "%" })
                          }, 5000);

                        }, 1000);
                        helpCount = 17;
                        setTimeout(() => {
                        }, 5000);
                        $("#firstFunnel").draggable({ disabled: false });

                        $("#firstFunnel").css({ "cursor": "grab" })
                  // Start
                        DragElement("#firstFunnel", "", "#firstFunnel", 0, 345, 65.4, 64)
                        $("#theSecondTestubeareaForPagefour").droppable({
                          tolerance: "touch",
                          accept: "#firstFunnel", drop: function () {
                            drop = true;
                            $("#TheInference_img").hide();

                            $("#theCommonWarningfunction").fadeIn()

                            $("#firstFunnel").animate({ left: 43.1 + "%", top: 52 + "%" }, function () {
                              $("#firstFunnel").css({ transform: 'rotate(' + 0 + 'deg)' })
                              drop = false;
                              $("#SecondFilterpaper").css({ "cursor": "grab" })

                              $("#firstFunnel").draggable({ disabled: true });

                              DragElement("#SecondFilterpaper", "", "#SecondFilterpaper", 0, 0, 88, 80)

                              $("#theSecondTestubeareaForPagefour").droppable({
                                tolerance: "touch",
                                accept: "#SecondFilterpaper", drop: function () {
                                  drop = true;
                                  $("#SecondFilterpaper").animate({ top: 38 + "%", left: 45.5 + "%", height: 4 + "%" }, function () {
                                    $("#SecondFilterpaper").hide()


                                    $("#Filterpaperanim1").show()

                                    $("#filterpaperAnimation").show();
                                    filterpaperaligh(".filterpaperanim1", "absolute", 35, 45.5);
                                    setInterval(filterpaperanim, 500);

                                    setTimeout(function () {
                                      $("#Filterpaperanim29").animate({ top: 47 + '%' })
                                      $("#Filterpaperanim30").animate({ top: 47 + '%' })
                                      $("#filterpaperAnimation").fadeOut();
                                      $("#Secondtestubfilterpaper").fadeIn();
                                      drop = false;
                                      $("#Dragabbletesttube2").css({ "cursor": "grab" })
                                      DragElement("#Dragabbletesttube2", "", "#Dragabbletesttube2", 0, 0, 12.5, 47)


                                    }, 3000)


                                    $("#theSecondTestubeareaForPagefour").droppable({
                                      tolerance: "touch",
                                      accept: "#Dragabbletesttube2", drop: function () {
                                        drop = true;

                                        $("#truesolhover").remove()
                                        $("#Dragabbletesttube2").css({ "cursor": "auto" })

                                        $("#Dragabbletesttube2").draggable({ disabled: true });

                                        $("#Dragabbletesttube2").animate({ left: 50 + "%", top: 28 + "%" }, function () {
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 316 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 295 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 290 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 287 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 283 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 279 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 275 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 270 + 'deg)' })
                                          $("#Dragabbletesttube2").css({ transform: 'rotate(' + 264 + 'deg)' })
                                          $("#firstestubMilkySolutiopagefour").show("blind", { direction: "down" });
                                          $("#WaterBeforepourIntestube").fadeOut()
                                          $("#WaterAfterpourIntestube5ml").fadeIn();
                                          $("#waterpourhalfwater").fadeIn(500);
                                          drop = false;
                                          inference(theSecondInference_msg, "#TheInference_img", 7000)
                                          setTimeout(() => {
                                            $("#Dragabbletesttube2").css({ transform: 'rotate(' + 0 + 'deg)' })
                                            $("#waterpourhalfwater").fadeOut();
                                            $("#MilkyPoursolution").fadeOut();
                                            $("#WaterBeforepourIntestubeHalf").fadeIn()
                                            $("#Dragabbletesttube2").animate({ left: 12.5 + "%", top: 47 + "%" })
                                            $("#nonFilterpowder").show("blind", { direction: "up" });
                                            $("#theSecondTestubeareaForPagefour").hide();

                                            $("#firstFunnel").css({ "cursor": "grab" })
                                            setTimeout(() => {
                                              $("#Secondtestubfilterpaper").fadeOut();
                                            $("#firstFunnel").animate({ top: 64 + "%", left: 65.4 + "%" })
                                            }, 5000);
                                            $("#firstFunnel").draggable({ disabled: false });
                                          }, 1000);

                                          // thirdStarts
                                          DragElement("#firstFunnel", "", "#firstFunnel", 0, 345, 65.4, 64)
                                          $("#theThirdTestubeareaForPagefour").droppable({
                                            tolerance: "touch",
                                            accept: "#firstFunnel", drop: function () {
                                              drop = true;
                                              $("#firstFunnel").animate({ left: 50.1 + "%", top: 52 + "%" }, function () {
                                                $("#firstFunnel").css({ transform: 'rotate(' + 0 + 'deg)' })
                                                drop = false;
                                                $("#firstFunnel").draggable({ disabled: true });
                                                $("#ThirdFilterpaper").css({ "cursor": "grab" })
                                                DragElement("#ThirdFilterpaper", "", "#ThirdFilterpaper", 0, 0, 80.5, 74)
                                                $("#theThirdTestubeareaForPagefour").droppable({
                                                  tolerance: "touch",
                                                  accept: "#ThirdFilterpaper", drop: function () {
                                                    drop = true;
                                                    $("#ThirdFilterpaper").animate({ top: 38 + "%", left: 52.5 + "%", height: 4 + "%" }, function () {
                                                      $("#ThirdFilterpaper").hide()

                                                      $("#filterpaperAnimation").fadeIn();
                                                      $("#Filterpaperanim1").show()
                                                      $("#filterpaperAnimation").show();
                                                      filterpaperaligh(".filterpaperanim1", "absolute", 35, 52.5);
                                                      setInterval(filterpaperanim, 700);

                                                      setTimeout(function () {
                                                        $("#Filterpaperanim29").animate({ top: 47 + '%' })
                                                        $("#Filterpaperanim30").animate({ top: 47 + '%' })
                                                        $("#filterpaperAnimation").fadeOut();
                                                        $("#Thirdtestubfilterpaper").fadeIn();
                                                        $("#Dragabbletesttube3").css({ "cursor": "grab" })

                                                        drop = false;
                                                        DragElement("#Dragabbletesttube3", "", "#Dragabbletesttube3", 0, 0, 19.5, 47)
                                                      }, 3000)
                                                      $("#theThirdTestubeareaForPagefour").droppable({
                                                        tolerance: "touch",
                                                        accept: "#Dragabbletesttube3", drop: function () {
                                                          drop = true;

                                                          $("#Suspednionhover").remove();
                                                          $("#Dragabbletesttube3").draggable({ disabled: true });

                                                          $("#Dragabbletesttube3").animate({ left: 57 + "%", top: 28 + "%" }, function () {
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 316 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 295 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 290 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 283 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 280 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 278 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 275 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 270 + 'deg)' })
                                                            $("#Dragabbletesttube3").css({ transform: 'rotate(' + 264 + 'deg)' })
                                                            $("#firstestubMilkySolutiopagefour").show("blind", { direction: "down" });
                                                            $("#waterBeforePourtestubethree").fadeOut()
                                                            $("#thirdtestubePowder").fadeOut();
                                                            $("#WaterAfterpourIntestube5mlTestubethree").fadeIn();
                                                            $("#waterpourhalfwatertestubethree").fadeIn(500);
                                                            $(".control-div").animate({ scrollTop: '600px' });
                                                            inference(theThirdInference_msg, "#TheInference_img", 7000)

                                                            setTimeout(() => {
                                                              $("#Dragabbletesttube3").css({ transform: 'rotate(' + 0 + 'deg)' })
                                                              $("#waterpourhalfwatertestubethree").fadeOut();
                                                              $("#MilkyPoursolution").fadeOut();
                                                              $("#halfwaterpourtestube").fadeIn()
                                                              $("#Dragabbletesttube3").animate({ left: 19.5 + "%", top: 47 + "%" })

                                                              $("#Filterpowderimg").show("blind", { direction: "up" });
                                                              $("#firstFunnel").css({ "cursor": "auto" })
                                                              $("#Dragabbletesttube3").css({ "cursor": "auto" })
                                                              $("#firstFunnel").draggable({ disabled: true });
                                                              $("#theThirdTestubeareaForPagefour").hide();
                                                              setTimeout(() => {
                                                                $("#Thirdtestubfilterpaper").fadeOut();
                                                                $("#firstFunnel").animate({ top: 64 + "%", left: 65.4 + "%" })
                                                              }, 5000);

                                                              setTimeout(() => {
                                                                QuestionHelp2 = 1;

                                                                QuizCoreExecuter(2, gt.gettext("Can filter paper be used to separate colloids?"), gt.gettext("Yes, because the size of the colloidal particle is 100 micrometer"), gt.gettext("No, the size of the colloidal particle is less than 100 nanometers"), "", "", gt.gettext("No, the size of the colloidal particle is less than 100 nanometers"), 1, 2)

                                                              }, 6500);

                                                            }, 1000);
                                                          })
                                                        }
                                                      })
                                                    });
                                                  }
                                                })
                                              })
                                            }
                                          })
                                          // thirdends
                                        })


                                      }
                                    })




                                  });



                                }
                              })


                            })


                          }
                        })

                        // SecondDragDrop End
                      })


                    }
                  })




                });



              }
            })


          })


        }
      })

    }


  })
})



function theRepeateSeondpage(thesolutionid) {
  helpCount = 9;
  $("#theFirstwater_bootle2").css({ "cursor": "grab" })


  DragElement("#theFirstwater_bootle2", "", "#theFirstwater_bootle2", 0, 345, 90, 51)

  $("#secondpagefirstDroparea").droppable({
    tolerance: "touch",
    accept: "#theFirstwater_bootle2", drop: function () {
      drop = true;
      helpCount = 10;
      bottleAnimate2()
      $("#theFirstwater_bootle2").css({ "cursor": "auto" })
      $("#theFirstSpatuladiv").css({ "cursor": "grab" })






      setTimeout(function () {
        // $("#firstPageFirst_Testube_water").show("blind", { direction: "up" });
        $(thesolutionid).fadeIn();

        $("#theFirstSpatuladiv").draggable({ disabled: false });

        DragElement("#theFirstSpatuladiv", "", "#theSpatuladiv", 13, 345, 55, 82)

      }, 900);
      $("#secondpageSeconddroparea").droppable({
        tolerance: "touch",
        accept: "#theFirstSpatuladiv", drop: function () {
          drop = true;
          helpCount = 11;

          $("#theFirstSpatuladiv").draggable({ disabled: true });

          $("#theFirstSpatuladiv").animate({ left: 43.7 + "%", top: 70 + "%" }, function () {
            $("#poderOnspatula").fadeIn();
            $("#theFirstSpatuladiv").draggable({ disabled: false });

            DragElement("#theFirstSpatuladiv", "", "#theSpatuladiv", 345, 345, 44, 71)
            drop = false;
            $("#secondpagefirstDroparea").droppable({
              tolerance: "touch",
              accept: "#theFirstSpatuladiv", drop: function () {
                drop = true;
                helpCount = 12;


                $("#theFirstSpatuladiv").animate({ left: 8 + "%", top: 40 + "%" }, function () {
                  $("#Secondpage_powderintesstube").fadeIn(1000);
                  $(this).css({ transform: 'rotate(' + 243 + 'deg)' }, 200)
                  $(this).css({ transform: 'rotate(' + 341 + 'deg)' }, 200)
                  $("#poderOnspatula").animate({ top: 111 + "%", left: 48 + "%" })
                  $("#theFirstSpatuladiv").draggable({ disabled: true });

                  $("#theFirstSpatuladiv").css({ "cursor": "auto" })

                  $("#Secondpage_powderFalltotestube").show("blind", { direction: "up" }, function () {
                    $("#Secondpage_powderFalltotestube").hide("blind", { direction: "down" })
                  });
                  $("#poderOnspatula").fadeOut();
                  setTimeout(() => {
                    $("#theFirstSpatuladiv").animate({ left: 55 + "%", top: 82 + "%" })
                    $("#theFirstSpatuladiv").css({ transform: 'rotate(' + 0 + 'deg)' })

                    $(".theSpatula_class").css({ transform: 'rotate(' + 13 + 'deg)' }, 200)
                    drop = false;
                  }, 1500);
                  $("#secondpagefirstDroparea").hide();
                  $("#secondPageTestube").css({ "cursor": "grab" })

                  $("#secondPageTestube").draggable({ disabled: false });
                  DragElement("#secondPageTestube", "", "#secondPageTestube", 0, 0, 21.9, 51)
                  $("#secondpagebottleshakearea").droppable({
                    tolerance: "touch",
                    accept: "#secondPageTestube", drop: function () {
                      drop = true;
                      $("#secondPageTestube").draggable({ disabled: true });
                      ShakingTemp2()
                      $("#secondPageTestube").css({ "cursor": "auto" })
                      helpCount = 13;
                      if (Repeate == 0) {
                        $("#Secondpage_powderintesstube").fadeOut(1000);
                      }
                      else {
                        setTimeout(() => {
                          $("#secondPagelabel2").fadeIn();
                          $(".Suspensionsolutionpagelabel").fadeIn();
                        }, 2000);
                      }
                      setTimeout(() => {
                        $("#TheSecondNext").fadeIn()
                        // To show the fourth page next please enter under the if condition
                      }, 2000);
                    }
                  })
                });
              }
            })

          })
        }
      })
    }
  }
  )
}

function bottleAnimate2() {

  $("#theFirstwater_bootle2").animate({ left: 33.7 + "%", top: 21 + "%" }, function () {

    $("#theFirstwater_bootle2").css({ transform: 'rotate(' + 289 + 'deg)' })

    $(".Secondpage_Watertofirsttesttube_class").show("blind", { direction: "up" });
    $(".Secondpage_Watertofirsttesttube_class").fadeOut()
  })
  setTimeout(function () {
    $("#theFirstwater_bootle2").animate({ left: 88 + "%", top: 46 + "%" })
    $("#theFirstwater_bootle2").css({ transform: 'rotate(' + 0 + 'deg)' })
    drop = false;
  }, 1000);
  $("#theFirstwater_bootle2").draggable({ disabled: true });

}


function ShakingTemp2() {

  for (var i = 0; i <= 6; i++) {
    $('#secondPageTestube').animate(
      { deg: -10 },
      {
        duration: 100,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
    $('#secondPageTestube').animate(
      { deg: 10 },
      {
        duration: 100,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      });
  }
  $('#secondPageTestube').animate(
    { deg: 0 },
    {
      duration: 100,
      step: function (now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    });
  $("#secondPageTestube").css({ left: 21.9 + "%", top: 10 + "%" })
  $("#secondPageTestube").css({ "cursor": "default" })

  setTimeout(function () {

    $("#secondPageTestube").animate({ left: 21.9 + "%", top: 51 + "%" })
    $("#secondPagelabel").fadeIn();

    $(".Truesolutionpagelabel").fadeIn();

  }, 2000)
}


function filterpaperaligh(id, pos, topVal, leftVal) {
  $(id).css({ position: pos, top: topVal + '%', left: leftVal + '%' });
}

function filterpaperanim() {
  filterpaperaligh();

  if ($('#Filterpaperanim1').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim2').show();
  }
  else if ($('#Filterpaperanim2').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim3').show();
  }
  else if ($('#Filterpaperanim3').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim4').show();

  }
  else if ($('#Filterpaperanim4').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim5').show();

  }
  else if ($('#Filterpaperanim5').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim6').show();

  }
  else if ($('#Filterpaperanim6').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim7').show();

  }
  else if ($('#Filterpaperanim7').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim8').show();

  }
  else if ($('#Filterpaperanim8').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim9').show();

  }
  else if ($('#Filterpaperanim9').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim10').show();

  }
  else if ($('#Filterpaperanim10').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim11').show();

  }
  else if ($('#Filterpaperanim11').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim12').show();

  }
  else if ($('#Filterpaperanim12').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim13').show();

  }
  else if ($('#Filterpaperanim13').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim14').show();

  }
  else if ($('#Filterpaperanim14').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim15').show();

  }
  else if ($('#Filterpaperanim15').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim16').show();

  }
  else if ($('#Filterpaperanim16').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim17').show();

  }
  else if ($('#Filterpaperanim17').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim18').show();

  }
  else if ($('#Filterpaperanim18').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim19').show();

  }
  else if ($('#Filterpaperanim19').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim20').show();

  }
  else if ($('#Filterpaperanim20').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim21').show();

  }
  else if ($('#Filterpaperanim21').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim22').show();

  }
  else if ($('#Filterpaperanim22').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim23').show();

  }
  else if ($('#Filterpaperanim23').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim24').show();

  }
  else if ($('#Filterpaperanim24').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim25').show();

  }
  else if ($('#Filterpaperanim25').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim26').show();

  }
  else if ($('#Filterpaperanim26').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim28,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim27').show();

  }
  else if ($('#Filterpaperanim27').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim29,#Filterpaperanim30').hide();
    $('#Filterpaperanim28').show();

  }
  else if ($('#Filterpaperanim28').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#Filterpaperanim30').hide();
    $('#Filterpaperanim29').show();

  }
  else if ($('#Filterpaperanim29').css('display') == 'block') {
    $('#Filterpaperanim1,#Filterpaperanim2,#Filterpaperanim3,#Filterpaperanim4,#Filterpaperanim5,#Filterpaperanim6,#Filterpaperanim7,#Filterpaperanim8,#Filterpaperanim9,#Filterpaperanim10,#Filterpaperanim11,#Filterpaperanim12,#Filterpaperanim13,#Filterpaperanim14,#Filterpaperanim15,#Filterpaperanim16,#Filterpaperanim17,#Filterpaperanim18,#Filterpaperanim19,#Filterpaperanim20,#Filterpaperanim21,#Filterpaperanim22,#Filterpaperanim23,#Filterpaperanim24,#Filterpaperanim25,#Filterpaperanim26,#Filterpaperanim27,#Filterpaperanim28,#BottlecutAnim29').hide();
    $('#Filterpaperanim30').show();
  }
}
function pauseTrip1() {
  if (tripFlag == true) {


    $('.trip-block').hide();
    trip.pause();
  }
}
function resumeTrip1() {

  if (tripFlag == true) {
    if (trip.isLast()) {

      trip.start();
      // tripFlag = false;
    }
    else {

      trip.next();
    }
  }


}