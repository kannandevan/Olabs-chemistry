//----------------Group one potassium chromate  TEST--------------------
var gOne_pChromate_Frame=0;
var gOne_pChromate_ClrIntvl;
function gOne_pChromate_Flaming(){//flaming of burner
	gOne_pChromate_Frame++;
	$("#gOne_pChromate_flame").attr('src',simPath+"images/flame"+gOne_pChromate_Frame+".png");
	gOne_pChromate_ClrIntvl=setTimeout("gOne_pChromate_Flaming()",100);
	if(gOne_pChromate_Frame==5){
		gOne_pChromate_Frame=1;
	}
}
var clrPchromate,clrPchromate1;
function gOnepIodideFlameOn(){
	$("#gOne_pChromate_burnerOff").hide();
	$("#gOne_pChromate_flame").show();
	gOne_pChromate_Flaming();
	setTimeout(function(){
		$("#gOne_pChromate_testTubeSolu").animate({'opacity':'0.3'},5000);
		gOne_pChromate_boiling();
		gOne_pChromate_boiling1();
		gOne_pChromate_boiling2();
	},2000);
	clrPchromate=setTimeout(function(){
		clearInterval(gOne_pChromate_ClrIntvl);
		$("#gOne_pChromate_burnerOff").show();
		$("#gOne_pChromate_flame").hide();
		$("#gOne_pChromate_burnerOff").removeAttr("onclick");
		clearInterval(gOne_pChromate_clr);
		clearInterval(gOne_pChromate_clr1);
		clearInterval(gOne_pChromate_clr2);
		$("#gOne_pChromate_dropper").draggable('enable');
	},7000);
	if(sampleSalt[result]==sampleSalt[2]){
		$("#gOne_pChromate_toolTipTxt").css({top:'160px'});
		$("#gOne_pChromate_toolTipTxt").html(coolTestTxt[9]);
	}else{
		$("#gOne_pChromate_toolTipTxt").html(coolTestTxt[4]);
	}
	clrPchromate1=setTimeout(function(){
		$("#gOne_pChromate_toolTip").show();
		$("#gOne_pChromate_toolTipTxt").show();
	},4000); 
}
var gOne_pChromate_clr,gOne_pChromate_clr1,gOne_pChromate_clr2;
function gOne_pChromate_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pChromate_buble3").show();
	$("#gOne_pChromate_buble3").css({top:'22px',left:v1+"px"	});
	$("#gOne_pChromate_buble3").animate({top:'0px'},function(){
												$("#gOne_pChromate_buble3").hide();
											});
	gOne_pChromate_clr=setTimeout(function(){gOne_pChromate_boiling()},700);
}
function gOne_pChromate_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pChromate_buble1").show();
	$("#gOne_pChromate_buble1").css({top:'22px',left:v1+"px"	});
	$("#gOne_pChromate_buble1").animate({top:'0px'},function(){
												$("#gOne_pChromate_buble1").hide();
											});
	gOne_pChromate_clr1=setTimeout(function(){gOne_pChromate_boiling1()},1000);
}
function gOne_pChromate_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#gOne_pChromate_buble2").show();
	$("#gOne_pChromate_buble2").css({top:'22px',left:v1+"px"	});
	$("#gOne_pChromate_buble2").animate({top:'0px'},function(){
												$("#gOne_pChromate_buble2").hide();
											});
	gOne_pChromate_clr2=setTimeout(function(){gOne_pChromate_boiling2()},1300);
}

function gOnePotassiumChromateTest(){
	var dropperDroped=false,testTubeDroped=false;waterDroped=false;
	$('#gOnePotassiumChromateWrap').show();
	$('#expHeading').html(gOneChroomateTxt[0]);
	$('#gOne_pChromate_lbl').html(gOneChroomateTxt[1]);
	$('#gOne_pChromate_lbl_1').html(gOneChroomateTxt[2]);
	$("#gOne_pChromate_toolTipTxt").html(coolTestTxt[2]);
	$("#gOne_pChromate_beakerTxt").html(coolTestTxt[6]);
	$('#gOne_pChromate_hcl_lbl').html(coolTestTxt[1]);
	
//----------Reset function--------------------
	function TestReset(){
		clearInterval(gOne_pChromate_clr);
		clearInterval(gOne_pChromate_clr1);
		clearInterval(gOne_pChromate_clr2);
		clearTimeout(clrPchromate);
		clearTimeout(clrPchromate1);
		$("#gOne_pChromate_burnerOff").show();
		$("#gOne_pChromate_flame").hide();
		$("#gOne_pChromate_burnerOff").removeAttr("onclick");
		$("#Inference").hide();
		droped=false;
		$("#gOne_pChromate_waterDropper").draggable('enable');
		$("#gOne_pChromate_drops").attr({"src": simPath+"/images/"+"drop.png"});
		$("#gOne_pChromate_testTubeSolu").css({top:'96px',height:'20px'});
		$("#gOne_pChromate_testTubeSolu").css({
			'background-color':"#FFFFFF",
		});
		$("#gOne_pChromate_toolTip").show();
		$("#gOne_pChromate_toolTipTxt").show();
		$("#gOne_pChromate_toolTipTxt").css({top:"150px"});
		$("#gOne_pChromateDropSolu").css({'border-top-width':'50px','border-left-width':'4px',top:'43px'});
	}
//----------Water Dropper drag and drop--------------------
	$("#gOne_pChromate_waterDropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!waterDroped){
			$("#gOne_pChromate_waterDropper").animate({left:'425px',top:'103px'});
		}
	},
	start:function(){
		$("#gOne_pChromate_toolTip").hide();
		$("#gOne_pChromate_toolTipTxt").hide();
		$("#gOne_pChromate_waterDropper").css({'z-index':'15'});
	},
	stop:function(){
		$("#gOne_pChromate_waterDropper").css({'z-index':'0'});
	}
	});
	$("#gOne_pChromate_waterDropper").draggable('disable');
	$("#gOne_pChromate_dropperDrop_1").droppable({accept:"#gOne_pChromate_waterDropper",
		drop:function(){
			waterDroped=true;
			$("#gOne_pChromate_waterDropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('gOne_pChromate_drops','127px','103px','213px');
				setTimeout(function(){
					$("#gOne_pChromate_testTubeSolu").animate({top:'86px',height:'30px'},1000);
					dropsFall('gOne_pChromate_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gOne_pChromate_waterDropper").animate({left:'425px',top:'103px'},function(){
						$("#gOne_pChromate_waterDropper").draggable('disable');
						$("#gOne_pChromate_burnerOff").attr("onclick","gOnepIodideFlameOn()");
						$("#gOne_pChromate_drops").attr({"src": simPath+"/images/"+"drop_yellow.png"});
						
					});
				},1000);
			
			});
		}
	});
//----------Potassium chromate Dropper drag and drop--------------------
	$("#gOne_pChromate_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#gOne_pChromate_dropper").animate({left:'507px',top:'103px'});
		}
	},
	drag:function(){
		$("#gOne_pChromate_toolTip").hide();
		$("#gOne_pChromate_toolTipTxt").hide();
	}
	});
	$("#gOne_pChromate_dropper").draggable('disable');
	$("#gOne_pChromate_dropperDrop").droppable({accept:"#gOne_pChromate_dropper",
		drop:function(){
			dropperDroped=true;
			$("#gOne_pChromate_dropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				$("#gOne_pChromateDropSolu").animate({'border-top-width':'0px','border-left-width':'2px',top:'93px'},1000);
				dropsFall('gOne_pChromate_drops','127px','103px','213px');
				setTimeout(function(){
					if(sampleSalt[result]==sampleSalt[2]){
						$("#gOne_pChromate_testTubeSolu").animate({'background-color':"#FFFF00",opacity:'1'},1000);
					}
					dropsFall('gOne_pChromate_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gOne_pChromate_dropper").draggable('disable');
					$("#gOne_pChromate_toolTipTxt").css({top:"160px"});
					if(sampleSalt[result]==sampleSalt[2]){
						$("#gOne_pChromate_toolTipTxt").html(gOnePIodideTxt[3]);	
						inferenceMsg=gOneChroomateTxt[3];
					}else{
						$("#gOne_pChromate_toolTipTxt").html(gOnePIodideTxt[4]);
						inferenceMsg=gOnePIodideTxt[6];
					}
					$("#gOne_pChromate_dropper").animate({left:'507px',top:'103px'},function(){
						$("#gOne_pChromate_toolTip").show();
						$("#gOne_pChromate_toolTipTxt").show();
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