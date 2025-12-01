/*
Developer: Abhijith
Date:10-01-2023
*/

var clickCount = 0;
var beakeranimationImg = []
var helpCount = 0;
$(window).on('load',function() {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("Study the Process of Filtration");

  // ends
  // TheBurretDrop()
  $("#theInstruction1").html(gt.gettext("Instructions:"))
  $(".text_0").html(gt.gettext("1. Drag the funnel and  drop it above the tripod stand. "))
  $(".text_1").html(gt.gettext("2. Click on the filter paper box to open. "))
  $(".text_2").html(gt.gettext("3. Click the filter paper box. "))
  $(".text_3").html(gt.gettext("4. Click the filter paper. "))
  $(".text_4").html(gt.gettext("5. Click and drag the distilled water and   drop it in the filter paper. "))
  $(".text_5").html(gt.gettext("6. Drag the beaker containing muddy water and drop it above the funnel. "))


  FirstfunnelHelp = gt.gettext("Drag the funnel and <br> drop it above the tripod stand");
  FilterpaperClick = gt.gettext("Click on the filter paper box to open")
  FilterpaperClick2 = gt.gettext("Click the filter paper box")
  Filterpaper = gt.gettext("Click the filter paper")
  Waterbottle = gt.gettext("Click and drag the distilled water and <br>  drop it in the filter paper")
  BeakerDrag = gt.gettext("Drag the beaker <br>containing muddy water and drop it above the funnel")
  helpMsg = gt.gettext("Click on the Reset button to do <br> the experiment again");
  infrence1 = gt.gettext("Fold the filter paper properly")
  inference2 = gt.gettext("After the process of filtration, clear water is obtained.<br> Thus, the solid particle is eliminated.")
  Clickinference = gt.gettext("Click on the Inference icon")
});
$(document).ready(function () {


  var simPathx = "../CHE/INC/Study_the_Process_of_Filtration/"
  for (i = 10; i < 74; i++) {
    if (i < 10) {
      console.log("hey")
      var img = "<img src='" + simPathx + "images/BEEKAR ANIMACTION/beekar0001000" + i + ".png' class='beakerAnimationstyle d-none' id='firstAnimationimg" + i + "'>";
      $("#beakerAnimation").append(img);


    }
    else {
      var img = "<img src='" + simPathx + "images/BEEKAR ANIMACTION/beekar000100" + i + ".png' class='beakerAnimationstyle d-none' id='firstAnimationimg" + i + "'>";
      $("#beakerAnimation").append(img);


    }

  }
  // 

  DragElement("#funnelDiv", "", "#funnelDiv", 0, 340, 73.6, 56)

  $("#FirstDroparea").droppable({
    tolerance: "touch",
    accept: "#funnelDiv", drop: function () {
      drop = true;
      helpCount = 1;
      $("#funnelDiv").css({ cursor: "auto " })
      $("#filterpaperBoxClose").css({ cursor: "pointer " })


      $("#funnelDiv").animate({ left: 11 + "%", top: 20 + "%" }, function () {
        $("#funnelDiv").animate({ top: 28 + "%" })
        $(this).css({ transform: 'rotate(' + 0 + 'deg)' })
        $("#funnelDiv").animate({ left: 11 + "%", top: 36 + "%" }, 1200)
        $("#funnelDiv").draggable({ disabled: true });
        $("#filterpaperBoxClose").click(function () {



          $("#filterpaperBoxClose").css({ cursor: "auto " })

          helpCount = 2;
          removeTrip()

          $(this).hide();
          $(this).off('click');

          $("#filterpaperBoxOpen").show();
          $("#filterpaperBoxOpen").css({ cursor: "pointer " })

          $("#filterpaperBoxOpen").click(function () {

            $(this).off('click');


            helpCount = 3;
            removeTrip()

            $("#filterpaperBoxOpen").css({ cursor: "auto " })

            $("#FirstfilterPaper").css({ cursor: "pointer " })

            $("#FirstfilterPaper").fadeIn(200);
            $("#FirstfilterPaper").click(function () {
              $(this).off('click');
              helpCount = 4;
              removeTrip()

              $("#FirstfilterPaper").css({ cursor: "auto " })


              $(this).fadeOut();
              $("#SecondfilterPaper").css({ cursor: "pointer " })

              $("#SecondfilterPaper").fadeIn();
              thewarningMessage(infrence1, "#ThealertMSg", 3000)


              $("#SecondfilterPaper").click(function () {
                $(this).off('click');
                helpCount = 5;
                removeTrip()
                $("#theInferenceMsg").fadeOut();
                $("#ThealertMSg").hide();


                $("#SecondfilterPaper").css({ cursor: "auto " })


                $(this).animate({ top: 9 + "%", height: 69 + "%", left: 25.4 + "%" }, 1200)
                setTimeout(() => {
                  $("#SecondfilterPaper").fadeOut();
                  $("#theFilterAnimation").fadeIn();
                  $("#theFilterAnimation").css({ cursor: "pointer " })

                  $("#theFilterAnimation").click(function () {
                    $(this).off('click');
                    helpCount = 6;
                    removeTrip()

                    $("#theFilterAnimation").css({ cursor: "auto " })

                    $("#firStFilterpaper7").css({ cursor: "pointer " })


                    setInterval(thefirstSetofAnimation, 250)
                    $("#firStFilterpaper7").click(function () {
                      $(this).off('click');
                      $("#firStFilterpaper7").css({ cursor: "auto " })

                      helpCount = 7;
                      removeTrip()
                      $("#firStFilterpaper14").css({ cursor: "pointer " })


                      //  $("#firStFilterpaper7").hide();
                      setInterval(theSecondAnimation, 250)
                    })
                    $("#firStFilterpaper14").click(function () {
                      $(this).off('click');
                      $("#firStFilterpaper14").css({ cursor: "auto " })

                      helpCount = 8;
                      removeTrip()
                      $("#waterBottle").css({ cursor: "pointer " })

                      setInterval(theThirdAnimation, 300)


                      DragElement("#waterBottle", "", "#waterBottle", 0, 340, 88, 45)

                      $("#FirstDroparea").droppable({
                        tolerance: "touch",
                        accept: "#waterBottle", drop: function () {
                          drop = true;
                          helpCount = 9;
                          $("#waterBottle").css({ cursor: "auto " })

                          $("#waterBottle").draggable({ disabled: true });

                          $("#waterBottle").css({ transform: 'rotate(' + 289 + 'deg)' })

                          $("#waterBottle").animate({ left: 28 + "%", top: 14 + "%" })

                          setTimeout(() => {
                            $("#FirstWaterDrop").fadeIn();

                            waterDrop("#FirstWaterDrop")

                            setTimeout(() => {
                              $("#waterBottle").animate({ left: 24 + "%", top: 14 + "%" })

                              setTimeout(() => {
                                $("#FirstWaterDrop2").fadeIn();

                                waterDrop("#FirstWaterDrop2")
                                $(".finalFunnelfilterPaper").animate({ top: -5 + "%" })


                                setTimeout(() => {
                                  $("#waterBottle").animate({ left: 19 + "%", top: 14 + "%" })
                                  setTimeout(() => {
                                    $("#FirstWaterDrop3").fadeIn();
                                    waterDrop("#FirstWaterDrop3")
                                    $(".finalFunnelfilterPaper").animate({ top: -4 + "%" })
                                    setTimeout(() => {
                                      $("#waterBottle").css({ transform: 'rotate(' + 0 + 'deg)' })
                                      $("#waterBottle").animate({ left: 88 + "%", top: 45 + "%" })
                                      $("#Secondwaterbeaker").css({ cursor: "pointer " })





                                      DragElement("#Secondwaterbeaker", "", "#Secondwaterbeaker", 0, 340, 33, 48)

                                      $("#FirstDroparea").droppable({
                                        tolerance: "touch",
                                        accept: "#Secondwaterbeaker", drop: function () {
                                          drop = true;
                                          $("#Secondwaterbeaker").css({ cursor: "auto " })


                                          $("#Secondwaterbeaker").hide();
                                          setTimeout(() => {
                                            $("#waterPourFunnel").fadeIn(300);
                                            $("#waterPourFunnel").animate({ left: 43 + "%", top: -16 + "%" }, 300)
                                          }, 3800);
                                          WaterAnimate()

                                          setTimeout(() => {
                                            $("#thewatersplashDiv").fadeIn();

                                            var splash = setInterval(watersplash, 100)

                                            $("#FinalBeakerWater").show("blind", { direction: "down" }, 2500)
                                            // clearInterval(splash)

                                            $("#particleInfilterpapaer").fadeIn(1000)
                                            $("#particleInfilterpapaer2").fadeIn(1000)


                                            setTimeout(() => {
                                              setTimeout(() => {
                                                $("#thewatersplashDiv").hide();
                                                $("#ThealertMSg").hide();

                                                inference(inference2, "#theInferenceMsg", 7000)
                                                helpCount = 13;

                                                clearInterval(splash)

                                                $("#thePopUpfilterpaper").show("blind", { direction: "left" }, 2500)

                                                // helpCount=10;




                                              }, 3000);

                                            }, 1200);


                                          }, 4000);


                                        }
                                      })
                                    }, 600);

                                  }, 1000);


                                }, 600);


                              }, 1000);

                            }, 600);

                          }, 1000);

                        }
                      })

                    })
                  })
                }, 1400);
              })
            })
          })
        })
      })


    }
  })
})

function DragElement(id, shadowid, rotatepos, dragdegree, dropdegree, settimeLeft, settimeTop) {
  $(id).draggable({
    containment: "#mainDiv",
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
      removeTrip()

    }
  });
}

function thefirstSetofAnimation() {

  if ($('#firStFilterpaper').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper3,#firStFilterpaper4,#firStFilterpaper5,#firStFilterpaper6,#firStFilterpaper7').hide();
    $('#firStFilterpaper2').show();
  } else if ($('#firStFilterpaper2').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper4,#firStFilterpaper5,#firStFilterpaper6,#firStFilterpaper7').hide();
    $('#firStFilterpaper3').show();
  } else if ($('#firStFilterpaper3').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper3,#firStFilterpaper5,#firStFilterpaper6,#firStFilterpaper7').hide();
    $('#firStFilterpaper4').show();
  } else if ($('#firStFilterpaper4').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper3,#firStFilterpaper4,#firStFilterpaper6,#firStFilterpaper7').hide();
    $('#firStFilterpaper5').show();
  } else if ($('#firStFilterpaper5').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper3,#firStFilterpaper4,#firStFilterpaper5,#firStFilterpaper7').hide();
    $('#firStFilterpaper6').show();
  } else if ($('#firStFilterpaper6').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper3,#firStFilterpaper4,#firStFilterpaper5,#firStFilterpaper6').hide();
    $('#firStFilterpaper7').show();
  } else if ($('#firStFilterpaper7').css('display') == 'block') {
    $('#firStFilterpaper,#firStFilterpaper2,#firStFilterpaper3,#firStFilterpaper4,#firStFilterpaper5,#firStFilterpaper6,#firStFilterpaper7').hide();
    $('#firStFilterpaper7').show();

  }


}
function theSecondAnimation() {
  if ($('#firStFilterpaper7').css('display') == 'block') {
    $('#firStFilterpaper7,#firStFilterpaper9,#firStFilterpaper10,#firStFilterpaper11').hide();
    $('#firStFilterpaper8').show();
  } else if ($('#firStFilterpaper8').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper10,#firStFilterpaper11').hide();
    $('#firStFilterpaper9').show();
  }
  else if ($('#firStFilterpaper9').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper9,#firStFilterpaper11').hide();
    $('#firStFilterpaper10').show();
  }
  else if ($('#firStFilterpaper10').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper9,#firStFilterpaper10').hide();
    $('#firStFilterpaper11').show();
  }
  else if ($('#firStFilterpaper11').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper9,#firStFilterpaper10,#firStFilterpaper11').hide();
    $('#firStFilterpaper12').show();
  }
  else if ($('#firStFilterpaper12').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper9,#firStFilterpaper10,#firStFilterpaper11,#firStFilterpaper12').hide();
    $('#firStFilterpaper13').show();
  }
  else if ($('#firStFilterpaper13').css('display') == 'block') {
    $('#firStFilterpaper8,#firStFilterpaper8,#firStFilterpaper9,#firStFilterpaper10,#firStFilterpaper11,#firStFilterpaper12,#firStFilterpaper13').hide();
    $('#firStFilterpaper14').show();
  }
}
function theThirdAnimation() {
  if ($('#firStFilterpaper14').css('display') == 'block') {
    $('#firStFilterpaper7,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper11,#firStFilterpaper14').hide();
    $('#firStFilterpaper15').show();
  } else if ($('#firStFilterpaper15').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper17,#firStFilterpaper11').hide();
    $('#firStFilterpaper16').show();
  }
  else if ($('#firStFilterpaper16').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper11').hide();
    $('#firStFilterpaper17').show();
  }
  else if ($('#firStFilterpaper17').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17').hide();
    $('#firStFilterpaper18').show();
  }
  else if ($('#firStFilterpaper18').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper18').hide();
    $('#firStFilterpaper19').show();
  }
  else if ($('#firStFilterpaper19').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper19').hide();
    $('#firStFilterpaper20').show();
  }
  else if ($('#firStFilterpaper20').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper20').hide();
    $('#firStFilterpaper21').show();
  }
  else if ($('#firStFilterpaper21').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper21').hide();
    $('#firStFilterpaper22').show();
  }
  else if ($('#firStFilterpaper22').css('display') == 'block') {
    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper22').hide();
    $('#firStFilterpaper23').show();
  }
  else if ($('#firStFilterpaper23').css('display') == 'block') {

    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper23').hide();
    $('#firStFilterpaper24').show();
  }
  else if ($('#firStFilterpaper24').css('display') == 'block') {

    $('#firStFilterpaper15,#firStFilterpaper15,#firStFilterpaper16,#firStFilterpaper17,#firStFilterpaper24').hide();
    $('#firStFilterpaper25').show();
    $("#foldedDilterpaper").fadeIn();
    $("#theFilterAnimation").fadeOut();

    $("#foldedDilterpaper").animate({ top: 22 + "%", height: 31 + "%", left: 7.9 + "%" }, 1800)
    $("#foldedDilterpaper").animate({ top: 34 + "%" }, 1000)
    $("#foldedDilterpaper").fadeOut();
    setTimeout(() => {
      $("#finalFunnelfilterPaper").fadeIn();
    }, 3000);

    $("#filterpaperBoxOpen").hide();
    $("#filterpaperBoxClose").show();
  }
}

function waterDrop(waterdrop) {

  $(waterdrop).animate({ top: 38 + "%", opacity: "1" }, 'linear');
  $(waterdrop).fadeOut();

}

function WaterAnimate() {

  $('#beakerAnimation').animate({ borderSpacing: -90 }, {
    step: function (now, fx) {
      $(this).css('transform', 'rotate(' + now + 'deg)');

      // $(this).animate({left:20+"%",top:2+"%"},2000)




      setTimeout(() => {
        $("#beakerAnimation").css("transform", "rotate(0deg)");
        $("#beakerAnimation").animate({ left: 32 + "%", top: 49 + "%" })
        $("#waterPourFunnel").hide();

      }, 5000);

    },
    duration: 5000

  }, 'non-linear');

  $("#firstAnimationimg10").removeClass("d-none");
  var ii = 10;
  var xx = setInterval(function () {
    $("#firstAnimationimg" + ii).addClass("d-none");
    // console.log("hide "+ii)
    ii++;
    if (ii < 74) {
      // console.log("Show "+ii)

      $("#firstAnimationimg" + ii).removeClass("d-none")
    }

  }, 100)
  setTimeout(() => {

    clearInterval(xx)
    $("#firstAnimationimg73").removeClass("d-none")

  }, 100 * 64);
}


function watersplash() {

  $("#thewatersplashDiv").animate({ top: 65 + "%" }, 2700)

  if ($('#watersplash1').css('display') == 'block') {

    $('#watersplash1,#firStFilterpaper3,#firStFilterpaper4').hide();

    $('#watersplash2').show();

  } else if ($('#watersplash2').css('display') == 'block') {
    $('#watersplash1,#watersplash2,#firStFilterpaper4').hide();
    $('#watersplash3').show();
  }
  else if ($('#watersplash3').css('display') == 'block') {
    $('#watersplash1,#watersplash2,#watersplash3').hide();
    $('#watersplash4').show();
  }
  else if ($('#watersplash4').css('display') == 'block') {
    $('#watersplash1,#watersplash2,#watersplash3,#watersplash4').hide();
    $('#watersplash1').show();
  }
}



function removeTrip() {
  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;
  }

}

function inference(inferenceMessageArray, imageId, thedelay) {
  // alert(thePosition)
  tripFlag = true;

  $("#theInferenceMsg").fadeIn();
  $("#TheInference_img").fadeIn();
  $(imageId).fadeIn();

  $(imageId).click(function () {
   
    helpCount = 10;
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

function thewarningMessage(inferenceMessageArray, imageId, thedelay) {

  tripFlag = true;

  $("#theInferenceMsg").fadeIn();
  $("#ThealertMSg").fadeIn();
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


}