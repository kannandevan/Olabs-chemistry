sceneFlag = 0;
var infs = 0;
var alertmsg = 1;
window.onload = function () {

  gt = new Gettext({ 'domain': 'messages' });
  alertmsges = [gt.gettext("Clean it properly with a sandpaper if it is not shiny"), gt.gettext("Do not stare at the burning Magnesium")];
  help_msg = [gt.gettext("Click on the Burner knob"), gt.gettext("Drag the tongs towards Magnesium Ribbon"), gt.gettext("Drag the Magnesium Ribbon towards burner"), gt.gettext("Drag the water bottle to watch glass"), gt.gettext("Drag the Blue litmus paper to watch glass"), gt.gettext("Drag the Red litmus paper to watch glass")];
  inference = [gt.gettext("When Magnesium Ribbon is burned in the air, <br> it reacts with oxygen to produce white Magnesium oxide MgO,<br> which emits heat and light. Magnesium oxide forms a white powder.<br> To generate this powdery product, Magnesium gives away <br>two electrons to oxygen atoms<br> 2Mg + O<sub>2</sub>⟶ 2MgO")];
  inference2 = [gt.gettext("The burning of Magnesium turns it into <br> Magnesium oxide MgO (white ash) due to reaction with oxygen in air, <br> dissolving MgO in water produces Magnesium hydroxide,<br> MgO +H<sub>2</sub>O = Mg (OH)<sub>2</sub>, Mg(OH)<sub>2</sub> <br>Magnesium hydroxide is basic in nature i.e. <br> it is base which turns Red litmus Blue")];
  Controls_instructions = [gt.gettext("Instructions:"), gt.gettext("1. Click on the Burner knob"), gt.gettext("2. Drag the tongs towards Magnesium Ribbon"), gt.gettext("3. Drag The tongs towards the burner")]
  document.getElementById("expName").innerHTML = gt.gettext("Show that metallic oxides are basic in nature");

  $("#VarHeading_one").text(Controls_instructions[0]);
  $("#VarHeading_two").text(Controls_instructions[1]);
  $("#VarHeading_three").text(Controls_instructions[2]);
  $("#VarHeading_four").text(Controls_instructions[3]);
  clickinfernce="Click on the Inference button";
  resetmsg = "Click on the Reset button <br> to do the experiment again"
};
$(document).ready(function () {
  $("#Burner_On").click(function () {
    sceneFlag = 1;
    removeTrip()
    $("#Burner_On").hide();
    $("#Burner_Off").show();
    $("#flames").fadeIn();
    var flame = setInterval(Theflame, 150);
    drop = false;
    $("#tongs").css({ "cursor": "pointer" });
    alertmsg = 1;
    $("#tongs").draggable({
      revert: function () {
        if (!drop) {
          return true
        }
      }, drag: function () {
        removeTrip()
      }

    });
    $("#FirstDropArea").droppable({
      tolerance: "touch",
      accept: "#tongs", drop: function () {
        drop = true;
        sceneFlag = 2;
        WarningMessage();
        $(".tongs-image").css({ transform: 'rotate(' + 0 + 'deg)' })
        $("#magnesiumribbon_in_tongs").show();
        $("#magnesium_ribbon").hide();
        $("#tongs").animate({ left: 552 + 'px', top: 167 + 'px' }, function () {
          drop = false;
          $("#SecondDropArea").droppable({
            tolerance: "touch",
            accept: "#tongs", drop: function () {
              drop = true;
              sceneFlag = 6;

              $("#inference_button").show();
              alertmsg = 2;
              infs = 1;
              WarningMessage();
              $("#tongs").animate({ left: 22 + '%', top: 35.2 + '%' }, function () {
                $("#magnesiumsmokeeffect").show();
                setInterval(thesmokeeffect, 150);
                $("#tongs").animate({ left: 37 + '%', top: 58.2 + '%' }, function () {
                  $("#tongs").hide();

                  $("#smokeeffect").show();
                  setInterval(TheSmoke, 150);
                  $("#flames").fadeOut(2500);
                  $("#Burner_On").fadeIn(2500);
                  $("#Burner_Off").fadeOut(2500);
		  $("#Burner_On").css("pointer-events", "none");
                  $("#magnesiumribbon_in_tongs").hide();
                  clearInterval(flame);
                  setTimeout(function () {
                    $(".ash-magnesium").show();
                  
                  }, 2700);
                  setTimeout(function () {
                    $("#smokeeffect").hide();
                  }, 5000)

                  drop = false;


                  $("#ThirdDropArea").droppable({
                    tolerance: "touch",
                    accept: "#WaterBottle", drop: function () {
                      drop = true;
                      $("#WaterBottle").animate({ left: 29.5 + '%', top: 33 + '%' }, function () {
                        $("#WaterBottle").css({ transform: 'rotate(' + 278 + 'deg)' })


                        $("#waterDrop_in_watchglass").show();

                        waterDrop();
                        $("#solution_in_watchglass").fadeIn(2000);

                        $("#solution_in_watchglass").animate({ height: 18 + '%', width: 3 + '%', left: 8 + '%', top: '33%' }, function () {
                          $("#ash_Magnesium").animate({ top: 1 + '%', left: 6 + '%', height: 74 + '%' })
                          $("#ash_Magnesium").fadeOut();
                          $("#solution_in_watchglass").animate({ width: 4 + '%', left: 7.5 + '%' }, function () {
                            $("#solution_in_watchglass").animate({ width: 5 + '%', left: 7 + '%', height: 18 + '%' })
                            $("#solution_in_watchglass").animate({ width: 7 + '%', left: 6 + '%', top: 37 + "%" })
                          })
                        })
                        $("#WaterBottle").animate({ left: 29.5 + '%', top: 33 + '%' }, function () {
                          setTimeout(function () {
                            $("#WaterBottle").animate({ left: 85 + '%', top: 50 + '%' })
                            $("#WaterBottle").css({ transform: 'rotate(' + 0 + 'deg)' })
                            $("#watchglass,#ThirdDropArea").animate({ left: 21 + '%' });
                            $("#WaterBottle").draggable("disable");
                            $("#Blue_Litmus_paper").css({ cursor: 'grab' });
                          }, 2999)
                          drop = false;
                          sceneFlag = 4;
                        })
                      })
                      $("#Blue_Litmus_paper").draggable({
                        revert: function () {
                          if (!drop) {
                            return true
                          }
                        }, drag: function () {
                          removeTrip()
                        }
                      });
                      $("#ThirdDropArea").droppable({
                        tolerance: "touch",
                        accept: "#Blue_Litmus_paper", drop: function () {
                          drop = true;
                          $("#Blue_Litmus_paper").css({ cursor: 'default' });
                          $("#Blue_Litmus_paper").animate({ left: 20 + '%', top: 79 + '%' }, function () {
                            $("#Blue_Litmus_paper").css({ transform: 'rotate(' + 7 + 'deg)' })
                            $("#Blue_Litmus_paper").draggable("disable");
                            $("#Red_Litmus_paper").css({ cursor: 'grab' });
                            drop = false;
                          })
                          // drop=false;
                          sceneFlag = 5;

                          $("#Red_Litmus_paper").draggable({

                            revert: function () {
                              if (!drop) {
                                return true
                              }
                            }, drag: function () {
                              removeTrip()
                            }
                          });
                          $("#ThirdDropArea").droppable({
                            tolerance: "touch",
                            accept: "#Red_Litmus_paper", drop: function () {
                              drop = true;
                              infs = 2;
                              $("#inference_button").show();
                              $("#Red_Litmus_paper").animate({ left: 32.6 + '%', top: 79.2 + '%' }, function () {
                                $("#Red_Litmus_paper").css({ transform: 'rotate(' + 353 + 'deg)' })
                                $("#Red_Litmus_paper").fadeOut(1500);
                                $("#Red_to_blue_Litmus_paper").fadeIn(2000);
                                $("#Blue_Litmus_paper").draggable("disable");
                                sceneFlag = 6;


                              })
                            }
                          })
                        }
                      })
                    }
                  })
                })
              })
            }
          }
          )
        })
      }
    }
    )

  })

  function Theflame() {
    if ($('#flame1').css('display') == 'block') {
      $('#flame1,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame2').show();
    } else if ($('#flame2').css('display') == 'block') {
      $('#flame1,#flame2,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame3').show();
    } else if ($('#flame3').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame4').show();
    } else if ($('#flame4').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame5').show();
    } else if ($('#flame5').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame6').show();
    } else if ($('#flame6').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame7').show();
    } else if ($('#flame7').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame8').show();
    } else if ($('#flame8').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame9').show();
    } else if ($('#flame9').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame10').show();
    } else if ($('#flame10').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame11').show();
    } else if ($('#flame11').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame13,#flame14,#flame15').hide();
      $('#flame12').show();
    } else if ($('#flame12').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame14,#flame15').hide();
      $('#flame13').show();
    } else if ($('#flame13').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame15').hide();
      $('#flame14').show();
    } else if ($('#flame14').css('display') == 'block') {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14').hide();
      $('#flame15').show();
    } else {
      $('#flame1,#flame2,#flame3,#flame4,#flame5,#flame6,#flame7,#flame8,#flame9,#flame10,#flame11,#flame12,#flame13,#flame14,#flame15').hide();
      $('#flame1').show();
    }
  }
  function TheSmoke() {
    if ($('#Smoke1').css('display') == 'block') {
      $('#Smoke1,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#flame8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke2').show();
    } else if ($('#Smoke2').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#flame8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke3').show();
    } else if ($('#Smoke3').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke4').show();
    } else if ($('#Smoke4').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke5').show();
    } else if ($('#Smoke5').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke6').show();
    } else if ($('#Smoke6').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke7').show();
    } else if ($('#Smoke7').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke8').show();
    } else if ($('#Smoke8').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke9').show();
    } else if ($('#Smoke9').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke10').show();
    } else if ($('#Smoke10').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke11').show();
    } else if ($('#Smoke11').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke12').show();
    } else if ($('#Smoke12').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke13').show();
    } else if ($('#Smoke13').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke14').show();
    } else if ($('#Smoke14').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke15').show();
    }
    else if ($('#Smoke15').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke17,#Smoke18').hide();
      $('#Smoke16').show();
    }
    else if ($('#Smoke16').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke18').hide();
      $('#Smoke17').show();
    }
    else if ($('#Smoke17').css('display') == 'block') {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17').hide();
      $('#Smoke18').show();
    }
    else {
      $('#Smoke1,#Smoke2,#Smoke3,#Smoke4,#Smoke5,#Smoke6,#Smoke7,#Smoke8,#Smoke9,#Smoke10,#Smoke11,#Smoke12,#Smoke13,#Smoke14,#Smoke15,#Smoke16,#Smoke17,#Smoke18').hide();
      $('#Smoke18').hide();
    }
  }
  function thesmokeeffect() {
    if ($('#magnesium_smoke1').css('display') == 'block') {
      $('#magnesium_smoke1,#magnesium_smoke3,#magnesium_smoke4,#magnesium_smoke5').hide();
      $('#magnesium_smoke2').show();
    } else if ($('#magnesium_smoke2').css('display') == 'block') {
      $('#magnesium_smoke1,#magnesium_smoke2,#magnesium_smoke4,#magnesium_smoke5').hide();
      $('#magnesium_smoke3').show();
    } else if ($('#magnesium_smoke3').css('display') == 'block') {
      $('#magnesium_smoke1,#magnesium_smoke2,#magnesium_smoke3,#magnesium_smoke5').hide();
      $('#magnesium_smoke4').show();
    } else if ($('#magnesium_smoke4').css('display') == 'block') {
      $('#magnesium_smoke1,#magnesium_smoke2,#magnesium_smoke3,#magnesium_smoke4').hide();
      $('#magnesium_smoke5').show();
    }
    else {
      $('#magnesium_smoke1,#magnesium_smoke2,#magnesium_smoke3,#magnesium_smoke4,#magnesium_smoke5').hide();
      $('#magnesium_smoke1').hide();
    }

  }

  function waterDrop() {
    for (i = 0; i < 3; i++) {
      $("#waterDrop_in_watchglass").animate({ top: -122 + "%", opacity: "1" }, 'linear');
      $("#waterDrop_in_watchglass").animate({ top: 20 + "%", opacity: "0" }, 'linear');
      $("#waterDrop_in_watchglass").animate({ top: 25 + "%" }, 100, 'linear');
      $("#waterDrop_in_watchglass").animate({ top: -122 + "%" }, 100, 'linear');

    }
  }


});
function removeTrip() {
  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;
  }


}


function WarningMessage() {
  if (alertmsg == 1) {


    $("#alert_button").show();
    var trip = new Trip([

      {
        sel: $('#alert_button'),
        position: 'e',
        content: alertmsges[0],
        expose: false,

        delay: 4000

      },



    ], {

      backToTopWhenEnded: true,
      delay: 2000
    });
    setTimeout(function () {
      $("#alert_button").hide();
    }, 4400);

  }
  else if (alertmsg == 2) {


    $("#alert_button").show();
    var trip = new Trip([

      {
        sel: $('#alert_button'),
        position: 'e',
        content: alertmsges[1],
        expose: false,

        delay: 4000

      },



    ], {

      backToTopWhenEnded: true,
      delay: 2000
    });
    setTimeout(function () {
      $("#alert_button").hide();
    }, 4400);

  }

  trip.start();
  window.trip = trip;

}

function reset() {

  window.location.reload();
}
