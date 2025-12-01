//*--Ready function---------
var c,ctx;
var gt=$;
var control_labels,control_values,mirror_type_options,mirror_type;
var lens_position,screen_position,mirror_position;
var mirror_flength,lens_center,zoom_blur_val;
var obj_lens_points,lens_image_distance;
var screeb_left, mirror_position_v;
var light_on,_img_on_screen,magnification;
var img_width,img_height,mirror_placed;
function lensPosition(value){
	lens_position = parseFloat(value);
	lens_image_distance = (20 * lens_position) / (lens_position - 20);
	$("#lens_position_val").html(lens_position+" cm");
	$("#lens_reading_txt").html(lens_position+"cm");
	var _left = 27 + lens_position * 2.62;
	$("#lens_under").css({'left':_left+'px'});
	$("#lens_top").css({'left':(_left + 62.8)+'px'});
	$("#lens_reading").css({'left':(_left + 26)+'px'});
	lens_center = 50 + 2.62 * (lens_position - 10);
	obj_lens_points = [20,58,lens_center,42,lens_center,90,20,68];
	obj_lens_d1 = ['M'+20,58,'l'+(lens_center-20), -16];
	obj_lens_d2 = ['M'+20,68,'l'+(lens_center-20), 22];
	$("#object_lens").attr("points",obj_lens_points);
	//$("#object_lens_line_1").attr("d",obj_lens_d1);
	//$("#object_lens_line_2").attr("d",obj_lens_d2);
	if(lens_position >=24){
		if(light_on){
			//$("#lens_image,#lens_image_line_1,#lens_image_line_2,#maks_module,#use_1,#use_2").show();
			$("#lens_image").css({'visibility':'visible'});
			//$("#lens_image_line_1").css({'visibility':'visible'});
			//$("#lens_image_line_2").css({'visibility':'visible'});
			$("#maks_module").css({'visibility':'visible'});
			$("#use_1").css({'visibility':'visible'});
			$("#use_2").css({'visibility':'visible'});
		}
		setBeamPoints();
		$("#lens_image").attr("points",lens_img_points);
		//$("#lens_image_line_1").attr("d",lens_img_d1);
		//$("#lens_image_line_2").attr("d",lens_img_d2);
	}else{
		lens_img_points = [lens_center,42,417,42,417,90,lens_center,90];
		lens_img_d1 = ['M'+lens_center,42,'l417',0];
		lens_img_d2 = ['M'+lens_center,90,'l417',0];
		$("#lens_image").attr("points",lens_img_points);
		//$("#lens_image_line_1").attr("d",lens_img_d1);
		//$("#lens_image_line_2").attr("d",lens_img_d2);
	}
	var _img_on_screen = lens_center + lens_image_distance * 2.62;
	var _blur_val = 10;
	if( screeb_left >= (_img_on_screen - 20) && screeb_left <= (_img_on_screen + 20) && light_on && lens_position >=24){
		$("#cross_zoom").show();
		if((screen_position - lens_position) == lens_image_distance.toFixed(1)){
			_blur_val = 0;
			$("#convex_mirror_btn").attr('disabled',false);
		}else{
			$("#convex_mirror_btn").attr('disabled',true);
			_blur_val = screen_position - (lens_position + lens_image_distance);
			_blur_val = _blur_val > 0 ? _blur_val: _blur_val * -1;
			if(_blur_val<1){_blur_val=1;}
		}
		$("#cross_zoom").css({	'-webkit-filter': 'blur('+(_blur_val)+'px)','-moz-filter': 'blur('+(_blur_val)+'px)','-o-filter': 'blur('+(_blur_val)+'px)',
								'-ms-filter': 'blur('+(_blur_val)+'px)','filter': 'blur('+(_blur_val)+'px)'
							})
	}else{
		$("#cross_zoom").hide();
	}
}
function setBeamPoints(){
	m1 = 24 / (lens_image_distance*2.62); /*------ m = (y2 -y1) / (x2 - x1) --------*/
	m2 = -24 / (lens_image_distance*2.62); /*------ m = (y2 -y1) / (x2 - x1) --------*/
	y1 = (m1 * ( 417 - (lens_center) )) + 42;/*--- line top to downwards ---*/
	y2 = (m2 * ( 417 - (lens_center) )) + 90;/*--- line downwards to top ---*/

	console.log("M:"+y1,y2)
	lens_img_points = [lens_center,42,lens_center+(lens_image_distance*2.62),66,417,y2,417,y1,lens_center+(lens_image_distance*2.62),66,lens_center,90];
	lens_img_d1 = ['M'+lens_center,42,'l417',y2];
	lens_img_d2 = ['M'+lens_center,90,'l417',y1];
	
}
function mirrorPosition(value){
	mirror_position = parseFloat(value);
	$("#mirror_position_val").html(mirror_position+" cm");
	var mirror_left = 27 + mirror_position * 2.62; /** 27 is the initial position of reading, i.e zero reading of scale located at 27px from left */
	$("#mirror").css({'left':mirror_left+'px'});
	$("#mirror_reading").css({'left':(mirror_left + 26)+'px'});
	$("#mirror_reading_txt").html(mirror_position+"cm");
	$("#mask_area").attr({'width':((mirror_position * 2.62)-25)+'px'});
	if(mirror_position > (screen_position-8)){
		$("#mirror_position").attr('disabled',true);
		$("#mirror_position").attr('value',screen_position-9);
		$("#mirror_position").attr('disabled',false);
		$("#mirror_position_val").html($("#mirror_position").attr('value')+" cm");
		$("#mirror_reading_txt").html($("#mirror_position").attr('value')+"cm");
		mirror_left = 27 + (screen_position-9) * 2.62;
		$("#mirror").css({'left':mirror_left+'px'});
		$("#mirror_reading").css({'left':(mirror_left + 26)+'px'});
		$("#mask_area").attr({'width':((parseFloat($("#mirror_position").attr('value')) * 2.62)-25)+'px'});
	}
	
	mirror_img_points = [26,63,(mirror_left-30),78,(mirror_left-30),100];
	//mirror_img_d1 = ['M'+26,63,'l'+(mirror_left-60), 5];
	//mirror_img_d2 = ['M'+26,63,'l'+(mirror_left-60), 47];
	$("#mirror_img").attr("points",mirror_img_points);
	//$("#mirror_img_line_1").attr("d",mirror_img_d1);
	//$("#mirror_img_line_2").attr("d",mirror_img_d2);
	if( mirror_position_v >= ((mirror_position- lens_position) - 10) && mirror_position_v <= ((mirror_position- lens_position) + 10) && light_on){
		$("#cross_image").show();
		if(mirror_position_v.toFixed(1) == (mirror_position- lens_position).toFixed(1)){
			_blur_val = 0;$("#popup_img").show();
		}else{
			$("#popup_img").hide();
			_blur_val = mirror_position_v - (mirror_position- lens_position);			
			_blur_val = _blur_val > 0 ? _blur_val: _blur_val * -1; 
		}
		$("#cross_image").css({	'-webkit-filter': 'blur('+(_blur_val)+'px)','-moz-filter': 'blur('+(_blur_val)+'px)','-o-filter': 'blur('+(_blur_val)+'px)',
								'-ms-filter': 'blur('+(_blur_val)+'px)','filter': 'blur('+(_blur_val)+'px)'
							})
	}else{
		$("#cross_image").hide();
	}
	if(mirror_position_v < 0 || mirror_position_v > (screen_position - lens_position)){
		$("#popup_img_txt").html(gt.gettext("Image is not formed"));
		$("#popup").attr("src",simPath+"/images/popup_alert.png");
		$("#popup_img").show();
	}else{
		//console.log(mirror_position_v , (screen_position - lens_position))
	}
	
}
function screenPosition(value){
	screen_position = parseFloat(value);
	$("#screen_position_val").html(screen_position+" cm");
	screeb_left = 24.38 + screen_position * 2.62;/** 27 is the initial position of reading, i.e zero reading of scale located at 27px from left */
	$("#screen_right").css({'left':screeb_left+'px'});
	$("#zoom_view").css({'left':(screeb_left-40)+'px'});
	$("#screen_reading").css({'left':(screeb_left + 23)+'px'});
	$("#screen_reading_txt").html(screen_position+"cm");
	_img_on_screen = lens_center + lens_image_distance * 2.62;
	zoom_blur_val = 10;
	if( screeb_left >= (_img_on_screen - 20) && screeb_left <= (_img_on_screen + 20) && light_on){
		$("#cross_zoom").show();
		if((screen_position - lens_position).toFixed(1) == lens_image_distance.toFixed(1)){
			zoom_blur_val = 0;
			$("#convex_mirror_btn").attr('disabled',false);
		}else{
			$("#convex_mirror_btn").attr('disabled',true);
			zoom_blur_val = screen_position - (lens_position + lens_image_distance);
			zoom_blur_val = zoom_blur_val > 0 ? zoom_blur_val: zoom_blur_val * -1;
			if(zoom_blur_val<1){zoom_blur_val=1;}
		}
		$("#cross_zoom").css({	'-webkit-filter': 'blur('+(zoom_blur_val)+'px)','-moz-filter': 'blur('+(zoom_blur_val)+'px)','-o-filter': 'blur('+(zoom_blur_val)+'px)',
								'-ms-filter': 'blur('+(zoom_blur_val)+'px)','filter': 'blur('+(zoom_blur_val)+'px)'
							})
	}else{
		$("#cross_zoom").hide();
	}
	$("#mask_area").attr({'width':((screen_position * 2.62)-10)+'px'});
}
window.onload = function() { 

	document.getElementById("expName").innerHTML=gt.gettext("Focal Length of a Convex Mirror");
	control_labels=[gt.gettext("Select mirror"),gt.gettext("Insert convex lens"),gt.gettext("Position of lens(u):"),gt.gettext("Position of screen:"),gt.gettext("Insert convex mirror"),gt.gettext("Position of mirror:"),gt.gettext("Light ON"),gt.gettext("Light OFF"),gt.gettext("Show answer"),gt.gettext("Hide answer"),gt.gettext("Reset")];
	control_values=[10,50,70,150,55,140];
	mirror_type_options = [];
	mirror_flength = [];
	for(i=1; i<=10; i++){
		mirror_type_options[i-1] = gt.gettext("Mirror ")+i;
		var _random_val = Math.floor(Math.random() * ( (i*3) - ( (i*3)-3 ) + 1)) + ( (i*3)-3 );
		mirror_flength[(i-1)] = 10 + _random_val;
	}
	function initVariables(){
		lens_center = 50;
		lens_image_distance = -20;
		lens_position = control_values[0]; /** value of css left attribute of magnet image */
		screen_position = control_values[3];
		mirror_position = control_values[4];
		mirror_type = 0;
		light_on = false;
		screeb_left = 24.38 + screen_position * 2.62;
		img_width = 14;
		img_height = 27;
		mirror_placed = false;
		zoom_blur_val = 10;
	}
	initVariables();
	$(document).ready(function() {
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		addLabel();
		addintoDropDown( $('#mirror_type'),mirror_type_options);
		
		//combo_sliderchange();
		function addLabel(){//Function for adding label for all controls---	
			$('#mirror_type_lbl').html(control_labels[0]);
			$('#convex_lens_btn').attr('value',control_labels[1]);
			$('#lens_position_lbl').html(control_labels[2]);
			$('#lens_position_val').html(lens_position+" cm");
			$('#lens_position_min_lbl').html(control_values[0]);
			$('#lens_position_max_lbl').html(control_values[1]);
			$('#screen_position_lbl').html(control_labels[3]);
			$('#screen_position_val').html(screen_position+" cm");
			$('#screen_position_min_lbl').html(control_values[2]);
			$('#screen_position_max_lbl').html(control_values[3]);
			$('#convex_mirror_btn').attr('value',control_labels[4]);
			$('#mirror_position_lbl').html(control_labels[5]);
			$('#mirror_position_val').html(mirror_position+" cm");
			$('#mirror_position_min_lbl').html(control_values[4]);
			$('#mirror_position_max_lbl').html(control_values[5]);
			$('#light_on_off').attr('value',control_labels[6]);
			$('#reload').attr('value',control_labels[10]);
			$('#answer_flength').html(gt.gettext("Focal length of convex mirror: ")+mirror_flength[mirror_type]+"cm");
			$('#show_hide_txt').html( gt.gettext("Show result ") );
			$("#popup_img_txt").html(gt.gettext("Clear image is formed"));
		}
		function addintoDropDown(getId,valueSet){//Function for adding option in combo box---		
			var selected = getId;
			$.each(valueSet, function(val, text) {
			selected.append($('<option></option>').val(val).html(text));});			
		}
		$("#mirror_type").change(function(){	//on change function of combo box.
			Resetitems(); 
			mirror_type=$(this).find('option:selected').val();
			$('#answer_flength').html(gt.gettext("Focal length of convex mirror: ")+mirror_flength[mirror_type]+"cm");
			$("#popup_img").hide();
		});
		$("#convex_mirror_btn").click(function(){	//on change function of combo box. 
			mirror_placed=true;
			$("#convex_mirror_btn").attr('disabled',true);
			$("#mirror_position").attr('disabled',false);
			$("#lens_position").css({'opacity':0.4});
			$("#show_hide").attr('disabled',false);
			$("#lens_position").attr('disabled',true);
			$("#screen_position").css({'opacity':0.4});
			$("#screen_position").attr('disabled',true);
			$("#mirror_position").css({'opacity':'1'});
			$("#mirror,#light_mirror_img,#mirror_reading").show();
			$("#cross_zoom,#white_spot,#zoom_view").hide();
			$("#mask_area").attr({'width':((mirror_position * 2.62)-25)+'px'});
			mirror_position_v = lens_image_distance - (2 * mirror_flength[mirror_type]);
			magnification = lens_image_distance/lens_position;
			$("#cross_image").css({'left':(140 - magnification*2)+'px','top':(190 - magnification*2)+'px','width':(img_width+magnification*4)+'px','height':(img_height+magnification*4)+'px'})
		});
		$("#convex_lens_btn").click(function(){	//on change function of combo box. 
			$("#convex_lens_btn").attr('disabled',true);
			$("#lens_top,#lens_under,#lens_reading").show();
			$("#lens_position").attr('disabled',false);
			$("#light_on_off").attr('disabled',false);
			$("#lens_position").css({'opacity':'1'});
		});
		$("#light_on_off").click(function(){	//on change function of combo box. 
			setBeamPoints();
			if($('#light_on_off').attr('value') == control_labels[6]){
				light_on = true;//$("#light_beam").show();
				$('#light_on_off').attr('value',control_labels[7]);
				$("#object_lens, #object_lens_line").show();
				lens_center = 50 + 2.62 * (lens_position - 10);
				obj_lens_points = [20,58,lens_center,42,lens_center,90,20,68];
				obj_lens_d1 = ['M'+20,58,'l'+(lens_center-20), -16];
				obj_lens_d2 = ['M'+20,68,'l'+(lens_center-20), 22];
				$("#object_lens").attr("points",obj_lens_points);
		//		$("#object_lens_line_1").attr("d",obj_lens_d1);
		//		$("#object_lens_line_2").attr("d",obj_lens_d2);
				$("#light_beam").css({'visibility':'visible'});
				$("#white_spot").show();
				if(lens_position >=24){
					$("#lens_image").css({'visibility':'visible'});
				//	$("#lens_image_line_1").css({'visibility':'visible'});
				//	$("#lens_image_line_2").css({'visibility':'visible'});
					$("#maks_module").css({'visibility':'visible'});
					$("#use_1").css({'visibility':'visible'});
					$("#use_2").css({'visibility':'visible'});
					$("#lens_image").attr("points",lens_img_points);
				//	$("#lens_image_line_1").attr("d",lens_img_d1);
				//	$("#lens_image_line_2").attr("d",lens_img_d2);
					
				}else{
					lens_img_points = [lens_center,42,417,42,417,90,lens_center,90];
					lens_img_d1 = ['M'+lens_center,42,'l417',0];
					lens_img_d2 = ['M'+lens_center,90,'l417',0];
					$("#lens_image").css({'visibility':'visible'});
					//$("#lens_image_line_1").css({'visibility':'visible'});
					//$("#lens_image_line_2").css({'visibility':'visible'});
					$("#maks_module").css({'visibility':'visible'});
					$("#use_1").css({'visibility':'visible'});
					$("#use_2").css({'visibility':'visible'});
					$("#lens_image").attr("points",lens_img_points);
					//$("#lens_image_line_1").attr("d",lens_img_d1);
					//$("#lens_image_line_2").attr("d",lens_img_d2);
				}
				
				if( mirror_position_v >= ((mirror_position- lens_position) - 10) && mirror_position_v <= ((mirror_position- lens_position) + 10)){$("#cross_image").show();}
				if(mirror_placed){$("#light_mirror_img").show();}
				if( screeb_left >= (_img_on_screen - 20) && screeb_left <= (_img_on_screen + 20) && lens_position>control_values[0] && !mirror_placed){$("#cross_zoom, #white_spot").show();}
				if(screen_position == (lens_position + lens_image_distance)){$("#convex_mirror_btn").attr('disabled',false);}
				if(zoom_blur_val == 0 && !mirror_placed){$("#convex_mirror_btn").attr('disabled',false);}
			}else{
				light_on = false;
				$('#light_on_off').attr('value',control_labels[6]);
				$("#convex_mirror_btn").attr('disabled',true);
				$("#cross_zoom,#white_spot,#light_mirror_img,#cross_image").hide();
				//$("#light_beam").hide();
				$("#light_beam").css({'visibility':'hidden'});

			}
		});
		$("#show_hide").change(function(){
			if($("#show_hide").attr('value')=="show"){
				$("#show_hide").attr('value','hide');
				$("#answer").show();
			}else{
				$("#show_hide").attr('value','show');
				$("#answer").hide();
			}
		})
		obj_lens_points = [20,58,lens_center,42,lens_center,90,20,68];
		$("#object_lens").attr("points",obj_lens_points);
	//	$("#object_lens_line_1").attr("d","M20 58 l30 -16");
	//	$("#object_lens_line_2").attr("d","M20 68 l30 22");
		function Resetitems(){//resetting slider value and appartus position
			initVariables();
			$("#convex_lens_btn").attr('disabled',false);
			$('#lens_position_val').html(lens_position+" cm");
			$("#lens_position").attr('value',lens_position);
			$("#lens_position").attr('disabled',true);
			$("#lens_position").css({'opacity':0.4});
			$('#light_on_off').attr('value',control_labels[6]);
			$("#light_on_off").attr('disabled',true);
			$('#screen_position_val').html(screen_position+" cm");
			$("#screen_position").attr('value',screen_position);
			$("#screen_position").css({'opacity':0.4});
			$("#convex_mirror_btn").attr('disabled',true);
			$('#mirror_position_val').html(mirror_position+" cm");
			$("#mirror_position").attr('value',mirror_position);
			$("#mirror_position").attr('disabled',true);
			$("#screen_position").attr('disabled',false);
			$("#mirror_position").css({'opacity':0.4});
			$("#screen_position").css({'opacity':1});
			$("#lens_under").css({'left':'53.2px'});
			$("#lens_top").css({'left':'116px'});
			$("#lens_reading").css({'left':'79.2px'});
			$("#mirror_reading").css({'left':'210.2px'});
			$("#lens_reading_txt").html('10.0cm');
			$("#mirror_reading_txt").html('55.0cm');
			$("#white_spot, #object_lens, #object_lens_line").hide();
			$("#white_spot").hide();
			$("#screen_right").css({'left':'420px'});
			$("#zoom_view").css({'left':'380px'});
			$("#mirror").css({'left':'184.2px'});
			$("#light_mirror_img, #cross_image").hide();
			$("#lens_reading, #mirror_reading,#lens_under,#lens_top,#mirror").hide();
			$("#cross_zoom").hide();
			$("#lens_image").css({'visibility':'hidden'});
			$("#lens_image_line_1").css({'visibility':'hidden'});
			$("#lens_image_line_2").css({'visibility':'hidden'});
			$("#maks_module").css({'visibility':'hidden'});
			$("#use_1").css({'visibility':'hidden'});
			$("#use_2").css({'visibility':'hidden'});
			$("#mask_area").attr({'width':'385px'});
			$("#mirror_img").attr("points","26,63,150,78,150,100");
			$("#mirror_img_line_1").attr("d","M26 63 l124 5");
			$("#mirror_img_line_2").attr("d","M26 63 l124 47");
			$("#zoom_view").show();
			$("#popup_img_txt").html(gt.gettext("Clear image is formed"));	
			mirror_position_v = lens_image_distance - (2 * mirror_flength[mirror_type]);
			$("#popup").attr("src",simPath+"/images/popup_img.png");
		}
		$("#reload").click(function(){//*--Function to click reload button to reset all events---
			window.location.reload();	   
		});
	});	 			
};

