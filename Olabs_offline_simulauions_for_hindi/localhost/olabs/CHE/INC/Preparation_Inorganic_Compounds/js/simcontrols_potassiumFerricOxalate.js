var clrTimeOut;
function flamingFerricOx(){//flaming of burner
		flame_Frame++;
		$("#pFerricOxa_scene4_flame").attr('src',simPath+"images/SCENE3/flame"+flame_Frame+".png");
		flameClrIntvl=setTimeout("flamingFerricOx()",100);
		if(flame_Frame==5){
			flame_Frame=1;
		}
	}
	function flameOnFerricOx(){
		$("#pFerricOxa_scene4_knoboff").hide();
		$("#pFerricOxa_scene4_flame").show();
		flamingFerricOx();
		$("#pFerricOxa_scene4_gRod").draggable('enable');
	}
	function flameOffFerricOx(){
		$("#pFerricOxa_scene4_knoboff").show();
		$("#pFerricOxa_scene4_flame").hide();
		clearTimeout(flameClrIntvl);
		$("#pFerricOxa_scene4_knoboff").prop("onclick", null);
	}
function potassiumFerricOxalate(){
	$("#pFerricOxa_txt_fChloride").html(pFerricOxalLabel[0]);
	$("#pFerricOxa_txt_water_1").html(pFerricOxalLabel[1]);
	$("#pFerricOxa_txt_pHydrox").html(pFerricOxalLabel[2]);
	$("#pFerricOxa_txt_water_2").html(pFerricOxalLabel[1]);
	$("#pFerricOxa_txt_gRod").html(pFerricOxalLabel[3]);
	$("#pFerricOxa_scene2_txt_fHydro").html(pFerricOxalLabel[4]);
	$("#pFerricOxa_scene2_txt_fPaper").html(pFerricOxalLabel[5]);
	$("#pFerricOxa_scene2_txt_buchner").html(pFerricOxalLabel[6]);
	$("#pFerricOxa_scene3_txt_fHydro").html(pFerricOxalLabel[7]);
	$("#pFerricOxa_scene3_txt_pOxal").html(pFerricOxalLabel[8]);
	$("#pFerricOxa_scene3_txt_water").html(pFerricOxalLabel[9]);
	$("#pFerricOxa_scene3_txt_ppt").html(pFerricOxalLabel[10]);
	$("#pFerricOxa_scene4_txt_paper").html(pFerricOxalLabel[11]);
	$("#pFerricOxa_scene4_txt_trough").html(pFerricOxalLabel[12]);
	$("#pFerricOxa_scene5_bottle_txt").html(mohrsLabel[9]);
	$("#pFerricOxa_scene5_txt_fPaper").html(mohrsLabel[10]);
	$("#pFerricOxa_scene5_txt_crystals").html(pFerricOxalLabel[13]);
	$("#pFerricOxalateWrap").show();
	$("#pFerricOxalateScene_2").hide();
	$("#pFerricOxalateScene_3").hide();
	$("#pFerricOxalateScene_4").hide();
	$("#pFerricOxalateScene_5").hide();
	//--------------------Drag and drop of Ferric chloride--------------------------//
	$("#pFerricOxa_wglass_fChloride").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_wglass_fChloride").animate({
					left:'18px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_wglass_fChloride").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_wglass_fChloride").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_wglass_fChloride").draggable('disable');
	$("#pFerricOxa_fc_DropArea").droppable({accept:"#pFerricOxa_wglass_fChloride",
		drop:function(){
			droped=true;
			$("#pFerricOxa_wglass_fChloride").css({
				'left': '190px',
				'top': '180px'
			});
			$("#pFerricOxa_wglass_fChloride").draggable('disable');
			rotateTo("#pFerricOxa_wglass_fChloride",-20);
			$("#pFerricOxa_salt_fChloride").hide();
			$("#pFerricOxa_fChloride_pour1, #pFerricOxa_fChloride_pour2").animate({'height':'85px'},function(){
				$("#pFerricOxa_fChloride_pour1, #pFerricOxa_fChloride_pour2").animate({'height':'0px','top':'271px'});
			});
			$("#pFerricOxa_beaker_ferric").animate({'opacity':'1'},function(){
				rotateTo("#pFerricOxa_wglass_fChloride",0);
				$("#pFerricOxa_wglass_fChloride").animate({	'left': '18px','top': '264px'});
				$("#pFerricOxa_gRod_2").css({'left':'43px','top':'-48px'});
				stirGlassRod("#pFerricOxa_gRod_2");
				$("#pFerricOxa_beaker_ferric").animate({'opacity':'0'},5000);
				$("#pFerricOxa_beaker_water").animate({'background-color':'#F88320'},5000);
				clrTimeOut=setTimeout(function(){
					clearTimeout(clrGlassRod);
					$("#pFerricOxa_gRod_2").css({'left':'13px','top':'-43px'});
					rotateTo("#pFerricOxa_gRod_2",-20);
					clearTimeout(clrGlassRod);
					droped=false;
					$("#pFerricOxa_wglass_pHydrox").draggable('enable');
				},4000);
			})
		}
	});
	$("#pFerricOxa_wglass_fChloride").draggable('enable');
	//--------------------Drag and drop of Potassium hydroxide--------------------------//
	$("#pFerricOxa_wglass_pHydrox").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_wglass_pHydrox").animate({
					left:'242px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_wglass_pHydrox").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_wglass_pHydrox").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_wglass_pHydrox").draggable('disable');
	$("#pFerricOxa_ph_DropArea").droppable({accept:"#pFerricOxa_wglass_pHydrox",
		drop:function(){
			droped=true;
			$("#pFerricOxa_wglass_pHydrox").css({
				'left': '307px',
				'top': '140px'
			});
			$("#pFerricOxa_wglass_pHydrox").draggable('disable');
			rotateTo("#pFerricOxa_wglass_pHydrox",20);
			$("#pFerricOxa_salt_pHydrox").hide();
			$("#pFerricOxa_pHydrox_pour3, #pFerricOxa_pHydrox_pour4").animate({'height':'85px'},function(){
				$("#pFerricOxa_pHydrox_pour3, #pFerricOxa_pHydrox_pour4").animate({'height':'0px','top':'271px'});
			});
			$("#pFerricOxa_beaker_pHydrox").animate({'opacity':'1'},function(){
				rotateTo("#pFerricOxa_wglass_pHydrox",0);
				$("#pFerricOxa_wglass_pHydrox").animate({	'left': '242px','top': '264px'});
				droped=false;
				$("#pFerricOxa_gRod").draggable('enable');
			})
		}
	});
	
	//--------------------Drag and drop of Glass rod--------------------------//
	$("#pFerricOxa_gRod").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_gRod").animate({
					left:'510px',
					top:'148px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_gRod").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_gRod").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_gRod").draggable('disable');
	$("#pFerricOxa_gRodDropArea").droppable({accept:"#pFerricOxa_gRod",
		drop:function(){
			droped=true;
			$("#pFerricOxa_gRod").css({
				'left': '420px',
				'top': '143px'
			});
			$("#pFerricOxa_gRod").draggable('disable');
			stirGlassRod("#pFerricOxa_gRod");
			$("#pFerricOxa_beaker_pHydrox").animate({'opacity':'0'},5000,function(){
				clearTimeout(clrGlassRod);
				$("#pFerricOxa_gRod").css({'left':'510px','top':'148px'});
				rotateTo("#pFerricOxa_gRod",0);
				droped=false;
				$("#pFerricOxa_beaker_2").draggable('enable');
			});
		}
	});
	
	//--------------------Drag and drop of Potassium hydroxide solution(beaker 2)--------------------------//
	$("#pFerricOxa_beaker_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_beaker_2").animate({
					left:'382px',
					top:'191px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_beaker_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_beaker_2").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_beaker_2").draggable('disable');
	$("#pFerricOxa_phSolu_DropArea").droppable({accept:"#pFerricOxa_beaker_2",
		drop:function(){
			droped=true;
			$("#pFerricOxa_beaker_2").css({
				'left': '195px',
				'top': '190px'
			});
			$("#pFerricOxa_beaker_2").draggable('disable');
			rotateTo("#pFerricOxa_beaker_2",-95);
			$("#pFerricOxa_beaker_water_2").hide();
			$("#pHydro_fall").animate({'height':'70px'});
			$("#pFerricOxa_pHydro_flow").animate({'height':'0px'},function(){
				$("#pHydro_fall").animate({'height':'0px','top':'254px'},function(){
					rotateTo("#pFerricOxa_beaker_2",0);
					$("#pFerricOxa_beaker_2").animate({left:'382px',top:'191px'});
					$("#pFerricOxa_gRod_2").css({'left':'43px','top':'-48px'});
					stirGlassRod("#pFerricOxa_gRod_2");
					$("#pFerricOxa_beaker_water").animate({'opacity':'0.9'},5000);
					clrTimeOut=setTimeout(function(){
						clearTimeout(clrGlassRod);
						$("#pFerricOxa_gRod_2").css({'left':'13px','top':'-43px'});
						rotateTo("#pFerricOxa_gRod_2",-20);
						clearTimeout(clrGlassRod);
						inferenceMsg=inferenceTxt[4];
						$("#inference").show();
						$("#pFerricOxa_scene_1").show();
					},4000);
				});
			});
			$("#pFerricOxa_beaker_water").animate({'height':'46px','top':'45px'},1000);
		}
	});
	$("#pFerricOxa_scene_1").click(function(){
		$("#pFerricOxalateScene_1").hide();
		$("#pFerricOxalateScene_2").show();
		pFerricOxa_scene=2;
		if(helpclickFlag){
			trip.stop();
		}
		droped=false;
		$("#inference").hide();
	});
	//--------------------Drag and drop of Filter paper(Scene 2)-------------------------//
	$("#pFerricOxa_scene2_fPaper").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene2_fPaper").animate({
					left:'190px',
					top:'270px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene2_fPaper").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene2_fPaper").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene2_fPaper").draggable('disable');
	$("#pFerricOxa_scene2_fPaper_DropArea").droppable({accept:"#pFerricOxa_scene2_fPaper",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene2_fPaper").css({
				'left': '305px',
				'top': '102px'
			});
			$("#pFerricOxa_scene2_fPaper").draggable('disable');
			$("#pFerricOxa_scene2_fPaper").animate({'left': '305px','top': '148px'},function(){
				$("#pFerricOxa_scene2_fPaper").hide();
				droped=false;
				$("#pFerricOxa_scene2_beaker").draggable('enable');
			});
			
		}
	});
	$("#pFerricOxa_scene2_fPaper").draggable('enable');
	//--------------------Drag and drop of Ferric hydroxide solution(beaker 2)--------------------------//
	$("#pFerricOxa_scene2_beaker").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene2_beaker").animate({
					left:'50px',
					top:'199px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene2_beaker").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene2_beaker").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene2_beaker").draggable('disable');
	$("#pFerricOxa_scene2_beaker_DropArea").droppable({accept:"#pFerricOxa_scene2_beaker",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene2_beaker").css({
				'left': '337px',
				'top': '55px'
			});
			$("#pFerricOxa_scene2_beaker").draggable('disable');
			rotateTo("#pFerricOxa_scene2_beaker",95);
			$("#pFerricOxa_scene2_water").hide();
			$("#pFerricOxa_scene2_pHydro_flow").show();
			$("#pFerricOxa_scene2_fall").animate({'height':'72px'});
			$("#pFerricOxa_scene2_pHydro_flow").animate({'height':'0px'},function(){
				$("#pFerricOxa_scene2_fall").animate({'height':'0px','top':'297px'},function(){
					rotateTo("#pFerricOxa_scene2_beaker",0);
					inferenceMsg=inferenceTxt[3];
					$("#inference").show();
					$("#pFerricOxa_scene2_beaker").animate({left:'50px',top:'199px'},function(){
						$("#pFerricOxa_scene_2").show();
					});
				});
				$("#pFerricOxa_scene2_cFlaskSolu").animate({
					'border-bottom-width': '40px',
					'top': '261px'
				});
			});
			$("#pFerricOxa_beaker_water").animate({'height':'46px','top':'45px'},1000);
		}
	});
	$("#pFerricOxa_scene_2").click(function(){
		$("#pFerricOxalateScene_2").hide();
		$("#pFerricOxalateScene_3").show();
		$("#inference").hide();
		pFerricOxa_scene=3;
		if(helpclickFlag){
			trip.stop();
		}
		droped=false;
	});
	//--------------------Drag and drop of Oxalic Acid(Scene 3)--------------------------//
	$("#pFerricOxa_scene3_wglass_oxalic").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene3_wglass_oxalic").animate({
					left:'4px',
					top:'272px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene3_wglass_oxalic").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene3_wglass_oxalic").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene3_wglass_oxalic").draggable('disable');
	$("#pFerricOxa_scene3_oxalic_DropArea").droppable({accept:"#pFerricOxa_scene3_wglass_oxalic",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene3_wglass_oxalic").css({
				'left': '245px',
				'top': '187px'
			});
			$("#pFerricOxa_scene3_wglass_oxalic").draggable('disable');
			rotateTo("#pFerricOxa_scene3_wglass_oxalic",-20);
			$("#pFerricOxa_scene3_salt_oxalic").hide();
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'90px'},function(){
				$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'0px','top':'285px'});
			});
			$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'1'},function(){
				rotateTo("#pFerricOxa_scene3_wglass_oxalic",0);
				$("#pFerricOxa_scene3_wglass_oxalic").animate({	'left': '4px','top': '272px'});
				$("#pFerricOxa_scene3_gRod_2").css({'left':'245px','top':'150px'});
				stirGlassRod("#pFerricOxa_scene3_gRod_2");
				$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'0'},5000);
				clrTimeOut=setTimeout(function(){
					clearTimeout(clrGlassRod);
					rotateTo("#pFerricOxa_scene3_gRod_2",-20);
					$("#pFerricOxa_scene3_gRod_2").css({'left':'223px','top':'157px'});
					clearTimeout(clrGlassRod);
					droped=false;
					$("#pFerricOxa_scene3_wglass_pOxal").draggable('enable');
				},4000);
			})
		}
	});
	$("#pFerricOxa_scene3_wglass_oxalic").draggable('enable');
	//--------------------Drag and drop of Oxalic Acid--------------------------//
	$("#pFerricOxa_scene3_wglass_pOxal").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene3_wglass_pOxal").animate({
					left:'108px',
					top:'272px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene3_wglass_pOxal").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene3_wglass_pOxal").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene3_wglass_pOxal").draggable('disable');
	$("#pFerricOxa_scene3_pOxal_DropArea").droppable({accept:"#pFerricOxa_scene3_wglass_pOxal",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene3_wglass_pOxal").css({
				'left': '245px',
				'top': '187px'
			});
			$("#pFerricOxa_scene3_wglass_pOxal").draggable('disable');
			rotateTo("#pFerricOxa_scene3_wglass_pOxal",-20);
			$("#pFerricOxa_scene3_salt_pOxal").hide();
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").css({'top':'196px'});
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'90px'},function(){
				$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'0px','top':'285px'});
			});
			$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'1'},function(){
				rotateTo("#pFerricOxa_scene3_wglass_pOxal",0);
				$("#pFerricOxa_scene3_wglass_pOxal").animate({	'left': '108px','top': '272px'});
				$("#pFerricOxa_scene3_gRod_2").css({'left':'245px','top':'150px'});
				stirGlassRod("#pFerricOxa_scene3_gRod_2");
				$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'0'},5000);
				clrTimeOut=setTimeout(function(){
					clearTimeout(clrGlassRod);
					rotateTo("#pFerricOxa_scene3_gRod_2",-20);
					$("#pFerricOxa_scene3_gRod_2").css({'left':'223px','top':'157px'});
					clearTimeout(clrGlassRod);
					droped=false;
					$("#pFerricOxa_scene3_wglass_pHydroPpt").draggable('enable');
				},4000);
			})
		}
	});
	//--------------------Drag and drop of Ferric Hydroxide precipitate--------------------------//
	$("#pFerricOxa_scene3_wglass_pHydroPpt").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene3_wglass_pHydroPpt").animate({
					left:'292px',
					top:'272px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene3_wglass_pHydroPpt").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene3_wglass_pHydroPpt").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene3_wglass_pHydroPpt").draggable('disable');
	$("#pFerricOxa_scene3_pHydroPpt_DropArea").droppable({accept:"#pFerricOxa_scene3_wglass_pHydroPpt",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene3_wglass_pHydroPpt").css({
				'left': '245px',
				'top': '187px'
			});
			$("#pFerricOxa_scene3_wglass_pHydroPpt").draggable('disable');
			rotateTo("#pFerricOxa_scene3_wglass_pHydroPpt",-20);
			$("#pFerricOxa_scene3_salt_pHydroPpt").hide();
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").css({'top':'196px'});
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").attr('src',simPath+"images/powder_pours/ferric_pour.png");
			$("#pFerricOxa_scene3_beaker_pHydro").attr('src',simPath+"images/mohrs_salt/ferric_chloride.png");
			$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'90px'},function(){
				$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").animate({'height':'0px','top':'285px'});
			});
			$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'1'},function(){
				rotateTo("#pFerricOxa_scene3_wglass_pHydroPpt",0);
				$("#pFerricOxa_scene3_wglass_pHydroPpt").animate({	'left': '292px','top': '272px'});
				$("#pFerricOxa_scene3_gRod_2").css({'left':'245px','top':'150px'});
				stirGlassRod("#pFerricOxa_scene3_gRod_2");
				$("#pFerricOxa_scene3_beaker_pHydro").animate({'opacity':'0'},5000);
				clrTimeOut=setTimeout(function(){
					$("#pFerricOxa_scene3_water").css({'background-color':'#55B04A'});
					clearTimeout(clrGlassRod);
					rotateTo("#pFerricOxa_scene3_gRod_2",0);
					$("#pFerricOxa_scene3_gRod_2").css({'left':'103px','top':'122px'});
					clearTimeout(clrGlassRod);
					droped=false;
					$("#pFerricOxa_scene3_beaker").draggable('enable');
				},4000);
			})
		}
	});
	
	//--------------------Drag and drop of Ferric Hydroxide precipitate--------------------------//
	$("#pFerricOxa_scene3_beaker").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene3_beaker").animate({
					left:'211px',
					top:'199px'					
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene3_beaker").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene3_beaker").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene3_beaker").draggable('disable');
	$("#pFerricOxa_scene3_beaker_DropArea").droppable({accept:"#pFerricOxa_scene3_beaker",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene3_beaker").css({
				'left': '471px',
				'top': '55px'
			});
			$("#pFerricOxa_scene3_beaker").draggable('disable');
			rotateTo("#pFerricOxa_scene3_beaker",95);
			$("#pFerricOxa_scene3_water").hide();
			$("#pFerricOxa_scene3_pHydro_flow").show();
			$("#pFerricOxa_scene3_beaker_water_fall").animate({'height':'65'});
			$("#pFerricOxa_scene3_pHydro_flow").animate({'height':'0'},1000,function(){
				$("#pFerricOxa_scene3_beaker_water_fall").animate({'height':'0','top':'241px'},1000);
				$("#pFerricOxa_scene3_cDish_concSolu").animate({'height':'10','top':'231px'},1000);
				rotateTo("#pFerricOxa_scene3_beaker",0);
				$("#pFerricOxa_scene3_beaker").animate({left:'211px',top:'199px'},function(){
					$("#pFerricOxa_scene_3").show();
				});
			})
		}
	});
	$("#pFerricOxa_scene_3").click(function(){
		$("#pFerricOxalateScene_3").hide();
		$("#pFerricOxalateScene_4").show();
		pFerricOxa_scene=4;
		if(helpclickFlag){
			trip.stop();
		}
		droped=false;
	});
	
	//----------------------------------------scene 4------------------------------------//
	
	//---------------------------Burner on/off(scene4)--------------------------------//
	$("#pFerricOxa_scene4_knoboff").attr('onclick',"flameOnFerricOx()");
	//--------------------Drag and drop of glass rod(scene4)--------------------------//
	$("#pFerricOxa_scene4_gRod").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene4_gRod").animate({
					left:'174px',
					top:'191px',
					'z-index':'0'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene4_gRod").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene4_gRod").css({
				'z-index':'1'
			});
		}
	});
	$("#pFerricOxa_scene4_gRod").draggable('disable');
	$("#pFerricOxa_scene4_gRod_dropArea").droppable({accept:"#pFerricOxa_scene4_gRod",
		drop:function(){
			$("#pFerricOxa_scene4_gRod").draggable('disable');
			droped=true;
			$("#pFerricOxa_scene4_gRod").css({
				'left': '77px',
				'top': '83px',
			});
			stirGlassRod("#pFerricOxa_scene4_gRod");
			$("#pFerricOxa_scene4_concSolu").animate({'top':'14','height':'0px'},4000);
			$("#pFerricOxa_scene4_gRod .posAbso").attr('src',simPath+"images/glassrod_crystal.png");
			setTimeout(function(){
				clearTimeout(clrGlassRod);
				rotateObjects("#pFerricOxa_scene4_gRod",0);
				$("#pFerricOxa_scene4_gRod").animate({'top':'50'},function(){
					$("#popup, #popupTxt").show();
					setTimeout(function(){
						$("#popup, #popupTxt").hide();
						$("#pFerricOxa_scene4_gRod").animate({left:'174px',top:'191px','z-index':'0'});
						$("#pFerricOxa_scene4_cDishT_temp").hide();
						$("#pFerricOxa_scene4_cDish").draggable('enable');
					},2000);
					flameOffFerricOx();
					droped=false;
				});
			},5000);
			$("#concSolu").animate({'height':'0','top':'12px'},7000);
			
		}
	
	});
	 
	//--------------------Drag and drop of china dish (scene4)--------------------------//
	$("#pFerricOxa_scene4_cDish").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene4_cDish").animate({
					left:'42px',
					top:'136px'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene4_cDish").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene4_cDish").css({
				'z-index':'1'
			});
		}
	});
	$("#pFerricOxa_scene4_cDish").draggable('disable');
	$("#pFerricOxa_scene4_cDish_dropArea").droppable({accept:"#pFerricOxa_scene4_cDish",
		drop:function(){
			$("#pFerricOxa_scene4_cDish").draggable('disable');
			droped=true;
			$("#pFerricOxa_scene4_cDish").css({'z-index':'1'});
			$("#pFerricOxa_scene4_cDish").animate({
				'left': '410px',
				'top': '236px'
			},function(){droped=false;});
			 $("#pFerricOxa_scene4_paper").draggable('enable');
		}
	
	});
	
	 //--------------------Drag and drop of Black paper (scene4)--------------------------//
	$("#pFerricOxa_scene4_paper").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene4_paper").animate({
					left:'232px',
					top:'271px'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene4_paper").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene4_paper").css({
				'z-index':'1'
			});
		}
	});
	$("#pFerricOxa_scene4_paper").draggable('disable');
	$("#pFerricOxa_scene4_paper_dropArea").droppable({accept:"#pFerricOxa_scene4_paper",
		drop:function(){
			$("#pFerricOxa_scene4_paper").draggable('disable');
			droped=true;
			$("#pFerricOxa_scene4_paper").css({
				'left': '410px',
				'top': '236px',
				'z-index':'1'
			});
			$("#pFerricOxa_scene4_paper").hide();
			$("#pFerricOxa_scene4_paperOndish").show();
			$("#clockBody,#needle,#minutLabel").show();
			clockinterval=setInterval(clockRotation,10);
			setTimeout(function(){
				$("#clockBody,#needle,#minutLabel").hide();
				clearInterval(clockinterval);
				clockAngle=0;
				$("#pFerricOxa_scene_4").show();
			},5000);
			
		}
	
	});
	$("#pFerricOxa_scene_4").click(function(){
		$("#pFerricOxalateScene_4").hide();
		$("#pFerricOxalateScene_5").show();
		droped=false;
		pFerricOxa_scene=5;
		if(helpclickFlag){
			trip.stop();
		}
		droped=false;
	});
	 //--------------------Drag and drop of Droper (scene5)--------------------------//
	$("#pFerricOxa_scene5_dropper").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene5_dropper").animate({
					left:'7px',
					top:'157px'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene5_dropper").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene5_dropper").css({
				'z-index':'1'
			});
		}
	});
	$("#pFerricOxa_scene5_dropper").draggable('disable');
	$("#pFerricOxa_scene5_droper_dropArea").droppable({accept:"#pFerricOxa_scene5_dropper",
		drop:function(){
			$("#pFerricOxa_scene5_dropper").draggable('disable');
			droped=true;
			$("#pFerricOxa_scene5_dropper").css({
				'left': '135px',
				'top': '180px'
			});
			$("#pFerricOxa_scene5_fall").animate({'height':'73px'},function(){
				$("#pFerricOxa_scene5_fall").animate({'height':'0px','top':'260px'})
			});
			setTimeout(function(){
				$("#pFerricOxa_scene5_dropper").animate({left:'7px',top:'157px'});
				$("#pFerricOxa_scene5_cDish").draggable('enable');
			},1000); 
		}
	
	});
	$("#pFerricOxa_scene5_dropper").draggable('enable');
	 //--------------------Shaking of China dish (scene5)--------------------------//
	$("#pFerricOxa_scene5_cDish").draggable({containment:"#canvasBox",
		start:function(){
			$("#pFerricOxa_scene5_cDish").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene5_cDish").css({
				'z-index':'1'
			});
			$("#pFerricOxa_scene5_cDish").draggable('disable');
			$("#pFerricOxa_scene5_cDish").css({left:'168px',top:'132px'});
			stirGlassRod("#pFerricOxa_scene5_cDish");
			setTimeout(function(){
				clearTimeout(clrGlassRod);
				rotateObject("#pFerricOxa_scene5_cDish",0);
				$("#pFerricOxa_scene5_cDish").animate({left:'80px',top:'150px'});
				setTimeout(function(){
					rotateTo("#pFerricOxa_scene5_cDish",-80);
					$("#pFerricOxa_scene5_beaker_water_fall").animate({'height':'77px'},function(){
						$("#pFerricOxa_scene5_beaker_water_fall").animate({'height':'0px','top':'277px'},function(){
							rotateTo("#pFerricOxa_scene5_cDish",0);
							droped=false;
							$("#pFerricOxa_scene5_cDish").animate({left:'168px',top:'254px'},function(){//--------------Drag and drop of china dish------------------//
								$("#pFerricOxa_scene5_cDish").draggable('enable');
								$("#pFerricOxa_scene5_cDish").draggable({containment:"#canvasBox",
									revert:function(){
										if(!droped){
											$("#pFerricOxa_scene5_cDish").animate({
												left:'168px',
												top:'254px'					
											});
										}
									},
									start:function(){
										$("#pFerricOxa_scene5_cDish").css({
											'z-index':'10'
										});
									},
									stop:function(){
										$("#pFerricOxa_scene5_cDish").css({
											'z-index':'0'
										});
									}
								});
								$("#pFerricOxa_scene5_cDish_dropArea2").droppable({accept:"#pFerricOxa_scene5_cDish",
									drop:function(){
										droped=true;
										$("#pFerricOxa_scene5_cDish").css({
											'left': '300px',
											'top': '213px'
										});
										$("#pFerricOxa_scene5_cDish").draggable('disable');
										rotateTo("#pFerricOxa_scene5_cDish",-90);
										$("#pFerricOxa_scene5_crystals_fPaper").animate({'height':'10px'},function(){
											rotateTo("#pFerricOxa_scene5_cDish",0);
											$("#pFerricOxa_scene5_cDish").animate({left:'168px',top:'254px'});
											$("#pFerricOxa_scene5_fPaper_2").draggable('enable');
											droped=false;
										});
									}
								
								});
							});
						})
					});
					$("#pFerricOxa_scene5_water").animate({'height':'23px',top:'268px'});
				},600);
			},2000);
		}
	});
	$("#pFerricOxa_scene5_cDish").draggable('disable');
	//--------------------Drag and drop of filter paper(scene5)--------------------------
	$("#pFerricOxa_scene5_fPaper_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene5_fPaper_2").animate({
					left:'352px',
					top:'265px'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene5_fPaper_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene5_fPaper_2").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene5_fPaper_2").draggable('disable');
	$("#pFerricOxa_scene5_fPaper_dropArea").droppable({accept:"#pFerricOxa_scene5_fPaper_2",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene5_fPaper_2").draggable('disable');
			$("#pFerricOxa_scene5_fPaper_2").animate({'left': '269px','top':'265px'});
			setTimeout(function(){
				$("#pFerricOxa_scene5_fPaper_2").animate({
					left:'352px',
					top:'265px'
				});
				$("#pFerricOxa_scene5_fPaper_2").draggable('disable');
				droped=false;
				$("#pFerricOxa_scene5_fPaper_1").draggable('enable');
			},1500)
		}
	
	});
	
	//--------------------Drag and drop of filter paper and crystals(scene5)--------------------------
	$("#pFerricOxa_scene5_fPaper_1").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pFerricOxa_scene5_fPaper_1").animate({
					left:'269px',
					top:'265px'
				});
			}
		},
		start:function(){
			$("#pFerricOxa_scene5_fPaper_1").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pFerricOxa_scene5_fPaper_1").css({
				'z-index':'0'
			});
		}
	});
	$("#pFerricOxa_scene5_fPaper_1").draggable('disable');
	$("#pFerricOxa_scene5_fPaper_dropArea2").droppable({accept:"#pFerricOxa_scene5_fPaper_1",
		drop:function(){
			droped=true;
			$("#pFerricOxa_scene5_fPaper_1").draggable('disable');
			$("#pFerricOxa_scene5_fPaper_1").animate({'left': '487px','top':'255px'},function(){
				rotateTo("#pFerricOxa_scene5_fPaper_1",-90);
				$("#pFerricOxa_scene5_crystals_fPaper").animate({'left': '-19px','width':'0px'});
				$("#pFerricOxa_scene5_crystals_wGlass").animate({'height': '12px'},function(){
					rotateTo("#pFerricOxa_scene5_fPaper_1",0);
					$("#pFerricOxa_scene5_fPaper_1").animate({
						left:'269px',
						top:'265px'					
					});
					inferenceMsg=inferenceTxt[2];
					$("#inference").show();
					$("#pFerricOxa_scene5_zoom_mohrs").show();
				});
			});
			
		}
	
	});
	
	function resetExperiment(){
		$("#pFerricOxalateScene_1").show();
		droped=false;
		$("#pFerricOxa_beaker_water,#pFerricOxa_beaker_ferric,#pFerricOxa_beaker_pHydrox").stop();
		$("#pFerricOxa_salt_fChloride,#pFerricOxa_salt_pHydrox,#pFerricOxa_beaker_water_2").show();
		$("#pFerricOxa_fChloride_pour1, #pFerricOxa_pHydrox_pour3").css({'top': '186px'});
		$("#pFerricOxa_fChloride_pour2, #pFerricOxa_pHydrox_pour4").css({'top': '190px'});
		$("#pFerricOxa_beaker_water").css({'top': '60px','height':'31px','background-color':'#FFFFFF','opacity':'.3'});
		$("#pHydro_fall").css({'top':'184px','height':'0px'});
		clearTimeout(clrGlassRod);
		rotateTo("#pFerricOxa_gRod_2",-20);
		$("#pFerricOxa_gRod_2").css({'top': '-43px','left':'13px'});
		rotateTo("#pFerricOxa_gRod",0);
		$("#pFerricOxa_gRod").css({'top': '148px','left':'510px'});
		$("#pFerricOxa_beaker_ferric,#pFerricOxa_beaker_pHydrox").css({'opacity':'0'});
		clearTimeout(clrTimeOut);
		$("#pFerricOxa_scene2_fPaper").css({left:'190px',top:'270px'});
		$("#pFerricOxa_scene2_fPaper,#pFerricOxa_scene2_water").show();
		$("#pFerricOxa_scene2_fall").css({'height':'0','top':'225px'});
		$("#pFerricOxa_scene2_cFlaskSolu").css({'border-bottom-width':'0','top':'301px'});
		$("#pFerricOxa_scene3_salt_oxalic,#pFerricOxa_scene3_salt_pOxal,#pFerricOxa_scene3_salt_pHydroPpt,#pFerricOxa_scene3_water").show();
		$("#pFerricOxa_scene3_beaker_pHydro").css({'opacity':'0'});
		$("#pFerricOxa_scene3_pour1,#pFerricOxa_scene3_pour2").css({'height':'0','top':'196px'});
		$("#pFerricOxa_scene3_pour1, #pFerricOxa_scene3_pour2").attr('src',simPath+"images/powder_pours/ammonium_pour1.png");
		$("#pFerricOxa_scene3_beaker_pHydro").attr('src',simPath+"images/mohrs_salt/ammoniumSulphate.png");
		$("#pFerricOxa_scene4_gRod img").attr('src',simPath+"images/glassrod.png");
		$("#pFerricOxa_scene4_cDish").removeAttr("z-index");
		$("#pFerricOxa_scene4_paper").css({'left':'232px','top':'271px','display':'block'});
		$("#pFerricOxa_scene4_cDish").css({'left':'42px','top':'136px'});
		$("#pFerricOxa_scene3_beaker_water_fall").css({'height':'0','top':'176px'});
		$("#pFerricOxa_scene3_pHydro_flow").css({'height':'82px'});
		$("#pFerricOxa_scene3_pHydro_flow, #pFerricOxa_scene4_paperOndish").hide();
		$("#pFerricOxa_scene3_cDish_concSolu").css({'height':'0px','top':'241px'});
		$("#pFerricOxa_scene3_gRod_2").css({'left':'223px','top':'157px'});
		rotateTo("#pFerricOxa_scene3_gRod_2",-20);
		$("#pFerricOxa_scene5_water").css({'height':'0px','top':'291px'});
		$("#pFerricOxa_scene5_beaker_water_fall").css({'height':'0px','top':'200px'});
		$("#pFerricOxa_scene5_crystals_fPaper,#pFerricOxa_scene5_crystals_wGlass").css({'height':'0px'});
		$("#pFerricOxa_scene5_crystals_fPaper").css({'width':'54px','left':'8px'});
		$("#pFerricOxa_scene3_water").css({'background-color':'#ffffff'});
		$("#pFerricOxa_scene5_fall").css({'height':'0px','top':'187px'});
		$("#pFerricOxa_scene2_pHydro_flow").css({'height':'82px'});
		$("#pFerricOxa_scene4_cDishT_temp").show();
		$("#pFerricOxa_scene4_concSolu").css({'top':'6px','height':'8px'});
		$("#pFerricOxa_scene_1,#pFerricOxa_scene_2,#pFerricOxa_scene_3,#pFerricOxa_scene_4").hide();
		$("#popup, #popupTxt").hide();
		$("#pFerricOxa_scene5_zoom_mohrs").hide();
	}
	resetExperiment();
}