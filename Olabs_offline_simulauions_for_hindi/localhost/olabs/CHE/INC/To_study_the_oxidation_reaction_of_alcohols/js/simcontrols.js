var angle = 0, turningRight = false;
var temp;
var temp2 = false;
var temp3 = false;
var temp4 = false;
var temp5 = false;
var temp6 = false;
var temp7 = false;
var temp8;
var temp9;
var temp10;
var temp11;
var temp12;
var testube = false;
var lastpour = false
var infMsg, controlStr; var helpMsg;
var helpcount = 0;


$(document).ready(function () {
  $('#ethnlCap').css('cursor', 'pointer');
  help = 1
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  helpMsg = [gt.gettext('Click on the ethanol bottle cap to open'), gt.gettext('Drag the ethanol bottle to the top of the spirit lamp'), gt.gettext('Click on the cap and cotton thread<br>to place it inside the spirit lamp'), gt.gettext('Drag the spirit lamp below the inverted funnel'), gt.gettext('Drag the jet tube towards<br>the top of the inverted funnel'), gt.gettext('Drag the lighter near the thread tip of spirit lamp'), gt.gettext('click on the next button'),
  gt.gettext('Drag the measuring cylinder containing<br>3ml ethanol to the boiling tube'), gt.gettext('Drag the boiling tube to the testube clamp<br>so as to place it inside the<br>beaker for a water bath'), gt.gettext('Click on the burner knob<br> to turn on flame'), gt.gettext('Click on the burner knob again<br> to turn off flame'), gt.gettext('Drag the boiling tube from<br>the beaker towards the testube stand '), gt.gettext('Drag the dropper to drop 2 or 3 drops<br>of KMnO<sub>4</sub> into the boiling tube'), gt.gettext('click on the next button'),
  gt.gettext('Click on the filter paper to produce 2 folds'), gt.gettext('Drag the filter paper to the top of funnel'), gt.gettext('Drag the boiling tube containing unfiltered<br>solution towards the funnel to filter '), gt.gettext('Drag the boiling tube outside the tripod<br>stand towards the test tube stand'), gt.gettext('Drag spatula containing a pinch<br>of NaHCO3 into the boiling tube')];
  inferenceText = gt.gettext("The lime water turns milky due to <br> the CO2 gas in the reaction We can see the condensation <br> of water vapours on the inner surface of the funnel");
  inferenceText2 = gt.gettext("Purple colour is decolourized");
  inferenceText3 = gt.gettext("A brisk Effervessence is formed inside the testube");
  resetMsg = gt.gettext("Click on the Reset button to redo the simulation")
  $("#reset").val(gt.gettext("Reset"))
  $("#reset,#reset2").click(function () { window.location.reload() })
  $("#preSptLmpEthanol,#preSptLmpCap,#pourEthnl,#preSptLmpThread,#slantWater,#pour,#waterTestTube,#drops,#smoke,#filter,#inference,#note2,#eqn2,#funnelFog,#funnelBubbles,#milky,#milkyBubbles,#milkyBubbles1,#milkyBubbles2,#milkySmoke").hide();
  $("#waterTestTube3").hide()
  $("#nextBtn").hide()
  $("#nextBtn2").hide()
  //ethanol cap start
  $("#ethnlCap").on("click", function () {
    $("#ethnlCap").unbind("click");
    $('#ethnlCap').css('cursor', 'default');
    $('#ethnlBottle').css('cursor', 'pointer');
    helpcount = 1
    removeTrip()
    $(this).animate({ left: -32 + 'px', top: 67 + 'px' })

    //ethanol bottle drag start
    $("#ethnlBottle").draggable({ containment: "#bg" }, {
      start: function () { $("#ethnlShadow").hide() }
    },
      { drag: function () { removeTrip() } },
      {
        revert: function () {
          if (!temp) {
            return true
          }
        }
      });
    //ethanol bottle drag end 
    //ethanol bottle drop start
    $("#dropit").droppable({
      accept: "#ethnlBottle",
      drop: function () {
        $('#ethnlBottle').css('cursor', 'default');
        $('#spiritLampCap').css('cursor', 'pointer');
        helpcount = 2
        temp = true
        $("#ethnlBottle").css({ left: -123.5 + 'px', top: -37 + 'px' });
        $("#ethnlBottle").animate(
          { deg: -95 },
          {
            duration: 1200, step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
          },
          $("#pourEthnl").delay(700),
          $("#pourEthnl").show("blind", { direction: "up" }, function () { $("#pourEthnl").hide("blind", { direction: "down" }) }),
          $("#preSptLmpEthanol").delay(500).show("blind", { direction: "down" }, 800)
        )
        $("#ethnlBottle").animate({ deg: +0 },
          {
            duration: 1200, step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }, 1000)
        $("#ethnlBottle").animate({ left: 0 + 'px', top: 0 + 'px' }, function () { $("#ethnlCap").animate({ left: 13.3 + 'px', top: -12 + 'px' }) });
        $("#ethnlShadow").delay(2550).show("scale")
        $("#wholeEthnl,#ethnlBottle,#preSptLmp").draggable({ disabled: "true" });
        $("#spiritLampCap").on("click", function () {
          $('#spiritLampCap').css('cursor', 'default');
          $('#preSptLmp').css('cursor', 'pointer');
          helpcount = 3
          removeTrip()
          $("#spiritLampCapShadow").hide("scale", 200)
          $(this).css('zIndex', '3')
          $(this).animate(500, function () { $("#spiritLampCap").hide() })
          $("#preSptLmp").css('zIndex', '4')
          $("#preSptLmpCap,#preSptLmpThread").show()
          $("#preSptLmp").draggable('enable');
        })

        $("#preSptLmp").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
          start: function () { $("#preSptLmpShadow").hide() }
        },
          { drag: function () { removeTrip() } },
          {
            revert: function () {
              if (!temp2) {
                return true
              }
            }
          });
        $("#dropit1").droppable({
          accept: "#preSptLmp",
          drop: function () {
            $('#preSptLmp').css('cursor', 'default');
            $('#wholeJetTube').css('cursor', 'pointer');
            helpcount = 4
            temp2 = true
            $("#preSptLmp").hide();
            $("#wholeSptLmp").show();
            //jetube drag start
            $("#wholeJetTube").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
              start: function () { $("#jetTubeShadow").hide() }
            },
              { drag: function () { removeTrip() } },
              {
                revert: function () {
                  if (!temp3) {
                    return true
                  }
                }
              });
            //jetube drag end

            //jetube drop start
            $("#dropit2").droppable({
              accept: "#wholeJetTube",
              drop: function () {
                $('#wholeJetTube').css('cursor', 'default');
                $('#wholeLighter').css('cursor', 'pointer');
                helpcount = 5
                temp3 = true
                $("#wholeJetTube").hide();
                $("#dropit2").hide();
                $("#jetTube").show("blind", { direction: "left" }, 1000)

                //lighter drag start
                $("#wholeLighter").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
                  start: function () { $("#lighterShadow").hide() }
                },
                  { drag: function () { removeTrip() } },
                  {
                    revert: function () {
                      if (!temp4) {
                        return true
                      }
                    }
                  });
                //lighter drag end

                //lighter drop start
                $("#dropit1").droppable({
                  accept: "#wholeLighter",
                  drop: function () {
                    $('#wholeLighter').css('cursor', 'default');
                    $('#nextBtn').css('cursor', 'pointer');
                    helpcount = 6
                    temp4 = true
                    $("#wholeLighter").animate({ left: 170 + 'px', top: 204 + 'px' });
                    $("#lighterFlame").show("pulsate", 650);
                    $("#crossfade").delay(1000).show("fade", 500)
                    $("#lighterFlame").delay(400).hide("fade", 400);
                    $("#wholeLighter").animate(
                      { deg: -15 },
                      {
                        duration: 1200, step: function (now) {
                          $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        }
                      }
                    )
                    $("#wholeLighter").animate({ deg: +0 },
                      {
                        duration: 1200, step: function (now) {
                          $(this).css({ transform: 'rotate(' + now + 'deg)' });
                          $("#lighterShadow").delay(1100).show("scale", 700)
                          $(this).animate({ left: 347 + 'px', top: 254 + 'px' })
                        }

                      }, 1000)
                    //$("#wholeLighter,#lighterShadow").draggable('disable')
                    $("#funnelFog").delay(2000).show("blind", { direction: "down" }, 3000, function () {
                      $("#funnelBubbles").delay(1000).show("fade", 1000)
                      $("#milky,#milkySmoke").delay(1000).fadeIn({ direction: "down" }, 1000)
                      $("#milkyBubbles,#milkyBubbles1,#milkyBubbles2").delay(1000).show("fade", 1000)
                      $("#inference").show("scale", 500)
                      $("#nextBtn").show()
                    })
                  }
                })
                //lighter drop end
              }
            })
            //jetube drop end
          }
        })
      }
    })
    //ethanol bottle drop end
  })
  //ethanol cap end
  //next btn show

  $("#nextBtn").click(function () {
    $('#wholeMeasCyl').css('cursor', 'pointer');
    help = 2
    helpcount = 7
    removeTrip()
    $("#mainDiv,#nextBtn,.firstpg_txt").hide()
    $("#mainDiv2,.secondpg_txt").show()
  })
  //next btn show end

  ////////////////////////////////////////////////////////second page simulation////////////////////////////////////////////////////////////////////////

  //meascyl drag start
  $("#wholeMeasCyl").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
    start: function () { $("#shadowMeasCyl").hide() }
  },
    { drag: function () { removeTrip() } },
    {
      revert: function () {
        if (!temp5) {
          return true
        }
      }
    });
  //meascyl drag end

  //dropping cylinder start
  $("#dropit3").droppable({
    accept: "#wholeMeasCyl",
    drop: function () {
      $('#wholeMeasCyl').css('cursor', 'default');
      $('#wholeTestTube').css('cursor', 'pointer');
      helpcount = 8
      $("#wholeMeasCyl").css({ left: 406 + 'px', top: 151 + 'px' });
      $("#wholeMeasCyl").animate(
        { deg: -95 },
        {
          duration: 1200, step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        },
        $("#waterMeasCyl").hide("fade", 1000),
        $("#slantWater").delay(500).show(10),
        $("#slantWater").hide("blind", { direction: "left" }, 1000),
        $("#pour").delay(1000),
        $("#pour").show("blind", { direction: "up" }, function () { $("#pour").hide("blind", { direction: "down" }) })
      );
      $("#waterTestTube").delay(1000)
      $("#waterTestTube").show("blind", { direction: "down" }, 600)
      $("#wholeMeasCyl").animate({ deg: +0 },
        {
          duration: 1200, step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }, 1000)
      $("#dropit3").hide();
      $("#wholeMeasCyl").draggable({ disabled: "true" })

      //testube drag start
      $("#wholeTestTube").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
        start: function () { $("#shadowTestTube").hide() }
      },
        { drag: function () { removeTrip() } },
        {
          revert: function () {
            if (!temp6) {
              return true
            }
          }
        });
      //testube drag end
      // testube drop start
      $("#dropit4").droppable({
        accept: "#wholeTestTube",
        drop: function () {
          $('#wholeTestTube').css('cursor', 'default');
          $('#burnerOn').css('cursor', 'pointer');
          helpcount = 9
          $("#wholeTestTube").css({ left: 240 + 'px', top: 81 + 'px' });
          $("#wholeTestTube").css('zIndex', '3')

          temp6 = true;
          //burner on start
          $("#burnerOn").click({ cursor: "pointer" }, function () {
            $('#burnerOn').css('cursor', 'default');
            $('#burnerOff').css('cursor', 'pointer');
            removeTrip()
            helpcount = 10
            $("#burnerOff,#burnerOn,#crossfade2,#smoke").toggle();
          });
          //burner on end
          //burner off start
          $("#burnerOff").click({ cursor: "pointer" }, function () {
            $('#burnerOff').css('cursor', 'default');
            $('#wholeTestTube').css('cursor', 'pointer');
            removeTrip()
            helpcount = 11
            $("#burnerOn,#burnerOff,#crossfade2,#smoke").toggle();
            $("#dropit4").hide();
            $("#dropit5").show();
            // $("#wholeTestTube").css('zIndex', '7')                   
            //testube drag_2 start
            $("#wholeTestTube").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
              start: function () { $("#shadowTestTube").hide() }
            },
              { drag: function () { removeTrip() } },
              {
                revert: function () {
                  if (!temp7) {
                    return true
                  }
                }
              });
            //testube drag_2 end
            //testube drop_2 start
            $("#dropit5").droppable({
              accept: "#wholeTestTube",
              drop: function () {
                $('#wholeTestTube').css('cursor', 'default');
                $('#wholeDropper').css('cursor', 'pointer');
                helpcount = 12
                $("#wholeTestTube").css({ left: 402 + 'px', top: 182 + 'px' });
                $("#wholeTestTube").css('zIndex', '1')
                temp7 = true;
                //dropper drag start
                $("#wholeDropper").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } }, {
                  start: function () { $("#shadowDropper").hide() }
                },
                  { drag: function () { removeTrip() } },
                  {
                    revert: function () {
                      if (!temp8) {
                        return true
                      }
                    }
                  });
                //dropper drag end
                //dropper drop start
                $("#dropit5").droppable({
                  accept: "#wholeDropper",
                  drop: function () {
                    $('#wholeDropper').css('cursor', 'default');
                    $('#nextBtn2').css('cursor', 'pointer');
                    helpcount = 13
                    $("#soln").show();
                    $("#drops").show();
                    $("#wholeDropper").css({ left: 400.9 + 'px', top: 97 + 'px' });

                    $("#dropsol").hide("drop", { direction: "down" }, 5000, function () {
                      $("#wholeDropper").animate({ top: 137 + 'px', left: 660.3 + 'px' }, function () {
                        $("#dropsol").show("drop", { direction: "down" });
                        $("#inference2").show("scale", 500)
                        $("#nextBtn2").show()

                      })
                    });
                    temp8 = true;
                    for (i = 0; i < 4; i++) {
                      $("#drops").animate({ top: 200 + "px", opacity: "1" }, 400, 'linear');

                      $("#drops").animate({ top: 200 + "px", opacity: "0" }, 'linear');
                      $("#drops").animate({ top: 175 + "px" }, 200, 'linear');
                      $('#waterTestTube').animate({ 'top': parseInt($(waterTestTube).css('top')) - 10 + "px", 'height': parseInt($(waterTestTube).css('height')) + 14 + "px" }, 4000);
                    }
                  }
                })
                //dropper drop end                                                             
              }
            })
            //testube drop_2 end
          });
          //burner off end 
        }
      })
      // testube drop end
    }


  })
  //dropping cylinder end  
  //next btn2 show  
  $("#nextBtn2").click(function () {
    $('#filterFirst').css('cursor', 'pointer');
    help = 3
    helpcount = 14
    removeTrip()
    $("#mainDiv2,#nextBtn2,.secondpg_txt").hide()
    $("#mainDiv3,.thirdpg_txt").show();
  })
  //next btn2 end
  //filter paper start
  $("#filterFirst").on("click", function () {
    $('#filterFirst').css('cursor', 'default');
    $('#filterFold').css('cursor', 'pointer');
    helpcount = 15
    removeTrip()
    $("#crossfade3").show(function () { $("#crossfade3,#filterFirst").delay(450).hide(100, function () { $("#filterFold").show() }) })
  })

  $("#filterFold").draggable({ containment: "#bg" },
    { drag: function () { removeTrip() } },
    {
      revert: function () {
        if (!temp9) {
          return true
        }
      }
    });

  $("#dropit6").droppable({
    accept: "#filterFold",
    drop: function () {
      $('#filterFold').css('cursor', 'default');
      $('#wholeTestTube2').css('cursor', 'pointer');
      helpcount = 16
      $("#filterFold").hide();
      $("#lastFilter").show("drop", { direction: "up" }, 1000);
      temp9 = true;
      //testube with sol to filter start
      $("#wholeTestTube2").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } },
        { drag: function () { removeTrip() } },
        {
          revert: function () {
            if (!temp10) {
              return true
            }
          }
        });

      $("#dropit6").droppable({
        accept: "#wholeTestTube2",
        drop: function () {
          $('#wholeTestTube2').css('cursor', 'default');
          $('#wholeTestTube3').css('cursor', 'pointer');
          helpcount = 17
          temp10 = true;
          $("#wholeTestTube2").css({ left: 176 + 'px', top: 26 + 'px' });
          $("#wholeTestTube2").animate(

            { deg: -95 },
            {
              duration: 1200, step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            },
            $("#waterTestTube2").hide("fade", 1000),
            $("#pour2").delay(1000),
            $("#pour2").show("blind", { direction: "up" }, function () { $("#pour2").hide("blind", { direction: "down" }) })
          );
          $("#waterTestTube3").delay(2000)
          $("#waterTestTube3").show("blind", { direction: "down" }, 600)
          $("#wholeTestTube2").animate({ deg: +0 },
            {
              duration: 1200, step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                setTimeout(function () {
                  $("#wholeTestTube2").hide()
                }, 1500);
              }
            }, 1000)
          $("#dropit6").hide(function () { $("#dropit7").show(); });
          //filtered testtube start
          $("#wholeTestTube3").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } },
            { drag: function () { removeTrip() } },
            {
              revert: function () {
                if (!temp11) {
                  return true
                }
              }
            });

          $("#dropit7").droppable({
            accept: "#wholeTestTube3",
            drop: function () {
              $('#wholeTestTube3').css('cursor', 'default');
              $('#wholeSpatula').css('cursor', 'pointer');
              helpcount = 18
              temp11 = true;
              $("#wholeTestTube3").css({ left: 346 + 'px', top: 170 + 'px' })

              //spatula start
              $("#wholeSpatula").draggable({ containment: "#bg" }, { cursorAt: { top: 15 } },
                { drag: function () { removeTrip() } },
                {
                  revert: function () {
                    if (!temp12) {
                      return true
                    }
                  }
                });

              $("#dropit7").droppable({
                accept: "#wholeSpatula",
                drop: function () {
              helpcount = 19
                  temp12 = true;
                  // $("#olabmenuBar li:first-child").unbind("click");
                  $("#wholeSpatula").css({ left: 343 + 'px', top: 152 + 'px' });
                  $("#wholeSpatula").animate(

                    { deg: -40 },
                    {
                      duration: 1200, step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });

                      }

                    },
                    $("#powderSpatula").delay(700).hide("fade", { direction: "left" }, 500),
                    $("#powderFall").delay(1000),
                    $("#powderFall").show("blind", { direction: "up" }, function () { $("#powderFall").hide("blind", { direction: "down" }) })
                  );
                  $("#lastEffer").delay(1000).show("fade", 5000, { direction: "down" })
                  $("#lastEffer").delay(1000).hide("fade", 3000);
                  $("#inference3").show("scale", 500)
                  $("#wholeSpatula").animate({ deg: +0 },
                    {
                      duration: 1200, step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }, 1000)
                  $("#wholeSpatula").animate({ left: 650 + 'px', top: 222 + 'px' })
                  $("#wholeSpatula").draggable('disable');

                }
              })
              //spatula end                   
            }
          })
          //filtered testtube end
        }
      })
      //testube with sol to filter end      
    }
  })

  //filter paper end
  $("#reset").click(function () {
    window.location.reload();
  });
});

function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripClickFlag = false;
  }
}












