/*
author:anishasl
Date started:22/1/2014 
file name:simcontrols.js
*/
// Variable declaration
var labelArray=new Array();
var SamplesOptions;
var eqnArray;
var sampleFlag=1;
var reactantFlag=1;
var pickSlnFlag=pickSlnFlag2=0;
var secondTube=0;
var contentArray;
var burnercount=1;
var SamplesArray1=new Array();
var SamplesArray1Shuffle=new Array();
var SamplesArray2=new Array();
var SamplesArray2Shuffle=new Array();
var sampleArray=new Array();
var shuffleArray=new Array();
var shuffleArray1=new Array();
var acidFlag=0;
var smokeTimer;
//end variable declaration
/*loading bg*/
var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
var bgCanvasimg = new Image;
bgCanvasimg.onload = function(){ 
bgCanvasctx.drawImage(bgCanvasimg,0,-8);
};
bgCanvasimg.src=simPath+'images/BG1.gif';
/*loading bg*/
/*on load function*/

window.onload = function init(){

	document.getElementById("expName").innerHTML=gt.gettext("Properties of Acids and Bases");
	labelArray=[gt.gettext("Select the sample:"),gt.gettext("Select the reactant:"),gt.gettext("Result"),gt.gettext("Litmus solution"),gt.gettext("Zinc metal"),gt.gettext("Solid "),gt.gettext("Acid"),gt.gettext("Base"),gt.gettext(" & Distilled Water"),gt.gettext("Phenolphthalein"),gt.gettext("Lime water")];
	//arrays for the label 
	eqnArray=["HCl","NaOH","H"+String.fromCharCode(8323)+"PO"+String.fromCharCode(8324),"H"+String.fromCharCode(8322)+"SO"+String.fromCharCode(8324),"CH"+String.fromCharCode(8323)+"COOH","KOH","LiOH","Na"+String.fromCharCode(8322)+"CO"+String.fromCharCode(8323)];//array for storing the equations
	
	sampleArray=[gt.gettext("Sample 1"),gt.gettext("Sample 2"),gt.gettext("Sample 3"),gt.gettext("Sample 4"),gt.gettext("Sample 5"),gt.gettext("Sample 6"),gt.gettext("Sample 7")];//samples label
	
	contentArray=[gt.gettext("The given sample is an acid that turns blue litmus solution to</br>red, but does not affect the red litmus solution.  It</br>has a pH value less than 7."),gt.gettext("The given sample is a base that turns red litmus solution to</br>blue, but does not affect the blue litmus solution.  It</br>has a pH value greater than 7."),gt.gettext("The given sample is an acid that reacts with zinc metal to liberate</br>colourless, odourless hydrogen that causes the flame to flare up.</br>The flame then dips out with a mild explosion and a popping sound."),gt.gettext("The given sample is a base that reacts with zinc metal to liberate</br>colourless, odourless hydrogen that causes the flame to flare up.</br>The flame then dips out with a mild explosion and a popping sound."),gt.gettext("The given sample is an acid that reacts with sodium carbonate to</br>liberate carbon dioxide gas that turns the lime water milky."),gt.gettext("The given sample and sodium carbonate are bases, so they</br>don't react but form an alkaline solution. Phenolphthalein</br>produces a pink colour in alkaline medium."),gt.gettext("Drag and dip the dropper into</br>the beaker to draw the solution."),gt.gettext("Drag the dropper to the first</br>test tube to pour the solution."),gt.gettext("Again drag and dip the dropper</br>into the beaker to draw the solution."),gt.gettext("Drag the dropper to the second</br>test tube to pour the solution."),gt.gettext("Drag the beaker containing the</br>sample solution to the test tube</br>to pour it in."),gt.gettext("Drag the cork to the</br>test tube to close it."),gt.gettext("Click on the knob to</br>turn on/turn off the burner."),gt.gettext("Drag the match stick</br>over the test tube."),gt.gettext("Drag the beaker containing</br>the sample solution to the</br>thistle funnel to pour it in."),gt.gettext("Drag the beaker containing</br>the sample solution to the</br>test tube to pour it in."),gt.gettext("Drag the beaker containing</br>the sample solution to the</br>test tube to pour it in."),];
//array for storing help messages.
	document.getElementById("headngP").innerHTML=labelArray[0];
	document.getElementById("headngP1").innerHTML=labelArray[1];
	document.getElementById("headngResult").innerHTML=labelArray[2];
	document.getElementById("acidLabel").innerHTML=labelArray[6];
	document.getElementById("baseLabel").innerHTML=labelArray[7];
	document.getElementById('reset').value=gt.gettext("Reset");
	$('#displaySample').html(eqnArray[0]);
	$('#displaySoln').html(labelArray[5]+eqnArray[7]+labelArray[8]);
	$('#displayPhenolph').html(labelArray[9]);
	$('#displaylime').html(labelArray[10]);
	SamplesOptions=[eqnArray[0],eqnArray[1],eqnArray[2],eqnArray[3],eqnArray[4],eqnArray[5],eqnArray[6]];//adding options into samples combo
	SamplesArray1=[eqnArray[0],eqnArray[1],eqnArray[2],eqnArray[3],eqnArray[4],eqnArray[5],eqnArray[6]];//array contains sample
	
	SamplesArray2=[labelArray[6],labelArray[7],labelArray[6],labelArray[6],labelArray[6],labelArray[7],labelArray[7]];
	shuffleArray=['0','1','2','3','4','5','6'];
	ReactantsOptions=[labelArray[3],labelArray[4],labelArray[5]+eqnArray[7]];//adding reactants options//shuffling the array
	document.getElementById("litmusDiv").innerHTML=ReactantsOptions[0];
	document.getElementById("ZincDiv").innerHTML=ReactantsOptions[1];
	document.getElementById("Na2co3Div").innerHTML=ReactantsOptions[2];
	addintoDropDown($('#SampleCombo'),sampleArray);
	$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	});
	shuffle(shuffleArray);
	$('#displaySample').html(sampleArray[0]);
	reCreateArray(shuffleArray,SamplesArray1,SamplesArray2);
	startExperiment();
}
/*end of onload*/

function reCreateArray(shuffleArray,SamplesArray1,SamplesArray2){
	for(var i=0;i<shuffleArray.length;i++){
		SamplesArray1Shuffle[i]=SamplesArray1[shuffleArray[i]];
		SamplesArray2Shuffle[i]=SamplesArray2[shuffleArray[i]];
	}
	if(SamplesArray2Shuffle[0]==labelArray[6]){
		acidFlag=1;//if sample is an acid
	}else{
		acidFlag=2;//if sample is a base
	}
}//for array shuffling

function shuffle(o)
{ 
	for(var j, x, i = o.length; i;j = Math.floor(Math.random()*i),x = o[--i], o[i] = o[j],o[j] = x);
};//shuffle the array for random selection of samples

//adding options into samples combo and reactants combo box
function addintoDropDown(getId,valueSet){	
	var selected = getId;
	$.each(valueSet, function(val, text) {
		selected.append(
		$('<option></option>').val(val).html(text)
	);
	});
}
/*start button click*/
function startExperiment(){
	$("#testTubeWater").css({display:'none',top:'194px',height:'0px'});
	$("#testTubeWaterborder").css({display:'none',top:'192px' });
	if(reactantFlag==1)	{//for litmus test
		rotation(document.getElementById("sampleSolutionDiv"),0);
		$("#sampleSolutionDiv").css({top:'169px'});
		pickSlnFlag=0;
		pickSlnFlag2=0;
		secondTube=0;
		$("#bluelitmus").css({'opacity':"0"});
		$("#blueLitmusTube").css({'opacity':"1"});
		$("#redlitmus").css({'opacity':"0"});
		$("#RedlitmusTube").css({'opacity':"1"});
		$("#DropperDiv").draggable({ disabled: false});
		$("#dropperSoln1").css({'opacity':0});
		$("#dropperSoln1").css({'height':"66px"});
		$("#inferenceDiv").css({display:'none'});
		$("#beakerShadow,#sampleSolutionDiv").css({display:'block'});	
		$("#drops11,#drops1").css({'top':'123px'});
		$("#drops21,#drops2").css({'top':'129px'});
		$("#drops31,#drops3").css({'top':'135px'});
		$("#drops41,#drops4").css({'top':'140px'});
		$("#drops51,#drops5").css({'top':'145px'});
		$("#drops61,#drops6").css({'top':'150px'});
		$("#drops71,#drops7").css({'top':'155px'});
		$("#drops81,#drops8").css({'top':'163px'});
		$("#drops91,#drops9").css({'top':'169px'});
		$("#drops0,#drops10").css({'top':'175px'});
		litmusTestAcid();//test with litmus solution
	}
	else if(reactantFlag==2){
		ZincMetalTest();//test for zinc metal
	}else if(reactantFlag==3){
		$('#limewater').animate({'opacity':1});
		$('#milkywater').animate({'opacity':0});
		if(acidFlag==1){
			Na2CO3TestAcid();
		}//test for sodium carbonate for acidic
		else{
			Na2CO3TestBase();//test for sodium carbonate for bsiv
		}	
	}
}
/*end start function*/

var corkFlag=0;
/*perforn zinc metal test for the selected sample*/
function ZincMetalTest(){
	$("#sampleSolutionDiv").draggable({disabled:false,
	drag:function(event,ui){
		$("#beakerShadow").animate({'opacity':'0'});
	},
	stop:function(){
		if(($(this).position().left>=70)&&($(this).position().left<=192)&&
		($(this).position().top>=-80)&&($(this).position().top<=100)){
		$("#sampleSolutionDiv").css({left:'173px',top:'-60px'})
		$("#pourwaterImg").css({'display':'block'});
		rotation(this,-90);
		rotation(document.getElementById("beakerWater"),3);	
		$("#testTubeWater").css({display:'block' });
		$("#testTubeWater").animate({top:'155px',height:'39px'});
		$("#testTubeWaterborder").css({display:'block' });
		$("#testTubeWaterborder").animate({top:'155px'});		
		$("#pourwaterImg").animate({opacity:'0'						
		},500,function(){
			$("#beakerShadow").animate({'opacity':'1'});
			$("#pourwaterImg").css({'display':'none'});								
			$("#sampleSolutionDiv").animate({left:'386px',top:'173px'});			
			$("#bubbles").css({'display':'block'});	
			rotation(document.getElementById("sampleSolutionDiv"),0);
			rotation(document.getElementById("beakerWater"),0);
			});		
		$(this).draggable({disabled:true});						
		corkFlag=1;
		Takecork();//cork drag function
	}else{
		$("#sampleSolutionDiv").animate({left:'386px',top:'173px'});
		}
	}});

}
/*end zinc metel test*/
var burnerFlag=0;
function Takecork(){
	if(corkFlag==1){
		$("#corktubeImg").draggable({disabled:false,
		drag:function(event,ui){
			rotation(this,0);
		},
		stop:function(){
		if(($(this).position().left>=128)&&($(this).position().left<=190)&&
		($(this).position().top>=-77)&&($(this).position().top<=119)){//if point reaches
			$("#corktubeImg").css({left: '158px',top: '33.5px','z-index':'0'});
			$("#corktubeImg").draggable({disabled:true});
			corkFlag=0;
			burnerFlag=1;
		}else
		{
			$("#corktubeImg").animate({left: '308px',top: '189px','z-index':'9'});
			rotation(this,16);
		}
	}
	});
	}
}
/*perform test with Sodium carbonate for the Acidic samples*/
function Na2CO3TestAcid(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/BG3.gif';
	bgCanvasctx.drawImage(bgCanvasimg,0,-8);//load bg
	$("#phenophthaleinDiv,#phenophthaleinLbl,#displayPhenolph,#sodiumcarbnteImg,#testtubeNa2co3,#testtubeIndicator").css({'display':'none'});
	$("#conicalBorder").css({'display':'block'});
	$("#sampleSolutionDiv").css({'display':'block','left':'415px'});
	$("#beakerShadow").css({'display':'block',left:'409px'})
	$("#displaySample").css({'display':'block',left: '422px'});
	$("#labelImg").css({'display':'block',left: '428px'});
	
	$("#limewater").css({'display':'block'});
	$("#milkywater").css({'display':'block'});
	$("#standBottom,#conicalBeaker,#labelConical,#displaySoln,#conicalsolnDiv,#limewaterlbl,#displaylime").css({'display':'block'});
	startDragSample();
}
/* end test with sodium carbonate*/

function startDragSample(){//for acidic 
	$("#sampleSolutionDiv").draggable({disabled:false,
	drag:function(event,ui){
	
				$("#beakerShadow").animate({'opacity':'0'});
			},
		stop:function(){
			if(($("#sampleSolutionDiv").position().left>=50)&&($("#sampleSolutionDiv").position().left<=194)&&
			($("#sampleSolutionDiv").position().top>=-66)&&($("#sampleSolutionDiv").position().top<=64)){
				$("#sampleSolutionDiv").css({left:'161px',top:'-60px'})
				$("#pourwaterImg1").css({'display':'block'});
				rotation(this,-90);
				rotation(document.getElementById("beakerWater"),3);	
				$("#conicalSolution").animate({'top':'-23px'});
				$("#conicalsolnDiv").animate({'top':'248px',height:'39px'});
				$("#conicalBorder").animate({'top':'247px'});
				$("#pourwaterImg1").animate({opacity:'0'						
				},500,function(){
					$("#beakerShadow").animate({'opacity':'1'});
					$("#pourwaterImg1").css({'display':'none'});								
					$("#sampleSolutionDiv").animate({left:'415px',top:'173px'});
					$("#sampleSolutionDiv").draggable({disabled:true});
					$("#bubblesConical").css({'display':'block'});	
					rotation(document.getElementById("sampleSolutionDiv"),0);
					rotation(document.getElementById("beakerWater"),0);
					int1=setInterval(turnMilky,10);
				});		
	
			}
		else{
			$("#sampleSolutionDiv").animate({left:'415px',top:'173px'});
			$("#beakerShadow").css({'opacity':'1'});
		}
	}
});
}
var milkycount=0;
var opacityVal=0;
var opacityHigh=1;
function turnMilky()
{//function for tuen lime water milky
	milkycount++;
	if(milkycount>=25){
		if(opacityHigh>=0){
			opacityVal+=0.0015;
			opacityHigh=1-opacityVal;
			$("#bubblesBeaker").css({'display':'block'});
			$('#limewater').css({'opacity':opacityHigh});
			$('#milkywater').css({'opacity':opacityVal});
		}		
	}
	if(milkycount>=1000){
		setResult=1;
		$("#acidDiv,#baseDiv").css({'opacity':1});
		clearInterval(int1);
	}
}
/*perform test with Sodium carbonate for the Basic samples*/
function Na2CO3TestBase(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/BG4.gif';
	bgCanvasctx.drawImage(bgCanvasimg,0,-8);
	$("#conicalBorder").css({'display':'none'});
	$("#conicalsolnDiv").css({'display':'none'});
	$("#conicalSolution").css({'display':'none'});
	$("#beakerShadow").css({'display':'none'})
	$("#displaySample").css({'display':'none'});
	$("#labelImg").css({'display':'none'});
	$("#standBottom,#conicalBeaker,#labelConical,#displaySoln,#conicalsolnDiv,#limewater,#milkywater,#limewaterlbl,#displaylime").css({'display':'none'});
	$("#sampleSolutionDiv").css({'display':'block','left':'415px'});
	$("#beakerShadow").css({'display':'block',left:'409px'})
	$("#displaySample").css({'display':'block',left: '422px'});
	$("#labelImg").css({'display':'block',left: '428px'});
	$("#testtubeStandscene4").css({'display':'block'});
	$("#phenophthaleinDiv,#phenophthaleinLbl,#displayPhenolph,#sodiumcarbnteImg,#testtubeNa2co3,#testtubeIndicator").css({'display':'block'});
	Na2co3BaseTest();
}
/* end test with sodium carbonate basic samples*/
var indicatorFlag=0;
function Na2co3BaseTest(){
	$("#sampleSolutionDiv").draggable({disabled:false,
	drag:function(event,ui){
		$("#beakerShadow").animate({'opacity':'0'});
	},
	stop:function(){
		if(($(this).position().left>=75)&&($(this).position().left<=215)&&
		($(this).position().top>=-80)&&($(this).position().top<=99))
		{
			$("#sampleSolutionDiv").css({left:'193px',top:'-52px'});
			rotation(this,-90);
			rotation(document.getElementById("beakerWater"),3);						
			$("#testtubeNa2co3").css({'display':'block'});
			$("#pourwaterImg").css({'display':'block',top: '69px',left: '183px'});
			$("#testtubewaterImg,#testtubeIndicator").animate({top:'15px'});
			$("#pourwaterImg").animate({opacity:'0'						
			},500,function(){
				$("#beakerShadow").animate({'opacity':'1'});
				$("#pourwaterImg").css({'display':'none'});								
				$("#sampleSolutionDiv").animate({left:'415px',top:'169px'});
			rotation(document.getElementById("sampleSolutionDiv"),0);
			rotation(document.getElementById("beakerWater"),0);
		});
		indicatorFlag=1;
		$("#sampleSolutionDiv").draggable({disabled:true});
		takeIndicator();
	}else{
		$("#sampleSolutionDiv").css({left:'415px',top:'169px'});
		$("#beakerShadow").css({'opacity':'1'});
	}
	}
  });
}

function takeIndicator(){//pour phenolphthalein in takeIndicator()
	if(indicatorFlag==1){
		$("#phenophthaleinDiv").draggable({disabled:false,
		drag:function(event,ui){},
		stop:function(){
			if(($(this).position().left>=75)&&($(this).position().left<=215)&&
			($(this).position().top>=-80)&&($(this).position().top<=99)){
				$(this).css({left:'193px',top:'-52px'});
				rotation(this,-90);
				rotation(document.getElementById("phenoph"),3);	
				$("#pourwaterImg").css({'display':'block',top: '69px',left: '183px','opacity':'1'});
				$("#testtubewaterImg,#testtubeIndicator").animate({top:'0px'})
				$("#testtubeIndicator").css({'opacity':1});
				$("#testtubewaterImg").css({'opacity':0});
				$("#pourwaterImg").animate({opacity:'0'						
				},500,function(){
					$("#beakerShadow").animate({'opacity':'1'});
					$("#pourwaterImg").css({'display':'none'});								
					$("#phenophthaleinDiv").css({left:'271px',top:'169px'});
					$("#phenophthaleinDiv").draggable({disabled:true});
					rotation(document.getElementById("phenophthaleinDiv"),0);
					rotation(document.getElementById("phenoph"),0);
				});
				setResult=1;
				$("#acidDiv,#baseDiv").css({'opacity':1});
			}else{
			$(this).animate({left:'271px',top:'169px'});
		}
	}
	});
}
}
/*perform litmus test for acidic samples*/
function litmusTestAcid(){
	if(secondTube==0){
		$("#DropperDiv").draggable({ disabled: false,
			drag:function(event,ui){
			if(pickSlnFlag==0){
				if(($("#DropperDiv").position().left>=143)&&($("#DropperDiv").position().left<=247)&&
				($("#DropperDiv").position().top>=100)&&($("#DropperDiv").position().top<=150)){
					document.getElementById("DropperDiv").style.left="197px";
					document.getElementById("DropperDiv").style.top="116px";
					$("#dropperSoln1").css({'opacity':1});
					pickSlnFlag=1;
				}else{
					document.getElementById("DropperDiv").style.left="45px";
					document.getElementById("DropperDiv").style.top="138px";
				}
			}//end if
			},
		stop:function(){
			if(pickSlnFlag==0){
				if(($("#DropperDiv").position().left>=143)&&($("#DropperDiv").position().left<=247)&&
				($("#DropperDiv").position().top>=100)&&($("#DropperDiv").position().top<=150)){}else{			
					document.getElementById("DropperDiv").style.left="45px";
					document.getElementById("DropperDiv").style.top="138px";
				}
			}
			
			 if(pickSlnFlag==1){
				if(($("#DropperDiv").position().left>=343)&&($("#DropperDiv").position().left<=380)&&
				($("#DropperDiv").position().top>=-115)&&($("#DropperDiv").position().top<=72)){
				document.getElementById("DropperDiv").style.left="363px";
				document.getElementById("DropperDiv").style.top="-21px";
				$("#DropperDiv").draggable({ disabled: true});
				$("#drops1").css({display:'block'});
				$("#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10").css({display:'block'});
				if(acidFlag==2){
					$("#redlitmus").animate({'opacity':"1"});
					$("#RedlitmusTube").animate({'opacity':"0"});
				}
				$("#dropperSoln1").css({'height':"0px"});				
				$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').animate({top:'175px'},function(){	
				$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').css({display:'none'});	
				document.getElementById("DropperDiv").style.left="45px";
				document.getElementById("DropperDiv").style.top="138px";
				secondTube=1;
				dragDropperforTube2();
				});
			}else{
					document.getElementById("DropperDiv").style.left="197px";
					document.getElementById("DropperDiv").style.top="116px";
				}
			}
		}
		});
	}
}
/*end litmus test of acids*/

function dragDropperforTube2(){
	if(secondTube==1){
		$("#DropperDiv").draggable({ disabled: false,
			drag:function(event,ui){
				if(pickSlnFlag2==0){
				if(($("#DropperDiv").position().left>=143)&&($("#DropperDiv").position().left<=247)&&
				($("#DropperDiv").position().top>=100)&&($("#DropperDiv").position().top<=150)){
					document.getElementById("DropperDiv").style.left="197px";
					document.getElementById("DropperDiv").style.top="116px";
					$("#dropperSoln1").css({'opacity':1});
					$("#dropperSoln1").css({'height':"66px"});
					pickSlnFlag2=1;
				}else{
					
					document.getElementById("DropperDiv").style.left="45px";
					document.getElementById("DropperDiv").style.top="138px";
				}
			}
			},
			stop:function(){
				if(pickSlnFlag2==0){
				if(($("#DropperDiv").position().left>=143)&&($("#DropperDiv").position().left<=247)&&
				($("#DropperDiv").position().top>=100)&&($("#DropperDiv").position().top<=150)){}else{
					document.getElementById("DropperDiv").style.left="45px";
					document.getElementById("DropperDiv").style.top="138px";
				}
			}
			 if(pickSlnFlag2==1){
			if(($("#DropperDiv").position().left>=416)&&($("#DropperDiv").position().left<=457)&&
			($("#DropperDiv").position().top>=-117)&&($("#DropperDiv").position().top<=72)){
				document.getElementById("DropperDiv").style.left="434px";
				document.getElementById("DropperDiv").style.top="-21px";
				$(	'#drops11,#drops21,#drops31,#drops41,#drops51,#drops61,#drops71,#drops81,#drops91,#drops0').css({display:'block'});
				$("#dropperSoln1").css({'height':"0px"});
				$('#drops11,#drops21,#drops31,#drops41,#drops51,#drops61,#drops71,#drops81,#drops91,#drops0').animate({top:'175px'},function(){
					$('#drops11,#drops21,#drops31,#drops41,#drops51,#drops61,#drops71,#drops81,#drops91,#drops0').css({display:'none'});
					if(acidFlag==1){
						$("#bluelitmus").animate({'opacity':"1"});
						$("#blueLitmusTube").animate({'opacity':"0"});
					}
					document.getElementById("DropperDiv").style.left="45px";
					document.getElementById("DropperDiv").style.top="138px";
					$("#DropperDiv").draggable({ disabled: true});
					setResult=1;
					$("#acidDiv,#baseDiv").css({'opacity':1});
				});
			}else{
				document.getElementById("DropperDiv").style.left="197px";
				document.getElementById("DropperDiv").style.top="116px";
				}
			}
			}
		})
	}
}

//sample option combo box function
function SampleComboselection(){//select the sample
	setResult=0;
	$("#acidDiv,#baseDiv").css({'opacity':0.5});
	if(SamplesArray2Shuffle[sampleFlag]==gt.gettext("Acid")){
		acidFlag=1;
	}else{
		acidFlag=2;
	}
	if(reactantFlag==1){
		litmusTestSelect();
	}else if(reactantFlag==2){
		zincTestSelect();
	}else if(reactantFlag==3){
		sodiumTestSelect();	
	}
	$("#baseWrongImg,#acidWrongImg,#acidCorrectImg,#baseCorrectImg").css({display:'none' });
	sampleFlag=document.getElementById("SampleCombo").selectedIndex;
	$('#displaySample').html(sampleArray[sampleFlag]);
}
//reset variables for combo box
function resetFn(){//reset function
	rotation(document.getElementById("sampleSolutionDiv"),0);
	$("#sampleSolutionDiv").css({top:'169px'});
	pickSlnFlag=0,pickSlnFlag2=0,secondTube=0;
	$("#bluelitmus").css({'opacity':"0"});
	$("#blueLitmusTube").css({'opacity':"1"});
	$("#redlitmus").css({'opacity':"0"});
	$("#RedlitmusTube").css({'opacity':"1"});
	$("#DropperDiv").draggable({ disabled: false});
	//$("#dropperSoln1").animate({'height':"66px"});
	$("#dropperSoln1").css({'opacity':0});
	$("#dropperSoln1").animate({'height':"66px"});
	$("#inferenceDiv").css({display:'none'});
	$("#beakerShadow,#sampleSolutionDiv").css({display:'block'});	
	$("#drops11,#drops1").css({'top':'123px'});
	$("#drops21,#drops2").css({'top':'129px'});
	$("#drops31,#drops3").css({'top':'135px'});
	$("#drops41,#drops4").css({'top':'140px'});
	$("#drops51,#drops5").css({'top':'145px'});
	$("#drops61,#drops6").css({'top':'150px'});
	$("#drops71,#drops7").css({'top':'155px'});
	$("#drops81,#drops8").css({'top':'163px'});
	$("#drops91,#drops9").css({'top':'169px'});
	$("#drops0,#drops10").css({'top':'175px'});
	startExperiment();
}
var ansFlag=0;
var acidInference=0;
var setResult=0;
//click on the result icons
function ClickAcidBase(id){//check answer
if(setResult==1){
	if(id=="acidDiv"){//acid icon
		if(acidFlag==1){//for acid sample
			acidInference=1;
			$("#acidCorrectImg").css({display:'block' });
			ansFlag=1;
			$("#baseCorrectImg,#acidWrongImg,#baseWrongImg").css({display:'none'});
			$("#inferenceDiv").css({display:'block'});
		}else{//for basic sample
			acidInference=0
			ansFlag=2;
			$("#acidWrongImg").css({display:'block' });
			$("#baseCorrectImg,#acidCorrectImg,#baseWrongImg,#inferenceDiv").css({display:'none' });
		}
	}else if(id=="baseDiv"){//base icon
		if(acidFlag==2){
			$("#baseCorrectImg").css({display:'block' });
			ansFlag=3;
			acidInference=1;
			$("#acidWrongImg,#acidCorrectImg,#baseWrongImg").css({display:'none'});
			$("#inferenceDiv").css({display:'block'});
		}else{
			ansFlag=4;
			acidInference=0;
			$("#baseWrongImg").css({display:'block' });
			$("#acidWrongImg,#acidCorrectImg,#baseCorrectImg,#inferenceDiv").css({display:'none'});
		}
	}
}
}
var int;
function burnerON(){//burner start
	if(burnerFlag==1)
	{
		burnercount++;
		if(burnercount%2==0){//burner on
			$("#burnerOffImg").css({display:'none' });
			$("#burnerOnImg").css({display:'block' });
			$("#flameDiv").css({'display':'block' });
			int=setInterval(flaming,10);
			matchStickFlag=1;
			TakematchStick();
		}
		else{//burner off
		$("#flameDiv").css({'display':'none' });
		clearInterval(int);
		$("#burnerOffImg").css({display:'block' });
		$("#burnerOnImg").css({display:'none' });
		}
	}
}

function flameglow(){
	if(dragcount==1){
				clearInterval(matchstickFlaming);
				$('#matchStickFlame').css({display:'none'});
				$('#flameblastDark').css({display:'block'});
				matchstickFlameBurstFn();
				stickFlameDark();				
				$("#matchstickFull").draggable({disabled:true});
				$("#matchsticFlameImg").css({'display':'block'});
				smokeTimer=setInterval(startsmoke,10); 
				setResult=1;
				$("#acidDiv,#baseDiv").css({'opacity':1});
	}
}
//matchstickFlameBurst yellow color
function matchstickFlameBurstFn(){
	$('#matchStickFlameBurst').animate({
						top:'-120px',
						left:'-55px',
						width:'122px',
						height:'167px'
				},400,function(){
					$("#matchStickdiv").css({display:'block',zIndex:'1'});
					$('#matchStickFlameBurst').css({display:'none'});					
					$('#matchStickFlameBurst').css({top:'0px',left:'0px',width:'0px',height:'0px'});
			});
}
//dark fumes given out from match stick
function stickFlameDark(){
	$('#flameblastDark').animate({
						top:'0px',
						left:'0px',
						width:'0px',
						height:'0px'
				},200,function(){
					$('#flameblastDark').css({display:'none'});					//$('#flameblastDark').css({top:'-37px',left:'-4px',width:'22px',height:'59px'});
			});
}
var dragcount=0;
function TakematchStick(){//dragging match stick
	if(matchStickFlag==1){
		$("#matchstickFull").draggable({disabled:false,
		drag:function(event,ui){
			if(($(this).position().left>=137)&&($(this).position().left<=180)&&
			($(this).position().top>=-4)&&($(this).position().top<=54)){
				dragcount++;
				flameglow();				
			}
		},
		stop:function(){
			if(($(this).position().left>=137)&&($(this).position().left<=180)&&
			($(this).position().top>=-4)&&($(this).position().top<=54)){
				$(this).css({left:'162px',top:'22px'});
				$(this).draggable({disabled:true});			
			}
			else{
				$(this).css({left:'352px',top:'44px'});
			}
			}
		});
	}
}
function flaming(){//burner flames
	if($('.flame1').css('display') == "block"){          
		$('.flame1,.flame3,.flame4').hide();
		$('.flame2').show();         
	}else if($('.flame2').css('display') == "block"){          
		$('.flame1,.flame2,.flame4').hide();
		$('.flame3').show();         
	}else if($('.flame3').css('display') == "block"){          
		$('.flame2,.flame3,.flame1').hide();
		$('.flame4').show(); 
	}
	else if($('.flame4').css('display') == "block"){          
		$('.flame2,.flame3,.flame4').hide();
		$('.flame1').show(); 
	}
}
var scaleflameX=2,scaleflameY=2;
var countFlame=0;
var int1;
var matchStickFlag=0;
function rotation(rotateId,degree){//rotaing the beakers
	rotateId.style.webkitTransformOrigin='50% 50%';
	rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
	rotateId.style.MozTransformOrigin='50% 50%';
	rotateId.style.MozTransform ='rotate('+ degree +'deg)';
}
var smokeCount=0;
var topsmoke=298;
function startsmoke(){//smoke function after the flame of the matchh stick disappears
	smokeCount++;
	if(smokeCount<=1000)	{
		$("#matchsticFlameImg").css({display:'block'});
		topsmoke=topsmoke-(smokeCount*0.00025);
		$("#matchsticFlameImg").css({'display':'block',top:topsmoke+'px'});
	}
	else{
		clearInterval(smokeTimer);
		clearInterval(matchstickFlaming);
		$("#matchsticFlameImg").css({display:'none'});
	}
}

function litmusTestSelect(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/BG1.gif';
	bgCanvasctx.drawImage(bgCanvasimg,0,-8);	
	setResult=0;
	$("#acidDiv,#baseDiv").css({'opacity':0.5});	
	clearInterval(int1);
	clearInterval(int);
	clearInterval(smokeTimer);
	clearInterval(matchstickFlaming);
	repositionning();
	matchStickFlag=0;burnerFlag=0;countFlame=0; scaleflameX=2,scaleflameY=2;
	topsmoke=298;smokeCount=0;secondTube=0;burnercount=1;corkFlag=0;
	milkycount=0;opacityVal=0;opacityHigh=1;indicatorFlag=0;
	$('#limewater').css({opacity:'1'});
	$('#milkywater').css({opacity:'0'});
	$("#testtubewaterImg").css({'opacity':1,top:'87px'});
	$("#testtubeIndicator").css({'opacity':0,top:'0px'});
	$("#pourwaterImg").css({'opacity':1,'display':'none'})
	
	$("#baseWrongImg,#acidWrongImg,#acidCorrectImg,#baseCorrectImg").css({display:'none' });
	$("#solidsodiumImg").css({'opacity':1});
	$("#zincmetalImg").css({'opacity':1});
	$("#litmusiconImg").css({'opacity':0.5});
	reactantFlag=1;
	$("#DropperDiv,#sampleSolutionDiv,#labelImg,#displaySample,#redLitmusDiv,#blueLitmusDiv,#testTubestand,#beakerShadow,#maskDiv").css({display:'block' });
	$("#testtube_stand,#testtube_standClamp,#burnerDiv,#burnerOffImg,#ZincmetalImg,#corktubeImg,#matchstickFull,#bubbles,#pourwaterImg,#burnerOnImg,#flameDiv,#corkStandImg,#maskDivcork,#testTubeWater,#testTubeWaterborder,#flameDiv,#standBottom,#conicalBeaker,#labelConical,#displaySoln,#conicalsolnDiv,#conicalBorder,#limewater,#milkywater,#pourwaterImg1,#bubblesConical,#bubblesBeaker,#testtubeStandscene4,#phenophthaleinDiv,#phenophthaleinLbl,#displayPhenolph,#sodiumcarbnteImg,#testtubeNa2co3,#testtubeIndicator,#limewaterlbl,#displaylime").css({'display':'none' });
	$("#sampleSolutionDiv").css({left:'162px',top: '169px'});
	$("#labelImg").css({left:'173px' });
	$("#displaySample").css({left:'165px'});
	$("#matchsticFlameDiv").css({'display':'none'});
	$("#beakerShadow").css({left:'160px' });
	$("#DropperDiv").css({left:'45px',top:'138px'});
	$("#bluelitmus").css({'opacity':"0"});
		$("#blueLitmusTube").css({'opacity':"1"});
		$("#redlitmus").css({'opacity':"0"});
		$("#RedlitmusTube").css({'opacity':"1"});
	startExperiment();
}
//function when zinc test call
function zincTestSelect(){
	
	clearInterval(int1);
	clearInterval(int);
	clearInterval(smokeTimer);	
	repositionning();
	$('#flameblastDark').css({top:'-37px',left:'-4px',width:'22px',height:'59px'});
   $('#matchStickFlameBurst').css({top:'0px',left:'0px',width:'0px',height:'0px'});
	setResult=0;
	$("#acidDiv,#baseDiv").css({'opacity':0.5});
	matchStickFlag=0;burnerFlag=0;countFlame=0; scaleflameX=2,scaleflameY=2;
	topsmoke=298;smokeCount=0;secondTube=0;burnercount=1;corkFlag=0;
	milkycount=0;opacityVal=0;opacityHigh=1;indicatorFlag=0;dragcount=0;
	$('#pourwaterImg').css({opacity:'1'});
	$('#limewater').css({opacity:'1'});
	$('#milkywater').css({opacity:'0'});
	$("#corktubeImg").css({left: '308px',top: '189px','z-index':'9'});
	$("#testtubewaterImg").css({'opacity':1,top:'87px'});
	$("#testtubeIndicator").css({'opacity':0,top:'0px'});
	$("#pourwaterImg").css({'opacity':1,'display':'none'})
	rotation(document.getElementById("corktubeImg"),16);
	
	$("#matchstickFull").css({left:'352px',top:'44px'});
	$(".flame,.blue").css({'display':'block'});
	corkFlag=0;
	$("#corktubeImg").draggable({disabled:true});
	$("#matchstickFull").draggable({disabled:true});
	$("#matchsticFlameImg").css({top:'298px'});
	$("#pourwaterImg").css({'opacity':'1',top: '47px',left: '165px'});
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/BG2.gif';
	bgCanvasctx.drawImage(bgCanvasimg,0,-8);
	$("#baseWrongImg,#acidWrongImg,#acidCorrectImg,#baseCorrectImg").css({display:'none' });
	$("#solidsodiumImg").css({'opacity':1});
	$("#zincmetalImg").css({'opacity':0.5});
	$("#litmusiconImg").css({'opacity':1});
	reactantFlag=2;
	$("#DropperDiv,#redLitmusDiv,#blueLitmusDiv,#testTubestand,#pourwaterImg,#maskDiv,#bubbles,#flameDiv,#burnerOnImg,#bubbles,#testTubeWater,#testTubeWaterborder,#standBottom,#conicalBeaker,#labelConical,#displaySoln,#conicalsolnDiv,#conicalBorder,#limewater,#milkywater,#pourwaterImg1,#bubblesConical,#bubblesBeaker,#testtubeStandscene4,#phenophthaleinDiv,#phenophthaleinLbl,#displayPhenolph,#sodiumcarbnteImg,#testtubeNa2co3,#testtubeIndicator,#limewaterlbl,#displaylime").css({display:'none' });
	$("#sampleSolutionDiv").css({display:'block',left:'386px',top: '173px'});
	$("#labelImg").css({left:'401px' });
	$("#displaySample").css({display:'block',left:'396px'});
	$("#testtube_stand,#testtube_standClamp,#ZincmetalImg,#corktubeImg,#matchstickFull,#labelImg,#beakerShadow,#burnerDiv,#burnerOffImg,#corkStandImg,#maskDivcork,#testTubeWater,#matchStickFlame,#matchStickFlameBurst").css({'display':'block' });
	$("#beakerShadow").css({'left':'382px'});
	$("#matchsticFlameDiv").css({'display':'block'});
	matchFlameFN();
	startExperiment();
}
var matchstickFlaming;
function matchFlameFN(){

	$('.stickflame1').show();
	matchstickFlaming=setInterval(matchGlow,150);//glow match stick
}
//flaming fn:
function matchGlow(){
	if($('.stickflame1').css('display') == "block"){  
		$('.stickflame1').hide();$('.stickflame3').hide();
		$('.stickflame2').show();
	}else if($('.stickflame2').css('display') == "block"){ 
		$('.stickflame2').hide();$('.stickflame1').hide();
		$('.stickflame3').show();
	}else{
		$('.stickflame2').hide();$('.stickflame3').hide();
		$('.stickflame1').show();
	}
	
}
function sodiumTestSelect(){//reaction with calcim carbonate
	clearInterval(int1);
	clearInterval(smokeTimer);
	clearInterval(int);
	clearInterval(matchstickFlaming);
	repositionning();
	setResult=0;
	$("#acidDiv,#baseDiv").css({'opacity':0.5});
	matchStickFlag=0;burnerFlag=0;countFlame=0; scaleflameX=2,scaleflameY=2;
	topsmoke=298;smokeCount=0;secondTube=0;burnercount=1;corkFlag=0;
	milkycount=0;opacityVal=0;opacityHigh=1;indicatorFlag=0;
	$("#testtubewaterImg").css({'opacity':1,top:'87px'});
	$("#testtubeIndicator").css({'opacity':0,top:'0px'});
	$("#pourwaterImg").css({'opacity':1,'display':'none'});
	$("#pourwaterImg1").css({'opacity':1});
	$('#limewater').css({opacity:'1'});
	$('#milkywater').css({opacity:'0'});
	$("#baseWrongImg,#acidWrongImg,#acidCorrectImg,#baseCorrectImg").css({display:'none' });
	$("#solidsodiumImg").css({'opacity':0.5});
	$("#zincmetalImg").css({'opacity':1});
	$("#litmusiconImg").css({'opacity':1});
	reactantFlag=3;
	$("#testtube_stand,#DropperDiv,#redLitmusDiv,#blueLitmusDiv,#testTubestand,#ZincmetalImg,#corktubeImg,#matchstickFull,#bubbles,#pourwaterImg,#maskDiv,#testtube_standClamp,#burnerDiv,#burnerOffImg,#burnerOnImg,#flameDiv,#corkStandImg,#testTubeWater,#maskDivcork,#testTubeWaterborder,#conicalBorder,#limewater,#milkywater,#pourwaterImg1,#bubblesConical,#bubblesBeaker,#testtubeStandscene4,#phenophthaleinDiv,#phenophthaleinLbl,#displayPhenolph,#sodiumcarbnteImg,#testtubeNa2co3,#testtubeIndicator,#limewaterlbl,#displaylime").css({display:'none' });
	$("#matchsticFlameDiv").css({'display':'none'});
	startExperiment();
}

function dropperup(){
	$("#DropperDiv").css({'z-index':'5' });
	//$("#maskDiv").css({'z-index':'2' });
}

function dropperdown(){
	$("#DropperDiv").css({'z-index':'2' });
	//$("#maskDiv").css({'z-index':'10' });
}

function corkup(){
	if(corkFlag==1){
		$("#corktubeImg").css({'z-index':'10' });
		$("#maskDivcork").css({'z-index':'9' });
	}
}
function corkdown(){
	if(corkFlag==1){
		$("#corktubeImg").css({'z-index':'9' });
		$("#maskDivcork").css({'z-index':'10' });
	}
}

function repositionning(){//repositioning the aarray
$("#DropperDiv").draggable({ disabled: false});
$("#DropperDiv").css({left:'45px',top: '138px' });
$("#dropperSoln1").css({height:'0px',left :'17px'});
$("#redlitmus").css({'opacity':'0' });
$("#RedlitmusTube").css({'opacity':'1' });
$("#blueLitmusTube").css({'opacity':'1' });
$("#bluelitmus").css({'opacity':'0' });
clearInterval(int1);
clearInterval(int);
$('#limewater').css({opacity:'1'});
$('#milkywater').css({opacity:'0'});
setResult=0;
$("#acidDiv,#baseDiv").css({'opacity':0.5});
}