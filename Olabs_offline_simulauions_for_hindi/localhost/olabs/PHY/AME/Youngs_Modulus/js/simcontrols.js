//*--Ready function---------
var controlLabel,InsArray,opt1,opt2,combo_2val=0;
var Q=0.5,Q1=0.1,Q2=0,color_arr;
var mainTop,mainLeft;
var rotation,click_flag=0;
var cross_frameval;
var count=0,count1=0;
var youngs_modulus,gravity_val,combo_1val=0;
var rad_con,ext_l,extension_l,ini_read=0.42;
var ini_1,sphero_read,pitch,final_read,circular_scale,flag_1=0;
var tot_degree,half_degree,initial_rot=229,full_rot,half_rot,buble_incre=0,buble_incre1=0,zoom_top=0,numclick_arr=[];
var change_flag=0,rotate_inc,no_divi,incre_var,top_deg=229,top_incre=12.9,trip,zoom_inc=19,x1,x2,split_deg=0,prev_rotation=[],pitcharr=[],bublemove,num_click;
var cmn={diff_var:0,isClicked:true,num_arr:[1,2,3,4]}
var deg_flag=0,deg_flag1=0,diff_var,curr_sli=[],adjus_flag=[],prev_rotationmin=[];
var gt=$;
function changeRightWeight(id,val){	//slider value change 
	if(id=="slide_val1"){
		Q=val;
		$("#rightVal,#arrow_txt").html(Q+' m');
	}
	else if(id=="slide_val2"){	
		Q1=val;
		$("#sliderspan1").html(Q1+' mm');	
	}
	else if(id=="slide_val3"){	
		Q2=val;
		$("#sliderspan").html(Q2+' kg');
	}		
}
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Young’s Modulus");
	popup_msg=gt.gettext("Click on the arrow button to move the spherometer.");
	controlLabel=[gt.gettext("Reset"),gt.gettext("Young's modulus,Y= "),gt.gettext("Young's modulus,Y= ")];
	InsArray=[gt.gettext('Select environment: '),gt.gettext("Add weighs(kg)"),gt.gettext("Select wire material:"),gt.gettext("Wire radius:"),gt.gettext('Weight hanger weight:'),gt.gettext('Wire length:'),0.5,1,0.1,4,0,gt.gettext('Show result'),gt.gettext('0.5 m'),gt.gettext('Spirit level'),gt.gettext('Spherometer')];	
	opt2=[gt.gettext("Aluminium"),gt.gettext("Copper"),gt.gettext("Steel"),gt.gettext("Brass")];
	opt1=[gt.gettext("Earth (g=9.8 m/s&#178;)"),gt.gettext("Moon (g=1.6 m/s&#178;)"),gt.gettext("Uranus (g=8.69 m/s&#178;)")];
	color_arr=['#000000','#a8624a','#9d9d9d','#b6916d'];
	gravity_val=[9.8,1.6,8.69];
	youngs_modulus=[69*Math.pow(10, 9),117*Math.pow(10, 9),1.9*Math.pow(10, 11),113.5*Math.pow(10, 9)];
	$(document).ready(function() {
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		addLabel();			
		addintoDropDown( $('#Combo1'),opt1);
		addintoDropDown( $('#Combo2'),opt2);
		combo_sliderchange();
		function addLabel(){//Function for adding label for all controls---	
			$('#reload').attr('value',controlLabel[0]);
			$('#Ins1').html(InsArray[0]);
			$('#Ins2').html(InsArray[2]);
			$('#Ins01').html(InsArray[5]);
			$('#rightminvals,#rightmaxvals2').html(InsArray[6]);
			$('#rightmaxvals').html(InsArray[7]);
			$("#rightVal").html(Q+' m');
			$('#slidertxt').html(InsArray[4]);	
			$('#sliderspan').html(Q2+' kg');
			$('#slidertxt1').html(InsArray[3]);	
			$('#sliderspan1').html(Q1+' mm');
			$('#rightminvals2').html(InsArray[8]);
			$('#rightmaxvals1').html(InsArray[9]);
			$('#rightminvals1').html(InsArray[10]);
			$("#resultLabel").html(InsArray[11]);
			$("#arrow_txt").html(InsArray[12]);
			$("#heading_txt").html(InsArray[13]);
			$("#heading_txt1").html(InsArray[14]);
		}
		$("#showAns").click(function () {//result section
			$("#answerLabel").html(controlLabel[1]+'<b>'+youngs_modulus[combo_2val].toExponential()+'</b>').toggle(this.checked);
		});
		function addintoDropDown(getId,valueSet){//Function for adding option in combo box---		
			var selected = getId;
			$.each(valueSet, function(val, text) {
			selected.append($('<option></option>').val(val).html(text));});			
		}
		$("#Combo1").change(function(){	//on change function of combo box. 	
			combo_sliderchange();
			Resetitems();
			$("#wires_div_right").css({'background':'black'});
			$('#Combo2').val('');
		});
		$("#Combo2").change(function(){
			combo_sliderchange();
			Resetitems();
		});
		$(".rangeSlider").on('input', function() {//on change function of slider. 	
			changeRightWeight(this.id,this.value);
			combo_sliderchange();
		});
		if(cmn.isClicked==true){
		$("#arrow_right").bind('click',function(){//right arrow
			click_flag=1;
			sphero_rotation();
		});
		$("#arrow_left").bind('click',function(){//left arrow
			click_flag=0;
			sphero_rotation();
		});}
		function combo_sliderchange(){//combo slider change function
			combo_2val=$("#Combo2 option:selected").val();//combo 2 change 
			combo_1val=$("#Combo1 option:selected").val();//combo1 change
			$( "#showAns" ).prop( "disabled", true ); 
			$('#showAns').prop('checked', false); 
			cmn.isClicked=true;
			$("#answerLabel").hide();
			$("#zoom_bubble,#air_bubble").stop(true);
			change_flag++;
			$("#wires_div_right").css({'background':color_arr[combo_2val],'width':parseFloat(2+((Q1*10)-1)*0.5+'px')});	//wire change color and width
			$("#wires_div").css({'width':parseFloat(2+((Q1*10)-1)*0.5+'px')});
			if(curr_sli[(curr_sli).length-2]>Q2 && adjus_flag[(adjus_flag).length-1]==1){
				$('#arrow_rightdumm').css('display','block');	
				$('#arrow_Leftdumm').css('display','none');
				trip = new Trip([{
				sel : $('#arrow_left'),position : 'w',content : popup_msg,expose : false,delay :1500},]);
				trip.start(); 
				window.trip = trip;	}
			else{
				$('#arrow_rightdumm').css('display','none');	
				$('#arrow_Leftdumm').css('display','block');
				trip = new Trip([{sel : $('#arrow_right'),position : 'w',content : popup_msg,expose : false,delay :1500},]);
				trip.start(); 
				window.trip = trip;	
			}
			if(Q2=='0'){//resetting values at 0
				$("#air_bubble").animate({left:mainLeft+39+'px'}, {duration:900,easing:'swing'});
				$("#zoom_bubble").animate({left:mainLeft+118+'px'}, {duration:900,easing:'swing'});
				$("#Youngs_rightFrame").css({top:124+'px'});
				$("#Hanging_right").css({height:12+'px'});
				$('#arrow_rightdumm').css('display','block');	
				$('#arrow_Leftdumm').css('display','block');
				trip.stop(); 
				$('.trip-block').css('display','none');
				$('#Youngs_crossrod1,#Youngs_crossrod2,#zoom_rod').css({"WebkitTransform":"rotate("+0+"deg)","-moz-transform":"rotate("+0+"deg)","-ms-transform":"rotate("+0+"deg)","transform":"rotate("+0+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden'});
			}
			else{
				$('.trip-block').css('display','block');//popuop
				$("#Hanging_right").css({height:parseFloat(12+(Q2*2)*6)+'px'});	//adding weight,rod slanting, bubble movement	
				$("#zoom_bubble,#air_bubble").stop(true);
				$("#Youngs_rightFrame").css({top:124+mainTop+parseFloat((Q2*2))+'px'});
				rad_con=Math.pow(Q1/1000, 2);//calculation-excel
				ext_l=((Q2*gravity_val[combo_1val]*Q)/(3.14*rad_con*youngs_modulus[combo_2val].toExponential()));
				extension_l=(ext_l*100)*10;
				ini_1=ini_read*100;
				sphero_read= parseFloat(extension_l+ini_read).toFixed(2);
				pitch= parseInt(sphero_read);
				final_read=Math.round((sphero_read-pitch)*100,2);
				circular_scale=(ini_1<final_read)?circular_scale=(100+ini_1)-final_read:circular_scale=ini_1-final_read;
				half_degree=((circular_scale*3.6)-2.2).toFixed(1);
				full_rot=parseFloat(initial_rot)+ parseFloat(pitch*360);
				tot_degree=parseFloat(full_rot)+parseFloat(half_degree);
				no_divi=parseInt(((parseInt(half_degree)+parseInt(2.2))/3.6));
				num_click=(final_read<42 && final_read>=16)?cmn.num_arr[0]:((final_read<16 && final_read>0)||(final_read<100 && final_read>=91))?cmn.num_arr[1]:(final_read<91 && final_read>=66)?cmn.num_arr[2]:cmn.num_arr[3];
				if(curr_sli[(curr_sli).length-2]>Q2 && adjus_flag[(adjus_flag).length-1]==1){//Bubble movement (after spherometer adjustment)
					$("#zoom_bubble").animate({left:parseFloat(154+((Q2*2)*4))}, {duration:900,easing:'swing'});//bubble movement animation on adding weight
					$("#air_bubble").animate({left:parseFloat(39+(Q2*2))}, {duration:900,easing:'swing'});
					cross_frameval=-(parseFloat((Q2*2)/2));//cross rod slanting 
					$('#Youngs_crossrod1,#Youngs_crossrod2,#zoom_rod').css({"WebkitTransform":"rotate("+cross_frameval+"deg)","-moz-transform":"rotate("+cross_frameval+"deg)","transform":"rotate("+cross_frameval+"deg)","transform-origin": "100% 50%","-webkit-transform-origin": "100% 50%","-moz-transform-origin": "100% 50%"});
					rotation=prev_rotationmin[(prev_rotationmin).length-1];
				}
				else{//Bubble movement (Before spherometer adjustment)
					$("#zoom_bubble").animate({left:parseFloat(82-((Q2*2)*4))}, {duration:900,easing:'swing'});	//bubble movement animation on adding weight
					$("#air_bubble").animate({left:parseFloat(39-(Q2*2))}, {duration:900,easing:'swing'});	
					cross_frameval=(parseFloat((Q2*2)/2));//cross rod slanting 
					$('#Youngs_crossrod1,#Youngs_crossrod2,#zoom_rod').css({"WebkitTransform":"rotate("+cross_frameval+"deg)","-moz-transform":"rotate("+cross_frameval+"deg)","transform":"rotate("+cross_frameval+"deg)","transform-origin": "0% 0%","-webkit-transform-origin": "0% 0%","-moz-transform-origin": "0% 0%"});
					rotation=((prev_rotation).length>0)?prev_rotation[(prev_rotation).length-1]:initial_rot;
				}
				buble_incre=(Math.round(pitch*4)+num_click);
				zoom_inc=19;
				deg_flag=0,deg_flag1=0;
			}		 
		}
		function bubble_movement(div,min1,max1){//center movement of bubble 
			if(click_flag==1){
				if(parseInt($('#'+div).css('left'))<parseFloat(min1-(max1))){//right arrow
					$('#'+div).css( 'left', '+='+(mainLeft+(max1)).toFixed(2)+'px');
				}
				else{
					$('#'+div).css( 'left',mainLeft+(min1).toFixed(2)+'px');	
				}	
			}
			else if(click_flag==0){
				if(parseInt($('#'+div).css('left'))>parseFloat(min1-(max1))){//Left arrow
					$('#'+div).css( 'left', '+='+(mainLeft+(max1)).toFixed(2)+'px');
				}
				else{
					$('#'+div).css( 'left',mainLeft+(min1).toFixed(2)+'px');	
				}					
			}
		}
		function sphero_rotation(){
			curr_sli.push(Q2);
			$("#zoom_bubble,#air_bubble").stop(true);
			$("#slide_val1,#slide_val2,#slide_val3").prop("disabled",true)
			if(Q2>0){//slider val greater than 0
				if(click_flag==1){//right arrow
					deg_flag++;
					if(rotation<(tot_degree-90)){// rotation movement
						rotation+=90;
						prev_rotationmin.push(rotation);
							zoom_top++;
							x2=zoom_top;
							x1=zoom_top-1;
							zoom_inc=(19-(zoom_top*3.225)).toFixed(1);
							zoom_inc=(zoom_inc-0.5).toFixed(1);
							$('#zoomscircle').css({'top':zoom_inc+'px'});
							prev_rotation.push(rotation);
							if(rotation%360==initial_rot){//top movement of spherometer
							if(($('#zoomscircle').position().top).toFixed(1)==(19-(top_incre*10))-0.5){//movement of main scale (for higher val)
								$('#scales_both' ).css( 'top', mainTop+121+'px' );
							}
							else if(($('#zoomscircle').position().top).toFixed(1)==6.1){
								$('#scales_both' ).css( 'top', mainTop+0+'px' );				
							}
						}
					}
					else{//Final reading value
						
						rotation=(parseFloat(tot_degree)+1).toFixed(2);
						cmn.diff_var=0;
						$("#showAns").prop("disabled",false)
						$('#zoom_rod,#Youngs_crossrod1').css({"WebkitTransform":"rotate("+0+"deg)","-moz-transform":"rotate("+0+"deg)","-ms-transform":"rotate("+0+"deg)","transform":"rotate("+0+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden','-moz-backface-visibility': 'hidden'});							
						cmn.isClicked=false;
						pitcharr.push(buble_incre);
						numclick_arr.push(num_click);
						$("#zoom_bubble").css({left:mainLeft+118+'px'});
						$("#air_bubble").css({left:mainLeft+39+'px'});
						$("#slide_val3").prop("disabled",false)
						adjus_flag.push(1);
						
					}
					if(cmn.isClicked==false){//click enable and disable
						$('#arrow_rightdumm').css('display','block');	
					}
					else{
						$('#arrow_rightdumm').css('display','none');	
					}		
					buble_incre1=(Math.round((pitcharr[(pitcharr).length-1])));
					diff_var=parseInt(buble_incre-buble_incre1)+parseInt(numclick_arr[(numclick_arr).length-1]);
					bublemove=(pitcharr.length<1)?buble_incre:diff_var;
					bubble_movement('zoom_bubble',118,((parseFloat(118)-parseFloat(82-((Q2*2)*4)))/bublemove));
					bubble_movement('air_bubble',39,((parseFloat(39)-parseFloat(39-((Q2*2))))/bublemove));
					if(deg_flag<=bublemove){//cros rod adjustment 
						split_deg=parseFloat(cross_frameval-parseFloat(deg_flag*(cross_frameval/bublemove)));
						$('#zoom_rod,#Youngs_crossrod1').css({"WebkitTransform":"rotate("+split_deg+"deg)","-moz-transform":"rotate("+split_deg+"deg)","-ms-transform":"rotate("+split_deg+"deg)","transform":"rotate("+split_deg+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden','-moz-backface-visibility': 'hidden'});
					} 
				}
				
				else if(click_flag==0){//left arrow	
					deg_flag1++;
					$( "#showAns" ).prop( "disabled", true ); //check box ans hide
					$('#showAns').prop('checked', false); 
					$("#answerLabel").hide();
					if(rotation>full_rot){//down movement
						rotation-=90;
						prev_rotationmin.push(rotation);
						zoom_top=x1;
						if(x2>0 && rotation!=prev_rotation[(prev_rotation).length-1]){//reducing the top level
							x2--;
							zoom_top=x2;
							zoom_inc=(19-(zoom_top*3.225)).toFixed(1);
							zoom_inc=(zoom_inc-0.5).toFixed(1);
							prev_rotation.push(rotation);	
							$('#zoomscircle').css({'top':zoom_inc+'px' });
							if(($('#zoomscircle').position().top).toFixed(1)==-110.5){//main scale adjustment
								$('#scales_both' ).css( 'top', mainTop+0+'px' );
							}
						}
					}
					else{//final reading value 
						rotation=(parseFloat(tot_degree)+1).toFixed(2);
						cmn.diff_var=0;
						$("#showAns").prop("disabled",false)	
						$('#zoom_rod,#Youngs_crossrod1').css({"WebkitTransform":"rotate("+0+"deg)","-moz-transform":"rotate("+0+"deg)","-ms-transform":"rotate("+0+"deg)","transform":"rotate("+0+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden','-moz-backface-visibility': 'hidden'});							
						$("#zoom_bubble").css({left:mainLeft+118+'px'});
						$("#air_bubble").css({left:mainLeft+39+'px'});
						$("#slide_val3").prop("disabled",false);
						cmn.isClicked=false;
						pitcharr.push(buble_incre);
						numclick_arr.push(num_click);
					}
					if(cmn.isClicked==false){//click enable and disable
						$('#arrow_Leftdumm').css('display','block');	
					}
					else{
						$('#arrow_Leftdumm').css('display','none');	
					}		
					buble_incre1=(Math.round((pitcharr[(pitcharr).length-1])));
					diff_var=parseInt(buble_incre1-buble_incre)+parseInt(num_click-1)+1;
					bublemove=(pitcharr.length<1)?buble_incre:diff_var; 
					bubble_movement('zoom_bubble',118,parseFloat((82-((Q2*2)*4))-118)/bublemove);	
					bubble_movement('air_bubble',39,parseFloat((39-((Q2*2)))-39)/bublemove);
					if(deg_flag1<=bublemove){//CROSS rod movement
						split_deg=parseFloat(cross_frameval-parseFloat(deg_flag1*(cross_frameval/bublemove)));
						$('#zoom_rod,#Youngs_crossrod1').css({"WebkitTransform":"rotate("+split_deg+"deg)","-moz-transform":"rotate("+split_deg+"deg)","-ms-transform":"rotate("+split_deg+"deg)","transform":"rotate("+split_deg+"deg)",'-webkit-backface-visibility': 'hidden','backface-visibility': 'hidden','-moz-backface-visibility': 'hidden'});	
					}
				}	
				$(".rotate").css({"-moz-transform":"rotateZ("+rotation+"deg)","transform": "rotateZ("+rotation+"deg)","-webkit-transform":"rotateZ("+rotation+"deg)","-ms-transform":"rotateZ("+rotation+"deg)","-o-transform":"rotateZ("+rotation+"deg)"});
			}
		}
		function Resetitems(){//resetting slider value and appartus position
			Q=0.5,Q1=0.1,Q2=0;
			$("#slide_val1").val(Q);
			$("#slide_val2").val(Q1);
			$("#slide_val3").val(Q2);
			$('#sliderspan1').html(Q1+' mm');
			$("#rightVal").html(Q+' m');
			$("#sliderspan").html(Q2+' kg');
			$("#arrow_txt").html(InsArray[12]);
			$("#Hanging_right").css({height:12+'px'});
			$("#wires_div_right,#wires_div").css({'width':'2px'});
			$("#zoom_bubble,#air_bubble").stop(true);
			$("#Youngs_rightFrame").css({top:mainTop+124+'px'});
			$("#zoom_bubble").css({left:mainLeft+118+'px'});
			$("#air_bubble").css({left:mainLeft+39+'px'});
			count=0;count1=0;
			deg_flag=0,deg_flag1=0;
			rotation=initial_rot;
			$('#zoomscircle' ).css('top',mainTop+19+'px');	
			$('#scales_both' ).css('top',mainTop+0+'px');
			$('#arrow_rightdumm').css('display','block');	
			$('#arrow_Leftdumm').css('display','block');
			$('.trip-block').css('display','none');
			curr_sli=[];
			prev_rotation=[];
			zoom_top=0;
			pitcharr=[];
			numclick_arr=[];
			adjus_flag=[];
			prev_rotationmin=[];
			$("#slide_val1,#slide_val2,#slide_val3").prop("disabled",false)
			$(".rotate").css({"-moz-transform":"rotateZ("+rotation+"deg)","transform": "rotateZ("+rotation+"deg)","-webkit-transform":"rotateZ("+rotation+"deg)","-ms-transform":"rotateZ("+rotation+"deg)","-o-transform":"rotateZ("+rotation+"deg)"});
			$('#Youngs_crossrod1,#Youngs_crossrod2,#zoom_rod').css({"WebkitTransform":"rotate("+0+"deg)","-moz-transform":"rotate("+0+"deg)","-ms-transform":"rotate("+0+"deg)","transform":"rotate("+0+"deg)"});
		}
		$("#reload").click(function(){//*--Function to click reload button to reset all events---
			window.location.reload();	   
		});
	});	 			
};

