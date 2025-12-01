var drop;
var roll = 0;
var f1 = 0, f2 = 0, f3 = 0, f4 = 0;
var n = 1;
var pg = 0, hlp = 0;
var alertmsg = 1;
var infs = 1;
var finalclick = 0, tempstr = 32;
var thermometerOnFlag = false;
window.onload = function () {
  $("#wateranim_1").hide();
  $("#btn_Nxt").css({"display":"none"});
  $("#btn_Nxt2").css({"display":"none"});
  $("#solution2").css('pointer-events', 'none');
  $("#solution3").css('pointer-events', 'none');
  $("#Secondpage_solution2").css('pointer-events', 'none');
  $("#Secondpage_solution3").css('pointer-events', 'none');
  $("#Secondpage_solution4").css('pointer-events', 'none');
  $("#water_animation_Bottle1").css({"display":"none"});

  gt = new Gettext({ 'domain': 'messages' });

  document.getElementById("expName").innerHTML = gt.gettext("Measure the change in Temperature during Chemical Reactions");
  firstpage_hlp = [gt.gettext("Click the bottle"), gt.gettext("Drag the beaker<br> to weighing machine"), gt.gettext("Click on the tare button to reset value"), gt.gettext("Click the bottle cap to open"), gt.gettext("Click and drag the<br> spatula to the bottle"), gt.gettext("Click and drag the <br> beaker back <br> to  position"), gt.gettext("Click and drag water to beaker"), gt.gettext("Click and drag the <br>glass rod<br> to stir the water")]
  SecondPage_hlp = [gt.gettext("Click the solution"), gt.gettext("Click and drag the solution <br> to Sodium hydroxide beaker"), gt.gettext("Click to open the bottle"), gt.gettext("Drag and drop the bottle")];
  thirdPage_hlp = [gt.gettext("Click and drag the thermometer <br> to the beaker that<br> contains Sodium hydroxide solution"),
  gt.gettext("Click the thermometer"),
  gt.gettext("Repeat the same steps for different beakers"),
  gt.gettext("Drag the beaker of <br> Sodium hydroxide <br> to <br> Hydrochloric acid"),
  gt.gettext("Drag and drop themometer"),
  gt.gettext("Click and drag the <br> glassrod to the beaker"),
  gt.gettext("Drag the beaker of  <br> Ammonium hydroxide <br> to <br>  Barium hydroxide"),
  gt.gettext("Drag and drop themometer"),
  gt.gettext("Click and drag the <br> glassrod to the beaker")]
  alertMSg = [gt.gettext("Normal room temperature is 32°C"), gt.gettext("The mercury level should be below 35°C before use. <br> do not hold the bulb of the thermometer <br> while taking the reading")]
  inference_msg = [gt.gettext("As energy is released an exothermic reaction<br>will cause temperature to increases"), gt.gettext("As energy is absorbed, an endothermic reaction<br>will cause temperature to decreases.")];
  help_repeate = [gt.gettext("Repeat the same steps for different beakers")];
  nextbuttonMsg = "Click on the Next button";
  thirdPage_hlpHydrohelp = "Click and drag the thermometer <br> to the beaker that<br> contains Hydrochloric acid solution"
  thirdPage_hlpBariumhelp = "Click and drag the thermometer <br> to the beaker that<br> contains Barium hydroxide solution"
  theFinalhelpmsg = "Click on the Reset button to<br>redo the experiment"
  Infrenceclick = "Click on the inference button";
}
$(document).ready(function () {
  //first Bottle click

  $("#solution1").click(function () {

    pg = 0
    hlp = 1;
    removeTrip()
    $("#solution1").css('pointer-events', 'none');
    $("#bottle").show();
    $(".bottle_Text").html("Sodium hydroxide");
    $("#rowa2").css('opacity', '0.2');
    $(".bottle_Text").css({ left: 59 + '%' })
    //click event off
    $("#rowa3").css('pointer-events', 'none');
    $("#rowa3").css('opacity', '0.2');

    $("#Beaker-1Img").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".beaker-1Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".beaker-1Shadow").hide();
        removeTrip()
      }
    });

    //end

    //First Beaker Drop FUnction
    $("#FirstDrop").droppable({
      tolerance: "touch",
      accept: "#Beaker-1Img", drop: function () {
        pg = 0
        hlp = 2;
        $(".tare_value").html("0.5");
        drop = true;
        $(".beaker-1Shadow").hide();
        removeTrip()
        $("#Beaker-1Img").css({ left: 81 + '%', top: 36 + '%' });
        $("#Beaker-1Img").draggable("disable");
        $(".tare_Button").css({ "cursor": "pointer" })
        $(".tare_Button").click(function () {
          pg = 0
          hlp = 3;
          removeTrip()

          $(".tare_Button").css({ "cursor": "auto" })
          $(".tare_value").html("0.0");
          $("#bottle_cap").css({ "cursor": "pointer" })
          $("#bottle_cap").click(function () {
            pg = 0
            hlp = 4;
            drop = false;
            removeTrip()
            $("#spatula").css({ "cursor": "grab" })
            $("#bottle_cap").css({ "cursor": "auto" })
            $("#bottle_cap").animate({ left: 68.6 + '%', top: 78.1 + '%' });
            $("#bottle_cap").off('click');
            $("#spatula").draggable({
              cursor: "grab",
              revert: function () {
                if (!drop) {
                  $(".spatula-shadow1").show(500);
                  $("#spatula").css({ transform: 'rotate(' + 0 + 'deg)' })
                  return true;
                }
              }, drag: function () {
                $("#spatula").css({ transform: 'rotate(' + 320 + 'deg)' })
                $(".spatula-shadow1").hide();
                removeTrip()
              }

            });

            $(".tare_Button").off('click');
            $("#powder-DropArea").droppable({
              tolerance: "touch",
              accept: "#spatula",
              drop: function () {
                drop = true;
                pg = 0
                hlp = 5;
                removeTrip()
                $("#spatula").css({ "cursor": "auto" })
                $("#spatula").draggable("disable");
                $("#spatula").animate({ left: 59.6 + '%', top: 61.1 + '%' });
                $(".spatula-powder").show(500);
                $("#spatula").animate({ left: 82.6 + '%', top: 19.1 + '%' }, function () {
                  $(".spatula-powder").fadeOut();
                  $(".powder_Drop").animate({ height: 29 + '%' }, function () {
                    $(".powder_Drop").css({ height: 0 + '%' })
                    $(".thebeaker_Powder").show();
                    $("#bottle_cap").animate({ left: 61.1 + '%', top: 61.9 + '%' }).delay(1000)
                    $(".tare_value").html("4.2");
                    $(".spatula-powder").fadeOut();
                    $(".powder_Drop").css('opacity', '0');
                    $("#spatula").animate({ left: 72 + '%', top: 84 + '%' }).delay(1000)
                    $("#spatula").css({ transform: 'rotate(' + 357 + 'deg)' })
                    $("#FirstDrop").hide();
                    $("#beaker1_Droparea").show();
                    $(".spatula-shadow1").css({ "display": "block" });
                  })
                  drop = false;
                  $("#Beaker-1Img").draggable("enable");
                  $("#Beaker-1Img").draggable({
                    cursor: "grab",
                    revert: function () {
                      if (!drop) {
                        $(".tare_value").html("4.2");
                        return true
                      }
                    }, drag: function () {
                      $(".tare_value").html("0.0");
                      removeTrip()
                    }
                  });
                });
              }
            })
            $("#beaker1_Droparea").droppable({
              tolerance: "touch",
              accept: "#Beaker-1Img",
              drop: function () {
                drop = true;
                removeTrip()
                $("#Beaker-1Img").animate({ left: 1 + '%', top: 56 + '%' }, function () {
                  drop = false;
                });
                $(".beaker-1Shadow").show(500);
                $("#Beaker-1Img").draggable("disable");
                pg = 0
                hlp = 6;
                $("#Beaker-4Img").draggable({
                  cursor: "grab",
                  revert: function () {
                    if (!drop) {
                      $(".beaker-4Shadow").show(500);
                      return true;
                    }
                  }, drag: function () {
                    $(".beaker-4Shadow").hide();
                    removeTrip()

                    $("#beaker1_Droparea").droppable({       //Water Drop functiion
                      tolerance: "touch",
                      accept: "#Beaker-4Img",
                      drop: function () {
                        drop = true;
                        $("#water_animation_Bottle1").css({"display":"block"});
                        $("#Beaker-4Img").animate({ left: 9.1 + '%', top: 17 + '%' }, function () {
                          $(".beaker4_water ").css({ display: 'none' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 316 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 295 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 283 + 'deg)' })
                          $(".waterfallto_beaker1").animate({ width: 7 + '%' }, function () {
                            $(".waterfallto_beaker1").css('opacity', '0');
                            $(".waterfallto_beaker1").hide();
                            pg = 0
                            hlp = 7;
                            $(".beaker-4Shadow").show(500);
                          })
                          var waterAnimationInterval = setInterval(waterDrop, 10);
                          $("#water_falling_down").show();
                          setTimeout(function () {
                            clearInterval(waterAnimationInterval);
                            $("#Waterto_beaker_5").fadeOut();
                          }, 30);
                          $(".beaker1_water").show();
                          $(".beaker1_water").fadeIn(50);
                          $("#Beaker-4Img").animate({ left: 10.1 + '%', top: 17 + '%' }, function () {
                            $("#Beaker-4Img").draggable("disable");
                            setTimeout(function () {
                              $("#Beaker-4Img").animate({ left: 49 + '%', top: 56 + '%' })
                              $("#Beaker-4Img").css({ transform: 'rotate(' + 0 + 'deg)' })
                            }, 300);
                            drop = false;
                            $("#glass_Rod").css({ "cursor": "grab" })
                          });
                          $("#glass_Rod").draggable({
                            cursor: "grab",
                            revert: function () {
                              if (!drop) {
                                $("#glass_Rod").css({ transform: 'rotate(' + 0 + 'deg)' })
                                $(".glassrod_shadow").show(500);
                                return true
                              }
                            }, drag: function () {
                              $("#glass_Rod").css({ transform: 'rotate(' + 115 + 'deg)' })
                              $(".glassrod_shadow").hide();
                              removeTrip()
                              $("#beaker1_Droparea").droppable({
                                tolerance: "touch",
                                accept: "#glass_Rod",
                                drop: function () {
                                  $("#glass_Rod").css({ "cursor": "auto" })
                                  drop = true;
                                  removeTrip()
                                  $("#glass_Rod").css({ top: 41 + '%', left: 3 + '%' })
                                  $("#glass_Rod").css({ transform: 'rotate(' + 90 + 'deg)' })
                                  $("#glass_Rod").animate({ top: 65 + '%', left: -6 + '%' })
                                  $(".thebeaker_Powder").fadeOut(5000);
                                  roadrotatebeaker1();
                                  var setinterGlassrod = setInterval(wateranimate, 100);
                                  $(".beaker1_water").hide();
                                  setTimeout(function () {
                                    clearInterval(setinterGlassrod);
                                    $(".glassrod_shadow").show(550);
                                    $(".beaker1_water").fadeIn();
                                    $("#rowa2").css('opacity', '1');
                                    $("#rowa1").css('opacity', '0.5');
                                    //click event off
                                    $("#rowa3").css('opacity', '.5');
                                    $("#rowa1").css('pointer-events', 'none');
                                    $("#solution2").css('pointer-events', 'auto');
                                  }, 5500);
                                  pg = 0
                                  hlp = 8;
                                  $("#water_animation_Bottle1").fadeOut(7500);
                                  $("#glass_Rod").draggable("disable");
                                }

                              })

                            }

                          });
                        });
                      }
                    });

                  }
                });

              }
            })

            //Water Dragabble
          })
        })
      }

    })

    function roadrotatebeaker1() {
      for (var i = 0; i <= 5; i++) {
        $("#glass_Rod").animate({ top: 65 + '%', left: 2 + '%' });
        $("#glass_Rod").animate({ top: 65 + '%', left: -6 + '%' });
      }
      $("#glass_Rod").animate({ top: 40 + '%', left: 3 + '%' });
      $("#glass_Rod").animate(
        { deg: 0 },
        {
          duration: 120,
          step: function (now) {
            $(this).animate({ top: 88 + '%', left: 78 + '%' });
            $(this).css({ transform: 'rotate(' + now + 'deg)' });

          }
        });
    }
    function wateranimate() {
      if ($('#wateranim_1').css('display') == 'block') {
        $('#wateranim_1,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_2').show();
      } else if ($('#wateranim_2').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_3').show();
      } else if ($('#wateranim_3').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_4').show();
      } else if ($('#wateranim_4').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_5').show();
      } else if ($('#wateranim_5').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_6').show();
      } else if ($('#wateranim_6').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_7').show();
      } else if ($('#wateranim_7').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_8').show();
      } else if ($('#wateranim_8').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_9').show();
      } else if ($('#wateranim_9').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_10').show();
      } else if ($('#wateranim_10').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_11').show();
      } else if ($('#wateranim_11').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_12').show();
      } else if ($('#wateranim_12').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_13').show();
      } else if ($('#wateranim_13').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_15').hide();
        $('#wateranim_14').show();
      } else if ($('#wateranim_14').css('display') == 'block') {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14').hide();
        $('#wateranim_15').show();
      } else {
        $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
        $('#wateranim_1').show();
      }
    }
  })///////////////End


  ////////////////////////////Second Solution///////////////////////////////////////////////////////////////////////////////////////////

  $("#solution2").click(function () {
    pg = 4;
    hlp = 1;
    removeTrip()

    $("#beaker1_Droparea").hide();
    windowResetClick();
    drop = false;
    $("#FirstDrop").show();
    $(".bottle_Text").css({ left: 59 + '%' });
    $(".bottle_Text").css("fontSize", "6.4px");
    $("#solution2").css('pointer-events', 'none');
    $("#rowa1").css('pointer-events', 'none');
    $("#rowa1").css('opacity', '0.2');
    //click event off
    $("#rowa3").css('pointer-events', 'none');
    $("#rowa3").css('opacity', '0.2');
    $("#bottle").show();
    $(".beaker4_water").show();
    $(".bottle_Text").html("Ammonium Chloride");
    $("#Beaker-2Img").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".beaker-2Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".beaker-2Shadow").hide();
        removeTrip()
      }
    });

    //Second Beaker Drop FUnction

    $("#FirstDrop").droppable({
      tolerance: "touch",
      accept: "#Beaker-2Img", drop: function () {
        drop = true;
        removeTrip()
        $(".tare_value").html("0.5");
        $(".beaker-2Shadow").hide();
        $("#Beaker-2Img").css({ left: 81 + '%', top: 36 + '%' });
        $("#Beaker-2Img").draggable("disable");
        $(".tare_Button").css({ "cursor": "pointer" })
        $(".tare_Button").click(function () {
          $(".tare_Button").css({ "cursor": "auto" })
          $(".tare_value").html("0.0");
          $("#bottle_cap").css({ "cursor": "pointer" })
          $("#bottle_cap").click(function () {
            drop = false;
            $("#bottle_cap").css({ "cursor": "auto" })
            $("#spatula").css({ "cursor": "grab" })
            $("#bottle_cap").animate({ left: 68.6 + '%', top: 78.1 + '%' });
            $("#bottle_cap").off('click');
            $("#spatula").draggable("enable");
            $("#spatula").draggable({
              cursor: "grab",
              revert: function () {
                if (!drop) {
                  $(".spatula-shadow1").show(500);
                  $("#spatula").css({ transform: 'rotate(' + 0 + 'deg)' })
                  return true;
                }
              }, drag: function () {
                $("#spatula").css({ transform: 'rotate(' + 320 + 'deg)' })
                $(".spatula-shadow1").hide();
              }
            });
            $(".tare_Button").off('click');
            $("#powder-DropArea").droppable({
              tolerance: "touch",
              accept: "#spatula",
              drop: function () {
                drop = true;
                removeTrip()

                $("#spatula").css({ "cursor": "auto" })
                $("#spatula").draggable("disable");
                $("#spatula").animate({ left: 59.6 + '%', top: 61.1 + '%' });
                $(".spatula-powder").show(500);
                $("#spatula").animate({ left: 82.6 + '%', top: 19.1 + '%' }, function () {
                  $(".powder_Drop").animate({ height: 29 + '%' }, function () {
                    $(".thebeaker_Powder2").show();
                    $("#bottle_cap").animate({ left: 61.1 + '%', top: 61.9 + '%' }).delay(1000)
                    $(".tare_value").html("5.35");
                    $(".spatula-powder").hide();
                    $(".powder_Drop").css('opacity', '0');
                    $("#spatula").animate({ left: 72 + '%', top: 84 + '%' }).delay(1000)
                    $("#spatula").css({ transform: 'rotate(' + 357 + 'deg)' })
                    $("#FirstDrop").hide();
                    $("#beaker2_Droparea").show();
                    $("#Beaker-2Img").draggable("enable");
                    $("#Beaker-4Img").draggable("enable");
                    $(".spatula-shadow1").css({ "display": "block" });

                  })
                  drop = false;
                  $("#Beaker-2Img").draggable({
                    cursor: "grab",
                    revert: function () {
                      if (!drop) {
                        $(".tare_value").html("5.35");
                        return true
                      }
                    }, drag: function () {
                      $(".tare_value").html("0.0");
                      removeTrip()
                    }
                  });
                });
              }
            })
            $("#beaker2_Droparea").droppable({

              tolerance: "touch",
              accept: "#Beaker-2Img",
              drop: function () {
                drop = true;
                removeTrip()
                $("#Beaker-2Img").animate({ left: 16 + '%', top: 56 + '%' }, function () {
                  drop = false;
                });
                $(".beaker-2Shadow").show(500);
                $("#Beaker-2Img").draggable("disable");
                $("#Beaker-4Img").draggable({
                  cursor: "grab",
                  revert: function () {
                    if (!drop) {
                      $(".beaker-4Shadow").show(500);
                      return true;
                    }
                  }, drag: function () {

                    removeTrip()

                    $(".beaker-4Shadow").hide();
                    $("#beaker2_Droparea").droppable({       //Water Drop functiion

                      tolerance: "touch",
                      accept: "#Beaker-4Img",
                      drop: function () {
                        $("#water_falling_down").css("display:block");
                        $("#Beaker-4Img").draggable("enable");
                        $(".waterfallto_beaker2").css('opacity', '1');
                        $("#Waterto_beaker_2").css('display:block');
                        drop = true;
                        $(".beaker4_water").show();
                        $("#Beaker-4Img").animate({ left: 26.3 + '%', top: 17 + '%' }, function () {
                          $(".beaker4_water ").css({ display: 'none' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 316 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 295 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 283 + 'deg)' })
                          $(".waterfallto_beaker2").animate({ width: 7 + '%' }, function () {
                            $(".waterfallto_beaker2").css('opacity', '0');
                            $(".beaker-4Shadow").show(500);
                          })
                          $(".waterfallingto_Beaker2").css({ display: 'block' })
                          var waterAnimationInterval = setInterval(waterDrop, 10);
                          $("#water_falling_down").show();
                          $("#waterfallingto_Beaker2").css({ display: 'block' })
                          setTimeout(function () {
                            clearInterval(waterAnimationInterval);
                            $("#Waterto_beaker_5").fadeOut();
                          }, 30);
                          $(".beaker2_water").show();
                          $(".beaker2_water").fadeIn(50);
                          $("#Beaker-4Img").animate({ left: 27.3 + '%', top: 17 + '%' }, function () {
                            $("#Beaker-4Img").draggable("disable");
                            setTimeout(function () {
                              $("#Beaker-4Img").animate({ left: 49 + '%', top: 56 + '%' })
                              $("#Beaker-4Img").css({ transform: 'rotate(' + 0 + 'deg)' })
                            }, 300);
                            drop = false;
                            $("#glass_Rod").draggable("enable");
                            $("#glass_Rod").css({ "cursor": "grab" })
                          });

                          $("#glass_Rod").draggable({

                            cursor: "grab",
                            revert: function () {
                              if (!drop) {
                                $("#glass_Rod").css({ transform: 'rotate(' + 0 + 'deg)' })
                                $(".glassrod_shadow").show(500);
                                return true
                              }
                            }, drag: function () {
                              $("#glass_Rod").css({ transform: 'rotate(' + 115 + 'deg)' })
                              $(".glassrod_shadow").hide();
                              removeTrip()
                              $("#beaker2_Droparea").droppable({
                                tolerance: "touch",
                                accept: "#glass_Rod",
                                drop: function () {
                                  $("#glass_Rod").css({ "cursor": "auto" })
                                  drop = true;
                                  $("#water_animation_Bottle2").show(1000);
                                  $(".beaker2_water").hide();
                                  $("#glass_Rod").css({ top: 41 + '%', left: 17 + '%' })
                                  $("#glass_Rod").css({ transform: 'rotate(' + 90 + 'deg)' })
                                  $("#glass_Rod").animate({ top: 65 + '%', left: 9 + '%' })
                                  $(".thebeaker_Powder2").fadeOut(5000);
                                  roadrotatebeaker2();
                                  $(".beaker2_water").hide();
                                  var setinterGlassrod = setInterval(wateranimate2, 100);
                                  setTimeout(function () {
                                    clearInterval(setinterGlassrod);
                                    $(".beaker2_water").fadeIn();
                                    $("#rowa2").css('opacity', '0.5');
                                    //click event off
                                    $("#rowa1").css('opacity', '0.5');
                                    $("#rowa3").css('opacity', '1');

                                    $("#rowa1").css('pointer-events', 'none');
                                    $("#solution3").css('pointer-events', 'auto');
                                    $("#rowa3").css('pointer-events', 'auto');
                                    $(".glassrod_shadow").show(550);
                                  }, 5500);
                                  $("#water_animation_Bottle2").fadeOut(7500);
                                  $(".beaker2_water").fadeIn(5000);
                                  $("#glass_Rod").draggable("disable");
                                }

                              })
                            }

                          });
                        });
                      }
                    });

                  }
                });

              }
            })
          })
        })
      }

    })

    function roadrotatebeaker2() {
      for (var i = 0; i <= 5; i++) {
        $("#glass_Rod").animate({ top: 65 + '%', left: 9 + '%' });
        $("#glass_Rod").animate({ top: 65 + '%', left: 17 + '%' });
      }
      $("#glass_Rod").animate({ top: 43 + '%', left: 17 + '%' });
      $("#glass_Rod").animate(
        { deg: 0 },
        {
          duration: 120,
          step: function (now) {
            $(this).animate({ top: 88 + '%', left: 78 + '%' });
            $(this).css({ transform: 'rotate(' + now + 'deg)' });

          }
        });
    }
    function wateranimate2() {
      if ($('#wateranim2_1').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_2').show();
      } else if ($('#wateranim2_2').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_3').show();
      } else if ($('#wateranim2_3').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_4').show();
      } else if ($('#wateranim2_4').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_5').show();
      } else if ($('#wateranim2_5').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_6').show();
      } else if ($('#wateranim2_6').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_7').show();
      } else if ($('#wateranim2_7').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_8').show();
      } else if ($('#wateranim2_8').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_9').show();
      } else if ($('#wateranim2_9').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_10').show();
      } else if ($('#wateranim2_10').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_11').show();
      } else if ($('#wateranim2_11').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_12').show();
      } else if ($('#wateranim2_12').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_13').show();
      } else if ($('#wateranim2_13').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_15').hide();
        $('#wateranim2_14').show();
      } else if ($('#wateranim2_14').css('display') == 'block') {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14').hide();
        $('#wateranim2_15').show();
      } else {
        $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
        $('#wateranim2_1').show();
      }
    }
  })

  //////////////////////Third Stirr Function/////////////

  $("#solution3").click(function () {
    windowResetClick();
    $("#bottle").show();
    removeTrip()
    $("#beaker2_Droparea").hide()
    $(".beaker4_water").show();
    drop = false;
    $("#FirstDrop").show();
    $(".bottle_Text").css({ left: 59 + '%' })
    $(".bottle_Text").css("fontSize", "7.4px")
    $(".bottle_Text").html("Barium hydroxide");
    $("#solution3").css('pointer-events', 'none');
    $("#rowa1").css('opacity', '0.2');
    //click event off
    $("#rowa2").css('opacity', '0.2');
    $("#Beaker-3Img").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".beaker-3Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".beaker-3Shadow").hide();
        removeTrip()
      }
    });
    $("#FirstDrop").droppable({
      tolerance: "touch",
      accept: "#Beaker-3Img", drop: function () {
        drop = true;
        $(".tare_value").html("0.5");
        $(".beaker-3Shadow").hide();
        $("#Beaker-3Img").css({ left: 81 + '%', top: 36 + '%' });
        $("#Beaker-3Img").draggable("disable");
        $(".tare_Button").css({ "cursor": "pointer" })
        $(".tare_Button").click(function () {
          $(".tare_Button").css({ "cursor": "auto" })
          $(".tare_value").html("0.0");
          $("#bottle_cap").css({ "cursor": "pointer" })
          $("#bottle_cap").click(function () {
            removeTrip()
            drop = false;
            $("#bottle_cap").css({ "cursor": "auto" })
            $("#spatula").css({ "cursor": "grab" })
            $("#bottle_cap").animate({ left: 68.6 + '%', top: 78.1 + '%' });
            $("#spatula").draggable("enable");
            $("#bottle_cap").off('click');
            $("#spatula").draggable({
              cursor: "grab",
              revert: function () {
                if (!drop) {
                  $(".spatula-shadow1").show(500);
                  $("#spatula").css({ transform: 'rotate(' + 0 + 'deg)' })
                  return true;
                }
              }, drag: function () {
                $("#spatula").css({ transform: 'rotate(' + 320 + 'deg)' })
                $(".spatula-shadow1").hide();
                removeTrip()
              }
            });
            $(".tare_Button").off('click');
            $("#powder-DropArea").droppable({

              tolerance: "touch",
              accept: "#spatula",
              drop: function () {
                drop = true;
                removeTrip()
                $("#spatula").css({ "cursor": "auto" })
                $("#spatula").draggable("disable");
                $("#spatula").animate({ left: 59.6 + '%', top: 61.1 + '%' });
                $(".spatula-powder").show(500);
                $("#spatula").animate({ left: 82.6 + '%', top: 19.1 + '%' }, function () {
                  $(".powder_Drop").animate({ height: 29 + '%' }, function () {
                    $(".thebeaker_Powder3").show();
                    $("#bottle_cap").animate({ left: 61.1 + '%', top: 61.9 + '%' }).delay(1000)
                    $(".tare_value").html("15.75");
                    $(".spatula-powder").hide();
                    $(".powder_Drop").css('opacity', '0');
                    $("#spatula").animate({ left: 72 + '%', top: 84 + '%' }).delay(1000)
                    $("#spatula").css({ transform: 'rotate(' + 357 + 'deg)' })
                    $("#FirstDrop").hide();
                    $("#beaker3_Droparea").show();
                    $(".spatula-shadow1").css({ "display": "block" });
                  })
                  drop = false;
                  $("#Beaker-3Img").draggable("enable");
                  $("#Beaker-3Img").draggable({
                    cursor: "grab",
                    revert: function () {
                      if (!drop) {
                        $(".tare_value").html("15.75");
                        return true
                      }
                    }, drag: function () {
                      $(".tare_value").html("0.0");
                      removeTrip()

                    }
                  });
                });
              }
            })
            $("#beaker3_Droparea").droppable({
              tolerance: "touch",
              accept: "#Beaker-3Img",

              drop: function () {
                drop = true;
                $("#Beaker-3Img").animate({ left: 31 + '%', top: 56 + '%' }, function () {
                  drop = false;
                });
                $(".beaker-3Shadow").show(500);
                $("Beaker-3Img").draggable("disable");

                $("#Beaker-4Img").draggable("enable");
                $("#Beaker-4Img").draggable({
                  cursor: "grab",
                  revert: function () {
                    if (!drop) {
                      $(".beaker-4Shadow").show(500);
                      return true;
                    }
                  }, drag: function () {
                    $(".beaker-4Shadow").hide();
                    $("#beaker3_Droparea").droppable({       //Water Drop functiion

                      tolerance: "touch",
                      accept: "#Beaker-4Img",
                      drop: function () {
                        drop = true;
                        $("#Beaker-4Img").animate({ left: 41.2 + '%', top: 17 + '%' }, function () {
                          $(".beaker4_water ").css({ display: 'none' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 316 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 295 + 'deg)' })
                          $("#Beaker-4Img").css({ transform: 'rotate(' + 283 + 'deg)' })
                          $(".waterfallto_beaker3").animate({ width: 7 + '%' }, function () {
                            $(".waterfallto_beaker3").css('opacity', '0');
                            $(".waterfallto_beaker3").hide();
                            $(".beaker-4Shadow").show(500);
                            removeTrip()

                          })
                          $(".waterfallingto_Beaker2").css({ display: 'block' })
                          var waterAnimationInterval = setInterval(waterDrop, 10);
                          $("#water_falling_down").show();
                          setTimeout(function () {
                            clearInterval(waterAnimationInterval);
                            $("#Waterto_beaker_5").fadeOut();
                          }, 30);
                          $(".beaker3_water").show();
                          $(".beaker3_water").fadeIn(50);
                          $("#Beaker-4Img").animate({ left: 41.2 + '%', top: 17 + '%' }, function () {
                            $("Beaker-3Img").draggable("disable");
                            $("#Beaker-4Img").draggable("disable");
                            setTimeout(function () {
                              $("#Beaker-4Img").animate({ left: 49 + '%', top: 56 + '%' })
                              $("#Beaker-4Img").css({ transform: 'rotate(' + 0 + 'deg)' })

                            }, 300);
                            drop = false;
                            $("#glass_Rod").draggable("enable");
                            $("#glass_Rod").css({ "cursor": "grab" })
                          });
                          /////////////////////Glass Rod Function///////////////////////|||\\\\\\\\\\\\\\\\\\\\\\\\
                          $("#glass_Rod").draggable({

                            cursor: "grab",
                            revert: function () {

                              if (!drop) {
                                $("#glass_Rod").css({ transform: 'rotate(' + 0 + 'deg)' })
                                $(".glassrod_shadow").show(500);

                                return true
                              }
                            }, drag: function () {
                              $("#glass_Rod").css({ transform: 'rotate(' + 115 + 'deg)' })
                              $(".glassrod_shadow").hide();
                              removeTrip()

                              $("#beaker3_Droparea").droppable({

                                tolerance: "touch",
                                accept: "#glass_Rod",
                                drop: function () {
                                  $("#glass_Rod").css({ "cursor": "auto" })
                                  drop = true;
                                  $("#water_animation_Bottle3").show(1000);
                                  $(".beaker3_water").hide();
                                  $("#glass_Rod").css({ top: 41 + '%', left: 33 + '%' })
                                  $("#glass_Rod").css({ transform: 'rotate(' + 90 + 'deg)' })
                                  $("#glass_Rod").animate({ top: 65 + '%', left: 23 + '%' })
                                  $(".thebeaker_Powder3").fadeOut(5000);

                                  roadrotatebeaker();
                                  $(".beaker3_water").hide();

                                  var setinterGlassrod = setInterval(wateranimate3, 100);
                                  setTimeout(function () {
                                    clearInterval(setinterGlassrod);

                                    $(".beaker3_water").fadeIn();
                                    $("#btn_Nxt").fadeIn();

                                    $("#rowa2").css('opacity', '0.5');
                                    //click event off
                                    $("#rowa1").css('opacity', '0.5');
                                    $("#rowa3").css('opacity', '0.5');

                                    $("#rowa1").css('pointer-events', 'none');
                                    $("#rowa3").css('pointer-events', 'none');
                                    $(".glassrod_shadow").show(550);
                                  }, 5500);


                                  $("#water_animation_Bottle3").fadeOut(7500);
                                  $(".beaker3_water").fadeIn(5000);
                                  $("#glass_Rod").draggable("disable");
                                  $("#Beaker-3Img").draggable("disable");
                                  pg = 0;
                                  hlp = 9;
                                }
                              })
                            }
                          });
                        });
                      }
                    });
                  }
                });
              }
            })
          })
        })
      }

    })
  })


  function roadrotatebeaker() {
    for (var i = 0; i <= 5; i++) {
      $("#glass_Rod").animate({ top: 65 + '%', left: 32 + '%' });
      $("#glass_Rod").animate({ top: 65 + '%', left: 23 + '%' });
    }
    $("#glass_Rod").animate({ top: 43 + '%', left: 24 + '%' });
    $("#glass_Rod").animate(
      { deg: 0 },
      {
        duration: 120,
        step: function (now) {
          $(this).animate({ top: 88 + '%', left: 78 + '%' });
          $(this).css({ transform: 'rotate(' + now + 'deg)' });

        }
      });
  }
  function wateranimate3() {
    if ($('#wateranim3_1').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_2').show();
    } else if ($('#wateranim3_2').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_3').show();
    } else if ($('#wateranim3_3').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_4').show();
    } else if ($('#wateranim3_4').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_5').show();
    } else if ($('#wateranim3_5').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_6').show();
    } else if ($('#wateranim3_6').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_7').show();
    } else if ($('#wateranim3_7').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_8').show();
    } else if ($('#wateranim3_8').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_9').show();
    } else if ($('#wateranim3_9').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_10').show();
    } else if ($('#wateranim3_10').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_11').show();
    } else if ($('#wateranim3_11').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_12').show();
    } else if ($('#wateranim3_12').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_13').show();
    } else if ($('#wateranim3_13').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_15').hide();
      $('#wateranim3_14').show();
    } else if ($('#wateranim3_14').css('display') == 'block') {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14').hide();
      $('#wateranim3_15').show();
    } else {
      $('#wateranim3_1,#wateranim3_2,#wateranim3_3,#wateranim3_4,#wateranim3_5,#wateranim3_6,#wateranim3_7,#wateranim3_8,#wateranim3_9,#wateranim3_10,#wateranim3_11,#wateranim3_12,#wateranim3_13,#wateranim3_14,#wateranim3_15').hide();
      $('#wateranim3_1').show();
    }
  }

  //WAter Drop Function/////////////
  function waterDrop() {

    if ($('#Waterto_beaker_1').css('display') == 'block') {
      $('#Waterto_beaker_1,#Waterto_beaker_3,#Waterto_beaker_4,#Waterto_beaker_5').hide();
      $('#Waterto_beaker_2').show();
    } else if ($('#Waterto_beaker_2').css('display') == 'block') {
      $('#Waterto_beaker_1,#Waterto_beaker_2,#Waterto_beaker_4,#Waterto_beaker_5').hide();
      $('#Waterto_beaker_3').show();
    }
    else if ($('#Waterto_beaker_3').css('display') == 'block') {
      $('#Waterto_beaker_1,#Waterto_beaker_2,#Waterto_beaker_3,#Waterto_beaker_5').hide();
      $('#Waterto_beaker_4').show();
    }
    else if ($('#Waterto_beaker_4').css('display') == 'block') {
      $('#Waterto_beaker_1,#Waterto_beaker_2,#Waterto_beaker_3,#Waterto_beaker_4').hide();
      $('#Waterto_beaker_5').show();
    }


  }



  function windowResetClick() {
    $(".powder_Drop").css({ height: 0 + '%' })
    $(".powder_Drop").css('opacity', '1');
    $("#water_falling_down").hide();
  }

  $('#btn_Nxt').click(function () {
    $("#controls2").hide();
    $(".contols3").show();
    $("#FirstPage").hide();
    $("#Second_page").show();
    $("#btn_Nxt").hide();
    removeTrip();


    $("#InstructionTag").html("Click the beaker:")
    pg = 1;
    hlp = 0;

  });

  //////////////////////////Second Page Start////////////////////////////////////////////////////

  $("#Secondpage_solution1").click(function () {
    removeTrip()

    pg = 1;
    hlp = 1;
    drop = false;

    //hide function
    $("#Secondpage_solution3").css('opacity', '0.2');
    $("#Secondpage_solution2").css('opacity', '0.2');
    $("#Secondpage_solution4").css('opacity', '0.2');
    $(".ImgBottle_cap").css('opacity', '0.2');




    $("#SecondPage_Beaker5").show();
    $("#SecondpageGlass_Bottle").hide();
    $(".SecondpageNameboard_5").show();
    $(".Secondpagefirst_nameTag5").html("Sodium hydroxide");

    $("#SecondPage_Beaker5").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".SecondPagebeaker-5Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".SecondPagebeaker-5Shadow").hide();
        removeTrip()

      }
    });
    $("#SecondpagedropArea1").droppable({
      tolerance: "touch",
      accept: "#SecondPage_Beaker5", drop: function () {
        drop = true;
        $(".SecondPagebeaker-5Shadow").hide();
        pg = 1;
        hlp = 2;

        $("#SecondPage_Beaker5").animate({ left: 11.5 + '%', top: 24 + '%' }, function () {
          $(".SecondPagebeaker5_water ").css({ display: 'none' });
          $(".SecondPagebeaker5_80mlwater").fadeIn();
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 316 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 295 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 283 + 'deg)' });
          $("#SecondPage_Beaker5").animate({ left: 12.5 + '%', top: 24 + '%' });
          $(".SecondPagewaterfallto_beaker1").animate({ width: 7 + '%' }, function () {
            $("#water_falling_down2").show();
            var waterAnimationInterval = setInterval(waterDrop2, 10);
            $(".SecondPagebeaker1_water").fadeIn();
            $(".SecondPagewaterfallto_beaker1").css('opacity', '0');
            $("#SecondpagedropArea1").hide();
            setTimeout(function () {
              clearInterval(waterAnimationInterval);
              $("#SecondpageWaterto_beaker_5").fadeOut();
            }, 30);
            $(".SecondPagewaterfallto_beaker1").hide();
            $("#SecondPage_Beaker5").animate({ top: 54 + '%', left: 72 + '%' });
            $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 0 + 'deg)' });
            $("#SecondPage_Beaker5").draggable("disable");

            $("#Secondpage_solution1").css('opacity', '0.2');
            $("#Secondpage_solution2").css('opacity', '1');
            $("#Secondpage_solution4").css('opacity', '0.2');
            $(".ImgBottle_cap").css('opacity', '0.2');
            $("#Secondpage_solution2").css('pointer-events', 'auto');
            $("#Secondpage_solution1").css('pointer-events', 'none');
            $("#Secondpage_solution3").css('pointer-events', 'none');
            $("#Secondpage_solution4").css('pointer-events', 'none');
            $(".SecondPagebeaker-5Shadow").fadeIn(500);
            pg = 1;
            hlp = 8;
            pg = 4;
            hlp = 1;
          })
        }
        )
      }

    })
  })


  //Second drop

  $("#Secondpage_solution2").click(function () {

    pg = 4;
    hlp = 1;

    SecondPageClick();
    removeTrip()

    drop = false;
    $("#SecondPage_Beaker5").show();
    $("#SecondpageGlass_Bottle").hide();
    $(".SecondpageNameboard_5").show();
    $(".Secondpagefirst_nameTag5").html("Ammonium chloride");
    $("#SecondPage_Beaker5").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".SecondPagebeaker-5Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".SecondPagebeaker-5Shadow").hide();
        removeTrip()

      }
    });
    $("#SecondpagedropArea2").droppable({

      tolerance: "touch",
      accept: "#SecondPage_Beaker5", drop: function () {
        drop = true;
        $(".SecondPagebeaker-5Shadow").hide();

        $("#SecondPage_Beaker5").animate({ left: 28.9 + '%', top: 24.1 + '%' }, function () {
          $(".SecondPagebeaker5_water ").css({ display: 'none' });
          $(".SecondPagebeaker5_80mlwater").fadeIn();
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 316 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 295 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 283 + 'deg)' });
          $("#SecondPage_Beaker5").animate({ left: 29.9 + '%', top: 24.1 + '%' })
          $(".SecondPagewaterfallto_beaker2").animate({ width: 7 + '%' }, function () {
            $("#water_falling_down2").show();
            var waterAnimationInterval = setInterval(waterDrop2, 10);
            $(".SecondPagebeaker2_water").fadeIn();
            $(".SecondPagewaterfallto_beaker2").css('opacity', '0');
            $("#SecondpagedropArea2").hide();
            setTimeout(function () {
              clearInterval(waterAnimationInterval);
              $("#SecondpageWaterto_beaker_5").fadeOut();
            }, 30);
            $(".SecondPagewaterfallto_beaker2").hide();
            $("#SecondPage_Beaker5").animate({ top: 54 + '%', left: 72 + '%' });
            $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 0 + 'deg)' });
            $("#SecondPage_Beaker5").draggable("disable");

            $("#Secondpage_solution1").css('opacity', '0.2');
            $("#Secondpage_solution2").css('opacity', '0.2');
            $("#Secondpage_solution3").css('opacity', '1');
            $("#Secondpage_solution4").css('opacity', '0.2');
            $(".ImgBottle_cap").css('opacity', '0.2');

            $("#Secondpage_solution2").css('pointer-events', 'none');
            $("#Secondpage_solution1").css('pointer-events', 'none');
            $("#Secondpage_solution3").css('pointer-events', 'auto');
            $("#Secondpage_solution4").css('pointer-events', 'none');
            $(".SecondPagebeaker-5Shadow").fadeIn(500);

          })
        }
        )
      }

    })

    //////////Second dragabble 


  })

  $("#Secondpage_solution3").click(function () {
    drop = false;
    SecondPageClick()
    removeTrip()

    $("#SecondPage_Beaker5").show();
    $("#SecondpageGlass_Bottle").hide();
    $(".SecondpageNameboard_5").show();
    $(".Secondpagefirst_nameTag5").html("Barium hydroxide");
    $("#SecondPage_Beaker5").draggable({
      cursor: "grab",
      revert: function () {
        if (!drop) {
          $(".SecondPagebeaker-5Shadow").show(500);
          return true
        }
      }, drag: function () {
        $(".SecondPagebeaker-5Shadow").hide();
        removeTrip()

      }
    });
    $("#SecondpagedropArea3").droppable({

      tolerance: "touch",
      accept: "#SecondPage_Beaker5", drop: function () {
        drop = true;
        $(".SecondPagebeaker-5Shadow").hide();
        $("#SecondPage_Beaker5").animate({ left: 44.7 + '%', top: 24 + '%' }, function () {
          $(".SecondPagebeaker5_water ").css({ display: 'none' });
          $(".SecondPagebeaker5_80mlwater").fadeIn();
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 316 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 295 + 'deg)' });
          $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 283 + 'deg)' });

          $("#SecondPage_Beaker5").animate({ left: 45.7 + '%', top: 24 + '%' })
          $(".SecondPagewaterfallto_beaker3").animate({ width: 7 + '%' }, function () {
            $("#water_falling_down2").show();
            var waterAnimationInterval = setInterval(waterDrop2, 10);
            $(".SecondPagebeaker3_water").fadeIn();
            $(".SecondPagewaterfallto_beaker3").css('opacity', '0');
            $("#SecondpagedropArea3").hide();
            setTimeout(function () {
              clearInterval(waterAnimationInterval);
              $("#SecondpageWaterto_beaker_5").fadeOut();
            }, 30);
            $(".SecondPagewaterfallto_beaker2").hide();
            $("#SecondPage_Beaker5").animate({ top: 54 + '%', left: 70 + '%' });
            $("#SecondPage_Beaker5").css({ transform: 'rotate(' + 0 + 'deg)' });
            $("#SecondPage_Beaker5").draggable("disable");
            $(".SecondPagebeaker-5Shadow").fadeIn(500);

            $("#Secondpage_solution1").css('opacity', '0.2');
            $("#Secondpage_solution2").css('opacity', '0.2');
            $("#Secondpage_solution3").css('opacity', '0.2');
            $("#Secondpage_solution4").css('opacity', '1');
            $(".ImgBottle_cap").css('opacity', '1');

            $("#Secondpage_solution2").css('pointer-events', 'none');
            $("#Secondpage_solution1").css('pointer-events', 'none');
            $("#Secondpage_solution3").css('pointer-events', 'none');
            $("#Secondpage_solution4").css('pointer-events', 'auto');
          })
        }
        )
      }
    })

  })

  //Fourth Loop
  $("#Secondpage_solution4").click(function () {
    pg = 1;
    hlp = 3;
    $("#SecondPage_Beaker5").hide();
    removeTrip()


    $(".SecondpageNameboard_5").css({ left: 91.9 + '%' })


    $("#SecondpageGlass_Bottle").show();
    $(".glassBottleCap").show()
    $(".SecondpageNameboard_5").show();
    $(".Secondpagefirst_nameTag5").html("Hydrochloric acid");

    $(".glassBottleCap").click(function () {
      drop = false;
      pg = 1;
      hlp = 4;
      removeTrip()
      $(".glassBottleCap").animate({ left: 86.6 + '%', top: 66.9 + '%' });
      $(".glassBottleCap").off('click');

      $("#SecondpageGlass_Bottle").draggable({
        cursor: "grab",
        revert: function () {
          if (!drop) {
            //  $(".SecondPagebeaker-5Shadow").show(500);
            return true
          }
        }, drag: function () {
          // $(".SecondPagebeaker-5Shadow").hide();
          removeTrip()


        }
      });

      $("#SecondpagedropArea4").droppable({

        tolerance: "touch",
        accept: "#SecondpageGlass_Bottle", drop: function () {
          drop = true;
          pg = 0;
          hlp = 10;
          $("#SecondpageGlass_Bottle").animate({ left: 59.2 + '%', top: 24 + '%' }, function () {
            // $(".SecondPagebeaker5_water ").css({ display: 'none' });
            // $(".SecondPagebeaker5_80mlwater").fadeIn();
            $("#SecondpageGlass_Bottle").css({ transform: 'rotate(' + 316 + 'deg)' });
            $("#SecondpageGlass_Bottle").css({ transform: 'rotate(' + 295 + 'deg)' });
            $("#SecondpageGlass_Bottle").css({ transform: 'rotate(' + 283 + 'deg)' });
            $("#SecondpageGlass_Bottle").css({ transform: 'rotate(' + 247 + 'deg)' });

            $(".SecondPagewaterfallto_beaker4").animate({ width: 7 + '%' }, function () {


              $(".SecondPagebeaker4_water").fadeIn();
              $(".SecondPagewaterfallto_beaker4").css('opacity', '0');
              $("#SecondpagedropArea4").hide();
              setTimeout(function () {
                clearInterval(waterAnimationInterval);
                $("#SecondpageWaterto_beaker_5").fadeOut();
              }, 30);

              $(".SecondPagewaterfallto_beaker2").hide();
              $("#SecondpageGlass_Bottle").animate({ top: 56 + '%', left: 75 + '%' });
              $("#SecondpageGlass_Bottle").css({ transform: 'rotate(' + 0 + 'deg)' });
              $(".glassBottleCap").animate({ left: 78.6 + '%', top: 45.9 + '%' }).delay(1000)


              $("#SecondpageGlass_Bottle").draggable("disable");
              $("#Secondpage_solution4").css('opacity', '0.2');
              $(".ImgBottle_cap").css('opacity', '0.2');

              $("#Secondpage_solution4").css('pointer-events', 'none');


              $("#btn_Nxt2").show();


              drop = false;
            })

          })
        }
      })
    })
  })
  ///////////////////////////SecondPage End//////////////////////////////////////////////////////
  /////third Page start///////////////////////////////

  n = 0;

  $("#theThermometerdiv").draggable({
    cursor: "grab",
    revert: function () {
      if (!drop) {
        $("#theThermometerdiv").css({ transform: 'rotate(' + 0 + 'deg)' })
        removeTrip()
        return true
      }

    }, drag: function () {
      $("#theThermometerdiv").css({ transform: 'rotate(' + 270 + 'deg)' })
      removeTrip()


    }
  });

  var currentDroppableArea = "#ThermoDrop_area1"
  var nextDroppableArea = "#ThermoDrop_area2";
  var number = 0;
  drop = false;
  $("#ThermoDrop_area1").droppable({
    tolerance: "touch",

    accept: "#theThermometerdiv", drop: function () {
      pg = 2;
      hlp = 2;
      drop = true;
      setTimeout(function () {
        $("#temperatureVal").show();
      }, 1000)
      tempstr = 32;
      document.getElementById("temperValue").innerHTML = tempstr;

      $("#theThermometerdiv").animate({ left: -3 + '%', top: 52 + '%' }, function () {
        $(this).draggable("disable");
        showZoomThermometer("#zoomthermometer_view", "-295", "#ThermoDrop_area1");
        currentDroppableArea = nextDroppableArea;
        nextDroppableArea = "#ThermoDrop_area2"
        thermometerOnFlag = true;

        n = 1;
        removeTrip()
      });
    }
  });

  $("#ThermoDrop_area2").droppable({
    tolerance: "intersect",

    accept: "#theThermometerdiv", drop: function () {

      drop = true;
      setTimeout(function () {
        $("#temperatureVal").show();
      }, 1000)

      tempstr = 32;
      document.getElementById("temperValue").innerHTML = tempstr;

      $("#theThermometerdiv").animate({ left: 14 + '%', top: 52 + '%' }, function () {
        $(this).draggable("disable");
        showZoomThermometer("#zoomthermometer_view", "-294", "#ThermoDrop_area2");
        currentDroppableArea = nextDroppableArea;
        nextDroppableArea = "#ThermoDrop_area3"
        thermometerOnFlag = true;

        removeTrip()


      });
    }
  });

  $("#ThermoDrop_area3").droppable({


    tolerance: "intersect",
    accept: "#theThermometerdiv", drop: function () {

      drop = true;
      setTimeout(function () {
        $("#temperatureVal").show();
      }, 1000)

      tempstr = 29;
      document.getElementById("temperValue").innerHTML = tempstr;

      $("#theThermometerdiv").animate({ left: 30 + '%', top: 53 + '%' }, function () {
        $(this).draggable("disable");
        showZoomThermometer("#zoomthermometer_view", "-298", "#ThermoDrop_area3");
        currentDroppableArea = nextDroppableArea;
        nextDroppableArea = "#ThermoDrop_area4"
        thermometerOnFlag = true;

        removeTrip()



      });
    }
  });

  $("#ThermoDrop_area4").droppable({


    tolerance: "touch",
    accept: "#theThermometerdiv", drop: function () {

      drop = true;
      setTimeout(function () {
        $("#temperatureVal").show();
      }, 1000)
      tempstr = 38;
      document.getElementById("temperValue").innerHTML = tempstr;

      $("#theThermometerdiv").animate({ left: 46 + '%', top: 53 + '%' }, function () {

        $(this).draggable("disable");
        showZoomThermometer("#zoomthermometer_view", "-291", "#ThermoDrop_area4");
        currentDroppableArea = nextDroppableArea;
        nextDroppableArea = "null"
        drop = false;
        pg = 2;
        hlp = 2;
        finalclick = 1;

        alertmsg = 1;
        setTimeout(function () {
          WarningMessages();
          $("#temperatureVal").hide();

        }, 3500)


        n = 2;
        thermometerOnFlag = true;

      });

      $("#ThermoDrop_area2").show();
      $("#ThirdpageFirstBeaker").draggable({
        cursor: "grab",
        revert: function () {
          if (!drop) {
            removeTrip()
            $(".ThirdPagebeaker-1Shadow").show(500);
            return true
          }

        }, drag: function () {

          $(".ThirdPagebeaker-1Shadow").hide();
          removeTrip()

        }
      });



      $("#ThermoDrop_area2").droppable({


        accept: "#ThirdpageFirstBeaker", drop: function () {
          drop = true;

          $("#ThirdpageFirstBeaker").animate({ left: 28.8 + '%', top: 20.9 + '%' }, function () {
            $("#ThirdpageFirstBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
            $("#ThirdpageFirstBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
            $("#ThirdpageFirstBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })


            $(".WaterInFirstBeakerThirdPage").show()
            $(".WaterInFirstBeakerThirdPage").fadeOut();
            $("#ThirdpageFirstBeaker").draggable("disable");
            $("#ThirdpageFirstBeaker").animate({ left: 29.8 + '%', top: 20.9 + '%' })
            $(".ThirdPagewaterfallto_beaker2").animate({ width: 7 + '%' }, function () {

              $(".ThirdPagebeaker_4mlwater").fadeIn();
              $(".ThirdPagebeaker_2water").fadeOut();
              $(".ThirdPagebeaker_1water").fadeOut();

              $(".ThirdPagewaterfallto_beaker2").css('opacity', '0');

              $("#ThirdpageFirstBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
              $("#ThirdpageFirstBeaker").animate({ left: 6 + '%', top: 53 + '%' })

              drop = false;

              n = 0;
              pg = 2;
              hlp = 5;

              $("#theThermometerdiv").draggable("enable")
            })
            $("#theThermometerdiv").draggable({
              cursor: "grab",
              revert: function () {
                if (!drop) {
                  $(this).css({ transform: 'rotate(' + 0 + 'deg)' });

                  return true
                }

              }, drag: function () {
                $(this).css({ transform: 'rotate(' + 270 + 'deg)' });
                removeTrip()


              }
            });
            $("#ThermoDrop_area2").droppable({


              accept: "#theThermometerdiv", drop: function () {

                n = 2
                drop = true;
                pg = 2;
                hlp = 2;

                setTimeout(function () {
                  $("#temperatureVal").show();
                }, 1000)
                tempstr = 45;
                document.getElementById("temperValue").innerHTML = tempstr;


                $("#theThermometerdiv").animate({ left: 14 + '%', top: 48 + '%' }, function () {
                  $("#ThermoDrop_area2").hide();
                  $(this).draggable("disable");
                  thermometerOnFlag = true;

                  showZoomThermometer("#zoomthermometer_view", "-284", "#ThermoDrop_area3");
                  drop = false;
                  $("#theThermometerdiv").click(function () {
                    $("#ThermoDrop_area2").show();

                    $(".ThirdpageGlassrod").css({ "cursor": "grab" })
                    pg = 2;
                    hlp = 7;
                  });
                });
                $(".ThirdpageGlassrod").draggable({
                  cursor: "grab",
                  revert: function () {
                    if (!drop) {
                      $(".ThirdpageGlassrod").css({ transform: 'rotate(' + 0 + 'deg)' })
                      return true
                    }
                  }, drag: function () {

                    $(".ThirdpageGlassrod").css({ transform: 'rotate(' + 270 + 'deg)' })
                    removeTrip()

                  }
                });

                // pg = 2;
                // hlp = 7;
                $("#ThermoDrop_area2").droppable({


                  accept: ".ThirdpageGlassrod", drop: function () {
                    drop = true;
                    $(".ThirdpageGlassrod").css({ "cursor": "auto" })

                    $(".ThirdpageGlassrod").animate({ left: 15 + '%', top: 55 + '%' }, function () {
                      $(".ThirdpageGlassrod").css({ transform: 'rotate(' + 90 + 'deg)' })
                      $("#water_animation_ThirdpageBottle2").show();
                      $(".ThirdPagebeaker_4mlwater").hide();
                      roadrotatebeakerThirdpage();
                      var setinterGlassrod1 = setInterval(wateranimateThirdpage3, 100);

                      setTimeout(function () {
                        clearInterval(setinterGlassrod1);
                        $("#water_animation_ThirdpageBottle2").fadeOut();
                        $(".ThirdPagebeaker_4mlwater").fadeIn();
                      }, 5200);
                      $("#ThermoDrop_area2").show();
                      drop = false;
                      $("#theThermometerdiv").draggable("enable")
                      $(".ThirdpageGlassrod").draggable("disable")

                      n = 0
                      pg = 2;
                      hlp = 8;

                      $("#ThermoDrop_area2").droppable({

                        accept: "#theThermometerdiv",
                        drop: function () {
                          drop = true;
                          setTimeout(function () {
                            $("#temperatureVal").show();
                          }, 1000)
                          tempstr = 55;
                          document.getElementById("temperValue").innerHTML = tempstr;

                          $("#theThermometerdiv").animate({ left: 14 + '%', top: 51 + '%' }, function () {

                            // debugger
                            showZoomThermometer("#zoomthermometer_view", "-276", "#ThermoDrop_area2");

                            $("#ThermoDrop_area2").hide();
                            //debugger
                            pg = 2;
                            hlp = 88;

                            $("#ThermoDrop_area4").show();
                            $(this).draggable("disable");
                            $("#ThermoDrop_area2").hide()
                            infs = 1;
                            $(".thirdpage-inference").show();
                            $("#theThermometerdiv").on('click', function () {

                              $("#theThermometerdiv").animate({ left: 71 + '%', top: 77 + '%' })
                              $(this).css({ transform: 'rotate(' + 0 + 'deg)' })
                              $("#ThermoDrop_area2").hide();
                              pg = 2;
                              hlp = 9;
                              removeTrip()

                            });

                            // Second Drag And Drop For The Solution
                            $("#ThirdpageThirdBeaker").draggable({
                              cursor: "grab",
                              revert: function () {
                                if (!drop) {
                                  $(".ThirdPagebeaker-3Shadow").show(500);
                                  return true
                                }
                              }, drag: function () {
                                $(".ThirdPagebeaker-3Shadow").hide();
                                $(".thirdpage-inference").hide();
                                removeTrip()

                              }
                            });
                            $("#ThermoDrop_area4").droppable({


                              accept: "#ThirdpageThirdBeaker", drop: function () {

                                drop = true;
                                $("#ThirdpageThirdBeaker").animate({ left: 61.2 + '%', top: 19.9 + '%' }, function () {
                                  $("#ThirdpageThirdBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
                                  $("#ThirdpageThirdBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
                                  $("#ThirdpageThirdBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })
                                  $(".WaterInThirdBeakerThirdPage").show()
                                  $("#ThirdpageThirdBeaker").draggable("disable");
                                  $(".WaterInThirdBeakerThirdPage").fadeOut();
                                  $(".ThirdPagewaterfallto_beaker4").animate({ width: 7 + '%' }, function () {
                                    $(".ThirdPagebeaker_4mlwater2").fadeIn();
                                    $(".ThirdPagebeaker_4water").fadeOut();
                                    $(".ThirdPagebeaker_3water").fadeOut();
                                    $(".ThirdPagewaterfallto_beaker4").css('opacity', '0');
                                    $("#ThirdpageThirdBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
                                    $("#ThirdpageThirdBeaker").animate({ left: 37 + '%', top: 53 + '%' })
                                    pg = 2;
                                    hlp = 10;
                                    drop = false;
                                    $("#theThermometerdiv").draggable("enable")
                                    $(".ThirdpageGlassrod").css({ "cursor": "grab" })

                                  })
                                  n = 1;
                                  $("#theThermometerdiv").draggable({         //thermo drag
                                    cursor: "grab",
                                    revert: function () {
                                      if (!drop) {
                                        $(this).css({ transform: 'rotate(' + 0 + 'deg)' });
                                        return true
                                      }
                                    }, drag: function () {
                                      $(this).css({ transform: 'rotate(' + 270 + 'deg)' });
                                      removeTrip()

                                    }
                                  });
                                  $("#ThermoDrop_area4").droppable({


                                    accept: "#theThermometerdiv", drop: function () {
                                      n = 2;
                                      pg = 2;
                                      hlp = 2;
                                      drop = true;
                                      setTimeout(function () {
                                        $("#temperatureVal").show();
                                      }, 1000)
                                      tempstr = 25;
                                      document.getElementById("temperValue").innerHTML = tempstr;
                                      $(".ThirdpageGlassrod").css({ "cursor": "auto" })

                                      $("#theThermometerdiv").animate({ left: 46 + '%', top: 49 + '%' }, function () {
                                        $("#ThermoDrop_area4").hide();
                                        $(this).draggable("disable");
                                        showZoomThermometer("#zoomthermometer_view", "-302", "#ThermoDrop_area4");
                                        drop = false;

                                      });
                                      $("#theThermometerdiv").click(function () {
                                        pg = 2;
                                        hlp = 12;
                                        $("#ThermoDrop_area4").show();
                                      })

                                      $(".ThirdpageGlassrod").draggable("enable")
                                      $("#ThermoDrop_area4").droppable({

                                        accept: ".ThirdpageGlassrod", drop: function () {
                                          drop = true;
                                          $(".ThirdpageGlassrod").animate({ left: 45 + '%', top: 52 + '%' }, function () {
                                            pg = 2;
                                            hlp = 13;
                                            $(".ThirdpageGlassrod").css({ transform: 'rotate(' + 90 + 'deg)' })
                                            roadrotatebeakerThirdpage2();
                                            $("#water_animation_ThirdpageBottle3").show();
                                            $(".ThirdPagebeaker_4mlwater2").hide();
                                            var setinterGlassrod2 = setInterval(wateranimateThirdpage4, 100);
                                            setTimeout(function () {
                                              clearInterval(setinterGlassrod2);
                                              $("#water_animation_ThirdpageBottle3").fadeOut();
                                              $(".ThirdPagebeaker_4mlwater2").fadeIn();
                                            }, 5200);
                                            $(".ThirdpageGlassrod").draggable("disable")
                                            drop = false;
                                            $("#theThermometerdiv").draggable("enable")
                                            $("#ThermoDrop_area4").droppable({


                                              accept: "#theThermometerdiv", drop: function () {
                                                drop = true;
                                                setTimeout(function () {
                                                  $("#temperatureVal").show();
                                                }, 1000)
                                                tempstr = 18;
                                                document.getElementById("temperValue").innerHTML = tempstr;
                                                $("#theThermometerdiv").animate({ left: 46 + '%', top: 49 + '%' }, function () {
                                                  $(this).draggable("disable");
                                                  showZoomThermometer("#zoomthermometer_view", "-309", "#ThermoDrop_area4");
                                                  $(".ThirdpageGlassrod").draggable("disable");
                                                  $("#ThirdpageFirstBeaker").draggable("disable");
                                                  $("#ThirdpageThirdBeaker").draggable("disable");
                                                  pg = 2;
                                                  hlp = 88;
                                                  $("#ThermoDrop_area2").hide();
                                                  infs = 2;
                                                  $(".thirdpage-inference").show();

                                                  $("#theThermometerdiv").off('click');
                                                });
                                              }
                                            });
                                          })
                                        }
                                      })
                                    }
                                  });
                                }
                                )
                              }
                            })
                          });
                        }
                      });
                    })
                  }
                });
              }
            });
            function roadrotatebeakerThirdpage() {
              for (var i = 0; i <= 5; i++) {
                $(".ThirdpageGlassrod").animate({ top: 55 + '%', left: 10 + '%' });
                $(".ThirdpageGlassrod").animate({ top: 55 + '%', left: 18 + '%' });
              }
              $(".ThirdpageGlassrod").animate({ top: 43 + '%', left: 16 + '%' });
              $(".ThirdpageGlassrod").animate(
                { deg: 0 },
                {
                  duration: 120,
                  step: function (now) {
                    $(this).animate({ top: 86 + '%', left: 71 + '%' });
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                });
            }
            function roadrotatebeakerThirdpage2() {
              for (var i = 0; i <= 5; i++) {
                $(".ThirdpageGlassrod").animate({ top: 55 + '%', left: 42 + '%' });
                $(".ThirdpageGlassrod").animate({ top: 56 + '%', left: 50 + '%' });
              }
              $(".ThirdpageGlassrod").animate({ top: 49 + '%', left: 47 + '%' });
              $(".ThirdpageGlassrod").animate(
                { deg: 0 },
                {
                  duration: 120,
                  step: function (now) {
                    $(this).animate({ top: 86 + '%', left: 71 + '%' });
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                });
            }
          });
        }
      });
    }
  });
  $("#theThermometerdiv").click(function () {
    removeTrip()
    $("#temperatureVal").hide();


    $("#the_inferenceButton").hide();
    drop = false;
    if (n == 1) {
      if (thermometerOnFlag) {

        thermometerRevert("#theThermometerdiv", 77, 71, 0, nextDroppableArea);

      }

    }
    else if (n == 2) {
      if (thermometerOnFlag) {
        thermometerRevert("#theThermometerdiv", 77, 71, 0, nextDroppableArea);
      }
      $("#theThermometerdiv").draggable("disable");


    }
    else if (n == 0) {
      $("#theThermometerdiv").bind("click");
    }
    $("#zoomthermometer_view").hide();

    if (pg == 2 && hlp == 2 && finalclick == 1) {
      pg = 2;
      hlp = 3;
      finalclick = 3
    }
    else if (pg == 2 && hlp == 2 && finalclick == 0) {
      pg = 2
      hlp = 87
    }

  });

  function showZoomThermometer(id, position, dropArea) {
    $(id).show();
    $("#ThermometerReading").animate({ top: position + '%' });
    $(dropArea).hide();

  }
  function thermometerRevert(id, top, left, degree, nextDroppable) {
    thermometerOnFlag = false;
    $(id).animate({ top: top + '%', left: left + '%' });
    $(id).css({ transform: 'rotate(' + degree + 'deg' });
    $(id).draggable("enable");
    $(nextDroppable).show();

  }
  function waterDrop2() {

    if ($('#Waterto_beaker_1').css('display') == 'block') {
      $('#Waterto_beaker_1,#SecondpageWaterto_beaker_3,#SecondpageWaterto_beaker_4,#SecondpageWaterto_beaker_5').hide();
      $('#SecondpageWaterto_beaker_2').show();
    } else if ($('#SecondpageWaterto_beaker_2').css('display') == 'block') {
      $('#Waterto_beaker_1,#SecondpageWaterto_beaker_2,#SecondpageWaterto_beaker_4,#SecondpageWaterto_beaker_5').hide();
      $('#SecondpageWaterto_beaker_3').show();
    }
    else if ($('#SecondpageWaterto_beaker_3').css('display') == 'block') {
      $('#Waterto_beaker_1,#SecondpageWaterto_beaker_2,#SecondpageWaterto_beaker_3,#SecondpageWaterto_beaker_5').hide();
      $('#SecondpageWaterto_beaker_4').show();
    }
    else if ($('#SecondpageWaterto_beaker_4').css('display') == 'block') {
      $('#Waterto_beaker_1,#SecondpageWaterto_beaker_2,#SecondpageWaterto_beaker_3,#SecondpageWaterto_beaker_4').hide();
      $('#SecondpageWaterto_beaker_5').show();
    }
  }
  function SecondPageClick() {
    $(".SecondPagebeaker5_water").show();
    $(".SecondPagebeaker5_80mlwater").hide();
    $(".SecondPagebeaker-5Shadow").show();
    $("#water_falling_down2").css({ display: 'none' });
    $("#SecondpageWaterto_beaker_2").css({ display: 'block' });
    $("#SecondPage_Beaker5").draggable("enable");

  }
  $('#btn_Nxt2').click(function () {
    $("#FirstPage").hide();
    $("#Second_page").hide();
    $("#thirdPage").show();
    $("#btn_Nxt2").hide();
    removeTrip();
    pg = 2;
    hlp = 1;
    $("#Inference_message").fadeIn()
    $("#TheReactionMessage").html(alertMSg[0]);
    $("#Inference_message").fadeOut(3500)
  });

  function wateranimateThirdpage3() {
    if ($('#WaterAnimThirdpage_1').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_2').show();
    } else if ($('#WaterAnimThirdpage_2').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_3').show();
    } else if ($('#WaterAnimThirdpage_3').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_4').show();
    } else if ($('#WaterAnimThirdpage_4').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_5').show();
    } else if ($('#WaterAnimThirdpage_5').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_6').show();
    } else if ($('#WaterAnimThirdpage_6').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_7').show();
    } else if ($('#WaterAnimThirdpage_7').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_8').show();
    } else if ($('#WaterAnimThirdpage_8').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_9').show();
    } else if ($('#WaterAnimThirdpage_9').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_10').show();
    } else if ($('#WaterAnimThirdpage_10').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_11').show();
    } else if ($('#WaterAnimThirdpage_11').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_12').show();
    } else if ($('#WaterAnimThirdpage_12').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_13').show();
    } else if ($('#WaterAnimThirdpage_13').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_14').show();
    } else if ($('#WaterAnimThirdpage_14').css('display') == 'block') {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14').hide();
      $('#WaterAnimThirdpage_15').show();
    } else {
      $('#WaterAnimThirdpage_1,#WaterAnimThirdpage_2,#WaterAnimThirdpage_3,#WaterAnimThirdpage_4,#WaterAnimThirdpage_5,#WaterAnimThirdpage_6,#WaterAnimThirdpage_7,#WaterAnimThirdpage_8,#WaterAnimThirdpage_9,#WaterAnimThirdpage_10,#WaterAnimThirdpage_11,#WaterAnimThirdpage_12,#WaterAnimThirdpage_13,#WaterAnimThirdpage_14,#WaterAnimThirdpage_15').hide();
      $('#WaterAnimThirdpage_1').show();
    }
  }
  function wateranimateThirdpage4() {
    if ($('#WaterAnimThirdpage2_1').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_2').show();
    } else if ($('#WaterAnimThirdpage2_2').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_3').show();
    } else if ($('#WaterAnimThirdpage2_3').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_4').show();
    } else if ($('#WaterAnimThirdpage2_4').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_5').show();
    } else if ($('#WaterAnimThirdpage2_5').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_6').show();
    } else if ($('#WaterAnimThirdpage2_6').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_7').show();
    } else if ($('#WaterAnimThirdpage2_7').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_8').show();
    } else if ($('#WaterAnimThirdpage2_8').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_9').show();
    } else if ($('#WaterAnimThirdpage2_9').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_10').show();
    } else if ($('#WaterAnimThirdpage2_10').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_11').show();
    } else if ($('#WaterAnimThirdpage2_11').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_12').show();
    } else if ($('#WaterAnimThirdpage2_12').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_13').show();
    } else if ($('#WaterAnimThirdpage2_13').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_14').show();
    } else if ($('#WaterAnimThirdpage2_14').css('display') == 'block') {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14').hide();
      $('#WaterAnimThirdpage2_15').show();
    } else {
      $('#WaterAnimThirdpage2_1,#WaterAnimThirdpage2_2,#WaterAnimThirdpage2_3,#WaterAnimThirdpage2_4,#WaterAnimThirdpage2_5,#WaterAnimThirdpage2_6,#WaterAnimThirdpage2_7,#WaterAnimThirdpage2_8,#WaterAnimThirdpage2_9,#WaterAnimThirdpage2_10,#WaterAnimThirdpage2_11,#WaterAnimThirdpage2_12,#WaterAnimThirdpage2_13,#WaterAnimThirdpage2_14,#WaterAnimThirdpage2_15').hide();
      $('#WaterAnimThirdpage2_1').show();
    }
  }
  $("#ResetWindow").click(function () {
    window.location.reload()

  })



  function WarningMessages() {

    if (alertmsg == 1) {
      $(".thirdpage-Warning").show();
      var trip = new Trip([
        {
          sel: $('.thirdpage-Warning'),
          position: 'e',
          content: alertMSg[1],
          expose: false,
          delay: 4000
        },
      ], {

        backToTopWhenEnded: true,
        delay: 2000
      });
      setTimeout(function () {
        $(".thirdpage-Warning").hide();
      }, 4400);

    }

    trip.start();
    window.trip = trip;

  }



});


function removeTrip() {
  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;
  }

}
