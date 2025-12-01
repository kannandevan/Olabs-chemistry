var helpArray,start_experiment,$protractor;

/** Document ready function */
$(document).ready(function(){
	/** Prevent the selection */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	/** Language translating object*/
		/** Variable declaration */
	var  prisms, stroke_colour, fill_colour, selected_prism_index, refractive_index =[],deviation,incidence;	
	var angle_protractor, angle_of_incidence, angle_of_emergence, angle_of_deviation,start_x,start_y,count;

	var canvas = document.getElementById('line_canvas');
    var context = canvas.getContext('2d');   
	/** Labels translations */
	labelsTranslations();
	/** Variables initialisation */	
	initialisation();
	/** Add values into combobox */
	addintoDropDown($('#prism_options'),prisms);	
	/** Function to add values into combobox */
	function addintoDropDown(getId,valueSet){$.each(valueSet, function(val, text) {getId.append($('<option ></option>').val(val).html(text) );});}
	/** Function : Material selection */	
	$prism = $('#prism_options').on('change', function() {
		selected_prism_index = $prism.val();
		angleOfDeviation();	 /** Calculate angle of deviation */
	});
	/** Function : Angle of incidence */
	$angle_incidence_slider = $('#angle_incidence_slider').on('input', function() { 
		angle_of_incidence = $angle_incidence_slider.val();	
		$('#angle_incidence_value').html($angle_incidence_slider.val());
		angleOfDeviation();	 /** Calculate angle of deviation */
	});	
	 /** Function : Calculate angle of deviation */	
	function angleOfDeviation(){ 
		 /** Angle of deviation : Adjust top and left */			
		if(angle_of_deviation > deviation){				
			incidence = incidence - 1;
			changeDeviation(incidence);							
		}else{				
			incidence = angle_of_incidence;
			changeDeviation(angle_of_incidence);
		}		
		/** Angle of deviation : Change */
		rotateObj('light_reflection', (angle_of_deviation - (incidence - 30))*1.05 - 1.7445);	
		$("#light_reflection").css({top: (95 - incidence*2)+"px" ,left: (274 - incidence*1.2)+"px" });
		/** Traingle color changed */
		$('.svg-triangle polygon').css({ stroke:stroke_colour[selected_prism_index][0], fill:stroke_colour[selected_prism_index][1] });		
		/** Angle of incidence : Adjust top and left */
		$("#light_normal").css({top: (261.4 - refractive_index[selected_prism_index]*71.6)+"px" ,left: (-190 + refractive_index[selected_prism_index]*40)+"px" });
		$("#normal_line").css({top: (262.35 - refractive_index[selected_prism_index]*66.9)+"px" ,left: (22.85 + refractive_index[selected_prism_index]*44.1)+"px" });
		if(isNaN(angle_of_deviation)){
			context.clearRect(0, 0, canvas.width, canvas.height);
			$("#light_reflection,#reflection_line,#d_label,#e_label,#r1_label,#r2_label,#arrow_blue").css({display:'none'});
		}else{				
			$("#light_reflection,#reflection_line,#d_label,#e_label,#r1_label,#r2_label").css({display:'block'});		
			$("#reflection_line").css({top: ( 265.51 - incidence * 1.967 )+"px" ,left: ( 311.632- incidence*1.2 )+"px" });
			$("#d_label").css({top: parseFloat($("#reflection_line").position().top) + 20.15 + "px", left: parseFloat($("#reflection_line").position().left) + 67.65 + "px"}); 
			$("#e_label").css({top: parseFloat($("#reflection_line").position().top) + 50.85 + "px", left: parseFloat($("#reflection_line").position().left) + 110.65 + "px"}); 
			$("#r1_label").css({top: 198 - (incidence*0.533) + "px", left: 250 - (incidence*0.533) + "px"}); 
			$("#r2_label").css({top: 266.01 - (incidence*1.867) + "px", left: 360.01-(incidence*1.267) + "px"}); 
			start_x = 135.85 + refractive_index[selected_prism_index] * 38.1;
		    start_y = 277.3 - refractive_index[selected_prism_index] * 76.2;
			drawEmergingLine(start_x,start_y);
		}
		deviation = angle_of_deviation;
	}
	function changeDeviation(incident_angle){
		/** To convert into radian for trignometric calculation */
	    var _radian = Math.PI/180; 
	    /** To convert into degree for trignometric calculation */
	    var _degree = 180/Math.PI; 
	    /** Angle of prism = 60 */
	    var _angle_of_prism = 60;	
		/** Angle of incidence : Change from slider value */
	    var _pointed_line_angle = 30.99- 1.033 * incident_angle;	
	    /** First angle of refraction on side AB, r1 = sin ^-1 (sin(i1)/n) */
		refraction_ab = Math.asin( ( Math.sin(incident_angle * _radian) * _degree ) / refractive_index[selected_prism_index] * _radian ) * _degree;
		/** Second angle of refraction on side AC, r2 = A-r1 */
		refraction_ac = _angle_of_prism - refraction_ab;
		/** Angle of emergence i2 = sin ^-1 (n*sinr2) */
		angle_of_emergence = Math.asin( ( Math.sin(refraction_ac * _radian) * _degree ) * refractive_index[selected_prism_index] * _radian ) * _degree;
		/**  Angle of deviation d,  δM = (i1+i2) -A */
		angle_of_deviation = (parseFloat(incident_angle) + parseFloat(angle_of_emergence)) - _angle_of_prism;
		
		$("#refractive_index_value").html(refractive_index[selected_prism_index]);
		$("#angle_deviation_value").html(angle_of_deviation.toFixed(2));
 		/** Angle of incidence : Change */
		rotateObj('light_normal',_pointed_line_angle);
	}
	function drawEmergingLine(x_pos,y_pos){		
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.moveTo(x_pos,y_pos);  		
	    context.lineTo( (446 -( incidence *1.2 )), ( 264.01 - incidence*1.967) );
	    context.strokeStyle = 'blue';	   
	    context.stroke();
	}
	/** Function : Drag protractor */
	$( "#drag_protractor" ).draggable({ containment: "#protractor_drag_area" ,
		 drag: function(){
		 	$( "#protractor").css({top:this.offsetTop+'px', left:this.offsetLeft+'px'});
		 }
	 });
	/** Function : Rotate clockwise */
	$('#rotate_clockwise').on('click', function() {	
		angle_protractor=angle_protractor-1;	
		rotateObj('protractor',angle_protractor);
		rotateObj('drag_protractor',angle_protractor);
	});
	/** Function : Rotate anticlockwise */
	$('#rotate_anticlockwise').on('click', function() {	
		angle_protractor=angle_protractor+1;	
		rotateObj('protractor',angle_protractor);
		rotateObj('drag_protractor',angle_protractor);
	});
	/** Function : Cross section view */
	$('#show_result').on('change', function() {
		$('#result').toggle();	 
	}); 
	/** Function : Protractor button click*/
	$protractor=protractor_label[0];	
	$("#protractor_button").attr('value',$protractor),	
	$('#protractor_button,#close').on('click', function() {		
		$("#protractor_button").attr('value',$protractor=($protractor == protractor_label[0] ? protractor_label[1]: protractor_label[0]));
		$("#protractor,#drag_protractor").toggle();
	});
	/** Function : Start the experiment*/
	$('#start_button').on('click', function() {	
		$('#start_button').unbind("click")
		$('#prism_side_view').css({display:'block'});
		$('#prism_options,#angle_incidence_slider,#protractor_button,#show_result').removeAttr('disabled');
		start_experiment=true;
		/** Calculate angle of deviation */
		angleOfDeviation();
	});
	/** Function : Rotation*/
	function rotateObj(id,angle){
		$('#'+id).css('transform','rotate('+angle+'deg)')
				 .css('-webkit-transform','rotate('+angle+'deg)')
				 .css('-ms-transform','rotate('+angle+'deg)')
				 .css('-moz-transform','rotate('+angle+'deg)');
	}
	/** Function : Array shuffle */
	function shuffle(o){
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	}
	/** Function : Label translation */
	function labelsTranslations(){
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP")); /** Help icon label*/	
		$('#expName').html(gt.gettext("Refraction through a prism")); /** Experiment heading */	
		$('#selectPrismLabel').html(gt.gettext("Select the prism")); /** Select prism label*/	
		$('#angle_incidence_label').html(gt.gettext("Angle of incidence")); /** Angle of incidence label */	
		$('#angle_prism_label').html(gt.gettext("Angle of prism")); /** Angle of prism label */			 
		$("#reset_button").attr('value',gt.gettext('Reset')); /** Reset button*/
		$("#start_button").attr('value',gt.gettext('Start experiment')); /** Start button */
		$('#result_label').html(gt.gettext('Result'));	/** Result */		
		$('#show_result_label').html(gt.gettext("Show result"));/** Show result */
		$('#refractive_index_label').html(gt.gettext("Refractive index of the prism"));/** Refractive index of prism  */
		$('#angle_deviation_label').html(gt.gettext("Angle of deviation"));/** Angle of deviation d,  δM = (i1+i2) -A  */
		protractor_label = [gt.gettext("Show protractor"),gt.gettext("Hide protractor")];/** Protractor */
		prisms = [gt.gettext("Prism 1"), gt.gettext("Prism 2"), gt.gettext("Prism 3"), gt.gettext("Prism 4"), gt.gettext("Prism 5")]
		helpArray = [gt.gettext("Click on start experiment button to start the experiment"), gt.gettext("Click on Show/Hide protractor button to Show/Hide protractor"), gt.gettext("Click on close icon to close the protractor"), gt.gettext("Click to 'drag icon' to drag the protractor"), gt.gettext("Click on rotate rotate icon to rotate the protractor")];
	}
	/** Function : Variables initialisation */
	function initialisation(){				
		stroke_colour= [["#42B4E6","#9DF3FF"], ["#B54F73","#EDD4DD"], ["#B0F0A6","#ECFCEA"], ["#AE8B65","#ECE3D9"], ["#70A4A2","#C2E4E3"]];
		angle_protractor= 49;
		angle_of_incidence = 30;
		selected_prism_index = 0;
		count=0;
		var k=0;
		for(var i=0; i<21; i++){			
			refractive_index[i]=1.5+k;
			k=k+0.01;
			refractive_index[i]=parseFloat(refractive_index[i].toFixed(2));
		}		
		shuffle(refractive_index);
		shuffle(stroke_colour);	
		$('#prism_options,#angle_incidence_slider,#protractor_button,#show_result').attr('disabled','disabled');
	}		
});