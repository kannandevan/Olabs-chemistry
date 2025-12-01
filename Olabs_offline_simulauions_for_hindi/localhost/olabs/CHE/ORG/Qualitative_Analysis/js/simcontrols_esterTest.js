//Ester test(Confirmation of Acetate)
var frame=0;
var esterClrIntvl;
var flag1=new Boolean(true);
var degree=0;
function flaming(){//flaming of burner
		frame++;
		$("#esterFlame").attr('src',path+"flame"+frame+".png");
		esterClrIntvl=setTimeout("flaming()",100);
		if(frame==5){
			frame=1;
		}
	}
function flameOn(){
	$("#esterBurnerOff").hide();
	$("#esterBurnerOn").css({visibility:"visible"});
	$("#esterFlame").css({visibility:"visible"});
	flaming();
	$('#esterSaltDrag').animate({"opacity":"0"},5000,function(){$('#esterSaltDrag').hide();});
	
	setTimeout(function(){
				clearInterval(esterClrIntvl);
				$("#esterBurnerOn").css({visibility:"hidden"});
				$("#esterBurnerOff").show();
				$("#esterFlame").css({visibility:"hidden"});
				$("#esterBurnerOff").removeAttr("onclick");
				$( "#esterDropperWraper1").draggable("enable");
			},6000);
}
function shakeORstir()
{
	flagstir++
	if(flag1==true){
		if(degree<=12){
			degree++;
		if(degree==12){
			flag1=false;
			}
		}
	}else{
		degree--;
		if(degree==-12){
			flag1=true;
		}
	}
	/*if(degree1<=opacitynum){
		degree1=degree1+.01;
	}*/
	
}

function rotate(){
	//rotate the testtube for getting the stirring effect
	id.style.webkitTransformOrigin='0% 0%';
	id.style.webkitTransform = 'rotate(' + degree + 'deg)';
	id.style.MozTransformOrigin='0% 0%';
	id.style.MozTransform ='rotate('+ degree +'deg)';
}
function esterTest(){ //Ester test(Confirmation of Acetate)
	$('#esterTest').show();
	$("#esterDropperWraper").hide();
	$("#esterBottle").hide();
	$('#ester_h2so4Txt').hide();
	$("#esterDropperWraper1").hide();
	$("#esterBottle1").hide();
	$('#ester_ethylTxt').hide();
	$("#esterBeakerWrapCan").hide();
	$("#esterBeakerCan").hide();
	$("#esterBeakerWaterCan").hide();
	$("#inference_Div").hide();
	$("#ester_tooltip").hide();
	$("#esterConfTxt").hide();
	$( "#ester_h2so4" ).draggable({ disabled: false });
	$( "#ester_dragItem1_1" ).draggable({ disabled: false });
	$( "#esterBeakerWrap" ).draggable({ disabled: false });
	$('#esterSaltDrag').show();
	$("#esterSaltDrag").css({opacity:"1",left:'462px',top:'289px'});
	$("#esterDrop1").css({top:'43px'});
	$("#esterDrop").css({top:'43px'});
	$( "#estr_testtubeSolution").css({width:'25px',height:'13px',left:'3px',top:'-16px'});
	$( "#estr_testtubeSolution").hide();
	$("#esterBeakerWaterCan").css({height:'42px',top:'71px'});
	beakerPlaced=false;
	$( "#esterFinalSol").css({height:"0px",top:"183px"});
	dragItem('ester_h2so4',$("#ester_h2so4").css("left"),$("#ester_h2so4").css("top"));
	dragItem('ester_dragItem1_1',$("#ester_dragItem1_1").css("left"),$("#ester_dragItem1_1").css("top"));
	dragItem('esterBeakerWrap',$("#esterBeakerWrap").css("left"),$("#esterBeakerWrap").css("top"));
	id=document.getElementById("esterTesttubeWrap");
	$( "#esterDropperWraper" ).draggable({disabled: true});
	$( "#esterDropperWraper1" ).draggable({disabled: true});
	//*--Function to start drag events---------
	function dragItem(sampleid,itemLeft,itemTop){
		$('#'+sampleid).draggable({containment:"#canvasBox",
			drag:function(){
				$('#'+sampleid).css({
					zIndex:"5"
				});
			},
			stop : function(event, ui) {
				
				if(sampleid=="ester_h2so4"&&($("#"+sampleid).position().left)<363){
						$('#'+sampleid).hide();
						$("#esterDropperWraper").show();
						$("#esterBottle").show();
						$('#ester_h2so4Txt').show();
						$('#'+sampleid).draggable({ disabled: true });
						
					}else if(sampleid=="ester_dragItem1_1"&&($("#"+sampleid).position().left)<363){
						$('#'+sampleid).hide();
						$("#esterDropperWraper1").show();
						$("#esterBottle1").show();
						$("#ester_ethylTxt").show();
						$('#'+sampleid).draggable({ disabled: true });	
						
					}else if(sampleid=="esterBeakerWrap"){
						$('#'+sampleid).hide();
						$("#esterBeakerWrapCan").show();
						$("#esterBeakerCan").show();
						$("#esterBeakerWaterCan").show();
						$('#'+sampleid).draggable({ disabled: true });	
						beakerPlaced=true;
					}
				$('#'+sampleid).animate({display:'none'},function(){
					$('#'+sampleid).show();
					$('#'+sampleid).css({display:'block',left:itemLeft,top:itemTop });
					
					
				});
				$('#'+sampleid).css({zIndex:"0"});
			}
		})
	}
	$("#esterSaltDrag").draggable({revert: "invalid",containment:"#canvasBox"	});
	$("#esterSaltDrop").droppable({accept:"#esterSaltDrag",
		drop:function(){
			$( "#esterSaltDrag" ).css({
				"left": "117px"
			});
			$( "#esterSaltDrag" ).animate({
				top:"225px",
			});
			
			$( "#esterDropperWraper" ).draggable("enable");
		}
	});
	$( "#esterDropperWraper" ).draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#esterH2so4Drop").droppable({accept:"#esterDropperWraper",
		drop:function(){
			$( "#esterDropperWraper" ).css({
				"left": "119px",
				"top":"16px"
			});
			$("#esterDrop").show();
			$("#esterDrop").animate({
				top:"196px",
			},function(){
				$("#estr_testtubeSolution").css({display:"block",});
				$("#esterDrop").hide();
				$("#esterSaltDrag").css({opacity:"0.5",});
				$( "#esterDropperWraper" ).animate({
					left:"210px",
					top:"31px"
				});
				$( "#esterDropperWraper" ).draggable({ disabled: true });
			}
			);
			
			$("#esterBurnerOff").attr("onclick","flameOn()");
		}
	});
	$( "#esterDropperWraper1" ).draggable({ revert: "invalid",containment:"#canvasBox",});
	$("#esterEthylDrop").droppable({accept:"#esterDropperWraper1",
		drop:function(){
			$( "#esterDropperWraper1" ).css({
				"left": "119px",
				"top":"16px"
			});
			$("#esterDrop1").show();
			$("#esterDrop1").animate({
				top:"196px",
			},function(){
				
				$("#esterDrop1").hide();
				$("#estr_testtubeSolution").css({top:"-21px",height:"18px"});
				$( "#esterDropperWraper1" ).animate({
					left:"310px",
					top:"31px"
				});
				$( "#esterDropperWraper1" ).draggable({ disabled: true });
				$("#esterTesttubeCopy").mousedown(function(){
					if(beakerPlaced){
						$( "#esterTesttubeWrap").css({"z-index":"3",});
					}
				});
				$( "#esterTesttubeWrap" ).draggable({containment:"#canvasBox",
					stop:function(){
						clrShake=setInterval(function(){
							shakeORstir();
							rotate();
						},10);
						setTimeout(function(){
							clearInterval(clrShake);
							degree=0;rotate();
							$( "#esterTesttubeWrap" ).animate({
								left:"271px",
								top:"160px"
							});
							var clrIn =setInterval(function(){
								degree++;
								rotate();
								if(degree==95){
									clearInterval(clrIn);
									$( "#estr_testtubeSolution").animate({
										left:'21px',
										width:'6px',
										top:'-111px',
										height:"108px"
										
									},function(){
									$( "#estr_testtubeSolution").animate({height:"0px"});
									$( "#esterFinalSol").animate({height:"105px"},function(){
													$( "#esterFinalSol").animate({height:"0px",top:"286px"});
													$( "#esterBeakerWaterCan").animate({height:"50px",top:"61px"},function(){
														degree=0;
														rotate();
														$( "#esterTesttubeWrap").css({"z-index":"0",});
														$( "#esterTesttubeWrap" ).animate({
															left:"111px",
															top:"120px"
														},function(){
															beakerPlaced=false;
														});
														$( "#esterInferenceWrap").css({display:"block"});
														if(sampleSalt[result]==sampleSalt[9]){
															inferenceMsg=esterInfMsg[0];
														}else{
															inferenceMsg=esterInfMsg[1];
														}
														$("#inference_Div").show();
													});
												});
									});
								}
							},10);
						},3000);
						
							
						
					}
				});
			}
			);
			
		}
	});
	
}
