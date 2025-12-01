// Date:-05-04-2023
// Developer:-ABHIJITH
var beakeranimationImg = []
var help = 0;
// var chngeInlength = 0;
// var chngeInjour = 0;
var execution = 0;
var thetimperiod = 0;
var thespeed = 0;
var chngeInlength = 9;
var chngeInjour = 3;
var path = "../PHY/CLA/Study_velocity_of_a_pulse_through_string/images/clock/" 
var imageClockArr=[];
var thecalculatedtimeperiod = 0;
var thecalculatedspeed = 0;
//Length9 journey 5 
var lengthninejourneyfiveArraySeconds = ["22", "15", "11"]
var lengthninejourneyfiveArrayMilliSeconds = ["50", "00", "25"]
//Length9 journey 3
var lengthninejourneyTenArraySeconds = ["13", "9", "6"]
var lengthninejourneyTenArrayMilliSeconds = ["50", "00", "75"]
//Length10 journey 5 
var lengthTenjourneyFiveArraySeconds = ["25", "16", "12"]
var lengthTenjourneyFiveArrayMilliSeconds = ["00", "50", "50"]
//Length10 journey 3
var lengthTenjourneyTenArraySeconds = ["15", "9", "7"]
var lengthTenjourneyTenArrayMilliSeconds = ["00", "90", "50"]
//Length11 journey 5 
var lengthEleventhjourneyFifthArraySeconds = ["27", "18", "13"]
var lengthEleventhjourneyFifthArrayMilliSeconds = ["50", "00", "75"]
//Length11 journey 3
var lengthEleventhjourneyTenthArraySeconds = ["16", "10", "8"]
var lengthEleventhjourneyTenthArrayMilliSeconds = ["50", "80", "25"]
//Length12 journey 5 
var lengthTwelvejourneyFifthArraySeconds = ["30", "20", "15"]
var lengthTwelvejourneyFifthArrayMilliSeconds = ["00", "00", "00"]
//Length12 journey 3
var lengthTwelvejourneyTenthArraySeconds = ["18", "12", "9"]
var lengthTwelvejourneyTenthArrayMilliSeconds = ["00", "00", "00"]
//Length13 journey 5 
var lengthThirteenjourneyFifthArraySeconds = ["32", "21", "16"]
var lengthThirteenjourneyFifthArrayMilliSeconds = ["50", "50", "25"]
//Length13 journey 3
var lengthThirteenjourneyTenthArraySeconds = ["19", "12", "9"]
var lengthThirteenjourneyTenthArrayMilliSeconds = ["50", "90", "75"]



$(window).on('load',function() {
  gt = new Gettext({ 'domain': 'messages' });
$("#expName").html(gt.gettext("Speed of a Transverse Pulse Propagated through a Stretched String"))
$("#text_001").html(gt.gettext("The correct answer"))


  // document.getElementById("expName").innerHTML = gt.gettext("<span id='titleid' > Speed of a Transverse Pulse Propagated through a Stretched String </span>");
  // $("#resultwindow").show();
  for(i = 0;i<25;i++)
	{
		j=i+1;
		imageClockArr[i] = path+"clock"+j +'.png';
	}
  ImageInitLoad(imageClockArr,"page1Div","clock","clockClass");
});


$(document).ready(function () {
    gt = new Gettext({ 'domain': 'messages' });

  FirstHelplinstruction = gt.gettext("Click and select the <br> length of the String");

  SecondHelplinstruction = gt.gettext("Click and select the journey");

  Dragelement = gt.gettext("Click and drag the String <br> and drop it on the Hook");

  commonclick = gt.gettext("Click on the Next button");

  calculateval = gt.gettext("Please find and calculate the Time  and Speed");

  reset = gt.gettext("Click on the Reset button <br> to do the experiment again");

  theInferencemsg= gt.gettext("The speed of the pulse is different for different string lengths.<br>The speed of the pulse may be different for the same length.");
  
  clickinfernce= gt.gettext("Click on the Inference button");


  // 

  //  the result window help instruction

firtResulthelp= gt.gettext("Please input Time");
SecondResulthelp= gt.gettext("Please input Number of Journey");
ThirdResulthelp= gt.gettext("Click to find Time Period");

// Second calculation


firtResulthelp2= gt.gettext("Please input Length");
SecondResulthelp2= gt.gettext("Please input Time Period");
ThirdResulthelp2= gt.gettext("Click to Show Speed");

CheckResult= gt.gettext("Click to Check Result");


	$('[data-translate]').html(function (index, originalHtml) {
    console.log(originalHtml);
    return gt.gettext(originalHtml);
  });

	$('[data-translate-value]').val(function (index, originalHtml) {
		console.log(originalHtml)
		return gt.gettext(originalHtml);
	});
});  


$(document).ready(function () {
  gt = new Gettext({ 'domain': 'messages' });
  // ThirdOScillation()
  // Help instruction
  // firstOScillation()


$('[data-translate-text]').each(function() {
    var originalText = $(this).text(); 
    var translatedText = gt.gettext(originalText);
    $(this).text(translatedText); 
    console.log(originalText + ' translated to ' + translatedText);
});

$('[data-translate-value]').val(function (index, originalVal) {
    return gt.gettext(originalVal);
});


  lengthninejourneyfiveArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();

  });

  lengthninejourneyTenArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });

  lengthTenjourneyFiveArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthTenjourneyTenArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthEleventhjourneyFifthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthEleventhjourneyTenthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthTwelvejourneyFifthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthTwelvejourneyTenthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthThirteenjourneyFifthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });
  lengthThirteenjourneyTenthArraySeconds.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });

  var simPathx = "../PHY/CLA/Study_velocity_of_a_pulse_through_string/"
  for (i = 1; i < 151; i++) {

    if (i < 10) {

      var img = "<img src='" + simPathx + "images/Thirdoscillation/string 1000" + i + ".png' class='Thirdstringwithhand d-none' id='Thirdtringoscillation" + i + "'>";
      $("#thethirdOrientationdiv").append(img);
    }
    else if (i < 100) {

      var img = "<img src='" + simPathx + "images/Thirdoscillation/string 100" + i + ".png' class='Thirdstringwithhand d-none' id='Thirdtringoscillation" + i + "'>";
      $("#thethirdOrientationdiv").append(img);
    }
    else if (i > 99) {

      var img = "<img src='" + simPathx + "images/Thirdoscillation/string 10" + i + ".png' class='Thirdstringwithhand d-none' id='Thirdtringoscillation" + i + "'>";
      $("#thethirdOrientationdiv").append(img);
    }
  }

  for (i = 1; i < 247; i++) {

    if (i < 10) {

      var img = "<img src='" + simPathx + "images/FifthWave/string000" + i + ".png' class='fifthstringwithhand d-none' id='fifthtringoscillation" + i + "'>";
      $("#thefifthOrientationdiv").append(img);
    }
    else if (i < 99) {

      var img = "<img src='" + simPathx + "images/FifthWave/string00" + i + ".png' class='fifthstringwithhand d-none' id='fifthtringoscillation" + i + "'>";
      $("#thefifthOrientationdiv").append(img);
    }
    else if (i > 99) {

      var img = "<img src='" + simPathx + "images/FifthWave/string0" + i + ".png' class='fifthstringwithhand d-none' id='fifthtringoscillation" + i + "'>";
      $("#thefifthOrientationdiv").append(img);
    }
  }


  // Endding of the animation
  // Clock animation end
  DragElement("#StringWithoutDrag", "", "", "", "", 74, 65)

  $("#thefistDroparea").droppable({
    tolerance: "touch",
    accept: "#StringWithoutDrag", drop: function () {
      drop = true;
      help = 3;

      if (chngeInlength == 9 && chngeInjour == 5) {
       
        // Timereset(3000,lengthninejourneyfiveArraySeconds[0],12)  
        $(".Predefinedstringwithhand").css({ width: 72 + "%" })

      }
      else if (chngeInlength == 10 && chngeInjour == 5) {
      
        $(".Predefinedstringwithhand").css({ width: 75 + "%" })

      }
      else if (chngeInlength == 11 && chngeInjour == 5) {
     
        $(".Predefinedstringwithhand").css({ width: 80 + "%" })

      }
      else if (chngeInlength == 12 && chngeInjour == 5) {
        
        $(".Predefinedstringwithhand").css({ width: 89 + "%" })

      }
      else if (chngeInlength == 13 && chngeInjour == 5) {
        
        $(".Predefinedstringwithhand").css({ width: 96 + "%" })

      }

      // jopurney3
      if (chngeInlength == 9 && chngeInjour == 3) {
        $(".Predefinedstringwithhand").css({ width: 72 + "%" })

      }
      else if (chngeInlength == 10 && chngeInjour == 3) {
        $(".Predefinedstringwithhand").css({ width: 75 + "%" })

      }
      else if (chngeInlength == 11 && chngeInjour == 3) {
        $(".Predefinedstringwithhand").css({ width: 80 + "%" })

      }
      else if (chngeInlength == 12 && chngeInjour == 3) {
        $(".Predefinedstringwithhand").css({ width: 89 + "%" })

      }
      else if (chngeInlength == 13 && chngeInjour == 3) {
        $(".Predefinedstringwithhand").css({ width: 96 + "%" })

      }
      $("#Predefinedstringwithhand").fadeIn();
      $("#firstPagebutton").fadeIn()
      $("#Hook").hide();
      $(".Woodenstand").hide();

      $("#StringWithoutDrag").fadeOut();
      // $("#String").fadeIn();
      // $("#Charcter").fadeIn();
      $("#stringwithhand").fadeIn();
      $("#changeInLength").css({ "opacity": "0.5", "pointer-events": "none" })
      $("#JourneyLength").css({ "opacity": "0.5", "pointer-events": "none" })
      // AnimationTotheStrings()




      if (chngeInlength == 9 && chngeInjour == 5) {
        $(".String").css({ width: 42 + "%" })
        $(".Charcter").css({ left: 63 + "%" })
        // Timereset(3000,lengthninejourneyfiveArraySeconds[0],12)  
      }
      else if (chngeInlength == 10 && chngeInjour == 5) {
      }
      else if (chngeInlength == 11 && chngeInjour == 5) {
      }
      else if (chngeInlength == 12 && chngeInjour == 5) {
      }
      else if (chngeInlength == 13 && chngeInjour == 5) {
      }

      // jopurney3
      if (chngeInlength == 9 && chngeInjour == 3) {


      }
      else if (chngeInlength == 10 && chngeInjour == 3) {
      }
      else if (chngeInlength == 11 && chngeInjour == 3) {
      }
      else if (chngeInlength == 12 && chngeInjour == 3) {
      }
      else if (chngeInlength == 13 && chngeInjour == 3) {
      }

      $("#firstPagebutton").click(function () {
        removeTrip()
        AnimationTotheStrings()
        $("#firstPagebutton").hide()
        help = 99;


      })


    }
  })


});



function DragElement(id, shadowid, rotatepos, dragdegree, dropdegree, settimeLeft, settimeTop) {
  $(id).draggable({
    containment: "#mainDiv",
    revert: function () {
      if (!drop) {
        drop = true;
        $(shadowid).fadeIn();
        $(rotatepos).css({ transform: 'rotate(' + dragdegree + 'deg)' })
        setTimeout(function () {
          $(id).animate({ left: settimeLeft + "%", top: settimeTop + "%" })
        }, 600);
        return true
      }
    }, drag: function () {
      drop = false;
      $(rotatepos).css({ transform: 'rotate(' + dropdegree + 'deg)' })
      $(shadowid).fadeOut();

      $("#theInferenceMsg").fadeOut();
      removeTrip()
      $("#Characterbulb").hide();
    }
  });
}
function valueofChangeInLength() {
  removeTrip();

  var x = document.getElementById("changeInLength").value;
  document.getElementById("valueofChangeInLength").innerHTML = x;
  chngeInlength = x;
  help = 1;
  return x;

}

function valueofJourney() {
  removeTrip();

  var yx = document.getElementById("JourneyLength").value;
  document.getElementById("valueofJourneyLength").innerHTML = yx;
  chngeInjour = yx;
  help = 2;

  // alert(yx)

  return yx;
}

// the timer

intervalSetup = null,
  startTime = null,
  pauseTime = null,
  pauseDuration = 0;
  var hr = 0, min = 0, sec = 0, ms = 0;
  function count() {
  var elapsedTime = new Date(new Date() - startTime - pauseDuration);
  ms++;
  if (ms == 60) {
    sec++;
    ms = 1;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }

  $("#minCount").text("");
  $("#minCount").text(handleZeros(min, 2));
  $("#secontCount").text("");
  $("#secontCount").text(handleZeros(sec, 2));
  $("#milliCount").text("");
  $("#milliCount").text(handleZeros(ms, 2));
}
function handleZeros(value, digit) {
  var dummyZeros = "";
  for (i = 0; i < digit; i++) {
    dummyZeros += "0";
    return (dummyZeros + value).slice(-digit);
  }
}
// Function timer rest
function SortElement(element) {
  element.sort(function () {    //random function of solution
    return 0.5 - Math.random();
  });

  a = element[0];
  b = element[1];
  c = element[2];
  d = element[3];
  return a, b, c, d;
}
function AnimationTotheStrings() {

  if (chngeInlength == 9 && chngeInjour == 5) {
    // firstOScillation()
    FiveOScillation(89, -9)


    if (lengthninejourneyfiveArraySeconds[0] == 15) {

      var A = lengthninejourneyfiveArrayMilliSeconds[0]
    }
    else if (lengthninejourneyfiveArraySeconds[0] == 22) {
      var A = lengthninejourneyfiveArrayMilliSeconds[1]
    }
    else if (lengthninejourneyfiveArraySeconds[0] == 11) {
      var A = lengthninejourneyfiveArrayMilliSeconds[2]
    }


    Timereset(7000, lengthninejourneyfiveArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthninejourneyfiveArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;
    }, 3200)
    setTimeout(() => {

      // $("#resultwindow").fadeIn();

    }, 4000);


  }
  else if (chngeInlength == 10 && chngeInjour == 5) {
    FiveOScillation(94, -10)


    if (lengthTenjourneyFiveArraySeconds[0] == 25) {

      var A = lengthTenjourneyFiveArrayMilliSeconds[0]
    }
    else if (lengthTenjourneyFiveArraySeconds[0] == 16) {
      var A = lengthTenjourneyFiveArrayMilliSeconds[1]
    }
    else if (lengthTenjourneyFiveArraySeconds[0] == 12) {
      var A = lengthTenjourneyFiveArrayMilliSeconds[2]
    }


    Timereset(7000, lengthTenjourneyFiveArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthTenjourneyFiveArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }
  else if (chngeInlength == 11 && chngeInjour == 5) {
    FiveOScillation(98, -10)

    if (lengthEleventhjourneyFifthArraySeconds[0] == 55) {

      var A = lengthEleventhjourneyFifthArrayMilliSeconds[0]
    }
    else if (lengthEleventhjourneyFifthArraySeconds[0] == 36) {
      var A = lengthEleventhjourneyFifthArrayMilliSeconds[1]
    }
    else if (lengthEleventhjourneyFifthArraySeconds[0] == 27) {
      var A = lengthEleventhjourneyFifthArrayMilliSeconds[2]
    }


    Timereset(7000, lengthEleventhjourneyFifthArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthEleventhjourneyFifthArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }
  else if (chngeInlength == 12 && chngeInjour == 5) {
    FiveOScillation(105, -11)

    if (lengthTwelvejourneyFifthArraySeconds[0] == 30) {

      var A = lengthTwelvejourneyFifthArrayMilliSeconds[0]
    }
    else if (lengthTwelvejourneyFifthArraySeconds[0] == 20) {
      var A = lengthTwelvejourneyFifthArrayMilliSeconds[1]
    }
    else if (lengthTwelvejourneyFifthArraySeconds[0] == 15) {
      var A = lengthTwelvejourneyFifthArrayMilliSeconds[2]
    }


    Timereset(7000, lengthTwelvejourneyFifthArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthTwelvejourneyFifthArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }
  else if (chngeInlength == 13 && chngeInjour == 5) {
    FiveOScillation(113, -12)

    if (lengthThirteenjourneyFifthArraySeconds[0] == 32) {

      var A = lengthThirteenjourneyFifthArrayMilliSeconds[0]
    }
    else if (lengthThirteenjourneyFifthArraySeconds[0] == 21) {
      var A = lengthThirteenjourneyFifthArrayMilliSeconds[1]
    }
    else if (lengthThirteenjourneyFifthArraySeconds[0] == 16) {
      var A = lengthThirteenjourneyFifthArrayMilliSeconds[2]
    }


    Timereset(7000, lengthThirteenjourneyFifthArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthThirteenjourneyFifthArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }




  // jopurney=========================================================+++++++++++++++++++++++++++++Third Journey+++++++++++++++++++==========================================
  if (chngeInlength == 9 && chngeInjour == 3) {
    $(".Predefinedstringwithhand").css(width = 75 + "%")
    ThirdOScillation(89, -9)
    if (lengthninejourneyTenArraySeconds[0] == 13) {

      var A = lengthninejourneyTenArrayMilliSeconds[0]
    }
    else if (lengthninejourneyTenArraySeconds[0] == 9) {
      var A = lengthninejourneyTenArrayMilliSeconds[1]
    }
    else if (lengthninejourneyTenArraySeconds[0] == 6) {
      var A = lengthninejourneyTenArrayMilliSeconds[2]
    }


    Timereset(4300, lengthninejourneyTenArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthninejourneyTenArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }

  // nxt
  else if (chngeInlength == 10 && chngeInjour == 3) {
    ThirdOScillation(94, -10)

    if (lengthTenjourneyTenArraySeconds[0] == 15) {

      var A = lengthTenjourneyTenArrayMilliSeconds[0]
    }
    else if (lengthTenjourneyTenArraySeconds[0] == 9) {
      var A = lengthTenjourneyTenArrayMilliSeconds[1]
    }
    else if (lengthTenjourneyTenArraySeconds[0] == 7) {
      var A = lengthTenjourneyTenArrayMilliSeconds[2]
    }


    Timereset(4300, lengthTenjourneyTenArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthTenjourneyTenArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)
  }
  else if (chngeInlength == 11 && chngeInjour == 3) {
    // 
    ThirdOScillation(98, -10)

    if (lengthEleventhjourneyTenthArraySeconds[0] == 16) {

      var A = lengthEleventhjourneyTenthArrayMilliSeconds[0]
    }
    else if (lengthEleventhjourneyTenthArraySeconds[0] == 10) {
      var A = lengthEleventhjourneyTenthArrayMilliSeconds[1]
    }
    else if (lengthEleventhjourneyTenthArraySeconds[0] == 8) {
      var A = lengthEleventhjourneyTenthArrayMilliSeconds[2]
    }


    Timereset(4300, lengthEleventhjourneyTenthArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthEleventhjourneyTenthArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)


    // 
  }
  else if (chngeInlength == 12 && chngeInjour == 3) {
    ThirdOScillation(105, -11)

    if (lengthTwelvejourneyTenthArraySeconds[0] == 18) {

      var A = lengthTwelvejourneyTenthArrayMilliSeconds[0]
    }
    else if (lengthTwelvejourneyTenthArraySeconds[0] == 12) {
      var A = lengthTwelvejourneyTenthArrayMilliSeconds[1]
    }
    else if (lengthTwelvejourneyTenthArraySeconds[0] == 9) {
      var A = lengthTwelvejourneyTenthArrayMilliSeconds[2]
    }


    Timereset(4300, lengthTwelvejourneyTenthArraySeconds[0], A)

    setTimeout(function () {
      var a = lengthTwelvejourneyTenthArraySeconds[0];
      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;

    }, 3200)


  }
  else if (chngeInlength == 13 && chngeInjour == 3) {
    ThirdOScillation(113, -12)

    if (lengthThirteenjourneyTenthArraySeconds[0] == 19) {

      var A = lengthThirteenjourneyTenthArrayMilliSeconds[0]
      var min = 1;
      var sec = 50;

      // setTimeout(function () {
      //   $("#minCount").text("01");
      //   $("#secontCount").text("05");
      // }, 3200)

    }
    else if (lengthThirteenjourneyTenthArraySeconds[0] == 12) {
      var A = lengthThirteenjourneyTenthArrayMilliSeconds[1]
    }
    else if (lengthThirteenjourneyTenthArraySeconds[0] == 9) {
      var A = lengthThirteenjourneyTenthArrayMilliSeconds[2]
    }


    Timereset(4300, lengthThirteenjourneyTenthArraySeconds[0], A)

    setTimeout(function () {

      var a = lengthThirteenjourneyTenthArraySeconds[0];

      var c = a / chngeInjour;

      var speed = chngeInlength / c;
      thetimperiod = c;
      thespeed = speed;


    }, 3200)
  }
}
function Timereset(resettime, SecondCount, millisecondCount) {

  $(".stopWatchDiv").hide()

  intervalSetup = null,
    startTime = null,
    pauseTime = null,
    pauseDuration = 0;
  hr = 0, min = 0, sec = 0, ms = 0;

  $("#minCount").text("");
  $("#minCount").text(handleZeros(min, 2));
  $("#secontCount").text("");
  $("#secontCount").text(handleZeros(sec, 2));
  $("#milliCount").text("");
  $("#milliCount").text(handleZeros(ms, 2));
  var intervalSetup = setInterval(count, 10);
  setTimeout(function () {

    clearInterval(intervalSetup)
    $("#secontCount").text(SecondCount)
    $("#milliCount").text(millisecondCount)


    help = 4;

    result()
    helpCheck()
  }, resettime)

}

function helpCheck(){
  $("#Theinputtime").keyup(function () { 

    if ((document.getElementById('Theinputtime').value == '')) {
      help = 4;
    }
    else if((document.getElementById('Theinputjourney').value == '')){
      help=17;
    }
    else{
      help=18;
    }

    
  });

  $("#Theinputjourney").keyup(function () { 
    if ((document.getElementById('Theinputjourney').value == '')) {
      help=17;

    }
    else if(document.getElementById('Theinputtime').value == ''){
      help=4;
    }
  else{
  help=18;
}
    
  });
}
function Secondhelp(){
  $("#Theinputlength").keyup(function () { 
removeTrip()
    if ((document.getElementById('Theinputlength').value == '')) {
      help = 65;
    }
    else if((document.getElementById('Theinputtimeperiod').value == '')){
      help=19;
    }
    else{
      help=20;
    }

    
  });

  $("#Theinputtimeperiod").keyup(function () { 
    removeTrip()
    if ((document.getElementById('Theinputtimeperiod').value == '')) {
      help=19;

    }
    else if(document.getElementById('Theinputlength').value == ''){
      help=65;
    }
  else{
  help=20;
}
    
  });
}




function result() {

  $("#firtsResult").click(function () {

    Secondhelp();
    removeTrip();



    if ((document.getElementById('Theinputtime').value == '')) {
      ResponsiveHelpMessage('#Theinputtime',"null",'n',firtResulthelp,false,3500)

    help = 4;
      

    } else if (document.getElementById('Theinputjourney').value == '') {
      alert("Please enter Number of journey")
      ResponsiveHelpMessage('#Theinputjourney',"null",'n',SecondResulthelp,false,3500)

      help = 4;

    }
    else {
      help=65;

      // $("#firtsResult").css('pointer-events', 'auto');

      const message = document.getElementById("Theinputtime");
      const messages = document.getElementById("Theinputjourney");

      $("#Theinputtime").css({ "pointer-events": "none" })
      $("#Theinputjourney").css({ "pointer-events": "none" })

      var Firstval = message.value;
      var Secondval = messages.value;
      // var 
      var theres = Firstval / Secondval;
      var thespeedresult = theres + 's';

      document.getElementById("TheOutput").setAttribute('value', thespeedresult);

      thecalculatedtimeperiod = theres;

      // 
      $("#secondfirstresult").fadeIn(500)

      $("#firstRow2").fadeIn();
      $("#firstRow").fadeIn();
      $("#firstRow3").fadeIn();
    }
  })
  $("#SecondResult").click(function () {

    help=78;
    removeTrip();
    if ((document.getElementById('Theinputlength').value == '')) {
      


    } else if (document.getElementById('Theinputtimeperiod').value == '') {
      

    }
    else {



      const length = document.getElementById("Theinputlength");
      const timeperiod = document.getElementById("Theinputtimeperiod");

      var Firstvalues = length.value;
      var Secondvalues = timeperiod.value;
      // var 
      var theFinaloutput = Firstvalues / Secondvalues;

      document.getElementById("TheOutput2").setAttribute('value', theFinaloutput + "m/s");

      thecalculatedspeed = theFinaloutput;


      setTimeout(function () {
        $("#CheckResult").fadeIn();


        $("#CheckResult").click(function () {

          help = 6;
          removeTrip()
          if (parseInt(thecalculatedtimeperiod) == parseInt(thetimperiod) && parseInt(thecalculatedspeed) == parseInt(thespeed)) {
            theCorrectAnimation()
            $("#inference").fadeIn();

          }
          else {

          help = 7;

            $(".stopWatchDiv").hide();
            $("#thewrongansweerdiv").fadeIn();
            $("#resultwindow").fadeOut();
            $("#WrongTimeperiod").text(thetimperiod + "s");
            $("#WrongTimeSpeed").text(parseInt(thespeed) + "m/s");
          }
        })

      }, 200)
    }
  })
}
function theCorrectAnimation() {

  $("#writeAnsw").animate({ top: 61 + "%" }, function () {
    $(this).animate({ top: 100 + "%" }, 2000)
  }
  ), 5000
}
function firstOScillation() {
  $("#Predefinedstringwithhand").hide();
  ImageAnimationOneTime("clockClass", "clock", imageClockArr, 100, 0)
  $("#firststringoscillation1").removeClass("d-none");
  var ii = 0;
  var xx = setInterval(function () {
    $("#firststringoscillation" + ii).addClass("d-none");
    ii++;
    if (ii < 102) {
      // ImageAnimationOneTime("clockClass","clock",imageClockArr,"page1Div",0,0);//animation of clock
      $("#firststringoscillation" + ii).removeClass("d-none")
    }

  }, 30)
  setTimeout(() => {
    clearInterval(xx)
    $("#firststringoscillation102").removeClass("d-none")
  }, 88 * 35);
}

function ThirdOScillation(width, left) {
  ImageAnimationOneTime("clockClass", "clock", imageClockArr, 190, 0)
  $(".Thirdstringwithhand ").css({ width: width + "%", left: left + "%" })
  $("#Predefinedstringwithhand").hide();

  $("#Thirdtringoscillation1").removeClass("d-none");
  var ii = 0;
  var xx = setInterval(function () {
    $("#Thirdtringoscillation" + ii).addClass("d-none");
    ii++;
    if (ii < 149) {
      // ImageAnimationOneTime("clockClass","clock",imageClockArr,"page1Div",0,0);//animation of clock
      $("#Thirdtringoscillation" + ii).removeClass("d-none")
    }

  }, 30)
  setTimeout(() => {

    clearInterval(xx)
    $("#Thirdtringoscillation149").removeClass("d-none")
    $("#resultwindow").fadeIn();
    $(".stopWatchDiv").fadeIn();
  
  }, 100 * 45);
}

// Five osicllation
function FiveOScillation(width, left) {
  ImageAnimationOneTime("clockClass", "clock", imageClockArr, 300, 0)
  $(".fifthstringwithhand ").css({ width: width + "%", left: left + "%" })
  $("#Predefinedstringwithhand").hide();

  $("#fifthtringoscillation1").removeClass("d-none");
  var ii = 0;
  var xx = setInterval(function () {
    $("#fifthtringoscillation" + ii).addClass("d-none");
    ii++;
    if (ii < 246) {
      // ImageAnimationOneTime("clockClass","clock",imageClockArr,"page1Div",0,0);
      $("#fifthtringoscillation" + ii).removeClass("d-none")
    }

  }, 28)
  setTimeout(() => {

    clearInterval(xx)
    $("#fifthtringoscillation246").removeClass("d-none")
    $("#resultwindow").fadeIn();
    $(".stopWatchDiv").fadeIn();
  }, 100 * 75);
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

