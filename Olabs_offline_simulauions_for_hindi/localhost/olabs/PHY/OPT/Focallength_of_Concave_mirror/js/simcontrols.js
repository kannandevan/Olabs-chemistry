var lightFlag=true
var focalLngOfMrr=10; //generating random focal length between 10 to 40//
 focalLngOfMrr=Math.floor(Math.random() * (40 - 10) +10);
 console.log( focalLngOfMrr);
var distanMrr_objctU=150; //Initial Distance between mirror and object.
var mirrorDstncValue=100;
var distnMrr_screenV;
var zoomScaleReadingFnl=150;
var fixde_distnMrScreenV;
var ranFlag=true
var fnlopacityVal;
var blurValue=11;
var opacityIncrmnt=0.9;
var popUp_msg;
var popUp_msgArry;
var screenDstncValue=0;
var positionInilScreen_second=-9000;
var distanceofMorrr;
var lightReflected_left=0;
var prstWidth_lightRflct=498;
var current_ray_startingPoints=540;
var focalLngthSliderVal_second=100;
var gt=$;
window.onload=function(){
	$(document).ready(function(){
	$("#chkbox").attr("disabled", true);
	popUp_msgArry=[gt.gettext("Image is not formed.")];
	screenDstnc_SliderFN(0);
	// $("#result_3").html();
	document.getElementById("expName").innerHTML=gt.gettext("Concave Mirror Focal Length by U-V Method");
	//Concave Mirror Focal Length by U-V Method
	//$("#firstSlierText").html(gt.gettext("Select the Focal length"));
	$("#firstSliderText").html(gt.gettext("Distance between mirror and object, u: "));
	$("#secondSliderText").html(gt.gettext("Distance between mirror and screen, v: "));
	$("#chr_three").html(gt.gettext("Show result"));
	$("#lightOnBtn").val(gt.gettext("Light ON"));
	$("#result_1").html(gt.gettext("Focal length of the mirror, <strong>f =")+ "uv/u+v =" +focalLngOfMrr+" cm</strong>");
	// $("#result_2").html(gt.gettext(", f = "));
	var reset_text=gt.gettext("Reset");
	$("#resetBtn").val(reset_text);
	//Light ON,OFF - function.
	$("#lightOnBtn").click(function(){
			
			if(lightFlag){
			screenDstnc_SliderFN(0);
				$("#first_section_svg").show();
				$("#lightOnBtn").val(gt.gettext("Light OFF"));
				lightFlag=false;
				calculation();
				mirrorDstnc_SliderFN();
				$("#focalLngthSlider").attr("disabled", true);
			}
			else{
				$("#first_section_svg").hide();
				$("#lightOnBtn").val(gt.gettext("Light ON"));
				 $("#crossImg").css({"opacity":"0"});
				lightFlag=true;	
				calculation();
			}
		});
		$("#zoomScale").css({"left":"-13400px"});
		$("#chkbox").change(function(){
		$("#resultBox").toggle();
})
	});

}
//blur function.
function blurFunction(){
	
	var vague = $("#crossImg").Vague({intensity:blurValue});
		vague.blur();
}
//Calculation 
var opacityVal=0;
	function calculation(){
		$("#chkbox").attr("disabled", true);
		$("#resultBox").hide();
		$('#chkbox').attr('checked', false);
		$("#crossImg").css({"opacity":"0"});

		//Distance between mirror and screen 
		var cmnDfrc=9.5;
		var negtvDistance=fixde_distnMrScreenV-cmnDfrc;
		var postvDistance=parseInt(10)+parseFloat(fixde_distnMrScreenV);
			if(negtvDistance<=zoomScaleReadingFnl && !lightFlag){
		  		var scaleDiffernce=(zoomScaleReadingFnl-negtvDistance)-1;
		 		opacityVal=parseFloat(0.1*scaleDiffernce);
				fnlopacityVal=opacityVal.toFixed(1);
				blurValuefnl=9-scaleDiffernce;
				if(fnlopacityVal>=-0.9 && fnlopacityVal<=1.0){
			  	$("#crossImg").css({"opacity":fnlopacityVal});
			  	blurValue=blurValuefnl.toFixed(0);
			  	blurFunction();
				if(fixde_distnMrScreenV == zoomScaleReadingFnl){
			  		$("#crossImg").css({"opacity":"1"});
			  		blurValue=0;
			  		blurFunction();
			  		$("#chkbox").attr("disabled", false);
			  		$("#result_1").html(gt.gettext("Focal length of the mirror, <strong>f = ")+" uv/u+v \n =  "+focalLngOfMrr+" cm</strong>");
			  	}
			  else if(zoomScaleReadingFnl >= fixde_distnMrScreenV){
			  var scaleDiffernceSecond=(postvDistance-zoomScaleReadingFnl);
			  var scaleDiffernceSecondFnl=scaleDiffernceSecond.toFixed(1);
			  var opacityValSecond=parseFloat(scaleDiffernceSecondFnl-8.1);
			  var opacityValSecondfnl=opacityValSecond.toFixed(1);
			  $("#crossImg").css({"opacity":opacityValSecondfnl});
			  	blurValue=3-opacityValSecondfnl;
			   	blurFunction();
			  }
		}
		}
		  else{
				blurValue=10;
				$("#crossImg").css({"opacity":"0"});
		  }

		}

/* //Focal length changing function.

function changeFocalLenght(){
	var focalLngthSliderVal = $('#focalLngthSlider').val();//getting the value of focal length using the slider change.
	focalLngOfMrr=focalLngthSliderVal;
	$("#chkbox").attr("disabled", true);
		$("#resultBox").hide();
		$('#chkbox').attr('checked', false);
	
} */
//Calculation

// Slider change function :Distance between mirror and object.
function mirrorDstnc_SliderFN(val){
	mirrorDstncValue = $('#mirrorDstnc_Slider').val();
	focalLngthSliderVal_second=parseFloat(mirrorDstncValue);
	var mirrorPosleftVal=parseInt(mirrorDstncValue)*2.94;
	$("#firstSliderValue").html(mirrorDstncValue+" cm");

	$("#concaveMirror").css({"left":141+mirrorPosleftVal+"px"});
	if(mirrorDstncValue<=38){
	$("#lightPass").css({"width":-12.5+parseInt(mirrorDstncValue)*2.75+"px"});

	}else{
		$("#lightPass").css({"width":-7+parseInt(mirrorDstncValue)*2.75+"px"});
	}
	

	$("#lightReflected").css({"width":148+parseInt(mirrorDstncValue)*3.5+"px","left":lightReflected_left+"px"});
	$("#lightReflected_Div").css({"width":161+parseInt(mirrorDstncValue)*2.85+"px"});
	prstWidth_lightRflct=$("#lightReflected").width();
	distanceofMorrr=distanMrr_objctU-1;
	var positionInilScreen_two=parseFloat(mirrorDstncValue)*-90;//Zoom sacle moving according to the range.
	positionInilScreen_second=positionInilScreen_two;
	$("#zoomScale").css({"left":-4400+positionInilScreen_second+"px"});
	$("#smallScale").css({"left":"-7px"});
	$("#crossImg").css({"opacity":"0"});
	screenDstnc_SliderFN(val);
	current_ray_startingPoints=540+parseInt(focalLngthSliderVal_second-100)*3;
	var init_position=280-mirrorDstncValue;
		var firstRay_points=[init_position,196,current_ray_startingPoints.toFixed(0),195,current_ray_startingPoints.toFixed(0),238];
		$("#firstRay").attr("points",firstRay_points);
 		if(((113-fixde_distnMrScreenV)*10*0.35+100).toFixed(0) == "-Infinity" || ((113-fixde_distnMrScreenV)*10*0.35+100).toFixed(0) == "Infinity" || ((113-fixde_distnMrScreenV)*10*0.35+100).toFixed(0) >500 ){
			 var centerRay_points=[current_ray_startingPoints.toFixed(0),195,0,214,0,35,0,130,0,214,current_ray_startingPoints.toFixed(0),238];
		}
		else{	
			var distance_point=(current_ray_startingPoints.toFixed(0)-fixde_distnMrScreenV*3);
			var X1=current_ray_startingPoints.toFixed(0);
			var Y1=195;
			var X2=distance_point;
			var Y2=214;
			var slope1=(Y2-Y1)/(X2-X1);
			var slope_X=0;
			var slope_y1=slope1*(slope_X-X1)+Y1;
			var slope2=(Y2-238)/(X2-X1);
			var slope_y2=slope2*(slope_X-X1)+238;
		 	// var centerRay_points=[current_ray_startingPoints.toFixed(0),60,((113-fixde_distnMrScreenV)*10*0.35+100).toFixed(0),75,0,35,0,130,((113-fixde_distnMrScreenV)*10*0.35+100).toFixed(0),75,current_ray_startingPoints.toFixed(0),90];
			var centerRay_points=[current_ray_startingPoints.toFixed(0),195,distance_point,214,0,slope_y2,0,slope_y1,distance_point,214,current_ray_startingPoints.toFixed(0),238];
		}
		 $("#centerRay_one").attr("points",centerRay_points);
}

// Slider change function :Distance between mirror and screen.
function screenDstnc_SliderFN(val){
	screenDstncValue = $('#screenDstnc_Slider').val();//Range value- Distance between mirror and screen.
	var positionInilScreen_one=parseInt(screenDstncValue)*2.98;// Screen moving according to the range.
	$("#whiteBoard").css({"left":positionInilScreen_one+"px"});
	var screenleftPos=$("#whiteBoard").position().left;
	$("#smallScale").css({"left":+parseInt(screenleftPos+(-7))+"px"})
	$("#zoomScale").css({"left":-4400+positionInilScreen_second+parseFloat(screenDstncValue)*90+"px"});
	$("#mask_rect_three").attr("x",parseInt(95+(positionInilScreen_one)))
	var lightReflected_left=parseInt(0+screenleftPos);
	$("#lightReflected").css({"left":lightReflected_left+"px"});
	$("#lightReflected").css({"width":10+parseInt(prstWidth_lightRflct-lightReflected_left*1.11)+"px"});
	// $("#lightReflected").css({"width":148+parseInt(mirrorDstncValue)*3.5+"px","left":lightReflected_left+"px"});
	var zoomScaleinil=parseFloat(mirrorDstncValue-screenDstncValue+50);
	zoomScaleReadingFnl=zoomScaleinil.toFixed(1);
	$("#secondSliderValue").html(zoomScaleReadingFnl+"cm")//Passing the vaule of "V" into the range text.
	var focalL_DstncU=parseInt(focalLngOfMrr)*parseInt(mirrorDstncValue); //Focal length of the mirror * Distance between mirror and object
	var dstncUMns_focalF=parseInt(mirrorDstncValue)-parseInt(focalLngOfMrr);//Distance between mirror and object - Focal length of the mirror 
	var distnMrr_screenV=focalL_DstncU/dstncUMns_focalF;
	fixde_distnMrScreenV=distnMrr_screenV.toFixed(1);
	var magnification=(fixde_distnMrScreenV/mirrorDstncValue);//Magnification, m=v/u
	var offset_WhiteBoard=$("#whiteBoard").offset();
	var widthOf_container=$("#crossImg_container").width();
	var heightOf_container=$("#crossImg_container").height();
	var half_width=widthOf_container/2;
	var half_height=heightOf_container/2;
	var cross_Left = $("#crossImg").position().left;
	var cross_Top = $("#crossImg").position().top;
	var current_leftPosition_double_lens=$("#concaveMirror").position().left;
	if(current_leftPosition_double_lens>=170.4 && !lightFlag){
		$("#first_section_svg").show();
	}
	else{
		$("#first_section_svg").hide();
	}
		if(magnification<1){
				$('#crossImg').css("transform","scale("+1+")").css("-moz-transform","scale("+1+")").css("-webkit-transform","scale("+1+")"); 	
				}
				else if(magnification>3.5){
					$('#crossImg').css("transform","scale("+3.5+")").css("-moz-transform","scale("+3.5+")").css("-webkit-transform","scale("+3.5+")"); 
				}
				else{
					// $("#crossImg").css({"width":14*magnification+"px","height":parseInt(34*magnification)+"px","top":"26px","left":"87px"});
				$('#crossImg').css("transform","scale("+1*magnification+")").css("-moz-transform","scale("+1*magnification+")").css("-webkit-transform","scale("+1*magnification+")");	
				}
	if(fixde_distnMrScreenV > 100 && !lightFlag){
			
			popUp_msg=popUp_msgArry[0];
			$("#popup").show();
			$("#crossImg").css({"opacity":"0"});
			$("#pop_msg").html(popUp_msg);
			var blurValue=11;
			$("#chkbox").attr("disabled", true);		
		}
		else if(fixde_distnMrScreenV <=0 && !lightFlag){
			popUp_msg=popUp_msgArry[0];
			$("#popup").show();
			$("#crossImg").css({"opacity":"0"});
			$("#pop_msg").html(popUp_msg);
			var blurValue=11;
			$("#chkbox").attr("disabled", false);		
		}
		else if(distanceofMorrr <fixde_distnMrScreenV  && !lightFlag){
			popUp_msg=popUp_msgArry[0];
		 	$("#popup").show();
		 	$("#crossImg").css({"opacity":"0"});
			$("#pop_msg").html(popUp_msg);
		 	var blurValue=11;
		 	$("#chkbox").attr("disabled", false);
		 }

		else{
			$("#popup").hide();
			calculation();			
		}
			var current_leftPosition_whitebrd=$("#whiteBoard").position().left;
			var current_leftPosition_double_lens=$("#concaveMirror").position().left;
		 var fixvalue=parseInt(50+mirrorDstncValue);
		 if(zoomScaleReadingFnl==fixvalue){
			$("#second_section_svg").css({"left":"-3px"});
		}
		
		
}