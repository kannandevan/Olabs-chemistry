function dropsFall(id,dLeft,dTop,animTo){
	$("#"+id).css({
		left:dLeft,
		top:dTop
	})
	$("#"+id).css({display:"block"});
	$("#"+id).animate({
		top:animTo
	},function(){
		$("#"+id).css({display:"none"});
	});
}
var poFrame=0;
function gassEvolve(id){
	$("#"+id).show();
		$("#"+id).animate({
		opacity:"0.7"
	},1000,function(){
		$("#"+id).animate({
			top:"-30px"
		},7000,function(){
		//$("#"+id).css({display:"none"});
		});
	});
	
}
function potassiumFlaming(){//flaming of burner
		poFrame++;
		$("#potassiumFlame").attr('src',path+"flame"+poFrame+".png");
		esterClrIntvl=setTimeout("potassiumFlaming()",100);
		if(poFrame==5){
			poFrame=1;
		}
	}
function potassiumFlameOn(){
	$("#potassiumBurnerOff").hide();
	$("#potassiumBurnerOn").show();
	$("#potassiumFlame").show();
	potassiumFlaming();
	$("#potassiumSaltDrag").animate({
		opacity:'0'
	},6000);
	if(oxalat){
		$("#potassium_testtubeSolution").animate({"background-color":"#FFFFFF",opacity:'0.5'},7000);
		setTimeout(function(){
			kmno4_boiling();
			kmno4_boiling1();
			kmno4_boiling2();
		},2000);

		setTimeout(function(){
			clearInterval(kmno4_clr);
			clearInterval(kmno4_clr1);
			clearInterval(kmno4_clr2);
			inferenceMsg=concSulphuricLabel[11];
			$("#inference_Div").show();
		},7000);
	}
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#potassiumBurnerOn").hide();
				$("#potassiumBurnerOff").show();
				$("#potassiumFlame").hide();
				$("#potassiumBurnerOff").removeAttr("onclick");
				$("#potassium_h2so4_dropperCtrlDrag").draggable('enable');
				
			},6000);
}
var kmno4_clr,kmno4_clr1,kmno4_clr2,oxalat=false;
function kmno4_boiling(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#kmno4_buble3").show();
	$("#kmno4_buble3").css({top:'22px',left:v1+"px"	});
	$("#kmno4_buble3").animate({top:'0px'},function(){
												$("#kmno4_buble3").hide();
											});
	kmno4_clr=setTimeout(function(){kmno4_boiling()},700);
}
function kmno4_boiling1(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#kmno4_buble1").show();
	$("#kmno4_buble1").css({top:'22px',left:v1+"px"	});
	$("#kmno4_buble1").animate({top:'0px'},function(){
												$("#kmno4_buble1").hide();
											});
	kmno4_clr1=setTimeout(function(){kmno4_boiling1()},1000);
}
function kmno4_boiling2(){
	var v1=Math.floor((Math.random() * 23) + 1);
	$("#kmno4_buble2").show();
	$("#kmno4_buble2").css({top:'22px',left:v1+"px"	});
	$("#kmno4_buble2").animate({top:'0px'},function(){
												$("#kmno4_buble2").hide();
											});
	kmno4_clr2=setTimeout(function(){kmno4_boiling2()},1300);
}
function potassiumPermanganateTest(){
	$("#potassium").show();
	$('#potassiumHeading').html(potassiumLabel[0]);
	$('#potassium_Txt').html(potassiumLabel[1]);
	$('#potassium_SaltTxt').html(commomLabels[0]);
	$('#potassiumH2so4BottleLbl').html(commomLabels[1]);
	$('#potassium_h2so4Txt').html(commomLabels[2]);
	$('#potassiumBottleLbl').html(commomLabels[3]);	
	init_potassiumPermanganateTest();
	function init_potassiumPermanganateTest(){
		$("#potassium_drop").attr('src',simPath+"images/drop.png");
		$("#potassiumSaltDrag").css({left:"454px",top:"51px",opacity:'1'});
		$("#potassiumTooltip").hide();
		$("#potassiumInferenceTxt").hide();
		$("#potassium_testtubeSolution").css({top:"238px",height:"0px","background-color":"#ffffff"});
		$("#potassium_gass").css({top:"159px",opacity:'0',display:'none'});
		$("#potassiumDroperSol").css({height:"22px"});
		$("#inference_Div").hide();
		oxalat=false;
	}
	$("#potassiumSaltDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#potassiumSaltDrop").droppable({accept:"#potassiumSaltDrag",
		drop:function(){
			$("#potassiumSaltDrag").animate({
				left:"110px",
				top:"226px"
			});
			$("#potassium_h2so4_dropperCtrlDrag").draggable('enable');
		}
	});
	$("#potassium_h2so4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#potassium_h2so4_dropperCtrlDrag").animate({left:'463px',top:'119px'},function(){
					$("#potassium_h2so4_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#potassium_h2so4_dropperCtrl").removeClass("ctrlDroper");
		}
	});
	$("#potassium_h2so4_dropperCtrlDrag").draggable('disable');
	var droped=false,droped_1=false;
	$("#potassiumH2so4Drop").droppable({accept:"#potassium_h2so4_dropperCtrlDrag",
		drop:function(){
			if(!droped){
				$("#potassium_h2so4_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
				dropsFall('potassium_drop','123px','66px','227px');
				$("#potassiumH2so4Drop").css({display:"block"});
				setTimeout(function(){
					dropsFall('potassium_drop','123px','66px','227px');
					$("#potassium_testtubeSolution").animate({top:"221px",height:"20px"});
					$("#potassiumSaltDrag").css({opacity:"0.5"});
				},600);
				setTimeout(function(){
					$("#potassium_h2so4_dropperCtrlDrag").animate({left:'463px',top:'119px'});
					$("#potassium_h2so4_dropperCtrl").addClass("ctrlDroper");
				},2000);
				$("#potassium_testtubeSolution").show();
				$("#potassiumBurnerOff").attr("onclick","potassiumFlameOn()");
				$("#potassium_h2so4_dropperCtrlDrag").draggable('disable');
			}else{
				setTimeout(function(){
					$("#potassium_h2so4_dropperCtrlDrag").css({
						left:"107px",
						top:"32px"
					});
					dropsFall('potassium_drop','123px','66px','227px');
					$("#potassium_testtubeSolution").animate({top:"211px",height:"30px"});
					$("#potassium_h2so4_dropperCtrlDrag").draggable('disable');
				},200);
				setTimeout(function(){
					$("#potassium_h2so4_dropperCtrlDrag").animate({left:'463px',top:'119px'});
					$("#potassium_h2so4_dropperCtrl").addClass("ctrlDroper");
				},1000);
				$("#potassium_dropperCtrlDrag").draggable('enable');
				droped_1=true;
			}
			droped=true;
		}
	});
	var pDroped=false;
	$("#potassium_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!pDroped){
				$("#potassium_dropperCtrlDrag").animate({left:'462px',top:'226px'},function(){//462px 226px
					$("#potassium_dropperCtrl").addClass("ctrlDroper");
					$("#potassiumDroperSol").css({
						left:"11px",
						top:"23px",
						width:"4px"
					})
					$("#potassiumDroperSol").css({height:"22px"});
				});
			}
			
		},
		drag:function(){
			$("#potassium_dropperCtrl").removeClass("ctrlDroper");
			$("#potassiumDroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px"
			})
			$("#potassiumDroperSol").css({height:"50px"});
		}
	});
	$("#potassium_dropperCtrlDrag").draggable('disable');
	$("#potassiumDrop").droppable({accept:"#potassium_dropperCtrlDrag",
		drop:function(){
			pDroped=true;
			$("#potassium_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
			$("#potassiumDroperSol").animate({
				top:"90px",
				height:"0px"
			});
			$("#potassium_drop").attr('src',simPath+"images/potassiumPermanganateTest/drop.png");
			dropsFall('potassium_drop','123px','123px','227px');
			setTimeout(function(){
				dropsFall('potassium_drop','123px','123px','227px');
				if(sampleSalt[result]==sampleSalt[6]){//for Chloride
					$("#potassium_gass").attr('src',simPath+"images/potassiumPermanganateTest/smokeColorless.png");
					gassEvolve('potassium_gass');
					setTimeout(function(){
						$("#potassiumInferenceTxt").html(concSulphuricLabel[7]);
						$("#potassiumTooltip").show();
						$("#potassiumInferenceTxt").show();
						inferenceMsg=potassiumLabel[2];
						$("#inference_Div").show();
						$("#confirmation").removeAttr("disabled");
					},1500);
				}else if(sampleSalt[result]==sampleSalt[7]){// for Bromide
					$("#potassium_gass").attr('src',simPath+"images/potassiumPermanganateTest/smokeReddishBrown.png");
					gassEvolve('potassium_gass');
					inferenceMsg=potassiumLabel[3];
					$("#inference_Div").show();
					$("#confirmation").removeAttr("disabled");
				}else if(sampleSalt[result]==sampleSalt[8]){//for Iodide
					$("#potassium_gass").attr('src',simPath+"images/potassiumPermanganateTest/smokeDarkViolet.png");
					gassEvolve('potassium_gass');
					inferenceMsg=potassiumLabel[4];
					$("#inference_Div").show();
					$("#confirmation").removeAttr("disabled");
				}else if(sampleSalt[result]==sampleSalt[10]){//for Oxalate
					oxalat=true;
					$("#potassium_testtubeSolution").animate({"background-color":"#cd00b7"},2000);
					$("#potassiumBurnerOff").attr("onclick","potassiumFlameOn()");
					$("#confirmation").removeAttr("disabled");
				}else{
					$("#potassium_testtubeSolution").animate({"background-color":"#cd00b7"},2000);
					$("#potassiumInferenceTxt").text(toolTipMsgs[0]);
					$("#potassiumTooltip").show();
					$("#potassiumInferenceTxt").show();
					inferenceMsg=potassiumLabel[5];
					setTimeout(function(){
						$("#inference_Div").show();
					},1000);
				}
			},300);
			setTimeout(function(){
				$("#potassium_dropperCtrlDrag").animate({left:'462px',top:'226px'},function(){//462px 226px
					$("#potassium_dropperCtrl").addClass("ctrlDroper");
					$("#potassiumDroperSol").css({
						left:"11px",
						top:"23px",
						width:"4px"
					})
				});
				
			},400);
			$("#potassium_dropperCtrlDrag").draggable('disable');
		}
	});
}