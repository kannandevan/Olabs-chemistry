var dropbox;
var galvanometer,
  g,
  Ig,
  N = 30,
  V = 3,
  R,
  trip;
var droped = false,
  help_msg;
var sum = 0,
  connectedWires = 0;
var inputVal,
  helpcount = 0,
  page = 0,
  helpcount1 = 0,
  connectCount = false;
var a = [0, 0, 0, 0, 0, 0, 0, 0];
var success = "false";

$(document).ready(function () {
  gt = new Gettext({ domain: "messages" });
  $("[data-translate]").html(function (index, originalHtml) {
    return gt.gettext(originalHtml);
  });


  dropbox = [
    gt.gettext("Galvanometer 1"),
    gt.gettext("Galvanometer 2"),
    gt.gettext("Galvanometer 3"),
  ];
  galvanometer = [80, 100, 120];
  merit = [2, 1.89, 1.96];
  $("#olabmenuBar li:first-child a").html(gt.gettext("HELP"));
  document.getElementById("expName").innerHTML = gt.gettext( "Conversion of Galvanometer to Voltmeter");
  
  popup_msg = [
    "Deselect correct galvanometer resistance",
    "Resistance is correct",
  ];
  popup_msg = popup_msg.map((msg) => gt.gettext(msg));
  
  connectionWires = [
    "BatteryrightToKeyLeft",
    "BatteryleftToRheoLeft",
    "GleftToRhLeft",
    "VleftToRheoLeft",
    "GrightToResistLeft",
    "VrightToRheoTop",
    "RheoRightToKeyRight",
    "ResistRightToRheoTop",
  ];
  document.addEventListener(
    "dragstart",
    function (event) {
      event.dataTransfer.setDragImage(
        event.target,
        window.outerWidth,
        window.outerHeight
      );
    },
    false
  );

  help_msg = [
    "Select the galvanometer",
    "Calculate the resistance using the given <br> equation and type it on the textbox.",
    "Click on the Submit button to check<br> whether the answer is correct or not",
    "Click on the Next button",
    "Click to show circuit diagram",
    "Drag and connect each apparatus<br> as shown in the circuit diagram",
    "Deselect the correct resistance",
    "Click on the Insert Key button",
    "Change the rheostat slider",
    "Note the reading from galvanometer and voltmeter",
  ];

$("#insertKey").attr("value", gt.gettext("Insert Key"));
$("#resetBtn").attr("value",gt.gettext("Reset"))


  help_msg = help_msg.map((msg) => gt.gettext(msg));
  var c = document.getElementById("canvasConnection");
  var ctx = c.getContext("2d");
  dragDrop("#gMeterBlack", "#resistanceLeft", "#GrightToResistLeft");
  dragDrop("#vMeterRed", "#rheostatLeft", "#VleftToRheoLeft");
  dragDrop("#vMeterBlack", "#rheostatTop", "#VrightToRheoTop");
  dragDrop("#batteryRed", "#rheostatLeft1", "#BatteryleftToRheoLeft");
  dragDrop("#batteryBlack", "#keyLeft", "#BatteryrightToKeyLeft");
  dragDrop("#keyRight", "#rheostatRight", "#RheoRightToKeyRight");
  dragDrop("#rheostatRight", "#keyRight", "#RheoRightToKeyRight");
  dragDrop("#resistanceRight", "#rheostatTop1", "#ResistRightToRheoTop");
  dragDrop("#gMeterRed", "#rheostatLeft2", "#GleftToRhLeft");
  dragDrop("#resistanceLeft", "#gMeterBlack", "#GrightToResistLeft");
  dragDrop("#keyLeft", "#batteryBlack", "#BatteryrightToKeyLeft");

  function dragDrop(dragElement, dropArea, wire) {
    // connecting wires
    var elementStartLeft, elementStartTop;
    $(dragElement).draggable({
      containment: "#canvasBox",
      revert: function () {
        if (!droped) {
          ctx.clearRect(0, 0, 570, 345);
          $(dragElement).css({
            left: elementStartLeft + "+px",
            top: elementStartTop + "px",
          });
          $(dropArea).css({ opacity: 0 });
          return true;
        }
      },
      start: function () {
        elementStartLeft = $(dragElement).css("left");
        elementStartTop = $(dragElement).css("top");
        startLeft =
          parseInt(elementStartLeft.substring(0, elementStartLeft.length - 2)) /
            2 +
          parseInt(elementStartLeft.substring(0, elementStartLeft.length - 2)) /
            35 +
          7;
        startTop =
          parseInt(elementStartTop.substring(0, elementStartTop.length - 2)) /
            2 -
          parseInt(elementStartTop.substring(0, elementStartTop.length - 2)) /
            16 +
          5;
      },
      drag: function () {
        removeTrip();
        var elementStopLeft = $(dragElement).css("left");
        var elementStopTop = $(dragElement).css("top");
        mouseLeft =
          parseInt(elementStopLeft.substring(0, elementStopLeft.length - 2)) /
            2 +
          parseInt(elementStopLeft.substring(0, elementStopLeft.length - 2)) /
            35 +
          10;
        mouseTop =
          parseInt(elementStopTop.substring(0, elementStopTop.length - 2)) / 2 -
          parseInt(elementStopTop.substring(0, elementStopTop.length - 2)) /
            16 +
          8;
        ctx.clearRect(0, 0, 570, 345);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startLeft, startTop);
        ctx.lineTo(mouseLeft, mouseTop);
        ctx.stroke();
        $(dropArea).css({
          "background-color": " #060505",
          "border-radius": "50%",
          opacity: 1,
        });
      },
    });
    $(dropArea).droppable({
      accept: dragElement,
      drop: function () {
        droped = true;
        $(dragElement).draggable("disable");
        ctx.clearRect(0, 0, 570, 345);
        $(wire).show();
        droped = false;
        connectedWires++;
        checkResWire();
        if (connectionWires.length == connectedWires) {
          helpcount1 = 2;
          a[helpcount1 - 1] = 1;
        }
      },
    });
  }

  // Add values into dropdown list
  for (var i = 0; i < dropbox.length; i++) {
    $("<option/>").val(i).html(dropbox[i]).appendTo("#DropboxTest");
    g = $("#DropboxTest option:selected").val();
    calculationResistance(g);
  }
  $("#DropboxTest").change(function () {
    g = $("#DropboxTest option:selected").val();
    removeTrip();
    helpcount = 1;
    calculationResistance(g);
  });

  $("#resistanceTextbox").keyup(function () {
    /////////////////////removeAttr

    inputVal = $("#resistanceTextbox").val();
    if ($("#resistanceTextbox").val().length == 0) {
      //textbox empty
      submitclick();
      $("#correctImg").removeAttr("src");
    } else {
      removeTrip();
      helpcount = 2;
      $("#submitButton").css({ opacity: 1, cursor: "pointer" });
      $("#submitButton").click(function () {
        removeTrip();
        if (g == 0 && inputVal == Math.ceil(R)) {
          //R = 4920
          $("#nextButton").attr("src", simPath + "images/next.png");
          $("#resistanceTextbox").attr("disabled", "disabled");
          submitclick();
          helpcount = 3;
          $("#correctImg").attr("src", simPath + "images/correct.png");
        } else if (g == 1 && inputVal == Math.floor(R)) {
          //R = 5191
          $("#nextButton").attr("src", simPath + "images/next.png");
          $("#resistanceTextbox").attr("disabled", "disabled");
          submitclick();
          helpcount = 3;
          $("#correctImg").attr("src", simPath + "images/correct.png");
        } else if (g == 2 && inputVal == Math.floor(R)) {
          //R = 4982
          $("#nextButton").attr("src", simPath + "images/next.png");
          $("#resistanceTextbox").attr("disabled", "disabled");
          submitclick();
          helpcount = 3;
          $("#correctImg").attr("src", simPath + "images/correct.png");
        } else {
          helpcount = 2;

          $("#correctImg").attr("src", simPath + "images/wrong.png");
        }
      });
    }
  });

  $("#nextButton").click(function () {
    // next button
    page = 1;
    removeTrip();
    $("#Page2").show();
    $("#board").hide();
    $("#circuitBgDiv").hide();
    $(".res_value").prop("disabled", false);
    $("#DropboxTest").prop("disabled", true);
  });

  $(".res_value").change(function () {
    //combo box change

    if (!$(this).is(":checked")) {
      sum = parseFloat(sum) + parseFloat(this.value);
    } else {
      sum = parseFloat(sum) - parseFloat(this.value);
    }
    checkResistance();
    checkResWire();
  });

  $("#insertKey").click(function () {
    removeTrip();
    helpcount1 = 4;
    a[helpcount1 - 1] = 1;

    $("#key").animate({ top: "31.5%", left: "79%" });
    $("#rheoSlider").prop("disabled", false);
    $("#insertKey").prop("disabled", true);
  });
});
function submitclick() {
  $("#submitButton").unbind("click");
  $("#submitButton").css({ opacity: 0.4, cursor: "default" });
}
function checkResWire() {
  if (connectionWires.length == connectedWires) {
    $(".terminals").css({ cursor: "default" });
  }
  if (
    connectionWires.length == connectedWires &&
    ((sum == Math.ceil(R) && g == 0) ||
      (sum == Math.floor(R) && (g == 1 || g == 2)))
  ) {
    $("#insertKey").prop("disabled", false);
    a[2] = 1;
  } else {
    a[2] = 0;
    $("#insertKey").prop("disabled", true);
  }
}
function checkResistance() {
  if (sum == Math.ceil(R) && g == 0) {
    // galvanometer 1
    success = "true";
  } else if (sum == Math.floor(R) && (g == 1 || g == 2)) {
    // galvanometer 2 & 3
    success = "true";
  } else {
    success = "false";
  }
  if (success == "true") {
    //correct resistance
    removeTrip();
    helpcount1 = 3;
    a[helpcount1 - 1] = 1;
    $("#reskey1,#reskey7").animate({ top: "-18%" });
    $("#reskey10").animate({ left: "94%" });
    trip = new Trip([
      {
        sel: $("#resistance_frm"),
        position: "e",
        content: popup_msg[1],
        expose: false,
        delay: 1000,
      },
    ]);
  } else {
    //wrong resistance
    trip = new Trip([
      {
        sel: $("#resistance_frm"),
        position: "e",
        content: popup_msg[0],
        expose: false,
        delay: 1000,
      },
    ]);
  }
  trip.start();
  window.trip = trip;
}

function calculationResistance(g) {
  K = merit[g] * Math.pow(10, -5);
  G = galvanometer[g];
  $("#gReading").html(galvanometer[g]);
  $("#meritReading").html(merit[g]);
  Ig = N * K;
  R = V / Ig - G;
}

function ChangeRheostatValue(resistance) {
  $(".res_value").prop("disabled", true);
  helpcount1 = 5;
  a[helpcount1 - 1] = 1;
  removeTrip();
  var grotate = resistance * 2.96;
  var vrotate = -77 + resistance * 1 * 6.16;
  $("#rheostatSlider").css({ left: 34 + resistance * 1 + "%" }); // Rheostat Slider movement
  $("#Gneedle").css({ transform: "rotate(" + grotate + "deg)" }); //gneedle movement
  $("#Vneedle").css({ transform: "rotate(" + vrotate + "deg)" }); //vneedle movement
}
function showHidediagram(value) {
  helpcount1 = 1;
  a[helpcount1 - 1] = 1;
  removeTrip();
  if (value.checked) {
    $("#circuit_diagram").show();
  } else {
    $("#circuit_diagram").hide();
  }
}
function removeTrip() {
  if (tripClickFlag == true) {
    $(".trip-block").hide();
    trip.stop();
    tripClickFlag = false;
  }
}
