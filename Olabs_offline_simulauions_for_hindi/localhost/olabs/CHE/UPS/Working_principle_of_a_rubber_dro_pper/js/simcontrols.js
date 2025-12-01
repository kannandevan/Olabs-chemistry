var temp1, temp2;
var help=0,helpCount=0;
var displayArray = ["block", "none"];
window.onload = function () {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("Working Principle of a Rubber Dropper");
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  // airflow()

  $(document).ready(function () {
    helpMsg = ["Click on the dropper in the stand","Drag the dropper towards the centre of the screen", "Click on the rubber bulb of dropper","Click on the hand to change it back to original position","Drag and drop the dropper towards the beaker","Click the hand","Click on the hand to change it back to original position",
               "Click on the hand","Click on the hand to change it back to original position","Click on the Reset button<br> to redo the experiment"];

    Inference_msg = ["When bulb is pressed, <br>air rushes out from the dropper.<br> Pressure inside the dropper decreases","Air bubbles escapes from the nozzle <br> creating a partial vacuum inside",
                     "When the bulb is released, the water is pushed <br>into the dropper to fill this vacuum because <br>of the greater air pressure on the surface of the beaker.",
                     "When the bulb is pressed harder and released,<br> larger amount of air is pushed out as a result more <br> water is pushed inside the dropper"];

    //.........................................................................start.......................................................................................................

    help=1;
    helpCount=1;

    $("#dropper").click(function () {  // click on dropper and replacing it with dropper with hand
      removeTrip(); 
      helpCount=2;
      $("#dropper").hide();
      $("#dropperInHand1").show();

      $("#dropperInHand1").draggable({  //dragging dropper towards the centre of the screen
        revert: function () {
          if (!temp1) {
            return true
          }
        },
        drag: function () {
          removeTrip();
        }
      })
      $("#dropperAreaDiv").droppable({   //dropping dropper
        accept: "#dropperInHand1",
        drop: function () {
          helpCount=3;
          $("#dropperInHand1").css({ top: 8 + 'px', left: 296 + 'px' });
          temp1 = true;
          $("#dropperInHand1").draggable("disable");
         
          $('#dropperInHand1').click(function () {   // hand click
            removeTrip();
            helpCount=4;
            $("#dropperInHand1").hide();
            $("#dropperInHand2").show();
            var blow = setInterval(airflow, 200);

            setTimeout(function () {
              clearInterval(blow);
              $("#air").fadeOut();
            }, 2500);
            $("#inference1").show();
          });

          $('#dropperInHand2').click(function () {   // hand click
            removeTrip();
            helpCount=5;
            $("#inference1").hide();
            $("#dropperInHand2").hide();
            $("#handInBeaker1").show();


            $("#dropperAreaDiv").hide();

            $("#handInBeaker1").draggable({  //dragging dropper towards the beaker
              revert: function () {
                if (!temp2) {
                  return true
                }
              },
              drag: function () {
                removeTrip();
              }
            })
            $("#beakerDropArea").droppable({   //dropping dropper
              accept: "#handInBeaker1",
              drop: function () {
                helpCount=6;
                $("#handInBeaker1").css({ top: 46 + 'px', left: 216 + 'px' });
                temp2 = true;
                $("#beakerDropArea").hide();
                $("#handInBeaker1").draggable("disable");
                $('#handInBeaker1').click(function () {      //hand click
                 removeTrip();
                  helpCount=7;
                  $("#msg1").text("Pressing the rubber bulb gently")
                    .show()
                    .delay(6000)
                    .fadeOut();
                  $('#handInBeaker1').hide();
                  $("#handInBeaker2").show();
                  var bb = setInterval(bubbleflow, 200);
                  setTimeout(function () {
                    clearInterval(bb);
                    $("#bubbles1").fadeOut();
                  }, 2500);

                  $("#inference2").show();
                  $('#handInBeaker2').click(function () {     //hand click
                    removeTrip();
                    helpCount=8;
                    $("#msg1").remove();
                    $("#inference2").hide();
                    // $('#handInBeaker2').remove(); 
                    $('#handInBeaker1').show();
                    $("#dropperLiquidSmall").fadeIn();
                    $("#inference3").show();
                    $('#handInBeaker2').click(function () {  //hand click
                      removeTrip();
                      helpCount=9;
                      $("#inference3").hide();
                      $("#handInBeaker1").hide();
                      $("#handInBeaker2").hide();
                      $("#handInBeaker3").show();
                      $("#dropperLiquidSmall").hide();
                      var cc = setInterval(bubbleflowLarge, 200);
                      setTimeout(function () {
                        clearInterval(cc);
                        $("#bubbles2").fadeOut();
                      }, 2500);
                      $("#msg2").text("Pressing the rubber bulb hard")
                        .show()
                        .delay(6000)
                        .fadeOut();
                      $('#handInBeaker3').click(function () {     //hand click
                        removeTrip();
                        helpCount=10;
                        $("#handInBeaker3").hide();
                        $("#handInBeaker2").hide();
                        $("#msg2").hide();
                        $('#handInBeaker1').show();
                        $("#dropperLiquidLarge").fadeIn();
                        $("#inference4").show();
                        
                      })
                    })
                    $('#handInBeaker1').off("click");
                  })
                })
              }
            })
          })
        }
      })
    })
  })
 
  $("#reset").click(function () {
    window.location.reload();
  });
}



function airflow() {

  if ($('#a1').css('display') == displayArray[0]) {
    $('#a1,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a2').show();
  } else if ($('#a2').css('display') == displayArray[0]) {
    $('#a1,#a2,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a3').show();
  } else if ($('#a3').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a4').show();
  } else if ($('#a4').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a5').show();
  } else if ($('#a5').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a6').show();
  } else if ($('#a6').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a7').show();
  } else if ($('#a7').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a8').show();
  } else if ($('#a8').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a10,#a11,#a12,#a13').hide();
    $('#a9').show();
  } else if ($('#a9').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a11,#a12,#a13').hide();
    $('#a10').show();
  } else if ($('#a10').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a12,#a13').hide();
    $('#a11').show();
  } else if ($('#a11').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a13').hide();
    $('#a12').show();
  } else if ($('#a12').css('display') == displayArray[0]) {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12').hide();
    $('#a13').show();
  } else {
    $('#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13').hide();
    $('#a1').show();
  }
}

function bubbleflow() {
  if ($('#b1').css('display') == displayArray[0]) {
    $('#b1,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b2').show();
  } else if ($('#b2').css('display') == displayArray[0]) {
    $('#b1,#b2,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b3').show();
  } else if ($('#b3').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b4').show();
  } else if ($('#b4').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b5').show();
  } else if ($('#b5').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b6').show();
  } else if ($('#b6').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b7').show();
  } else if ($('#b7').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b8').show();
  } else if ($('#b8').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b9').show();
  } else if ($('#b9').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b10').show();
  } else if ($('#b10').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b11').show();
  } else if ($('#b11').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b13,#b14,#b15,#b16').hide();
    $('#b12').show();
  } else if ($('#b12').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b14,#b15,#b16').hide();
    $('#b13').show();
  } else if ($('#b13').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b15,#b16').hide();
    $('#b14').show();
  } else if ($('#b14').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b16').hide();
    $('#b15').show();
  } else if ($('#b15').css('display') == displayArray[0]) {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15').hide();
    $('#b16').show();
  } else {
    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12,#b13,#b14,#b15,#b16').hide();
    $('#b1').show();
  }
}

function bubbleflowLarge() {
  if ($('#c1').css('display') == displayArray[0]) {
    $('#c1,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c2').show();
  } else if ($('#c2').css('display') == displayArray[0]) {
    $('#c1,#c2,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c3').show();
  } else if ($('#c3').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c4').show();
  } else if ($('#c4').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c5').show();
  } else if ($('#c5').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c6').show();
  } else if ($('#c6').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c7').show();
  } else if ($('#c7').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c8').show();
  } else if ($('#c8').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c9').show();
  } else if ($('#c9').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c10').show();
  } else if ($('#c10').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c11').show();
  } else if ($('#c11').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c13,#c14,#c15,#c16').hide();
    $('#c12').show();
  } else if ($('#c12').css('display') == displayArray[0]) {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c14,#c15,#c16').hide();
    $('#c13').show();
  } else {
    $('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16').hide();
    $('#c1').show();
  }
}

function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripClickFlag = false;
  }
}

