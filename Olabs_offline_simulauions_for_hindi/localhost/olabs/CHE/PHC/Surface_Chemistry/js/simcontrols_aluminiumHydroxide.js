var flame_Frame=1,flameClrIntvl;
var droped=droped_1=false;
var clockinterval,clockAngle=0;
var initial=initial2=true;
var scene2=false;
var waterReplaced=false;
function flame_Flaming(){//flaming of burner
	flame_Frame++;
	$("#aluHydro_flame").attr('src',simPath+"images/flame"+flame_Frame+".png");
	flameClrIntvl=setTimeout("flame_Flaming()",100);
	if(flame_Frame==5){
		flame_Frame=1;
	}
}
function flame_FlameOn(){
	$("#aluHydro_burnerOff").hide();
	$("#aluHydro_flame").show();
	flame_Flaming();
	$("#aluHydro_flask").draggable('enable');
	$("#aluHydro_flask").css({'cursor':'pointer'});
	
}
function dropsFall(dLeft,dTop,animTo){
	$("#drop").css({
		left:dLeft,
		top:dTop
	})
	$("#drop").css({display:"block"});
	$("#drop").animate({
		top:animTo
	},function(){
		$("#drop").css({display:"none"});
	});
	setTimeout(function(){
		$("#drop_1").css({
			left:dLeft,
			top:dTop
		})
		$("#drop_1").css({display:"block"});
		$("#drop_1").animate({
			top:animTo
		},function(){
			$("#drop_1").css({display:"none"});
		});
	},200)
}
function rotateObject(elem,degree){
	$(elem).css({
		'-ms-transform': 'rotate('+degree+'deg)',
    	'-ms-transform-origin': '50% 50%',
    	'-webkit-transform': 'rotate('+degree+'deg)',
    	'-webkit-transform-origin': '50% 50%',
    	'transform': 'rotate('+degree+'deg)',
    	'transform-origin': '50% 50%'
	});
}

function clockRotation(){
	clockAngle++;
	if(clockAngle>=1050){
		$("#clockContainer").hide();
		clearInterval(clockinterval);
		clockAngle=0;
		$("#aluHydro_popup").hide();
		if(!initial){
			$("#aluHydro_dyalisis_dropper_2").draggable('enable');
		}
		if(scene2){
			$("#aluHydro_dyalisis_dropper_2").draggable('enable');
		}
		if(arsenious_scene_2){
			$("#arsenious_tapOff").show();
	 		$("#arsenious_tapOn").hide();
	 		clearInterval(clr_ars_wtr_buble1);
	 		clearInterval(clr_ars_wtr_buble2);
	 		clearInterval(clr_ars_wtr_b1);
	 		clearInterval(clr_ars_wtr_b2);
	 		clearInterval(clr_ars_kipps_buble1);
	 		clearInterval(clr_ars_kipps_buble2);
	 		$("#arsenious_tapOff").unbind('click');
			inferenceMsg=arsenious_infMsg[3];
			$("#inference").show();
	 		$("#arsenious_beakerSmall").draggable('enable');
	 	}
	}
	$("#needleImg").css({
		'-ms-transform': 'rotate('+clockAngle+'deg)',
    	'-ms-transform-origin': '3px 25px',
    	'-webkit-transform': 'rotate('+clockAngle+'deg)',
    	'-webkit-transform-origin': '3px 25px',
    	'transform': 'rotate('+clockAngle+'deg)',
    	'transform-origin': '3px 25px'
	});
}
function aluminiumHydroxide(){
	$("#aluHydro_water_txt").html(aluHydro_labels[2]);
	$("#aluHydro_bottle_txt").html(aluHydro_labels[3]);
	$("#aluHydro_aluChloro_txt").html(aluHydro_labels[4]);
	$("#aluHydro_next_txt").html(aluHydro_labels[5]);
	$("#aluHydro_popup_txt").html(aluHydro_labels[6]);
	$("#aluHydro_AlOH_txt").html(aluHydro_labels[7]);
	$("#aluHydro_AgNO_txt").html(aluHydro_labels[8]);
	$("#aluHydro_AgNO3_txt").html(aluHydro_labels[9]);
	$("#aluHydro_replace_txt").html(aluHydro_labels[10]);
	 $("#aluHydroWrap").show();
	 $("#aluHydro_burnerOff").click(function(){flame_FlameOn()});
	 $("#aluHydro_next_btn").click(function(){
	 	$("#aluHydro_preparation,#inference").hide();
	 	$("#aluHydro_dyalisis").show();
	 	droped=false;
	 	scene2=true;
	 });
	 $("#aluHydro_replace_btn").click(function(){
	 	$("#inference,#aluHydro_replace_btn").hide();
	 	$("#aluHydro_popup").show();
	 	clockAngle=0;
	 	clearInterval(clockinterval);
		clockinterval=setInterval(clockRotation,10);
		$("#clockTimeText").html(aluHydro_labels[1]);
		$("#clockContainer").show();
	 	droped=false;
	 	waterReplaced=true;
	 });
/*------------------------Drag and drop of conical flask-------------------------*/
	 $("#aluHydro_flask").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#aluHydro_flask").animate({
					left:'230px',
					top:'206px'					
				});
			}
		},
		start:function(){
			$("#aluHydro_flask").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#aluHydro_flask").css({
				'z-index':'0'
			});
		}
	});
	$("#aluHydro_flask").draggable('disable');
	$("#aluHydro_flask_dropArea").droppable({accept:"#aluHydro_flask",
		drop:function(){
			droped=true;
			$("#aluHydro_flask").css({
				'left': '45px',
				'top': '119px'
			});
			$("#aluHydro_dropper").draggable('enable');
			$("#aluHydro_dropper").css({'cursor':'pointer'});
		}
	});
/*----------------------Drag and drop of dropper-------------------------*/
	$("#aluHydro_dropper").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped_1){
				$("#aluHydro_dropper").animate({
					left:'425px',
					top:'165px'					
				});
			}
		},
		start:function(){
			$("#aluHydro_dropper").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#aluHydro_dropper").css({
				'z-index':'0'
			});
		}
	});
	$("#aluHydro_dropper").draggable('disable');
	$("#aluHydro_droper_dropArea").droppable({accept:"#aluHydro_dropper",
		drop:function(){
			droped_1=true;
			$("#aluHydro_dropper").css({
				'left': '72px',
				'top': '28px'
			});
			dropsFall('77px','104px','150px');
			setTimeout(function(){dropsFall('77px','104px','150px');},700);
			setTimeout(function(){
				$("#aluHydro_dropper").animate({
					left:'425px',
					top:'165px'					
				});
				$("#aluHydro_flask_sol").animate({'opacity':'.8'},5000,function(){
					inferenceMsg=aluHydro_infMsg[0];
					$("#inference").show();
					clearInterval(flameClrIntvl);
					$("#aluHydro_burnerOff").show();
					$("#aluHydro_flame").hide();
					$("#aluHydro_burnerOff").unbind('click');
					$("#aluHydro_next_btn").show();
				});
			},1000);
		}
	});
/*-----------------------------------------Dialysis of Aluminium Hydroxide----------------------------------------*/

/*------------------------Drag and drop of conical flask-------------------------*/
	 $("#aluHydro_flask_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#aluHydro_flask_2").animate({
					left:'160px',
					top:'206px'					
				});
			}
		},
		start:function(){
			$("#aluHydro_flask_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#aluHydro_flask_2").css({
				'z-index':'0'
			});
		}
	});
	$("#aluHydro_flask_2").draggable('disable');
	$("#aluHydro_flask2_dropArea").droppable({accept:"#aluHydro_flask_2",
		drop:function(){
			droped=true;
			$("#aluHydro_flask_2").css({
				'left': '62px',
				'top': '165px'
			});
			$("#aluHydro_flask_2").draggable('disable');
			rotateObject('#aluHydro_flask_2','-115');
			$("#aluHydro_flask_sol_2").hide();
			$("#aluHydro_balloonOne").animate({'left':'25px','width':'44px','height':'58px'});
			$("#aluHydro_beaker_water").animate({'top':'220px','height':'77px'});
			setTimeout(function(){
				rotateObject('#aluHydro_flask_2','0');
				$('#aluHydro_flask_2').animate({'left':'160px','top':'206px'});
				clockAngle=0;
				clearInterval(clockinterval);
				clockinterval=setInterval(clockRotation,10);
				$("#clockTimeText").html(aluHydro_labels[0]);
				$("#clockContainer").show();
				droped=false;
			},1000);
			
		}
	});
/*------------------------Drag and drop of dropper-------------------------*/
	 $("#aluHydro_dyalisis_dropper_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#aluHydro_dyalisis_dropper_2").animate({
					left:'417px',
					top:'173px'					
				});
			}
		},
		start:function(){
			$("#aluHydro_dyalisis_dropper_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#aluHydro_dyalisis_dropper_2").css({
				'z-index':'0'
			});
		}
	});
	$("#aluHydro_dyalisis_dropper_2").draggable('disable');
	$("#aluHydro_droper2_dropArea").droppable({accept:"#aluHydro_dyalisis_dropper_2",
		drop:function(){
			droped=true;
			$("#aluHydro_dyalisis_dropper_2").css({
				'left': '70px',
				'top': '160px'
			});
			$("#aluHydro_dyalisis_dropper_2").draggable('disable');
			$("#aluHydro_dropper_solu").animate({'top':'47px','border-top-width': '32px'},function(){
				if(initial){
					$("#aluHydro_dyalisis_dropper_2").animate({
						left:'465px',
						top:'70px'					
					},function(){
						$("#aluHydro_dropper_solu").animate({'top':'79px','border-top-width': '0px'},1000);
						dropsFall('470px','150px','260px');
						setTimeout(function(){dropsFall('470px','150px','250px')},700);
						$("#aluHydro_tTube_solu").animate({'top':'257px','height': '17px'},1000,function(){
							$("#aluHydro_dyalisis_dropper_2").animate({
								left:'417px',
								top:'173px'					
							});
						});
						$("#aluHydro_dyalisis_dropper_1").draggable('enable');
						droped=false;
						initial=false;
					});
				}else{
					$("#aluHydro_dyalisis_dropper_2").animate({
						left:'511px',
						top:'70px'					
					},function(){
						$("#aluHydro_dropper_solu").animate({'top':'79px','border-top-width': '0px'},1000);
						dropsFall('516px','150px','260px');
						setTimeout(function(){dropsFall('516px','150px','250px')},700);
						$("#aluHydro_tTube2_solu").animate({'top':'257px','height': '17px'},1000,function(){
							$("#aluHydro_dyalisis_dropper_2").animate({
								left:'417px',
								top:'173px'					
							});
						});
						droped=false;
						$("#aluHydro_dyalisis_dropper_1").draggable('enable');
					});
				}
			});
			
		}
	});
/*------------------------Drag and drop of AgNO3 dropper-------------------------*/
	 $("#aluHydro_dyalisis_dropper_1").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#aluHydro_dyalisis_dropper_1").animate({
					left:'305px',
					top:'163px'					
				});
			}
		},
		start:function(){
			$("#aluHydro_dyalisis_dropper_1").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#aluHydro_dyalisis_dropper_1").css({
				'z-index':'0'
			});
		}
	});
	$("#aluHydro_dyalisis_dropper_1").draggable('disable');
	$("#aluHydro_droper1_dropArea").droppable({accept:"#aluHydro_dyalisis_dropper_1",
		drop:function(){
			droped=true;
			if(initial2){
				$("#aluHydro_dyalisis_dropper_1").css({
					'left': '465px',
					'top': '70px'
				});
				dropsFall('470px','150px','260px');
				setTimeout(function(){dropsFall('470px','150px','250px')},700);
				$("#aluHydro_tTube_solu").animate({'top':'252px','height': '22px','opacity':'1'},1000,function(){
					$("#aluHydro_dyalisis_dropper_1").animate({
						left:'305px',
						top:'163px'				
					});
					inferenceMsg=aluHydro_infMsg[1];
					$("#inference").show();
					$("#aluHydro_replace_btn").show();
					initial2=false;
					$("#aluHydro_dyalisis_dropper_1").draggable('disable');
				});
			}else{
				$("#aluHydro_dyalisis_dropper_1").css({
					'left': '511px',
					'top': '70px'
				});
				dropsFall('516px','150px','260px');
				setTimeout(function(){dropsFall('516px','150px','250px')},700);
				$("#aluHydro_tTube2_solu").animate({'top':'252px','height': '22px'},1000,function(){
					$("#aluHydro_dyalisis_dropper_1").animate({
						left:'305px',
						top:'163px',				
					});
					inferenceMsg=aluHydro_infMsg[2];
					$("#inference").show();
					$("#aluHydro_dyalisis_dropper_1").draggable('disable');

				});
			}
		}
	});
	function resetSimulation(){
		$("#aluHydro_flask_2").draggable('enable');
		$("#aluHydro_preparation").show();
		$("#aluHydro_dyalisis").hide();
		clearInterval(flameClrIntvl);
		$("#aluHydro_burnerOff").show();
		$("#aluHydro_flame").hide();
		$("#aluHydro_flask").css({left:'230px',top:'206px'});
		$("#aluHydro_flask_sol").css({'opacity':'0.4'});
		$("#aluHydro_next_btn,#inference").hide();
		$("#aluHydro_flask_sol_2").show();
		$("#aluHydro_balloonOne").css({'left':'43px','width':'15px','height':'45px'});
		$("#aluHydro_beaker_water").css({'top':'225px','height':'72px'})
		clearInterval(clockinterval);
		$("#clockContainer").hide();
		$("#aluHydro_dropper_solu").css({'top':'79px','border-top-width': '0px'});
		$("#aluHydro_tTube_solu,#aluHydro_tTube2_solu").css({'top':'274px','height': '0px','opacity':'0.4'});
		$("#aluHydro_popup,#aluHydro_replace_btn").hide();
		initial=true;
		initial2=true;
		scene2=false;
		waterReplaced=false;
	}
	resetSimulation();
}