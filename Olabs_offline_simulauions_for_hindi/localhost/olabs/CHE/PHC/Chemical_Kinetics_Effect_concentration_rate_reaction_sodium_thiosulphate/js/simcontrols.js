//*--Ready function---------
var controlLabel,InsArray,num_array,helprarr;
var Q=5,Q1=45,opacity_val=0,opacity_val1=1,equat_val,equat_val1,Q2=0.01;
var drag_measurepos,water_conciallevel1,water_conciallevel2,conical_fullwater,conical_fullwater2;
var measure_water,measure_na2s03,fun_var,dragNo,big_flasklevel1,big_flasklevel2,divline_posfull;
var divline_pos,divLineprop,measure_waterinner;
var dropCnt=0,dropEvt,dropTop,solnDivTop;
var solnInc=0.375,left_inc=0.25,left_var=6,width_inc=0.5,width_var=55,coni_waterimg=-51;
var bure_sol,bure_soltop,bure_solinc=4.625,bure_soltopinc=4.625,zoomtop,zoom_inc=20.5;
var rotCount=0,flag_shake=true,deg_shake=-14,rotateEvt;
 var stop_count=0;
var m = s = ms = 0,clockTimer,click_flag=0,time_calc,inverse_time,cons_val=0.0003,slope_val=0.1307;
var min_time,sec_time,ms_time=0,new_update,speed_var,opac_val,opac_valinc=0,opac_valinc1=1,stop_countarr=[],dec_var=0,trips1,trips2,trip;
var tripFlag=0;
var gt=$;
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Kinetics Study on the Reaction between Sodium Thiosulphate and Hydrochloric Acid");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));


	controlLabel=[gt.gettext("Reset"),gt.gettext('Volume of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>:'),gt.gettext('Volume of water :'),gt.gettext('Conc.of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> in total volume:'),gt.gettext('Conc.of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>: 0.1 M')];
	num_array=[5,50,0,45,0.01];
	InsArray=[gt.gettext('START'),gt.gettext("STOP"),gt.gettext("Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>"),gt.gettext("Water"),gt.gettext("Click on the knob of burette to add another 5ml of HCl."),gt.gettext(" Time exceeded to add the remaining HCl. Reset the Experiment."),gt.gettext("1M of HCl ")];
	helprarr=[gt.gettext("Select the volume of the sodium <br>thiosulphate solution."),gt.gettext("Drag the measuring jar towards the conical<br> flask to pour  Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> solution into it."),gt.gettext("Drag the measuring jar towards the conical <br>flask to pour water into it."),gt.gettext("Click on the knob of the burette to <br>add 5 ml of HCl to the solution."),gt.gettext("Click on the conical flask <br> to shake it."),gt.gettext("Click on the knob of burette <br>to add another 5ml of HCl.")];
	drag_measurepos=[[188,188],[397,488]];
	$(document).ready(function() {
	tripFlag=3;	
			tripfunc();
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		solnDivTop=mainTop+63;
		dropTop=parseInt(217+solnDivTop)-5;
		bure_sol=$('#burettewater').position().top;
		bure_soltop	=$('#bure_sol').position().top;
		zoomtop=$('#zoom_measure').position().top;
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		init();
		
		$(".rangeSlider").on('input', function() {//on change function of slider. 
			changeSliderval(this.id,this.value);
			volumeset();
			Reset_items();
		});	
		function changeSliderval(id,val){//slider value change 
			if(id=="volume_slider"){
				Q=val;
				Q1=parseInt(50)-(parseInt(Q));//slider 2 value
				$("#rightVal").html(Q+' ml');
				$("#sliderspan1").html(Q1+' ml');
				$("#volume_slider2").val(Q1);
				Q2=parseFloat((0.1*Q)/(50));
				$('#conVal').html(Q2+' M');
			}
		}
		function init(){//Function for initial setting in stage and label controls---	
			$('#reload').attr('value',controlLabel[0]);
			$('#Ins01').html(controlLabel[1]);
			$('#concentration').html(controlLabel[3]);
			$('#concentration_org').html(controlLabel[4]);	
			$("#rightVal").html(num_array[0]+'ml');
			$('#rightminvals').html(num_array[0]);
			$('#rightmaxvals').html(num_array[1]);
			$('#slidertxt1').html(controlLabel[2]);
			$("#sliderspan1").html(num_array[3]+' ml');
			$('#rightminvals2').html(num_array[2]);
			$('#rightmaxvals2').html(num_array[3]);
			$('#conVal').html(num_array[4]+' M');
			$('#na2so3_labeltxt').html(InsArray[2]);
			$('#water_labeltxt').html(InsArray[3]);				
			$('#start').html(InsArray[0]);
			$('#stop').html(InsArray[1]);
			$('#msg1').html(InsArray[4]);
			
		}
		function volumeset(){//for setting the water level in measuring jar based on slider val
			measure_na2s03=parseInt(91-(parseInt(Q/5)*8));
			$("#Na2s03Measuring_water").css({top:mainTop+measure_na2s03+'px'});
			measure_water=(Q1==0)?105:parseInt(26+(parseInt(Q/5)*7));
			measure_waterinner=(Q1==0)?-93:parseInt(-14-(parseInt(Q/5)*7));
			$("#waterMeasuring_mask").css({top:mainTop+measure_water+'px'});
			$("#waterMeasuring_water").css({top:mainTop+measure_waterinner+'px'});
		}
		measure_drag('Na2s03',0)
		function measure_drag(targetid,dragNo){//draging measuring cylinder function
			$('#'+targetid+'Measuring_cylinder').draggable({ disabled: false });
			$('#'+targetid+'Measuring_cylinder').css({'cursor':'pointer'})
			$('#'+targetid+'Measuring_cylinder').draggable({
				drag : function(event, ui) {
					$('#'+targetid+'Measuring_shadow').css('display','none');
				},	
				stop : function(event, ui) {//stop function
					$('#'+targetid+'Measuring_cylinder').draggable({ disabled: true });
					$('#'+targetid+'Measuring_cylinder').css({'cursor':'default'})	
					if(this.offsetTop>=mainTop+40 &&this.offsetTop<=mainTop+270 && this.offsetLeft>=mainLeft+250 &&this.offsetLeft<=mainLeft+540){//stop function
						$('#'+targetid+'Measuring_cylinder').css({top:mainTop+146+'px',left:mainLeft+316+'px'});
						rotation(targetid+'Measuring_cylinder',-90);
						$("#"+targetid+"Measuring_mask").css({left:mainLeft+0+'px',top:mainTop+1+'px'});
						$("#"+targetid+"Measuring_water").css({left:mainLeft+11+'px',top:mainTop+0+'px'});
						$("#pourwaterImg").css({'display':'block','opacity':'1','top':mainTop+212+'px','left':mainLeft+274+'px','height': '97px'});//water level in conical flask 	-water level according to slider val (both water and na2so3sol)	
						big_flasklevel1=parseInt(86)-(parseInt(Q/5)*2.3);	
						big_flasklevel2=parseInt(-77)+((parseInt(Q/5)*2.3)+3);
						water_conciallevel1=63-big_flasklevel1;
						water_conciallevel2=-51-big_flasklevel2;
						divline_pos=(parseInt(Q/5)*0.6);
						divline_posfull=(dragNo==0)?divline_pos:divline_pos+(parseInt(Q1/5)*0.6);
						divLineprop=(parseInt(Q/5)*1)
						divFullLineprop=(dragNo==0)?divLineprop:divLineprop+(parseInt(Q1/5)*1)
						conical_fullwater=(dragNo==0)?big_flasklevel1:parseInt(big_flasklevel1+water_conciallevel1);
						conical_fullwater2=(dragNo==0)?big_flasklevel2:parseInt(big_flasklevel2+water_conciallevel2);
						$("#conical_watermask").animate({top:mainTop+conical_fullwater+'px'},700);
						$("#div_line").animate({left:mainLeft+divline_posfull+'px',width:65-divFullLineprop+'px'},700);																		
						$("#conical_water").animate({top:mainTop+conical_fullwater2+'px'},700);	
						$("#pourwaterImg").animate({opacity:'0'						
						},700,function(){//setting the measuring cylinder to its original pos
							$("#pourwaterImg").css({'display':'none'});	
							rotation(targetid+'Measuring_cylinder',0);	
							$('#'+targetid+'Measuring_cylinder').animate({top:mainTop+drag_measurepos[0][dragNo]+'px',left:mainLeft+drag_measurepos[1][dragNo]+'px'});	
							if(dragNo==0&&Q1>0){//water added- na2 level less than 50)
								measure_drag('water',1);
							}
							if(Q1==0 ||dragNo==1){//burette knob function call
								burette_func();
							}
						});		
					}
					else
					{//drag is not within the offset area(return back to its orginalpos)
						$('#'+targetid+'Measuring_shadow').css({'display':'block'});
						$('#'+targetid+'Measuring_cylinder').css({top:mainTop+drag_measurepos[0][dragNo]+'px',left:mainLeft+drag_measurepos[1][dragNo]+'px'});
						$('#'+targetid+'Measuring_cylinder').draggable({ disabled: false });
						$('#'+targetid+'Measuring_cylinder').css({'cursor':'pointer'});
					}
				}
			});
		}
		function burette_func(){//burette knob click function
		//
		$('#buretee_open').css({cursor:'pointer'});	
		$('#buretee_open').on('click',function(){
			$('#toottip').css({display:'none'});
		click_flag++;
		$('#buretee_open').css({display:'none'});	
		$('#buretee_close').css({display:'block'});	
		clearInterval(dropEvt);
		dropEvt=setInterval(drop_func,410);
		});
		}
		function drop_func(){//drops function
		$('#drops').css({display:'block',top:mainTop+205+'px'});
		$('#drops').animate({top:mainTop+dropTop+'px'},function(){	
		solutionIncrement();
		$('#drops').css({display:'none',top:mainTop+205+'px'});	
		});
		}
		function solutionIncrement(){//for changing of sol level in conical burette and zoom reading
			if(dropCnt<8){
				dropCnt++;//cal for water pos
				solnDivTop=solnDivTop-solnInc;
				dropTop=217+(solnDivTop-5);
				coni_waterimg=coni_waterimg+solnInc;
				left_var=left_var+left_inc;
				width_var=width_var-width_inc;
				bure_sol=bure_sol+bure_solinc;
				bure_soltop=bure_soltop-bure_soltopinc;
				zoomtop=zoomtop-zoom_inc;//setting position for conical water,zoom scale,burette water
				$('#conical_watermask').css({top:+solnDivTop+'px'});
				$('#conical_water').css({top:+coni_waterimg+'px'});
				$("#div_line").css({left:mainLeft+left_var+'px',width:width_var+'px'});	
				$('#burettewater').css({top:mainTop+bure_sol+'px'});
				$('#bure_sol').css({top:mainTop+bure_soltop+'px'});
				$('#zoom_measure').css({top:mainTop+zoomtop+'px'});
			}
			else
			{
				clearInterval(dropEvt);
				$('#drops').stop(true);
				$('#drops').css({display:'none',top:mainTop+205+'px'});	
				$("#buretee_open").off('click');
				$('#buretee_open,#buretee_open').css({cursor:'default'});
				$('#buretee_open').css({display:'block'});	
				$('#buretee_close').css({display:'none'});
				if(click_flag<2){//on on first click of knob (shake function)
				tripFlag=2;
				tripfunc();
				$('#conical_flask').css({cursor:'pointer'});	
				$('#conical_flask').click(function(){
				$("#conical_flask").unbind('click');	
				$('#conical_flask').animate({top:mainTop+208+'px'});
				clearInterval(rotateEvt);
				rotateEvt=setInterval(shaketube,20);
					});
				}
			}
		}		
		function shaketube(){//shaking testtube	
			rotCount++;	
			if(flag_shake==true){
				if(deg_shake<=10){//0
					deg_shake++;
					if(deg_shake==10){//0		
						flag_shake=false;	
					}
				}
			}else{
				deg_shake--;
				if(deg_shake==-10){//20
					flag_shake=true;
				}
			}
			rotation('conical_flask',deg_shake);	
			if(rotCount>=150){	//shaking stop
				clearInterval(rotateEvt);
				$("#conical_flask").unbind('click');	
				rotation('conical_flask',0);
				$('#conical_flask').css({cursor:'default'});
				$('#conical_flask').css({top:mainTop+217+'px'});
				$('#toottip').css({display:'block'});	
				dropCnt=0;
				burette_func();
				calculation();		
			}	
		}	
		function rotation(rotateId,degree){//Function to rotate object
			$('#'+rotateId).css({"WebkitTransform":"rotate("+degree+"deg)","-moz-transform":"rotate("+degree+"deg)","-ms-transform":"rotate("+degree+"deg)","transform":"rotate("+degree+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden'});
		}
		function pad(num, size) {// NO OF DIGITS TO DISPLAY IN STOPWATCH
			var s = "0000" + num;
			return s.substr(s.length - size);
		}
		function formatTime(){//format of time to display
			newTime = '';
			var mup,hup;
			if(ms<1000){
				ms=ms+250;
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
			new_update=pad(m, 2) + ':' + pad(s, 2);
			newTime = pad(m, 2) + ':' + pad(s, 2) ;
			return newTime;
		}
		function update_time() {//updating time value in text box
			$('#timer').html(formatTime());
			stop_count++;
			if(stop_count>=200&&click_flag<2){//warning text display and stoping all events
				stop();
				$("#buretee_open").off('click');
					$('#toottip img').css('height','53px');
				
				$('#msg1').html(InsArray[5]);
				 $('#timer').html('00:00');
				$('#buretee_open').css({cursor:'default'});
				$('#Conical_zoom ').css({display:'none'});
			}
			else{
				$('#buretee_open').css({cursor:'pointer'});
				min_time=((min_time).toString().length<2)?min_time="0"+min_time:min_time=min_time;
				sec_time=((sec_time).toString().length<2)?sec_time="0"+sec_time:sec_time=sec_time;	
				if(min_time<3){//opacity value (appearance of yellow color)	
				if(click_flag==2){
				stop_countarr.push(stop_count);
				dec_var=parseInt(stop_countarr[0])-1;
				opac_val=parseInt((parseInt(time_calc)*5)-dec_var);
				opac_valinc+=parseFloat(0.88/opac_val);
				opac_valinc1-=parseFloat(0.88/opac_val);
				}
				else
				{
				opac_valinc=0;
				opac_valinc1=1;
				}
				}
				else
				{
				opac_val=parseInt(time_calc)*5;	
				opac_valinc+=parseFloat(0.88/opac_val);
				opac_valinc1-=parseFloat(0.88/opac_val);	
				}
				console.log(opac_valinc+"---"+opac_valinc1)
				$("#conicalYellow_water,#Yellow_ring").css({opacity:opac_valinc});
				$("#X_mark,#conical_water").css({opacity:opac_valinc1});
				if(new_update==min_time+":"+sec_time){//stop function call of stopwatch
					//ms_time=ms_time*1000;
					stop();
					$('#timer').html(min_time+":"+sec_time);
					$("#conicalYellow_water,#Yellow_ring").css({opacity:1});
					$("#X_mark,#conical_water").css({opacity:0});
				}
			}
		}
		function start(){//start function
			$('#start').hide();
			$('#stop').show();//StopWatch light - Green.
			$("#Green_img").css({"opacity":"1"});
			$("#red_img").css({"opacity":"0.5"});
		}
		function stop(){//stop function
			clearInterval(clockTimer);
			$('#stop').hide();
			$('#start').show();
			$("#Green_img").css({"opacity":"0.5"});//StopWatch light - Red.
			$("#red_img").css({"opacity":"1"});
		}
		function calculation(){	//calculation of time and result
			inverse_time=(parseFloat((slope_val*Q2))+parseFloat(cons_val));
			time_calc=(1/inverse_time).toFixed(4);
			min_time=parseInt(time_calc/60);
			sec_time=parseInt(time_calc%60);
			ms_time=parseFloat(time_calc-parseInt(time_calc)).toFixed(3);
			m = s = ms = 0;
			stop();
			start();
			speed_var=(min_time<=1)?speed_var=25:speed_var=10;
			clockTimer= setInterval(function(){update_time();},speed_var);
			$('#Conical_zoom ').css({display:'block'});
		}	
		function tripfunc(){
	console.log(tripFlag);
		if(tripFlag==2){
				$('.trip-block').hide();
				trip.stop();
				trips1.stop();
					trips2 = new Trip([
						{
						sel : $('#conical_img'),
						position : 'n',
						content : helprarr[4],
						expose : false,
						delay :3000
						},
			]);
			trips2.start(); 
			window.trip = trips2;
		}
		else if(tripFlag==3){
		trips1 = new Trip([
			{
			sel : $('#burettewater'),
			position : 'e',
			content : InsArray[6],
			expose : false,
			delay :10000
			},
			]);
			trips1.start(); 
			window.trip = trips1;}	
		}	
		function Reset_items(){//reset function while changing slider values
			tripFlag=3;
			tripfunc();
			$('#Na2s03Measuring_cylinder').draggable({ disabled: false });
			$('#Na2s03Measuring_cylinder').css({'cursor':'pointer',top:mainTop+drag_measurepos[0][0]+'px',left:mainLeft+drag_measurepos[1][0]+'px'});	
			$('#waterMeasuring_cylinder').draggable({ disabled: true });
			$('#waterMeasuring_cylinder').css({'cursor':'default',top:mainTop+drag_measurepos[0][1]+'px',left:mainLeft+drag_measurepos[1][1]+'px'});
			measure_drag('Na2s03',0);
			$('#Na2s03Measuring_shadow,#waterMeasuring_shadow').css('display','block');	
			$('#Na2s03Measuring_cylinder,#waterMeasuring_cylinder,#pourwaterImg,#div_line,#conical_water,#conical_watermask').stop(true);
			rotation('Na2s03Measuring_cylinder,waterMeasuring_cylinder,conical_flask',0);	
			$("#Na2s03Measuring_mask").css({left:mainLeft+11+'px',top:mainTop+11+'px'});
			$("#Na2s03Measuring_water").css({left:mainLeft+0+'px'});
			$("#waterMeasuring_mask").css({left:mainLeft+10+'px'});
			$("#waterMeasuring_water").css({left:mainLeft+0+'px'});
			$("#conical_watermask").css({top:mainTop+86+'px'});
			$("#div_line").css({left:mainLeft+0+'px',width:64+'px'});																		
			$("#conical_water").css({top:mainTop-77+'px'});
			$('#buretee_open').css({cursor:'default',display:'block'});
			$('#toottip,#Conical_zoom,#buretee_close').css({display:'none'});
			$('#drops').css({left:mainLeft+267+'px',top:mainTop+205+'px',display:'none'});
			$('#drops').stop(true);
			$("#buretee_open").unbind('click');
			clearInterval(dropEvt);	
			solnDivTop=mainTop+63;
			dropTop=parseFloat(217+solnDivTop)-5;	
			dropCnt=0;
			solnInc=0.375,left_inc=0.25,left_var=6,width_inc=0.5,width_var=55;	
			$('#burettewater').css({top:mainTop+29+'px'});
			$('#bure_sol').css({top:mainTop+0+'px'});
			$('#zoom_measure').css({top:mainTop-45+'px'});
			bure_sol=$('#burettewater').position().top;
			bure_soltop	=$('#bure_sol').position().top;
			zoomtop=$('#zoom_measure').position().top;
			bure_solinc=4.625,bure_soltopinc=4.625,zoomtop,zoom_inc=20.5;
			coni_waterimg=-51;
			$('#conical_flask').css({cursor:'default'});
			clearInterval(rotateEvt);
			rotCount=0,flag_shake=true,deg_shake=-14;
			$('#conical_flask').css({top:mainTop+217+'px'});
			m = s = ms = 0;
			min_time = sec_time = ms_time=0;
			click_flag=0,stop_count=0;
			clearInterval(clockTimer);
			stop();
			$('#timer').html('00:00');
			$('#msg1').html(InsArray[4]);
			opac_valinc=0,opac_valinc1=1;
			$("#conicalYellow_water,#Yellow_ring").css({opacity:0});
			$("#X_mark,#conical_water").css({opacity:1});
			dec_var=0;
			stop_countarr=[];
			$('#toottip img').css('height','46px');
		}	
		$("#reload").click(function(){//*--Function to click reload button to reset all events---
			window.location.reload();	   
		});
	});	 			
};			


