//Cobalt nitrate test
var clockFlag_cobaltNitrate=false;
var clockFlag2_cobaltNitrate=false;
var clockInt_cobaltNitrate;
var degreecobaltNitrate=0;
var blowflaming_cobaltNitrate,oflaming_cobaltNitrate;
var forcepdrag_cobaltNitrate=false;
function cobaltNitrate(){
	resetcobaltNitrateTest();
	$('#cobaltNitrateDiv').show();
	$('#expHeading').html(Preliminary_Array[4]);
	$('#charcoalLabel_cobaltNitrate').html(cobaltNitratelabel[0]);
	$('#cobaltnitrateLabel_cobaltNitrate,#bottleLabel_cobaltNitrate').html(cobaltNitratelabel[1]);
	$('#forcepLabel_cobaltNitrate').html(charcoalcavitylabel[4]);
	$('#blowpipeLabel_cobaltNitrate').html(charcoalcavitylabel[3]);
	$('#salt').css({display:'none'});
	$("#charcoalmix_cobaltNitrate").attr('src',simPath+"images/charcoalcavity/"+random_saltcobaltnitrate[result]);
	dragItem_cobaltNitrate('dropper_cobaltNitrate',37,466);
	//*--Function to start drag events---------
	function dragItem_cobaltNitrate(sampleid,originaltop,originalleft){	
		$('#'+sampleid).draggable({
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});				
			},
			stop : function(event, ui) {
				if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+280 && this.offsetLeft>=mainLeft+20 &&this.offsetLeft<=mainLeft+380){
					$('#'+sampleid).css({zIndex:0});
					$('#'+sampleid).draggable({disabled:true});	
					if(sampleid=='dropper_cobaltNitrate'){//Cobalt Nitrate									
						$('#'+sampleid).css({top:mainTop+98+'px',left:mainLeft+294+'px'});
						$('#drop2_cobaltNitrate').css({display:'block'});						
						$('#droppersoln_cobaltNitrate').animate({top:'93px',height:'0px',left:'10px'},1000);
						$('#drop2_cobaltNitrate').animate({top:mainTop+230+'px'},500,function(){
							$('#drop2_cobaltNitrate').css({display:'none'});
							$('#drop1_cobaltNitrate').css({display:'block'});
							$('#drop1_cobaltNitrate').animate({top:mainTop+254+'px'},500,function(){					
								$('#drop1_cobaltNitrate').css({display:'none'});
								
								$('#'+sampleid).animate({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'},1000,function(){
									$('#'+sampleid).css({zIndex:0});
									$('#droppersoln_cobaltNitrate').css({top:'48px',height:'42px',left:'5px'},1000);				
									$('#forcep_cobaltNitrate').draggable({ disabled: false });
									dragItem_cobaltNitrate('forcep_cobaltNitrate',261,400);
									
								});					
							});
						})
					}else if(sampleid=='blowpipe_cobaltNitrate'){//blow pipe
						$('#oflame_cobaltNitrate').css({display:'none'});
						$('#blowpipeboy_cobaltNitrate,#blowflame_cobaltNitrate').css({display:'block'});	
						$("#blowpipe_cobaltNitrate").css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});	
						clockInt_cobaltNitrate=setInterval(needleRotate_cobaltNitrate,20);	
						blowflaming_cobaltNitrate = setInterval(blowflame_cobaltNitrate, 50);
						
					}else{//Tong						
						$("#forcep_cobaltNitrate").css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});	
						$("#forcep2_cobaltNitrate").css({display:'block'});
						burnerOn_cobaltNitrate();
					}
				}else{
					$('#'+sampleid).css({zIndex:0});	
					$('#'+sampleid).css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});
					
				}
			}
		})	
	}
	//Function for rotate needle of clock
	function needleRotate_cobaltNitrate (){
		degreecobaltNitrate=degreecobaltNitrate+2;	
		$('#clock_cobaltNitrate').css({display:'block'});
		$('#needle_cobaltNitrate').css({display:'block'});
		document.getElementById("needle_cobaltNitrate").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle_cobaltNitrate").style.webkitTransform = 'rotate(' + degreecobaltNitrate + 'deg)';
		document.getElementById("needle_cobaltNitrate").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle_cobaltNitrate").style.MozTransform ='rotate('+ degreecobaltNitrate +'deg)';
		if(degreecobaltNitrate>360){
			clearInterval(clockInt_cobaltNitrate);
			$('#Inference').css({display:'block'});
			$('#clock_cobaltNitrate').css({display:'none'});
			$('#needle_cobaltNitrate').css({display:'none'});
			$('#Dropbox_group_test_ID').removeAttr("disabled");			
			if(sampleSalt[result]==sampleSalt[10]){//Zinc
				$('#charcoalmix_cobaltNitrate').attr('src',simPath+"images/nickel_chloride.png");
				inferenceMsg=residueLabel[5]+" "+zincInference;
			}else if(sampleSalt[result]==sampleSalt[14]){//Magnesium
				$('#charcoalmix_cobaltNitrate').attr('src',simPath+"images/manganese_chloride.png");
				inferenceMsg=residueLabel[6]+" "+magnesiumInference;
			}else if(sampleSalt[result]==sampleSalt[6] ){//Aluminum.
				$('#charcoalmix_cobaltNitrate').attr('src',simPath+"images/cobaltnitratetest/aluminiumbluepowder.png");
				inferenceMsg=residuealuminumLabel+" "+aluminumInference;
			}else{
				inferenceMsg=noreactionInference;
				$('#Dropbox_group_test_ID').attr('disabled', 'disabled');
			}	
			$('#blowpipeboy_cobaltNitrate,#blowflame_cobaltNitrate').css({display:'none'});
			$('#bunorOn_cobaltNitrate,#oflame_cobaltNitrate').css({display:'none'});	
			$('#bunorOff_cobaltNitrate').css({display:'block'});	
			clearInterval(blowflaming_cobaltNitrate);
			clearInterval(oflaming_cobaltNitrate);	
			$('#forcep2_cobaltNitrate').draggable({ disabled: false });
			dragforcepOnstag_cobaltNitrate('forcep2_cobaltNitrate',212,422);
			forcepdrag_cobaltNitrate=true;
		}	
	}
	function dragforcepOnstag_cobaltNitrate(){
		$('#forcep2_cobaltNitrate').draggable({//Tong with charcoalbox
			drag:function(event,ui){
				$('#charcoal_cobaltNitrate').css({top:this.offsetTop-219+'px',left:this.offsetLeft-49+'px',zIndex:1});
				$('#charcoalmix_cobaltNitrate').css({top:this.offsetTop+41+'px',left:this.offsetLeft+214+'px',zIndex:1});
			},
			stop:function(event,ui){
				if(forcepdrag_cobaltNitrate==true){
					if(this.offsetTop>=mainTop+80 &&this.offsetTop<=mainTop+310 && this.offsetLeft>=mainLeft-75 &&this.offsetLeft<=mainLeft+290){					
						$("#forcep2_cobaltNitrate").draggable({ disabled: true });
						$('#forcep2_cobaltNitrate').css({top:'219px',left:'75px'});
						$('#forcep2_cobaltNitrate').animate({top: '261px',left: '400px'},function(){
							$('#forcep2_cobaltNitrate').css({display:'none'});
						});
					}else{
						$('#forcep2_cobaltNitrate').css({top:'60px',left:'-62px'});
					}
				}else{
					if(this.offsetTop>=mainTop+0 &&this.offsetTop<=mainTop+175 && this.offsetLeft>=mainLeft-100 &&this.offsetLeft<=mainLeft+220){					
						$("#forcep2_cobaltNitrate").draggable({ disabled: true });
						$('#forcep2_cobaltNitrate').css({top:'60px',left:'-62px'});					
						$('#blowpipe_cobaltNitrate').draggable({ disabled: false });
						dragItem_cobaltNitrate('blowpipe_cobaltNitrate',212,422);
					}else{
						$('#forcep2_cobaltNitrate').css({top:'219px',left:'75px'});
						
					}
				}
				$('#charcoal_cobaltNitrate').css({top:this.offsetTop-219+'px',left:this.offsetLeft-49+'px',zIndex:0});
				$('#charcoalmix_cobaltNitrate').css({top:this.offsetTop+41+'px',left:this.offsetLeft+214+'px',zIndex:0});
			}
		})
	}
	//Function to click the burner knob
	function burnerOn_cobaltNitrate(){
		$('#bunorOff_cobaltNitrate').click(function(){
			var tripflame = new Trip([
			{
				sel : $('#burnertripDiv_cobaltNitrate'),
				position : 'n',
				content : oxidizingFlameLabel,
				expose : false,
				delay : 4000
			}])
			tripflame.start(); 
			window.tripflame= tripflame;
			$('#bunorOn_cobaltNitrate,#oflame_cobaltNitrate').css({display:'block'});	
			$('#bunorOff_cobaltNitrate').css({display:'none'});	
			oflaming_cobaltNitrate = setInterval(oflames_cobaltNitrate, 50);
			$('#forcep2_cobaltNitrate').draggable({ disabled: false });
			dragforcepOnstag_cobaltNitrate();
			$('#burnerhelpDiv_cobaltNitrate').css({zIndex:3});
		})
	}
	//Function for oxidizing flame
	function oflames_cobaltNitrate(){
		if($('.oflame1_cobaltNitrate').css('display') == "block"){          
			$('.oflame1_cobaltNitrate,.oflame3_cobaltNitrate,.oflame4_cobaltNitrate').hide();
			$('.oflame2_cobaltNitrate').show();         
		}else if($('.oflame2_cobaltNitrate').css('display') == "block"){          
			$('.oflame1_cobaltNitrate,.oflame2_cobaltNitrate,.oflame4_cobaltNitrate').hide();
			$('.oflame3_cobaltNitrate').show();         
		}else if($('.oflame3_cobaltNitrate').css('display') == "block"){          
			$('.oflame2_cobaltNitrate,.oflame3_cobaltNitrate,.oflame1_cobaltNitrate').hide();
			$('.oflame4_cobaltNitrate').show(); 
		}else if($('.oflame4_cobaltNitrate').css('display') == "block"){          
			$('.oflame2_cobaltNitrate,.oflame3_cobaltNitrate,.oflame4_cobaltNitrate').hide();
			$('.oflame1_cobaltNitrate').show(); 
		}	
	}
	//Function for flame due to blow the pipe
	function blowflame_cobaltNitrate(){			
		if($('.blowflame1_cobaltNitrate').css('display') == "block"){          
			$('.blowflame1_cobaltNitrate,.blowflame3_cobaltNitrate,.blowflame4_cobaltNitrate,.blowflame5_cobaltNitrate').hide();
			$('.blowflame2_cobaltNitrate').show();         
		}else if($('.blowflame2_cobaltNitrate').css('display') == "block"){          
			$('.blowflame1_cobaltNitrate,.blowflame2_cobaltNitrate,.blowflame4_cobaltNitrate,.blowflame5_cobaltNitrate').hide();
			$('.blowflame3_cobaltNitrate').show();         
		}else if($('.blowflame3_cobaltNitrate').css('display') == "block"){          
			$('.blowflame_cobaltNitrate1,.blowflame2_cobaltNitrate,.blowflame3_cobaltNitrate,.blowflame5_cobaltNitrate').hide();
			$('.blowflame4_cobaltNitrate').show(); 
		}else if($('.blowflame4_cobaltNitrate').css('display') == "block"){          
			$('.blowflame_cobaltNitrate1,.blowflame2_cobaltNitrate,.blowflame3_cobaltNitrate,.blowflame4_cobaltNitrate').hide();
			$('.blowflame5_cobaltNitrate').show(); 
		}else if($('.blowflame5_cobaltNitrate').css('display') == "block"){          
			$('.blowflame2_cobaltNitrate,.blowflame3_cobaltNitrate,.blowflame4_cobaltNitrate,.blowflame5_cobaltNitrate').hide();
			$('.blowflame1_cobaltNitrate').show();	
		}	
	}
	function resetcobaltNitrateTest(){
		clearInterval(clockInt_cobaltNitrate);
		clearInterval(blowflaming_cobaltNitrate);
		clearInterval(oflaming_cobaltNitrate);
		$('#dropper_cobaltNitrate').draggable({disabled:false});
		$('#dropper_cobaltNitrate').css({top:mainTop+37+'px',left:mainLeft+466+'px',zIndex:0});	
		$('#drop2_cobaltNitrate,#drop1_cobaltNitrate').css({display:'none'});
		$('#droppersoln_cobaltNitrate,#drop1_cobaltNitrate,#drop2_cobaltNitrate,#droppersoln_cobaltNitrate').stop(true);
		$('#drop2_cobaltNitrate').css({top:mainTop+203+'px'})	
		$('#drop1_cobaltNitrate').css({top:mainTop+195+'px'});
		$('#droppersoln_cobaltNitrate').css({top:'48px',height:'42px',left:'5px'});
		$('#bunorOn_cobaltNitrate,#oflame_cobaltNitrate').css({display:'none'});	
		$('#bunorOff_cobaltNitrate').css({display:'block'});
		$('#blowpipeboy_cobaltNitrate,#blowflame_cobaltNitrate').css({display:'none'});
		$('#forcep2_cobaltNitrate').css({top:'219px',left:'75px'});	
		$("#blowpipe_cobaltNitrate").css({top:'212px',left:'422px'});
		$("#forcep_cobaltNitrate").css({top:'261px',left:'400px'});	
		$("#forcep2_cobaltNitrate,#clock_cobaltNitrate,#needle_cobaltNitrate").css({display:'none'});
		$('#charcoal_cobaltNitrate').css({top:'0px',left:'26px'});
		$('#charcoalmix_cobaltNitrate').css({top:'260px',left:'292px'});
		$("#Inference").css({display:'none'});	
		$('#forcep2_cobaltNitrate,#dropper_cobaltNitrate').stop(true);
		$("#forcep2_cobaltNitrate").draggable({ disabled: true });
		$("#forcep_cobaltNitrate").draggable({ disabled: true });
		$('#blowpipe_cobaltNitrate').draggable({ disabled: true });
		forcepdrag_cobaltNitrate=false;
		$('#burnerhelpDiv_cobaltNitrate').css({zIndex:0});
		degreecobaltNitrate=0;
		$('#forcep_cobaltNitrate').draggable({ disabled: true });	
		$('#forcep2_cobaltNitrate').draggable({ disabled: true });
		$('#blowpipe_cobaltNitrate').draggable({ disabled: true });
	}
}