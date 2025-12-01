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
var oxPFrame=0;
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
function ox_potassiumFlaming(){//flaming of burner
		oxPFrame++;
		$("#oxalateKMnO4Flame").attr('src',path+"flame"+oxPFrame+".png");
		esterClrIntvl=setTimeout("ox_potassiumFlaming()",100);
		if(oxPFrame==5){
			oxPFrame=1;
		}
	}
function ox_potassiumFlameOn(){
	$("#oxalateKMnO4BurnerOff").hide();
	$("#oxalateKMnO4BurnerOn").show();
	$("#oxalateKMnO4Flame").show();
	ox_potassiumFlaming();
	$("#potassiumSaltDrag").animate({
		opacity:'0'
	},6000);
	setTimeout(function(){
		ox_boiling();
		ox_boiling1();
	},2000);
	setTimeout(function(){
		clearInterval(ox_clr);
		clearInterval(ox_clr1);
		$("#oxalateKMnO4_dropperCtrlDrag").draggable('enable');
	},7000)
	setTimeout(function(){
		$("#oxalateKMnO4Tooltip_1").show();
		$("#oxalateKMnO4InferenceTxt_1").show();
		
	},6000);
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#oxalateKMnO4BurnerOn").hide();
				$("#oxalateKMnO4BurnerOff").show();
				$("#oxalateKMnO4Flame").hide();
				$("#oxalateKMnO4BurnerOff").removeAttr("onclick");
				$("#potassium_h2so4_dropperCtrlDrag").draggable('enable');
				
			},6000);
}
var ox_clr,ox_clr1;
function ox_boiling(){
	var v1=Math.floor((Math.random() * 20) + 1);
	$("#ox_buble3").show();
	$("#ox_buble3").css({top:'12px',left:v1+"px"	});
	$("#ox_buble3").animate({top:'0px'},function(){
												$("#ox_buble3").hide();
											});
	ox_clr=setTimeout(function(){ox_boiling()},700);
}
function ox_boiling1(){
	var v1=Math.floor((Math.random() * 20) + 1);
	$("#ox_buble1").show();
	$("#ox_buble1").css({top:'12px',left:v1+"px"	});
	$("#ox_buble1").animate({top:'0px'},function(){
												$("#ox_buble1").hide();
											});
	ox_clr1=setTimeout(function(){ox_boiling1()},1000);
}
function oxalatePotassiumTest(){
	$("#oxalatePotassium").show();
	$("#inference_Div").hide();
	$('#oxalateKMnO4Heading').html(potassiumLabel[0]);
	$('#oxalateKMnO4_SaltTxt').html(commomLabels[0]);
	$('#oxalateKMnO4H2so4BottleLbl').html(commomLabels[1]);
	$('#oxalateKMnO4_h2so4Txt').html(commomLabels[2]);
	$('#oxalateKMnO4BottleLbl').html(commomLabels[3]);
	$('#oxalateKMnO4_Txt').html(potassiumLabel[1]);
	$('#oxalateKMnO4_SaltTxt').html(commomLabels[0]);
	
	init_oxalatePotassiumTest();
	function init_oxalatePotassiumTest(){
		$("#oxalateKMnO4Tooltip_1").hide();
		$("#oxalateKMnO4SaltDrag").css({left:"454px",top:"51px",opacity:'1'});
		$("#oxalateKMnO4Tooltip").hide();
		$("#oxalateKMnO4InferenceTxt").hide();
		$("#oxalateKMnO4_testtubeSolution").css({top:"238px",height:"0px",'background-color':'#ffffff'});
		$("#potassium_gass").css({top:"159px",opacity:'0',display:'none'});
		$("#oxalateKMnO4DroperSol").css({height:"22px"});
		$("#oxalateKMnO4SaltDrag").css({'z-index':'3'});
		$("#oxalateKMnO4Tooltip").hide();
		$("#oxalateKMnO4InferenceTxt").hide();
		$("#oxalateKMnO4_drop").attr('src',simPath+"images/drop.png");
	}
	$("#oxalateKMnO4SaltDrag").draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#oxalateKMnO4SaltDrop").droppable({accept:"#oxalateKMnO4SaltDrag",
		drop:function(){
			$("#oxalateKMnO4SaltDrag").animate({
				left:"110px",
				top:"226px"
			});
			$("#oxalateKMnO4_h2so4_dropperCtrlDrag").draggable('enable');
		}
	});
	$("#oxalateKMnO4_h2so4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!droped){
				$("#oxalateKMnO4_h2so4_dropperCtrlDrag").animate({left:'463px',top:'119px'},function(){
					$("#oxalateKMnO4_h2so4_dropperCtrl").addClass("ctrlDroper");
				});
			}
			
		},
		drag:function(){
			$("#oxalateKMnO4_h2so4_dropperCtrl").removeClass("ctrlDroper");
			
		}
	});
	$("#oxalateKMnO4_h2so4_dropperCtrlDrag").draggable('disable');
	var droped=false;
	$("#oxalateKMnO4H2so4Drop").droppable({accept:"#oxalateKMnO4_h2so4_dropperCtrlDrag",
		drop:function(){
			if(!droped){
				$("#oxalateKMnO4_h2so4_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
				dropsFall('oxalateKMnO4_drop','123px','66px','227px');
				$("#potassiumH2so4Drop").css({display:"block"});
				setTimeout(function(){
					dropsFall('oxalateKMnO4_drop','123px','66px','227px');
					$("#oxalateKMnO4_testtubeSolution").animate({top:"221px",height:"20px"});
					$("#potassiumSaltDrag").css({opacity:"0.5"});
				},600);
				setTimeout(function(){
					$("#oxalateKMnO4_h2so4_dropperCtrlDrag").animate({left:'463px',top:'119px'});
					$("#oxalateKMnO4_h2so4_dropperCtrl").addClass("ctrlDroper");
				},1000);
				$("#oxalateKMnO4_testtubeSolution").show();
				$("#oxalateKMnO4BurnerOff").attr("onclick","ox_potassiumFlameOn()");
				$("#oxalateKMnO4_h2so4_dropperCtrlDrag").draggable('disable');
			}
			droped=true;
		}
	});
	var ox_pDroped=false;
	$("#oxalateKMnO4_dropperCtrlDrag").draggable({ containment:"#canvasBox",
		revert: function(){
			if(!ox_pDroped){
				$("#oxalateKMnO4_dropperCtrlDrag").animate({left:'462px',top:'226px'},function(){//462px 226px
					$("#oxalateKMnO4_dropperCtrl").addClass("ctrlDroper");
					$("#oxalateKMnO4DroperSol").css({
						left:"11px",
						top:"23px",
						width:"4px"
					})
					$("#oxalateKMnO4DroperSol").css({height:"22px"});
				});
			}
			
		},
		drag:function(){
			$("#oxalateKMnO4_dropperCtrl").removeClass("ctrlDroper");
			$("#oxalateKMnO4DroperSol").css({
				left:"13px",
				top:"50px",
				width:"8px"
			})
			$("#oxalateKMnO4DroperSol").css({height:"50px"});
		},
		start:function(){
			$("#oxalateKMnO4Tooltip_1").hide();
			$("#oxalateKMnO4InferenceTxt_1").hide();
		}
	});
	$("#oxalateKMnO4_dropperCtrlDrag").draggable('disable');
	$("#oxalateKMnO4Drop").droppable({accept:"#oxalateKMnO4_dropperCtrlDrag",
		drop:function(){
			ox_pDroped=true;
			$("#oxalateKMnO4_dropperCtrlDrag").css({
					left:"107px",
					top:"32px"
				});
			$("#oxalateKMnO4DroperSol").animate({
				top:"90px",
				height:"0px"
			});
			$("#oxalateKMnO4_drop").attr('src',simPath+"images/potassiumPermanganateTest/drop.png");
			dropsFall('oxalateKMnO4_drop','123px','123px','227px');
			setTimeout(function(){
				$("#oxalateKMnO4_testtubeSolution").animate({'background-color':'#cd00b7'});
				$("#oxalateKMnO4SaltDrag").css({'z-index':'0'});
				if(sampleSalt[result]==sampleSalt[10] &&  confirmationIndex==10&&confirmationSubIndex==1){
					$("#oxalateKMnO4_testtubeSolution").animate({'background-color':'#FFFFFF'},3000,function(){
					$("#oxalateKMnO4Tooltip").show();
					$("#oxalateKMnO4InferenceTxt").show();
					});
					inferenceMsg=potassiumLabel[6];
				}else{
					inferenceMsg=potassiumLabel[7];
				}
				
				$("#inference_Div").show();
				
			},400);
			setTimeout(function(){
				$("#oxalateKMnO4_dropperCtrlDrag").animate({left:'462px',top:'226px'},function(){//462px 226px
					$("#oxalateKMnO4_dropperCtrl").addClass("ctrlDroper");
					$("#oxalateKMnO4DroperSol").css({
						left:"11px",
						top:"23px",
						width:"4px"
					})
				});
				
			},400);
			$("#oxalateKMnO4_dropperCtrlDrag").draggable('disable');
		}
	});
}