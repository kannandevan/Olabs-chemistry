//---------------Nessler's reagent test-------------------
var Nessler_Frame=0;
var NesslerClrIntvl;
function Nessler_Flaming(){//flaming of burner
	Nessler_Frame++;
	$("#Nessler_flame").attr('src',simPath+"images/flame"+Nessler_Frame+".png");
	NesslerClrIntvl=setTimeout("Nessler_Flaming()",100);
	if(Nessler_Frame==5){
		Nessler_Frame=1;
	}
}
var clrToutNessler;
function groupZeroFlameOn(){
	$("#Nessler_burnerOff").hide();
	$("#Nessler_flame").show();
	Nessler_Flaming();
	clrToutNessler=setTimeout(function(){
		clearInterval(NesslerClrIntvl);
		$("#Nessler_burnerOff").show();
		$("#Nessler_flame").hide();
		$("#Nessler_burnerOff").removeAttr("onclick");
	},7000);
	if(sampleSalt[result]==sampleSalt[1]){
		$("#Nessler_toolTipTxt").html(NaOH_txt[0]);
		inferenceMsg=NaOH_txt[4];
	}else{
		$("#Nessler_toolTipTxt").html(NaOH_txt[1]);
		inferenceMsg=NaOH_txt[3];
	}
	clrToutNessler=setTimeout(function(){
		$("#Nessler_toolTip").show();
		$("#Nessler_toolTipTxt").show();
		$("#Nessler_cork_1").draggable('enable');
	},4000);
}
function nesslersReagentTest(){
	var dropperDroped=false,glassRodDroped=false,dipped=false;
	clearTimeout(clrToutNessler);
	$("#Nessler_burnerOff").show();
	$("#Nessler_flame").hide();
	$("#Nessler_burnerOff").removeAttr("onclick");
	$('#nesslersReagentWrap').show();
	$('#expHeading').html(gZeroExpHeadings[1]);
	$('#Nessler_salt_lbl').html(NaOH_label[0]);
	$('#Nessler_bottle_lbl').html(NaOH_label[1]);
	$('#Nessler_hcl_lbl').html(NaOH_label[2]);
	$('#Nessler_glassRod_lbl').html(NaOH_label[3]);
	$('#Nessler_cork_1_lbl').html(nessler_label[0]);
	$('#Nessler_deliveryTube_lbl').html(nessler_label[1]);
	$("#Nessler_testTubeSolu").css({"background-color":sampleSaltColor[result]});
//----------Reset function--------------------
	function dryHeatingTestReset(){
		$("#Inference").hide();
		$("#Nessler_toolTip").hide();
		$("#Nessler_toolTipTxt").hide();
		$("#Nessler_testTubeSolu").hide();
		$("#Nessler_testTubeSolu").css({top:'240px',height:'00px'});
		droped=false;
		$("#Nessler_saltWrap").css({
			left:"446px",
			top:"31px",
		});
		$("#Nessler_saltWrap").css({zIndex:"2"});
		corkDroped=false;
		dTubeDroped=false;
		$('#Nessler_cork_1_lbl').show();
		$('#Nessler_deliveryTube_lbl').show();
		$("#Nessler_cork_1").css({
			left:"418px",
			top:"266px",
		});
		$("#Nessler_deliveryTube").css({
			left:"493px",
			top:"266px"
		});
		$("#Nessler_deliveryTube").css({width:"60px",height:"100px"});
		$("#Nessler_reagent").css({'background-color':'rgb(209, 183, 66)'})
	}	
	$("#Nessler_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#Nessler_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	$("#Nessler_reagent").css({opacity:'0.5'});
//----------Salt drag and drop--------------------
	$("#Nessler_saltWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#Nessler_saltWrap").animate({left:'446px',top:'31px'});
			}
			
		}
	});
	droped=false;
	$("#Nessler_saltDrop").droppable({accept:"#Nessler_saltWrap",
		drop:function(){
			droped=true;
			$("#Nessler_saltWrap").css({zIndex:"1"});
			$("#Nessler_saltWrap").animate({
				left:"97px",
				top:"219px"
			});
			$("#Nessler_dropper").draggable('enable');
			
		}
	});
//----------Dropper drag and drop--------------------
	$("#Nessler_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#Nessler_dropper").animate({left:'468px',top:'103px'});
		}
	}
	});
	$("#Nessler_dropper").draggable('disable');
	$("#Nessler_dropperDrop").droppable({accept:"#Nessler_dropper",
		drop:function(){
			dropperDroped=true;
			$("#Nessler_dropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('Nessler_drops','127px','103px','213px');
				setTimeout(function(){
					$("#Nessler_testTubeSolu").show();
					$("#Nessler_testTubeSolu").animate({top:'210px',height:'30px'});
				},500);
				setTimeout(function(){
					dropsFall('Nessler_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#Nessler_dropper").animate({left:'468px',top:'103px'},function(){
						$("#Nessler_dropper").draggable('disable');
					});
					$("#Nessler_burnerOff").attr("onclick","groupZeroFlameOn()");
				},1000);
			
			});
		}
	});

//----------Cork drag and drop--------------------
	var corkDroped=false;
	$("#Nessler_cork_1").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!corkDroped){
			$("#Nessler_cork_1").animate({left:'418px',top:'266px'});
		}
	},
	start:function(){
		$("#Nessler_toolTip").hide();
		$("#Nessler_toolTipTxt").hide();
	}
	});
	$("#Nessler_cork_1").draggable('disable');
	$("#Nessler_corkDrop").droppable({accept:"#Nessler_cork_1",
		drop:function(){
			corkDroped=true;
			$("#Nessler_cork_1").animate({
				left:"114px",
				top:"120px"
			},500,function(){
				$("#Nessler_deliveryTube").draggable('enable');
			});
			$('#Nessler_cork_1_lbl').hide();
		}
	});
//----------Delivery tube drag and drop--------------------
	var dTubeDroped=false;
	$("#Nessler_deliveryTube").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dTubeDroped){
			$("#Nessler_deliveryTube").animate({left:'493px',top:'266px'},function(){$("#Nessler_deliveryTube").css({width:"60px",height:"100px"});});
		}
	},
	start:function(){
		$("#Nessler_deliveryTube").css({width:"135px",height:"214px"});
	}
	});
	$("#Nessler_deliveryTube").draggable('disable');
	$("#Nessler_dTubeDrop").droppable({accept:"#Nessler_deliveryTube",
		drop:function(){
			dTubeDroped=true;
			$("#Nessler_deliveryTube").animate({
				left:"126px",
				top:"94px"
			},700,function(){
				if(sampleSalt[result]==sampleSalt[1]){
					setTimeout(function(){
						$("#Nessler_reagent").animate({opacity:'1','background-color':'#a32002'},1000,function(){
							inferenceMsg=nessler_txt[0];
							$("#Inference").show();
						});
					},1000);
					
				}else{
					setTimeout(function(){
						inferenceMsg=nessler_txt[1];
						$("#Inference").show();
					},1000);
				}
			});
			$('#Nessler_deliveryTube_lbl').hide();
			$("#Nessler_deliveryTube").draggable('disable');
		}
	});
	dryHeatingTestReset();
}