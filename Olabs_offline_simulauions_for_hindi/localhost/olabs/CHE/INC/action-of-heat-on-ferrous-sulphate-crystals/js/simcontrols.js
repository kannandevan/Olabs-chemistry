// JavaScript Document
// Variable declaration
var labelArray=[];
var eqnArray=[];
var reactionOptions;
var mixturesOptions1;
var mixturesOptions2;
var mixturesOptions3;
					 
var testFlag=1;
var CompFlag=1;
var startFlag=0;
var flagstir=new Boolean(false);
var flag1=new Boolean(true);
var degree1=opacitynum=.3;
var degree=0;
var opacityVal=opacityVal1=opacitycounter=0;
var opacityValTest1=opacityVal1Test1=opacitycounterTest1=0;
var cFlag=0;
var Cflag1=0;
var burnercount=0;
var id,timer2,timerColorChange;
var orderFlag=0;
var flaming;	
var degreeElectroNacl=bgPosNacl=0;
var degreeElectro=bgPos=bgPos1=0;
var topval1=19;
var heightval1=210;
var timerClockElectro;
var timerSilver;
var countSilver=countSilver1=0;
var countSilver2=0;
var distanceRate,powerRate=0;
var rheoval=$("#rheostatKeyImg").position().left;
var rheoval1=350;
var int,int1,int2;
var degree,degreetest1=0;
var start=0;

var divId,msg1,msg2,msg3;
tripClickFlag=1;
var tripClickFlag=0;

// canvas for background image
var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
var bgCanvasimg = new Image;
bgCanvasimg.onload = function(){ 
	bgCanvasctx.drawImage(bgCanvasimg,0,0);
};
bgCanvasimg.src=simPath+'images/BG1.gif';

var controlsArray;
var contentArray;
var msgArray;

// function called on loading..
	
window.onload = function init(){
	
				 
		document.getElementById("expName").innerHTML=gt.gettext("Decomposition Reaction");
		
		//$('#powerSlider')
		
		
		labelArray=[gt.gettext("Thermal Decomposition"),gt.gettext("Electrolytic Decomposition"),gt.gettext("Photo Decomposition"),gt.gettext("Copper Carbonate"),gt.gettext("Ferrous Sulphate"),gt.gettext("Water"),gt.gettext("Sodium Chloride"),gt.gettext("Silver Chloride"),gt.gettext("Silver Bromide"),gt.gettext("To separate "),gt.gettext(" from the mixture"),gt.gettext("Select the mixture:"),gt.gettext("Chemical reaction :"),gt.gettext("Select the power of the light from the source :"),gt.gettext("Select the distance of the light from the sample :"),gt.gettext("Rheostat Resistance :"),gt.gettext("Select the sample :"),gt.gettext("Select the type of reaction :"),gt.gettext("Select the sample :"),gt.gettext("Select the sample :"),gt.gettext(" W"),gt.gettext(" ohm"),gt.gettext("cm"),gt.gettext("Anode(+ve electrode) :"),gt.gettext("Cathode(-ve electrode) :"),gt.gettext("Overall:"),gt.gettext("0 ohm"),gt.gettext("40 W"),gt.gettext("50cm"),gt.gettext("Switch On"),gt.gettext("Start"),gt.gettext("Stop"),gt.gettext("Switch Off"),gt.gettext("Strong heat"),gt.gettext("80&deg;C-100&deg;C"),gt.gettext("Reset")];
		
		 msgArray=[gt.gettext("Copper carbonate decomposes at about 290&deg;C</br>giving off carbon dioxide and leaving copper (II) oxide."),gt.gettext("When heated to 80&deg;C-100&deg;C, FeSO<sub>4</sub>. 7H<sub>2</sub>O lose the water molecules to form</br>white coloured anhydrous FeSO<sub>4</sub>. On strongly heating, the anhydrous FeSO<sub>4</sub></br>decomposes to form a reddish-brown residue of Fe<sub>2</sub>O<sub>3</sub> and SO<sub>2</sub> and</br>SO<sub>3</sub> gases."),gt.gettext("When an electric current is being passed through water, it decomposes</br>into hydrogen gas (H<sub>2</sub>) at the cathode and oxygen gas (O<sub>2</sub>) at the</br>anode. The amount of hydrogen generated is twice that of oxygen."),gt.gettext("When sodium chloride is dissolved in water, it ionizes to form Na<sup>+</sup> ions and Cl<sup>-</sup>.</br>At the anode, Cl<sup>-</sup> ions undergo oxidation to form chlorine gas. At the cathode,</br>water molecules reduced to form hydrogen gas, leaving OH<sup>-</sup> ions. Na<sup>+</sup> ions</br>and OH<sup>-</sup> ions react together to form aqueous NaOH."),gt.gettext("Silver chloride undergoes decomposition in the presence</br>of light giving off chlorine gas and leaving metallic silver."),gt.gettext("Silver bromide undergoes decomposition in the presence</br>of light giving off bromine gas and leaving metallic silver.")];
		
		eqnArray=["2H"+String.fromCharCode(8322)+"O(l)-->O"+String.fromCharCode(8322)+"(g)+4H<sup>+</sup>"+"(aq)+4e<sup>-</sup>",
"2H<sup>+</sup>"+"(aq)+2e<sup>-</sup>"+"   --> H"+String.fromCharCode(8322)+"(g)",
"2H"+String.fromCharCode(8322)+"O(l) --> O"+String.fromCharCode(8322)+"(g)+2H"+String.fromCharCode(8322)+"(g)",
"2Cl<sup>-</sup>"+"(aq) --> Cl"+String.fromCharCode(8322)+"(g) + 2e<sup>-</sup>",
"2H"+String.fromCharCode(8322)+"O(l) +2e<sup>-</sup>"+" --> H"+String.fromCharCode(8322)+"(g)+ 2OH<sup>-</sup>",
"2NaCl(aq)+2H"+String.fromCharCode(8322)+"O (l) --> 2Na<sup>+</sup> "+" (aq) + 2OH <sup>-</sup>"+"(aq)+ H"+String.fromCharCode(8322)+"(g)+ Cl"+String.fromCharCode(8322)+"(g)","NaCl(aq) -->Na<sup>+</sup>"+"(aq)+Cl<sup>-</sup>"+"(aq)","CuCO"+String.fromCharCode(8323)+"(s) --> CuO(s)+CO"+String.fromCharCode(8322)+"(g)","2FeSO"+String.fromCharCode(8324)+"(s)--------->Fe"+String.fromCharCode(8322)+"O"+String.fromCharCode(8323)+"(s) + SO"+String.fromCharCode(8322)+"(g)+SO"+String.fromCharCode(8323)+"(g)","2AgCl(s) --> 2Ag(s)+Cl"+String.fromCharCode(8322)+"(g)","2AgBr(s) --> 2Ag(s)+Br"+String.fromCharCode(8322)+"(g)","FeSO"+String.fromCharCode(8324)+".7H"+String.fromCharCode(8322)+"O(s)---->FeSO"+String.fromCharCode(8324)+"(s) +7H"+String.fromCharCode(8322)+"O(l)"];
		
		controlsArray=['Reset','Start']
		
reactionOptions=[labelArray[0],labelArray[1],labelArray[2]];
mixturesOptions1=[labelArray[3],labelArray[4]];
mixturesOptions2=[labelArray[5],labelArray[6]];
mixturesOptions3=[labelArray[7],labelArray[8]];


		document.getElementById("headngP").innerHTML=labelArray[17];
		document.getElementById("headngP1").innerHTML=labelArray[16];
		document.getElementById("ReactionEnq1").innerHTML=labelArray[12];		
		document.getElementById("ReactionEnq2").innerHTML=labelArray[12];		
		document.getElementById("ReactionEnq3").innerHTML=labelArray[12];		
		document.getElementById("headngP2").innerHTML=labelArray[13]+labelArray[27];
		document.getElementById("headngP3").innerHTML=labelArray[14]+labelArray[28];		
		document.getElementById("headngP4").innerHTML=labelArray[15];


contentArray=[gt.gettext('Select the reaction.'),gt.gettext('Select the sample.'),gt.gettext('To start the experiment,</br>click on the Start button.'),gt.gettext('Drag the spatula over the</br>test tube to put CaCO<sub>3</sub> into it.'),gt.gettext('Click on the knob</br>to switch on the</br>burner.'),gt.gettext('Drag the test tube over the burner</br>to heat the compound.'),gt.gettext('Move the slider to adjust</br>the rheostat resistance.'),gt.gettext('Click on the switch on button.'),gt.gettext('Use the slider to adjust</br>the power of the light.'),gt.gettext('Use the slider to adjust the</br>distance of the light source.'),gt.gettext('Drag the spatula over the</br>test tube to put FeSO<sub>4</sub> into it.'),gt.gettext('To start the experiment,</br>click on the Switch on button.'),gt.gettext('Click on the reset button</br>to redo the experiment.')];

$(document).ready(function() {
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	
		$("#eqnDiv1").css({display:'none'});			
		$("#inferencehelp").css({display:'none' });
		$("#heatLabel").css({display:'none' });
		$("#tempLabel").css({display:'none' });
		$("#rheoSlider").css({display:'none' });
		$("#powerSlider").css({display:'none' });
		$("#distanceSlider").css({display:'none' });
		$("#lightImg").css({display:'none' });
		$("#watchglss1Comp1").css({display:'block' });
		$("#watchglss1Comp2").css({display:'none' });		
		$("#silvernitrateImg").css({display:'none' });
		$("#silverImg").css({display:'none' });		
		$("#headngP3").css({display:'none' });
		$("#headngP2").css({display:'none' });				
		//document.getElementById("headngP2").style.visibility="hidden";		
		addintoDropDown($('#reactionCombo'),reactionOptions);
		addintoDropDown($('#mixtureCombo'),mixturesOptions1);
		$("#SpatullaDiv" ).draggable({ disabled: true });
		$("#testtubeFull" ).draggable({ disabled: true });		
		$("#ReactionEnq1").css({display:'block'});	
		$("#ReactionEnq2").css({display:'none'});
		$("#ReactionEnq3").css({display:'none'});		
		$("#eqnDiv").css({display:'block'});
		document.getElementById("eqnDiv").innerHTML=eqnArray[7];		
		document.getElementById("eq1").innerHTML=eqnArray[0];
		document.getElementById("eq2").innerHTML=eqnArray[1];
		document.getElementById("eq3").innerHTML=eqnArray[2];
		document.getElementById("maineqn").innerHTML=eqnArray[6];
		document.getElementById("anode").innerHTML=labelArray[23];
		document.getElementById("cathode").innerHTML=labelArray[24];
		document.getElementById("overall").innerHTML=labelArray[25];
		document.getElementById("rheoVal").innerHTML=labelArray[26];
		document.getElementById("headngP3").innerHTML=labelArray[14]+labelArray[28];
		document.getElementById("eqnDiv1").innerHTML=eqnArray[11];
		
		$('#reset').attr('value',labelArray[35]);
		$('#Start').attr('value',labelArray[30]);
		$('.power,.distance,.rheo').next(".ws-range").css('visibility','hidden');
	});	




}

/*function tooltipHide(){
	if(tripClickFlag==1){//after clicking help btn and select combobox,reset all tooltips of help
trip.stop();
tripClickFlag=false;
}
	}*/
	
	//*--Function to add values into the drop down---					   
function addintoDropDown(getId,valueSet){	
	var selected = getId;
	$.each(valueSet, function(val, text) {
		selected.append(
			$('<option></option>').val(val).html(text)
		);
	});
}


function startExperiment()
{
	if((document.getElementById("Start").value==labelArray[29])||(document.getElementById("Start").value==labelArray[30]))
	{
		if((testFlag==3))
		{
			$("#electroSetupKey").css({display:'none'});			
			document.getElementById("Start").value=labelArray[31];
		}
		else if((testFlag==2))
		{
			$("#electroSetupKey").css({display:'block'});				
			document.getElementById("Start").value=labelArray[32];
		}
		StartDecomposition();
	}
	else if((document.getElementById("Start").value==labelArray[32])||(document.getElementById("Start").value==labelArray[31]))
	{
		if((testFlag==3))
		{
			$("#electroSetupKey").css({display:'none'});				
			document.getElementById("Start").value=labelArray[30];
		}
		else if((testFlag==2))
		{
		
			$("#electroSetupKey").css({display:'none'});				
			document.getElementById("Start").value=labelArray[29];
		}
		StopDecomposition();	
	}
}
//document.getElementById("Start")
	//function for changing reaction combo box
function reactionComboselection()
{
	$("#bubbles").css({display:'none' });		
	$("#bubbles1").css({display:'none' });
	$("#maineqn").css({display:'none'});
	$("#heatLabel").css({display:'none' });		
	$("#tempLabel").css({display:'none' });		
	document.getElementById("rheoSlider").value=0;
	document.getElementById("rheoVal").innerHTML=labelArray[26];
	document.getElementById("powerSlider").value=40;
	document.getElementById("headngP2").innerHTML=labelArray[13]+labelArray[27];
	document.getElementById("distanceSlider").value=50;
	document.getElementById("headngP3").innerHTML=labelArray[14]+labelArray[28];
	
	//tooltipHide();			
	CompFlag=1;
	if( document.getElementById("reactionCombo").selectedIndex==0)
		{	
		document.getElementById("Start").value=labelArray[30];
		$("#ImgInSpatulla").css({display:'block' });//added
		$("#ImgInSpatulla1").css({display:'none' });//added
		document.getElementById("inferenceDiv").style.visibility="hidden";
		$("#inferencehelp").css({display:'none' });		
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		bgCanvasimg.src=simPath+'images/BG1.gif';
		bgCanvasctx.drawImage(bgCanvasimg,0,0);		
		testFlag=1;
		$("#electroSetup").css({display:'none'});
		$("#electroSetupKey").css({display:'none'});		
		$("#rheostatKeyImg").css({display:'none'});
		$("#electrobeakerwaterImg").css({display:'none'});		
		$("#electroShadowImg").css({display:'none'});
		$("#testtubeClampImg").css({display:'none'});		
		$("#waterLeftDiv").css({display:'none' });
		$("#waterRightDiv").css({display:'none' });			
		document.getElementById("headngP1").innerHTML=labelArray[16];
		removeOptions(document.getElementById("mixtureCombo"));
		addintoDropDown($('#mixtureCombo'),mixturesOptions1);
		$("#eqnDiv").css({display:'block'});
		document.getElementById("eqnDiv").innerHTML=eqnArray[7];
		$("#headngP2").css({display:'none' });
		$('.power,.distance').next(".ws-range").css('visibility','hidden');
		$('.rheo').next(".ws-range").css('visibility','hidden');
		$("#powerSlider").css({display:'none' });
		$("#headngP3").css({display:'none' });
		$("#distanceSlider").css({display:'none' });
		$("#ReactionEnq1").css({display:'block'});
		$("#ReactionEnq2").css({display:'none'});
		$("#ReactionEnq3").css({display:'none'});		
		$("#SpatullaDiv").css({display:'block' });		
		$("#testtubeFull").css({display:'block' });		
		$("#testtubestandImg").css({display:'block' });		
		$("#burnerImg").css({display:'block' });		
		$("#startKnob").css({display:'block' });
		$("#watchglss1").css({display:'block' });
		$("#scaleImg").css({display:'none' });
		$("#lampImg").css({display:'none' });		
		$("#watchglass3Img").css({display:'none' });		
		$("#silvernitrateImg").css({display:'none' });		
		$("#silverImg").css({display:'none' });
		$("#headngP4").css({display:'none' });
		$("#rheoVal").css({display:'none' });		
		$("#rheoSlider").css({display:'none' });		
		$("#burnerKnob").css({display:'block'});
		$("#burnerKnob2").css({display:'none'});
		$("#watchglss1Comp1").css({display:'block' });
		$("#anode").css({display:'none'});
		$("#eq1").css({display:'none'});
		$("#eq2").css({display:'none'});
		$("#eq3").css({display:'none'});		
		$("#cathode").css({display:'none'});
		$("#overall").css({display:'none'});
		$("#maineqn").css({display:'none'});
		
	}
	else if( document.getElementById("reactionCombo").selectedIndex==1)
	{
		testFlag=2;
		$(".nano").nanoScroller();
		$("#eqnDiv1").css({display:'none'});//added
		$("#electroSetupKey").css({display:'none'});		
		document.getElementById("Start").value=labelArray[29];
		$("#anode").css({display:'block'});
		$("#eq1").css({display:'block'});
		$("#eq2").css({display:'block'});
		$("#eq3").css({display:'block'});
		$("#cathode").css({display:'block'});
		$("#overall").css({display:'block'});
		$("#maineqn").css({display:'none'});		
		document.getElementById("inferenceDiv").style.visibility="hidden";	
		$("#inferencehelp").css({display:'none' });	
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		bgCanvasimg.src=simPath+'images/BG2.gif';
		bgCanvasctx.drawImage(bgCanvasimg,0,0);		
		$("#waterLeftDiv").css({display:'block' });
		$("#waterRightDiv").css({display:'block' });
		$("#burnerKnob").css({display:'none'});
		$("#burnerKnob2").css({display:'none'});
		$("#electroSetup").css({display:'block'});
		$("#electroShadowImg").css({display:'block'});
		$("#electrobeakerwaterImg").css({display:'block'});
		$("#testtubeClampImg").css({display:'block'});
		$("#rheostatKeyImg").css({display:'block'});		
		$("#watchglss1Comp1").css({display:'none' });
		$("#watchglss1Comp2").css({display:'none' });		
		$("#eqnDiv").css({display:'none'});		
		document.getElementById("headngP1").innerHTML=labelArray[18];
		removeOptions(document.getElementById("mixtureCombo"));
		addintoDropDown($('#mixtureCombo'),mixturesOptions2);
		$("#SpatullaDiv").css({display:'none' });
		$("#testtubeFull").css({display:'none' });
		$("#testtubestandImg").css({display:'none' });
		$("#burnerImg").css({display:'none' });
		$("#startKnob").css({display:'none' });
		$("#watchglss1").css({display:'none' });
		$("#headngP2").css({display:'none' });
		$("#powerSlider").css({display:'none' });
		$('.power,.distance').next(".ws-range").css('visibility','hidden');
		$("#headngP3").css({display:'none' });
		$("#headngP4").css({display:'block'});
		$("#rheoVal").css({display:'block'});								
		$("#rheoSlider").css({display:'block'});
		$('.rheo').next(".ws-range").css('visibility','visible');
		$("#distanceSlider").css({display:'none' });
		$("#ReactionEnq2").css({display:'block'});	
		$("#ReactionEnq1").css({display:'none'});
		$("#ReactionEnq3").css({display:'none'});
		$("#scaleImg").css({display:'none' });
		$("#lampImg").css({display:'none' });		
		$("#watchglass3Img").css({display:'none' });		
		$("#silvernitrateImg").css({display:'none' });		
		$("#silverImg").css({display:'none' });
		$("#watchglss1Comp1").css({display:'none' });
	}
	else if( document.getElementById("reactionCombo").selectedIndex==2)
	{
		testFlag=3;
		$(".nano").nanoScroller();
		$("#eqnDiv1").css({display:'none'});//added
		$("#electroSetupKey").css({display:'none'});		
		document.getElementById("Start").value=labelArray[30];
		$("#anode").css({display:'none'});
		$("#eq1").css({display:'none'});
		$("#eq2").css({display:'none'});
		$("#eq3").css({display:'none'});
		$("#cathode").css({display:'none'});
		$("#overall").css({display:'none'});
		$("#maineqn").css({display:'none'});		
		document.getElementById("inferenceDiv").style.visibility="hidden";	
		$("#inferencehelp").css({display:'none' });	
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		bgCanvasimg.src=simPath+'images/BGScene3.gif';
		bgCanvasctx.drawImage(bgCanvasimg,0,0);
		$("#electroSetup").css({display:'none'});
		$("#rheostatKeyImg").css({display:'none'});
		$("#electroShadowImg").css({display:'none'});
		$("#electrobeakerwaterImg").css({display:'none'});
		$("#testtubeClampImg").css({display:'none'});		
		$("#waterLeftDiv").css({display:'none' });
		$("#waterRightDiv").css({display:'none' });		
		$("#burnerKnob").css({display:'none'});
		$("#burnerKnob2").css({display:'none'});		
		$("#watchglss1Comp1").css({display:'none' });
		$("#watchglss1Comp2").css({display:'none' });
		$("#headngP4").css({display:'none' });		
		$("#rheoVal").css({display:'none' });
		$("#rheoSlider").css({display:'none' });
		$("#eqnDiv").css({display:'block'});
		document.getElementById("eqnDiv").innerHTML=eqnArray[9];
		//document.getElementById("headngP2").style.visibility="visible";
		document.getElementById("headngP1").innerHTML=labelArray[19];
		removeOptions(document.getElementById("mixtureCombo"));
		addintoDropDown($('#mixtureCombo'),mixturesOptions3);
		$("#SpatullaDiv").css({display:'none' });		
		$("#testtubeFull").css({display:'none' });		
		$("#testtubestandImg").css({display:'none' });		
		$("#burnerImg").css({display:'none' });		
		$("#startKnob").css({display:'none' });
		$("#watchglss1").css({display:'none' });
		$("#scaleImg").css({display:'block' });
		$("#lampImg").css({display:'block' });		
		$("#watchglass3Img").css({display:'block' });		
		$("#silvernitrateImg").css({display:'block' });	
		$("#silvernitrateImg").css({'opacity':'1' });	
		$("#silvernitrateImg").css({display:'block' });		
		$("#silverImg").css({display:'block' });		
		$("#headngP2").css({display:'block' });
		$("#powerSlider").css({display:'block' });
		$('.power,.distance').next(".ws-range").css('visibility','visible');
		$('.rheo').next(".ws-range").css('visibility','hidden');
		$("#headngP3").css({display:'block' });
		$("#headngP2").css({display:'block' })
		$("#distanceSlider").css({display:'block' });
		$("#ReactionEnq3").css({display:'block'});
		$("#ReactionEnq2").css({display:'none'});
		$("#ReactionEnq1").css({display:'none'});
		$("#watchglss1Comp1").css({display:'none' });
	}
}

//function for clock rotation
function clockRotate()
{
	degree++;
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degree+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degree +'deg)'});
}

//function for clock rotation in test1
function clockRotate1()
{
	//console.log(dropComplete);
	degreetest1++;
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degreetest1+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degreetest1 +'deg)'});
}

//fn for stop the decomposition
function StopDecomposition()
{
	if(startFlag==5||startFlag==6)//for photo decomposition
	{
		clearInterval(int);
		clearInterval(timerSilver);
		$("#lightImg").css({display:'none' });
		document.getElementById("powerSlider").disabled=false;
		document.getElementById("distanceSlider").disabled=false;
		$('#Start').prop('disabled', false);
	}
	else if(startFlag==3||startFlag==4)//for electrolysis
	{
		$("#bubbles").css({display:'none'});
		$("#bubbles1").css({display:'none'});
		//$("#needle").css({display:'none'});
		//$("#clockBody").css({display:'none' });
		clearInterval(timerClockElectro);
		$('#Start').prop('disabled', false);
	}
}

//fn for changing the powerslider
function ChangePower(val)
{
		document.getElementById("headngP2").innerHTML=labelArray[13]+val+labelArray[20];	
		if(Number(val)==40)
		{
			$("#lightImg").css({'opacity':'0.4'});		
		}
		else if(Number(val)==50)
		{
			$("#lightImg").css({'opacity':'0.5'});
		}
		else if(Number(val)==60)
		{
			$("#lampImg").animate({'opacity':'0.6'});
		}
		else if(Number(val)==70)
		{
			$("#lightImg").css({'opacity':'0.7'});
		}
		else if(Number(val)==80)
		{
			$("#lightImg").css({'opacity':'0.8'});
		}
		else if(Number(val)==90)
		{
			$("#lightImg").css({'opacity':'0.9'});	
		}
		else if(Number(val)==100)
		{
			$("#lightImg").css({'opacity':'1'});
		}
}

//fn for changing the resistance

function Changerheoval(val2)
{
	document.getElementById("rheoVal").innerHTML="";
	document.getElementById("rheoVal").innerHTML=val2+labelArray[21];
	rheoval1=349+(rheoval+(val2/4.7));
	$("#rheostatKeyImg").css({left:rheoval1+"px"});
}

//fn for changing the distance
function Changedistance(val1)
{
	document.getElementById("headngP3").innerHTML=labelArray[14]+val1+labelArray[22];
	if(Number(val1)==50)
	{
		$("#lampImg").animate({left:'279px'});
		$("#lightImg").css({left:'-187px'});
	}
	else if(Number(val1)==60)
	{
		$("#lampImg").animate({left:'327px'});
		$("#lightImg").css({left:'-139px'});
	}
	else if(Number(val1)==70)
	{
		$("#lightImg").css({left:'-91px'});
		$("#lampImg").animate({left:'375px'});
	}
	else if(Number(val1)==80)
	{
		$("#lampImg").animate({left:'423px'});
		$("#lightImg").css({left:'-43px'});
	}
	else if(Number(val1)==90)
	{
		$("#lampImg").animate({left:'472px'});
		$("#lightImg").css({left:'5px'});
	}
	else if(Number(val1)==100)
	{
		$("#lampImg").animate({left:'520px'});
		$("#lightImg").css({left:'54px'});
	}
}

//fn for chnaging the mixture combo
function mixtureComboselection()
{
	//tooltipHide();
	if( document.getElementById("mixtureCombo").selectedIndex==0)
	{
		CompFlag=1;				
		if(testFlag==1)//for thermolysis copper carbonate
		{			
			$("#watchglss1Comp1").css({display:'block' });
			$("#watchglss1Comp2").css({display:'none' });			
			$("#watchglss1").css({display:'block' });
			//$("#watchglss2").css({display:'none' });
			$("#ImgInSpatulla").css({display:'block' });
			$("#ImgInSpatulla1").css({display:'none' });
			$("#testtubePowderImg1").css({display:'block' });
			$("#testtubePowderImg2").css({display:'none' });
			$("#testtubePowderCuOImg").css({display:'block',top:'87px'});
			$("#testtubePowderImg1").css({display:'block' });
			$("#eqnDiv").css({display:'block'});
			document.getElementById("eqnDiv").innerHTML=eqnArray[7];			
			$("#anode").css({display:'none'});
			$("#maineqn").css({display:'none'});			
			$("#eq1").css({display:'none'});
			$("#eq2").css({display:'none'});
			$("#eq3").css({display:'none'});		
			$("#cathode").css({display:'none'});
			$("#overall").css({display:'none'});
			$("#heatLabel").css({display:'none' });			
			$("#tempLabel").css({display:'none' });
			$("#eqnDiv1").css({display:'none'});
		}
		else if(testFlag==2)//for electrolysis water
		{
			
			$("#eqnDiv").css({display:'none'});													
			$("#headngP4").css({display:'block'});
			$("#rheoVal").css({display:'block' });								
			$("#rheoSlider").css({display:'block'});
			$('.rheo').next(".ws-range").css('visibility','visible');
			$("#ReactionEnq2").css({display:'block'});
			$("#anode").css({display:'block'});
			$("#eq1").css({display:'block'});
			$("#eq2").css({display:'block'});
			$("#eq3").css({display:'block'});
			$("#cathode").css({display:'block'});
			$("#overall").css({display:'block'});
			$("#maineqn").css({display:'none'});
			$("#heatLabel").css({display:'none' });			
			$("#tempLabel").css({display:'none' });
			document.getElementById("eq1").innerHTML=eqnArray[0];
			document.getElementById("eq2").innerHTML=eqnArray[1];
			document.getElementById("eq3").innerHTML=eqnArray[2];
			$("#eqnDiv1").css({display:'none'});			

			
		}
		else if(testFlag==3)//for photolysis silver chloride
		{
			$("#silvernitrateImg").attr('src', simPath+'images/silvernitrate.png');	
			$("#eqnDiv").css({display:'block'});
			document.getElementById("eqnDiv").innerHTML=eqnArray[9];
			$("#anode").css({display:'none'});
			$("#eq1").css({display:'none'});
			$("#eq2").css({display:'none'});
			$("#eq3").css({display:'none'});		
			$("#cathode").css({display:'none'});
			$("#overall").css({display:'none'});
			$("#maineqn").css({display:'none'});
			$("#heatLabel").css({display:'none' });	
			$("#tempLabel").css({display:'none' });	
			$("#eqnDiv1").css({display:'none'});
			$('rheo').next(".ws-range").css('visibility','hidden');
	
		}
	}
	else if( document.getElementById("mixtureCombo").selectedIndex==1)
	{
		CompFlag=2;
		if(testFlag==1)//for thermolysis ferrous sulphate
		{
			
			$("#watchglss1Comp1").css({display:'none' });
			$("#watchglss1Comp2").css({display:'block' });
			$("#watchglss1").css({display:'block' });
			$("#ImgInSpatulla1").css({display:'block' });
			$("#ImgInSpatulla").css({display:'none' });
			$("#testtubePowderImg2").css({display:'block' });
			$("#testtubePowderBlackImg").css({display:'block' });		
			$("#testtubePowderImg1").css({display:'none' });
			$("#eqnDiv").css({display:'block'});
			$("#eqnDiv1").css({display:'block'});			
			document.getElementById("eqnDiv").innerHTML=eqnArray[8];
			$("#anode").css({display:'none'});
			$("#eq1").css({display:'none'});
			$("#eq2").css({display:'none'});
			$("#eq3").css({display:'none'});		
			$("#cathode").css({display:'none'});
			$("#overall").css({display:'none'});
			$("#maineqn").css({display:'none'});
			$("#heatLabel").css({display:'block' });
			$("#tempLabel").css({display:'block' });
		}
		else if(testFlag==2)//for electrolysis sodium chloride 
		{
			$("#eqnDiv").css({display:'none'});			
			$("#maineqn").css({display:'block'});		
			$("#anode").css({display:'block'});
			$("#eq1").css({display:'block'});
			$("#eq2").css({display:'block'});
			$("#eq3").css({display:'block'});
			$("#cathode").css({display:'block'});
			$("#overall").css({display:'block'});			
			document.getElementById("eq1").innerHTML=eqnArray[3];
			document.getElementById("eq2").innerHTML=eqnArray[4];
			document.getElementById("eq3").innerHTML=eqnArray[5];
			$("#heatLabel").css({display:'none' });
			$("#tempLabel").css({display:'none' });
			$("#eqnDiv1").css({display:'none'});			

		}
		
		else if(testFlag==3)//for photolysis silver bromide
		{
			$("#eqnDiv").css({display:'block'});
			document.getElementById("eqnDiv").innerHTML=eqnArray[10];		
			$("#silvernitrateImg").attr('src', simPath+'images/silverbromide.png');	
			$("#maineqn").css({display:'none'});		
			$("#anode").css({display:'none'});
			$("#eq1").css({display:'none'});
			$("#eq2").css({display:'none'});
			$("#eq3").css({display:'none'});		
			$("#cathode").css({display:'none'});
			$("#overall").css({display:'none'});
			$("#heatLabel").css({display:'none' });
			$("#tempLabel").css({display:'none' });
			$("#eqnDiv1").css({display:'none'});
			$('rheo').next(".ws-range").css('visibility','hidden');

		}
	}
}

//decomposition of silver chloride
function silverchloridefn()
{
	if(startFlag==5||startFlag==6)
	{
		$("#needle").css({display:'block' });
		$("#clockBody").css({display:'block' });
		int=setInterval(clockRotate,20);
		timerSilver=setInterval(decomposeSilver,200);
	}
}
	
function decomposeSilver()
{
	countSilver++;
	distanceRate=document.getElementById('distanceSlider').value;
	powerRate=document.getElementById('powerSlider').value/5;
	countSilver1=countSilver/((distanceRate-powerRate)*2);
	countSilver2=1-countSilver1;
	$("#silvernitrateImg").css({'opacity': countSilver2});		
	if(countSilver2==0)
	{
		clearInterval(timerSilver);
		clearInterval(int);
		$("#needle").css({display:'none' });
		$("#clockBody").css({display:'none' });
		$("#lightImg").css({display:'none' });
		$('#Start').prop('disabled', true);	
		document.getElementById("inferenceDiv").style.visibility="visible";
		$("#inferencehelp").css({display:'block' });
	}
}

//remove elements from drop down box
function removeOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		selectbox.remove(i);
	}
}

//starting the decomposion
function StartDecomposition()
{
	
	$('#mixtureCombo').prop('disabled', true);
	$('#reactionCombo').prop('disabled', true);
	if(testFlag==1 && CompFlag==1)//thermolysis copper sulphate
	{
		startFlag=1;
		$('#Start').prop('disabled', true);
		$("#SpatullaDiv" ).draggable({ disabled: false });
		SpatullaDrag();
	}
	else if(testFlag==1 && CompFlag==2) //thermolysis ferrous silphate
	{
		startFlag=2;
		$('#Start').prop('disabled', true);
		$("#SpatullaDiv" ).draggable({ disabled: false });
		SpatullaDrag();
	}
	else if(testFlag==2 && CompFlag==1)// electrolysis water
	{
		startFlag=3;
		startElectrolysis();
	}
	else if(testFlag==2 && CompFlag==2)//electrolysis nacl
	{
		startFlag=4;
		startElectrolysis();
	}
	else if(testFlag==3 && CompFlag==1)//photolysis silver chloride
	{
		startFlag=5;
		document.getElementById("powerSlider").disabled=true;
		document.getElementById("distanceSlider").disabled=true;		
		$("#lightImg").css({display:'block' });
		silverchloridefn();
	}
	else if(testFlag==3 && CompFlag==2)//photolysis silver bromide
	{
		startFlag=6;
		document.getElementById("powerSlider").disabled=true;
		document.getElementById("distanceSlider").disabled=true;		
		$("#lightImg").css({display:'block' });
		silverchloridefn();
	}
	
}

// fn to start electrolysis
function startElectrolysis()
{
	$('#rheoSlider').prop('disabled', true);
	document.getElementById("inferenceDiv").style.visibility="hidden";
	$("#inferencehelp").css({display:'none' });
	if(startFlag==3)
	{
		$("#bubbles").css({left:'0px' });
		$("#bubbles1").css({left:'58px' });
		$("#needle").css({display:'block' });
		$("#clockBody").css({display:'block' });
		timerClockElectro=setInterval(clockElectro,20);
	}
	else if(startFlag==4)
	{
		$("#bubbles1").css({left:'0px' });		
		$("#bubbles").css({left:'58px' });
		$("#needle").css({display:'block' });
		$("#clockBody").css({display:'block' });
		timerClockElectro=setInterval(clockElectroNacl,20);
	}
}

//for water
function clockElectro()
{
	
	var resistance=document.getElementById('rheoSlider').value;
	var resistance1=(1+Math.abs(600-resistance))/600;	
	degreeElectro++;
	var topval=$("#bubbles").position().top;
	var heightval=$("#bubbles").height();
	bgPos=bgPos+0.25+(resistance1*0.02);
	bgPos1=bgPos1+0.1+(resistance1*0.02);
	if(heightval1>=0)
	{
		topval1=topval1+(bgPos*0.005);
		heightval1=heightval1-(bgPos*0.005);
	}	
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degreeElectro+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degreeElectro +'deg)'});	
	$("#bubbles").css({display:'block' });		
	$("#bubbles1").css({display:'block' });
	$("#waterLeftDiv").css({'background-position':'0px '+bgPos+'px' });	  
	$("#waterRightDiv").css({'background-position':'0px '+bgPos1+'px' });
	$("#bubbles").css({top:topval1+'px',height:heightval1+"px" });	  
	$("#bubbles1").css({top:topval1+'px',height:heightval1+"px" });
	if(bgPos>=152)
	{		
		$("#bubbles").css({display:'none'});
		$("#bubbles1").css({display:'none'});
		$("#needle").css({display:'none'});
		$("#clockBody").css({display:'none' });
		clearInterval(timerClockElectro);
		document.getElementById("inferenceDiv").style.visibility="visible";	
		$("#inferencehelp").css({display:'block' });	
		$('#Start').prop('disabled', true);
	}
}

//for NaCl
function clockElectroNacl()
{
	var resistance=document.getElementById('rheoSlider').value;
	var resistance1=(1+Math.abs(600-resistance))/600;
	degreeElectroNacl++;
	bgPosNacl=bgPosNacl+0.15+(resistance1*0.02);
	
	var topval=$("#bubbles").position().top;
	var heightval=$("#bubbles").height();
	if(heightval1>=0)
	{
		topval1=topval1+(bgPosNacl*0.004);
		heightval1=heightval1-(bgPosNacl*0.004);
	}	
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degreeElectroNacl+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degreeElectroNacl +'deg)'});	
	$("#bubbles").css({display:'block' });		
	$("#bubbles1").css({display:'block' });
	$("#waterLeftDiv").css({'background-position':'0px '+bgPosNacl+'px' });	  
	$("#waterRightDiv").css({'background-position':'0px '+bgPosNacl+'px' });
	$("#bubbles").css({top:topval1+'px',height:heightval1+"px" });	  
	$("#bubbles1").css({top:topval1+'px',height:heightval1+"px" });
	if(bgPosNacl>=100)
	{	
		$("#bubbles").css({display:'none'});
		$("#bubbles1").css({display:'none'});
		$("#needle").css({display:'none'});
		$("#clockBody").css({display:'none' });
		clearInterval(timerClockElectro);
		document.getElementById("inferenceDiv").style.visibility="visible";	
		$("#inferencehelp").css({display:'block' });
		$('#Start').prop('disabled', true);	
	}
}

////////////
function SpatullaDrag(){//Drag spatulla function
	$("#SpatullaDiv").draggable({
		drag: function(event,ui){			
		},
		stop: function() 
		{
			if(($("#SpatullaDiv").position().left>=245)&&($("#SpatullaDiv").position().left<=324)&&
				($("#SpatullaDiv").position().top>=-38)&&($("#SpatullaDiv").position().top<=130))
				{//condition satisfy
					$("#SpatullaDiv").css({left:'293px',top:'65px'});
					$("#SpatullaDiv" ).draggable({ disabled: true });
					if(startFlag==1)
					{
						$("#drops1").css({display:'block'});
						$("#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10,						#drops11,#drops2,#drops13,#drops14").css({display:'block'});
						$('#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10,						#drops11,#drops2,#drops13,#drops14').animate({top:'290px'});
						$('#ImgInSpatulla').animate({opacity:'0'},500,function(){	
						$('#ImgInSpatulla').css({display:'none'})
						});
						$('#drops1').animate({top:'290px'},500,function(){	
						$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10,						#drops11,#drops2,#drops13,#drops14').css({display:'none'});
						//						$("#SpatullaDiv").css({display:'none' });	
						$("#testtubePowderImg1").css({'opacity':'1'});
						$("#testtubePowderCuOImg").css({'opacity':'0',display:'block'});
						
						$("#SpatullaDiv").css({left:'97px',top:'247px'});
						
						orderFlag=1;
						});
					}
					else if(startFlag==2)
					{
						$("#drops1").css({display:'none'});
						$("#dropsiron2,#dropsiron3,#dropsiron4,#dropsiron5,#dropsiron6,#dropsiron7,#dropsiron8,#dropsiron9,#dropsiron10,						#dropsiron11,#dropsiron2,#dropsiron13,#dropsiron14").css({display:'block'});
						$('#dropsiron2,#dropsiron3,#dropsiron4,#dropsiron5,#dropsiron6,#dropsiron7,#dropsiron8,#dropsiron9,#dropsiron10,						#dropsiron11,#dropsiron2,#dropsiron13,#dropsiron14').animate({top:'290px'});
						$('#ImgInSpatulla1').animate({opacity:'0'},500,function(){	
						$('#ImgInSpatulla1').css({display:'none'})
						});
						$('#dropsiron1').animate({top:'290px'},500,function(){	
						$('#dropsiron1,#dropsiron2,#dropsiron3,#dropsiron4,#dropsiron5,#dropsiron6,#dropsiron7,#dropsiron8,#dropsiron9,#dropsiron10,						#dropsiron11,#dropsiron2,#dropsiron13,#dropsiron14').css({display:'none'});
						//						$("#SpatullaDiv").css({display:'none' });	
						$("#testtubePowderImg2").css({'opacity':'1'});
						$("#testtubePowderBlackImg").css({'opacity':'0' });
						
						$("#SpatullaDiv").css({left:'97px',top:'247px'});
						
						orderFlag=1;
						});
					}
		}
				else
				{
					$("#SpatullaDiv").css({left:'97px',top:'247px'});
				}

			}
		
		});
}

////////////
var dropComplete=0;


function StartBurner()
{
	if(orderFlag==1)
	{
		burnercount++;
		if(burnercount%2!=0)
		{
			document.getElementById("flame").style.visibility="visible";
			$('.flameshake').css({
			'animation-name': 'flameshake',
			'animation-duration': '70ms',
			'animation-iteration-count': 'infinite',
			'animation-timing-function': 'linear',
			
			'-moz-animation-name': 'flameshake',
			'-moz-animation-duration': '70ms',
			'-moz-animation-iteration-count':'infinite',
			'-moz-animation-timing-function': 'linear',
			
			'-webkit-animation-name': 'flameshake',
			'-webkit-animation-duration': '70ms',
			'-webkit-animation-iteration-count': 'infinite',
			'-webkit-animation-timing-function': 'linear',	
		});
			$("#startKnob").css({display:'none' });
			$("#burnerKnob2").css({display:'block'});
			$("#burnerKnob").css({display:'none'});		
			$("#testtubeFull" ).draggable({ disabled: false });
			DragTestTube();
			
		}
		else
		{
			document.getElementById("flame").style.visibility="hidden";
			$("#burnerKnob2").css({display:'none'});
			$("#burnerKnob").css({display:'block'});
		}
	}
}

function DragTestTube()
{
		$("#testtubeFull").draggable({
		drag: function(event,ui){	
		
		},
		stop: function() 
		{	
		
		if(($("#testtubeFull").position().left>=405)&&($("#testtubeFull").position().left<=517)&&
		($("#testtubeFull").position().top>=-116)&&($("#testtubeFull").position().top<=107))
		{		
			$("#testtubeFull").css({left:'458px',top:'13px'});
			$("#testtubeFull" ).draggable({ disabled: true });
			id=document.getElementById("testtubeFull");	
			clearInterval(flaming);	
			$("#needle").css({display:'block' });
			$("#clockBody").css({display:'block' });			
			if(startFlag==2)
			{		
			dropComplete=2;
			}
			else if(startFlag==1)
			{
				dropComplete=1;	
			
			}
		}
		else
		{
			$("#testtubeFull").css({top:'150px',left:'281px'});		
		}
		$("#testtubeFull","#SpatullaDiv").draggable("destroy");
		dropCompletefn(dropComplete);
		}
	});
}

function dropCompletefn(dropComplete)
{
	if(dropComplete==1)
	{
		
		
		int1 =setInterval(clockRotate1,20);			
		timer2 =setInterval(shaketubeTest1,10);
			
	}
	if(dropComplete==2)
	{
		
		int2 =setInterval(clockRotate1,20);	
		timer2 =setInterval(shaketube,10);
		
	}
}

//fn for shaking test tube
function shaketubeTest1()
{
	Cflag1++;
	if(Cflag1<=1000)
	{
		shakeORstir();
		rotate();
		//clockRotate1();
		changeTestTubeColorTest1();
	}
	else
	{
		$("#testtubeFull").css({ WebkitTransform: 'rotate(0deg)'});
		$("#testtubeFull").css({ '-moz-transform': 'rotate(0deg)'});
		$("#testtubeFull").css({'-o-transform':'rotate(0deg)'});
		$("#testtubeFull").css({'transform':'rotate(0deg)'})
		clearInterval(timer2);		
		clearInterval(int1);		
		$("#needle").css({display:'none' });
		$("#clockBody").css({display:'none' });
		$("#testtubewhiteImg").css({display:'none'})
		$("#burnerKnob").css({display:'block'});
		$("#burnerKnob2").css({display:'none'});
		document.getElementById("inferenceDiv").style.visibility="visible";
		$("#inferencehelp").css({display:'block' });
		document.getElementById("flame").style.visibility="hidden";
	}
}

function shaketube()
{	
	cFlag++;
	if(cFlag==100)
	{
		//document.getElementById("inferenceDiv").style.visibility="visible";
		$("#watervapourImg").css({ 'opacity': '1'});
		$("#testtubePowderImg2").attr('src', simPath+'images/whitepowder.png');
	}
	if(cFlag<=2000)
	{
		shakeORstir();
		rotate();		
		//clockRotate1();
		changeTestTubeColor();
	}
	else
	{
		$("#testtubeFull").css({ WebkitTransform: 'rotate(0deg)'});
		$("#testtubeFull").css({ '-moz-transform': 'rotate(0deg)'});
		$("#testtubeFull").css({'-o-transform':'rotate(0deg)'});
		$("#testtubeFull").css({'transform':'rotate(0deg)'})
		clearInterval(timer2);
		clearInterval(int2);
		$("#needle").css({display:'none' });
		$("#clockBody").css({display:'none' });
		$("#testtubewhiteImg").css({display:'none'})
		$("#burnerKnob").css({display:'block'});
		$("#burnerKnob2").css({display:'none'});		
		document.getElementById("inferenceDiv").style.visibility="visible";
		$("#inferencehelp").css({display:'block' });
		document.getElementById("flame").style.visibility="hidden";
	}
}

function changeTestTubeColorTest1()
{
	opacitycounterTest1++;
	if(opacitycounterTest1%20==0)
	{	
		if(opacityValTest1<1)
		{	
			opacityVal1Test1=opacityVal1Test1+0.07;
		}
		else
		{
			if(Math.round(opacityValTest1)==1)
			{	
				$("#testtubePowderImg1").css({'opacity':'0'});
				$("#testtubePowderCuOImg").css({'opacity':'1' });	
			}
			opacityVal1Test1=opacityVal1Test1-0.07;
		}
		opacityValTest1=opacityValTest1+0.07;
		$("#testtubewhiteImg").css({'opacity':opacityVal1Test1})
	}
	
}

function changeTestTubeColor()
{
	opacitycounter++;
	if(opacitycounter%50==0)
	{
	if(opacityVal<1)
	{
		opacityVal1=opacityVal1+0.05;
	}
	else
	{
		if(Math.round(opacityVal)==1)
		{
			$("#watervapourImg").css({ 'opacity': '0'});
			if(startFlag==2)
			{
				$("#testtubePowderImg2").css({'opacity':'0'});
				$("#testtubePowderBlackImg").css({'opacity':'1' });
			}
			else if(startFlag==1)
			{
				$("#testtubePowderImg1").css({'opacity':'0'});
				$("#testtubePowderCuOImg").css({'opacity':'1' });	
			}
		}
	opacityVal1=opacityVal1-0.05;
	}
	opacityVal=opacityVal+0.05;	
	$("#testtubewhiteImg").css({'opacity':opacityVal1})	
	}
}

function shakeORstir()
{
	flagstir++
	if(flag1==true){
		if(degree<=12){
			degree++;
		if(degree==12){
			flag1=false;
			}
		}
	}else{
		degree--;
		if(degree==-12){
			flag1=true;
		}
	}
	if(degree1<=opacitynum){
		degree1=degree1+.01;
	}
	
}
function rotate(){
	//rotate the glass rod for getting the stirring effect
	id.style.webkitTransformOrigin='0% 0%';
	id.style.webkitTransform = 'rotate(' + degree + 'deg)';
	id.style.MozTransformOrigin='0% 0%';
	id.style.MozTransform ='rotate('+ degree +'deg)';
}
