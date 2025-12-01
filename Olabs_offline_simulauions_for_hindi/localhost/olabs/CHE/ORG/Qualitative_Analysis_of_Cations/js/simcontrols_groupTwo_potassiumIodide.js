//----------------Group two potassium iodide  TEST--------------------
var gTwo_potassium_Frame=0;
var dryHeatClrIntvl,nxtClrIntvl;
var nextSceen=false;
function gTwo_potassium_Flaming(){//flaming of burner
	gTwo_potassium_Frame++;
	$("#gTwo_flame").attr('src',simPath+"images/flame"+gTwo_potassium_Frame+".png");
	dryHeatClrIntvl=setTimeout("gTwo_potassium_Flaming()",100);
	if(gTwo_potassium_Frame==5){
		gTwo_potassium_Frame=1;
	}
}
function gTwo_potassium_FlamingNxt(){//flaming of burner
	gTwo_potassium_Frame++;
	$("#gTwo_flameNxt").attr('src',simPath+"images/flame"+gTwo_potassium_Frame+".png");
	nxtClrIntvl=setTimeout("gTwo_potassium_FlamingNxt()",100);
	if(gTwo_potassium_Frame==5){
		gTwo_potassium_Frame=1;
	}
}
var clrGtwo,clrGtwo1;
function groupTwoFlameOn(){
	$("#gTwo_burnerOff").hide();
	$("#gTwo_flame").show();
	gTwo_potassium_Flaming();
	setTimeout(function(){
		$("#gTwo_pIodide_testTubeSolu").animate({opacity:'0.3'},4000);
		setTimeout(function(){
			$("#gTwo_pIodide_testTubeSolu").stop();
			$("#gTwo_pIodide_testTubeSolu").fadeOut();
		},3000);
		
	},3000);
	clrGtwo=setTimeout(function(){
		clearInterval(dryHeatClrIntvl);
		$("#gTwo_burnerOff").show();
		$("#gTwo_flame").hide();
		$("#gTwo_burnerOff").removeAttr("onclick");
	},7000);
	
		
	if(sampleSalt[result]==sampleSalt[15] || sampleSalt[result]==sampleSalt[3]){
		inferenceMsg=gTwoPIodideTxt[4];
	}else if(sampleSalt[result]==sampleSalt[4]){
		inferenceMsg=gTwoPIodideTxt[14];
	}else{
		inferenceMsg=gTwoPIodideTxt[15];
	}
	clrGtwo1=setTimeout(function(){
		$("#Inference").show();
		$("#gTwo_h2so4_dropper").draggable('enable');
	},8000);
}
function groupTwoFlameOnNext(){
	$("#gTwo_burnerOffNxt").hide();
	$("#gTwo_flameNxt").show();
	gTwo_potassium_FlamingNxt();
	setTimeout(function(){
		$("#gTwo_pIodideNxt_testTubeSolu").animate({opacity:'0.3','background-color':"#FFFFFF"},4000);
	},3000);
	setTimeout(function(){
		clearInterval(nxtClrIntvl);
		$("#gTwo_burnerOffNxt").show();
		$("#gTwo_flameNxt").hide();
		$("#gTwo_burnerOffNxt").removeAttr("onclick");
		$("#gTwo_pIodideNxt_tWrap").draggable('enable');
	},7000);
}
function nextScene(){
	$("#Inference").hide();
	nextSceen=true;
	$("#gTwoPotassiumIodideWrap").hide();
	if(groupTestIndex==3&&confirmationIndex==1&&confirmationSubIndex==0){
		$("#gTwoPotassiumIodideNextSceneWrap").show();
	}else if(groupTestIndex==3&&confirmationIndex==1&&confirmationSubIndex==1){
		pChromateNextReset();
		$("#gTwoPchromateNextSceneWrap").show();
	}else if(groupTestIndex==3&&confirmationIndex==2&&confirmationSubIndex==0){
		pFerroCynideNextReset();
		$("#gTwoCuPFerrocyanideNextWrap").show();
	}else if(groupTestIndex==3&&confirmationIndex==2&&confirmationSubIndex==1){
		pIodideNextReset();
		$("#gTwoCuPIodideNextWrap").show();
	}
}
//----------Reset function for Next Scene--------------------
function testResetNext(){
		$("#Inference").hide();
		$("#gTwo_C2H3O2NH4_dropper").draggable('enable');
		$("#gTwo_pIodideNxt_testTubeSolu").css({opacity:'1','background-color':'#FFFFFF'});
		if(sampleSalt[result]==sampleSalt[3]){
			$("#gTwo_pIodideNxt_testTubeSolu").css({opacity:'0.4'});
		}
		$("#gTwo_pIodideNxt_tWrap").css({left:'123px',top:'124px'});
		$("#gTwo_pIodideNxt_tWrap").css({
			"transform":"rotate(0deg)",
			'-ms-transform':"rotate(0deg)",
			'-webkit-transform':"rotate(0deg)",
			'z-index':'7'
		});
	}
function pChromateNextReset(){
		droped_1=false;droped_2=false;droped_3=false;
		$('#expHeading').html(gOneChroomateTxt[0]);	
		$("#Inference").hide();
		$('#gTwo_aAcetaeNxt_lbl').html(gTwoPIodideTxt[6]);	
		$('#gTwo_aAcetaeNxt_lbl_1').html(gTwoPIodideTxt[7]);
		$('#gTwo_pChromate_lbl').html(gTwoPChromateTxt[2]);	
		$('#gTwo_pChromate_lbl_1').html(gTwoPChromateTxt[0]);
		$('#gTwo_sHydro_lbl').html(gTwoPChromateTxt[3]);	
		$('#gTwo_sHydro_lbl_1').html(gTwoPChromateTxt[1]);
		$("#gTwo_pChromateNxt_testTubeSolu").css({opacity:'1','background-color':'#ffffff','top':'75px','height':'42px'});
		if(sampleSalt[result]==sampleSalt[3]){
			$("#gTwo_pChromateNxt_testTubeSolu").css({opacity:'0.4'});
		}
		$("#gTwo_aAcetaeNxt_dropper").draggable('enable');
		$("#gTwo_saltDropSolu").css({'border-top-width':'44px','border-left-width':'3px',top:'49px'});
	}
function pFerroCynideNextReset(){
		droped_1=false;droped_2=false;droped_3=false;
		$('#expHeading').html(gTwoPFerrocynideTxt[0]);	
		$("#Inference").hide();
		$('#gTwo_CuFCyanide_NH4OH_lbl').html(gTwoPFerrocynideTxt[1]);	
		$('#gTwo_CuFCyanide_NH4OH_lbl_1').html(gTwoPFerrocynideTxt[2]);
		$('#gTwo_CuFCyanide_acetic_lbl').html(gTwoPFerrocynideTxt[3]);	
		$('#gTwo_CuFCyanide_acetic_lbl_1').html(gTwoPFerrocynideTxt[4]);
		$('#gTwo_CuFCyanide_fCyanide_lbl').html(gTwoPFerrocynideTxt[5]);	
		$('#gTwo_CuFCyanide_fCyanide_lbl_1').html(gTwoPFerrocynideTxt[6]);
		$("#gTwo_Cu_pFerrocyanide_testTubeSolu").css({'top':'75px',height:'42px','background-color':'#ffffff',opacity:'0.4'});
		if(sampleSalt[result]==sampleSalt[15]){
			$("#gTwo_Cu_pFerrocyanide_testTubeSolu").css({opacity:'1'});
		}
		$("#gTwo_CuFCyanide_NH4OH").draggable('enable');
		$("#gTwo_CuFCyanideSolu").css({'border-top-width':'50px','border-left-width':'4px',top:'43px'});
	}
function pIodideNextReset(){
		droped_1=false;droped_2=false;droped_3=false;
		$('#expHeading').html(gOnePIodideTxt[0]);	
		$("#Inference").hide();
		$('#gTwo_CuIodide_NH4OH_lbl').html(gTwoPFerrocynideTxt[1]);	
		$('#gTwo_CuIodide_NH4OH_lbl_1').html(gTwoPFerrocynideTxt[2]);
		$('#gTwo_CuIodide_acetic_lbl').html(gTwoPFerrocynideTxt[3]);	
		$('#gTwo_CuIodide_acetic_lbl_1').html(gTwoPFerrocynideTxt[4]);
		$('#gTwo_CuIodide_fCyanide_lbl').html(gOnePIodideTxt[1]);	
		$('#gTwo_CuIodide_fCyanide_lbl_1').html(gOnePIodideTxt[2]);
		$("#gTwo_Cu_pIodide_testTubeSolu").css({'top':'75px',height:'42px','background-color':'#ffffff',opacity:'0.4'});
		if(sampleSalt[result]==sampleSalt[15]){
			$("#gTwo_Cu_pIodide_testTubeSolu").css({opacity:'1'});
		}
		$("#gTwo_Cu_pIodide_whitePptCover").css({opacity:'0'});
		$("#gTwo_Cu_pIodide_whitePpt").css({opacity:'0'});
		$("#gTwo_CuIodide_NH4OH").draggable('enable');
	}
function gTwoPotassiumIodideTest(){
	var dropperDroped=false,dropperDroped1=false,dropperDroped2=false,testTubeDroped=false;
	var C2H3O2NH4Droped=false,klDroped=false,tTubeDroped=false;
	var droped_1=false,droped_2=false,droped_3=false;
	$('#gTwoPotassiumIodideWrap').show();
	$('#expHeading').html(gOnePIodideTxt[0]);
	$('#gTwo_hno3_lbl').html(gTwoPIodideTxt[0]);
	$('#gTwo_h2so4_lbl').html(gTwoPIodideTxt[1]);
	$("#gTwo_c2h5oh_lbl").html(gTwoPIodideTxt[2]);
	$("#gTwo_pIodide_toolTipTxt").html(gTwoPIodideTxt[3]);
	$("#gTwo_pIodide_beakerTxt").html(coolTestTxt[6]);
	$("#gTwo_C2H3O2NH4_lbl").html(gTwoPIodideTxt[6]);
	$("#gTwo_C2H3O2NH4_lbl_1").html(gTwoPIodideTxt[7]);
	$("#gTwo_kl_lbl").html(gTwoPIodideTxt[8]);
	$("#gTwo_kl_lbl_1").html(gTwoPIodideTxt[9]);
	$("#gTwo_pIodideNxt_beaker_lbl").html(gTwoPIodideTxt[10]);
	$("#gTwo_nextbtnTxt").html(gOneTxt[3]);
	$("#gTwo_nextbtnTxt").attr("onclick","nextScene(),testResetNext()");
	$("#gTwo_nextbtn").attr("onclick","nextScene(),testResetNext()");
	
	
//----------Reset function--------------------
function TestReset(){
		clearTimeout(clrGtwo);
		clearTimeout(clrGtwo1);
		$("#gTwo_burnerOff").show();
		$("#gTwo_flame").hide();
		$("#gTwo_burnerOff").removeAttr("onclick");
		nextSceen=false;
		$("#gTwo_nextbtnTxt").hide();
		$("#gTwo_nextbtn").hide();
		$("#Inference").hide();
		droped=false;
		if(sampleSalt[result]==sampleSalt[15] || sampleSalt[result]==sampleSalt[3]){
		$("#gTwo_pIodide_testTubeSolu").css({'background-color':"#000000"});
		}else if(sampleSalt[result]==sampleSalt[4]){
			$("#gTwo_pIodide_testTubeSolu").css({'background-color':"#FFFF00"});
			$("#gTwo_pIodide_toolTipTxt").html(gTwoPIodideTxt[13]);
		}else{
			$("#gTwo_pIodide_testTubeSolu").css({'background-color':sampleSaltColor[result]});
		}
		
		$("#gTwo_pIodide_testTubeSolu").css({opacity:'1'});
		$("#gTwo_pIodide_testTubeSolu").css({'top':'219px',height:'20px'});
		$("#gTwo_pIodide_testTubeSolu_1").css({'top':'219px',height:'20px',opacity:'0.5'});
		$("#gTwo_pIodide_testTubeSolu").show();
		$("#gTwo_pChromate_testTubeSolu").css({
			'background-color':"#FFFFFF",
		});
		$("#gTwo_pIodide_toolTip").show();
		$("#gTwo_pIodide_toolTipTxt").show();
		$("#gTwo_hno3_dropper").draggable('enable');
		$("#gTwo_pIodide_toolTipTxt").css({top:"155px"});
	}

//----------Dropper drag and drop--------------------
	$("#gTwo_hno3_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#gTwo_hno3_dropper").animate({left:'415px',top:'24px'});
		}
	},
	start:function(){
		$("#gTwo_hno3_dropper").css({'z-index':'10'});
		$("#gTwo_pIodide_toolTip").hide();
		$("#gTwo_pIodide_toolTipTxt").hide();
		
	},
	stop:function(){
		$("#gTwo_hno3_dropper").css({'z-index':'0'});
	}
	});
	$("#gTwo_hno3_dropper").draggable('disable');
	$("#gTwo_pIodide_dropperDrop").droppable({accept:"#gTwo_hno3_dropper",
		drop:function(){
			dropperDroped=true;
			$("#gTwo_hno3_dropper").animate({
				left:"180px",
				top:"11px"
			},100,function(){
				dropsFall('gTwo_pIodide_drops','186px','103px','213px');
				setTimeout(function(){
					$("#gTwo_pIodide_testTubeSolu").animate({top:'212px',height:'27px'});
					$("#gTwo_pIodide_testTubeSolu_1").animate({top:'212px',height:'27px'});
					dropsFall('gTwo_pIodide_drops','186px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gTwo_hno3_dropper").draggable('disable');
					$("#gTwo_hno3_dropper").animate({left:'415px',top:'24px'},function(){
						$("#gTwo_burnerOff").attr("onclick","groupTwoFlameOn()");
					});
				},1000);
			
			});
		}
	});
//----------dil. H2SO4 drag and drop--------------------
	$("#gTwo_h2so4_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped1){
			$("#gTwo_h2so4_dropper").animate({left:'515px',top:'24px'});
		}
	},
	start:function(){
		$("#gTwo_pIodide_toolTip").hide();
		$("#gTwo_pIodide_toolTipTxt").hide();
		$("#gTwo_h2so4_dropper").css({'z-index':'12'});
		$("#Inference").hide();
	},
	stop:function(){
		$("#gTwo_h2so4_dropper").css({'z-index':'0'});
	}
	});
	$("#gTwo_h2so4_dropper").draggable('disable');
	$("#gTwo_pIodide_h2so4Drop").droppable({accept:"#gTwo_h2so4_dropper",
		drop:function(){
			dropperDroped1=true;
			$("#gTwo_h2so4_dropper").animate({
				left:"180px",
				top:"11px"
			},100,function(){
				dropsFall('gTwo_pIodide_drops','186px','103px','213px');
				setTimeout(function(){
					$("#gTwo_pIodide_testTubeSolu_1").animate({top:'202px',height:'37px'});
					dropsFall('gTwo_pIodide_drops','186px','103px','213px');
					
				},500);
				setTimeout(function(){
					$("#gTwo_h2so4_dropper").draggable('disable');
					$("#gTwo_h2so4_dropper").animate({left:'515px',top:'24px'});
					$("#gTwo_c2h5oh_dropper").draggable('enable');
				},1000);
			
			});
		}
	});
//----------C2H5OH drag and drop--------------------
	$("#gTwo_c2h5oh_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped2){
			$("#gTwo_c2h5oh_dropper").animate({left:'465px',top:'177px'});
		}
	},
	drag:function(){
		$("#gTwo_pIodide_toolTip").hide();
		$("#gTwo_pIodide_toolTipTxt").hide();
	},
	start:function(){
		$("#gTwo_c2h5oh_dropper").css({'z-index':'12'});
	},
	stop:function(){
		$("#gTwo_c2h5oh_dropper").css({'z-index':'0'});
	}
	});
	$("#gTwo_c2h5oh_dropper").draggable('disable');
	$("#gTwo_pIodide_c2h5ohDrop").droppable({accept:"#gTwo_c2h5oh_dropper",
		drop:function(){
			dropperDroped2=true;
			$("#gTwo_c2h5oh_dropper").animate({
				left:"180px",
				top:"11px"
			},100,function(){
				dropsFall('gTwo_pIodide_drops','186px','103px','213px');
				setTimeout(function(){
					$("#gTwo_pIodide_testTubeSolu_1").animate({top:'197px',height:'42px'});
					if(sampleSalt[result]==sampleSalt[15]){
						$("#gTwo_pIodide_testTubeSolu_1").animate({opacity:'1'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_c2h5oh_dropper").draggable('disable');
					$("#gTwo_c2h5oh_dropper").animate({left:'465px',top:'177px'});
				},1000);
				setTimeout(function(){
					if(groupTestIndex==3&&confirmationIndex==1&& sampleSalt[result]==sampleSalt[15]){
						inferenceMsg=gTwoPIodideTxt[5];
					}else if(groupTestIndex==3&&confirmationIndex==2&&sampleSalt[result]==sampleSalt[15]){
						inferenceMsg=gTwoPIodideTxt[12];
					}
					if(sampleSalt[result]==sampleSalt[4]){
						inferenceMsg=gOnePIodideTxt[4];
					}
					$("#Inference").show();
				},2000);
				setTimeout(function(){
					$("#gTwo_nextbtnTxt").show();
					$("#gTwo_nextbtn").show();
				},3000);
			});
		}
	});
//----------Ammonium acetate drag and drop--------------------
	$("#gTwo_C2H3O2NH4_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!klDroped){
			$("#gTwo_C2H3O2NH4_dropper").animate({left:'425px',top:'124px'});
		}
	},
	start:function(){
		$("#gTwo_C2H3O2NH4_dropper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_C2H3O2NH4_dropper").css({'z-index':'0'})
	}
	});
	//$("#gTwo_C2H3O2NH4_dropper").draggable('disable');
	$("#gTwo_pIodideNxt_C2H3O2NH4Drop").droppable({accept:"#gTwo_C2H3O2NH4_dropper",
		drop:function(){
			klDroped=true;
			$("#gTwo_C2H3O2NH4_dropper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_pIodideNxt_drops','138px','103px','192px');
				setTimeout(function(){
					$("#gTwo_pIodideNxt_testTubeSolu").animate({opacity:'0.4'});
				},500);
				setTimeout(function(){
					$("#gTwo_C2H3O2NH4_dropper").draggable('disable');
					$("#gTwo_C2H3O2NH4_dropper").animate({left:'425px',top:'124px'});
					$("#gTwo_kl_dropper").draggable('enable');
				},1000);
			});
		}
	});
//----------Potassium iodide drag and drop--------------------
	$("#gTwo_kl_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!C2H3O2NH4Droped){
			$("#gTwo_kl_dropper").animate({left:'515px',top:'124px'});
		}
	},
	start:function(){
		$("#gTwo_kl_dropper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_kl_dropper").css({'z-index':'0'})
	}
	});
	$("#gTwo_kl_dropper").draggable('disable');
	$("#gTwo_pIodideNxt_klDrop").droppable({accept:"#gTwo_kl_dropper",
		drop:function(){
			C2H3O2NH4Droped=true;
			$("#gTwo_kl_dropper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_pIodideNxt_drops','138px','103px','192px');
				setTimeout(function(){
					if(sampleSalt[result]==sampleSalt[15]){
						$("#gTwo_pIodideNxt_testTubeSolu").animate({opacity:'1','background-color':'#FFFF00'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_kl_dropper").draggable('disable');
					$("#gTwo_kl_dropper").animate({left:'515px',top:'124px'});
					$("#gTwo_burnerOffNxt").attr("onclick","groupTwoFlameOnNext()");
				},1000);
			});
		}
	});
//----------Test tube drag and drop--------------------
	$("#gTwo_pIodideNxt_tWrap").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!tTubeDroped){
			$("#gTwo_pIodideNxt_tWrap").animate({left:'123px',top:'124px'});
		}
	},
	start:function(){
		$("#gTwo_pIodideNxt_tWrap").css({'z-index':'10'})
	},
	stop:function(){
		if(!tTubeDroped){
			$("#gTwo_pIodideNxt_tWrap").css({'z-index':'7'});
		}else{
			$("#gTwo_pIodideNxt_tWrap").css({'z-index':'0'});
		}
	}
	});
	$("#gTwo_pIodideNxt_tWrap").draggable('disable');
	$("#gTwo_pIodideNxt_testTubeDrop").droppable({accept:"#gTwo_pIodideNxt_tWrap",
		drop:function(){
			tTubeDroped=true;
			$("#gTwo_pIodideNxt_tWrap").animate({left:"251px",top:"193px"},2000);
			$("#gTwo_pIodideNxt_tWrap").css({
				"transform":"rotate(-12deg)",
				'-ms-transform':"rotate(-12deg)",
				'-webkit-transform':"rotate(-12deg)"
			});
			$("#gTwo_pIodideNxt_tWrap").draggable('disable');
			setTimeout(function(){
			if(sampleSalt[result]==sampleSalt[15]){
				$("#gTwo_pIodideNxt_testTubeSolu").animate({opacity:'1','background-color':'#FFFF00'},4000);
				inferenceMsg=gTwoPIodideTxt[11];
			}else{
				inferenceMsg=gOnePIodideTxt[4];
			}
				setTimeout(function(){
					$("#Inference").show();
				},7000);
			},2000);
		}
	});
//----------Ammonium acetate(in Potassium chromate) drag and drop--------------------
	$("#gTwo_aAcetaeNxt_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_1){
			$("#gTwo_aAcetaeNxt_dropper").animate({left:'465px',top:'24px'});
		}
	},
	start:function(){
		$("#gTwo_aAcetaeNxt_dropper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_aAcetaeNxt_dropper").css({'z-index':'0'})
	}
	});
	$("#gTwo_aAcetaeNxtDrop").droppable({accept:"#gTwo_aAcetaeNxt_dropper",
		drop:function(){
			droped_1=true;
			$("#gTwo_aAcetaeNxt_dropper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_pChromateNxt_drops','138px','103px','192px');
				setTimeout(function(){
					$("#gTwo_pChromateNxt_testTubeSolu").animate({opacity:'0.4'});
				},500);
				setTimeout(function(){
					$("#gTwo_aAcetaeNxt_dropper").draggable('disable');
					$("#gTwo_aAcetaeNxt_dropper").animate({left:'465px',top:'24px'});
					$("#gTwo_pChromateNxt_drops").attr('src',simPath+"images/drop_yellow.png");
					$("#gTwo_pChromate_wraper").draggable('enable');
				},1000);
			});
		}
	});
//----------Potassium chromate(in Potassium chromate) drag and drop--------------------
	$("#gTwo_pChromate_wraper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_2){
			$("#gTwo_pChromate_wraper").animate({left:'418px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_pChromate_wraper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_pChromate_wraper").css({'z-index':'0'})
	}
	});
	$("#gTwo_pChromate_wraper").draggable('disable');
	$("#gTwo_pChromateNxtDrop").droppable({accept:"#gTwo_pChromate_wraper",
		drop:function(){
			droped_2=true;
			$("#gTwo_pChromate_wraper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				$("#gTwo_saltDropSolu").animate({'border-top-width':'0px','border-left-width':'1px',top:'93px'},700);
				dropsFall('gTwo_pChromateNxt_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_pChromateNxt_drops','138px','103px','192px');
					if(sampleSalt[result]==sampleSalt[15]){
						$("#gTwo_pChromateNxt_testTubeSolu").animate({opacity:'0.9','background-color':'#ffff00'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_pChromate_wraper").draggable('disable');
					$("#gTwo_pChromate_wraper").animate({left:'418px',top:'164px'});
					$("#gTwo_pChromateNxt_drops").attr('src',simPath+"images/drop.png");
					$("#gTwo_sHydro_dropper").draggable('enable');
				},1000);
			});
		}
	});
//----------Sodium hydroxide(in Potassium chromate) drag and drop--------------------
	$("#gTwo_sHydro_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_3){
			$("#gTwo_sHydro_dropper").animate({left:'518px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_sHydro_dropper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_sHydro_dropper").css({'z-index':'0'})
	}
	});
	$("#gTwo_sHydro_dropper").draggable('disable');
	$("#gTwo_pChromateNxt_NaOHDrop").droppable({accept:"#gTwo_sHydro_dropper",
		drop:function(){
			droped_3=true;
			$("#gTwo_sHydro_dropper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_pChromateNxt_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_pChromateNxt_drops','138px','103px','192px');
					$("#gTwo_pChromateNxt_testTubeSolu").animate({opacity:'0.4','background-color':'#ffffff'});
				},500);
				setTimeout(function(){
					$("#gTwo_sHydro_dropper").draggable('disable');
					$("#gTwo_sHydro_dropper").animate({left:'518px',top:'164px'});
					if(sampleSalt[result]==sampleSalt[15]){
						inferenceMsg=gTwoPChromateTxt[4];
					}else{
						inferenceMsg=gOnePIodideTxt[4];
					}
					setTimeout(function(){
						$("#Inference").show();
					},2000);
				},1000);
			});
		}
	});
//----------Ammonium hydroxide(in Potassium ferrocyanide) drag and drop--------------------
	$("#gTwo_CuFCyanide_NH4OH").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_1){
			$("#gTwo_CuFCyanide_NH4OH").animate({left:'465px',top:'24px'});
		}
	},
	start:function(){
		$("#gTwo_CuFCyanide_NH4OH").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_CuFCyanide_NH4OH").css({'z-index':'0'})
	}
	});
	$("#gTwo_Cu_NH4OHDrop").droppable({accept:"#gTwo_CuFCyanide_NH4OH",
		drop:function(){
			droped_1=true;
			$("#gTwo_CuFCyanide_NH4OH").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
					if(sampleSalt[result]==sampleSalt[3]){
						$("#gTwo_Cu_pFerrocyanide_testTubeSolu").animate({opacity:'1','background-color':'#288cf9'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_CuFCyanide_NH4OH").draggable('disable');
					$("#gTwo_CuFCyanide_NH4OH").animate({left:'465px',top:'24px'});
					$("#gTwo_CuFCyanide_Acetic").draggable('enable');
					if(sampleSalt[result]==sampleSalt[3]){
						inferenceMsg=gTwoPFerrocynideTxt[7];
					}else{
						inferenceMsg=gOnePIodideTxt[4];
					}
					setTimeout(function(){
						$("#Inference").show();
					},1000);
				},1000);
			});
		}
	});
//----------Acetic acid(in Potassium ferrocyanide) drag and drop--------------------
	$("#gTwo_CuFCyanide_Acetic").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_2){
			$("#gTwo_CuFCyanide_Acetic").animate({left:'418px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_CuFCyanide_Acetic").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_CuFCyanide_Acetic").css({'z-index':'0'})
		$("#Inference").hide();
	}
	});
	$("#gTwo_CuFCyanide_Acetic").draggable('disable');
	$("#gTwo_Cu_c2h4o2Drop").droppable({accept:"#gTwo_CuFCyanide_Acetic",
		drop:function(){
			droped_2=true;
			$("#gTwo_CuFCyanide_Acetic").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				
				dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
				setTimeout(function(){
					$("#gTwo_Cu_pFerrocyanide_testTubeSolu").animate({'top':'70px',height:'47px'});
					dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
					$("#gTwo_pChromateNxt_testTubeSolu").animate({opacity:'0.9','background-color':'#ffff00'});
				},500);
				setTimeout(function(){
					$("#gTwo_CuFCyanide_Acetic").draggable('disable');
					$("#gTwo_CuFCyanide_Acetic").animate({left:'418px',top:'164px'});
					$("#gTwo_Cu_pFerrocyanide_drops").attr('src',simPath+"images/dropyellow.png");
					$("#gTwo_CuFCyanide_wraper").draggable('enable');
				},1000);
			});
		}
	});
//----------Potassium ferrocyanide(in Potassium ferrocyanide) drag and drop--------------------
	$("#gTwo_CuFCyanide_wraper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_3){
			$("#gTwo_CuFCyanide_wraper").animate({left:'518px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_CuFCyanide_wraper").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_CuFCyanide_wraper").css({'z-index':'0'})
	}
	});
	$("#gTwo_CuFCyanide_wraper").draggable('disable');
	$("#gTwo_Cu_pFerrocyanideDrop").droppable({accept:"#gTwo_CuFCyanide_wraper",
		drop:function(){
			droped_3=true;
			$("#gTwo_CuFCyanide_wraper").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				$("#gTwo_CuFCyanideSolu").animate({'border-top-width':'0px','border-left-width':'1px',top:'93px'},700);
				dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_Cu_pFerrocyanide_drops','138px','103px','192px');
					if(sampleSalt[result]==sampleSalt[3]){
						$("#gTwo_Cu_pFerrocyanide_testTubeSolu").animate({'background-color':'#5a3100'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_CuFCyanide_wraper").draggable('disable');
					$("#gTwo_CuFCyanide_wraper").animate({left:'518px',top:'164px'});
					$("#gTwo_Cu_pFerrocyanide_drops").attr('src',simPath+"images/drop.png");
					if(sampleSalt[result]==sampleSalt[3]){
						inferenceMsg=gTwoPFerrocynideTxt[8];
					}else{
						inferenceMsg=gOnePIodideTxt[4];
					}
					setTimeout(function(){
						$("#Inference").show();
					},2000);
				},1000);
			});
		}
	});
//----------Ammonium hydroxide(in Potassium Iodide) drag and drop--------------------
	$("#gTwo_CuIodide_NH4OH").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_1){
			$("#gTwo_CuIodide_NH4OH").animate({left:'465px',top:'24px'});
		}
	},
	start:function(){
		$("#gTwo_CuIodide_NH4OH").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_CuIodide_NH4OH").css({'z-index':'0'})
	}
	});
	$("#gTwo_Cu_pIodide_NH4OHDrop").droppable({accept:"#gTwo_CuIodide_NH4OH",
		drop:function(){
			droped_1=true;
			$("#gTwo_CuIodide_NH4OH").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
					if(sampleSalt[result]==sampleSalt[3]){
						$("#gTwo_Cu_pIodide_testTubeSolu").animate({opacity:'1','background-color':'#288cf9'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_CuIodide_NH4OH").draggable('disable');
					$("#gTwo_CuIodide_NH4OH").animate({left:'465px',top:'24px'});
					$("#gTwo_CuIodide_Acetic").draggable('enable');
					if(sampleSalt[result]==sampleSalt[3]){
						inferenceMsg=gTwoPFerrocynideTxt[7];
					}else{
						inferenceMsg=gOnePIodideTxt[4];
					}
					setTimeout(function(){
						$("#Inference").show();
					},1000);
				},1000);
			});
		}
	});
//----------Acetic acid(in Potassium iodide) drag and drop--------------------
	$("#gTwo_CuIodide_Acetic").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_2){
			$("#gTwo_CuIodide_Acetic").animate({left:'418px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_CuIodide_Acetic").css({'z-index':'10'});
	},
	stop:function(){
		$("#gTwo_CuIodide_Acetic").css({'z-index':'0'})
		$("#Inference").hide();
	}
	});
	$("#gTwo_CuIodide_Acetic").draggable('disable');
	$("#gTwo_Cu_pIodide_c2h4o2Drop").droppable({accept:"#gTwo_CuIodide_Acetic",
		drop:function(){
			droped_2=true;
			$("#gTwo_CuIodide_Acetic").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				
				dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
				setTimeout(function(){
					$("#gTwo_Cu_pIodide_testTubeSolu").animate({'top':'70px',height:'47px'});
					dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
				},500);
				setTimeout(function(){
					$("#gTwo_CuIodide_Acetic").draggable('disable');
					$("#gTwo_CuIodide_Acetic").animate({left:'418px',top:'164px'});
					$("#gTwo_CuIodide_pIodide").draggable('enable');
				},1000);
			});
		}
	});
//----------Potassium iodide(in Potassium Iodide) drag and drop--------------------
	$("#gTwo_CuIodide_pIodide").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!droped_3){
			$("#gTwo_CuIodide_pIodide").animate({left:'518px',top:'164px'});
		}
	},
	start:function(){
		$("#gTwo_CuIodide_pIodide").css({'z-index':'10'})
	},
	stop:function(){
		$("#gTwo_CuIodide_pIodide").css({'z-index':'0'})
	}
	});
	$("#gTwo_CuIodide_pIodide").draggable('disable');
	$("#gTwo_Cu_pIodide_pIodideDrop").droppable({accept:"#gTwo_CuIodide_pIodide",
		drop:function(){
			droped_3=true;
			$("#gTwo_CuIodide_pIodide").animate({
				left:"131px",
				top:"13px"
			},100,function(){
				dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
				setTimeout(function(){
					dropsFall('gTwo_Cu_pIodide_drops','138px','103px','192px');
					if(sampleSalt[result]==sampleSalt[3]){
						$("#gTwo_Cu_pIodide_testTubeSolu").animate({'background-color':'#6a1a19'});
					}
				},500);
				setTimeout(function(){
					$("#gTwo_CuIodide_pIodide").draggable('disable');
					$("#gTwo_CuIodide_pIodide").animate({left:'518px',top:'164px'});
					if(sampleSalt[result]==sampleSalt[3]){
						$("#gTwo_Cu_pIodide_whitePptCover").animate({opacity:'0.3'},4000);
						$("#gTwo_Cu_pIodide_whitePpt").animate({opacity:'1'},4000);
						inferenceMsg=gTwoPChromateTxt[5];
					}else{
						inferenceMsg=gOnePIodideTxt[4];
					}
					setTimeout(function(){
						$("#Inference").show();
					},5000);
				},1000);
			});
		}
	});
	TestReset();
}