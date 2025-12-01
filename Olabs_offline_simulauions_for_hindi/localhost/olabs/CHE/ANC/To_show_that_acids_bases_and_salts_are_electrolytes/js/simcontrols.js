var displayArray, gt, c, ctx;

var count = 0;
var material_index, wire_ctx, droped, wire_length, wire_anim;

var dragFlag = false;
var dragNail = false;
var help=0;
var drag, drag1, drag2, drag3, drag4, drag5, drag6, drag7, drag8, drag9;


$(window).on('load',function() {

  var c = document.getElementById("connectionDrawing");
  var wire_c = document.getElementById("shunt_wire");
  ctx = c.getContext("2d");
  wire_ctx = wire_c.getContext("2d");
  wire_ctx.lineWidth = 8;
  shunt_wire_color = '#00000';
  connectionWires = ['nail_battery', 'battery_bulb', 'bulb_switch', 'switch_nail'];
  //console.log(connectionWires.length);
  wireColor = "00000";

  function initVariables() {
    material_index = 0;
    droped = false;
    wire_length = 300;
  }
  initVariables();


  $(document).ready(function () {

    gt = new Gettext({ 'domain': 'messages' });
    $("#expName").html(gt.gettext("Show that Acids, Bases, and Salts are Electrolytes"));
    $("#instruction").html(gt.gettext("<u><b>Instructions:</b></u>"));
    $("#instructionfig2").html(gt.gettext("<u><b>Instructions:</b></u>"));
    $("#text_1").html(gt.gettext("1. Question and answer &nbsp;&nbsp;&nbsp;&nbsp;session, Click correct answer."));
    $("#text_2").html(gt.gettext("2. Drag and drop the dropper &nbsp;&nbsp;&nbsp;&nbsp;containing HCl into the &nbsp;&nbsp;&nbsp;&nbsp;beaker A containing water."));
    $("#text_3").html(gt.gettext("3. Drag and drop the watchglass &nbsp;&nbsp;&nbsp;&nbsp;containing Sodium Hydroxide &nbsp;&nbsp;&nbsp;&nbsp;into the beaker B."));
    $("#text_4").html(gt.gettext("4. Drag and drop the watchglass &nbsp;&nbsp;&nbsp;containing Sodium Chloride salt &nbsp;&nbsp;&nbsp;&nbsp;into the beaker C."));  
    $("#text_5").html(gt.gettext("5. Click on the Next button."));
    //  Need to update in po file
    $("#text_6").html(gt.gettext("&nbsp;&nbsp;1. Drag and drop iron nails on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rubber cork."));
    $("#text_7").html(gt.gettext("&nbsp;&nbsp;2. Drag the wire from the iron &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nail to the 6V positive terminal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the battery in the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlighted area."));
    $("#text_8").html(gt.gettext("&nbsp;&nbsp;3. Drag wire from the 6V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;negative terminal of the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;battery to the bulb in the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;highlighted area."));
    $("#text_9").html(gt.gettext("&nbsp;&nbsp;4. Drag the wire from the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bulb to the plug key holder &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the highlighted area."));
    $("#text_10").html(gt.gettext("&nbsp;&nbsp;5. Drag wire from the iron &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nail to the plug key holder &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the highlighted area."));
    $("#text_11").html(gt.gettext("&nbsp;&nbsp;6. Drag and drop plug key on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plug key holder."));
    $("#text_12").html(gt.gettext("&nbsp;&nbsp;7. Click on the Next button."));
    $("#instructionfig3").html(gt.gettext("<u><b>Instructions:</b></u>"));
    $("#text_13").html(gt.gettext("&nbsp;&nbsp;1.Drag and drop plug key on &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plug key holder. "));
    $("#text_14").html(gt.gettext("&nbsp;&nbsp;2. Click on the Next button."));
    $("#instructionfig4").html(gt.gettext("<u><b>Instructions:</b></u>"));
    $("#text_15").html(gt.gettext("&nbsp;&nbsp;1.Time to think."));
    $("#nameTagHCl").html(gt.gettext("HCl"));
    $("#nameTagSH").html(gt.gettext("Sodium Hydroxide"));
    $("#nameTagSC").html(gt.gettext("Sodium Chloride"));
    $("#nextFigure2").html(gt.gettext("<span>Next</span>"));
    $(".showNote2").html(gt.gettext("Show circuit diagram"));
    $("#text").html(gt.gettext("Circuit is right, do the experiment."));
    $("#text1").html(gt.gettext("Hide circuit diagram"));
    $("#nextFigure3").html(gt.gettext("<span>Next</span>"));
    $(".showNote3").html(gt.gettext("Note down the observation,<br> In beaker A the bulb glows."));
    $("#nextFigure4").html(gt.gettext("<span>Next</span>"));
    $(".showNote4").html(gt.gettext("Note down the observation,<br> In beaker B the bulb glows."));
    $("#nextFigure5").html(gt.gettext("<span>Next</span>"));
    $(".showNote5").html(gt.gettext("Note down the observation,<br> In beaker C the bulb glows."));
    $("#nextFigure6").html(gt.gettext("<span>Next</span>"));
    $(".showNote6").html(gt.gettext("Note down the observation,<br> In beaker D the bulb does not glow."));
    $("#nextFigure7").html(gt.gettext("<span>Next</span>"));
    $(".showNote").html(gt.gettext("<u>Time to think?:</u><br>After this experiment, you found that the solution in A, B, and C conducts electricity, and the solution in D does not. So, what will be the reason why Beaker A, B, and C conduct and D does not? <br>Note down your answer."));
    $(".showNote1").html(gt.gettext("<u>Chemistry Behind the reaction:</u><br>Electrolytes are substances that produce ions when dissolved in water. Because they all produce ions when dissolved in water, they can be classified as acids, bases, or salts. Because of the mobility of the positive and negative ions, known as cations and anions, these solutions transmit electricity.Infer from the observations that acids, bases and salts are electrolytes<br>The following dissociation reactions:.<br>HCl <sub>(aq)</sub> → H+ <sub>(aq)</sub> + Cl- <sub>(aq)</sub><br>NaOH <sub>(aq)</sub> → Na+<sub>(aq)</sub> + OH- <sub>(aq)</sub><br>NaCl <sub>(aq)</sub> → Na+ <sub>(aq)</sub> + Cl-<sub>(aq)</sub>"));


    

    document.getElementById("expName").innerHTML = gt.gettext("Show that Acids, Bases, and Salts are Electrolytes");
    $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
    displayArray = ['block', 'none'];
    helpMsg = [
      gt.gettext("Choose the correct answer"),
      gt.gettext("Drag and drop the dropper containing<br> HCl into the beaker A containing water"),
      gt.gettext("Drag and drop the watchglass containing<br> Sodium Hydroxide into the beaker B"),
      gt.gettext("Drag and drop the watchglass<br> containing Sodium Chloride<br> salt into the beaker C"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Click on the check box<br> to show the circuit diagram"),
      gt.gettext("Drag and drop iron nails on rubber cork"),
      gt.gettext("Drag the wire from the iron nail<br> to the 6V positive terminal of the<br> battery in the highlighted area"),
      gt.gettext("Click on the check box<br> to hide the circuit diagram"),
      gt.gettext("Drag wire from the 6V negative<br> terminal of the battery to the<br> bulb in the highlighted area"),
      gt.gettext("Drag the wire from the bulb<br> to the plug key holder<br> in the highlighted area"),
      gt.gettext("Drag wire from the iron nail<br> to the plug key holder in<br> the highlighted area"),
      gt.gettext("Drag and drop plug<br> key on plug key holder"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Drag and drop plug<br> key on plug key holder"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Drag and drop plug<br> key on plug key holder"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Choose the correct answer"),
      gt.gettext("Drag and drop plug<br> key on plug key holder"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Drag and drop plug<br> key on plug key holder"),
      gt.gettext("Click on the Next button"),
      gt.gettext("Click on the Reset button to do the experiment again"),
      ];
    // help=0;
    removeTrip();
    QuizCoreExecuter(1,gt.gettext("Suppose you are asked to check the electrical conductivity of deionised water, and while doing this experiment, what will be the possible result?")
    ,gt.gettext("Bulb glows and fades"),gt.gettext("Bulb does not glow"),gt.gettext("Bulb glows"),'null',gt.gettext("Bulb does not glow"),1,2)

    hclDrop();
    figure2();
    figure3();
    figure4();
    figure5();
    figure6();
    figure7();
    figure8();

    $("#reset,#resetfig2,#resetfig3").click(function () {
      window.location.reload();
    });
  });
});


function hclDrop() {
  help=0;
  removeTrip();
  $("#dropperWithHCLLiq").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag) {
          return true
        }
      }
    });
  $("#beakerADrop").droppable({
    accept: "#dropperWithHCLLiq",
    drop: function () {
      drag = true;
      removeTrip();
      $("#dropperWithHCLLiq").css({ top: 20 + 'px', left: 50 + 'px' });
      setTimeout(function () {
        drag = false;
      }, 100)
      for (i = 0; i < 5; i++) {
        $("#drop1").show();
        $("#drop1").animate({ top: 211 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#drop1").animate({ top: 110 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#drop1").hide();
        }, 1200)
        $("#dropperLiquidHCL").fadeOut(2500);
        setTimeout(function () {
          $("#dropperWithHCLLiq").animate({ top: 106 + 'px', left: 496 + 'px' });
          setTimeout(function () {
            $("#dropperLiquidHCL").fadeIn();
          }, 300);
          $("#dropperWithHCLLiq").css('pointer-events', 'none');
        }, 2000);
        setTimeout(function () {
          sodiumHyDrop();
        }, 2500);
      }
    }
  })
}
function sodiumHyDrop() {
  help=2;
  removeTrip();
  $("#watchhydroxide").css('cursor', 'pointer');
  $("#watchhydroxide").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag1) {
          return true
        }
      }
    });
  $("#beakerBDrop").droppable({
    accept: "#watchhydroxide",
    drop: function () {
      drag1 = true;
      removeTrip();
      $("#watchhydroxide").css({ top: 50 + 'px', left: 160 + 'px' });
      setTimeout(function () {
        drag1 = false;
      }, 100)
      $("#watchhydroxide").css({ transform: 'rotate(' + 330 + 'deg)' });
      $("#sodiHydroxide").fadeOut();
      $("#sodiHydroxideTip").fadeIn();
      for (i = 0; i < 3; i++) {
        $("#powderpour").show();
        $("#powderpour").animate({ top: 135 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#powderpour").animate({ top: 95 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#powderpour").hide();
        }, 1200)
        $("#sodiHydroxideBeaker").fadeIn(2500); sodichlorideBeaker
        $("#sodiHydroxideTip").fadeOut(1000);
        setTimeout(function () {
          $("#watchhydroxide").css({ top: 255 + 'px', left: 300 + 'px' });
          $("#watchhydroxide").css({ transform: 'rotate(' + 0 + 'deg)' });
        }, 1200)
        setTimeout(function () {
          $("#sodiHydroxideBeaker").fadeOut(2500);
        }, 1200)
        $("#watchhydroxide").css('pointer-events', 'none');
        setTimeout(function () {
          sodiChlorideDrop();
        }, 800)
      }
    }
  })
}
function sodiChlorideDrop() {
  help=3;
  removeTrip();
  $("#watchchloride").css('cursor', 'pointer');
  $("#watchchloride").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag2) {
          return true
        }
      }
    });
  $("#beakerCDrop").droppable({
    accept: "#watchchloride",
    drop: function () {
      drag2 = true;
      removeTrip();
      $("#watchchloride").css({ top: 50 + 'px', left: 285 + 'px' });
      setTimeout(function () {
        drag2 = false;
      }, 100)
      $("#watchchloride").css({ top: 50 + 'px', left: 280 + 'px' });
      setTimeout(function () {
        drag1 = false;
      }, 100)
      $("#watchchloride").css({ transform: 'rotate(' + 330 + 'deg)' });
      $("#sodichloride").fadeOut();
      $("#sodichlorideTip").fadeIn();

      for (i = 0; i < 3; i++) {
        $("#powderpour1").show();
        $("#powderpour1").animate({ top: 135 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#powderpour1").animate({ top: 95 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#powderpour1").hide();
        }, 1200)
        $("#sodichlorideBeaker").fadeIn(2500);
        $("#sodichlorideTip").fadeOut(1000);
        setTimeout(function () {
          $("#watchchloride").css({ top: 257 + 'px', left: 437 + 'px' });
          $("#watchchloride").css({ transform: 'rotate(' + 0 + 'deg)' });
        }, 1200)
        setTimeout(function () {
          $("#sodichlorideBeaker").fadeOut(2500);
        }, 1200)
        $("#watchchloride").css('pointer-events', 'none');
        setTimeout(function () {
          help=4;
          removeTrip();
          $("#nextFigure2").fadeIn(1500);
        }, 1200)
      }
    }
  })
}
function nailDrop() {
  $("#nail1").css('cursor', 'pointer');
  $("#nail1").draggable({
    containment: "#bg1",
    revert: function (drag3) {
    if (!drag3) {
      $(this).animate({
        top: "240px", left: "181px", 
      })}},
    drag: function () {removeTrip()}
  });
  $("#nail1DropDiv").droppable({
    accept: "#nail1",
    drop: function () {
      drag3 = true;
      $("#nail1").css({ top: 200 + 'px', left: 78 + 'px', width: 45 + 'px', transform: 'rotate(' + 0 + 'deg)' });
      setTimeout(function () {
        drag3 = false;
      }, 100)
      $("#nail1DropDiv").hide();
      $("#nail1").css('pointer-events', 'none');
      help=7;
      removeTrip();
      connectorCall();
      //drawWire(shunt_wire_color[material_index], 300);
    }
  })
}
function keyDropA() {
  $("#keyA").css('cursor', 'pointer');
  $("#keyA").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag6) {
          return true
        }
      }
    });
  $("#keyDropADiv").droppable({
    accept: "#keyA",
    drop: function () {
      drag6 = true;
      removeTrip();
      $("#keyA").css({ top: 248 + 'px', left: 402.5 + 'px' });
      $("#lightA").fadeIn(1500);
      setTimeout(function () {
        drag6 = false;
      }, 100)
      $("#keyA").css('pointer-events', 'none');
      $("#Note3").fadeIn(1500);
      help=15;
      removeTrip();
      $("#nextFigure4").delay(2000).fadeIn(1500);
    }
  })
}
function keyDropB() {
  $("#keyB").css('cursor', 'pointer');
  $("#keyB").draggable({ containment: "#bg3" },
    {
      revert: function () {
        if (!drag7) {
          return true
        }
      }
    });
  $("#keyDropBDiv").droppable({
    accept: "#keyB",
    drop: function () {
      drag7 = true;
      removeTrip();
      $("#keyB").css({ top: 248 + 'px', left: 402.5 + 'px' });
      $("#lightB").fadeIn(1500);
      setTimeout(function () {
        drag7 = false;
      }, 100)
      $("#keyB").css('pointer-events', 'none');
      $("#Note4").fadeIn(1500);
      help=17;
      removeTrip();
      $("#nextFigure5").delay(2000).fadeIn(2000);
    }
  })
}
function keyDropC() {
  $("#keyC").css('cursor', 'pointer');
  $("#keyC").draggable({ containment: "#bg4" },
    {
      revert: function () {
        if (!drag8) {
          return true
        }
      }
    });
  $("#keyDropCDiv").droppable({
    accept: "#keyC",
    drop: function () {
      drag8 = true;
      removeTrip();
      $("#keyC").css({ top: 248 + 'px', left: 402.5 + 'px' });
      $("#lightC").fadeIn(1500);
      setTimeout(function () {
        drag8 = false;
      }, 100)
      $("#keyC").css('pointer-events', 'none');
      $("#Note5").fadeIn(1500);
      help=20;
      removeTrip();
      $("#nextFigure6").delay(2000).fadeIn(2000);
    }
  })
}
function keyDropD() {
  $("#keyD").css('cursor', 'pointer');
  $("#keyD").draggable({ containment: "#bg5" },
    {
      revert: function () {
        if (!drag9) {
          return true
        }
      }
    });
  $("#keyDropDDiv").droppable({
    accept: "#keyD",
    drop: function () {
      drag9 = true;
      removeTrip();
      $("#keyD").css({ top: 248 + 'px', left: 402.5 + 'px' });
      //$("#lightC").fadeIn(1500);
      setTimeout(function () {
        drag9 = false;
      }, 100)
      $("#keyD").css('pointer-events', 'none');
      $("#Note6").fadeIn(1500);
      help=22;
      removeTrip();
      $("#nextFigure7").delay(2000).fadeIn(2000);
    }
  })
}

function chckBoxShowHide() {
  $("#check").click(function () {
    help=6;
    removeTrip();
    if ($(this).is(":checked")) {
      $("#circuitDiagram").show();
      $("#text1").show();
      help=8;
      removeTrip();
      $("#circutImgs").hide();
      $("#text").hide();
      //showArr = 5;
      // removeTrip()

    } else {
      //showArr = 0;
      $("#text").css("color", "black");
      $("#check,#text").css('pointer-events', 'none');
      $("#check,#text1").hide();
      $("#circuitDiagram").hide();
      $("#circutImgs").show();
    }
  });
}

function figure2() {
  $("#nextFigure2").click(function () {
    help=5;
    removeTrip();
    $("#figure1,#reset").hide();

    $("#canFigure2").show();

    $("#instrDiv").hide();
    $("#instrDivfig2,#resetfig2").show();
    chckBoxShowHide();
    nailDrop();
  });
}
function figure3() {

  $("#nextFigure3").click(function () {
    $("#canFigure2,#resetfig2").hide();
    $("#canFigure3").show();
    $("#instrDivfig2").hide();
    $("#instrDivfig3,#resetfig3").show();
    help=14;
    removeTrip();
    keyDropA();
  });
}
function figure4() {
  $("#nextFigure4").click(function () {
    $("#canFigure3").hide();
    $("#canFigure4").show();
    help=16;
    removeTrip();
    keyDropB()
  });
}
function figure5() {
  $("#nextFigure5").click(function () {
    //help=18;
    removeTrip();
    QuizCoreExecuter(2, gt.gettext("In this experiment, you are using a sodium hydroxide solution. What will happen when you use the same sodium hydroxide in its solid form? Will it conduct electricity?")
      , gt.gettext("Yes"), gt.gettext("No"), 'null', 'null', gt.gettext("No"), 2, 2)

    $("#canFigure4").hide();
    $("#canFigure5").show();
    help=18;
    removeTrip();
    keyDropC()
  });
}
function figure6() {
  $("#nextFigure6").click(function () {
    $("#canFigure5").hide();
    $("#canFigure6").show();
    keyDropC()
  });
}
function figure7() {
  $("#nextFigure6").click(function () {
    $("#canFigure5").hide();
    $("#canFigure6").show();
    help=21;
    removeTrip();
    keyDropD()
  });
}
function figure8() {
  $("#nextFigure7").click(function () {
    $("#canFigure6").hide();
    $("#canFigure7").show();
    $("#instrDivfig3").hide();
    $("#Note").fadeIn(500);
    //$("#think").fadeIn(500);

    setTimeout(function () {
    $("#Note").fadeOut(500);
      //$("#think").fadeOut(500);
    }, 10000)
    setTimeout(function () {
    $("#Note1").fadeIn(500);
    help=23;
    removeTrip();
    }, 8000)

    $("#instrDivfig4,#resetfig3").show();
  });
}
function connectorCall() {
  connector('#NailTop', '#batteryBegin', '#nailToBatteryTop', wireColor);
  connector('#batteryBegin', '#NailTop', '#nailToBatteryTop', wireColor);
  connector('#batteryEnd', '#bulbRight', '#batteryToBulb', wireColor);
  connector('#bulbRight', '#batteryEnd', '#batteryToBulb', wireColor);
  connector('#bulbLeft', '#switchRight', '#wireBulbRightKey', wireColor);
  connector('#switchRight', '#bulbLeft', '#wireBulbRightKey', wireColor);
  connector('#Nail', '#switchLeft', '#switchToNail', wireColor);
  connector('#switchLeft', '#Nail', '#switchToNail', wireColor);
}
function connector(startPoint, endPoint, connector, wireColor) {
  var elemX, elemY
  $(startPoint).draggable({
    containment: "#canvasBox",
    revert: function () {
      if (!droped) {
        ctx.clearRect(0, 0, 570, 345);
        $(startPoint).css({
          left: elemX,
          top: elemY
        });
        $(endPoint).css({ 'opacity': 0 });
        // $("#boltHelp").css({ display: "none" })
        $("#nailLeft").css({ display: "block" })
        $("#nailRight").css({ display: "block" })

      }
    },
    start: function () {
      elemX = $(startPoint).css('left');
      elemY = $(startPoint).css('top');
      droperInitPos = $(startPoint).css('left');
      startX = (parseInt(elemX.substring(0, elemX.length - 2)) / 2) + (parseInt(elemX.substring(0, elemX.length - 2)) / 35) + 7;
      startY = (parseInt(elemY.substring(0, elemY.length - 2)) / 2) - (parseInt(elemY.substring(0, elemY.length - 2)) / 16) + 5;
      $(endPoint).css({ 'opacity': 0.5 });
    },
    stop: function () { },
    drag: function () {
      removeTrip();
      var elemXX = $(startPoint).css('left');
      var elemYY = $(startPoint).css('top');
      mouseX = (parseInt(elemXX.substring(0, elemXX.length - 2)) / 2) + (parseInt(elemXX.substring(0, elemXX.length - 2)) / 35) + 10;
      mouseY = (parseInt(elemYY.substring(0, elemYY.length - 2)) / 2) - (parseInt(elemYY.substring(0, elemYY.length - 2)) / 16) + 8;
      ctx.clearRect(0, 0, 570, 345);
      ctx.strokeStyle = wireColor;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      // removeTrip()
    }
  });
  $(endPoint).droppable({
    accept: startPoint,
    drop: function () {
      droped = true;
      count++;
      $(startPoint).css({
        left: $(endPoint).css('left'),
        top: $(endPoint).css('top')

      });
      console.log(count)
      if (count == 1) {
        help=9;
        removeTrip();
      }
      else if (count == 2) {
        help=10;
        removeTrip();
      }
      else if (count == 3) {
        help=11;
        removeTrip();
      }
      // else {
      //   showArr = 8;
      // }
      if (count == 4) {
        help=12;
        removeTrip();
        $('#key').css({ 'cursor': 'pointer' });
        $("#key").draggable(
          {
            containment: "#canvas",
            revert: "invalid",
            tolerance: 'touch',
            drag: function () {
              $("#check").css({ "cursor": "default" })
              $("#check,#text").css('pointer-events', 'none');
            }
          })
        $("#keyDrop").droppable({
          accept: "#key",
          drop: function () {
            $("#key").css({ top: 237 + "px", left: 405 + "px" });
            $("#light").fadeIn(1500);
            $('#key,#text').css('pointer-events', 'none');
            $("#Note2").fadeIn(1500);
            help=13;
            removeTrip();
            $("#nextFigure3").delay(1000).fadeIn(1000);
          }
        })

      }
      $(endPoint).draggable('disable');
      $(startPoint).draggable('disable');
      $(endPoint + ',' + startPoint).css({ 'cursor': 'default' });
      $(endPoint).hide();
      $(startPoint).hide();
      ctx.clearRect(0, 0, 570, 345);
      $(connector).show();
      droped = false;
      connectedWires = 0;
      for (i = 0; i < connectionWires.length; i++) {
        if ($("#" + connectionWires[i]).css('display') == 'block') {
          connectedWires++;
        } else {
          break;
        }

      }
    }

  });
}
function removeTrip() {
	if (tripClickFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripClickFlag = false;
	}
}


