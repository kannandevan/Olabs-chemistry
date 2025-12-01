//Sodium hydroxide Br2 test (Manganese
var flamesInt_sodiumhydroxideBr2;
function confirmationsodiumhydroxideBr2(){	
	resetsodiumhydroxideBr2();
	$('#confirmation_sodiumhydroxideBr2').show();	
	$("#drop1_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
	$("#drop2_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
	if(sampleSalt[result]==sampleSalt[9]){//Manganese
		$("#saltSolnImg_sodiumhydroxideBr2").css('background-color','#f8e7ed');
	}else {
		if(sampleSalt[result]==sampleSalt[7]){//Copper
			$("#saltSolnImg_sodiumhydroxideBr2").css('background-color','#b92743');
		}else if(sampleSalt[result]==sampleSalt[8]){//Nickel
			$("#saltSolnImg_sodiumhydroxideBr2").css('background-color','#84a977');			
		}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
			$("#saltSolnImg_sodiumhydroxideBr2").css('background-color','#d7c2b3');
		}
	}                                                                                                                                                               
	$('#bottleLabel_sodiumhydroxideBr2').html(dilHCllabel);
	$('#bottleLbl_sodiumhydroxideBr2').html(dilHCllabel);
	$('#bottleLbl2_sodiumhydroxideBr2').html(NaOHlabel);
	$('#bottle2Label_sodiumhydroxideBr2').html(NaOHlabel);
	$('#bottle3Label_sodiumhydroxideBr2').html(brominewaterLabel);
	$('#bottleLbl3_sodiumhydroxideBr2').html(brominewaterLabel);
	$('#solutionlabel_sodiumhydroxideBr2').html(boardLabel_Laketest);
	dragdropper_sodiumhydroxideBr2('dropper_sodiumhydroxideBr2',8,184,23,426);		
}
//*--Function to start drag events---------
function dragdropper_sodiumhydroxideBr2(sampleid,itemtop,itemleft,originaltop,originalleft){	
	$('#'+sampleid).draggable({
		start:function(event, ui) {
			$('#'+sampleid).css({zIndex:2});
			$('#Inference').css({display:'none'});
			$('#saltSolnImg_sodiumhydroxideBr2').stop(true);	
			if(sampleid=='dropper2_sodiumhydroxideBr2'){				
				$("#drop1_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/reddrop.png');
				$("#drop2_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/reddrop.png');				
			}else{
				$('.flame2_sodiumhydroxideBr2,.flame3_sodiumhydroxideBr2,.flame4_sodiumhydroxideBr2,.flame1_sodiumhydroxideBr2').hide();	
				$('#bunorOn_sodiumhydroxideBr2,#flame_sodiumhydroxideBr2').css({display:'none'});	
				$('#bunorOff_sodiumhydroxideBr2').css({display:'block'});
				$("#burnerhelpDiv_sodiumhydroxideBr2").css({zIndex:5});	
				$("#drop1_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
				$("#drop2_sodiumhydroxideBr2").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			}
		},
		stop : function(event, ui) {
			if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
				$('#'+sampleid).draggable({ disabled: true });				
				$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
				$('#drop2_sodiumhydroxideBr2').css({display:'block'});
				$('#drop1_sodiumhydroxideBr2').css({top:mainTop+94+'px'});
				$('#drop2_sodiumhydroxideBr2').css({top:mainTop+107+'px'});
				$('#drop2_sodiumhydroxideBr2').animate({top:mainTop+146+'px'},100,function(){
					$('#drop2_sodiumhydroxideBr2').css({display:'none'});
					$('#drop1_sodiumhydroxideBr2').css({display:'block'});
					$('#drop1_sodiumhydroxideBr2').animate({top:mainTop+197+'px'},1000,function(){					
						$('#drop1_sodiumhydroxideBr2').css({display:'none'});
						$('#'+sampleid).css({zIndex:0});
						$('#'+sampleid).animate({top:originaltop+'px',left:originalleft+'px'});	
						var solnDivTop=$('#saltSoln_sodiumhydroxideBr2').position().top;
						var solnHeight=$('#saltSoln_sodiumhydroxideBr2').height();
						var solnTop=$('#saltSolnImg_sodiumhydroxideBr2').position().top;						
						$('#saltSoln_sodiumhydroxideBr2').animate({top:solnDivTop-4+'px',height:solnHeight+3+'px'});				
						$('#saltSolnImg_sodiumhydroxideBr2').animate({top:solnTop+4+'px'});														
						if(sampleid=='dropper_sodiumhydroxideBr2'){//dil.HCl							
							inferenceMsg=sodiumhydroxideBr2_inference;
							$('#Inference').css({display:'none'});
							$("#burnerhelpDiv_sodiumhydroxideBr2").css({zIndex:0});	
						}else if(sampleid=='dropper3_sodiumhydroxideBr2'){								
							if(sampleSalt[result]==sampleSalt[9]){//Manganese
								inferenceMsg=confirmation_mn_inference1[0];
								$("#saltSolnImg_sodiumhydroxideBr2").animate({backgroundColor: "#FFF"}, 1000 ,function(){
									$('#Inference').css({display:'block'});
									$('#dropper2_sodiumhydroxideBr2').draggable({ disabled: false });
									dragdropper_sodiumhydroxideBr2('dropper2_sodiumhydroxideBr2',8,184,179,471);
								});	
							}else{
								$('#Inference').css({display:'none'});
								$('#dropper2_sodiumhydroxideBr2').draggable({ disabled: false });
								dragdropper_sodiumhydroxideBr2('dropper2_sodiumhydroxideBr2',8,184,179,471);
							}
							
						}else if(sampleid=='dropper2_sodiumhydroxideBr2'){								
							if(sampleSalt[result]==sampleSalt[9]){//Manganes
								$("#saltSolnImg_sodiumhydroxideBr2").animate({backgroundColor: "#41301e"}, 1000,function(){
									$('#Inference').css({display:'block'});	
								});
								inferenceMsg=confirmation_mn_inference1[1];
							}else{
								$('#Inference').css({display:'block'});	
								inferenceMsg=noreactionInference;
							}
							
						}
					});
				})
				if(sampleid=='dropper_sodiumhydroxideBr2'){//dil.HCl
					$('#dropperImg_sodiumhydroxideBr2').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else if(sampleid=='dropper3_sodiumhydroxideBr2'){//Blue litmus paper
					$('#dropper3Img_sodiumhydroxideBr2').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else{//NH4OH
					$('#dropper2Img_sodiumhydroxideBr2').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}
			}else{
				$('#'+sampleid).css({zIndex:0});
				$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
			}
		}
	})	
	$('#bunorOff_sodiumhydroxideBr2').click(function(){
		$('.flame1_sodiumhydroxideBr2').show();
		flamesInt_sodiumhydroxideBr2= setInterval(flames_sodiumhydroxideBr2,1);
		$('#bunorOn_sodiumhydroxideBr2,#flame_sodiumhydroxideBr2').css({display:'block'});	
		$('#bunorOff_sodiumhydroxideBr2').css({display:'none'});
		if(sampleSalt[result]==sampleSalt[9]){//Manganese
			$("#saltSolnImg_sodiumhydroxideBr2").animate({backgroundColor: "#CCC"}, 1000 ,function(){			
				$('#Inference').css({display:'block'});	
				$('#dropper3_sodiumhydroxideBr2').draggable({ disabled: false });
				dragdropper_sodiumhydroxideBr2('dropper3_sodiumhydroxideBr2',8,184,23,515);					
			});
		}else{
			$('#dropper3_sodiumhydroxideBr2').draggable({ disabled: false });
			dragdropper_sodiumhydroxideBr2('dropper3_sodiumhydroxideBr2',8,184,23,515);	
		}
		
	})
	//Function to flame
	function flames_sodiumhydroxideBr2(){
		if($('.flame1_sodiumhydroxideBr2').css('display') == "block"){          
			$('.flame1_sodiumhydroxideBr2,.flame3_sodiumhydroxideBr2,.flame4_sodiumhydroxideBr2').hide();
			$('.flame2_sodiumhydroxideBr2').css({display:'block'});   
		}else if($('.flame2_sodiumhydroxideBr2').css('display') == "block"){          
			$('.flame1_sodiumhydroxideBr2,.flame2_sodiumhydroxideBr2,.flame4_sodiumhydroxideBr2').hide();
			$('.flame3_sodiumhydroxideBr2').css({display:'block'});        
		}else if($('.flame3_sodiumhydroxideBr2').css('display') == "block"){          
			$('.flame2_sodiumhydroxideBr2,.flame3_sodiumhydroxideBr2,.flame1_sodiumhydroxideBr2').hide();
			$('.flame4_sodiumhydroxideBr2').css({display:'block'}); 
		}else if($('.flame4_sodiumhydroxideBr2').css('display') == "block"){          
			$('.flame2_sodiumhydroxideBr2,.flame3_sodiumhydroxideBr2,.flame4_sodiumhydroxideBr2').hide();
			$('.flame1_sodiumhydroxideBr2').css({display:'block'}); 
		}
	}
}
//Function to reset items on the stage
function resetsodiumhydroxideBr2(){
	clearInterval(flamesInt_sodiumhydroxideBr2);
	$("#drop2_sodiumhydroxideBr2,#drop1_sodiumhydroxideBr2,#saltSoln_sodiumhydroxideBr2").stop(true);
	$("#saltSolnImg_sodiumhydroxideBr2").stop(true);
	$("#dropperImg_sodiumhydroxideBr2,#dropper2Img_sodiumhydroxideBr2,#dropper3Img_sodiumhydroxideBr2").stop(true);
	$("#dropper_sodiumhydroxideBr2").draggable({ disabled: false });
	$("#dropper2_sodiumhydroxideBr2").draggable({ disabled: true });
	$("#dropper3_sodiumhydroxideBr2").draggable({ disabled: true });
	$('#dropper_sodiumhydroxideBr2').css({top:'23px',left:'426px'});
	$('#dropper2_sodiumhydroxideBr2').css({top:'179px',left:'471px'});
	$('#dropper3_sodiumhydroxideBr2').css({top:'23px',left:'515px'});
	$('#dropper_sodiumhydroxideBr2,#dropper2_sodiumhydroxideBr2,#dropper3_sodiumhydroxideBr2').css({zIndex:0});
			
	$('#dropperImg_sodiumhydroxideBr2,#dropper2Img_sodiumhydroxideBr2,#dropper3Img_sodiumhydroxideBr2').css({top:'51px',height:'42px',left:'5px'});
	$('#saltSoln_sodiumhydroxideBr2,#saltSolnImg_sodiumhydroxideBr2').stop(true);	
	$('#saltSoln_sodiumhydroxideBr2').css({top:'199px',height:'22px'});				
	$('#saltSolnImg_sodiumhydroxideBr2').css({top:'-92px'});
	$("#burnerhelpDiv_sodiumhydroxideBr2").css({zIndex:5});	
	$('.flame2_sodiumhydroxideBr2,.flame3_sodiumhydroxideBr2').hide();	
	$('.flame4_sodiumhydroxideBr2,.flame1_sodiumhydroxideBr2').hide();	
	$('#bunorOn_sodiumhydroxideBr2,#flame_sodiumhydroxideBr2').css({display:'none'});	
	$('#bunorOff_sodiumhydroxideBr2').css({display:'block'});
}