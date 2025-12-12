var helpMsg,Droped=false,firstDrag=0,clickFlag=0,glassStopperFirstDrag=0,drag=0,measuringDrag=0;
var animCount = 0,polytheneFlag=0,helpcount=0;
var waterAnimArr=[]
var path = "../CHE/INC/Enthalpy_Change_for_the_Interaction_between_Acetone_and_Chloroform/images/WaterAnimation/" 

$(window).on('load',function(){
	for(i = 0;i<60;i++)
	{
		waterAnimArr[i] = path+"waterAnimation"+(i+1)+".png" ;
	}
	ImageInitLoad(waterAnimArr,"polytheneBottleDiv","waterAnim","waterAnimClass");
	ImageInitLoad(waterAnimArr,"polytheneBottleDiv1","waterAnimPage2","waterAnimPage2Class");
});

$(document).ready(function(){
	$(".sim-controls").hide();
	$(".sim-div").css({"width":"100%"});
	helpMsg=["Click on the<br>cap of the polythene bottle","Drag the thermometer into the beaker","Click on the thermometer <br>to remove it","Drag the beaker <br> towards the polythene bottle","Drag the cap into the polythene bottle","Click on the stirrer <br> to mix the solution","Click on the Next button "];
	helpMsg1=["Click on the cap<br> of the polythene bottle","Click on the cap of Chloroform bottle","Drag the Chloroform bottle towards Beaker 1","Click on the cap of Acetone bottle","Drag the Acetone bottle towards Beaker 2","Drag the thermometer into the Beaker 1","Note the t1 value in the worksheet then <br> click on the thermometer to remove it","Drag the thermometer into the Beaker 2","Note the t2 value in the worksheet <br> then click on the thermometer to remove it","Drag the Beaker 1<br>towards the <br>measuring cylinder","Drag the measuring cylinder<br> towards the polythene bottle","Drag the Beaker 2 <br>towards the measuring cylinder","Drag the measuring cylinder <br> towards the polythene bottle","Drag the cap <br> into the polythene bottle","Click on the stirrer<br> to mix the solution","Note the t3 value in the worksheet. Click on the Next button"]
	helpMsg3=["Perform the worksheet using these values.<br> Click on the Reset button to do the experiment again"]	
	clickEventOne();
		$("#nextButton").click(function(){ 
			helpcount=30;
			removeTrip();
			$("#page1Div,.page1").css({display:"none"});
			$("#page2Div,.page2").css({display:"block"});
			$("#calorimeterCapDiv1").css({"cursor":'pointer'});
			clickEventOne();
		});

		$("#nextButton1").click(function(){
			helpcount=7;
			removeTrip();
			$("#page2Div").css({display:"none"});
			$("#page3Div").css({display:"block"});
		});

		$("#nextButton2").click(function(){
			helpcount=23;
			removeTrip();
			$("#page3Div").css({display:"none"});
			$("#page4Div").css({display:"block"});
		});
});

function clickEventOne()
{
		$("#calorimeterCapDiv").click(function(){
			removeTrip();
			if(clickFlag==0)
			{
				helpcount=1;
				$("#readingLabelDivRight").css({'display':"none"});
				$(this).animate({'left':"70%","top":"49%","z-index":3,cursor:"default"},function(){
					clickFlag =1;
					$(this).css({"transform":'rotate('+295+'deg)',width:"15%"})
					$("#calorimeterCapDiv").css({"pointer-events":'none'});
					$("#thermometer").css({"cursor":'pointer'});
					dragdrop("#thermometer","#thermometerDroparea")
				})
			}
		})

		$("#calorimeterCapDiv1").click(function(){
			removeTrip();
			if(clickFlag==1)
			{
				helpcount=8;
				$("#calorimeterCapDiv1").css({"cursor":'default'});
				$(this).animate({'left':"82%","top":"49%","z-index":3,cursor:"default"},function(){
					clickFlag=2;
					$(this).css({"transform":'rotate('+313+'deg)',"width":"11%"})
					$("#chloroformBottleCap").css({"cursor":'pointer'});
					$("#chloroformBottleCap").click(function(){
						helpcount=9;
						removeTrip();
						$("#chloroformBottleCap").css({"z-index":5})
						$(this).animate({'left':"35%","top":"68%",cursor:"default"},function(){
							$("#chloroformBottleDiv").css({"cursor":'pointer'});
							dragdrop("#chloroformBottleDiv","#dropAreaChloroform")
						});
					});
				});
			}
		});
}			
function dragdrop(dragElement,dropArea){ //Drag function
	$(dragElement).draggable({containment:".sim-div",revertDuration:100 , 
		revert:function(){
					if(!Droped){
						if(dragElement=="#thermometer"){
							$("#thermometer").css({'left':"7%","top":"77%"})
							return false;
						}
						if(dragElement=="#beakerDiv"){
							$("#beakerDiv").css({'left':"11%","top":"43%"})
							return false;
						}
						if(dragElement=="#calorimeterCapDiv"){
							$("#calorimeterCapDiv").css({'left':"70%","top":"49%","z-index":3,"transform":'rotate('+295+'deg)'})
							return false;
						}
						if(dragElement=="#chloroformBottleDiv"){
							$("#chloroformBottleDiv").css({'left':"31%","top":"44%"})
							return false;
						}
						if(dragElement=="#acetoneBottleDiv"){
							$("#acetoneBottleDiv").css({'left':"41%","top":"44%"})
							return false;
						}
						if(dragElement=="#thermometerPage2"){
							$("#thermometerPage2").css({'left':"52%","top":"76%"})
							return false;
						}
						if(dragElement=="#beakerDivChloroform"){
							$("#beakerDivChloroform").css({'left':"2%","top":"46%"})
							return false;
						}
						if(dragElement=="#measuringCylinderDiv"){
							$("#measuringCylinderDiv").css({'left':"52%","top":"38%"})
							return false;
						}
						if(dragElement=="#beakerDivAcetone"){
							$("#beakerDivAcetone").css({'left':"17%","top":"46%"})
							return false;
						}
						if(dragElement=="#calorimeterCapDiv1"){
							$("#calorimeterCapDiv1").css({'left':"82%","top":"49%","transform":'rotate('+313+'deg)'})
							return false;
						}
						return true;
					}
				},
		drag:function(){
			removeTrip();
			$(dropArea).css({"display":"block"})
			if(dragElement=="#calorimeterCapDiv"){
			}
			if(dragElement=="#beakerDiv"){
				$("#noteDiv").css({'display':"none"});
			}
			if(dragElement=="#measuringCylinderDiv"){
				$("#labelDiv").hide();
			}
			if(dragElement=="#beakerDivAcetone"){
				$("#noteDiv1").hide()
			}
		}	 
	});	

	$(dropArea).droppable({accept:dragElement,     
		drop: function() {	
			$(dropArea).css({"display":"none"})
			$(dragElement).css({"cursor":'default'});
			if(dragElement=="#thermometerPage2"){
				$(dragElement).css({"cursor":'pointer'});
			}
			Droped=true;
				if(dropArea == '#thermometerDroparea'){
					setTimeout(function(){
						Droped=false;
					})
					helpcount=2;
					$("#thermometer").css({"cursor":'pointer'});
					$(dragElement).css({'left':"4%","top":"33%","transform":'rotate('+271+'deg)'});
					$(dragElement).draggable("disable");
					$(dragElement).animate({"top":"37%"},function(){
						$("#readingLabelDivLeft").show();
						$("#readingLabelDivLeft").css({"text-align": "center"});
						$("#readingLabelLeft>p").html("t2 48.6&#8451");
						$("#thermometer").click(function(){
							helpcount=3;
							removeTrip();
							$(this).css({"pointer-events":'none'});
							$("#readingLabelDivLeft").hide();
							$(this).animate({'left':"-5%","top":"29%"},function(){
								$(this).css({"transform":'rotate('+0+'deg)'});
								$(this).animate({'left':"7%","top":"77%"});
								$("#noteDiv").show();
								firstDrag=1;
								$("#beakerDiv").css({"cursor":'pointer'});
								dragdrop("#beakerDiv","#beakerDroparea")
							})
							
						})
					})	
				}
				else if(dropArea == '#beakerDroparea'){
					setTimeout(function(){
						Droped=false;
					})

					if(firstDrag==1){
						helpcount=4;
						$(dragElement).css({'left':"39%","top":"8%","transform":'rotate('+73+'deg)'});
						$("#beakerWater").hide();
						$("#waterTilt").show();
						$("#pourWater").animate({"height":"37%"},function(){
							$("#bottleWater").animate({top:"47%",height:"59%"},function(){
								
								$("#waterTilt").show();
								$("#waterTilt").fadeOut();
								$("#pourWater").animate({"opacity":"0"},function(){
									
									$(dragElement).animate({'left':"11%","top":"43%"});
									$(dragElement).css({"transform":'rotate('+0+'deg)'});
									firstDrag=2;
									$("#calorimeterCapDiv").css({"pointer-events":''});
									dragdrop("#calorimeterCapDiv","#beakerDroparea")
								});
							})
						});
					}
					else if(firstDrag==2){
						helpcount=5;
						$(dragElement).css({'left':"42%","top":"23%",width:"18%","transform":'rotate('+0+'deg)'});
						$(dragElement).animate({top:"27%"})
						$("#stirrer").css({"cursor":'pointer'});
						$("#stirrer").click(function(){
							helpcount=6;
							animCount=1;
							$("#bottleWater").fadeOut();
							$(this).css({"pointer-events":'none'});
							var setvar = setInterval(stirrerAnim,10);
							ImageAnimationOneTime("waterAnimClass","waterAnim",waterAnimArr,100,0);
							setTimeout(function(){
								clearInterval(setvar)
								setTimeout(function(){
									$("#readingLabelDivRight").show();
									$("#readingLabelDivRight").css({'left':"29.3%","top":"20%","text-align": "center"});
									$("#readingLabelRight>p").html("t3 36.4&#8451");
									$("#nextButton").show();
									$("#nextButton").css({"cursor":'pointer'});
								},4000)
								
							},50) 
						});
					}
					$(dragElement).draggable("disable");
				}

				else if(dropArea == '#dropAreaChloroform'){
					console.log(glassStopperFirstDrag)
					setTimeout(function(){
						Droped=false;
					})
					if(glassStopperFirstDrag==0){  //Chloroform bottle drag
						helpcount=10;
						glassStopperFirstDrag=1;
						$(dragElement).css({'left':"11%","top":"24%","transform":'rotate('+270+'deg)'});
						$("#chloroformPour").animate({"height":"27%"},function(){
							$("#beakerWaterChloroform").animate({height:"48%",top:"53%"},function(){
								$("#chloroformPour").css({opacity:"0"})
								$("#chloroformBottleDiv").css({"transform":'rotate('+0+'deg)'})
								$("#chloroformBottleDiv").animate({"left":"31%","top":"44%"},function(){
									$("#chloroformBottleCap").animate({'left':"33.5%","top":"36.5%"},function(){
										$("#chloroformBottleCap").css({"pointer-events":"none","z-index":3})
										$("#acetoneBottleCap").css({"cursor":'pointer'});
										$("#acetoneBottleCap").click(function(){
											helpcount=11;
											removeTrip();
											$("#acetoneBottleCap").css({"z-index":5})
											$(this).animate({'left':"45%","top":"68%"},function(){
												$("#acetoneBottleDiv").css({"cursor":'pointer'});
												dragdrop("#acetoneBottleDiv","#dropAreaChloroform")
											});
										});
									})
										
								});
							});
						});
					}
					else if(glassStopperFirstDrag==1){  // Acetone bottle drag
						helpcount=12;
						$(dragElement).css({'left':"24%","top":"26%","transform":'rotate('+270+'deg)'});
						$("#acetonPour").animate({"height":"27%"},function(){
							$("#beakerWaterAcetone").animate({height:"48%",top:"53%"},function(){
								$("#acetonPour").css({opacity:"0"})
								$("#acetoneBottleDiv").css({"transform":'rotate('+0+'deg)'})
								$("#acetoneBottleDiv").animate({"left":"41%","top":"44%"},function(){
									$("#acetoneBottleCap").animate({'left':"43.4%","top":"36.4%"},function(){
									$("#acetoneBottleCap").css({"pointer-events":"none","z-index":3})
									glassStopperFirstDrag = 2;
									$("#thermometerPage2").css({"cursor":'pointer'});
										dragdrop("#thermometerPage2","#dropAreaChloroform")
									});
								});
							});
						});
					}
					else if(glassStopperFirstDrag==2){   // Thermometer drag1
						helpcount=13;
						$(dragElement).css({'left':"-5%","top":"30%","transform":'rotate('+272+'deg)',"z-index": 1});
						$(dragElement).animate({top:"38%"},100,function(){
							$("#readingLabelDiv2").css({display:"block",top:"23%",left:"8%"})
							$("#thermometerPage2").css({"cursor":'pointer'});
								$("#thermometerPage2").click(function(){	
									removeTrip();
									$("#thermometerPage2").css({"cursor":'default'});								
									$("#readingLabelDiv2").hide();
									$(this).animate({'left':"52%","top":"76%"},function(){
										glassStopperFirstDrag=3
										$(this).css({"transform":'rotate('+0+'deg)'})
										if(drag==0){
											helpcount=14;
											drag=1;
											$(dragElement).draggable("enable");
											$("#thermometerPage2").css({"cursor":'pointer'});
											dragdrop("#thermometerPage2","#dropAreaChloroform")
										}
										else{
											helpcount=16;
											$("#beakerDivChloroform").css({"cursor":'pointer'});
											dragdrop("#beakerDivChloroform","#measuringDroparea")
										}
									});
								});
						})
					}
					else if(glassStopperFirstDrag==3){  // Thermometer drag2
						helpcount=15;
						$(dragElement).css({'left':"9%","top":"30%","transform":'rotate('+272+'deg)'});
						$(dragElement).animate({top:"38%"},100,function(){
						 	$("#readingLabelDiv2").css({display:"block",top:"21%",left:"22%","text-align": "center"})
							 $("#readingLabel2").html("t2 25&#8451");
						})
					}
					$(dragElement).draggable("disable");
				}

				else if(dropArea == '#measuringDroparea'){
					setTimeout(function(){
						Droped=false;
					})
					if(measuringDrag==0){   //beaker1 drag
						measuringDrag =1;
						helpcount=17;
						$(dragElement).css({'left':"43.6%","top":"8.3%","transform":'rotate('+87+'deg)'});
						$("#beakerWaterChloroform").fadeOut()
						$("#beakerWaterChloroformtilt").show()
						$("#cylinderPour").animate({"height":"33%"},function(){
							$("#cylinderWater").animate({height:"73%",top:"30%"},function(){
								$("#labelDiv").show();
								$("#cylinderPour").css({opacity:0})
								$("#beakerWaterChloroformtilt").hide()
								$(dragElement).css({"transform":'rotate('+0+'deg)'});
								$("#beakerWaterChloroform").show()
								$("#beakerWaterChloroform").css({"top":"63%","height":'37%'});
								$(dragElement).animate({'left':"2%","top":"46%"},function(){
									$("#measuringCylinderDiv").css({"cursor":'pointer'});
									dragdrop("#measuringCylinderDiv","#polytheneDroparea");
								});
							});
						})
					}
					else if(measuringDrag==1)  //beaker2 drag
					{
						helpcount=19;
						$("#cylinderPour").css({opacity:1,height:"0%"});
						$(dragElement).css({'left':"43.6%","top":"8.3%","transform":'rotate('+87+'deg)'});
						$("#beakerWaterAcetone").fadeOut()
						$("#beakerWaterAcetonetilt").show()
						$("#cylinderWater").css({"opacity":1});
						$("#cylinderPour").animate({"height":"33%"},function(){
							$("#cylinderWater").animate({height:"63%",top:"39.2%"},function(){
								$("#labelDiv").show();
								$("#measureLabel>span").html("7.3ml");
								$("#cylinderPour").css({opacity:0})
								$("#beakerWaterAcetonetilt").hide()
								$(dragElement).css({"transform":'rotate('+0+'deg)'});
								$("#beakerWaterAcetone").show()
								$("#beakerWaterAcetone").css({"top":"63%","height":'37%'});
								$(dragElement).animate({'left':"17%","top":"46%"},function(){
									$("#measuringCylinderDiv").draggable("enable");
									$("#measuringCylinderDiv").css({"cursor":'pointer'});
									dragdrop("#measuringCylinderDiv","#polytheneDroparea");
								});
							});
						});
					}
					$(dragElement).draggable("disable");
				}
				else if(dropArea == '#polytheneDroparea'){  //measuring cylinder drag1
					setTimeout(function(){
						Droped=false;
					})
					if(polytheneFlag == 0){
						helpcount=18;
						polytheneFlag=1;
						$(dragElement).css({'left':"78%","top":"17%","transform":'rotate('+270+'deg)'});
						$("#cylinderWater").css({opacity:0,"height":"0%","top":"112%"});
						$("#measuringSlide").show();
						$("#measurePour").animate({"height":"29%"},function(){
							$("#bottleWater1").animate({"top":"72%",height:"31%"},function(){
								$("#measurePour,#measuringSlide").css({opacity:"0"});
								$(dragElement).css({"transform":'rotate('+0+'deg)'});
								$(dragElement).animate({'left':"52%","top":"38%"});
								$("#beakerDivAcetone").css({"cursor":'pointer'});
								$("#noteDiv1").show()
								dragdrop("#beakerDivAcetone","#measuringDroparea");
							});
						})
						$(dragElement).draggable("disable");
					}
					else if(polytheneFlag == 1)  //measuring cylinder drag2
					{
						helpcount=20;
						polytheneFlag=2;
						$(dragElement).css({'left':"78%","top":"17%","transform":'rotate('+270+'deg)'});
						$("#cylinderWater").css({opacity:0});
						$("#measuringSlide,#measurePour").css({opacity:"1"});
						$("#measurePour").animate({"height":"29%"},function(){
							$("#bottleWater1").animate({"top":"47%",height:"59%"},function(){
								$("#measurePour,#measuringSlide").css({opacity:"0"});
								$(dragElement).css({"transform":'rotate('+0+'deg)'});
								$(dragElement).animate({'left':"54%","top":"38%"});
								$("#calorimeterCapDiv1").css({"cursor":'pointer'});
								dragdrop("#calorimeterCapDiv1","#polytheneDroparea");
							});
						});
						$(dragElement).draggable("disable");
					}
					else if(polytheneFlag == 2)
					{
						helpcount=21;
						$(dragElement).css({'left':"65%","top":"27%",width:"14%","transform":'rotate('+0+'deg)'});
						$(dragElement).animate({top:"32%"})
						$("#stirrer1").css({"cursor":'pointer'});
						$("#stirrer1").click(function(){
							helpcount=22;
							animCount=2;
							$("#bottleWater1").fadeOut();
							$(this).css({"pointer-events":'none'});
							var setvar1 = setInterval(stirrerAnim1,10);
							ImageAnimationOneTime("waterAnimPage2Class","waterAnimPage2",waterAnimArr,100,0);
							setTimeout(function(){
								clearInterval(setvar1);
								setTimeout(function(){
									$("#readingLabelDiv2Right,#nextButton2").show();
									$("#readingLabelDiv2Right").css({'left':"51%","top":"27%","text-align": "center"});
									$("#readingLabel2Right>p").html("t3 32&#8451");
								},4000)
							},50);
						})
					}
					$(dragElement).draggable("disable");
				}	
		}
	});

}
function stirrerAnim(){
	$("#stirrer").animate({top:"-27%"},600)
	$("#stirrer").animate({top:"-60%"},600)
}

function stirrerAnim1(){
	console.log(1231)
	$("#stirrer1").animate({top:"-27%"},600)
	$("#stirrer1").animate({top:"-60%"},600)
}

function removeTrip(){
	if(tripFlag==true){
		$('.trip-block').hide();
		trip.stop();
		tripFlag=false;
	}
} 

// Animation function 
function ImageAnimationOneTime(ANIMATIONImageClassName,ANIMATIONImageIdName,ANIMATIONImageArray,ANIMATIONSpeed,ANIMATIONTimes)
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
                if(ANIMATIONTimesReached>=ANIMATIONTimes)
                {
                    $('.'+ANIMATIONImageClassName).css({'display':'none'});
					if(animCount ==1)
						userDefinedFunctionForAnimate();
					else if(animCount==2)
						userDefinedFunction2ForAnimate();
                    clearInterval(CLEARImageAnimation);	
                }
                else
                {
                    GlobalVariable=0;
                    ANIMATIONTimesReached++;
                }
            }
        },ANIMATIONSpeed);
    }
function userDefinedFunctionForAnimate()
{
	$("#bottleWater").css({'display':"block"});
}
function userDefinedFunction2ForAnimate()
{
	$("#bottleWater1").css({'display':"block"});
}
function ImageInitLoad(ANIMATIONImageArray,ANIMATIONDivName,ANIMATIONImageIdName,ANIMATIONImageClassName)
    {
        for(var ANIMATIONForloop=0;ANIMATIONForloop<ANIMATIONImageArray.length;ANIMATIONForloop++)
        {
            var $tempx2=$("<img src='"+ANIMATIONImageArray[ANIMATIONForloop]+"'/>").attr({id:ANIMATIONImageIdName+ANIMATIONForloop,class:ANIMATIONImageClassName,display:"none"});
            $("#"+ANIMATIONDivName).append($tempx2);
        }
    }