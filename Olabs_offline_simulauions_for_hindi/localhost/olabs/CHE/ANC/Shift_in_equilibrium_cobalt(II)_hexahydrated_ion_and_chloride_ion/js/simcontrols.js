var drag, drag1, drag2, drag3, drag4;
var drag5, acet1, acet2, acet3, acet4;
var water1, water2, water3, water4;
var cc1, wt1, pink1, dw1, dw2, dw3, dw4;
var tb1, tb2, tb3, tb4, tb5;
var ImageBlueSoln = [];
var ImageAcetone = [];
var ImageBtoP = [];
var ImageBpour = [];
var ImageWpour = [];
var ImagePinkPour = [];
var help = 0;
$(document).ready(function () {

  for (blue = 0; blue < 57; blue++) {
    ImageBlueSoln[blue] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/blue_solution_pouring/" + (blue + 1) + ".png"
  }
  for (acet = 0; acet < 57; acet++) {
    ImageAcetone[acet] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/Water_pouring/" + (acet + 1) + ".png"
  }
  for (BP = 0; BP < 48; BP++) {
    ImageBtoP[BP] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/blue_to_pink/" + (BP + 1) + ".png"
  }
  for (pourB = 0; pourB < 57; pourB++) {
    ImageBpour[pourB] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/blue_solution_pouring/" + (pourB + 1) + ".png"
  }
  for (pourW = 0; pourW < 57; pourW++) {
    ImageWpour[pourW] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/Water_pouring/" + (pourW + 1) + ".png"
  }
  for (pinkp = 0; pinkp < 57; pinkp++) {
    ImagePinkPour[pinkp] = "../CHE/ANC/Shift_in_equilibrium_cobalt(II)_hexahydrated_ion_and_chloride_ion/images/Pink_soln_pouring/" + (pinkp + 1) + ".png"
  }
});
$(window).on('load',function() {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("Study the Shift in Equilibrium between [Co(H₂O)₆] ²⁺ and Cl⁻ ions");
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("RESET"));

  $("[data-translate]").html(function (index, originalHtml) {
    console.log(originalHtml);
    return gt.gettext(originalHtml);
  });
  helpMsg = [gt.gettext("Drag and drop Cobalt Chloride<br> solution to test tubes A,B,C,D and E respectively(3 ml each)."), gt.gettext("Drag and drop 3ml of Cobalt Chloride<br> solution to test tube B"), gt.gettext("Drag and drop 3ml of Cobalt Chloride<br> solution to test tube C"),
  gt.gettext("Drag and drop 3ml of Cobalt Chloride<br> solution to test tube D"), gt.gettext("Drag and drop 3ml of Cobalt Chloride<br> solution to test tube E"), gt.gettext("Click on the cap of the<br> Acetone bottle to open it"),
  gt.gettext("Drag and drop<br> Acetone to test tubes <br>A,B,C,D and E respectively "), gt.gettext("Drag and drop<br> 0.8 ml of Acetone <br>to test tube B"), gt.gettext("Drag and drop<br> 0.6 ml of Acetone <br>to test tube C"),
  gt.gettext("Drag and drop<br> 0.4 ml of Acetone <br>to test tube D"), gt.gettext("Drag and drop<br> 0.2 ml of Acetone <br>to test tube E"), gt.gettext("Drag and drop<br> Water to test tubes <br>B,C,D and E respectively "),
  gt.gettext("Drag and drop<br> 0.4 ml of water <br>to test tube C"), gt.gettext("Drag and drop<br> 0.6 ml of water <br>to test tube D"), gt.gettext("Drag and drop<br> 0.8 ml of water <br>to test tube E"),
  gt.gettext("Click on the Inference button"), gt.gettext("Click on the Next button"), gt.gettext("Drag and drop 10 mL of Cobalt <br>Chloride solution in test tube X"),
  gt.gettext("Drag and drop 5 mL<br> distilled water to <br>test tube X"), gt.gettext("Drag and drop <br>the solution in<br> test tube X to<br> test tubes A, B,<br> C, D and E,<br> resp(1.5 ml each)."), gt.gettext("Drag and drop<br> Water to test tubes <br>A,B,C and D respectively "),
  gt.gettext("Drag and drop<br> 1.5 ml of water to<br> test tube B"), gt.gettext("Drag and drop <br>1 ml of water to<br> test tube C"), gt.gettext("Drag and drop 0.5 ml of<br> water to test tube D"),
  gt.gettext("Drag and drop<br> conc. HCl to test tubes <br>A,B,C,D and E respectively"), gt.gettext("Drag and drop<br> 1 ml of conc. HCl to<br> test tube B"), gt.gettext("Drag and drop <br>1.5 ml of conc. HCl<br> to test tube C"),
  gt.gettext("Drag and drop <br>2 ml of conc. HCl to <br>test tube D"), gt.gettext("Drag and drop <br>2.5 ml of conc. HCl<br> to test tube E"), gt.gettext("Click on the Reset<br> button to redo the<br> experiment.")];
  Inference_msg = [gt.gettext("Addition of H<sub>2</sub>O in Cobalt Chloride solution<br> (60mL of Acetone + 0.600 g of Cobalt Chloride)<br> results in the formation of Pink colour"), gt.gettext("Addition of HCl results in the colour <br>change of solution to light blue.")]

  ImageInitLoad(ImageBlueSoln, "BlueSoln", "pour", "BluePouring")
  ImageInitLoad(ImageBlueSoln, "SecTb", "sec", "SecPour")
  ImageInitLoad(ImageBlueSoln, "ThirdTb", "thir", "thirdPour")
  ImageInitLoad(ImageBlueSoln, "ForthTb", "four", "fourthPour")
  ImageInitLoad(ImageBlueSoln, "FifthTb", "five", "fifthPour")
  ImageInitLoad(ImageAcetone, "firstWater", "fstWat", "fWaterPour")
  ImageInitLoad(ImageAcetone, "secWater", "SWat", "secWaterPour")
  ImageInitLoad(ImageAcetone, "ThirWater", "thWat", "thiWaterPour")
  ImageInitLoad(ImageAcetone, "fourWater", "fouWat", "fourthWaterPour")
  ImageInitLoad(ImageAcetone, "fifthWater", "fifWat", "fifWaterPour")
  ImageInitLoad(ImageAcetone, "Bwater", "B", "BWaterPour")
  ImageInitLoad(ImageBtoP, "B_blue_pink", "Btest", "BtestAni")
  ImageInitLoad(ImageAcetone, "Cwater", "C", "CWaterPour")
  ImageInitLoad(ImageAcetone, "Dwater", "D", "DWaterPour")
  ImageInitLoad(ImageAcetone, "Ewater", "E", "EWaterPour")
  ImageInitLoad(ImageBpour, "cc_first", "blPour", "blPourAni")
  ImageInitLoad(ImageWpour, "water_first", "WRPour", "WRPourAni")
  ImageInitLoad(ImagePinkPour, "pink_pour", "pinkPour", "pinkPourAni")
  ImageInitLoad(ImagePinkPour, "B_pink_pour", "BPour", "BPourAni")
  ImageInitLoad(ImagePinkPour, "C_pink_pour", "CPour", "CPourAni")
  ImageInitLoad(ImagePinkPour, "D_pink_pour", "DPour", "DPourAni")
  ImageInitLoad(ImagePinkPour, "E_pink_pour", "EPour", "EPourAni")
  ImageInitLoad(ImageAcetone, "dw_A", "WA", "WAPour")
  ImageInitLoad(ImageAcetone, "dw_B", "WB", "WBPour")
  ImageInitLoad(ImageAcetone, "dw_C", "WC", "WCPour")
  ImageInitLoad(ImageAcetone, "dw_D", "WD", "WDPour")
  ImageInitLoad(ImageAcetone, "dw_E", "WE", "WEPour")
  cobaltSoln()
  removeTrip()

});

function cobaltSoln() {
  removeTrip()
  help = 0;
  $("#screen2").css({ 'display': 'none' });
  $("#ccDiv").css({ 'cursor': 'pointer' });
  $("#ccDiv").draggable({
    containment: "#bg",
    revert: function (drag) {
      if (!drag) {
        $(this).animate({
          top: "17%", // top position in % (percentage)
          left: "45%", // left position in % (percentage)
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#tbDrop").droppable({
    accept: "#ccDiv",
    drop: function () {
      help = 1;
      drag = true
      $("#ccDiv").css({ left: 9.5 + '%', top: -4 + '%', height: 43 + '%', width: 19 + '%' });
      $('#ccDiv').animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $("#ccSoln").hide();
            $("#tiltBlueSoln1").show();
          }
        });
      setTimeout(function () {
        $("#slidersample1").attr("disabled", false);
        $("#slidersample1").val(3);   // Show the vol.of soln in controls as slider value
        $(".rytval,.leftval").css({ 'display': 'block' })
        ImageAnimationOneTime("BluePouring", "pour", ImageBlueSoln, 50, 0)
        $("#tb1Soln").fadeIn();
        setTimeout(function () {
          $("#ccDiv").css({ left: 15.5 + '%', top: -5 + '%', height: 43 + '%', width: 19 + '%' });
          $('#ccDiv').animate({ deg: -94 },
            {
              duration: 2000,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            });
          setTimeout(function () {
            ImageAnimationOneTime("SecPour", "sec", ImageBlueSoln, 20, 0)
            $("#tb2Soln").fadeIn();
            setTimeout(function () {
              $("#ccDiv").css({ left: 20.6 + '%', top: -6 + '%', height: 43 + '%', width: 19 + '%' });
              $('#ccDiv').animate({ deg: -98 },
                {
                  duration: 2000,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                });
              setTimeout(function () {
                ImageAnimationOneTime("thirdPour", "thir", ImageBlueSoln, 20, 0)
                $("#tb3Soln").fadeIn();
                setTimeout(function () {
                  $("#ccDiv").css({ left: 26.7 + '%', top: -3 + '%', height: 43 + '%', width: 19 + '%' });
                  $('#ccDiv').animate({ deg: -100 },
                    {
                      duration: 2000,
                      step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    });
                  setTimeout(function () {
                    ImageAnimationOneTime("fourthPour", "four", ImageBlueSoln, 20, 0)
                    $("#tb4Soln").fadeIn();
                    setTimeout(function () {
                      $("#ccDiv").css({ left: 31.5 + '%', top: -1 + '%', height: 43 + '%', width: 19 + '%' });
                      $('#ccDiv').animate({ deg: -115 },
                        {
                          duration: 2000,
                          step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                          }
                        });
                      setTimeout(function () {
                        ImageAnimationOneTime("fifthPour", "five", ImageBlueSoln, 20, 0)
                        help = 5;
                        $("#tb5Soln").fadeIn();
                        setTimeout(function () {
                          $('#ccDiv').animate({ deg: 0 },
                            {
                              duration: 2000,
                              step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                                $("#ccSoln").show();
                                $("#ccSoln").css({ left: 12 + '%', top: 81 + '%', height: 13 + '%', width: 81 + '%' });
                                $("#tiltBlueSoln1").hide();
                              }
                            });
                          setTimeout(function () {
                            $("#ccDiv").animate({ left: 45 + '%', top: 18 + '%', height: 43 + '%', width: 19 + '%' });
                            $('#ccDiv').css({ 'cursor': 'default' });
                            $('#ccDiv').draggable("disable")
                            $("#acetoneCap").css({ 'cursor': 'pointer' });
                            acetone()
                          }, 2000)
                        }, 2000);
                      }, 1500);
                    }, 2500);
                  }, 1500);
                }, 2500);
              }, 1500);
            }, 2800);
          }, 1500)
        }, 3700);
      }, 1000);
    }
  });
}

function acetone() {
  removeTrip();
  $("#acetoneCap").click(function () {
    $('#acetoneCap').off('click');
    help = 6;
    removeTrip();
    $("#slidersample1").val(0);
    // $("#slidersample1").attr("disabled", true);
    $(".rytval,.leftval").css({ 'display': 'none' })
    $("#AlertDiv").css({ 'display': 'block' })
    $("#acetoneCap").css({ 'cursor': 'default' });
    $("#acetoneBottle").css({ 'cursor': 'pointer' });
    $("#acetoneCap").animate({ left: -55 + '%', top: 53 + '%' });
    setTimeout(function () {
      $("#AlertDiv").css({ 'display': 'none' })
    }, 3000);
    $("#acetoneBottle").draggable({
      containment: "#bg",   // drag acetone bottle to testube A
      revert: function (drag5) {
        if (!drag5) {
          $(this).animate({
            top: "-4%",
            left: "3%",
          })
        }
      },
      drag: function () {
        removeTrip();
      }
    });
    $("#tbDrop").droppable({
      accept: "#acetoneBottle",
      drop: function () {
        help = 100;
        drag5 = true
        $("#acetoneBottle").css({ left: -505 + '%', top: -42 + '%', width: 60 + '%', height: 61 + '%' });
        $('#acetoneBottle').animate({ deg: -90 },
          {
            duration: 1500,
            step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' });
            }
          });
        setTimeout(function () {
          $("#slidersample2").attr("disabled", false);
          $("#slidersample2").val(6);
          $("#ace2").css({ 'display': 'block' })
          ImageAnimationOneTime("fWaterPour", "fstWat", ImageAcetone, 10, 0)
          // $("#tb1Soln").show();                                                 // delete this later
          $("#tb1Soln").css({ width: 8 + '%', height: 40 + '%', top: 29 + '%', left: 13.5 + '%' })
        
        setTimeout(function(){

          
        $("#acetoneBottle").animate({ left: -468 + '%' },1000, function () {
          $('#acetoneBottle').animate({ deg: -90 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            });
          setTimeout(function () {
            $("#slidersample2").val(5);
            $("#ace3").css({ 'display': 'block' })
            $("#ace2").css({ 'display': 'none' })
            ImageAnimationOneTime("secWaterPour", "SWat", ImageAcetone, 10, 0)
            $("#tb2Soln").css({ width: 7 + '%', height: 29 + '%', top: 39 + '%', left: 28 + '%' })
            setTimeout(function () {
              $("#acetoneBottle").css({ left: -426 + '%' });
              $('#acetoneBottle').animate({ deg: -92 },
                {
                  duration: 1500,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                  }
                });
              setTimeout(function () {
                $("#slidersample2").val(4);
                $("#ace4").css({ 'display': 'block' })
                $("#ace2,#ace3").css({ 'display': 'none' })
                ImageAnimationOneTime("thiWaterPour", "thWat", ImageAcetone, 10, 0)
                $("#tb3Soln").css({ width: 7 + '%', height: 25 + '%', top: 43 + '%', left: 43 + '%' })
                setTimeout(function () {
                  $("#acetoneBottle").css({ left: -374 + '%' });
                  $('#acetoneBottle').animate({ deg: -94 },
                    {
                      duration: 1500,
                      step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    });
                  setTimeout(function () {
                    $("#slidersample2").val(3);
                    $("#ace5").css({ 'display': 'block' })
                    $("#ace2,#ace3,#ace4").css({ 'display': 'none' })
                    ImageAnimationOneTime("fourthWaterPour", "fouWat", ImageAcetone, 10, 0)
                    $("#tb4Soln").css({ width: 7 + '%', height: 21 + '%', top: 47 + '%', left: 57.9 + '%' })
                    setTimeout(function () {
                      $("#acetoneBottle").css({ left: -340 + '%' });
                      $('#acetoneBottle').animate({ deg: -96 },
                        {
                          duration: 1500,
                          step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                          }
                        });
                      setTimeout(function () {
                        $("#slidersample2").val(2);
                        $("#ace6").css({ 'display': 'block' })
                        $("#ace2,#ace3,#ace4,#ace5").css({ 'display': 'none' })
                        ImageAnimationOneTime("fifWaterPour", "fifWat", ImageAcetone, 10, 0)
                        $("#tb5Soln").css({ width: 7 + '%', height: 21 + '%', top: 47 + '%', left: 73 + '%' })
                        setTimeout(function () {
                          $('#acetoneBottle').animate({ deg: 0 },
                            {
                              duration: 2000,
                              step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                              }
                            });
                          $("#acetoneBottle").animate({ left: 3 + '%', top: -4 + '%', width: 89 + '%', height: 109 + '%' }, function () {
                            help = 11
                            $("#acetoneCap").animate({ left: 27 + '%', top: -8 + '%', width: 41 + '%', height: 10 + '%' });
                            $('#acetoneBottle').css({ 'cursor': 'default' });
                            $('#acetoneBottle').draggable("disable")
                            water()
                          });
                        })
                      }, 1000);
                    }, 1000)
                  }, 1000);
                }, 1000)
              }, 1000);
            }, 1000)
          }, 1000);
        });
      },1000)
      }, 1000);
      }
    });
  })
}

function water() {
  removeTrip();
  $("#dwDiv").css({ 'cursor': 'pointer' });
  $("#dwDiv").draggable({
    containment: "#bg",   // drag water to testube B
    revert: function (water1) {
      if (!water1) {
        $(this).animate({
          top: "49%",
          left: "67%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  setTimeout(function () {
    var topPos = $('#slider3').offset().top;
    $('.control-div').scrollTop(topPos - 10);
  }, 500)
  $("#tbDrop").droppable({
    accept: "#dwDiv",
    drop: function () {
      help = 100;
      $("#slidersample2").val(0);
      // $("#slidersample2").attr("disabled", true);
      $("#ace1,#ace2,#ace3,#ace4,#ace5,#ace6").css({ 'display': 'none' })
      water1 = true
      $("#dwDiv").css({ left: 17 + '%', top: -2 + '%', width: 11 + '%', height: 29 + '%' });
      $("#dwDiv").animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $("#water").hide();
            $("#waterTilted").show();
          }
        }
      );
      setTimeout(function () {
        $("#slidersample3").attr("disabled", false);
        $("#slidersample3").val(2);
        $("#wat2").css({ 'display': 'block' })
        ImageAnimationOneTime("BWaterPour", "B", ImageAcetone, 20, 0)
        $("#tb2Soln").css({ left: 28 + '%', top: 35 + '%', width: 7 + '%', height: 34 + '%' });
        setTimeout(function () {

          $("#dwDiv").css({ left: 22.8 + '%', top: -2 + '%', width: 11 + '%', height: 29 + '%' });
          $("#dwDiv").animate({ deg: -90 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                $("#water").hide();
                $("#waterTilted").show();
              }
            }
          );
          setTimeout(function () {
            $("#slidersample3").val(3);
            $("#wat2").css({ 'display': 'none' })
            $("#wat3").css({ 'display': 'block' })
            ImageAnimationOneTime("CWaterPour", "C", ImageAcetone, 20, 0)
            $("#tb3Soln").css({ left: 42.4 + '%', top: 39 + '%', width: 8 + '%', height: 29 + '%' });
            setTimeout(function () {
              $("#pinkSoln2").fadeIn();
              $("#tb3Soln").hide();
              $("#dwDiv").css({ left: 29.5 + '%', top: -2 + '%', width: 11 + '%', height: 29 + '%' });
              $("#dwDiv").animate({ deg: -90 },
                {
                  duration: 1500,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    $("#water").hide();
                    $("#waterTilted").show();
                  }
                }
              );
              setTimeout(function () {
                $("#slidersample3").val(4);
                $("#wat2,#wat3").css({ 'display': 'none' })
                $("#wat4").css({ 'display': 'block' })
                ImageAnimationOneTime("DWaterPour", "D", ImageAcetone, 20, 0)
                $("#tb4Soln").css({ left: 57.4 + '%', top: 43 + '%', width: 8 + '%', height: 24 + '%' });
                setTimeout(function () {
                  $("#pinkSoln3").fadeIn();
                  $("#tb4Soln").hide();
                  $("#dwDiv").css({ left: 35.3 + '%', top: -2 + '%', width: 11 + '%', height: 29 + '%' });
                  $("#dwDiv").animate({ deg: -90 },
                    {
                      duration: 1500,
                      step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        $("#water").hide();
                        $("#waterTilted").show();
                      }
                    }
                  );
                  setTimeout(function () {
                    $("#slidersample3").val(5);
                    $("#wat2,#wat3,#wat4").css({ 'display': 'none' })
                    $("#wat5").css({ 'display': 'block' })
                    ImageAnimationOneTime("EWaterPour", "E", ImageAcetone, 20, 0)
                    $("#tb5Soln").css({ left: 72.4 + '%', top: 44 + '%', width: 8 + '%', height: 24 + '%' });
                    setTimeout(function () {
                      $("#pinkSoln4").fadeIn();
                      $("#tb5Soln").hide();
                      setTimeout(function () {
                        $("#dwDiv").animate({ deg: 0 },
                          {
                            duration: 2000,
                            step: function (now) {
                              $(this).css({ transform: 'rotate(' + now + 'deg)' });
                              $("#water").show();
                              $("#water").css({ left: 8 + '%', top: 61 + '%', width: 84 + '%', height: 16 + '%' });
                              $("#waterTilted").hide();
                            }
                          }
                        );
                        setTimeout(function () {
                          $("#dwDiv").animate({ left: 67 + '%', top: 49 + '%', width: 18 + '%', height: 43 + '%' });
                          $('#dwDiv').draggable("disable")

                          setTimeout(function () {
                            $("#inf").show();
                            $("#inf").css({ 'cursor': 'pointer' });
                            help = 15;
                            setTimeout(function () {
                              $(".nxtbutton").show();
                            }, 2000);
                          }, 1000);
                          SecScreen();
                        }, 1800);
                      }, 500);
                    }, 1500);
                  }, 1000);
                }, 1500);
              }, 1000);
            }, 1500);
          }, 1000);
        }, 1500);
      }, 1000)
      setTimeout(function () {
        $("#pinkSoln1").fadeIn();
        $("#tb2Soln").hide();
      }, 3000);

    }
  });
  //});
}

function SecScreen() {
  removeTrip();
  // $("#sliderScn2,#sliderScn2a,#sliderScn2b,#sliderScn2c").attr("disabled", true);
  $(".nxtbutton").click(function () {
    removeTrip();
    help = 17;
    $("#screen1,#head1,#Screen1Controls").css({ 'display': 'none' });
    $("#screen2,#head2,#Screen2Controls").css({ 'display': 'block' });
    tb_x()
  });
}
function tb_x() {
  removeTrip();
  $("#scn2_ccDiv").css({ 'cursor': 'pointer' });
  $("#scn2_ccDiv").draggable({
    containment: "#bg",   // drag cocl2 to testube X
    revert: function (cc1) {
      if (!cc1) {
        $(this).animate({
          top: "17%",
          left: "45%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#scn2_drop1").droppable({
    accept: "#scn2_ccDiv",
    drop: function () {
      help = 100;
      cc1 = true
      $("#scn2_ccDiv").css({ left: 11.5 + '%', top: 2 + '%', width: 14 + '%', height: 31 + '%' });
      $("#scn2_ccDiv").animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $("#scn2_ccSoln").hide();
            $("#scn2_blueTilt").show();
          }
        }
      );
      setTimeout(function () {
        ImageAnimationOneTime("blPourAni", "blPour", ImageBpour, 20, 0)
        $("#sliderScn2").attr("disabled", false);
        $("#sliderScn2").val(2);
        $(".coba1,.coba2").css({ 'display': 'block' })
        $("#scn2_bSoln").fadeIn();
        setTimeout(function () {
          $("#scn2_ccDiv").animate({ deg: 0 },
            {
              duration: 2000,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                $("#scn2_ccSoln").show();
                $("#scn2_ccSoln ").css({ left: 14 + '%', top: 69 + '%', width: 75 + '%', height: 25 + '%' });
                $("#scn2_blueTilt").hide();
              }
            }
          );
          setTimeout(function () {
            $("#scn2_ccDiv").animate({ left: 45 + '%', top: 17 + '%', width: 19 + '%', height: 43 + '%' });
            help = 18;
            $('#scn2_ccDiv').draggable("disable");
            $("#scn2_ccDiv").css({ 'cursor': 'default' });
            $("#scn2_dwDiv").css({ 'cursor': 'pointer' });
          }, 1800);
        }, 1500);
      }, 1000);
      $("#scn2_dwDiv").draggable({
        containment: "#bg",   // drag water to testube X
        revert: function (wt1) {
          if (!wt1) {
            $(this).animate({
              top: "49%",
              left: "64%",
            })
          }
        },
        drag: function () {
          removeTrip();
        }
      });
      $("#scn2_drop1").droppable({
        accept: "#scn2_dwDiv",
        drop: function () {
          help = 100;
          wt1 = true
          $("#scn2_dwDiv").css({ left: 11.5 + '%', top: -2 + '%', width: 11 + '%', height: 29 + '%' });
          $("#scn2_dwDiv").animate({ deg: -90 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                $("#scn2_water").hide();
                $("#scn2_waterTilted").show();
              }
            }
          );
          setTimeout(function () {
            ImageAnimationOneTime("WRPourAni", "WRPour", ImageWpour, 20, 0)
            $("#sliderScn2").val(0);
            $("#sliderScn2a").val(6);
            $("#w6").css({ 'display': 'block' })
            $(".coba1,.coba2").css({ 'display': 'none' })
            $("#scn2_bSoln").css({ left: 26.5 + '%', top: 17 + '%', width: 64 + '%', height: 85 + '%' });
            setTimeout(function () {
              $("#scn2_dwDiv").animate({ deg: 0 },
                {
                  duration: 2000,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    $("#scn2_water").show();
                    $("#scn2_water").css({ left: 8 + '%', top: 34 + '%', width: 84 + '%', height: 48 + '%' });
                    $("#scn2_waterTilted").hide();
                  }
                }
              );
              setTimeout(function () {
                help = 19;
                $("#scn2_dwDiv").animate({ left: 64 + '%', top: 49 + '%', width: 18 + '%', height: 43 + '%' });
                // $("#X_div").css('zIndex', '60');
                $("#scn2_tb1").css('opacity', '0.5');
                $("#scn2_pink1").css('opacity', '0.7');
                $("#scn2_pink1").css({ width: 89 + '%' });
                $("#X_div").css({ 'cursor': 'pointer' });
                $('#scn2_dwDiv').draggable("disable");
                $("#scn2_dwDiv").css({ 'cursor': 'default' });
              }, 1800);
            }, 1500);
          }, 1000);
          setTimeout(function () {
            $("#scn2_pink1").fadeIn();
            $("#scn2_bSoln").hide();
          }, 4000);

          $("#X_div").draggable({
            containment: "#bg",   // drag testube X to testube A
            revert: function (pink1) {
              if (!pink1) {
                $(this).animate({
                  top: "-13%",
                  left: "9%",
                })
              }
            },
            drag: function () {
              removeTrip();
            }
          });
          setTimeout(function () {
            var topPos1 = $('#slider6').offset().top;
            $('.control-div').scrollTop(topPos1 - 10);
          }, 1000)
          $("#scn2_pinkdrop").droppable({
            accept: "#X_div",
            drop: function () {
              help = 100;
              pink1 = true
              $("#X_div").css({ left: 51 + '%', top: -82 + '%', width: 12 + '%', height: 85 + '%' });
              $("#X_div").animate({ deg: -90 },
                {
                  duration: 2000,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    $("#scn2_pink1").hide();
                    $("#pink_slant").show();
                  }
                }
              );
              setTimeout(function () {
                ImageAnimationOneTime("pinkPourAni", "pinkPour", ImagePinkPour, 120, 0)
                $("#sliderScn2b").attr("disabled", false);
                $("#sliderScn2a").val(0);
                $("#sliderScn2b").val(2);
                $("#s1,#s2").css({ 'display': 'block' })
                $("#w6,#w1").css({ 'display': 'none' })
                $("#ApinkSoln").fadeIn();
                setTimeout(function () {
                  $("#X_div").animate({ left: 65 + '%', top: -86 + '%', width: 12 + '%', height: 85 + '%' });
                  $("#X_div").animate({ deg: -95 },
                    {
                      duration: 2000,
                      step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      }
                    }
                  );
                  setTimeout(function () {
                    $("#BpinkSoln").fadeIn();
                    ImageAnimationOneTime("BPourAni", "BPour", ImagePinkPour, 50, 0)
                    setTimeout(function () {
                      $("#X_div").animate({ left: 77 + '%', top: -86 + '%', width: 12 + '%', height: 85 + '%' });
                      $("#X_div").animate({ deg: -97 },
                        {
                          duration: 2000,
                          step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                          }
                        }
                      );
                      setTimeout(function () {
                        $("#CpinkSoln").fadeIn();
                        ImageAnimationOneTime("CPourAni", "CPour", ImagePinkPour, 50, 0)
                        $("#X_div").animate({ deg: -90 },
                          {
                            duration: 2000,
                            step: function (now) {
                              $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                          }
                        );
                        $("#X_div").animate({ left: 92 + '%', top: -87 + '%', width: 12 + '%', height: 85 + '%' });
                        $("#X_div").animate({ deg: -99 },
                          {
                            duration: 2000,
                            step: function (now) {
                              $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                          }
                        );
                        setTimeout(function () {
                          $("#DpinkSoln").fadeIn();
                          ImageAnimationOneTime("DPourAni", "DPour", ImagePinkPour, 50, 0)
                          $("#X_div").animate({ deg: -90 },
                            {
                              duration: 2000,
                              step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                              }
                            }
                          );
                          $("#X_div").animate({ left: 100 + '%', top: -77 + '%', width: 9 + '%', height: 65 + '%' });
                          $("#X_div").animate({ deg: -100 },
                            {
                              duration: 2000,
                              step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                              }
                            }
                          );
                          setTimeout(function () {
                            $("#EpinkSoln").fadeIn();
                            ImageAnimationOneTime("EPourAni", "EPour", ImagePinkPour, 120, 0)
                            setTimeout(function () {
                              $("#X_div").animate({ deg: 0 },
                                {
                                  duration: 2000,
                                  step: function (now) {
                                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                                    $("#pink_slant").hide();
                                    $("#scn2_pink1").show();
                                    $("#scn2_pink1").css({ left: 13.5 + '%', top: 77 + '%', width: 89 + '%', height: 26 + '%' });
                                  }
                                }
                              );
                              $("#X_div").animate({ left: 9 + '%', top: -13 + '%', width: 12 + '%', height: 89 + '%' });
                              help = 20;
                              // $("#X_div").css('zIndex', '0');
                              $("#scn2_drop1").hide();
                              $("#scn2_dwDiv").draggable("enable");
                              $("#scn2_dwDiv").css({ 'cursor': 'pointer' });
                              waterScn2()
                            }, 7000);
                          }, 4000);
                        }, 4000);
                      }, 1000);
                    }, 4000);
                  }, 2000);
                }, 8000);
              }, 1000);
            }
          });
        }
      });
    }
  });
}

function waterScn2() {
  $("#scn2_dwDiv").draggable({
    containment: "#bg",   // drag water to testube A
    revert: function (dw1) {
      if (!dw1) {
        $(this).animate({
          top: "49%",
          left: "64%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#scn2_pinkdrop").droppable({
    accept: "#scn2_dwDiv",
    drop: function () {
      help = 100;
      dw1 = true
      $("#scn2_dwDiv").css({ left: 16.5 + '%', top: -3 + '%', width: 14 + '%', height: 33 + '%' });
      $("#scn2_dwDiv").animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $("#scn2_water").hide();
            $("#scn2_waterTilted").show();
          }
        }
      );
      setTimeout(function () {
        $("#sliderScn2a").val(5);
        $("#sliderScn2b").val(0);
        $("#s1,#s2").css({ 'display': 'none' })
        $("#w5").css({ 'display': 'block' })
        ImageAnimationOneTime("WAPour", "WA", ImageAcetone, 70, 0)
        setTimeout(function () {
          $("#ApinkSoln").css({ left: 25 + '%', top: -2 + '%', width: 12 + '%', height: 82 + '%' });
        }, 1000);
        setTimeout(function () {
          $("#scn2_dwDiv").css({ left: 22 + '%', top: -3 + '%', width: 14 + '%', height: 33 + '%' });
          $("#scn2_dwDiv").animate({ deg: -90 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                $("#scn2_water").hide();
                $("#scn2_waterTilted").show();
              }
            }
          );
          setTimeout(function () {
            ImageAnimationOneTime("WBPour", "WB", ImageAcetone, 70, 0)
            $("#sliderScn2a").val(4);
            $("#w5").css({ 'display': 'none' })
            $("#w4").css({ 'display': 'block' })
            setTimeout(function () {
              $("#BpinkSoln").css({ left: 38 + '%', top: 11 + '%', width: 12 + '%', height: 69 + '%' });
            }, 1000);
            setTimeout(function () {
              $("#scn2_dwDiv").css({ left: 27 + '%', top: -3 + '%', width: 14 + '%', height: 33 + '%' });
              $("#scn2_dwDiv").animate({ deg: -90 },
                {
                  duration: 1500,
                  step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    $("#scn2_water").hide();
                    $("#scn2_waterTilted").show();
                  }
                }
              );
              setTimeout(function () {
                ImageAnimationOneTime("WCPour", "WC", ImageAcetone, 70, 0)
                $("#sliderScn2a").val(3);
                $("#w4").css({ 'display': 'none' })
                $("#w3").css({ 'display': 'block' })
                setTimeout(function () {
                  $("#CpinkSoln").css({ left: 51 + '%', top: 20 + '%', width: 12 + '%', height: 60 + '%' });
                }, 1000);
                setTimeout(function () {
                  $("#scn2_dwDiv").css({ left: 33 + '%', top: -3 + '%', width: 14 + '%', height: 33 + '%' });
                  $("#scn2_dwDiv").animate({ deg: -90 },
                    {
                      duration: 1500,
                      step: function (now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        $("#scn2_water").hide();
                        $("#scn2_waterTilted").show();
                        $("#scn2_waterTilted").css({ left: -43 + '%', top: 39 + '%', width: 121 + '%', height: 30 + '%', 'transform': 'rotate(' + 62 + 'deg)' });
                      }
                    }
                  );
                  setTimeout(function () {
                    ImageAnimationOneTime("WDPour", "WD", ImageAcetone, 70, 0)
                    $("#sliderScn2a").val(2);
                    $("#w3").css({ 'display': 'none' })
                    $("#w2").css({ 'display': 'block' })
                    setTimeout(function () {
                      $("#DpinkSoln").css({ left: 65 + '%', top: 27 + '%', width: 12 + '%', height: 53 + '%' });
                    }, 1000);
                    setTimeout(function () {
                      $("#scn2_dwDiv").animate({ deg: 0 },
                        {
                          duration: 2000,
                          step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            $("#scn2_water").show();
                            $("#scn2_waterTilted").hide();

                          }
                        }
                      );
                      $("#scn2_dwDiv").animate({ left: 64 + '%', top: 49 + '%', width: 18 + '%', height: 43 + '%' });
                      help = 24;
                      $("#scn2_water ").css({ left: 8 + '%', top: 54 + '%', width: 84 + '%', height: 28 + '%' });
                      $('#scn2_dwDiv').css({ 'cursor': 'default' });
                      $('#scn2_dwDiv').draggable("disable")
                      $('#scn2_ccDiv').draggable("disable")
                      hcl()
                    }, 4000);
                  }, 1000);
                }, 4000)
              }, 1000);
            }, 4000)
          }, 1000);
        }, 4000);
      }, 1000);
    }
  });
}

function hcl() {
  removeTrip();
  $("#sliderScn2a").val(0);
  $("#sliderScn2c").attr("disabled", false);
  // $("#sliderScn2a").attr("disabled", true);
  $("#w2,#w1").css({ 'display': 'none' })
  $("#scn2_hclDiv").css({ 'cursor': 'pointer' });
  $("#scn2_hclDiv").mouseover(function () {
    $("#scn2_AlertDiv").show();
  });
  $("#scn2_hclDiv").draggable({
    containment: "#bg",  // drag hcl to tb A
    revert: function (tb1) {
      if (!tb1) {
        $(this).animate({
          top: "19%",
          left: "81%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  setTimeout(function () {
    var topPos2 = $('#slider7').offset().top;
    $('.control-div').scrollTop(topPos2 - 10);
  }, 1000)
  $("#scn2_pinkdrop").droppable({
    accept: "#scn2_hclDiv",
    drop: function () {
      help = 100;
      tb1 = true
      $("#scn2_hclDiv").css({ left: 16 + '%', top: 1 + '%', width: 12 + '%', height: 27 + '%' });
      $("#scn2_hclDiv").animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
            $("#scn2_hcl").hide();
            $("#scn2_hclTilted").show();
          }
        }
      );
      setTimeout(function () {
        ImageAnimationOneTime("WAPour", "WA", ImageAcetone, 70, 0)
        $("#sliderScn2c").val(2);
        $("#hc2").css({ 'display': 'block' })
        setTimeout(function () {
          setTimeout(function () {
            $("#scn2_AlertDiv").hide();
          }, 1000);
          $("#ApinkSoln").css({ left: 25 + '%', top: -12 + '%', width: 12 + '%', height: 94 + '%' });
          setTimeout(function () {
            $("#AblueSoln").css({ 'display': 'block' });
            $("#ApinkSoln").css({ 'display': 'none' });
            setTimeout(function () {
              $("#scn2_hclDiv").css({ left: 21.5 + '%', top: 1 + '%', width: 12 + '%', height: 27 + '%' });
              setTimeout(function () {
                ImageAnimationOneTime("WBPour", "WB", ImageAcetone, 70, 0)
                $("#sliderScn2c").val(3);
                $("#hc2").css({ 'display': 'none' })
                $("#hc3").css({ 'display': 'block' })
                setTimeout(function () {
                  $("#BblueSoln").css({ 'display': 'block' });
                  $("#BpinkSoln").css({ 'display': 'none' });
                  setTimeout(function () {
                    $("#scn2_hclDiv").css({ left: 26.3 + '%', top: 1 + '%', width: 12 + '%', height: 27 + '%' });
                    $("#scn2_hclDiv").animate({ deg: -90 },
                      {
                        duration: 1500,
                        step: function (now) {
                          $(this).css({ transform: 'rotate(' + now + 'deg)' });
                          $("#scn2_hcl").hide();
                          $("#scn2_hclTilted").show();
                        }
                      }
                    );
                    setTimeout(function () {
                      ImageAnimationOneTime("WCPour", "WC", ImageAcetone, 70, 0)
                      $("#sliderScn2c").val(4);
                      $("#hc4").css({ 'display': 'block' })
                      $("#hc3").css({ 'display': 'none' })
                      setTimeout(function () {
                        $("#CpinkSoln").css({ left: 51 + '%', top: 16 + '%', width: 12 + '%', height: 64 + '%' });
                        setTimeout(function () {
                          $("#CblueSoln").css({ 'display': 'block' });
                          $("#CpinkSoln").css({ 'display': 'none' });
                          setTimeout(function () {
                            $("#scn2_hclDiv").css({ left: 32.3 + '%', top: 2 + '%', width: 12 + '%', height: 27 + '%' });
                            setTimeout(function () {
                              ImageAnimationOneTime("WDPour", "WD", ImageAcetone, 70, 0)
                              $("#sliderScn2c").val(5);
                              $("#hc5").css({ 'display': 'block' })
                              $("#hc4").css({ 'display': 'none' })
                              $("#DpinkSoln").css({ left: 65 + '%', top: 16 + '%', width: 12 + '%', height: 64 + '%' });
                              setTimeout(function () {
                                $("#DblueSoln").css({ 'display': 'block' });
                                $("#DpinkSoln").css({ 'display': 'none' });
                                setTimeout(function () {
                                  $("#scn2_hclDiv").css({ left: 37 + '%', top: 1 + '%', width: 12 + '%', height: 27 + '%' });
                                  setTimeout(function () {
                                    ImageAnimationOneTime("WEPour", "WE", ImageAcetone, 70, 0)
                                    $("#sliderScn2c").val(6);
                                    $("#hc6").css({ 'display': 'block' })
                                    $("#hc5").css({ 'display': 'none' })
                                    $("#EpinkSoln").css({ left: 78 + '%', top: 16 + '%', width: 12 + '%', height: 64 + '%' });
                                    setTimeout(function () {
                                      $("#EblueSoln").css({ 'display': 'block' });
                                      $("#EpinkSoln").css({ 'display': 'none' });
                                      $("#scn2_hclDiv").animate({ deg: 0 },
                                        {
                                          duration: 2000,
                                          step: function (now) {
                                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                                            $("#scn2_hcl").show();
                                            $("#scn2_hclTilted").hide();
                                          }
                                        }
                                      );
                                      setTimeout(function () {
                                        $("#scn2_hclDiv").animate({ left: 81 + '%', top: 19 + '%', width: 18 + '%', height: 37 + '%' });
                                        help = 29;
                                        $("#scn2_hcl").css({ left: 8 + '%', top: 69 + '%', width: 84 + '%', height: 19 + '%' });
                                        $("#scn2_hclDiv").css({ 'cursor': 'default' });
                                        $('#scn2_hclDiv').draggable("disable")
                                        $("#inf2").css({ 'display': 'block' });
                                        $("#inf2").css({ 'cursor': 'pointer' });
                                        $("#sliderScn2c").val(0);
                                        $("#hc6").css({ 'display': 'none' })
                                      }, 2800);
                                    }, 4000)
                                  }, 1000)
                                }, 1500)
                              }, 2800);
                            }, 1000)
                          }, 1000)
                        }, 2800);
                      }, 1000)
                    }, 1000);
                  }, 1000);
                }, 3000);
              }, 1000)
            }, 1000)
          }, 2800);
        }, 1000);
      }, 1000);
    }
  });
}

// finite animation
function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
  for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length; ANIMATIONForloop++) {
    var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
    $("#" + ANIMATIONDivName).append($tempx2);
  }
}
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
  var GlobalVariable = 0;
  var ANIMATIONTimesReached = 0;
  var CLEARImageAnimation = setInterval(function () {
    $('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
    $('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
    GlobalVariable++;
    if (GlobalVariable == ANIMATIONImageArray.length) {
      $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
      $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
      if (ANIMATIONTimesReached >= ANIMATIONTimes) {
        $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
        // CLEARImageAnimation.clearInterval();
      }
      else {
        GlobalVariable = 0;
        ANIMATIONTimesReached++;
      }
    }
  }, ANIMATIONSpeed);
}