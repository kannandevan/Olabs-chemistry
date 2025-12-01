var temp = 0, count = 0, gt, c, ctx;
var inferenceMsg, helpMsg, helpMsg1, helpMsg2;
var springlength = 6, soundveloc = 200;
var springlenOpen = 3, soundvelocOpen = 200;
var mainWidth, mainHeight;
var springAnimArray = [];
var showArr = 0;
var infer = false;
var actTypes;
var n = 1; m = 1;

//////////////both rigid ends
var springharmoneArray = [], springharmoneAnim;
var springharmtwoArray = [], springharmtwoAnim;
var springharmthreeArray = [], springharmthreeAnim;
var springharmfourArray = [], springharmfourAnim;
var springharmfiveArray = [], springharmfiveAnim;
var springharmsixArray = [], springharmsixAnim;

//////////////one open ends
var threadharmoneArray = [], threadharmoneAnim;
var threadharmtwoArray = [], threadharmtwoAnim;
var threadharmthreeArray = [], threadharmthreeAnim;
var threadharmfourArray = [], threadharmfourAnim;
var threadharmfiveArray = [], threadharmfiveAnim;

$(window).on('load',function() {

  //////////////both rigid ends
  ImageInitLoad(springharmoneArray, "rigidEnds", "harmOne", "harmOneAnimation")
  ImageInitLoad(springharmtwoArray, "rigidEnds", "harmTwo", "harmTwoAnimation")
  ImageInitLoad(springharmthreeArray, "rigidEnds", "harmThree", "harmThreeAnimation")
  ImageInitLoad(springharmfourArray, "rigidEnds", "harmFour", "harmFourAnimation")
  ImageInitLoad(springharmfiveArray, "rigidEnds", "harmFive", "harmFiveAnimation")
  ImageInitLoad(springharmsixArray, "rigidEnds", "harmSix", "harmSixAnimation")

  //////////////one open ends

  ImageInitLoad(threadharmoneArray, "openEnd", "harmOpenOne", "openHarmOneAnimation")
  ImageInitLoad(threadharmtwoArray, "openEnd", "harmOpenTwo", "openHarmTwoAnimation")
  ImageInitLoad(threadharmthreeArray, "openEnd", "harmOpenThree", "openHarmThreeAnimation")
  ImageInitLoad(threadharmfourArray, "openEnd", "harmOpenFour", "openHarmFourAnimation")
  ImageInitLoad(threadharmfiveArray, "openEnd", "harmOpenFive", "openHarmFiveAnimation")
});

$(document).ready(function () {
  actTypes = $("#actTypes").val();
  console.log(actTypes, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  inferenceMsg = ["Induced emf in a coil depends upon<br>1. Self-inductance of coil<br>2. Change in current through the coil "];
  helparr = [
    ////6
    gt.gettext("Select the activity type"),
    gt.gettext("Select the length of the spring"),
    gt.gettext("Select the velocity of sound"),
    gt.gettext("Click on the Start button to wave the spring"),
    gt.gettext("Click on the Next button to go<br>to the next order of harmonics"),
    gt.gettext("Click on the Reset button<br>to redo the experiment"),
    gt.gettext("Click on the Next button to observe<br>the table and compare the values")

  ]

  /////////////rigid end
  //////harmonic1////////////////
  for (i = 0; i < 39; i++) {
    if (i < 9) {
      springharmoneArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-1/spring 1_0000" + (i + 1) + ".png"
    }
    else
      springharmoneArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-1/spring 1_000" + (i + 1) + ".png"
  }
  //////harmonic2////////////////
  for (i = 0; i < 8; i++) {

    springharmtwoArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-2/spring 2_0000" + (i + 1) + ".png"
  }

  //////harmonic3////////////////
  for (i = 0; i < 15; i++) {
    if (i < 9) {
      springharmthreeArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-3/spring 3_0000" + (i + 1) + ".png"
    }
    else
      springharmthreeArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-3/spring 3_000" + (i + 1) + ".png"
  }

  //////harmonic4////////////////
  for (i = 0; i < 7; i++) {

    springharmfourArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-4/spring 4_0000" + (i + 1) + ".png"
  }
  //////harmonic5////////////////
  for (i = 0; i < 39; i++) {
    if (i < 9) {
      springharmfiveArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-5/spring 5_0000" + (i + 1) + ".png"
    }
    else
      springharmfiveArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-5/spring 5_000" + (i + 1) + ".png"
  }
  //////harmonic6////////////////
  for (i = 0; i < 7; i++) {
    springharmsixArray[i] = "../PHY/EMM/standingWave/images/spring set 1/spring-6/spring 6_0000" + (i + 1) + ".png"
  }

  /////////////////////////////////////////////////////////////

  /////////////open end////////////////////////////////////////

  /////////////////////////////////////////////////////////////////
  //////harmonic1////////////////
  for (i = 0; i < 5; i++) {
    threadharmoneArray[i] = "../PHY/EMM/standingWave/images/spring set 2/spring11/spring11_0000" + (i + 1) + ".png"
  }
  //////harmonic3////////////////
  for (i = 0; i < 5; i++) {
    threadharmtwoArray[i] = "../PHY/EMM/standingWave/images/spring set 2/spring22/spring22_0000" + (i + 1) + ".png"
  }
  //////harmonic5////////////////
  for (i = 0; i < 5; i++) {
    threadharmthreeArray[i] = "../PHY/EMM/standingWave/images/spring set 2/spring33/spring33_0000" + (i + 1) + ".png"
  }
  //////harmonic7////////////////
  for (i = 0; i < 5; i++) {
    threadharmfourArray[i] = "../PHY/EMM/standingWave/images/spring set 2/spring44/spring44_0000" + (i + 1) + ".png"
  }
  //////harmonic9////////////////
  for (i = 0; i < 5; i++) {
    threadharmfiveArray[i] = "../PHY/EMM/standingWave/images/spring set 2/spring55/spring55_0000" + (i + 1) + ".png"
  }

  $("#actTypes").click(function () {
    if (actTypes == "rigid") {
      showArr = 1;
    }
    else {
      showArr = 6;
    }
    removeTrip();
  })
  $("#springLen").click(function () {
    showArr = 2;
    removeTrip();
 
  })
  $("#soundVelo").click(function () {
    showArr = 3;
    removeTrip();
  })
  $("#springLenTwo").click(function () {
    showArr = 7;
    removeTrip();
  })
  $("#soundVeloTwo").click(function () {
    showArr = 8;
    removeTrip();
  })
  $("#start").unbind().click(function () {
    $("#start").css({"display":"none"})
    $("#next").css({"cursor":"pointer"})
    setTimeout(function(){
      $("#next").css({ "pointer-events": "auto" })
    },2000)    
    $("#next").css({"display":"block"})
    $("#actTypes,#springLen,#soundVelo").css("pointer-events", "none");
    console.log(n)
    if (n == 1) {
      springharmoneAnim = ImageAnimationINFinity("harmOneAnimation", "harmOne", springharmoneArray, 50)
      showArr = 4;

    }
    else if (n == 2) {
      springharmtwoAnim = ImageAnimationINFinity("harmTwoAnimation", "harmTwo", springharmtwoArray, 50)
      showArr = 4;

    }
    else if (n == 3) {
      springharmthreeAnim = ImageAnimationINFinity("harmThreeAnimation", "harmThree", springharmthreeArray, 50)
      showArr = 4;

    }
    else if (n == 4) {
      springharmfourAnim = ImageAnimationINFinity("harmFourAnimation", "harmFour", springharmfourArray, 40)
      showArr = 4;

    }
    else if (n == 5) {
      springharmfiveAnim = ImageAnimationINFinity("harmFiveAnimation", "harmFive", springharmfiveArray, 50)
      showArr = 4;

    }
    else if (n == 6) {
      springharmsixAnim = ImageAnimationINFinity("harmSixAnimation", "harmSix", springharmsixArray, 20)
      showArr = 10;

    }
    removeTrip();
    $("#knob,#spring,#hand").fadeOut(1000)
    console.log("spring animation")
    $("#timeperiodVal").show();
 
    result();
    $("#next").unbind().click(function () {
      $("#next").css({"display":"none"})
      $("#start").css({"display":"block"})

      if (n == 1) {
        console.log("0")
        n = 2
        clearSpring(1)
      }
      else if (n == 2) {
        console.log("1")
        n = 3
        clearSpring(2)
      }
      else if (n == 3) {
        console.log("2")
        n = 4
        clearSpring(3)
      }
      else if (n == 4) {
        console.log("3")
        n = 5
        clearSpring(4)
      }
      else if (n == 5) {
        console.log("4")
        n = 6
        clearSpring(5)
      }
      else if (n == 6) {
        console.log("5")
        n = 7
        clearSpring(6)
      }
      else if (n == 7) {
        console.log("5")
        n = 8
        clearSpring(10)

      }

      $("#knob,#spring,#hand").css({ "display": "block" })
      showArr = 3;
      removeTrip();
      setTimeout(function(){
        $("#start").css({ "pointer-events": "auto" })
      },1000)
      $("#next").css({ "pointer-events": "none" })

      $("#timeperiodVal").hide()
      $(".lenSpring").html($("#springLen").val())
      $(".velSpring").html($("#soundVelo").val())
      document.getElementById("OrdOfHarmValCan").innerHTML = n
      document.getElementById("OrdOfHarmVal").innerHTML = n
      console.log("ordr" + n)
      if (n == 7) {
        showArr = 5;
        removeTrip();
        $("#next,#start").css({ "display": "none" })
        $(".sim-controls, #mainThumb1,#harmonicsCount").css("display", "none")
        $("#mainThumb3").css("display", "block")

        $(".sim-div").css({ "width": "100%" })
        for (var i = 0; i < 6; i++) {
          $("#waveLenVal" + i).html(wlArr[i])
          $("#freqenVal" + i).html(fyArr[i])
          $("#timperiodFin" + i).html(tpArr[i])
        }
        // $("#intro").css({ "display": "block" })
      }
    })
  })

  $("#actTypes").change(function () {
    removeTrip();
    actTypes = $(this).val();
    console.log(actTypes)
    if (actTypes == "rigid") {
      showArr = 1;
      $("#firstPage,#mainThumb1,#rigidEnds,#rigidEnds,#start").css({ "display": "block" })
      $("#secondPage,#mainThumb2,#openEnd,#startOpen").css({ "display": "none" })
    }
    else {
      showArr = 6;
      $("#secondPage,#mainThumb2,#openEnd,#startOpen").css({ "display": "block" })
      $("#firstPage,#mainThumb1,#rigidEnds,#start").css({ "display": "none" })
      $("#startOpen").unbind().click(function () {
        $("#nextOpen").css({"display":"block"})
        $("#startOpen").css({"display":"none"})
  $("#nextOpen").unbind().click(function () {
          $("#nextOpen").css({"display":"none"})
          $("#startOpen").css({"display":"block"})

          showArr = 8;
          removeTrip();
          if (m == 1) {
            console.log("0")
            clearSpringOpen(1)
            m = 3
          }
          else if (m == 3) {
            console.log("1")
            clearSpringOpen(2)
            m = 5
          }
          else if (m == 5) {
            console.log("2")
            clearSpringOpen(3)
            m = 7
          }
          else if (m == 7) {
            console.log("3")
            clearSpringOpen(4)
            m = 9
          }
          else if (m == 9) {
            console.log("4")
            clearSpringOpen(5)
            m = 10
          }
          else if (m == 10) {
            console.log("5")
            clearSpringOpen(6)
            m = 10
          }
          $("#handOpen").css({ "display": "block" })
          setTimeout(function(){
            $("#startOpen").css({ "pointer-events": "auto" })
          },1000)
          $("#nextOpen").css({ "pointer-events": "none" })
          $("#timeperiodValOpen").hide();
          $(".lenSpringOpen").html($("#springLenTwo").val())
          $(".velSpringOpen").html($("#soundVeloTwo").val())
          document.getElementById("OrdOfHarmValCanOpen").innerHTML = m
          document.getElementById("OrdOfHarmValOpen").innerHTML = m
          console.log(m)
          if (m == 10) {
            showArr = 5;
            removeTrip();
            $("#nextOpen,#startOpen").css({ "display": "none" })
            $(".sim-controls, #mainThumb2,#harmonicsCountOpen").css("display", "none")
            $("#mainThumb3").css("display", "block")
    
            $(".sim-div").css({ "width": "100%" })
            for (var i = 0; i < 5; i++) {
              $("#waveLenValOpen" + i).html(wlOpenArr[i])
              $("#freqenValOpen" + i).html(fyOpenArr[i])
              $("#timperiodFinOpen" + i).html(tpOpenArr[i])
            }
            $("#introOpen").css({ "display": "block" })
          }
        })
        $("#actTypes,#springLenTwo,#soundVeloTwo").css("pointer-events", "none");
        removeTrip();
        $("#handOpen").fadeOut(1000)
        console.log("spring animation Open")      
        $("#nextOpen").css({"cursor":"pointer"})
        setTimeout(function(){
          $("#nextOpen").css({ "pointer-events": "auto" })
        },2000)
        $("#startOpen").css({ "pointer-events": "none" })
        $("#timeperiodValOpen").show();
        if (m == 1) {
          threadharmoneAnim = ImageAnimationINFinity("openHarmOneAnimation", "harmOpenOne", threadharmoneArray, 100)
          showArr = 9;
        }
        else if (m == 3) {
          threadharmtwoAnim = ImageAnimationINFinity("openHarmTwoAnimation", "harmOpenTwo", threadharmtwoArray, 100)
          showArr = 9;
        }
        else if (m == 5) {
          threadharmthreeAnim = ImageAnimationINFinity("openHarmThreeAnimation", "harmOpenThree", threadharmthreeArray, 30)
          showArr = 9;
        }
        else if (m == 7) {
          threadharmfourAnim = ImageAnimationINFinity("openHarmFourAnimation", "harmOpenFour", threadharmfourArray, 30)
          showArr = 9;
        }
        else if (m == 9) {
          threadharmfiveAnim = ImageAnimationINFinity("openHarmFiveAnimation", "harmOpenFive", threadharmfiveArray, 50)
          showArr = 11;
        }
        resultOpen();
      
      })
    }
  })
})

///////////////rigidend/////////////////////////////////

function valueofLength() {
  removeTrip();
  var x = $("#springLen").val();
  console.log(x)
  springlength = x;
  return x;
}
function valueofVelocity() {
  removeTrip();
  var x = $("#soundVelo").val();
  soundveloc = x;
  return x;
}
var wlArr = [], fyArr = [], tpArr = [];
function result() {
  var wavelengthVal = (2 * springlength) / n;
  console.log(wavelengthVal+"newwave")
  console.log( springlength +"lengthofspring")
  console.log( n +"harmonics")

  var freqencyVal = (n * soundveloc) / (2 * springlength);
  var tp = 1 / freqencyVal;
  var wl = wavelengthVal.toFixed(2);
  var fy = freqencyVal.toFixed(2);
  var tpVal = tp.toFixed(2);
  var tpVal = document.getElementById("timeperiodVal").innerHTML = tp.toFixed(5);
  wlArr.push(wl);
  fyArr.push(fy);
  tpArr.push(tpVal);
  console.log(wlArr)
  console.log(fyArr)
  console.log(tpArr)
  console.log("wavelength" + wl)
  console.log("frequency" + fy)

}
///////////////rigidend//////////////////////

///////////////openend//////////////////////

function valueofLengthOpen() {
  removeTrip();
  var x = $("#springLenTwo").val();
  springlenOpen = x;
  return x;
}
function valueofVelocityOpen() {
  removeTrip();
  var x = $("#soundVeloTwo").val();
  soundvelocOpen = x;
  return x;
}
var wlOpenArr = [], fyOpenArr = [], tpOpenArr = [];

function resultOpen() {
  var wavelengthValOpen = (4 * springlenOpen) / m;
  var freqencyValOpen = (m * soundvelocOpen) / (4 * springlenOpen);
  var tpOpen = 1 / freqencyValOpen;
  var wlOpen = wavelengthValOpen.toFixed(2);
  var fyOpen = freqencyValOpen.toFixed(2);
  var tpValOpen = tpOpen.toFixed(2);
  var tpValOpen = document.getElementById("timeperiodValOpen").innerHTML = tpOpen.toFixed(5);
  wlOpenArr.push(wlOpen);
  fyOpenArr.push(fyOpen);
  tpOpenArr.push(tpValOpen);
  console.log(wlOpenArr)
  console.log(fyOpenArr)
  console.log(tpOpenArr)
}

function clearSpring(spri) {
  var temp = ['clearAnimation(springharmoneAnim, "harmOneAnimation")', 'clearAnimation(springharmtwoAnim, "harmTwoAnimation")', 'clearAnimation(springharmthreeAnim, "harmThreeAnimation")', 'clearAnimation(springharmfourAnim, "harmFourAnimation")', 'clearAnimation(springharmfiveAnim, "harmFiveAnimation")', 'clearAnimation(springharmsixAnim, "harmSixAnimation")']
  for (var i = 0; i < temp.length; i++) {
    if ((spri != i) && (i < spri)) {
      eval(temp[i])
    }
    if (n == 7) {
      for (var i = 0; i < temp.length; i++) {
        eval(temp[i])
      }
    }
  }
}

function clearSpringOpen(spriOpen) {
  var tempOpen = ['clearAnimation(threadharmoneAnim, "openHarmOneAnimation")', 'clearAnimation(threadharmtwoAnim, "openHarmTwoAnimation")', 'clearAnimation(threadharmthreeAnim, "openHarmThreeAnimation")', 'clearAnimation(threadharmfourAnim, "openHarmFourAnimation")', 'clearAnimation(threadharmfiveAnim, "openHarmFiveAnimation")']
  for (var i = 0; i < tempOpen.length; i++) {
    if ((spriOpen != i) && (i < spriOpen)) {
      eval(tempOpen[i])
    }
    if (m == 6) {
      for (var i = 0; i < tempOpen.length; i++) {
        eval(tempOpen[i])
      }
    }
  }
}

function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
  for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length; ANIMATIONForloop++) {
    var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
    $("#" + ANIMATIONDivName).append($tempx2);
  }
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