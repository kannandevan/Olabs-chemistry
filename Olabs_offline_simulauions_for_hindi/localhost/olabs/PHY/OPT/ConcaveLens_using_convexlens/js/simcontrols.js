var focalLenght_convex=10;
var distance_convex_lens_and_object_U1=15;
 var focalLenght_concave=Math.floor(Math.random() * 40) - 70;
//var focalLenght_concave=-44;
var distance_btw_object_lens_U=15;
var focal_length_combination_F=13.7;
var distance_btwn_lens_image_V;
var focalLngthSliderVal_second2=150;
var focalLngthSliderVal_second2_out=100;
var focalLngthSliderVal_second=15;
var lightFlag=true;
var opacityOfcross=-0.01;
var fnlopacityVal;
var blurValue;
var blurValue_2;
var blurValue_given;
var blurValue_2_given;
var blurFunction;
var distance_concave_lens_and_image_U2=5;
var distance_convex_lens_and_image_V1;
var set_lens_falg=false;
var first_section_result_flag=true;
var current_leftPosition_second_section_svg=-93;
var focalLngthSliderVal2=150;
var current_ray_startingPoints=450;
var cmnDiffenc=107;
var differValue;
var focal_point;
var gt=$;
var slider_text;
var slider_textSecond;
window.onload=function(){
	$("#rays_starting,#middleray,#endingray").hide();
	$("#chkbox,#set_lens,#insert_concave_button,#setSlider_id").attr("disabled", true);
	$("#resultBox").hide();
	$("#result_1").html(gt.gettext("Focal length of the concave lens, f2 = "+ focalLenght_concave +" cm"));
	$("#firstdrop_Text").html(gt.gettext("Select the method :"));
	$("#seconddrop_Text").html(gt.gettext("Select the concave lens:"));
	$("#first_range_text").html(gt.gettext("Distance between lens and object, U: 15 cm"));
	$("#third_range_text").html(gt.gettext("Distance between screen and convex lens, U1: 135.0 cm"));
	$("#setSlider_lbl").html(gt.gettext("Set the position of concave lens, V1: 5 cm "));
	$("#insert_concave_button").val(gt.gettext("Insert concave lens"));
	$("#second_range_text").html(gt.gettext("Distance between lens and screen, V: 135 cm"));
	$("#chr_three").html(gt.gettext("Show result"));
	$("#result_1").html(gt.gettext("Focal length of the concave lens, f2 = 10 cm"));
	$("#resetBtn").val(gt.gettext("Reset"));
	 $("#lightOnBtn").val(gt.gettext("Light ON"));
	$("#convex_focal_length").html(gt.gettext("Focal length of convex lens: 10 cm"));
	$("#alert_msg").html(gt.gettext("Image is not formed."));
	$("#alert_msg_2").html(gt.gettext("Image is not formed."));
	slider_text=gt.gettext("Distance between lens and object, U: ");
	slider_textSecond=gt.gettext("Distance between lens and screen, V: ");
	document.getElementById("expName").innerHTML=gt.gettext("Concave Lens-Focal Length");
	$(document).ready(function(){
		var selectMethod_array=[gt.gettext("Lens in contact"),gt.gettext("Lens out of contact")];/*List of methods */
		var select_concave_lens_array=[gt.gettext("Lens 1"),gt.gettext("Lens 2"),gt.gettext("Lens 3"),gt.gettext("Lens 4"),gt.gettext("Lens 5"),gt.gettext("Lens 6"),gt.gettext("Lens 7"),gt.gettext("Lens 8"),gt.gettext("Lens 9"),gt.gettext("Lens 10")];/*List of concave lens*/
		/*function for appending the drop-down menu*/
		function dropdown_function(getid,array_set){
				$.each(array_set, function(val, text) {
				getid.append(
				$('<option></option>').val(val).html(text)
					);
				});
			}
			/*calling the drop-down appending function */
			dropdown_function($("#selectMethod"),selectMethod_array);
			dropdown_function($("#select_concave_lens"),select_concave_lens_array);
			$("#chkbox").change(function(){
				$("#resultBox").toggle();
			});
			/*Changing the selectMethod drop-down menu*/
			$("#selectMethod").change(function(){
				var selectMethod_value=$("#selectMethod").find(':selected').val();
				if(selectMethod_value==1){
					$("#range_3,#range_4,#insert_concave_button,#lensOutOffContact_exp").show();
					$("#range_1,#range_2,#lensInContact_exp").hide();	
				}
				else{
					$("#range_3,#range_4,#range_5,#insert_concave_button,#lensOutOffContact_exp").hide();
					$("#range_1,#range_2,#lensInContact_exp").show();	
                }
			});
			$("#select_concave_lens").change(function(){
					focalLenght_concave=Math.floor(Math.random() * 40) - 70;
					calculation_lens_in_contact();
					$("#popup_large,#alert_msg,#popup_large_2,#alert_msg_2,#lens_single_1,#range_5").hide();
					$("#cross_img_one_2").css({"opacity":"0"});
					var centerRayPoints=[450,208,385,230,0,26,0,380,385,230,450,267];
					$("#centerRay_two").attr("points",centerRayPoints);
					$("#white_board_container_2").css({"left":"2px"})
					$("#first_pop_up_out").css({"left":"20px"})
					$("#pop_up_out_1").css({"left":"20px"})
					$("#mask_rect_two").attr("x",100)
					$("#focalLngthSlider_out").attr('value',150);
					$("#setSlider_id").attr('value',5);
					$("#setSlider_lbl").html(gt.gettext("Set the position of concave lens, V1: 5 cm "));
					distance_concave_lens_and_image_U2=5;
					$("#third_range_text").html(gt.gettext("Distance between screen and convex lens, U1: 135.0 cm"));
					$("#first_pop_up_out").html(150+" cm");
					$("#insert_concave_button,#setSlider_id").attr("disabled", true);
					$("#focalLngthSlider_out").attr("disabled", false);
					$("#lens_single_1").css({"left":"309px"})
					set_lens_falg=false;
					first_section_result_flag=true;
				});


			$("#lightOnBtn").click(function(){
				if(lightFlag){
					$("#lightOnBtn").val(gt.gettext("Light OFF"));
					lightFlag=false;
					$("#centerRay,#first_section_svg,#lens_image_line_1,#lens_image_line_2,#second_section_svg,#OutOffContactsecond_section_svg,#OutOffContactfirst_section_svg").show()
						calculation_lens_in_contact();
						calculation_out_conatct();
					}
				else{
					// $("#lightPass,#lightReflected").hide();
					$("#lightOnBtn").val("Light ON");
					 // $("#crossImg").css({"opacity":"0"});
					 $("#centerRay,#first_section_svg,#lens_image_line_1,#lens_image_line_2,#second_section_svg,#OutOffContactsecond_section_svg,#OutOffContactsecond_section_svgthree,#OutOffContactfirst_section_svg").hide()
					lightFlag=true;	
					$("#cross_img_one").css({"opacity":0})
					blurValue_given=1;
					blurFunction()
					$("#chkbox").attr("disabled", true);
					$("#resultBox").hide();
		 			$('#chkbox').attr('checked', false);
		 			$("#popup_large,#alert_msg").hide();
	 				$("#alert_msg").html(gt.gettext("Clear image is formed"));
					$("#cross_img_one_2").css({"opacity":"0"});
					$("#chkbox").attr("disabled", true);
					$("#resultBox,#popup_large_2,#alert_msg_2").hide();
				 	$('#chkbox').attr('checked', false);
				}
		});
					//blur function.
					blurFunction=function (){
						var vague = $("#cross_img_one").Vague({intensity:blurValue_given.toFixed(1)});
							vague.blur();
					}
					blurFunction_2=function (){
						var vague = $("#cross_img_one_2").Vague({intensity:blurValue_2_given.toFixed(1)});
							vague.blur();
					}
		});
}

/*First section range function*/
	function change_doubleLens(){
		var focalLngthSliderVal = $('#focalLngthSlider').val();//getting the value of focal length using the slider change.
		focalLngthSliderVal_second=parseFloat(focalLngthSliderVal);
		differValue=parseInt(focalLngthSliderVal2-focalLngthSliderVal_second)
		if(differValue<=10){
			// var currentSlidervalue = $('#focalLngthSlider').val();//getting the value of focal length using the slider change.
		 	$('#focalLngthSlider').attr("disabled", true);
		 	$("#focalLngthSlider").attr('value',focalLngthSliderVal_second-5);
		 	$('#focalLngthSlider').attr("disabled", false);	
		}
		
		else{

			var current_leftPosition_whitebrd=$("#white_board_container").position().left;
			var current_leftPosition_double_lens=$("#double_lens").position().left;
			$("#double_lens").css({"left":parseInt(355-(focalLngthSliderVal_second-15)*2.8)+"px"});
			$("#pop_up_2").css({"left":parseInt(383-(focalLngthSliderVal_second-15)*2.8)+"px"});
			$("#second_pop_up").css({"left":parseInt(384-(focalLngthSliderVal_second-15)*2.8)+"px"});
			$("#second_pop_up").html(focalLngthSliderVal+" cm");
			$("#first_range_text").html(slider_text + focalLngthSliderVal +" cm");
			distance_btw_object_lens_U=focalLngthSliderVal_second;
			calculation_lens_in_contact()
			$("#popup_large,#alert_msg").hide();
			$("#cross_img_one").css({"opacity":0});
			blurValue_given=0.3;
			blurValue=1
			$("#second_range_text").html(slider_textSecond+ parseFloat(focalLngthSliderVal2-focalLngthSliderVal_second).toFixed(1) +" cm");
			current_ray_startingPoints=parseInt(450-(focalLngthSliderVal_second-15)*2.8);

			var firstRay_points=[current_ray_startingPoints,210,480,232,current_ray_startingPoints,267];
			var firstRay_line_1=["M480", 232, current_ray_startingPoints,210];
			var firstRay_line_2=["M480", 232,current_ray_startingPoints,267];
			$("#firstRay").attr("points",firstRay_points);
	 		$("#lens_image_1").attr("d",firstRay_line_1);
	 		$("#lens_image_2").attr("d",firstRay_line_2);

		}

		
	}

	function change_screen_lens_in_contact(){
		focalLngthSliderVal2 = $('#focalLngthSlider2').val();//getting the value of focal length using the slider change.
		focalLngthSliderVal_second2=parseFloat(focalLngthSliderVal2);
		differValue=parseInt(focalLngthSliderVal2-focalLngthSliderVal_second)
		if(differValue<=10){
		// var currentSlidervalue = $('#focalLngthSlider').val();//getting the value of focal length using the slider change.
			$('#focalLngthSlider2').attr("disabled", true);
			$("#focalLngthSlider2").attr('value',focalLngthSliderVal_second2+5);
			$('#focalLngthSlider2').attr("disabled", false);			
	 }
else{

		var current_leftPosition_double_lens=$("#double_lens").position().left;
		$("#white_board_container").css({"left":parseInt(375-(focalLngthSliderVal_second2-10)*2.66)+"px"});
		$("#pop_up_1").css({"left":parseInt(393-(focalLngthSliderVal_second2-10)*2.66)+"px"});
		$("#first_pop_up").css({"left":parseInt(393-(focalLngthSliderVal_second2-10)*2.64)+"px"});
		
		$("#middleray").css({"left":parseInt(111-(focalLngthSliderVal_second2-150)*2.8)+"px","width":parseInt(330+(focalLngthSliderVal_second2-150)*0.5)+"px"});
		$("#endingray").css({"left":parseInt(79-(focalLngthSliderVal_second2-150)*2.8)+"px"});
		$("#first_pop_up").html(focalLngthSliderVal2+" cm");
		$("#second_range_text").html(slider_textSecond + parseFloat(focalLngthSliderVal2-focalLngthSliderVal_second).toFixed(1) +" cm");
		$("#mask_rect").attr("x",parseInt(100-(focalLngthSliderVal_second2-150)*2.8))
		calculation_lens_in_contact()
}
}
/* End -First section range function*/
	var opacityVal=0;
	function calculation_lens_in_contact(){
	$("#result_1").html(gt.gettext("Focal length of the concave lens, f2 = "+ focalLenght_concave +" cm"));
	/*"Focal length combination F = f1*f2/(f1+f2) cm"*/
	focal_length_combination_F=(focalLenght_convex*focalLenght_concave)/(focalLenght_convex+focalLenght_concave);
	/* "Distance between combination lens and image V distance_btwn_lens_image_V = UF/U-F" */
	distance_btwn_lens_image_V = (distance_btw_object_lens_U*focal_length_combination_F)/(distance_btw_object_lens_U-focal_length_combination_F)+parseInt(focalLngthSliderVal_second);
	console.log('distance_btwn_lens_image_V :'+distance_btwn_lens_image_V);
	focal_point=((140-distance_btwn_lens_image_V)*10*0.299+107).toFixed(0);
	console.log('focal_point :'+focal_point);
	var X1=current_ray_startingPoints;
	var Y1=210;
	var X2=focal_point;
	var Y2=230;
	var slope1=(Y2-Y1)/(X2-X1);
	var slope_X=0;
	var slope_y1=slope1*(slope_X-X1)+Y1;
	var slope2=(Y2-267)/(X2-X1);
	var slope_y2=slope2*(slope_X-X1)+267;
	var centerRayPoints=[current_ray_startingPoints,210,focal_point,230,0,slope_y2,0,slope_y1,focal_point,230,current_ray_startingPoints,267];
	var center_ray_line_1=["M"+current_ray_startingPoints, 210, focal_point,230];
	var center_ray_line_2=["M"+current_ray_startingPoints, 267,focal_point,230];

// M450, 232, 107,230,107,21
// M450, 267,107,230,107,101
$("#centerRay").attr("points",centerRayPoints);
$("#centerRay_image_1").attr("d",center_ray_line_1);
$("#centerRay_image_2").attr("d",center_ray_line_2);
console.log('distance_btwn_lens_image_V :'+distance_btwn_lens_image_V);
console.log('focalLngthSliderVal_second :'+parseInt(focalLngthSliderVal_second+15));

if(distance_btwn_lens_image_V <=parseInt(focalLngthSliderVal_second+15)){

$("#centerRay,#centerRay_image_1,#centerRay_image_2").hide();
	$("#alert_msg_1").html(gt.gettext("Image is not formed."));
	$("#popup_large_1,#alert_msg_1").show();
}
else{

$("#centerRay,#centerRay_image_1,#centerRay_image_2").show();
	// $("#alert_msg").html(gt.gettext("Image is not formed."));
	// $("#popup_large,#alert_msg").show();	

		$("#alert_msg_1").html(gt.gettext("Image is not formed."));
	$("#popup_large_1,#alert_msg_1").hide();
}


			if(distance_btwn_lens_image_V>151 || distance_btwn_lens_image_V<10){
				$("#alert_msg").html(gt.gettext("Image is not formed."));
				$("#popup_large,#alert_msg").show();
			}else{
				$("#popup_large,#alert_msg").hide();
				$("#alert_msg").html(gt.gettext("Image is not formed."));
			}
			if(distance_btwn_lens_image_V<distance_btw_object_lens_U){
				$("#popup_large,#alert_msg").show();
				
			}else{
				var negativeDistance =distance_btwn_lens_image_V-1;
				var positiveDistance =distance_btwn_lens_image_V+1;
				if(positiveDistance.toFixed(1)>=focalLngthSliderVal_second2 && !lightFlag){
			    	var scaleDiffernce=(focalLngthSliderVal_second2-positiveDistance);
					opacityVal=parseFloat(-0.0*scaleDiffernce.toFixed(1));
			    	fnlopacityVal=opacityVal.toFixed(1);
				 	if(Math.abs(scaleDiffernce.toFixed(1))>=-0.9 && Math.abs(scaleDiffernce.toFixed(1))<=1.0){
				 		$("#cross_img_one").css({"opacity":0.6})
				 		blurValue_given=0.3;
						blurValue=1-Math.abs(scaleDiffernce.toFixed(1));
				 		if(blurValue.toFixed(1)==0){
				 			$("#chkbox").attr("disabled", false);
							$("#resultBox").hide();
				 			$('#chkbox').attr('checked', false);
				 			// $("#popup_large,#alert_msg").show();
				 			// $("#alert_msg").html(gt.gettext("Clear image is formed"));
				 			$("#cross_img_one").css({"opacity":1})
				 			blurValue_given=0;
							}
				 		else{
				 			$("#chkbox").attr("disabled", true);
							$("#resultBox").hide();

				 		}
				 		blurFunction()
				 	}
				 	if(Math.abs(scaleDiffernce.toFixed(1))>=1.1 && Math.abs(scaleDiffernce.toFixed(1))<=2){
				 			$("#chkbox").attr("disabled", true);
							$("#resultBox").hide();
				 			$('#chkbox').attr('checked', false);
							var opacityValSecond=Math.abs(scaleDiffernce.toFixed(1))-2;
							$("#cross_img_one").css({"opacity":0.6})
				 		 blurValue=1-Math.abs(opacityValSecond.toFixed(1));
				 		 blurValue_given=0.3;
				 		 blurFunction()
				 	}else if(Math.abs(scaleDiffernce.toFixed(1))>=2){
						$("#cross_img_one").css({"opacity":"0"});
						$("#chkbox").attr("disabled", true);
						$("#resultBox").hide();
				 		$('#chkbox').attr('checked', false);
				 	}
			}
				else{
					$("#cross_img_one").css({"opacity":"0"});
					$("#chkbox").attr("disabled", true);
					$("#resultBox").hide();
				 	$('#chkbox').attr('checked', false);
				}
			/*"Magnification = V/U"*/ magnification=distance_btwn_lens_image_V/distance_btw_object_lens_U;

			if(magnification<1){
				$('#cross_img_one').css("transform","scale("+1+")").css("-moz-transform","scale("+1+")").css("-webkit-transform","scale("+1+")"); 	
				}
				else if(magnification>3.5){
					$('#cross_img_one').css("transform","scale("+3.5+")").css("-moz-transform","scale("+3.5+")").css("-webkit-transform","scale("+3.5+")"); 
				}
				else{
					// $("#crossImg").css({"width":14*magnification+"px","height":parseInt(34*magnification)+"px","top":"26px","left":"87px"});
				$('#cross_img_one').css("transform","scale("+1*magnification+")").css("-moz-transform","scale("+1*magnification+")").css("-webkit-transform","scale("+1*magnification+")");	
				}
			}
			}
			/*Second section range function*/
		function change_screen_lens_out_contact(){
		focalLngthSliderVal2_out= $('#focalLngthSlider_out').val();//getting the value of focal length using the slider change.
		focalLngthSliderVal_second2_out=parseFloat(focalLngthSliderVal2_out);
		$("#focalLngthSlider_out_second").attr('value',focalLngthSliderVal_second2_out);
		 if((focalLngthSliderVal2_out-15).toFixed(1)<=11){
		 	$('#focalLngthSlider_out').attr("disabled", true);
		 	$("#focalLngthSlider_out").attr('value',focalLngthSliderVal_second2_out+5);
		 	$('#focalLngthSlider_out').attr("disabled", false);			
		 }
		 else{
		 $("#white_board_container_2").css({"left":parseInt(375-(focalLngthSliderVal_second2_out-10)*2.66)+"px"});
		$("#pop_up_out_1").css({"left":parseInt(393-(focalLngthSliderVal_second2_out-10)*2.66)+"px"});
		$("#first_pop_up_out").css({"left":parseInt(393-(focalLngthSliderVal_second2_out-10)*2.64)+"px"});
		$("#first_pop_up_out").html(focalLngthSliderVal2_out+" cm");
		$("#third_range_text").html(gt.gettext("Distance between screen and convex lens, U1: "+ (focalLngthSliderVal2_out-15).toFixed(1) +" cm"));
		$("#mask_rect_two").attr("x",parseInt(100-(focalLngthSliderVal2_out-150)*2.75));

		 if(!set_lens_falg){
		 	second_focal_first_image()
		 	}
		 	calculation_out_conatct();

		 }
		}
	var opacityVal_2=0;
	function second_focal_first_image(){
		distance_convex_lens_and_image_V1 =(distance_convex_lens_and_object_U1*focalLenght_convex)/(distance_convex_lens_and_object_U1-focalLenght_convex)+15;
	}
	function calculation_out_conatct(){
	var negativeDistance_2 =distance_convex_lens_and_image_V1-1;
		var positiveDistance_2 =distance_convex_lens_and_image_V1+1;
		if(positiveDistance_2.toFixed(1)>=focalLngthSliderVal_second2_out & !lightFlag){
	    	var scaleDiffernce=(focalLngthSliderVal_second2_out-positiveDistance_2);
			opacityVal_2=parseFloat(0.1*scaleDiffernce.toFixed(1));
	    	fnlopacityVal_2=opacityVal_2.toFixed(1);
		 	if(Math.abs(scaleDiffernce.toFixed(1))>=-0.9 && Math.abs(scaleDiffernce.toFixed(1))<=1.0){
				$("#cross_img_one_2").css({"opacity":0.6})
				blurValue_2=1-Math.abs(scaleDiffernce.toFixed(1));
				blurValue_2_given=0.3;
		 		if(blurValue_2.toFixed(1)==0){
		 			if(first_section_result_flag){
						$("#set_lens,#insert_concave_button").attr("disabled", false);
						// $("#alert_msg_2").html(gt.gettext("Clear image is formed"));
						blurValue_2_given=0;
						$("#cross_img_one_2").css({"opacity":1})
						// $("#popup_large_2,#alert_msg_2").show();
		 			}
		 			else{
					$("#chkbox").attr("disabled", false);
					$("#resultBox").hide();
		 			$('#chkbox').attr('checked', false);
		 			// $("#popup_large_2,#alert_msg_2").show();
		 			blurValue_2_given=0;
						$("#cross_img_one_2").css({"opacity":1})
		 			}
		 			}
		 		else{
		 			$("#set_lens,#insert_concave_button").attr("disabled", true);
		 			$("#chkbox").attr("disabled", true);
					$("#resultBox").hide();
		 			$('#chkbox').attr('checked', false);
		 			// $("#alert_msg_2").html(gt.gettext("Clear image is formed"));
		 		 	// $("#popup_large_2,#alert_msg_2").hide();
		 		 	blurValue_2_given=0.3;
						$("#cross_img_one_2").css({"opacity":0.6})
		 		}
		 		blurFunction_2()
	 	}
	 	if(Math.abs(scaleDiffernce.toFixed(1))>=1.1 && Math.abs(scaleDiffernce.toFixed(1))<=2){
	 		$("#set_lens,#insert_concave_button").attr("disabled", true);
	 		$("#chkbox").attr("disabled", true);
	 		 
			$("#resultBox").hide();
	 		$('#chkbox').attr('checked', false);
			var opacityValSecond=Math.abs(scaleDiffernce.toFixed(1))-2;
	 		$("#cross_img_one_2").css({"opacity":0.6});
	 		blurValue_2_given=0.3;
	 		 blurValue_2=1-Math.abs(opacityValSecond.toFixed(1));
	 		 blurFunction_2()
	 		 $("#popup_large_2,#alert_msg_2").hide();
	 	}else if(Math.abs(scaleDiffernce.toFixed(1))>=2){
			$("#cross_img_one_2").css({"opacity":"0"});
			$("#set_lens,#insert_concave_button").attr("disabled", true);
			$("#chkbox").attr("disabled", true);
			
			$("#resultBox").hide();
	 		$('#chkbox').attr('checked', false);
	 		if(distance_convex_lens_and_image_V1>150){
			$("#alert_msg_2").html(gt.gettext("Image is not formed."));
			$("#popup_large_2,#alert_msg_2").show();
			}else{
				$("#popup_large_2,#alert_msg_2").hide();
			}
				}
			}
			else{

				$("#cross_img_one_2").css({"opacity":"0"});
				$("#chkbox").attr("disabled", true);
				$("#resultBox").hide();
			 	$('#chkbox').attr('checked', false);
			}
	/*"Magnification = V/U"*/ magnification_2=distance_convex_lens_and_image_V1/distance_convex_lens_and_object_U1;

		if(magnification_2<1){
				
			//$("#crossImg").css({"width":"14px","left":"16px","top":"9px"});
			$('#cross_img_one_2').css("transform","scale("+1+")").css("-moz-transform","scale("+1+")").css("-webkit-transform","scale("+1+")"); 	

			}
			else if(magnification_2>3.5){
			$('#cross_img_one_2').css("transform","scale("+3.5+")").css("-moz-transform","scale("+3.5+")").css("-webkit-transform","scale("+3.5+")"); 
			}
			else{
			$('#cross_img_one_2').css("transform","scale("+1*magnification_2+")").css("-moz-transform","scale("+1*magnification_2+")").css("-webkit-transform","scale("+1*magnification_2+")");	
			}	
		}

			function setSlider(){
				var setSliderValue = $('#setSlider_id').val();//getting the value of focal length using the slider change.
					setSliderValue_second=parseFloat(setSliderValue);
					distance_concave_lens_and_image_U2=setSliderValue_second;
					$("#lens_single_1").css({"left":parseInt(309+(setSliderValue_second)-5)+"px"});
					$("#setSlider_lbl").html(gt.gettext("Set the position of concave lens, V1: "+ setSliderValue_second +"cm "));

					$("#fifth_range_text").html(gt.gettext("Distance between screen (image 2) and concave lens  : "+ setSliderValue_second +" cm"));
					$("#cross_img_one_2").css({"opacity":"0"});
					second_focal_first_image()
					blurValue_2=1;
					blurFunction_2();
					second_focal();
					}
			function insert_slider(){
				$("#lens_single_1,#range_5").show();
				$("#cross_img_one_2").css({"opacity":"0"});
				blurValue_2=1;
				blurFunction_2();
				second_focal();
				set_lens_falg=true;
				first_section_result_flag=false;
				$("#insert_concave_button,#focalLngthSlider_out").attr("disabled", true);
				$("#setSlider_id").attr("disabled", false);
				$("#popup_large_2,#alert_msg_2").hide();
			}


			function second_focal(){
				var distance_concave_lens_and_image_V=(distance_concave_lens_and_image_U2*focalLenght_concave)/(distance_concave_lens_and_image_U2+focalLenght_concave);
				
				distance_convex_lens_and_image_V1=distance_convex_lens_and_image_V1+parseFloat(distance_concave_lens_and_image_V-distance_concave_lens_and_image_U2);	
				var X1=450;
				var Y1=208;
				var X2=((141-distance_convex_lens_and_image_V1)*10*0.299+100).toFixed(0);
				var Y2=230;
				var slope1=(Y2-Y1)/(X2-X1);
				var slope_X=0;
				var slope_y1=slope1*(slope_X-X1)+Y1;
				var slope2=(Y2-267)/(X2-X1);
				var slope_y2=slope2*(slope_X-X1)+267;
				var centerRayPoints=[450,208,((141-distance_convex_lens_and_image_V1)*10*0.299+100).toFixed(0),230,0,slope_y2,0,slope_y1,((141-distance_convex_lens_and_image_V1)*10*0.299+100).toFixed(0),230,450,267];
				$("#centerRay_two").attr("points",centerRayPoints);
			}

			function change_screen_lens_out_contact_two(){
			var focalLngthSliderVal_second2_outValue = $('#focalLngthSlider_out_second').val();//getting the value of focal length using the slider change.
				focalLngthSliderVal_second2_out=parseFloat(focalLngthSliderVal_second2_outValue);
		if(focalLngthSliderVal_second2_outValue<45){
			 	$('#focalLngthSlider_out_second').attr("disabled", true);
			 	$("#focalLngthSlider_out_second").attr('value',45);
			 	$('#focalLngthSlider_out_second').attr("disabled", false);			
		 }
		 else{
		 		$("#fifth_range_text").html(gt.gettext("Distance between screen (image 2) and concave lens  : "+ parseFloat(distance_concave_lens_and_image_U2+((focalLngthSliderVal_second2_outValue-15)-30)).toFixed(1) +" cm"));
				$("#white_board_container_2").css({"left":parseInt(375-(focalLngthSliderVal_second2_outValue-10)*2.66)+"px"});
				$("#pop_up_out_1").css({"left":parseInt(393-(focalLngthSliderVal_second2_outValue-10)*2.66)+"px"});
				$("#first_pop_up_out").css({"left":parseInt(393-(focalLngthSliderVal_second2_outValue-10)*2.64)+"px"});
				$("#first_pop_up_out").html(focalLngthSliderVal_second2_outValue+" cm");
				$("#mask_rect_two").attr("x",parseInt(100-(focalLngthSliderVal_second2_outValue-150)*2.75));
			 	if(!set_lens_falg){
		 			second_focal_first_image()
		 		}
		 		calculation_out_conatct();

		 }
}

