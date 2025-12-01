var cl_sn_Frame=0;
function cl_sn_Flaming(){//flaming of burner
		cl_sn_Frame++;
		$("#cl_sn_Flame").attr('src',path+"flame"+cl_sn_Frame+".png");
		esterClrIntvl=setTimeout("cl_sn_Flaming()",100);
		if(cl_sn_Frame==5){
			cl_sn_Frame=1;
		}
	}
function cl_sn_FlameOn(){
	$("#cl_sn_BurnerOff").hide();
	$("#cl_sn_BurnerOn").show();
	$("#cl_sn_Flame").show();
	cl_sn_Flaming();
	setTimeout(function(){
		cl_sn_boiling();
		cl_sn_boiling1();
		cl_sn_boiling2();
	},2000);

	setTimeout(function(){
		clearInterval(clr);
		clearInterval(clr1);
		clearInterval(clr2);
	},7000);
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#cl_sn_BurnerOn").hide();
				$("#cl_sn_BurnerOff").show();
				$("#cl_sn_Flame").hide();
				$("#cl_sn_BurnerOff").removeAttr("onclick");
				$("#cl_sn_AgNO3CtrlDrag").draggable('enable');
				
			},7000);
}
var clr,clr1,clr2;
function cl_sn_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cl_sn_buble3").show();
	$("#cl_sn_buble3").css({top:'22px',left:v1+"px"	});
	$("#cl_sn_buble3").animate({top:'0px'},function(){
												$("#cl_sn_buble3").hide();
											});
	clr=setTimeout(function(){cl_sn_boiling()},700);
}
function cl_sn_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cl_sn_buble1").show();
	$("#cl_sn_buble1").css({top:'22px',left:v1+"px"	});
	$("#cl_sn_buble1").animate({top:'0px'},function(){
												$("#cl_sn_buble1").hide();
											});
	clr1=setTimeout(function(){cl_sn_boiling1()},1000);
}
function cl_sn_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cl_sn_buble2").show();
	$("#cl_sn_buble2").css({top:'22px',left:v1+"px"	});
	$("#cl_sn_buble2").animate({top:'0px'},function(){
												$("#cl_sn_buble2").hide();
											});
	clr2=setTimeout(function(){cl_sn_boiling2()},1300);
}
function chlorideSilvernitrateTest(){
	$("#chlorideSilvernitrate").show();	
	$('#chlorideSilvernitrateHeading').html(silverNitrateLabel[0]);
	$('#cl_sn_saltBottleLbl').html(commomLabels[5]);
	$('#cl_sn_saltBottle_Txt').html(commomLabels[0]);
	$('#cl_sn_hno3BottleLbl').html(silverNitrateLabel[1]);
	$('#cl_sn_hno3Bottle_Txt').html(silverNitrateLabel[2]);
	$('#cl_sn_AgNO3BottleLbl').html(silverNitrateLabel[3]);
	$('#cl_sn_AgNO3Bottle_Txt').html(silverNitrateLabel[3]);
	$('#cl_sn_Nh4ohBottleLbl').html(silverNitrateLabel[4]);
	$('#cl_sn_Nh4ohBottle_Txt').html(silverNitrateLabel[4]);
	
	
	
	init_chlorideSilvernitrateTest();
	function init_chlorideSilvernitrateTest(){
		$("#cl_sn_testtubeSolution").css({
			height:'0px',
			top:'241px',
			display:'none'
		});
		$("#cl_sn_whitePpt").css({opacity:'0'});
		$("#cl_sn_testtubeSolution").css({top:'241px',height:'0px',opacity:'0.9'});
		$("#inference_Div").hide();
		if(confirmationIndex==6&&confirmationSubIndex==0){
			if(sampleSalt[result]==sampleSalt[6]){
				$("#cl_sn_whitePpt").attr('src',simPath+"images/whitePpt.png");
				inferenceMsg=silverNitrateInfMsg[0];
			}else{
				inferenceMsg=silverNitrateInfMsg[3];
			}
		}else if(confirmationIndex==7&&confirmationSubIndex==0){
			if(sampleSalt[result]==sampleSalt[7]){
				$("#cl_sn_whitePpt").attr('src',simPath+"images/yellowPpt.png");
				inferenceMsg=silverNitrateInfMsg[1];
			}else{
				inferenceMsg=silverNitrateInfMsg[3];
			}
		}else if(confirmationIndex==8&&confirmationSubIndex==0){
			if(sampleSalt[result]==sampleSalt[8]){
				$("#cl_sn_whitePpt").attr('src',simPath+"images/yellowPpt.png");
				inferenceMsg=silverNitrateInfMsg[2];
			}else{
				inferenceMsg=silverNitrateInfMsg[3];
			}
		}
	}
	
	$("#cl_sn_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#cl_sn_dropperCtrlDrag").animate({left:'463px',top:'26px'},function(){
					$("#cl_sn_dropperCtrl").addClass("ctrlDroper");
				});
				$("#cl_sn_DroperSol").css({
					left:"11px",
					top:"23px",
					width:"4px",
					height:"22px"
				})
				
			}
			
		},
		drag:function(){
			$("#cl_sn_dropperCtrl").removeClass("ctrlDroper");
			$("#cl_sn_DroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px",
				height:"50px"
			})
			
		}
	});
	$("#cl_sn_dropperCtrlDrag").draggable('enable');
	var droped=false;
	$("#cl_sn_SaltDrop").droppable({accept:"#cl_sn_dropperCtrlDrag",
		drop:function(){
			droped=true;
			$("#cl_sn_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
			$("#cl_sn_DroperSol").animate({
				top:"90px",
				height:"0px"
			});
			dropsFall('cl_sn_drop','123px','123px','227px');
			$("#cl_sn_testtubeSolution").show();
			setTimeout(function(){
				dropsFall('cl_sn_drop','123px','123px','227px');
				$("#cl_sn_testtubeSolution").animate({top:"221px",height:"20px"});
				
			},300);
			setTimeout(function(){
				$("#cl_sn_dropperCtrlDrag").animate({left:'462px',top:'26px'},function(){
					$("#cl_sn_dropperCtrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#cl_sn_dropperCtrlDrag").draggable('disable');
			$("#cl_sn_hno3CtrlDrag").draggable('enable');
		}
	});
	$("#cl_sn_hno3CtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!hDroped){
				$("#cl_sn_hno3CtrlDrag").animate({left:'463px',top:'126px'},function(){
					$("#cl_sn_hno3Ctrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_sn_hno3Ctrl").removeClass("ctrlDroper");
		}
	});
	$("#cl_sn_hno3CtrlDrag").draggable('disable');
	var hDroped=false;
	$("#cl_sn_Hno3Drop").droppable({accept:"#cl_sn_hno3CtrlDrag",
		drop:function(){
			hDroped=true;
			$("#cl_sn_hno3CtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cl_sn_drop','123px','123px','227px');
			setTimeout(function(){
				dropsFall('cl_sn_drop','123px','123px','227px');
				$("#cl_sn_testtubeSolution").animate({top:"211px",height:"30px"});
				
			},300);
			setTimeout(function(){
				$("#cl_sn_hno3CtrlDrag").animate({left:'462px',top:'126px'},function(){
					$("#cl_sn_hno3Ctrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#cl_sn_BurnerOff").attr("onclick","cl_sn_FlameOn()");
			$("#cl_sn_hno3CtrlDrag").draggable('disable');
		}
	});
	var agDroped=false;
	$("#cl_sn_AgNO3CtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!agDroped){
				$("#cl_sn_AgNO3CtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#cl_sn_AgNO3Ctrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_sn_AgNO3Ctrl").removeClass("ctrlDroper");
		}
	});
	$("#cl_sn_AgNO3CtrlDrag").draggable('disable');
	$("#cl_sn_AgNO3Drop").droppable({accept:"#cl_sn_AgNO3CtrlDrag",
		drop:function(){
			agDroped=true;
			$("#cl_sn_AgNO3CtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cl_sn_drop','123px','123px','227px');
			if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==0){
				$("#cl_sn_whitePpt").animate({opacity:'1'},4000);
				$("#cl_sn_testtubeSolution").animate({opacity:'0'},4000,function(){$("#cl_sn_testtubeSolution").css({top:"241px",height:"0px"});});
			}
			if(sampleSalt[result]==sampleSalt[7] && confirmationIndex==7&&confirmationSubIndex==0){
				$("#cl_sn_whitePpt").animate({opacity:'1'},4000);
				$("#cl_sn_testtubeSolution").animate({opacity:'0'},4000,function(){$("#cl_sn_testtubeSolution").css({top:"241px",height:"0px"});});
			}
			if(sampleSalt[result]==sampleSalt[8] && confirmationIndex==8&&confirmationSubIndex==0){
				$("#cl_sn_whitePpt").animate({opacity:'1'},4000);
				$("#cl_sn_testtubeSolution").animate({opacity:'0'},4000,function(){$("#cl_sn_testtubeSolution").css({top:"241px",height:"0px"});});
			}
			setTimeout(function(){
				dropsFall('cl_sn_drop','123px','123px','227px');
				
			},600);
			setTimeout(function(){
				$("#cl_sn_AgNO3CtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#cl_sn_AgNO3Ctrl").addClass("ctrlDroper");
				});
				
			},1000);
			$("#cl_sn_AgNO3CtrlDrag").draggable('disable');
			$("#cl_sn_Nh4ohCtrlDrag").draggable('enable');
		}
	});
	var nhDroped=false;
	$("#cl_sn_Nh4ohCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!nhDroped){
				$("#cl_sn_Nh4ohCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#cl_sn_Nh4ohCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cl_sn_Nh4ohCtrl").removeClass("ctrlDroper");
		}
	});
	$("#cl_sn_Nh4ohCtrlDrag").draggable('disable');
	$("#cl_sn_nh4ohDrop").droppable({accept:"#cl_sn_Nh4ohCtrlDrag",
		drop:function(){
			nhDroped=true;
			$("#cl_sn_Nh4ohCtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cl_sn_drop','123px','123px','227px');
			if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==0){
				$("#cl_sn_testtubeSolution").css({opacity:'.5'});
				$("#cl_sn_testtubeSolution").animate({top:"221px",height:"20px"},2000);
			}
			if(sampleSalt[result]==sampleSalt[6] && confirmationIndex==6&&confirmationSubIndex==0){
				$("#cl_sn_whitePpt").animate({opacity:'0'},2000);
			}else if(sampleSalt[result]==sampleSalt[7] && confirmationIndex==7&&confirmationSubIndex==0){
				$("#cl_sn_whitePpt").animate({opacity:'0.5'},2000);
			}
			setTimeout(function(){
				dropsFall('cl_sn_drop','123px','123px','227px');
			},600);
			setTimeout(function(){
				$("#cl_sn_Nh4ohCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#cl_sn_Nh4ohCtrl").addClass("ctrlDroper");
					$("#inference_Div").show();
				});				
			},1000);
			$("#cl_sn_Nh4ohCtrlDrag").draggable('disable');
		}
	});
}