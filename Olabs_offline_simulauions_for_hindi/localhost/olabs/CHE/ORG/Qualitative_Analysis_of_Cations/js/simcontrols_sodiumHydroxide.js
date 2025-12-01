//----------------SMELL  TEST--------------------
var NaOH_Frame=0;
var dryHeatClrIntvl,NaOHclrReset;
function NaOH_Flaming(){//flaming of burner
	NaOH_Frame++;
	$("#NaOH_flame").attr('src',simPath+"images/flame"+NaOH_Frame+".png");
	dryHeatClrIntvl=setTimeout("NaOH_Flaming()",100);
	if(NaOH_Frame==5){
		NaOH_Frame=1;
	}
}
function groupZero_FlameOn(){
	$("#NaOH_burnerOff").hide();
	$("#NaOH_flame").show();
	NaOH_Flaming();
	setTimeout(function(){
		clearInterval(dryHeatClrIntvl);
		$("#NaOH_burnerOff").show();
		$("#NaOH_flame").hide();
		$("#NaOH_burnerOff").removeAttr("onclick");
	},7000);
	if(sampleSalt[result]==sampleSalt[1]){
		$("#NaOH_toolTipTxt").html(NaOH_txt[0]);
		inferenceMsg=NaOH_txt[2];
	}else{
		$("#NaOH_toolTipTxt").html(NaOH_txt[1]);
		inferenceMsg=NaOH_txt[3];
	}
	NaOHclrReset=setTimeout(function(){
		$("#NaOH_toolTip").show();
		$("#NaOH_toolTipTxt").show();
		$("#NaOH_glassRodWrap").draggable('enable');
	},4000);
}
function sodiumHydroxideTest(){
	var dropperDroped=false,glassRodDroped=false,dipped=false,flameOut=false;
	$('#sodiumHydroxideWrap').show();
	$('#expHeading').html(gZeroExpHeadings[0]);
	$('#NaOH_salt_lbl').html(NaOH_label[0]);
	$('#NaOH_bottle_lbl').html(NaOH_label[1]);
	$('#NaOH_hcl_lbl').html(NaOH_label[2]);
	$('#NaOH_glassRod_lbl').html(NaOH_label[3]);
	$("#NaOH_testTubeSolu").css({"background-color":sampleSaltColor[result]});
//----------Reset function--------------------
	function dryHeatingTestReset(){
		$("#Inference").hide();
		$("#NaOH_toolTip").hide();
		$("#NaOH_toolTipTxt").hide();
		$("#NaOH_testTubeSolu").hide();
		$("#NaOH_cork").css({
			left:"517px",
			top:"141px"
		});
		$("#NaOH_glassRodWrap").css({
			left:"455px",
			top:"261px"
		});
		droped=false;
		$("#NaOH_saltWrap").css({
			left:"446px",
			top:"31px",
		});
		$("#NaOH_saltWrap").css({zIndex:"2"});
		flameOut=false;
		clearInterval(dryHeatClrIntvl);
		$("#NaOH_burnerOff").show();
		$("#NaOH_flame").hide();
		clearTimeout(NaOHclrReset);
	}	
	$("#NaOH_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#NaOH_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	
//----------Salt drag and drop--------------------
	$("#NaOH_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#NaOH_saltWrap").animate({left:'446px',top:'31px'});
			}
			
		}
	});
	droped=false;
	$("#NaOH_saltDrop").droppable({accept:"#NaOH_saltWrap",
		drop:function(){
			droped=true;
			$("#NaOH_saltWrap").css({zIndex:"1"});
			$("#NaOH_saltWrap").animate({
				left:"158px",
				top:"219px"
			});
			$("#NaOH_dropper").draggable('enable');
			
		}
	});
//----------Dropper drag and drop--------------------
	$("#NaOH_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#NaOH_dropper").animate({left:'418px',top:'103px'});
		}
	}
	});
	$("#NaOH_dropper").draggable('disable');
	$("#NaOH_dropperDrop").droppable({accept:"#NaOH_dropper",
		drop:function(){
			dropperDroped=true;
			$("#NaOH_dropper").animate({
				left:"181px",
				top:"11px"
			},100,function(){
				dropsFall('NaOH_drops','187px','103px','213px');
				setTimeout(function(){
					$("#NaOH_testTubeSolu").show();
					$("#NaOH_testTubeSolu").animate({top:'210px',height:'30px'});
				},500);
				setTimeout(function(){
					dropsFall('NaOH_drops','187px','103px','213px');
				},500);
				setTimeout(function(){
					$("#NaOH_dropper").animate({left:'418px',top:'103px'},function(){
						$("#NaOH_dropper").draggable('disable');
						$("#NaOH_burnerOff").attr("onclick","groupZero_FlameOn()");
					});
				},1000);
			
			});
		}
	});
//----------Glass rod drag and drop--------------------
	$("#NaOH_glassRodWrap").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!glassRodDroped){
			$("#NaOH_glassRodWrap").animate({left:'455px',top:'261px'},function(){
				$("#NaOH_cork").animate({
					left:"517px",
					top:"141px"
				});
			});
			$("#NaOH_glassRodWrap").css({
				"transform":"rotate(0deg)",
				"-ms-transform":"rotate(0deg)",
				"-webkit-transform":"rotate(0deg)"
			});
			dipped=false;
			$("#NaOH_whiteFumesArea").css({height:"0px"})
			if(flameOut){$("#Inference").show();}
		}else{
			glassRodDroped=false;
		}
	},
	start: function(){
		$("#NaOH_toolTip").hide();
		$("#NaOH_toolTipTxt").hide();
		$("#NaOH_cork").animate({
			left:"463px",
			top:"100px"
		});
	},
	drag:function(){
		
		if($("#NaOH_glassRodWrap").position().left<300 && dipped){
			$("#NaOH_glassRodWrap").css({
				"transform":"rotate(90deg)",
				"-ms-transform":"rotate(90deg)",
				"-webkit-transform":"rotate(90deg)"
			});
		}
		if($("#NaOH_glassRodWrap").position().left<185 && $("#NaOH_glassRodWrap").position().left>160 && $("#NaOH_glassRodWrap").position().top<108&& dipped){
			if(sampleSalt[result]==sampleSalt[1]){
				$("#NaOH_whiteFumesArea").css({height:$("#NaOH_glassRodWrap").position().top+10+"px"});
			}
			flameOut=true;
		}else{
			$("#NaOH_whiteFumesArea").css({height:"0px"})
		}
	}
	});
	$("#NaOH_glassRodWrap").draggable('disable');
	$("#NaOH_glassRodDrop").droppable({accept:"#NaOH_glassRodWrap",
		drop:function(){
			glassRodDroped=true;
			dipped=true;
			$("#NaOH_glassRodWrap").animate({
				left:"512px",
				top:"130px"
			},1000,function(){
				setTimeout(function(){
					$("#NaOH_glassRodWrap").animate({
						left:"512px",
						top:"110px"
					});
				},500);
			
			});
		}
	});
	dryHeatingTestReset();
}