/** Document ready function */
$(document).ready(function(){
	/** Prevent the selection */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	/** Language translating object*/
	/** Variable declaration */
	var lenses, focal_length_types, liquid_samples, object_pointer;
	var refractive_index_liquid, refractive_index_lens, refractive_index_liquid_group;
	var refractive_index_lens_group=[], focal_length_lens, dist_tip_upper_lens;
	var dist_tip_lower_lens, focal_length_liquid_lens, focal_length_combination;
	var dist_tip_upper_combination, dist_tip_lower_combination, focal_length_type_selected; 
	var user_view, selected_pointer, focal_length_result_label, liquid_shapes, pin_zoom_scale, user_view_count;
	/** Canvas :- Draw line */
	var canvas = document.getElementById('line_canvas');
    var context = canvas.getContext('2d'); 
    context.setLineDash([2,3]);
    context.strokeStyle = 'white'; 
    context.lineWidth=2;   
    drawPointingLine(365,295,420,155);
	drawPointingLine(365,295,420,275);
	drawPointingLine(120,137,195,295);
	drawPointingLine(150,137,195,295);
	/** Labels translations */
	labelsTranslations();
	/** Variables initialisation */	
	initialisation();
	/** Add values into combobox */
	addintoDropDown($('#lens_options'),lenses);	/** Lenses */
	addintoDropDown($('#focal_length_type_options'), focal_length_types); /** Focal length types */
	addintoDropDown($('#liquid_options'), liquid_samples); /** Liquids samples */
	calculateFocalLength();
	/** Function to add values into combobox */
	function addintoDropDown(getId,valueSet){$.each(valueSet, function(val, text) {getId.append($('<option ></option>').val(val).html(text) );});}
	/** Function : Lens selection */	
	$lens = $('#lens_options').on('change', function() {		
		refractive_index_lens = refractive_index_lens_group[$lens.val()];
		calculateFocalLength();
	});
	/** Function : Focal length type selection */	
	$focal_length_type = $('#focal_length_type_options').on('change', function() {
		$('#liquids,#liquid,#liquid_zoom,#refractive_index_result,#radius_curvature').toggle();
		$('#focal_length_label').html(focal_length_result_label[$focal_length_type.val()]); /** Focal length label */
		focal_length_type_selected = focal_length_types[$focal_length_type.val()];
		calculateFocalLength();
	});
	/** Function : Liquid selection */
	$liquid = $('#liquid_options').on('change', function() {
		refractive_index_liquid = refractive_index_liquid_group[$liquid.val()];
		$('#refractive_index_value').html(refractive_index_liquid); /** Refractive index of liquid */
		$('#liquid_zoom').attr("src" , simPath+"images/" + liquid_shapes[$liquid.val()]+".png" );
		calculateFocalLength();
	});
	/** Function : Object pointer slider */
	$object_pointer_slider = $('#object_pointer_slider').on('input', function() {
		context.clearRect(0, 0, canvas.width, canvas.height);	
		object_pointer = $object_pointer_slider.val();
		selected_pointer=this.id;	
		$('#object_pointer_value').html(object_pointer);/** Object pointer slider value = Object pointer value   */
		$('#scale_zoom').css({top:(70*object_pointer-3492.5)+"px"}); /** Zoom scale movement =  (70*slider value object pointer-3492.5) */
		$('#stand').css({top: 300 - (6*object_pointer)+"px"});/** Stand movement =  300 - (6*slider value object pointer) */
	    $('#arrow').css({top: 324.15 - (6.03*object_pointer)+"px"});/** Arrow movement =  324.05 - (6.01*slider value object pointer) */
	    drawPointingLine(365,$('#stand').position().top+25,420,155);
		drawPointingLine(365,$('#stand').position().top+25,420,275);
		drawPointingLine(120,137,195,$('#stand').position().top+25);
	    drawPointingLine(150,137,195,$('#stand').position().top+25);
		calculateFocalLength();/** Function : Calculation of focal length  */
	});
	/** Function : User view slider */	
	$user_view_slider = $('#user_view_slider').on('input', function() { 
		selected_pointer=this.id;
		user_view = $user_view_slider.val();
		 $('#head').css({width: 210 + parseInt(user_view) +"px"});
		calculateFocalLength();	
		user_view_count=parseInt(user_view);
	});	
	/** Function : Cross section view */
	$('#show_result').on('change', function() {
		$('#result').toggle();	 
	});
	/** Function : Calculation of focal length  */
	function calculateFocalLength() {
		focal_length_lens = 1/((refractive_index_lens-1)*((1/30)+(1/20)));/** Focal length of convex lens (cm) f = 1/((refractive index of lens-1)*((1/30)+(1/20)))*/
		var _lens_thickness = 0.5, _radius_of_curvature_lens = 30, _radius_of_curvature_mirror = Infinity;
		dist_tip_upper_lens =  focal_length_lens - (_lens_thickness/2);/** Distance between the tip and upper surface of lens x1 = f-t */
		dist_tip_lower_lens =  focal_length_lens + (_lens_thickness/2);/** Distance between the tip and upper surface of plane mirror y1 = f+t*/
		focal_length_liquid_lens = 1/((refractive_index_liquid-1)*((1/_radius_of_curvature_lens)+(1/_radius_of_curvature_mirror)));/** Focal length of the liquid lens f1 = 1/((Refractive index of liquid-1)*((1/ Radius of curvature of lens)+(1/Radius of curvature of mirror)))*/
		focal_length_combination = focal_length_lens*focal_length_liquid_lens/(focal_length_lens+focal_length_liquid_lens);/** Focal length of combination ,convex lens + liquid lens F = f*f1/(f+f1)*/
		dist_tip_upper_combination =  focal_length_combination - (_lens_thickness/2);/** Distance between the tip and upper surface of combination  x2 = F-t*/
		dist_tip_lower_combination =  focal_length_combination + (_lens_thickness/2);/** Distance between the tip and upper surface of plane mirror y1 = f+t*/
		if(focal_length_type_selected ==  focal_length_types[0]){ /** Without liquid */
			dist_from_lens = dist_tip_upper_lens;
			dist_from_mirror = dist_tip_lower_lens;
			focal_length_result = focal_length_lens;
		}else{/**With liquid */			
			dist_from_lens = dist_tip_upper_combination;
			dist_from_mirror = dist_tip_lower_combination;
			focal_length_result = focal_length_combination;
		}
		dist_from_mirror = Math.round(dist_from_mirror*10)/10;
		var image_large_dist = dist_from_mirror - 5;
		var image_small_dist = 45 - dist_from_mirror;
		var _pin_zoom_right_top;
		if(Math.round(Math.abs(dist_from_mirror - object_pointer)==0)){
			user_view_count=0
		}		
		pin_zoom_scale = 1 + parseInt(dist_from_mirror - object_pointer)/2;		
		if(pin_zoom_scale < 0.6){			
			pin_zoom_scale = 0.6;
		}else if(pin_zoom_scale > 8){
			pin_zoom_scale=8;
		}
		var _top_pos;
		if(dist_from_mirror > object_pointer){
			_top_pos  = 68.04 -	8.38 * pin_zoom_scale + parseInt(user_view*2) + user_view_count*2;
		}else{
			_top_pos  = 68.04 -	8.38 * pin_zoom_scale + parseInt(user_view*2) - user_view_count*2;
		}
		var _left_pos = 68.36 -	3.92 * pin_zoom_scale;
		$('#pin_zoom_right').css({top: _top_pos + 'px' ,left :_left_pos +"px"});
 		$('#pin_zoom_right').css({
            '-webkit-transform': 'scale(' + pin_zoom_scale+ ')',
            '-moz-transform': 'scale(' + pin_zoom_scale + ')',
            '-ms-transform': 'scale(' + pin_zoom_scale+ ')',
            '-o-transform': 'scale(' + pin_zoom_scale+ ')',
            'transform': 'scale(' + pin_zoom_scale + ')'
        });
	    $('#pin_zoom_left').css({top: 58 + parseInt(user_view*2) +'px'}); 
	    $('#pin_zoom_right').css({display:'block'});
		$('#focal_length').html(focal_length_result.toFixed(1));/** Focal length  */
	}
	/**  Draw dashed line */	
	function drawPointingLine(start_top,start_left,end_top,end_left){	
		context.beginPath();
	    context.moveTo(start_top, start_left);
	    context.lineTo(end_top,end_left);	    
	    context.stroke();
	}
	/** Function : Array shuffle */
	function shuffle(o){
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	}
	/** Function : Label translation */
	function labelsTranslations(){
		$('#expName').html(gt.gettext("Refractive Index of a Liquid")); /** Experiment heading */	
		$('#select_lens_label').html(gt.gettext("Select the convex lens:")); /** Select the convex lens*/		
		$('#thickness_label').html(gt.gettext("Thickness of the convex lens"));/** Thickness of the convex lens, t = 0.5 cm */
		$('#radius_curvature_label').html(gt.gettext("Radius of curvature of convex lens"));/** Radius of curvature of convex lens, R = 30 cm */
		$('#focal_length_type_label').html(gt.gettext("Select the method:")); /** Type of focal length of the convex lens */			 
		$('#liquid_label').html(gt.gettext("Select the liquid:")); /** Select the liquid label */			 
		$('#object_pointer_label').html(gt.gettext("Object pointer ")); /** Object pointer label */
		$('#user_view_label').html(gt.gettext("User view ")); /** User view  */		
		$('#refractive_index_label').html(gt.gettext("Refractive index of the liquid"));/** Refractive index of the liquid  */
		$("#reset_button").attr('value',gt.gettext('Reset')); /** Reset button*/
		$('#result_label').html(gt.gettext('Result'));	/** Result */		
		$('#show_result_label').html(gt.gettext("Show result"));/** Show result */
		user_views = [gt.gettext("Left"), gt.gettext("Center"), gt.gettext("Right")];/** User views  */
		liquid_samples=[gt.gettext("Water"),gt.gettext("Benzene"),gt.gettext("Methanol"), gt.gettext("Glycerin"),gt.gettext("50% sugar solution")];
		lenses = [gt.gettext("Convex Lens1"), gt.gettext("Convex Lens2"), gt.gettext("Convex Lens3"), gt.gettext("Convex Lens4"), gt.gettext("Convex Lens5")]
		focal_length_types = [gt.gettext("Without liquid"),gt.gettext("With liquid")];
		focal_length_result_label = [gt.gettext("Focal length of the convex lens"),gt.gettext("Focal length of the combination lens")];
	}
	/** Function : Variables initialisation */
	function initialisation(){				
		$('#user_view_left').html(user_views[0]); /** User view left */
		$('#user_view_center').html(user_views[1]); /** User view center */
		$('#user_view_right').html(user_views[2]); /** User view right */
		$('#user_view_selected').html(user_views[1]); /** User view selected */	
		$('#focal_length_label').html(focal_length_result_label[0]); /** Focal length label */
		focal_length_type_selected = focal_length_types[0] /** With liquid */
		refractive_index_liquid_group = [1.333, 1.501, 1.362,1.473, 1.42];/** Refractive index of liquid */
		var k=0;
		for(var i=0; i<21; i++){			
			refractive_index_lens_group[i]=1.5+k;
			k=k+0.01;
			refractive_index_lens_group[i]=parseFloat(refractive_index_lens_group[i].toFixed(2));
		}	
		shuffle(refractive_index_lens_group);/** Refractive index of lens */		
		refractive_index_liquid = refractive_index_liquid_group[0];
		refractive_index_lens = refractive_index_lens_group[0];
		user_view=0,object_pointer=5,pin_zoom_scale=7,user_view_count=0;
		$('#refractive_index_value').html(refractive_index_liquid); /** Refractive index of liquid */
		liquid_shapes = ["liquid_zoom","liquid_zoom2","liquid_zoom3","liquid_zoom","liquid_zoom3"];
	}		
});