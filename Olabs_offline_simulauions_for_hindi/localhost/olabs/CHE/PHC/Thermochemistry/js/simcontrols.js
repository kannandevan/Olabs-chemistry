var helpArray,selectedIndex=0;
var gt=$;
/* Document ready function */
$(document).ready(function(){
	/* Prevent the selection */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	/* Language translating object*/
	/* Variable declaration */
	var selectedSample,stirFlag=false,stirrertimer,stirrerTop=114,tempTop=-2294,tempVal=27,selectedSampleIndex=0,keyFlag=false,count=0,stopCount=0;
	tests=[gt.gettext("Water equivalent"),gt.gettext("Enthalpy of dissolution")];
	var samples=[gt.gettext("Ammonium chloride"),gt.gettext("Potassium chloride"),gt.gettext("Potassium nitrate"),gt.gettext("Copper sulphate pentahydrate")];
	var samplesFormula=["NH<sub>4</sub>Cl (5g)","KCl (4.5g)","KNO<sub>3</sub> (4.5g)","CuSO<sub>4</sub>.5H<sub>2</sub>O (6g)"];
	var labelText2Array=[gt.gettext("Hot water(50 ml)  (t2 = 47&#176C)"),"NH<sub>4</sub>Cl"];
	helpArray=[gt.gettext("Drag the beaker to the calorimeter to pour cold water into it."),gt.gettext("Drag the beaker to the calorimeter to pour hot water into it."),gt.gettext("Note the thermometer reading when temperature becomes constant."),gt.gettext("Drag the sample to the calorimeter to put the sample into it.")];
	var wrongorcorrectImg=["correct.png","wrong.png"];
	var tempDissolve=[36,22];
	var labelText2TopArray=[294,297];
	var tempDissolvePoints=[22,23,21,26];
	var tempDissolveSelected=tempDissolve[0];
	var temperatureLabel=gt.gettext("Temperature"); 
	var selectedTest=tests[selectedIndex];	
	var sampleVal1=[75,60,90,15];
	var sampleVal2=[0.14,0.175,0.116,0.7]; 
	var enthalpyDissolution=[13.73,17.01,34.60,10.68];
	var molarMassArray=[53.49,74.55,101.1,249.68];
	/* Template labels */
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
    /* Experiment heading */
	$('#expName').html(gt.gettext("Thermochemistry"));
	/*Add labels */
	$('#selectTestLbl').html(gt.gettext("Select the test:"));
	$('#selectSampleLbl').html(gt.gettext("Select the sample:"));
	$('#resultLbl').html(gt.gettext("Result"));
	$('#resultWqLbl').html(gt.gettext("Water equivalent of calorimeter:"));
	$('#resultEdLbl').html(gt.gettext("Enthalpy of dissolution of salt:"));
	$('#labelText1').html(gt.gettext("Cold water(50 ml) (t1 = 27&#176C)"));
	$('#croSectionLabel').html(gt.gettext("Cross section"));
	$('#mass1').html(gt.gettext("m1 = Mass of the hot water"));
	$('#mass2').html(gt.gettext("m2 = Mass of the cold water"));
	$('#mass').html(gt.gettext("m = Mass of the water"));
	$('#waterEqLabel').html(gt.gettext("W = Water equivalent"));
	$('#molarmass').html(gt.gettext("M = Molar mass of the sample"));
	$('#molarmass2').html("M = "+molarMassArray[0]+" g/mol");
	$('#weight').html(gt.gettext("w= Weight of the sample"));	
	$('#labelText2').html(labelText2Array[0]);
	$("#ResetBtn").attr('value',gt.gettext('Reset'));
	$("#eqnWaterEqland").html("W= (m<sub>1</sub> (t<sub>2</sub>-t<sub>3</sub>)/(t<sub>3</sub>-t<sub>1</sub>)) - m<sub>2</sub>");
	$("#eqnEnthalpy").html("E= ((W+m) x (t<sub>1</sub>-t<sub>2</sub>) x 4.2 x M) / w");
	selectedSample=samplesFormula[0];
	//---------Add values into combobox--------	
	addintoDropDown($('#selectTest'),tests);
	addintoDropDown($('#selectSample'),samples);
	init();
	//-------Function to add values into combobox------
	function addintoDropDown(getId,valueSet){$.each(valueSet, function(val, text) {getId.append($('<option ></option>').val(val).html(text) );});}
	//Test compobox change function
	$('#selectTestCombo').on('change', function() {	    	
		init();
		selectedIndex=$('#selectTest').val();
		selectedTest=tests[selectedIndex];
		$('#selectSampleCombo').toggle();
		$('#beaker2Div').toggle();
		$('#watchglassDiv').toggle();
		$('#waterEqlandDiv').toggle();
		$('#enthalpyDiv').toggle();
		labelText2Array[1]=samplesFormula[0];	
		$('#labelText2').html(labelText2Array[selectedIndex]);
		labelText2Top=labelText2TopArray[selectedIndex];
		$('#labelText2').css({top:labelText2Top+'px'});
		tempDissolveSelected=tempDissolve[selectedIndex];
		$("#selectSample").val("0");
	});
	//Sample compobox change function
	$('#selectSampleCombo').on('change', function() {
		init();
		selectedSampleIndex=$('#selectSample').val()
		selectedSample=samplesFormula[selectedSampleIndex];
		tempDissolveSelected=tempDissolvePoints[selectedSampleIndex];		
		labelText2Array[1]=selectedSample;
		$('#labelText2').html(labelText2Array[1]);
		tempDissolveSelected=tempDissolvePoints[selectedSampleIndex];
		$('#molarmass2').html("M = "+molarMassArray[selectedSampleIndex]+" g/mol");	
		if(selectedSample==samplesFormula[3]){ //Copper sulphate pentahydrate
			$('#watchglassPowder').css({display:'none'});
			$('#watchglassCuSO4Powder').css({display:'block'});
			$('#powderDrag').attr('src',simPath+"images/copperSulphate.png");
		}
	}); 
	//Show cross sectional view
	$('#croSection').on('change', function() {
		$('#apparatusClose').toggle();	
	}); 
	//---------Drag beaker to add water into calorimeter---------
	function dragBeaker(beakerId,beakersolnId,beakerShadow,topPos,leftPos,defaultTopPos,defaultLeftPos,minTop,maxTop,minLeft,maxLeft,solnContainerTop,solnContainerHeight,apparatusSolnTop){
		$('#'+beakerId).draggable({
			start:function(event,ui){
				$('#'+beakerId).css({zIndex:1});				
				$('#'+beakerShadow).css({display:'none'});
				if(beakerId=="beaker1Drag"){
					$('#woodToMove1').animate({left:'175px'});
					$('#woodToMove2').animate({left:'169px'});
				}
			},	
			stop:function(event, ui){
				if(this.offsetTop>=minTop && this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
					$('#'+beakerId).css({top:topPos+'px',left:leftPos+'px'});
					$('#'+beakerId).rotate(90);
			   		$('#'+beakerId).draggable({ disabled: true });
					$('#'+beakerId).css({cursor:'default'});
					$('#'+beakersolnId).css({display:'none'});					
					$('#solnHzl,#solnVrl').css({display:'block'});
					$('#solnVrl').animate({height: '90px'},function(){
						$('#solnContainer').animate({top: solnContainerTop+'px',height: solnContainerHeight+'px'});
						$('#apparatusSoln').animate({top: apparatusSolnTop+'px'},function(){
							$('#'+beakerId).rotate(0);
							$('#'+beakerId).animate({top:defaultTopPos+'px',left:defaultLeftPos+'px'},function(){
								$('#'+beakerShadow).css({display:'block'});								
								if(beakerId=="beaker1Drag"){
									if(selectedTest==tests[0]){ //Water equivalent
										$('#beaker2Drag').draggable({ disabled: false });
										$('#beaker2Drag').css({cursor:'pointer'});
										dragBeaker('beaker2Drag','beaker2WaterDiv','beaker2Shadow',135,249,223,154,0,260,180,420,233,60,4);
									}else{//Enthalpy of dissolution
										dragSample(189,293,266,153,0,300,250,350);
									}
								}else{
									$('#woodToMove1').animate({left:'261px'});
									$('#woodToMove2').animate({left:'255px'});
									stirrertimer = setInterval(stirrerMotion,500);
								}
							});	
						});
						$('#solnVrl').css({height: '0px'});
						$('#solnHzl,#solnVrl').css({display:'none'});
					});
				}else{
					$('#'+beakerShadow).css({display:'block'});
					$('#'+beakerId).css({top:defaultTopPos+'px',left:defaultLeftPos+'px'});
				}	
					
			}
		});
	}
	//---------Drag sample to add sample into calorimeter---------
	function dragSample(topPos,leftPos,defaultTopPos,defaultLeftPos,minTop,maxTop,minLeft,maxLeft){
		$('#powderDrag').draggable({ disabled: false });
		$('#powderDrag').css({cursor:'pointer'});		
		$('#powderDrag').draggable({
			start:function(event,ui){
				$('#powderDrag').css({zIndex:1});
				if(selectedSample==samplesFormula[3]){ //Copper sulphate pentahydrate
					$('#watchglassCuSO4Powder').css({display:'none'});
				}else{
					$('#watchglassPowder').css({display:'none'});
				}		
			},	
			stop:function(event,ui){
				if(this.offsetTop>=minTop && this.offsetTop<=maxTop && this.offsetLeft>=minLeft &&this.offsetLeft<=maxLeft){
					$('#powderDrag').css({zIndex:0});
					$('#powderDrag').css({top:topPos+'px',left:leftPos+'px'});
					$('#powderDrag').animate({top:'275px'},function (){
						if(selectedSample==samplesFormula[3]){ //Copper sulphate pentahydrate
							$('#apparatusSolnTop').attr('src',simPath+"images/coppersulphateSolnTop.png");
							$('#apparatusSoln').attr('src',simPath+"images/coppersulphateSoln.png");
						}
						stirrertimer = setInterval(stirrerMotion,500);
						$('#woodToMove1').animate({left:'261px'});
						$('#woodToMove2').animate({left:'255px'});
					});					
				}else{
					if(selectedSample==samplesFormula[3]){ //Copper sulphate pentahydrate
						$('#watchglassCuSO4Powder').css({display:'block'});
					}else{
						$('#watchglassPowder').css({display:'block'});
					}
					$('#powderDrag').css({top:defaultTopPos+'px',left:defaultLeftPos+'px'});
				}				
			}
		});		
	}
	//Stir function 
	function stirrerMotion(){		
		tempCalculation();
		if(stirFlag==false){
			$('#stirrer').css({top:stirrerTop+'px'});			
			stirFlag=true;
		}else{
			$('#stirrer').css({top:stirrerTop-10+'px'});	
			stirFlag=false;
		}		
	}
	//Temperature movement calculation
	function tempCalculation(){	
		if(selectedTest==tests[0]){ //Water equivalent	
			if(tempVal<tempDissolveSelected){
				$('#zoomScale').css({top:tempTop+'px'});
				tempVal=Math.floor(tempTop*0.034+104.85);	
				tempTop=tempTop+5;
			}else{						
				$('#tooltip1').html("t<sub>3</sub> = "+tempVal+"&#176C");
				stopCount++;
				if(stopCount>15) {
					$("#selectTest option[value='1']").removeAttr("disabled");
					$("#selectTest option[value='1']").css('background-color', '');		
					$('#tooltip1').css({display:'block'});					
					clearInterval(stirrertimer);
					stirFlag=false;
					$('#stirrer').css({top:'114px'});
				}
			}
		}else{//Enthalpy of dissolution
			if(tempVal>tempDissolveSelected-1){					
				sampleHeight=12-(12/sampleVal1[selectedSampleIndex])*count;
				sampleWidth=26-(26/sampleVal1[selectedSampleIndex])*count;
				sampleOpacity=1-(count/sampleVal1[selectedSampleIndex]);
				sampleTop=275+sampleVal2[selectedSampleIndex]*count;
				sampleLeft=293+sampleVal2[selectedSampleIndex]*count;
				$('#zoomScale').css({top:tempTop+'px'});
				$('#powderDrag').css({top:sampleTop+'px',left:sampleLeft+'px',width:sampleWidth+'px',height:sampleHeight+'px',opacity:sampleOpacity});
				tempVal=Math.floor(tempTop*0.0335+103.849);													
				tempTop=tempTop-2;	
				count=count+1;
			}else{				
				var temperature=parseInt(tempVal)+1;
				$('#tooltip1').html("t<sub>2</sub> = "+temperature+"&#176C");
				stopCount++;
				if(stopCount>15) {	
					$('#tooltip1').css({display:'block'});				
					clearInterval(stirrertimer);
					stirFlag=false;
					$('#stirrer').css({top:'114px'});					
				}
					
					
			}
		}		
	}
	//*--Check answer water equivalent --
	$("#ansWaterEqlndTextbox").keyup(function() {
		var waterEqlndValue=11.11;	
		waterEqlndValue=roundNumber(waterEqlndValue,1);	
		var waterEqlndEnter=$('#ansWaterEqlndTextbox').val();
		waterEqlndEnter=roundNumber(waterEqlndEnter,1); 
		if(keyFlag==true){				
			if(waterEqlndEnter==waterEqlndValue){
				$('#correct1').attr('src',simPath+"images/"+wrongorcorrectImg[0]);			
			}else{
				$('#correct1').attr('src',simPath+"images/"+wrongorcorrectImg[1]);			
			}
			$('#correct1').css({display:'block'});
		}
	});
	//*--Check answer enthalpy of dissolution  --
	$("#ansEnthalpyTextbox").keyup(function() { 
		var EnthalpyValue=enthalpyDissolution[selectedSampleIndex];	
		EnthalpyValue=roundNumber(EnthalpyValue,1);	
		var EnthalpyEnter=$('#ansEnthalpyTextbox').val();
		EnthalpyEnter=roundNumber(EnthalpyEnter,1); 
		if(keyFlag==true){				
			if(EnthalpyEnter==EnthalpyValue){
				$('#correct2').attr('src',simPath+"images/"+wrongorcorrectImg[0]);			
			}else{
				$('#correct2').attr('src',simPath+"images/"+wrongorcorrectImg[1]);			
			}
			$('#correct2').css({display:'block'});
		}
	});
	//Check character
	$("#ansWaterEqlndTextbox,#ansEnthalpyTextbox").keypress(function(key) {
		if((key.charCode >-1 && key.charCode <= 57) ){		
			keyFlag=true;
			return true;
		}else{
			keyFlag=false;
			return false;
		}
	});		
	//Check dots															 
	$("#ansWaterEqlndTextbox,#ansEnthalpyTextbox").change(function() {
		dotRestrict(this);																	  
	});
	//*--Function for valaidating text inputs---		
	function dotRestrict(e){
		var count=0,str=e.value;
		var a1 = new Array();
		a1=str.split("");
		var len=a1.length;
		for(var i=0;i<len;i++){
			if(a1[i]=="."){	count++;}
		}
		if(a1[len-1]=="."){	e.value="";	}
		if(count>1){e.value="";	}
	}
	//*--Function to round the digit with corresponding decimal places----
	function roundNumber(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	}	
	//Initialisation
	function init(){
		stirFlag=false,stirrerTop=114,tempTop=-2294,tempVal=27,count=0,keyFlag=false,stopCount=0;
		clearInterval(stirrertimer);
		$('#beaker1Drag').draggable({ disabled: false});
		$('#beaker1Drag').css({cursor:'pointer'});
		dragBeaker('beaker1Drag','beaker1WaterDiv','beaker1Shadow',135,249,223,42,0,260,180,420,261,29,4);
		$('#beaker1Drag,#beaker2Drag,#powderDrag').css({zIndex:0});				
		$('#woodToMove1').animate({left:'261px'});
		$('#woodToMove2').animate({left:'255px'});
		$('#beaker1Drag').css({top:'223px',left:'42px'});
		$('#beaker2Drag').css({top:'223px',left:'154px'});
		$('#beaker1Drag').rotate(0);
		$('#beaker2Drag').rotate(0);
		$('#beaker2Drag').draggable({ disabled: true });
		$('#beaker2Drag').css({cursor:'default'});
		$('#beaker1WaterDiv,#beaker2WaterDiv,#beaker1Shadow,#beaker2Shadow,#watchglassPowder').css({display:'block'});					
		$('#solnHzl,#solnVrl,#tooltip1,#correct1,#correct2,#watchglassCuSO4Powder').css({display:'none'});
		$('#solnVrl,#solnContainer,#apparatusSoln,#powderDrag').stop(true);
		$('#solnVrl').css({height:'0px'});
		$('#solnContainer').css({top: '286px',height: '0px'});
		$('#apparatusSoln').css({top: '-49px'});
		$('#stirrer').css({top:stirrerTop+'px'});
		$('#zoomScale').css({top:tempTop+'px'});
		$('#powderDrag').draggable({ disabled: true });
		$('#powderDrag').css({cursor:'default'});
		$('#powderDrag').css({top:'266px',left:'153px',width:'26px',height:'12px',opacity:1});
		$('#ansWaterEqlndTextbox').val("");
		$('#ansEnthalpyTextbox').val("");
		$("#selectTest option[value='1']").attr("disabled","disabled");
		$("#selectTest option[value='1']").css('background-color', '#EDECE7');
		$('#watchglassPowder').attr('src',simPath+"images/powder.png");	
		$('#powderDrag').attr('src',simPath+"images/powder.png");
		$('#apparatusSolnTop').attr('src',simPath+"images/apparatusSolnTop.png");
		$('#apparatusSoln').attr('src',simPath+"images/apparatusSoln.png");
	}
});