//----------------Group one  TEST--------------------
function groupOneTest(){
	var dropperDroped=false,glassRodDroped=false,dipped=false,flameOut=false,dropperDroped1=false;
	$('#groupOneWrap').show();
	$('#expHeading').html(gOneTxt[0]);
	$('#gOne_salt_lbl').html(NaOH_label[0]);
	$('#gOne_bottle_lbl').html(gOneTxt[1]);
	$('#gOne_bottle_lbl_1').html(gOneTxt[2]);
	$('#gOne_nextbtnTxt').html(gOneTxt[3]);
	$('#gOne_hcl_lbl').html(NaOH_label[2]);
	$('#gOne_glassRod_lbl').html(NaOH_label[3]);
	$("#gOne_testTubeSolu").css({"background-color":sampleSaltColor[result]});
	$("#gOne_saltSolu").css({"background-color":sampleSaltColor[result]});
	$("#gOne_saltDropSolu").css({"border-color":sampleSaltColor[result]+" transparent transparent transparent"});
//----------Reset function--------------------
	function dryHeatingTestReset(){
		$("#Inference").hide();
		$("#gOne_toolTip").hide();
		$("#gOne_toolTipTxt").hide();
		$("#gOne_testTubeSolu").hide();
		$("#gOne_saltDropSolu").css({'border-top-width':'44px','border-left-width':'3px','border-right-width':'2px',top:'48px',left:'6px'});
		droped=false;
		$("#gOne_saltWrap").css({
			left:"446px",
			top:"31px",
		});
		$("#gOne_saltWrap").css({zIndex:"2"});
		flameOut=false;
		corkDroped=false;
		dTubeDroped=false;
		$('#gOne_cork_1_lbl').show();
		$('#gOne_deliveryTube_lbl').show();
		$("#gOne_cork_1").css({
			left:"418px",
			top:"266px",
		});
		$("#gOne_deliveryTube").css({
			left:"493px",
			top:"266px"
		});
		$("#gOne_deliveryTube").css({width:"60px",height:"100px"});
		$("#gOne_testTubeSolu").css({opacity:'0.5'});
		$("#droperWrap").draggable('enable');
	}	
	$("#gOne_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#gOne_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	$("#gOne_reagent").css({opacity:'0.5'});
//----------Dropper drag and drop--------------------
	$("#droperWrap").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#droperWrap").animate({left:'428px',top:'103px'});
		}
	}
	});
	$("#droperWrap").draggable('disable');
	$("#gOne_dropperDrop").droppable({accept:"#droperWrap",
		drop:function(){
			dropperDroped=true;
			$("#droperWrap").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				$("#gOne_saltDropSolu").animate({'border-top-width':'0px','border-left-width':'1px','border-right-width':'1px',top:'93px',left:'8px'},1000);
				dropsFall('gOne_drops','127px','103px','213px');
				setTimeout(function(){
					$("#gOne_testTubeSolu").show();
					$("#gOne_testTubeSolu").animate({top:'210px',height:'30px'});
				},500);
				setTimeout(function(){
					dropsFall('gOne_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#droperWrap").animate({left:'428px',top:'103px'},function(){
						$("#droperWrap").draggable('disable');
						$("#gOne_dropper_hcl").draggable('enable');
					});
				},1000);
			
			});
		}
	});
//----------Dropper HCL drag and drop-------------------
	$("#gOne_dropper_hcl").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped1){
			$("#gOne_dropper_hcl").animate({left:'508px',top:'103px'});
		}
	}
	});
	$("#gOne_dropper_hcl").draggable('disable');
	$("#gOne_hclDrop").droppable({accept:"#gOne_dropper_hcl",
		drop:function(){
			dropperDroped1=true;
			$("#gOne_dropper_hcl").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('gOne_drops','127px','103px','213px');
				setTimeout(function(){
				if(sampleSalt[result]==sampleSalt[2]){
					$("#gOne_testTubeSolu").animate({'background-color':'#FFFFFF',opacity:'1'});
				}
				},500);
				setTimeout(function(){
					$("#gOne_dropper_hcl").animate({left:'508px',top:'103px'},function(){
						$("#gOne_dropper_hcl").draggable('disable');
						if(sampleSalt[result]==sampleSalt[2]){
							inferenceMsg=gOneTxt[4];
							$("#gOne_toolTipTxt").html(gOneTxt[5]);
						}else{
							inferenceMsg=gOneTxt[7];
							$("#gOne_toolTipTxt").html(gOneTxt[8]);
						}
						$("#Inference").show();
						$("#gOne_toolTip").show();
						$("#gOne_toolTipTxt").show();
						setTimeout(function(){
						if(sampleSalt[result]==sampleSalt[2]){
							$("#gOne_nextbtn").show();
							$("#gOne_nextbtnTxt").show();
						}
							$("#gOne_nextbtn,#gOne_nextbtnTxt").click(function(){
								$("#Inference").hide();
								$("#gOne_toolTip").hide();
								$("#gOne_toolTipTxt").hide();
								$("#gOne_canvasHide").show();
								setTimeout(function(){
									$("#gOne_testTubeSolu").css({top:'229px',height:'10px'});
									$("#gOne_canvasHide").hide();
									$("#gOne_nextbtn").hide();
									$("#gOne_nextbtnTxt").hide();
									$("#gOne_toolTipTxt").html(gOneTxt[6]);
									$("#gOne_toolTip").show();
									$("#gOne_toolTipTxt").show();
									document.getElementById("Dropbox_conformation_test_ID").disabled=false;
								},1000);
							});
						},1000);
							
					});
				},1000);
			
			});
		}
	});
	dryHeatingTestReset();
}