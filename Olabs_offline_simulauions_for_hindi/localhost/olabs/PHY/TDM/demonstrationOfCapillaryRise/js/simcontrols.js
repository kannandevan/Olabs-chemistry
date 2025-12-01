var imageArrayRub = [], imageArrayWat = [], imageArrayWatZoom = [], imageArrayRise = [];
var showArr = 0;
var infer = false;
var actTypes, waterAnim, waterAnimZoom;
//////////////both slide ends
$(window).on('load',function() {
  ImageInitLoad(imageArrayRub, "rub", "testRub", "newRubAnimation")
  ImageInitLoad(imageArrayWat, "waterRisingCol", "waterRes", "newWatAnimation")
  ImageInitLoad(imageArrayWatZoom, "waterRisingColZoom", "waterResZoom", "newWatAnimationZoom")
  ImageInitLoad(imageArrayRise, "waterRisingCap", "waterResCap", "newWatAnimationCap")
});

$(document).ready(function () {
  actTypes = $("#actTypes").val();
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));

    $("#expName").html(gt.gettext("Demonstration of Capillary Rise"))

  inferArr = [
    gt.gettext("Capillary rise decreases as the<br>space between two slides increases."), 
    gt.gettext("Capillary rise increases as the<br>radius of capillary tube decreases.")];
  
    helparr = [
    ////13
    gt.gettext("Answer the question to continue"),
    gt.gettext("Select the method"),
    gt.gettext("Drag and drop the rubber band<br>towards the slides to<br>connect them together"),
    gt.gettext("Drag and drop the matchstick<br>towards the slide to put it between<br>the other end of the slides"),
    gt.gettext("Drag and drop the<br>slide towards the<br>stand to place it"),
    gt.gettext("Click the Potassium Permanganate<br>bottle to open it"),
    gt.gettext("Drag and drop the spatula towards<br>the bottle to take the sample"),
    gt.gettext("Drag and drop the<br>spatula towards the<br>Petri dish containing water"),
    gt.gettext("Drag and drop the glass rod towards<br>the Petri dish to stir the solution"),
    gt.gettext("Click on the clamp to move the<br>slide towards the tip of<br>the water and observe"),
    gt.gettext("Click on the Petri dish to view the zoomed<br>view of water rising inside the two slides"),
    gt.gettext("Click on the Inference icon<br>to view the observation"),
    gt.gettext("Click on the Reset button<br>to redo the experiment")
  ]
  helparrCapill = [
    //10
    gt.gettext("Select the temperature"),
    gt.gettext("Click the Potassium Permanganate<br>bottle to open it"),
    gt.gettext("Drag and drop the spatula towards<br>the bottle to take the sample"),
    gt.gettext("Drag and drop the spatula towards<br>the China dish containing water"),
    gt.gettext("Drag and drop the glass<br>rod towards the China<br>dish to stir the solution"),
    gt.gettext("Drag and drop the clamp containing capillary<br>tubes towards the stand to hold it"),
    gt.gettext("Click on the clamp to bring the clamp down and<br>place the pointer towards the tip of the water"),
    gt.gettext("Click all the capillary <br>tubes to view the water<br> level and measure the height."),
    gt.gettext("Click on the Inference<br>icon to view the observation"),
    gt.gettext("Drag and<br>drop  the <br>Scale <br> towards<br> the <br>capillary <br>tubes"),
  ]
	// 	  $('[data-translate]').html(function (index, originalHtml) {
  //       console.log(originalHtml);
  //       return gt.gettext(originalHtml);
  // });

	// $('[data-translate-value]').val(function (index, originalHtml) {
	// 	console.log(originalHtml)
	// 	return gt.gettext(originalHtml);
	// });
  for (i = 0; i < 30; i++) {
    if (i < 9) {
      imageArrayRub[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/Rubberband animation/Symbol 1000" + (i + 1) + ".png"
    }
    else
      imageArrayRub[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/Rubberband animation/Symbol 100" + (i + 1) + ".png"
  }

  for (i = 0; i < 37; i++) {
    if (i < 9) {
      imageArrayWat[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/waterrisingd/Symbol 80019000" + (i + 1) + ".png"
    }
    else
      imageArrayWat[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/waterrisingd/Symbol 8001900" + (i + 1) + ".png"
  }
  for (i = 0; i < 38; i++) {
    if (i < 9) {
      imageArrayWatZoom[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/zoom/Symbol 800190018000" + (i + 1) + ".png"
    }
    else
      imageArrayWatZoom[i] = "../PHY/TDM/demonstrationOfCapillaryRise/images/zoom/Symbol 80019001800" + (i + 1) + ".png"
  }

  dragRubber();
  $("#actTypes").click(function () {
    removeTrip();
    if (actTypes == "slide") {
      showArr = 2;
    }
    else {
      showArr = 13;
    }
  })

  QuizCoreExecuter(1, gt.gettext("Capillary rise of water is the flow of water in an upward direction through a narrow space against gravity. Capillary rise _____ as the size of the narrow space increases."), gt.gettext("Increases"), gt.gettext("Decreases"), "null", "null", gt.gettext("Decreases"), 1, 1)


  removeTrip()
  $("#actTypes").change(function () {
    removeTrip();
    showArr = 13;
    actTypes = $(this).val();
    if (actTypes == "slide") {
      removeTrip();
      showArr = 2;
      $("#firstPage,#mainThumb1,#usingSlide,#usingSlide,#start").css({ "display": "block" })
      $("#secondPage,#mainThumb2,#usingCap,#startOpen").css({ "display": "none" })
    }
    else {
      showArr = 13;
      $("#secondPage,#mainThumb2,#usingCap,#startOpen").css({ "display": "block" })
      $("#firstPage,#mainThumb1,#usingSlide,#start").css({ "display": "none" })

    }
  })
})

function dragRubber() {
  DragAndDrop_1_by_2("#rubber", "null", "false", "99%", "103%", "null", "null", "#mainDiv")
  removeTrip();
  $("#slideArea").droppable({
    accept: "#rubber",
    drop: function () {
      $("#actTypes").css({ "pointer-events": "none" })
      showArr = 3;
      $("#rubber").draggable({ disabled: "true" })
      $('#slideImg,#slideImg2,#rubber').css({ "display": "none" });
      ImageAnimationOneTime("newRubAnimation", "testRub", imageArrayRub, 100, 0)
      setTimeout(function () {
        $('#slideImg3').css("display", "block");
        dragStick()

      }, 3000)
      $("#rubber").css({ "cursor": "default" })
    }
  })
}
function dragStick() {
  $("#matchStick").css({ "cursor": "pointer" })
  $("#matchStick").draggable({
    containment: "#mainDiv",
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "96%",
          top: "41%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#slideArea").droppable({
    accept: "#matchStick",
    drop: function () {
      showArr = 4;
      $("#matchStick").draggable({ disabled: "true" })
      $("#matchStick").css({ "cursor": "default" })
      $('#matchStick').animate(
        { deg: -94 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)', left: "53%", top: "57%", height: "4", width: "46" })
          }
        },
        setTimeout(function () {
          $('#matchStick').css("display", "none")
          $('#slideImgMat').fadeIn(1000)
          $('#slideImg3').fadeOut()

        }, 500)
      )
      dragConn();
    }
  })
}
function dragConn() {
  $("#slideConn").css({ "cursor": "pointer" })
  $("#slideConn").draggable({
    containment: "#mainDiv",
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "1%", // left position in % (percentage)
          top: "63%"
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#standArea").droppable({
    accept: "#slideConn",
    drop: function () {
      showArr = 5;
      $("#slideConn").animate({
        left: "43%", // left position in % (percentage)
        top: "14%"
      })
      $("#slideConn").draggable({ disabled: "true" })
      $('#slideImgMatStand').css("display", "block")
      $('#slideImgMat').css("display", "none")
      $("#slideConn").css({ "cursor": "default" })
      bottleClick();
    }
  })
}
function bottleClick() {
  $('#bottleCap').css({ 'cursor': 'pointer' });
  $('#bottleCap').click(function () {
    removeTrip();
    showArr = 6;
    $("#bottleCap").animate({
      left:"97%",
      top: "68%"
    })
    $('#bottleCap').css({ 'cursor': 'default' });
    $('#spatulaDiv').css({ 'cursor': 'pointer' });
    $("#spatulaDiv").draggable(
      {
        containment: "#mainDiv",
        tolerance: 'touch',
        revert: function (is_valid_drop) {
          if (!is_valid_drop) {
            $(this).animate({
              left: "78%", // left position in % (percentage)
              top: "76%"
            })
          }
        },
        drag: function () {
          removeTrip()
          $('#bottleCap').css('pointer-events', 'none');
        }
      })
    $("#BottleArea").droppable({
      accept: "#spatulaDiv",
      drop: function () {
        showArr = 7;
        $("#spatulaDiv").draggable({ disabled: "true" })
        $('#spatulaDiv').animate({ left: '72%', top: '30%' });
        $('#spatulaDiv').animate(
          { deg: -30 },
          {
            duration: 1000,
            step: function (now) {
              $(this).css({ transform: 'rotate(' + now + 'deg)' })
              $('#spatulaDiv').animate(
                { deg: 0 },
                {
                  duration: 1000,
                  step: function (now) {
                    $('#spatulaDiv').css({ transform: 'rotate(' + now + 'deg)' }
                    ), $("#spatulaPowder").fadeIn(1000);
                  }
                },
                setTimeout(function () {
                  spatulaPowderDrag()
                  $('#bottleFull').css({ 'z-index': '0' })
                }, 2000)
              )
            }
          })
      }
    })
  })
}
function spatulaPowderDrag() {
  $("#spatulaDiv").css({ display: "none" })
  $("#spatulaDivBehind").css({ display: "block" })
  $('#spatulaDivBehind').css({ 'cursor': 'pointer' });
  $("#spatulaDivBehind").draggable(
    {
      containment: "#mainDiv",
      tolerance: 'touch',
      revert: function (is_valid_drop) {
        if (!is_valid_drop) {
          $(this).animate({
            left: "72%", // left position in % (percentage)
            top: "30%"
          })
        }
      },
      start: function () {
        removeTrip();
      }
    })
  $("#petriArea").droppable({
    accept: "#spatulaDivBehind",
    drop: function () {
      showArr = 8;
      $("#spatulaDivBehind").draggable({ disabled: "true" })
      $('#bottleCap').animate({left:'23%',top: '2%' });
      $('#spatulaDivBehind').animate({ left: '56%', top: '60%' });
      $('#spatulaDivBehind').animate(
        { deg: -35 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        })
      setInterval(function () {
        $('#spatulaPowderBehind').animate({ left: "-7%" }, function () {
          $("#spatulaPowderPetri").fadeIn(1000)
        }
        )
        setTimeout(function () {
          $("#spatulaPowderBehind").hide()
          $('#spatulaDivBehind').animate({ left: '78%', top: '76%' });
          $('#spatulaDivBehind').css({ 'cursor': 'default' });
        }, 1000)
      }, 500)
      $('#spatulaDivBehind').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $('#spatulaDivBehind').css({ transform: 'rotate(' + now + 'deg)' })
          }
        },
        setTimeout(function () {
          glassDrag()
        }, 2000)
      )
    }
  })
}
function glassDrag() {
  $('#glassrod').css({ 'cursor': 'pointer' });
  $("#glassrod").draggable(
    {
      containment: "#mainDiv",
      tolerance: 'touch',
      revert: function (is_valid_drop) {
        if (!is_valid_drop) {
          $(this).animate({
            left: "82%", // left position in % (percentage)
            top: "76%",
          })
          $('#glassrod').css({ 'transform': 'rotate(90deg)' });
        }
      },
      start: function () {
        $('#glassrod').css({ 'transform': 'rotate(0deg)' });
        removeTrip();
      }
    })
  $("#petriArea").droppable({
    accept: "#glassrod",
    drop: function () {
      showArr = 9;
      $("#glassrod").draggable({ disabled: "true" })
      $('#glassrod').css({ left: '54%', top: '40%' });
      $('#glassrod').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        }
      ),
        setTimeout(function () {
          var setinterGlassrod = setInterval(rodanimate, 1000);
          setTimeout(function () {
            clearInterval(setinterGlassrod);
            $('#glassrod').animate(
              { deg: 90 },
              {
                duration: 1000,
                step: function (now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' })
                }
              },
              setTimeout(function () {
                $("#glassrod").animate({ top: "76%", left: "82%" }, 600);
                $('#glassrod').css({ 'cursor': 'default' });
                $('#slideConn').css({ 'cursor': 'pointer' });
                setTimeout(function(){
                  slideDishMove();
                },3000)
              })
            )
          }, 3000)
        }, 100)
    }
  })
}
function slideDishMove() {
  $("#slideConn").css({ "cursor": "pointer" })
  $("#slideConn").click(function () {
    removeTrip();
    showArr = 10;
    $("#standBody").animate({ top: "4%" })
    showArr = 11;
    setTimeout(function () {
      $("#slideConn").css({ "cursor": "default" })
      $('#standBody').fadeOut(1000);
      ImageAnimationOneTime("newWatAnimation", "waterRes", imageArrayWat, 300, 0)
      ImageAnimationOneTime("newWatAnimationZoom", "waterResZoom", imageArrayWatZoom, 300, 0)
      $('#chinaWater,#standBase').fadeOut(5000);
    }, 2000)
    setTimeout(function () {
      $('#waterRise,#waterRiseZoom').fadeIn(5000);
    }, 9000)

    inferenceArr = 0;
    $("#inference").show()
  })
}
function DragAndDrop_1_by_2(id, Class, flagForRevert, Top_val, left_val, width_val, height_val, On_drag_event) {
  var Flag_tag;
  var Flag_tag1 = flagForRevert;
  if (id == "null") {
    Flag_tag = Class;
  }
  else {
    Flag_tag = id;
  }
  $(Flag_tag).draggable({
    revert: function (Flag_tag1) {
      if (!Flag_tag1) {
        $(this).animate({
          top: Top_val, // top position in % (percentage)
          left: left_val, // left position in % (percentage)
        })
      }
    }, containment: On_drag_event,
    drag: function () {
      removeTrip()
    }
  });
}

function rodanimate() {
  $("#glassrod").animate({
    top: "40%", left: "62%"
  }, 600);
  $('#potashimg').fadeIn(5000);
  $('#water,#spatulaPowderPetri').fadeOut(5000);

  $("#glassrod").animate({
    top: "40%", left: "53%"
  }, 600);

}

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
        CLEARImageAnimation.clearInterval();
      }
      else {
        GlobalVariable = 0;
        ANIMATIONTimesReached++;
      }
    }
  }, ANIMATIONSpeed);
}

function ImageAnimationINFinity(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed) {
  var GlobalVariable = 0;
  var ANIMATIONTimesReached = 0;
  var CLEARImageAnimation = setInterval(function () {
    $('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
    $('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
    GlobalVariable++;
    if (GlobalVariable == ANIMATIONImageArray.length) {
      $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
      $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
      GlobalVariable = 0;
      ANIMATIONTimesReached++;
    }
  }, ANIMATIONSpeed);
  return (CLEARImageAnimation);
}
function clearAnimation(myInterval, imgClass) {
  clearInterval(myInterval);
  $("." + imgClass).remove();

}
