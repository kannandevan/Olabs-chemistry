//Charcoal Cavity test
var stopFlag,stirmix_Int;
var carcoalflag;
var mixFlag;
var mixtureFlag;
var sampleLeft1;
var sampleLeft2;
var clockInt,degreecharcoalcavity;
var oflaming_charcoalcavity;
var rflaming_charcoalcavity;
var blowflaming_charcoalcavity;
var clockFlag_charcoalcavity,clockFlag2_charcoalcavity;	
var nextClickflag_charcoalcavity=false;
function charcoalcavity(){
	resetcharcoalcavity();
	$('#charcoalcavityDiv,#boardlabel_saltsoln').show();
	$('#saltsolutionlabel_saltsoln').html(smell_label[0]);
	$('#boardlabel_saltsoln').css({top:'256px',left:'139px'});
	$('#expHeading').html(Preliminary_Array[3]);
	$('#na2co3Label_charcoalcavity').html(charcoalcavitylabel[0]);
	$('#charcoalLabel_charcoalcavity').html(charcoalcavitylabel[1]);
	$('#nextbtnLabel_charcoalcavity').html(charcoalcavitylabel[6]);
	$('#waterLabel_charcoalcavity,#waterLblonBottle_charcoalcavity').html(charcoalcavitylabel[2]);
	$('#blowpipeLabel_charcoalcavity').html(charcoalcavitylabel[3]);
	$('#forcepLabel_charcoalcavity').html(charcoalcavitylabel[4]);
	$('#rodLabel_charcoalcavity').html(charcoalcavitylabel[5]);
	$('#salt').css({display:'block',top:'298px',left:'75px',width:'40px',height:'14px'});
	dragItem_charcoalcavity('spatulana2co3Div_charcoalcavity',241,91,8,460);	
	//Drag spatula to add sodium carbonate into the watchglass
	function dragItem_charcoalcavity(sampleID,itemTop,itemLeft,orginalTop,orginalLeft){
		$("#"+sampleID).draggable({//Sodium carbonate spatula
			start:function(event, ui) {
				$("#"+sampleID).css({zIndex:3});			
			},
			stop:function(event,ui){
				//alert(this.offsetTop+"---"+this.offsetLeft);					
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+310 && this.offsetLeft>=mainLeft+sampleLeft1 &&this.offsetLeft<=mainLeft+sampleLeft2){	
					if(sampleID=='spatulana2co3Div_charcoalcavity'){//Sodium carbonate spatula						
						if(carcoalflag==true){
							$("#"+sampleID).draggable({ disabled: true });
							$("#"+sampleID).css({top:itemTop+'px',left:itemLeft+'px'});
							$("#spatulana2co3powder_charcoalcavity").animate({top:'54px',width:'0px',height:'0px'},1000);
							$('#na2co2onstage_charcoalcavity').animate({top:'298px',left:'73px',width:'46px',height:'14px'},1000,function(){	
								$('#spatulana2co3Div_charcoalcavity').animate({top:'8px',left:'460px'},1000,function(){
									$('#glassrod_charcoalcavity').draggable({ disabled: false });
									dragItem_charcoalcavity('glassrod_charcoalcavity',241,91,171,432);						
									
								});							
							});	
							carcoalflag=false;						
						}else if(mixFlag==true){
							$("#"+sampleID).css({top:itemTop+5+'px',left:itemLeft+'px'});
							$('#spatulana2co3powder_charcoalcavity').attr('src',simPath+"images/charcoalcavity/"+random_spatulasalt[result]);
							$('#spatulana2co3powder_charcoalcavity').css({top:'45px',width:'19px',height:'13px'})
							sampleLeft2=370;
							sampleLeft1=180;
							mixFlag=false;
							mixtureFlag=true;
						}else if(mixtureFlag==true){
							$("#"+sampleID).css({top:'236px',left:'288px'});							
							$("#charcoalmix_charcoalcavity").attr('src',simPath+"images/charcoalcavity/"+random_saltmix[result]);
							$("#charcoalmix_charcoalcavity").css({display:'block'});
							$("#charcoalmix_charcoalcavity").animate({top: '292px',left: '279px',width: '30px',height: '5px'},1000);
							$("#spatulana2co3powder_charcoalcavity").animate({top:'54px',width:'0px',height:'0px'},1000,function(){
								$('#spatulana2co3Div_charcoalcavity').animate({top:'8px',left:'460px'},function(){
									$('#spatulana2co3powder_charcoalcavity').attr('src',simPath+"images/charcoalcavity/whiteSpatula.png");
									$('#spatulana2co3powder_charcoalcavity').css({top:'45px',width:'19px',height:'13px'});
								});
								$('#water_charcoalcavity').draggable({ disabled: false });
								dragWaterBottle_charcoalcavity();
									
								
							});
							$("#"+sampleID).draggable({ disabled: true });
							mixtureFlag=false;
						}
					}else if(sampleID=='glassrod_charcoalcavity'){//Glass rod
						$("#"+sampleID).draggable({ disabled: true });
						$('#'+sampleID).css({zIndex:0});
						$('#rodStage_charcoalcavity').css({display:'block'});
						$('#glassrod_charcoalcavity').css({display:'none'});
						$('#glassrod_charcoalcavity').css({top:orginalTop+'px',left:orginalLeft+'px'});	
						//alert()
						rodRotate();
					}
					
				}else{
					$("#"+sampleID).css({zIndex:1});
					if(mixtureFlag==true){
						$("#"+sampleID).css({top:'246px',left:'91px'});
					}else{					
						$("#"+sampleID).css({top:orginalTop+'px',left:orginalLeft+'px'});
					}
					
				}
			}
		});
	}
	//function to rotate rod
	function rodRotate(){
		$('.rodrotation').css({//rotate rod
		  '-webkit-animation': 'myOrbit 1s linear infinite', 
		  '-moz-animation': 'myOrbit 1s linear infinite',
		  '-o-animation': 'myOrbit 1s linear infinite', 
		  'animation': 'myOrbit 1s linear infinite'
		})
		stopFlag=0;		
		stirmix_Int=setInterval(stirMixture,200);//stir the mixture
	}
	//*--Function to show the mixture stirring ---------
	function stirMixture(){
		stopFlag++;
		if(stopFlag>2){
			$('#mixture_charcoalcavity').css({display:'block'});
			$("#na2co2onstage_charcoalcavity,#salt").css({display:'none'});
			$('#mixture_charcoalcavity').attr('src',simPath+"images/charcoalcavity/"+random_saltmix[result]);
		}
		if(stopFlag==7){
			$('#rodStage_charcoalcavity').css({zIndex:'999'});
			$('#rodStage_charcoalcavity').animate({top:'171px',left:'432px'},1000,function(){
				$('#glassrod_charcoalcavity').css({display:'block'});	
				$('#rodStage_charcoalcavity').css({display:'none'});
			});
			clearInterval(stirmix_Int);
			$('.rodrotation').css({
				'animation-name': 'none',
				'-moz-animation-name': 'none',
				'-webkit-animation-name': 'none'
			});
			$('#charcoalDiv_charcoalcavity').draggable({ disabled: false });
			dragCharcaolBox_charcoalcavity();
			
		}
	} 
	//Function to drag Charcaol Box
	function dragCharcaolBox_charcoalcavity(){
		$('#charcoalDiv_charcoalcavity').draggable({//Charcaol box
			start:function(event, ui) {
				$("#charcoalDiv_charcoalcavity").css({zIndex:3});			
			},
			stop:function(event,ui){
				//alert(this.offsetTop+"---"+this.offsetLeft);
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+320 && this.offsetLeft>=mainLeft+0 &&this.offsetLeft<=mainLeft+290){					
					mixFlag=true;					
					$('#watchglass2_charcoalcavity,#charcoal2_charcoalcavity').css({display:'block'});
					$('#charcoalDiv_charcoalcavity').css({top:'117px',left:'421px'});
					$('#charcoalDiv_charcoalcavity').draggable({ disabled: true });
					$('#spatulana2co3Div_charcoalcavity').draggable({ disabled: false });					
					dragItem_charcoalcavity('spatulana2co3Div_charcoalcavity',241,91,8,460);
				}else{					
					$('#charcoalDiv_charcoalcavity').css({top:'117px',left:'421px'});
				}
			}
		});
		
	}
	//Function to drag Water Bottle
	function dragWaterBottle_charcoalcavity(){
		$('#water_charcoalcavity').draggable({//Charcaol box
			start:function(event, ui) {
				$("#water_charcoalcavity").css({zIndex:3});			
			},
			stop:function(event,ui){
				//alert(this.offsetTop+"---"+this.offsetLeft);
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+320 && this.offsetLeft>=mainLeft+180 &&this.offsetLeft<=mainLeft+360){	
					$('#water_charcoalcavity').draggable({ disabled: true });	
					$('#water_charcoalcavity').css({top:'214px',left:'293px'});
						$('#waterDiv_charcoalcavity').animate({height:'63px'},1000,function(){						
							$("#charcoalmix_charcoalcavity").animate({top: '294px',left: '276px',width: '35px',height: '3px'},1000,function(){
								$('#waterDiv_charcoalcavity').animate({height:'0px'},1000,function(){
									$('#water_charcoalcavity').animate({top:'155px',left:'393px'});
									$('#forcepDiv_charcoalcavity').draggable({ disabled: false });
									dragTong_charcoalcavity();
								});
						})
					});
				}else{					
					$('#water_charcoalcavity').css({top:'155px',left:'393px'});
				}
			}
		});
	}	
	
	//Function to click the burner knob
	function burnerOn_charcoalcavity(){
		$('#bunorOff_charcoalcavity').click(function(){
			var tripflame = new Trip([
			{
				sel : $('#burnertripDiv_charcoalcavity'),
				position : 'n',
				content : oxidizingFlameLabel,
				expose : false,
				delay : 4000
			}])
			tripflame.start(); 
			window.tripflame= tripflame;
			$('#bunorOn_charcoalcavity,#oflame_charcoalcavity').css({display:'block'});	
			$('#bunorOff_charcoalcavity').css({display:'none'});
			$('.oflame1_charcoalcavity').show(); 	
			oflaming_charcoalcavity = setInterval(oflames_charcoalcavity, 50);
			$('#burnerclosedDiv_charcoalcavity').css({display:'block'});
			$('#burnerclosedDiv_charcoalcavity').click(function(){
				var tripflame = new Trip([
				{
					sel : $('#burnertripDiv_charcoalcavity'),
					position : 'n',
					content : redusingFlameLabel,		
					expose : false,
					delay : 4000
				}])
				tripflame.start(); 
				window.tripflame= tripflame;
				$('#oflame_charcoalcavity').css({display:'none'});
				$('#burnerclosedDiv_charcoalcavity').css({display:'none'});	
				$('#burnerclosed_charcoalcavity,#rflame_charcoalcavity').css({display:'block'});
				$('.rflame1_charcoalcavity').show(); 
				rflaming_charcoalcavity = setInterval(rflames_charcoalcavity, 50);
				$('#forcep2_charcoalcavity').draggable({ disabled: false });
				dragforcepOnstag_charcoalcavity();
			})
		})
	}
	//Function for oxidizing flame
	function oflames_charcoalcavity(){
		if($('.oflame1_charcoalcavity').css('display') == "block"){          
			$('.oflame1_charcoalcavity,.oflame3_charcoalcavity,.oflame4_charcoalcavity').hide();
			$('.oflame2_charcoalcavity').show();         
		}else if($('.oflame2_charcoalcavity').css('display') == "block"){          
			$('.oflame1_charcoalcavity,.oflame2_charcoalcavity,.oflame4_charcoalcavity').hide();
			$('.oflame3_charcoalcavity').show();         
		}else if($('.oflame3_charcoalcavity').css('display') == "block"){          
			$('.oflame2_charcoalcavity,.oflame3_charcoalcavity,.oflame1_charcoalcavity').hide();
			$('.oflame4_charcoalcavity').show(); 
		}else if($('.oflame4_charcoalcavity').css('display') == "block"){          
			$('.oflame2_charcoalcavity,.oflame3_charcoalcavity,.oflame4_charcoalcavity').hide();
			$('.oflame1_charcoalcavity').show(); 
		}	
	}
	//Function for redusing flame
	function rflames_charcoalcavity(){			
		if($('.rflame1_charcoalcavity').css('display') == "block"){          
			$('.rflame1_charcoalcavity,.rflame3_charcoalcavity,.rflame4_charcoalcavity').hide();
			$('.rflame2_charcoalcavity').show();         
		}else if($('.rflame2_charcoalcavity').css('display') == "block"){          
			$('.rflame1_charcoalcavity,.rflame2_charcoalcavity,.rflame4_charcoalcavity').hide();
			$('.rflame3_charcoalcavity').show();         
		}else if($('.rflame3_charcoalcavity').css('display') == "block"){          
			$('.rflame2_charcoalcavity,.rflame3_charcoalcavity,.rflame1_charcoalcavity').hide();
			$('.rflame4_charcoalcavity').show(); 
		}else if($('.rflame4_charcoalcavity').css('display') == "block"){          
			$('.rflame2_charcoalcavity,.rflame3_charcoalcavity,.rflame4_charcoalcavity').hide();
			$('.rflame1_charcoalcavity').show(); 
		}	
	}
	
	//Function to drag tong
	function dragTong_charcoalcavity(){
		$('#forcepDiv_charcoalcavity').draggable({//Tong
			start:function(event, ui) {
				$("#forcepDiv_charcoalcavity,#forcep2_charcoalcavity,#charcoal2_charcoalcavity,#charcoalmix_charcoalcavity").css({zIndex:3});			
			},
			stop:function(event,ui){
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+320 && this.offsetLeft>=mainLeft+0 &&this.offsetLeft<=mainLeft+290){									
					$('#forcepDiv_charcoalcavity').css({top:'263px',left:'418px'});
					$('#forcep2_charcoalcavity').css({display:'block'});	
					$("#forcepDiv_charcoalcavity").draggable({ disabled: true });
					$('#forcepDiv_charcoalcavity').css({top:'263px',left:'418px'});	
					$('#burnerhelpDiv_charcoalcavity').css({zIndex:0});				
					burnerOn_charcoalcavity();
				}else{
					$('#forcepDiv_charcoalcavity').css({top:'263px',left:'418px'});
				}
			}
		})
	}	
	function dragforcepOnstag_charcoalcavity(){
		
		$('#forcep2_charcoalcavity').draggable({//Tong with charcoalbox
			start:function(event,ui){
				$("#Inference").css({display:'none'});
				$('#forcep2_charcoalcavity').css({zIndex:3});		
			},
			drag:function(event,ui){
				$('#charcoal2_charcoalcavity').css({top:this.offsetTop+39+'px',left:this.offsetLeft+197+'px'});
				$('#charcoalmix_charcoalcavity').css({top:this.offsetTop+41+'px',left:this.offsetLeft+212+'px'});
			},
			stop:function(event,ui){				
				if(clockFlag_charcoalcavity==false){
					$('#forcep2_charcoalcavity').css({zIndex:9999});	
					if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+175 && this.offsetLeft>=mainLeft-100 &&this.offsetLeft<=mainLeft+220){
						
						$("#forcep2_charcoalcavity").draggable({ disabled: true });
						$('#forcep2_charcoalcavity').css({top:'60px',left:'-62px'});
						$('#charcoal2_charcoalcavity').css({top:this.offsetTop+39+'px',left:this.offsetLeft+197+'px'});
						$('#charcoalmix_charcoalcavity').css({top:this.offsetTop+41+'px',left:this.offsetLeft+212+'px'});
						$('#blowpipe_charcoalcavity').draggable({ disabled: false });
						 dragBlowpipe_charcoalcavity();
					}else{
						$('#forcep2_charcoalcavity').css({top:'254px',left:'65px'});
						$('#charcoal2_charcoalcavity').css({top:this.offsetTop+39+'px',left:this.offsetLeft+197+'px'});
						$('#charcoalmix_charcoalcavity').css({top:this.offsetTop+41+'px',left:this.offsetLeft+212+'px'});
					}
				}else{
					$('#forcep2_charcoalcavity').css({zIndex:9999});	
					if(this.offsetTop>=mainTop+40 &&this.offsetTop<=mainTop+305 && this.offsetLeft>=mainLeft+0 &&this.offsetLeft<=mainLeft+350){
						clockInt=setInterval(needleRotate,20);
						$('#forcep2_charcoalcavity').css({top:'254px',left:'58px'});
						$('#charcoal2_charcoalcavity').css({top:this.offsetTop+39+'px',left:this.offsetLeft+197+'px'});
						$('#charcoalmix_charcoalcavity').css({top:this.offsetTop+41+'px',left:this.offsetLeft+212+'px'});
						clockFlag2_charcoalcavity=true;
					}else{
						$('#forcep2_charcoalcavity').css({top:'60px',left:'-62px'});
						$('#charcoal2_charcoalcavity').css({top:this.offsetTop+39+'px',left:this.offsetLeft+197+'px'});
						$('#charcoalmix_charcoalcavity').css({top:this.offsetTop+41+'px',left:this.offsetLeft+212+'px'});
					}
				}
				
			}
		})
	}
	//Function to drag Blow pipe
	function dragBlowpipe_charcoalcavity(){
		$('#blowpipe_charcoalcavity').draggable({//Blow pipe
			start:function(event, ui) {
				$("#blowpipe_charcoalcavity").css({zIndex:3});			
			},
			stop:function(event,ui){
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+245 && this.offsetLeft>=mainLeft+75&&this.offsetLeft<=mainLeft+290){					
					clockInt=setInterval(needleRotate,20);			
					$("#blowpipe_charcoalcavity").css({top:'217px',left:'444px'});
					$('#rflame_charcoalcavity').css({display:'none'});
					$('#blowpipe_charcoalcavity').draggable({ disabled: true });
					$('#blowpipeboy_charcoalcavity,#blowflame_charcoalcavity').css({display:'block'});
					$('.blowflame1_charcoalcavity').show();	
					blowflaming_charcoalcavity = setInterval(blowflame_charcoalcavity, 50);	
					
				}else{
					$("#blowpipe_charcoalcavity").css({top:'217px',left:'444px'});
				}
			}
		});
	}
	
	//Function for flame due to blow the pipe
	function blowflame_charcoalcavity(){			
		if($('.blowflame1_charcoalcavity').css('display') == "block"){          
			$('.blowflame1_charcoalcavity,.blowflame3_charcoalcavity,.blowflame4_charcoalcavity,.blowflame5_charcoalcavity').hide();
			$('.blowflame2_charcoalcavity').show();         
		}else if($('.blowflame2_charcoalcavity').css('display') == "block"){          
			$('.blowflame1_charcoalcavity,.blowflame2_charcoalcavity,.blowflame4_charcoalcavity,.blowflame5_charcoalcavity').hide();
			$('.blowflame3_charcoalcavity').show();         
		}else if($('.blowflame3_charcoalcavity').css('display') == "block"){          
			$('.blowflame_charcoalcavity1,.blowflame2_charcoalcavity,.blowflame3_charcoalcavity,.blowflame5_charcoalcavity').hide();
			$('.blowflame4_charcoalcavity').show(); 
		}else if($('.blowflame4_charcoalcavity').css('display') == "block"){          
			$('.blowflame_charcoalcavity1,.blowflame2_charcoalcavity,.blowflame3_charcoalcavity,.blowflame4_charcoalcavity').hide();
			$('.blowflame5_charcoalcavity').show(); 
		}else if($('.blowflame5_charcoalcavity').css('display') == "block"){          
			$('.blowflame2_charcoalcavity,.blowflame3_charcoalcavity,.blowflame4_charcoalcavity,.blowflame5_charcoalcavity').hide();
			$('.blowflame1_charcoalcavity').show();			
			
			
		}	
	}
	//Function for rotating needle of clock
	function needleRotate(){
		degreecharcoalcavity=degreecharcoalcavity+2;	
		$('#clock').css({display:'block'})
		$('#needle').css({display:'block'})
		document.getElementById("needle").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle").style.webkitTransform = 'rotate(' + degreecharcoalcavity + 'deg)';
		document.getElementById("needle").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle").style.MozTransform ='rotate('+ degreecharcoalcavity +'deg)';
		if(degreecharcoalcavity>360){
			clearInterval(clockInt);
			clearInterval(oflaming_charcoalcavity );	
			clearInterval(rflaming_charcoalcavity);
			clearInterval(blowflaming_charcoalcavity);	
			$('#clock,#needle').css({display:'none'});
			$('#bunorOn_charcoalcavity').css({display:'none'});
			$('#bunorOff_charcoalcavity').css({display:'block'});
			$('#burnerhelpDiv_charcoalcavity').css({zIndex:5});
			$('#blowpipeboy_charcoalcavity,#blowflame_charcoalcavity').css({display:'none'});
			$("#forcep2_charcoalcavity").draggable({ disabled: false });
			dragforcepOnstag_charcoalcavity();
			clockFlag_charcoalcavity=true;				
			degreecharcoalcavity=0;			
			if(clockFlag2_charcoalcavity==true){				
				$("#forcep2_charcoalcavity").animate({top:'263px',left:'400px'},function(){
					$("#forcep2_charcoalcavity").css({display:'none'});
					$('#forcep2_charcoalcavity').css({top:'254px',left:'75px'});
					$("#Inference").css({display:'block'});
					$('#Dropbox_group_test_ID').removeAttr("disabled");
					if(sampleSalt[result]==sampleSalt[10]){//Zinc 
						$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ammonium_chloride.png");
						inferenceMsg=residueLabel[1]+" "+zincInference;
					}else if(sampleSalt[result]==sampleSalt[6]){//Aluminium
						$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ammonium_chloride.png");
						inferenceMsg=residueLabel[1]+" "+aluminumInference;
					}else if(sampleSalt[result]==sampleSalt[2]){//Lead
						$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/charcoalcavity/zinc.png");
						inferenceMsg=residueLabel[3]+" "+leadInference;
					}else if(sampleSalt[result]==sampleSalt[11] || sampleSalt[result]==sampleSalt[13] || sampleSalt[result]==sampleSalt[14]){//Ba2+ or Ca2+ or Mg2+.						
						inferenceMsg=residueLabel[1]+" "+ba2ca2mg2Inference;
					}else if(sampleSalt[result]==sampleSalt[3]){//Copper
						$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/charcoalcavity/coppermix.png");
						inferenceMsg=coppercoldInference;
					}else if(sampleSalt[result]==sampleSalt[4]){//Arsenic
						$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ammonium_chloride.png");
						inferenceMsg=arseniccoldeInference;
					}else{
						inferenceMsg=noreactionInference;
						$('#Dropbox_group_test_ID').attr('disabled', 'disabled');
					}
					switch (groupIndex+"-"+confirmationIndex+"-"+confirmationSubIndex) {
						case "4-2-1"://Charcoal cavity/Cobalt nitrate test
						case "5-4-2":
						case "7-0-1":
							$("#nextbtnDiv_charcoalcavity").css({display:'block'});
						break;
						default:
							$("#nextbtnDiv_charcoalcavity").css({display:'none'});
							
					}
				});
			}else{					
				$("#Inference").css({display:'block'});
				if(sampleSalt[result]==sampleSalt[10]){//Zinc
					$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/charcoalcavity/zinc.png");
					inferenceMsg=residueLabel[0];
				}else if(sampleSalt[result]==sampleSalt[2]){//Lead
					$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ferric_chloride.png");
					inferenceMsg=residueLabel[2];
				}else if(sampleSalt[result]==sampleSalt[11] || sampleSalt[result]==sampleSalt[13] || sampleSalt[result]==sampleSalt[14] || sampleSalt[result]==sampleSalt[6]){//Ba2+ or Ca2+ or Mg2+ or Aluminium
					$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ammonium_chloride.png");
					inferenceMsg=residueLabel[4];
				}
				else if(sampleSalt[result]==sampleSalt[3]){//Copper
					$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/charcoalcavity/coppermix.png");
					inferenceMsg=copperhotInference;
				}else if(sampleSalt[result]==sampleSalt[4]){//Arsenic
					$('#charcoalmix_charcoalcavity').attr('src',simPath+"images/ammonium_chloride.png");
					inferenceMsg=arsenichotInference;
				}
				else{
					inferenceMsg=noreactionInference;
				}
			}
		}	
	}
	//Function to click next button to show cobalt nitrate test
	$("#nextbtnDiv_charcoalcavity").click(function(){		
		nextClickflag_charcoalcavity=true;
		if(nextClickflag_charcoalcavity==true){
			if(helpclickFlag==true){
				$('.trip-block').hide();
				trip.stop();
				helpclickFlag=false;
			}
		}
		$('#charcoalcavityDiv').hide();
		$('#cobaltNitrateDiv').show();
		$('#boardlabel_saltsoln').hide();
		cobaltNitrate();
				
	})
	//Function to reset all events
	function resetcharcoalcavity(){
		carcoalflag=true;
		mixFlag=false;
		mixtureFlag=false;
		sampleLeft1=0;
		sampleLeft2=250;
		stopFlag=0;	
		stirmix_Int=0;
		clockFlag_charcoalcavity=false;
		clockFlag2_charcoalcavity=false				
		degreecharcoalcavity=0;
		clearInterval(clockInt);	
		clearInterval(stirmix_Int);
		clearInterval(oflaming_charcoalcavity );	
		clearInterval(rflaming_charcoalcavity);
		clearInterval(blowflaming_charcoalcavity);	
		$('#rodStage_charcoalcavity').stop(true);		
		$("#charcoalmix_charcoalcavity").stop(true);
		$("#forcep2_charcoalcavity").stop(true);
		$("#spatulana2co3Div_charcoalcavity").stop(true);
		$("#spatulana2co3powder_charcoalcavity,#na2co2onstage_charcoalcavity").stop(true);
		$("#charcoalmix_charcoalcavity").stop(true);
		$('#waterDiv_charcoalcavity,#water_charcoalcavity').stop(true);
		$("#spatulana2co3Div_charcoalcavity").draggable({ disabled: false });
		$('#spatulana2co3Div_charcoalcavity').css({zIndex:0,top:'8px',left:'460px'});				
		$("#spatulana2co3powder_charcoalcavity").css({top:'45px',width:'19px',height:'13px'});		
		$('#na2co2onstage_charcoalcavity').css({top:'300px',left:'93px',width:'0px',height:'0px'});	
		$("#charcoalmix_charcoalcavity").css({top: '294px',left: '294px',width: '3px',height: '2px',display:'none',zIndex:0});
		$('#rodStage_charcoalcavity').css({top:'196px',left:'98px',display:'none'})
		$('#glassrod_charcoalcavity').css({display:'block',top:'171px',left:'432px'});
		$('.rodrotation').css({
			'animation-name': 'none',
			'-moz-animation-name': 'none',
			'-webkit-animation-name': 'none'
		});
		$('#mixture_charcoalcavity').css({display:'none'});
		$('#charcoalDiv_charcoalcavity').css({top:'117px',left:'421px',zIndex:0});
		$('#watchglass2_charcoalcavity,#charcoal2_charcoalcavity').css({display:'none'});
		$('#water_charcoalcavity').css({top:'155px',left:'393px',zIndex:0});		
		$('#waterDiv_charcoalcavity').css({height:'0px'})	
		$('#forcepDiv_charcoalcavity').css({top:'263px',left:'418px',zIndex:0});
		$("#forcep2_charcoalcavity").css({display:'none',zIndex:1,top:'254px',left:'75px'});
		$('#charcoal2_charcoalcavity').css({top:'292px',left:'258px',zIndex:0});
		$('#bunorOn_charcoalcavity,#oflame_charcoalcavity,#rflame_charcoalcavity,#blowflame_charcoalcavity').css({display:'none'});	
		$('#bunorOff_charcoalcavity').css({display:'block'});
		$('#burnerhelpDiv_charcoalcavity').css({zIndex:5});
		$("#blowpipe_charcoalcavity").css({top:'217px',left:'444px',zIndex:0});	
		$('#clock,#needle').css({display:'none'});
		$('#blowpipeboy_charcoalcavity,#blowflame_charcoalcavity').css({display:'none'});
		$("#burnerclosed_charcoalcavity").css({display:'none'});	
		$('#burnerclosedDiv_charcoalcavity').css({display:'none'});	
		$("#na2co2onstage_charcoalcavity,#salt").css({display:'block'});
		nextClickflag_charcoalcavity=false;
		$("#nextbtnDiv_charcoalcavity").css({display:'none'});
		$('#forcep2_charcoalcavity').css({zIndex:0});
		$('#blowpipe_charcoalcavity').draggable({ disabled: true });
		$('#glassrod_charcoalcavity').draggable({ disabled: true });
		$('#water_charcoalcavity').draggable({ disabled: true });
		$('#charcoalDiv_charcoalcavity').draggable({ disabled: true });
		$('#forcepDiv_charcoalcavity').draggable({ disabled: true });
		$('#forcep2_charcoalcavity').draggable({ disabled: true });
		$('.rflame2_charcoalcavity,.rflame3_charcoalcavity,.rflame4_charcoalcavity,.rflame1_charcoalcavit').hide();
		$('.oflame2_charcoalcavity,.oflame3_charcoalcavity,.oflame4_charcoalcavity,.oflame1_charcoalcavity').hide();
		$('.blowflame2_charcoalcavity,.blowflame3_charcoalcavity,.blowflame4_charcoalcavity,.blowflame5_charcoalcavity,.blowflame1_charcoalcavity').hide();
		$('#rodStage_charcoalcavity').css({zIndex:'0'});
		
	}
}
