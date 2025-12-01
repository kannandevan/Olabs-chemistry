// Ferric chloride test( Confirmation of Acetate)
function rotateTesttube(ID){
	//rotate the testtube for getting the stirring effect
	document.getElementById(ID).style.webkitTransformOrigin='50% 50%';
	document.getElementById(ID).style.webkitTransform = 'rotate(' + rotaeAngle + 'deg)';
	document.getElementById(ID).style.MozTransformOrigin='50% 50%';
	document.getElementById(ID).style.MozTransform ='rotate('+ rotaeAngle +'deg)';
}
function ferricChlorideTest(){
	$("#fericChloride").show(); 
	$('#fericHeading').html(fericChlorideLabel[0]);
	$('#fericHclLbl').html(fericChlorideLabel[1]);
	$('#fericSaltSol').html(fericChlorideLabel[2]);
	$('#fericSaltSol1').html(fericChlorideLabel[3]);
	$('#fericWaterBottleLbl').html(fericChlorideLabel[4]);
	$('#fericHclBottleLbl').html(fericChlorideLabel[5]);;
	$('#fericSaltSolTxt').html(commomLabels[6]);
	
	
	$("#fericPpt").css({opacity:'0'});
	$("#fericSol2").css({left:'2px',top:'0px',width:'18px',height:'0px','background-color':'#d93b37',opacity:'0.9','border-radius':'0px 0px 10px 10px','z-index':'0'});
	$( "#fericDropperWraper1" ).draggable({ disabled: false });
	$( "#fericDropperWraper2" ).draggable({ disabled: false });
	$( "#fericDropperWraper3" ).draggable({ disabled: false });
	$( "#fericDropperWraper4" ).draggable({ disabled: false });
	$("#fericDrop1").css({'visibility':'hidden',top:'9px'});
	$("#fericDrop2").css({'visibility':'hidden',top:'9px'});
	$("#fericDrop3").css({'visibility':'hidden',top:'-22px'});
	$("#fericDrop4").css({'visibility':'hidden',top:'-22px'});
	$("#feric_testtubeSolutions").css({height:'0px',top:'240px',opacity:'0.8'});
	$("#fericFinalSol").css({top:'178px'});
	$("#fericFinalSol2").css({top:'121px'});
	$("#ferricTesttube1").css({top:'-22px'});
	$("#fericSol").css({left:'2px',top:'107px',width:'18px',height:'21px','background-color':'#FFFFFF',opacity:'0.9','border-radius':'0px 0px 5px 5px',visibility:'hidden'});
	$( "#fericDropperWraper1" ).draggable({ revert: "invalid",containment:"#canvasBox",
		drag:function(){
			$("#fericDropper1").attr("class","droppers");
			$("#fericDrop1").attr("class","drops");
			$("#fericDropper1").css({"z-index":"7"});
		},
		stop:function(){
			$("#fericDropper1").attr("class","droperCtrl");
			$("#fericDrop1").attr("class","dropsCtrl");
			$("#fericDropper1").css({"z-index":"0"});
		}
	});
	$("#fericDroperDrop1").droppable({accept:"#fericDropperWraper1",
		drop:function(event,ui){
			$("#fericDropperWraper1").css({
				left:"275px"
			});
			$("#fericDrop1").css('visibility', 'visible');
			$("#fericDrop1").animate({
					top:"227px",
			},function(){
				$("#fericSol").css({visibility:"visible",});
				$("#fericDrop1").css('visibility', 'hidden');
				$( "#fericDropperWraper1" ).animate({
					left:"413px",
					top:"8px"
				});
				$( "#fericDropperWraper1" ).draggable('disable');
				$( "#fericDropperWraper2" ).draggable('enable');
			}
			);
		}
	});
	$( "#fericDropperWraper2" ).draggable({ revert: "invalid",containment:"#canvasBox",
		drag:function(){
			$("#fericDropper2").attr("class","droppers");
			$("#fericDrop2").attr("class","drops");
			$("#fericDropper2").css({"z-index":"7"});
		},
		stop:function(){
			$("#fericDropper2").attr("class","droperCtrl");
			$("#fericDrop2").attr("class","dropsCtrl");
			$("#fericDropper2").css({"z-index":"0"});
		}
	});
	$( "#fericDropperWraper2" ).draggable('disable');
	$("#fericDroperDrop2").droppable({accept:"#fericDropperWraper2",
		drop:function(event,ui){
			$("#fericDropperWraper2").css({
				left:"275px"
			});
			$("#fericDrop2").css('visibility', 'visible');
			$("#fericDrop2").animate({
					top:"227px",
			},function(){
				$("#fericSol").animate({top:"88px",height:"41px"});
				$("#fericSol").css({"background-color":"#d93b37"});
				$("#ferricTesttube1").animate({top:"-41px",});
				$("#fericDrop2").css('visibility', 'hidden');
				$( "#fericDropperWraper2" ).animate({
					left:"506px",
					top:"8px"
				});
				$( "#fericFunnel" ).draggable('enable');
				$( "#fericDropperWraper2" ).draggable('disable');
			}
			);
		}
	});
	$( "#fericFunnel" ).draggable({containment:"#canvasBox",
		stop:function(){
			$( "#fericFunnel" ).animate({left:"310px",top:"173px"});
			$( "#fericTesttubeWrap1" ).draggable('enable');
		}
	});
	$( "#fericFunnel" ).draggable('disable');
	$( "#fericTesttubeWrap1" ).draggable({containment:"#canvasBox",//Dragging of first test tube
		stop:function(){
			rotaeAngle=0;
			$( "#fericTesttubeWrap1" ).animate({left:"258px",top:"91px"});
			fericClr=setInterval(function(){
				rotaeAngle++;
				rotateTesttube("fericTesttubeWrap1");
				if(rotaeAngle==95){
					clearInterval(fericClr);
					$("#fericSol").animate({
						"border-top-left-radius":"22px",
						width:"5px",
						left:"13px",
						height:"125px",
						top:"0px"
					},function(){
						$("#fericFinalSol").animate({
							height:"150px",
						});
						$("#fericSol").animate({
							height:"0px",
						}, function(){
							$("#fericFinalSol").animate({
								height:"0px",
								top:"311px",
							});
							$("#fericSol2").animate({
								height:"41px",
								top:"-45px",
							},function(){
								rotaeAngle=0;
								rotateTesttube("fericTesttubeWrap1");
								$("#fericTesttubeWrap1").animate({
									left:"273px",
									top:"191px"
								},function(){
									$("#fericFunnel").animate({ 
										left:"450px",
										top:"133px"
									});
									$( "#fericTesttubeWrap1" ).draggable('disable');
									$( "#fericFunnel" ).draggable('disable');
									$( "#fericTesttubeWrap2" ).draggable('enable');
									if(sampleSalt[result]==sampleSalt[9] &&  confirmationIndex==9&&confirmationSubIndex==2){
										inferenceMsg=fericChlorideLabel[6];
									}else{
										inferenceMsg=fericChlorideLabel[9];
									}
									$("#inference_Div").show();
								});
							});
						});
						$("#ferricTesttube1").animate({
							top:"0px"
						});
						//fericSol2
					});
					$("#ferricTesttube1").animate({
						top:"-124px"
					})
					
					
					
				}
			},10);
		}
		
	});
	$( "#fericTesttubeWrap1" ).draggable('disable');
	$( "#fericTesttubeWrap2" ).draggable({containment:"#canvasBox",//Dragging of second test tube.
		drag:function(){
			$("#inference_Div").hide();
		},
		stop:function(){
			rotaeAngle=0;
			$( "#fericTesttubeWrap2" ).animate({left:"180px",top:"43px"});
			fericClr1=setInterval(function(){
				rotaeAngle--;
				rotateTesttube("fericTesttubeWrap2");
				if(rotaeAngle==-95){console.log(rotaeAngle);
					clearInterval(fericClr1);
					$("#fericSol2").animate({
						"border-top-right-radius":"22px",
						width:"5px",
						height:"125px",
						top:"-131px"
					},function(){
						$("#fericFinalSol2").animate({
							height:"118px",
						},function(){
							$("#fericFinalSol2").animate({
								height:"0px",
								top:"239px"
							});
							$("#feric_testtubeSolutions").animate({
								height:"15px",
								top:"225px"
							});
							$( "#fericDropperWraper3" ).draggable('enable');
							$( "#fericTesttubeWrap2" ).draggable('disable');
						});
						$("#fericSol2").animate({
							height:"70px",
						},function(){
							var clr=setInterval(function(){
								rotaeAngle++;
								rotateTesttube("fericTesttubeWrap2");
								if(rotaeAngle==0){
									clearInterval(clr);
								}
							},10);
							$("#fericSol2").animate({
								width:"18px",
								height:"21px",
								top:"-24px",
								left:"3px",
								"border-top-right-radius":"0"
							},function(){
								$("#fericTesttubeWrap2").animate({
									left:"323px",
									top:"191px"
								});
							});
						});
					});
				}
			},10);
		}
	});
	$( "#fericTesttubeWrap2" ).draggable('disable');

	$( "#fericDropperWraper3" ).draggable({ revert: "invalid",containment:"#canvasBox",
		drag:function(){
			$("#fericDropper3").attr("class","droppers");
			$("#fericDrop3").attr("class","drops");
			$("#fericDrop3").css({"left":"3px",top:"42px"});
			$("#fericDropper3").css({"z-index":"7"});
		},
		stop:function(){
			$("#fericDropper3").attr("class","droperCtrl");
			$("#fericDrop3").attr("class","dropsCtrl");
			$("#fericDrop3").css({"left":"5px",top:"-22px"});
			$("#fericDropper3").css({"z-index":"0"});
		}
	});
	$( "#fericDropperWraper3" ).draggable('disable');
	$("#fericDroperDrop3").droppable({accept:"#fericDropperWraper3",
		drop:function(){
			$("#fericDrop3").css('visibility', 'visible');
			$("#fericDrop3").animate({
				top:"176px",
			},function(){
				$("#fericDrop3").css('visibility', 'hidden');
				$( "#feric_testtubeSolutions" ).animate({
					height:"25px",
					top:"215px"
				});
				$( "#fericDropperWraper3" ).animate({"left": "430px","top":"223px"});
				$( "#fericDropperWraper3" ).draggable({ disabled: true });
			}
			);
			$("#fericBurnerOff").attr("onclick","fericFlameOn()");
			$("#fericDropperWraper4" ).draggable('enable');			
		}
	});
	$( "#fericDropperWraper4" ).draggable({ revert: "invalid",containment:"#canvasBox",
		drag:function(){
			$("#inference_Div").hide();
			$("#fericDropper4").attr("class","droppers");
			$("#fericDrop4").attr("class","drops");
			$("#fericDrop4").css({"left":"3px",top:"42px"});
			$("#fericDropper4").css({"z-index":"7"});
		},
		stop:function(){
			$("#fericDropper4").attr("class","droperCtrl");
			$("#fericDrop4").attr("class","dropsCtrl");
			$("#fericDrop4").css({"left":"5px",top:"-22px"});
			$("#fericDropper4").css({"z-index":"0"});
		}
	});
	$( "#fericDropperWraper4" ).draggable('disable');
	$("#fericDroperDrop4").droppable({accept:"#fericDropperWraper4",
		drop:function(){
			$("#fericDrop4").css('visibility', 'visible');
			$("#fericDrop4").animate({
				top:"196px",
			},function(){
				$("#fericDrop4").css('visibility', 'hidden');
				if(sampleSalt[result]==sampleSalt[9] &&  confirmationIndex==9&&confirmationSubIndex==2){
					$( "#fericSol2" ).animate({
						"background-color":"#FFFFFF",
						opacity:"0.9"
					});
				}
				$( "#fericDropperWraper4" ).animate({"left": "505px","top":"223px"});
				$( "#fericDropperWraper4" ).draggable({ disabled: true });
				if(sampleSalt[result]==sampleSalt[9] &&  confirmationIndex==9&&confirmationSubIndex==2){
					inferenceMsg=fericChlorideLabel[7];
				}else{
					inferenceMsg=fericChlorideLabel[9];
				}
				$("#inference_Div").show();
			}
			);
		}
	});
} 
var ferricClr;
function fericFlameOn(){
	$("#fericBurnerOff").hide();
	$("#fericBurnerOn").css({display:"block"});
	$("#fericFlame").css({display:"block"});
	flamingOfBurner();
	if(sampleSalt[result]==sampleSalt[9] &&  confirmationIndex==9&&confirmationSubIndex==2){
		$( "#feric_testtubeSolutions" ).animate({
			height:"15px",
			top:"225px",
			opacity:'0.4'
		},5000);
		$( "#fericPpt" ).animate({
			opacity:1,
		},6000);
	}
	setTimeout(function(){
		clearInterval(ferricClr);
		$("#fericBurnerOn").css({visibility:"hidden"});
		$("#fericBurnerOff").show();
		$("#fericFlame").css({display:"none"});
		$("#fericBurnerOff").removeAttr("onclick");
		if(sampleSalt[result]==sampleSalt[9] &&  confirmationIndex==9&&confirmationSubIndex==2){
			inferenceMsg=fericChlorideLabel[8];
		}else{
			inferenceMsg=fericChlorideLabel[9];
		}
		$("#inference_Div").show();
		//$( "#esterDropperWraper1" ).draggable("enable");
	},6000);//6000
	
}
function flamingOfBurner(){//flaming of burner
		frame++;
		$("#fericFlame").attr('src',path+"flame"+frame+".png");
		ferricClr=setTimeout("flamingOfBurner()",100);
		if(frame==5){
			frame=1;
		}
}