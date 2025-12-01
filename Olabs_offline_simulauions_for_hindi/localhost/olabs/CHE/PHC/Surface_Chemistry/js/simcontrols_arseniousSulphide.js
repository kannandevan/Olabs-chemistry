var flame_Frame_1=1,flameClrIntvl_1;
var arsAngle=0,turningRight=true,clrGlassRod_arse;
var clrbuble_1,clrbuble_2,clrbuble_3,clrboilingStop;
var clr_ars_wtr_b1,clr_ars_wtr_b2,ars_wtr_buble_lft,ars_wtr_buble_lft_1;
var clr_ars_wtr_buble1,clr_ars_wtr_buble2;
var arsenious_scene_2=false;
var arsenious_scene_1=true;
var flameClrIntvl_2;
var clr_ars_kipps_buble1,ars_kipss_buble_lft;
var clr_ars_kipps_buble2,ars_kipss_buble_lft2;
function arsenious_Flaming(){//flaming of burner
	flame_Frame_1++;
	$("#arsenious_flame").attr('src',simPath+"images/flame"+flame_Frame_1+".png");
	flameClrIntvl_1=setTimeout("arsenious_Flaming()",100);
	if(flame_Frame_1==5){
		flame_Frame_1=1;
	}
}
function arsenious_FlameOn(){
	$("#arsenious_burnerOff").hide();
	$("#arsenious_flame").show();
	arsenious_Flaming();
	boilingEffect();
	
}
function arsenious_Flaming_2(){//flaming of burner
	flame_Frame_1++;
	$("#arsenious_flame_2").attr('src',simPath+"images/flame"+flame_Frame_1+".png");
	flameClrIntvl_2=setTimeout("arsenious_Flaming_2()",100);
	if(flame_Frame_1==5){
		flame_Frame_1=1;
	}
}
function arsenious_FlameOn_2(){
	$("#arsenious_burnerOff_2").hide();
	$("#arsenious_flame_2").show();
	arsenious_Flaming_2();
	
}
function stirGlassRod_arsenious(ID){//Stiring of glass rod
	$(ID).css({
		'-ms-transform': 'rotate('+arsAngle+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+arsAngle+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+arsAngle+'deg)',
		'transform-origin': '50% 50%'
	});
	if(turningRight)
		arsAngle++;
	else{
		arsAngle--;
	}
	if(arsAngle==10){
		turningRight=false;
	}
	if(arsAngle==-10){
		turningRight=true;
	}
	clrGlassRod_arse=setTimeout(function(){stirGlassRod_arsenious(ID)},10);
}
function bubleFactory(ID,CLASS,left){	
	$("#arsenious_boiling_wrap").append("<div class='"+CLASS+"' id='"+ID+"' style='left:"+left+"px'></div>");
	$("#"+ID).animate({'top':'2px'},function(){$(this).remove();});
}
function boilingEffect(){
	$("#arsenious_boiling_wrap").show();
	clearInterval(clrbuble_1);
	clearInterval(clrbuble_2);
	clearInterval(clrbuble_3);
	clearTimeout(clrboilingStop);
	clrbuble_1=setInterval(function(){
		b_1_left=Math.floor((Math.random() * 34) + 1);
		bubleFactory("arse_bubble_1","arse_bubble_1",b_1_left);
	},700);
	setTimeout(function(){
		clrbuble_2=setInterval(function(){
			b_2_left=Math.floor((Math.random() * 32) + 1);
			bubleFactory("arse_bubble_2","arse_bubble_2",b_2_left);
		},700);
	},1000);
	setTimeout(function(){
		clrbuble_3=setInterval(function(){
			b_3_left=Math.floor((Math.random() * 32) + 1);
			bubleFactory("arse_bubble_3","arse_bubble_3",b_3_left);
		},700);
	},1250);
}
function bubleFactory_water(ID,CLASS,left){	
	$("#arsenious_waterBuble_wrap").append("<div class='"+CLASS+"' id='"+ID+"'></div>");
	$("#"+ID).animate({'top':'11px','left':'5px'},100,function(){
		$("#"+ID).animate({'top':'0px','left':left+'px'},200,function(){$(this).remove();});
	});
}
function bubleEffect(){console.log("bubleEffect");
	clearInterval(clr_ars_wtr_b1);
 	clearInterval(clr_ars_wtr_b2);
	$("#arsenious_waterBuble_wrap").show();
	clr_ars_wtr_b1=setInterval(function(){
		ars_wtr_buble_lft=Math.floor((Math.random() * 12) + 1);
		bubleFactory_water("arse_water_bubble_1","arse_water_bubble_1",ars_wtr_buble_lft);
	},800);
	setTimeout(function(){
		clr_ars_wtr_b2=setInterval(function(){
			ars_wtr_buble_lft_1=Math.floor((Math.random() * 12) + 1);
			bubleFactory_water("arse_water_bubble_2","arse_water_bubble_1",ars_wtr_buble_lft_1);
		},500);
	},400);
}
function bubleFactory_water_2(ID,CLASS,left){	
	$("#arsenious_waterBuble_wrap_2").append("<div class='"+CLASS+"' id='"+ID+"'></div>");
	$("#"+ID).animate({'top':'23px','left':'5px'},100,function(){
		$("#"+ID).animate({'top':'0px','left':left+'px'},200,function(){$(this).remove();});
	});
}
function bubleEffectWater(){
	$("#arsenious_waterBuble_wrap_2").show();
	clearInterval(clr_ars_wtr_buble1);
 	clearInterval(clr_ars_wtr_buble2);
	clr_ars_wtr_buble1=setInterval(function(){
		ars_wtr_buble_lft=Math.floor((Math.random() * 12) + 1);
		bubleFactory_water_2("arse_water_bubble_3","arse_water_bubble_2",ars_wtr_buble_lft);
	},800);
	setTimeout(function(){
		clr_ars_wtr_buble2=setInterval(function(){
			ars_wtr_buble_lft_1=Math.floor((Math.random() * 12) + 1);
			bubleFactory_water_2("arse_water_bubble_4","arse_water_bubble_2",ars_wtr_buble_lft_1);
		},500);
	},400);
}
function bubleFactory_water_3(ID,CLASS,left){	
	$("#arsenious_waterBuble_wrap_3").append("<div class='"+CLASS+"' id='"+ID+"' style='left:"+left+"px'></div>");
	$("#"+ID).animate({'top':'0px'},function(){$(this).remove();});
}
function bubleEffectKipps(){
	$("#arsenious_waterBuble_wrap_3").show();
	clearInterval(clr_ars_kipps_buble1);
 	clearInterval(clr_ars_kipps_buble2);
	clr_ars_kipps_buble1=setInterval(function(){
		ars_kipss_buble_lft=Math.floor((Math.random() * 27) + 1);
		bubleFactory_water_3("arse_water_bubble_5","arse_water_bubble_3",ars_kipss_buble_lft);
	},700);
	setTimeout(function(){
		clr_ars_kipps_buble2=setInterval(function(){
			ars_kipss_buble_lft2=Math.floor((Math.random() * 27) + 1);
			bubleFactory_water_3("arse_water_bubble_6","arse_water_bubble_3",ars_kipss_buble_lft2);
		},700);
	},1000);
}
function arseniousSulphide(){
	$("#arseniousSulphideWrap").show();
	$("#arsenious_flask_txt").html(arsenious_labels[0]);
	$("#arsenious_salt_txt").html(arsenious_labels[1]);
	$("#arsenious_acid_txt").html(arsenious_labels[9]);
	$("#arsenious_next_txt").html(arsenious_labels[2]);
	$("#arsenious_next_txt_2").html(arsenious_labels[4]);
	$("#arsenious_beaker_3_txt").html(arsenious_labels[5]);
	$("#arsenious_beaker_4_txt").html(arsenious_labels[8]);
	$("#arsenious_kipps_lblBG_txt").html(arsenious_labels[6]);
	$("#arsenious_kipps_2_txt").html(arsenious_labels[7]);
	$("#arsenious_next_btn").click(function(){
	 	$("#arsenious_scene_1,#inference").hide();
	 	$("#arsenious_scene_2").show();
	 	arsenious_scene_1=false;
	 	arsenious_scene_2=true;
	 	droped=false;
	});
	$("#arsenious_tapOff").click(function(){
	 	$("#arsenious_tapOff").hide();
	 	$("#arsenious_tapOn").show();
	 	$("#arsenious_kipps_solu").animate({'top':'1px'},function(){
	 		bubleEffectKipps();
	 		bubleEffect();
	 		bubleEffectWater();
	 	})
	 	$("#arsenious_beakerSmall_solu_yellow").animate({'opacity':'0.6'},7000);
	 	clearInterval(clockinterval);
		clockinterval=setInterval(clockRotation,10);
		$("#clockTimeText").html(arsenious_labels[3]);
		$("#clockContainer").show();
	});
	$("#arsenious_next_btn_2").click(function(){
	 	$("#arsenious_scene_2,#inference").hide();
	 	$("#arsenious_scene_3").show();
	 	droped=false;
	 	arsenious_scene_1=false;
	 	arsenious_scene_2=false;
	});
/*------------------------Drag and drop of Arsenious sulphide-------------------------*/
	$("#arsenious_watchglass").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#arsenious_watchglass").animate({
					left:'300px',
					top:'270px'					
				});
			}
		},
		start:function(){
			$("#arsenious_watchglass").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#arsenious_watchglass").css({
				'z-index':'0'
			});
		}
	});
	$("#arsenious_watchglass").draggable('disable');
	$("#arsenious_watchglass_dropArea").droppable({accept:"#arsenious_watchglass",
		drop:function(){
			droped=true;
			$("#arsenious_watchglass").css({
				'left': '220px',
				'top': '195px'
			});
			$("#arsenious_watchglass").draggable('disable');
			rotateObject("#arsenious_watchglass",-20);
			$("#arseniousOxide").hide();
			$("#arsenious_salt_pouring").animate({'height':'80px'},function(){
				$("#arsenious_salt_pouring").animate({'height':'0px','top':'283px'});
				$("#arsenious_flask_salt").animate({'height':'14px','top':'69px'},function(){
					rotateObject("#arsenious_watchglass",0);
					$("#arsenious_watchglass").animate({left:'300px',top:'270px'});
					$("#arsenious_flask").draggable('enable');
					droped=false;
				});

			});
		}
	});
/*------------------------Drag and drop of Conical flask-------------------------*/
	$("#arsenious_flask").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#arsenious_flask").animate({
					left:'185px',
					top:'206px'					
				});
			}
		},
		start:function(){
			$("#arsenious_flask").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#arsenious_flask").css({
				'z-index':'0'
			});
		}
	});
	$("#arsenious_flask").draggable('disable');
	$("#arsenious_flask_dropArea").droppable({accept:"#arsenious_flask",
		drop:function(){
			droped=true;
			$("#arsenious_flask").css({
				'left': '45px',
				'top': '119px'
			});
			$("#arsenious_flask").draggable('disable');
			$("#arsenious_burnerOff").bind('click');
			$("#arsenious_burnerOff").click(function(){
				arsenious_FlameOn();
				clearTimeout(clrGlassRod_arse);
				stirGlassRod_arsenious("#arsenious_glassRod");
				$("#arsenious_flask_salt").animate({'opacity':'0'},7000);
				$("#arsenious_flask_sol_2").animate({'opacity': '0.5'},7000);
				$("#arsenious_flask_sol").animate({'opacity': '0'},7000);
				droped=false;
				clrboilingStop=setTimeout(function(){
					$("#arsenious_burnerOff").show();
					$("#arsenious_flame").hide();
					clearTimeout(flameClrIntvl_1);
					$("#arsenious_burnerOff").unbind('click');
					clearTimeout(clrGlassRod_arse);
					rotateObject("#arsenious_glassRod",0);
					$("#arsenious_boiling_wrap").hide();
					clearInterval(clrbuble_1);
					clearInterval(clrbuble_2);
					clearInterval(clrbuble_3);
					$("#arsenious_glassRod").animate({'top':'-150px','left':'30px'},function(){
						$("#arsenious_glassRod").hide();
						$("#arsenious_glassRod_2").show();
						$("#arsenious_glassRod_2").animate({'top':'15px','left':'527px'});
						rotateObject("#arsenious_glassRod_2",30);
	
						$("#arsenious_flask").draggable('enable');
						$("#arsenious_flask").draggable({containment:"#canvasBox",
							revert:function(){
								if(!droped){
									$("#arsenious_flask").animate({
										left:'45px',
										top:'119px'					
									});
								}
							},
							start:function(){
								$("#arsenious_flask").css({
									'z-index':'10'
								});
							},
							stop:function(){
								$("#arsenious_flask").css({
									'z-index':'0'
								});
							}
						});
						
						$("#arsenious_flask_dropArea_2").droppable({accept:"#arsenious_flask",
							drop:function(){
								droped=true;
								$("#arsenious_flask").css({
									'left': '515px',
									'top': '74px'
								});
								$("#arsenious_flask").draggable('disable');
								rotateObject("#arsenious_flask",110);
								$("#arsenious_flask_sol_2").hide();
								$("#arsenious_water_fall").animate({'height':'110px'},function(){
									$("#arsenious_beaker_water").animate({'top':'240px','height':'27px'});
									$("#arsenious_water_fall").animate({'top':'260px','height':'0px'},function(){
										$("#arsenious_acid_lblBG,#arsenious_acid_txt").show();
										$("#arsenious_flask").animate({left:'185px',top:'206px'});
										rotateObject("#arsenious_flask",0);
										inferenceMsg=arsenious_infMsg[2];
										$("#inference").show();
										$("#arsenious_next_btn").show();

									});

								});
							}
						});

					});

				},7000)
			});
		}
	});
/*------------------------Drag and drop of beaker(Scene 2)-------------------------*/
	 $("#arsenious_beakerSmall").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#arsenious_beakerSmall").animate({
					left:'250px',
					top:'225px'					
				});
			}
		},
		start:function(){
			$("#arsenious_beakerSmall").css({
				'z-index':'10'
			});
			$("#inference").hide();
		},
		stop:function(){
			$("#arsenious_beakerSmall").css({
				'z-index':'0'
			});
		}
	});
	$("#arsenious_beakerSmall").draggable('disable');
	$("#arsenious_beaker_dropArea").droppable({accept:"#arsenious_beakerSmall",
		drop:function(){
			droped=true;
			$("#arsenious_beakerSmall").css({
				'left': '458px',
				'top': '122px'
			});
			$("#arsenious_beakerSmall").draggable('disable');
			$("#arsenious_burnerOff_2").click(function(){
				arsenious_FlameOn_2();
				$("#arsenious_burnerOff_2").unbind('click');
				clockinterval=setInterval(clockRotation,10);
				$("#clockTimeText").html(arsenious_labels[3]);
				$("#clockContainer").show();
				setTimeout(function(){
					$("#arsenious_burnerOff_2").show();
					$("#arsenious_flame_2").hide();
					clearTimeout(flameClrIntvl_2);
					$("#clockContainer").hide();
					clearTimeout(clockinterval);
					$("#arsenious_next_btn_2").show();
				},7000);
			});
		}
	});
/*------------------------Drag and drop of beaker(Scene 3)-------------------------*/
	$("#arsenious_beaker_3").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#arsenious_beaker_3").animate({
					left:'115px',
					top:'190px'					
				});
			}
		},
		start:function(){
			$("#arsenious_beaker_3").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#arsenious_beaker_3").css({
				'z-index':'0'
			});
		}
	});
	$("#arsenious_beaker_3").draggable('disable');
	$("#arsenious_beaker_3_dropArea").droppable({accept:"#arsenious_beaker_3",
		drop:function(){
			droped=true;
			$("#arsenious_beaker_3").css({
				'left': '415px',
				'top': '40px'
			});
			$("#arsenious_beaker_3").draggable('disable');
			rotateObject("#arsenious_beaker_3",100);
			$("#arsenious_beaker_water_3").hide();
			$("#arsenious_water_fall_2").animate({'height':'110px'},function(){
				$("#arsenious_beaker_water_2").animate({'top':'240px','height':'27px'});
				$("#arsenious_water_fall_2").animate({'top':'260px','height':'0px'},function(){
					rotateObject("#arsenious_beaker_3",0);
					$("#arsenious_beaker_3").animate({left:'115px',	top:'190px'},function(){
						$("#arsenious_beaker_4_lblBG,#arsenious_beaker_4_txt").show();
						inferenceMsg=arsenious_infMsg[0];
						$("#inference").show();
					});
				});

			});
		}
	})
	function resetSimulation(){
		droped=false;
		clockAngle=0;
		$("#arsenious_scene_2,#arsenious_scene_3").hide();
		$("#arsenious_scene_1").show();
		$("#arsenious_watchglass").draggable('enable');
		$("#arseniousOxide,#arsenious_flask_sol").show();
		$("#arsenious_flask").draggable('disable');
		$("#arsenious_flask").css({left:'185px',top:'206px'});
		$("#arsenious_salt_pouring").animate({'height':'0px','top':'203px'});
		$("#arsenious_flask_salt").css({'height':'0px','top':'79px'});
		$("#arsenious_burnerOff").show();
		$("#arsenious_flame").hide();
		$("#arsenious_burnerOff").unbind('click');
		clearTimeout(flameClrIntvl_1);
		clearTimeout(clrGlassRod_arse);
		$("#arsenious_acid_lblBG,#arsenious_acid_txt").hide();
		rotateObject("#arsenious_glassRod",-10);
		$("#arsenious_glassRod,#arsenious_tapOff").show();
		$("#arsenious_glassRod").css({'top':'-36px','left':'28'});
		$("#arsenious_flask_salt").animate({'opacity':'1'});
		$("#arsenious_boiling_wrap,#arsenious_tapOn").hide();
		clearInterval(clrbuble_1);
		clearInterval(clrbuble_2);
		clearInterval(clrbuble_3);
		clearTimeout(clrboilingStop);
		arsenious_scene_1=true;
		arsenious_scene_2=false;
		$("#arsenious_flask_sol,#arsenious_flask_sol_2,#arsenious_beakerSmall_solu,#clockContainer").stop();
		$("#arsenious_flask_sol").css({'border-color': 'transparent transparent #ffffff transparent'});
		$("#arsenious_flask_sol_2").css({'opacity': '0'});
		$("#arsenious_flask_sol_2").show();
		$("#arsenious_flask_sol").css({'opacity': '0.4'});
		rotateObject("#arsenious_glassRod_2",0);
		$("#arsenious_glassRod_2").css({'top':'-10px','left':'75px'});
		$("#arsenious_glassRod_2").hide();
		$("#arsenious_beaker_water").css({'top':'267px','height':'0px'});
		$("#arsenious_water_fall").css({'top':'150px','height':'0px'});
		rotateObject("#arsenious_flask",0);
		$("#arsenious_next_btn,#arsenious_next_btn,#arsenious_next_btn_2").hide();///////////////
		clearInterval(clr_ars_wtr_buble1);
 		clearInterval(clr_ars_wtr_buble2);
 		clearInterval(clr_ars_wtr_b1);
 		clearInterval(clr_ars_wtr_b2);
 		clearInterval(clr_ars_kipps_buble1);
 		clearInterval(clr_ars_kipps_buble2);
		$("#arsenious_beakerSmall").css({left:'250px',top:'225px'});
		clearTimeout(clockinterval);
		$("#arsenious_beaker_3").draggable('enable');
		$("#arsenious_beaker_water_3").show();
		$("#arsenious_water_fall_2").css({'top':'150px','height':'0px'});
		rotateObject("#arsenious_beaker_3",0);
		$("#arsenious_beaker_3").css({left:'115px',	top:'190px'});
		$("#arsenious_kipps_solu").css({'top':'30px'});
	 	$("#arsenious_beakerSmall_solu_yellow").css({'opacity':'0'});
	 	$("#arsenious_waterBuble_wrap,#arsenious_waterBuble_wrap_2,#arsenious_waterBuble_wrap_3").empty();
		$("#arsenious_beaker_4_lblBG,#arsenious_beaker_4_txt").hide();
	}
	resetSimulation();
}