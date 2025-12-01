

var quest=0
var condition =0;

var helpMsg, tempid
var help = 0,Inference_msg;
//wheel upwording animati
var xx_imgLength = 45;
var xx_imgStart = 1;


var oneTimeExecuteStatus = 0; 


var xx_imgPath =
    "../PHY/TDM/Intercoversion_of_energy/images/wheelAnimation/";
   
var xx_img = "1000";
var Imagewheel = [];

for (i = 1; i <= xx_imgLength; i++) {
    if (i < 10) {
      Imagewheel.push(xx_imgPath + "1000" + i + ".png");
    } else if (i < 100 && i > 9) {
      Imagewheel.push(xx_imgPath + "100" + i + ".png");
    }
}
//wheel up and down animation
var yy_imgLength = 129;
var yy_imgStart = 1;

var yy_imgPath =
    "../PHY/TDM/Intercoversion_of_energy/images/wheelUpanddown/";
   
var yy_img = "1000";
var Imagewheelyy = [];

for (i = 1; i <= yy_imgLength; i++) {
    if (i < 10) {
      Imagewheelyy.push(yy_imgPath + "1000" + i + ".png");
    } else if (i < 100 && i > 9) {
      Imagewheelyy.push(yy_imgPath + "100" + i + ".png");
    }else{
      Imagewheelyy.push(yy_imgPath + "10" + i + ".png");
    }
}


$(document).ready(function () {
  $(".Quize").click(function () {
    help=4
    if(oneTimeExecuteStatus==0)
    {
    
      QuizCoreExecuter(1,"Where will be the maximum kinetic energy seen in Maxwell's Wheel? ","At the top of the thread","At the bottom of the thread","null","null","At the bottom of the thread",totalScore,5)
      $("#divBack").css({ 'display': 'block' }); 
      $("#Inference").css('display', "none");
      var a= setInterval(function(){
        if(quest==1){
          clearInterval(a)
          console.log(a)
          QuizCoreExecuter(2,"Where will be the maximum potential energy seen in Maxwell's Wheel?","At the top of the thread","At the bottom of the thread","null","null","At the top of the thread",totalScore,5)
          var b= setInterval(function(){
            if(quest==2){
              clearInterval(b)
              console.log(b)
              QuizCoreExecuter(3,"Total mechanical energy of the Maxwell's Wheel is ____ during the experiment? ","Conserved","Not conserved","null","null","Conserved",totalScore,5)
              var c= setInterval(function(){
                if(quest==3){
                  clearInterval(c)
                  console.log(c)
                  QuizCoreExecuter(4,"When we throw a stone to upwards kinetic energy at maximum height is __ ","Zero","Nonzero","null","null","Zero",totalScore,5)
                  var d= setInterval(function(){
                    if(quest==4){
                      clearInterval(d)
                      console.log(d)
                      QuizCoreExecuter(5,"When a stone fall ____ "," Potential energy increases, kinetic energy decreases"," Potential energy decreases, kinetic energy increases","null","null"," Potential energy decreases, kinetic energy increases",totalScore,5)
                      $("#screen1").css({ 'display': 'block' });
                      $("#divBack").css({ 'display': 'none' }); 
                      $("#Inference").css({ 'display': 'none' }); 
                      $(".Quize").css({ 'display': 'none' }); 
                    }
                  })
                }
              })
      }
      })
        }
      })
        // alert(1)
       
       
        // $("#screen1").css({ 'display': 'none' });
        // $("#inferenceDiv").css({ 'display': 'block' });
    }
    });
  Inference_msg = ["◉ When we release the wheel, potential energy is converted to kinetic<br>energy of rotation of wheel.<br>◉ All of the wheel's energy is kinetic when it is in its lowest position.<br>So, the thread starts to wind up in the opposite direction."]
  helpMsg = [
    "Drag and drop the<br>Thread towards<br>the Stand",
    "Drag and drop the<br>Wheel towards the<br>hanging Thread",
  "Click on the Wheel to<br>fix the Wheel on top",
 "Click on the Wheel to<br>release the Wheel",
 "Choose right answer",
 "Click on the Reset<br>button to redo<br>the experiment",
 "Click on the<br>Quiz button",
 "Click on the Inference<br>button to view the<br>inference.",
           
    ]
  $("#screen1").css({ 'display': 'block' });
  $("#inferenceDiv").css({ 'display': 'none' });


  	$(".sim-controls").hide();

	$(".sim-div").css({"width":"100%"});


  // thread drag and drop
  $("#thread").css({"pointer-events": "","cursor": "pointer"});
$("#thread").draggable({
			revert: function (is_valid_drop) {
				if (!is_valid_drop) {
					$(this).animate({
						top: "78%",
						left: "54%", 
					})
				}
			},
			containment: "#screen1",
			drag: function () {
				removeTrip();
			}
		});
		$("#thraedDroparea").droppable({
			accept: "#thread",
			drop: function () {
        help = 1
        $("#thread").css({ 'display': 'none' });
        $("#standSecond").css({ 'display': 'block' });
        $("#stand").css({ 'display': 'none' });
        wheelDragdrop();
      }
      });
          // wheel drag and drop
          function wheelDragdrop() {
           
          $("#wheel").css({"pointer-events": "","cursor": "pointer"});
          $("#wheel").draggable({
             
                revert: function (is_valid_drop) {
                  if (!is_valid_drop) {
                    $(this).animate({
                      top: "71%",
                      left: "71%", 
                    })
                  }
                },
                containment: "#screen1",
                drag: function () {
                  removeTrip();
                }
              });

              $("#thraedDroparea").droppable({
                accept: "#wheel",
                drop: function () {
                  help = 2
                  $("#standSecond").css({ 'display': 'none' });
                  $("#wheel").css({ 'display': 'none' });
                  $("#wheelStand").css({ 'display': 'block' });
                  $('#wheel').animate({left: '22%',top: '58%'},"slow");
                  $("#clickDiv1").css({"pointer-events": "","cursor": "pointer"});
                  $("#clickDiv1").click(function () {
                    help=100
                    removeTrip();
                    $("#clickDiv1").css({"pointer-events": "none","cursor": "pointer"});
                    $("#wheelStand").css({ 'display': 'none' });
                    ImageAnimationOneTime("wheelUping", "wheelTop", Imagewheel, 100, 0)
                    setTimeout(function(){
                      help = 3
                      $("#wheelStand2").css({ 'display': 'block' }); 
                      $("#clickDiv2").css({"pointer-events": "","cursor": "pointer"});
                      $("#clickDiv2").click(function () {
                        help = 99
                        removeTrip();
                        $("#clickDiv2").css({"pointer-events": "none","cursor": "pointer"});
                        $("#wheelStand2").css({ 'display': 'none' }); 
                        ImageAnimationOneTime("wheelUpingyy", "wheelTopyy", Imagewheelyy, 100, 0)
                       
                        setTimeout(function(){
                          help=7
                          $("#Inference").css({"pointer-events": "","cursor": "pointer"});
                          $("#Inference").css('display', "block");
                         
                          $("#wheelStand3").css({ 'display': 'block' }); 
                       
                          $("#Inference").click(function () {
                            help=6
                            // $("#Inference").css({"pointer-events": "","cursor": ""});
                            $(".Quize").css('display', "block");
                            
});

// alert(1)
                          },12700);
                      });
                    },4000);
                  });
                  
                  setTimeout(function(){
                    selected = 1;
                    selected = 2;
                    // QuizCoreExecuter(1,"The thinner strands used to make the clothing are referred to as?","Silk","Threads","Fibre","Fabric","Fibre",1,3)
                     
                    
                   
                  },5000)

                }
              });
            }

  });










  

$(window).on('load',function() {
 
  
  // ImageAnimationOneTime("wheelUping", "wheelTop", Imagewheel, 50, 0)
  ImageInitLoad(Imagewheel, "wheelUp", "wheelTop", "wheelUping")
  ImageInitLoad(Imagewheelyy, "wheelUpyy", "wheelTopyy", "wheelUpingyy")


});


//animation
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







//
// ========================= NEW function testing =============================




