/** Document ready function */
$(document).ready(function(){
	/** Prevent the selection */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	/** Language translating object*/
	/** Variable declaration */
	var materials, liquids, calorimeters, sample_solutions, stopwatch_labels,time_temp, time_count, time_minutes;
	var time_min, time_sec, time_hour, time_min_flag, time_hour_flag, stirrer_flag, stir_timer, stop_timer;		
	var heat_capacity_liquids, heat_capacity_calorimeters, coef_heat_tranfer, graph_temp_heading,chart, graph_time_heading;
	/** Labels translations */
	labelsTranslations();
	/** Variables initialisation */	
	initialisation();
	/** Graph */	
	plotGraph();
	/** Add values into combobox */
	addintoDropDown($('#material_dropdown'),materials);
	addintoDropDown($('#liquids'),liquids);
	/** Function to add values into combobox */
	function addintoDropDown(getId,valueSet){$.each(valueSet, function(val, text) {getId.append($('<option ></option>').val(val).html(text) );});}
	/** Function : Material selection */
	$selected_calorimeter=$('#'+calorimeters[0]),
	$material = $('#material_dropdown').on('change', function() {
		$selected_calorimeter.css({opacity:0});
		$('#'+calorimeters[$material.val()]).css({opacity:1});
		$selected_calorimeter=$('#'+calorimeters[$material.val()]);
		$('#heat_calorimetry_val').html(heat_capacity_calorimeters[$material.val()]);
		$('#heat_coef_val').html(coef_heat_tranfer[$material.val()]);
	});
	/** Function : Radius selection */
	$radius_slider = $('#radius_slider').on('input', function() { 	
		$('#radius_value').html($radius_slider.val());		
	});	
	/** Function : Mass selection */
	$mass_slider = $('#mass_slider').on('input', function() {	   	
		$('#mass_value').html($mass_slider.val());
	});	
	/** Function : Liquid selection */
	$selected_liquid=$('#'+sample_solutions[0]),
	$liquid = $('#liquids').on('change', function() { 
		$selected_liquid.css({opacity:0});
		$('#'+sample_solutions[$liquid.val()]).css({opacity:1});
		$selected_liquid=$('#'+sample_solutions[$liquid.val()]);
		$('#heat_liquid_val').html(heat_capacity_liquids[$liquid.val()]);
	});	
	/** Function : Temperature selection */
	$liquid_temp_slider = $('#liquid_temp_slider').on('input', function() {	   	
		$('#liquid_temp_value').html($liquid_temp_slider.val());
		/**  Update the Maximum */
		var _maximum = parseInt($liquid_temp_slider.val())-1;
		$('#room_temp_slider').attr('max', _maximum).change();
		$('#room_temp_max').html(_maximum);	
		$('#room_temp_value').html($room_temp_slider.val());
		changeTemperature($liquid_temp_slider.val());		
	});	
	/** Function : Room temperature selection */
	$room_temp_slider = $('#room_temp_slider').on('input', function() {	   	
		$('#room_temp_value').html($room_temp_slider.val());		
	});		
	/** Function : show graph */
	$('#show_graph').on('change', function() {
		//$("#tooltip").remove();
		$('#graph_hide').toggle();	 
	}); 
	/** Function : Cross section view */
	$('#cross_section').on('change', function() {
		$('#apparatus_close').toggle();	 
	}); 
	/** Function : Start the stopwatch */
	$('#stopwatch_button').on('click', function() {	
		$('#stopwatch_button').unbind('click');
		$('#stopwatch_button').css({cursor:'default'});	
		$('#stopwatch_button_label').html(stopwatch_labels[1]);	/** Stopwatch button label */
		stop_timer=setInterval(timerCalculate,50);			
		stir_timer=setInterval(stirrerMovement,500);
	});
	/** Function : Change  temperature*/
	function changeTemperature(temperature){
		temperature=Math.round(temperature*10)/10;
		$('#zoom_scale').stop(true);
		$('#zoom_scale').animate({ top: ( 19.591 * parseInt(temperature) -2009.1) + 'px' });
		$('#temperature_value').html(temperature.toFixed(1) + " °C");
	}
	/** Function : Stirring */
	function stirrerMovement(){		
		if(stirrer_flag == false){
			$('#stirrer').css({ top: '120px'});
			stirrer_flag=true;
		}else{
			$('#stirrer').css({ top: '130px'});
			stirrer_flag=false;
		}
	}
	/** Function : Calculation */
	function calculation(){
		var _temperature_arr = [];
		$('#material_dropdown,#radius_slider,#mass_slider,#liquids,#liquid_temp_slider,#room_temp_slider').attr("disabled","disabled");
		var _convert_hour=60;
		var _liquid_mass = 250;
		var _k = coef_heat_tranfer[$material.val()] * Math.PI * Math.pow(parseFloat($radius_slider.val()),2) * Math.pow(10,-4)/((parseInt($mass_slider.val())*heat_capacity_calorimeters[$material.val()])+(_liquid_mass*heat_capacity_liquids[$liquid.val()]));
		var _kt = _k*time_minutes*_convert_hour;
		var _exp_kt = 1 / Math.exp(_kt);		
		temperature_at_time = parseInt($room_temp_slider.val()) + (parseInt($liquid_temp_slider.val()) - parseInt($room_temp_slider.val())) * _exp_kt ;
		changeTemperature(temperature_at_time);	
		console.log(time_minutes, temperature_at_time)		
		time_temp.push({
		  x: time_minutes,
		  y: temperature_at_time
		}); 
	}
	/** Function : Calculate temperature at particular time  */ 
	function timerCalculate(){
		if(time_sec<59){
			time_sec=time_sec+01;
			time_min_flag=false;
			time_hour_flag=false;
		}
		else if(time_sec==59){
			time_sec=00;
			time_min_flag=true;
		}
		if(time_min_flag==true && time_min<59){
			time_min=time_min+1;
		}
		else if(time_min_flag==true && time_min==59){
			time_min=00;time_hour_flag=true;
		}
		if(time_hour_flag==true && time_hour<59){			
			time_hour=time_hour+1;			
		}
		else if(time_hour_flag==true && time_hour==59){			
			time_hour=00;
		}
		$('#hours').html(time_hour); /** Hours */	
		$('#minutes').html(time_min); /**  Minutes*/	
		$('#seconds').html(time_sec); /**  Seconds*/
		time_minutes=time_hour*60+time_min;
		if(time_minutes<150){
			calculation(); /** Temperature calculation */		
			time_count++;/** Plot count */
			chart.render();
		//	plotGraph();	/** Function :- Plot graph */
		}else{
			$('#stopwatch_button_label').html(stopwatch_labels[0]);
			clearInterval(stop_timer);
			clearInterval(stir_timer);
		}		
	}

	
	/** Function :- Plot graph */
	function plotGraph(){
		chart = new CanvasJS.Chart("graph_area", {
		  axisX: {
		  		title: graph_time_heading, //x axis label	
		  		titleFontSize: 12, //chart font size	  
		   		labelFontSize: 8,
		   		minimum: 0,
		   		maximum: 152,
		   		interval: 50
		  },  
		  axisY: {
		  	   title: graph_temp_heading,
		  	   minimum: 0,
		   	   maximum: 100,
		   	   interval: 25,	
		  	   titleFontSize: 12, //chart font size	   
		       labelFontSize: 8
		  },
		  showInLegend: false,
		  data: [{
		   		color: "#DA0847",
		   		type: "line",
		   		markerType:"none",
		   		lineThickness: 2,
		   		dataPoints: time_temp //datapoints to be plot stored in the array
		  }]
		});
		chart.render();
	}	
	/** Function : Label translation */
	function labelsTranslations(){
		materials=[gt.gettext("Brass"),gt.gettext("Copper"),gt.gettext("Aluminum"),gt.gettext("Silver")];  /** Materials */	
	    liquids=[gt.gettext("Water"),gt.gettext("Milk"),gt.gettext("Vegetable oil"),gt.gettext("Olive oil")]; /** Samples */
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP")); /** Help icon label*/	
		$('#expName').html(gt.gettext("The Newtons Law of Cooling")); /** Experiment heading */	
		stopwatch_labels=[gt.gettext("START"),gt.gettext("STOP")];
		$('#stopwatch_button_label').html(stopwatch_labels[0]);	/** Stopwatch button label */
		$('#temperature_label').html(gt.gettext("Temperature: ")); /** Temperature label */
		$('#select_material_label').html(gt.gettext("Material of the calorimeter")); 
		$('#radius_label').html(gt.gettext("Radius of calorimeter (cm):")); 
		$('#mass_label').html(gt.gettext("Mass of calorimeter (g):"));	
		$('#select_liquid_label').html(gt.gettext("Liquid sample")); 
		$('#liquid_temp_label').html(gt.gettext("Temperature of the preheated liquid, T:")); 
		$('#room_temp_label').html(gt.gettext("Room temperature:")); 
		$('#show_graph_label').html(gt.gettext("Show graph")); 
		$('#cross_section_label').html(gt.gettext("Show cross section"));
		$("#mass_liquid_label").html(gt.gettext("Mass of liquid: 250 g"));
		$("#heat_liquid_label").html(gt.gettext("Specific heat capacity of liquid: "));
		$("#heat_calorimetry_label    ").html(gt.gettext("Specific heat capacity of calorimeter: "));
		$("#heat_coef_label").html(gt.gettext("Heat transfer co-efficient: "));
		$("#reset_button").attr('value',gt.gettext('Reset')); /** Reset */
		$('#result_label').html(gt.gettext('Result'));	/** Result */
		$('#graph_heading').html(gt.gettext('Time - temperature graph'));	/** Time temperature graph */
		graph_time_heading = gt.gettext('Time(min)');/** Time */
		graph_temp_heading = gt.gettext('Temperature');	/** Temperature */
		help_message=gt.gettext("Click on the START/STOP button to start/stop the experiment.");/** Help */
	}
	/** Function : Variables initialisation */
	function initialisation(){				
		stopwatch_button_click = 0;
		heat_capacity_liquids = [4.19, 3.93, 1.67, 1.97];
		heat_capacity_calorimeters = [0.38, 0.39, 0.91, 0.23];
		coef_heat_tranfer = [109,401,250,429];
		time_temp=[];
		time_count=0;
		time_min = time_sec = time_hour = time_minutes =0;
		time_min_flag =   time_hour_flag = stirrer_flag = false;
		calorimeters = ["calorimeter_brown", "calorimeter_brown", "calorimeter_silver", "calorimeter_silver"];
		sample_solutions = ["solution_water", "solution_milk", "solution_oil", "solution_oil"];
	}		
});