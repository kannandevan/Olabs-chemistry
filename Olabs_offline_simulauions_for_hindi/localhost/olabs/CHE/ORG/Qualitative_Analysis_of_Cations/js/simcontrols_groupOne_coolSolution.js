//----------------Cooling of solution  TEST--------------------
var coolSolu_Frame=0;
var coolSolu_ClrIntvl;
var tTubedpd=false,testTubeDropedCool=false;;
function coolSolu_Flaming(){//flaming of burner
	coolSolu_Frame++;
	$("#coolSolu_flame").attr('src',simPath+"images/flame"+coolSolu_Frame+".png");
	coolSolu_ClrIntvl=setTimeout("coolSolu_Flaming()",100);
	if(coolSolu_Frame==5){
		coolSolu_Frame=1;
	}
}

function coolSoluFlameOn(){
	$("#coolSolu_burnerOff").hide();
	$("#coolSolu_flame").show();
	coolSolu_Flaming();
	clrToutNessler=setTimeout(function(){
		$("#coolSolu_testTubeSolu").animate({'opacity':'0.3'},5000);
		coolSolu_boiling();
		coolSolu_boiling1();
		coolSolu_boiling2();
	},2000);
	clrToutNessler=setTimeout(function(){
		clearInterval(coolSolu_ClrIntvl);
		$("#coolSolu_burnerOff").show();
		$("#coolSolu_flame").hide();
		$("#coolSolu_burnerOff").removeAttr("onclick");
		$("#coolSolu_testTubeWrap").draggable('enable');
		clearInterval(coolSolu_clr);
		clearInterval(coolSolu_clr1);
		clearInterval(coolSolu_clr2);
	},7000);
	if(sampleSalt[result]==sampleSalt[2]){
		$("#coolSolu_toolTipTxt").html(coolTestTxt[3]);
		inferenceMsg=coolTestTxt[5];
	}else{
		$("#coolSolu_toolTipTxt").html(coolTestTxt[4]);
		inferenceMsg=coolTestTxt[4];
	}
	clrToutNessler=setTimeout(function(){
		$("#coolSolu_toolTip").show();
		$("#coolSolu_toolTipTxt").show();
	},4000); 
}
var coolSolu_clr,coolSolu_clr1,coolSolu_clr2;
function coolSolu_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#coolSolu_buble3").show();
	$("#coolSolu_buble3").css({top:'22px',left:v1+"px"	});
	$("#coolSolu_buble3").animate({top:'0px'},function(){
												$("#coolSolu_buble3").hide();
											});
	coolSolu_clr=setTimeout(function(){coolSolu_boiling()},700);
}
function coolSolu_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#coolSolu_buble1").show();
	$("#coolSolu_buble1").css({top:'22px',left:v1+"px"	});
	$("#coolSolu_buble1").animate({top:'0px'},function(){
												$("#coolSolu_buble1").hide();
											});
	coolSolu_clr1=setTimeout(function(){coolSolu_boiling1()},1000);
}
function coolSolu_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#coolSolu_buble2").show();
	$("#coolSolu_buble2").css({top:'22px',left:v1+"px"	});
	$("#coolSolu_buble2").animate({top:'0px'},function(){
												$("#coolSolu_buble2").hide();
											});
	coolSolu_clr2=setTimeout(function(){coolSolu_boiling2()},1300);
}
function gOneCoolSoluTest(){
	var dropperDroped=false;
	$('#gOneCoolSoluWrap').show();
	$('#expHeading').html(coolTestTxt[0]);
	$('#coolSolu_hcl_lbl').html(coolTestTxt[1]);
	$("#coolSolu_toolTipTxt").html(coolTestTxt[2]);
	$("#coolSolu_beakerTxt").html(coolTestTxt[6]);
//----------Reset function--------------------
	function gOneCoolSoluTestReset(){
		clearTimeout(clrToutNessler);
		$("#coolSolu_burnerOff").show();
		$("#coolSolu_flame").hide();
		$("#coolSolu_burnerOff").removeAttr("onclick");
		clearInterval(coolSolu_clr);
		clearInterval(coolSolu_clr1);
		clearInterval(coolSolu_clr2);
		$("#Inference").hide();
		droped=false;
		$("#coolSolu_testTubeSolu").css({
			height:"20px",
			top:"96px",
		});
		$("#coolSolu_toolTip").show();
		$("#coolSolu_toolTipTxt").show();
		$("#coolSolu_dropper").draggable('enable');
		$("#coolSolu_testTubeWrap").css({
			'transform':'rotate(0deg)',
			'-ms-transform':'rotate(0deg)',
			'-webkit-transform':'rotate(0deg)',
			top:'124px',
			left:'113px'
		},1000);
		
		$('#coolSolu_cork_1_lbl').show();
		$('#coolSolu_deliveryTube_lbl').show();
		$("#coolSolu_cork_1").css({
			left:"418px",
			top:"266px",
		});
		$("#coolSolu_deliveryTube").css({
			left:"493px",
			top:"266px"
		});
		$("#coolSolu_deliveryTube").css({width:"60px",height:"100px"});
		$("#droperWrap").draggable('enable');
		$("#coolSolu_toolTip").css({left:'146px','top':'148px'});
		$("#coolSolu_toolTipTxt").css({left:'150px','top':'150px'});
		tTubedpd=false;
		testTubeDropedCool=false;
		$("#coolSolu_testTubeDrop").show();
		$("#coolSolu_testTubeWrap").draggable('disable');
	}	
	$("#coolSolu_salt").attr('src',simPath+"images/"+random_salt[result]);
	$("#coolSolu_saltDrag").attr('src',simPath+"images/"+random_salt[result]);
	$("#coolSolu_reagent").css({opacity:'0.5'});
//----------Dropper drag and drop--------------------
	$("#coolSolu_dropper").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!dropperDroped){
			$("#coolSolu_dropper").animate({left:'473px',top:'103px'});
		}
	},
	drag:function(){
		$("#coolSolu_toolTip").hide();
		$("#coolSolu_toolTipTxt").hide();
	}
	});
	$("#coolSolu_dropper").draggable('disable');
	$("#coolSolu_dropperDrop").droppable({accept:"#coolSolu_dropper",
		drop:function(){
			dropperDroped=true;
			$("#coolSolu_dropper").animate({
				left:"121px",
				top:"11px"
			},100,function(){
				dropsFall('coolSolu_drops','127px','103px','213px');
				setTimeout(function(){
					$("#coolSolu_testTubeSolu").animate({top:'86px',height:'30px'},1000);
					dropsFall('coolSolu_drops','127px','103px','213px');
				},500);
				setTimeout(function(){
					$("#coolSolu_dropper").animate({left:'473px',top:'103px'},function(){
						$("#coolSolu_dropper").draggable('disable');
						$("#coolSolu_burnerOff").attr("onclick","coolSoluFlameOn()");
					});
				},1000);
			
			});
		}
	});
//----------Test tube drag and drop--------------------
	
	$("#coolSolu_testTubeWrap").draggable({ containment:"#canvasBox",
	revert: function(){
		if(!testTubeDropedCool){
			$("#coolSolu_testTubeWrap").animate({left:'113px',top:'124px'});
		}
	},
	drag:function(){
		$("#coolSolu_toolTip").hide();
		$("#coolSolu_toolTipTxt").hide();
	}
	});
	$("#coolSolu_testTubeWrap").draggable('disable');
	$("#coolSolu_testTubeDrop").droppable({accept:"#coolSolu_testTubeWrap",
		drop:function(){
			
			$("#coolSolu_testTubeWrap").draggable('disable');
			$("#coolSolu_testTubeDrop").hide();
			testTubeDropedCool=true;
			$("#coolSolu_testTubeWrap").animate({
				left:"253px",
				top:"190px"
			},500,function(){
					$("#coolSolu_testTubeWrap").css({
						'transform':'rotate(-7deg)',
						'-ms-transform':'rotate(-7deg)',
						'-webkit-transform':'rotate(-7deg)'
					});
					$("#coolSolu_testTubeDrop_1").show();
				setTimeout(function(){
					
					$("#coolSolu_toolTip").css({left:'275px','top':'116px'});
					$("#coolSolu_toolTipTxt").css({left:'279px','top':'129px'});
					$("#coolSolu_toolTipTxt").html(coolTestTxt[8]);
					$("#coolSolu_toolTipTxt").show();
					$("#coolSolu_toolTip").show();
					
					$("#coolSolu_testTubeWrap").draggable('enable');
					$("#coolSolu_testTubeDrop_1").droppable({accept:"#coolSolu_testTubeWrap",
						drop:function(){
							$("#coolSolu_testTubeWrap").css({
								'transform':'rotate(0deg)',
								'-ms-transform':'rotate(0deg)',
								'-webkit-transform':'rotate(0deg)',
								'left':'200px',
								'top':'50px'
							});
							$("#coolSolu_testTubeSolu").animate({'opacity':'1'},5000);
							$("#coolSolu_toolTip").css({left:'235px','top':'85px'});
							$("#coolSolu_toolTipTxt").css({left:'235px','top':'96px'});
							$("#coolSolu_toolTipTxt").html(coolTestTxt[7]);
							//if(tTubedpd){
								$("#coolSolu_toolTipTxt").show();
								$("#coolSolu_toolTip").show();
								$("#Inference").show();	
								$("#coolSolu_testTubeWrap").draggable('disable');
								$("#coolSolu_testTubeDrop_1").hide();
							//}							
						}
					});
					
				},3000);
				
			});
		}
	});
	gOneCoolSoluTestReset();
}