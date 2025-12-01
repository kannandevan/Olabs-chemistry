// Variable declaration
var mainTop,mainLeft;
var environment,lablelContent,solution;
var zoom_rodinitialpos,pointer_posinitial,degs,gravity;
var slide_txt,radius_val=9;
var prop_height=[],vals_arrid,get_val,density_arr,room_temp,surtens_val,arr_no1,capillary_rise_h;
var TcosO,capillary_rise,pointer_val,pointer_val_h1,MSR_pointer,MSR1_pointer,VSR_pointer,meniscus_val,meniscus_val_h1,MSR_meniscus,MSR1_meniscus,VSR_meniscus;
var cons_val=3.265,pointer_height,pointer_movement,meniscus_movement,menisus_posinitial,menisus_posinitial1,zoom_scalemeniscus;
var arr_no,rotation_val,beaker_flag=true;
var zoompos_meniscus,micro_val,micro_val1,range_val;
var trip,zoom_scalepointer,min_max_arr=[[],[]];
var browser_top,increvar,mainscale_top1,vsr_point,mainscale_top;//for position of main scale 
var drag_Limit,Hlp_msg;
var vague,vague_1,vague_2;
var temp_flag=false;
var result_val;
var gt=$;
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Surface Tension of Liquids");
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	solution=[gt.gettext('Water'),gt.gettext('6M Salt solution'),gt.gettext('2.55M Sugar solution')];
	environment=[gt.gettext('Earth (g=9.8 m/s&#178;)'),gt.gettext('Uranus (g=8.69 m/s&#178;)'),gt.gettext('Saturn (g=10.44 m/s&#178;)'),gt.gettext('Jupiter (g=24.79 m/s&#178;)'),gt.gettext('Mars (g=3.711 m/s&#178;)'),gt.gettext('Venus (g=8.83 m/s&#178;)'),gt.gettext('Mercury (g=3.7 m/s&#178;)'),gt.gettext('Neptune (g=11.15 m/s&#178;)')];
	lablelContent=[gt.gettext('Select solution:'),gt.gettext('Select environment:'),gt.gettext('Select temperature:'),gt.gettext('Capillary tube diameter:'),gt.gettext('Height of wooden stand:'),gt.gettext('Height of microscope:'),gt.gettext('Level of retort stand'),gt.gettext('Focus of microscope'),gt.gettext('L. C = 0.001 cm'),gt.gettext('Vernier scale'),gt.gettext('Main scale'),gt.gettext('Remove Beaker'),gt.gettext('Place Beaker'),gt.gettext('Reset'),gt.gettext("Show Result"),gt.gettext("Surface tension, T=")];
	Hlp_msg=[gt.gettext('Click on the beaker to view <br>the zoomed view of pointer level.'),gt.gettext('Click the arrow to adjust <br> the height of microscope.'),gt.gettext('Click the arrow to adjust the<br> focus of microscope.'),gt.gettext('Click on the scale to view<br> the zoomed portion of scale.')];
	
	vals_arrid=['waterTemperatureSlider','DimtrCapileryTubeSlider','WoodenStndHeightSlider','microScpeHeightSlider','retortStandHeightlider','microScpeFocusSlider'];
	unitsarr=['&deg;C','mm','cm'];
	var tooltip_txt=gt.gettext('Value extends beyond <br> the microscopic range.')
	var labels_arr=['Solution','envmnt','temperature','DimtrCapileryTube','WoodenStndHeight','microScpeHeight','retortStandHeight','microScpeFocus','LCReadings','VernierScale','MainScale'];
	density_arr=[1000,1350.4,1872.87];
	room_temp=[0.0725,0.082,0.07645];
	//
	$(document).ready(function(){
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		addLabel();
		browser_top=2217;

		$("#zoomVerniarScale").css({'top':mainTop+parseFloat(-14837.52)+'px',left:mainLeft+parseFloat(153)+'px'});
		$("#zoomMainScale").css({'top':mainTop+parseFloat(-(browser_top+1))+'px',left:mainLeft+parseFloat(-514)+'px'});
		function addLabel(){//adding Lables
			$.each(labels_arr, function(val){$("#"+labels_arr[val]+"Label").html(lablelContent[val]);});	
			$('#removeBeaker').attr('value',lablelContent[11]);
			$('#reset').attr('value',lablelContent[13]);
			$("#waterTemperatureSliderva l").html(10+'&deg;C');
			$("#DimtrCapileryTubeSliderval").html(1+' mm');
			$("#WoodenStndHeightSliderval").html(5+' cm');
			$("#microScpeHeightSliderval").html(0+' cm');
				$("#resultLabel").html(lablelContent[14]);	
			dropdown_function($("#selEnvironment"),environment);
			dropdown_function($("#selSolution"),solution);
		}
		function dropdown_function(getid,array_set){//Dropdown adding function
			$.each(array_set, function(val, text) {getid.append($('<option></option>').val(val).html(text));});	
		}
		function change_slider(val1,val2){// slider change values in controls 	
			degs=(val1==vals_arrid[0])?unitsarr[0]:(val1==vals_arrid[1])?unitsarr[1]:unitsarr[2];
			$("#"+val1+"val").html(val2+degs);
		}
		$("#removeBeaker").click(function(){//removing beaker
			slide_txt=($(this).val()==lablelContent[11])?lablelContent[12]:lablelContent[11];
			$('#removeBeaker').attr('value',slide_txt);
			$("#waterEffect,#beakerShadow,#waterlevel_zoom,#Mercury_zoom,#beaker_div").toggle();
			beaker_flag=($(this).val()==lablelContent[11])?true:false;
			$("#toggle_zoombox").hide();
		});
		$("#beaker_div").click(function(){//removing beaker
			$("#toggle_zoombox").toggle();
			$("#scaleZoom_big,#cross_mark").hide();
			$("#cross_mark_beaker").show();
		});
		$("#microscopeStand").click(function(){//removing beaker
			$("#scaleZoom_big").show();
			$("#toggle_zoombox,#cross_mark_beaker").hide();
			$("#cross_mark").show();
		});
		$("#cross_mark").click(function(){//close button option for scale
			$("#cross_mark,#scaleZoom_big").toggle();
		});
		$("#cross_mark_beaker").click(function(){//close button option for beaker
			$("#cross_mark_beaker,#toggle_zoombox").toggle();
		});
/*		$("#scaleZoom_inner").draggable({revert:true, axis:"y",revert:false,
			drag:function(){//panning scale
		}});*/


		get_val={//group of methods
			gravity:['9.8','8.69','10.44','24.79','3.711','8.83','3.7','11.15'],
			calculate_slider_val:function(array_val){//for slider val
				$.each(array_val, function(val, text) {prop_height.push($('#'+text).val());});
			},
			calculate_surfacetension:function(){//excel calculation
				arr_no=$('#selSolution :selected').val();
				arr_no1=$('#selEnvironment :selected').val()
				surtens_val= (parseFloat(room_temp[arr_no])*parseFloat(1-(0.002*(parseInt(273+parseInt(prop_height[0]))-295)))).toFixed(5);
				radius_val=parseFloat(parseFloat(prop_height[1])/2)/1000;
				TcosO=((parseFloat(6*surtens_val))-(parseFloat((Math.pow(radius_val,2))*(density_arr[arr_no])*get_val.gravity[arr_no1]))).toFixed(5);
				capillary_rise=parseFloat((TcosO)/(((parseFloat(3*radius_val)*(density_arr[arr_no])*(get_val.gravity[arr_no1])))));
				capillary_rise_h=(parseFloat(capillary_rise)*100).toFixed(3);
				pointer_height=prop_height[2]-5;
				get_val.calculate_MSR(cons_val,pointer_height,'pointer');
				get_val.calculate_MSR(pointer_val,capillary_rise_h,'meniscus');
			},
			calculate_MSR:function(var1,var2,var3){// calculation for msr and vsr for water and pointer reading 
				window[var3+"_val"]=(parseFloat(var1)+parseFloat(var2)).toFixed(3);	//window used for dynamic declaration of variable
				window[var3+"_val_h1"]=Math.floor((window[var3+"_val"])*10)/10;
				window["MSR_"+var3]=parseFloat((window[var3+"_val"]-window[var3+"_val_h1"]).toFixed(3))*1000;
				window["MSR1_"+var3]=(window["MSR_"+var3]>50)?(Math.floor((window[var3+"_val_h1"]+0.05)*1000)/1000).toFixed(2):window[var3+"_val_h1"]+0;
				window["VSR_"+var3]=parseFloat((window[var3+"_val"]-window["MSR1_"+var3]).toFixed(3))*1000;
			},
			zoomscale_movement:function(){// calculation for vernier scale adjustment for coincidence of VSR reading 
				vsr_point=(prop_height[5]<=7)?VSR_meniscus:VSR_pointer;
				mainscale_top=(vsr_point>30)?browser_top-1:browser_top;
				if((vsr_point>0 && vsr_point<15)|| (vsr_point>30 && vsr_point<=35)){increvar=0.52;}
				else if((vsr_point>=15 && vsr_point<=30)|| (vsr_point>35 && vsr_point<=50)){increvar=0.1;}
				mainscale_top1= parseFloat(mainscale_top+increvar)+parseFloat(vsr_point);
			},
			zoomtube_movement:function(){//zoom tube  movement of water  meniscus
				for(var i=0;i<10;i++){//setting initial position of tube based on retord stand 
					var min=i*5;
					var max=(i+1)*5;
					min_max_arr[0].push(min);
					min_max_arr[1].push(max);
					if(VSR_meniscus>min_max_arr[0][i] && VSR_meniscus<=min_max_arr[1][i]){
						zoomposm_eniscus=parseFloat(i*35.5).toFixed(1);
					}
				}
			}
		};
		slidercombo_change();
	$("#showAns").attr("disabled","disabled");

		function slidercombo_change(){//slider change in canvas area
			
			$("#showAns").attr("disabled","disabled");
				$("#answerLabel").css('display',"none");
				$("#showAns").removeAttr('checked');
			micro_val=$('#microScpeFocusSlider').val();
			micro_val1=$('#microScpeHeightSlider').val();
			$("#measurements").css({'display':'none'})
			prop_height=[];
			get_val.calculate_slider_val(vals_arrid);
			get_val.calculate_surfacetension();
			get_val.zoomscale_movement();
			$("#beakerStndContainer").css({top:mainTop+parseFloat(165-(((prop_height[2])-5)*2))+'px'});
			$("#zoom_tubes").css({top:mainTop+parseFloat(0-(((prop_height[4])-5)*5))+'px'});
			$("#zoombox_beaker").css({top:mainTop+parseFloat(69-(((prop_height[2])-5)*5))+'px'});
			$("#cork_stands").css({top:mainTop+parseFloat(16-(((prop_height[4])-5)*2))+'px'});
			
			$("#cork_rod").css({width:parseFloat(6+(((prop_height[1])-1)*2))+'px',left:mainLeft+parseFloat(145-(((prop_height[1])-1)*2))+'px'});
			$("#zoomtube_apparatus,#zoomTube,#Mercury_zoom").css({width:parseFloat(84+(((prop_height[1])-1)*4))+'px'});
			zoom_rodinitialpos=(parseFloat(	$("#movable_rod").position().top));
			$("#microfocus_box").css({top:95-(parseFloat((prop_height[3]*5.8)))+'px'});
			rotation_val=(-12+(parseFloat((prop_height[3]*1.7)))).toFixed(2);
			$("#zoom_dottedlines").css({"WebkitTransform":"rotate("+rotation_val+"deg)","-moz-transform":"rotate("+rotation_val+"deg)","-ms-transform":"rotate("+rotation_val+"deg)","transform":"rotate("+rotation_val+"deg)",top:(57-(parseFloat((prop_height[3]*3.8)))).toFixed(2)+'px',left:(330+(parseFloat((prop_height[3]*2.0)))).toFixed(2)+'px'});
			if(prop_height[5]<=7){//focus for capillary tube
				$("#zoomtube_apparatus").css({display:'block'});
				$("#Pointerapp").css({display:'none'});
				radius_val=(micro_val*3);
				$('#waterlevel_zoom').css({'top':mainTop-281+'px','left':mainLeft+0+'px'});
				$("#zoomVerniarScale").css({top:parseFloat((prop_height[3]*951)-14837.52)+'px'});

				menisus_posinitial=(127+((parseFloat(prop_height[4]*10)-50)*2.54)).toFixed(2);
				menisus_posinitial1=parseFloat(menisus_posinitial)+parseFloat(81);
				menisus_val=parseFloat(menisus_posinitial1/MSR1_meniscus).toFixed(2);
				meniscus_movement=(prop_height[3]*menisus_val).toFixed(3);
				get_val.zoomtube_movement();
				zoom_scalemeniscus=(parseInt(prop_height[3])<=parseInt(MSR1_meniscus))?parseFloat(prop_height[3]*parseFloat(zoompos_meniscus/MSR1_meniscus)):0;
				if(temp_flag==false){
				$("#movable_rod").css({top:parseFloat((menisus_posinitial-meniscus_movement).toFixed(2))+'px'});	
					
			}

				if(MSR1_meniscus>14 && prop_height[3]>14){
					$("#Mercury_zoom").hide();
					trip = new Trip([{
					sel : $('#microScope'),position : 'n',content :tooltip_txt,expose : false,delay :10000},]);
					trip.start(); 
					window.trip = trip;	
				}
				else
				{
					$('.trip-block').css('display','none');
					$("#Mercury_zoom").show();
				}
			}
			else{//focus for pointer 
				$("#Pointerapp").css({display:'block'});
				$("#zoomtube_apparatus").css({display:'none'});
				radius_val=(45-(micro_val*3));
				$('#waterlevel_zoom').css({'top':mainTop-235+'px','left':mainLeft-8+'px'});
				$("#zoomVerniarScale").css({top:parseFloat((prop_height[3]*951)-14837.52)+'px'});
				zoom_scalepointer=(parseInt(prop_height[3])<=parseInt(MSR1_pointer))?parseFloat(prop_height[3]*parseFloat(68/MSR1_pointer)):0;
				pointer_movement=(prop_height[3]*23.1).toFixed(3);
				pointer_posinitial=	(77+((parseFloat(prop_height[2]*10)-50)*2.31)).toFixed(2);
				if(temp_flag==false){
				$("#movable_rod").css({top:parseFloat((pointer_posinitial-pointer_movement).toFixed(2))+'px'});}


			}
			blurfunc(radius_val,10);
			drag_Limit=parseFloat(0-(prop_height[3]*951));	
			$("#showAns").removeAttr("disabled","disabled");	
			$('#scaleZoom_inner').draggable({axis:"y",
				stop : function(event, ui) {//stop the drag event
					if ((this.offsetTop<=mainTop+drag_Limit)){	
					$('#scaleZoom_inner').css({ top:mainTop+drag_Limit+'px'});
					}
					else if((this.offsetTop>=2126))
					$('#scaleZoom_inner').css({ top:mainTop+2126+'px'});
				}
			});
result_val=parseFloat(surtens_val).toFixed(5);
		$("#showAns").click(function () { 
	 		$("#answerLabel").html(lablelContent[15]+'<b> '+result_val+'</b>' +" N/m").toggle(this.checked);
		});	
		}

				//

		function blurfunc(radvals,size){//for blur function
			var filterVal;
		//var filter_val1;
			//filter_val1 = 'blur('+radvals+'px)';
		//$('#movable_rod').css({'-webkit-filter':filter_val1,'-o-filter':filter_val1,'-ms-filter': filter_val1,'filter': filter_val1});
	vague = $("#movable_rod").Vague({intensity:radvals});
		vague.blur();

			if(micro_val>7){
				//filterVal = 'blur('+size+'px)';
					vague_1 = $("#waterlevel_zoom").Vague({intensity:size});
					vague_1.blur();
				//$('#waterlevel_zoom').css({'-webkit-filter':filterVal,'-o-filter':filterVal,'-ms-filter': filterVal,'filter': filterVal});
			}
			else
			{
					vague_2 = $("#waterlevel_zoom").Vague({intensity:0});
				vague_2.blur();
				//$('#waterlevel_zoom').css({'-webkit-filter':filterVal,'-o-filter':filterVal,'-ms-filter': filterVal,'filter': filterVal});
			}
		}
		$(".rangeSlider").on('input', function() {//on change function of slider. 	
			change_slider(this.id,this.value);
			if(this.id=="waterTemperatureSlider"){temp_flag=true;}
			else{
				temp_flag=false;
			}
			
			slidercombo_change();
			if(this.id=="microScpeHeightSlider"){
				$("#zoomMainScale").css({top:parseFloat(-mainscale_top1)+'px'});	
			}
		});
		$(".dropBox").on('change', function() {//on change function of Combobox. 	
			slidercombo_change();
		});
		$(".arrow").click(function() {//on arrow click function  for focusing 
			$("#microScpeHeightSliderval").html(prop_height[3]+"cm")
			slidercombo_change();
			if(micro_val<=15 && micro_val>=0){
				if($(this).attr("id")=="arrow_top"){
					micro_val++;
				}
				else if($(this).attr("id")=="arrow_down" ){
					micro_val--;
				}	
				micro_val=(micro_val>15)?micro_val=15:(micro_val<0)?micro_val=0:micro_val;
			}
			range_val=(prop_height[5]<=7)?MSR1_meniscus:MSR1_pointer;
			if(micro_val1<=15 && micro_val1>=0){
				if($(this).attr("id")=="arrow_right"){
					micro_val1=(parseFloat(micro_val1)+0.025);
				}
				else if($(this).attr("id")=="arrow_left" ){
					micro_val1=micro_val1-0.025;
				}	
				
				micro_val1=(micro_val1<0)?micro_val1=0:micro_val1;

			}
			$('#microScpeFocusSlider').val(micro_val);
			$('#microScpeHeightSlider').val(micro_val1);
			$("#microScpeHeightSliderval").html(prop_height[3]+' cm');	
		});
		$("#reset").click(function(){//*--Function to click reload button to reset all events---
		window.location.reload();	   
		});
	});
};
