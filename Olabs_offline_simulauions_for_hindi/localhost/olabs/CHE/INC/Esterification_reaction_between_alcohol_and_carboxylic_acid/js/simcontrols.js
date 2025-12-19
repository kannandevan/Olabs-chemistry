
var angle = 0, turningRight = false;
var temp;
var temp2 = false;
var temp3 = false;
var temp4 = false;
var temp5 = false;
var testube = false;
var lastpour = false
var infMsg, controlStr; var helpMsg;
var helpcount = 0;

var inferenceText



$(document).ready(function () {

  help = 1
  $("#next_btn").hide();
  gt = new Gettext({ 'domain': 'messages' });
  $('[data-translate]').html(function (index, originalHtml) {
    console.log(originalHtml);
    return gt.gettext(originalHtml);
  });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("RESET"));
  document.addEventListener("dragstart", function (event) {
    event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);
  }, false);
  document.getElementById("expName").innerHTML = gt.gettext("Esterification reaction between alcohol and carboxylic acid");
  nxtmsg = gt.gettext('click on next button')
  $("#next_btn").attr('value',gt.gettext('Next'))
  helpMsg = [gt.gettext('Drag the measuring cylinder<br> containing 3 mL ethanol into test tube<br> containing 3 mL ethanoic acid.'),
  gt.gettext('Drag the dropper from the conc. H<sub>2</sub>SO<sub>4</sub> bottle with 5 drops ofconc.H<sub>2</sub>SO<sub>4</sub> into the test tube'), gt.gettext('Drag a cork over the mouth of the test tube'), gt.gettext('Drag the testube towards <br> the beaker containing water'), gt.gettext('Drag a thermometer into the testube'), gt.gettext('Click on the burner knob<br> to heat the water in the beaker'), gt.gettext('Click on the burner knob again to turn off flame'),
  gt.gettext('Drag the testube to shake'), gt.gettext('Click on the cork to open it'), gt.gettext('Drag the testube to pour into <br> the beaker containing aquaeous NAHCO<sub>3</sub>'), gt.gettext('Click on the Inference button')];
  inferenceText = gt.gettext("We observe a fruity smell of ester, Ethanoic acid has vinegar like<br> smell and Ethanol has sweet and pungent smell");
  $("#reset").val(gt.gettext("Reset"))
  $("#waterlab").html(gt.gettext("<h5>WATER</h5>"))
  $("#beaker1label").html(gt.gettext("<h5>NaHCO<sub>3</sub></h5>"))
  $("#text").html(gt.gettext("Ethanoic Acid"))
  $("#text2").html(gt.gettext("Ethanol"))
  $("#firstpg_txt").html(gt.gettext("1. Drag the measuring cylinder containing 3mL Ethanoic Acid into the test tube."))
  $("#firstpg_txt1").html(gt.gettext("2. Drag the dropper containing H<sub>2</sub>SO<sub>4</sub> to the top of the test tube"))
  $("#secondpg_txt").html(gt.gettext("1. Drag the test tube towards the test tube clamp"))
  $("#secondpg_txt1").html(gt.gettext("2. Drag the thermometer towards the top of the test tube"))
  $("#InstrLbl").html(gt.gettext("Instructions"))
  $(".controlHolder").css("display", "none")
  $(".canvasHolder").css({ "width": "100%" })

  $(function () {
    $("#cyl").css({ cursor: "pointer" })
    //dragging cylinder
    $("#cyl").draggable({ containment: "#canvasBox" }, { cursorAt: { top: 56, left: 56 } },
      {
        drag: function () {
          removeTrip();

        }
      },

      {
        revert: function () {
          if (!temp) {
            return true
          }
        }
      });
    //dropping cylinder
    $("#dropit").droppable({
      accept: "#cyl",
      drop: function () {
        helpcount = 1
        $("#cyl").css({ cursor: "default" })
        $("#droper").css({ cursor: "pointer" })
        $("#cyl").css({ left: 139 + 'px', top: 40 + '%' });
        $("#cyl").animate(

          { deg: -95 },
          {
            duration: 1200, step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
          },
          $("#cylwater").hide(0),
          $("#slantwater").show(1000, function () { $("#slantwater").hide({ direction: "right" }, 2000) }),
          $("#pour").delay(900),
          $("#pour").show("blind", { direction: "up" }, function () { $("#pour").hide("blind", { direction: "down" }) })
        );

        $("#cylsoln").delay(1000)
        $("#cylsoln").show("blind", { direction: "down" }, 600, function () { $("#cyl").animate({ left: 55 + '%', top: 34 + '%' }) });
        $("#cyl").animate({ deg: +0 },
          {
            duration: 1200, step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }, 1000)
        $("#cyl").draggable({ disabled: "true" })

        //dropper dragging

        $("#droper").draggable({ containment: "#canvasBox" }, { cursor: "grab", cursorAt: { top: 0 } }, { drag: function () { removeTrip() } },
          {
            revert: function () {
              if (!temp) {
                return true
              }
            }
          }
        );

        $("#dropit").droppable({
          accept: "#droper",
          drop: function () {
            helpcount = 2
            $("#droper").css({ cursor: "default" })
            $("#cork").css({ cursor: "pointer" })
            $("#drops").show();
            $("#droper").css({ left: 153 + 'px', top: 5 + '%' });
            //$("#cork").draggable("enable")
            $("#dropsol").hide("drop", { direction: "down" }, 5000, function () {
              $("#droper").animate({ top: 28.2 + '%', left: 84 + '%' }, function () {
                $("#dropsol").show("drop", { direction: "down" });
                $("#cork").draggable("enable")
              })
            });
            temp = true;
            for (let i = 0; i <= 4; i++) {

              $("#drops").animate({ top: 230 + 'px' }, function () {

                $("#drops").hide();

                $("#soln").animate({ 'top': parseInt($(soln).css('top')) - 3 + "px", 'height': parseInt($(soln).css('height')) + 3 + "px" });

              })
              if (i < 4) {
                $("#drops").animate({ top: 150 + 'px' }, function () {
                  $("#drops").show();
                  temp = false;
                });
              }
            }
            $("#droper").draggable({ disabled: "true" });
            $("#cork").draggable({ disabled: "true" });
            //cork dragging

            $("#cork").draggable({ containment: "#canvasBox" }, { cursor: "grab", cursorAt: { top: 0 } }, {
              drag: function () {
                removeTrip();
              }
            },
              {
                revert: function () {
                  if (!temp2) {
                    return true
                  }
                }
              });
            $("#dropit").droppable({
              accept: "#cork",
              drop: function () {
                helpcount = 3
                $("#cork").css({ left: 153 + 'px', top: 145 + 'px' });
                temp2 = true;
                $("#next_btn").show();
              }
            })
          }
        });
      }
    });
    //second page start
    $("#next_btn").click(function () {
      help = 2;
      helpcount = 4;
      $("#droper").hide()
      $("#bottle").hide()
      $("#cyl").hide()
      $("#testube").hide()
      $("#teststand").hide()
      $("#testbar").hide()
      $("#soln").hide()
      $("#pour").hide()
      $("#cylsoln").hide()
      $("#dropit").hide()
      $("#cork").hide()
      $("#wat").hide()
      $("#ethanoic").hide()
      $("#dropit").hide()
      $(".label1").hide()
      $(".label2").hide()
      $(".firstpg_txt").hide()
      $(".secondpg_txt").show()
      $("#next_btn").hide()
      $("#mainDiv2").show()
    });
    $("#testwithsol").css({ cursor: "pointer" })
    $("#testsol").draggable({ disabled: "true" });
    $("#testwithsol").draggable({ containment: "#canvasBox" }, { cursorAt: { top: 15 } }, {
      revert: function () {
        if (!temp5) {
          return true
        }
      }
    }, { drag: function () { removeTrip() } });
    $("#dropit1").droppable({
      accept: "#testwithsol",
      drop: function () {
        helpcount = 5
        $("#testwithsol").css({ cursor: "default" })
        $("#thermometer").css({ cursor: "pointer" })
        $("#testwithsol").css({ left: 176 + 'px', top: 56 + 'px' });
        $("#tststand_top").css('zIndex', '3');
        $("#beaker").css('zIndex', '2');
        $("#beakerwater").css('zIndex', '2');
        $("#testwithsol").draggable({ disabled: "true" });
        temp5 = true;
        $("#thermometer").draggable({ containment: "#canvasBox" }, { cursor: "grab", cursorAt: { top: 15 } },
          {
            drag: function () {
              removeTrip();
            }
          },
          {
            revert: function () {
              if (!temp3) {
                return true
              }
            }
          });
        $("#dropit2").droppable({
          accept: "#thermometer",
          drop: function () {
            helpcount = 6;
            $("#thermometer").css({ cursor: "default" })
            $("#burner_on").css({ cursor: "pointer" })
            $("#thermometer").css({ left: 188 + 'px', top: 9 + 'px' });
            $("#thermometer").hide();
            $("#thermometer1").show();
            $("#dropit2,#dropit1").hide();
            $("#testwithsol").hide();
            $("#testsol").show();
            // starting burner
            $("#burner_on").click({ cursor: "pointer" }, function () {
              removeTrip();
              helpcount = 7;
              $("#burner_off").css({ cursor: "pointer" })
              // $("#testsol").draggable("enable");
              $("#temp40").show("bounce", 2000, function () { $("#temp40").hide("fade", 1000) })
              $("#crossfade,#burner_on,#burner_off,#smoke").toggle()
            }, $("#smoke").delay(1000));
            temp3 = true;
            $("#burner_off").click({ cursor: "pointer" }, function () {
              removeTrip();
              helpcount = 8;
              $("#testsol").draggable("enable");
              $("#burner_off").css({ cursor: "default" })
              $("#testsol").css({ cursor: "pointer" })
              $("#crossfade,#burner_off,#smoke").toggle()
              $("#burner_on2").show()
            }, $("#smoke").delay(1000), $("#smoke").hide());
          }
        });
        $("#testsol").draggable({ containment: "#canvasBox" }, { cursor: "grab", cursorAt: { top: 15 } },
          {
            drag: function () {
              removeTrip();
            }
          },
          {
            revert: function () {
              if (!testube) {
                return true
              }
            }
          })

        $("#dropit3").droppable({
          accept: "#testsol",
          drop: function () {
            helpcount = 9;
            $("#testsol").css({ cursor: "default" })
            $("#cork3").css({ cursor: "pointer" })
            $("#testsol").css({ left: 361 + 'px', top: 52 + 'px' }, testTubeShaking("#testsol"), $("#testsol").delay(2000));
            setTimeout(function () {
              clearTimeout(clrTimeOutTube)
              $("#testsol").animate({ left: 176 + 'px', top: 56 + 'px', rotate: '0' }, 1000);
              $("#testsol").css('zIndex', '2');
              $("#dropit3,#crossfade,#burner_off,#smoke").hide();
            }, 2000)
            temp2 = true;
            $("#cork3").click(function () {
              removeTrip();
              helpcount = 10;
              $("#cork3").css({ cursor: "default" })
              $("#testsol").css({ cursor: "pointer" })
              $("#thermometer2").animate({ left: 330 + 'px', top: 83 + 'px' });
              $("#thermometer2").hide();
              $("#thermometer3").show();
              $("#testsol").draggable("enable")
              $("#cork3").animate({ left: 60 + '%', top: 83 + '%' }, 1000);
              $("#cork_under").show();
              $("#corkshadow").show();
              $("#cork3").hide();
              $("#testsol").draggable({ containment: "#canvasBox" }, { cursor: "grab", cursorAt: { top: 56, left: 56 } },
                {
                  drag: function () {
                    removeTrip();
                  }
                },
                {
                  revert: function () {
                    if (!lastpour) {
                      return true
                    }
                  }
                });

              $("#dropit4").droppable({
                accept: "#testsol",
                drop: function () {
                  $("#olabmenuBar li:first-child").unbind("click");
                  helpcount = 11;
                  lastpour = true
                  $("#testsol").css({ cursor: "default" })
                  $("#testsol").css({ left: 340 + 'px', top: 145 + 'px' });
                  $("#soln3").hide();
                  $("#testsol").animate(
                    { deg: -90 },
                    {
                      duration: 1200, step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });

                      }
                    },
                    $("#slantwater2").show(250, function () { $("#slantwater2").hide({ direction: "right" }, 250) }),
                    $("#pour2").delay(900),
                    $("#pour2").show("blind", { direction: "up" }, function () { $("#pour2").hide("blind", { direction: "down" }) }),
                    $("#dropsol2").delay(750),
                    $("#dropsol2").show("blind", { direction: "up" }, function () { $("#dropsol2").hide("blind", { direction: "down" }) }),
                    $("#effer").delay(500),
                    $("#effer").show("fade", 3000, function () {
                      $("#effer").hide("fade", 2000)
                    })
                  );
                  $("#testsol").animate({ deg: +0 },
                    {
                      duration: 1200, step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        $("#testsol").delay(5000, function () { $("#testsol").hide(), $("#testsol2").show() })
                      }
                    }, 1000)
                  $("#testsol2").animate({ left: 566 + 'px', top: 205 + 'px' }, 1000)
                  $("#inference").delay(3000).show("scale", 500)
                }
              })
            });
          }
        })
      }
    });
  });
  function testTubeShaking(dragElement) { //shake testtube
    $(dragElement).css({ '-ms-transform': 'rotate(' + angle + 'deg)', '-webkit-transform': 'rotate(' + angle + 'deg)', 'transform': 'rotate(' + angle + 'deg)' });
    if (turningRight)
      angle++;
    else {
      angle--;
    }
    if (angle == 5) {
      turningRight = false;
    }
    if (angle == -5) {
      turningRight = true;
    }
    clrTimeOutTube = setTimeout(function () { testTubeShaking(dragElement) }, 5);
  }
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