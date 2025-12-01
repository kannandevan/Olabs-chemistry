var dens = 999.7;
var surf = 0.07424;
var r = 0.05;
var a = 'A';
var testHeight = 0;
var capClickOne = 0, capClickTwo = 0, capClickThree = 0, capClickFour = 0, capClickFive = 0, capClickSix = 0;
$(document).ready(function () {
  gt = new Gettext({ 'domain': 'messages' });
  bottleClickCapill()

  for (i = 0; i < 33; i++) {
    if (i < 9) {
      imageArrayRise[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/capillaryanimNew/Symbol 11000" + (i + 1) + ".png"
    }
    else
      imageArrayRise[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/capillaryanimNew/Symbol 1100" + (i + 1) + ".png"
  }

  $("#tempValue").click(function () {
    removeTrip();
    showArr = 14;
  })
  $("#tempValue").change(function () {
    $("#zoomOutImgOne,#zoomOutImgTwo,#zoomOutImgThree,#zoomOutImgFour,#zoomOutImgFive,#zoomOutImgSix").css("display", "none");
    removeTrip();
    showArr = 14;
    tempValue = $(this).val();
    if (tempValue == "10") {
      dens = 999.7;
      surf = 0.07424
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }
    else if (tempValue == "20") {
      dens = 998.2;
      surf = 0.07279
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }
    else if (tempValue == "30") {
      dens = 995.6;
      surf = 0.07134
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }
    else if (tempValue == "40") {
      dens = 992.2;
      surf = 0.06989
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }
    else if (tempValue == "60") {
      dens = 983.2;
      surf = 0.06699
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }
    else if (tempValue == "80") {
      dens = 971.8;
      surf = 0.06409
      document.getElementById("densityWater").innerHTML = dens;
      document.getElementById("surfTens").innerHTML = surf;
    }

  })
})

function valueofTemp() {
  removeTrip();
  var x = $("#tempValue").val();
  temperatureVal = x;
  return x;
}

function bottleClickCapill() {
  $('#capCapill').css({ 'cursor': 'pointer' });
  $('#capCapill').click(function () {
    removeTrip();
    showArr = 15;
    $("#actTypes,#tempValue").css({ "pointer-events": "none" })
    $("#capCapill").animate({
      left: "100%", // left position in % (percentage)
      top: "66%"
    })
    $('#capCapill').css({ 'cursor': 'default' });
    $('#spatulaDivCapill').css({ 'cursor': 'pointer' });
    $("#spatulaDivCapill").draggable(
      {
        containment: "#mainDiv",
        tolerance: 'touch',
        revert: function (is_valid_drop) {
          if (!is_valid_drop) {
            $(this).animate({
              left: "79%", // left position in % (percentage)
              top: "78%"
            })
          }
        },
        drag: function () {
          removeTrip()
          $('#capCapill').css('pointer-events', 'none');
        }
      })
    $("#BottleAreaCapill").droppable({
      accept: "#spatulaDivCapill",
      drop: function () {
        showArr = 16;
        $("#spatulaDivCapill").draggable({ disabled: "true" })
        $('#spatulaDivCapill').animate({ left: '74%', top: '34%' });
        $('#spatulaDivCapill').animate(
          { deg: -38 },
          {
            duration: 1000,
            step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' })
              $('#spatulaDivCapill').animate(
                { deg: 0 },
                {
                  duration: 1000,
                  step: function (now) {
                    $('#spatulaDivCapill').css({ transform: 'rotate(' + now + 'deg)' }
                    ), $("#spatulaPowderCapill").fadeIn(1000);
                  }
                },
                setTimeout(function () {
                  spatulaPowderDragCapill()
                }, 2000)
              )
            }
          })
      }
    })
  })
}
function spatulaPowderDragCapill() {
  $("#spatulaDivCapill").css({ display: "none" })
  $("#spatulaDivBehindCapill").css({ display: "block" })
  $('#spatulaDivBehindCapill').css({ 'cursor': 'pointer' });
  $("#spatulaDivBehindCapill").draggable(
    {
      containment: "#mainDiv",
      tolerance: 'touch',
      revert: function (is_valid_drop) {
        if (!is_valid_drop) {
          $(this).animate({
            left: "74%", // left position in % (percentage)
            top: "34%"
          })
        }
      },
      start: function () {
        removeTrip();
      }
    })
  $("#chinaArea").droppable({
    accept: "#spatulaDivBehindCapill",
    drop: function () {
      showArr = 17;
      $("#spatulaDivBehindCapill").draggable({ disabled: "true" })
      $('#capCapill').animate({ left: '24%', top: '2%' });
      $('#spatulaDivBehindCapill').animate({ left: '40%', top: '51%' });
      $('#spatulaDivBehindCapill').animate(
        { deg: -35 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        })
      setInterval(function () {
        $('#spatulaPowderBehindCapill').animate({ left: "-7%" }, function () {
          $("#spatulaPowderPetriCapill").fadeIn(1000)
        }
        )
        setTimeout(function () {
          $("#spatulaPowderBehindCapill").hide()
          $('#spatulaDivBehindCapill').animate({ left: '80%', top: '79%' });
          $('#spatulaDivBehindCapill').css({ 'cursor': 'default' });
        }, 1000)
      }, 500)
      $('#spatulaDivBehindCapill').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $('#spatulaDivBehindCapill').css({ transform: 'rotate(' + now + 'deg)' })
          }
        },
        setTimeout(function () {
          glassDragCapill()
        }, 2000)
      )
    }
  })
}
function glassDragCapill() {
  $('#glassrodCapill').css({ 'cursor': 'pointer' });
  $("#glassrodCapill").draggable(
    {
      containment: "#mainDiv",
      tolerance: 'touch',
      revert: function (is_valid_drop) {
        if (!is_valid_drop) {
          $(this).animate({
            left: "14%", // left position in % (percentage)
            top: "73%"
          })
          $('#glassrodCapill').css({ 'transform': 'rotate(90deg)' });
        }
      },
      start: function () {
        $('#glassrodCapill').css({ 'transform': 'rotate(0deg)' });
        removeTrip();
      }
    })
  $("#chinaArea").droppable({
    accept: "#glassrodCapill",
    drop: function () {
      showArr = 18;
      $("#glassrodCapill").draggable({ disabled: "true" })
      $('#glassrodCapill').css({ left: '36%', top: '26%' });
      $('#glassrodCapill').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        }
      ),
        setTimeout(function () {
          var setinterGlassrodCapill = setInterval(rodanimateCapill, 1000);
          setTimeout(function () {
            clearInterval(setinterGlassrodCapill);
            $('#glassrodCapill').animate(
              { deg: 90 },
              {
                duration: 1000,
                step: function (now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' })
                }
              },
              setTimeout(function () {
                $("#glassrodCapill").animate({ top: "72%", left: "14%" }, 600);
                $('#glassrodCapill').css({ 'cursor': 'default' });
                // $('#chinaDishPotCapill').fadeIn();
                dragClamp();
              })
            )
          }, 3000)
        }, 300)

    }
  })
}
function dragClamp() {
  $("#standAreaCapill").css({ "display": "block" })

  $("#clampOne").css({ "cursor": "pointer" })
  $("#clampOne").draggable({
    containment: "#mainDiv",
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "60%", // left position in % (percentage)
          top: "87%"
        })

      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#standAreaCapill").droppable({
    accept: "#clampOne",
    drop: function () {
      showArr = 19;
      $("#clampOne").animate({
        left: "15%", // left position in % (percentage)
        top: "-13%",
        height: "76%",
        width: "90%",
        transform: "none"
      },
        $("#clampOneTop").fadeIn(),
        $("#clampOne").fadeOut()
      )
      $("#clampOne").draggable({ disabled: "true" })
      $("#clampTwo").css({ "cursor": "pointer" })
      $("#clampTwo").draggable({
        containment: "#mainDiv",
        revert: function (is_valid_drop) {
          if (!is_valid_drop) {
            $(this).animate({
              left: "49%", // left position in % (percentage)
              top: "88%"
            })
          }
        },
        drag: function () {
          removeTrip()
        }
      });
      $("#standAreaCapill").droppable({
        accept: "#clampTwo",
        drop: function () {
          showArr = 24;
          $("#clampTwo").animate({
            left: "4%", // left position in % (percentage)
            top: "-14%",
            height: "76%",
            width: "90%",
            transform: "none"
          },
            $("#clampTwoTop").fadeIn(),
            $("#clampTwo").fadeOut()
          )
          $("#clampTwo").draggable({ disabled: "true" })
          capillaryMove();
        }
      })
    }
  })
}
function capillaryMove() {
  $("#standAreaCapill").css({ "cursor": "pointer" })
  $("#standAreaCapill").click(function () {
    $("#standAreaCapill").css({ "cursor": "default" })
    removeTrip();
    showArr = 25;
    $("#clamp1whole").animate({ top: "42%" })
    removeTrip();
    $("#clamp2whole").animate({ top: "42%" })
    setTimeout(function () {
      ImageAnimationOneTime("newWatAnimationCap", "waterResCap", imageArrayRise, 200, 0)

    }, 1000)
    setTimeout(function () {
      $("#capilRisefinal").fadeIn(9000)
      $("#capillOne,#capillTwo,#capillThree,#capillFour,#capillFive,#capillSix").show();
      //............................... NCERT updation..................................
      $("#clampOneTop").css('z-index',0);
      $("#planeScale").css({ "cursor": "pointer" })
      $("#scaleDropArea").css({ "display": "block" })
      $("#planeScale").draggable({
        containment: "#mainDiv",
        revert: function (is_valid_drop) {
          if (!is_valid_drop) {
            $(this).animate({
              left: "44%", // left position in % (percentage)
              top: "-102%"
            })
          }
        },
        drag: function () {
          removeTrip()
        }
      });
      $("#scaleDropArea").droppable({
        accept: "#planeScale",
        drop: function () {
          showArr = 22;
          $("#planeScale").draggable({ disabled: "true" })
          $("#scaleDropArea").css({ "display": "none" })
          $('#planeScale').css({ left: '118%', top: '-295%','transform' : 'rotate('+180 +'deg)'});
          $("#capillOne,#capillTwo,#capillThree,#capillFour,#capillFive,#capillSix").css({ "cursor": "pointer" })
          clickCapillary()
        }
      })
      // .........................................................................................................
    }, 4000)

  })



}
function rodanimateCapill() {
  $("#glassrodCapill").animate({
    top: "26%", left: "36%"
  }, 600);
  $("#glassrodCapill").animate({
    top: "26%", left: "49%"
  }, 600);
  setTimeout(function () {
    $("#potashimgCapill").fadeIn(3000)
  }, 2000)

}
function clickCapillary() {
  $("#noteDiv").css("display", "block");
  $("#capillOne").unbind().click(function () {
    capClickOne = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 30.31) {
      $("#ScaleOne").css({ top: '-88%' });
    }
    else if (testHeight == 29.73) {
      $("#ScaleOne").css({ top: '-102%' });
    }
    else if (testHeight == 29.25) {
      $("#ScaleOne").css({ top: '-114%' });
    }
    else if (testHeight == 28.75) {
      $("#ScaleOne").css({ top: '-127%' });
    }
    else if (testHeight == 27.81) {
      $("#ScaleOne").css({ top: '-150%' });
    }
    else if (testHeight == 26.92) {
      $("#ScaleOne").css({ top: '-173%' });
    }
    $("#zoomOutImgOne").css("display", "block");
    $("#zoomOutImgTwo,#zoomOutImgThree,#zoomOutImgFour,#zoomOutImgFive,#zoomOutImgSix").css("display", "none");
    $("#radiusShow").show();
    $('#radVal').val('0.05');
    a = 'A';
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
    if ((capClickOne && capClickTwo && capClickThree && capClickFour && capClickFive && capClickSix) == 1) {
      inferenceArr = 0;
      $("#inferenceCapill").show()
      $("#noteDiv").css("display", "none");
      showArr = 23;
    }
  })
  $("#capillTwo").unbind().click(function () {
    capClickTwo = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 15.16) {
      $("#ScaleTwo").css({ top: '-470%' });
    }
    else if (testHeight == 14.87) {
      $("#ScaleTwo").css({ top: '-477%' });
    }
    else if (testHeight == 14.62) {
      $("#ScaleTwo").css({ top: '-483%' });
    }
    else if (testHeight == 14.38) {
      $("#ScaleTwo").css({ top: '-490%' });
    }
    else if (testHeight == 13.91) {
      $("#ScaleTwo").css({ top: '-501%' });
    }
    else if (testHeight == 13.46) {
      $("#ScaleTwo").css({ top: '-513%' });
    }
    $("#radiusShow").show();
    $("#zoomOutImgTwo").show();
    $("#zoomOutImgOne,#zoomOutImgThree,#zoomOutImgFour,#zoomOutImgFive,#zoomOutImgSix").css("display", "none");
    a = 'B';
    $('#radVal').val('0.1');
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
    if ((capClickOne && capClickTwo && capClickThree && capClickFour && capClickFive && capClickSix) == 1) {
      inferenceArr = 0;
      $("#inferenceCapill").show()
      $("#noteDiv").css("display", "none");
      showArr = 23;
    }
  })
  $("#capillThree").unbind().click(function () {
    capClickThree = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 3.79) {
      $("#ScaleThree").css({ top: '-741%' });
    }
    else if (testHeight == 3.72) {
      $("#ScaleThree").css({ top: '-743%' });
    }
    else if (testHeight == 3.66) {
      $("#ScaleThree").css({ top: '-745%' });
    }
    else if (testHeight == 3.59) {
      $("#ScaleThree").css({ top: '-747%' });
    }
    else if (testHeight == 3.48) {
      $("#ScaleThree").css({ top: '-750%' });
    }
    else if (testHeight == 3.36) {
      $("#ScaleThree").css({ top: '-752%' });
    }
    $("#zoomOutImgThree").show();
    $("#zoomOutImgOne,#zoomOutImgTwo,#zoomOutImgFour,#zoomOutImgFive,#zoomOutImgSix").css("display", "none");
    $("#radiusShow").show();
    a = 'C';
    $('#radVal').val('0.4');
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
    if ((capClickOne && capClickTwo && capClickThree && capClickFour && capClickFive && capClickSix) == 1) {
      inferenceArr = 0;
      $("#inferenceCapill").show()
      $("#noteDiv").css("display", "none");
      showArr = 23;
    }
  })
  $("#capillFour").unbind().click(function () {
    capClickFour = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 2.53) {
      $("#ScaleFour").css({ top: '-792%' });
    }
    else if (testHeight == 2.48) {
      $("#ScaleFour").css({ top: '-793.1%' });
    }
    else if (testHeight == 2.44) {
      $("#ScaleFour").css({ top: '-794.9%' });
    }
    else if (testHeight == 2.40) {
      $("#ScaleFour").css({ top: '-795%' });
    }
    else if (testHeight == 2.32) {
      $("#ScaleFour").css({ top: '-797%' });
    }
    else if (testHeight == 2.24) {
      $("#ScaleFour").css({ top: '-800%' });
    }
    $("#zoomOutImgFour").show();
    $("#zoomOutImgOne,#zoomOutImgTwo,#zoomOutImgThree,#zoomOutImgFive,#zoomOutImgSix").css("display", "none");
    $("#radiusShow").show();
    $('#radVal').val('0.6');
    a = 'D';
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
    if ((capClickOne && capClickTwo && capClickThree && capClickFour && capClickFive && capClickSix) == 1) {
      inferenceArr = 0;
      $("#inferenceCapill").show()
      $("#noteDiv").css("display", "none");
      showArr = 23;
    }
  })
  $("#capillFive").unbind().click(function () {
    capClickFive = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 1.52) {
      $("#ScaleFive").css({ top: '-798%' });
    }
    else if (testHeight == 1.49) {
      $("#ScaleFive").css({ top: '-798.9%' });
    }
    else if (testHeight == 1.46) {
      $("#ScaleFive").css({ top: '-800.9%' });
    }
    else if (testHeight == 1.44) {
      $("#ScaleFive").css({ top: '-801%' });
    }
    else if (testHeight == 1.39) {
      $("#ScaleFive").css({ top: '-802%' });
    }
    else if (testHeight == 1.35) {
      $("#ScaleFive").css({ top: '-803%' });
    }
    $("#zoomOutImgFive").show();
    $("#zoomOutImgOne,#zoomOutImgTwo,#zoomOutImgThree,#zoomOutImgFour,#zoomOutImgSix").css("display", "none");
    $("#radiusShow").show();
    a = 'E';
    $('#radVal').val('1');
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
  })
  $("#capillSix").unbind().click(function () {
    capClickSix = 1;
    removeTrip();
    showArr = 22;
    if (testHeight == 1.08) {
      $("#ScaleSix").css({ top: '-801%' });
    }
    else if (testHeight == 1.06) {
      $("#ScaleSix").css({ top: '-801.9%' });
    }
    else if (testHeight == 1.04) {
      $("#ScaleSix").css({ top: '-802%' });
    }
    else if (testHeight == 1.03) {
      $("#ScaleSix").css({ top: '-803.1%' });
    }
    else if (testHeight == 0.99) {
      $("#ScaleSix").css({ top: '-804.1%' });
    }
    else if (testHeight == 0.96) {
      $("#ScaleSix").css({ top: '-805.9%' });
    }
    $("#zoomOutImgSix").show();
    $("#zoomOutImgOne,#zoomOutImgTwo,#zoomOutImgThree,#zoomOutImgFour,#zoomOutImgFive").css("display", "none");
    $("#radiusShow").show();
    $('#radVal').val('1.4');
    a = 'F';
    document.getElementById("radVal").innerHTML = r;
    document.getElementById("nameTag").innerHTML = a;
    if ((capClickOne && capClickTwo && capClickThree && capClickFour && capClickFive && capClickSix) == 1) {
      inferenceArr = 0;
      $("#inferenceCapill").show()
      $("#noteDiv").css("display", "none");
      showArr = 23;
    }
  })
}

function change(value) {
  r = document.getElementById("radVal").value = value;
  var heightCalVal = (2 * surf * 1) / (dens * (r * 0.001) * 9.8);
  document.getElementById("heightCalcValue").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRad").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRadOne").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRadTwo").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRadThree").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRadFour").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  document.getElementById("heightCalcValueRadFive").innerHTML = (heightCalVal * 100).toFixed(2) + 'cm';
  testHeight = (heightCalVal * 100).toFixed(2);
}


