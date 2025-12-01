var temp = 0, count = 0, gt, c, ctx, showArr;
var inferenceMsg, helpMsg, helpMsg1, helpMsg2;
var selfInd = 0.95, chngeInCur = 215;
var material_index, wire_ctx, droped, wire_length, wire_anim;
var keyDrag = false; bulbFlag = false;
var oL, oT, pL, pT;
var mainWidth, mainHeight;
var ImageRrotate = [];
var showArr, glowing = false;
var infer = false;
var statusVariable = false;

$(window).resize(function () {
  setTimeout(function () {
    mainWidth = $("#mainDiv").width();
    mainHeight = $("#mainDiv").height();
    $("#connectionDrawing").css({ width: mainWidth, height: mainHeight });
    oL = $("#mainDiv").offset().left;
    pL = $("#mainDiv").position().left;
    oT = $("#mainDiv").offset().top;
    pT = $("#mainDiv").position().top;
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight;
  }, 1000);

})
var c, ctx;
$(document).ready(function () {
  mainWidth = $("#mainDiv").width();
  mainHeight = $("#mainDiv").height();
  $("#connectionDrawing").css({ width: mainWidth, height: mainHeight });

  oL = $("#mainDiv").offset().left;
  pL = $("#mainDiv").position().left;
  oT = $("#mainDiv").offset().top;
  pT = $("#mainDiv").position().top;
  c = document.getElementById("connectionDrawing");
  ctx = c.getContext("2d");
  ctx.canvas.width = ctx.canvas.clientWidth;
  ctx.canvas.height = ctx.canvas.clientHeight;
  var wire_c = document.getElementById("shunt_wire");
  wire_ctx = wire_c.getContext("2d");
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));

      $("#expName").html(gt.gettext("Induced emf in Inductive Circuit"))
      $("#text1").html(gt.gettext("Show/Hide the circuit diagram"))


  inferenceMsg = [gt.gettext("Induced emf in a coil depends upon<br>1. Self-inductance of coil<br>2. Change in current through the coil")];
  helparr = [
    ////13
    gt.gettext("Click on the check box to show/hide the circuit diagram"),
    gt.gettext("Drag and drop the wire from<br>the neon bulb towards<br>inductor"),
    gt.gettext("Drag and drop the wire from<br>the neon bulb towards<br>the inductor"),
    gt.gettext("Drag and drop the wire from the<br>inductor towards the left<br>side of the switch"),
    gt.gettext("Drag and drop the wire from<br>the inductor towards the negative<br>terminal of the battery"),
    gt.gettext("Drag and drop the wire from the<br>right side of the switch towards the<br>positive terminal of the battery"),
    gt.gettext("Select the Self-Inductance"),
    gt.gettext("Select the change in current"),
    gt.gettext("Drag and drop the key on to the switch"),
    gt.gettext("Drag and drop the key outside the switch"),
    gt.gettext("Click on the Show<br>Result button"),
    gt.gettext("Click on the inference button"),
    gt.gettext("Change the slider value and redo the experiment"),
    gt.gettext("Click on the reset button"),
    gt.gettext("Connect the apparatus by referring the circuit diagram")

  ]
  helpMsg2 = [gt.gettext("Drag and drop the <br>correct answer towards the<br> boxes given in the screen"), 
    gt.gettext("Click on the button for hint"), 
    gt.gettext("Click on the Reset button to redo the experiment again")];
  

	$('[data-translate]').html(function (index, originalHtml) {
    console.log(originalHtml);
    return gt.gettext(originalHtml);
  });

$('[data-translate-text]').each(function() {
    var originalText = $(this).text(); 
    var translatedText = gt.gettext(originalText);
    $(this).text(translatedText); 
    console.log(originalText + ' translated to ' + translatedText);
});

$('[data-translate-value]').val(function (index, originalVal) {
    return gt.gettext(originalVal);
});



  $("#selfInductance").attr("disabled", true);
  $("#changeInCurrent").attr("disabled", true);
  $('#check').prop('disabled', true)
  wire_ctx.lineWidth = 8;
  shunt_wire_color = '#C5876B';

  connectionWires = ['inductorSwitch', 'switchBattery', 'batteryInductor', 'bulbInductor', 'inductorBulb'];
  wireColor = "#000000";
  function initVariables() {
    material_index = 0;
    droped = false;
    wire_length = 300;
  }
  initVariables();
  connectorCall();
  showArr = 0;
  getProps("#mainDiv")

  $("#selfInductance").click(function () {
    showArr = 8;
    removeTrip();
  })
  $("#changeInCurrent").click(function () {
    showArr = 9;
    removeTrip();
  })
  $("#selfInductance").change(function () {
    showArr = 8;
    removeTrip();
  })
  $("#changeInCurrent").change(function () {
    showArr = 9;
    removeTrip();

  })
  $("#checkCir").click(function () {
    showArr = 1;
    removeTrip()
    if ($(this).is(":checked")) {
      $("#circuitDiagram").show();
      $("#key").css({ "z-index": "0" });
      $("#bulbLeft,#bulbRight,#inductLeft,#inductRight,#inductBulbLeft,#inductBulbRight,#switchLeft,#switchRight,#batPos,#batNeg").css({ "pointer-events": "none" })
    } else {
      $("#circuitDiagram").hide();
      showArr = 15;
      $("#key").css({ "z-index": "100" });
      $("#bulbLeft,#bulbRight,#inductLeft,#inductRight,#inductBulbLeft,#inductBulbRight,#switchLeft,#switchRight,#batPos,#batNeg").css({ "pointer-events": "auto" })
      removeTrip()
    }
  });

})
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function checkBoxClick() {
  glowing = false;
  setTimeout(function () {
    $('#check').prop('disabled', false)
  }, 6000)
  result();
  setTimeout(function () {
    $("#check").unbind().click(function () {
      showArr = 12
      setTimeout(function () {
        var topPos = $('#reset').offset().top;
        $('.control-div').scrollTop(topPos - 10);
      }, 1000)
      if ($(this).is(":checked")) {
        fetchData()
        $("#resultData").show();
        $(".rangeSlider,#key").css({ "cursor": "pointer" })

        removeTrip()
        $("#key").draggable("enable")

        $("#selfInductance").attr("disabled", false);
        $("#changeInCurrent").attr("disabled", false);
        $('#check').prop('disabled', true)
        setTimeout(function () {
          switchOff()

        }, 3000)
        $("#maskCircle").css({ "display": "none" })
        $("#inferenceImg").css({ "display": "block" })
      } else {
        $("#resultData").hide();
      }
    })
  }, 1000)
}
function disableDrop() {
  $("#selfInductance").attr("disabled", true);
  $("#changeInCurrent").attr("disabled", true);
}

function switchOff() {
  glowing = false;

  $("#key").css({ "cursor": "pointer" });

  $("#key").draggable(
    {
      containment: "#mainDiv",
      revert: "invalid",
      drag: function () {
        removeTrip();
        $("#bulb").css({ "display": "block" });
        $("#bulbLow,#bulbBright,#bulbMedium").css({ "display": "none" });
        $("#keyDropArea").css({ 'display': "block" })
      }

    })
  $("#keyDropArea").droppable(
    {
      accept: "#key",
      tolerance: "touch",
      drop: function () {
        removeTrip();
        showArr = 10;
        $("#key").css({ left: 18.4 + "%", top: 64.9 + "%" })
        $("#keyDropArea").css({ 'display': "none" })
        switchOn()
        checkBoxClick();
        disableDrop()
        $(".rangeSlider").css({ "cursor": "default" })
        $("#key").css({ "cursor": "pointer" });

        $("#maskCircle").css({ "display": "none" })
        $("#inferenceImg").css({ "display": "none" })
        $('#check').prop('checked', false);
        $("#resultData").hide();
        $("#keyOutArea,#keyOutArea1,#keyOutArea2,#keyOutArea3").css({ 'display': "block" })
      }
    })
}

function bulbGlow(val) {
  if (!statusVariable) {
    statusVariable = true;
    var emfGlow = selfInd * chngeInCur;
    if (val == 1) {
      bulbVal = 1;
    }
    else if (val == 2) {
      bulbVal = 2;
    }
    else {
      bulbVal = 3;
    }
    if (emfGlow >= 204 && emfGlow < 240) {
      bulbVal = 1;

      var blinkInterLow = setInterval(function () {
        $("#bulbLow1").css({ 'display': 'block' });

        $("#bulbLow1").fadeOut(150)
        $("#bulbLow2").fadeIn(200)
        $("#bulbLow2").fadeOut(200)
        $("#bulbLow1").fadeIn(250)
        $("#bulbLowMask1").fadeOut(2500)
        $("#bulbLowMask2").fadeIn(2550)
        $("#bulbLowMask2").fadeOut(2600)
        $("#bulbLowMask1").fadeIn(2650)

      }, 500);

      setTimeout(function () {
        clearInterval(blinkInterLow);
        statusVariable = false;
      }, 500)
    }

    else if (emfGlow >= 240 && emfGlow < 280) {
      bulbVal = 2;
      var blinkInterMed = setInterval(function () {
        $("#bulbMedium1").css({ 'display': 'block' });

        $("#bulbMedium1").fadeOut(150)
        $("#bulbMedium2").fadeIn(200)
        $("#bulbMedium2").fadeOut(200)
        $("#bulbMedium1").fadeIn(250)

        $("#bulbMediumMask1").fadeOut(2500)
        $("#bulbMediumMask2").fadeIn(2550)
        $("#bulbMediumMask2").fadeOut(2600)
        $("#bulbMediumMask1").fadeIn(2650)

      }, 500);

      setTimeout(function () {
        clearInterval(blinkInterMed);
        statusVariable = false;

      }, 500)
    }

    else {
      bulbVal = 3;
      var blinkInterBrig = setInterval(function () {
        $("#bulbBright1").css({ 'display': 'block' });
        $("#bulbBright1").fadeOut(150)
        $("#bulbBright2").fadeIn(200)
        $("#bulbBright2").fadeOut(200)
        $("#bulbBright1").fadeIn(250)

        $("#bulbBrightMask1").fadeOut(2500)
        $("#bulbBrightMask2").fadeIn(2550)
        $("#bulbBrightMask2").fadeOut(2600)
        $("#bulbBrightMask1").fadeIn(2650)

      }, 500);

      setTimeout(function () {
        clearInterval(blinkInterBrig);
        statusVariable = false;

      }, 500)

    }
  }
}
function switchOn() {
  $("#key").draggable(
    {
      containment: "#mainDiv",
      revert: "invalid",
      drag: function () {
        removeTrip();
      }

    })
  $("#keyOutArea,#keyOutArea1,#keyOutArea2,#keyOutArea3").droppable(
    {
      accept: "#key",
      tolerance: "touch",
      drop: function () {
        $("#maskCircle").css({ 'display': "block" })
        $("#key").css({ left: 38 + "%", top: 64 + "%" })
        $("#keyDropArea").css({ 'display': "block" })
        $("#keyOutArea,#keyOutArea1,#keyOutArea2,#keyOutArea3").css({ 'display': "none" })
        $("#key").draggable("disable")
        $("#key").css({ "cursor": "default" });
        $("#check").css({ "cursor": "pointer" });
        showArr = 11
        bulbGlow();
      }

    })
}

function connector(startPoint, endPoint, connector, wireColor) {
  var elemX, elemY
  $(startPoint).draggable({
    containment: "#mainDiv",
    revert: function (droped) {
      if (!droped) {
        ctx.clearRect(0, 0, mainWidth, mainHeight);
        elementX = getPercentageWRT(elemX, mainWidth);
        elementY = getPercentageWRT(elemY, mainHeight);
        elementX = precisionRound(elementX, 2)
        elementY = precisionRound(elementY, 2)
        $(startPoint).css({
          left: elementX + "%",
          top: elementY + "%"
        });
        removeTrip();

        $(endPoint).css({ opacity: 0 });
      }
    },
    start: function () {

      elemX = $(startPoint).position().left;
      elemY = $(startPoint).position().top;
      var elemWidth = $(startPoint).width() / 2;
      var elemHeight = $(startPoint).height() / 2;

      startX = elemX;
      startY = elemY;
      droperInitPos = $(startPoint).css("left");
      $(endPoint).css({ opacity: 0.5 });
    },
    stop: function () { },
    drag: function (e, ui) {
      elemXX = $(startPoint).position().left;
      elemYY = $(startPoint).position().top;
      var x = e.clientX - oL - pL;
      var y = e.clientY - oT - pT;
      mouseX = e.pageX - $(e.target).offset().left;
      mouseY = e.pageY - $(e.target).offset().top;;

      ctx.clearRect(0, 0, mainWidth, mainHeight);
      ctx.strokeStyle = wireColor;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  });
  $(endPoint).droppable({
    accept: startPoint,
    drop: function () {
      removeTrip();

      droped = true;
      count++;
      $(startPoint).css({
        left: $(endPoint).css("left"),
        top: $(endPoint).css("top")
      });
      if (count == 1) {
        showArr = 15;
      } else if (count == 2) {
        showArr = 15;
      }
      else if (count == 3) {
        showArr = 15;
      }
      else if (count == 4) {

        showArr = 15;
      }
      else if (count == 5) {
        showArr = 7;
        console.log("im 5")
      }
      else {
        console.log("im here")
        showArr = 0;
      }
      if (connectionWires.length == count) {
        // $("#key").draggable("enable")
        $("#selfInductance").attr("disabled", false);
        $("#changeInCurrent").attr("disabled", false);
        $('#check').prop('disabled', true)
        $(".rangeSlider").css({ "cursor": "pointer" })
        
        setTimeout(function () {
          switchOff()

        }, 3000)
        $("#checkCir").prop({ "disabled": true })
        $("#checkCir").css({ "cursor": "default" })

      }
      $(endPoint).draggable("disable");
      $(startPoint).draggable("disable");
      $(endPoint + "," + startPoint).css({ cursor: "default" });
      $(endPoint).hide();
      $(startPoint).hide();
      ctx.clearRect(0, 0, mainWidth, mainHeight);
      $(connector).show();
      droped = false;
      connectedWires = 0;
      for (i = 0; i < connectionWires.length; i++) {
        if ($("#" + connectionWires[i]).css("display") == "block") {
          connectedWires++;
        } else {
          break;
        }
      }
    }
  });
}
function connectorCall() {
  /////same point bulb inductor////////
  connector('#bulbLeft', '#inductBulbLeft', '#bulbLefInductLefWireMain', wireColor);
  connector('#inductBulbLeft', '#bulbLeft', '#bulbLefInductLefWireMain', wireColor);

  connector('#bulbRight', '#inductBulbRight', '#bulbRigInductRigWireMain', wireColor);
  connector('#inductBulbRight', '#bulbRight', '#bulbRigInductRigWireMain', wireColor);
  /////same point bulb inductor////////
  connector('#inductLeft', '#switchLeft', '#inducLefSwitchLefWireMain', wireColor);
  connector('#switchLeft', '#inductLeft', '#inducLefSwitchLefWireMain', wireColor);

  connector('#inductRight', '#batNeg', '#inducRigBatNegWireMain', wireColor);
  connector('#batNeg', '#inductRight', '#inducRigBatNegWireMain', wireColor);

  connector('#switchRight', '#batPos', '#switchRigBatPosWire', wireColor);
  connector('#batPos', '#switchRight', '#switchRigBatPosWire', wireColor);



}

function fetchData() {
  document.getElementById("resSelfInductance").innerHTML = selfInd;
  document.getElementById("resChangeInCurrent").innerHTML = chngeInCur;
}
function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
  for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length - 1; ANIMATIONForloop++) {
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
    if (GlobalVariable == ANIMATIONImageArray.length - 1) {
      $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
      $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
      if (ANIMATIONTimesReached >= ANIMATIONTimes) {
        $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
        CLEARImageAnimation.clearIntervel();
      }
      else {
        GlobalVariable = 0;
        ANIMATIONTimesReached++;
      }
    }
  }, ANIMATIONSpeed);
}


function valueofInductance() {
  removeTrip();
  var x = document.getElementById("selfInductance").value;
  document.getElementById("valueofInductance").innerHTML = x;
  selfInd = x;
  return x;
}
function valueofChangeInCurrent() {
  removeTrip();
  var x = document.getElementById("changeInCurrent").value;
  document.getElementById("valueofChangeInCurrent").innerHTML = x;
  chngeInCur = x;
  return x;
}

function result() {
  var emf = selfInd * chngeInCur;
  document.getElementById("valueEmf").innerHTML = emf.toFixed(2);

}
function removeTrip() {

  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;

  }
}

