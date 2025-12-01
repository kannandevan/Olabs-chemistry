//----------------SMELL  TEST--------------------
var dryHeat_Frame=0;
var dryHeatClrIntvl;
function dryHeat_FlamingOfBurner(){//flaming of burner
	dryHeat_Frame++;
	$("#dryHeat_flame").attr('src',simPath+"images/flame"+dryHeat_Frame+".png");
	dryHeatClrIntvl=setTimeout("dryHeat_FlamingOfBurner()",100);
	if(dryHeat_Frame==5){
		dryHeat_Frame=1;
	}
}
function dryHeat_Flaming(){//flaming of burner
	dryHeat_FlamingOfBurner();
	if(sampleSalt[result]==sampleSalt[1]){
		clrTime=setTimeout(function(){
			$("#dryHeat_toolTipTxt").html(dryHeat_infMsg[0]);
			$("#dryHeat_toolTip").show();
			$("#dryHeat_toolTipTxt").show();
			inferenceMsg=infMsgPrefix+smell_infMsg[2]+infMsgSufix;
			clrTime=setTimeout(function(){
				$("#Inference").show();
				document.getElementById("Dropbox_group_test_ID").disabled=false;
			},2000);
		},7000);
	}else if(sampleSalt[result]==sampleSalt[10]){
		setTimeout(function(){
			$("#dryHeat_saltResult_1").animate({"opacity":"1"},3000);
		},2000);
	}else if(sampleSalt[result]==sampleSalt[2]||sampleSalt[result]==sampleSalt[15]){
		$("#dryHeat_saltResult_1").attr('src',simPath+"images/dryHeatingTest/brown.png");
		setTimeout(function(){
			$("#dryHeat_saltResult_1").animate({"opacity":"1"},3000);
		},2000);
	}else if(sampleSalt[result]==sampleSalt[7] || sampleSalt[result]==sampleSalt[3] || sampleSalt[result]==sampleSalt[9]){
		$("#dryHeat_saltResult_1").attr('src',simPath+"images/dryHeatingTest/brown.png");
		setTimeout(function(){
			$("#dryHeat_saltResult_1").animate({"opacity":"1"},3000,function(){
				$("#dryHeat_saltResult_2").attr('src',simPath+"images/dryHeatingTest/black.png");
				$("#dryHeat_saltResult_2").animate({"opacity":"1"},3000);
				inferenceMsg=infMsgPrefix+dryHeat_infMsg[3];
			clrTime=setTimeout(function(){
					$("#Inference").show();
					document.getElementById("Dropbox_group_test_ID").disabled=false;
				},4000);
			});
		},2000);
	}else if(sampleSalt[result]==sampleSalt[11] || sampleSalt[result]==sampleSalt[13] || sampleSalt[result]==sampleSalt[12] || sampleSalt[result]==sampleSalt[14] || sampleSalt[result]==sampleSalt[6]){
		$("#dryHeat_saltResult_1").attr('src',simPath+"images/dryHeatingTest/white.png");
		setTimeout(function(){
			$("#dryHeat_saltResult_1").animate({"opacity":"1"},3000,function(){
				inferenceMsg=infMsgPrefix+dryHeat_infMsg[4];
				clrTime=setTimeout(function(){
					$("#Inference").show();
					document.getElementById("Dropbox_group_test_ID").disabled=false;
				},4000);
			});
		},2000);
	}else{
		clrTime=setTimeout(function(){
			$("#dryHeat_toolTipTxt").html(dryHeat_label[1]);
			$("#dryHeat_toolTip").show();
			$("#dryHeat_toolTipTxt").show();
			inferenceMsg=dryHeat_label[2];
			clrTime=setTimeout(function(){
				$("#Inference").show();				
			},2000);
		},5000);
	}
	
}
var clrTime;
function dryHeatFlameOn(){
	$("#dryHeat_burnerOff").hide();
	$("#dryHeat_flame").show();
	dryHeat_Flaming();
	setTimeout(function(){
		clearInterval(dryHeatClrIntvl);
		$("#dryHeat_burnerOff").show();
		$("#dryHeat_flame").hide();
		$("#dryHeat_burnerOff").removeAttr("onclick");	
		if(sampleSalt[result]==sampleSalt[10]){
			setTimeout(function(){
				$("#dryHeat_saltResult_2").animate({"opacity":"1"},3000);
			},2000);
			inferenceMsg=infMsgPrefix+dryHeat_infMsg[1]+infMsgSufix;
			clrTime=setTimeout(function(){
				$("#Inference").show();
				document.getElementById("Dropbox_group_test_ID").disabled=false;
			},4000);
		}else if(sampleSalt[result]==sampleSalt[2]||sampleSalt[result]==sampleSalt[15]){
			$("#dryHeat_saltResult_2").attr('src',simPath+"images/dryHeatingTest/yellow.png");
			setTimeout(function(){
				$("#dryHeat_saltResult_2").animate({"opacity":"1"},3000);
			},2000);
			inferenceMsg=infMsgPrefix+dryHeat_infMsg[2]+infMsgSufix;
			clrTime=setTimeout(function(){
				$("#Inference").show();
				document.getElementById("Dropbox_group_test_ID").disabled=false;
			},4000);
		}
	},7000);
}
function dryHeatingTest(){
	$('#dryHeatingTestWrap').show();
	$('#expHeading').html(Preliminary_Array[2]);
	$('#dryHeat_salt_lbl').html(dryHeat_label[0]);
//----------Reset function--------------------
	function dryHeatingTestReset(){
		clearInterval(dryHeatClrIntvl);
		$("#dryHeat_burnerOff").show();
		$("#dryHeat_flame").hide();
		$("#dryHeat_burnerOff").removeAttr("onclick");
		clearTimeout(clrTime);
		$("#Inference").hide();
		$("#dryHeat_toolTip").hide();
		$("#dryHeat_toolTipTxt").hide();
		droped=false;
		$("#dryHeat_saltWrap").css({
			left:"446px",
			top:"131px",
		});
		$("#dryHeat_saltWrap").css({zIndex:"2"});
		$("#dryHeat_saltResult_1").css({"opacity":"0"});
		$("#dryHeat_saltResult_2").css({"opacity":"0"});
	}	
	$("#dryHeat_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#dryHeat_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	
//----------Salt drag and drop--------------------
	$("#dryHeat_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#dryHeat_saltWrap").animate({left:'446px',top:'131px'});
			}
			
		}
	});
	droped=false;
	$("#dryHeat_saltDrop").droppable({accept:"#dryHeat_saltWrap",
		drop:function(){
			droped=true;
			$("#dryHeat_saltWrap").css({zIndex:"1"});
			$("#dryHeat_saltWrap").animate({
				left:"158px",
				top:"219px"
			});
			$("#dryHeat_burnerOff").attr("onclick","dryHeatFlameOn()");
		}
	});
	dryHeatingTestReset();
}