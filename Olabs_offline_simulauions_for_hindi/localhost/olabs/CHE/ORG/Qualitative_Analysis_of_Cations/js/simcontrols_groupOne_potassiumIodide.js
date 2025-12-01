//----------------Group onr potassium iodide  TEST--------------------
var gOne_pIodide_Frame=0;
var gOne_pIodide_ClrIntvl;
function gOne_pIodide_Flaming(){//flaming of burner
	gOne_pIodide_Frame++;
	$("#gOne_pIodide_flame").attr('src',simPath+"images/flame"+gOne_pIodide_Frame+".png");
	gOne_pIodide_ClrIntvl=setTimeout("gOne_pIodide_Flaming()",100);
	if(gOne_pIodide_Frame==5){
		gOne_pIodide_Frame=1;
	}
}
var clrPiod,clrPiod1;
function gOnepIodideFlameOn1(){
	$("#gOne_pIodide_burnerOff").hide();
	$("#gOne_pIodide_flame").show();
	gOne_pIodide_Flaming();
	setTimeout(function(){
		$("#gOne_pIodide_testTubeSolu").animate({'opacity':'0.3'},5000);
		gOne_pIodide_boiling();
		gOne_pIodide_boiling1();
		gOne_pIodide_boiling2();
	},2000);
	clrPiod=setTimeout(function(){
		clearInterval(gOne_pIodide_ClrIntvl);
		$("#gOne_pIodide_burnerOff").show();
		$("#gOne_pIodide_flame").hide();
		$("#gOne_pIodide_burnerOff").off("click");
		clearInterval(gOne_pIodide_clr);
		clearInterval(gOne_pIodide_clr1);
		clearInterval(gOne_pIodide_clr2);
		$("#gOne_pIodide_dropper").draggable('enable');
	},7000);
	if(sampleSalt[result]==sampleSalt[2]){
		$("#gOne_pIodide_toolTipTxt").css({top:'160px'});
		$("#gOne_pIodide_toolTipTxt").html(coolTestTxt[9]);
	}else{
		$("#gOne_pIodide_toolTipTxt").html(coolTestTxt[4]);
	}
	clrPiod1=setTimeout(function(){
		$("#gOne_pIodide_toolTip").show();
		$("#gOne_pIodide_toolTipTxt").show();
	},4000); 
}
var gOne_pIodide_clr,gOne_pIodide_clr1,gOne_pIodide_clr2;
function gOne_pIodide_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pIodide_buble3").show();
	$("#gOne_pIodide_buble3").css({top:'22px',left:v1+"px"	});
	$("#gOne_pIodide_buble3").animate({top:'0px'},function(){
												$("#gOne_pIodide_buble3").hide();
											});
	gOne_pIodide_clr=setTimeout(function(){gOne_pIodide_boiling()},700);
}
function gOne_pIodide_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pIodide_buble1").show();
	$("#gOne_pIodide_buble1").css({top:'22px',left:v1+"px"	});
	$("#gOne_pIodide_buble1").animate({top:'0px'},function(){
												$("#gOne_pIodide_buble1").hide();
											});
	gOne_pIodide_clr1=setTimeout(function(){gOne_pIodide_boiling1()},1000);
}
function gOne_pIodide_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pIodide_buble2").show();
	$("#gOne_pIodide_buble2").css({top:'22px',left:v1+"px"	});
	$("#gOne_pIodide_buble2").animate({top:'0px'},function(){
												$("#gOne_pIodide_buble2").hide();
											});
	gOne_pIodide_clr2=setTimeout(function(){gOne_pIodide_boiling2()},1300);
}
function gOnePotassiumIodideTest(){
	var dropperDroped=false,testTubeDroped=false,waterDroped=false;
	$('#gOnePotassiumIodideWrap').show();
	$('#expHeading').html(gOnePIodideTxt[0]);
	$('#gOne_pIodide_lbl').html(gOnePIodideTxt[1]);
	$('#gOne_pIodide_lbl_1').html(gOnePIodideTxt[2]);
	$("#gOne_pIodide_toolTipTxt").html(coolTestTxt[2]);
	$("#gOne_pIodide_beakerTxt").html(coolTestTxt[6]);
	$('#gOne_pIodide_hcl_lbl').html(coolTestTxt[1]);
	
//----------Reset function--------------------
	function TestReset(){
		clearInterval(gOne_pIodide_clr);
		clearInterval(gOne_pIodide_clr1);
		clearInterval(gOne_pIodide_clr2);
		$("#gOne_pIodide_burnerOff").off("click");
		$("#gOne_pIodide_burnerOff").show();
		$("#gOne_pIodide_flame").hide();
		clearTimeout(clrPiod);
		clearTimeout(clrPiod1);
		$("#Inference").hide();
		$("#gOne_pChromate_testTubeSolu").css({
			'background-color':"#FFFFFF",
		});
		$("#gOne_pIodide_toolTip").show();
		$("#gOne_pIodide_toolTipTxt").show();
		$("#gOne_pIodide_waterDropper").draggable('enable');
		$("#gOne_pIodide_toolTipTxt").css({top:"150px"});
	}
//----------Water Dropper drag and drop--------------------
	$("#gOne_pIodide_waterDropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!waterDroped){
			$("#gOne_pIodide_waterDropper").animate({left:'425px',top:'103px'});
		}
	},
	start:function(){
		$("#gOne_pIodide_toolTip").hide();
		$("#gOne_pIodide_toolTipTxt").hide();
		$("#gOne_pIodide_waterDropper").css({'z-index':'15'});
	},
	stop:function(){
		$("#gOne_pIodide_waterDropper").css({'z-index':'0'});
	}
	});
	$("#gOne_pIodide_waterDropper").draggable('disable');
	$("#gOne_pIodide_waterDropperDrop").droppable({accept:"#gOne_pIodide_waterDropper",
		drop:function(){
			waterDroped=true;
			$("#gOne_pIodide_waterDropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('gOne_pIodide_drops','127px','103px','213px');
				setTimeout(function(){
					$("#gOne_pIodide_testTubeSolu").animate({top:'86px',height:'30px'},1000);
					dropsFall('gOne_pIodide_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gOne_pIodide_waterDropper").animate({left:'425px',top:'103px'},function(){
					$("#gOne_pIodide_burnerOff").click(function(){gOnepIodideFlameOn1();});	
						
					});
				},1000);
				$("#gOne_pIodide_waterDropper").draggable('disable');
			});
		}
	});
//----------KI Dropper drag and drop--------------------
	$("#gOne_pIodide_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#gOne_pIodide_dropper").animate({left:'510px',top:'103px'});
		}
	},
	start:function(){
		$("#gOne_pIodide_toolTip").hide();
		$("#gOne_pIodide_toolTipTxt").hide();
		$("#gOne_pIodide_dropper").css({'z-index':'15'});
	},
	stop:function(){
		$("#gOne_pIodide_dropper").css({'z-index':'0'});
	}
	});
	$("#gOne_pIodide_dropper").draggable('disable');
	$("#gOne_pIodide_dropperDrop").droppable({accept:"#gOne_pIodide_dropper",
		drop:function(){
			dropperDroped=true;
			$("#gOne_pIodide_dropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('gOne_pIodide_drops','127px','103px','213px');
				setTimeout(function(){
					if(sampleSalt[result]==sampleSalt[2]){
						$("#gOne_pIodide_testTubeSolu").animate({'background-color':"#FFFF00"},1000);
						$("#gOne_pIodide_testTubeSolu").animate({'opacity':'1'});
					}
					dropsFall('gOne_pIodide_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gOne_pIodide_dropper").draggable('disable');
					$("#gOne_pIodide_toolTipTxt").css({top:"160px"});
					if(sampleSalt[result]==sampleSalt[2]){
						$("#gOne_pIodide_toolTipTxt").html(gOnePIodideTxt[3]);	
					}else{
						$("#gOne_pIodide_toolTipTxt").html(gOnePIodideTxt[4]);
					}
					$("#gOne_pIodide_dropper").animate({left:'510px',top:'103px'},function(){
						$("#gOne_pIodide_toolTip").show();
						$("#gOne_pIodide_toolTipTxt").show();
					});
					setTimeout(function(){
						$("#Inference").show();
					},2000);
				},1000);
			
			});
		}
	});
	TestReset();
}