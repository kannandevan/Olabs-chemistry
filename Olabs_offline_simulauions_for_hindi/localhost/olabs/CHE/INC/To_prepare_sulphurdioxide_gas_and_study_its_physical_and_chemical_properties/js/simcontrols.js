var hp = 0;
var inferenceForPage5V = 0;
var inferenceForPage4V = 0;
var inferenceForAcid2Varia = 1;
var inferenceForAcid2V = 0;
var inferenceForAcid2V2 = 0;
let isDropboxClicked = false;
var help_last_info = 0;
var helpX = 0;
var testIndex1 = 0;
var temp, temp1, temp3;
var infMsg, controlStr;
var helpMsg;
var helpcount = 0,
  helpcount1 = 0,
  helpcount2 = 0,
  helpcount3 = 0,
  helpcount4 = 0,
  helpcountc = 0;
var iconSelect = 0;
// var dropbox = [gt.gettext('Colour'), gt.gettext('Solubility in Water')];
// var dropbox1 = [gt.gettext('Acidic or Basic nature'), gt.gettext('Reaction with potassium <br> permanganate solution'), gt.gettext('Reaction with potassium <br> dichromate solution')];
// var inferenceText = gt.gettext('SO<sub>2</sub> gas is formed inside gas jar.')
// var inferenceForColorText = gt.gettext('SO<sub>2</sub> is Colourless')
// var inferenceForSolubilityText = gt.gettext('SO<sub>2</sub> dissolves in water to form sulphurous acid due to which <br> it possesses an acidic character.')
// var inferenceForAcidText = gt.gettext('Red litmus has no change.')
// var inferenceForAcid2Text = gt.gettext('Blue litmus changes to red colour')
// var inferenceForPage4Text = gt.gettext('Sulphur dioxide being a strong <br>reducing agent, reduces <br>the purple coloured solution<br> to form a colourless solution.')
// var inferenceForPage5Text = gt.gettext('SO<sub>2</sub>​+K<sub>2​</sub>Cr<sub>2​</sub>O<sub>7</sub>​+3H<sub>2</sub>​SO<sub>4​</sub>→K<sub>2​</sub>SO<sub>4​</sub>+Cr<sub>2​</sub>(SO<sub>4​</sub>)3​+3H<sub>2</sub>​O')
var temp, temp1, temp2, temp3;
var temp4,
  temp5,
  temp6,
  temp7,
  temp8,
  temp9,
  temp10,
  temp11,
  temp12,
  temp13,
  temp14,
  temp15;
var displayArray = ["block", "none"];
window.onload = function () {
  gt = new Gettext({ domain: "messages" });
  // gta = new Gettext({ 'domain': 'messages' });
  // $("#simReset").html(gt.gettext("RESET"));
  $(".nameTagb").html(gt.gettext("Cu Turnings"));
  $("#InstrLbl").html(gt.gettext("Instructions"));
  $("#p1").html(
    gt.gettext(
      "1. Drag the spatula to take few pieces of copper turning and drop it into round bottom flask."
    )
  );
  $("#p2").html(
    gt.gettext(
      "2. Drag double bored cork and drop it into the mouth of the round bottom flask.<br> <br> 3.Drag the thistle funnel and drop it into one of the holes in the cork. <br> <br> 4. Drag the delivery tube and drop it into the second hole of the cork and connect other side of the delivery tube to the gas jar <br> <br> 5. Drag the dropper to take 15-20 mL conc. sulphuric acid from glass dropper bottle and drop to measuring cylinder. <br> <br> 6. Drag and drop measuring cylinder containing 15 - 20 mL of conc. sulphuric acid to round bottom flask through the thistle funnel. <br> <br> 7. Click on the burner to heat the contents. <br> <br> 8. Click off the burner. <br> <br> 9. Click on the Inference button <br> <br> 10. Click on the 'Next' button to study its physical and chemical properties."
    )
  );
  $("#heading").html(gt.gettext("Select Physical Property"));
  $("#heading2").html(gt.gettext("Select Chemical Property"));
  $("#next_btn").html(gt.gettext("Next"));
  $("#next_btn2").html(gt.gettext("Next"));
  $("#next_btn3").html(gt.gettext("Next"));
  $("#next_btn4").html(gt.gettext("Next"));
  $("#ResetWindow").html(gt.gettext("Reset"));
  dropbox = [gt.gettext("Colour"), gt.gettext("Solubility in Water")];
  dropbox1 = [
    gt.gettext("Acidic or Basic nature"),
    gt.gettext("Reaction with potassium <br> permanganate solution"),
    gt.gettext("Reaction with potassium <br> dichromate solution"),
  ];
  inferenceText = gt.gettext("SO<sub>2</sub> gas is formed inside gas jar.");
  inferenceForColorText = gt.gettext("SO<sub>2</sub> is Colourless");
  inferenceForSolubilityText = gt.gettext(
    "SO<sub>2</sub> dissolves in water to form sulphurous acid due to which <br> it possesses an acidic character."
  );
  inferenceForAcidText = gt.gettext("Red litmus has no change.");
  inferenceForAcid2Text = gt.gettext("Blue litmus changes to red colour");
  inferenceForPage4Text = gt.gettext(
    "Sulphur dioxide being a strong <br>reducing agent, reduces <br>the purple coloured solution<br> to form a colourless solution."
  );
  inferenceForPage5Text = gt.gettext(
    "SO<sub>2</sub>​+K<sub>2​</sub>Cr<sub>2​</sub>O<sub>7</sub>​+3H<sub>2</sub>​SO<sub>4​</sub>→K<sub>2​</sub>SO<sub>4​</sub>+Cr<sub>2​</sub>(SO<sub>4​</sub>)3​+3H<sub>2</sub>​O"
  );

  document.getElementById("expName").innerHTML = gt.gettext(
    "To prepare SO<sub>2</sub> gas and Study its Physical and Chemical Properties"
  );
  $("#olabmenuBar li:first-child a").html(gt.gettext("HELP"));

  $(document).ready(function () {
    //  gta = new Gettext({ 'domain': 'messages' });
    //     $("#InstrLbl").html(gta.gettext("Instructions"));
    //     $("#p1").html(gta.gettext("1. Drag the spatula to take few pieces of copper turning and drop it into round bottom flask."));
    //     $("#p2").html(gta.gettext("2. Drag double bored cork and drop it into the mouth of the round bottom flask.<br> <br> 3.Drag the thistle funnel and drop it into one of the holes in the cork. <br> <br> 4. Drag the delivery tube and drop it into the second hole of the cork and connect other side of the delivery tube to the gas jar <br> <br> 5. Drag the dropper to take 15-20 mL conc. sulphuric acid from glass dropper bottle and drop to measuring cylinder. <br> <br> 6. Drag and drop measuring cylinder containing 15 - 20 mL of conc. sulphuric acid to round bottom flask through the thistle funnel. <br> <br> 7. Click on the burner to heat the contents. <br> <br> 8. Click off the burner. <br> <br> 9. Click on the Inference button <br> <br> 10. Click on the 'Next' button to study its physical and chemical properties."));
    //     $("#heading").html(gta.gettext("Select Physical Property"));
    //     $("#heading2").html(gta.gettext("Select Chemical Property"));
    //     $("#next_btn").html(gta.gettext("Next"));
    //     $("#next_btn2").html(gta.gettext("Next"));
    //     $("#next_btn3").html(gta.gettext("Next"));
    //     $("#next_btn4").html(gta.gettext("Next"));

    $("#ResetWindow").click(function () {
      window.location.reload();
    });
    helpMsg = [
      gt.gettext(
        "Drag the spatula to <br>take few pieces of<br> copper turnings and<br> drop it into round<br> bottom flask."
      ),
      gt.gettext(
        "Drag a double bored<br> cork and drop it<br> into the mouth of <br>the round bottom flask."
      ),
      gt.gettext(
        "Drag the thistle funnel<br> and drop it into one<br> of the holes in the cork."
      ),
      gt.gettext(
        "Drag the<br> delivery<br> tube and<br> drop it <br> into the<br> second<br> hole of<br> the cork<br> and connect<br> other side<br> of the <br>delivery<br> tube to<br> the gas jar"
      ),
      gt.gettext(
        "Drag the dropper to <br>take 15-20 mL conc.<br> sulphuric acid from glass<br> dropper bottle and drop<br> to measuring cylinder."
      ),
      gt.gettext(
        "Drag and drop measuring<br> cylinder containing 15 - 20 mL<br> of conc. sulphuric acid <br> to round bottom flask <br>through the thistle funnel."
      ),
      gt.gettext("Click on the burner <br>to heat the contents."),
      gt.gettext(
        "You can see a colourless<br> gas coming out of the<br> round bottom flask and <br>collect it in the gas jar."
      ),
      gt.gettext("Click off the burner"),
      gt.gettext(
        'Click on the "Next"<br>  button to study its physical<br>  and chemical properties.'
      ),
      gt.gettext("Click on the Inference button"),
    ];
    helpMsgc = [
      gt.gettext(
        "Click on the Inference button to show the Physical property colour of SO<sub>2<sub>"
      ),
    ];
    helpMsg2 = [
      gt.gettext("Drag the gas jar and place it above the trough"),
      gt.gettext(
        "Click on the cap of the gas jar<br> and drop the gas into trough"
      ),
    ];
    helpMsg3 = [
      gt.gettext(
        "Drag and drop wet red litmus paper <br> to the jar filled with sulphur dioxide."
      ),
      gt.gettext(
        "Drag and drop wet blue litmus paper <br> to the jar filled with sulpher dioxide."
      ),
    ];
    helpMsg4 = [
      gt.gettext(
        "Drag and drop 2 mL of <br>potassium permanganate <br> solution (Purple solution)<br> into test-tube."
      ),
      gt.gettext(
        "Drag and drop 1 mL of<br> diluted H<sub>2</sub>SO<sub>4</sub> in test tube."
      ),
      gt.gettext(
        "Drag and drop<br> glasstube into <br>roundbottom <br>flask and<br> test tube."
      ),
      gt.gettext("Turn On Burner"),
      gt.gettext("Turn off burner"),
    ];
    helpMsg5 = [
      gt.gettext(
        "Drag and drop 2ml of acidified potassium <br> dichromate solution into a test tube"
      ),
      gt.gettext(
        "Drag and drop 1ml <br>of H<sub>2</sub>SO<sub>4</sub> into it."
      ),
      gt.gettext(
        "Drag and drop<br>  glass tube into<br>  round bottom <br> flask and <br> test tube."
      ),
      gt.gettext("Turn On Burner"),
      gt.gettext("Turn off burner"),
    ];
    helpcount = 1;

    $("#spatulaDiv2").draggable(
      { containment: "#bg" }, //dragging spatula containing copper turnings into rb flask
      {
        revert: function () {
          if (!temp) {
            return true;
          }
        },
        drag: function () {
          removeTrip();
        },
      }
    );

    $("#rbstandDropArea").droppable({
      accept: "#spatulaDiv2", // dropping spatula
      drop: function () {
        helpcount = 2;
        temp = true;
        $("#spatulaDiv2").css({ top: 34 + "%", left: 22 + "%" });
        $("#copperturnings_In_Spatula").animate(
          { top: 680 + "%", opacity: 0 },
          500,
          function () {
            $("#copperturnings_In_Spatula").css({ opacity: 0 });
            $("#spatulaDiv2").animate({ top: 84 + "%", left: 81 + "%" });
            $("#cuInFlask").show();
            $("#copperturnings_In_Spatula,#tbDropArea5").hide();
            $("#rbstandDropArea").hide();
            $("#spatulaDiv2").draggable("disable");
          }
        );

        $("#cork").draggable(
          { containment: "#bg" }, // dragging cork
          {
            revert: function () {
              if (!temp1) {
                return true;
              }
            },
            drag: function () {
              removeTrip();
            },
          }
        );

        $("#rbDropCork").droppable({
          accept: "#cork", //dropping cork
          drop: function () {
            helpcount = 3;
            temp1 = true;
            $("#cork").css({
              left: 21.5 + "%",
              top: 40.9 + "%",
              width: 3.5 + "%",
            });
            $("#thistlFunnel").draggable(
              { containment: "#bg" }, // dragging thistle funnel
              {
                revert: function () {
                  if (!temp3) {
                    return true;
                  }
                },
                drag: function () {
                  removeTrip();
                },
              }
            );
            $("#rbDropCork").droppable({
              accept: "#thistlFunnel", //dropping thistle funnel
              drop: function () {
                helpcount = 4;
                temp3 = true;
                $("#thistlFunnel").css({
                  left: 20.5 + "%",
                  top: 30 + "%",
                  width: 4 + "%",
                });
                $("#thistlFunnel").animate(
                  { deg: 0 },
                  {
                    duration: 500,
                    step: function (now) {
                      $(this).css({ transform: "rotate(" + now + "deg)" });
                    },
                  }
                );
                $("#glassTube").draggable({
                  revert: function () {
                    //dragging glasstube
                    if (!temp4) {
                      return true;
                    }
                  },
                  drag: function () {
                    removeTrip();
                  },
                });

                $("#gasjarDrop").droppable({
                  accept: "#glassTube", // dropping glass tube
                  drop: function () {
                    helpcount = 5;
                    temp4 = true;
                    $("#glassTube").hide();
                    $("#glassTubeOnRB1").show();
                    if (!$("#glassTubeOnRB1").data("ui-draggable")) {
                      $("#glassTubeOnRB1").draggable();
                    }
                    $("#glassTubeOnRB1").draggable("disable");

                    $("#droperDiv").draggable({
                      revert: function () {
                        // dragging dropper
                        if (!temp5) {
                          return true;
                        }
                      },
                      drag: function () {
                        removeTrip();
                      },
                    });
                    $("#measJarDrop").droppable({
                      accept: "#droperDiv", // dropping conc.H2SO4 in dropper to measuring jar
                      drop: function () {
                        helpcount = 6;
                        $("#droperDiv").css({
                          top: 33.4 + "%",
                          left: 40.5 + "%",
                        });
                        temp5 = true;
                        $("#drops").show();
                        $("#dropsol").fadeOut(3000);

                        // % to px for water start
                        var t1 = ($(window).height() / 100.0) * 55.0;
                        var winHeight = $(window).height();
                        var topper = (t1 / winHeight) * 100.0;

                        // % to px for water end

                        for (i = 0; i < 10; i++) {
                          $("#drops").animate(
                            { top: (topper += 24) + "%", opacity: "1" },
                            300,
                            "linear"
                          );
                          $("#drops").animate(
                            { top: topper + "%", opacity: "0" },
                            0,
                            "linear"
                          );
                          $("#drops").animate(
                            { top: (topper -= 24) + "%", opacity: "0" },
                            0,
                            "linear"
                          );
                          $("#drops").animate({ opacity: "1" }, 0, "linear");
                          $("#aa").animate(
                            {
                              top: parseInt($(aa).css("top")) + 2 + "px",
                              height: parseInt($(aa).css("height")) + 4 + "px",
                            },
                            3500
                          );
                          $("#waterInMeasCylinder").fadeIn(5000);
                        }
                        $("#drops").animate(
                          { opacity: "0" },
                          0,
                          "linear",
                          function () {
                            $("#droperDiv").animate(
                              { left: 49.5 + "%" },
                              1000,
                              "linear"
                            );
                            $("#droperDiv").animate(
                              { top: 56.4 + "%" },
                              1000,
                              "linear"
                            );
                            $("#droperDiv").draggable("disable");
                            $("#jar").draggable({
                              revert: function () {
                                // dragging measuring cylinder to round bottom flask
                                if (!temp6) {
                                  return true;
                                }
                              },
                              drag: function () {
                                removeTrip();
                              },
                            });
                            $("#measCylindShadow").hide();
                            $("#dropAreaForMeas").droppable({
                              accept: "#jar",
                              drop: function () {
                                helpcount = 7; //dropping
                                temp6 = true;
                                $("#jar").css({ top: 2 + "%", left: 26 + "%" });
                                $("#jar").animate(
                                  { deg: -90 },
                                  {
                                    duration: 1500,
                                    step: function (now) {
                                      $(this).css({
                                        transform: "rotate(" + now + "deg)",
                                      });
                                    },
                                  }
                                );
                                $("#jar").animate(
                                  { deg: 0 },
                                  {
                                    duration: 1500,
                                    step: function (now) {
                                      $(this).css({
                                        transform: "rotate(" + now + "deg)",
                                      });
                                    },
                                  }
                                );

                                $("#jar").animate(
                                  { left: 39 + "%" },
                                  1500,
                                  "linear"
                                );
                                $("#jar").animate(
                                  { top: 54 + "%" },
                                  1500,
                                  "linear"
                                );
                                $("#measCylindShadow").show();
                                var setin = setInterval(waterani, 1500);
                                setTimeout(function () {
                                  $("#waterInMeasCylinder").hide();
                                  clearInterval(setin);
                                }, 1500);

                                $("#burnerOff").click(function () {
                                  removeTrip();
                                  helpcount = 8;
                                  var setin2 = setInterval(flameanimate, 100);
                                  $("#gas").show();
                                  $("#gasa").show();
                                  $("#burnerOff").hide();
                                  $("#burnerOn").show();

                                  $("#burnerOn").click(function () {
                                    removeTrip();
                                    helpcount = 9;
                                    $("#burnerOn").hide();
                                    $("#burnerOff").show();
                                    clearInterval(setin2);
                                    $("#qq").hide();
                                    $("#gas").animate(
                                      { opacity: 0 },
                                      500,
                                      function () {
                                        $("#inference").show("scale", 100);
                                        $("#next_btn").show(); // <............................................................nxt button   1
                                        $(".info2").show();
                                      }
                                    );
                                  });
                                }); //....................................................  second page start.............................................................................................................
                              },
                            });
                          }
                        );
                      },
                    });
                  },
                });
              },
            });
          },
        });
        $("#reset").click(function () {
          window.location.reload();
        });
      },
    });

    $("#next_btn").click(function () {
      removeTrip();
      $("#InstrLbl").hide();
      $(".firstpg_txt1").hide();
      $(".firstpg_txt2,#con").hide();

      if (trip) {
        trip.stop();
      }
      $("#heading").show();
      $("#DropboxTest").css({ display: "block" });
      $(".subButton").css({ top: 284 + "px" });

      addintoDropDown($("#DropboxTest"), dropbox); //Add values into combobox
      $("#inference,#burnerOn,#rbstandDropArea,#dropAreaForMeas").hide();
      $("#next_btn").remove();
      $("#inferenceForColor").show();
      helpcountc = 1;
      $("#inferenceForColor").click(function () {
        isDropboxClicked = true;
        $("#inferenceForColor").show("scale", 500);
        $("#inference").hide();
      });
      $("#jar,#glassTubeOnRB1,.nameTaga,.nameTagb").hide();
      $(
        "#dropper,#wholeStand,#tripodstand,#burner,#burnerOff,#burnerOn,#waterinflask,#roundbottomflask,#cuInFlask,#cork,#gasjar1,#trough"
      ).hide();
      $("#bottle,#label1,#nameTagb").hide();
      $(
        "#thistlFunnelTop,#thistlFunnel,#glassTube,#dropsol,#gasjar,#cork"
      ).hide();
      $("#thistlFunnelUnder").hide();
      $("#copperturnings").hide();
      $("spatula2").hide();
      $("#watchglass,#measJarShadow,#watchglassShadow").hide();
      $("#bottleWater,#measCylindShadow").hide();
      $("#bottleWater").hide();
      $("#spatulaDiv2").hide();
      $("#inference").remove();
      $("#first_card").hide();
      $("#second_card").show();
    });

    $("#DropboxTest").change(function () {
      if (trip) {
        trip.stop();
      }
      iconSelect = $(this).val();
      testIndex = $("#DropboxTest option:selected").val();
      if (testIndex == 0) {
        helpcountc = 1;
        $("#inferenceForSolubility,#next_btn2").hide();
        $(
          "#inference,#trough,#water,#gasjar,#wholeStand,#waterinflask,#tripodstand,#cuInFlask,#burnerOff,#gasjar,#gasInTrough,#rbstandDropArea,#dropAreaForMeas"
        ).hide();
        $("#inferenceForColor").css({ left: 150 + "px", top: 78 + "px" });

        $("#inferenceForColor").show();
        $("#inferenceForColor").click(function () {
          $("#inferenceForColor").show("scale", 2000);
          $("#inference").hide();
        });
      } else {
        helpX = 1;

        $("#gasjar").draggable({ disabled: false });

        $("#inferenceForColor").hide();
        $("#gas2").show();
        $("#gas2").css({
          left: 23 + "px",
          top: 98 + "px",
          width: 28 + "px",
          height: 29 + "px",
          opacity: 1,
        });
        $("#gasInTrough").css({
          left: 260 + "px",
          top: 234 + "px",
          width: 125 + "px",
          height: 68 + "px",
          opacity: 1,
        });
        $(
          "#glassTube,#wholeStand,#tripodstand,#burner,#burnerOff,#burnerOn,#waterinflask,#roundbottomflask,#cuInFlask,#cork,.nameTaga,.nameTagb,#dropAreaForMeas,#gasjarDrop,#gas"
        ).hide();
        $("#gasJarTop,#gasjar,#gas2").show();
        // $('#subButton').css('top', '284px');
        $("#trough").show();
        $("#dropForGasjar").show();
        $("#gasjar").draggable({
          //dragging gas jar to trough
          revert: function () {
            if (!temp7) {
              return true;
            }
          },
          drag: function () {
            removeTrip();
          },
          start: function () {
            $("#DropboxTest").attr("disabled", true); //disable clicks
          },
        });
        $("#dropForGasjar").droppable({
          accept: "#gasjar", //dropping gasjar
          drop: function () {
            help_last_info = 1;
            helpcount1 = 1;
            temp7 = true;
            $("#gasjar").animate({ top: 9 + "%", left: 51 + "%" }, function () {
              $("#gasjar").animate(
                { deg: 180 },
                {
                  duration: 3000,
                  step: function (now) {
                    $(this).css({ transform: "rotate(" + now + "deg)" });
                  },
                }
              );
              $("#gasjar").css({ "z-index": 106 });
              $("#dropForGasjar").hide();

              $("#gasjar").draggable("disable");
              $("#gasJarTop").on("click", function () {
                removeTrip();
                helpcount1 = 2;

                $("#gasJarTop").fadeOut(500);
                $("#gasjar").draggable("disable");
                var gasdrop = setInterval(gas3drop);

                setTimeout(function () {
                  $("#gasjar").animate(
                    { deg: 0 },
                    {
                      duration: 1500,
                      step: function (now) {
                        $(this).css({ transform: "rotate(" + now + "deg)" });
                      },
                    }
                  );
                  $("#gasjar").animate({ left: 29 + "%" });
                  $("#gasjar").animate(
                    { top: 36 + "%" },
                    1500,
                    "linear",
                    function () {
                      // $("#next_btn2").show();
                    }
                  );
                  clearInterval(gasdrop);
                }, 1500);

                $("#inferenceForSolubility").show();
                $("#inferenceForSolubility").click(function () {
                  $("#next_btn2").show();
                  $("#inferenceForSolubility").show("scale", 2000);
                  help_last_info = 2;
                });
                $("#DropboxTest").attr("disabled", false);

                $("#next_btn2").click(
                  function () //..........................................third page.....................................
                  {
                    // $('#subButton').css({ 'top': '284px' });
                    //  $('#subButton').css({ top: 284 + 'px' });
                    helpX = 2;
                    if (trip) {
                      trip.stop();
                    }

                    $("#heading").hide();
                    $("#heading2").show();
                    acidicOrBasic();
                    $("#DropboxTest").css({ display: "none" });
                    $("#DropboxTest1").css({ display: "block" });

                    addintoDropDown($("#DropboxTest1"), dropbox1); //Add values into combobox
                    $("#second_card").hide();
                    $("#third_card").show();
                    $("#cork").hide();
                    $("#water").hide();
                    $("#inferenceForSolubility").remove();
                    $("#gasjar,#trough").hide();
                    $("#gasJarTop").hide();
                    $("#dropForGasjar").hide();
                    $("#measJarDrop").hide();
                    $("#gasjarDrop,#dropAreaForMeas,#rbDropCork").hide();
                    $("#DropboxTest1").change(function () {
                      if (trip) {
                        trip.stop();
                      }
                      testIndex1 = $("#DropboxTest1 option:selected").val();
                      if (testIndex1 == 0) {
                        helpcount2 = 7777;
                        inferenceForAcid2Varia = 1;
                        acidicOrBasic();
                        helpcount2 = 0;
                        testIndex1 = 0;
                        helpX = 2;
                        $(
                          "#tb5Div,#pottasium,#orangeDropperDiv,#kmno4,#dropper2Div,#acidInDiv5,#dropper5Div,#h2so4,#dropper3Div,#tb,#glassTube5,#glassTube4,#whitesolnInTb,#greensolnInTb,#inferenceForPage5,#inferenceForPage4,#cork4,#standAndBurner4,#glassTubeOnRB,#waterInRB4,#cuInRB4,#burnerOff4,#burnerOn4,#smokeInTb5,#glassTubeOnRB5,#glassTubeOnRB,#trough"
                        ).hide();
                      } else if (testIndex1 == 1) {
                        // alert(inferenceForPage5V + "  inferenceForPage5V")
                        inferenceForPage5V = 0;
                        helpcount2 = 4444;
                        inferenceForAcid2Varia = 1111;
                        //................................4 th page start......................
                        $("#glassTube4").css({
                          left: 83 + "%",
                          top: 80 + "%",
                          width: 12 + "%",
                        });
                        $("#inferenceForPage5").hide();
                        $("#flame5").hide();
                        $("#solnInDropper,#cuInRB4,#burnerOff4").show();
                        $("#solnInDropper").css({
                          left: 31 + "%",
                          top: 41 + "%",
                        });
                        $("#smokeInTb,#solnInTb,#glassTubeOnRB").hide();
                        $("#inferenceForAcid2").hide();
                        $("#paperDiv").hide();
                        $("#redLitmus2,#burnerOff5,#burnerOn5").hide();
                        $("#cork4").show();
                        $("#cork4").css({
                          left: 32 + "%",
                          top: 38.5 + "%",
                          width: 4 + "%",
                        });
                        $("#kmno4,#standAndBurner4").show();
                        $("#h2so4").show();
                        $("#dropper2Div").show();
                        $("#tb").show();
                        $("#tbDropArea").show();
                        $("#dropper3Div,#H2SO4inDropper").show();
                        $(
                          "#dropsol,#trough,#dropForGasjar,#acidInDiv5,#glassTube5,#pottasium,#orangeDropperDiv,#dropper5Div,#greensolnInTb,#tb5Div,#inferenceForAcid,#inferenceForAcid2,#whitesolnInTb,#glassTubeOnRB5,#smokeInTb5,#inferenceForPage5"
                        ).hide();
                        $("#trough,#dropForGasjar").css({ "z-index": 0 });
                        $("#jar3Div,#litmusDrop,#greensolnInTb").hide();
                        $(
                          "#gasjarDrop,#dropAreaForMeas,#dropForGasjar,#trough,#rbDropCork"
                        ).remove();
                        $("#glassTube4,#glassTube4Drop,#waterInRB4").show();
                        $("#dropper2Div").draggable({ disabled: false });
                        $("#dropper3Div").draggable({ disabled: false });
                        $("#glassTube4").draggable({ disabled: false });
                        testIndex1 = 1;
                        helpX = 2;
                        helpcount3 = 0;

                        $("#dropper2Div").draggable({
                          //dragging dropper with KMnO4
                          revert: function () {
                            if (!temp10) {
                              return true;
                            }
                          },
                          drag: function () {
                            removeTrip();
                          },
                          start: function () {
                            $("#DropboxTest1").attr("disabled", true);
                          },
                        });

                        $("#tbDropArea").droppable({
                          accept: "#dropper2Div", // dropping KMnO4
                          drop: function () {
                            helpcount3 = 1;
                            $("#dropper2Div").css({
                              top: 29.4 + "%",
                              left: 50.9 + "%",
                            });
                            temp10 = true;
                            $("#purpleDrop").show();
                            $("#solnInDropper").fadeOut(1500);
                            var t2 = ($(window).height() / 100.0) * 58.0;
                            var winHeight2 = $(window).height();
                            var topper2 = (t2 / winHeight2) * 100.0;

                            for (i = 0; i < 3; i++) {
                              $("#purpleDrop").animate(
                                { top: (topper2 += 24) + "%", opacity: "1" },
                                300,
                                "linear"
                              );
                              $("#purpleDrop").animate(
                                { top: topper2 + "%", opacity: "0" },
                                0,
                                "linear"
                              );
                              $("#purpleDrop").animate(
                                { top: (topper2 -= 24) + "%", opacity: "0" },
                                0,
                                "linear"
                              );
                              $("#purpleDrop").animate(
                                { opacity: "1" },
                                0,
                                "linear"
                              );
                            }
                            $("#solnInTb").fadeIn(3000);
                            $("#purpleDrop").animate(
                              { opacity: "0" },
                              0,
                              "linear",
                              function () {
                                $("#dropper2Div").animate(
                                  { left: 65.5 + "%", top: 55.4 + "%" },
                                  1000,
                                  "linear"
                                );
                                $("#dropper2Div").draggable("disable");
                                $("#dropper3Div").draggable({
                                  //dragging dropper with H2SO4
                                  revert: function () {
                                    if (!temp11) {
                                      return true;
                                    }
                                  },
                                  drag: function () {
                                    removeTrip();
                                  },
                                });
                                $("#tbDropArea").droppable({
                                  accept: "#dropper3Div", // dropping H2SO4
                                  drop: function () {
                                    helpcount3 = 2;
                                    $("#dropper3Div").css({
                                      top: 29.4 + "%",
                                      left: 50.9 + "%",
                                    });
                                    temp11 = true;
                                    $("#h2so4Drop").show();
                                    $("#H2SO4inDropper").fadeOut(1500);

                                    var t3 =
                                      ($(window).height() / 100.0) * 58.0;
                                    var winHeight3 = $(window).height();
                                    var topper3 = (t3 / winHeight3) * 100.0;

                                    for (i = 0; i < 2; i++) {
                                      $("#h2so4Drop").animate(
                                        {
                                          top: (topper3 += 24) + "%",
                                          opacity: "1",
                                        },
                                        300,
                                        "linear"
                                      );
                                      $("#h2so4Drop").animate(
                                        { top: topper3 + "%", opacity: "0" },
                                        0,
                                        "linear"
                                      );
                                      $("#h2so4Drop").animate(
                                        {
                                          top: (topper3 -= 24) + "%",
                                          opacity: "0",
                                        },
                                        0,
                                        "linear"
                                      );
                                      $("#h2so4Drop").animate(
                                        { opacity: "1" },
                                        0,
                                        "linear"
                                      );
                                    }

                                    $("#h2so4Drop").animate(
                                      { opacity: "0" },
                                      0,
                                      "linear",
                                      function () {
                                        $("#dropper3Div").animate(
                                          { left: 75.2 + "%" },
                                          1000,
                                          "linear"
                                        );
                                        $("#dropper3Div").animate(
                                          { top: 53 + "%" },
                                          1000,
                                          "linear"
                                        );
                                        $("#dropper3Div").draggable("disable");
                                        $("#tbDropArea").hide();

                                        $("#glassTube4").draggable({
                                          //dragging glasstube4 (page4)
                                          revert: function () {
                                            if (!temp12) {
                                              return true;
                                            }
                                          },
                                          drag: function () {
                                            removeTrip();
                                          },
                                        });
                                        $("#glassTube4Drop").droppable({
                                          //dropping glasstube4
                                          accept: "#glassTube4",
                                          drop: function () {
                                            helpcount3 = 3;
                                            temp12 = true;
                                            $("#glassTube4").hide();
                                            $("#glassTubeOnRB").show();
                                            if (
                                              !$("#glassTubeOnRB").data(
                                                "ui-draggable"
                                              )
                                            ) {
                                              $("#glassTubeOnRB").draggable();
                                            }
                                            $("#glassTubeOnRB").draggable(
                                              "disable"
                                            );
                                          },
                                        });
                                        $("#burnerOff4").click(function () {
                                          //turning burner ON
                                          removeTrip();
                                          inferenceForPage4V = 1;
                                          helpcount3 = 4;
                                          $("#burnerOff4").hide();
                                          $("#burnerOn4").show();
                                          $("#flame").show();
                                          var setin4 = setInterval(
                                            flameanimate2,
                                            100
                                          );
                                          $("#smokeInTb").show();

                                          $("#burnerOn4").click(function () {
                                            //burneroff
                                            inferenceForPage4V = 1;
                                            removeTrip();
                                            helpcount3 = 5;
                                            $("#burnerOn4").hide();
                                            $("#burnerOff4").show();
                                            clearInterval(setin4);
                                            $("#flame").hide();
                                            $("#smokeInFlask").animate(
                                              { opacity: 0 },
                                              3000,
                                              function () {}
                                            );
                                          });

                                          $("#solnInTb").hide();
                                          $("#whitesolnInTb").show();
                                          $("#inferenceForPage4").show();
                                          $("#inferenceForPage5").hide();
                                          $("#DropboxTest1").attr(
                                            "disabled",
                                            false
                                          );
                                        });
                                      }
                                    );
                                  },
                                });
                              }
                            );
                          },
                        });
                      }
                      //.................................................................page 5 start......................................................................
                      else if (testIndex1 == 2) {
                        helpcount2 = 4444;
                        inferenceForAcid2Varia = 1111;
                        inferenceForPage4V = 1111;
                        $("#burnerOff4,#flame").hide();
                        $("#burnerOff5").show();
                        $("#glassTube5").css({
                          left: 83 + "%",
                          top: 80 + "%",
                          width: 12 + "%",
                        });
                        $("#orangeDropperSoln").show();
                        $("#orangeDropperSoln").css({
                          left: 29 + "%",
                          top: 50 + "%",
                          width: 28 + "%",
                        });
                        $("#solnInTb5,#glassTubeOnRB").hide();
                        $(
                          "#h2so4,#dropper3Div,#kmno4,#dropper2Div,#tb,#whitesolnInTb,#smokeInTb,#glassTube4,#inferenceForPage4,#dropper3Div,#H2SO4inDropper,#paperDiv,#redLitmus2,#jar3Div,#inferenceForAcid,#inferenceForAcid2,#greensolnInTb,#whitesolnInTb,#smokeInTb5"
                        ).hide();
                        $("#glassTube4Drop,#burnerOff4,#burnerOn4").hide();
                        $(
                          "#glassTube5Drop,#standAndBurner4,#waterInRB4,#cuInRB4,#burnerOff4,#cork4,#tbDropArea5"
                        ).show(); //           $("#dichromate").click(function (){
                        $(
                          "#acidInDiv5,#dropper5Div,#pottasium,#orangeDropperDiv,#tb5Div,#glassTube5"
                        ).show();
                        $("#dropper5Div").draggable({ disabled: false });
                        $("#orangeDropperDiv").draggable({ disabled: false });
                        $("#glassTube5").draggable({ disabled: false });
                        testIndex1 = 2;
                        helpX = 2;
                        helpcount4 = 0;

                        $("#orangeDropperDiv").draggable({
                          //dragging dropper with pottasium dichromate
                          revert: function () {
                            if (!temp13) {
                              return true;
                            }
                          },
                          drag: function () {
                            removeTrip();
                          },
                          start: function () {
                            $("#DropboxTest1").attr("disabled", true);
                          },
                        });
                        $("#tbDropArea5").droppable({
                          accept: "#orangeDropperDiv", // dropping  pottasium dichromate
                          drop: function () {
                            helpcount4 = 1;
                            $("#orangeDropperDiv").css({
                              top: 31.1 + "%",
                              left: 50.4 + "%",
                            });
                            temp13 = true;
                            $("#orangeDrop").show();
                            var temporange = 58;
                            $("#orangeDropperSoln").fadeOut(1500);
                            var t4 = ($(window).height() / 100.0) * 58.0;
                            var winHeight4 = $(window).height();
                            var topper4 = (t4 / winHeight4) * 100.0;
                            for (i = 0; i < 2; i++) {
                              $("#orangeDrop").animate(
                                { top: (topper4 += 24) + "%", opacity: "1" },
                                300,
                                "linear"
                              );
                              $("#orangeDrop").animate(
                                { top: topper4 + "%", opacity: "0" },
                                0,
                                "linear"
                              );
                              $("#orangeDrop").animate(
                                { top: (topper4 -= 24) + "%", opacity: "0" },
                                0,
                                "linear"
                              );
                              $("#orangeDrop").animate(
                                { opacity: "1" },
                                0,
                                "linear"
                              );
                            }
                            $("#solnInTb5").fadeIn();
                            $("#orangeDrop").animate(
                              { opacity: "0" },
                              0,
                              "linear",
                              function () {
                                $("#orangeDropperDiv").animate(
                                  { left: 65.4 + "%", top: 55.1 + "%" },
                                  1000,
                                  "linear"
                                );
                                $("#orangeDropperDiv").draggable("disable");
                                $("#dropper5Div").draggable({
                                  // dragging H2SO4 in page 5
                                  revert: function () {
                                    if (!temp14) {
                                      return true;
                                    }
                                  },
                                  drag: function () {
                                    removeTrip();
                                  },
                                });

                                $("#tbDropArea5").droppable({
                                  //DROPPING
                                  accept: "#dropper5Div",
                                  drop: function () {
                                    helpcount4 = 2;
                                    $("#dropper5Div").css({
                                      top: 31.1 + "%",
                                      left: 50.4 + "%",
                                    });
                                    temp14 = true;
                                    $("#acidDrop").show();
                                    $("#H2SO4inDropper5").fadeOut(3000);
                                    var t5 =
                                      ($(window).height() / 100.0) * 58.0;
                                    var winHeight5 = $(window).height();
                                    var topper5 = (t5 / winHeight5) * 100.0;
                                    for (i = 0; i < 2; i++) {
                                      $("#acidDrop").animate(
                                        {
                                          top: (topper5 += 24) + "%",
                                          opacity: "1",
                                        },
                                        300,
                                        "linear"
                                      );
                                      $("#acidDrop").animate(
                                        { top: topper5 + "%", opacity: "0" },
                                        0,
                                        "linear"
                                      );
                                      $("#acidDrop").animate(
                                        {
                                          top: (topper5 -= 24) + "%",
                                          opacity: "0",
                                        },
                                        0,
                                        "linear"
                                      );
                                      $("#acidDrop").animate(
                                        { opacity: "1" },
                                        0,
                                        "linear"
                                      );
                                    }
                                    $("#acidDrop").animate(
                                      { opacity: "0" },
                                      0,
                                      "linear",
                                      function () {
                                        $("#dropper5Div").animate(
                                          { left: 74.5 + "%" },
                                          1000,
                                          "linear"
                                        );
                                        $("#dropper5Div").animate(
                                          { top: 57.1 + "%" },
                                          1000,
                                          "linear"
                                        );
                                        $("#dropper5Div").draggable("disable");
                                        $("#tbDropArea5").hide();
                                        $("#glassTube5").draggable({
                                          //dragging glasstube5 (page5)
                                          revert: function () {
                                            if (!temp15) {
                                              return true;
                                            }
                                          },
                                          drag: function () {
                                            removeTrip();
                                          },
                                        });

                                        $("#glassTube5Drop").droppable({
                                          //dropping glasstube5
                                          accept: "#glassTube5",
                                          drop: function () {
                                            helpcount4 = 3;
                                            temp15 = true;
                                            $("#glassTube5").hide();
                                            $("#glassTubeOnRB5").show();
                                            if (
                                              !$("#glassTubeOnRB5").data(
                                                "ui-draggable"
                                              )
                                            ) {
                                              $("#glassTubeOnRB5").draggable();
                                            }
                                            $("#glassTubeOnRB5").draggable(
                                              "disable"
                                            );
                                          },
                                        });
                                        $("#burnerOff5").click(function () {
                                          removeTrip();
                                          inferenceForPage5V = 1;
                                          helpcount4 = 4;
                                          $("#burnerOff4").hide(); //turning burner ON
                                          $("#burnerOff5").hide();
                                          $("#burnerOn5").show();

                                          $("#flame5").show();
                                          var setin5 = setInterval(
                                            flameanimate3,
                                            500
                                          );
                                          $("#smokeInTb").hide();
                                          $("#smokeInTb5").show();
                                          $("#burnerOn5").click(function () {
                                            removeTrip();
                                            inferenceForPage5V = 1;
                                            helpcount4 = 5;
                                            $("#burnerOn5").hide();
                                            $("#burnerOff5").show();

                                            clearInterval(setin5);
                                            $("#flame5").hide();
                                          });
                                          $("#greensolnInTb").show();
                                          $("#whitesolnInTb").hide();
                                          $("#solnInTb5").hide();
                                          $("#inferenceForPage5").show();
                                          $("#inferenceForPage4").hide();
                                          $("#DropboxTest1").attr(
                                            "disabled",
                                            false
                                          );
                                        });
                                      }
                                    );
                                  },
                                });
                              }
                            );
                          },
                        });
                      }
                    });
                  }
                );
              });
            });
          },
        });
      }
    });
  }); //.............................................end of document.ready fn................................................................................................
};
function acidicOrBasic() {
  $("#dropForGasjar,#trough,#burnerOff5,#burnerOn5,#flame5").hide();
  $("#blueLitmus").show();
  $("#blueLitmus").css({
    left: 10 + "%",
    top: 45 + "%",
    transform: "rotate(" + 0 + "deg)",
  });

  $("#redLitmus2,#smokeInTb,#flame").hide();
  $("#jar3Div").show();
  $("#gas3").show();
  $("#paperDiv").show();
  $("#litmusDrop").show();
  help_last_info = 3;
  $("#next_btn2").remove();
  $("#redLitmus").draggable({
    //dragging red litmus to gas jar
    revert: function () {
      if (!temp8) {
        return true;
      }
    },
    drag: function () {
      removeTrip();
    },

    start: function () {
      $("#DropboxTest1").attr("disabled", true);
    },
  });

  $("#litmusDrop").droppable({
    accept: "#redLitmus", //dropping red limus
    drop: function () {
      inferenceForAcid2Varia = 1;
      inferenceForAcid2V = 1;
      helpcount2 = 1;
      testIndex1 = 0;
      helpX = 2;

      temp8 = true;
      $("#redLitmus").animate({ top: -212 + "%", left: -92 + "%" });
      $("#redLitmus").animate(
        { deg: -90 },
        {
          duration: 0,
          step: function (now) {
            $(this).css({ transform: "rotate(" + now + "deg)" });
            $("#jarTop3").hide();
            $("#redLitmus").animate({ top: -100 + "px" });
            $("#jar3Div").css({ "z-index": 10 });
            $("#redLitmus").css({ "z-index": 1 });
            setTimeout(function () {
              $("#redLitmus").animate({ top: -180 + "px" }, function () {
                $({ deg: -90 }).animate(
                  { deg: 0 },
                  {
                    step: function (now, fx) {
                      $("#redLitmus").css({
                        transform: "rotate(" + now + "deg)",
                      });
                      $("#jarTop3").show();
                      $("#redLitmus").animate({
                        top: 25 + "%",
                        left: 14 + "%",
                      });
                    },
                  }
                );
              });
            });
            $("#inferenceForAcid").show();
            $("#redLitmus").draggable("disable");
            $("#blueLitmus").draggable({
              //dragging blue litmus to gas jar
              revert: function () {
                if (!temp9) {
                  return true;
                }
              },
              drag: function () {
                inferenceForAcid2V = 11;
                removeTrip();
              },
            });
            $("#litmusDrop").droppable({
              accept: "#blueLitmus", // dropping blue litmus
              drop: function () {
                inferenceForAcid2V = 11;
                //alert(inferenceForAcid2V + " inferenceForAcid2V");
                helpcount2 = 2;
                temp9 = true;

                $("#blueLitmus").animate({ top: -212 + "%", left: -92 + "%" });
                $("#blueLitmus").animate(
                  { deg: -90 },
                  {
                    duration: 0,
                    step: function (now) {
                      $(this).css({ transform: "rotate(" + now + "deg)" });
                      $("#jarTop3").hide();
                      $("#blueLitmus").animate({ top: -111 + "px" }, 800);
                      $("#jar3Div").css({ "z-index": 10 });
                      $("#blueLitmus").css({ "z-index": 1 });
                      setTimeout(function () {
                        $("#blueLitmus").animate(
                          { top: -100 + "px" },
                          500,
                          function () {
                            $("#blueLitmus").hide();
                            $("#redLitmus2").show();

                            $({ deg: -90 }).animate(
                              { deg: 0 },
                              {
                                step: function (now, fx) {
                                  $("#redLitmus2").css({
                                    transform: "rotate(" + now + "deg)",
                                  });
                                  $("#jarTop3").show();
                                  $("#redLitmus2").animate({
                                    top: 84.3 + "%",
                                    left: 53 + "%",
                                  });
                                },
                              }
                            );
                          }
                        );
                      });
                      $("#redLitmus").draggable({ disabled: false });
                      $("#inferenceForAcid").hide();
                      $("#inferenceForAcid2").show();
                      inferenceForAcid2Varia = 1;
                      inferenceForAcid2Variable = 1;
                      $("#DropboxTest1").attr("disabled", false);
                    },
                  }
                );
              },
            });
          },
        }
      );
    },
  });
  $("#reset").click(function () {
    window.location.reload();
  });
}

function addintoDropDown(getId, valueSet) {
  $.each(valueSet, function (val, text) {
    getId.append($("<option ></option>").val(val).html(text));
  });
}

function waterani() {
  $("#waterpouring").show();
  $("#aa").fadeOut(5000);
  $("#waterpouring").fadeOut();
  $("#waterinflask").show(100);
}

function gas3drop() {
  $("#gas2").fadeOut(500);
  $("#gasInTrough").show();
  $("#gasInTrough").fadeOut(1000);
}

function flameanimate() {
  if ($("#f1").css("display") == displayArray[0]) {
    $("#f1,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f2").show();
  } else if ($("#f2").css("display") == displayArray[0]) {
    $("#f1,#f2,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f3").show();
  } else if ($("#f3").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f4").show();
  } else if ($("#f4").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f5").show();
  } else if ($("#f5").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f6").show();
  } else if ($("#f6").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f7").show();
  } else if ($("#f7").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f9,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f8").show();
  } else if ($("#f8").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f10,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f9").show();
  } else if ($("#f9").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f11,#f12,#f13,#f14,#f15").hide();
    $("#f10").show();
  } else if ($("#f10").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f12,#f13,#f14,#f15").hide();
    $("#f11").show();
  } else if ($("#f11").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f13,#f14,#f15").hide();
    $("#f12").show();
  } else if ($("#f12").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f14,#f15").hide();
    $("#f13").show();
  } else if ($("#f13").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f15").hide();
    $("#f14").show();
  } else if ($("#f14").css("display") == displayArray[0]) {
    $("#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14").hide();
    $("#f15").show();
  } else {
    $(
      "#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15"
    ).hide();
    $("#f1").show();
  }
}

function flameanimate2() {
  if ($("#l1").css("display") == displayArray[0]) {
    $("#l1,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l2").show();
  } else if ($("#l2").css("display") == displayArray[0]) {
    $("#l1,#l2,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l3").show();
  } else if ($("#l3").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l4").show();
  } else if ($("#l4").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l5").show();
  } else if ($("#l5").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l6").show();
  } else if ($("#l6").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l7").show();
  } else if ($("#l7").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l9,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l8").show();
  } else if ($("#l8").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l10,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l9").show();
  } else if ($("#l9").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l11,#l12,#l13,#l14,#l15").hide();
    $("#l10").show();
  } else if ($("#l10").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l12,#l13,#l14,#l15").hide();
    $("#l11").show();
  } else if ($("#l11").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l13,#l14,#l15").hide();
    $("#l12").show();
  } else if ($("#l12").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l14,#l15").hide();
    $("#l13").show();
  } else if ($("#l13").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l15").hide();
    $("#l14").show();
  } else if ($("#l14").css("display") == displayArray[0]) {
    $("#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14").hide();
    $("#l15").show();
  } else {
    $(
      "#l1,#l2,#l3,#l4,#l5,#l6,#l7,#l8,#l9,#l10,#l11,#l12,#l13,#l14,#l15"
    ).hide();
    $("#l1").show();
  }
}

function flameanimate3() {
  if ($("#a1").css("display") == displayArray[0]) {
    $("#a1,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a2").show();
  } else if ($("#a2").css("display") == displayArray[0]) {
    $("#a1,#a2,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a3").show();
  } else if ($("#a3").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a4").show();
  } else if ($("#a4").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a5").show();
  } else if ($("#a5").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a6").show();
  } else if ($("#a6").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a7").show();
  } else if ($("#a7").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a9,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a8").show();
  } else if ($("#a8").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a10,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a9").show();
  } else if ($("#a9").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a11,#a12,#a13,#a14,#a15").hide();
    $("#a10").show();
  } else if ($("#a10").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a12,#a13,#a14,#a15").hide();
    $("#a11").show();
  } else if ($("#a11").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a13,#a14,#a15").hide();
    $("#a12").show();
  } else if ($("#a12").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a14,#a15").hide();
    $("#a13").show();
  } else if ($("#a13").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a15").hide();
    $("#a14").show();
  } else if ($("#a14").css("display") == displayArray[0]) {
    $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14").hide();
    $("#a15").show();
  } else {
    $(
      "#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9,#a10,#a11,#a12,#a13,#a14,#a15"
    ).hide();
    $("#a1").show();
  }
}

function removeTrip() {
  if (tripClickFlag == true) {
    $(".trip-block").hide();
    trip.stop();
    tripClickFlag = false;
  }
}

$("#ResetWindow").click(function () {
  window.location.reload();
});
