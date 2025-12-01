var clrrotateTestTube;
function rotateObject(ID,degree){//console.log(counter);

	$(ID).css({
		'-ms-transform': 'rotate('+degree+'deg)',
		'-webkit-transform': 'rotate('+degree+'deg)',
		'transform': 'rotate('+degree+'deg)',
	});
	
}
var gAngle=0;
var turningRight=true;
var clrGlassRod;
function stirGlassRod(ID){//console.log(counter);
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
var flame_Frame=1;
var flameClrIntvl;
function flaming(){//flaming of burner
	flame_Frame++;
	$("#mohr_scene3_flame").attr('src',simPath+"images/SCENE3/flame"+flame_Frame+".png");
	flameClrIntvl=setTimeout("flaming()",100);
	if(flame_Frame==5){
		flame_Frame=1;
	}
}
function flameOn(){
	$("#mohr_scene3_knoboff").hide();
	$("#mohr_scene3_flame").show();
	flaming();	
	$("#mohr_scene3_gRod").draggable('enable');
}
function flameOff(){
	$("#mohr_scene3_knoboff").show();
	$("#mohr_scene3_flame").hide();
	clearTimeout(flameClrIntvl);
	$("#mohr_scene3_knoboff").prop("onclick", null);
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
var clockinterval;
var clockAngle=0;
function clockRotation(){
	clockAngle++;
	document.getElementById("needle").style.webkitTransformOrigin='3px 25px';
	document.getElementById("needle").style.webkitTransform = 'rotate(' + clockAngle + 'deg)';
	document.getElementById("needle").style.MozTransformOrigin='3px 25px';
	document.getElementById("needle").style.MozTransform ='rotate('+ clockAngle +'deg)';
	document.getElementById("needle").style.transformOrigin='3px 25px';
	document.getElementById("needle").style.transform ='rotate('+ clockAngle +'deg)';
}
function mohrsSalt(){
	$("#mohrsSaltWrap").show();
	$("#mohr_txt_ferrous").html(mohrsLabel[0]);
	$("#mohr_txt_ammonium").html(mohrsLabel[1]);
	$("#mohr_txt_hcl").html(mohrsLabel[2]);
	$(".nextbtnTxt").html(mohrsLabel[3]);
	$("#mohr_txt_water").html(mohrsLabel[4]);
	$("#mohr_txt_mix").html(mohrsLabel[5]);
	$("#mohr_scene3_txt_pDish").html(mohrsLabel[6]);
	$("#mohr_scene3_txt_pDishBig").html(mohrsLabel[7]);
	$("#mohr_scene4_txt_pDish").html(mohrsLabel[8]);
	$("#mohr_scene4_bottle_txt").html(mohrsLabel[9]);
	$("#mohr_scene4_txt_fPaper").html(mohrsLabel[10]);
	$("#minutLabel").html(mohrsLabel[11]);
	$("#mohrsSalt_scene_2").hide();
	$("#mohrsSalt_scene_3").hide();
	$("#mohrsSalt_scene_4").hide();
	
	if(simulationTypeIndex==0){
		$("#mohr_scene3_crystals,#mohr_scene4_crystals,#mohr_scene4_crystals_fPaper,#mohr_scene4_crystals_wGlass").attr('src',simPath+'images/SCENE3/crystals_white.png');
		$("#mohr_scene4_solSmall").attr('src',simPath+'images/SCENE3/solutionSmall.png');
		$("#mohr_scene4_crystals_temp").attr('src',simPath+'images/SCENE3/crystals_temp.png');
		$("#mohr_scene4_solSmall_temp").attr('src',simPath+'images/SCENE3/solutionSmall_1.png');
		$("#mohr_scene3_soluFall").css({ 'background-color': '#8DC3B1'});
		$("#mohr_scene4_concSoluFall").css({ 'background-color': '#5C7A4C'});
		$("#mohr_scene4_water").css({ 'background-color': '#4BA06C'});
		$("#mohr_scene4_txt_pDish").html(mohrsLabel[8]);
		$("#mohr_scene4_bottle_txt").html(mohrsLabel[9]);
		$("#mohr_scene4_bottle_txt").css({'top':'83px'});
		$("#mohr_scene4_zoom_mohrs").attr('src',simPath+'images/zoom_mohrs.jpg');
	}else{
		$("#mohr_scene3_crystals,#mohr_scene4_crystals,#mohr_scene4_crystals_fPaper,#mohr_scene4_crystals_wGlass").attr('src',simPath+'images/SCENE3/crystals_white_2.png');
		$("#mohr_scene4_solSmall").attr('src',simPath+'images/SCENE3/pSulphateSolu.png');
		$("#mohr_scene4_crystals_temp").attr('src',simPath+'images/SCENE3/crystals_temp_2.png');
		$("#mohr_scene4_solSmall_temp").attr('src',simPath+'images/SCENE3/solutionSmall_2.png');
		$("#mohr_scene3_soluFall,#mohr_scene4_concSoluFall,#mohr_scene4_water").css({ 'background-color': '#FFFFFF'});
		$("#mohr_scene4_txt_pDish").html(mohrsLabel[12]);
		$("#mohr_scene4_bottle_txt").html(mohrsLabel[13]);
		$("#mohr_scene4_bottle_txt").css({'top':'71px'});
		$("#mohr_scene4_zoom_mohrs").attr('src',simPath+'images/zoom_pAlum.jpg');
		
	}
   //--------------------Drag and drop of Ferous Sulphate--------------------------
	$("#mohr_wglass_ferrous").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_wglass_ferrous").animate({
					left:'18px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#mohr_wglass_ferrous").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_wglass_ferrous").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_wglass_ferrous").draggable('disable');
	$("#ferrousDropArea").droppable({accept:"#mohr_wglass_ferrous",
		drop:function(){
			droped=true;
			$("#mohr_wglass_ferrous").css({
				'left': '372px',
				'top': '106px'
			});
			rotateObject("#mohr_wglass_ferrous",20);
			$("#mohr_salt_ferrous").animate({'left':'46px'},function(){
				$("#mohr_salt_ferrous").animate({'height':'0px','width':'72px','top':'12px'})
				$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").animate({'height':'145px'},function(){
					$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").animate({'height':'0px','top':'299px'},500);
				})
				$("#mohr_salt_ferrous_2").animate({'height':'17px','top':'286px'},900,function(){
					rotateObject("#mohr_wglass_ferrous",0);
					angle=0;
					$("#mohr_wglass_ferrous").animate({'left':'18px','top':'264px'});
					droped=false;
					$("#mohr_wglass_ferrous").draggable('disable');
					 $("#mohr_wglass_ammonium").draggable('enable');
				});
			});
		}
	
	});
	 $("#mohr_wglass_ferrous").draggable('enable');
	//--------------------Drag and drop of Ammonium Sulphate--------------------------
	$("#mohr_wglass_ammonium").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_wglass_ammonium").animate({
					left:'159px',
					top:'264px'					
				});
			}
		},
		start:function(){
			$("#mohr_wglass_ammonium").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_wglass_ammonium").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_wglass_ammonium").draggable('disable');
	$("#ammoniumDropArea").droppable({accept:"#mohr_wglass_ammonium",
		drop:function(){
			$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").attr('src',simPath+'images/powder_pours/ammonium_pour1.png');
			$("#mohr_ferrous_pour1").css({	'top':'154px'});
			$("#mohr_ferrous_pour2").css({	'top':'157px'});
			droped=true;
			$("#mohr_wglass_ammonium").css({
				'left': '372px',
				'top': '106px'
			});
			rotateObject("#mohr_wglass_ammonium",20);
			$("#mohr_salt_ammonium").animate({'left':'46px'},function(){
				$("#mohr_salt_ammonium").animate({'height':'0px','width':'72px','top':'12px'})
				$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").animate({'height':'145px'},function(){
					$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").animate({'height':'0px','top':'299px'},500);
				})
				$("#mohr_salt_ferrous_ammonium").animate({'opacity':'1'},900,function(){
					rotateObject("#mohr_wglass_ammonium",0);
					angle=0;
					$("#mohr_wglass_ammonium").animate({'left':'159px','top':'264px'});
					$("#mohr_wglass_ammonium").draggable('disable');
					$("#mohr_mcylinder_hcl").draggable('enable');
					droped=false;
				});
			});
		}
	
	});
	
	//------------------- Drag and drop of dil. HCl --------------------------
	$("#mohr_mcylinder_hcl").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_mcylinder_hcl").animate({
					left:'339px',
					top:'225px'					
				});
			}
		},
		start:function(){
			$("#mohr_mcylinder_hcl").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_mcylinder_hcl").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_mcylinder_hcl").draggable('disable');
	$("#hclDropArea").droppable({accept:"#mohr_mcylinder_hcl",
		drop:function(){
			$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").attr('src',simPath+'images/powder_pours/ammonium_pour1.png');
			$("#mohr_ferrous_pour1").css({	'top':'154px'});
			$("#mohr_ferrous_pour2").css({	'top':'157px'});
			droped=true;
			$("#mohr_mcylinder_hcl").css({
				'left': '483px',
				'top': '106px'
			});
			rotateObject("#mohr_mcylinder_hcl",-99);
			$("#hclSolu").animate({'width':'0px'});
			$("#mohr_hcl_fall").animate({'height':'176px'},function(){
				$("#mohr_hcl_fall").animate({'height':'0px','top':'281px'},function(){
					angle=0;
					rotateObject("#mohr_mcylinder_hcl",0);
					$("#mohr_mcylinder_hcl").animate({
						left:'339px',
						top:'225px'					
					},function(){$("#nextbtnWrap").show();});
				})
				$("#mohr_salt_ferrous_ammonium").animate({'opacity':'0.5'});
			});
		}
	
	});

	$("#nextbtnWrap").click(function(){
		$("#mohrsSalt_scene_1").hide();
		$("#mohrsSalt_scene_2").show();
		mohr_scene=2;
		droped=false;
		if(helpclickFlag){
			trip.stop();
		} 
	});
	$("#mohr_scene2_nextbtnWrap").click(function(){
		$("#mohrsSalt_scene_2").hide();
		$("#mohrsSalt_scene_3").show();
		mohr_scene=3;
		droped=false;
		if(helpclickFlag){
			trip.stop();
		} 
	});
	//--------------------Drag and drop of water beaker(scene2)--------------------------
	$("#mohr_scene2_beaker_water").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene2_beaker_water").animate({
					left:'37px',
					top:'200px'					
				});
			}
		},
		start:function(){
			$("#mohr_scene2_beaker_water").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene2_beaker_water").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene2_beaker_water").draggable('disable');
	$("#mohr_scene2_beaker_water_dropArea").droppable({accept:"#mohr_scene2_beaker_water",
		drop:function(){
			droped=true;
			$("#mohr_scene2_beaker_water").draggable('disable');
			$("#mohr_scene2_beaker_water").css({
				'left': '222px',
				'top': '67px'
			});
			rotateObject("#mohr_scene2_beaker_water",90);
			$("#mohr_scene2_water").css({'left':'65px','border-bottom-left-radius':'0px','width':'10px'});
			$("#mohr_scene2_water").animate({'top':'1px','height':'90px'},function(){
				$("#mohr_scene2_water").animate({'height':'0px'});
				$("#mohr_scene2_beaker_water_fall").animate({'height':'153px'},function(){
					$("#mohr_scene2_water_2").animate({'height':'31px','top':'60px'});
					$("#mohr_scene2_beaker_water_fall").animate({'height':'0px','top':'275'},function(){
						rotateObject("#mohr_scene2_beaker_water",0);
						$("#mohr_scene2_beaker_water").animate({
							left:'37px',
							top:'200px'					
						});
						$("#mohr_scene2_gRod").draggable('enable');
						droped=false;
					})
				});
			});
		}
	
	});
	 $("#mohr_scene2_beaker_water").draggable('enable');
	//--------------------Drag and drop of glass rod(scene2)--------------------------
	$("#mohr_scene2_gRod").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene2_gRod").animate({
					left:'345px',
					top:'178px'					
				});
			}
		},
		start:function(){
			$("#mohr_scene2_gRod").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene2_gRod").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene2_gRod").draggable('disable');
	$("#mohr_scene2_beaker_gRod_dropArea").droppable({accept:"#mohr_scene2_gRod",
		drop:function(){
			droped=true;
			$("#mohr_scene2_gRod").draggable('disable');
			$("#mohr_scene2_gRod").css({
				'left': '232px',
				'top': '147px'
			});
			stirGlassRod("#mohr_scene2_gRod");
			setTimeout(function(){
				clearTimeout(clrGlassRod);
				rotateObject("#mohr_scene2_gRod",0);
				$("#mohr_scene2_gRod").animate({'top':'50'},function(){
					$("#mohr_scene2_gRod").animate({left:'345px',top:'178px'});
					$("#mohr_scene2_beaker_mix").draggable('enable');
					droped=false;
				});
			},5000);
			$("#mohr_scene2_saltMix").animate({'opacity':'0'},5000);
			
		}
	
	});
	 
	//--------------------Drag and drop of  beaker conatain mixture(scene2)--------------------------
	$("#mohr_scene2_beaker_mix").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene2_beaker_mix").animate({
					left:'195px',
					top:'200px'					
				});
			}
		},
		start:function(){
			$("#mohr_scene2_beaker_mix").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene2_beaker_mix").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene2_beaker_mix").draggable('disable');
	$("#mohr_scene2_beaker_mix_dropArea").droppable({accept:"#mohr_scene2_beaker_mix",
		drop:function(){
			droped=true;
			$("#mohr_scene2_beaker_mix").draggable('disable');
			$("#mohr_scene2_beaker_mix").css({
				'left': '461px',
				'top': '67px'
			});
			rotateObject("#mohr_scene2_beaker_mix",90);
			$("#mohr_scene2_water_2").css({'left':'65px','border-bottom-left-radius':'0px','width':'10px'});
			$("#mohr_scene2_water_2").animate({'top':'1px','height':'90px'},function(){
				$("#mohr_scene2_beaker_water_fall_3").animate({'height':'60px'});
				$("#mohr_scene2_water_2").animate({'left':'68px','width':'7px','height':'80px','border-bottom-left-radius':'3px','border-bottom-right-radius':'0px'},1000,function(){
					$("#mohr_scene2_beaker_water_fall_2").animate({'height':'45px'});
					$("#mohr_scene2_water_2").animate({'height':'0px'},1000,function(){
						$("#mohr_scene2_beaker_water_fall_2").animate({'height':'0px','top':'167px'},function(){
							$("#mohr_scene2_beaker_water_fall_3").animate({'height':'0px','top':'269px'});
							$("#concSolu_1").animate({'opacity':'0.6'});
							rotateObject("#mohr_scene2_beaker_mix",0);
							$("#mohr_scene2_beaker_mix").animate({
								left:'195px',
								top:'200px'					
							},function(){$("#mohr_scene2_nextbtnWrap").show()});
						})
					});
				});
				$("#mohr_scene2_beaker_water_fall_2").animate({'height':'45px'});
			});
			
		}
	
	});
	
	//--------------------Burner on/off(scene3)--------------------------
	$("#mohr_scene3_knoboff").attr('onclick',"flameOn()");
	if(simulationTypeIndex==0){
		$("#mohr_scene3_solSmall").attr('src',simPath+'images/SCENE3/solutionSmall.png');
		$("#concSolu").css({'background-color':'#8DC3B1'});
	}else{
		$("#mohr_scene3_solSmall").attr('src',simPath+'images/SCENE3/pSulphateSolu.png');
		$("#concSolu").css({'background-color':'#FFFFFF'});
	}
	//--------------------Drag and drop of glass rod(scene2)--------------------------
	$("#mohr_scene3_gRod").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene3_gRod").animate({
					left:'197px',
					top:'178px',
					'z-index':'0'
				});
			}
		},
		start:function(){
			$("#mohr_scene3_gRod").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene3_gRod").css({
				'z-index':'1'
			});
		}
	});
	$("#mohr_scene3_gRod").draggable('disable');
	$("#mohr_scene3_gRod_dropArea").droppable({accept:"#mohr_scene3_gRod",
		drop:function(){
			$("#mohr_scene3_gRod").draggable('disable');
			droped=true;
			$("#mohr_scene3_gRod").css({
				'left': '77px',
				'top': '110px',
			});
			stirGlassRod("#mohr_scene3_gRod");
			if(simulationTypeIndex==0){
				$("#mohr_scene3_gRod .posAbso").attr('src',simPath+"images/glassrod_crystal.png");
			}else{
				$("#mohr_scene3_gRod .posAbso").attr('src',simPath+"images/glassrod_crystal_white.png");
			}
			setTimeout(function(){
				clearTimeout(clrGlassRod);
				rotateObject("#mohr_scene3_gRod",0);
				$("#mohr_scene3_gRod").animate({'top':'50'},function(){
					$("#popup, #popupTxt").show();
					setTimeout(function(){
						$("#popup, #popupTxt").hide();
						$("#mohr_scene3_gRod").animate({left:'197px',top:'178px','z-index':'0'});
					},2000);
					flameOff();
					droped=false;
					$("#mohr_scene3_cDishT_temp").hide();
					$("#mohr_scene3_cDish").draggable('enable');
				});
			},5000);
			$("#concSolu").animate({'height':'0','top':'12px'},7000);
			
		}
	
	});
	 
	//------------------- Drag and drop China dish -------------------------
	$("#mohr_scene3_cDish").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene3_cDish").animate({
					left:'42px',
					top:'159px'					
				});
			}
		}
	});
	$("#mohr_scene3_cDish").draggable('disable');
	$("#mohr_scene3_cDish_dropArea").droppable({accept:"#mohr_scene3_cDish",
		drop:function(){
			$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").attr('src',simPath+'images/powder_pours/ammonium_pour1.png');
			$("#mohr_ferrous_pour1").css({	'top':'154px'});
			$("#mohr_ferrous_pour2").css({	'top':'157px'});
			droped=true;
			$("#mohr_scene3_cDish").draggable('disable');
			$("#mohr_scene3_cDish").css({
				'left': '308px',
				'top': '156px'
			});
			rotateObject("#mohr_scene3_cDish",-90);
			//setTimeout(function(){
				$("#mohr_scene3_soluFall").animate({'height':'109px'},function(){
					$("#mohr_scene3_solSmall").animate({'height':'27px','top':'20px'});
					$("#mohr_scene3_soluFall").animate({'height':'0px','top':'263px'},function(){
						angle=0;
						rotateObject("#mohr_scene3_cDish",0);
						$("#mohr_scene3_cDish").animate({
							left:'42px',
							top:'159px'					
						},function(){
							 $("#mohr_scene3_wGlass").draggable('enable');
							 droped=false;
						});
					})
				});
			//},500);
		}
	
	});
	
	//--------------------Drag and drop of watch glass(scene3)--------------------------
	$("#mohr_scene3_wGlass").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene3_wGlass").animate({
					left:'141px',
					top:'283px',
					'z-index':'0'
				});
			}
		},
		start:function(){
			$("#mohr_scene3_wGlass").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene3_wGlass").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene3_wGlass").draggable('disable');
	$("#mohr_scene3_wGlass_dropArea").droppable({accept:"#mohr_scene3_wGlass",
		drop:function(){
			droped=true;
			$("#mohr_scene3_wGlass").animate({'left': '251px','top': '222px'},function(){
				$("#mohr_scene3_wGlass").hide();
				$("#mohr_wGlass_in_pDish").show();
				droped=false;
				$("#mohr_scene3_pDish").draggable('enable');
			});
			
		}
	
	});
	
	
	//--------------------Drag and drop of petri dish(scene3)--------------------------
	$("#mohr_scene3_pDish").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene3_pDish").animate({
					left:'264px',
					top:'225px',
				});
			}
		},
		start:function(){
			$("#mohr_scene3_pDish").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene3_pDish").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene3_pDish").draggable('disable');
	$("#mohr_scene3_pDish_dropArea").droppable({accept:"#mohr_scene3_pDish",
		drop:function(){
			droped=true;
			$("#clockBody,#needle,#minutLabel").show();
			clockinterval=setInterval(clockRotation,10);
			$("#mohr_scene3_pDish").draggable('disable');
			$("#mohr_scene3_pDish").animate({'left': '419px','top': '220px'},function(){
				$("#mohr_scene3_crystals").animate({'opacity':'1'},7000);
				$("#mohr_scene3_solSmall").animate({'opacity':'.8'},7000,function(){
					$("#clockBody,#needle,#minutLabel").hide();
					clearInterval(clockinterval);
					clockAngle=0;
					$("#mohr_scene3_nextbtnWrap").show();
				});
			});
			
		}
	
	});
	 
	$("#mohr_scene3_nextbtnWrap").click(function(){
		$("#mohrsSalt_scene_3").hide();
		$("#mohrsSalt_scene_4").show();
		mohr_scene=4;
		droped=false;
		if(helpclickFlag){
			trip.stop();
		} 
	});
	//------------------- Drag and drop of petridish(Scene4) --------------------------
	$("#mohr_scene4_pDish").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene4_pDish").animate({
					left:'96px',
					top:'241px'					
				});
			}
		},
		start:function(){
			$("#mohr_scene4_pDish").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene4_pDish").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene4_pDish").draggable('disable');
	$("#mohr_scene4_pDish_dropArea").droppable({accept:"#mohr_scene4_pDish",
		drop:function(){
			$("#mohr_scene4_pDish").draggable('disable');
			droped=true;
			$("#mohr_scene4_pDish").css({
				'left': '0px',
				'top': '107px'
			});
			rotateObject("#mohr_scene4_pDish",-85);
			$("#mohr_scene4_solSmall").animate({'height':'7px','top':'40px','width':'97px'});
			$("#mohr_scene4_solSmall_temp").animate({'width':'23px'});
			$("#mohr_scene4_concSoluFall").animate({'height':'131px'},function(){
				$("#mohr_scene4_water").css({'top':'266px','height':'20px'});
				$("#mohr_scene4_solSmall_temp").css({'width':'0px'});
				$("#mohr_scene4_concSoluFall").animate({'height':'0px','top':'281px'},function(){
					angle=0;
					rotateObject("#mohr_scene4_pDish",0);
					$("#mohr_scene4_pDish").animate({
						left:'96px',
						top:'241px'					
					},function(){
						droped=false;
						$("#mohr_scene4_dropper").draggable('enable');
					});
				})
			});
		}
	
	});
	 $("#mohr_scene4_pDish").draggable('enable');
	//------------------- Drag and drop of dropper(Scene4) --------------------------
	$("#mohr_scene4_dropper").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene4_dropper").animate({
					left:'192px',
					top:'156px'					
				});
			}
		},
		start:function(){
			$("#mohr_scene4_dropper").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene4_dropper").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene4_dropper").draggable('disable');
	$("#mohr_scene4_dropper_dropArea").droppable({accept:"#mohr_scene4_dropper",
		drop:function(){
			$("#mohr_scene4_dropper").draggable('disable');
			droped=true;
			$("#mohr_scene4_dropper").css({
				'left': '159px',
				'top': '153px'
			});
			$("#mohr_scene4_soluFall").animate({'height':'118px'},function(){
				setTimeout(function(){$("#mohr_scene4_soluFall").animate({'height':'0px','top':'277px'});},1000);
			});
			$("#mohr_scene4_solSmall").animate({'height':'27px','top':'20px','width':'97px','opacity':'.3'},2000);
			setTimeout(function(){
						$("#mohr_scene4_dropper").animate({'left':'192px','top':'156px'	});
						$("#mohr_scene4_pDish_dropArea").hide();
						$("#mohr_scene4_pDish").draggable('enable');
						$("#mohr_scene4_pDish").draggable({containment:"#canvasBox",
							start:function(){
								$("#mohr_scene4_pDish").css({
									'z-index':'10'
								});
							},
							stop:function(){
								$("#mohr_scene4_pDish").draggable('disable');
								$("#mohr_scene4_pDish").css({
									'left':'96px','top':'93px'
								});
								stirGlassRod("#mohr_scene4_pDish");
								setTimeout(function(){
									clearTimeout(clrGlassRod);
									rotateObject("#mohr_scene4_pDish",0);
									$("#mohr_scene4_pDish").css({
										left:'0px',
										top:'107px'					
									});
									droped=false;
									$("#mohr_scene4_concSoluFall").css({'height':'0px','top':'150px'});
									rotateObject("#mohr_scene4_pDish",-85);
									$("#mohr_scene4_solSmall").animate({'height':'7px','top':'40px','width':'97px'});
									$("#mohr_scene4_solSmall_temp").animate({'width':'23px'});
									$("#mohr_scene4_concSoluFall").animate({'height':'131px'},function(){
										$("#mohr_scene4_water").animate({'top':'246px','height':'40px'});
										$("#mohr_scene4_solSmall_temp").css({'width':'0px'});
										$("#mohr_scene4_concSoluFall").animate({'height':'0px','top':'281px'},function(){
											angle=0;
											rotateObject("#mohr_scene4_pDish",0);
											$("#mohr_scene4_pDish").animate({
												left:'96px',
												top:'241px'					
											},function(){
												droped=false;
												$("#mohr_scene4_pDish").draggable('enable');
												$("#mohr_scene4_pDish_dropArea_2").show();
												$("#mohr_scene4_pDish").draggable({containment:"#canvasBox",
													revert:function(){
														if(!droped){
															$("#mohr_scene4_pDish").animate({
																left:'96px',
																top:'241px'					
															});
														}
													},
													start:function(){
														$("#mohr_scene4_pDish").css({
															'z-index':'10'
														});
													},
													stop:function(){
														$("#mohr_scene4_pDish").css({
															'z-index':'0'
														});
													}
												});
												$("#mohr_scene4_pDish_dropArea_2").droppable({accept:"#mohr_scene4_pDish",
													drop:function(){
														droped=true;
														$("#mohr_scene4_pDish").css({
															'left': '250px',
															'top': '217px'
														});
														$("#mohr_scene4_pDish").draggable('disable');
														rotateObject("#mohr_scene4_pDish",-90);
														$("#mohr_scene4_crystals").animate({'left':'0px'},function(){
															$("#mohr_scene4_crystals").animate({'height':'0px'});
															$("#mohr_scene4_crystals_temp").animate({'width':'12px'},function(){
																$("#mohr_scene4_crystals_temp").animate({'height':'0px'});
																$("#mohr_scene4_crystals_fPaper").animate({'height':'12px'},function(){
																	angle=0;
																	rotateObject("#mohr_scene4_pDish",0);
																	$("#mohr_scene4_pDish").animate({
																		left:'96px',
																		top:'241px'					
																	});
																	droped=false;
																	$("#mohr_scene4_fPaper_2").draggable('enable');
																});
															});
														});
													}
												
												});
												
											});
										})
										$("#mohr_scene4_pDish_dropArea").hide();
									});
								},4000);
							}
						});
			},2000);
		}
	
	});
	
	//--------------------Drag and drop of filter paper(scene4)--------------------------
	$("#mohr_scene4_fPaper_2").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene4_fPaper_2").animate({
					left:'352px',
					top:'265px'
				});
			}
		},
		start:function(){
			$("#mohr_scene4_fPaper_2").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene4_fPaper_2").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene4_fPaper_2").draggable('disable');
	$("#mohr_scene4_fPaper_dropArea").droppable({accept:"#mohr_scene4_fPaper_2",
		drop:function(){
			droped=true;
			$("#mohr_scene4_fPaper_2").draggable('disable');
			$("#mohr_scene4_fPaper_2").animate({'left': '269px','top':'265px'});
			setTimeout(function(){
				$("#mohr_scene4_fPaper_2").animate({
					left:'352px',
					top:'265px'
				});
				$("#mohr_scene4_fPaper_2").draggable('disable');
				droped=false;
				$("#mohr_scene4_fPaper_1").draggable('enable');
			},1500);
		}
	
	});
	
	//--------------------Drag and drop of filter paper and crystals(scene4)--------------------------
	$("#mohr_scene4_fPaper_1").draggable({containment:"#canvasBox",
		revert:function(){
			if(!droped){
				$("#mohr_scene4_fPaper_1").animate({
					left:'269px',
					top:'265px'
				});
			}
		},
		start:function(){
			$("#mohr_scene4_fPaper_1").css({
				'z-index':'10'
			});
		},
		stop:function(){
			$("#mohr_scene4_fPaper_1").css({
				'z-index':'0'
			});
		}
	});
	$("#mohr_scene4_fPaper_1").draggable('disable');
	$("#mohr_scene4_crystals_dropArea").droppable({accept:"#mohr_scene4_fPaper_1",
		drop:function(){
			droped=true;
			$("#mohr_scene4_fPaper_1").draggable('disable');
			$("#mohr_scene4_fPaper_1").animate({'left': '487px','top':'255px'},function(){
				rotateObject("#mohr_scene4_fPaper_1",-90);
					$("#mohr_scene4_crystals_fPaper").animate({'left': '-19px','width':'0px'});
					$("#mohr_scene4_crystals_wGlass").animate({'height': '12px'},function(){
						angle=0;
						rotateObject("#mohr_scene4_fPaper_1",0);
						$("#mohr_scene4_fPaper_1").animate({
							left:'269px',
							top:'265px'					
						});
						if(simulationTypeIndex==0){
							inferenceMsg=inferenceTxt[0];
						}else{
							inferenceMsg=inferenceTxt[1];
						}
						$("#inference").show();
						$("#mohr_scene4_zoom_mohrs").show();
					});
			});
			
		}
	
	});
	
	
	
	
	
	
	
	function resetSim(){
		mohr_scene=1;
		$("#mohrsSalt_scene_1").show();
		$("#mohr_salt_ferrous").css({'left':'29px','top':'-4px','height': '17px','width':'72px'});
		$("#mohr_salt_ammonium").css({'left':'34px','top':'-5px','height': '18px','width':'54px'});
		$("#hclSolu").css({'width':'11px'});
		$("#mohr_hcl_fall").css({'top':'105px'});
		$("#mohr_salt_ferrous_2").css({'top':'303px','height':'0px'});
		$("#mohr_ferrous_pour1").css({'top':'154px','height': '0px'});
		$("#mohr_ferrous_pour2").css({'top':'157px','height': '0px'});
		$("#mohr_salt_ferrous_ammonium").css({'opacity':'0'});
		$("#mohr_scene2_water").css({'left':'3px','top':'60px','height': '31px','width':'73px','border-radius': '0px 0px 13px 14px'});
		$("#mohr_scene2_water_mask").css({'top':'60px','border-width': '0px 75px 0 0'});
		$("#mohr_scene2_beaker_water_fall").css({'top':'138px'});
		$("#mohr_scene2_water_2").css({'top':'91px','height':'0','left':'3px','width':'73px'});
		$("#mohr_scene2_water_mask_2").css({'top':'60px','border-width': '0px 75px 0 0'});
		$("#mohr_scene2_saltMix").css({'opacity':'1'});
		$("#mohr_scene2_beaker_water_fall_3").css({'top':'209px'});
		$("#mohr_scene2_beaker_water_fall_2").css({'height':'0px','top':'136px'});
		$("#concSolu").css({'height':'8px','top':'4px'});
		$("#mohr_scene3_gRod .posAbso").attr('src',simPath+"images/glassrod.png");
		$("#mohr_scene3_soluFall").css({'top':'154px'});
		$("#mohr_scene3_solSmall").css({'height':'0px','top':'47px','opacity':'1'});
		$("#mohr_wGlass_in_pDish").css({'display':'none'});
		$("#mohr_scene3_wGlass").css({'left':'141px','top':'283px','display':'inline'});
		$("#mohr_scene3_pDish").css({'left':'264px','top':'225px'});
		$("#mohr_scene3_crystals, #mohr_scene3_crystals").css({'opacity':'0'});
		$("#mohr_scene4_water").css({'height':'0px','top':'286px'});
		$("#mohr_scene4_solSmall").css({'height':'27px','top':'20px','opacity':'.8'});
		$("#mohr_scene4_crystals_temp").css({'height':'36px','width':'0px'});
		$("#mohr_scene4_crystals_fPaper").css({'height':'0','left':'8px','width':'54px'});
		$("#mohr_scene4_fPaper_2").css({'left':'352px','top':'265px'});
		$("#mohr_scene4_crystals_wGlass").css({'height':'0'});
		$("#mohr_scene4_solSmall_temp").css({'width':'0px'});
		$("#mohr_scene4_concSoluFall").css({'top':'150px','height':'0px'});
		$("#mohr_scene4_pDish_dropArea_2").hide();
		$("#mohr_scene4_crystals").css({'left':'17px','height':'12px'});
		$("#mohr_ferrous_pour1, #mohr_ferrous_pour2").attr('src',simPath+'images/powder_pours/ferrous_pour1.png');
		$("#mohr_scene3_cDishT_temp").show();
		$("#nextbtnWrap,#mohr_scene2_nextbtnWrap,#mohr_scene3_nextbtnWrap").hide();
		$("#concSolu_1").css({'opacity':'0'});
		$("#mohr_scene3_knoboff").show();
		$("#mohr_scene3_flame").hide();
		clearTimeout(flameClrIntvl);
		$("#popup, #popupTxt").hide();
		$("#mohr_scene4_soluFall").css({'height':'0px','top':'156px'});
		$("#mohr_scene4_zoom_mohrs").hide();
		$("#mohr_scene4_pDish_dropArea").show();
	}
	resetSim();
}