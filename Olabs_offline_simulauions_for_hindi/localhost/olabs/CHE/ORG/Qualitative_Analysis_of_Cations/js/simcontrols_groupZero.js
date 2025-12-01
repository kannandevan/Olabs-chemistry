//----------------SMELL  TEST--------------------
var gZero_Frame=0;
var dryHeatClrIntvl;
function gZero_Flaming(){//flaming of burner
	gZero_Frame++;
	$("#gZero_flame").attr('src',simPath+"images/flame"+gZero_Frame+".png");
	dryHeatClrIntvl=setTimeout("gZero_Flaming()",100);
	if(gZero_Frame==5){
		gZero_Frame=1;
	}
}
var clrToutZero,clrToutZero1;
function groupZeroFlameOna(){
	$("#gZero_burnerOff").hide();
	$("#gZero_flame").show();
	gZero_Flaming();
	clrToutZero=setTimeout(function(){
		clearInterval(dryHeatClrIntvl);
		$("#gZero_burnerOff").show();
		$("#gZero_flame").hide();
		$("#gZero_burnerOff").removeAttr("onclick");
	},7000);
	if(sampleSalt[result]==sampleSalt[1]){
		$("#gZero_toolTipTxt").html(gZero_txt[0]);
		inferenceMsg=gZero_txt[2];
		document.getElementById("Dropbox_conformation_test_ID").disabled=false;
	}else{
		$("#gZero_toolTipTxt").html(gZero_txt[1]);
		inferenceMsg=gZero_txt[3];
	}
	clrToutZero1=setTimeout(function(){
		$("#gZero_toolTip").show();
		$("#gZero_toolTipTxt").show();
	},4000);
	clrToutZero=setTimeout(function(){
		$("#Inference").show();
	},8000);
}
function groupZeroTest(){
	var dropperDroped=false;
	$('#groupZeroWrap').show();
	$('#expHeading').html(Group_array[1]);
	$('#gZero_salt_lbl').html(gZero_label[0]);
	$('#gZero_bottle_lbl').html(gZero_label[1]);
	$("#gZero_testTubeSolu").css({"background-color":sampleSaltColor[result]});
//----------Reset function--------------------
	function dryHeatingTestReset(){
		$("#gZero_burnerOff").show();
		$("#gZero_flame").hide();
		$("#gZero_burnerOff").removeAttr("onclick");
		clearTimeout(clrToutZero);
		clearTimeout(clrToutZero1);
		$("#Inference").hide();
		$("#gZero_toolTip").hide();
		$("#gZero_toolTipTxt").hide();
		$("#gZero_testTubeSolu").hide();
		droped=false;
		$("#gZero_saltWrap").css({
			left:"446px",
			top:"51px",
		});
		$("#gZero_saltWrap").css({zIndex:"2"});
		$("#gZero_saltResult_1").css({"opacity":"0"});
		$("#gZero_saltResult_2").css({"opacity":"0"});
	}	
	$("#gZero_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#gZero_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	
//----------Salt drag and drop--------------------
	$("#gZero_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#gZero_saltWrap").animate({left:'446px',top:'51px'});
			}
			
		}
	});
	droped=false;
	$("#gZero_saltDrop").droppable({accept:"#gZero_saltWrap",
		drop:function(){
			droped=true;
			$("#gZero_saltWrap").css({zIndex:"1"});
			$("#gZero_saltWrap").animate({
				left:"158px",
				top:"219px"
			});
			$("#gZero_dropper").draggable('enable');
			
		}
	});
//----------Dropper drag and drop--------------------
	$("#gZero_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#gZero_dropper").animate({left:'468px',top:'153px'});
		}
	}
	});
	$("#gZero_dropper").draggable('disable');
	$("#gZero_dropperDrop").droppable({accept:"#gZero_dropper",
		drop:function(){
			dropperDroped=true;
			$("#gZero_dropper").animate({
				left:"181px",
				top:"11px"
			},100,function(){
				dropsFall('gZero_drops','187px','103px','213px');
				setTimeout(function(){
					$("#gZero_testTubeSolu").show();
					$("#gZero_testTubeSolu").animate({top:'210px',height:'30px'});
				},500);
				setTimeout(function(){
					dropsFall('gZero_drops','187px','103px','213px');
				},500);
				setTimeout(function(){
					$("#gZero_dropper").animate({left:'468px',top:'153px'},function(){
						$("#gZero_dropper").draggable('disable');
						$("#gZero_burnerOff").attr("onclick","groupZeroFlameOna()");
					});
				},1000);
			
			});
		}
	});
	dryHeatingTestReset();
}