//Confirmation potassium nitrate
function ammoniumthiocyanateethertest(){		
	resetammoniumthiocyanate();
	var clockInt_ammoniumthiocyanate;
	var degree_ammoniumthiocyanate=0;
	var rotCount_ammoniumthiocyanate=0,degreeratate_ammoniumthiocyanate=14;
	var flag_ammoniumthiocyanate=false;
	var rotateEvt_ammoniumthiocyanate;
	$('#saltsolutionlabel_saltsoln').html(salt_solutioncommon);
	if(sampleSalt[result]==sampleSalt[7]){//Copper
		$("#saltSolnImg_ammoniumthiocyanate").css('background-color','#b92743');
	}else {
		if(sampleSalt[result]==sampleSalt[8]){//Nickel
			$("#saltSolnImg_ammoniumthiocyanate").css('background-color','#84a977');
		}else if(sampleSalt[result]==sampleSalt[9]){//Manganes 
			$("#saltSolnImg_ammoniumthiocyanate").css('background-color','#f8e7ed');
		}else if(sampleSalt[result]==sampleSalt[10]){//Zinc
			$("#saltSolnImg_ammoniumthiocyanate").css('background-color','#d7c2b3');
		}
	}
	$('#boardlabel_saltsoln').css({top:'242px',left:'143px'});
	$('#confirmation_ammoniumthiocyanate,#boardlabel_saltsoln').show();
	$('#bottleLabel_ammoniumthiocyanate').html(etherlabel);
	$('#bottleLbl_ammoniumthiocyanate').html(etherlabel);
	$('#ammoniumthiocyanateLabel_ammoniumthiocyanate').html(ammoniumthiocyanateLabel);
	$('#dropper_ammoniumthiocyanate').draggable({ disabled: false });	
	dragDropper_ammoniumthiocyanate('dropper_ammoniumthiocyanate',8,184,39,471);	
	//*--Function to drag droppper---------
	function dragDropper_ammoniumthiocyanate(sampleid,itemtop,itemleft,originaltop,originalleft){	
		$('#'+sampleid).draggable({
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});		
				
			},
			stop : function(event, ui) {
				if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
					$('#'+sampleid).draggable({ disabled: true });				
					$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
					$('#drop2_ammoniumthiocyanate').css({display:'block'});
					$('#drop1_ammoniumthiocyanate').css({top:mainTop+94+'px'});
					$('#drop2_ammoniumthiocyanate').css({top:mainTop+107+'px'});
					$('#drop2_ammoniumthiocyanate').animate({top:mainTop+146+'px'},100,function(){
						$('#drop2_ammoniumthiocyanate').css({display:'none'});
						$('#drop1_ammoniumthiocyanate').css({display:'block'});
						$('#drop1_ammoniumthiocyanate').animate({top:mainTop+197+'px'},1000,function(){					
							$('#drop1_ammoniumthiocyanate').css({display:'none'});
							$('#'+sampleid).css({zIndex:0});
							$('#'+sampleid).animate({top:originaltop+'px',left:originalleft+'px'});													
						
							var solnTopether=$('#etherSoln_ammoniumthiocyanate').position().top;
							var solnHeightether=$('#etherSoln_ammoniumthiocyanate').height();							
							$('#etherSoln_ammoniumthiocyanate').animate({top:'88px',height:'9px'});							
												
							$('#spatulaDiv_ammoniumthiocyanate').draggable({ disabled: false });
							dragspatula_ammoniumthiocyanate('spatulaDiv_ammoniumthiocyanate',46,189,217,457);	
													
						});
					})
					$('#dropperImg_ammoniumthiocyanate').delay(100).animate({top:'93px',height:'0px',left:'10px'});
				}else{
					$('#'+sampleid).css({zIndex:0});
					$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
				}
			}
		})	
	}
	/*function to drag spatula*/
	function dragspatula_ammoniumthiocyanate(sampleid,itemtop,itemleft,originaltop,originalleft){	
		$('#'+sampleid).draggable({
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});		
				
			},	
			stop : function(event, ui) {
				if(this.offsetTop>=mainTop-50 &&this.offsetTop<=mainTop+150 && this.offsetLeft>=mainLeft+80 &&this.offsetLeft<=mainLeft+250){
					$('#'+sampleid).draggable({ disabled: true });				
					$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});
					$('#powderintube_ammoniumthiocyanate').css({display:'block'});	
					$('.p_ammoniumthiocyanate').animate({top:'190px'},1000,function(){
						$('#powderintube_ammoniumthiocyanate').css({display:'none'});	
					});	
					$("#spatulapowder_ammoniumthiocyanate").animate({top:'54px',width:'0px',height:'0px'},100,function(){
						$('#spatulaDiv_ammoniumthiocyanate').animate({top:originaltop+'px',left:originalleft+'px'},function(){
							
							$('#spatulapowder_ammoniumthiocyanate').css({top:'45px',width:'19px',height:'13px'});
							if(sampleSalt[result]==sampleSalt[7]){//Copper
								inferenceMsg=ammoniumthiocyanate_inference;
							}else{
								inferenceMsg=noreactionInference;
							}
							$('#testubedragDiv_ammoniumthiocyanate').draggable({ disabled: false });
							dragtesttube_ammoniumthiocyanate('testubedragDiv_ammoniumthiocyanate',103,279,103,176);
							
							
						});
					});
				}else{
					$('#'+sampleid).css({zIndex:0});
					$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
				}
			}
		})	
	}
	/*function to drag spatula*/
	function dragtesttube_ammoniumthiocyanate(sampleid,itemtop,itemleft,originaltop,originalleft){	
		$('#'+sampleid).draggable({	
			start:function(event, ui) {
				$('#'+sampleid).css({zIndex:2});
				$('#testubedrag_ammoniumthiocyanate').css({zIndex:2});		
				
			},
			drag:function(event, ui){
				$('#testubedrag_ammoniumthiocyanate').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});	
			},
			stop : function(event, ui) {
				if(this.offsetTop>=-50 &&this.offsetTop<=300 && this.offsetLeft>=200 &&this.offsetLeft<=370){
					$('#'+sampleid).draggable({ disabled: true });				
					$('#'+sampleid).css({top:itemtop+'px',left:itemleft+'px'});						
					rotateEvt_ammoniumthiocyanate=setInterval(rotateFn,5);
					
				}else{
					$('#'+sampleid).css({zIndex:0});
					$('#testubedrag_ammoniumthiocyanate').css({zIndex:0});		
					$('#'+sampleid).css({top:originaltop+'px',left:originalleft+'px'});	
				}
				$('#testubedrag_ammoniumthiocyanate').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});	
			}
		})
	}
	//Function for rotating needle of clock
	function needleRotate_ammoniumthiocyanate(){
		degree_ammoniumthiocyanate=degree_ammoniumthiocyanate+2;	
		document.getElementById("needle_ammoniumthiocyanate").style.webkitTransformOrigin='4px 26px';
		document.getElementById("needle_ammoniumthiocyanate").style.webkitTransform = 'rotate(' + degree_ammoniumthiocyanate + 'deg)';
		document.getElementById("needle_ammoniumthiocyanate").style.MozTransformOrigin='4px 26px';
		document.getElementById("needle_ammoniumthiocyanate").style.MozTransform ='rotate('+ degree_ammoniumthiocyanate +'deg)';
		if(degree_ammoniumthiocyanate>360){
			clearInterval(clockInt_ammoniumthiocyanate);	
			degree_ammoniumthiocyanate=0;			
			$('#clock_ammoniumthiocyanate,#needle_ammoniumthiocyanate').css({display:'none'});
			$('#Inference').css({display:'block'});	
			if(sampleSalt[result]==sampleSalt[7]){//Copper
				$("#etherSoln_ammoniumthiocyanate").animate({backgroundColor: "#0000ff"}, 1000 );
			}
		}	
	}	
	//Function to rotate testtube
	function rotation(rotateId,degree){
		rotateId.style.webkitTransformOrigin='50% 50%';
		rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
		rotateId.style.MozTransformOrigin='50% 50%';
		rotateId.style.MozTransform ='rotate('+ degree +'deg)';
	}
	//Function to rotate objects
	function rotateFn(){			
		rotCount_ammoniumthiocyanate++;			
		if(flag_ammoniumthiocyanate==true){
			if(degreeratate_ammoniumthiocyanate>=-20){
				degreeratate_ammoniumthiocyanate--;
				if(degreeratate_ammoniumthiocyanate==-20){
					flag_ammoniumthiocyanate=false;
				}
			}
		}else{
			degreeratate_ammoniumthiocyanate++;
			if(degreeratate_ammoniumthiocyanate==20){
				flag_ammoniumthiocyanate=true;
			}
		}
		rotation(document.getElementById("testubedrag_ammoniumthiocyanate"),degreeratate_ammoniumthiocyanate);
		if(rotCount_ammoniumthiocyanate>100){
			if(sampleSalt[result]==sampleSalt[7]){//Copper
				$("#etherSoln_ammoniumthiocyanate").animate({backgroundColor: "#b92743"});
			}
		}
		if(rotCount_ammoniumthiocyanate>500){
			clearInterval(rotateEvt_ammoniumthiocyanate);
			$("#etherSoln_ammoniumthiocyanate").stop(true);
			rotation(document.getElementById("testubedrag_ammoniumthiocyanate"),0);
			$('#clock_ammoniumthiocyanate,#needle_ammoniumthiocyanate').css({display:'block'});
			clockInt_ammoniumthiocyanate= setInterval(needleRotate_ammoniumthiocyanate,20);
		}
	}

	//Function to reset items on the stage
	function resetammoniumthiocyanate(){
		clearInterval(clockInt_ammoniumthiocyanate);
		clearInterval(rotateEvt_ammoniumthiocyanate);
		rotation(document.getElementById("testubedrag_ammoniumthiocyanate"),0);
		degree_ammoniumthiocyanate=0;
		rotCount_ammoniumthiocyanate=0;
		degreeratate_ammoniumthiocyanate=14;
		flag_ammoniumthiocyanate=false;
		$('#drop1_ammoniumthiocyanate').css({top:mainTop+94+'px',display:'none'});
		$('#drop2_ammoniumthiocyanate').css({top:mainTop+190+'px',display:'none'});
		$('#drop1_ammoniumthiocyanate,#drop2_ammoniumthiocyanate,#dropper_ammoniumthiocyanate').stop(true);
		$('#dropper_ammoniumthiocyanate').css({top:'39px',left:'471px'});
		$('#dropperImg_ammoniumthiocyanate').css({top:'51px',height:'42px',left:'5px'});
		$('#dropperImg_ammoniumthiocyanate,#etherSoln_ammoniumthiocyanate').stop(true);
		$("#etherSoln_ammoniumthiocyanate,#dropperImg_ammoniumthiocyanate").stop(true);
		$('#spatulaDiv_ammoniumthiocyanate').draggable({ disabled: true });
		$('#testubedragDiv_ammoniumthiocyanate').draggable({ disabled: true });
		$('#testubedragDiv_ammoniumthiocyanate').css({zIndex:0});
		$('#testubedrag_ammoniumthiocyanate').css({zIndex:0});	
		$('#dropper_ammoniumthiocyanate').css({zIndex:0});	
		$('#spatulaDiv_ammoniumthiocyanate').css({zIndex:0});
		$('#etherSoln_ammoniumthiocyanate').css({top:'95px',height:'1px'});	
		$("#etherSoln_ammoniumthiocyanate").css({backgroundColor: "#B5A4A4"});	
		$('#dropper_ammoniumthiocyanate,#spatulaDiv_ammoniumthiocyanate').css({zIndex:0});
		$('#powderintube_ammoniumthiocyanate').css({display:'none'});
		$('.p_ammoniumthiocyanate,#spatulapowder_ammoniumthiocyanate,#spatulaDiv_ammoniumthiocyanate').stop(true);
		$('.p_ammoniumthiocyanate').css({top:'0px'});	
		$('#p1_ammoniumthiocyanate').css({top:'18px'});
		$('#p2_ammoniumthiocyanate').css({top:'55px'});
		$('#p3_ammoniumthiocyanate').css({top:'60px'});
		$('#p4_ammoniumthiocyanate').css({top:'39px'});
		$('#p5_ammoniumthiocyanate').css({top:'45px'});
		$('#p6_ammoniumthiocyanate').css({top:'20px'});
		$('#p7_ammoniumthiocyanate').css({top:'24px'});
		$('#p8_ammoniumthiocyanate').css({top:'34px'});
		$('#p9_ammoniumthiocyanate').css({top:'15px'});
		$('#p10_ammoniumthiocyanate').css({top:'28px'});
		$("#spatulapowder_ammoniumthiocyanate").css({top:'45px',width:'19px',height:'13px'});
		$('#clock_ammoniumthiocyanate,#needle_ammoniumthiocyanate').css({display:'none'});
		$("#saltSolnImg_ammoniumthiocyanate").css({backgroundColor: "#b92743"});
		$("#testubedragDiv_ammoniumthiocyanate").css({top:'103px',left:'176px'});
		$("#testubedrag_ammoniumthiocyanate").css({top:'103px',left:'176px'});
	}
}





