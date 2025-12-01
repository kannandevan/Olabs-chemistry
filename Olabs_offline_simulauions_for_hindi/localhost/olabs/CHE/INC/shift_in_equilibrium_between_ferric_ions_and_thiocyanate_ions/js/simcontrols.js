var Dragelem = 0;
var repateFunction=0;
var helpCount=0;
var repeateNext=0;
$(window).on('load',function() {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("<span id='titleid' > Study the Shift in Equilibrium between Ferric ions and Thiocyanate ions </span> ");
  CommonClickPowder="Click on the Ferric Chloride powder";
  CommonClickPowder2="Click on the Potassium Thiocyanate powder";

  SpatulaDrag="Drag the spatula and drop <br> it in the watch glass"
  SpatulaDrag2="Drag the spatula containing 0.100g Ferric Chloride <br>  and drop it in the beaker A" 
  SpatulaDrag3="Drag the spatula containing 0.100g <br> Potassium Thiocyanate powder <br>  and drop it in the beaker B"
  WaterBeakerDrag="Drag the beaker (containing water)<br> and drop it in the beaker A"
  WaterBeakerDrag2="Drag the beaker (containing water)<br> and drop it in the beaker B"
  SolutionBeakerDrag="Drag the beaker and drop <br> it in the beaker C"
  CommonGlassrodMsg="Drag the glass rod and <br>drop it in the beaker A"

  CommonGlassrodMsg2="Drag the glass rod and <br>drop it in the beaker B"
  Common_Next = "Click on the Next button";
  // SEcondPage Help info
 
BeakerDragSeconpage1="Drag the beaker containing FeCl<sub>3</sub> solution <br> and drop it in the first burette"
BeakerDragSeconpage2="Drag the beaker containing KSCN solution <br>and drop it in the second burette"
BeakerDragSeconpage3="Drag the beaker containing <br>red solution and drop it in <br> the third burette"
BeakerDragSeconpage4="Drag the beaker <br> containing water and drop it <br> in the fourth burette"


  // end
  // Third page Help info

thirdpagefirstinfo="Drag the test tube A and drop it<br> in the second burette containing red solution"
buretteClickopen="Click on the burette cap to open"
buretteClickclose="Click on the burette cap to close"
RepeateAllmsg = "Repeat the previous three steps for <br> the other test tubes B,C,D and E"
RepeateAllmsg2 = "Repeat the previous three steps for <br> the other test tubes C,D and E"
thirdpagefirstinfoBurette1="Drag the test tube B and drop it<br> in the first burette containing Ferric Chloride"
thirdpagefirstinfoburette3="Drag the test tube A and drop it <br> in the third burette containing water"
theFinalhelpmsg = "Click on the Reset button to do the experiment again"
CommonInferenc="Observe the colour change"


commoninferencebtn="Click on the Inference button";


theRepeatePottasiumhelp="Drag the test tube B and drop it <br>in the first burette containing<br> Potassium Thiocyanate"


  // ends
  // TheBurretDrop()
});
$(document).ready(function () {
  helpCount=0;
  var RepeateScreen=$("#theThirdPagediv").html();
 

  $("#ContolsWatchglassFerric").click(function () {
    removeTrip()
    helpCount=1;
    $("#theFirstwatchGlassFerric").fadeIn();
    $("#ContolsWatchglassPottasium").css({ opacity: .5 })
    $("#ContolsWatchglassFerric").css({ opacity: .5, "pointer-events": "none" })
    $("#ContolsWatchglassFerric").css({ cursor: "auto " })

    $("#theSpatulaDiv").css({ cursor: "grab " })

    //Help and instruction Messages



    // FirstPageHelp

    // Ends

    // End

    // the Steps

    $("#theSpatulaoverFirstbeaker").css({ left: 1 + "%" })
    DragElement("#theSpatulaDiv", "", "#theFirstSpatula", 15, 342, 79, 75)

    $("#thewatchglassDroparea").droppable({
      tolerance: "touch",
      accept: "#theSpatulaDiv", drop: function () {
        drop = true;
        helpCount=2;

        $("#theSpatulaDiv").draggable({ disabled: true });

        $("#theSpatulaDiv").animate({ left: 83.7 + "%", top: 59 + "%" }, function () {
          $("#theFirstSpatulaFerric").fadeIn();
          $("#theSpatulaDiv").draggable({ disabled: false });

          // Copy

          DragElement("#theSpatulaDiv", "", "#theFirstSpatula", 342, 342, 84.7, 59)

          $("#theSpatulaoverFirstbeaker").droppable({
            tolerance: "touch",
            accept: "#theSpatulaDiv", drop: function () {
              drop = true;
            helpCount=3;

              $("#theSpatulaDiv").animate({ left: 6 + "%", top: 30 + "%" }, function () {
                $("#Secondpage_powderintesstube").fadeIn(1000);
                $(this).css({ transform: 'rotate(' + 243 + 'deg)' }, 200)
                $(this).css({ transform: 'rotate(' + 341 + 'deg)' }, 200)
                $("#theFirstSpatulaFerric").animate({ top: 129 + "%", left: 1 + "%" })
                $("#theSpatulaDiv").draggable({ disabled: true });

                $("#theSpatulaDiv").css({ "cursor": "auto" })

                $("#TheFirstBeakerFerricpour").show("blind", { direction: "up" }, function () {
                  $("#TheFirstBeakerFerricpour").hide("blind", { direction: "down" })
                  $("#TheFirstBeakerFerricpowderonbeaker").show("blind", { direction: "down" })
                });
                $("#theFirstSpatulaFerric").fadeOut();
                setTimeout(() => {
                  $("#theSpatulaDiv").animate({ left: 79 + "%", top: 75 + "%" })
                  $("#theSpatulaDiv").css({ transform: 'rotate(' + 0 + 'deg)' })

                  $("#theFirstSpatula").css({ transform: 'rotate(' + 16 + 'deg)' }, 200)
    $("#theSpatulaDiv").css({ cursor: "auto " })
    $("#theSpatulaDiv").css({ PointerEvent: "none " })
    $("#firstPageFourthbeakerDiv").css({ cursor: "grab " })

                  drop = false;
                }, 1500);

                DragElement("#firstPageFourthbeakerDiv", "", "#firstPageFourthbeakerDiv", 0, 0, 60, 45)

                $("#theSpatulaoverFirstbeaker").droppable({
                  tolerance: "touch",
                  accept: "#firstPageFourthbeakerDiv", drop: function () {
                    drop = true;
                    $("#firstPageFourthbeakerDiv").animate({ left: 13 + "%", top: 8 + "%" }, function () {
                      $("#TheFourthBeakerWater").fadeOut();
                      $("#TheFourthBeakerWater2").show();
    $("#firstPageFourthbeakerDiv").css({ cursor: "auto " })


                      setInterval(waterPour, 10);
                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 316 + 'deg)' })
                     
                      
                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 295 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 290 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 287 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 283 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 280 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 277 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 275 + 'deg)' })
                     

                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 270 + 'deg)' })
                     
                      $("#waterPourtobeaker1").fadeIn();
                      $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 269 + 'deg)' })
                      $("#waterPourtobeaker1").hide("blind", { direction: "down" },200)

                      setTimeout(function () {
                        $("#TheFirstBeakerWatersol").show("blind", { direction: "down" })
                        $("#TheFourthBeakerWater5").hide();
                        $("#TheFourthBeakerWater").fadeIn();
                        $("#firstPageFourthbeakerDiv").animate({ left: 60 + "%", top: 45 + "%" })
                        $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 0 + 'deg)' })
                        $(".Waterforbeaker").css({height: 31 +"%", top: 58+ "%"});
                        $("#firstPageFourthbeakerDiv").draggable({ disabled: true });
                        $("#GlassRodOfpageone").css({ cursor: "grab " })
                        helpCount=4;


                      }, 300)

                      DragElement("#GlassRodOfpageone", "", "#GlassRodOfpageone", 0, 0, 75, 86)

                      $("#theSpatulaoverFirstbeaker").droppable({
                        tolerance: "touch",
                        accept: "#GlassRodOfpageone", drop: function () {


                          drop = true;
                          $("#water_animation_Bottle2").fadeIn();
                        $("#GlassRodOfpageone").css({ cursor: "auto " })


                          GlassrodAim(-9, 3, 0)
                          setTimeout(() => {
                            setInterval(wateranimate2, 90);

                          }, 300);
                          setTimeout(() => {

                            $("#TheFirstBeakerFerricpowderonbeaker").fadeOut();
                            $("#TheFirstBeakerferricsolution").fadeIn(2400);
                            $("#TheFirstBeakerWatersol").fadeOut(1800);
                            $("#ContolsWatchglassPottasium").css({ opacity: 1 })
                            $("#theFerricPowder").css({ opacity: .5 })
                            $("#ContolsWatchglassPottasium").css({ cursor: "pointer " })
                            helpCount=5;
                            
                        $("#GlassRodOfpageone").draggable({ disabled: true });



                          }, 1000);
                          setTimeout(() => {
                            $("#water_animation_Bottle2").fadeOut();

                            $("#theInstruction").html("Click on the Potassium Thiocyanate powder")

                            
                            $("#ContolsWatchglassPottasium").css("cursor: pointer;")
                          }, 2500);


                          // The second powder clickkk#################################################
                          $("#ContolsWatchglassPottasium").click(function () {
                            helpCount=6;

                          removeTrip()

                          // $("#ContolsWatchglassPottasium").css({ opacity: .5 })
                          // $("#ContolsWatchglassFerric").css({ opacity: .5, "pointer-events": "none" })
                          // $("#ContolsWatchglassFerric").css({ cursor: "auto " })




                            $("#ContolsWatchglassPottasium").css({ opacity: .5, "pointer-events": "none" })
                            $("#ContolsWatchglassPottasium").css({ cursor: "auto " })

                            $("#theFirstwatchGlassFerric").fadeOut();
                            $("#theFirstwatchGlassPottasium").fadeIn();
                            $("#theSpatulaoverFirstbeaker").css({ left: 19 + "%" })
                            $("#theSpatulaDiv").draggable({ disabled: false });
                            $("#theSpatulaDiv").css({ cursor: "grab " })
                            $("#theSpatulaDiv").css({ PointerEvent: "auto " })

                            // Start
                            DragElement("#theSpatulaDiv", "", "#theFirstSpatula", 15, 342, 79, 75)

                            $("#thewatchglassDroparea").droppable({
                              tolerance: "touch",
                              accept: "#theSpatulaDiv", drop: function () {
                                drop = true;

                                $("#theSpatulaDiv").draggable({ disabled: true });

                                $("#theSpatulaDiv").animate({ left: 83.7 + "%", top: 59 + "%" }, function () {
                                  $("#theFirstSpatulaPottasium").fadeIn();
                                  $("#theSpatulaDiv").draggable({ disabled: false });
                                  helpCount=7;

                                  // Copy

                                  DragElement("#theSpatulaDiv", "", "#theFirstSpatula", 342, 342, 84.7, 59)

                                  $("#theSpatulaoverFirstbeaker").droppable({
                                    tolerance: "touch",
                                    accept: "#theSpatulaDiv", drop: function () {


                                      drop = true;

                                      $("#theSpatulaDiv").animate({ left: 28 + "%", top: 30 + "%" }, function () {
                                        $("#TheFirstBeakerPottasiumpowderonbeaker").fadeIn(1000);
                                        $(this).css({ transform: 'rotate(' + 243 + 'deg)' }, 200)
                                        $(this).css({ transform: 'rotate(' + 341 + 'deg)' }, 200)
                                        $("#theFirstSpatulaPottasium").animate({ top: 129 + "%", left: 1 + "%" })
                                        $("#theSpatulaDiv").draggable({ disabled: true });

                                        $("#theSpatulaDiv").css({ "cursor": "auto" })

                                        $("#TheFirstBeakerPottasium").show("blind", { direction: "up" }, function () {
                                          $("#TheFirstBeakerPottasium").hide("blind", { direction: "down" })
                                          $("#TheFirstBeakerPottasiumpowderonbeaker").show("blind", { direction: "down" })
                                        });
                                        $("#theFirstSpatulaPottasium").fadeOut();
                                        setTimeout(() => {
                                          $("#theSpatulaDiv").animate({ left: 79 + "%", top: 75 + "%" })
                                          $("#theSpatulaDiv").css({ transform: 'rotate(' + 0 + 'deg)' })

                                          $("#theFirstSpatula").css({ transform: 'rotate(' + 16 + 'deg)' }, 200)
                                          drop = false;
                                          $("#firstPageFourthbeakerDiv").draggable({ disabled: false });
                            $("#theSpatulaDiv").css({ cursor: "auto " })
                            $("#firstPageFourthbeakerDiv").css({ cursor: "grab " })
                            helpCount=8;
                            $("#theSpatulaDiv").css({ PointerEvent: "none " })


                                        }, 1500);

                                        DragElement("#firstPageFourthbeakerDiv", "", "#firstPageFourthbeakerDiv", 0, 0, 60, 45)

                                        $("#theSpatulaoverFirstbeaker").droppable({
                                          tolerance: "touch",
                                          accept: "#firstPageFourthbeakerDiv", drop: function () {
                                            drop = true;
                                            helpCount=9;

                                            $("#firstPageFourthbeakerDiv").animate({ left: 33 + "%", top: 8 + "%" }, function () {
                                              $("#TheFourthBeakerWater").fadeOut();
                                              $("#TheFourthBeakerWater2").show();
                                              setInterval(waterPour, 10);
                                              $("#firstPageFourthbeakerDiv").css({ cursor: "auto " })

                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 316 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 295 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 290 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 287 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 283 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 280 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 277 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 275 + 'deg)' })
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 270 + 'deg)' })
                                              $("#waterPourtobeaker2").fadeIn();
                                              $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 269 + 'deg)' })
                                              $("#waterPourtobeaker2").hide("blind", { direction: "down" },200)

                                              
                                              setTimeout(function () {
                                                $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })
                                                $("#TheFourthBeakerWater5").hide();
                                                $("#TheWaterBeakerWatersol").fadeIn();
                                                $("#firstPageFourthbeakerDiv").animate({ left: 60 + "%", top: 45 + "%" })
                                                $("#firstPageFourthbeakerDiv").css({ transform: 'rotate(' + 0 + 'deg)' })
                                                $("#firstPageFourthbeakerDiv").draggable({ disabled: true });
                                                $("#GlassRodOfpageone").css({ cursor: "grab " })

                                                $("#GlassRodOfpageone").draggable({ disabled: false });

                                              }, 300)

                                              DragElement("#GlassRodOfpageone", "", "#GlassRodOfpageone", 0, 0, 75, 86)

                                              $("#theSpatulaoverFirstbeaker").droppable({
                                                tolerance: "touch",
                                                accept: "#GlassRodOfpageone", drop: function () {


                                                  drop = true;
                                                  $("#water_animation_Bottle3").fadeIn();

                                                  GlassrodAim(12, 23, 22)

                                                  setTimeout(() => {
                                                    setInterval(wateranimate, 100);

                                                  }, 300);
                                                  setTimeout(() => {

                                                    $("#TheFirstBeakerPottasiumpowderonbeaker").fadeOut();
                                                    $("#TheFirstBeakerpottasiumsolution").fadeIn(2400);
                                                    $("#TheFirstBeakerWatersol").fadeOut(1800);
                                                    $(".TheWaterBeakerWatersol").fadeOut();
                                                    $("#GlassRodOfpageone").css({ cursor: "auto " })

                                                  }, 1000);
                                                  setTimeout(() => {
                                                    $("#water_animation_Bottle3").fadeOut();
                                                    ThesolutionPour()
                        $("#GlassRodOfpageone").draggable({ disabled: true });

                                                  }, 2500);
                                                }
                                              })
                                            })

                                          }
                                        })
                                      }
                                      )
                                    }
                                  })
                                }
                                )
                                // en
                              }
                            }
                            )


                            // Ending

                          })

                        }
                      })
                    })

                  }
                })
              }
              )
            }
          })
        }
        )
        // en
      }
    }
    )
    // the end

    $("#FirstNext").click(function () {
      $(this).hide();
      $("#firstPageDiv").hide();
      $("#SecondPageDiv").fadeIn();
      TheBurretDrop()
      helpCount=13;
      $("#ContolsWatchglassFerric").hide()
      $("#ContolsWatchglassPottasium").hide()
      removeTrip();


      $("#theInstruction").html("1. Drag the beaker containing FeCl<sub>3</sub> solution and drop it in the first burette.")
      $(".secondInstruction").html("2. Drag the beaker containing KSCN solution and drop it in the second burette.")
      $(".ThirdInstruction").html("3. Drag the beaker containing red solution and drop it in the third burette.")
      $(".fourthInstruction").html("4. Drag the beaker containing water and drop it in the fourth burette.")
      $(".fifthInstruction").html("5. Click on the Next button.")

      $(".secondInstruction").show()
      $(".ThirdInstruction").show()
      $(".fourthInstruction").show()
      $(".fifthInstruction").show()
    

      $("#FirstInstructionBox").hide();

    
    })
    
    $("#TheSecondNext").click(function () {
    
      $(this).fadeOut();
      $("#SecondPageDiv").hide();
      $("#theThirdPagediv").fadeIn();
      TheFinalRepaetfunction()
      helpCount=18;
      removeTrip();

      $("#theInstruction").html("1. Drag the test tube A and drop it in the second burette containing red solution.")
      $(".secondInstruction").html("2. Click on the burette cap to open.")
      $(".ThirdInstruction").html("3. Click on the burette cap to close.")
      $(".fourthInstruction").html("4. Repeat the previous three steps for the other test tubes B,C,D and E.")
      $(".fifthInstruction").html("5. Drag the test tube B and drop it in the first burette containing Ferric Chloride.")
      $(".sixthInstruction").show()
      $(".seventhInstruction").show()
      $(".eigthtInstruction").show()

      $(".tenInstruction").show()
      $(".elevenInstruction").show()
      $(".thirteenInstruction").show()
      $(".twelveInstruction").show()
      $(".fourteennInstruction").show()
      
      $(".sixthInstruction").html("6. Click on the burette cap to open.")
      $(".seventhInstruction").html("7. Click on the burette cap to close.")
      $(".eigthtInstruction").html("8. Repeat the previous three steps for the other test tubes C,D and E.")
      


    
      })





  })
// **************************************************The nExt************************************************************

  $('#thefinalNext').click(function () {


// var RepeateScreen=$("#theThirdPagediv").html();
$("#theThirdPagediv").html(" ");
$("#theThirdPagediv").html(RepeateScreen);

$("#thefinalNext").hide();
$( "#thefinalNext" ).remove();
$("#theThirdBuretteThirdDropDiv").hide();
$("#theFirstBuretteThirdDropDiv").show();
$("#theThirdPagediv").hide()
$("#theThirdPagediv").fadeIn()
$("#ThirdpageBuretteSolFerric").hide();
$("#ThirdpageBuretteSolPottasium").fadeIn();

$(".FirstestubeRedsolFinal").hide();
$(".SecondestubeRedsolFinal").hide();
$("#TheFifthTestubePottasium").hide();

$("#TheSecondTestubeRedSol").hide();
$("#TheThirdTestubeRedSol").hide();
$("#TheFourthTestubeRedSol").hide();
$("#TheFifthTestubeRedSol").hide();
$("#TheFistTestubeRedsol").hide();
$("#ThirdpageBuretteSolRed").css({top: -19.6+"%",height: 62+"%"})
$("#TheThirdsolutionBurettewater").css({top: -19.6+"%",height: 62+"%"})
$("#thefirstTestubeDiv").draggable({ disabled: false });
$("#thealertP").html("Carefully add 2.5mL solution")

$(".fifthInstruction").html("5. Drag the test tube B and drop it in the first burette containing Potassium Thiocyanate.")
$("#theInferenceMsg").hide();

$(".fourteennInstruction").hide();


helpCount=18;

Dragelem = 0;
repateFunction=1;
TheFinalRepaetfunction()
repeateNext=1;
removeTrip();



// TheRepeate red solution 


// Ends
    })

})


function ThesolutionPour() {

helpCount=10;

  $("#firstPageSecondbeakerDiv").css({ cursor: "grab " })

  DragElement("#firstPageSecondbeakerDiv", "", "#firstPageSecondbeakerDiv", 0, 0, 20, 45)
  $("#theFinalmixtureWindow").droppable({
    tolerance: "touch",
    accept: "#firstPageSecondbeakerDiv", drop: function () {


      drop = true;
  $("#firstPageSecondbeakerDiv").css({ cursor: "auto " })

      $("#firstPageSecondbeakerDiv").animate({ left: 53 + "%", top: 8 + "%" }, function () {

        $("#TheThirdBeakerpottasiumsolution").show("blind", { direction: "down" })
        // setInterval(waterPour, 10);
        $("#TheFirstBeakerpottasiumsolution").animate({ height: 18 + "%", top: 70.8 + "%", left: 7.3 + "%" });

        $("#TheFirstBeakerPottasiumanim2").fadeIn();



        setInterval(PottasiumPour, 10);



        // hhdd
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 316 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 295 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 290 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 287 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 283 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 280 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 277 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 275 + 'deg)' })
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 270 + 'deg)' })
        $("#PottasiumPourtobeaker2").fadeIn();
        $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 269 + 'deg)' })
        $("#PottasiumPourtobeaker2").hide("blind", { direction: "down" },200)



        // ssss

        setTimeout(function () {
          // $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })

          $("#firstPageSecondbeakerDiv").animate({ left: 20 + "%", top: 45 + "%" })
          $("#firstPageSecondbeakerDiv").css({ transform: 'rotate(' + 0 + 'deg)' })
          $("#firstPageSecondbeakerDiv").draggable({ disabled: true });
          $("#firstPageFirstbeakerDiv").css({ cursor: "grab " })
          helpCount=11;


          // second drop 
          DragElement("#firstPageFirstbeakerDiv", "", "#firstPageFirstbeakerDiv", 0, 0, 0, 45)
          $("#theFinalmixtureWindow").droppable({
            tolerance: "touch",
            accept: "#firstPageFirstbeakerDiv", drop: function () {


              drop = true;
          $("#firstPageFirstbeakerDiv").css({ cursor: "auto " })

              $("#firstPageFirstbeakerDiv").animate({ left: 53 + "%", top: 8 + "%" }, function () {
                $("#TheThirdBeakerpottasiumsolution").fadeOut()
                $("#TheThirdBeakerRedsolution").show("blind", { direction: "down" })
                $("#TheFirstBeakerFerricpouranim2").fadeIn();

                $("#TheFirstBeakerferricsolution").animate({ height: 18 + "%", top: 70.8 + "%", left: 7.3 + "%" });


                setInterval(FerricPour, 90);

                setTimeout(() => {
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .3 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .4 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .5 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .6 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .7 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .8 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: .9 })
                  $("#TheThirdBeakerRedsolution").animate({ opacity: 1 })

                }, 200);



                // $("#TheThirdBeakerRedsolution").fadeIn("blind", { direction: "down" })
                // setInterval(waterPour, 10);
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 316 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 295 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 290 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 287 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 283 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 280 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 277 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 275 + 'deg)' })
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 270 + 'deg)' })
                $("#RedsolutionPourtobeaker").fadeIn();
                $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 269 + 'deg)' })
                $("#RedsolutionPourtobeaker").hide("blind", { direction: "down" },200)

                setTimeout(function () {
                  // $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })

                  $("#firstPageFirstbeakerDiv").animate({ left: 0 + "%", top: 45 + "%" })
                  $("#firstPageFirstbeakerDiv").css({ transform: 'rotate(' + 0 + 'deg)' })
                  $("#firstPageFirstbeakerDiv").draggable({ disabled: true });

                  $("#FirstNext").fadeIn();
          helpCount=12;


                }, 300)
              })

            }


          })

        }, 300)
      })

    }
  })


}

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

    }
  });
}

function waterPour() {

  if ($('#TheFourthBeakerWater2').css('display') == 'block') {
    $('#TheFourthBeakerWater2,#TheFourthBeakerWater3,#TheFourthBeakerWater5').hide();
    $('#TheFourthBeakerWater3').css({ "display": "block" });
    // debugger
  } else if ($('#TheFourthBeakerWater3').css('display') == 'block') {

    $('#TheFourthBeakerWater2,#TheFourthBeakerWater3,#TheFourthBeakerWater5').hide();
    $('#TheFourthBeakerWater4').css({ "display": "block" });
  }
  else if ($('#TheFourthBeakerWater4').css('display') == 'block') {
    $('#TheFourthBeakerWater2,#TheFourthBeakerWater3,#TheFourthBeakerWater4').hide();
    $('#TheFourthBeakerWater5').css({ "display": "block" });
  }
  else if ($('#TheFourthBeakerWater5').css('display') == 'block') {
    $('#TheFourthBeakerWater2,#TheFourthBeakerWater5,#TheFourthBeakerWater3,#TheFourthBeakerWater4').hide();
    $('#TheFourthBeakerWater5').css({ "display": "block" });
  }
}
function FerricPour() {

  if ($('#TheFirstBeakerFerricpouranim2').css('display') == 'block') {
    $('#TheFirstBeakerFerricpouranim2,#TheFirstBeakerFerricpouranim3,#TheFirstBeakerFerricpouranim5').hide();
    $('#TheFirstBeakerFerricpouranim3').css({ "display": "block" });
    // debugger
  } else if ($('#TheFirstBeakerFerricpouranim3').css('display') == 'block') {

    $('#TheFirstBeakerFerricpouranim2,#TheFirstBeakerFerricpouranim3,#TheFirstBeakerFerricpouranim5').hide();
    $('#TheFirstBeakerFerricpouranim4').css({ "display": "block" });
  }
  else if ($('#TheFirstBeakerFerricpouranim4').css('display') == 'block') {
    $('#TheFirstBeakerFerricpouranim2,#TheFirstBeakerFerricpouranim3,#TheFirstBeakerFerricpouranim4').hide();
    $('#TheFirstBeakerFerricpouranim5').css({ "display": "block" });
  }
  else if ($('#TheFirstBeakerFerricpouranim5').css('display') == 'block') {
    $('#TheFirstBeakerFerricpouranim2,#TheFirstBeakerFerricpouranim5,#TheFirstBeakerFerricpouranim3,#TheFirstBeakerFerricpouranim4').hide();
    $('#TheFirstBeakerFerricpouranim5').css({ "display": "none" });
  }
}

function PottasiumPour() {

  if ($('#TheFirstBeakerPottasiumanim2').css('display') == 'block') {
    $('#TheFirstBeakerPottasiumanim2,#TheFirstBeakerPottasiumanim3,#TheFirstBeakerPottasiumanim5').hide();
    $('#TheFirstBeakerPottasiumanim3').css({ "display": "block" });

  } else if ($('#TheFirstBeakerPottasiumanim3').css('display') == 'block') {

    $('#TheFirstBeakerPottasiumanim2,#TheFirstBeakerPottasiumanim3,#TheFirstBeakerPottasiumanim5').hide();
    $('#TheFirstBeakerPottasiumanim4').css({ "display": "block" });
  }
  else if ($('#TheFirstBeakerPottasiumanim4').css('display') == 'block') {
    $('#TheFirstBeakerPottasiumanim2,#TheFirstBeakerPottasiumanim3,#TheFirstBeakerPottasiumanim4').hide();
    $('#TheFirstBeakerPottasiumanim5').css({ "display": "block" });
  }
  else if ($('#TheFirstBeakerPottasiumanim5').css('display') == 'block') {
    $('#TheFirstBeakerPottasiumanim2,#TheFirstBeakerPottasiumanim5,#TheFirstBeakerPottasiumanim3,#TheFirstBeakerPottasiumanim4').hide();
    $('#TheFirstBeakerPottasiumanim5').css({ "display": "none" });
  }
}

function GlassrodAim(firstleft, secondleft, escapeleft) {
  $("#GlassRodOfpageone").css({ transform: 'rotate(' + 90 + 'deg)' })
  for (var i = 0; i <= 3; i++) {
    $("#GlassRodOfpageone").animate({ top: 53 + '%', left: firstleft + '%' });
    $("#GlassRodOfpageone").animate({ top: 53 + '%', left: secondleft + '%' });

  }


  $("#GlassRodOfpageone").animate({ top: 24 + '%', left: escapeleft + '%' });
  $("#GlassRodOfpageone").animate(
    { deg: 0 },
    {
      duration: 120,
      step: function (now) {
        $(this).animate({ top: 86 + '%', left: 76 + '%' });
        $(this).css({ transform: 'rotate(' + now + 'deg)' });

      }
    });
}


function wateranimate2() {

  if ($('#wateranim2_1').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_2').show();
  } else if ($('#wateranim2_2').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_3').show();
  } else if ($('#wateranim2_3').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_4').show();
  } else if ($('#wateranim2_4').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_5').show();
  } else if ($('#wateranim2_5').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_6').show();
  } else if ($('#wateranim2_6').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_7').show();
  } else if ($('#wateranim2_7').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_8').show();
  } else if ($('#wateranim2_8').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_9').show();
  } else if ($('#wateranim2_9').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_10').show();
  } else if ($('#wateranim2_10').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_11').show();
  } else if ($('#wateranim2_11').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_12').show();
  } else if ($('#wateranim2_12').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_13').show();
  } else if ($('#wateranim2_13').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_15').hide();
    $('#wateranim2_14').show();
  } else if ($('#wateranim2_14').css('display') == 'block') {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14').hide();
    $('#wateranim2_15').show();
  } else {
    $('#wateranim2_1,#wateranim2_2,#wateranim2_3,#wateranim2_4,#wateranim2_5,#wateranim2_6,#wateranim2_7,#wateranim2_8,#wateranim2_9,#wateranim2_10,#wateranim2_11,#wateranim2_12,#wateranim2_13,#wateranim2_14,#wateranim2_15').hide();
    $('#wateranim2_1').show();
  }
}
function wateranimate() {
  if ($('#wateranim_1').css('display') == 'block') {
    $('#wateranim_1,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_2').show();
  } else if ($('#wateranim_2').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_3').show();
  } else if ($('#wateranim_3').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_4').show();
  } else if ($('#wateranim_4').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_5').show();
  } else if ($('#wateranim_5').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_6').show();
  } else if ($('#wateranim_6').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_7').show();
  } else if ($('#wateranim_7').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_8').show();
  } else if ($('#wateranim_8').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_9').show();
  } else if ($('#wateranim_9').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_10').show();
  } else if ($('#wateranim_10').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_11').show();
  } else if ($('#wateranim_11').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_12').show();
  } else if ($('#wateranim_12').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_13').show();
  } else if ($('#wateranim_13').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_15').hide();
    $('#wateranim_14').show();
  } else if ($('#wateranim_14').css('display') == 'block') {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14').hide();
    $('#wateranim_15').show();
  } else {
    $('#wateranim_1,#wateranim_2,#wateranim_3,#wateranim_4,#wateranim_5,#wateranim_6,#wateranim_7,#wateranim_8,#wateranim_9,#wateranim_10,#wateranim_11,#wateranim_12,#wateranim_13,#wateranim_14,#wateranim_15').hide();
    $('#wateranim_1').show();
  }
}
function TheBurretDrop() {

  $("#theSeondpagefirstBeaker").css({ cursor: "grab " })

  DragElement("#theSeondpagefirstBeaker", "", "#theSeondpagefirstBeaker", 0, 0, 49, 56)


  $("#thefirstburetteDroparea").droppable({
    tolerance: "touch",
    accept: "#theSeondpagefirstBeaker", drop: function () {

      drop = true;
  $("#theSeondpagefirstBeaker").css({ cursor: "auto " })

helpCount=14;
      $("#theSeondpagefirstBeaker").animate({ left: 11 + "%", top: 3 + "%" }, function () {

        $("#TheFirstburetteFerricsol").show("blind", { direction: "down" })
        $("#TheSecondpageFirstBeakerferricsolution").fadeOut();
        $("#PourAnimimageFerric").fadeIn();

        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
        $("#PourAnimimageFerric").fadeOut();
        $("#TheSecondpageFirstBeakerferricsolution").fadeIn();

        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })
        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 275 + 'deg)' })
        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 270 + 'deg)' })
        $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 272 + 'deg)' })

        setTimeout(function () {
          // $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })

          $("#theSeondpagefirstBeaker").animate({ left: 49 + "%", top: 56 + "%" })
          $("#theSeondpagefirstBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
          $("#TheSecondpageFirstBeakerferricsolution").css({left: 4 + "%", top: 70.5 + "%",height: 20 + "%",width: 97.5 + "%"})        
          $("#theSeondpagefirstBeaker").draggable({ disabled: true });
          $("#theSeondpagesecondBeaker").css({ cursor: "grab " })

        }, 300)

        // secondDrag
        DragElement("#theSeondpagesecondBeaker", "", "#theSeondpagesecondBeaker", 0, 0, 62, 56)

        $("#theSecondburetteDroparea").droppable({
          tolerance: "touch",
          accept: "#theSeondpagesecondBeaker", drop: function () {

            drop = true;
            $("#theSeondpagesecondBeaker").css({ cursor: "auto " })

            $("#theSeondpagesecondBeaker").animate({ left: 23 + "%", top: 3 + "%" }, function () {
              helpCount=15;

              $("#TheSecondburettePottasiumSol").show("blind", { direction: "down" })
              $("#TheSecondpageFirstBeakerpottasiumsolution").fadeOut();
              $("#PourAnimimagePottasium").fadeIn();

              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
              $("#PourAnimimagePottasium").fadeOut();
              $("#TheSecondpageFirstBeakerpottasiumsolution").fadeIn();

              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })
              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 275 + 'deg)' })
              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 270 + 'deg)' })
              $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 272 + 'deg)' })

              setTimeout(function () {
                // $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })

                $("#theSeondpagesecondBeaker").animate({ left: 62 + "%", top: 56 + "%" })
                $("#theSeondpagesecondBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
                $("#TheSecondpageFirstBeakerpottasiumsolution").css({left: 3 + "%", top: 71.4 + "%",height: 19 + "%",width: 100 + "%"}) 
                $("#theSeondpagesecondBeaker").draggable({ disabled: true });
                $("#theSeondpageThirdBeaker").css({ cursor: "grab " })

              }, 300)
              // Third
              DragElement("#theSeondpageThirdBeaker", "", "#theSeondpageThirdBeaker", 0, 0, 76, 56)

              $("#theThirdBurettteDroparea").droppable({
                tolerance: "touch",
                accept: "#theSeondpageThirdBeaker", drop: function () {

                  drop = true;
                  $("#theSeondpageThirdBeaker").css({ cursor: "auto " })
                  helpCount=16;

                  $("#theSeondpageThirdBeaker").animate({ left: 35 + "%", top: 3 + "%" }, function () {

                    $("#TheThirdburetteRedSol").show("blind", { direction: "down" })
                    // $("#TheSecondpageFirstBeakerpottasiumsolution").fadeOut();
                    $("#PourAnimimageRedsolution").fadeIn();

                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
                    $("#PourAnimimageRedsolution").fadeOut();
                    // $("#TheSecondpageFirstBeakerpottasiumsolution").fadeIn();

                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })
                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 275 + 'deg)' })
                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 270 + 'deg)' })
                    $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 272 + 'deg)' })

                    setTimeout(function () {
                      $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })

                      $("#theSeondpageThirdBeaker").animate({ left: 76 + "%", top: 56 + "%" })
                      $("#theSeondpageThirdBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
                      $("#TheSecondpageThirdBeakerRedsolution").css({left: 3 + "%", top: 71.4 + "%",height: 19 + "%",width: 100 + "%"}) 
                      $("#theSeondpageThirdBeaker").draggable({ disabled: true });
                      $("#theSeondpageFourthBeaker").css({ cursor: "grab " })

                    }, 300)
                    // Fourth
                    DragElement("#theSeondpageFourthBeaker", "", "#theSeondpageFourthBeaker", 0, 0, 89, 56)

                    $("#theFourthBurettteDroparea").droppable({
                      tolerance: "touch",
                      accept: "#theSeondpageFourthBeaker", drop: function () {

                        drop = true;
                        $("#theSeondpageFourthBeaker").css({ cursor: "auto " })
                        helpCount=17;

                        $("#theSeondpageFourthBeaker").animate({ left: 47 + "%", top: 3 + "%" }, function () {

                          $("#TheFourthburettewaterSol").show("blind", { direction: "down" })
                          $("#TheSecondpageFourthBeakerWater").fadeOut();
                          $("#PourAnimimageWater").fadeIn();

                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 316 + 'deg)' })
                          $("#PourAnimimageWater").fadeOut();
                          $("#TheSecondpageFourthBeakerWater").fadeIn();

                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 295 + 'deg)' })
                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 283 + 'deg)' })
                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 275 + 'deg)' })
                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 270 + 'deg)' })
                          $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 272 + 'deg)' })

                          setTimeout(function () {
                            $("#TheWaterBeakerWatersol").show("blind", { direction: "down" })
                            $("#theSeondpageFourthBeaker").animate({ left: 89 + "%", top: 56 + "%" })
                            $("#theSeondpageFourthBeaker").css({ transform: 'rotate(' + 0 + 'deg)' })
                            $("#TheSecondpageFourthBeakerWater").css({left: 3 + "%", top: 71.4 + "%",height: 19 + "%",width: 100 + "%"}) 
                            $("#theSeondpageFourthBeaker").draggable({ disabled: true });
                            $("#TheSecondNext").fadeIn();
                          }, 300)
                          // Fourth



                        })


                      }
                    })



                  })


                }
              })


            })


          }
        })


      })


    }
  })

}

function TheFinalRepaetfunction() {

  console.log(Dragelem)
  setTimeout(() => {
    if (Dragelem == 0) {
      $("#thefirstTestubeDiv").draggable({ disabled: false });
      $("#theFirstBuretteFirstDropDiv").show();
      console.log("T1")
      $("#thefirstTestubeDiv").css({ cursor: "grab " })

      DragElement("#thefirstTestubeDiv", "", "#thefirstTestubeDiv", 0, 343, 65, 53)

      if(Dragelem==0 && repateFunction==1){
       
        TheBuretteredFill("#thefirstTestubeDiv", -15.6, 58, "#TheSecondBuretteButtonOpen", 65, 53, "#TheFistTestubeRedsol")
      }else{
        TheBuretteredFill("#thefirstTestubeDiv", -15.6, 58, "#TheSecondBuretteButtonOpen", 65, 53, "#TheFistTestubeRedsol")
      }
    }
    else if (Dragelem == 1) {
      console.log("T2")
      $("#theSecondTestubeDiv").draggable({ disabled: false });

      $("#theSecondTestubeDiv").css({ cursor: "grab " })

      DragElement("#theSecondTestubeDiv", "", "#theSecondTestubeDiv", 0, 343, 71, 53)

      if(Dragelem==1 && repateFunction==1){
       
      TheBuretteredFill("#theSecondTestubeDiv", -13.6, 56, "#TheSecondBuretteButtonOpen", 71, 53, "#TheSecondTestubeRedsol")

      }else{
      TheBuretteredFill("#theSecondTestubeDiv", -13.6, 56, "#TheSecondBuretteButtonOpen", 71, 53, "#TheSecondTestubeRedsol")

      }

    }
    else if (Dragelem == 2) {
      console.log("T3")
      $("#theThirdTestubeDiv").css({ cursor: "grab " })

      $("#theThirdTestubeDiv").draggable({ disabled: false });

      DragElement("#theThirdTestubeDiv", "", "#theThirdTestubeDiv", 0, 343, 77, 53)

      if(Dragelem==2 && repateFunction==1){
      TheBuretteredFill("#theThirdTestubeDiv", -10.6, 54, "#TheSecondBuretteButtonOpen", 77, 53, "#TheThirdTestubeRedsol")
        }else{
      TheBuretteredFill("#theThirdTestubeDiv", -10.6, 54, "#TheSecondBuretteButtonOpen", 77, 53, "#TheThirdTestubeRedsol")
        }

    }
    else if (Dragelem == 3) {
      console.log("T4")
      $("#theFourthTestubeDiv").css({ cursor: "grab " })

      $("#theFourthTestubeDiv").draggable({ disabled: false });

      DragElement("#theFourthTestubeDiv", "", "#theFourthTestubeDiv", 0, 343, 83.4, 53)

      TheBuretteredFill("#theFourthTestubeDiv", -5.6, 49, "#TheSecondBuretteButtonOpen", 83.4, 53, "#TheFourthTestubeRedsol")
      if(Dragelem==3 && repateFunction==1){
      TheBuretteredFill("#theFourthTestubeDiv", -5.6, 49, "#TheSecondBuretteButtonOpen", 83.4, 53, "#TheFourthTestubeRedsol")
       
  
        }else{
          TheBuretteredFill("#theFourthTestubeDiv", -5.6, 49, "#TheSecondBuretteButtonOpen", 83.4, 53, "#TheFourthTestubeRedsol")
  
        }
    }
    else if (Dragelem == 4) {
      console.log("T5")
      $("#theFifthTestubeDiv").css({ cursor: "grab " })

      $("#theFifthTestubeDiv").draggable({ disabled: false });

      DragElement("#theFifthTestubeDiv", "", "#theFifthTestubeDiv", 0, 343, 89.5, 53)

      if(Dragelem==3 && repateFunction==1){
      TheBuretteredFill("#theFifthTestubeDiv", -0.4, 43, "#TheSecondBuretteButtonOpen", 89.5, 53, "#TheFifthTestubeRedsol")
         
    
          }else{
            TheBuretteredFill("#theFifthTestubeDiv", -0.4, 43, "#TheSecondBuretteButtonOpen", 89.5, 53, "#TheFifthTestubeRedsol")
    
          }
    }
    // TheSecond DragabbleTestube
    else if (Dragelem == 5) {
      
      $("#theSecondTestubeDiv").css({ cursor: "grab " })

      $("#theFirstBuretteThirdDropDiv").hide();
      $("#theFirstBuretteFirstDropDiv").show();
      $("#theSecondTestubeDiv").draggable({ disabled: false });

      DragElement("#theSecondTestubeDiv", "", "#theSecondTestubeDiv", 0, 343, 71, 53)

      setTimeout(() => {
      $("#thealertP").html("Carefully add 1mL solution")
        
      }, 300);

if(Dragelem==5 && repateFunction==1){
      TheBuretteFerricFill("#theSecondTestubeDiv", -15.6, 58, 71, 53, "#TheSecondTestubePottasium","#ThirdpageBuretteSolPottasium","#ThirdpageBuretteSolPottasiumOPEN")
    }
else{


      TheBuretteFerricFill("#theSecondTestubeDiv", -15.6, 58, 71, 53, "#TheSecondTestubeFerricsol","#ThirdpageBuretteSolFerric","#ThirdpageBuretteSolFerricOPEN")
    }

    
    }
    else if (Dragelem == 6 ) {
      $("#theThirdTestubeDiv").css({ cursor: "grab " })
      
      $("#theThirdTestubeDiv").draggable({ disabled: false });

      DragElement("#theThirdTestubeDiv", "", "#theThirdTestubeDiv", 0, 343, 77, 53)
      setTimeout(() => {
      $("#thealertP").html("Carefully add 2mL solution")
        
      }, 300);
    
      if(Dragelem==6 && repateFunction==1){
        TheBuretteFerricFill("#theThirdTestubeDiv", -10.6, 53, 77, 53, "#TheThirdTestubePottasium","#ThirdpageBuretteSolPottasium","#ThirdpageBuretteSolPottasiumOPEN")
      }
  else{
    TheBuretteFerricFill("#theThirdTestubeDiv", -10.6, 53, 77, 53, "#TheThirdTestubeFerricsol","#ThirdpageBuretteSolFerric","#ThirdpageBuretteSolFerricOPEN")

      }
    
    
    
    }
    else if (Dragelem == 7 ) {
      $("#theFourthTestubeDiv").css({ cursor: "grab " })
      
      $("#theFourthTestubeDiv").draggable({ disabled: false });
setTimeout(() => {
  $("#thealertP").html("Carefully add 3mL solution")
  
}, 300);
      DragElement("#theFourthTestubeDiv", "", "#theFourthTestubeDiv", 0, 343, 83.4, 53)
    

      if(Dragelem==7 && repateFunction==1){
        TheBuretteFerricFill("#theFourthTestubeDiv",-8.6, 51, 83.4, 53, "#TheFourthTestubePottasium","#ThirdpageBuretteSolPottasium","#ThirdpageBuretteSolPottasiumOPEN")
      }
  else{
    TheBuretteFerricFill("#theFourthTestubeDiv", -8.6, 51, 83.4, 53, "#TheFourthTestubeFerricsol","#ThirdpageBuretteSolFerric","#ThirdpageBuretteSolFerricOPEN")

      }
    
    
    }
    else if (Dragelem == 8 ) {
      $("#theFifthTestubeDiv").css({ cursor: "grab " })
      
      $("#theFifthTestubeDiv").draggable({ disabled: false });
      setTimeout(() => {
      $("#thealertP").html("Carefully add 4mL solution")
        
      }, 300);

      DragElement("#theFifthTestubeDiv", "", "#theFifthTestubeDiv", 0, 343, 89.5, 53)
    
      if(Dragelem==8 && repateFunction==1){
        TheBuretteFerricFill("#theFifthTestubeDiv", -3.6, 46, 89.5, 53, "#TheFifthTestubePottasium","#ThirdpageBuretteSolPottasium","#ThirdpageBuretteSolPottasiumOPEN")
      }
  else{
    TheBuretteFerricFill("#theFifthTestubeDiv", -3.6, 46, 89.5, 53, "#TheFifthTestubePottasium","#ThirdpageBuretteSolFerric","#ThirdpageBuretteSolFerricOPEN")

      }
    
    
    }
    // ThefinalDragwater
    else if (Dragelem == 9) {

      $("#thefirstTestubeDiv").css({ cursor: "grab " })

      $("#theFirstBuretteFirstDropDiv").hide();
      $("#theThirdBuretteThirdDropDiv").show();
      $("#thefirstTestubeDiv").draggable({ disabled: false });
     
setTimeout(() => {
  $("#thealertP").html("Carefully add 17.5mL water")
  
}, 300);
      DragElement("#thefirstTestubeDiv", "", "#thefirstTestubeDiv", 0, 343, 65, 53)

      if(Dragelem==9 && repateFunction==0){
        TheBuretteWaterFill("#thefirstTestubeDiv", -15.6, 58, 65, 53, ".FirstestubeRedsolFinal","#RedSolutionTestube","")


      }
      else{ 
        
        TheBuretteWaterFill("#thefirstTestubeDiv", -15.6, 58, 65, 53, ".FirstestubeRedsolFinal","#RedSolutionTestube","")

      }
    
    }
    else if (Dragelem == 10) {
      $("#theSecondTestubeDiv").css({ cursor: "grab " })

      $("#theSecondTestubeDiv").draggable({ disabled: false });
      setTimeout(() => {
        $("#thealertP").html("Carefully add 16.5mL water")
        
      }, 300);
      DragElement("#theSecondTestubeDiv", "", "#theSecondTestubeDiv", 0, 343, 71, 53)
      if(Dragelem==10 && repateFunction==1){
        TheBuretteWaterFill("#theSecondTestubeDiv", -13.6, 56, 71, 53, ".SecondestubeRedsolFinal","#TheSecondTestubePottasium","")
      }
      else{
        TheBuretteWaterFill("#theSecondTestubeDiv", -13.6, 56, 71, 53, ".SecondestubeRedsolFinal","#TheSecondTestubeFerricsol","#TheSecondTestubeRedsol")
      }
    }
    else if (Dragelem == 11) {
      $("#theThirdTestubeDiv").css({ cursor: "grab " })

      $("#theThirdTestubeDiv").draggable({ disabled: false });
      setTimeout(() => {
        $("#thealertP").html("Carefully add 15.5mL water")
        
      }, 300);
      DragElement("#theThirdTestubeDiv", "", "#theThirdTestubeDiv", 0, 343, 77, 53)

      if(Dragelem==11 && repateFunction==1){
        TheBuretteWaterFill("#theThirdTestubeDiv", -10.6, 54, 77, 53, ".ThirdestubeRedsolFinal","","#TheThirdTestubePottasium");

      }
      else{
        TheBuretteWaterFill("#theThirdTestubeDiv", -10.6, 54, 77, 53, ".ThirdestubeRedsolFinal","#TheThirdTestubeFerricsol","#TheThirdTestubeRedsol");

      }

    }
    else if (Dragelem == 12) {
      $("#theFourthTestubeDiv").css({ cursor: "grab " })
      
      $("#theFourthTestubeDiv").draggable({ disabled: false });
      setTimeout(() => {
        $("#thealertP").html("Carefully add 14.5mL water")
        
      }, 300);
      DragElement("#theFourthTestubeDiv", "", "#theFourthTestubeDiv", 0, 343, 83.4, 53)
      if(Dragelem==12 && repateFunction==1){
        TheBuretteWaterFill("#theFourthTestubeDiv", -5.6, 49, 83.4, 53, ".FourthestubeRedsolFinal","#TheThirdTestubePottasium","");

      }
      else{
        TheBuretteWaterFill("#theFourthTestubeDiv", -5.6, 49, 83.4, 53, ".FourthestubeRedsolFinal","#TheFourthTestubeFerricsol","#TheFourthTestubeRedsol");

      }
   
   
    }
    else if (Dragelem == 13) {
      $("#theFifthTestubeDiv").css({ cursor: "grab " })
      
      $("#theFifthTestubeDiv").draggable({ disabled: false });
      setTimeout(() => {
        $("#thealertP").html("Carefully add 13.5mL water")
        
      }, 300);

      DragElement("#theFifthTestubeDiv", "", "#theFifthTestubeDiv", 0, 343, 89.5, 53)

      if(Dragelem==13 && repateFunction==1){
        TheBuretteWaterFill("#theFifthTestubeDiv", -0.4, 43, 89.5, 53, ".FifthestubeRedsolFinal","#TheFifthTestubePottasium","")

      }
      else{
        TheBuretteWaterFill("#theFifthTestubeDiv", -0.4, 43, 89.5, 53, ".FifthestubeRedsolFinal","#TheFifthTestubeRedsol","#TheFifthTestubeFerricsol")

      }
    
    }
    // end
  }, 200);
}


function TheBuretteredFill(theDragabbleId, RedSolutionAnimTop, RedSolutionAnimheight, TesttubeSolutionName, FinalTestubePosleft, FinalTestubePosTop, TesttubeSolutionTOshow) {
  $("#theFirstBuretteThirdDropDiv").droppable({
    tolerance: "touch",
    accept: theDragabbleId, drop: function (event, ui) {
      drop = true;
      
      $(theDragabbleId).css({cursor:"auto"})
      helpCount=19;

      var draggableId = ui.draggable.attr("id");
      $(theDragabbleId).animate({ left: 31 + "%", top: 56 + "%" }, function () {
        $(theDragabbleId).animate({ left: 30.7 + "%", top: 54 + "%" })
        $(theDragabbleId).css({ transform: 'rotate(' + 0 + 'deg)' })
        $("#TheSecondBuretteButton").show();
        $("#TheSecondBuretteButton").click(function () {
      helpCount=20;

          $(this).hide()
          removeTrip();

          $("#theCommonWarningfunction").fadeIn();
          $("#ThirdpageBuretteSolRed").css({ top: RedSolutionAnimTop + "%", height: RedSolutionAnimheight + "%" })
          // $("#ThirdpageBuretteSolRedOPEN").css({ top: RedsoluOpentop + "%", height: RedsoluOpenHeight + "%" })
          $(TesttubeSolutionName).show();
          $("#ThirdpageBuretteSolRedOPEN").show("blind", { direction: "up" })
          $(TesttubeSolutionTOshow).show("blind", { direction: "down" })
          $("#TheSecondBuretteButtonOpen").click(function () {
      helpCount=21;
            $(this).hide();
      removeTrip();

          $("#theCommonWarningfunction").fadeOut();

            $("#ThirdpageBuretteSolRedOPEN").hide("blind", { direction: "up" })
            setTimeout(() => {
              $(theDragabbleId).animate({ left: FinalTestubePosleft + "%", top: FinalTestubePosTop + "%" })
            }, 400);
            $(theDragabbleId).draggable({ disabled: true });

            if (draggableId == "thefirstTestubeDiv") {

              Dragelem = 1;
            }
            else if (draggableId == "theSecondTestubeDiv") {
              Dragelem = 2;
            }
            else if (draggableId == "theThirdTestubeDiv") {
              Dragelem = 3;
            }
            else if (draggableId == "theFourthTestubeDiv") {
              Dragelem = 4;
            }
            else if (draggableId == "theFifthTestubeDiv") {
              Dragelem = 5;
              helpCount=22;

              
              if (repeateNext==1 && helpCount == 22) {

                helpCount=36;

            
               
              }


              
            }
            TheFinalRepaetfunction()
          })

        })
      })
    }
  })

}
// SecondShowFunc
function TheBuretteFerricFill(theDragabbleId, FerricSolutionAnimTop, FerricSolutionAnimheight, FinalTestubePosleft, FinalTestubePosTop, TesttubeSolutionTOshow,BuretteSolution,OpensolutionBurette) {
  $("#theFirstBuretteFirstDropDiv").droppable({
    tolerance: "touch",
    accept: theDragabbleId, drop: function (event, ui) {
      drop = true;
      $(theDragabbleId).css({cursor:"auto"})
helpCount=23;
      var draggableId = ui.draggable.attr("id");
      $(theDragabbleId).animate({ left: 11 + "%", top: 56 + "%" }, function () {
        $(theDragabbleId).animate({ left: 10.7 + "%", top: 54 + "%" })
        $(theDragabbleId).css({ transform: 'rotate(' + 0 + 'deg)' })
        $("#TheFirstBuretteButton").show();
        $("#TheFirstBuretteButton").click(function () {
          $(this).hide()
          $("#theCommonWarningfunction").fadeIn();
helpCount=24;
removeTrip();

          $("#TheFirstBuretteButtonOpen").show();
          $(BuretteSolution).css({ top: FerricSolutionAnimTop + "%", height: FerricSolutionAnimheight + "%" })
          $(TesttubeSolutionTOshow).show("blind", { direction: "down" })
          $(OpensolutionBurette).show("blind", { direction: "up" })
          $("#TheFirstBuretteButtonOpen").click(function () {
            $(this).hide();
          $("#theCommonWarningfunction").fadeOut();
          removeTrip();

helpCount=25;

            $(OpensolutionBurette).hide("blind", { direction: "up" })
            setTimeout(() => {
              $(theDragabbleId).animate({ left: FinalTestubePosleft + "%", top: FinalTestubePosTop + "%" })
            }, 400);
            $(theDragabbleId).draggable({ disabled: true });
            if (draggableId == "theSecondTestubeDiv") {
              Dragelem = 6;
            }
            else if (draggableId == "theThirdTestubeDiv") {
              Dragelem = 7;
            }
            else if (draggableId == "theFourthTestubeDiv") {
              Dragelem = 8;
            }
            else if (draggableId == "theFifthTestubeDiv") {
              Dragelem = 9;
              helpCount=26;
            }
            TheFinalRepaetfunction()
          })
        })
      })
    }
  })


}

function removeTrip() {
  if (tripFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripFlag == false;
  }

}

function TheBuretteWaterFill(theDragabbleId, FerricSolutionAnimTop, FerricSolutionAnimheight, FinalTestubePosleft, FinalTestubePosTop, TesttubeSolutionTOshow,thetestubesolutiononetohide,thetestubesolutiononetohide2) {
 
  $("#theThirdBuretteThirdDropDiv").droppable({
    tolerance: "touch",
    accept: theDragabbleId, drop: function (event, ui) {
      drop = true;
      helpCount=27;
      $(theDragabbleId).css({cursor:"auto"})
      
      var draggableId = ui.draggable.attr("id");
      $(theDragabbleId).animate({ left: 52 + "%", top: 56 + "%" }, function () {
        $(theDragabbleId).animate({ left: 50.7 + "%", top: 54 + "%" })
        $(theDragabbleId).css({ transform: 'rotate(' + 0 + 'deg)' })



        $("#TheThirdBuretteButton").show();
        $("#TheThirdBuretteButton").click(function () {
          $(this).hide()
          removeTrip();

          $("#theCommonWarningfunction").fadeIn();

      helpCount=28;

          $("#TheThirdBuretteButtonOpen").show();
          $("#TheThirdsolutionBurettewater").css({ top: FerricSolutionAnimTop + "%", height: FerricSolutionAnimheight + "%" })
          $(thetestubesolutiononetohide).fadeOut(1200);
          $(thetestubesolutiononetohide2).fadeOut(2200);
          $(TesttubeSolutionTOshow).fadeIn(1000)
          $(TesttubeSolutionTOshow).show("blind", { direction: "down" },2000)
         
          
          $("#ThirdpageBuretteSolwaterOPEN").show("blind", { direction: "up" })
          $("#TheThirdBuretteButtonOpen").click(function () {

            $(this).hide();
            removeTrip();

            helpCount=29;
          $("#theCommonWarningfunction").fadeOut();

            $("#ThirdpageBuretteSolwaterOPEN").hide("blind", { direction: "up" })
            setTimeout(() => {
              $(theDragabbleId).animate({ left: FinalTestubePosleft + "%", top: FinalTestubePosTop + "%" })

              if(theDragabbleId=="#theFifthTestubeDiv"){
                  $('#thefinalNext').fadeIn();
              }
            }, 400);
            $(theDragabbleId).draggable({ disabled: true });


            if (draggableId == "thefirstTestubeDiv") {
              Dragelem = 10;
            }
            else if (draggableId == "theSecondTestubeDiv") {
              Dragelem = 11;
            }
            else if (draggableId == "theThirdTestubeDiv") {
              Dragelem = 12;
            }
            else if (draggableId == "theFourthTestubeDiv") {
              Dragelem = 13;
            }
            else if (draggableId == "theFifthTestubeDiv") {
              Dragelem = 14;

              helpCount=39;



              inference(CommonInferenc, "#TheInference_img", 5000)


              if (repeateNext==1 && helpCount == 30) {

                helpCount=31;

                setTimeout(() => {
                  removeTrip();
                  $("#theInferenceMsg").fadeOut();
                  $("#FinalinferenceElements").fadeIn();
                }, 4000);
               
              }
            }
            TheFinalRepaetfunction()
          })
        })
      })
    }
  })

  
}


function inference(inferenceMessageArray, imageId, thedelay) {

  
  // alert(thePosition)
  tripFlag = true;
  $("#theInferenceMsg").fadeIn();
  $(imageId).fadeIn();
  // var trip = new Trip([

  //   {
  //     sel: $("#theInferenceMsg"),
  //     position: 'e',
  //     content: inferenceMessageArray,
  //     expose: false,
  //     delay: thedelay

  //   },

  // ], {

  //   backToTopWhenEnded: true,
  //   delay: 2000
  // });
  // trip.start();
  // window.trip = trip;
  $(imageId).click(function () {
    var trip = new Trip([
      {
        sel: $("#theInferenceMsg"),
        position: 'e',
        content: inferenceMessageArray,
        expose: false,
        delay: thedelay

      },

    ], {

      backToTopWhenEnded: true,
      delay: 2000
    });
    trip.start();
    window.trip = trip;


    if (repeateNext==0 && helpCount == 39) {

      helpCount=30;
  
     
    }

    if (repeateNext==1 && helpCount == 39) {

      helpCount=31;

      setTimeout(() => {
        removeTrip();
        $("#theInferenceMsg").fadeOut();
        $("#FinalinferenceElements").fadeIn();
      }, 4000);
     
    }
  })
}

