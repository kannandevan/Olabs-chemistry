var cacl2_Frame=0;
function cacl2_Flaming(){//flaming of burner
		cacl2_Frame++;
		$("#cacl2_Flame").attr('src',path+"flame"+cacl2_Frame+".png");
		esterClrIntvl=setTimeout("cacl2_Flaming()",100);
		if(cacl2_Frame==5){
			cacl2_Frame=1;
		}
	}
function cacl2_FlameOn(){
	$("#cacl2_BurnerOff").hide();
	$("#cacl2_BurnerOn").show();
	$("#cacl2_Flame").show();
	cacl2_Flaming();
	setTimeout(function(){
		cacl2_boiling();
		cacl2_boiling1();
		cacl2_boiling2();
	},2000);

	setTimeout(function(){
		clearInterval(cacl_clr);
		clearInterval(cacl_clr1);
		clearInterval(cacl_clr2);
	},7000);
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#cacl2_BurnerOn").hide();
				$("#cacl2_BurnerOff").show();
				$("#cacl2_Flame").hide();
				$("#cacl2_BurnerOff").removeAttr("onclick");
				$("#cacl2_AgNO3CtrlDrag").draggable('enable');
				
			},7000);
}
var cacl_clr,cacl_clr1,cacl_clr2;
function cacl2_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cacl2_buble3").show();
	$("#cacl2_buble3").css({top:'22px',left:v1+"px"	});
	$("#cacl2_buble3").animate({top:'0px'},function(){
												$("#cacl2_buble3").hide();
											});
	cacl_clr=setTimeout(function(){cacl2_boiling()},700);
}
function cacl2_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cacl2_buble1").show();
	$("#cacl2_buble1").css({top:'22px',left:v1+"px"	});
	$("#cacl2_buble1").animate({top:'0px'},function(){
												$("#cacl2_buble1").hide();
											});
	cacl_clr1=setTimeout(function(){cacl2_boiling1()},1000);
}
function cacl2_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#cacl2_buble2").show();
	$("#cacl2_buble2").css({top:'22px',left:v1+"px"	});
	$("#cacl2_buble2").animate({top:'0px'},function(){
												$("#cacl2_buble2").hide();
											});
	cacl_clr2=setTimeout(function(){cacl2_boiling2()},1300);
}
function calciumChlorideTest(){
	$("#calciumChloride").show();	
	$('#calciumChlorideHeading').html(calciumChloride[0]);
	$('#cacl2_saltBottleLbl').html(calciumChloride[1]);
	$('#cacl2_saltBottle_Txt').html(calciumChloride[2]);
	$('#cacl2_hno3BottleLbl').html(calciumChloride[3]);
	$('#cacl2_hno3Bottle_Txt').html(calciumChloride[4]);
	$('#cacl2_AgNO3BottleLbl').html(calciumChloride[5]);
	$('#cacl2_AgNO3Bottle_Txt').html(calciumChloride[6]);
	$('#cacl2_Nh4ohBottleLbl').html(calciumChloride[7]);
	$('#cacl2_Nh4ohBottle_Txt').html(calciumChloride[8]);
	init_chlorideSilvernitrateTest();
	function init_chlorideSilvernitrateTest(){
		$("#cacl2_testtubeSolution").css({
			height:'0px',
			top:'235px',
			display:'none'
		});
		$("#cacl2_whitePpt").css({opacity:'0'});
		$("#inference_Div").hide();
		if(sampleSalt[result]==sampleSalt[10] &&  confirmationIndex==10&&confirmationSubIndex==0){
			inferenceMsg=calciumChloride[9];
		}else{
			inferenceMsg=calciumChloride[10];
		}
		
	}
	
	$("#cacl2_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#cacl2_dropperCtrlDrag").animate({left:'463px',top:'26px'},function(){
					$("#cacl2_dropperCtrl").addClass("ctrlDroper");
				});
				$("#cacl2_DroperSol").css({
					left:"11px",
					top:"23px",
					width:"4px",
					height:"22px"
				})
				
			}
			
		},
		drag:function(){
			$("#cacl2_dropperCtrl").removeClass("ctrlDroper");
			$("#cacl2_DroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px",
				height:"50px"
			})
			
		}
	});
	$("#cacl2_dropperCtrlDrag").draggable('enable');
	var droped=false;
	$("#cacl2_SaltDrop").droppable({accept:"#cacl2_dropperCtrlDrag",
		drop:function(){
			droped=true;
			$("#cacl2_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
			$("#cacl2_DroperSol").animate({
				top:"90px",
				height:"0px"
			});
			dropsFall('cacl2_drop','123px','123px','227px');
			$("#cacl2_testtubeSolution").show();
			setTimeout(function(){
				dropsFall('cacl2_drop','123px','123px','227px');
				$("#cacl2_testtubeSolution").animate({top:"221px",height:"20px"});
				
			},300);
			setTimeout(function(){
				$("#cacl2_dropperCtrlDrag").animate({left:'462px',top:'26px'},function(){
					$("#cacl2_dropperCtrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#cacl2_dropperCtrlDrag").draggable('disable');
			$("#cacl2_hno3CtrlDrag").draggable('enable');
		}
	});
	$("#cacl2_hno3CtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!hDroped){
				$("#cacl2_hno3CtrlDrag").animate({left:'463px',top:'126px'},function(){
					$("#cacl2_hno3Ctrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cacl2_hno3Ctrl").removeClass("ctrlDroper");
		}
	});
	$("#cacl2_hno3CtrlDrag").draggable('disable');
	var hDroped=false;
	$("#cacl2_Hno3Drop").droppable({accept:"#cacl2_hno3CtrlDrag",
		drop:function(){
			hDroped=true;
			$("#cacl2_hno3CtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cacl2_drop','123px','123px','227px');
			setTimeout(function(){
				dropsFall('cacl2_drop','123px','123px','227px');
				$("#cacl2_testtubeSolution").animate({top:"211px",height:"30px"});
				
			},300);
			setTimeout(function(){
				$("#cacl2_hno3CtrlDrag").animate({left:'462px',top:'126px'},function(){
					$("#cacl2_hno3Ctrl").addClass("ctrlDroper");
				});
				
			},400);
			$("#cacl2_BurnerOff").attr("onclick","cacl2_FlameOn()");
			$("#cacl2_hno3CtrlDrag").draggable('disable');
		}
	});
	var agDroped=false;
	$("#cacl2_AgNO3CtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!agDroped){
				$("#cacl2_AgNO3CtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#cacl2_AgNO3Ctrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cacl2_AgNO3Ctrl").removeClass("ctrlDroper");
		}
	});
	$("#cacl2_AgNO3CtrlDrag").draggable('disable');
	$("#cacl2_AgNO3Drop").droppable({accept:"#cacl2_AgNO3CtrlDrag",
		drop:function(){
			agDroped=true;
			$("#cacl2_AgNO3CtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cacl2_drop','123px','123px','227px');
			if(sampleSalt[result]==sampleSalt[10] &&  confirmationIndex==10&&confirmationSubIndex==0){
				$("#cacl2_whitePpt").animate({opacity:'1'},4000);
				$("#cacl2_testtubeSolution").animate({opacity:'0'},4000,function(){$("#cacl2_testtubeSolution").css({top:"235px",height:"0px"});});
			}
			setTimeout(function(){
				dropsFall('cacl2_drop','123px','123px','227px');
				
			},600);
			setTimeout(function(){
				$("#cacl2_AgNO3CtrlDrag").animate({left:'422px',top:'226px'},function(){
					$("#cacl2_AgNO3Ctrl").addClass("ctrlDroper");
				});
				
			},1000);
			$("#cacl2_AgNO3CtrlDrag").draggable('disable');
			$("#cacl2_Nh4ohCtrlDrag").draggable('enable');
		}
	});
	var nhDroped=false;
	$("#cacl2_Nh4ohCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!nhDroped){
				$("#cacl2_Nh4ohCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#cacl2_Nh4ohCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#cacl2_Nh4ohCtrl").removeClass("ctrlDroper");
		}
	});
	$("#cacl2_Nh4ohCtrlDrag").draggable('disable');
	$("#cacl2_nh4ohDrop").droppable({accept:"#cacl2_Nh4ohCtrlDrag",
		drop:function(){
			nhDroped=true;
			$("#cacl2_Nh4ohCtrlDrag").css({
					left:"107px",
					top:"32px"
			});
			dropsFall('cacl2_drop','123px','123px','227px');
			if(sampleSalt[result]==sampleSalt[10] &&  confirmationIndex==10&&confirmationSubIndex==0){
				$("#cacl2_testtubeSolution").css({opacity:'.5'});
				$("#cacl2_testtubeSolution").animate({top:"221px",height:"20px"},2000);
				$("#cacl2_whitePpt").animate({opacity:'0'},2000);
			}
			setTimeout(function(){
				dropsFall('cacl2_drop','123px','123px','227px');
			},600);
			setTimeout(function(){
				$("#cacl2_Nh4ohCtrlDrag").animate({left:'502px',top:'226px'},function(){
					$("#cacl2_Nh4ohCtrl").addClass("ctrlDroper");
					$("#inference_Div").show();
				});				
			},1000);
			$("#cacl2_Nh4ohCtrlDrag").draggable('disable');
		}
	});
}