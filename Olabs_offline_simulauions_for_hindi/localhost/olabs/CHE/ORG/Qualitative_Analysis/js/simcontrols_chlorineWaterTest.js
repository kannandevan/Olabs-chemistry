var cw_flag1=new Boolean(true);
var cw_degree=0;
function cw_shakeORstir()
{
	//cw_flagstir++
	if(cw_flag1==true){
		if(cw_degree<=12){
			cw_degree++;
		if(cw_degree==12){
			cw_flag1=false;
			}
		}
	}else{
		cw_degree--;
		if(cw_degree==-12){
			cw_flag1=true;
		}
	}
	/*if(degree1<=opacitynum){
		degree1=degree1+.01;
	}*/
	
}

function cw_rotate(){
	//rotate the testtube for getting the stirring effect
	document.getElementById('testTubeWrap').style.webkitTransformOrigin='0% 0%';
	document.getElementById('testTubeWrap').style.webkitTransform = 'rotate(' + cw_degree + 'deg)';
	document.getElementById('testTubeWrap').style.MozTransformOrigin='0% 0%';
	document.getElementById('testTubeWrap').style.MozTransform ='rotate('+ cw_degree +'deg)';
}
var timeAngle=0,clrTime;
function clock_rotate(){
	//rotate the testtube for getting the stirring effect
	timeAngle++;
	document.getElementById('needle').style.webkitTransformOrigin='50% 100%';
	document.getElementById('needle').style.webkitTransform = 'rotate(' + timeAngle + 'deg)';
	document.getElementById('needle').style.MozTransformOrigin='50% 100%';
	document.getElementById('needle').style.MozTransform ='rotate('+ timeAngle +'deg)';
	if(timeAngle<300){
		clrTime=setTimeout(function(){clock_rotate();},30);
	}else{
		clearInterval(clrTime);
		$("#clockBody").hide();
		$("#needle").hide();
		if(sampleSalt[result]==sampleSalt[7]&&confirmationIndex==7&&confirmationSubIndex==2){
			$("#br_cw_cWaterSolution").animate({'background-color':"#fe6a0a"},3000,function(){
				inferenceMsg=chlorineWaterLabel[9];
				$("#inference_Div").show();
			});
		}else if(sampleSalt[result]==sampleSalt[8]&&confirmationIndex==8&&confirmationSubIndex==2){
			$("#br_cw_cWaterSolution").animate({'background-color':"#9f00ff"},3000,function(){
				inferenceMsg=chlorineWaterLabel[10];
				$("#inference_Div").show();
			});
		}else{
			inferenceMsg=silverNitrateInfMsg[3]
			$("#inference_Div").show();
		}
		
	}
}
function chlorineWaterTest(){
	$("#chlorineWater").show();
	$('#chlorineWaterHeading').html(chlorineWaterLabel[0]);
	$('#br_cw_saltBottleLbl').html(chlorineWaterLabel[1]);
	$('#br_cw_saltBottle_Txt').html(chlorineWaterLabel[2]);
	$('#br_cw_hclBottleLbl').html(chlorineWaterLabel[3]);
	$('#br_cw_hclBottle_Txt').html(chlorineWaterLabel[4]);
	$('#br_cw_cSulphideBottleLbl').html(chlorineWaterLabel[5]);
	$('#br_cw_cSulphideBottle_Txt').html(chlorineWaterLabel[6]);
	$('#br_cw_cWaterBottleLbl').html(chlorineWaterLabel[7]);
	$('#br_cw_cWaterBottle_Txt').html(chlorineWaterLabel[8]);
	
	function init_bromideSilvernitrateTest(){
		clearInterval(clrTime);
		$("#br_cw_solution").css({top:'131px',height:'0px'});
		$("#br_cw_cWaterSolution").css({top:"101px",height:"0px"});
		$("#inference_Div").hide();
		$("#clockBody").hide();
		$("#needle").hide();
		$("#br_cw_cWaterSolution").css({'background-color':"#ffffff"});
		timeAngle=0;
		
	}
	init_bromideSilvernitrateTest();
	$("#br_cw_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#br_cw_dropperCtrlDrag").animate({left:'463px',top:'26px'},function(){
					$("#br_cw_dropperCtrl").addClass("ctrlDroper");
				});
				$("#br_cw_DroperSol").css({
					left:"11px",
					top:"23px",
					width:"4px",
					height:"22px"
				})
				
			}
			
		},
		drag:function(){
			$("#br_cw_dropperCtrl").removeClass("ctrlDroper");
			$("#br_cw_DroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px",
				height:"50px"
			})
			
		}
	});
	var droped=false;
	$("#br_cw_saltDrop").droppable({accept:"#br_cw_dropperCtrlDrag",
		drop:function(){
			droped=true;
			$("#br_cw_dropperCtrlDrag").css({
					left:"207px",
					top:"80px"
				});
			$("#br_cw_DroperSol").animate({
				top:"90px",
				height:"0px"
			});
			dropsFall('br_cw_drop','223px','173px','327px');
			$("#br_cw_testtubeSolution").show();
			setTimeout(function(){
				dropsFall('br_cw_drop','223px','173px','327px');
				$("#br_cw_solution").animate({top:"111px",height:"20px"});
				
			},300);
			setTimeout(function(){
				$("#br_cw_dropperCtrlDrag").animate({left:'462px',top:'26px'},function(){
					$("#br_cw_dropperCtrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#br_cw_dropperCtrlDrag").draggable('disable');
			$("#br_cw_hclCtrlDrag").draggable('enable');
		}
	});
	$("#br_cw_dropperCtrlDrag").draggable('enable');
	$("#br_cw_hclCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!hDroped){
				$("#br_cw_hclCtrlDrag").animate({left:'463px',top:'126px'},function(){
					$("#br_cw_hclCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#br_cw_hclCtrl").removeClass("ctrlDroper");
		}
	});
	$("#br_cw_hclCtrlDrag").draggable('disable');
	var hDroped=false;
	$("#br_cw_hclDrop").droppable({accept:"#br_cw_hclCtrlDrag",
		drop:function(){
			hDroped=true;
			$("#br_cw_hclCtrlDrag").css({
					left:"207px",
					top:"80px"
			});
			dropsFall('br_cw_drop','223px','173px','327px');
			setTimeout(function(){
				dropsFall('br_cw_drop','223px','173px','327px');
				$("#br_cw_solution").animate({top:"101px",height:"30px"});
				
			},300);
			setTimeout(function(){
				$("#br_cw_hclCtrlDrag").animate({left:'462px',top:'126px'},function(){
					$("#br_cw_hclCtrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#br_cw_hclCtrlDrag").draggable('disable');
			$("#br_cw_cSulphideCtrlDrag").draggable('enable');
		}
	});
	var agDroped=false;
	$("#br_cw_cSulphideCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!agDroped){
				$("#br_cw_cSulphideCtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#br_cw_cSulphideCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#br_cw_cSulphideCtrl").removeClass("ctrlDroper");
		}
	});
	$("#br_cw_cSulphideCtrlDrag").draggable('disable');
	$("#br_cw_cSulphideDrop").droppable({accept:"#br_cw_cSulphideCtrlDrag",
		drop:function(){
			agDroped=true;
			$("#br_cw_cSulphideCtrlDrag").css({
					left:"207px",
					top:"80px"
			});
			dropsFall('br_cw_drop','223px','173px','327px');
			setTimeout(function(){
				dropsFall('br_cw_drop','223px','173px','327px');
				$("#br_cw_cWaterSolution").animate({top:"85px",height:"16px"});
				
			},600);
			setTimeout(function(){
				$("#br_cw_cSulphideCtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#br_cw_cSulphideCtrl").addClass("ctrlDroper");
				});
				
			},1000);
			$("#br_cw_cSulphideCtrlDrag").draggable('disable');
			$("#br_cw_cWaterCtrlDrag").draggable('enable');
		}
	});
	var nhDroped=false;
	$("#br_cw_cWaterCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!nhDroped){
				$("#br_cw_cWaterCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#br_cw_cWaterCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#br_cw_cWaterCtrl").removeClass("ctrlDroper");
		}
	});
	$("#br_cw_cWaterCtrlDrag").draggable('disable');
	$("#br_cw_cWaterDrop").droppable({accept:"#br_cw_cWaterCtrlDrag",
		drop:function(){
			nhDroped=true;
			$("#br_cw_cWaterCtrlDrag").css({
					left:"207px",
					top:"80px"
			});
			dropsFall('br_cw_drop','223px','173px','327px');
			setTimeout(function(){
				dropsFall('br_cw_drop','223px','173px','327px');
				$("#br_cw_solution").animate({top:"96px",height:"35px"});
				$("#br_cw_cWaterSolution").animate({top:"80px"});
			},600);
			setTimeout(function(){
				$("#br_cw_cWaterCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#br_cw_cWaterCtrl").addClass("ctrlDroper");
					
				});				
			},1000);
			$("#br_cw_cWaterCtrlDrag").draggable('disable');
			$("#testTubeWrap").draggable('enable');
		}
	});
	var clrShake;
	$( "#testTubeWrap" ).draggable({containment:"#canvasBox",
		stop:function(){
			clrShake=setInterval(function(){
				cw_shakeORstir();
				cw_rotate();
			},10);
			setTimeout(function(){
				clearInterval(clrShake);
				cw_degree=0;cw_rotate();
				$("#testTubeWrap").animate({left:"212px",top:"185px"},function(){
					$("#clockBody").show();
					$("#needle").show();
					clock_rotate();
					
				});
			},3000);
			$("#testTubeWrap").draggable('disable');
		}				
	});
	$("#testTubeWrap").draggable('disable');
}