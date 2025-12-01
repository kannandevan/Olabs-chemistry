var clrrotateObj;
function rotateObjects(ID,degree){

	$(ID).css({
		'-ms-transform': 'rotate('+angle+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+angle+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+angle+'deg)',
		'transform-origin': '50% 50%'
	});
	if(degree==angle){
		clearTimeout(clrrotateObj);
	}else{
		if(degree>0){
			angle++;
			clrrotateObj=setTimeout(function(){rotateObjects(ID,degree)},10);
		}else{
			angle--;
			clrrotateObj=setTimeout(function(){rotateObjects(ID,degree)},6);
		}
	}
	
}
function rotateTo(ID,degree){

	$(ID).css({
		'-ms-transform': 'rotate('+degree+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+degree+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+degree+'deg)',
		'transform-origin': '50% 50%'
	});
}
function flamingAlum(){//flaming of burner
	flame_Frame++;
	$("#pAlum_scene2_flame").attr('src',simPath+"images/SCENE3/flame"+flame_Frame+".png");
	flameClrIntvl=setTimeout("flamingAlum()",100);
	if(flame_Frame==5){
		flame_Frame=1;
	}
}
function flameOnAlum(){
	$("#pAlum_scene2_knoboff").hide();
	$("#pAlum_scene2_flame").show();
	flamingAlum();	
	setTimeout(function(){
		flameOffAlum();
		$("#pAlum_scene2_bkr1_DropArea_2").show();
		$("#pAlum_scene2_beaker_1").draggable('enable');
		droped=false;
	},7000);
}
function flameOffAlum(){
	$("#pAlum_scene2_knoboff").show();
	$("#pAlum_scene2_flame").hide();
	clearTimeout(flameClrIntvl);
	$("#pAlum_scene2_knoboff").prop("onclick", null);
}

function potashAlum(){
	$("#potashAlumWrap").show();
	$("#pAlum_txt_ferrous").html(potashAlumLabel[0]);
	$("#pAlum_txt_aSulphate").html(potashAlumLabel[1]);
	$("#pAlum_txt_hcl").html(potashAlumLabel[2]);
	$("#pAlum_txt_water_1").html(potashAlumLabel[3]);
	$("#pAlum_txt_water_2").html(potashAlumLabel[3]);
	$("#pAlum_scene2_txt_solu_1").html(potashAlumLabel[4]);
	$("#pAlum_scene2_txt_solu_2").html(potashAlumLabel[5]);
	$("#pAlum_scene2_txt_cDish").html(potashAlumLabel[6]);
	$("#potashAlumScene_2").hide();
	$("#potashAlumScene_3").hide();
	//--------------------Drag and drop of Potassium Sulphate--------------------------
	$("#pAlum_wglass_pSulhate").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pAlum_wglass_pSulhate").animate({
					left:'18px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#pAlum_wglass_pSulhate").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pAlum_wglass_pSulhate").css({
				'z-index':'0'
			});
		}
	});
	$("#pAlum_wglass_pSulhate").draggable('disable');
	$("#pSulphateDropArea").droppable({accept:"#pAlum_wglass_pSulhate",
		drop:function(){
			droped=true;
			$("#pAlum_wglass_pSulhate").css({
				'left': '92px',
				'top': '106px'
			});
			rotateObject("#pAlum_wglass_pSulhate",20);
			$("#pAlum_salt_pSulhate").animate({'left':'46px'},function(){
				$("#pAlum_salt_pSulhate").animate({'height':'0px','width':'72px','top':'12px'})
				$("#pAlum_pSulphate_pour1, #pAlum_pSulphate_pour2").animate({'height':'115px'},function(){
					$("#pAlum_beaker_pSulphate").animate({'opacity':'1'});
					$("#pAlum_pSulphate_pour1, #pAlum_pSulphate_pour2").animate({'height':'0px','top':'269px'},500);
				})
				$("#mohr_salt_ferrous_2").animate({'height':'17px','top':'286px'},900,function(){
					rotateObject("#pAlum_wglass_pSulhate",0);
					angle=0;
					$("#pAlum_wglass_pSulhate").animate({'left':'18px','top':'264px'});
					$("#pAlum_gRod").css({'left':'38px','top':'-48px'});
					stirGlassRod("#pAlum_gRod");
					$("#pAlum_beaker_pSulphate").animate({'opacity':'0'},5000);
					setTimeout(function(){
						clearTimeout(clrGlassRod);
						$("#pAlum_gRod").css({'left':'65px','top':'-42px'});
						rotateObject("#pAlum_gRod",20);
						$("#pAlum_wglass_aSulphate").draggable('enable');
					},4000);
					droped=false;
					$("#pAlum_wglass_pSulhate").draggable('disable');
				});
			});
		}
	
	});
	$("#pAlum_wglass_pSulhate").draggable('enable');
	//--------------------Drag and drop of Aluminium Sulphate--------------------------
	$("#pAlum_wglass_aSulphate").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pAlum_wglass_aSulphate").animate({
					left:'242px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#pAlum_wglass_aSulphate").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pAlum_wglass_aSulphate").css({
				'z-index':'0'
			});
		}
	});
	$("#pAlum_wglass_aSulphate").draggable('disable');
	$("#aSulphateDropArea").droppable({accept:"#pAlum_wglass_aSulphate",
		drop:function(){
			droped=true;
			$("#pAlum_wglass_aSulphate").css({
				'left': '310px',
				'top': '143px'
			});
			
			rotateObjects("#pAlum_wglass_aSulphate",20);
			$("#pAlum_salt_aSulphate").animate({'left':'46px'},function(){
				$("#pAlum_gRod_1").css({'left':'428px','top':'143px'});
				stirGlassRod("#pAlum_gRod_1");
				$("#pAlum_salt_aSulphate").animate({'height':'0px','width':'72px','top':'12px'})
				$("#pAlum_pSulphate_pour3, #pAlum_pSulphate_pour4").animate({'height':'84px'},function(){
					$("#pAlum_pSulphate_pour3, #pAlum_pSulphate_pour4").animate({'height':'0px','top':'275px'},500);
					$("#pAlum_beaker_aSulphate").animate({'opacity':'1'},function(){
						rotateObjects("#pAlum_wglass_aSulphate",0);
						angle=0;
						$("#pAlum_wglass_aSulphate").animate({'left':'242px','top':'264px'});
						$("#pAlum_beaker_aSulphate").animate({'opacity':'0'},5000);
						setTimeout(function(){
							clearTimeout(clrGlassRod);
							rotateTo("#pAlum_gRod_1",-20);
							$("#pAlum_gRod_1").css({'left':'393px','top':'148px'});
							rotateTo("#pAlum_gRod_1",-20);
							$("#pAlum_mcylinder_hcl").draggable('enable');
						},4000);
						droped=false;
						$("#pAlum_wglass_aSulphate").draggable('disable');
					});
				});
			});
		}
	
	});
	$("#pAlum_wglass_aSulphate").draggable('disable');
	//------------------- Drag and drop of dil. HCl --------------------------
	$("#pAlum_mcylinder_hcl").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pAlum_mcylinder_hcl").animate({
					left:'500px',
					top:'225px'					
				});
			}
		},
		start:function(){
			$("#pAlum_mcylinder_hcl").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pAlum_mcylinder_hcl").css({
				'z-index':'0'
			});
		}
	});
	$("#pAlum_mcylinder_hcl").draggable('disable');
	$("#pAlum_hclDropArea").droppable({accept:"#pAlum_mcylinder_hcl",
		drop:function(){
			droped=true;
			$("#pAlum_mcylinder_hcl").css({
				'left': '422px',
				'top': '189px'
			});
			rotateTo("#pAlum_mcylinder_hcl",-99);
			$("#pAlum_hclSolu").hide();
			$("#pAlum_hcl_fall").animate({'height':'64px'},function(){
				$("#pAlum_hcl_fall").animate({'height':'0px','top':'252px'},function(){
					rotateTo("#pAlum_mcylinder_hcl",0);
					$("#pAlum_mcylinder_hcl").animate({left:'500px',top:'225px'});
					$("#pAlum_mcylinder_hcl").draggable('disable');
					$("#pAlumNextbtn_scene_1").show();
				});
			});
		}
	});
	$("#pAlum_mcylinder_hcl").draggable('disable');
	$("#pAlumNextbtn_scene_1").click(function(){
		$("#potashAlumScene_1").hide();
		$("#potashAlumScene_2").show();
		pAlum_scene=2;
		droped=false;
		if(helpclickFlag){
			trip.stop();
		} 
	});
	//--------------------Drag and drop of Potassium sulphate solution (scene 2)------------------------
	$("#pAlum_scene2_beaker_1").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pAlum_scene2_beaker_1").animate({
					left:'176px',
					top:'199px'					
				});
			}
		},
		start:function(){
			$("#pAlum_scene2_beaker_1").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pAlum_scene2_beaker_1").css({
				'z-index':'0'
			});
		}
	});
	$("#pAlum_scene2_beaker_1").draggable('disable');
	$("#pAlum_scene2_bkr1_DropArea").droppable({accept:"#pAlum_scene2_beaker_1",
		drop:function(){
			droped=true;
			$("#pAlum_scene2_beaker_1").css({
				'left': '39px',
				'top': '105px'
			});
			$("#pAlum_scene2_beaker_1").draggable('disable');
			$("#pAlum_scene2_bkr1_DropArea").hide();
			$("#pAlum_scene2_knoboff").attr('onclick',"flameOnAlum()");
			//--------------------Second Drag and drop of Potassium sulphate solution (scene 2)------------------------
			$("#pAlum_scene2_beaker_1").draggable({containment:"#canvasBox",
				revert:function(){
					if(!droped){
						$("#pAlum_scene2_beaker_1").animate({
							'left': '39px',
							'top': '105px'				
						});
					}
				},
				start:function(){
					$("#pAlum_scene2_beaker_1").css({
						'z-index':'10'
					});
				},
				stop:function(){
					$("#pAlum_scene2_beaker_1").css({
						'z-index':'0'
					});
				}
			});
			$("#pAlum_scene2_bkr1_DropArea_2").droppable({accept:"#pAlum_scene2_beaker_1",
				drop:function(){
					droped=true;
					$("#pAlum_scene2_beaker_1").css({
						'left': '484px',
						'top': '167px'
					});
					rotateTo("#pAlum_scene2_beaker_1",99);
					$("#pAlum_scene2_solu_1").hide();
					$("#pAlum_scene2_fall").show();
					$("#pAlum_scene2_flow").animate({'height':'0px'},function(){
						$("#pAlum_scene2_fall").hide();
						rotateTo("#pAlum_scene2_beaker_1",0);
						$("#pAlum_scene2_beaker_1").animate({'left': '176px','top': '199px'});
						droped=false;
					});
					$("#pAlum_scene2_beaker_1").draggable('disable');
					$("#pAlum_scene2_beaker_2").draggable('enable');
				}
			
			});
		}
	
	});
	$("#pAlum_scene2_beaker_1").draggable('enable');
	//--------------------Drag and drop of Aluminium sulphate solution (scene 2)------------------------
	$("#pAlum_scene2_beaker_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#pAlum_scene2_beaker_2").animate({
					'left': '292px',
					'top': '199px'				
				});
			}
		},
		start:function(){
			$("#pAlum_scene2_beaker_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#pAlum_scene2_beaker_2").css({
				'z-index':'0'
			});
		}
	});
	$("#pAlum_scene2_beaker_2").draggable('disable');
	$("#pAlum_scene2_bkr1_DropArea_3").droppable({accept:"#pAlum_scene2_beaker_2",
		drop:function(){
			droped=true;
			$("#pAlum_scene2_beaker_2").css({
				'left': '484px',
				'top': '167px'
			});
			rotateTo("#pAlum_scene2_beaker_2",99);
			$("#pAlum_scene2_solu_2").hide();
			$("#pAlum_scene2_fall").show();
			$("#pAlum_scene2_flow_2").animate({'height':'0px'},function(){
				$("#pAlum_scene2_fall").hide();
				rotateTo("#pAlum_scene2_beaker_2",0);
				$("#pAlum_scene2_beaker_2").animate({'left': '292px','top': '199px'});
				$("#pAlum_scene2_gRod").css({'left':'38px','top':'-49px'});
				stirGlassRod("#pAlum_scene2_gRod");
				setTimeout(function(){
					clearTimeout(clrGlassRod);
					$("#pAlum_scene2_gRod").css({'left':'57px','top':'-32px'});
					rotateTo("#pAlum_scene2_gRod",62);
					$("#pAlumNextbtn_scene_2").show();
				},4000);
				droped=false;
			});
			$("#pAlum_scene2_concSolu").animate({'height':'8px','top':'4px'});
			$("#pAlum_scene2_beaker_2").draggable('disable');
			
		}
	
	});
	$("#pAlumNextbtn_scene_2").click(function(){
		$("#potashAlumScene_2").hide();
		$("#mohr_scene4_pDish_dropArea").show();
		inorganicFuns[0]();
		$("#mohrsSalt_scene_1").hide();
		$("#mohrsSalt_scene_3").show();
		mohr_scene=3;
		if(helpclickFlag){
			trip.stop();
		} 
	});
	
	$("#mohr_scene3_knobofff").attr('onclick',"flameOn_2()");
	function resetSimulation(){
		$("#potashAlumScene_1").show();
		$("#pAlum_salt_pSulhate").css({'left': '29px','top': '1px','width': '54px','height': '11px'});
		$("#pAlum_beaker_pSulphate").css({'opacity':'0'});
		clearTimeout(clrGlassRod);
		$("#pAlum_salt_aSulphate").css({'left': '34px','top': '-5px','width': '54px','height': '18px'});
		$("#pAlum_beaker_aSulphate").css({'opacity':'0'});
		$("#pAlum_hclSolu").show();
		$("#pAlum_hcl_fall").css({'top': '188px','height': '0px'});
		$("#pAlum_scene2_bkr1_DropArea").show();
		$("#pAlum_pSulphate_pour1").css({'top': '154px','height': '0px'});
		$("#pAlum_pSulphate_pour2").css({'top': '157px','height': '0px'});
		$("#pAlum_pSulphate_pour3,#pAlum_pSulphate_pour4").css({'top': '191px','height': '0px'});
		$("#pAlum_scene2_solu_1,#pAlum_scene2_solu_2").show();
		$("#pAlum_scene2_flow,#pAlum_scene2_flow_2").css({'height': '82px'});
		$("#pAlum_scene2_concSolu").css({'height': '0px','top':'12px'});
		$("#pAlum_scene2_bkr1_DropArea_2").hide();
		$("#pAlumNextbtn_scene_1,#pAlumNextbtn_scene_2").hide();
		$("#pAlum_gRod_1").css({'left':'448px','top':'148px'});
		rotateTo("#pAlum_gRod_1",20);
	}
	resetSimulation();
}