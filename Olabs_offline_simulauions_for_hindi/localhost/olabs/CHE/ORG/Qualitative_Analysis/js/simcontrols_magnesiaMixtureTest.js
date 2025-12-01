var MgMix_timeAngle=0,MgMix_clrTime;
function MgMix_clock_rotate(){
	//rotate the testtube for getting the stirring effect
	MgMix_timeAngle++;
	document.getElementById('MgMix_needle').style.webkitTransformOrigin='50% 100%';
	document.getElementById('MgMix_needle').style.webkitTransform = 'rotate(' + MgMix_timeAngle + 'deg)';
	document.getElementById('MgMix_needle').style.MozTransformOrigin='50% 100%';
	document.getElementById('MgMix_needle').style.MozTransform ='rotate('+ MgMix_timeAngle +'deg)';
	if(MgMix_timeAngle<300){
		MgMix_clrTime=setTimeout(function(){MgMix_clock_rotate();},30);
	}else{
		clearInterval(MgMix_clrTime);
		$("#MgMix_clockBody").hide();
		$("#MgMix_needle").hide();
		if(sampleSalt[result]==sampleSalt[12] &&  confirmationIndex==12&&confirmationSubIndex==1){
			inferenceMsg=magnesiaMixture[5];
			$("#MgMix_solution").animate({opacity:'1'},2000);
		}else{
			inferenceMsg=magnesiaMixture[6];
		}
		$("#inference_Div").show();
	}
}
function magnesiaMixtureTest(){
	$("#magnesiaMixture").show();
	$('#magnesiaMixtureHeading').html(magnesiaMixture[0]);
	$('#MgMix_saltBottleLbl').html(magnesiaMixture[1]);
	$('#MgMix_saltBottle_Txt').html(magnesiaMixture[2]);
	$('#MgMix_hclBottleLbl').html(magnesiaMixture[3]);
	$('#MgMix_hclBottle_Txt').html(magnesiaMixture[4]);	
	function init_bromideSilvernitrateTest(){
		$("#MgMix_solution").css({top:'131px',height:'0px',opacity:"0.4"});
		$("#inference_Div").hide();
		$("#MgMix_clockBody").hide();
		$("#MgMix_needle").hide();
		MgMix_timeAngle=0;	
		clearInterval(MgMix_clrTime);
	}
	init_bromideSilvernitrateTest();
	$("#MgMix_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#MgMix_dropperCtrlDrag").animate({left:'463px',top:'26px'},function(){
					$("#MgMix_dropperCtrl").addClass("ctrlDroper");
				});
				$("#MgMix_DroperSol").css({
					left:"11px",
					top:"23px",
					width:"4px",
					height:"22px"
				})
			}
		},
		drag:function(){
			$("#MgMix_dropperCtrl").removeClass("ctrlDroper");
			$("#MgMix_DroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px",
				height:"50px"
			})
		}
	});
	var droped=false;
	$("#MgMix_saltDrop").droppable({accept:"#MgMix_dropperCtrlDrag",
		drop:function(){
			droped=true;
			$("#MgMix_dropperCtrlDrag").css({
					left:"207px",
					top:"80px"
				});
			$("#MgMix_DroperSol").animate({
				top:"90px",
				height:"0px"
			});
			dropsFall('MgMix_drop','223px','173px','327px');
			$("#MgMix_testtubeSolution").show();
			setTimeout(function(){
				dropsFall('MgMix_drop','223px','173px','327px');
				$("#MgMix_solution").animate({top:"111px",height:"20px"});
				
			},300);
			setTimeout(function(){
				$("#MgMix_dropperCtrlDrag").animate({left:'462px',top:'26px'},function(){
					$("#MgMix_dropperCtrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#MgMix_dropperCtrlDrag").draggable('disable');
			$("#MgMix_hclCtrlDrag").draggable('enable');
		}
	});
	$("#MgMix_dropperCtrlDrag").draggable('enable');
	$("#MgMix_hclCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!hDroped){
				$("#MgMix_hclCtrlDrag").animate({left:'463px',top:'126px'},function(){
					$("#MgMix_hclCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#MgMix_hclCtrl").removeClass("ctrlDroper");
		}
	});
	$("#MgMix_hclCtrlDrag").draggable('disable');
	var hDroped=false;
	$("#MgMix_hclDrop").droppable({accept:"#MgMix_hclCtrlDrag",
		drop:function(){
			hDroped=true;
			$("#MgMix_hclCtrlDrag").css({
					left:"207px",
					top:"80px"
			});
			dropsFall('MgMix_drop','223px','173px','327px');
			setTimeout(function(){
				dropsFall('MgMix_drop','223px','173px','327px');
				$("#MgMix_solution").animate({top:"101px",height:"30px"});
				
			},300);
			setTimeout(function(){
				$("#MgMix_hclCtrlDrag").animate({left:'462px',top:'176px'},function(){
					$("#MgMix_hclCtrl").addClass("ctrlDroper");
					$("#MgMix_clockBody").show();
					$("#MgMix_needle").show();
					MgMix_clock_rotate();
				});
				
			},400);
			$("#MgMix_hclCtrlDrag").draggable('disable');
		}
	});
}