var temp = 0, count = 0, gt, c, ctx, showArr=0,inferenceArr=0;
var inferenceMsg, helpMsg, helpMsg1, helpMsg2;
var flameOraArray=[],flameAnimOra;
var pumpArray=[],pumpAnim;
var boyArray=[],boyAnim,boyAnim1;
var bookPaperArray=[],bookPaperAnim;
var flameBluArray=[],flameAnimBlu;
var paperArray=[],paperAnim;
var bookZoomArray=[],bookZoomAnim;
var pendArray=[],pendAnim;
var arroArray=[],arroAnim,arroAnimBook;
var tempForOne=0;
var infer=false, count=0;nextCount=0;

$(window).on('load',function(){  
  ImageInitLoad(flameOraArray,"actFive","flameOra","flameOraAnimation")
  ImageInitLoad(flameBluArray,"actFive","flameBlu","flameBluAnimation")
  ImageInitLoad(arroArray,"actOne","arrow","arroAnimation")
  ImageInitLoad(arroArray,"actTwo","arrowBook","arro1Animation")
  ImageInitLoad(boyArray,"actTwo","boy","boyAnimation")
  ImageInitLoad(boyArray,"actOne","boyPaper","boy1Animation")
  ImageInitLoad(paperArray,"actThree","paperOnly","paperAnimation")
  ImageInitLoad(pendArray,"actOne","pend","pendAnimation")
  ImageInitLoad(bookPaperArray,"actTwo","bookPaper","bookPaperAnimation")
  ImageInitLoad(bookZoomArray,"actTwo","bookPaperZoom","bookPaperZoomAnimation")


  });
      $(document).ready(function () {
        gt = new Gettext({ 'domain': 'messages' });
        $("#expName").html(gt.gettext("Bernoulli's Theorem"));
        $("#text_1").html(gt.gettext("Select the Activity"));
        $("#pendulum").html(gt.gettext("Using Two Simple Pendulums"));
        $("#booksAndPaper").html(gt.gettext("Using Books and Paper"));
        $("#Paper").html(gt.gettext("Using Paper"));
        $("#waterspray").html(gt.gettext("Using Water Spray"));
        $("#bunsenBurner").html(gt.gettext("Using Bunsen Burner"));
        $("#text_2").html(gt.gettext("Bernoulli’s Theorem"));
        $("#text_3").html(gt.gettext("P-pressure of a fluid, ρ-density of fluid, g-acceleration due to gravity, h-elevation of fluid, v-speed of fluid."));
        $("#text_4").html(gt.gettext("This is Bernoulli's equation."));
        $("#text_5").html(gt.gettext("The major prediction of Bernoulli’s equation is the speed of fluid and pressure of fluid are inversely proportional as fluid travels along a horizontal streamline."));
        $("#text_6").html(gt.gettext("Higher-pressure regions push things or fluids to lower-pressure regions."));
        $("#text_7").html(gt.gettext("The following experiments demonstrate the relationship between the pressure and velocity of the fluid."));
        $("#next").html(gt.gettext("Next"));
        $("#next1").html(gt.gettext("Next"));
        $(".box").html(gt.gettext("Info about a game"));

        $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
        inferenceMsg = [
          gt.gettext("Induced emf in a coil depends upon<br>1. Self-inductance of coil<br>2. Change in current through the coil ")
        ];
        helparr = [
          ////0-12
          gt.gettext("Click on the Next<br>button to continue"),
          gt.gettext("Answer the question to continue"),     
          gt.gettext("Click on the mouth of the boy to blow between<br>the pendulums"), 
          gt.gettext("Click on the Next button to choose another activity"),
          gt.gettext("Select the activity"),  
          gt.gettext("Answer the question to continue"),     
          gt.gettext("Click on the mouth of the boy<br>to blow below the paper"),
          gt.gettext("Answer the question to continue"),     
          gt.gettext("Click on the mouth of the boy<br>to blow at the edge of the paper"), 
          gt.gettext("Click on the piston<br>to observe the motion<br>of the water spray"), 
          gt.gettext("Click on the burner<br>knob to turn it on"), 
          gt.gettext("Click on the burner valve to open it"), 
          gt.gettext("Click on the Reset button to redo the experiment"),
          gt.gettext("Click on the inference icon to view the observation"),
        ]
        inferArr = [
          ////13
          gt.gettext("♦ When the velocity of air between bobs<br>increases, the pressure between bobs decreases.<br>♦ Bobs move to the lower pressure region and they move close<br>to each other."),
          gt.gettext("♦ The velocity of air at the bottom of the paper increases.<br> The pressure at the bottom of the paper decreases.<br>♦ The Paper moves to lower pressure region.<br>It will be pushed downward."),         
          gt.gettext("♦ Velocity of air at the top of the paper increases.<br>Pressure at the top of the paper decreases.<br>♦ Paper moves to a lower pressure region.<br>It lifts upwards."),        
          gt.gettext("♦ When we press the piston the velocity of air<br>near the fine hole increases.<br>Pressure near the fine hole decreases.<br>♦ Water rises to lower pressure.<br>So water rises upward."),
          gt.gettext("♦ Gas passes through a narrow tube at high velocity.<br>Then the pressure inside the tube decreases.<br>♦ When we open the holes, air moves to the tube and colour<br>of the flame changes to blue."),

        ]

        helpMsg2 = [
          gt.gettext("Drag and drop the <br>correct answer towards the<br> boxes given in the screen"), 
          gt.gettext("Click on the button for hint."), 
          gt.gettext("Click on the Reset button to redo the experiment again.")
        ];
    
        $(".sim-controls").css("display","none")
        $(".sim-div").css({"width":"100%"})
//waterspray image loop
        for (i = 0; i < 39; i++) {
          if (i < 9) {
            pumpArray[i] = "../PHY/CLA/bernoullisPrinciple/images/pumpanimation/pumpanimation000" + (i + 1) + ".png"
          }
          else
          pumpArray[i] = "../PHY/CLA/bernoullisPrinciple/images/pumpanimation/pumpanimation00" + (i + 1) + ".png"
        }
        //flame orange image loop

        for (i = 0; i < 27; i++) {
         
            flameOraArray[i] = "../PHY/CLA/bernoullisPrinciple/images/flameOrange/flameOrange1 (" + (i + 1) + ").png"
        
         
        }
        //flame blue image loop

        for (i = 0; i < 32; i++) {
  
            flameBluArray[i] = "../PHY/CLA/bernoullisPrinciple/images/flameBlue/flameblue1 (" + (i + 1) + ").png"
  
          
        }
        //book and paper animation image loop

        for (i = 0; i < 40; i++) {
          if (i < 9) {
            bookPaperArray[i] = "../PHY/CLA/bernoullisPrinciple/images/paper animation/paper animation000" + (i + 1) + ".png"
          }
          else
          bookPaperArray[i] = "../PHY/CLA/bernoullisPrinciple/images/paper animation/paper animation00" + (i + 1) + ".png"
        }
        //boy image loop

        for (i = 0; i < 55; i++) {
          if (i < 9) {
            boyArray[i] = "../PHY/CLA/bernoullisPrinciple/images/boy animation/boy animation000" + (i + 1) + ".png"
          }
          else
          boyArray[i] = "../PHY/CLA/bernoullisPrinciple/images/boy animation/boy animation00" + (i + 1) + ".png"
        }

////////////boy paper animation loop////////////
        for (i = 0; i < 41; i++) {
          if (i < 9) {
            paperArray[i] = "../PHY/CLA/bernoullisPrinciple/images/boy papper animation/ANIM2000" + (i + 1) + ".png"
          }
          else
          paperArray[i] = "../PHY/CLA/bernoullisPrinciple/images/boy papper animation/ANIM200" + (i + 1) + ".png"
        }

        ////////////////book zoom array
        for (i = 0; i < 40; i++) {
          if (i < 9) {
            bookZoomArray[i] = "../PHY/CLA/bernoullisPrinciple/images/book front/book front000" + (i + 1) + ".png"
          }
          else
          bookZoomArray[i] = "../PHY/CLA/bernoullisPrinciple/images/book front/book front00" + (i + 1) + ".png"
        }
/////////////////////arrow array
        for (i = 0; i < 20; i++) {
          if (i < 9) {
            arroArray[i] = "../PHY/CLA/bernoullisPrinciple/images/ARROW ANIM/arrow1 (" + (i + 1) + ").png"
          }
        }
        /////////////////////pendulum array

        for (i = 0; i < 30; i++) {
          if (i < 9) {
            pendArray[i] = "../PHY/CLA/bernoullisPrinciple/images/PENDULUM   ANIMATION/PENDULAM ANIMATION000" + (i + 1) + ".png"
          }
          else
          pendArray[i] = "../PHY/CLA/bernoullisPrinciple/images/PENDULUM   ANIMATION/PENDULAM ANIMATION00" + (i + 1) + ".png"
        }
       
       

                $("#next1").click(function(){
                  count++
                  $("#actTypes").css("pointer-events", "auto");
                  removeTrip()
                  $("#inferenceImg").css("display","none")
                  $("#next1").css("display","none")
                  console.log(count)
                  if(count==5)
                    {
                    inferenceArr = 0;
                    // showArr=6;    
                    $("#actTypes").css("pointer-events", "none");
                  }
                  else{
                    showArr=4;
                  }
                })


              setTimeout(function(){
                  $("#next").show();
                },1000)
                $("#next").click(function () { 
                  removeTrip()
                  showArr=1;
                  QuizCoreExecuter(1,gt.gettext("What will happen when you blow into the space between the bobs?"), gt.gettext("Bobs move away from each other"),gt.gettext("Bobs move close to each other"),"","", gt.gettext("Bobs move close to each other"), 1, 2)
          $("#actOne").show();
          $("#intro").hide();
         });

            $('#mouth').click(function(){ 
              removeTrip()
              $('#student').fadeOut(1000);
              showArr=6;
              $("#actTypes").css("pointer-events", "none");
              boyAnim1= ImageAnimationINFinity("boy1Animation","boyPaper",boyArray,130)
              $('#pendulum1,#pendulum2').fadeOut(1000);
              pendAnim= ImageAnimationINFinity("pendAnimation","pend",pendArray,190)
              arroAnim= ImageAnimationINFinity("arroAnimation","arrow",arroArray,120)
              // nextCount++;

              setTimeout(function(){
                inferenceArr = 0;
                $("#inferenceImg").css("display","block")
        nextCount++;

        $("#inferenceImg").click(function(){
          removeTrip()
          if(nextCount==5){
            $("#next1").css("display","none")
            showArr = 7;
  
          }
          else {
            $("#next1").css("display","block")
            showArr = 3;
  
          }
        })
        
                // $("#next1").css("display","block")
                $("#next1").click(function(){
                  removeTrip()
                  $("#inferenceImg").css("display","none")
                  $("#next1").css("display","none")
                  $('#student,#book').css({"display":"block"});
                  $('#mouth').css({"pointer-events":"none"}) 
                  $("#actTypes option[value='pendulum']").attr("disabled", true);
                  $('#pendulum1,#pendulum2').fadeIn(500);
                  clearAnimation(arroAnim, "arroAnimation")
                  clearAnimation(boyAnim1, "boy1Animation")
                  clearAnimation(pendAnim, "pendAnimation")        
                })
              },1000)
        })      
      
$("#actTypes").change(function(){
  removeTrip();
  actTypes = $(this).val()
  if(actTypes=="pendulum"){
showArr= 2;
    $("#actOne").css({"display":"block"})
 $("#actTwo,#actThree,#actFour,#actFive").css({"display":"none"})
  }
  else if(actTypes=="booksAndPaper"){
    removeTrip();
    showArr = 5;
    $("#actTwo").css({"display":"block"})
    $("#mouth1").css({"display":"block"})
    $("#actOne,#actThree,#actFour,#actFive").css({"display":"none"})
    $('#mouth1').click(function(){ 
      removeTrip()
      showArr=6;
   $('#student1').fadeOut(1000);
   boyAnim= ImageAnimationINFinity("boyAnimation","boy",boyArray,70)
  arroAnimBook= ImageAnimationINFinity("arro1Animation","arrowBook",arroArray,120)
   bookPaperAnim= ImageAnimationINFinity("bookPaperAnimation","bookPaper",bookPaperArray,100)
   bookPapeZoomAnim= ImageAnimationINFinity("bookPaperZoomAnimation","bookPaperZoom",bookZoomArray,100)
  //  nextCount++;

      $("#actTypes").css("pointer-events", "none");
      setTimeout(function(){
        inferenceArr = 1;
        $("#inferenceImg").css("display","block")
        nextCount++;

        $("#inferenceImg").click(function(){ 
          removeTrip()
          showArr = 3;
          if(nextCount==5){
            $("#next1").css("display","none")
            showArr = 7;
  
          }
          else {
            $("#next1").css("display","block")
            showArr = 3;
  
          }
        })
        
        // $("#next1").css("display","block")
        $("#next1").click(function(){
          removeTrip()
          $("#inferenceImg").css("display","none")
          $("#next1").css("display","none")
          $('#student1,#book').css({"display":"block"});
          $('#mouth1').css({"pointer-events":"none"}) 
          $("#actTypes option[value='booksAndPaper']").attr("disabled", true);
          clearAnimation(boyAnim, "boyAnimation")
          clearAnimation(bookPaperAnim, "bookPaperAnimation")
          clearAnimation(bookPapeZoomAnim, "bookPaperZoomAnimation")
          clearAnimation(arroAnimBook, "arro1Animation")
        })
      },1000)

    });
  }
  else if(actTypes=="paper"){
    removeTrip();
    showArr= 11;
    $(".sim-controls").css("display","none")
    $(".sim-div").css({"width":"100%"})
    QuizCoreExecuter(1,gt.gettext("What will happen when we blow along the paper?"), gt.gettext("Paper lifts"),gt.gettext("Paper get pushed down "),"","", gt.gettext("Paper lifts"), 2, 2)
    $("#actThree").css({"display":"block"})
    $("#actOne,#actTwo,#actFour,#actFive").css({"display":"none"})
    $('#mouth2').click(function(){ 

      removeTrip()
      showArr=6;
      $("#student2").fadeOut(1000)
      $("#actTypes").css("pointer-events", "none");
      paperAnim= ImageAnimationINFinity("paperAnimation","paperOnly",paperArray,100)

      setTimeout(function(){
        inferenceArr = 2;
        $("#inferenceImg").css("display","block")
        nextCount++;

        $("#inferenceImg").click(function(){ 
          removeTrip()
          showArr = 3;
          if(nextCount==5){
            $("#next1").css("display","none")
            showArr = 7;
  
          }
          else {
            $("#next1").css("display","block")
            showArr = 3;
  
          }
        })
        
        // $("#next1").css("display","block")
       

        $("#next1").click(function(){
          removeTrip()
          $("#inferenceImg").css("display","none")
          $("#next1").css("display","none")
          $('#student2').css({"display":"block"});
          $("#actTypes option[value='paper']").attr("disabled", true);
          $("#mouth2").css("pointer-events","none")
          clearAnimation(paperAnim, "paperAnimation")    
        })
      },1000)

    });
  }
  else if(actTypes=="waterspray"){
    removeTrip();
    showArr= 8;
    if(tempForOne==0)
    {
      one();
      tempForOne++;
    }
    else
    {
      $("#actFour" ).css({"display":"block"})
    $("#actOne,#actTwo,#actThree,#actFive").css({"display":"none"})
    }
    
  }
  else if(actTypes=="bunsenBurner"){
    removeTrip();
    showArr= 9;
    $("#actFive").css({"display":"block"})
    $("#actOne,#actTwo,#actThree,#actFour").css({"display":"none"})
$("#burnerKnob").click(function(){

  removeTrip()
  showArr= 10;
  $("#actTypes").css("pointer-events", "none");
  $("#burnerKnob").css({"display":"none"})
  flameAnimOra= ImageAnimationINFinity("flameOraAnimation","flameOra",flameOraArray,100)
  $("#burner").css({"pointer-events":"none"})
  $("#burner").css({"cursor":"default"})
  $("#holeClose").css({"cursor":"pointer"})
  $("#holeClose").click(function(){
    removeTrip()
    $("#holeClose").css({"display":"none"})
    $("#holeOpen").css({"display":"block"})
    flameAnimBlu= ImageAnimationINFinity("flameBluAnimation","flameBlu",flameBluArray,100)
    $("#holeClose").css({"pointer-events":"none"})
  $("#holeClose").css({"cursor":"default"})
  clearAnimation(flameAnimOra, "flameOraAnimation")
  
  showArr=6;
  // nextCount++;

  setTimeout(function(){
    inferenceArr = 4;
    $("#inferenceImg").css("display","block")
        nextCount++;

        $("#inferenceImg").click(function(){
          removeTrip()
          showArr = 3;
          if(nextCount==5){
            $("#next1").css("display","none")
            showArr = 7;
  
          }
          else {
            $("#next1").css("display","block")
            showArr = 3;
  
          }
        })
        
    // $("#next1").css("display","block")
    $("#next1").click(function(){
      removeTrip()
      $("#actTypes").css("pointer-events", "auto");
      $("#inferenceImg").css("display","none")
      $("#next1").css("display","none")
      $('#burnerKnob').css({"display":"block"});
      $('#burnerKnob').css("pointer-events","none");
      $("#actTypes option[value='bunsenBurner']").attr("disabled", true);
      clearAnimation(flameAnimBlu, "flameBluAnimation")
    })
  },1000)
  })
})
  }
})
      })

function one(){
    ImageInitLoad(pumpArray,"actFour","pump","pumpAnimation")

    $('#piston').css({"pointer-events":"auto"}) 
    $("#actFour" ).css({"display":"block"})
    $("#actOne,#actTwo,#actThree,#actFive").css({"display":"none"})    
    $('#piston').click(function(){ 
      showArr = 6 ;
      removeTrip()
      $('#sprayFull').animate({"top":"-10%"},function(){
        $('#piston').fadeOut();
        pumpAnim= ImageAnimationINFinity("pumpAnimation","pump",pumpArray,100)
        // nextCount++;

        setTimeout(function(){
          inferenceArr = 3;
          $("#inferenceImg").css("display","block")
          nextCount++;
  
          $("#inferenceImg").click(function(){
            removeTrip();
            showArr = 3;
          if(nextCount==5){
            $("#next1").css("display","none")
            showArr = 7;
  
          }
          else {
            $("#next1").css("display","block")
            showArr = 3;
  
          }
          })
          
          // $("#next1").css("display","block")
          $("#next1").click(function(){
            removeTrip()
            $("#actTypes").css("pointer-events", "auto");
            $("#inferenceImg").css("display","none")
            $("#next1").css("display","none")
            $('#sprayFull').css({"display":"block","top": "0%"});
            $('#piston').css({"pointer-events":"none"}) 
            $("#actTypes option[value='waterspray']").attr("disabled", true);
            $('#piston').css({"display":"block"}) 
            clearAnimation(pumpAnim, "pumpAnimation")
          })
        },1000)
      }) 
      $("#actTypes").css("pointer-events", "none");
    });
}
function ImageInitLoad(ANIMATIONImageArray,ANIMATIONDivName,ANIMATIONImageIdName,ANIMATIONImageClassName) 
    {
        for(var ANIMATIONForloop=0;ANIMATIONForloop<ANIMATIONImageArray.length;ANIMATIONForloop++)
        {
            var $tempx2=$("<img src='"+ANIMATIONImageArray[ANIMATIONForloop]+"'/>").attr({id:ANIMATIONImageIdName+ANIMATIONForloop,class:ANIMATIONImageClassName,display:"none"});
            $("#"+ANIMATIONDivName).append($tempx2);
        }
    }
    function ImageAnimationINFinity(ANIMATIONImageClassName,ANIMATIONImageIdName,ANIMATIONImageArray,ANIMATIONSpeed)
    {   var GlobalVariable=0;
        var ANIMATIONTimesReached=0;
        var CLEARImageAnimation=setInterval(function() {
            $('#'+ANIMATIONImageIdName+(GlobalVariable-1)).css({'display':'none'});
            $('#'+ANIMATIONImageIdName+GlobalVariable).css({'display':'block'});
            GlobalVariable++;
            if(GlobalVariable==ANIMATIONImageArray.length)
            {
                $('.'+ANIMATIONImageClassName).css({'display':'none'});
                $('#'+ANIMATIONImageIdName+(0)).css({'display':'block'});
                GlobalVariable=0;
                ANIMATIONTimesReached++;
            }
        },ANIMATIONSpeed);
        return(CLEARImageAnimation);
    }

    function clearAnimation(myInterval,imgClass)
    {
        clearInterval(myInterval);
        $("."+imgClass).remove();
    
    }
    function ImageAnimationOneTime(ANIMATIONImageClassName,ANIMATIONImageIdName,ANIMATIONImageArray,ANIMATIONSpeed,ANIMATIONTimes)
    {   var GlobalVariable=0;
        var ANIMATIONTimesReached=0;
        var CLEARImageAnimation=setInterval(function() {
            $('#'+ANIMATIONImageIdName+(GlobalVariable-1)).css({'display':'none'});
            $('#'+ANIMATIONImageIdName+GlobalVariable).css({'display':'block'});
            GlobalVariable++;
            if(GlobalVariable==ANIMATIONImageArray.length-1)
            {
                $('.'+ANIMATIONImageClassName).css({'display':'none'});
                $('#'+ANIMATIONImageIdName+(0)).css({'display':'block'});
                if(ANIMATIONTimesReached>=ANIMATIONTimes)
                {
                    $('.'+ANIMATIONImageClassName).css({'display':'none'});
                    CLEARImageAnimation.clearIntervel();
                }
                else
                {
                    GlobalVariable=0;
                    ANIMATIONTimesReached++;
                }
            }
        },ANIMATIONSpeed);
    }

    function clearAnimation(myInterval,imgClass)
    {
        clearInterval(myInterval);
        $("."+imgClass).remove();
    
    }


function removeTrip() {

  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;

  }
}

