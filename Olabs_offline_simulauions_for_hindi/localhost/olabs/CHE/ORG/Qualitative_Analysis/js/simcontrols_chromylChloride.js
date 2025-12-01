var cl_cc_Frame=0;
function cl_cc_Flaming(){//flaming of burner
		cl_cc_Frame++;
		$("#cl_cc_Flame").attr('src',path+"flame"+cl_cc_Frame+".png");
		esterClrIntvl=setTimeout("cl_cc_Flaming()",100);
		if(cl_cc_Frame==5){
			cl_cc_Frame=1;
		}
	}
function cl_cc_FlameOn(){
	$("#cl_cc_BurnerOff").hide();
	$("#cl_cc_BurnerOn").show();
	$("#cl_cc_Flame").show();
	cl_cc_Flaming();
	if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==2){
		gassEvolve('cl_cc_gass');
		inferenceMsg=chromylChlorideLabel[8];
	}else{
		inferenceMsg=chromylChlorideLabel[10];
	}
	$("#inference_Div").show();
	setTimeout(function(){
		if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==2){
			$("#cl_cc_NaOHSolution").animate({
				'background-color':"#fff000"
			},2000,function(){
				$("#cl_cc_dTube").animate({
					width:'50px',
					height:'100px',
					left:'451px',
					top:'110px'
				});
				$("#cl_cc_ch3cooh_dropperCtrlDrag").draggable('enable');
			});
		}
	},6000);
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#cl_cc_BurnerOn").hide();
				$("#cl_cc_BurnerOff").show();
				$("#cl_cc_Flame").hide();
				$("#cl_cc_BurnerOff").removeAttr("onclick");
				//$("#cl_md_Tooltip").show();
				//$("#cl_md_InferenceTxt").show();
				//$("#cl_md_starchIodidePaper").draggable('enable');
			},6000);
}
function chromylChlorideTest(){
	$("#chromylChloride").show();
	$('#chromylChlorideHeading').html(chromylChlorideLabel[0]);
	$('#cl_cc_SaltTxt').html(chromylChlorideLabel[1]);
	$('#cl_cc_potassiumDichroTxt').html(chromylChlorideLabel[2]);
	$('#cl_cc_H2so4BottleLbl').html(manganeseDioxideLabel[3]);
	$('#cl_cc_h2so4Txt').html(manganeseDioxideLabel[4]);
	$('#cl_cc_corkTxt').html(concSulphuricLabel[2]);
	$('#cl_cc_dTubeTxt').html(concSulphuricLabel[3]);
	$('#cl_cc_ch3coohBottleLbl').html(chromylChlorideLabel[3]);
	$('#cl_cc_ch3cooh4Txt').html(chromylChlorideLabel[4]);
	$('#cl_cc_leadActBottleLbl').html(chromylChlorideLabel[5]);
	$('#cl_cc_leadActTxt').html(chromylChlorideLabel[6]);
	$('#cl_cc_InferenceTxt').html(chromylChlorideLabel[7]);
	init_chromylChlorideTest();
	function init_chromylChlorideTest(){
		$("#cl_cc_SaltDragImg").attr({'src':simPath+"images/salt.png"});
		$("#cl_cc_SaltDrag").css({left:'412px',top:'44px'});
		$("#cl_cc_potassiumDichroDrag").css({left:'499px',top:'44px'});
		$("#cl_cc_testtubeSolution").css({height:'0px',top:'241px'});
		$("#cl_cc_gass").css({top:'159px',opacity:'0'});
		$("#cl_cc_dTube").css({width:'50px',height:'100px',left:'451px',top:'110px'});
		$("#cl_cc_cork").css({left:"520px",top:"114px"});
		$("#cl_cc_NaOHSolution").css({opacity:"0.5",'background-color':'#ffffff'});
		$("#inference_Div").hide();
		$("#cl_cc_corkTxt").show();
	}
	$("#cl_cc_SaltDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#cl_cc_SaltDrop").droppable({accept:"#cl_cc_SaltDrag",
		drop:function(){
			$("#cl_cc_SaltDrag").animate({
				left:"110px",
				top:"226px"
			});
			$("#cl_cc_potassiumDichroDrag").draggable('enable');
		}
	});
	
	$("#cl_cc_potassiumDichroDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#cl_cc_potassiumDichroDrag").draggable('disable');
	$("#cl_cc_potassiumDichroDrop").droppable({accept:"#cl_cc_potassiumDichroDrag",
		drop:function(){
			$("#cl_cc_potassiumDichroDrag").animate({
				left:"110px",
				top:"226px"
			},function(){
				$("#cl_cc_SaltDragImg").attr({'src':simPath+"images/ChromylChloride/saltMix.png"});
			});
			$("#cl_cc_h2so4_dropperCtrlDrag").draggable('enable');
		}
	});
	$("#cl_cc_h2so4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#cl_cc_h2so4_dropperCtrlDrag").animate({left:'413px',top:'119px'},function(){
					$("#cl_cc_h2so4_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_cc_h2so4_dropperCtrl").removeClass("ctrlDroper");
			
		}
	});
	$("#cl_cc_h2so4_dropperCtrlDrag").draggable('disable');
	var droped=false;
	$("#cl_cc_H2so4Drop").droppable({accept:"#cl_cc_h2so4_dropperCtrlDrag",
		drop:function(){
		$("#cl_cc_h2so4_dropperCtrlDrag").css({
			left:"107px",
			top:"32px"
		});
		dropsFall('cl_cc_drop','123px','123px','227px');
		setTimeout(function(){
			dropsFall('cl_cc_drop','123px','123px','227px');
			$("#cl_cc_testtubeSolution").animate({top:"221px",height:"20px"});
			$("#cl_cc_SaltDragImg").attr({'src':simPath+"images/ChromylChloride/potassiumDichromate.png"});
			
		},600);
		setTimeout(function(){
			$("#cl_cc_h2so4_dropperCtrlDrag").animate({left:'413px',top:'119px'});
			$("#cl_cc_h2so4_dropperCtrl").addClass("ctrlDroper");
		},1000);
		$("#cl_cc_h2so4_dropperCtrlDrag").draggable('disable');
		$("#cl_cc_cork").draggable('enable');
		droped=true;
		}
	});
	$("#cl_cc_cork").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#cl_cc_corkDrop").droppable({accept:"#cl_cc_cork",
		drop:function(){
			$("#cl_cc_cork").animate({
				left:"111px",
				top:"120px"
			});
			$("#cl_cc_cork").draggable('disable');
			$("#cl_cc_dTube").draggable('enable');
			$("#cl_cc_corkTxt").hide();
		}
	});
	$("#cl_cc_cork").draggable('disable');
	$("#cl_cc_dTube").draggable({containment:"#canvasBox",
		revert: function(){
			if(!dTubedroped){
				$("#cl_cc_dTube").animate({
					width:'50px',
					height:'100px',
					left:'451px',
					top:'110px'
				});
			}
			
		},
		drag:function(){
			$("#cl_cc_dTube").css({
				width:'104px',
				height:'163px'
			});
		}
	});
	$("#cl_cc_dTube").draggable('disable');
	var dTubedroped=false;
	$("#cl_cc_dTubeDrop").droppable({accept:"#cl_cc_dTube",
		
		drop:function(){
			$("#cl_cc_dTube").animate({
				width:'104px',
				height:'163px',
				left:"123px",
				top:"110px"
			});
			dTubedroped=true;
			$("#cl_cc_BurnerOff").attr("onclick","cl_cc_FlameOn()");
			$("#cl_cc_dTube").draggable('disable');
			
		}
	});
	var ch300hDroped=false;
	$("#cl_cc_ch3cooh_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!ch300hDroped){
				$("#cl_cc_ch3cooh_dropperCtrlDrag").animate({left:'413px',top:'219px'},function(){
					$("#cl_cc_ch3cooh_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_cc_ch3cooh_dropperCtrl").removeClass("ctrlDroper");
			$("#inference_Div").hide();
		}
	});
	$("#cl_cc_ch3cooh_dropperCtrlDrag").draggable('disable');
	$("#cl_cc_ch3coohDrop").droppable({accept:"#cl_cc_ch3cooh_dropperCtrlDrag",
		drop:function(){
		$("#cl_cc_ch3cooh_dropperCtrlDrag").css({
			left:"207px",
			top:"84px"
		});
		dropsFall('cl_cc_drop','223px','177px','331px');
		setTimeout(function(){
			dropsFall('cl_cc_drop','223px','177px','331px');
			$("#cl_cc_NaOHSolution").animate({top:"289px",height:"25px"});
			
		},600);
		setTimeout(function(){
			$("#cl_cc_ch3cooh_dropperCtrlDrag").animate({left:'413px',top:'219px'});
			$("#cl_cc_ch3cooh_dropperCtrl").addClass("ctrlDroper");
		},1000);
		$("#cl_cc_ch3cooh_dropperCtrlDrag").draggable('disable');
		$("#cl_cc_leadAct_dropperCtrlDrag").draggable('enable');
		ch300hDroped=true;
		}
	});
	var leadDroped=false;
	$("#cl_cc_leadAct_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!leadDroped){
				$("#cl_cc_leadAct_dropperCtrlDrag").animate({left:'513px',top:'219px'},function(){
					$("#cl_cc_leadAct_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_cc_leadAct_dropperCtrl").removeClass("ctrlDroper");
			
		}
	});
	$("#cl_cc_leadAct_dropperCtrlDrag").draggable('disable');
	$("#cl_cc_leadActDrop").droppable({accept:"#cl_cc_leadAct_dropperCtrlDrag",
		drop:function(){
		$("#cl_cc_leadAct_dropperCtrlDrag").css({
			left:"207px",
			top:"84px"
		});
		dropsFall('cl_cc_drop','223px','177px','331px');
		setTimeout(function(){
			dropsFall('cl_cc_drop','223px','177px','331px');
			$("#cl_cc_NaOHSolution").animate({opacity:"1"});
			
		},600);
		setTimeout(function(){
			$("#cl_cc_leadAct_dropperCtrlDrag").animate({left:'513px',top:'219px'});
			$("#cl_cc_leadAct_dropperCtrl").addClass("ctrlDroper");
		},1000);
		$("#cl_cc_leadAct_dropperCtrlDrag").draggable('disable');
		inferenceMsg=chromylChlorideLabel[9];
		$("#inference_Div").show();
		leadDroped=true;
		}
	});
}