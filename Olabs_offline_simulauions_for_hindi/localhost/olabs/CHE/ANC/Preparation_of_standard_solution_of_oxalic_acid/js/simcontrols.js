

var angle = 0, turningRight = false;
var temp = false;
var temp2 = false;
var temp3 = false;
var temp4 = false;
var temp5 = false;
var temp6 = false;
var temp7 = false;
var temp8 = false;
var temp9 = false;
var temp10 = false;
var temp11 = false;
var temp12 = false;
var temp13 = false;
helpcount = 0
help = 1
var imageArray1=[
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/3.png",
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/6.png",
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/9.png",
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/12.png",
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/15.png",
	"../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/18.png",
  "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/21.png",
  "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/24.png",
  "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask1/25.png"
	];
  var imageArray2=[
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/3.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/6.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/9.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/12.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/15.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/18.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/21.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/24.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/27.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/30.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/33.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/36.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/39.png",
    "../CHE/ANC/Preparation_of_standard_solution_of_oxalic_acid/images/flask2/40.png",
    ];
window.onload = function(){
  ImageInitLoad(imageArray1,"firstflaskshake","flaskshake","shake");
  ImageInitLoad(imageArray2,"secondflaskrotate","flaskrotate","rotate");

}

function ImageInitLoad(ANIMATIONImageArray,ANIMATIONDivName,ANIMATIONImageIdName,ANIMATIONImageClassName)
{
    for(var ANIMATIONForloop=0;ANIMATIONForloop<ANIMATIONImageArray.length-1;ANIMATIONForloop++)
    {
        var $tempx2=$("<img src='"+ANIMATIONImageArray[ANIMATIONForloop]+"'/>").attr({id:ANIMATIONImageIdName+ANIMATIONForloop,class:ANIMATIONImageClassName,display:"none"});
        $("#"+ANIMATIONDivName).append($tempx2);
    }
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

$(document).ready(function () {
  

 




//  $("#nxtBtn").show()
  
  $("#wholeWatchglass").css({ cursor: "pointer" })
  $("#tweezerOpen").css({ cursor: "default" })
  gt = new Gettext({ 'domain': 'messages' });
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));

  helpMsg = [gt.gettext('Drag the watch glass to the<br>top of the weighing scale'), gt.gettext('Click on the oxalic acid bottle cap to open'), gt.gettext('Drag the spatula towards<br>the top of the oxalic acid bottle'), gt.gettext('Drag the spatula towards<br>the top of the watch glass')];
  helpMsg2 = [gt.gettext('Drag the funnel to the top<br>of the volumetric flask'), gt.gettext('Drag the watch glass containing oxalic<br>acid to the top of the funnel'), gt.gettext('Drag the wash bottle near the<br>funnel to wash and pour water<br>into the volumetric flask'), 
  gt.gettext('Drag the funnel to the stand'), gt.gettext('Drag the volumetric flask cap<br>to the top of the flask to close it'), gt.gettext('Drag the volumtric flask to shake<br>and dissolve the oxalic acid'), gt.gettext('Click on the cap of volumetric flask to open'),
  gt.gettext('Drag the funnel to the<br>top of the volumetric flask'), gt.gettext('Drag the wash bottle near the<br>funnel to pour water into<br>the volumetric flask'),gt.gettext('Drag the funnel to the stand'), gt.gettext('Drag the dropper to the top of volumetric flask to add water<br>upto the marking on the flask'),gt.gettext('Drag the volumetric flask cap<br>to the top of the flask to close it'), gt.gettext('Drag the volumetric flask to<br>shake in an up and down motion<br>to make a uniform oxalic acid solution')];
  resetMsg = gt.gettext('Click on the reset button to restart the simulation')

  nextMsg = gt.gettext('Click on the next button');
  inferenceMsg = gt.gettext('Click on the inference button');
  inferenceText = gt.gettext("The solution inside the volumetric flask is<br>250mL standard solution of oxalic acid.");

  $("#reset").val(gt.gettext("Reset"))


  //$("#nxtBtn").hide(); 



  // $("#magnetOnTable").click(function () {



  // $("#magnetOnTable").hide(); 
  // $("#magnet").show();
  // });


  $("#wholeWatchglass").draggable({ containment: "#bg" },

  {
    start: function () {
      $("#watchglassShadow").hide()
      // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
      // $("#magnet").css('z-index', 3)
      //$("#magnetOnTable").hide();
    }
  },

  {
    drag: function () {
      removeTrip();

    }
  },

  {
    revert: function () {

      if (!temp) {
        // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
        return true
      }
    }


  });
$("#dropit").droppable({
  accept: "#wholeWatchglass",
  drop: function () {
    $("#oxlCap").css({ cursor: "pointer" })
    $("#wholeWatchglass").css({ cursor: "default" })
    $("#watchglassShadow").show()

    temp = true;
    helpcount = 1
    $("#wholeWatchglass").css({ left: 410 + 'px', top: 168 + 'px' })
    $("#value1").show()

    $("#oxlCap").click(function () {
      removeTrip();
      helpcount = 2
      $('#oxlCap').unbind('click')

      $("#wholeSpatula").css({ cursor: "pointer" })
      $("#oxlCap").css({ cursor: "default" })
      $("#oxlCap").animate({ top: -33 + 'px' })
      $("#oxlCap").animate({ left: 80 + 'px' })
      $("#oxlCap").animate({ top: 44 + 'px' })

      $("#wholeSpatula").draggable({ containment: "#bg" },

        {
          start: function () {
      $("#spatulaShadow").hide()

            // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
            // $("#magnet").css('z-index', 3)
            //$("#magnetOnTable").hide();
          }
        },

        {
          drag: function () {
            removeTrip();

          }
        },

        {
          revert: function () {

            if (!temp2) {
              // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
              return true
            }
          }


        });
        $("#dropit2").droppable({
          accept: "#wholeSpatula",
          drop: function () {
            helpcount = 3
            $("#dropit2").hide()
            temp2= true;

    $("#wholeSpatula").css({ left: 30 + 'px', top: 189 + 'px' })

            $("#wholeSpatula").animate(

              { deg: -60 },
              {
                duration: 1000, step: function (now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' });

                }
              },
    


            );
    $("#wholeSpatula").animate({ left: 20 + 'px', top: 220 + 'px' })
    $("#wholeSpatula").animate(
     { deg: -25 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
          $("#spatulaPowder").show()

        }
      }
    );
    $("#wholeSpatula").animate({ left: 20 + 'px', top: 189 + 'px' },function(){
      temp2 = false
    })
    $("#dropit").droppable({
      accept: "#wholeSpatula",
      drop: function () {
        helpcount = 4
    $('#wholeSpatula').draggable('disable');

        $("#nxtBtn").css({ cursor: "pointer" })
        $("#wholeSpatula").css({ cursor: "default" })
        temp2 = true;
        $("#oxlCap").animate({ top: -18 + 'px' })
        $("#oxlCap").animate({ left: 9 + 'px' })
    $("#wholeSpatula").css({ left: 444 + 'px', top: 174 + 'px' })
    
    $("#wholeSpatula").animate(

      { deg: -60 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });

        }
      },
      $("#pour1").show("blind", { direction: "up" },function(){$("#pour1").hide("blind",{direction: "down"}),$("#spatulaPowder").hide("fade",500),$("#oxalPowder").show("fade",500),$("#value1").hide("fade"),$("#value2").show("fade")})




    );
    $("#wholeSpatula").animate(

      { deg: 0 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });

        }
      }
    );
    $("#wholeSpatula").animate({ left: 234 + 'px'})
    $("#wholeSpatula").animate({ top: 282 + 'px'},function(){
      $("#nxtBtn").show("fade")

      $("#spatulaShadow").show()

    })



      }
    })
    




          }
        })




    })



  }


})

  $("#nxtBtn").click(function () {
    help = 2
    helpcount = 6
    removeTrip()
    $("#funnel").css({ cursor: "pointer" })
    $("#nxtBtn").css({ cursor: "default" })
    $("#mainDiv,.firstpg_txt,#nxtBtn").hide()
    $("#mainDiv2,.secondpg_txt").show()


})


$("#funnel").draggable({ containment: "#bg" },

{
  start: function () {
    //$("#watchglassShadow").hide()
    // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
    // $("#magnet").css('z-index', 3)
    //$("#magnetOnTable").hide();
  }
},

{
  drag: function () {
    removeTrip();

  }
},

{
  revert: function () {

    if (!temp3) {
      // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
      return true
    }
  }


});

$("#dropit3").droppable({
  accept: "#funnel",
  drop: function () {
    helpcount = 7
    $("#wholeWatchglass2").css({ cursor: "pointer" })
    $("#funnel").css({ cursor: "default" })
    $("#dropit3").hide()

    //$("#oxlCap").css({ cursor: "pointer" })
    //$("#wholeWatchglass").css({ cursor: "default" })
    $("#funnel").css({ left: 34 + 'px', top: 97 + 'px' })
    $('#funnel').draggable('disable');

    temp3 = true;


$("#wholeWatchglass2").draggable({ containment: "#bg" },

{
  start: function () {
    $("#watchglassShadow2").hide()
    // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
    // $("#magnet").css('z-index', 3)
    //$("#magnetOnTable").hide();
  }
},

{
  drag: function () {
    removeTrip();

  }
},

{
  revert: function () {

    if (!temp4) {
      // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
      return true
    }
  }


});

$("#dropit4").droppable({
  accept: "#wholeWatchglass2",
  drop: function () {
    helpcount = 8
    $("#wholewashbottle").css({ cursor: "pointer" })
    $("#wholeWatchglass2").css({ cursor: "default" })
    temp4 = true;
    $('#wholeWatchglass2').draggable('disable');

    $("#dropit4").hide()
    $("#wholeWatchglass2").css({ left: 25 + 'px', top: 18 + 'px' })
    $("#wholeWatchglass2").animate(

      { deg: -60 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
          

        }
      },
      $("#oxalPowder2").delay(600).hide("fade",500),
      $("#pour2").delay(600).show("blind", { direction: "up" },function(){$("#pour2").hide("blind",{direction: "down"}),$("#oxalPowder3").show("fade",500)})
    );
    $("#wholeWatchglass2").animate(

      { deg: 0 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });

        }
      }
    );
    $("#wholeWatchglass2").animate({ left: 115 + 'px', top: 234 + 'px' },function(){
    $("#watchglassShadow2").show()

    })

  $("#wholewashbottle").draggable({ containment: "#bg" },

{
  start: function () {
    //$("#watchglassShadow2").hide()
    // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
    // $("#magnet").css('z-index', 3)
    //$("#magnetOnTable").hide();
  }
},

{
  drag: function () {
    removeTrip();

  }
},
{
  revert: function () {

    if (!temp5) {
      // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
      return true
    }
  }
});

$("#dropit5").droppable({
  accept: "#wholewashbottle",
  drop: function () {
    helpcount = 9
    $("#funnel").css({ cursor: "pointer" })
    $("#wholewashbottle").css({ cursor: "default" })
    temp5 = true;
    $('#wholewashbottle').draggable('disable');
    $("#wholewashbottle").css({ left: 85 + 'px', top: 5 + 'px' })
    $("#wholewashbottle").animate(

      { deg: -75 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
          
          

        }
      }
      //$("#oxalPowder2").delay(600).hide("fade",500),
      //$("#pour2").delay(600).show("blind", { direction: "up" },function(){$("#pour2").hide("blind",{direction: "down"}),$("#oxalPowder3").show("fade",500)})
    );
    $("#pourline").delay(1200).show("fade",500),
    $("#wholewashbottle").animate({ left: 105 + 'px', top: 5 + 'px' },{duration: 800}),
    $("#wholewashbottle").animate({ left: 82 + 'px', top: 5 + 'px' },{duration: 800}),
    $("#pourline").delay(500).hide("fade",500),
    $("#waterfall").delay(1200).show("blind",{direction: "up"},function(){$("#volFlaskWaterlow").show("blind",{direction: "down"})},500)
    $("#waterfall").hide("blind",{direction: "down"},500)

    $("#wholewashbottle").animate(

      { deg: 0 },
      {
        duration: 1200, step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });

        }
      }
    );
    $("#wholewashbottle").animate({ left: 215 + 'px', top: 164 + 'px' },function(){
      $('#funnel').draggable('enable');
      $("#dropit6").show();

    })
    
    $("#dropit5").hide();

    $("#funnel").draggable({ containment: "#bg" },

{
  start: function () {
    //$("#watchglassShadow").hide()
    // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
    // $("#magnet").css('z-index', 3)
    //$("#magnetOnTable").hide();
  }
},

{
  drag: function () {
    removeTrip();

  }
},

{
  revert: function () {

    if (!temp6) {
      // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
      return true
    }
  }


});
$("#dropit6").droppable({
  accept: "#funnel",
  drop: function () {
    helpcount = 10
    $("#volFlaskCaponTable").css({ cursor: "pointer" })
    $("#funnel").css({ cursor: "default" })
    temp6 = true;
    $("#funnel").css({ left: 346 + 'px', top: 204 + 'px' })
    $("#dropit7").show();



    $("#volFlaskCaponTable").draggable({ containment: "#bg" },

    {
      start: function () {
        //$("#watchglassShadow").hide()
        // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
        // $("#magnet").css('z-index', 3)
        //$("#magnetOnTable").hide();
      }
    },
    
    {
      drag: function () {
        removeTrip();
    
      }
    },
    
    {
      revert: function () {
    
        if (!temp7) {
          // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
          return true
        }
      }
    
    
    });
    $("#dropit7").droppable({
      accept: "#volFlaskCaponTable",
      drop: function () {
        helpcount = 11
        $("#wholeVolFlask").css({ cursor: "pointer" })
        $("#volFlaskCaponTable").css({ cursor: "default" })
    $('#volFlaskCaponTable').draggable('disable');
    $("#volFlaskCaponTable").css({ left: 45 + 'px', top: 110 + 'px' })
    $("#volFlaskCap").show();
    $("#volFlaskCaponTable").hide();
    $("#dropit7").hide();
    $("#dropit11").show();

        temp7 = true;

        $("#wholeVolFlask").draggable({ containment: "#bg" },

        {
          start: function () {
            //$("#watchglassShadow").hide()
            // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
            // $("#magnet").css('z-index', 3)
            //$("#magnetOnTable").hide();
          }
        },
        
        {
          drag: function () {
            removeTrip();
        
          }
        },
        
        {
          revert: function () {
        
            if (!temp11) {
              // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
              return true
            }
          }
        
        
        });
        $("#dropit11").droppable({
          accept: "#wholeVolFlask",
          drop: function () {
            helpcount = 12
            temp11 = true;
            $("#volFlaskCap").css({ cursor: "pointer" })
            $("#wholeVolFlask").css({ cursor: "default" })

            $("#wholeVolFlask").hide();
            ImageAnimationOneTime("shake","flaskshake",imageArray1,40,1),
            setTimeout(showflask,2100);
            function showflask(){
            $("#oxalPowder3").hide(),

            $("#wholeVolFlask").show(),
             
              $("#wholeVolFlask").animate({ left: 24 + 'px', top: 123 + 'px' })

            $("#dropit11").hide()
            $('#wholeVolFlask').draggable('disable');


             


            }
            
            //animation of first flask shake
            






            $("#volFlaskCap").click(function () {
              helpcount = 13
              removeTrip()
              $("#funnel").css({ cursor: "pointer" })
              $("#volFlaskCap").css({ cursor: "default" })
          
              $("#volFlaskCap").hide();
              $("#volFlaskCaponTable").show();
              $("#volFlaskCaponTable").animate({ left: 91 + 'px', top: 283 + 'px' })
              $("#dropit6").hide();
              $("#dropit3").show();
              temp6 = false;
          
              $("#dropit3").droppable({
                accept: "#funnel",
                drop: function () {
                  helpcount = 14
                  $("#wholewashbottle").css({ cursor: "pointer" })
                  $("#funnel").css({ cursor: "default" })
                  temp6 = true;
              $("#funnel").css({ left: 34 + 'px', top: 97 + 'px' })
              $('#wholewashbottle').draggable('enable');
              $("#dropit3").hide();
              $("#dropit8").show();
             
          
          
              $("#wholewashbottle").draggable({ containment: "#bg" },
          
              {
                start: function () {
                  //$("#watchglassShadow2").hide()
                  // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
                  // $("#magnet").css('z-index', 3)
                  //$("#magnetOnTable").hide();
                }
              },
              
              {
                drag: function () {
                  removeTrip();
              
                }
              },
              {
                revert: function () {
              
                  if (!temp8) {
                    // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                    return true
                  }
                }
              });
          
              $("#dropit8").droppable({
                accept: "#wholewashbottle",
                drop: function () {
                  helpcount = 15
                  $('#wholewashbottle').draggable('disable');
                  $("#funnel").css({ cursor: "pointer" })
                  $("#wholewashbottle").css({ cursor: "default" })
                temp8 = true;
                $("#wholewashbottle").css({ left: 85 + 'px', top: 5 + 'px' })
                $("#wholewashbottle").animate(
          
                  { deg: -75 },
                  {
                    duration: 1200, step: function (now) {
                      $(this).css({ transform: 'rotate(' + now + 'deg)' });
                      
                      
            
                    }
                  }
                  //$("#oxalPowder2").delay(600).hide("fade",500),
                  //$("#pour2").delay(600).show("blind", { direction: "up" },function(){$("#pour2").hide("blind",{direction: "down"}),$("#oxalPowder3").show("fade",500)})
                );
                $("#pourline").delay(1200).show("fade",500),
              $("#wholewashbottle").animate({ left: 105 + 'px', top: 5 + 'px' },{duration: 800}),
              $("#wholewashbottle").animate({ left: 82 + 'px', top: 5 + 'px' },{duration: 800}),
              $("#pourline").delay(500).hide("fade",500),
                $("#waterfall").delay(1200).show("blind",{direction: "up"},function(){$("#volFlaskWaterhigh").show("blind",{direction: "down"})},500)
                $("#waterfall").hide("blind",{direction: "down"},500)
            
                $("#wholewashbottle").animate(
            
                  { deg: 0 },
                  {
                    duration: 1200, step: function (now) {
                      $(this).css({ transform: 'rotate(' + now + 'deg)' });
            
                    }
                  }
                );
                $("#wholewashbottle").animate({ left: 215 + 'px', top: 164 + 'px' },function(){
                  $('#funnel').draggable('enable');
                
                  $("#dropit9").show();
                })
               $("#dropit8").hide();
               
          
               $("#funnel").draggable({ containment: "#bg" },
          
               {
                 start: function () {
                   //$("#watchglassShadow").hide()
                   // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
                   // $("#magnet").css('z-index', 3)
                   //$("#magnetOnTable").hide();
                 }
               },
               
               {
                 drag: function () {
                   removeTrip();
               
                 }
               },
               
               {
                 revert: function () {
               
                   if (!temp9) {
                     // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                     return true
                   }
                 }
               
               
               });
               $("#dropit9").droppable({
                accept: "#funnel",
                drop: function () {
                  helpcount = 16
                  $("#wholedropper").css({ cursor: "pointer" })
                  $("#funnel").css({ cursor: "default" })
                temp9 = true;
                $("#funnel").css({ left: 346 + 'px', top: 204 + 'px' })
                $("#dropit10").show();
          
                }
              })
          
          
          
          
                $("#wholedropper").draggable({ containment: "#bg" },
          
                {
                  start: function () {
                    //$("#watchglassShadow2").hide()
                    // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
                    // $("#magnet").css('z-index', 3)
                    //$("#magnetOnTable").hide();
                  }
                },
                
                {
                  drag: function () {
                    removeTrip();
                
                  }
                },
                {
                  revert: function () {
                
                    if (!temp10) {
                      // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                      return true
                    }
                  }
                });
          
                $("#dropit10").droppable({
                  accept: "#wholedropper",
                  drop: function () {
                    helpcount = 17
                  $('#wholedropper').draggable('disable');

                    $("#volFlaskCaponTable").css({ cursor: "pointer" })
                    $("#wholedropper").css({ cursor: "default" })
                    temp10 = true;
                    $('#volFlaskCaponTable').draggable('enable');
                    $("#dropit12").show();
                    $("#dropit10").hide();


                    $("#drops").show();
                    $("#drops").css('zIndex', '0');
                    $("#wholedropper").css({ left: 50 + 'px', top: 22 + 'px' });
                    $("#dropsol").hide("drop", { direction: "down" }, 5000, function () {
                      $("#wholedropper").animate({ top: 179 + 'px', left: 483 + 'px' }, function () {
                        $("#dropsol").show("drop", { direction: "down" });
          
                      })
                    });
          
                   
          
          
                    for (i = 0; i < 4; i++) {
                      $("#drops").animate({ top: 180 + "px", opacity: "1" }, 400, 'linear');
          
                      $("#drops").animate({ top: 180 + "px", opacity: "0" }, 'linear');
                      $("#drops").animate({ top: 114 + "px" }, 200, 'linear');
                      $("#volFlaskWaterfine").delay(500).show("blind", { direction: "down" },3000);
                    }



                    $("#volFlaskCaponTable").draggable({ containment: "#bg" },

                    {
                      start: function () {
                        //$("#watchglassShadow").hide()
                        // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
                        // $("#magnet").css('z-index', 3)
                        //$("#magnetOnTable").hide();
                      }
                    },
                    
                    {
                      drag: function () {
                        removeTrip();
                    
                      }
                    },
                    
                    {
                      revert: function () {
                    
                        if (!temp12) {
                          // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                          return true
                        }
                      }
                    
                    
                    });
                    $("#dropit12").droppable({
                      accept: "#volFlaskCaponTable",
                      drop: function () {
                        helpcount = 18
                        temp12 = true
                        $("#wholeVolFlask").css({ cursor: "pointer" })
                        $("#volFlaskCaponTable").css({ cursor: "default" })

                    $('#volFlaskCaponTable').draggable('disable');
                    $('#wholeVolFlask').draggable('enable');
                    $("#volFlaskCaponTable").css({ left: 45 + 'px', top: 110 + 'px' })
                    $("#volFlaskCap").show();
                    $("#volFlaskCaponTable").hide();
                    $("#dropit12").hide();
                    $("#dropit13").show();



                    $("#wholeVolFlask").draggable({ containment: "#bg" },

                    {
                      start: function () {
                        //$("#watchglassShadow").hide()
                        // $("#magnetOnTable").attr("src",simPath+"images/magnet.png");
                        // $("#magnet").css('z-index', 3)
                        //$("#magnetOnTable").hide();
                      }
                    },
                    
                    {
                      drag: function () {
                        removeTrip();
                    
                      }
                    },
                    
                    {
                      revert: function () {
                    
                        if (!temp13) {
                          // $("#magnetOnTable").attr("src",simPath+"images/magnetOnTable.png");
                          return true
                        }
                      }
                    
                    
                    });
                    $("#dropit13").droppable({
                      accept: "#wholeVolFlask",
                      drop: function () {
                        helpcount = 19
                        temp13 = true;
                        // $('#olabmenuBar li:first-child').unbind('click')
                        $('.content').animate({
                          scrollTop: $("#reset").offset().top},
                          'fast')
                          // $('.content').css({ overflow: 'hidden'})
                        $("#wholeVolFlask").hide();
                        ImageAnimationOneTime("rotate","flaskrotate",imageArray2,40,1)
                    $("#wholeVolFlask").css({ cursor: "default" })
                    $('#wholeVolFlask').draggable('disable');

                        setTimeout(showflask2,3200);
                        function showflask2(){
                        $("#wholeVolFlask").show(),  
                          $("#wholeVolFlask").animate({ left: 24 + 'px', top: 123 + 'px' })
                        $("#dropit13").hide()
                        $("#inference").show("fade")
                        
                        }
                      }
                    })






                      }
                    })









                  }
                })
          
          
                }
              })
          
          
          
                }
              })
          
          
                    
                  })


          }
        })






        // draggable and first animation of volumetric


      }
    })


  }
})



    



  }
})

  

  }
})



  }
})
  //     $("#nxtBtn").click(function () {
  //       removeTrip();
  //       help = 2;
  //       helpcount = 6;
  //       $("#wholeFunnel").css({cursor:"pointer"})


  //       $("#mainDiv").hide()
  //       $(".firstpg_txt").hide()
  //       $(".secondpg_txt").show()
  //       $("#mainDiv2").show()
  //       $("#nxtBtn").hide(); 
  //      $("#nxtBtn2").show(); //to remove


  //  });







  $("#reset").click(function () {


    window.location.reload();

  });

});









































// function filterpaperanim() {

//   if ($('#f1').css('display') == 'block') {
//     $('#f1,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f2').css("display", "block")
//   }
//   else if ($('#f2').css('display') == 'block') {

//     $('#f1,#f2,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f3').css("display", "block")
//   }
//   else if ($('#f3').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f4').css("display", "block")

//   } else if ($('#f4').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f5').css("display", "block")

//   } else if ($('#f5').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f6').css("display", "block")
//   } else if ($('#f6').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f7').css("display", "block")
//   }
//   else if ($('#f7').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f8').css("display", "block")
//   }
//   else if ($('#f8').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f9').css("display", "block")
//   }
//   else if ($('#f9').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f10').css("display", "block")
//   }
//   else if ($('#f10').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f11').css("display", "block")
//   }
//   else if ($('#f11').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f12').css("display", "block")
//   }
//   else if ($('#f12').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f13').css("display", "block")
//   }
//   else if ($('#f13').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f14').css("display", "block")
//   }
//   else if ($('#f14').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f15').css("display", "block")
//   }
//   else if ($('#f15').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f16').css("display", "block")
//   }
//   else if ($('#f16').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f18,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f17').css("display", "block")
//   }
//   else if ($('#f17').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f19,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f18').css("display", "block")
//   }
//   else if ($('#f18').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f20,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f19').css("display", "block")
//   }
//   else if ($('#f19').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f21,#f22,#f23,#f24,#f25').hide();
//     $('#f20').css("display", "block")
//   }
//   else if ($('#f20').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f22,#f23,#f24,#f25').hide();
//     $('#f21').css("display", "block")
//   }
//   else if ($('#f21').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f23,#f24,#f25').hide();
//     $('#f22').css("display", "block")
//   }
//   else if ($('#f22').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f24,#f25').hide();
//     $('#f23').css("display", "block")
//   }
//   else if ($('#f23').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f25').hide();
//     $('#f24').css("display", "block")
//   }
//   else if ($('#f24').css('display') == 'block') {
//     $('#f1,#f2,#f3,#f4,#f5,#f6,#f7,#f8,#f9,#f10,#f11,#f12,#f13,#f14,#f15,#f16,#f17,#f18,#f19,#f20,#f21,#f22,#f23,#f24').hide();
//     $('#f25').css("display", "block")
//     $("#crossfade2").hide();
//     $("#magwithiron").show();
//     $("#magwithiron").animate({ left: 437 + 'px' });
//     $("#magwithiron").animate({ top: 170 + 'px' }, function () { $("#magwithiron").hide(), $("#magwithironontable").show() });
//     $("#inference").show("fade")
//   }
// }




function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripClickFlag = false;
  }
}











