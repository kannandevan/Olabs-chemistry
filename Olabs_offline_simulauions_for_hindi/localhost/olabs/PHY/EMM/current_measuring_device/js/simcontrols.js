var oL,pL,oT,pT;
var ctx,c;
var mainHeight, mainWidth;
var rhSliderPosition = 0;
var rhSliderPosition2 = 0;
var count=0;
var rotateValue =310;
var sliderCheckArr = [0,0,0,0];
var sliderCheckArr2 = [0,0,0,0];
var changeSlider,changeSlider2;
var helpMsg,inferenceMsg;
var helpcount=0;
var inferenceCount =0;

$(window).resize(function () {
    setTimeout(function () {
        mainWidth = $("#mainDiv").width();
        mainHeight = $("#mainDiv").height();
        c = document.getElementById("connectionCanvas");
        ctx = c.getContext("2d");
        $("#connectionCanvas").css({ width: mainWidth, height: mainHeight });
        oL = $("#mainDiv").offset().left;
        pL = $("#mainDiv").position().left;
        oT = $("#mainDiv").offset().top;
        pT = $("#mainDiv").position().top;
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
    }, 1000);
})
function connector(startPoint, endPoint, connector) {
    var wireColor = "#000000"
    var elemX, elemY
    $(startPoint).draggable({
        containment: "#mainDiv",
        revert: function (droped) {
          if (!droped) {
            ctx.clearRect(0, 0, mainWidth, mainHeight);
            elementX = getPercentageWRT(elemX, mainWidth);
            elementY = getPercentageWRT(elemY, mainHeight);
            elementX = precisionRound(elementX, 2)
            elementY = precisionRound(elementY, 2)
                     $(startPoint).css({
              left: elementX + "%",
              top: elementY + "%"
            });
            removeTrip();
            $(endPoint).css({ opacity: 0 });
          }
        },
        start: function () {
          elemX = $(startPoint).position().left;
          elemY = $(startPoint).position().top;
          var elemWidth = $(startPoint).width() / 2;
          var elemHeight = $(startPoint).height() / 2;
          startX = elemX;
          startY = elemY;
          droperInitPos = $(startPoint).css("left");
          $(endPoint).css({ opacity: 0.5 });
        },
        stop: function () { },
        drag: function (e, ui) {
          elemXX = $(startPoint).position().left;
          elemYY = $(startPoint).position().top;
          var x = e.clientX - oL - pL;
          var y = e.clientY - oT - pT;
          mouseX = e.pageX - $(e.target).offset().left;
          mouseY = e.pageY - $(e.target).offset().top;;
          ctx.clearRect(0, 0, mainWidth, mainHeight);
          ctx.strokeStyle = wireColor;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      });
    $(endPoint).droppable({
        accept: startPoint.toString(),
        tolerance: "touch",
        drop: function () {
  count++;
          helpcount =1;
            $(endPoint).draggable("disable");
            $(startPoint).draggable("disable");
            $(endPoint + "," + startPoint).css({ cursor: "default" });
            $(endPoint).hide();
            $(startPoint).hide();
            removeTrip();
            droped = true;
            ctx.clearRect(0, 0, mainWidth, mainHeight);
            $(connector).show();
    if(count==6){
      helpcount =2;
      closeKey();
      }
        }
    });
}
function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }    

$(document).ready(function(){
  inferenceMsg = ["In the real case, a current measuring device has finite non-zero resistance.",
  ];
  helpMsg      = ["Click on the check box to Show/Hide the circuit diagram",
                  "Connect the apparatus by referring the circuit diagram",
                  "Drag and drop the key into switch",
                  "Select the position of the rheostat slider",
                  "Click on the Show Result button",
                  "Click on the Next button",
                  "Click on the Inference button to view the observation",
                  "Click on the Reset button <br>to redo the experiment",
  ];
    setTimeout(function () {
        mainWidth = $("#mainDiv").width();
        mainHeight = $("#mainDiv").height();
        c = document.getElementById("connectionCanvas");
        ctx = c.getContext("2d");
        $("#connectionCanvas").css({ width: mainWidth, height: mainHeight });
        oL = $("#mainDiv").offset().left;
        pL = $("#mainDiv").position().left;
        oT = $("#mainDiv").offset().top;
        pT = $("#mainDiv").position().top;
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
    }, 1000);
    connector('#cellPositive','#ammeterPositive', '#wire1');
    connector('#ammeterPositive','#cellPositive', '#wire1');

    connector('#ammeterNegative','#rhLowerend', '#wire2');
    connector('#rhLowerend','#ammeterNegative', '#wire2');

    connector('#cellNegative','#switchLeft', '#wire3');
    connector('#switchLeft','#cellNegative', '#wire3');

    connector('#rhUpperend','#switchRight', '#wire4');
    connector('#switchRight','#rhUpperend', '#wire4');

    connector('#mutimeterNegative','#ammeterNegative2', '#wire5');
    connector('#ammeterNegative2','#mutimeterNegative', '#wire5');

    connector('#mutimeterPositive','#ammeterPositive2', '#wire6');
    connector('#ammeterPositive2','#mutimeterPositive', '#wire6');
    $('#range').html(0);
    $("#rhSliderPosition").attr("disabled", true);
$("#checkCir").click(function () {
    if ($(this).is(":checked")) {
      removeTrip()
      helpcount = 0;
      $("#circuitDiagram").show();
      $("#screen1").css({display:"none"})
    } else {
      removeTrip()
      helpcount = 1;
      $("#circuitDiagram").hide();
      $("#screen1").css({display:"block"})
    }
  });
});
function rheostatChange(value)  // slider to change the position of rheostat slider.
{
	rhSliderPosition = value;
	$('#range').html(value); 
  changeSlider = 46-(rhSliderPosition*4);
}
function closeKey(){
  $("#checkCir,#label").css({"display":"none"})
  $("#digitalValue0").css({"display":"block"})
  $("#key").css({"cursor":"pointer","z-index": "11"})
  $("#key").draggable(
    {
      containment: "#mainDiv",
      revert: "invalid",
      drag: function () {
        removeTrip();
      }
    })
    $("#keyDropArea1").droppable(
      {
        accept: "#key",
        tolerance: "touch",
        drop: function () {
          $("#key").css({ left: 72 + "%", top: 18 + "%" })
          $("#key").draggable("disable")
          $("#key").css({ "cursor": "default" });
          $("#labelDiv1").css({display:"block"})  //  display ammeter-1 label.
          rhSliderClick();
          helpcount =3;
        }
      });
}
  function rhSliderClick(){
    $("#rhSliderPosition").attr("disabled", false);
    $("#rhSliderPosition").change(function(){
      removeTrip()
      switch(parseInt(rhSliderPosition)){
        case 1:sliderCheckArr[0] =1;
               break;
        case 2:sliderCheckArr[1] =1;
              break;
        case 3:sliderCheckArr[2] =1;
              break;
        case 4:sliderCheckArr[3] =1;
              break;
      }
    
      $("#rheo_move").animate({ "left":""+changeSlider+"%"})
      if(rhSliderPosition == 0){
        $("#v1,#v2,#v3,#tableResult").css("display","none")
        $("#arrow").css({"transform": "rotate(280deg)","transform-origin": "bottom"})
        $("#digitalValue0").css({"display":"block"})
        $("#digitalValue1,#digitalValue2,#digitalValue3,#digitalValue4").css({"display":"none"})
      }
      if(rhSliderPosition == 1){
        helpcount = 4;
        $("#v1,#v2,#v3,#tableResult").css("display","none")
        $("#digitalValue0,#digitalValue2,#digitalValue3,#digitalValue4").css({"display":"none"})
        $("#digitalValue1").css({"display":"block"})
        $("#rhSliderPosition").attr("disabled", true);
        $("#arrow").css({"transform": "rotate(310deg)","transform-origin": "bottom"})
        $("#check").attr("disabled", false);
        $("#check").click(function(){
          removeTrip();
          helpcount = 3;
          $("#check").attr("disabled", true);
          $("#rhSliderPosition").attr("disabled", false);
          $("#v1,#v2,#v3,#tableResult").css("display","block")
          $("#v1").text("1A");
          $("#v2").text("50 mV");
          $("#v3").text("0.05 Ω");
        })
      }
      if(rhSliderPosition == 2){
        helpcount = 4;
        $("#v1,#v2,#v3,#tableResult").css("display","none")
        $("#digitalValue0,#digitalValue1,#digitalValue3,#digitalValue4").css({"display":"none"})
        $("#digitalValue2").css({"display":"block"})
        $("#rhSliderPosition").attr("disabled", true);
        $("#arrow").css({"transform": "rotate(340deg)","transform-origin": "bottom"})
        $("#check").attr("disabled", false);
        $("#check").click(function(){
          removeTrip();
          helpcount = 3;
          $("#check").attr("disabled", true);
          $("#rhSliderPosition").attr("disabled", false);
          $("#v1,#v2,#v3,#tableResult").css("display","block")
          $("#v1").text("2A");
          $("#v2").text("100 mV");
          $("#v3").text("0.05 Ω");
        })
      }
      if(rhSliderPosition == 3){
        helpcount = 4;
        $("#v1,#v2,#v3,#tableResult").css("display","none")
        $("#digitalValue0,#digitalValue1,#digitalValue2,#digitalValue4").css({"display":"none"})
        $("#digitalValue3").css({"display":"block"})
        $("#rhSliderPosition").attr("disabled", true);
        $("#arrow").css({"transform": "rotate(357deg)","transform-origin": "bottom"})
        $("#check").attr("disabled", false);
        $("#check").click(function(){
          removeTrip();
          helpcount = 3;
          $("#check").attr("disabled", true);
          $("#rhSliderPosition").attr("disabled", false);
          $("#v1,#v2,#v3,#tableResult").css("display","block")
          $("#v1").text("2.5A");
          $("#v2").text("125 mV");
          $("#v3").text("0.05 Ω");
        })
      }
      if(rhSliderPosition == 4){
        helpcount = 4;
        $("#v1,#v2,#v3,#tableResult").css("display","none")
        $("#digitalValue0,#digitalValue1,#digitalValue2,#digitalValue3").css({"display":"none"})
        $("#digitalValue4").css({"display":"block"})
        $("#rhSliderPosition").attr("disabled", true);
        $("#arrow").css({"transform": "rotate(370deg)","transform-origin": "bottom"})
        $("#check").attr("disabled", false);
        $("#check").click(function(){
          removeTrip();
          helpcount = 3;
          $("#check").attr("disabled", true);
          $("#rhSliderPosition").attr("disabled", false);
          $("#v1,#v2,#v3,#tableResult").css("display","block")
          $("#v1").text("3A");
          $("#v2").text("150 mV");
          $("#v3").text("0.05 Ω");
          sliderCheck()
        })
      }
    })
  }
function sliderCheck(){
  if((sliderCheckArr[0]==1)&&(sliderCheckArr[1]==1)&&(sliderCheckArr[2]==1)&&(sliderCheckArr[3]==1)){
    helpcount = 5;
    $("#nextbutton").css({"display":"block"});
    $("#nextbutton").click(function(){                //Click on the next button
      removeTrip();
      helpcount =6;
      $("#table1Div").css({"display":"block"});    //observation table1 show
      $("#rhSliderPosition").attr("disabled", true);
      $("#nextbutton,#screen1,#labelDiv1").css({"display":"none"});
      $("#nextbutton2").css({"display":"block"});
          $("#nextbutton2").click(function(){  
            helpcount = 2;
            removeTrip()
            $("#screen1").css({"display":"block"});
            $("#table1Div").css({"display":"none"});      //observation table1 hide
            $("#rhSliderPosition2").attr("disabled", true);
            $("#nextbutton2").css({"display":"none"});
            $("#key").css({ left: 86 + "%", top: 45 + "%" })
            $("#arrow").css({"transform": "rotate(280deg)","transform-origin": "bottom"})
            $("#rheo_move").css({ "left":"46%"})
            $("#digitalValue1,#digitalValue2,#digitalValue3,#digitalValue4").css({"display":"none"})
            $("#digitalValue0,#rhSliderPosition2,#check2").css({"display":"block"})
            $("#v1,#v2,#v3,#tableResult,#rhSliderPosition,#check").css("display","none")
            $('#range').html(0);
            closeKey2()
        });
    })
  }
}
///////                           second experiment                  //////////
function rheostatChange2(value)  // slider to change the position of rheostat slider2.
{
	rhSliderPosition2 = value;
	$('#range').html(value); 
  changeSlider2 = 46-(rhSliderPosition2*4);
}
function closeKey2(){
  $("#key").draggable("enable")
  $("#key").css({"cursor":"pointer","z-index": "11"})
  $("#key").draggable(
    {
      containment: "#mainDiv",
      revert: "invalid",
      drag: function () {
        removeTrip();
      }
    })
    $("#keyDropArea1").droppable(
      {
        accept: "#key",
        tolerance: "touch",
        drop: function () {
          helpcount = 7;
          $("#key").css({ left: 72 + "%", top: 18 + "%" })
          $("#key").draggable("disable")
          $("#key").css({ "cursor": "default" });
          $("#labelDiv2").css({display:"block"});
          rhSliderClick2();
        }
      });
}
function rhSliderClick2(){
  $("#rhSliderPosition2").attr("disabled", false);
  $("#rhSliderPosition2").change(function(){
    removeTrip();
    switch(parseInt(rhSliderPosition2)){
      case 1:sliderCheckArr2[0] =1;
             break;
      case 2:sliderCheckArr2[1] =1;
            break;
      case 3:sliderCheckArr2[2] =1;
            break;
      case 4:sliderCheckArr2[3] =1;
            break;
    }
  
    $("#rheo_move").animate({ "left":""+changeSlider2+"%"})
    if(rhSliderPosition2 == 0){
      $("#v1,#v2,#v3,#tableResult").css("display","none")
      $("#arrow").css({"transform": "rotate(280deg)","transform-origin": "bottom"})
      $("#digitalValue0").css({"display":"block"})
      $("#digitalValue2,#digitalValue5,#digitalValue6,#digitalValue7").css({"display":"none"})
    }
    if(rhSliderPosition2 == 1){
      helpcount = 8;
      $("#v1,#v2,#v3,#tableResult").css("display","none")
      $("#digitalValue0,#digitalValue5,#digitalValue6,#digitalValue7").css({"display":"none"})
      $("#digitalValue2").css({"display":"block"})
      $("#rhSliderPosition2").attr("disabled", true);
      $("#arrow").css({"transform": "rotate(310deg)","transform-origin": "bottom"})
      $("#check2").attr("disabled", false);
      $("#check2").click(function(){
        removeTrip();
        helpcount = 7;
        $("#check2").attr("disabled", true);
        $("#rhSliderPosition2").attr("disabled", false);
        $("#v1,#v2,#v3,#tableResult").css("display","block")
        $("#v1").text("1A");
        $("#v2").text("100 mV");
        $("#v3").text("0.1 Ω");
      })
    }
    if(rhSliderPosition2 == 2){
      helpcount = 8;
      $("#v1,#v2,#v3,#tableResult").css("display","none")
      $("#digitalValue0,#digitalValue2,#digitalValue6,#digitalValue7").css({"display":"none"})
      $("#digitalValue5").css({"display":"block"})
      $("#rhSliderPosition2").attr("disabled", true);
      $("#arrow").css({"transform": "rotate(340deg)","transform-origin": "bottom"})
      $("#check2").attr("disabled", false);
      $("#check2").click(function(){
        removeTrip();
        helpcount = 7;
        $("#check2").attr("disabled", true);
        $("#rhSliderPosition2").attr("disabled", false);
        $("#v1,#v2,#v3,#tableResult").css("display","block")
        $("#v1").text("2A");
        $("#v2").text(" 200 mV");
        $("#v3").text(" 0.1 Ω");
      })
    }
    if(rhSliderPosition2 == 3){
      helpcount = 8;
      $("#v1,#v2,#v3,#tableResult").css("display","none")
      $("#digitalValue0,#digitalValue2,#digitalValue5,#digitalValue7").css({"display":"none"})
      $("#digitalValue6").css({"display":"block"})
      $("#rhSliderPosition2").attr("disabled", true);
      $("#arrow").css({"transform": "rotate(357deg)","transform-origin": "bottom"})
      $("#check2").attr("disabled", false);
      $("#check2").click(function(){
        removeTrip();
        helpcount = 7;
        $("#check2").attr("disabled", true);
        $("#rhSliderPosition2").attr("disabled", false);
        $("#v1,#v2,#v3,#tableResult").css("display","block")
        $("#v1").text("2.5A");
        $("#v2").text(" 250 mV");
        $("#v3").text(" 0.1 Ω");
      })
    }
    if(rhSliderPosition2 == 4){
      helpcount = 8;
      $("#v1,#v2,#v3,#tableResult").css("display","none")
      $("#digitalValue0,#digitalValue2,#digitalValue5,#digitalValue6").css({"display":"none"})
      $("#digitalValue7").css({"display":"block"})
      $("#rhSliderPosition2").attr("disabled", true);
      $("#arrow").css({"transform": "rotate(370deg)","transform-origin": "bottom"})
      $("#check2").attr("disabled", false);
      $("#check2").click(function(){
        removeTrip();
        helpcount = 7;
        $("#check2").attr("disabled", true);
        $("#rhSliderPosition2").attr("disabled", false);
        $("#v1,#v2,#v3,#tableResult").css("display","block")
        $("#v1").text("3A");
        $("#v2").text("300 mV");
        $("#v3").text("0.1 Ω");
        sliderCheck2()
      })
    }
  })
}
function sliderCheck2(){
  if((sliderCheckArr2[0]==1)&&(sliderCheckArr2[1]==1)&&(sliderCheckArr2[2]==1)&&(sliderCheckArr2[3]==1)){
    helpcount = 9;
    $("#nextbutton3").css({"display":"block"});
    $("#nextbutton3").click(function(){
      removeTrip();
      helpcount = 10;
      $("#rhSliderPosition2").attr("disabled", true);
      $("#table2Div").css({"display":"block"})
      $("#screen1,#nextbutton3").css({"display":"none"});     
      $("#inference").css({"display":"block"});
    })
  }
}
