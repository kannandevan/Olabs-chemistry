var label1_Laketest,label2_Laketest,label3_Laketest;
var confirmation_fe_help=[];
function confirmationLakeTest(){	
	resetLaketest();
	$('#confirmation_Laketest').show();
	switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {		
		case "4-2-0"://Lake Test
			label1_Laketest=dilHCllabel;
			label2_Laketest=NH4OHlabel;
			label3_Laketest=bluelitmusLabel;
			$("#drop1_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#saltColorChnage_Laketest").css('background-color','#CCC');
			if(sampleSalt[result]==sampleSalt[6]){	
				$("#saltSolnImg_Laketest").css('background-color','#FFF');
			}else{
				$("#saltSolnImg_Laketest").css('background-color','#a73d23');
			}
			$('#bottleSoln2_Laketest').css({display:'none'});
		break;
		
	}
	$('#bottleLabel_Laketest').html(label1_Laketest);
	$('#bottleLbl_Laketest').html(label1_Laketest);
	$('#bottleLbl2_Laketest').html(label2_Laketest);
	$('#bottle2Label_Laketest').html(label2_Laketest);
	$('#bottle3Label_Laketest').html(label3_Laketest);
	$('#bottleLbl3_Laketest').html(label3_Laketest);
	$('#solutionlabel_Laketest').html(boardLabel_Laketest);
	dragdropper_laketest('dropper_Laketest',8,184,23,426);		
}
//*--Function to start drag events---------
function dragdropper_laketest(sampleid,itemtop,itemleft,originaltop,originalleft){	
	$('#'+sampleid).draggable({
		start:function(event, ui) {
			$('#'+sampleid).css({zIndex:2});
			$('#Inference').css({display:'none'});
			if(sampleid=='dropper3_Laketest'){//Blue litmus solution
				switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
					case "4-2-0"://Lake test
						$("#drop1_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/bluedrop.png');
						$("#drop2_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/bluedrop.png');
					break;
					
				}				
			}else{//dil.HCl,NH4OH
				$("#drop1_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
				$("#drop2_Laketest").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			}
		},
		stop : function(event, ui) {
			if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
				$('#'+sampleid).draggable({ disabled: true });				
				$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
				$('#drop2_Laketest').css({display:'block'});
				$('#drop1_Laketest').css({top:mainTop+94+'px'});
				$('#drop2_Laketest').css({top:mainTop+107+'px'});
				$('#drop2_Laketest').animate({top:mainTop+146+'px'},100,function(){
					$('#drop2_Laketest').css({display:'none'});
					$('#drop1_Laketest').css({display:'block'});
					$('#drop1_Laketest').animate({top:mainTop+197+'px'},1000,function(){					
						$('#drop1_Laketest').css({display:'none'});
						$('#'+sampleid).css({zIndex:0});
						$('#'+sampleid).animate({top:originaltop+'px',left:originalleft+'px'});	
						var solnDivTop=$('#saltSoln_Laketest').position().top;
						var solnHeight=$('#saltSoln_Laketest').height();
						var solnTop=$('#saltSolnImg_Laketest').position().top;						
						$('#saltSoln_Laketest').animate({top:solnDivTop-4+'px',height:solnHeight+3+'px'});				
						$('#saltSolnImg_Laketest').animate({top:solnTop+4+'px'});			
						$('#saltColorChnage_Laketest').animate({top:solnTop+4+'px'});				
						if(sampleid=='dropper_Laketest'){//dil.HCl								
							if(sampleSalt[result]==sampleSalt[6]){
								$("#saltSolnImg_Laketest").animate({opacity:0});
								$("#saltColorChnage_Laketest").animate({opacity:1});
							}
							$('#dropper3_Laketest').draggable({ disabled: false });
							dragdropper_laketest('dropper3_Laketest',8,184,23,515);	
						}else if(sampleid=='dropper3_Laketest'){
							if(sampleSalt[result]==sampleSalt[6]){	
								$("#saltSolnImg_Laketest").animate({opacity:1});
								$("#saltColorChnage_Laketest").animate({opacity:0});													
								$("#saltSolnImg_Laketest").css('background-color','#b8a8e2');
							}
							$('#dropper2_Laketest').draggable({ disabled: false });
							dragdropper_laketest('dropper2_Laketest',8,184,179,471);
						}else{
							if(sampleSalt[result]==sampleSalt[6]){	
								$("#bluePrecipitate_Laketest").css({display:'block'});
								$("#saltSolnImg_Laketest").animate({opacity:0});
								$("#saltColorChnage_Laketest").animate({opacity:1});
								$("#saltColorChnage_Laketest").css('background-color','#CCC');
								inferenceMsg=laketest_inference;
							}else{
								inferenceMsg=noreactionInference;
							}
							$('#Inference').css({display:'block'});
						}
					});
				})
				if(sampleid=='dropper_Laketest'){//dil.HCl
					$('#dropperImg_Laketest').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else if(sampleid=='dropper3_Laketest'){//Blue litmus paper
					$('#dropper3Img_Laketest').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else{//NH4OH
					$('#dropper2Img_Laketest').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}
			}else{
				$('#'+sampleid).css({zIndex:0});
				$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
			}
		}
	})	
}
//Function to reset items on the stage
function resetLaketest(){
	$("#drop2_Laketest,#drop1_Laketest,#saltSoln_Laketest").stop(true);
	$("#saltSolnImg_Laketest,#saltColorChnage_Laketest").stop(true);
	$("#dropperImg_Laketest,#dropper2Img_Laketest,#dropper3Img_Laketest").stop(true);
	$("#dropper_Laketest").draggable({ disabled: false });
	$("#dropper2_Laketest").draggable({ disabled: true });
	$("#dropper3_Laketest").draggable({ disabled: true });
	$('#dropper_Laketest').css({top:'23px',left:'426px'});
	$('#dropper2_Laketest').css({top:'179px',left:'471px'});
	$('#dropper3_Laketest').css({top:'23px',left:'515px'});
	$('#dropper_Laketest,#dropper2_Laketest,#dropper3_Laketest').css({zIndex:0});
	$('#saltSoln_Laketest').css({top:'199px',height:'22px'});				
	$('#saltSolnImg_Laketest').css({top:'-92px'});			
	$('#saltColorChnage_Laketest').css({top:'-92px'});	
	$("#bottleSoln2_Laketest").css({display:'block'});
	$('#dropperImg_Laketest,#dropper2Img_Laketest,#dropper3Img_Laketest').css({top:'51px',height:'42px',left:'5px'});
	$("#saltSolnImg_Laketest").css('opacity',1);
	$("#bluePrecipitate_Laketest").css({display:'none'});

}