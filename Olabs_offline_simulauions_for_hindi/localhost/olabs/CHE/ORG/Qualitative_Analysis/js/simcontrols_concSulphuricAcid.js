
function concSulphuricAcidTest(){
	$("#concSulphuricAcid").show();
	$('#concSulphuric').html(concSulphuricLabel[0]);
	$('#concH_glassRodTxt').html(concSulphuricLabel[1]);
	$('#concH_corkTxt').html(concSulphuricLabel[2]);
	$('#concH_dTubeTxt').html(concSulphuricLabel[3]);
	$('#concH_aAmmoniaBottleLbl').html(concSulphuricLabel[4]);
	$('#concH_aAmmoniaTxt').html(concSulphuricLabel[5]);
	$('#concH_starchPaperTxt').html(concSulphuricLabel[6]);
	$('#concH_InferenceTxt').html(concSulphuricLabel[7]);
	$('#concH_SaltTxt').html(commomLabels[0]);
	$('#concH_H2so4BottleLbl').html(commomLabels[1]);
	$('#concH_h2so4Txt').html(commomLabels[4]);
	$('#concH_limeWater').html(concSulphuricLabel[15]);
	
	
	init_chromylChlorideTest();
	function init_chromylChlorideTest(){
		$("#concH_SaltDrag").css({left:'412px',top:'44px',opacity:'1'});
		$("#concH_Tooltip").hide();
		$("#concH_InferenceTxt").hide();
		$("#concH_starchPaper").css({left:'468px',top:'150px'});
		$("#concH_starchPaper").css({
			'background': '-webkit-linear-gradient(right,white 10%, white 90%)',
			'background': '-o-linear-gradient(right,white 10%, white 90%)',
			'background': '-moz-linear-gradient(right,white 10%, white 90%)',
			'background': 'linear-gradient(to right,white 10%, white 90%)'
		});
		$("#concH_corkTxt").show();
		$("#concH_testtubeSolution").css({height:'0px',top:'241px'});
		$("#concH_cork").animate({left:"529px",top:"30px"});
		
		$("#concH_gass").css({top:'159px',opacity:'0'});
		$("#cl_cc_dTube").css({width:'50px',height:'100px',left:'475px',top:'22px'});
		
		$("#concH_limeSolution").animate({opacity:"0.3"});
		$("#inference_Div").hide();
	}
	$("#concH_SaltDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#concH_SaltDrop").droppable({accept:"#concH_SaltDrag",
		drop:function(){
			$("#concH_SaltDrag").animate({
				left:"110px",
				top:"226px"
			});
			$("#concH_h2so4_dropperCtrlDrag").draggable('enable');
		}
	});
	
	$("#concH_h2so4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#concH_h2so4_dropperCtrlDrag").animate({left:'413px',top:'108px'},function(){
					$("#concH_h2so4_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#concH_h2so4_dropperCtrl").removeClass("ctrlDroper");
			
		}
	});
	$("#concH_h2so4_dropperCtrlDrag").draggable('disable');
	var droped=false;
	$("#concH_H2so4Drop").droppable({accept:"#concH_h2so4_dropperCtrlDrag",
		drop:function(){
		$("#concH_h2so4_dropperCtrlDrag").css({
			left:"107px",
			top:"32px"
		});
		dropsFall('concH_drop','123px','123px','227px');
		setTimeout(function(){
			dropsFall('concH_drop','123px','123px','227px');
			$("#concH_SaltDrag").css({opacity:'0.6'});
			$("#concH_testtubeSolution").animate({top:"217px",height:"20px"});
			if(sampleSalt[result]=="Chloride"){
				$("#concH_glassRodWrap").draggable('enable');
				$("#concH_gass").attr({'src':simPath+"images/potassiumPermanganateTest/smokeColorless.png"});
				$("#concH_InferenceTxt").html(concSulphuricLabel[7]);
				$("#concH_Tooltip").show();
				$("#concH_InferenceTxt").show();
				$("#confirmation").removeAttr("disabled");
			}else if(sampleSalt[result]=="Bromide"){
				$("#concH_starchPaper").draggable('enable');
				$("#concH_gass").attr({'src':simPath+"images/potassiumPermanganateTest/smokeReddishBrown.png"});
				$("#concH_InferenceTxt").html(concSulphuricLabel[8]);
				$("#concH_Tooltip").show();
				$("#concH_InferenceTxt").show();
				$("#confirmation").removeAttr("disabled");
			}else if(sampleSalt[result]=="Iodide"){
				$("#concH_gass").attr({'src':simPath+"images/ChlorideManganeseDioxide/gassViolet.png"});
				$("#concH_starchPaper").draggable('enable');
				$("#concH_InferenceTxt").html(concSulphuricLabel[8]);
				$("#concH_Tooltip").show();
				$("#concH_InferenceTxt").show();
				$("#confirmation").removeAttr("disabled");
			}else if(sampleSalt[result]=="Oxalate"){
				$("#concH_cork").draggable('enable');
				$("#concH_gass").attr({'src':simPath+"images/potassiumPermanganateTest/smokeColorless.png"});
				$("#concH_InferenceTxt").html(concSulphuricLabel[8]);
				$("#concH_Tooltip").show();
				$("#concH_InferenceTxt").show();
				$("#confirmation").removeAttr("disabled");
			}else{
					$("#concH_gass").attr({'src':simPath+"images/potassiumPermanganateTest/smokeColorless.png"});
					$("#concH_InferenceTxt").text(toolTipMsgs[0]);
					$("#concH_Tooltip").show();
					$("#concH_InferenceTxt").show();
				}
			$("#concH_gass").animate({top:'-42px',opacity:'1'},3000);
		},600);
		setTimeout(function(){
			$("#concH_h2so4_dropperCtrlDrag").animate({left:'413px',top:'108px'});
			$("#concH_h2so4_dropperCtrl").addClass("ctrlDroper");
		},1000);
		$("#concH_h2so4_dropperCtrlDrag").draggable('disable');
		droped=true;
		}
	});
	
	$("#concH_cork").draggable({ revert: "invalid",containment:"#canvasBox",
		drag:function(){
			$("#concH_Tooltip").hide();
			$("#concH_InferenceTxt").hide();
		}	
	});
	$("#concH_corkDrop").droppable({accept:"#concH_cork",
		drop:function(){
			$("#concH_cork").animate({
				left:"111px",
				top:"120px"
			},function(){$("#concH_gass").stop();$("#concH_gass").css({top:'78px'});});
			$("#concH_cork").draggable('disable');
			$("#concH_dTube").draggable('enable');
			$("#concH_corkTxt").hide();
		}
	});
	$("#concH_cork").draggable('disable');
	$("#concH_dTube").draggable({containment:"#canvasBox",
		revert: function(){
			if(!dTubedroped){
				$("#concH_dTube").animate({
					width:'50px',
					height:'100px',
					left:'475px',
					top:'22px'
				});
			}
			
		},
		drag:function(){
			$("#concH_dTube").css({
				width:'104px',
				height:'163px'
			});
		}
	});
	$("#concH_dTube").draggable('disable');
	var dTubedroped=false;
	$("#concH_dTubeDrop").droppable({accept:"#concH_dTube",
		
		drop:function(){
			$("#concH_dTube").animate({
				width:'104px',
				height:'163px',
				left:"123px",
				top:"110px"
			});
			dTubedroped=true;
			$("#concH_limeSolution").animate({opacity:"1"},7000,function(){
				inferenceMsg=concSulphuricLabel[9];
				$("#inference_Div").show();
				$("#concH_glassRodWrap").draggable('disable');
			});
			$("#concH_dTube").draggable('disable');
			
		}
	});
	var concH_rod_Droped=false;
	$("#concH_glassRodWrap").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!concH_rod_Droped){
				ammoniaDroped=false;
				$("#concH_glassRodWrap").animate({left:'475px',top:'233px'},function(){
					$("#concH_aAmmonia_dropperCtrlDrag").animate({top:"219px",left:"413px"});
				});
			}
			 
		},
		start:function(){
			$("#concH_aAmmonia_dropperCtrlDrag").animate({top:"190px",left:"445px"});
		},
		drag:function(){
			$("#cl_cc_ch3cooh_dropperCtrl").removeClass("ctrlDroper");
			////$("#inference_Div").hide();
		}
	});
	$("#concH_glassRodWrap").draggable('disable');
	var ammoniaDroped=false;
	$("#concH_rodAmmoniaDrop").droppable({accept:"#concH_glassRodWrap",
		drop:function(){
		ammoniaDroped=true;
		$("#concH_glassRodWrap").css({
			left:"413px",
			top:"170px"
		});
		setTimeout(function(){
			$("#concH_glassRodWrap").animate({top:"227px"});
		},200);
		setTimeout(function(){
			concH_rod_Droped=false;
			$("#concH_glassRodWrap").draggable({ containment:"#canvasBox",
				revert: function(){
					if(!concH_rod_Droped){
						ammoniaDroped=false;
						$("#concH_glassRodWrap").animate({left:'475px',top:'233px'},function(){
							$("#concH_aAmmonia_dropperCtrlDrag").animate({top:"219px",left:"413px"});
						});
						document.getElementById('concH_glassRodWrap').style.webkitTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.webkitTransform = 'rotate(0deg)';
						document.getElementById('concH_glassRodWrap').style.MozTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.MozTransform ='rotate(0deg)';
					}
					 
				},
				start:function(){
					$("#concH_Tooltip").hide();
					$("#concH_InferenceTxt").hide();
					$("#concH_aAmmonia_dropperCtrlDrag").animate({top:"190px",left:"445px"});
				},
				drag:function(){
					$("#concH_glassRod").css({'z-index':'5'});
					$("#concH_whiteFumeEvolveArea").css({height:($("#concH_glassRodWrap").position().top+10)+'px'});
					if($("#concH_glassRodWrap").position().left<300&&ammoniaDroped){
						document.getElementById('concH_glassRodWrap').style.webkitTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.webkitTransform = 'rotate(90deg)';
						document.getElementById('concH_glassRodWrap').style.MozTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.MozTransform ='rotate(90deg)';
					}else{
						document.getElementById('concH_glassRodWrap').style.webkitTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.webkitTransform = 'rotate(0deg)';
						document.getElementById('concH_glassRodWrap').style.MozTransformOrigin='50% 0%';
						document.getElementById('concH_glassRodWrap').style.MozTransform ='rotate(0deg)';
					}
					if($("#concH_glassRodWrap").position().left>100&&$("#concH_glassRodWrap").position().left<130&&$("#concH_glassRodWrap").position().top<110&&ammoniaDroped){
						$("#concH_whiteFumes").show();
						$("#concH_whiteFumes").css({top:($("#concH_glassRodWrap").position().top+20)+'px'});
						$("#concH_whiteFumes").animate({top:'-100px'});
						inferenceMsg=concSulphuricLabel[12];
						$("#inference_Div").show();
						$("#concH_glassRodWrap").draggable('disable');
					}else{
						$("#concH_whiteFumes").hide();
					}
				},
				stop:function(){
					$("#concH_glassRod").css({'z-index':'0'});
					$("#concH_whiteFumes").hide();
				}
			});
		},210);
		concH_rod_Droped=true;
		}
	});
	var paperDroped=false;
	$("#concH_starchPaper").draggable({containment:"#canvasBox",
		revert: function(){
			if(!paperDroped){
				$("#concH_starchPaper").animate({left:'468px',top:'150px'});
			}
			
		},
		start:function(){
			$("#concH_Tooltip").hide();
			$("#concH_InferenceTxt").hide();
		}
	});
	$("#concH_starchPaper").draggable('disable');
	$("#concH_starchPaperDrop").droppable({accept:"#concH_starchPaper",
		drop:function(){
				if(sampleSalt[result]=="Bromide"){
					inferenceMsg=concSulphuricLabel[13];
					$("#concH_starchPaper").css({
						'background': '-webkit-linear-gradient(right,yellow 10%, white 90%)',
						'background': '-o-linear-gradient(right,yellow 10%, white 90%)',
						'background': '-moz-linear-gradient(right,yellow 10%, white 90%)',
						'background': 'linear-gradient(to right,yellow 10%, white 90%)'
					});
				}else if(sampleSalt[result]=="Iodide"){
					inferenceMsg=concSulphuricLabel[14];
					$("#concH_starchPaper").css({
						'background': '-webkit-linear-gradient(right,blue 10%, white 90%)',
						'background': '-o-linear-gradient(right,blue 10%, white 90%)',
						'background': '-moz-linear-gradient(right,blue 10%, white 90%)',
						'background': 'linear-gradient(to right,blue 10%, white 90%)'
					});
				}
				//$("#cl_md_starchIodidePaper").draggable('disable');
				$("#inference_Div").show();
			paperDroped=true;
		}
	});
}