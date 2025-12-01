var cl_md_Frame=0;
function cl_md_Flaming(){//flaming of burner
		cl_md_Frame++;
		$("#cl_md_Flame").attr('src',path+"flame"+cl_md_Frame+".png");
		esterClrIntvl=setTimeout("cl_md_Flaming()",100);
		if(cl_md_Frame==5){
			cl_md_Frame=1;
		}
	}
function cl_md_FlameOn(){
	$("#cl_md_BurnerOff").hide();
	$("#cl_md_BurnerOn").show();
	$("#cl_md_Flame").show();
	cl_md_Flaming();
	gassEvolve('cl_md_gass');
	setTimeout(function(){
		clearInterval(esterClrIntvl);
		$("#cl_md_BurnerOn").hide();
		$("#cl_md_BurnerOff").show();
		$("#cl_md_Flame").hide();
		$("#cl_md_BurnerOff").removeAttr("onclick");
		$("#cl_md_starchIodidePaper").draggable('enable');
		if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==1){
			$("#cl_md_Tooltip").show();
			$("#cl_md_InferenceTxt").show();
		}
	},6000);
}
function chlorideManganesDioxideTest(){
	$("#chlorideMaganese").show();
	$('#manganeseDioxideHeading').html(manganeseDioxideLabel[0]);
	$('#cl_md_SaltTxt').html(manganeseDioxideLabel[1]);
	$('#cl_md_MnO2Txt').html(manganeseDioxideLabel[2]);
	$('#cl_md_H2so4BottleLbl').html(manganeseDioxideLabel[3]);
	$('#cl_md_h2so4Txt').html(manganeseDioxideLabel[4]);
	$('#cl_md_starchIodidePaperTxt').html(manganeseDioxideLabel[5]);
	//$('#manganeseDioxideHeading').html(manganeseDioxideLabel[0]);
	init_chlorideManganesDioxideTest();
	function init_chlorideManganesDioxideTest(){
		$("#cl_md_SaltDrag").css({left:'454px',top:'51px'});
		$("#cl_md_MnO2Drag").css({left:'454px',top:'151px'});
		$("#cl_md_testtubeSolution").css({top:"241px",height:"0px"});
		$("#cl_md_SaltDrag").css({'z-index':"3"});
		$("#cl_md_SaltDragImg").attr({'src':simPath+"images/salt.png"});
		$("#cl_md_Tooltip").hide();
		$("#cl_md_InferenceTxt").hide();
		$("#cl_md_starchIodidePaper").css({
			'background': '-webkit-linear-gradient(right,white 10%, white 90%)',
			'background': '-o-linear-gradient(right,white 10%, white 90%)',
			'background': '-moz-linear-gradient(right,white 10%, white 90%)',
			'background': 'linear-gradient(to right,white 10%, white 90%)'
		});
		$("#cl_md_starchIodidePaper").css({left:'456px',top:'245px',opacity:'1'});
		$("#inference_Div").hide();
		$("#cl_md_gass").css({top:'159px',opacity:'0',display:'none'});
		if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==1){
			$("#cl_md_gass").attr('src',simPath+"images/ChlorideManganeseDioxide/gassGreenishYellow.png");
			inferenceMsg=manganeseDioxideInfMsg[0];
		}else if(sampleSalt[result]==sampleSalt[7] && confirmationIndex==7&&confirmationSubIndex==1){
			$("#cl_md_gass").attr('src',simPath+"images/ChlorideManganeseDioxide/gassBrownishYellow.png");
			inferenceMsg=manganeseDioxideInfMsg[1];
		}else if(sampleSalt[result]==sampleSalt[8] && confirmationIndex==8&&confirmationSubIndex==1){
			$("#cl_md_gass").attr('src',simPath+"images/ChlorideManganeseDioxide/gassViolet.png");
			inferenceMsg=manganeseDioxideInfMsg[2];
		}else{
			$("#cl_md_gass").attr('src',simPath+"images/potassiumPermanganateTest/smokeColorless.png");
			inferenceMsg=manganeseDioxideInfMsg[3];
		}
	}
	$("#cl_md_SaltDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#cl_md_SaltDrop").droppable({accept:"#cl_md_SaltDrag",
		drop:function(){
			$("#cl_md_SaltDrag").animate({
				left:"110px",
				top:"226px"
			});
			$("#cl_md_MnO2Drag").draggable('enable');
		}
	});
	
	$("#cl_md_MnO2Drag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#cl_md_MnO2Drag").draggable('disable');
	$("#cl_md_MnO2Drop").droppable({accept:"#cl_md_MnO2Drag",
		drop:function(){
			$("#cl_md_MnO2Drag").animate({
				left:"110px",
				top:"223px"
			});
			$("#cl_md_h2so4_dropperCtrlDrag").draggable('enable');
		}
	});
	$("#cl_md_h2so4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#cl_md_h2so4_dropperCtrlDrag").animate({left:'413px',top:'219px'},function(){
					$("#cl_md_h2so4_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_md_h2so4_dropperCtrl").removeClass("ctrlDroper");
			
		}
	});
	$("#cl_md_h2so4_dropperCtrlDrag").draggable('disable');
	var droped=false;
	$("#cl_md_H2so4Drop").droppable({accept:"#cl_md_h2so4_dropperCtrlDrag",
		drop:function(){
		$("#cl_md_h2so4_dropperCtrlDrag").css({
			left:"107px",
			top:"32px"
		});
		dropsFall('cl_md_drop','123px','123px','227px');
		////$("#potassiumH2so4Drop").css({display:"block"});
		setTimeout(function(){
			dropsFall('cl_md_drop','123px','123px','227px');
			$("#cl_md_SaltDrag").css({'z-index':"2"});
			$("#cl_md_SaltDragImg").attr({'src':simPath+"images/ChlorideManganeseDioxide/MnO2.png"});
			$("#cl_md_testtubeSolution").animate({top:"221px",height:"20px"});
			
		},600);
		setTimeout(function(){
			$("#cl_md_h2so4_dropperCtrlDrag").animate({left:'413px',top:'219px'});
			$("#cl_md_h2so4_dropperCtrl").addClass("ctrlDroper");
		},1000);
		////$("#cl_md_testtubeSolution").show();
		$("#cl_md_BurnerOff").attr("onclick","cl_md_FlameOn()");
		$("#cl_md_h2so4_dropperCtrlDrag").draggable('disable');
		droped=true;
		}
	});
	var paperDroped=false;
	$("#cl_md_starchIodidePaper").draggable({containment:"#canvasBox",
		revert: function(){
			if(!paperDroped){
				$("#cl_md_starchIodidePaper").animate({left:'456px',top:'245px'});
			}
			
		},
		drag:function(){
			$("#cl_md_Tooltip").hide();
			$("#cl_md_InferenceTxt").hide();
		}
	});
	$("#cl_md_starchIodidePaper").draggable('disable');
	$("#cl_md_starchIodidePaperDrop").droppable({accept:"#cl_md_starchIodidePaper",
		drop:function(){
			if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==1){
				$("#cl_md_starchIodidePaper").css({
					'background': '-webkit-linear-gradient(right,blue 10%, white 90%)',
					'background': '-o-linear-gradient(right,blue 10%, white 90%)',
					'background': '-moz-linear-gradient(right,blue 10%, white 90%)',
					'background': 'linear-gradient(to right,blue 10%, white 90%)',
					opacity:'0.5'
				});
				$("#cl_md_starchIodidePaper").draggable('disable');
				$("#inference_Div").show();
			}else if(sampleSalt[result]==sampleSalt[7] && confirmationIndex==7&&confirmationSubIndex==1){
				$("#cl_md_starchIodidePaper").css({
					'background': '-webkit-linear-gradient(right,yellow 10%, white 90%)',
					'background': '-o-linear-gradient(right,yellow 10%, white 90%)',
					'background': '-moz-linear-gradient(right,yellow 10%, white 90%)',
					'background': 'linear-gradient(to right,yellow 10%, white 90%)',
					opacity:'0.5'
				});
			}else if(sampleSalt[result]==sampleSalt[8] && confirmationIndex==8&&confirmationSubIndex==1){
				$("#cl_md_starchIodidePaper").css({
					'background': '-webkit-linear-gradient(right,blue 10%, white 90%)',
					'background': '-o-linear-gradient(right,blue 10%, white 90%)',
					'background': '-moz-linear-gradient(right,blue 10%, white 90%)',
					'background': 'linear-gradient(to right,blue 10%, white 90%)',
					opacity:'0.5'
				});
			}
			paperDroped=true;
			$("#inference_Div").show();
		}
	});
}