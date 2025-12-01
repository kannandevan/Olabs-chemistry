var angle = 0,
  turningRight = false;
var temp = false;
var temp2 = false;
var temp3 = false;
var temp4 = false;
var temp5 = false;
helpcount = 0;
help = 1;

$(document).ready(function () {
  $("#nxtBtn").show();
  $("#wholecalorimeterLid").css({ cursor: "pointer" });
  gt = new Gettext({ domain: "messages" });
  $("#nxtBtn").html(gt.gettext("NEXT"));
  $("#expName").html(
    gt.gettext(
      "To Determine the Enthalpy of Neutralization of a Strong Acid(HCl) with a Strong Base (NaOH)"
    )
  );
  $("#olabmenuBar li:first-child a").html(gt.gettext("HELP"));
  $("#tempReadC").html(
    gt.gettext(
      "Wait for sometime so that both solution attains same temperature t1, say 28<sup>o</sup>C"
    )
  );
  $("#tempReadA").html(gt.gettext("Temperature = 28<sup>o</sup>C"));
  $("#tempReadB").html(gt.gettext("Temperature = 27<sup>o</sup>C"));
  $("#tempReadD").html(gt.gettext("Temperature = 40<sup>o</sup>C = t2"));
  $("#eqnA").html(
    gt.gettext(
      "Enthalpy change during neutralization of 100 mL of 1M HCl = (200 x W) x (t1 - t2) x 4.18"
    )
  );
  $("#eqnB").html(
    gt.gettext(
      "Where W is the calorimeter constant, and its value is taken as 29.1 J (value depends on the calorimeter)"
    )
  );
  $("#eqnC").html(
    gt.gettext(
      "When 100 mL of 1M HCl is allowed to neutralize 1000 mL of 1M NaOH, calculate the heat <br> that is released. This amount would be ten times greater than what was achieved."
    )
  );
  $("#eqnD").html(
    gt.gettext(
      "Enthalpy of neutralization    =  (200 x W) x (t1 - t2) x 4.18  kJ"
    )
  );
  $("#eqnF").html(
    gt.gettext(
      "We have t1 = 28<sup>o</sup>C, t2 = 40<sup>o</sup>C and W = 29.1 J, Substituting these in tha above equation"
    )
  );

  $("#InstrLbl").html(gt.gettext("Instructions"));
  $("#reset").html(gt.gettext("Reset"));
  $(".secondpg_txt").html(
    gt.gettext("Go through the calculations on the right.")
  );
  $("#firstpg_txt1").html(
    gt.gettext("1. Click on the calorimeter lid to open it.")
  );
  $("#firstpg_txt2").html(
    gt.gettext(
      "2. Drag the beaker containing 100 mL HCL solution towards the top of measuring cylinder."
    )
  );
  $("#firstpg_txt3").html(
    gt.gettext(
      "3. Drag the measuring cylinder containing 100 mL HCl to the top of calorimeter."
    )
  );
  $("#firstpg_txt4").html(
    gt.gettext("4. Click on the calorimeter lid to close it.")
  );
  $("#firstpg_txt5").html(
    gt.gettext(
      "5. Drag the thermometer towards the top of the calorimeter to insert it and measure the initial temperature."
    )
  );
  $("#firstpg_txt6").html(
    gt.gettext(
      "6. Drag the thermometer towards the top of the beaker to insert it and measure the temperature."
    )
  );
  $("#firstpg_txt7").html(
    gt.gettext("7. Drag the thermometer towards the thermometer stand")
  );
  $("#firstpg_txt8").html(
    gt.gettext(
      "8. Drag the beaker containing 100 mL NaOH solution towards the top of measuring cylinder."
    )
  );
  $("#firstpg_txt9").html(
    gt.gettext("9. Click on the calorimeter lid to open it.")
  );
  $("#firstpg_txt10").html(
    gt.gettext(
      "10. Drag the measuring cylinder containing 100 mL NaOH to the top of calorimeter."
    )
  );
  $("#firstpg_txt11").html(
    gt.gettext("11. Drag the stirrer towards the top of calorimeter.")
  );
  $("#firstpg_txt12").html(
    gt.gettext("12. Click on the calorimeter lid to close it.")
  );
  $("#firstpg_txt13").html(
    gt.gettext("13. Click on the stirrer to stir the mixture.")
  );
  $("#firstpg_txt14").html(
    gt.gettext(
      "14. Drag the thermometer towards the top of the calorimeter to insert it and measure the final temperature."
    )
  );

  helpMsg = [
    gt.gettext("Click on the calorimeter lid to open it"),
    gt.gettext(
      "Drag the measuring cylinder containing<br>100 mL HCl to the top of the calorimeter"
    ),
    gt.gettext("Click on the calorimeter lid to close it"),
    gt.gettext(
      "Drag the thermometer towards the top of the<br>calorimeter to insert it and measure the temperature"
    ),
    gt.gettext(
      "Drag the thermometer towards the top of the<br>NaOH beaker to insert it and measure the temperature"
    ),
    gt.gettext("Drag the thermometer towards the thermometer stand"),
    gt.gettext(
      "Drag the beaker containing 100 mL of NaOH solution<br>towards the top of the measuring cylinder"
    ),
    gt.gettext("Click on the calorimeter lid to open it"),
    gt.gettext(
      "Drag the measuring cylinder containing<br>100 mL NaOH to the top of the calorimeter"
    ),
    gt.gettext("Drag the stirrer towards the top of the calorimeter"),
    gt.gettext("Click on the calorimeter lid to close it"),
    gt.gettext("Click on the stirrer to stir the mixture"),
    gt.gettext(
      "Drag the thermometer towards the top of the<br>calorimeter to insert it and measure the temperature"
    ),
  ];

  newHlpmsg = gt.gettext(
    "Drag the beaker containing 100 mL of HCL solution<br>towards the top of the measuring cylinder"
  );
  nextMsg = gt.gettext("Click on the Next button");
  inferenceMsg = gt.gettext("Click on the Inference button");
  resetMsg = gt.gettext("Click on the Reset button to restart the experiment");
  inferenceText = gt.gettext(
    "We've got two temperatures <b>t1 = 28<sup>o</sup>C</b> and <b>t2 = 40<sup>o</sup>C</b>"
  );

  $("#reset").val(gt.gettext("Reset"));

  $("#nxtBtn").hide();

  $("#wholecalorimeterLid").click(function () {
    helpcount = 80;
    removeTrip();
    $("#wholecalorimeterLid").css({ cursor: "default" });
    $("#wholeMeasuringcylinder").css({ cursor: "pointer" });

    $("#wholecalorimeterLid").animate({ left: -74 + "px", top: 167 + "px" });

    $("#wholecalorimeterLid").unbind("click");
    $("#dropitD").show();

    // Newly added content
    $("#wholeBeakerHcl").draggable(
      { containment: "#background" },

      {
        start: function () {},
      },

      {
        drag: function () {
          removeTrip();
        },
      },
      {
        revert: function () {
          if (!temp3) {
            // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
            return true;
          }
        },
      }
    );
    // beaker to measurinf cylinder

    $("#dropitD").droppable({
      accept: "#wholeBeakerHcl",
      drop: function () {
        helpcount = 1;
        // alert()
        $("#wholeBeakerHcl").css({ cursor: "default" });
        $("#wholecalorimeterLid").css({ cursor: "pointer" });
        temp3 = true;
        $("#dropitD").hide();

        $("#wholeBeakerHcl").css({ left: 194 + "px", top: 12 + "px" });

        $("#wholeBeakerHcl").animate(
          { deg: -95 },
          {
            duration: 1200,
            step: function (now) {
              $(this).css({ transform: "rotate(" + now + "deg)" });
            },
          },
          $("#beakerWaterhcl").hide(0),
          $("#slantWaterB").show(1000, function () {
            $("#slantWaterB").hide({ direction: "right" }, 2000);
          }),
          $("#pourA").delay(900),
          $("#pourA").show("blind", { direction: "up" }, function () {
            $("#pourA").hide("blind", { direction: "down" });
          })
        );
        $("#measuringcylinderWater").delay(1000);
        $("#measuringcylinderWater").show("blind", { direction: "down" }, 600);
        $("#wholeBeakerHcl").animate(
          { deg: +0 },
          {
            duration: 1200,
            step: function (now) {
              $(this).css({ transform: "rotate(" + now + "deg)" });
            },
          },
          1000
        ),
          $("#wholeBeakerHcl").animate({ left: 225 + "px", top: 170 + "px" });
        $("#wholeBeakerHcl").draggable("disable");
        $("#dropitA").show();
        $("#wholeMeasuringcylinder").css("pointer-events", "auto");
      },
    });
    //

    $("#wholeMeasuringcylinder").draggable(
      { containment: "#background" },

      {
        start: function () {},
      },

      {
        drag: function () {
          removeTrip();
        },
      },
      {
        revert: function () {
          if (!temp) {
            // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
            return true;
          }
        },
      }
    );

    $("#dropitA").droppable({
      accept: "#wholeMeasuringcylinder",
      drop: function () {
        helpcount = 2;
        $("#wholeMeasuringcylinder").css({ cursor: "default" });
        $("#wholecalorimeterLid").css({ cursor: "pointer" });
        setTimeout(clckenable, 2500);
        temp = true;
        $("#wholeMeasuringcylinder").css({ left: 105 + "px", top: 6 + "px" });
        $("#wholeMeasuringcylinder").animate(
          { deg: -95 },
          {
            duration: 1200,
            step: function (now) {
              $(this).css({ transform: "rotate(" + now + "deg)" });
            },
          },
          $("#measuringcylinderWater").hide(0),
          $("#slantWater").show(1000, function () {
            $("#slantWater").hide({ direction: "right" }, 2000);
          }),
          $("#pour").delay(900),
          $("#pour").show("blind", { direction: "up" }, function () {
            $("#pour").hide("blind", { direction: "down" });
          })
        );
        $("#caloriSoln").delay(1000);
        $("#caloriSoln").show("blind", { direction: "down" }, 600);

        $("#wholeMeasuringcylinder").animate(
          { deg: +0 },
          {
            duration: 1200,
            step: function (now) {
              $(this).css({ transform: "rotate(" + now + "deg)" });
            },

            // first thermo drag
          },
          1000
        ),
          $("#thermometer").draggable(
            { containment: "#background" },

            {
              start: function () {},
            },

            {
              drag: function () {
                removeTrip();
              },
            },
            {
              revert: function () {
                if (!temp2) {
                  // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                  return true;
                }
              },
            }
          );
        $("#wholeMeasuringcylinder").animate({
          left: 256 + "px",
          top: 137 + "px",
        });
        $("#wholeMeasuringcylinder").draggable("disable");
        temp = false;
        function clckenable() {
          $("#wholecalorimeterLid").bind("click");
          $("#wholecalorimeterLid").click(function () {
            helpcount = 3;
            removeTrip();
            $("#wholecalorimeterLid").css({ cursor: "default" });
            $("#thermometer").css({ cursor: "pointer" });
            $("#wholecalorimeterLid").animate({
              left: 8 + "px",
              top: 167 + "px",
            });

            $("#dropitA").droppable({
              accept: "#thermometer",
              drop: function () {
                helpcount = 4;
                temp2 = true;

                // $("#thermometer").draggable("disable")
                $("#caloriSide").show();
                $("#thermometer").css({ left: 70 + "px", top: 92 + "px" });
                $("#thermometer").css("zIndex", "2");

                $("#dropitA").hide();
                $("#dropitB").show();

                $("#tempDiag,#tempReadA").show("fade", 500, function () {
                  temp2 = false;
                  $("#tempDiag,#tempReadA").delay(3000).hide("fade");
                });

                $("#dropitB").droppable({
                  accept: "#thermometer",
                  drop: function () {
                    helpcount = 5;
                    temp2 = true;
                    $("#dropitB").hide();
                    $("#caloriSide").hide();
                    $("#dropitB").hide();
                    $("#dropitC").show();
                    $("#thermometer").css({
                      left: 377 + "px",
                      top: 122 + "px",
                    });
                    $("#tempDiagA,#tempReadB").show("fade", 500, function () {
                      temp2 = false;
                      $("#tempDiagA,#tempReadB").delay(3000).hide("fade");
                    });
                    $("#dropitC").droppable({
                      accept: "#thermometer",
                      drop: function () {
                        helpcount = 6;
                        $("#thermometer").css({ cursor: "default" });
                        $("#wholeBeaker").css({ cursor: "pointer" });
                        temp2 = true;
                        $("#thermometer").draggable("disable");
                        $("#dropitC").hide();
                        $("#dropitD").show();
                        $("#thermometer").css({
                          left: 500 + "px",
                          top: 122 + "px",
                        });
                        $("#thermometer").css("zIndex", "0");
                        $("#tempDiagB").show(
                          "blind",
                          { direction: "left" },
                          500,
                          function () {
                            $("#tempDiagB")
                              .delay(7000)
                              .hide("blind", { direction: "right" }, 500);
                            temp2 = false;
                          }
                        );
                        $("#wholeBeaker").draggable(
                          { containment: "#background" },

                          {
                            start: function () {},
                          },

                          {
                            drag: function () {
                              removeTrip();
                            },
                          },
                          {
                            revert: function () {
                              if (!temp3) {
                                // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                                return true;
                              }
                            },
                          }
                        );
                        $("#dropitD").droppable({
                          accept: "#wholeBeaker",
                          drop: function () {
                            helpcount = 7;
                            $("#wholeBeaker").css({ cursor: "default" });
                            $("#wholecalorimeterLid").css({
                              cursor: "pointer",
                            });
                            temp3 = true;
                            $("#dropitD").hide();

                            $("#wholeBeaker").css({
                              left: 194 + "px",
                              top: 12 + "px",
                            });

                            $("#wholeBeaker").animate(
                              { deg: -95 },
                              {
                                duration: 1200,
                                step: function (now) {
                                  $(this).css({
                                    transform: "rotate(" + now + "deg)",
                                  });
                                },
                              },
                              $("#beakerWater").hide(0),
                              $("#slantWaterA").show(1000, function () {
                                $("#slantWaterA").hide(
                                  { direction: "right" },
                                  2000
                                );
                              }),
                              $("#pourA").delay(900),
                              $("#pourA").show(
                                "blind",
                                { direction: "up" },
                                function () {
                                  $("#pourA").hide("blind", {
                                    direction: "down",
                                  });
                                }
                              )
                            );
                            $("#measuringcylinderWater").delay(1000);
                            $("#measuringcylinderWater").show(
                              "blind",
                              { direction: "down" },
                              600
                            );
                            $("#wholeBeaker").animate(
                              { deg: +0 },
                              {
                                duration: 1200,
                                step: function (now) {
                                  $(this).css({
                                    transform: "rotate(" + now + "deg)",
                                  });
                                },
                              },
                              1000
                            ),
                              $("#wholeBeaker").animate({
                                left: 332 + "px",
                                top: 170 + "px",
                              });
                            $("#wholeBeaker").draggable("disable");

                            $("#wholecalorimeterLid").click(function () {
                              $("#wholecalorimeterLid").css({
                                cursor: "default",
                              });
                              $("#thermometer").css({ cursor: "default" });
                              $("#wholeMeasuringcylinder").css({
                                cursor: "pointer",
                              });
                              helpcount = 8;
                              removeTrip();
                              $("#wholecalorimeterLid").animate({
                                left: -74 + "px",
                                top: 167 + "px",
                              });

                              $("#wholecalorimeterLid").unbind("click");

                              $("#wholeMeasuringcylinder").draggable("enable");
                              $("#dropitA").show();
                              $("#dropitA").droppable({
                                accept: "#wholeMeasuringcylinder",
                                drop: function () {
                                  helpcount = 9;
                                  $("#wholeMeasuringcylinder").css({
                                    cursor: "default",
                                  });
                                  $("#stirrer").css({ cursor: "pointer" });
                                  temp = true;
                                  $("#wholeMeasuringcylinder").css({
                                    left: 105 + "px",
                                    top: 6 + "px",
                                  });

                                  $("#wholeMeasuringcylinder").animate(
                                    { deg: -95 },
                                    {
                                      duration: 1200,
                                      step: function (now) {
                                        $(this).css({
                                          transform: "rotate(" + now + "deg)",
                                        });
                                      },
                                    },
                                    $("#measuringcylinderWater").hide(0),
                                    $("#slantWater").show(1000, function () {
                                      $("#slantWater").hide(
                                        { direction: "right" },
                                        2000
                                      );
                                    }),
                                    $("#pour").delay(900),
                                    $("#pour").show(
                                      "blind",
                                      { direction: "up" },
                                      function () {
                                        $("#pour").hide("blind", {
                                          direction: "down",
                                        });
                                      }
                                    )
                                  );
                                  // $("#caloriSoln").delay(1000)
                                  // $("#caloriSoln").show("blind", { direction: "down" }, 600,)
                                  $("#wholeMeasuringcylinder").animate(
                                    { deg: +0 },
                                    {
                                      duration: 1200,
                                      step: function (now) {
                                        $(this).css({
                                          transform: "rotate(" + now + "deg)",
                                        });
                                      },
                                    },
                                    1000
                                  ),
                                    $("#wholeMeasuringcylinder").animate({
                                      left: 169 + "px",
                                      top: 137 + "px",
                                    });
                                  $("#wholeMeasuringcylinder").draggable(
                                    "disable"
                                  );
                                  $("#stirrer").draggable(
                                    { containment: "#background" },

                                    {
                                      start: function () {},
                                    },

                                    {
                                      drag: function () {
                                        removeTrip();
                                      },
                                    },
                                    {
                                      revert: function () {
                                        if (!temp4) {
                                          // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                                          return true;
                                        }
                                      },
                                    }
                                  );
                                  $("#dropitA").droppable({
                                    accept: "#stirrer",
                                    drop: function () {
                                      helpcount = 10;
                                      $("#wholecalorimeterLid").css({
                                        cursor: "pointer",
                                      });
                                      $("#stirrer").css({ cursor: "default" });
                                      $("#wholecalorimeterLid").bind("click");
                                      $("#stirrer").draggable("disable");

                                      temp4 = true;
                                      $("#stirrer").css({
                                        left: 35 + "px",
                                        top: 150 + "px",
                                      });
                                      $("#caloriSide").show();
                                      $("#wholecalorimeterLid").click(
                                        function () {
                                          helpcount = 11;
                                          $("#stirrer").css({
                                            cursor: "pointer",
                                          });
                                          $("#wholecalorimeterLid").css({
                                            cursor: "default",
                                          });
                                          removeTrip();
                                          $("#wholecalorimeterLid").animate({
                                            left: 8 + "px",
                                            top: 167 + "px",
                                          });

                                          $("#stirrer").click(function () {
                                            helpcount = 12;
                                            $("#stirrer").css({
                                              cursor: "default",
                                            });
                                            $("#thermometer").css({
                                              cursor: "pointer",
                                            });
                                            $("#stirrer").animate({
                                              left: 35 + "px",
                                              top: 130 + "px",
                                            }),
                                              $("#stirrer").animate({
                                                left: 35 + "px",
                                                top: 150 + "px",
                                              }),
                                              $("#stirrer").animate({
                                                left: 35 + "px",
                                                top: 130 + "px",
                                              }),
                                              $("#stirrer").animate({
                                                left: 35 + "px",
                                                top: 150 + "px",
                                              }),
                                              $("#stirrer").animate({
                                                left: 35 + "px",
                                                top: 130 + "px",
                                              }),
                                              $("#stirrer").animate(
                                                {
                                                  left: 35 + "px",
                                                  top: 150 + "px",
                                                },
                                                function () {
                                                  $("#thermometer").draggable(
                                                    "enable"
                                                  );
                                                  $("#dropitA").show();
                                                }
                                              );
                                            $("#dropitA").droppable({
                                              accept: "#thermometer",
                                              drop: function () {
                                                helpcount = 13;
                                                // $('#wholecalorimeterLid').bind('click')
                                                temp2 = true;
                                                // $('.content').animate({
                                                //   scrollTop: $("#reset").offset().top},
                                                //   'fast')
                                                $("#thermometer").draggable(
                                                  "disable"
                                                );
                                                $("#thermometer").css(
                                                  "zIndex",
                                                  "2"
                                                );
                                                $("#inference").show("fade");
                                                $("#nxtBtn").show("fade");

                                                // $("#caloriSide").show();
                                                $("#thermometer").css({
                                                  left: 69 + "px",
                                                  top: 92 + "px",
                                                });
                                                $("#dropitA").hide();
                                                // $("#dropitB").show();
                                                $("#tempDiagC,#tempReadD").show(
                                                  "fade",
                                                  500,
                                                  function () {
                                                    temp2 = false;
                                                    $("#tempDiagC,#tempReadD")
                                                      .delay(3000)
                                                      .hide("fade");
                                                  }
                                                );
                                              },
                                            });
                                          });
                                        }
                                      );
                                    },
                                  });
                                },
                              });
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          });
        }
      },
    });
  });

  $("#nxtBtn").click(function () {
    help = 2;
    removeTrip();
    $("#funnel").css({ cursor: "pointer" });
    $("#nxtBtn").css({ cursor: "default" });
    $("#mainDiv,.firstpg_txt,#nxtBtn,#background").hide();
    $("#mainDivB,.secondpg_txt,#backgroundB").show();
    eqnDisplay();
  });

  function eqnDisplay() {
    $("#eqnA").delay(1000).show("blind", { direction: "left" }, 2000);
    $("#eqnB").delay(4000).show("blind", { direction: "left" }, 2000);
    $("#eqnC").delay(7000).show("blind", { direction: "left" }, 2000);
    $("#eqnD,#eqnE,#underlineA")
      .delay(10000)
      .show("blind", { direction: "left" }, 2000);
    $("#eqnF").delay(13000).show("blind", { direction: "left" }, 2000);
    $("#eqnG,#eqnH,#underlineB")
      .delay(16000)
      .show("blind", { direction: "left" }, 2000);
    $("#eqnI").delay(19000).show("puff", 2000);
    $("#lineA,#lineB")
      .delay(20000)
      .show("blind", { direction: "left" }, 2000, function () {
        helpcount = 14;
      });
  }

  $("#reset").click(function () {
    window.location.reload();
  });
});

// function filterpaperanim() {

//   if ($('#f1').css('display') == 'block') {
//     $('#f1,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f2').css("display", "block")
//   }
//   else if ($('#f2').css('display') == 'block') {

//     $('#f1,#f2,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f3').css("display", "block")
//   }
//   else if ($('#f3').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f4').css("display", "block")

//   } else if ($('#f4').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f5').css("display", "block")

//   } else if ($('#f5').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f6').css("display", "block")
//   } else if ($('#f6').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f7').css("display", "block")
//   }
//   else if ($('#f7').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f8').css("display", "block")
//   }
//   else if ($('#f8').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f9').css("display", "block")
//   }
//   else if ($('#f9').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f10').css("display", "block")
//   }
//   else if ($('#f10').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f11').css("display", "block")
//   }
//   else if ($('#f11').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f12').css("display", "block")
//   }
//   else if ($('#f12').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f13').css("display", "block")
//   }
//   else if ($('#f13').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f14').css("display", "block")
//   }
//   else if ($('#f14').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f15').css("display", "block")
//   }
//   else if ($('#f15').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f16').css("display", "block")
//   }
//   else if ($('#f16').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f17').css("display", "block")
//   }
//   else if ($('#f17').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f18').css("display", "block")
//   }
//   else if ($('#f18').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f19').css("display", "block")
//   }
//   else if ($('#f19').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f20').css("display", "block")
//   }
//   else if ($('#f20').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f22,#f23,#f24,#f25').hide();
//     $('#f21').css("display", "block")
//   }
//   else if ($('#f21').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f23,#f24,#f25').hide();
//     $('#f22').css("display", "block")
//   }
//   else if ($('#f22').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f24,#f25').hide();
//     $('#f23').css("display", "block")
//   }
//   else if ($('#f23').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f25').hide();
//     $('#f24').css("display", "block")
//   }
//   else if ($('#f24').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24').hide();
//     $('#f25').css("display", "block")
//     $("#crossfade2").hide();
//     $("#magwithiron").show();
//     $("#magwithiron").animate({ left: 437 + 'px' });
//     $("#magwithiron").animate({ top: 170 + 'px' }, function () { $("#magwithiron").hide(), $("#magwithironontable").show() });
//     $("#inference").show("fade")
//   }
// }

function removeTrip() {
  if (tripClickFlag == true) {
    $(".trip-block").hide();
    trip.stop();
    tripClickFlag = false;
  }
}
