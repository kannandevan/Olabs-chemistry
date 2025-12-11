var ttttt = 0;
var ttttt2 = 0;
var ttttt3 = 0;
var ttttt4 = 0;

var question_OneStatus=0;
var question_OneStatus2=0;
var gt, sliderSelect = 30;
var statusBit = false;
var statusBitLight = false;
var sliderValue = 0.5;
var helpMsgCount = 0;
var lightHelp = 0;
var testMS = false;
var i = 0;
var help;
var tempGlobal = 1;
var j = 0;
var hasBeenClicked = false; var click2 = false; var click3 = false; var click4 = false;
var clicked60 = false; var a1 = false; var a2 = false; var a3 = false;
var b1 = false; var b2 = false; var b3 = false; var b4 = false;
var metSound30, metSound60, metSound90, metSound120;
var dropdownIndex = 30;
var c1 = false; var c2 = false; var c3 = false; var c4 = false;
var temp1ForSoundOne = true, temp1ForSoundTwo = true, temp1ForSoundThree = true, temp1ForSoundFour = true;
var tempForLightOne = true, tempForLightTwo = true, tempForLightThree = true, tempForLightFour = true;
var s = 0;
var ss = 0;
var timerArray = ["../PHY/UPS/Motion_of_a_ball_on_an_inclined_track/images/TIMER 3.png",
  "../PHY/UPS/Motion_of_a_ball_on_an_inclined_track/images/TIMER 2.png",
  "../PHY/UPS/Motion_of_a_ball_on_an_inclined_track/images/TIMER 1.png", ""]
$(document).ready(function () {

//  alert(1)

  $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', '');

  // $('#next_btn').show();


  $("#inference").hide();

  $("#second").click(function () {
    statusBit = true;
  })
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("Motion of a Ball on an Inclined Track");
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  helpMsg = [gt.gettext("Choose the correct answer"), gt.gettext("Select the beats per minute (BPM)<br> in metronome."),
  gt.gettext("Click on the Start Button."), gt.gettext("Click on the Red button<br>on the metronome corresponding<br>to the beep sound."), gt.gettext("Click on the Show Scale button."), gt.gettext("Click on the Inference button"), gt.gettext("Click on the Next button"),
  gt.gettext("Click on the Red button<br>on the Strobe light<br>corresponding to the<br>light beams"), gt.gettext("Select the time interval"), gt.gettext("Click on the reset button<br> to repeat the experiment.")];
  Inference_msg = [gt.gettext("The distance covered by the ball in successive <br>intervals goes on increasing by equal amounts <br>when the ball rolls down the inclined plane."), gt.gettext('The ball moving on an inclined track covers successively <br>longer distances in equal intervals of time. This shows that<br> the speed of the ball increases as it moves down an inclined track.')]
  $("#scale").attr("disabled", true);
  $("#start").attr("disabled", true);
  // alert(1)
  // QuizCoreExecuter(1, "For motion of a ball on an inclined plane what do you expect will be the distance covered by the ball in successive equal intervals of time?", "Distance covered remains same in each interval  ", "Distance covered in each interval decreases with time  ", "Distance covered in each interval increases with time", "None of these", "Distance covered in each interval increases with time", 1, 4)
  startButton();
  $(".TimeValues").css({ 'display': 'none' });
  $("#subDiv5,#subDiv6,#subDiv7,#subDiv8").css({ 'display': 'none' });
  $("#reset").click(function () {
    window.location.reload();
  });
});

function startButton() {
  helpMsgCount = 1;
  removeTrip()
  console.log(dropdownIndex)
  $("#dropdown2").css({ 'display': 'none' });
  $("#start").attr("disabled", false);
  $("#bpm").click(function () {
    helpMsgCount = 2;
    removeTrip()
    console.log("click")

  })
  $("#start").click(function () {
    removeTrip()
    $("#start").attr("disabled", true);
    if (dropdownIndex == "30") {
      statusBit = true;
      removeTrip()
      $("#subDiv2,#subDiv3,#subDiv4,#subDiv5,#subDiv6,#subDiv7").css({ 'display': 'none' });
      $("#subDiv1").css({ 'display': 'block' });
      thirtyBpm()
    }
    else if (dropdownIndex == "40") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv2,#subDiv4").css({ 'display': 'none' });
      $("#subDiv3").css({ 'display': 'block' });
      FourtyBpm()
    }
    else if (dropdownIndex == "50") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv2,#subDiv3").css({ 'display': 'none' });
      $("#subDiv4").css({ 'display': 'block' });
      FiftyBpm()
    }
    else if (dropdownIndex == "60") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv3,#subDiv4").css({ 'display': 'none' });
      $("#subDiv2").css({ 'display': 'block' });
      SixtyBpm()
    }
  });
  $("#bpm").change(function () {
    statusBit = true;
    sliderSelect = $(this).val();
    dropdownIndex = $('#bpm option:selected').val();
    console.log(dropdownIndex)
    $("#start").attr("disabled", false);
    if (dropdownIndex == "30") {
      statusBit = true;
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv2,#subDiv3,,#subDiv4,#subDiv5,#subDiv6,#subDiv7").css({ 'display': 'none' });
      $("#subDiv1").css({ 'display': 'block' });
    }
    else if (dropdownIndex == "40") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv2,#subDiv4,.scaleDiv").css({ 'display': 'none' });
      $("#subDiv3").css({ 'display': 'block' });
    }
    else if (dropdownIndex == "50") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv2,#subDiv3,.scaleDiv").css({ 'display': 'none' });
      $("#subDiv4").css({ 'display': 'block' });
    }
    else if (dropdownIndex == "60") {
      helpMsgCount = 2;
      removeTrip()
      $("#subDiv1,#subDiv3,#subDiv4,.scaleDiv").css({ 'display': 'none' });
      $("#subDiv2").css({ 'display': 'block' });
    }
  })
}
var icClicked=false;
function thirtyBpm() {
  // alert("AA")
  removeTrip()
  helpMsgCount = 3;
  removeTrip()
  setTimeout(function () {
    ImageAnimationOneTime("newtimerAni", "stopwatch", timerArray, 500, 0)
  }, 500)
  $("#start").attr("disabled", false);
  metSound30 = document.getElementById("metronomeSound");
  $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', 'pointer');
  if (temp1ForSoundOne) {
    $("#warning1").css({ 'display': 'block' });
    $("#start").attr("disabled", true);
    $("#bpm").attr("disabled", true);
    $("#ball").animate({ opacity: "1" }, 2000, function () {
      $("#ball").animate({ left: 6 + '%' }, function () {  //Start ball animation for 30bpm
        $("#ball").animate({ left: 55 + '%', top: 53 + '%' }, 12500, 'linear', function () {
          $("#ball").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
            $("#ball").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
              $("#ball").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
            });
          });
        });

        
        $("#redMark0sec").css({ 'display': 'block' });
        $('#needleDiv').animate({ borderSpacing: -45 }, {
          step: function (now, fx) {
            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
            $(this).css('transform', 'rotate(' + now + 'deg)');
          },
          duration: 'slow'
        }, 'linear');
        metSound30.play();  // play audio     
        $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', 'pointer');   
        setTimeout(function () {
          console.log("sound 1");
          icClicked = true;
         
          $('#clickButton').click(function () { // 1st click
            if(icClicked==true){
              console.log("metronomeClick1");
              click2 = false;
              click3 = false;
              click4 = false;
             $('#clickButton').unbind("click");
             metHelp30 = 2;
             removeTrip()
             hasBeenClicked = true;
             icClicked = false;
            }         
          });
          setTimeout(function () {
            if (hasBeenClicked == false) {
              $("#ball").stop();
              $("#ball").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
              $("#start").attr("disabled", true);
              $("#redMark0sec").css({ 'display': 'none' });
              metSound30.pause();
              metSound30.currentTime = 0.0;
              $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', '');
              $("#warning1").css({ 'display': 'block' });
              thirtyBpm();
              $('#needleDiv').animate({ borderSpacing: 0 }, {
                step: function (now, fx) {
                  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                  $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                  $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
              }, 'linear');
            }
            else {
              hasBeenClicked = false;
              $("#redMark2sec").css({ 'display': 'block' });
              $('#needleDiv').animate({ borderSpacing: 45 }, {
                step: function (now, fx) {
                  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                  $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                  $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 'slow'
              }, 'linear');
              
              setTimeout(function () {  //2nd click
                icClicked = true;
                $('#clickButton').click(function () {
                  if (icClicked== true){
                    $('#clickButton').unbind("click");
                    metHelp30 = 3;
                    removeTrip()
                    click2 = true;
                    icClicked = false;
                  }
                 
                });
                setTimeout(function () {
                  if (click2 == false) {
                    $("#ball").stop();
                    $("#ball").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                    metSound30.pause();
                    metSound30.currentTime = 0.0;
                    $("#redMark0sec,#redMark2sec").css({ 'display': 'none' });
                    thirtyBpm();
                  }
                  else {
                    click2 = false;
                    $("#redMark4sec").css({ 'display': 'block' });
                    $('#needleDiv').animate({ borderSpacing: -45 }, {
                      step: function (now, fx) {
                        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                        $(this).css('transform', 'rotate(' + now + 'deg)');
                      },
                      duration: 'slow'
                    }, 'linear');
                    setTimeout(function () {    // third click
                      icClicked = true;
                      $('#clickButton').click(function () {
                        if(  icClicked == true){
                          $('#clickButton').unbind("click");
                          metHelp30 = 4;
                          removeTrip()
                          click3 = true;
                          icClicked = false;
                        }
                        
                      });
                      setTimeout(function () {
                        if (click3 == false) {
                          $("#ball").stop();
                          $("#ball").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                          metSound30.pause();
                          metSound30.currentTime = 0.0;
                          $("#redMark0sec,#redMark2sec,#redMark4sec").css({ 'display': 'none' });
                          thirtyBpm();
                        }
                        else {
                          click3 =false;
                          $("#redMark6sec").css({ 'display': 'block' });
                          $('#needleDiv').animate({ borderSpacing: 45 }, {
                            step: function (now, fx) {
                              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                              $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                              $(this).css('transform', 'rotate(' + now + 'deg)');
                            },
                            duration: 'slow'
                          }, 'linear');
                          setTimeout(function () {   // fourth click
                            icClicked = true;
                            console.log("sound 4");
                            $('#clickButton').click(function () {  
                              if( icClicked == true){
                                $('#clickButton').unbind("click");                     
                                helpMsgCount = 4;
                                removeTrip()
                                click4 = true;
                                icClicked = false;
                              }
                             
                            });
                            setTimeout(function () {
                              if (click4 == false) {
                                $("#ball").stop();
                                $("#ball").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                                metSound30.pause();
                                metSound30.currentTime = 0.0;
                                $("#redMark0sec,#redMark2sec,#redMark4sec,#redMark6sec").css({ 'display': 'none' });
                                thirtyBpm();
                              }
                              else {
                                click4 = false
                                metSound30.pause();
                                metSound30.currentTime = 0;
                                $("#redMark8sec").css({ 'display': 'block' });
                                $("#warning1").css({ 'display': 'none' });
                                $("#clickButton").css('cursor', 'default');
                                $("#scale").attr("disabled", false);
                                i++;
                                $('#needleDiv').animate({ borderSpacing: 0 }, {
                                  step: function (now, fx) {
                                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('transform', 'rotate(' + now + 'deg)');
                                  },
                                  duration: 'slow'
                                }, 'linear');
                                console.log(i)
                                $('#scale').click(function () { // click scale button                             
                                  helpMsgCount = 5;
                                  removeTrip()
                                  $(".scaleDiv").show();
                                  $("#bpm").attr("disabled", false);
                                  $("#scale").attr("disabled", true);                           
                                  if (i == 4) {                               
                                    commonInf()
                                  }
                                });
                              }
                            }, 950);
                          }, 2500);
                        }
                      }, 950);
                      console.log("sound 3");
                    }, 1700);
                  }
                }, 950);
                console.log("sound 2");
              }, 1500);
            }
          }, 800);
        }, 1200);
      });
    });
    $("#first").attr("disabled", true);
  }
}
var SixClicked=false;
function SixtyBpm() {
  helpMsgCount = 12;
  removeTrip()
  $("#start").attr("disabled", false);
  $("#ball").stop();
  $("#scale").attr("disabled", true);
  metSound60 = document.getElementById("metronomeSound2");
  $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', 'pointer');
  if (temp1ForSoundTwo) {
    $("#warning2").css({ 'display': 'block' });
    $("#start").attr("disabled", true);
    $("#bpm").attr("disabled", true);
    $("#ball2").animate({ opacity: "1" }, 100, function () {
      $("#ball2").animate({ left: 55 + '%', top: 53 + '%' }, 4000, 'linear', function () {
        $("#ball2").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
          $("#ball2").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
            $("#ball2").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
          });
        });
      });
      $("#greenMark0sec").css({ 'display': 'block' });
      metSound60.play();
      $('#needleDiv60').animate({ borderSpacing: -45 }, {
        step: function (now, fx) {
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 'fast'
      }, 'linear');
      setTimeout(function () {
        SixClicked =true;
        console.log('60sound:1');
        $("#clickButton2").css('cursor', 'pointer');
        $('#clickButton2').click(function () { // Click metronome(1st click)
          // alert(1)
          if(SixClicked ==true){
            a1 = false;
            a2 = false;
            a3 = false;
            $('#clickButton2').unbind("click");
            clicked60 = true;
            SixClicked = false;
          }
        });
        setTimeout(function () {
          if (clicked60 == false) {
            $("#ball2").stop();
            $("#ball2").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
            $("#start").attr("disabled", true);
            metSound60.pause();
            metSound60.currentTime = 0.0;
            $("#greenMark0sec").css({ 'display': 'none' });
            SixtyBpm()
            $('#needleDiv60').animate({ borderSpacing: 0 }, {
              step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
              },
              duration: 'fast'
            }, 'linear');
          }
          else {
            clicked60=false;
            $("#greenMark1sec").css({ 'display': 'block' });
            $('#needleDiv60').animate({ borderSpacing: 45 }, {
              step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
              },
              duration: 'fast'
            }, 'linear');
            setTimeout(function () {
              SixClicked =true;
              console.log('60sound:2');
              $('#clickButton2').click(function () { // metronome 2nd click)
                if(SixClicked ==true){
                  $('#clickButton2').unbind("click");
                  a1 = true;
                }
              });
              setTimeout(function () {
                if (a1 == false) {
                  $("#ball2").stop();
                  $("#ball2").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                  metSound60.pause();
                  metSound60.currentTime = 0.0;
                  $("#greenMark1sec,#greenMark0sec").css({ 'display': 'none' });
                  SixtyBpm()
                }
                else {
                  a1 = false;
                  $("#greenMark2sec").css({ 'display': 'block' });
                  $('#needleDiv60').animate({ borderSpacing: -45 }, {
                    step: function (now, fx) {
                      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                      $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                      $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 'fast'
                  }, 'linear');
                  setTimeout(function () {
                    SixClicked =true;
                    console.log('60sound:3');
                    $('#clickButton2').click(function () { // metronome 3rd click)
                      if( SixClicked == true){
                        $('#clickButton2').unbind("click");
                        a2 = true;
                        SixClicked =false;
                      }                   
                    });
                    setTimeout(function () {
                      if (a2 == false) {
                        $("#ball2").stop();
                        $("#ball2").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                        metSound60.pause();
                        metSound60.currentTime = 0.0;
                        $("#greenMark1sec,#greenMark2sec,#greenMark0sec").css({ 'display': 'none' });
                        SixtyBpm()
                      }
                      else {
                        a2 = false;
                        $("#greenMark3sec").css({ 'display': 'block' });
                        $('#needleDiv60').animate({ borderSpacing: 45 }, {
                          step: function (now, fx) {
                            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                          },
                          duration: 'fast'
                        }, 'linear');
                        setTimeout(function () {
                          SixClicked =true;
                          console.log('60sound:4');
                          $('#clickButton2').click(function () { // metronome 4th click)
                            if(SixClicked ==true){
                              $('#clickButton2').unbind("click");
                              helpMsgCount = 13;
                              removeTrip()
                              a3 = true;
                              SixClicked =false;
                            }                          
                          });
                          setTimeout(function () {
                            if (a3 == false) {
                              $("#ball2").stop();
                              $("#ball2").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                              metSound60.pause();
                              metSound60.currentTime = 0.0;
                              $("#greenMark1sec,#greenMark2sec,#greenMark3sec,#greenMark0sec").css({ 'display': 'none' });
                              SixtyBpm()
                            }
                            else {
                              a3 = false;
                              metSound60.pause();
                              metSound60.currentTime = 0.0;
                              $("#greenMark4sec").css({ 'display': 'block' });
                            
                              $("#metronome").css('cursor', 'default');
                              $("#scale").attr("disabled", false);
                              $("#warning2").css({ 'display': 'none' });
                              i++;
                              $('#needleDiv60').animate({ borderSpacing: 0 }, {
                                step: function (now, fx) {
                                  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                  $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                  $(this).css('transform', 'rotate(' + now + 'deg)');
                                },
                                duration: 'fast'
                              }, 'linear');
                              console.log(i)
                              $('#scale').click(function () { // click scale button
                               
                                // console.log(helpMsgCount, "meenu")
                                $("#bpm").attr("disabled", false);
                                $(".scaleDiv60").show();
                                $("#scale").attr("disabled", true);
                                if (i == 4) {
                                  commonInf()
                                }
                              });
                            }
                          }, 700);
                        }, 450);
                      }
                    }, 700);
                  }, 500);
                }
              }, 700);
            }, 500);
          }
        }, 700);
      }, 500);
    });
    $("#fourth").attr("disabled", true);
  }
}
var fourClicked=false;
function FourtyBpm() {
  // alert()
  removeTrip()
  helpMsgCount = 6;
  removeTrip()
  $("#start").attr("disabled", false);
  $("#scale").attr("disabled", true);
  $("#start,#bpm").attr("disabled", false);
  metSound90 = document.getElementById("metronomeSound3");
  if (temp1ForSoundThree) {
    $("#warning3").css({ 'display': 'block' });
    $("#start").attr("disabled", true);
    $("#bpm").attr("disabled", true);
    $("#ball3").animate({ left: 55 + '%', top: 53 + '%' }, 12500, 'linear', function () {
      $("#ball3").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
        $("#ball3").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
          $("#ball3").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
        });
      });
    });
    $("#blackMark0sec").css({ 'display': 'block' });
    $('#needleDiv40').animate({ borderSpacing: -45 }, {
      step: function (now, fx) {
        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
        $(this).css('transform', 'rotate(' + now + 'deg)');
      },
      duration: 'slow'
    }, 'linear');
    metSound90.play();
    setTimeout(function () {
      fourClicked=true;
      console.log('90sound:1');
      $("#clickButton3").css('cursor', 'pointer');
      $('#clickButton3').click(function () { // Click metronome(1st click)
        if(fourClicked==true){
          b2 = false;
          b3 = false;
          b4 = false;
          $('#clickButton3').unbind("click");
          metHelp40 = 2;
          b1 = true;
          fourClicked=false;
        }
      });
      setTimeout(function () {
        if (b1 == false) {
          $("#ball3").stop();
          $("#ball3").css({ left: 6 + '%', top: 42 + '%' }, 1000, 'linear');
          metSound90.pause();
          metSound90.currentTime = 0.0;
          $("#blackMark0sec").css({ 'display': 'none' });
          FourtyBpm()
          $('#needleDiv40').animate({ borderSpacing: 0 }, {
            step: function (now, fx) {
              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
              $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
              $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
          }, 'linear');
        }
        else {
          b1 =false;
          $("#blackMark06sec").css({ 'display': 'block' });
          $('#needleDiv40').animate({ borderSpacing: 45 }, {
            step: function (now, fx) {
              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
              $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
              $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
          }, 'linear');
          $("#blackMark12sec,#blackMark18sec,#blackMark24sec").css({ 'display': 'none' });
          setTimeout(function () {
            fourClicked = true;
            console.log('90sound:2');
            $('#clickButton3').click(function () { // metronome 2nd click
              if(fourClicked==true){
                $('#clickButton3').unbind("click");
                b2 = true;
                fourClicked = false;
              }
            });
            setTimeout(function () {
              if (b2 == false) {
                $("#ball3").stop();
                $("#ball3").css({ left: 6 + '%', top: 42 + '%' }, 1000, 'linear');
                metSound90.pause();
                metSound90.currentTime = 0.0;
                $("#blackMark0sec,#blackMark06sec").css({ 'display': 'none' });
                FourtyBpm()
              }
              else {
                b2 =false;
                $("#blackMark12sec").css({ 'display': 'block' });
                $('#needleDiv40').animate({ borderSpacing: -45 }, {
                  step: function (now, fx) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                  },
                  duration: 'slow'
                }, 'linear');
                setTimeout(function () {
                  fourClicked=true;
                  console.log('90sound:3');
                  $('#clickButton3').click(function () { // metronome 3rd click
                    if(fourClicked==true){
                      $('#clickButton3').unbind("click");
                      b3 = true;
                      fourClicked = false;
                    }
                  });
                  setTimeout(function () {
                    if (b3 == false) {
                      $("#ball3").stop();
                      $("#ball3").css({ left: 6 + '%', top: 42 + '%' }, 1000, 'linear');
                      metSound90.pause();
                      metSound90.currentTime = 0.0;
                      $("#blackMark0sec,#blackMark06sec,#blackMark12sec").css({ 'display': 'none' });
                      FourtyBpm()
                    }
                    else {
                      b3 =false;
                      $("#blackMark18sec").css({ 'display': 'block' });
                      $('#needleDiv40').animate({ borderSpacing: 45 }, {
                        step: function (now, fx) {
                          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                          $(this).css('transform', 'rotate(' + now + 'deg)');
                        },
                        duration: 'slow'
                      }, 'linear');
                      setTimeout(function () {
                        fourClicked=true;
                        console.log('90sound:4');
                        $('#clickButton3').click(function () { // metronome 4th click
                          if( fourClicked==true){
                            $('#clickButton3').unbind("click");
                            helpMsgCount = 7;
                            removeTrip()
                            b4 = true;
                            fourClicked=false;
                          }
                        });
                        setTimeout(function () {
                          if (b4 == false) {
                            $("#ball3").stop();
                            $("#ball3").css({ left: 6 + '%', top: 42 + '%' }, 1000, 'linear');
                            metSound90.pause();
                            metSound90.currentTime = 0.0;
                            $("#blackMark0sec,#blackMark06sec,#blackMark12sec,#blackMark18sec").css({ 'display': 'none' });
                            FourtyBpm()
                          }
                          else {
                            b4 =false;
                            metSound90.pause();
                            metSound90.currentTime = 0.0;
                            $("#blackMark24sec").css({ 'display': 'block' });
                            $("#warning3").css({ 'display': 'none' });
                            $("#metronome").css('cursor', 'default');
                            $("#scale").attr("disabled", false);
                            i++;
                            $('#needleDiv40').animate({ borderSpacing: 0 }, {
                              step: function (now, fx) {
                                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                $(this).css('transform', 'rotate(' + now + 'deg)');
                              },
                              duration: 'slow'
                            }, 'linear');
                            console.log(i)
                            $('#scale').click(function () { // click scale button
                              helpMsgCount = 8;
                              removeTrip()
                              $("#bpm").attr("disabled", false);
                              $(".scaleDiv40").show();
                              $("#scale").attr("disabled", true);
                              if (i == 4) {                          
                                commonInf()
                              }
                            });
                          }
                        }, 950);
                      }, 2500);
                    }
                  }, 950);
                }, 1700);
              }
            }, 950);
          }, 1500);
        }
      }, 800);
    }, 1200);
    $("#second").attr("disabled", true);
  }
}
var fiftyClicked=false;
function FiftyBpm() {
  helpMsgCount = 9;
  removeTrip()
  $("#start").attr("disabled", false);
  $("#scale").attr("disabled", true);
  $("#start,#bpm").attr("disabled", false);
  metSound120 = document.getElementById("metronomeSound4");
  
  if (temp1ForSoundFour) {
    $("#warning4").css({ 'display': 'block' });
    $("#start").attr("disabled", true);
    $("#bpm").attr("disabled", true);
    $("#ball4").animate({ opacity: "1" }, 10, function () {
      $("#ball4").animate({ left: 55 + '%', top: 53 + '%' }, 7000, 'linear', function () {
        $("#ball4").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
          $("#ball4").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
            $("#ball4").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
          });
        });
      });
      $("#red2Mark0sec").css({ 'display': 'block' });
      metSound120.play();
      $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', 'pointer');
      $('#needleDiv50').animate({ borderSpacing: -45 }, {
        step: function (now, fx) {
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('transform', 'rotate(' + now + 'deg)');
        },
        duration: 'slow'
      }, 'linear');
      setTimeout(function () {
        fiftyClicked=true;
        console.log('120sound:1');
        $("#clickButton4").css('cursor', 'pointer');
        $('#clickButton4').click(function () { // Click metronome(1st click)
          if(fiftyClicked==true){
            c2 = false;
            c3 = false;
            c4 = false;
            $('#clickButton4').unbind("click");
            c1 = true;
            fiftyClicked = false;
          }
        });
        setTimeout(function () {
          if (c1 == false) {
            $("#ball4").stop();
            $("#ball4").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
            metSound120.pause();
            $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', '');
            metSound120.currentTime = 0;
            $("#red2Mark0sec").css({ 'display': 'none' });
            $('#needleDiv50').animate({ borderSpacing: 0 }, {
              step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
              },
              duration: 'slow'
            }, 'linear');
            FiftyBpm()
          }
          else {
            c1 = false;
            $("#red2Mark5sec").css({ 'display': 'block' });
            $('#needleDiv50').animate({ borderSpacing: 45 }, {
              step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
              },
              duration: 'slow'
            }, 'linear');
            setTimeout(function () {  // 2nd click
              fiftyClicked=true;
              console.log('120sound:2');
              $('#clickButton4').click(function () {
                if(fiftyClicked == true){
                  $('#clickButton4').unbind("click");
                  c2 = true;
                  fiftyClicked = false;
                }
              });
              setTimeout(function () {
                if (c2 == false) {
                  $("#ball4").stop();
                  $("#ball4").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                  metSound120.pause();
                  metSound120.currentTime = 0;
                  $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', '');
                  $("#red2Mark0sec,#red2Mark5sec").css({ 'display': 'none' });
                  FiftyBpm()
                }
                else {
                  c2 = false;
                  $("#red2Mark1sec").css({ 'display': 'block' });
                  $('#needleDiv50').animate({ borderSpacing: -45 }, {
                    step: function (now, fx) {
                      $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                      $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                      $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 'slow'
                  }, 'linear');
                  setTimeout(function () {
                    fiftyClicked=true;
                    console.log('120sound:3');  // 3rd click
                    $('#clickButton4').click(function () {
                      if(fiftyClicked==true){
                        $('#clickButton4').unbind("click");
                        c3 = true;
                        fiftyClicked = false;
                      }                  
                    });
                    setTimeout(function () {
                      if (c3 == false) {
                        $("#ball4").stop();
                        $("#ball4").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                        metSound120.pause();
                        metSound120.currentTime = 0;
                        $("#clickButton2,#clickButton1,#clickButton3,#clickButton4").css('cursor', '');
                        $("#red2Mark0sec,#red2Mark5sec,#red2Mark1sec").css({ 'display': 'none' });
                        FiftyBpm()
                      }
                      else {
                        c3 = false;
                        $("#red2Mark15sec").css({ 'display': 'block' });
                        $('#needleDiv50').animate({ borderSpacing: 45 }, {
                          step: function (now, fx) {
                            $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                            $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                            $(this).css('transform', 'rotate(' + now + 'deg)');
                          },
                          duration: 'slow'
                        }, 'linear');
                        setTimeout(function () {   // 4th click
                          fiftyClicked=true;
                          helpMsgCount = 10;
                          removeTrip()
                          console.log('120sound:4');
                          $('#clickButton4').click(function () {
                            if(fiftyClicked==true){
                              $('#clickButton4').unbind("click");
                              c4 = true;
                              fiftyClicked= false;
                            }                        
                          });
                          setTimeout(function () {
                            if (c4 == false) {
                              $("#ball4").stop();
                              $("#ball4").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                              metSound120.pause();
                              metSound120.currentTime = 0;
                              $("#red2Mark0sec,#red2Mark5sec,#red2Mark1sec,#red2Mark15sec").css({ 'display': 'none' });
                              FiftyBpm()
                            }
                            else {
                              c4 = false;
                              metSound120.pause();
                              metSound120.currentTime = 0;
                              $("#red2Mark2sec").css({ 'display': 'block' });
                              $("#warning4").css({ 'display': 'none' });
                              $("#metronome").css('cursor', 'default');
                              $("#start").attr("disabled", true);
                              $("#scale").attr("disabled", false);
                              i++;
                              $('#needleDiv50').animate({ borderSpacing: 0 }, {
                                step: function (now, fx) {
                                  $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                  $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                  $(this).css('transform', 'rotate(' + now + 'deg)');
                                },
                                duration: 'slow'
                              }, 'linear');
                              console.log(i)
                              $('#scale').click(function () { // click scale button
                                helpMsgCount = 11;
                                removeTrip()
                                $("#bpm").attr("disabled", false);
                                $(".scaleDiv50").show();
                                $("#scale").attr("disabled", true);
                                if (i == 4) {
                                  helpMsgCount = 15;
                                  removeTrip()
                                  commonInf()
                                  // alert(9)
                                }
                              });
                            }
                          }, 700);
                        }, 1200);
                      }
                    }, 700);
                  }, 1200);
                }
              }, 700);
            }, 1200);
          }
        }, 700);
      }, 1000);
    });
  $("#third").attr("disabled", true);
  }
}
function commonInf() {
  if (tempGlobal == 1) {
    tempGlobal = 0;
    // setTimeout(function () {
      // QuizCoreExecuter(2, "The distance travelled by ball between each consecutive beep sound of the metronome ", "Decreases", "Remains the same", "Increases", "None of these", "Increases", 1, 4)
   
      helpMsgCount = 15;
      removeTrip()
      $("#inference").show();
      $("#inference").css('cursor', 'pointer');
      $("#inference").click(function () {
        setTimeout(function () {
          $("#inference").hide();
          if(ttttt3 == 0)
          {
            ttttt3 = 1;
            const data1 = new Questions(["1","For motion of a ball on an inclined plane what do you expect will be the distance covered by the ball in successive equal intervals of time?",["Distance covered remains same in each interval","Distance covered in each interval decreases with time","Distance covered in each interval increases with time","None of these"],3,4,1,"helpVariableName",[["images/Beaker.png",20],20,10,5,15]])
            const data2 = new Questions(["2","The distance travelled by ball between each consecutive beep sound of the metronome",["Decreases","Remains the same","Increases","None of these"],3,4,1,"helpVariableName",[["images/Beaker.png",20],20,10,5,15]])
            var temp = [];
            temp.push(data1);
            temp.push(data2);
            QuestionContinues_Call(temp)
          }
      
         
        }, 10000);
      });
    // }, 4000);
    $('#next_btn').click(function () {
      // alert(1)
      helpMsgCount = 19;
      removeTrip()
      // QuizCoreExecuter(4, "What will happen to the motion of the ball if the inclination of the plane increases?", "The ball will move faster", "The ball will move slower", "Motion of ball will not be affected", "None of these", "The ball will move faster", 4, 4)
      $("#subDiv1,#subDiv2,#subDiv3,#subDiv4,#dropdown1,#start,#scale").css({ 'display': 'none' });
      $("#dropdown2,#subDiv5,#start2,#scale2").css({ 'display': 'block' })
      $("#inference").hide();
      strobeLight()
    });
  }
}
function strobeLight() {

  // alert(1)
  $("#scale2").attr("disabled", true);
  removeTrip()
  $('#next_btn').css({ 'display': 'none' })
  $("#time").click(function () {

    helpMsgCount = 20;
    removeTrip()
    console.log("lightClick")
  })
  $("#start2").click(function () {
    sliderValue = $('#time').val()
    if (sliderValue == "30") {
      removeTrip()
      statusBitLight = true;
      console.log(sliderValue)
      // $("#scale2").attr("disabled", true);
      $("#subDiv5").css({ 'display': 'block' })
      $("#subDiv6,#subDiv7,#subDiv8").css({ 'display': 'none' });
      half()
    }
    else if (sliderValue == "40") {
      removeTrip()
      helpMsgCount = 20;
      console.log(sliderValue)
      // $("#scale2").attr("disabled", true);
      $("#subDiv6").css({ 'display': 'block' })
      $("#subDiv5,#subDiv7,#subDiv8").css({ 'display': 'none' });
      one()
    }
    else if (sliderValue == "50") {
      removeTrip()
      helpMsgCount = 20;
      console.log(sliderValue)
      // $("#scale2").attr("disabled", true);
      $("#subDiv7").css({ 'display': 'block' })
      $("#subDiv5,#subDiv6,#subDiv8").css({ 'display': 'none' });
      oneFive()
    }
    else if (sliderValue == "60") {
      removeTrip()
      helpMsgCount = 20;
      console.log(sliderValue)
      // $("#scale2").attr("disabled", true);
      $("#subDiv8").css({ 'display': 'block' })
      $("#subDiv5,#subDiv6,#subDiv7").css({ 'display': 'none' });
      two()
    }
  });
  $("#time").change(function () {
    removeTrip()
    statusBitLight = true;
    sliderValue = $('#time option:selected').val();
    console.log(sliderValue)
    // $("#start").attr("disabled", false);
    if (sliderValue == "30") {
      statusBitLight = true;
      helpMsgCount = 20;
      // $("#scale2").attr("disabled", true);
      $("#start2").attr("disabled", false);
      $("#subDiv5").css({ 'display': 'block' })
      $("#subDiv6,#subDiv7,#subDiv8").css({ 'display': 'none' });
    }
    else if (sliderValue == "40") {
      helpMsgCount = 20;
      // $("#scale2").attr("disabled", true);
      $("#start2").attr("disabled", false);
      $("#subDiv6").css({ 'display': 'block' })
      $("#subDiv5,#subDiv7,#subDiv8").css({ 'display': 'none' });
    }
    else if (sliderValue == "50") {
      helpMsgCount = 20;
      // $("#scale2").attr("disabled", true);
      $("#start2").attr("disabled", false);
      $("#subDiv7").css({ 'display': 'block' })
      $("#subDiv5,#subDiv6,#subDiv8").css({ 'display': 'none' });
    }
    else if (sliderValue == "60") {
      helpMsgCount = 20;
      // $("#scale2").attr("disabled", true);
      $("#start2").attr("disabled", false);
      $("#subDiv8").css({ 'display': 'block' })
      $("#subDiv5,#subDiv6,#subDiv7").css({ 'display': 'none' });
    }
  })
}
function half() {
  // alert()
  removeTrip()
  helpMsgCount = 24;
  $("#scale2").attr("disabled", true);
  $("#start2").attr("disabled", false);
  var frstClick30 = false;
  var secondClick30 = false;
  var thirdClick30 = false;
  var fourthClick30 = false;
  l1 = false; l2 = false; l3 = false; l4 = false;
  if (tempForLightOne) {
    $("#strobeLight1Off").show();
    $("#scale2").attr("disabled", true);
    $("#warning5").css({ 'display': 'block' });
    $("#time").attr("disabled", true);
    $("#ball5").animate({ left: 55 + '%', top: 53 + '%' }, 12500, 'linear', function () {
      $("#ball5").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
        $("#ball5").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
          $("#ball5").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
        });
      });
    });
    $("#start2").attr("disabled", true);
    $("#Light30red0").css({ 'display': 'block' });
    setTimeout(function () {
      $("#strobeLight1Off").hide();
      $("#strobeLight1On").show();
      console.log("30light1");
      $("#buttonLight1").css('cursor', 'pointer');
      $('#buttonLight1').click(function () { // 1st click
        frstClick30 = true;
      });
      setTimeout(function () {
        if (frstClick30 == false) {
          $("#ball5").stop();
          $("#ball5").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
          $("#Light30red0").css({ 'display': 'none' });
          $("#warning5").css({ 'display': 'block' });
          $("#strobeLight1On").hide();
          $("#strobeLight1Off").show();
          half()
        }
        else {
          $("#strobeLight1On").hide();
          $("#strobeLight1Off").show();
          $("#Light30red2").css({ 'display': 'block' });
          setTimeout(function () {
            $("#strobeLight1Off").hide();
            $("#strobeLight1On").show();
            setTimeout(function () {  // 2nd click
              console.log("30light2");
              $('#buttonLight1').click(function () {
                secondClick30 = true;
              });
              setTimeout(function () {
                if (secondClick30 == false) {
                  $("#ball5").stop();
                  $("#ball5").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                  $("#Light30red0,#Light30red2").css({ 'display': 'none' });
                  half()
                }
                else {
                  $("#strobeLight1On").hide();
                  $("#strobeLight1Off").show();
                  $("#Light30red4").css({ 'display': 'block' });
                  setTimeout(function () {
                    $("#strobeLight1Off").hide();
                    $("#strobeLight1On").show();
                    setTimeout(function () { // 3rd click
                      console.log("30light3");
                      $('#buttonLight1').click(function () {
                        thirdClick30 = true;
                      });
                      setTimeout(function () {
                        if (thirdClick30 == false) {
                          $("#ball5").stop();
                          $("#ball5").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                          $("#Light30red0,#Light30red2,#Light30red4").css({ 'display': 'none' });
                          half()
                        }
                        else {
                          $("#strobeLight1On").hide();
                          $("#strobeLight1Off").show();
                          $("#Light30red6").css({ 'display': 'block' });
                          setTimeout(function () {
                            $("#strobeLight1Off").hide();
                            $("#strobeLight1On").show();
                            setTimeout(function () { // fourth click
                              removeTrip()
                              helpMsgCount = 22;
                              console.log("30light4");
                              $('#buttonLight1').click(function () {
                                fourthClick30 = true;
                              });
                              setTimeout(function () {
                                if (fourthClick30 == false) {
                                  $("#ball5").stop();
                                  $("#ball5").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                                  $("#Light30red0,#Light30red2,#Light30red4,#Light30red6").css({ 'display': 'none' });
                                  half()
                                }
                                else {
                                  $("#strobeLight1On").hide();
                                  $("#strobeLight1Off").show();
                                  $("#Light30red8").css({ 'display': 'block' });
                                  $("#warning5").css({ 'display': 'none' });
                                  $("#buttonLight1").css('cursor', 'default');
                                  $("#scale2").attr("disabled", false);
                                  j++;
                                  console.log("j =", j)
                                  $('#scale2').click(function () { // click scale button
                                    removeTrip()
                                    helpMsgCount = 23;
                                    $(".lightDiv30").show();
                                    $("#time").attr("disabled", false);
                                    $("#scale2").attr("disabled", true);

                                    if (j == 4) {
                                      helpMsgCount = 32;
                                      commonInfLight()
                                    }
                                  });
                                }
                              }, 1000);
                            }, 100);
                          }, 2500);
                        }
                      }, 800);
                    }, 100);
                  }, 1700);
                }
              }, 800);
            }, 100);
          }, 1500);
        }
      }, 500);
    }, 1200);
    $("#time1").attr("disabled", true);
  }
}

function one() {
  removeTrip()
  helpMsgCount = 27;
  var frstClick40 = false;
  var secondClick40 = false;
  var thirdClick40 = false;
  var fourthClick40 = false;
  $("#start2").attr("disabled", false);
  if (tempForLightTwo) {
    $("#strobeLight2Off").show();
    $("#scale2").attr("disabled", true);
    $("#warning6").css({ 'display': 'block' });
    $("#time").attr("disabled", true);
    // $("#ball6").animate({ left: 10 + '%' }, function () {
    $("#ball6").animate({ left: 55 + '%', top: 53 + '%' }, 12500, 'linear', function () {
      $("#ball6").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
        $("#ball6").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
          $("#ball6").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
        });
      });
    });
    $("#start2").attr("disabled", true);
    $("#Light40black0").css({ 'display': 'block' });
    setTimeout(function () {
      $("#strobeLight2Off").hide();
      $("#strobeLight2On").show();
      console.log("40light1");
      $("#buttonLight2").css('cursor', 'pointer');
      $('#buttonLight2').click(function () { // 1st click
        frstClick40 = true;
      });
      setTimeout(function () {
        if (frstClick40 == false) {
          $("#ball6").stop();
          $("#ball6").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
          $("#Light40red0").css({ 'display': 'none' });
          $("#warning6").css({ 'display': 'block' });
          $("#strobeLight2On").hide();
          $("#strobeLight2Off").show();
          one()
        }
        else {
          $("#strobeLight2On").hide();
          $("#strobeLight2Off").show();
          $("#Light40black15").css({ 'display': 'block' });
          setTimeout(function () {
            $("#strobeLight2Off").hide();
            $("#strobeLight2On").show();
            setTimeout(function () {  // 2nd click
              console.log("40light2");
              $('#buttonLight2').click(function () {
                secondClick40 = true;
              });
              setTimeout(function () {
                if (secondClick40 == false) {
                  $("#ball6").stop();
                  $("#ball6").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                  $("#Light40red0,#Light40black15").css({ 'display': 'none' });
                  one()
                }
                else {
                  $("#strobeLight2On").hide();
                  $("#strobeLight2Off").show();
                  $("#Light40black3").css({ 'display': 'block' });
                  setTimeout(function () {
                    $("#strobeLight2Off").hide();
                    $("#strobeLight2On").show();
                    setTimeout(function () { // 3rd click
                      console.log("40light3");
                      $('#buttonLight2').click(function () {
                        thirdClick40 = true;
                      });
                      setTimeout(function () {
                        if (thirdClick40 == false) {
                          $("#ball6").stop();
                          $("#ball6").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                          $("#Light40red0,#Light40black15,#Light40black3").css({ 'display': 'none' });
                          one()
                        }
                        else {
                          $("#strobeLight2On").hide();
                          $("#strobeLight2Off").show();
                          $("#Light40black45").css({ 'display': 'block' });
                          setTimeout(function () {
                            $("#strobeLight2Off").hide();
                            $("#strobeLight2On").show();
                            setTimeout(function () { // fourth click
                              removeTrip()
                              helpMsgCount = 25;
                              console.log("40light4");
                              $('#buttonLight2').click(function () {
                                fourthClick40 = true;
                              });
                              setTimeout(function () {
                                if (fourthClick40 == false) {
                                  $("#ball6").stop();
                                  $("#ball6").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                                  $("#Light40red0,#Light40black15,#Light40black3,#Light40black45").css({ 'display': 'none' });
                                  one()
                                }
                                else {
                                  $("#strobeLight2On").hide();
                                  $("#strobeLight2Off").show();
                                  $("#Light40black6").css({ 'display': 'block' });
                                  $("#warning6").css({ 'display': 'none' });
                                  $("#buttonLight2").css('cursor', 'default');
                                  $("#scale2").attr("disabled", false);
                                  j++;
                                  console.log("j", j)
                                  $('#scale2').click(function () { // click scale button   
                                    removeTrip()
                                    helpMsgCount = 26;
                                    $(".lightDiv40").show();
                                    $("#time").attr("disabled", false);
                                    $("#scale2").attr("disabled", true);

                                    if (j == 4) {
                                      helpMsgCount = 32;
                                      commonInfLight()                                    
                                    }
                                  });
                                }
                              }, 1000);
                            }, 100);
                          }, 2500);
                        }
                      }, 800);
                    }, 100);
                  }, 1700);
                }
              }, 800);
            }, 100);
          }, 1500);
        }
      }, 400);
    }, 1200);
    // });
    $("#time2").attr("disabled", true);
  }
}

function oneFive() {
  removeTrip()
  helpMsgCount = 30;
  var frstClick50 = false;
  var secondClick50 = false;
  var thirdClick50 = false;
  var fourthClick50 = false;
  $("#start2").attr("disabled", false);
  if (tempForLightThree) {
    $("#strobeLight3Off").show();
    $("#scale2").attr("disabled", true);
    $("#warning7").css({ 'display': 'block' });
    $("#time").attr("disabled", true);
    // $("#ball7").animate({ left: 10 + '%' }, function () {
    $("#ball7").animate({ left: 55 + '%', top: 53 + '%' }, 7000, 'linear', function () {
      $("#ball7").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
        $("#ball7").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
          $("#ball7").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
        });
      });
    });
    $("#start2").attr("disabled", true);
    $("#Light50green0").css({ 'display': 'block' });
    setTimeout(function () {
      $("#strobeLight3Off").hide();
      $("#strobeLight3On").show();
      console.log("50light1");
      $("#buttonLight3").css('cursor', 'pointer');
      $('#buttonLight3').click(function () { // 1st click
        frstClick50 = true;
      });
      setTimeout(function () {
        if (frstClick50 == false) {
          $("#ball7").stop();
          $("#ball7").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
          $("#Light50green0").css({ 'display': 'none' });
          $("#warning7").css({ 'display': 'block' });
          $("#strobeLight3On").hide();
          $("#strobeLight3Off").show();
          oneFive()
        }
        else {
          $("#strobeLight3On").hide();
          $("#strobeLight3Off").show();
          $("#Light50green12").css({ 'display': 'block' });
          setTimeout(function () {
            $("#strobeLight3Off").hide();
            $("#strobeLight3On").show();
            setTimeout(function () {  // 2nd click
              console.log("50light2");
              $('#buttonLight3').click(function () {
                secondClick50 = true;
              });
              setTimeout(function () {
                if (secondClick50 == false) {
                  $("#ball7").stop();
                  $("#ball7").css({ left: 6 + '%', top: 42 + '%' }, 7000, 'linear');
                  $("#Light50green0,#Light50green12").css({ 'display': 'none' });
                  oneFive()
                }
                else {
                  $("#strobeLight3On").hide();
                  $("#strobeLight3Off").show();
                  $("#Light50green24").css({ 'display': 'block' });
                  setTimeout(function () {
                    $("#strobeLight3Off").hide();
                    $("#strobeLight3On").show();
                    setTimeout(function () { // 3rd click
                      console.log("50light3");
                      $('#buttonLight3').click(function () {
                        thirdClick50 = true;
                      });
                      setTimeout(function () {
                        if (thirdClick50 == false) {
                          $("#ball7").stop();
                          $("#ball7").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                          $("#Light50green0,#Light50green12,#Light50green24").css({ 'display': 'none' });
                          oneFive()
                        }
                        else {
                          $("#strobeLight3On").hide();
                          $("#strobeLight3Off").show();
                          $("#Light50green36").css({ 'display': 'block' });
                          setTimeout(function () {
                            $("#strobeLight3Off").hide();
                            $("#strobeLight3On").show();
                            setTimeout(function () { // fourth click
                              removeTrip()
                              helpMsgCount = 28;
                              console.log("50light4");
                              $('#buttonLight3').click(function () {
                                fourthClick50 = true;
                              });
                              setTimeout(function () {
                                if (fourthClick50 == false) {
                                  $("#ball7").stop();
                                  $("#ball7").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                                  $("#Light50green0,#Light50green12,#Light50green24,#Light50green36").css({ 'display': 'none' });
                                  oneFive()
                                }
                                else {
                                  $("#strobeLight3On").hide();
                                  $("#strobeLight3Off").show();
                                  $("#Light50green48").css({ 'display': 'block' });
                                  $("#warning7").css({ 'display': 'none' });
                                  $("#buttonLight3").css('cursor', 'default');
                                  $("#scale2").attr("disabled", false);
                                  j++;
                                  console.log("j =", j)
                                  $('#scale2').click(function () { // click scale button   
                                    removeTrip()
                                    helpMsgCount = 29;
                                    $(".lightDiv50").show();
                                    $("#time").attr("disabled", false);
                                    $("#scale2").attr("disabled", true);

                                    if (j == 4) {
                                      helpMsgCount = 32;
                                      commonInfLight()
                                    }
                                  });
                                }
                              }, 800);
                            }, 100);
                          }, 1200);
                        }
                      }, 800);
                    }, 100);
                  }, 1200);
                }
              }, 800);
            }, 100);
          }, 1200);
        }
      }, 500);
    }, 1000);
    // });
    $("#time3").attr("disabled", true);
  }
}

function two() {
  removeTrip()
  helpMsgCount = 21;
  var frstClick60 = false;
  var secondClick60 = false;
  var thirdClick60 = false;
  var fourthClick60 = false;
  $("#start2").attr("disabled", false);
  if (tempForLightFour) {
    $("#strobeLight4Off").show();
    $("#scale2").attr("disabled", true);
    $("#warning8").css({ 'display': 'block' });
    $("#time").attr("disabled", true);
    $("#ball8").animate({ left: 55 + '%', top: 53 + '%' }, 3000, 'linear', function () {
      $("#ball8").animate({ left: 62 + '%', top: 66 + '%' }, 500, 'linear', function () {
        $("#ball8").animate({ left: 64 + '%', top: 66 + '%' }, 400, 'linear', function () {
          $("#ball8").animate({ left: 59 + '%', top: 66 + '%' }, 1000, 'linear',)
        });
      });
    });
    $("#start2").attr("disabled", true);
    $("#Light60pink0").css({ 'display': 'block' });
    setTimeout(function () {
      $("#strobeLight4Off").hide();
      $("#strobeLight4On").show();
      console.log("60light1");
      $("#buttonLight4").css('cursor', 'pointer');
      $('#buttonLight4').click(function () { // 1st click
        frstClick60 = true;
      });
      setTimeout(function () {
        if (frstClick60 == false) {
          $("#ball8").stop();
          $("#ball8").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
          $("#Light60pink0").css({ 'display': 'none' });
          $("#warning8").css({ 'display': 'block' });
          $("#strobeLight4On").hide();
          $("#strobeLight4Off").show();
          two()
        }
        else {
          $("#strobeLight4On").hide();
          $("#strobeLight4Off").show();
          $("#Light60pink1").css({ 'display': 'block' });
          setTimeout(function () {
            $("#strobeLight4Off").hide();
            $("#strobeLight4On").show();
            setTimeout(function () {  // 2nd click
              console.log("60light2");
              $('#buttonLight4').click(function () {
                secondClick60 = true;
              });
              setTimeout(function () {
                if (secondClick60 == false) {
                  $("#ball8").stop();
                  $("#ball8").css({ left: 6 + '%', top: 42 + '%' }, 7000, 'linear');
                  $("#Light60pink0,#Light60pink1").css({ 'display': 'none' });
                  two()
                }
                else {
                  $("#strobeLight4On").hide();
                  $("#strobeLight4Off").show();
                  $("#Light60pink2").css({ 'display': 'block' });
                  setTimeout(function () {
                    $("#strobeLight4Off").hide();
                    $("#strobeLight4On").show();
                    setTimeout(function () { // 3rd click
                      console.log("60light3");
                      $('#buttonLight4').click(function () {
                        thirdClick60 = true;
                      });
                      setTimeout(function () {
                        if (thirdClick60 == false) {
                          $("#ball8").stop();
                          $("#ball8").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                          $("#Light60pink0,#Light60pink1,#Light60pink2").css({ 'display': 'none' });
                          two()
                        }
                        else {
                          $("#strobeLight4On").hide();
                          $("#strobeLight4Off").show();
                          $("#Light60pink3").css({ 'display': 'block' });
                          setTimeout(function () {
                            $("#strobeLight4Off").hide();
                            $("#strobeLight4On").show();
                            setTimeout(function () { // fourth click
                              removeTrip()
                              helpMsgCount = 31;
                              console.log("60light4");
                              $('#buttonLight4').click(function () {
                                fourthClick60 = true;
                              });
                              setTimeout(function () {
                                if (fourthClick60 == false) {
                                  $("#ball8").stop();
                                  $("#ball8").css({ left: 6 + '%', top: 42 + '%' }, 4000, 'linear');
                                  $("#Light60pink0,#Light60pink1,#Light60pink2,#Light60pink3").css({ 'display': 'none' });
                                  two()
                                }
                                else {
                                  $("#strobeLight4On").hide();
                                  $("#strobeLight4Off").show();
                                  $("#Light60pink4").css({ 'display': 'block' });
                                  $("#warning8").css({ 'display': 'none' });
                                  $("#buttonLight4").css('cursor', 'default');
                                  $("#scale2").attr("disabled", false);
                                  j++;
                                  console.log("j =", j)
                                  $('#scale2').click(function () { // click scale button   
                                    removeTrip()
                                    // helpMsgCount = 31;
                                    $(".lightDiv60").show();
                                    $("#time").attr("disabled", false);
                                    $("#scale2").attr("disabled", true);

                                    if (j == 4) {
                                      helpMsgCount = 32;
                                      commonInfLight()
                                     
                                    }
                                  });
                                }
                              }, 500);
                            }, 100);
                          }, 200);
                        }
                      }, 500);
                    }, 100);
                  }, 200);
                }
              }, 500);
            }, 100);
          }, 200);
        }
      }, 500);
    }, 600);
    $("#time4").attr("disabled", true);
  }
}

function commonInfLight() {
  removeTrip()
 
  // setTimeout(function () {  
    $("#inference2").show();
    $("#inference2").css('cursor', 'pointer');
    $("#inference2").click(function () {
      setTimeout(function () {
        $("#inference2").hide();
        helpMsgCount = 311;
        if(ttttt4 == 0)
        {
          ttttt4 = 1;
        const data3 = new Questions(["3","From the observation, we can see that the ball is in",["Uniform motion","Uniformly accelerated motion","Non-uniform accelerated motion","None of these"],2,4,1,"helpVariableName",[["images/Beaker.png",20],20,10,5,15]])
        const data4 = new Questions(["4","What will happen to the motion of the ball if the inclination of the plane increases?",["The ball will move faster","The ball will move slower","Motion of ball will not be affected","None of these"],1,4,1,"helpVariableName",[["images/Beaker.png",20],20,10,5,15]])
        var temp2 = [];
        temp2.push(data3);
        temp2.push(data4);
        QuestionContinues_Call(temp2)
        }

      //  $("#next_btn").show();


      }, 10000);
    });
   
  // }, 1000);
}

// finite animations
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
        clearInterval(CLEARImageAnimation);
      }
      else {
        GlobalVariable = 0;
        ANIMATIONTimesReached++;
      }
    }
  }, ANIMATIONSpeed);
}

$(window).on('load',function() {
  ImageInitLoad(timerArray, "timer", "stopwatch", "newtimerAni")
});

function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripClickFlag = false;
  }
}
function startStatus() {
  statusBit = true;
}

function lightStatus() {
  statusBitLight = true;
}