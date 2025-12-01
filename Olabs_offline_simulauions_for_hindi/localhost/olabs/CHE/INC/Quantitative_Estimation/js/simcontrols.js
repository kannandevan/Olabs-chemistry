//*--Ready function
var gt=$;
$(document).ready(function() {
	document.getElementById("expName").innerHTML=gt.gettext("Quantitative Estimation");
	//*--Apply selectable false
	$('#bgCanvas,#buretteWater,#burette,#titrantBeakers,#titrteBeakers,#beakers,#zoomArea,#drops,#buretteZoom,#solutionDiv,#titrantLabel,#titrateLabel,#volTitrant,#titrateTxt,#titrantTxt,#flask,#tooltp,#popup').mousedown(function(event){
		event.preventDefault();	});	
	//*--Array declaration
	var controlText=[gt.gettext('Titration type:'),gt.gettext('Titrant:'),gt.gettext('Speed of drops:'),gt.gettext('Titrate:'),gt.gettext('Molarity of titrate, M1:'),gt.gettext('Volume of titrate, V1:'),gt.gettext('Indicators:'),gt.gettext('Result'),gt.gettext('Molarity of titrant, a '),gt.gettext('(V1 x M1 x n2) /(V2 x n1)')];
	var canvasText=[gt.gettext("Titrant"),gt.gettext("Titrate")];
	var titrantTypeItems=[gt.gettext('Strong Acid Vs. Strong Base'),gt.gettext('Strong Acid Vs. Weak Base'),gt.gettext('Weak Acid Vs. Strong Base')];
	var titrateItemstype1=[gt.gettext('Sodium hydroxide (NaOH)'),gt.gettext('Potassium hydroxide (KOH)')];
	var amonium=gt.gettext('Ammonium hydroxide');
	var sodium=gt.gettext('Sodium carbonate ');
	var titrateItemstype2=[amonium+'(NH'+String.fromCharCode(8324)+'OH)',sodium+'(Na'+String.fromCharCode(8322)+'CO'+String.fromCharCode(8323)+')'];
	var aceticAcid=gt.gettext('Acetic acid');	
	var oxalicAcid=gt.gettext('Oxalic acid ');	
	var titrateItemstype3=[aceticAcid+'(CH'+String.fromCharCode(8323)+'COOH)',oxalicAcid+'(H'+String.fromCharCode(8322)+'C'+String.fromCharCode(8322)+'O'+String.fromCharCode(8324)+')'];	
	var titrantItemstype1=[gt.gettext('Hydrochloric acid (HCl)'),gt.gettext('Hydriodic acid (HI)')];
	var titrantItemstype3=[gt.gettext('Sodium hydroxide (NaOH)'),gt.gettext('Potassium hydroxide (KOH)')];	
	var titrateLabelArr1=["NaOH","KOH"];
	var titrateLabelArr2=["NH"+String.fromCharCode(8324)+"OH","Na"+String.fromCharCode(8322)+"CO"+String.fromCharCode(8323)];
	var titrateLabelArr3=["CH"+String.fromCharCode(8323)+"COOH","H"+String.fromCharCode(8322)+'C'+String.fromCharCode(8322)+"O"+String.fromCharCode(8324)];	
	var titrantLabelArr1=["HCl","HI"];
	var titrantLabelArr3=["NaOH","KOH"];
	var startLabel=["Start","Stop"];
	var indicatorsItems1=[gt.gettext('Phenolphthalein'),gt.gettext('Methyl orange')];
	var indicatorsItems2=[gt.gettext('Methyl orange')];
	var indicatorsItems3=[gt.gettext('Phenolphthalein')];
	var molesLabel=[gt.gettext('No of moles of titrant, n2'),gt.gettext('No of moles of titrate, n1')]
	var btnLabel=[gt.gettext("Start"),gt.gettext("Stop"),gt.gettext("Reset")],displayArray=['block','none'],testtArray=[gt.gettext("Correct."),gt.gettext("Wrong! Try Again")];
	var wrongorcorrectImg=["correct.png","wrong.png"],toolTipMsgArray=[gt.gettext("Burette"),gt.gettext("Titration flask"),gt.gettext("Clamp stand"),gt.gettext("Click on the nozzle or start button to start the titration."),gt.gettext("Click on the nozzle or stop button to stop the titration."),gt.gettext("Click on the reset button to reset the titration.")];
	var sampleSoln=["conicalFlskWaterPink.png","conicalFlskWaterYellow.png","conicalFlskWater.png","conicalFlskWaterRed.png"];
	var onoffImage=["buretteOff.png","buretteOn.png"];
	var acidBaseStrongEqn=["HCl + NaOH  => NaCl + H"+String.fromCharCode(8322)+"O ","HCl + KOH => KCl + H"+String.fromCharCode(8322)+"O ","HI+ NaOH => NaI +H"+String.fromCharCode(8322)+"O","HI+ KOH=> KI +H"+String.fromCharCode(8322)+"O"];
	var baseweakEqn=["HCl + NH"+String.fromCharCode(8324)+"OH => NH"+String.fromCharCode(8324)+"Cl + H"+String.fromCharCode(8322)+"O","2HCl + Na"+String.fromCharCode(8322)+"CO"+String.fromCharCode(8323)+" => 2NaCl + H"+String.fromCharCode(8322)+"O + CO"+String.fromCharCode(8322)+"","HI+ NH4"+String.fromCharCode(8324)+"OH    => NH"+String.fromCharCode(8324)+"I + H"+String.fromCharCode(8322)+"O ","2HI + Na"+String.fromCharCode(8322)+"CO"+String.fromCharCode(8323)+" => 2NaI + H"+String.fromCharCode(8322)+"O + CO"+String.fromCharCode(8322)];
	var acidWeakEqn=["CH"+String.fromCharCode(8323)+"COOH+NaOH=>CH"+String.fromCharCode(8323)+"COONa+H"+String.fromCharCode(8322)+"O","H"+String.fromCharCode(8322)+"C"+String.fromCharCode(8322)+"O"+String.fromCharCode(8324)+" + 2NaOH => Na"+String.fromCharCode(8322)+"C"+String.fromCharCode(8322)+"O"+String.fromCharCode(8324)+" + 2H"+String.fromCharCode(8322)+"O"," CH"+String.fromCharCode(8323)+"COOH + KOH  => CH"+String.fromCharCode(8323)+"COOK + H"+String.fromCharCode(8322)+"O ","H"+String.fromCharCode(8322)+"C"+String.fromCharCode(8322)+"O"+String.fromCharCode(8324)+"+ 2KOH => K"+String.fromCharCode(8322)+"C"+String.fromCharCode(8322)+"O"+String.fromCharCode(8324)+"+ 2H"+String.fromCharCode(8322)+"O "];
	var volumneTitrate=[10,11,12,13,14,15,16,17,18,19,20];
	var molarityTitrate=[0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1];
	var titrantCountAcidBaseStng=[1,1,1,1];
	var titrateCountAcidBaseStng=[1,1,1,1];	
	var titrantCountBaseweak=[1,2,1,2];
	var titrateCountBaseweak=[1,1,1,1];		
	var titrantCountAcidWeak=[1,2,1,2];	
	var titrateCountAcidWeak=[1,1,1,1];	
	var titrantCount=new Array();
	var titrateCount=new Array();	
	var molarMassLabel=gt.gettext("Molar mass of titrant, b");
	var strngthTitrant=gt.gettext("Strength of the given titrant,[a xb]");	
	var alertArr=[gt.gettext("Please enter correct no.of moles of titrant "),gt.gettext("Please enter correct no.of moles of titrate "),gt.gettext("Please enter no.of moles of titrant"),gt.gettext("Please enter no.of moles of titrate")];
	//*--variable declaration
	var bgTop=$('#bgCanvas').position().top;
	var solnHeight=$('#solutionDiv').height();
	var buretteWaterTop=$('#buretteWater').position().top;
	var buretteZoomWaterTop=$('#buretteZoomWater').position().top;	
	var buretteZoomScaleTop=$('#buretteZoomScale').position().top;
	var solnDivTop=bgTop+298;
	var dropTop=solnDivTop-5;
	var molarMassVal=36.5;
	var molarMass=" "+molarMassVal+" g/mol";
	var strngthUnit="g/lit";
	var molarityUnit="M";
	var resultShow=gt.gettext("Show volume of titrant, V2");
	var dropCnt=0,TotalVolOfTitrate=0;
	var solnTop=$('#soln').position().top;
	var M1=0.01,V1=10,M2=1,titrantVol=0.1,titrantStopVol=0,rotateEvt,rotateCnt=0,rotateCnt2=5,dropEvt;
	var speed=2000,waterIncEvent,waterInc=0.215,zooomwaterInc=.750,solnInc=0.07;
	var noMolesTitrant=titrantCountAcidBaseStng[0];
	var noMolesTitrate=titrateCountAcidBaseStng[0];
	var strength;
	var keyFlag=false;
	//*--Loading option values in drop down----
	addintoDropDown( $('#titrantType'),titrantTypeItems);
	addintoDropDown($('#titrant'),titrantItemstype1);
	addintoDropDown($('#titrate'),titrateItemstype1);
	addintoDropDown($('#indicators'),indicatorsItems1);
	//*--Add label for all controls----
	$('#titrantTypeText').html(controlText[0]);
	$('#titrantText').html(controlText[1]);
	$('#speedText').html(controlText[2]);
	$('#titrateText').html(controlText[3]);
	$('#molarityText').html(controlText[4]);
	$('#volumeText').html(controlText[5]);
	$('#indicatorsText').html(controlText[6]);
	$('#resultText').html(controlText[7]);
	$('#molLabel').html(controlText[9]);
	$('#titrantLabel').html(titrantLabelArr1[0]);
	$('#titrateLabel').html(titrateLabelArr1[0]);
	$('#reaction').html(acidBaseStrongEqn[0]);
	$('#titrantMoles').html(molesLabel[0]);
	$('#titrateMoles').html(molesLabel[1]);
	$('#molarMassTitrant').html(molarMassLabel);
	$('#molarMassval').html(molarMass);
	$('#strngthTitrant').html(strngthTitrant);
	$('#titrntMolarity').html(controlText[8]);
	$('#strngthSym').html(strngthUnit);
	$('#titrantTxt').html(canvasText[0]);
	$('#titrateTxt').html(canvasText[1]);
	$('#molUnit').html(molarityUnit);	
	$('#showChecked').html(resultShow);	
	$('#start').attr('value',gt.gettext('Start'));
	$("#reset").val(gt.gettext(btnLabel[2]));

	toolTipMsgChange();
	startTitration();
	//*--Function to add values into the drop down---					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});				
	}	
	//*--Function to change speed slider---	
	$('#speed').change(function () { 				 							
		 $('#speedchg').html(this.value);
		 speed=(this.value*(-2500))+3000;		 
		 dropsFun();
	});
	//*--Function to change molarity slider---	
	$('#molarity').change(function () {
		M1=this.value;
		$('#molaritychg').html(M1);	
		 resetEvent();
	});
	//*--Function to change volume slider---	
	$('#volume').change(function () {
		V1=this.value;
		$('#volumechg').html(V1);
		 resetEvent();
	});
	//*--Function to select the view---
	$('#titrantType').change(function () {
		$("#titrant option").each(function() {$(this).remove();});
		$("#titrate option").each(function() {$(this).remove();});
		$("#indicators option").each(function() {$(this).remove();});
		$("#reaction").attr("class", "varTitle");
		if($("#titrantType").find(':selected').val()==0){	
			addintoDropDown($('#titrant'),titrantItemstype1);
			addintoDropDown($('#titrate'),titrateItemstype1);
			addintoDropDown($('#indicators'),indicatorsItems1);
		}else if($("#titrantType").find(':selected').val()==1){
			addintoDropDown($('#titrant'),titrantItemstype1);
			addintoDropDown($('#titrate'),titrateItemstype2);
			addintoDropDown($('#indicators'),indicatorsItems2);
		}else{
			$("#reaction").attr("class", "varTitleReaction");
			addintoDropDown($('#titrant'),titrantItemstype3);
			addintoDropDown($('#titrate'),titrateItemstype3);
			addintoDropDown($('#indicators'),indicatorsItems3);
		}
		changeLabel();
		resetEvent();		
	});
	//*--Function to select the Titrant---
	$('#titrant').change(function () {
		resetEvent();//change all slider values
		changeLabel();
		
	});
	//*--Function to select the Titrate---
	$('#titrate').change(function () {
		resetEvent();//change all slider values
		changeLabel();
	});
	function changeLabel(){
		var titrateLabelArr=new Array();
		var displayReaction=new Array();		
		if($("#titrantType").find(':selected').val()==0){	
			titrantLabelArr=titrantLabelArr1;
			titrateLabelArr=titrateLabelArr1;
			displayReaction=acidBaseStrongEqn;
			titrantCount=titrantCountAcidBaseStng;
			titrateCount=titrateCountAcidBaseStng;
		}else if($("#titrantType").find(':selected').val()==1){
			titrantLabelArr=titrantLabelArr1;
			titrateLabelArr=titrateLabelArr2;
			displayReaction=baseweakEqn;
			titrantCount=titrantCountBaseweak;
			titrateCount=titrateCountBaseweak;
		}else{
			titrantLabelArr=titrantLabelArr3;
			titrateLabelArr=titrateLabelArr3;
			displayReaction=acidWeakEqn;
			titrantCount=titrantCountAcidWeak;
			titrateCount=titrateCountAcidWeak;
		}	
		if($("#titrate").find(':selected').val()==0 && $("#titrant").find(':selected').val()==0){
			$('#titrantLabel').html(titrantLabelArr[0]);
			$('#titrateLabel').html(titrateLabelArr[0]);	
			$('#reaction').html(displayReaction[0]);
			noMolesTitrant=titrantCount[0];
			noMolesTitrate=titrateCount[0];
		}else if($("#titrate").find(':selected').val()==1 && $("#titrant").find(':selected').val()==0){
			$('#titrantLabel').html(titrantLabelArr[0]);
			$('#titrateLabel').html(titrateLabelArr[1]);
			$('#reaction').html(displayReaction[1]);
			noMolesTitrant=titrantCount[1];
			noMolesTitrate=titrateCount[1];
		}else if($("#titrate").find(':selected').val()==0 && $("#titrant").find(':selected').val()==1){
			$('#titrantLabel').html(titrantLabelArr[1]);
			$('#titrateLabel').html(titrateLabelArr[0]);
			$('#reaction').html(displayReaction[2]);
			noMolesTitrant=titrantCount[2];
			noMolesTitrate=titrateCount[2];
		}else{
			$('#titrantLabel').html(titrantLabelArr[1]);
			$('#titrateLabel').html(titrateLabelArr[1]);
			$('#reaction').html(displayReaction[3]);
			noMolesTitrant=titrantCount[3];
			noMolesTitrate=titrateCount[3];
		}
		if($('#titrant option:selected').text()==titrantItemstype1[0]){
			 molarMassVal=36.5;
		}else if($('#titrant option:selected').text()==titrantItemstype1[1]){
			 molarMassVal=127.9;
		}else if($('#titrant option:selected').text()==titrantItemstype3[0]){
			 molarMassVal=40;
		}else if($('#titrant option:selected').text()==titrantItemstype3[1]){
			 molarMassVal=56;

		}
		molarMass=" "+molarMassVal+" g/mol";
		$('#molarMassval').html(molarMass);
	}		
	//*--Function to select the Indicators---
	$('#indicators').change(function () {									  
		if($("#indicators").find(':selected').val()==0){
			$("#soln").attr('src',simPath+"images/"+sampleSoln[0]);
		}else{
			$("#soln").attr('src',simPath+"images/"+sampleSoln[1]);
		}
		resetEvent();	
	});
	
	//*--Function to click start button to start titration---
	function startTitration(){		
		$("#start,#onoffCommon").click(function(){
			$('#popup').css({display:displayArray[1]});									
			if(	$("#start").val()==gt.gettext(btnLabel[0] )){				
				$("#buretteOffOn").css({top:'210px'});
				$("#buretteOffOn").attr('src',simPath+"images/"+onoffImage[1]);	
				$("#start").val(gt.gettext(btnLabel[1]));
				rotateEvt=setInterval(rotateFunction,100);
				dropsFun();				
				titrantStopVol=TotalVolOfTitrate;
				$('#volTitrant').html(" "+titrantStopVol+"  ml");	
				$('#molarity,#volume').attr("disabled", "disabled");									
				$('#molTitrant,#molesTitrate,#molesTitrant,#strengthval').removeAttr("disabled");
			}else{
				stopRotation();				
			}
		});
	}
	function dropsFun(){
		clearInterval(dropEvt);
		dropEvt=setInterval(dropFn,speed);
	}
	function clearIntervalfn(){
		clearInterval(rotateEvt);
		clearInterval(dropEvt);
		clearInterval(waterIncEvent);
	}
	function rotateFunction(){		
		if(rotateCnt<5){		
			$("#flask,#soln").rotate(rotateCnt);
			rotateCnt++;			
		}else{	
			if(rotateCnt2>-3){						
				$("#flask,#soln").rotate(rotateCnt2);
				rotateCnt2--;
			}else{
				rotateCnt=0;
				rotateCnt2=5;
			}
		}		
	}
	//*--Function to drop solution---
	function dropFn(){	
		if($("#start").val()==gt.gettext(btnLabel[1] )){	
			$('#drops').css({
				display:'block',
				top:'240px'
			});
		}else{
			$('#drops').css({
				display:'none',
				top:'240px'
			});
		}		
		$('#drops').animate({		
			top:dropTop+'px'
		},function(){
			solutionIncrement();			
			$('#drops').css({
				display:'none',
				top:'240px'
			});			
		});			
	}
	//Function to solution increment
	function solutionIncrement(){		
		if (dropCnt<401) {
			if(	$("#start").val()==gt.gettext(btnLabel[1])){
				dropCnt++;
				solnHeight=solnHeight+solnInc;
				buretteWaterTop=buretteWaterTop+waterInc;
				buretteZoomScaleTop=buretteZoomScaleTop-zooomwaterInc;
				solnDivTop=solnDivTop-solnInc;
				dropTop=solnDivTop-5;
				solnTop=solnTop+solnInc;
				$('#solutionDiv').css({
					height:solnHeight,
					top:solnDivTop			
				});
				$('#soln').css({top:solnTop	});
				calculation();				
				$('#volTitrant').html(" "+TotalVolOfTitrate+" ml");				
				$('#buretteWater').css({top:buretteWaterTop+'px'});
				$('#buretteZoomScale').css({top:buretteZoomScaleTop+'px'});
				for(var i=0;i<molarityTitrate.length;i++){
					for(var j=0;j<volumneTitrate.length;j++){						
						if(M1==molarityTitrate[i] && V1==volumneTitrate[j]){						
							if(TotalVolOfTitrate==titrantVol){
								changeColor();							
								
							}
						}
					}
				}
			}				
		}else{
			$("#start,#onoffCommon").unbind('click');
			$("#start").val(gt.gettext(btnLabel[0]));
			$('#start,#onoffCommon').attr("disabled", "disabled");
			$("#buretteOffOn").attr('src',simPath+"images/"+onoffImage[0]);	
			$("#buretteOffOn").css({top:'214px'});
			$("#flask,#soln").rotate(0);
			clearIntervalfn();
		}
			
	}
	//*--Function to calculate strngth , volume of titrant and molarity of titrant ---
	function calculation(){
		titrantVol=((M1*V1*noMolesTitrant)/(noMolesTitrate*0.1)).toFixed(1);
		M2=((M1*noMolesTitrant*V1)/(titrantVol*noMolesTitrate));				
		strength=M2*molarMassVal;
		TotalVolOfTitrate=(dropCnt/10).toFixed(1);
	}
	//*--Function to change color of the solution ---
	function changeColor(){
		if($("#indicators").find(':selected').val()==0){
			if($("#titrantType").find(':selected').val()==1){
				$("#soln").attr('src',simPath+"images/"+sampleSoln[3]);
			}else{
				$("#soln").attr('src',simPath+"images/"+sampleSoln[2]);
			}
		}else{
			$("#soln").attr('src',simPath+"images/"+sampleSoln[3]);
		}
	}
	//*--Function to calculate no. of moles in titrant---
	$("#molesTitrant").keyup(function() {
		if(keyFlag==true){			
			if($('#molesTitrant').val()==noMolesTitrant){
				$('#correct1').attr('src',simPath+"images/"+wrongorcorrectImg[0]);			
			}else{
				$('#correct1').attr('src',simPath+"images/"+wrongorcorrectImg[1]);			
			}
			$('#correct1').css({display:displayArray[0]});	
		}
	});

	//*--Function to calculate no. of moles in titrate --
	$("#molesTitrate").keyup(function() { 
		if(keyFlag==true){				
			if($('#molesTitrate').val()==noMolesTitrate){
				$('#correct2').attr('src',simPath+"images/"+wrongorcorrectImg[0]);			
			}else{
				$('#correct2').attr('src',simPath+"images/"+wrongorcorrectImg[1]);			
			}
			$('#correct2').css({display:displayArray[0]});
		}
	});
	//*--Function to calculate molarity of titrant ---
	$("#molTitrant").keyup(function() {
		if(keyFlag==true){
			
			var molarity=M2;
			molarity=roundNumber(molarity,2);
			var molarityEnter=$('#molTitrant').val();
			molarityEnter=roundNumber(molarityEnter,2);	
			if(molarity==molarityEnter){
				$('#correct3').attr('src',simPath+"images/"+wrongorcorrectImg[0]);
			}else{
				$('#correct3').attr('src',simPath+"images/"+wrongorcorrectImg[1]);
			}
			$('#correct3').css({display:displayArray[0]});
		}
	});
	//*--Function to calculate strength of titrant ---
	$("#strengthval").keyup(function() {
		if(keyFlag==true){
			$('#result').css({display:displayArray[0]});
			$('#strengthval').removeAttr("disabled");
			var strengthValue=strength;		
			strengthValue=roundNumber(strengthValue,2);
			var strengthValEnter=$('#strengthval').val();
			strengthValEnter=roundNumber(strengthValEnter,2);
			if(strengthValEnter==strengthValue){
				$('#correct').attr('src',simPath+"images/"+wrongorcorrectImg[0]);
				$("#resTxt").html(testtArray[0]);			
			}else{
				$('#correct').attr('src',simPath+"images/"+wrongorcorrectImg[1]);
				$("#resTxt").html(testtArray[1]);
			}
		}
	});
	$("#strengthval,#molTitrant,#molesTitrant,#molesTitrate").keypress(function(key) {
		if((key.charCode >-1 && key.charCode <= 57) ){		
			keyFlag=true;
			return true;
		}else{
			keyFlag=false;
			return false;
		}
	});																		 
	$("#strengthval,#molTitrant,#molesTitrant,#molesTitrate").change(function() {
		dotRestrict(this);																	  
	});
	//*--Function to reset all events ---
	function resetEvent(){		
		stopRotation();	
		$('#molTitrant,#molesTitrate,#molesTitrant,#strengthval').attr("disabled", "disabled");
		if($('#start,#onoffCommon').is(':disabled')==true){			
			$('#start,#onoffCommon').removeAttr("disabled");
			startTitration();
		}		
		TotalVolOfTitrate=0,titrantVol=0.1,dropCnt=0;		
		$('#solutionDiv').css({	height:'13px',top:'295px'});
		$('#soln').css({top:'-70px'});
		$('#buretteWater').css({top:'0px'});
		$('#buretteZoomScale').css({top:'-150px'});
		solnTop=$('#soln').position().top;	
		solnHeight=$('#solutionDiv').height();
		buretteZoomScaleTop=$('#buretteZoomScale').position().top;
		buretteWaterTop=$('#buretteWater').position().top;
		$('#molarity,#volume,#start').removeAttr("disabled");
		$('#correct1,#correct2,#correct3,#result').css({display:displayArray[1]});
		$('#result,#volTitrant').css({display:displayArray[1]});	
		$('#volTitrant').html(" ");
		$('#molesTitrant').val("");
		$('#molesTitrate').val("");
		$('#molTitrant').val("");
		$('#strengthval').val("");
		waterIncEvent,waterInc=0.215,zooomwaterInc=.750,solnInc=0.07;	
		solnDivTop=bgTop+298;
		dropTop=solnDivTop-5;		
		if($("#titrantType").find(':selected').val()==0){	
			if($("#indicators").find(':selected').val()==0){
				$("#soln").attr('src',simPath+"images/"+sampleSoln[0]);
			}else{
				$("#soln").attr('src',simPath+"images/"+sampleSoln[1]);
			}
		}else if($("#titrantType").find(':selected').val()==1){
			$("#soln").attr('src',simPath+"images/"+sampleSoln[1]);
		}else{
			$("#soln").attr('src',simPath+"images/"+sampleSoln[0]);
		}
		$('#displayResult').removeAttr('checked');
		toolTipMsgChange();
	}
	//*--Function to stop the rotation ---
	function stopRotation(){
		rotateCnt=0,rotateCnt2=5;
		$("#flask,#soln").rotate(0);
		$("#buretteOffOn").attr('src',simPath+"images/"+onoffImage[0]);	
		$("#buretteOffOn").css({top:'214px'});
		$("#start").val(gt.gettext(btnLabel[0]));
		$('#molarity,#volume').removeAttr("disabled");
		$('#drops').css({
			display:'none',
			top:'240px'
		});	
		clearIntervalfn();
	}	
	//*--Function to click reset button to reset all events---
	$("#reset").click(function(){
	   resetEvent();
	   window.location.reload();	   
	});
	//*--Function to call showToolTip function---
	function toolTipMsgChange(){		
		$("#tooltp").html(toolTipMsgArray[3]);
		$('#popup').css({display:displayArray[0]});
		showToolTip('buretteDiv',toolTipMsgArray[0],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');	
		showToolTip('flask',toolTipMsgArray[1],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');
		showToolTip('stand',toolTipMsgArray[2],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');		
	}	
	//*--Function to show tooltip---
	function showToolTip(name,msg,tgt,tooltipPos,toolWidth,toolPad,toolFontSize,tipPos){
		$("#"+name).qtip({							
			content: msg,
			position: {corner:{target: tgt,tooltip: tooltipPos}
			},style: { width:toolWidth,padding:toolPad,background: '#FFFF99',color: 'black',textAlign: 'center',			
			fontSize:toolFontSize ,border: {width: 1,radius: 5,color: '#FFFFCC'},tip:tipPos }
		});
	}
	//*--Function to round the digit with corresponding decimal places
	function roundNumber(num, dec) {
		var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
		return result;
	}
	/*..Function for loading tooltip....	*/
	$("#onoffCommon").mouseover(function() {
		$('#popup').css({display:displayArray[0]});
		if(	$("#start").val()==gt.gettext(btnLabel[1])){
			$("#tooltp").html(toolTipMsgArray[4]);
		}else{			
			if($('#start,#onoffCommon').is(':disabled')==false){
				$("#tooltp").html(toolTipMsgArray[3]); 
			}else{
				$("#tooltp").html(toolTipMsgArray[5]);
			}
		}
	}).mouseout(function(){
		$('#popup').css({display:displayArray[1]});
	});
	//*--Function to show the result---
	$('#displayResult').click(function() {
		$("#volTitrant").toggle(this.checked);
	});	
	//*--Function for valaidation---
		
	function dotRestrict(e){
		var count=0;
		var str=e.value;
		var a1 = new Array();
		a1=str.split("");
		var len=a1.length;
		for(var i=0;i<len;i++){
			if(a1[i]=="."){
				count++;
			}
		}
		if(a1[len-1]=="."){
			e.value="";
			
		}
		if(count>1){
			e.value="";
		}
	}
	

});	
	
	

	
	
	
	
	
	
	
	