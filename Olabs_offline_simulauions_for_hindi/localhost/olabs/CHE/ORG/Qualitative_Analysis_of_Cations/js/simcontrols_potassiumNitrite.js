//Confirmation potassium nitrate
function confirmationpotassiumNitrate(){
	var clockInt_potassiumnitrate;
	var degree_potassiumnitrate=0;		
	resetpotassiumNitrate();
	$('#saltsolutionlabel_saltsoln').html(salt_solutioncommon);
	$('#confirmation_potassiumnitrate,#boardlabel_saltsoln').show();	
	$('#bottle2Label_potassiumnitrate').html(aceticacidlabel);
	$('#bottleLabel_potassiumnitrate').html(NH4OHlabel);
	$('#bottleLbl_potassiumnitrate').html(NH4OHexpandlabel);
	$('#bottleLbl2_potassiumnitrate').html(aceticacidexpandlabel);	
	if(sampleSalt[result]==sampleSalt[7]){//Copper
		$("#saltSolnImg_potassiumnitrate").css('background-color','#b92743');
	}else {
		if(sampleSalt[result]==sampleSalt[8]){//Nickel
			$("#saltSolnImg_potassiumnitrate").css('background-color','#84a977');
		}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
			$("#saltSolnImg_potassiumnitrate").css('background-color','#f8e7ed');
		}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
			$("#saltSolnImg_potassiumnitrate").css('background-color','#d7c2b3');
		}
	}
	$('#potassiumnitrateLabel_potassiumnitrate').html(potassiumnitrateexpandlabel);
	$('#dropper_potassiumnitrate').draggable({ disabled: false });	
	dragDropper_potassiumnitrate('dropper_potassiumnitrate',8,184,39,426);
	//*--Function to drag droppper---------
	function dragDropper_potassiumnitrate(sampleid,itemtop,itemleft,originaltop,originalleft){	
		$('#'+sampleid).draggable({
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});		
				
			},
			stop : function(event, ui) {
				if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
					$('#'+sampleid).draggable({ disabled: true });				
					$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
					$('#drop2_potassiumnitrate').css({display:'block'});
					$('#drop1_potassiumnitrate').css({top:mainTop+94+'px'});
					$('#drop2_potassiumnitrate').css({top:mainTop+107+'px'});
					$('#drop2_potassiumnitrate').animate({top:mainTop+146+'px'},100,function(){
						$('#drop2_potassiumnitrate').css({display:'none'});
						$('#drop1_potassiumnitrate').css({display:'block'});
						$('#drop1_potassiumnitrate').animate({top:mainTop+197+'px'},1000,function(){					
							$('#drop1_potassiumnitrate').css({display:'none'});
							$('#'+sampleid).css({zIndex:0});
							$('#'+sampleid).animate({top:originaltop+'px',left:originalleft+'px'});	
							var solnDivTop=$('#saltSoln_potassiumnitrate').position().top;
							var solnHeight=$('#saltSoln_potassiumnitrate').height();
							var solnTop=$('#saltSolnImg_potassiumnitrate').position().top;						
							$('#saltSoln_potassiumnitrate').animate({top:solnDivTop-4+'px',height:solnHeight+3+'px'});				
							$('#saltSolnImg_potassiumnitrate').animate({top:solnTop+4+'px'});
							if(sampleid=='dropper_potassiumnitrate'){//NH4OH
								$('#dropper2_potassiumnitrate').draggable({ disabled: false });
								dragDropper_potassiumnitrate('dropper2_potassiumnitrate',8,184,39,515);	
							}else{//acetic acid
								$('#spatulaKNO3Div_potassiumnitrate').draggable({ disabled: false });
								dragspatula_potassiumnitrate('spatulaKNO3Div_potassiumnitrate',46,189,217,457);	
							}						
						});
					})
					if(sampleid=='dropper_potassiumnitrate'){//Ammonium hydroxide
						$('#dropperImg_potassiumnitrate').delay(100).animate({top:'93px',height:'0px',left:'10px'});
					}else if(sampleid=='dropper2_potassiumnitrate'){//Acetic acid
						$('#dropper2Img_potassiumnitrate').delay(100).animate({top:'93px',height:'0px',left:'10px'});
					}
				}else{
					$('#'+sampleid).css({zIndex:0});
					$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
				}
			}
		})	
	}
	/*function to drag spatula*/
	function dragspatula_potassiumnitrate(sampleid,itemtop,itemleft,originaltop,originalleft){	
		$('#'+sampleid).draggable({		
			stop : function(event, ui) {
				if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
					$('#'+sampleid).draggable({ disabled: true });				
					$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
					$('#powderintube_potassiumnitrate').css({display:'block'});	
					$('.p_potassiumnitrate').animate({top:'190px'},1000,function(){
						$('#powderintube_potassiumnitrate').css({display:'none'});	
					});	
					$("#spatulaKNO3powder_potassiumnitrate").animate({top:'54px',width:'0px',height:'0px'},100,function(){
						$('#spatulaKNO3Div_potassiumnitrate').animate({top:originaltop+'px',left:originalleft+'px'},function(){
							
							$('#spatulaKNO3powder_potassiumnitrate').css({top:'45px',width:'19px',height:'13px'});
							$('#burnerhelpDiv_potassiumnitrate').css({zIndex:0})
							$('#bunorOff_potassiumnitrate').click(function(){						
								$('.flame1_potassiumnitrate').show();
								$('#bunorOn_potassiumnitrate,#flame_potassiumnitrate').css({display:'block'});	
								$('#bunorOff_potassiumnitrate').css({display:'none'});
								if(sampleSalt[result]==sampleSalt[7]){//Copper
									inferenceMsg=potassiumnitrate_inference;
								}else{
									inferenceMsg=noreactionInference;
								}
								$('#clock_potassiumnitrate').css({display:'block'});	
								$('#needle_potassiumnitrate').css({display:'block'});
								clockInt_potassiumnitrate= setInterval(needleRotate_potassiumnitrate,20);
							})
						});
					});
				}else{
					$('#'+sampleid).css({zIndex:0});
					$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
				}
			}
		})	
	}
	//Function for rotating needle of clock
	function needleRotate_potassiumnitrate(){
		degree_potassiumnitrate=degree_potassiumnitrate+2;	
		document.getElementById("needle_potassiumnitrate").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle_potassiumnitrate").style.webkitTransform = 'rotate(' + degree_potassiumnitrate + 'deg)';
		document.getElementById("needle_potassiumnitrate").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle_potassiumnitrate").style.MozTransform ='rotate('+ degree_potassiumnitrate +'deg)';
		flames_potassiumnitrate();
		if(degree_potassiumnitrate>230){
			if(sampleSalt[result]==sampleSalt[7]){//Copper
				$("#saltSolnImg_potassiumnitrate").animate({backgroundColor: "#FF0"}, 1000 );
			}
		}
		if(degree_potassiumnitrate>360){
			clearInterval(clockInt_potassiumnitrate);	
			degree_potassiumnitrate=0;
			
			$('#clock_potassiumnitrate,#needle_potassiumnitrate').css({display:'none'});
			$('#bunorOn_potassiumnitrate,#flame_potassiumnitrate').css({display:'none'});	
			$('#bunorOff_potassiumnitrate').css({display:'block'});
			$("#burnerhelpDiv_potassiumnitrate").css({zIndex:5});
			$('#Inference').css({display:'block'});	
			$('.flame1_potassiumnitrate').hide();
		}	
	}
	//Function to flame
	function flames_potassiumnitrate(){
		if($('.flame1_potassiumnitrate').css('display') == "block"){          
			$('.flame1_potassiumnitrate,.flame3_potassiumnitrate,.flame4_potassiumnitrate').hide();
			$('.flame2_potassiumnitrate').show();         
		}else if($('.flame2_potassiumnitrate').css('display') == "block"){          
			$('.flame1_potassiumnitrate,.flame2_potassiumnitrate,.flame4_potassiumnitrate').hide();
			$('.flame3_potassiumnitrate').show();         
		}else if($('.flame3_potassiumnitrate').css('display') == "block"){          
			$('.flame2_potassiumnitrate,.flame3_potassiumnitrate,.flame1_potassiumnitrate').hide();
			$('.flame4_potassiumnitrate').show(); 
		}else if($('.flame4_potassiumnitrate').css('display') == "block"){          
			$('.flame2_potassiumnitrate,.flame3_potassiumnitrate,.flame4_potassiumnitrate').hide();
			$('.flame1_potassiumnitrate').show(); 
		}	
		if(degreepotassiumFerrocyaniderotation>355){		
			$('.flame2_potassiumnitrate,.flame3_potassiumnitrate,.flame4_potassiumnitrate,.flame1_potassiumnitrate').hide();	
			 
		}
	}
		
	//Function to reset items on the stage
	function resetpotassiumNitrate(){
		clearInterval(clockInt_potassiumnitrate);
		degree_potassiumnitrate=0;
		$('#drop1_potassiumnitrate').css({top:mainTop+94+'px',display:'none'});
		$('#drop2_potassiumnitrate').css({top:mainTop+190+'px',display:'none'});
		$('#drop1_potassiumnitrate,#drop2_potassiumnitrate,#dropper_potassiumnitrate').stop(true);	
		$('#dropper_potassiumnitrate,#dropper_potassiumnitrate,#spatulaKNO3Div_potassiumnitrate').css({zIndex:0});
		$('#dropper_potassiumnitrate').css({top:'39px',left:'426px'});
		$('#dropper2_potassiumnitrate').css({top:'39px',left:'515px'});
		$('#spatulaKNO3Div_potassiumnitrate').css({top:'217px',left:'457px'});
		$('#dropper2_potassiumnitrate').draggable({ disabled: true});
		$('#spatulaKNO3Div_potassiumnitrate').draggable({ disabled: true });
		$('#saltSoln_potassiumnitrate,#saltSolnImg_potassiumnitrate').stop(true);	
		$('#saltSoln_potassiumnitrate').css({top:'199px',height:'22px'});				
		$('#saltSolnImg_potassiumnitrate').css({top:'-92px'});							
		$('#dropperImg_potassiumnitrate,#dropper2Img_potassiumnitrate').stop(true);
		$('#dropperImg_potassiumnitrate').css({top:'51px',height:'42px',left:'5px'});
		$('#dropper2Img_potassiumnitrate').css({top:'51px',height:'42px',left:'5px'});
		$('#powderintube_potassiumnitrate').css({display:'none'});
		$('#spatulaKNO3powder_potassiumnitrate').css({top:'45px',width:'19px',height:'13px'});
		$('.p_potassiumnitrate,#spatulaKNO3powder_potassiumnitrate,#spatulaKNO3Div_potassiumnitrate').stop(true);
		$('.p_potassiumnitrate').css({top:'0px'});
		$('#p1').css({top:'18px'});
		$('#p2').css({top:'55px'});
		$('#p3').css({top:'60px'});
		$('#p4').css({top:'39px'});
		$('#p5').css({top:'45px'});
		$('#p6').css({top:'20px'});
		$('#p7').css({top:'24px'});
		$('#p8').css({top:'34px'});
		$('#p9').css({top:'15px'});
		$('#p10').css({top:'28px'});	
		$('.flame1_potassiumnitrate').hide();	
		$('#clock_potassiumnitrate,#needle_potassiumnitrate').css({display:'none'});
		$('#bunorOn_potassiumnitrate,#flame_potassiumnitrate').css({display:'none'});	
		$('#bunorOff_potassiumnitrate').css({display:'block'});
		$("#burnerhelpDiv_potassiumnitrate").css({zIndex:5});
		$("#saltSolnImg_potassiumnitrate,#dropper2_potassiumnitrate").stop(true);
		$("#saltSolnImg_potassiumnitrate").css({backgroundColor: "#b92743"});
	
	}	
}		
	
