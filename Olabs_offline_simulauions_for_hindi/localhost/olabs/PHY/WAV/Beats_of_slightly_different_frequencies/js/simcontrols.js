let count = 0;
let timeoutId;   

var helpcount = 0;
var helpMsg,inferenceMsg;
var inferenceCount =0;
var selectCount=0;
var yy_imglength = 67;
var dropCnt=0,flag=0;
// var yy_imgstart = 1;
var yy_imgPath =
    "../PHY/WAV/Beats_of_slightly_different_frequencies/images/STICK/";
var ImagStrick = [];
//=======================Stick image aaray======================//
for (i = 1; i <= yy_imglength; i++) {
    if (i < 10) {
        ImagStrick.push(yy_imgPath + "STICK000" + i + ".png");
    } else if (i < 100 && i > 9) {
        ImagStrick.push(yy_imgPath + "STICK00" + i + ".png");
    }
}

var sound_imglength = 12;
// var sound_imgstart = 1;
var sound_imgPath =
"../PHY/WAV/Beats_of_slightly_different_frequencies/images/SOUND/";
var ImagSound = [];
//=======================Sound image aaray======================//
for(i=1; i<=sound_imglength; i++){
    if(i<10){
        ImagSound.push(sound_imgPath + "SOUND000" + i + ".png");
    } else if(i<100 && i>9) {
        ImagSound.push(sound_imgPath + "SOUND00" + i + ".png");
    }

}
// audio file
var audio1
var audio2
var audio3
var audio4
// audio file

// task status
var Drop1 = 0;
var Drop2 = 0;
var Drop3 = 0;
var Drop4 = 0;
// task status

$(window).on('load',function() {
    ImageInitLoad(ImagStrick, "strick", "stricking", "strickclass")
    ImageInitLoad(ImagSound, "soundDiv", "soundImage", "soundImageclass")  
    ImageInitLoad(ImagSound, "soundDiv2", "soundImageTwo", "soundImageclass2")
});

$(document).ready(function () { 

    helpMsg  = ["Select the frequency of tuning fork V1.",
                "Select the frequency of tuning fork V2.",
                "Click on the steel rod.",
                "Click on the Show Result button to view the result.",
                "Click on the Inference button to view the observation",
                "Click on the Reset button <br>to redo the experiment.",
    ];
    inferenceMsg = ["V1 is the frequency of first tuning fork.<br>V2 is the frequency of second tuning fork.<br>V is the frequency of beat. V =|V1-V2|<br>As the difference between the frequency of two<br>tuning forks increases, the frequency of beat increases.",

    ];

    // audio file
    audio1 = document.getElementById("audio1");
    audio2 = document.getElementById("audio2");
    audio3 = document.getElementById("audio3");
    audio4 = document.getElementById("audio4");

    $("#dropdown1").css({ cursor: "pointer" })
        // Drop down change
        $("#dropdown1").click(function(){
            if(selectCount==4){
                helpcount = 5;
                $("select option[value ='0']").prop('disabled',true);
            }
            else{
                helpcount = 1;
            }
           
        })
        $("#dropdown1").change(function() {
            helpcount = 1;
            removeTrip()
            $("#dropdown2").css({ cursor: "pointer" })
            var selectedValue = $(this).val();
            var dropdown2 = $("#dropdown2");
            dropdown2.empty(); // Clear existing options
    
            if (selectedValue === "440") {
                helpcount = 1;
                dropdown2.append("<option value='0'>select</option>");
                dropdown2.append("<option value='440'>440</option>");
                dropdown2.append("<option value='438'>438</option>");
                dropdown2.append("<option value='438.8'>438.8</option>");
            } else if (selectedValue === "252") {
                helpcount = 1;
                dropdown2.append("<option value='0'>select</option>");
                dropdown2.append("<option value='248'>248</option>");
            }
            updateFeequency();
        });
       $("#dropdown2").change(function() {
        updateFeequency();
    });
    // Drop down change

})

// freequency change
function updateFeequency() {
    var selectedValue1 = $("#dropdown1").val();
    var selectedValue2 = $("#dropdown2").val();

    if(dropCnt == 3)
    {
        $("select option[value ='440']").prop('disabled',true);
        // $("#dropdown1").attr("disabled", false); 
    }
    if (selectedValue1 === "440" && selectedValue2 === "440" && Drop1 == "0") 
    {
        $("select option[value ='0']").prop('disabled',true);
        dropCnt++;
        $("#stopWatchDiv").css({"display":"none"})
        $("#dropdown1,#dropdown2").attr("disabled", true); 
        $("#inferenceImg").css("display","none") 
        $("#v1,#v2,#v").css("display","none") 
        selectCount++;
        removeTrip();
        helpcount =2;
        audioStop()
        console.log("1");
        $(".steel_rod").css({ "pointer-events": "" })
        $("#value1").text("440 Hz");
        $("#value2").text("440 Hz");

        $(".steel_rod").css({ cursor: "pointer" })
        $(".steel_rod").click(function () {      
            removeTrip();
            helpcount =3;
            $("#dropdown2 option[value='440']").attr("disabled", true);  //disable option1
            if(Drop1 == 0)
            {
                Drop1++;
                $(".steel_rod").css({ "display": "none" });
                ImageAnimationOneTime("strickclass", "stricking", ImagStrick, 30, 0)    // steelrod Animation
                ImageAnimationOneTime("soundImageclass", "soundImage", ImagSound, 300, 0)// Sound Image Animation
                $("#simHelp").css({
                    "pointer-events": "none",
                    "cursor": "none"
                      }); 
                setTimeout(function(){
                    ImageAnimationOneTime("soundImageclass2", "soundImageTwo", ImagSound, 300, 0)  //Sound Image Animation2
                },1500)
                setTimeout(function(){
                    audio1.play(); 
                },180)                   //sound playing
                setTimeout(function () {   
                    $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                    $("#note1").fadeIn()
                    $(".steel_rod").show();
                    $(".steel_rod").css({ "pointer-events": "none" })
                   
                    $("#check").attr("disabled", false);      //enable show result
                    $("#check").css({cursor:"pointer"})
                    $("#check").click(function(){             //click the check box for result
                        removeTrip();
                        helpcount=4;
                        $("#note1").fadeOut()
                        $("#inferenceImg").css("display","block")         //inference Msg
                        $("#v1,#v2,#v").css("display","block")
                        $("#v1").text("V1 = 440 Hz");
                        $("#v2").text("V2 = 440 Hz");
                        $("#v").text("V(Beat) = 0 Hz");
                        $("#check").attr("disabled", true);
                    })
                },7000)
            }
        });
    } 
    else if (selectedValue1 === "440" && selectedValue2 === "438" && Drop2 == "0") 
    {
        dropCnt++;
        $("#stopWatchDiv").css({"display":"none"})
        $("#dropdown1,#dropdown2").attr("disabled", true); 
        $("#inferenceImg").css("display","none") 
        $("#v1,#v2,#v").css("display","none")    
        selectCount++;
        removeTrip();
        helpcount = 2;
        console.log("2");
        audioStop()
        // $("#freequency").css("pointer-events", "");
        $(".steel_rod").css({ "pointer-events": "" })
        $("#value1").text("440 Hz");
        $("#value2").text("438 Hz");

        $(".steel_rod").css({ cursor: "pointer" })
        $(".steel_rod").click(function () {               //click the steel rod
            removeTrip();
            helpcount = 3;
            $("#dropdown2 option[value='438']").attr("disabled", true);  //disable option2
            if(Drop2 == 0)
            {
                Drop2++;
                $(".steel_rod").css({ "display": "none" });
                ImageAnimationOneTime("strickclass", "stricking", ImagStrick, 22, 0)    // steelrod Animation
                ImageAnimationOneTime("soundImageclass", "soundImage", ImagSound, 200, 0)// Sound Image Animation
                $("#simHelp").css({
                    "pointer-events": "none",
                    "cursor": "none"
                      }); 
                setTimeout(function(){
                    $("#stopWatchDiv").css({"display":"block"})
                    startStopwatch(); // Start the stopwatch when the page loads
                    ImageAnimationOneTime("soundImageclass2", "soundImageTwo", ImagSound, 200, 0)  //Sound Image Animation2
                },700)
                setTimeout(function(){
                    audio2.play(); 
                },100)                  //sound playing
                setTimeout(function () {
                    // $("#dropdown1,#dropdown2").attr("disabled", false);  
                    $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                    $("#note3").fadeIn()
                    $(".steel_rod").show();
                    $(".steel_rod").css({ "pointer-events": "none" })
                    $("#check").attr("disabled", false);      //enable show result
                    $("#check").css({cursor:"pointer"})
                    $("#check").click(function(){             //click the check box for result
                        $("#note3").fadeOut()
                        removeTrip();
                        helpcount=4;
                        $("#inferenceImg").css("display","block")    //inference Msg
                        $("#v1,#v2,#v").css("display","block")  
                        $("#v1").text("V1 = 440 Hz");
                        $("#v2").text("V2 = 438 Hz");
                        $("#v").text("V(Beat) = 2 Hz");
                        $("#check").css({cursor:"default"})
                        $("#check").attr("disabled", true);
                    });
                }, 11000)
            }
        })

    } 
    else if (selectedValue1 === "440" && selectedValue2 === "438.8" && Drop3 =="0") 
    {
            dropCnt++;
            $("#stopWatchDiv").css({"display":"none"})
            $("#dropdown1,#dropdown2").attr("disabled", true); 
            $("select option[value ='438.8']").prop('disabled',true);
           
            $("#inferenceImg").css("display","none") 
            $("#v1,#v2,#v").css("display","none")
            selectCount++;
            removeTrip();
            helpcount = 2;
            audioStop()
            console.log("3");
            $(".steel_rod").css({ "pointer-events": "" })
            $("#value1").text("440 Hz");
            $("#value2").text("438.8 Hz");

            $(".steel_rod").css({ cursor: "pointer" })
            $(".steel_rod").click(function () {             //click the steel rod
                removeTrip();
                helpcount = 3;  
                $("#dropdown2 option[value='438.8']").attr("disabled", true);   //disable option2
                if(Drop3 == 0)
                {
                    Drop3++;
                    $(".steel_rod").css({ "display": "none" });
                    ImageAnimationOneTime("strickclass", "stricking", ImagStrick, 25, 0)    // steelrod Animation
                    ImageAnimationOneTime("soundImageclass", "soundImage", ImagSound, 300, 0)// Sound Image Animation
                    $("#simHelp").css({
                        "pointer-events": "none",
                        "cursor": "none"
                          }); 
                    setTimeout(function(){
                        $("#stopWatchDiv").css({"display":"block"})
                        startStopwatch(); // Start the stopwatch when the page loads
                        ImageAnimationOneTime("soundImageclass2", "soundImageTwo", ImagSound, 300, 0)  //Sound Image Animation2
                    },700)
                    setTimeout(function(){
                        audio3.play(); 
                    },100)                     //sound playing
                    setTimeout(function () {
                        // $("#freequency").attr("disabled", false);  
                        $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                        $("#note4").fadeIn()
                        $(".steel_rod").show();
                        $(".steel_rod").css({ "pointer-events": "none" })
                        $("#check").attr("disabled", false);      //enable show result
                        $("#check").css({cursor:"pointer"})
                        $("#check").click(function(){             //click the check box for result
                            $("#note4").fadeOut()
                            removeTrip();
                            helpcount=4;
                            $("#inferenceImg").css("display","block")    //inference Msg
                            $("#v1,#v2,#v").css("display","block"); 
                            $("#v1").text("V1 = 440 Hz");
                            $("#v2").text("V2 = 438.8 Hz");
                            $("#v").text("V(Beat) = 1.2 Hz");
                            $("#check").attr("disabled", true);
                        })
                    }, 11000)
                }
            })

    } 
    else if (selectedValue1 === "252" && selectedValue2 === "248" && Drop4 =="0") 
    {
        flag=1;
        $("#stopWatchDiv").css({"display":"none"})
        $("#dropdown1,#dropdown2").attr("disabled", true);    
        $("#inferenceImg").css("display","none") 
        $("#v1,#v2,#v").css("display","none")
        selectCount++;
        removeTrip();
        helpcount = 2;
        console.log("4");
        audioStop()
        $(".steel_rod").css({ "pointer-events": "" })
        $("#value1").text("252 Hz");
        $("#value2").text("248 Hz");

        $(".steel_rod").css({ cursor: "pointer" })
        $(".steel_rod").click(function () {           //click the steel rod
            removeTrip();
            helpcount = 3;
            // $("#dropdown2 option[value='252']").attr("disabled", true);   //disable option4
            $("select option[value ='252']").prop('disabled',true);
            $("select option[value ='248']").prop('disabled',true);
            if(Drop4 == 0)
            {
                Drop4++;
                $(".steel_rod").css({ "display": "none" });
                ImageAnimationOneTime("strickclass", "stricking", ImagStrick, 21, 0)    // steelrod Animation
                ImageAnimationOneTime("soundImageclass", "soundImage", ImagSound, 300, 0)// Sound Image Animation
                $("#simHelp").css({
                    "pointer-events": "none",
                    "cursor": "none"
                      }); 
                setTimeout(function(){
                    startStopwatch(); // Start the stopwatch when the page loads
                    ImageAnimationOneTime("soundImageclass2", "soundImageTwo", ImagSound, 300, 0)  //Sound Image Animation2
                },600)
                setTimeout(function(){
                    audio4.play(); 
                },100)      //sound playing
                setTimeout(function () {
                    // $("#freequency").attr("disabled", false);  
                    $("#simHelp").css({"pointer-events": "","cursor": "pointer"});
                    $("#note2").fadeIn()
                    $(".steel_rod").show();
                    $(".steel_rod").css({ "pointer-events": "none" })
                    $("#check").attr("disabled", false);      //enable show result
                    $("#check").css({cursor:"pointer"})
                    $("#check").click(function(){             //click the check box for result
                        $("#note2").fadeOut()
                        removeTrip();
                        helpcount=4;
                        $("#inferenceImg").css("display","block")    //inference Msg
                        $("#v1,#v2,#v").css("display","block"); 
                        $("#v1").text("V1 = 252 Hz");
                        $("#v2").text("V2 = 248 Hz");
                        $("#v").text("V(Beat) = 4 Hz");
                        $("#check").attr("disabled", true);
                    })
                }, 6000)
            }
        })

    }
 
}
// freequency change

// =================== audio stop ===============
function audioStop() {
    $("#audio1").stop();
    audio1.pause();
    audio1.currentTime = 0.0;
    $("#audio2").stop();
    audio2.pause();
    audio2.currentTime = 0.0;
    $("#audio3").stop();
    audio3.pause();
    audio3.currentTime = 0.0;
    $("#audio4").stop();
    audio4.pause();
    audio4.currentTime = 0.0;
}

//===================== ANIMATION FUNCTION ===============
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

// ============     stowatch function   ===============

function updateTimer() {
    document.getElementById("timer").innerText = count;
    count++;
    if (count <= 10) {
        timeoutId = setTimeout(updateTimer, 1000);
    } 
    else {
        // Hide the timer when the countdown reaches 10
        // document.getElementById("timer").style.display = "none";
    }
}

function startStopwatch() {
    if (count > 10) {
        count = 0;
        document.getElementById("timer").style.display = "block"; // Show the timer again
    }
    updateTimer();
}

function stopStopwatch() {
    clearTimeout(timeoutId);
}
// ============     stowatch  function  ===============


