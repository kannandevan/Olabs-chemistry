//*--Ready function---------
var controlLabel,InsArray,num_array,Q=2,Q1=88,opacity_val=0,opacity_val1=1,equat_val,equat_val1,pour_topval;
var label_prop,label_pos,label_content,helprarr;
var clockTimer,newTime;
var drag_mate,sample_pos,min_maxarr,sample_tiltpos;
var measuring_flag=false,DragFlag=0,drag_funo;
var new_update;
var jar_waterlevel,conical_waterlevel,big_flasklevel1,beaker_waterlevel,big_flasklevel2,beaker_waterback;
var waterob_arr,waterpos,water_originalpos,water_level_before;
var time_calc,beaker_left,arr_time=[];
var m = s = ms = 0,arr;
var gAngle=0;
var turningRight=true;
var clrGlassRod;
function stirGlassRod(ID){//Stiring of glass rod
	$(ID).css({
		'-ms-transform': 'rotate('+gAngle+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+gAngle+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+gAngle+'deg)',
		'transform-origin': '50% 50%'
	});
	if(turningRight)
		gAngle++;
	else{
		gAngle--;
	}
	if(gAngle==10){
		turningRight=false;
	}
	if(gAngle==-10){
		turningRight=true;
	}
	clrGlassRod=setTimeout(function(){stirGlassRod(ID)},10);
}
var gt=$;
	window.onload = function() { 
		document.getElementById("expName").innerHTML=gt.gettext("Kinetics Study on the Reaction between Iodide Ions and Hydrogen Peroxide");
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		controlLabel=[gt.gettext("Reset"),gt.gettext('Volume of KI:'),gt.gettext('Volume of water :'),gt.gettext('Volume of H<sub>2</sub>SO<sub>4</sub>: 10 ml'),gt.gettext('Volume of Starch: 5 ml'),gt.gettext('Volume of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>: 10 ml'),gt.gettext('Volume of H<sub>2</sub>O<sub>2</sub>: 5 ml')];
		num_array=[2,20,70,88];
		InsArray=[gt.gettext('START'),gt.gettext("STOP")];
		helprarr=[gt.gettext("Select the volume of <br>potassium iodide solution."),gt.gettext("Drag the potassium iodide<br> solution to the measuring jar."),gt.gettext("Drag the measuring jar to the <br>conical flask to pour the solution."),gt.gettext('Drag the sulphuric acid <br>to the measuring jar.'),gt.gettext("Drag the water to<br> the measuring jar."),gt.gettext("Drag the starch solution<br> to the measuring jar."),gt.gettext("Drag the sodium thiosulphate<br> solution to the measuring jar."),gt.gettext("Drag the hydrogen peroxide<br>solution to the measuring jar.")];
		label_content=[gt.gettext("2.5M H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Water"),gt.gettext("Starch"),gt.gettext('0.05M Sodium thiosulphate'),gt.gettext("0.1 M KI"),gt.gettext("3% H<sub>2</sub>O<sub>2</sub>")];
		label_prop=[[80,54,52,91,77],[17,12,13,23,14]];
		label_pos=[[58,64,62,54,149],[57,202,296,378,57]];
		drag_mate=['conical_flask','H2SO4_bottle','water_beaker','starch_bottle','sulphide_bottle','H2O2_bottle'];
		waterob_arr=['conical_water','H2SO4_water','water_water','starch_water','sulphide_water','H2O2_water']
		sample_pos=[[102,34,34,34,33,115],[71,84,211,308,408,516]];
		sample_tiltpos=[[176,188,151,190,190,188],[437,442,433,445,444,442]];
		min_maxarr=[[90,300,25,514]];
		water_originalpos=[[18,0,0,2,2],[-18,0,0,0,0]]
		waterpos=[22,13,33,13,13,13]
		$(document).ready(function() {	
			$("#expName").css({'font-size':'195%'});
			$(".rangeSlider").on('input', function() {//on change function of slider. 
			changeSliderval(this.id,this.value);

			Reset_items();
			});	
			function changeSliderval(id,val){//slider value change 
				if(id=="volume_slider"){
					Q=val;
					Q1=parseInt(100)-(parseInt(Q)+parseInt(10));//slider 2 value
					$("#rightVal").html(Q+' ml');
					$("#sliderspan1").html(Q1+' ml');
					$("#volume_slider2").val(Q1);

				}
			}
			mainTop=$('#mainDiv').position().top;
			mainLeft=$('#mainDiv').position().left;	
			$('#mainDiv').mousedown(function(event){event.preventDefault();});	
			init();
			function init(){//Function for initial setting in stage and label controls---	
				$('#reload').attr('value',controlLabel[0]);
				$('#Ins01').html(controlLabel[1]);
				$("#rightVal").html(num_array[0]+' ml');
				$('#rightminvals').html(num_array[0]);
				$('#rightmaxvals').html(num_array[1]);
				$('#slidertxt1').html(controlLabel[2]);
				$("#sliderspan1").html(num_array[3]+' ml');
				$('#rightminvals2').html(num_array[2]);
				$('#rightmaxvals2').html(num_array[3]);
				$('#start').html(InsArray[0]);
				$('#stop').html(InsArray[1]);
				$('#label1').html(controlLabel[3]);
				$('#label2').html(controlLabel[4]);
				$('#label3').html(controlLabel[5]);
				$('#label4').html(controlLabel[6]);
				for(i=0;i<6;i++){//white labels
				$('#whiteboard'+i).css({'width':label_prop[0][i]+"px",'height':label_prop[1][i]+"px",'top':mainTop+label_pos[0][i]+"px",'left':mainLeft+label_pos[1][i]+"px"});
				$('#whiteboard'+i).html(label_content[i]);
				}
			}
			//drag function
			drag_elements(0,drag_mate[DragFlag],sample_pos[0][0],sample_pos[1][0],min_maxarr[0][0],min_maxarr[0][1],min_maxarr[0][2],min_maxarr[0][3])	
			function drag_elements(Dragno,sampleId,sampleTop,sampleLeft,MinTops,MaxTops,MinLefts,MaxLefts){//drag object in stage	
				DragFlag++;
				Dragno=DragFlag;
				$('#'+sampleId).draggable({ disabled: false });
				$('#'+sampleId).css({'cursor':'pointer'});	
				$('#'+sampleId).draggable({	
					start:function(event, ui) {	
						if(DragFlag==3){
							$('#measure_jar2').css({'display':'block'});
							$('#measure_jar1').css({'display':'none'});		
						}
							else
							{
							$('#measure_jar1').css({'display':'block'});
							$('#measure_jar2').css({'display':'none'});	
							}
						if(DragFlag==2){//h2so4 cap animation
							$("#H2SO4_cap").animate({top:mainTop+67+'px',left:mainLeft+120+'px'});
						}
						else if(DragFlag==4){//starch cap animation
							$("#starch_cap").animate({top:mainTop+69+'px',left:mainLeft+339+'px'});
						}
						else if(DragFlag==5){//sulphide cap animation
							$("#sulphide_cap").animate({top:mainTop+67+'px',left:mainLeft+445+'px'});
						}
						else if(DragFlag==6){//h2o2 cap animation
							$("#H2O2_cap").animate({top:mainTop+141+'px',left:mainLeft+533+'px'});
						}
					},
					stop : function(event, ui) {
						$('#'+sampleId).draggable({ disabled: true });
						$('#'+sampleId).css({'cursor':'default'});	
						if(this.offsetTop>=mainTop+MinTops &&this.offsetTop<=mainTop+MaxTops && this.offsetLeft>=mainLeft+MinLefts &&this.offsetLeft<=mainLeft+MaxLefts ){//stop function for drag objects(conical flask,h2so4,beaker,starch,sulphide
							drag_funo=DragFlag-1;
							$('#'+sampleId).css({top:mainTop+sample_tiltpos[0][drag_funo]+'px',left:mainLeft+sample_tiltpos[1][drag_funo]+'px'});		rotation(sampleId,-95);//rotation of drag object on stage
							beaker_left=(DragFlag==3)?test=0:test=-5;
							$('#small_beaker_img').css({top:mainTop+test+'px'});
							animate_objects(waterob_arr[drag_funo],0);//animation of water inside drag object
							pour_topval=(DragFlag==3)?199:217;
							$("#pourwaterImg").css({'display':'block','opacity':'1','top':mainTop+pour_topval+'px','left':mainLeft+427+'px','height': '97px'});//water level in measuring jar from beaker and other objects
							beaker_waterlevel=parseInt(11)-parseFloat((11-parseInt(parseInt(90-Q1)))); 
							jar_waterlevel= (DragFlag>1)?((DragFlag==3)?beaker_waterlevel:((DragFlag==4))?parseInt(54):parseInt(21)):parseInt(87)-(parseFloat(6.6)*parseInt(Q));
							$("#Measuring_mask").animate({top:mainTop+jar_waterlevel+'px'},500);//water level according to sliderval
							$("#Measuring_water").animate({top:mainTop-jar_waterlevel+'px'},500);
							$("#pourwaterImg").animate({opacity:'0'						
							},600,function(){//setting back objects to its original position
								$("#pourwaterImg").css({'display':'none'});//water line	
							rotation(sampleId,0);
								beaker_left=(DragFlag==3)?test=-5:test=-5;
								$('#small_beaker_img').css({top:mainTop+test+'px'});
									animate_objects(waterob_arr[drag_funo],1);//water remainning in measuring jar
							$("#"+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'},700,function(){
							if(DragFlag==2){//h2so4 cap animation back
									$("#H2SO4_cap").animate({top:mainTop+26+'px',left:mainLeft+90+'px'});
									}
									else if(DragFlag==4){
									$("#starch_cap").animate({top:mainTop+27+'px',left:mainLeft+313+'px'});
									}
									else if(DragFlag==5){
									$("#sulphide_cap").animate({top:mainTop+26+'px',left:mainLeft+413+'px'});
									}
									else if(DragFlag==6){
									$("#H2O2_cap").animate({top:mainTop+107+'px',left:mainLeft+522+'px'});
									}
								});
								measuring_flag=true;
								if(measuring_flag){//measuring cylinder drag function
								measure_drag();
								measuring_flag=false;	
								}	
							});
							function measure_drag(){//draging measuring cylinder 
								$('#Measuring_cylinder').draggable({ disabled: false });
								$('#Measuring_cylinder').css({'cursor':'pointer'})
								$('#Measuring_cylinder').draggable({
									drag : function(event, ui) {
										$('#Measuring_shadow').fadeOut();
									},	
									stop : function(event, ui) {
										$('#Measuring_cylinder').draggable({ disabled: true });
										$('#Measuring_cylinder').css({'cursor':'default'})	
										if(this.offsetTop>=mainTop+119 &&this.offsetTop<=mainTop+280 && this.offsetLeft>=mainLeft+230 &&this.offsetLeft<=mainLeft+470){//stop function
											if(DragFlag==3){
												//pour_topval=199;
											$('#Measuring_cylinder').css({top:mainTop+196+'px',left:mainLeft+344+'px'});
											}
											else
											{
												
											$('#Measuring_cylinder').css({top:mainTop+199+'px',left:mainLeft+322+'px'});
	
											}
											rotation('Measuring_cylinder',-90);
											$("#Measuring_mask").animate({left:mainLeft+0+'px'});
											$("#Measuring_water").animate({left:mainLeft+6+'px'});
											$("#pourwaterImg").css({'display':'block','opacity':'1','top':mainTop+192+'px','left':mainLeft+322+'px','height': '127px'});//water level in conical flask 	-water level according to slider val	
											big_flasklevel1=parseInt(113)-(parseInt(Q));	
											big_flasklevel2=(DragFlag>=3)?drag_funo+parseInt((11-parseInt(parseInt(90-Q1)))):drag_funo;
											$("#conical_bigwater_mask").animate({top:mainTop+big_flasklevel1-big_flasklevel2+'px'},700);									$("#conical_bigwater,#conical_bluewater").animate({top:mainTop-(big_flasklevel1-12)+big_flasklevel2+'px'},700);				$("#Measuring_mask").animate({top:mainTop+86+'px',left:mainLeft+5+'px'},1);
											$("#Measuring_water").animate({top:mainTop-86+'px',left:mainLeft+0+'px'},1);
											$("#pourwaterImg").animate({opacity:'0'						
											},700,function(){//setting the measuring cylinder to its original pos
												$("#pourwaterImg").css({'display':'none'});	
												rotation('Measuring_cylinder',0);	
												$('#Measuring_cylinder').animate({top:mainTop+225+'px',left:mainLeft+414+'px'});												
												// if(Q==90 &&DragFlag==2){//disabling beaker drag if slider val is 90
												// 	DragFlag=DragFlag+1;
												// }
												// else{
												// 	DragFlag=DragFlag;
												// } 
												drag_elements(DragFlag,drag_mate[DragFlag],sample_pos[0][DragFlag],sample_pos[1][DragFlag],min_maxarr[0][0],min_maxarr[0][1],min_maxarr[0][2],min_maxarr[0][3]);
												$('#Measuring_shadow').css({'display':'block'});	
												if(DragFlag==7){
													calculation();
													$("#glassRod").animate({'left':'314px','top':'79px'},function(){
														$("#glassRod").animate({'left':'314px','top':'180px'},function(){
															stirGlassRod("#glassRod");
															setTimeout(function(){
																clearTimeout(clrGlassRod);
																$("#glassRod").css({
																	'-ms-transform': 'rotate(0deg)',
																	'-ms-transform-origin': '50% 50%',
																	'-webkit-transform': 'rotate(0deg)',
																	'-webkit-transform-origin': '50% 50%',
																	'transform': 'rotate(0deg)',
																	'transform-origin': '50% 50%'
																});
																$("#glassRod").css({'left':'215px','top':'174px'});
															},5000);
														});
													});
												}	
											});
										}
										else
										{
											$('#Measuring_shadow').css({'display':'block'});
											$('#Measuring_cylinder').css({top:mainTop+225+'px',left:mainLeft+414+'px'});
											$('#Measuring_cylinder').draggable({ disabled: false });
											$('#Measuring_cylinder').css({'cursor':'pointer'});
										}
									}
								});
							}
						}
						else
						{
							$('#'+sampleId).draggable({ disabled: false });
							$('#'+sampleId).css({'cursor':'pointer'});	
							$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});console.log(sampleTop);
							if(DragFlag==2){//h2so4 cap animation
							$("#H2SO4_cap").animate({top:mainTop+26+'px',left:mainLeft+90+'px'});
							}
							else if(DragFlag==4){
							$("#starch_cap").animate({top:mainTop+27+'px',left:mainLeft+313+'px'});
							}
							else if(DragFlag==5){
							$("#sulphide_cap").animate({top:mainTop+26+'px',left:mainLeft+413+'px'});
							}
						}	
					}
				});
			}
			function animate_objects(anim_obj,after){//animating water
				if(after==0){	
					water_level_before=(DragFlag==3)?2:0
					$('#'+anim_obj+'mask').css({top:mainTop+water_level_before+'px',left:mainLeft-waterpos[drag_funo]+'px'});
					$('#'+anim_obj).css({top:mainTop+0+'px',left:mainLeft+waterpos[drag_funo]+'px'});	
				}
				else if(after==1){
					beaker_waterback=3*parseInt(Q1/10)
					conical_waterlevel=(DragFlag>1)?((DragFlag==3)?beaker_waterback:parseInt(16)):parseInt(24)+(2*parseInt(Q/10));				$('#'+anim_obj+'mask').css({top:mainTop+conical_waterlevel+'px',left:mainLeft+0+'px'});
					$('#'+anim_obj).css({top:mainTop-conical_waterlevel+'px',left:mainLeft+0+'px'});
				}
			}
			//========================stop watch function=============================
			function pad(num, size) {// NO OF DIGITS TO DISPLAY IN STOPWATCH
				var s = "0000" + num;
				return s.substr(s.length - size);
			}
			function formatTime(){//format of time to display
				newTime = '';
							var mup,hup;
			if(ms<1000){
				ms=ms+200;
				mup=false;
				hup=false; 
			}
			else if(ms==1000){
				ms=00;
				mup=true;

			}
			if(mup==true && s<59){
				s=s+01;
			}
			else if(mup==true && s==59){
				s=00;hup=true;
			}
			if(hup==true && m<59){
				m=m+01;
			}
			else if(hup==true && m==59){
				m=00;
			}
				new_update=parseInt(m*60)+s;
				newTime = pad(m, 2) + ':' + pad(s, 2);
				return newTime;
			}
			function update_time() {//updating time value in text box
				$('#timer').html(formatTime());
			}
			function start(){
				$('#start').hide();
				$('#stop').show();//StopWatch light - Green.
				$("#Green_img").css({"opacity":"1"});
				$("#red_img").css({"opacity":"0.5"});
			}
			function stop(){
				clearInterval(clockTimer);
				$('#stop').hide();
				$('#start').show();
				$("#Green_img").css({"opacity":"0.5"});//StopWatch light - Red.
				$("#red_img").css({"opacity":"1"});
			}
			function calculation(){	//calculationof time and result

				time_calc=Math.round(parseFloat((1271.1*parseFloat(1/Q))+parseFloat(10.846)));	console.log(time_calc+" "+Q);
				m = s = 0;
				stop();
				start();
				clockTimer= setInterval(function(){ 
					update_time();
					if(new_update==time_calc){
						$("#conical_bigwater,#conical_bluewater").stop(true);
						$("#conical_bigwater").css({opacity:0});
						$("#conical_bluewater").css({opacity:1}); 
					stop();
				} 
				},150);
			}		
			function rotation(rotateId,degree){//Function to rotate object
				$('#'+rotateId).css({"WebkitTransform":"rotate("+degree+"deg)","-moz-transform":"rotate("+degree+"deg)","-ms-transform":"rotate("+degree+"deg)","transform":"rotate("+degree+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden'});
			}
			function Reset_items(){//reset function while changing slider values
				m = s = ms = 0;
				measuring_flag=false
				opacity_val=0,opacity_val1=1;
				stop();
				$('#timer').html('00:00');
				for(var i=0;i<5;i++){
				$('#'+waterob_arr[i]+'mask').css({top:mainTop+water_originalpos[0][i]+'px',left:mainLeft+0+'px'});
				$('#'+waterob_arr[i]).css({top:mainTop+water_originalpos[1][i]+'px',left:mainLeft+0+'px'});	
				$('#'+drag_mate[i]).css({top:mainTop+sample_pos[0][i]+'px',left:mainLeft+sample_pos[1][i]+'px','cursor':'default'});
				rotation(drag_mate[i],0)
				$('#'+waterob_arr[i]+'mask','#'+waterob_arr[i],'#'+drag_mate[i]).stop(true);
				$('#'+drag_mate[i]).draggable({ disabled: true });
				}
				$("#H2SO4_cap").css({top:mainTop+26+'px',left:mainLeft+90+'px'});
				$("#starch_cap").css({top:mainTop+27+'px',left:mainLeft+313+'px'});
				$("#sulphide_cap").css({top:mainTop+26+'px',left:mainLeft+413+'px'});
				$('#small_beaker_img').css({top:mainTop-5+'px',left:mainLeft-3+'px'});
				$("#pourwaterImg").css({'display':'none','opacity':'1','top':mainTop+217+'px','left':mainLeft+427+'px','height': '97px'});	
				rotation('Measuring_cylinder',0);
				$('#Measuring_mask,#Measuring_water,#conical_bigwater_mask,#conical_bluewater,#conical_bigwater').stop(true);
				$('#Measuring_shadow').css({'display':'block'});
				$('#Measuring_mask').css({top:mainTop+86+'px',left:mainLeft+5+'px'});	
				$('#Measuring_water').css({top:mainTop-86+'px',left:mainLeft+0+'px'});
				$('#conical_bigwater_mask').css({top:mainTop+119+'px',left:mainLeft+0+'px'});
				$('#conical_bigwater').css({top:mainTop-107+'px',left:mainLeft+0+'px','opacity':1});	
				$('#conical_bluewater').css({top:mainTop-107+'px',left:mainLeft+0+'px','opacity':0});
				$('#measure_jar1').css({'display':'block'});
				$('#measure_jar2').css({'display':'none'});	
				$('#Measuring_cylinder').css({top:mainTop+225+'px',left:mainLeft+414+'px'});
				DragFlag=0;				
				drag_elements(0,drag_mate[DragFlag],sample_pos[0][0],sample_pos[1][0],min_maxarr[0][0],min_maxarr[0][1],min_maxarr[0][2],min_maxarr[0][3]);	
				clearTimeout(clrGlassRod);
				$("#glassRod").css({'left':'215px','top':'174px'});
				$("#glassRod").stop();
				gAngle=0;
			}
			//*--Function to click reload button to reset all events---
			$("#reload").click(function(){
				window.location.reload();	   
			});
		});	 			
	};

