//Borax Bead test

var burnorOnFlag_boraxBead=false;
var clockflag_boraxBead=false;
var clockInt_boraxBead,degreeboraxBead=0;
var clockflag2_boraxBead=false;
var count_boraxBead=0
var reducingFlameflag=false;
var oflaming_boraxBead,rflaming_boraxBead;
function boraxBead(){
	resetboraxBead();
	$('#boraxBeadDiv,#boardlabel_saltsoln').show();
	$('#saltsolutionlabel_saltsoln').html(smell_label[0]);
	$('#boardlabel_saltsoln').css({top:'245px',left:'177px'});
	$('#salt').css({display:'block',top:'281px',left:'108px',width:'63px',height:'20px'});
	$('#expHeading').html(Preliminary_Array[6]);
	$('#boraxLabel_boraxBead').html(boraxbeadlabel[0]);		
	$('#platinumwireLabel_boraxBead').html(boraxbeadlabel[1]);
	dragItem_boraxBead('boraxDiv_boraxBead',0,305,0,285,70,420);
	//*--Function to start drag events---------
	function dragItem_boraxBead(sampleid,itemMinTop,itemMaxTop,itemMinLeft,itemMaxLeft,originaltop,originalleft){	
		$('#'+sampleid).draggable({
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});
				$('#Inference').css({display:'none'});				
			},
			stop : function(event, ui) {
				if(this.offsetTop>=itemMinTop &&this.offsetTop<=itemMaxTop && this.offsetLeft>=itemMinLeft &&this.offsetLeft<=itemMaxLeft){
					$('#'+sampleid).draggable({disabled:true});	
					if(sampleid=='boraxDiv_boraxBead'){//Borax											
						$('#'+sampleid).css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});
						$("#boraxDivOnstage_boraxBead").css({display:'block'});
						$('#platinumwire_boraxBead').draggable({ disabled: false });
						dragItem_boraxBead('platinumwire_boraxBead',80,250,0,167,167,401);
					}else if(sampleid=='platinumwire_boraxBead'){//Platinum wire										
						$('#'+sampleid).css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});
						$("#platinumwireOnStage_boraxBead").css({display:'block'});
						$('#burnerhelpDiv_boraxBead').css({zIndex:'0'});
						burnerOn_boraxBead();
					}else if(sampleid=='platinumwireOnStage_boraxBead'){						
						if(clockflag_boraxBead==true){
							$('#burnerhelpDiv_boraxBead').css({zIndex:'0'});
							$('#'+sampleid).css({top:'257px',left:'17px'});							
							clockflag2_boraxBead=true;
							clockflag_boraxBead=false;
							$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+random_bead[result]);
						}else {
							$('#burnerclosedDiv_boraxBead').css({display:'none'});
							clockInt_boraxBead=setInterval(needleRotate_boraxBead,20);
							$('#'+sampleid).css({top:'144px',left:'190px'});
						}
					}
				}else{
					 if(sampleid=='platinumwireOnStage_boraxBead'){						
						if(clockflag_boraxBead==true){
							$('#'+sampleid).css({zIndex:2});
						}
					 }else{	
					 	$('#'+sampleid).css({zIndex:0});
					 }
				
					$('#'+sampleid).css({top:mainTop+originaltop+'px',left:mainLeft+originalleft+'px'});
					
				}
				
			}
		})	
	}
	//Function to click the burner knob
	function burnerOn_boraxBead(){
		$('#bunorOff_boraxBead').click(function(){ 
			var tripflame = new Trip([
			{
				sel : $('#burnertripDiv_boraxBead'),
				position : 'n',
				content : oxidizingFlameLabel,
				expose : false,
				delay : 4000
			}])
			tripflame.start(); 
			window.tripflame= tripflame;
			burnorOnFlag_boraxBead=true;
			$('#platinumwireOnStage_boraxBead').draggable({ disabled: false });
			if(clockflag2_boraxBead==false){
				dragItem_boraxBead('platinumwireOnStage_boraxBead',50,280,130,260,187,34);
			}else{
				$('#burnerclosedDiv_boraxBead').css({display:'block'});
				$('#burnerclosedDiv_boraxBead').click(function(){
					var tripflame = new Trip([
					{
						sel : $('#burnertripDiv_boraxBead'),
						position : 'n',
						content : redusingFlameLabel,		
						expose : false,
						delay : 4000
					}])
					tripflame.start(); 
					window.tripflame= tripflame;
					reducingFlameflag=true;
					$('#oflame_boraxBead').css({display:'none'});
					$('#burnerclosedDiv_boraxBead').css({display:'none'});	
					$('#burnerclosed_boraxBead,#rflame_boraxBead').css({display:'block'});
					rflaming_boraxBead = setInterval(rflames_boraxBead, 50);
				})
				dragItem_boraxBead('platinumwireOnStage_boraxBead',50,280,130,260,250,10);
			}
			$('#bunorOn_boraxBead,#oflame_boraxBead').css({display:'block'});	
			$('#bunorOff_boraxBead').css({display:'none'});	
			oflaming_boraxBead = setInterval(oflames_boraxBead, 50);
		})
	}
	//Function for oxidizing flame
	function oflames_boraxBead(){
		if($('.oflame1_boraxBead').css('display') == "block"){          
			$('.oflame1_boraxBead,.oflame3_boraxBead,.oflame4_boraxBead').hide();
			$('.oflame2_boraxBead').show();         
		}else if($('.oflame2_boraxBead').css('display') == "block"){          
			$('.oflame1_boraxBead,.oflame2_boraxBead,.oflame4_boraxBead').hide();
			$('.oflame3_boraxBead').show();         
		}else if($('.oflame3_boraxBead').css('display') == "block"){          
			$('.oflame2_boraxBead,.oflame3_boraxBead,.oflame1_boraxBead').hide();
			$('.oflame4_boraxBead').show(); 
		}else if($('.oflame4_boraxBead').css('display') == "block"){          
			$('.oflame2_boraxBead,.oflame3_boraxBead,.oflame4_boraxBead').hide();
			$('.oflame1_boraxBead').show(); 
		}	
	}
	//Function for redusing flame
	function rflames_boraxBead(){			
		if($('.rflame1_boraxBead').css('display') == "block"){          
			$('.rflame1_boraxBead,.rflame3_boraxBead,.rflame4_boraxBead').hide();
			$('.rflame2_boraxBead').show();         
		}else if($('.rflame2_boraxBead').css('display') == "block"){          
			$('.rflame1_boraxBead,.rflame2_boraxBead,.rflame4_boraxBead').hide();
			$('.rflame3_boraxBead').show();         
		}else if($('.rflame3_boraxBead').css('display') == "block"){          
			$('.rflame2_boraxBead,.rflame3_boraxBead,.rflame1_boraxBead').hide();
			$('.rflame4_boraxBead').show(); 
		}else if($('.rflame4_boraxBead').css('display') == "block"){          
			$('.rflame2_boraxBead,.rflame3_boraxBead,.rflame4_boraxBead').hide();
			$('.rflame1_boraxBead').show(); 
		}	
	}
	
	//Function for rotate needle of clock
	function needleRotate_boraxBead(){	
		var oxidizingheatBead=['green_bead.png','yellowishbrown_bead.png','pinkishviolet_bead.png','brown_bead.png','darkblue_bead.png'];
		var oxidizingcoldBead=['lightblue_bead.png','paleyellow_bead.png','pinkishviolet_bead.png','palebrown_bead.png','darkblue_bead.png'];
		var reducingheatBead=['colorless_bead.png','green_bead.png','colorless_bead.png','grey_bead.png','darkblue_bead.png'];
		var reducingcoldBead=['opaquered_bead.png','green_bead.png','colorless_bead.png','opaquegre_bead.png','darkblue_bead.png'];
		var beadFormed=[];
		var beadinference=[];
		degreeboraxBead=degreeboraxBead+2;	
		$('#clock_boraxBead').css({display:'block'});
		$('#needle_boraxBead').css({display:'block'});
		document.getElementById("needle_boraxBead").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle_boraxBead").style.webkitTransform = 'rotate(' + degreeboraxBead + 'deg)';
		document.getElementById("needle_boraxBead").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle_boraxBead").style.MozTransform ='rotate('+ degreeboraxBead +'deg)';
		if(degreeboraxBead>360){
			count_boraxBead++;
			clearInterval(clockInt_boraxBead);			
			$('#clock_boraxBead').css({display:'none'});
			$('#needle_boraxBead').css({display:'none'});	
			degreeboraxBead=0;
			$('#platinumwireOnStage_boraxBead').draggable({ disabled: false });			
			$('#bunorOn_boraxBead,#oflame_boraxBead,#rflame_boraxBead').css({display:'none'});	
			$('#bunorOff_boraxBead').css({display:'block'});
			clearInterval(oflaming_boraxBead);
			clearInterval(rflaming_boraxBead);
			clockflag_boraxBead=true;
			$('#burnerhelpDiv_boraxBead').css({zIndex:'2'});
			$('#Inference').css({display:'block'});			
			if(clockflag2_boraxBead==false){
				inferenceMsg=boraxBeadInference[0];
				$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/colorless_bead.png");
				dragItem_boraxBead('platinumwireOnStage_boraxBead',120,300,0,150,135,183);
			}else{				
				if(count_boraxBead<=2){
					if(reducingFlameflag==false){
						beadFormed=oxidizingheatBead;
						beadinference=oxidizingbeadhotInference;
					}else{
						beadFormed=reducingheatBead;
						beadinference=reducingbeadhotInference;
					}
						
				}else{
					$('#Dropbox_group_test_ID').removeAttr("disabled");
					if(reducingFlameflag==false){
						beadFormed=oxidizingcoldBead;
						beadinference=oxidizingbeadcoldInference;
						
					}
					else{
						beadFormed=reducingcoldBead;
						beadinference=reducingbeadcoldInference;
					}
					
				}
				
				if(sampleSalt[result]==sampleSalt[3]){//Copper
					inferenceMsg=beadinference[0];
					$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+beadFormed[0]);
				}else if(sampleSalt[result]==sampleSalt[5]){//Iron
					inferenceMsg=beadinference[1];
					$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+beadFormed[1]);
				}else if(sampleSalt[result]==sampleSalt[9]){//Manganese
					inferenceMsg=beadinference[2];
					$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+beadFormed[2]);
				}else if(sampleSalt[result]==sampleSalt[8]){//Nickel
					inferenceMsg=beadinference[3];
					$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+beadFormed[3]);
				}else if(sampleSalt[result]==sampleSalt[7]){//Cobalt or Manganese
					inferenceMsg=beadinference[4];
					$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+beadFormed[4]);
				}else{
					inferenceMsg=noreactionInference;
					$('#Dropbox_group_test_ID').attr('disabled', 'disabled');
				}
				$('#platinumwireOnStage_boraxBead').draggable({ disabled: true });
				if(count_boraxBead==2){
					clockInt_boraxBead=setInterval(needleRotate_boraxBead,20);
				}
			}
		}	
	}
	//Function to reset all 
	function resetboraxBead(){
		degreeboraxBead=0;
		count_boraxBead=0;
		clockflag2_boraxBead=false;			
		clockflag_boraxBead=false;
		burnorOnFlag_boraxBead=false;
		reducingFlameflag=false;
		clearInterval(clockInt_boraxBead);
		clearInterval(oflaming_boraxBead);
		clearInterval(rflaming_boraxBead);
		$('#boraxDiv_boraxBead').draggable({disabled:false});	
		$('#boraxDiv_boraxBead').css({top:'75px',left:'420px'});
		$('#platinumwire_boraxBead').css({top:'167px',left:'401px'});
		$('#platinumwireOnStage_boraxBead').css({top:'193px',left:'34px'});	
		$('#Inference').css({display:'none'});
		$("#boraxDivOnstage_boraxBead,#platinumwireOnStage_boraxBead").css({display:'none'});
		$('#burnerhelpDiv_boraxBead').css({zIndex:'2'});
		$("#bead_boraxBead").attr('src',simPath+"images/boraxBead/"+random_bead[0]);
		$('#burnerclosedDiv_boraxBead,#burnerclosed_boraxBead,#rflame_boraxBead').css({display:'none'});
		$('#bunorOn_boraxBead,#oflame_boraxBead').css({display:'none'});	
		$('#bunorOff_boraxBead').css({display:'block'});
		$('#clock_boraxBead').css({display:'none'});
		$('#needle_boraxBead').css({display:'none'});
		$('#platinumwire_boraxBead').draggable({ disabled: true });
		$('#platinumwireOnStage_boraxBead').draggable({ disabled: true });
	}
}