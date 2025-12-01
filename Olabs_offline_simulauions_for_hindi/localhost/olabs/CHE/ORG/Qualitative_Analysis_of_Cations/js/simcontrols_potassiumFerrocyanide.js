var label1_potassiumFerrocyanide,label2_potassiumFerrocyanide;
var confirmation_fe_help=[];
var degreepotassiumFerrocyaniderotation=0;
var clockInt_potassiumFerrocyaniderotation;
var clockflagzinc=false;
var solnDivTop_potassiumFerrocyanide;
var solnHeight_potassiumFerrocyanide;
var solnTop_potassiumFerrocyanide;
var clockFlag_lead=false;
var leadHelp_flag=false;
function confirmationpotassiumFerrocyanide(){	
	clearInterval(clockInt_potassiumFerrocyaniderotation);	
	resetpotassiumFerrocyanide();
	$('#confirmation_potassiumFerrocyanide').show();
	$('#boardlabelImg_potassiumFerrocyanide').css({'width': '140px','height': '43px'});
	$('#solutionlabel_potassiumFerrocyanide').css({top:'4px'});
	$("#bottleSoln1_potassiumFerrocyanide").css('display','none');
	switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
		case "4-1-0"://Potassium ferrocyanide test
			label1_potassiumFerrocyanide=dilHCllabel;
			label2_potassiumFerrocyanide=pottasiumferrocyanidelabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperyellowImg.png');			
			if(sampleSalt[result]==sampleSalt[5]){
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#a73d23');
			}else{
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#FFF');
			}
			$("#bottleSoln2_potassiumFerrocyanide").css('background-color','#c4b01d');
			confirmation_fe_help=confirmation_fe_help1;
			boardLabel_Alltest=boardLabel_Laketest;	
		break;
		case "4-1-1"://Potassium sulphocyanide test
			label1_potassiumFerrocyanide=dilHCllabel;
			label2_potassiumFerrocyanide=pottasiumsulphocyanidelabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperredImg.png');
			if(sampleSalt[result]==sampleSalt[5]){
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#a73d23');
			}else{
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#FFF');
			}				
			$("#bottleSoln2_potassiumFerrocyanide").css('background-color','#f84147');
			confirmation_fe_help=confirmation_fe_help2;
			boardLabel_Alltest=boardLabel_Laketest;	
		break;
		case "5-2-0"://Dimethyl glyoxime test
			label1_potassiumFerrocyanide=NH4OHlabel;
			label2_potassiumFerrocyanide=dimethylglyoximeLabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#saltColorChnage_potassiumFerrocyanide").css('background-color','#88ce7e');
			if(sampleSalt[result]==sampleSalt[8]){//Nickel
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#84a977');
			}else {
				if(sampleSalt[result]==sampleSalt[7]){//Copper
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#b92743');
				}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#f8e7ed');
				}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#d7c2b3');
				}
			}				
			$("#bottleSoln2_potassiumFerrocyanide").css({display:'none'});
			confirmation_fe_help=confirmation_ni_help1;
			$('#solutionlabel_potassiumFerrocyanide').css({top:'11px'});
			boardLabel_Alltest=salt_solutioncommon;	
		break;
		case "5-3-0"://Sodium hydroxide-Br2 test--Mn2
		case "5-2-1"://Sodium hydroxide-Br2 test--Nickel
			label1_potassiumFerrocyanide=NaOHlabel;
			label2_potassiumFerrocyanide=brominewaterLabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperredImg.png');							
			$("#bottleSoln2_potassiumFerrocyanide").css('background-color','#b62d22');
			confirmation_fe_help=confirmation_mn_help1;			
			if(groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex=="5-2-1"){				
				$("#burneritems_potassiumFerrocyanide,#burner_potassiumFerrocyanide").css({display:'block'});
				$("#saltColorChnage_potassiumFerrocyanide").css('background-color','#88ce7e');
				if(sampleSalt[result]==sampleSalt[8]){//Nickel
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#84a977');
				}else {
					if(sampleSalt[result]==sampleSalt[7]){//Copper
						$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#b92743');
					}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
						$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#f8e7ed');
					}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
						$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#d7c2b3');
					}
				}
				$('#solutionlabel_potassiumFerrocyanide').css({top:'11px'});
				boardLabel_Alltest=salt_solutioncommon;					
			}else{
				$("#saltColorChnage_potassiumFerrocyanide").css('background-color','#FFF');
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#f8e7ed');
				boardLabel_Alltest=boardLabel_Laketest;	
			}
		break;
		case "5-4-0"://Sodium hydroxide test --zinc
			label1_potassiumFerrocyanide=dilHCllabel;
			label2_potassiumFerrocyanide=NaOHlabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');			
			if(sampleSalt[result]==sampleSalt[10]){//Zinc
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#d7c2b3');
			}else {
				if(sampleSalt[result]==sampleSalt[7]){//Copper
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#b92743');
				}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#f8e7ed');
				}else if(sampleSalt[result]==sampleSalt[8]){//Nickel
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#84a977');
					
				}
			}					
			$("#bottleSoln2_potassiumFerrocyanide").css({display:'none'});
			$("#burneritems_potassiumFerrocyanide,#burner_potassiumFerrocyanide").css({display:'block'});
			confirmation_fe_help[0]=confirmation_fe_help2[0];
			confirmation_fe_help[1]=confirmation_mn_help1[2];
			confirmation_fe_help[2]=confirmation_mn_help1[0];
			boardLabel_Alltest=boardLabel_Laketest;
		break;
		case "5-4-1"://Sodium hydroxide test --zinc
			label1_potassiumFerrocyanide=dilHCllabel;
			label2_potassiumFerrocyanide=pottasiumferrocyanidelabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperyellowImg.png');
			if(sampleSalt[result]==sampleSalt[10]){//Zinc
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#d7c2b3');
			}else {
				if(sampleSalt[result]==sampleSalt[7]){//Copper
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#b92743');
				}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#f8e7ed');
				}else if(sampleSalt[result]==sampleSalt[8]){//Nickel
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#84a977');
					
				}
			}
			$("#bottleSoln2_potassiumFerrocyanide").css('background-color','#c4b01d');
			$("#burneritems_potassiumFerrocyanide,#burner_potassiumFerrocyanide").css({display:'block'});
			confirmation_fe_help[0]=confirmation_fe_help2[0];
			confirmation_fe_help[1]=confirmation_mn_help1[2];
			confirmation_fe_help[2]=confirmation_fe_help1[1];
			boardLabel_Alltest=boardLabel_Laketest;
		break;
		case"5-3-1"://Lead peroxide test:
			label1_potassiumFerrocyanide=groupThreelabel[3];
			label2_potassiumFerrocyanide=leadperoxidelabel;
			$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
			$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
			$("#dropperImg_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperyellowImg.png');
			$("#dropper2Img_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/dropperredImg.png');			
			if(sampleSalt[result]==sampleSalt[9]){//Manganes
				$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#41301e');
			}else {
				if(sampleSalt[result]==sampleSalt[7]){//Copper
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#b92743');
				}else if(sampleSalt[result]==sampleSalt[8]){//Nickel
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#84a977');			
				}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
					$("#saltSolnImg_potassiumFerrocyanide").css('background-color','#d7c2b3');
				}
			}  
			$("#bottleSoln2_potassiumFerrocyanide").css('background-color','#eb4c22');
			$("#bottleSoln1_potassiumFerrocyanide").css('display','block');
			$("#burneritems_potassiumFerrocyanide,#burner_potassiumFerrocyanide").css({display:'block'});			
			boardLabel_Alltest=boardlabel_leadTest;
			$('#boardlabelImg_potassiumFerrocyanide').css({'width': '149px','height': '46px'});	
		break;
		
	}	
	solnDivTop_potassiumFerrocyanide=$('#saltSoln_potassiumFerrocyanide').position().top;
	solnHeight_potassiumFerrocyanide=$('#saltSoln_potassiumFerrocyanide').height();
	solnTop_potassiumFerrocyanide=$('#saltSolnImg_potassiumFerrocyanide').position().top;
	$('#solutionlabel_potassiumFerrocyanide').html(boardLabel_Alltest);
	$('#bottleLabel_potassiumFerrocyanide').html(label1_potassiumFerrocyanide);
	$('#bottleLbl_potassiumFerrocyanide').html(label1_potassiumFerrocyanide);
	$('#bottleLbl2_potassiumFerrocyanide').html(label2_potassiumFerrocyanide);
	$('#bottle2Label_potassiumFerrocyanide').html(label2_potassiumFerrocyanide);
	dragSampleSolnDropper('dropper_potassiumFerrocyanide',8,184,23,471);		
}
//*--Function to start drag events---------
function dragSampleSolnDropper(sampleid,itemtop,itemleft,originaltop,originalleft){	
	$('#'+sampleid).draggable({
		start:function(event, ui) {			
			$('#'+sampleid).css({zIndex:2});
			$('#Inference').css({display:'none'});
			clearInterval(clockInt_potassiumFerrocyaniderotation);	
			if(sampleid=='dropper2_potassiumFerrocyanide'){//Potassium ferrocyanide 	
				switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
					case "4-1-0"://Potassium ferrocyanide test
					case "5-4-1"://Potassium ferrocyanide test
						$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
						$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
					break;
					case "4-1-1"://Potassium sulphocyanide test
					case "5-3-0"://Sodium hydroxide-Br2 test
					case "5-2-1"://Sodium hydroxide-Br2 test
					case "5-3-1"://Lead peroide test		
						$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/reddrop.png');
						$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/reddrop.png');
					break;
				}
				
			}else{
				if(groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex=="5-3-1"){
					$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
					$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/yellowdrop.png');
				}
				else
				{
					$("#drop1_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
					$("#drop2_potassiumFerrocyanide").attr('src',simPath+'images/potassiumFerrocyanide/drop.png');
				}
			}
		},
		stop : function(event, ui) {			
			//alert(this.offsetTop+"---"+this.offsetLeft);
			if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
				$("#drop2_potassiumFerrocyanide,#drop1_potassiumFerrocyanide,#saltSoln_potassiumFerrocyanide").stop(true);
				$("#saltSolnImg_potassiumFerrocyanide").stop(true);
				$("#dropperImg_potassiumFerrocyanide,#dropper2Img_potassiumFerrocyanide").stop(true);
				$('#'+sampleid).draggable({ disabled: true });				
				$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
				$('#drop2_potassiumFerrocyanide').css({display:'block'});
				$('#drop1_potassiumFerrocyanide').css({top:mainTop+94+'px'});
				$('#drop2_potassiumFerrocyanide').css({top:mainTop+107+'px'});
				$('#drop2_potassiumFerrocyanide').animate({top:mainTop+146+'px'},100,function(){
					$('#drop2_potassiumFerrocyanide').css({display:'none'});
					$('#drop1_potassiumFerrocyanide').css({display:'block'});
					$('#drop1_potassiumFerrocyanide').animate({top:mainTop+197+'px'},1000,function(){					
						$('#drop1_potassiumFerrocyanide').css({display:'none'});
						$('#'+sampleid).css({zIndex:0});
						$('#'+sampleid).animate({top:originaltop+'px',left:originalleft+'px'});						
						solnTop_potassiumFerrocyanide=solnTop_potassiumFerrocyanide+4;
						solnDivTop_potassiumFerrocyanide=solnDivTop_potassiumFerrocyanide-4;
						solnHeight_potassiumFerrocyanide=solnHeight_potassiumFerrocyanide+3;
						$('#saltSolnImg_potassiumFerrocyanide').animate({top:solnTop_potassiumFerrocyanide+'px'});									
						$('#saltSoln_potassiumFerrocyanide').animate({top:solnDivTop_potassiumFerrocyanide+'px',height:solnHeight_potassiumFerrocyanide+'px'});						
						if(sampleid=='dropper_potassiumFerrocyanide'){//dil.HCl	,NaOH
							
							$('#Inference').css({display:'block'});
							$('#dropper2_potassiumFerrocyanide').draggable({ disabled: false });
							dragSampleSolnDropper('dropper2_potassiumFerrocyanide',8,184,179,471);							
							switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
								case "4-1-0"://Potassium ferrocyanide test
								case "4-1-1"://Potassium sulphocyanide test
									if(sampleSalt[result]==sampleSalt[5]){				
										inferenceMsg=confirmation_fe_inference1[0];
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#CCC"}, 1000 );
									}else{
										$('#Inference').css({display:'none'});
									}
								break;
								case "5-2-0"://Dimethyl glyoxime test
									$('#Inference').css({display:'none'});
								break;																	
								case "5-3-0"://Sodium hydroxide-Br2 test								
									inferenceMsg=confirmation_mn_inference1[0];
								break;
								case "5-2-1"://Sodium hydroxide-Br2 test	
									if(sampleSalt[result]==sampleSalt[8]){							
										inferenceMsg=confirmation_ni_inference2[0];
									}else{
										$('#Inference').css({display:'none'});										
									}
								break;
								case "5-4-0"://Sodium hydroxide test --zinc
								case "5-4-1"://Potassium ferrocyanide test --zinc
									$('#Inference').css({display:'none'});									
									if(sampleSalt[result]==sampleSalt[10]){	
										inferenceMsg=confirmation_zn_inference1[0];
									}else{
										inferenceMsg=noreactionInference;
									}
									$("#burnerhelpDiv_potassiumFerrocyanide").css({zIndex:0});																	
									$('#dropper2_potassiumFerrocyanide').draggable({ disabled: true });
								break;
								case "5-3-1"://Lead peroxide Test	
									$('#Inference').css({display:'none'});							
									
								break;
							}
								
						}else{//Potassium ferrocyanide 							
							
							$('#Inference').css({display:'block'});
							switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
								case "4-1-0"://Potassium ferrocyanide test
									if(sampleSalt[result]==sampleSalt[5]){		
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#120060"}, 1000 );
										inferenceMsg=confirmation_fe_inference1[1];
									}else{
										inferenceMsg=noreactionInference;
									}
								break;
								case "4-1-1"://Potassium sulphocyanide test
									if(sampleSalt[result]==sampleSalt[5]){	
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#a70204"}, 1000 );										
										inferenceMsg=confirmation_fe_inference2;
									}else{
										inferenceMsg=noreactionInference;
									}
								break;
								case "5-2-0"://Dimethyl glyoxime test
									if(sampleSalt[result]==sampleSalt[8]){	
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#fb294c"}, 1000 );							
										
										inferenceMsg=confirmation_ni_inference1;
									}else{
										inferenceMsg=noreactionInference;
									}
								break;
								case "5-3-0"://Sodium hydroxide-Br2 test	
									$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#41301e"}, 1000 );							
										
									inferenceMsg=confirmation_mn_inference1[1];
								break;
								case "5-2-1"://Sodium hydroxide-Br2 test	--nickel
									if(sampleSalt[result]==sampleSalt[8]){	
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#88ce7e"}, 1000 );
										inferenceMsg=confirmation_ni_inference2[1];										
									}else{
										inferenceMsg=noreactionInference;
									}							
									$("#burnerhelpDiv_potassiumFerrocyanide").css({zIndex:0});
									$('#Inference').css({display:'none'});
								break;
								case "5-4-0"://Sodium hydroxide-Br2 --zinc
									if(clockflagzinc==false){																									
										if(sampleSalt[result]==sampleSalt[10]){	
											inferenceMsg=confirmation_zn_inference1[1];										
											$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#FFF"}, 1000 );							
										}else{
											inferenceMsg=noreactionInference;											
										}
										$('#dropper2_potassiumFerrocyanide').draggable({ disabled: false });
										clockflagzinc=true;									
									}else{										
										if(sampleSalt[result]==sampleSalt[10]){		
											inferenceMsg=confirmation_zn_inference1[2];
											$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#CCC"}, 1000 );	
										}else{
											$('#Inference').css({display:'none'});
										}						
										$("#dropper2_potassiumFerrocyanide").draggable({ disabled: true });
									}
								break;
								case "5-4-1":	//Potassium ferrocyanide test--zinc																																	
									if(sampleSalt[result]==sampleSalt[10]){		
										inferenceMsg=confirmation_zn_inference2;										
										$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#398d82"}, 1000 );
									}else{											
										inferenceMsg=noreactionInference;
									}							
								break;
								case "5-3-1"://Lead peroxide Test	
									$('#Inference').css({display:'none'});							
									$("#burnerhelpDiv_potassiumFerrocyanide").css({zIndex:0});
								break;							
							}
						
						}	
					});
				})
				if(sampleid=='dropper_potassiumFerrocyanide'){//dil.HCl
					$('#dropperImg_potassiumFerrocyanide').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else{//Potassium ferrocyanide 
					$('#dropper2Img_potassiumFerrocyanide').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}
			}else{
				$('#'+sampleid).css({zIndex:0});
				$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
			}
		}
	})	
	$('#bunorOff_potassiumFerrocyanide').click(function(){
		clearInterval(clockInt_potassiumFerrocyaniderotation);
		$('.flame1_potassiumFerrocyanide').show();
		$('#bunorOn_potassiumFerrocyanide,#flame_potassiumFerrocyanide').css({display:'block'});	
		$('#bunorOff_potassiumFerrocyanide').css({display:'none'});		
		degreepotassiumFerrocyaniderotation=0;
		$('#clock_potassiumFerrocyanide').css({display:'block'});	
		$('#needle_potassiumFerrocyanide').css({display:'block'});
		clockInt_potassiumFerrocyaniderotation= setInterval(needleRotate_potassiumFerrocyanide,20);
	})
	//Function for rotating needle of clock
	function needleRotate_potassiumFerrocyanide(){
		degreepotassiumFerrocyaniderotation=degreepotassiumFerrocyaniderotation+2;	
		document.getElementById("needle_potassiumFerrocyanide").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle_potassiumFerrocyanide").style.webkitTransform = 'rotate(' + degreepotassiumFerrocyaniderotation + 'deg)';
		document.getElementById("needle_potassiumFerrocyanide").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle_potassiumFerrocyanide").style.MozTransform ='rotate('+ degreepotassiumFerrocyaniderotation +'deg)';
		flames_potassiumFerrocyanide();
		if(degreepotassiumFerrocyaniderotation>360){
			clearInterval(clockInt_potassiumFerrocyaniderotation);	
			$('#clock_potassiumFerrocyanide,#needle_potassiumFerrocyanide').css({display:'none'});
			$('#bunorOn_potassiumFerrocyanide,#flame_potassiumFerrocyanide').css({display:'none'});	
			$('#bunorOff_potassiumFerrocyanide').css({display:'block'});
			$("#burnerhelpDiv_potassiumFerrocyanide").css({zIndex:5});
			$('#Inference').css({display:'block'});	
			
			//degreepotassiumFerrocyaniderotation=0;								
			switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
				case "5-2-1"://Sodium hydroxide test --nickel	
					if(sampleSalt[result]==sampleSalt[8]){	
						$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#333"}, 1000 );
					}
				break;
				case "5-4-0"://Sodium hydroxide test --zinc	
				case "5-4-1"://Potassium ferrocyanide test--zinc					
					if(sampleSalt[result]==sampleSalt[10]){		
						$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#CCC"}, 1000 );
					}else{
						$('#Inference').css({display:'none'});	
					}
					$('#dropper2_potassiumFerrocyanide').draggable({ disabled: false });				
				break;
				case "5-3-1"://Lead peroxide Test	
					$('#Inference').css({display:'none'});					
					if(clockFlag_lead==true){							
						$('#Inference').css({display:'block'});	
						if(sampleSalt[result]==sampleSalt[9]){
							inferenceMsg=confirmation_lead_inference;
						}else{
							inferenceMsg=noreactionInference;
						}
					}
					else
					{
						$('#clock_potassiumFerrocyanide,#needle_potassiumFerrocyanide').css({display:'block'});
						if(sampleSalt[result]==sampleSalt[9]){
							$("#saltSolnImg_potassiumFerrocyanide").animate({backgroundColor: "#e735e1"}, 5000 );
						}
						degreepotassiumFerrocyaniderotation=0;
						clockInt_potassiumFerrocyaniderotation= setInterval(needleRotate_potassiumFerrocyanide,20);
						clockFlag_lead=true;
					}
					
				break;
			}
			
		}	
	}
	//Function to flame
	function flames_potassiumFerrocyanide(){
		if($('.flame1_potassiumFerrocyanide').css('display') == "block"){          
			$('.flame1_potassiumFerrocyanide,.flame3_potassiumFerrocyanide,.flame4_potassiumFerrocyanide').hide();
			$('.flame2_potassiumFerrocyanide').show();         
		}else if($('.flame2_potassiumFerrocyanide').css('display') == "block"){          
			$('.flame1_potassiumFerrocyanide,.flame2_potassiumFerrocyanide,.flame4_potassiumFerrocyanide').hide();
			$('.flame3_potassiumFerrocyanide').show();         
		}else if($('.flame3_potassiumFerrocyanide').css('display') == "block"){          
			$('.flame2_potassiumFerrocyanide,.flame3_potassiumFerrocyanide,.flame1_potassiumFerrocyanide').hide();
			$('.flame4_potassiumFerrocyanide').show(); 
		}else if($('.flame4_potassiumFerrocyanide').css('display') == "block"){          
			$('.flame2_potassiumFerrocyanide,.flame3_potassiumFerrocyanide,.flame4_potassiumFerrocyanide').hide();
			$('.flame1_potassiumFerrocyanide').show(); 
		}	
		if(degreepotassiumFerrocyaniderotation>355){		
			$('.flame2_potassiumFerrocyanide,.flame3_potassiumFerrocyanide,.flame4_potassiumFerrocyanide,.flame1_potassiumFerrocyanide').hide();	
			 
		}
	}
	
}
//Function to reset items on the stage
function resetpotassiumFerrocyanide(){
	clockflagzinc=false;
	clockFlag_lead=false;
	degreepotassiumFerrocyaniderotation=0;
	$('#clock_potassiumFerrocyanide,#needle_potassiumFerrocyanide').css({display:'none'});
	clearInterval(clockInt_potassiumFerrocyaniderotation);	
	$("#drop2_potassiumFerrocyanide,#drop1_potassiumFerrocyanide,#saltSoln_potassiumFerrocyanide").stop(true);
	$("#saltSolnImg_potassiumFerrocyanide").stop(true);
	$("#dropperImg_potassiumFerrocyanide,#dropper2Img_potassiumFerrocyanide").stop(true);
	$("#dropper_potassiumFerrocyanide").draggable({ disabled: false });
	$('#dropper2_potassiumFerrocyanide').draggable({ disabled: true });
	$('#dropper_potassiumFerrocyanide').css({top:'23px',left:'471px'});
	$('#dropper2_potassiumFerrocyanide').css({top:'179px',left:'471px'});
	$('#dropper_potassiumFerrocyanide,#dropper2_potassiumFerrocyanide').css({zIndex:0});
	$('#saltSoln_potassiumFerrocyanide').css({top:'199px',height:'22px'});				
	$('#saltSolnImg_potassiumFerrocyanide').css({top:'-92px'});			
	$("#bottleSoln2_potassiumFerrocyanide").css({display:'block'});
	$('#dropperImg_potassiumFerrocyanide,#dropper2Img_potassiumFerrocyanide').css({top:'51px',height:'42px',left:'5px'});
	$("#saltSolnImg_potassiumFerrocyanide").css('opacity',1);
	$("#saltColorChnage_potassiumFerrocyanide").css('opacity',1);
	$("#burneritems_potassiumFerrocyanide,#burner_potassiumFerrocyanide").css({display:'none'});
	$("#burnerhelpDiv_potassiumFerrocyanide").css({zIndex:5});
	$('#bunorOn_potassiumFerrocyanide,#flame_potassiumFerrocyanide').css({display:'none'});	
	$('#bunorOff_potassiumFerrocyanide').css({display:'block'});
	$('.flame1_potassiumFerrocyanide,.flame2_potassiumFerrocyanide,.flame3_potassiumFerrocyanide,.flame4_potassiumFerrocyanide').hide();
	$("#bottleSoln1_potassiumFerrocyanide").css('display','none');
		
}


