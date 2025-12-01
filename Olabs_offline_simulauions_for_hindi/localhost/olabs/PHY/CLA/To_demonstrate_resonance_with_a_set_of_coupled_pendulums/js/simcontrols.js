// Date:-12-07-2023
// Developer:-ABHIJITH
var help = 0;
var countval = 0;
var Inferenceclick = 0
var inferencerepeate = 0;
$(window).on('load',function() {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("To Demonstrate Resonance with a set of Coupled Pendulums");
  FirstHelpInstruction = "Drag and drop the Scale <br> towards the center of two stands";
  SecondhelpInstruction = "Drag and drop the <br> Pendulums near the scale";
  ThirdhelpInstruction = "Drag the Large <br> pendulum Bob downwards";
  TheinstructionContent = "The heavy pendulum transfers maximum energy to a simple pendulum of the same length.<br>In coupled resonant pendulums, the frequency of one pendulum affects the other as they <br> both swing from the same string.These frequencies interact by transferring energy from the swing of <br>one pendulum to the next, and back eventually to the first. ";
  Clickoninference = "Click on the Inference button"
  reset = "Click on the Reset button <br> to do the experiment again"
  answerhelp = "Choose the right Answer"
  nextbutton = "Click on the<br> Next button"
});
$(document).ready(function () {
  var simPathx = "../PHY/CLA/To_demonstrate_resonance_with_a_set_of_coupled_pendulums/"
  // Common clock animation
  for (i = 1; i < 202; i++) {
    if (i < 10) {
      var img = "<img src='" + simPathx + "images/OSSILATION/OSSILATION000" + i + ".png' class='Finalanimation' id='Thedropabbleanimation" + i + "'>";
      $("#theDropanimationdiv").append(img);
    }
    else if (i < 100) {
      var img = "<img src='" + simPathx + "images/OSSILATION/OSSILATION00" + i + ".png' class='Finalanimation' id='Thedropabbleanimation" + i + "'>";
      $("#theDropanimationdiv").append(img);
    }
    else if (i > 100) {
      var img = "<img src='" + simPathx + "images/OSSILATION/OSSILATION0" + i + ".png' class='Finalanimation' id='Thedropabbleanimation" + i + "'>";
      $("#theDropanimationdiv").append(img);
    }
  }
  $('#scale').css('cursor', 'grab');
  DragElement("#scale", "", "", "", "", 73, 51)
  $("#theresonanceDroparea").droppable({
    accept: "#scale",
    tolerance: "touch",
    drop: function () {
      drop = true;
      help = 1
      $("#scale").animate({ left: 26.2 + "%", top: 13 + "%", width: 33 + "%", height: 7 + "%" })
      $("#firstStand").css('z-index', 1);
      $("#secondStand").css('z-index', 1);
      $('#pendulums').css('cursor', 'grab');
      DragElement("#pendulums", "", "", "", "", 84, 59)
      $("#theresonanceDroparea").droppable({
        accept: "#pendulums",
        tolerance: "touch",
        drop: function () {
          drop = true;
          help = 2
          $("#pendulums").animate({ left: 32.2 + "%", top: 31 + "%" })
          $("#pendulums,#scale").hide()
          $("#Arrow").fadeIn()
          // $("#Dragpendulums").fadeIn();
          $("#dropabbleanimationimage").fadeIn()
          $("#thelabelsDiv").show("blind", { direction: "left" }, 1200);
          $("#thedragabbleinsidedragDiv").draggable({
            containment: "#theresonanceDragcontainerDiv",
            revert: function () {
              if (!drop) {
                countval = 0;
                drop = true;
                $("#theresonanceDragcontainerDiv").hide()
                // $("#Dragpendulums").animate({top:34+"%"})
                $("#dragabbleanimationimage2,#dragabbleanimationimage1,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
                $("#theDropanimationdiv").frameAnimate(5, 1, function (param) {
                  $("#dragabbleanimationimage1").show()
                  $("#theresonanceDragcontainerDiv").show()
                  help = 99
                  $("#InferenceButton").fadeIn()
                  $("#InferenceButton").click(function () {
                    if (inferencerepeate == 0) {
                      ResponsiveHelpMessage('#InferenceButton', "null", 'e', TheinstructionContent, false, 12000)
                      help = 6;
                      $("#FirstNext").fadeIn();
                      $("#FirstNext").click(function () {
                        help = 4
                        removeTrip()
                        $("#FirstNext").remove()
                        $("#FirstNext").hide();
                        QuizCoreExecuter(1, "Which of the simple pendulum oscillates in higher amplitude?", "A", "B", "C", "D", "C", 1, 3)
                      });
                    }
                    else {
                      ResponsiveHelpMessage('#InferenceButton', "null", 'e', TheinstructionContent, false, 12000)
                      help = 5;
                    }
                  });
                })
                return true
              }
            }, drag: function () {
              drop = false;
              countval++;
              $("#dropabbleanimationimage").hide()
              removeTrip()
              if (countval == 1) {
                $("#Arrow").hide("blind", { direction: "down" });

                $("#dragabbleanimationimage1").show()
                $("#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10,").hide()
              }
              if (countval == 20) {
                $("#Arrow").hide("blind", { direction: "down" });

                $("#dragabbleanimationimage2").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 30) {
                $("#dragabbleanimationimage3").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 40) {
                $("#dragabbleanimationimage4").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 50) {
                $("#dragabbleanimationimage5").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 60) {

                $("#dragabbleanimationimage6").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 70) {
                $("#dragabbleanimationimage7").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage8,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval == 80) {
                $("#dragabbleanimationimage8").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage9,#dragabbleanimationimage10").hide()
              }
              if (countval >= 90) {
                $("#dragabbleanimationimage9").show()
                $("#dragabbleanimationimage1,#dragabbleanimationimage2,#dragabbleanimationimage3,#dragabbleanimationimage4,#dragabbleanimationimage5,#dragabbleanimationimage6,#dragabbleanimationimage7,#dragabbleanimationimage8,#dragabbleanimationimage10").hide()
              }
            }
          });
        }
      })
    }
  })
  // Animation
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