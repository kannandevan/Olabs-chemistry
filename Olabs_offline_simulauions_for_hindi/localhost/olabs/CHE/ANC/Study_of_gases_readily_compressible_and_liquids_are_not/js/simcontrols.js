var oilTemp = "false", airTemp = "false", waterTemp = "false";
var drag, drag2, drag3;
var ImageWatPul = [];
var ImageWatPush = [];
var ImageWatClo = [];
var ImageOilPull = [];
var ImageOC = [];
var ImageOilPush = [];
var ImageAirPull = [];
var ImageAirClose = [];
var ImageAirPush = [];
var help = 0;
var count = 0;
var dropdownValue = "Water";
$(document).ready(function () {
  for (wt = 0; wt < 30; wt++) {
    ImageWatPul[wt] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/WaterPulling/" + (wt + 1) + ".png"
  }
  for (ps = 0; ps < 39; ps++) {
    ImageWatPush[ps] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/WaterPushing/" + (ps + 1) + ".png"
  }
  for (wc = 0; wc < 12; wc++) {
    ImageWatClo[wc] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/WaterClosing/" + (wc + 1) + ".png"
  }
  for (op = 0; op < 30; op++) {
    ImageOilPull[op] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/OilPulling/" + (op + 1) + ".png"
  }
  for (oc = 0; oc < 12; oc++) {
    ImageOC[oc] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/OilClosing/" + (oc + 1) + ".png"
  }
  for (push = 0; push < 39; push++) {
    ImageOilPush[push] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/OilPushing/" + (push + 1) + ".png"
  }
  for (pl = 0; pl < 30; pl++) {
    ImageAirPull[pl] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/AirPulling/" + (pl + 1) + ".png"
  }
  for (ac = 0; ac < 12; ac++) {
    ImageAirClose[ac] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/AirClosing/" + (ac + 1) + ".png"
  }
  for (ap = 0; ap < 40; ap++) {
    ImageAirPush[ap] = "../CHE/ANC/Study_of_gases_readily_compressible_and_liquids_are_not/images/AirPushing/" + (ap + 1) + ".png"
  }
});

$(document).ready(function () {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("To show that Gases are readily Compressible and Liquids are not");
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  helpMsg = [gt.gettext("Click on the Next button"), gt.gettext("Select the Item <br>from dropdown"), gt.gettext('Drag and drop the<br> syringe towards the beaker<br> containing Water.'),
  gt.gettext("Click on the piston<br> of the syringe."), gt.gettext("Click on the piston<br> to push."), gt.gettext('Drag and drop the<br> syringe towards the beaker<br> containing Oil.'),
  gt.gettext("Click on the Syringe"), gt.gettext("Click on the Inference button"), gt.gettext("Click on the Reset button<br> to redo the experiment")]
  Inference_msg = [gt.gettext("The intermolecular space between gas particles is much larger than the<br> intermolecular space between liquid particles. Hence, gases are more<br> compressible, and liquids are not.")]


  $('[data-translate]').html(function (index, originalHtml) {
    // console.log(originalHtml);
    return gt.gettext(originalHtml);
  });
  $('[data-translate-value]').val(function (index, originalHtml) {
    console.log(originalHtml)
    return gt.gettext(originalHtml);
  });



  ImageInitLoad(ImageWatClo, "WaterClose", "Wclose", "wClosingAni")
  ImageInitLoad(ImageWatPul, "WaterPu", "pull", "wPulling")
  ImageInitLoad(ImageWatPush, "WaterPush", "push", "wPushing")
  ImageInitLoad(ImageOilPull, "OilPull", "Oil", "oPulling")
  ImageInitLoad(ImageOC, "OilClose", "oClose", "oCloseAni")
  ImageInitLoad(ImageOilPush, "OilPush", "oilSyn", "oPushAni")
  ImageInitLoad(ImageAirPull, "AirPull", "airPl", "airPullAni")
  ImageInitLoad(ImageAirClose, "AirClose", "airCl", "airCloseAni")
  ImageInitLoad(ImageAirPush, "AirPush", "airpus", "airPushAni")
  note()

  $("#dropdown").click(function () {
    removeTrip()
    if (dropdownValue == "Water") {
      help = 2;
    }
    else if (dropdownValue == "Oil") {
      help = 5;
    }
    else if (dropdownValue == "Air") {
      help = 8;
    }
  });

});

function note() {
  help = 0;
  $(".sim-controls").hide();
  $(".sim-div").css({ "width": "100%" });
  setTimeout(function () {
    $(".subButton").css({ 'display': 'block' });
  }, 2000);
  $(".subButton").click(function () {
    help = 1;
    removeTrip()
    waterComp()
    $("#dropdown").change(function () {
      removeTrip()
      dropdownValue = $('#dropdown option:selected').val();
      console.log(dropdownValue)
      if (dropdownValue == "Water") {
        waterComp();
        removeTrip()
        $("#syDiv1").css({ left: 56 + '%', top: 53 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + 0 + 'deg)' });
        $("#BeakerDiv").css({ left: 42 + '%', top: 38 + '%', height: 30 + '%', width: 14 + '%' });
      }
      else if (dropdownValue == "Oil") {
        oilComp();
        removeTrip()
        $("#syDiv2").css({ left: 56 + '%', top: 53 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + 0 + 'deg)' });
        $("#OilDiv").css({ left: 42 + '%', top: 38 + '%', height: 30 + '%', width: 14 + '%' });
      }
      else if (dropdownValue == "Air") {
        air();
        removeTrip()
        $("#syDiv3").css({ left: 43 + '%', top: 54 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + 0 + 'deg)' });
      }
    });
  });
}
function waterComp() {
  $('.WaterPush,.WaterPu').css({ 'display': 'none' });
  $("#water2").on("click");
  $("#info").css({ 'display': 'none' });
  $('#syDiv1').draggable("enable")
  $("#water").css({ left: 15 + '%', top: 27 + '%', height: 64 + '%', width: 73 + '%' });
  $("#dropArea1,#syDiv1,#Syringelabel,#helpDiv1,#pistonClick1").css({ 'display': 'block' });
  $("#two,#three,#water2,#Zoomwater1").css({ 'display': 'none' });
  $(".subButton,#noteDiv,#bg").css({ 'display': 'none' });
  $(".sim-controls,#one,#bg1").show();
  $('#syDiv1').css('cursor', 'pointer');
  $('#syDiv1').draggable({
    containment: "#bg1",
    revert: function (drag) {
      if (!drag) {
        $(this).animate({
          top: "53%",
          left: "56%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#dropArea1").droppable({
    accept: "#syDiv1",
    drop: function () {
      $("#dropdown").prop("disabled", true);   // disable dropdown
      drag = true
      help = 3;
      removeTrip();
      count++;
      // oilTemp="false", airTemp="false",waterTemp="false";
      waterTemp = "true";
      console.log(count)
      $("#syDiv1").css({ left: 41 + '%', top: 32 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + -90 + 'deg)' });
      $("#Syringelabel").css({ 'display': 'none' });
      $("#dropArea1").css({ 'display': 'none' });
      $('#syDiv1').css('cursor', 'default');
      $('#syDiv1').draggable("disable")
      $('#piston1').css('cursor', 'pointer');
      $('#piston1').parent().css('z-index', 3000);
      $("#piston1").click(function () {
        removeTrip();
        $('#syDiv1,.WaterPu').css({ 'display': 'none' });
        $('.WaterPu').css({ 'display': 'block' });
        ImageAnimationOneTime("wPulling", "pull", ImageWatPul, 100, 0)
        setTimeout(function () {
          $('#Zoomwater1 ').css({ 'display': 'block' });
          $('#Zoomwater1 ').css({ left: 13 + '%', top: 14 + '%', height: 43 + '%', width: 27 + '%' });
        }, 3000);
        setTimeout(function () {
          $('#water').css({ left: 15 + '%', top: 39 + '%', height: 50 + '%', width: 73 + '%' });
        }, 2000);
        setTimeout(function () {
          $('#water1').css({ 'display': 'block' });
          $('#water1').delay(1000).animate({ left: 53 + '%', top: 4 + '%', height: 53 + '%', width: 22 + '%' });
          setTimeout(function () {
            $('#water1,#Zoomwater1').css({ 'display': 'none' });
            ImageAnimationOneTime("wClosingAni", "Wclose", ImageWatClo, 100, 0)
            setTimeout(function () {
              help = 4;
              removeTrip();
              $('#water2,#pistonClick1').css({ 'display': 'block' });
              $('#pistonClick1').css('cursor', 'pointer');
              $('#pistonClick1').click(function () {
                $('#water2,#pistonClick1').css({ 'display': 'none' });
                $('#water2').css('cursor', 'default');
                $('.WaterPush').css({ 'display': 'block' });
                ImageAnimationOneTime("wPushing", "push", ImageWatPush, 100, 0)
                setTimeout(function () {
                  help = 1;
                  removeTrip();
                  $('#water2').css({ 'display': 'block' });
                  $('#Zoomwater1 ').css({ 'display': 'block' });
                  $('#Zoomwater1 ').css({ left: 72 + '%', top: 6 + '%', height: 43 + '%', width: 27 + '%' });
                  $("#dropdown").prop("disabled", false);
                  $("#water2").off("click");
                  setTimeout(function () {
                    if ((oilTemp == "true") && (airTemp == "true") && (waterTemp == "true")) {
                      help = 11;
                      $('#info').css('cursor', 'pointer');
                      $("#info").css({ 'display': 'block' });
                      $("#dropdown").prop("disabled", true);
                    }
                  }, 1700)
                }, 3700);
              });
            }, 1200);
          }, 2000);
        }, 3000);
      });
    }
  })

}
function oilComp() {
  $("#OIL2").on("click");
  $("#info").css({ 'display': 'none' });
  $('#syDiv2').draggable("enable")
  $("#oil").css({ left: 15 + '%', top: 28 + '%', height: 64 + '%', width: 73 + '%' });
  $("#dropArea2,#syDiv2,#Syringelabel2,#helpDiv2,#pistonClick2").css({ 'display': 'block' });
  $("#one,#three,#OIL2,#ZoomOil").css({ 'display': 'none' });
  $("#two").css({ 'display': 'block' });
  $('#syDiv2').css('cursor', 'pointer');
  $('#syDiv2').draggable({
    containment: "#bg1",
    revert: function (drag2) {
      if (!drag2) {
        $(this).animate({
          top: "53%",
          left: "56%",
        })
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#dropArea2").droppable({
    accept: "#syDiv2",
    drop: function () {
      $("#dropdown").prop("disabled", true);
      drag2 = true
      help = 6;
      removeTrip();
      count++;
      oilTemp = "true";
      console.log(count)
      $("#syDiv2").css({ left: 41 + '%', top: 32 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + -90 + 'deg)' });
      $("#dropArea2,#Syringelabel2").css({ 'display': 'none' });
      $('#syDiv2').css('cursor', 'default');
      $('#piston2').css('cursor', 'pointer');
      $('#syDiv2').draggable("disable")
      $('#piston2').parent().css('z-index', 3000);
      $("#piston2").click(function () {
        removeTrip();
        $('#syDiv2').css({ 'display': 'none' });
        ImageAnimationOneTime("oPulling", "Oil", ImageOilPull, 100, 0)
        setTimeout(function () {
          $('#ZoomOil').css({ 'display': 'block' });
          $('#ZoomOil').css({ left: 13 + '%', top: 14 + '%', height: 43 + '%', width: 27 + '%' });
        }, 3000);
        setTimeout(function () {
          removeTrip();
          $('#oil').css({ left: 15 + '%', top: 39 + '%', height: 50 + '%', width: 73 + '%' });
        }, 2000);
        setTimeout(function () {
          removeTrip();
          $('#OIL1').css({ 'display': 'block' });
          $('#OIL1').delay(1000).animate({ left: 53 + '%', top: 4 + '%', height: 53 + '%', width: 22 + '%' });
          setTimeout(function () {
            removeTrip();
            $('#ZoomOil,#OIL1').css({ 'display': 'none' });
            ImageAnimationOneTime("oCloseAni", "oClose", ImageOC, 100, 0)
            setTimeout(function () {
              help = 7;
              removeTrip();
              $('#OIL2,#pistonClick2').css({ 'display': 'block' });
              $('#pistonClick2').css('cursor', 'pointer');
              $('#pistonClick2').click(function () {
                $('#OIL2').css('cursor', 'default');
                $('#OIL2,#pistonClick2').css({ 'display': 'none' });
                ImageAnimationOneTime("oPushAni", "oilSyn", ImageOilPush, 100, 0)
                setTimeout(function () {
                  help = 1;
                  removeTrip();
                  $('#OIL2').css({ 'display': 'block' });
                  $('#ZoomOil ').css({ 'display': 'block' });
                  $('#ZoomOil ').css({ left: 72 + '%', top: 6 + '%', height: 43 + '%', width: 27 + '%' });
                  $("#dropdown").prop("disabled", false);
                  $("#OIL2").off("click");
                  setTimeout(function () {
                    if ((oilTemp == "true") && (airTemp == "true") && (waterTemp == "true")) {
                      help = 11;
                      $('#info').css('cursor', 'pointer');
                      $("#info").css({ 'display': 'block' });
                      $("#dropdown").prop("disabled", true);
                    }
                  }, 1700)
                }, 3700);
              });
            }, 1200);
          }, 2000);
        }, 3000);
      });
    }
  })
}
function air() {
  $("#AIR2").on("click");
  count++;
  console.log(count)
  $("#info").css({ 'display': 'none' });
  removeTrip();
  $('#syDiv3').draggable("enable")
  $("#one,#two,#ZoomAir_5,#AIR2").css({ 'display': 'none' });
  $("#three,#dropArea3,#Syringelabel3,#syDiv3,#helpDiv3,#pistonClick3").css({ 'display': 'block' });
  $('#syDiv3').css('cursor', 'pointer');
  $("#syDiv3").click(function () {
    airTemp = "true";
    help = 9;
    removeTrip();
    $("#dropdown").prop("disabled", true);
    $("#syDiv3").css({ left: 41 + '%', top: 28 + '%', height: 18 + '%', width: 17 + '%', transform: 'rotate(' + -90 + 'deg)' });
    $("#dropArea3,#Syringelabel3").css({ 'display': 'none' });
    $('#syDiv3').css('cursor', 'default');
    $('#piston3').css('cursor', 'pointer');
    $('#syDiv3').draggable("disable")
    $('#piston3').parent().css('z-index', 3000);
    $("#piston3").click(function () {
      $('#syDiv3').css({ 'display': 'none' });
      ImageAnimationOneTime("airPullAni", "airPl", ImageAirPull, 100, 0)
      setTimeout(function () {
        $('#ZoomAir').css({ 'display': 'block' });
        $('#ZoomAir').css({ left: 13 + '%', top: 14 + '%', height: 43 + '%', width: 27 + '%' });
      }, 3000);
      setTimeout(function () {
        $('#AIR1').css({ 'display': 'block' });
        setTimeout(function () {
          $('#ZoomAir,#AIR1').css({ 'display': 'none' });
          ImageAnimationOneTime("airCloseAni", "airCl", ImageAirClose, 100, 0)
          setTimeout(function () {
            help = 10;
            $('#AIR2,#pistonClick3').css({ 'display': 'block' });
            $('#pistonClick3').css('cursor', 'pointer');
            $('#pistonClick3').click(function () {
              $('#pistonClick3').css('cursor', 'default');
              $('#AIR2,#pistonClick3').css({ 'display': 'none' });
              ImageAnimationOneTime("airPushAni", "airpus", ImageAirPush, 150, 0)
              setTimeout(function () {
                help = 1;
                $('#AIR2').css({ 'display': 'block' });
                $('#ZoomAir_5 ').css({ 'display': 'block' });
                $('#ZoomAir_5 ').css({ left: 66 + '%', top: 17 + '%', height: 39 + '%', width: 22 + '%' });
                $("#dropdown").prop("disabled", false);
                $("#AIR2").off("click");
                setTimeout(function () {
                  if ((oilTemp == "true") && (airTemp == "true") && (waterTemp == "true")) {
                    help = 11;
                    $('#info').css('cursor', 'pointer');
                    $("#info").css({ 'display': 'block' });
                    $("#dropdown").prop("disabled", true);
                  }
                }, 1800)
              }, 5900);
            });
          }, 1200);
        }, 2000);
      }, 3000);
    });
  });
}
function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    //trip.stop();
    tripClickFlag = false;
  }
}

// finite animation
function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
  for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length; ANIMATIONForloop++) {
    var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
    $("#" + ANIMATIONDivName).append($tempx2);
  }
}
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
  removeTrip();
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