var imageArraySilkOnly = [], imageArraySilkOnlyOne = [], imageArrayEbonOnly = [], imageArrayEbonOnlyOne = [], imageArrayGlassEbonSilkOnlyOne = [];
var showArr = 0, flag = 0, inferArr, inferenceArr = 0, count = 0, clickDrop = 0;

$(window).on('load',function() {
  ImageInitLoad(imageArraySilkOnly, "glassClick", "testSilk", "newSilkAnimation")
  ImageInitLoad(imageArraySilkOnlyOne, "glassClick", "testSilkOne", "newSilkAnimationOne")
  ImageInitLoad(imageArrayEbonOnly, "ebonClick", "testEbon", "newEbonAnimation")
  ImageInitLoad(imageArrayEbonOnlyOne, "ebonClick", "testEbonOne", "newEbonAnimationOne")
  ImageInitLoad(imageArraySilkOnlyOne, "glassebonClick", "testGlassEbon", "newGlassEbonAnimation")
  ImageInitLoad(imageArrayGlassEbonSilkOnlyOne, "glassebonClick", "testGlassEbonBoth", "newGlassEbonBothAnimation")
});

$(document).ready(function () {
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  inferArr = [gt.gettext("Two positively charged Glass<br>rods repel each other."), gt.gettext("Two negatively charged Ebonite<br>rods repel each other."), gt.gettext("A positively charged Glass rod<br>attracts a negatively charged Ebonite rod.")];
  helparr = [
    gt.gettext("Select the rod"),
    gt.gettext("Drag and drop the Silk cloth<br>towards the Glass rod to rub it"),
    gt.gettext("Drag and drop the Glass rod towards<br>the Wire frame of the Stand"),
    gt.gettext("Drag and drop the Silk cloth towards the second Glass rod to<br>rub it and observe when it is moved to the hanging Glass rod"),
    gt.gettext("Drag and drop the Woolen cloth<br>towards the Ebonite rod to rub it"),
    gt.gettext("Drag and drop the Ebonite rod towards<br>the Wire frame of the Stand "),
    gt.gettext("Drag and drop the Woolen cloth towards the second Ebonite rod to<br>rub it and observe when it is moved to the hanging Ebonite rod"),
    gt.gettext("Click on the Next button<br>"),
    gt.gettext("Click on the Inference icon<br>to view the observation"),
    gt.gettext("Click on the Reset button<br>to redo the experiment"),
    gt.gettext("Drag and drop the Woolen cloth towards the Ebonite rod<br>to rub it and observe when it is moved to the hanging Glass rod"),

  ]
  
  for (i = 0; i < 199; i++) {
    if (i < 9) {
      imageArraySilkOnly[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/1/Symbol 5000" + (i + 1) + ".png"
    }
    else if (i < 99) {
      imageArraySilkOnly[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/1/Symbol 500" + (i + 1) + ".png"
    }
    else {
      imageArraySilkOnly[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/1/Symbol 50" + (i + 1) + ".png"
    }
  }

  for (i = 0; i < 61; i++) {
    if (i < 9) {
      imageArraySilkOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/singleSilk/Symbol 5000" + (i + 1) + ".png"
    }
    else {
      imageArraySilkOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/singleSilk/Symbol 500" + (i + 1) + ".png"
    }
  }

  for (i = 0; i < 61; i++) {
    if (i < 9) {
      imageArrayEbonOnly[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/SINGLE WOOLLEN CLOTH/Symbol 5000" + (i + 1) + ".png"
    }
    else
      imageArrayEbonOnly[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/SINGLE WOOLLEN CLOTH/Symbol 500" + (i + 1) + ".png"
  }
  for (i = 0; i < 199; i++) {
    if (i < 9) {
      imageArrayEbonOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/2/Symbol 5000" + (i + 1) + ".png"
    }
    else if (i < 99) {
      imageArrayEbonOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/2/Symbol 500" + (i + 1) + ".png"
    }
    else {
      imageArrayEbonOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/2/Symbol 50" + (i + 1) + ".png"
    }
  }

  for (i = 0; i < 199; i++) {
    if (i < 9) {
      imageArrayGlassEbonSilkOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/3/Symbol 5000" + (i + 1) + ".png"
    }
    else if (i < 99) {
      imageArrayGlassEbonSilkOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/3/Symbol 500" + (i + 1) + ".png"
    }
    else {
      imageArrayGlassEbonSilkOnlyOne[i] = "../PHY/EMM/likeChargesRepelAndUnlikeChargesAttract/images/3/Symbol 50" + (i + 1) + ".png"
    }
  }

  $('#instruction1').html(gt.gettext("1. Click on the branch of the potted plant to remove the leaves<br><br>2.Click on the next button"));
  $('#instruction2').html(gt.gettext("1. Drag and drop the polythene bag towards the branch without leaves<br><br>2.Drag and drop the thread towards the branch to tie the bag to the branch<br><br>3. Drag and drop the polythene bag towards the branch with leaves <br><br>4. Drag and drop the thread towards the branch to tie the bag to the branch<br><br>5. Drag and drop the thread towards the polythene bag that is empty<br><br>6.Wait till the timer stops.<br><br>7. Click on the branch with leaves to observe the zoomed image of it<br><br>8. Click on the branch without leaves to observe the zoomed image of it<br><br>9. Click on the empty polythene bag to observe the zoomed image of it<br><br>10. Click on the inference icon<br><br>11. Click on the Reset button to redo the experiment"));
  $("#glassRodSel").css({ "background-color": "lightgreen", "color": "green" })

  dragSilk();

  $("#glassRodSel").unbind().click(function () {
    removeTrip()
    // clickDrop++;
    showArr = 1
    $("#glassClick").css({ "display": "block" })
    $("#glassRodSel").css({ "background-color": "lightgreen", "color": "green" })
    $("#eboRodSel").css({ "background-color": "", "color": "" })
    $("#ebonClick,#inference").css({ "display": "none" })
    dragSilk();
  });

  $("#eboRodSel").unbind().click(function () {
    removeTrip()
    showArr = 4
    $("#ebonClick").css({ "display": "block" })
    $("#eboRodSel").css({ "background-color": "lightgreen", "color": "green" })
    $("#glassRodSel").css({ "background-color": "", "color": "" })
    $("#glassClick,#inference").css({ "display": "none" })
    dragWool();
  });

  $("#next").click(function () {
    removeTrip()
    dragSilkWool()
    $("#next").css({ "display": "none" })
    $(".sim-controls").css({ "width": "0%" })
    $(".sim-div").css({ "padding-right": "10px", "padding-left": "0px", "height": "100%", "width": "100%" })
    showArr = 10
    $("#glassebonClick").css({ "display": "block" })
    $("#glassRodSel,#eboRodSel,#ebonClick,#glassClick,#inference,.control-div").css({ "display": "none" })
  })

})
/////////////////////////////////////////////////GLASS ROD SILK ONLY/////////////////////////////////////////////////////////////
function dragSilk() {
  $("#silk").css({ "cursor": "pointer" })
  $("#silk").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "83%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
      showArr = 1;
      $("#glassRodSel,#eboRodSel").attr("disabled", true);
      $("#glassRodSel,#eboRodSel").css("pointer-events", "none");
    }
  });
  $("#glassRodArea").droppable({
    accept: "#silk",
    drop: function () {
      showArr = 2;
      $("#silk").css({ "cursor": "default" })
      $("#glassRodCanva").css({ "cursor": "pointer" })
      ImageAnimationOneTime("newSilkAnimationOne", "testSilkOne", imageArraySilkOnlyOne, 50, 0)
      $("#glassRodCanva").css({ "display": "none" })
      setTimeout(function () {
        $("#glassRodCanvaSec").animate({ left: "40%", top: "73%" })
        $("#glassRodCanvaSec,#silkTwo").css({ "display": "block" })
        $("#silkTwo").animate({ left: "83%", top: "73%" })
        $("#glassRodCanvaSec").css({ "cursor": "pointer" })
      }, 3000)
      $("#silk").animate({ left: "51%", top: "70%" })
      $("#silk").css({ "display": "none" })
      dragglassrodOne();
    }
  })
}
function dragglassrodOne() {
  $("#glassRodCanvaSec").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "40%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#glassStandArea").droppable({
    accept: "#glassRodCanvaSec",
    drop: function () {
      showArr = 3;
      $("#glassRodCanvaSec").animate({ "left": "18.6%", "top": "50.4%", "height": "3.5%", "width": "13.2%", "z-index": "0" })
      $('#glassRodCanvaSec').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        })
      $("#silkTwo").css({ "display": "none" })
      $("#silkThree").css({ "display": "block" })
      dragSilkTwo()
    }
  })
}

function dragSilkTwo() {
  $("#silkThree").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "83%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#glassRodArea").droppable({
    accept: "#silkThree",
    drop: function () {
      $("#silkThree").css({ "cursor": "default" })
      ImageAnimationOneTime("newSilkAnimation", "testSilk", imageArraySilkOnly, 50, 0)
      $("#glassRodCanvaTwo").css({ "display": "none" })
      $("#glassRodCanvaSec, #glassStand").fadeOut();
      $("#silkThree").animate({ left: "83%", top: "73%" })
      $("#silkThree").css({ "display": "none" })
      setTimeout(function () {
        inferenceArr = 0;
        $("#silkFinal").fadeIn(3000);
        count++;
        gls = true;
        $("#inference").css({ "display": "block" })
        showArr = 8;
      }, 6000)
    }
  })
}


////////////////////////////////////////////////////GLASS ROD SILK ONLY///////////////////////////////////////////////////////////
////////////////////////////////////////////// EBON ROD AND WOOL ONLY ////////////////////////////////////////////////////////////
function dragWool() {
  $("#woolen").css({ "cursor": "pointer" })
  $("#woolen").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "83%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
      $("#glassRodSel,#eboRodSel").attr("disabled", true);
      $("#glassRodSel,#eboRodSel").css("pointer-events", "none");
    }
  });
  $("#ebonRodArea").droppable({
    accept: "#woolen",
    drop: function () {
      $("#woolen").css({ "cursor": "default" })
      ImageAnimationOneTime("newEbonAnimation", "testEbon", imageArrayEbonOnly, 50, 0)
      $("#woolen").animate({ left: "51%", top: "74%" })
      $("#woolen,#ebonRodCanva").css({ "display": "none" })
      setTimeout(function () {
        $("#woolenTwo").css({ "display": "block" })
        showArr = 5;
        $("#woolenTwo").animate({ left: "83%", top: "73%" })
        $("#ebonRodCanvaSec").animate({ left: "40%", top: "73%" })
        $("#ebonRodCanvaSec").css({ "display": "block" })
      }, 3000)
      dragebonrodOne();
    }
  })
}
function dragebonrodOne() {
  $("#ebonRodCanvaSec").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "40%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#ebonStandArea").droppable({
    accept: "#ebonRodCanvaSec",
    drop: function () {
      showArr = 6;
      $("#ebonRodCanvaSec").animate({ "left": "18.6%", "top": "50.4%", "height": "3.5%", "width": "13.2%", "z-index": "0" })
      $('#ebonRodCanvaSec').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        })
      $("#woolenTwo").css({ "display": "none" })
      $("#woolenThree").css({ "display": "block" })
      dragWoolTwo()
    }
  })
}
function dragWoolTwo() {
  $("#woolenThree").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "83%",
          top: "73%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#ebonRodArea").droppable({
    accept: "#woolenThree",
    drop: function () {
      $("#woolenThree").css({ "cursor": "default" })
      $("#ebonRodCanvaTwo").css({ "cursor": "pointer" })
      ImageAnimationOneTime("newEbonAnimationOne", "testEbonOne", imageArrayEbonOnlyOne, 50, 0)
      $("#ebonRodCanvaTwo").css({ "display": "none" })
      $("#ebonRodCanvaSec, #ebonStand").fadeOut();
      $("#woolenThree").animate({ left: "83%", top: "73%" })
      $("#woolenThree").css({ "display": "none" })
      setTimeout(function () {
        inferenceArr = 1;
        count++;
        ebn = true;
        $("#woolFinal").fadeIn(3000);
        $("#inference").css({ "display": "block" })
        showArr = 8;
      }, 6000)
    }
  })
}
////////////////////////////////////////////// EBON ROD AND WOOL ONLY /////////////////////////////////////////////////////////

/////////////////////////////////////////////////////EBON AND GLASS ROD ////////////////////////////////////////////////////////
function dragSilkWool() {
  $("#glassebonsilk").css({ "cursor": "pointer" })
  $("#glassebonsilk").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "68%",
          top: "74%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#bothRodArea").droppable({
    accept: "#glassebonsilk",
    drop: function () {
      $("#glassebonsilk").css({ "cursor": "default" })
      $("#glassebonRodCanva,#bothRodArea").css({ "display": "none" })
      ImageAnimationOneTime("newGlassEbonAnimation", "testGlassEbon", imageArraySilkOnlyOne, 50, 0)
      $("#glassebonsilk").animate({ left: "68%", top: "74%" })
      $("#glassebonsilk").animate({ left: "68%", top: "74%" })
      $("#glassebonsilk").css({ "display": "none" })
      setTimeout(function () {
        showArr = 11;
        $("#glassebonsilkTwo").css({ "display": "block" })
        $("#glassebonRodCanvaSec").css({ "display": "block" })
        $("#glassebonRodCanvaSec").animate({ left: "34%", top: "71%" })
        $("#glassebonsilkTwo").animate({ left: "67%", top: "74%" })
      }, 3000)
      dragglassEbonrodOne();
    }
  })
}
function dragglassEbonrodOne() {
  $("#glassebonRodCanvaSec").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "34%",
          top: "71%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#bothStandArea").droppable({
    accept: "#glassebonRodCanvaSec",
    drop: function () {
      showArr = 12;
      $("#glassebonRodCanvaSec").animate({ "left": "15.9%", "top": "51%", "height": "3.6%", "width": "11.5%" })
      $('#glassebonRodCanvaSec').animate(
        { deg: 0 },
        {
          duration: 1000,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' })
          }
        })
      dragEbonSilkTwo()
    }
  })
}
function dragEbonSilkTwo() {
  $("#glassebonwoolen").css({ "cursor": "pointer" })
  $("#glassebonwoolen").draggable({
    containment: "#mainDiv",
    tolerance: 'touch',
    revert: function (is_valid_drop) {
      if (!is_valid_drop) {
        $(this).animate({
          left: "84%",
          top: "74%",
        })
      }
    },
    drag: function () {
      removeTrip()
    }
  });
  $("#bothRodAreaTwo").droppable({
    accept: "#glassebonwoolen",
    drop: function () {
      $("#glassebonwoolen").css({ "cursor": "default" })
      ImageAnimationOneTime("newGlassEbonBothAnimation", "testGlassEbonBoth", imageArrayGlassEbonSilkOnlyOne, 50, 0)
      $("#glassebonwoolen").animate({ left: "51%", top: "70%" })
      $("#glassebonStand,#glassebonRodCanvaSec").fadeOut()
      $("#glassebonwoolen,#glassebonRodCanvaTwo").css({ "display": "none" })
      setTimeout(function () {
        inferenceArr = 2;
        $("#inference").css({ "display": "block" })
        showArr = 8;
        $("#finalSilkEbon").fadeIn(3000)
      }, 6000)
    }
  })
}

////////////////////////////////////////////////////////EBON AND GLASS ROD /////////////////////////////////////////////////////

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
