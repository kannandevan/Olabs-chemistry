// JavaScript Document

var burnerFlag=new Boolean(false);
var tempValue=27;
var i=-30;
var zTop=100;
var propertyFlag=1;
var solutionFlag=0;
var loadCount=0;
var testFlag=0;
var saltFlag=1;//1 for salt and 2 for sugar
var naphFlag=1;//1 for naphthalene 2 for Anthracene 3 for Camphor
var sandFlag=1; //1 for sand 2 for soil
var timerSpatulla2,timerSpatulla3;
var radioSelection=1;
var stir=0;
var MsgNumber=0;
var countFilter=countFilter1=flagFilter=countEvap=countEvap1=flagEvap=0
var count=flag=0;
var count1=0;
var timer2;
var flag=0;
var opacityflag=opacityflagFilter=opacityflagEvap=0;
var Int;
var flagstir=new Boolean(false);
var flag1=new Boolean(true);
var degree1=opacitynum=.3;
var timer2,timer1;
var count=0.1;
var timer2,timer3,timer4,flagf=flagC=flagD=degree=stirflag=cflag=0;
var stage1,stage2,stage3,stage4,stage5;
var flagD1=112;
var divId,msg1,msg2,msg3,msg4;
var tripmsg=[];
var msgArray=[];
var labelArray=[];
var mixturesOptions;
var btnlabelArray;
var spanString1,spanString2,spanString3;

/// canvas for bg image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 569;
BGCanvas.height = 440;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0);
};
bgImg.src=simPath+'images/BG.gif';

var stilImageCanvas = document.getElementById("init_setUpCanvas");
stilImageCanvas.width = 569;
stilImageCanvas.height = 440;

var string1,string2,string3;

var stillCtx = stilImageCanvas.getContext('2d');
var stillImg = new Image;
var stillimg2=new Image;
stillImg.onload = function(){ 
stillCtx.drawImage(stillImg,0,-30);
};
var StringArray;
//stillImg.src=simPath+'images/Firststill.png';
window.onload = function init(){
		 
	document.getElementById("expName").innerHTML=gt.gettext("Separation of Components of a Mixture");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	// $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	// $('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	// $(".labName").html(gt.gettext("Developed by CDAC Mumbai"));	
	labelArray=[gt.gettext("Next"),gt.gettext("Water"),gt.gettext("Sugar"),gt.gettext("Salt"),gt.gettext("Naphthalene"),gt.gettext("Anthracene"),gt.gettext("Camphor"),gt.gettext("Soil"),gt.gettext("Sand"),gt.gettext("Select the mixture:"),gt.gettext("Ammonium Chloride")];	
	StringArray=[gt.gettext("To separate naphthalene from the mixture"),gt.gettext("To separate camphor from the mixture"),gt.gettext("To separate anthracene from the mixture"),gt.gettext("To separate ammonium chloride from the mixture"),gt.gettext("To separate sand from the mixture"),gt.gettext("To separate soil from the mixture"),gt.gettext("To separate salt from the mixture"),gt.gettext("To separate sugar from the mixture")];	
	mixturesOptions=[labelArray[4]+"+"+labelArray[8]+"+"+labelArray[3]+"",
					 labelArray[6]+"+"+labelArray[8]+"+"+labelArray[3]+"",
					 labelArray[5]+"+"+labelArray[8]+"+"+labelArray[3]+"",
					 labelArray[4]+"+"+labelArray[8]+"+"+labelArray[2]+"",
					 labelArray[6]+"+"+labelArray[8]+"+"+labelArray[2]+"",
					 labelArray[5]+"+"+labelArray[8]+"+"+labelArray[2]+"",
					 labelArray[4]+"+"+labelArray[7]+"+"+labelArray[3]+"",
					 labelArray[6]+"+"+labelArray[7]+"+"+labelArray[3]+"",
					 labelArray[5]+"+"+labelArray[7]+"+"+labelArray[3]+"",
					 labelArray[10]+"+"+labelArray[8]+"+"+labelArray[3]+""];	
	tripmsg=[gt.gettext("Drag the china dish and place it over the burner"),gt.gettext("Drag the funnel and place it over the china dish to collect the compound."),gt.gettext("Drag the spatula to the funnel to collect the compound and drag it to the watch glass to place the compound in it"),gt.gettext("To transfer the mixture into the beaker containing water, drag the china dish over it."),gt.gettext("Click on the glass  rod to stir the solution."),gt.gettext("Drag the beaker over the funnel to collect the residue in the filter paper."),gt.gettext("Drag the spatula to the funnel to collect the compound and drag it to the watch glass to place the compound in it."),gt.gettext("To pour the filtrate from the beaker to the china dish, drag  the beaker over the china dish"),gt.gettext("Drag the spatula over the china dish to collect the compound and drag it to the watch glass to place the compound in it.")];
	msgArray=[gt.gettext("Naphthalene is separated by the process of sublimation."),gt.gettext("Anthracene is separated by the process of sublimation."),gt.gettext("Camphor is separated by the process of sublimation."),gt.gettext("Ammonium Chloride is separated by the process of sublimation."),gt.gettext("Sand is separated by the process of filtration."),gt.gettext("Soil is separated by the process of filtration."),gt.gettext("Salt is separated by the process of evaporation."),gt.gettext("Sugar is separated by the process of evaporation."),gt.gettext("Carefully heat sugar solution")];	
	
	$('#displayNextDiv').html(labelArray[0]);
	document.getElementById("headngP").innerHTML=labelArray[9];	
	btnlabelArray=[gt.gettext("Start Sublimation"),gt.gettext("Start Filtration"),gt.gettext("Start Evaporation"),gt.gettext('Reset')];
	$('#sublimation').attr('value',btnlabelArray[0]);
	$('#filtration').attr('value',btnlabelArray[1]);
	$('#evaporation').attr('value',btnlabelArray[2]);
	$('#reset').attr('value',btnlabelArray[3]);
$(document).ready(function() {	
	$("#smokeDiv").css({display:'none'});
	$("#smokeDiv1").css({display:'none'});
	string1=labelArray[4];
	string2=labelArray[8]
	string3=labelArray[3];	
	$('#sublimation').prop('disabled', false);
	$('#filtration').prop('disabled', true);
	$('#evaporation').prop('disabled', true);
	$("#displaycomp2").css({display:'none'});
	$("#compount2LblImg").css({display:'none'});
	$("#precautionImg").css({display:'none' });	
	$("#flame").css({display:'block'});
	document.getElementById('span1').innerHTML=StringArray[0];
	document.getElementById('span2').innerHTML=StringArray[4];
	document.getElementById('span3').innerHTML=StringArray[6];	
	$("#compount1LblImg").css({display:'block',left:'14px',top:'288px',width: '161px',height: '46px'});
	$("#displaycomp1").css({display:'block',top:'300px',left:'18px',width:'153px','font-size':'14px'});
	$('#displaycomp1').html(string1+" + "+string2+" + "+string3);
	 document.getElementById("mixturesCombo").selectedIndex=0;
	 document.getElementById("animLoad").style.visibility="hidden";
	 	//*--Loading option values in drop down----
	addintoDropDown($('#mixturesCombo'),mixturesOptions);	
	
	/*--Function to add values into the drop down---*/					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
	}
});
}
var flaming;	
function flames(){
		if($('.flame1').css('display') == "block"){          
			$('.flame1,.flame3,.flame4').hide();
			$('.flame2').show();         
		}else if($('.flame2').css('display') == "block"){          
			$('.flame1,.flame2,.flame4').hide();
			$('.flame3').show();         
		}else if($('.flame3').css('display') == "block"){          
			$('.flame1,.flame3,.flame2').hide();
			$('.flame4').show();         
		}else{
			$('.flame2,.flame3,.flame4').hide();
			$('.flame1').show();
		}
	} 
setFirstChinadish();
function mixturesComboselection(){
	if( document.getElementById("mixturesCombo").selectedIndex==0){
			saltFlag=1;
			naphFlag=1;
			sandFlag=1;
			string1=labelArray[4];
			string2=labelArray[8]
			string3=labelArray[3];
			spanString1=StringArray[0];
			spanString2=StringArray[4];
			spanString3=StringArray[6];					
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==1){
			saltFlag=1;
			naphFlag=3;
			sandFlag=1;
			string1=labelArray[6];
			string2=labelArray[8]
			string3=labelArray[3];
			spanString1=StringArray[1];
			spanString2=StringArray[4];
			spanString3=StringArray[6];
		
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==2){
			saltFlag=1;
			naphFlag=2;
			sandFlag=1;
			string1=labelArray[5];
			string2=labelArray[8]
			string3=labelArray[3];
			spanString1=StringArray[2];
			spanString2=StringArray[4];
			spanString3=StringArray[6];

	}
	else if(document.getElementById("mixturesCombo").selectedIndex==3){
			saltFlag=2;
			naphFlag=1;
			sandFlag=1;
			string1=labelArray[4];
			string2=labelArray[8]
			string3=labelArray[2];
			spanString1=StringArray[0];
			spanString2=StringArray[4];
			spanString3=StringArray[7];

	}
	else if(document.getElementById("mixturesCombo").selectedIndex==4){
			saltFlag=2;
			naphFlag=3;
			sandFlag=1;
			string1=labelArray[6];
			string2=labelArray[8]
			string3=labelArray[2];
			spanString1=StringArray[1];
			spanString2=StringArray[4];
			spanString3=StringArray[7];
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==5){
			saltFlag=2;
			naphFlag=2;
			sandFlag=1;
			string1=labelArray[5];
			string2=labelArray[8]
			string3=labelArray[2];
			spanString1=StringArray[2];
			spanString2=StringArray[4];
			spanString3=StringArray[7];
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==6){
			saltFlag=1;
			naphFlag=1;
			sandFlag=2;
			string1=labelArray[4];
			string2=labelArray[7]
			string3=labelArray[3];
			spanString1=StringArray[0];
			spanString2=StringArray[5];
			spanString3=StringArray[6];
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==7){
			saltFlag=1;
			naphFlag=3;
			sandFlag=2;
			string1=labelArray[6];
			string2=labelArray[7]
			string3=labelArray[3];
			spanString1=StringArray[1];
			spanString2=StringArray[5];
			spanString3=StringArray[6];
	}
	else if(document.getElementById("mixturesCombo").selectedIndex==8){
			saltFlag=1;
			naphFlag=2;
			sandFlag=2;
			string1=labelArray[5];
			string2=labelArray[7]
			string3=labelArray[3];
			spanString1=StringArray[2];
			spanString2=StringArray[5];
			spanString3=StringArray[6];
		}
		else if(document.getElementById("mixturesCombo").selectedIndex==9){
			saltFlag=1;
			naphFlag=4;
			sandFlag=1;
			string1=labelArray[10];
			string2=labelArray[8]
			string3=labelArray[3];
			spanString1=StringArray[3];
			spanString2=StringArray[4];
			spanString3=StringArray[6];
		}
		$('#displaycomp1').html(string1+" + "+string2+" + "+string3);
		document.getElementById('span1').innerHTML=spanString1;
		document.getElementById('span2').innerHTML=spanString2;
		document.getElementById('span3').innerHTML=spanString3;	
		setFirstChinadish();
}

function setFirstChinadish(){
	if(sandFlag==1){
		
		$('#chinadishImg').css({display:'block'});
		$('#chinadishImg5').css({display:'none'});
	}
	else if(sandFlag==2){
		$('#chinadishImg').css({display:'none'});
		$('#chinadishImg5').css({display:'block'});
	}
}
SpatullaDrag();

function DragEvapSpatulla(){//Spatulla drag function for evaporation
	 $("#SpatullaDiv").draggable({
		drag: function(event,ui){		
		},
		stop: function(){
			if(($("#SpatullaDiv").position().left>=210)&&($("#SpatullaDiv").position().left<=305)&&
			($("#SpatullaDiv").position().top>=-60)&&($("#SpatullaDiv").position().top<=76)){
				$("#SpatullaDiv" ).draggable({ disabled: true });
				$("#SpatullaDiv").css({left:'254px',top:'68px'});
				timerSpatulla3=setInterval(spatuallmove3,10);
			}
			else{
				if(opacityflagEvap==0){
					$("#SpatullaDiv").css({display:'block',left: '445px',top: '200px'});
				}
				else if(opacityflagEvap==1){
					$("#SpatullaDiv").css({display:'block',left:'447px',top:'170px'});	
					$("#drops1,#drops2,#drops3,#drops4,#drops5,#drops6").css({display:'block',left:'449px'});
					$("#SpatullaDiv" ).draggable({ disabled: true });
					$('#drops1').css({display:'block',top:'237px',left:'449px'});
					$('#drops2').css({display:'block',top:'245px',left:'449px'});
					$('#drops3').css({display:'block',top:'251px',left:'449px'});
					$('#drops4').css({display:'block',top:'253px',left:'449px'});
					$('#drops5').css({display:'block',top:'255px',left:'449px'});
					$('#drops6').css({display:'block',top:'261px',left:'449px'});
					$('#drops2,#drops3,#drops4,#drops5,#drops6').animate({top:'261px'});
					$("#comp1Img").css({display:'block',left:'441px',top:'251px'});	
					$("#comp1Img").attr('src', simPath+'images/powderinwatchglass3.png');
					$('#drops1').animate({top:'261px'},500,function(){	
					$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6').css({display:'none'});
					$("#SpatullaDiv").css({display:'none' });
					$("#precautionImg").css({display:'none' });
					$("#inferenceDiv").css({display:'block' });
					precautionFlag=0
					});
					$('#ImgInSpatulla2').animate({opacity:'0'},500,function(){	
					$('#ImgInSpatulla2').css({display:'none'})
					});
				}
			}
			}
	 });
				
 }

function SpatullaDrag(){//Drag spatulla function
	$("#SpatullaDiv").draggable({
		drag: function(event,ui){},
		stop: function(){
			if(testFlag==1){
				if(($("#SpatullaDiv").position().left>=200)&&($("#SpatullaDiv").position().left<=274)&&
				($("#SpatullaDiv").position().top>=74)&&($("#SpatullaDiv").position().top<=150)){//condition satisfy
					$("#SpatullaDiv").css({left:'227px',top:'124px'});
					$("#SpatullaDiv" ).draggable({ disabled: true });
					timer1=setInterval(spatuallmove,10);
				}
				else{
					if(opacityflag==0){//if(spatulla doesn't contain compound)
						$("#SpatullaDiv").css({top: '163px',left: '322px'});
					}
					else if(opacityflag==1){
						//if(spatulla contain compound)
						$("#SpatullaDiv").css({left:'319px',top:'130px'});
						$("#drops1").css({display:'block'});
						$("#drops2,#drops3,#drops4,#drops5,#drops6").css({display:'block'});
						$("#SpatullaDiv" ).draggable({ disabled: true });
						$('#drops1').css({display:'block',top:'238px'});
						$('#drops2').css({display:'block',top:'244px'});
						$('#drops3').css({display:'block',top:'251px'});
						$('#drops4').css({display:'block',top:'258px'});
						$('#drops5').css({display:'block',top:'265px'});
						$('#drops6').css({display:'block',top:'270px'});
						$('#drops2,#drops3,#drops4,#drops5,#drops6').animate({top:'270px'});
						$("#comp1Img").css({display:'block' });	
						$('#filtration').prop('disabled', false);						
						$('#ImgInSpatulla').animate({opacity:'0'},500,function(){	
							$('#ImgInSpatulla').css({display:'none'})
						});
						$('#drops1').animate({top:'270px'},500,function(){	
						$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6').css({display:'none'});
						$("#SpatullaDiv").css({display:'none' });	
						$("#inferenceDiv").css({display:'block' });
						});
						
					}
					
				}
			}
			else if(testFlag==2){
				if(($("#SpatullaDiv").position().left>=217)&&($("#SpatullaDiv").position().left<=284)&&
				($("#SpatullaDiv").position().top>=70)&&($("#SpatullaDiv").position().top<=150))
				{
					$("#SpatullaDiv").css({left:'197px',top:'117px'});
					$("#SpatullaDiv" ).draggable({ disabled: true });
					timerSpatulla2=setInterval(spatuallmove2,10);
				}
				else{
					if(opacityflagFilter==0){
						$("#SpatullaDiv").css({display:'block',left:'350px',top:'178px'});
						$("#SpatullaDiv").css({ WebkitTransform: 'rotate(20deg)'});
						$("#SpatullaDiv").css({ '-moz-transform': 'rotate(20deg)'});
 						$("#SpatullaDiv").css({'-o-transform':'rotate(20deg)'});
  					    $("#SpatullaDiv").css({'transform':'rotate(20deg)'});
					}
					else if(opacityflagFilter==1){
						$("#SpatullaDiv").css({display:'block',left:'315px',top:'130px'});	
						if(sandFlag==1){
							$("#comp1Img").attr('src', simPath+'images/powderinwatchglass2.png');
							$("#dropsSand1,#dropsSand2,#dropsSand3,#dropsSand4,#dropsSand5,#dropsSand6").css({display:'block',left:'318px'});
						$('#dropsSand1').css({display:'block',top:'238px',left:'318px'});
						$('#dropsSand2').css({display:'block',top:'244px',left:'318px'});
						$('#dropsSand3').css({display:'block',top:'251px',left:'318px'});
						$('#dropsSand4').css({display:'block',top:'258px',left:'318px'});
						$('#dropsSand5').css({display:'block',top:'265px',left:'318px'});
						$('#dropsSand6').css({display:'block',top:'270px',left:'318px'});
						$('#dropsSand2,#dropsSand3,#dropsSand4,#dropsSand5,#dropsSand6').animate({top:'270px'});
						$('#dropsSand1').animate({top:'270px'},500,function(){	
						$('#dropsSand1,#dropsSand2,#dropsSand3,#dropsSand4,#dropsSand5,#dropsSand6').css({display:'none'});
						$("#SpatullaDiv").css({display:'none' });	
						$("#inferenceDiv").css({display:'block' });
						});	
						$('#ImgInSpatulla1').animate({opacity:'0'},500,function(){	
							$('#ImgInSpatulla1').css({display:'none'})
						});
						}
						else if(sandFlag==2){
							$("#comp1Img").attr('src', simPath+'images/powderinwatchglass4.png');
							$("#dropsSoil1,#dropsSoil2,#dropsSoil3,#dropsSoil4,#dropsSoil5,#dropsSoil6").css({display:'block',left:'318px'});
						$('#dropsSoil1').css({display:'block',top:'238px',left:'318px'});
						$('#dropsSoil2').css({display:'block',top:'244px',left:'318px'});
						$('#dropsSoil3').css({display:'block',top:'251px',left:'318px'});
						$('#dropsSoil4').css({display:'block',top:'258px',left:'318px'});
						$('#dropsSoil5').css({display:'block',top:'265px',left:'318px'});
						$('#dropsSoil6').css({display:'block',top:'270px',left:'318px'});
						$('#dropsSoil2,#dropsSoil3,#dropsSoil4,#dropsSoil5,#dropsSoil6').animate({top:'270px'});
						$('#dropsSoil1').animate({top:'270px'},500,function(){	
							$('#dropsSoil1,#dropsSoil2,#dropsSoil3,#dropsSoil4,#dropsSoil5,#dropsSoil6').css({display:'none'});
						$("#SpatullaDiv").css({display:'none' });	
						$("#inferenceDiv").css({display:'block' });
						});	
							$('#ImgInSpatulla3').animate({opacity:'0'},500,function(){	
							$('#ImgInSpatulla3').css({display:'none'})
						});
						}
						$("#SpatullaDiv" ).draggable({ disabled: true });
						$('#evaporation').prop('disabled', false);
						$("#comp1Img").css({display:'block' });
					}
				}
			}
		}
		});
}

///////////////////////////
var cons1,cons=0;
function stir1(){
	cflag++;
	cons+=.1;
	cons1=cons.toFixed(1);
	if(cflag<=200){
		shakeORstir();
		rotate();
	}
	else{
		$("#rod").css({ WebkitTransform: 'rotate(-12deg)'});
		$("#rod").css({ '-moz-transform': 'rotate(-12deg)'});
		$("#rod").css({'-o-transform':'rotate(-12deg)'});
		$("#rod").css({'transform':'rotate(-12deg)'})
		clearInterval(timer2);
		$("#rod").css({display:'none'});
		if(sandFlag==1){
		$("#waterstill").css({display:'none' })
		$("#water").css({display:'none'});
		$("#waterstillEnd").css({display:'block'});
		}
		else if(sandFlag==2){
				$("#watersoil").css({display:'none' })
		$("#waterstillsoil").css({display:'none'});
		$("#waterstillsoilEnd").css({display:'block'});
			
		}
		dragbeaker();
		//stop stirring
	}
}

function dragbeaker(){
	$("#beakerafterStir").draggable({
		drag: function(event,ui){
			$('#watershadow').stop(true).fadeTo(100,0);
		},
		stop: function() {			
	if(($("#beakerafterStir").position().left>=191)&&($("#beakerafterStir").position().left<=328)&&
				($("#beakerafterStir").position().top>=-90)&&($("#beakerafterStir").position().top<=170)){
			$("#beakerafterStir").css({display:'none'});
			$("#beakerRight").css({display:'none' });
			document.getElementById("animLoad1").style.visibility="visible";
			if(sandFlag==1){
			stage2 = new swiffy.Stage(document.getElementById('animLoad1'),
									   swiffyobject1);
			}
			else if(sandFlag==2){
				stage2 = new swiffy.Stage(document.getElementById('animLoad1'),
									   swiffyobject3);
			}
			playAnim02();
				}
				else
				{
					$("#beakerafterStir").css({display:'block',top:'190px',left:'140px'});
					$("#watershadow").fadeTo(100,1);
				}
		}
		
		
		});
		
}
function spatuallmove()
{
	count++;
	if(flag!=3)
	{
		if(count<=50)
		{
			if(count<=25)
			{
				count1++;
			}
			else if(count>25)
			{
			count1--;
			}
			$("#SpatullaDiv").css({ WebkitTransform: 'rotate(-'+count1+'deg)'});
			$("#SpatullaDiv").css({ '-moz-transform': 'rotate(-'+count1+'deg)'});
			$("#SpatullaDiv").css({'-o-transform':'rotate(-'+count1+'deg)'});
			$("#SpatullaDiv").css({'transform':'rotate(-'+count1+'deg)'})
		}
		else
		{
			clearInterval(timer1);
			count=0;
			flag++;
			timer1=setInterval(spatuallmove,10);
		}
	}
	else
	{
		clearInterval(timer1);
		$("#SpatullaDiv" ).draggable({ disabled: false });
		if(testFlag==1)
		{
			$("#ImgInSpatulla").css({'opacity':'1'});
		}
		else if(testFlag==2)
		{
			$("#ImgInSpatulla1").css({'opacity':'1'});
		}
		opacityflag=1;
	}
}
function spatuallmove2()
{
	countFilter++;
	if(flagFilter!=1)
	{
		if(countFilter<=50)
		{
			if(countFilter<=25)
			{
				countFilter1++;
			}
			else if(countFilter>25)
			{
				countFilter1--;
			}
			$("#SpatullaDiv").css({ WebkitTransform: 'rotate(-'+countFilter1+'deg)'});
			$("#SpatullaDiv").css({ '-moz-transform': 'rotate(-'+countFilter1+'deg)'});
			$("#SpatullaDiv").css({'-o-transform':'rotate(-'+countFilter1+'deg)'});
			$("#SpatullaDiv").css({'transform':'rotate(-'+countFilter1+'deg)'})
		}
		else
		{
			clearInterval(timerSpatulla2);
			countFilter=0;
			flagFilter++;
			timerSpatulla2=setInterval(spatuallmove2,10);
		}
	}
	else
	{
		clearInterval(timerSpatulla2);
		$("#SpatullaDiv" ).draggable({ disabled: false });
		
		if(sandFlag==1)
		{
			$("#ImgInSpatulla3").css({display:'none'});
			$("#ImgInSpatulla1").css({display:'block',left: '0px',top: '94px'});
			$("#ImgInSpatulla1").css({'opacity':'1'});
		}
		else if(sandFlag==2)
		{
			$("#ImgInSpatulla1").css({display:'none'});
			$("#ImgInSpatulla3").css({display:'block',left: '0px',top: '94px'});
			$("#ImgInSpatulla3").css({'opacity':'1'});	
		}
			opacityflagFilter=1;
	}
}

function spatuallmove3()
{
	countEvap++;
	if(flagEvap!=3)
	{
		if(countEvap<=50)
		{
			if(countEvap<=25)
			{
				countEvap1++;
			}
			else if(countEvap>25)
			{
				countEvap1--;
			}
			//$("#SpatullaDiv").css({'z-index':'10'});
			$("#SpatullaDiv").css({ WebkitTransform: 'rotate(-'+countEvap1+'deg)'});
			$("#SpatullaDiv").css({ '-moz-transform': 'rotate(-'+countEvap1+'deg)'});
			$("#SpatullaDiv").css({'-o-transform':'rotate(-'+countEvap1+'deg)'});
			$("#SpatullaDiv").css({'transform':'rotate(-'+countEvap1+'deg)'})
		}
		else
		{
			clearInterval(timerSpatulla2);
			countEvap=0;
			flagEvap++;
			timerSpatulla3=setInterval(spatuallmove3,10);
		}
	}
	else
	{
		clearInterval(timerSpatulla3);
		$("#SpatullaDiv" ).draggable({ disabled: false });
		$("#ImgInSpatulla2").css({display:'block',left:'-3px',top: '51px'});
		$("#ImgInSpatulla2").css({'opacity':'1'});
		opacityflagEvap=1;
	}
}
var waterturnTimer;
function Stir_FN()
{
	if(stirflag==1)
	{
		id=document.getElementById("rod");
		if(sandFlag==1)
		{
			$("#waterstill").css({display:'none' })
		$("#water").css({display:'block',left:'184px'});
		}
		else if(sandFlag==2)
		{
			$("#watersoil").css({display:'block'});
			$("#waterstillsoil").css({display:'none'});
		}
		timer2 =setInterval(stir1,10);
		waterturnTimer =setInterval(waterTurn,150);
	}
	/*$('#rod').animate({top:'200px'},2000,function(){});*/
}

//function for stiring the water in the beaker
function waterTurn()
{
	if(sandFlag==1)
	{
	if($('.water1').css('display') == "block"){          
			$('.water1,.water3,.water4').hide();
			$('.water2').show();         
		}else if($('.water2').css('display') == "block"){          
			$('.water1,.water2,.water4').hide();
			$('.water3').show();         
		}else if($('.water3').css('display') == "block"){          
			$('.water1,.water3,.water2').hide();
			$('.water4').show();         
		}else{
			$('.water2,.water3,.water4').hide();
			$('.water1').show();
			
		}
	}
	else if(sandFlag==2)
	{
		if($('.water6').css('display') == "block"){          
			$('.water6,.water8,.water9').hide();
			$('.water7').show();         
		}else if($('.water7').css('display') == "block"){          
			$('.water6,.water7,.water9').hide();
			$('.water8').show();         
		}else if($('.water8').css('display') == "block"){          
			$('.water6,.water7,.water8').hide();
			$('.water9').show();         
		}else{
			$('.water7,.water8,.water9').hide();
			$('.water6').show();
			
		}
		
	}
	
}
var widthVal=30;
function shakeORstir()
{
	//stir with the rod
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
	$("#beakerrightstill").css({display:'block' });
	id.style.webkitTransformOrigin='50% 50%';
	id.style.webkitTransform = 'rotate(' + degree + 'deg)';
	id.style.MozTransformOrigin='50% 50%';
	id.style.MozTransform ='rotate('+ degree +'deg)';
}

var smokeTimer,smokeTimerEvap,precautionFlag=0;
//startb sublimation process
function startSublimation()
{
	testFlag=1;
	$("#precautionImg").css({display:'none' });
	$('.flame1').show(); 
	flaming = setInterval(flames, 50);//fn call for flames	
	document.getElementById('mixturesCombo').disabled=true;
	document.getElementById('sublimation').disabled=true;
	$("#funnelFullDiv" ).draggable({ disabled: true });
	if(sandFlag==1)
	{//if selected compound contain sand
	$("#chinadishImg").draggable({//dragging china dish to the burner
		drag: function(event,ui){
			$('#chinadishShadow').stop(true).fadeTo(100,0);
			$("#chinadishShadow").css({display:'none' });
		},
		stop: function() 
		{
			if(($("#chinadishImg").position().left>=129)&&($("#chinadishImg").position().left<=320)&&
			($("#chinadishImg").position().top>=-3)&&($("#chinadishImg").position().top<=158))
			{

				$("#chinadishImg").css({left:'225px',top:'140px'});
				$("#chinadishImg" ).draggable({ disabled: true });
				$("#funnelFullDiv" ).draggable({ disabled: false });
				//$("#clouds").css({display:'block'});
				$("#smokeDiv").css({display:'block'});
				smokeTimer=setInterval(startsmoke,10);

			}
			else
			{
				$("#chinadishImg").css({left:'46px',top:'248px'});
				$("#chinadishShadow").fadeTo(100,1);
				$("#chinadishShadow").css({display:'block' });
				
			}
		}
	});
	}
	//if selected compound contains soil
	else if(sandFlag==2)
	{
			$("#chinadishImg5").draggable({
		drag: function(event,ui){
			$('#chinadishShadow').stop(true).fadeTo(100,0);
			$("#chinadishShadow").css({display:'none' });
		},
		stop: function() 
		{
			if(($("#chinadishImg5").position().left>=129)&&($("#chinadishImg5").position().left<=320)&&
			($("#chinadishImg5").position().top>=-3)&&($("#chinadishImg5").position().top<=158))
			{
				$("#chinadishImg5").css({left:'225px',top:'140px'});
				$("#chinadishImg5" ).draggable({ disabled: true });
				$("#funnelFullDiv" ).draggable({ disabled: false });
				$("#smokeDiv").css({display:'block'});
				smokeTimer=setInterval(startsmoke,10);
			}
			else
			{
				$("#chinadishImg5").css({left:'46px',top:'248px'});
				$("#chinadishShadow").fadeTo(100,1);
				$("#chinadishShadow").css({display:'block' });
				
			}
		}
	});
		
	}
	//drag funnel function
	$("#funnelFullDiv").draggable({
		drag: function(event,ui){
			
			$('#funnelShadow').stop(true).fadeTo(100,0);
			$("#funnelShadow").css({display:'none'});
		},
		stop: function() 
		{
			if(($("#funnelFullDiv").position().left>=108)&&($("#funnelFullDiv").position().left<=291)&&
			($("#funnelFullDiv").position().top>=-120)&&($("#funnelFullDiv").position().top<=34))
			{
				$("#smokeDiv").css({display:'none'});
				//$("#smokeDiv").animate({opacity:0});
				$("#funnelFullDiv").css({left: '221px',top:'1px'});
				$("#funnelFullDiv" ).draggable({ disabled: true });
				$("#funnelbgWhite").css({left:'-93px',top:'13px'});;
				clearInterval(smokeTimer);
				timer1=setInterval(colorchangeFunnel,500)
			}
			else
			{
				$("#funnelFullDiv").css({left:'414px',top:'165px'});
				$("#funnelShadow").fadeTo(100,1);
				$("#funnelShadow").css({display:'block'});
			}
		}
	});
	
}
var smokeCount=0;
var topsmoke=111;
function startsmoke()
{
	smokeCount++;
	if(smokeCount<=1500)
	{
	topsmoke=topsmoke-(smokeCount*0.00025)
	$(".vSmokeC").css({display:'block',top:topsmoke+'px'})
	}
	else
	{
		clearInterval(smokeTimer);
		$("#smokeDiv").css({display:'none'});
	}
	
}

var smokeCountEvap=0;
var topsmokeEvap=65;
function startsmokeEvap()
{
	smokeCountEvap++;
	if(smokeCountEvap<=1500)
	{
	topsmokeEvap=topsmokeEvap-(smokeCountEvap*0.00025)
	$(".vSmokeC1").css({display:'block',top:topsmokeEvap+'px'})
	}
	else
	{
		clearInterval(smokeTimerEvap);
		$("#smokeDiv1").css({display:'none'});
	}
	
}


//color change of the funnel function
function colorchangeFunnel()
{
	
	count=count/0.5;
	if(count<=2)
	{
		$("#funnelbgWhite").animate({opacity:count});
	}
	else
	{
		clearInterval(timer1);
		$("#displayNextDiv").css({display:'block'});
		$("#NextDiv").css({display:'block'});
		$("#nextbtnImg").css({display:'block'});
	}
}

//function for start filtration
function startFiltration()
{
	testFlag=2;
	bgCtx.clearRect(0, 0, BGCanvas.width, BGCanvas.height);
	bgImg.src=simPath+'images/BGsceneThree.gif';
	bgCtx.drawImage(bgImg,0,0);
	
	$("#precautionImg").css({display:'none' });
	$("#inferenceDiv").css({display:'none' });
	$("#funnelbgWhite").css({display:'none'});
	$("#funnelImg").css({display:'none'});
	$("#burnerImg").css({display:'none'});
	$("#flame").css({display:'none'});
	$('#filtration').prop('disabled', true);
	$("#SpatullaDiv").css({display:'none'});
	$("#funnelShadow").css({display:'none'});
	$("#watchglassImg").css({display:'none'});
	$("#comp1Img").css({display:'none' });	
	$("#funnelFullDiv").css({display:'none' });	
	stage5 = new swiffy.Stage(document.getElementById('animLoad3'),stillswiffyobject);
	document.getElementById("animLoad3").style.visibility="visible";
	stage5.start();
	$("#watershadow").css({display:'block',left: '165px',top: '299px' });	
	$("#rod").css({display:'block' });
	$("#filterwithfunnel").css({display:'block' });
	$("#beakerRight").css({display:'block' });
	if(sandFlag==1)
	{	
	$("#chinadishImg").css({display:'none'});
	$("#chinadishImg2").css({display:'none'});
	$("#chinadishImg4").css({display:'none'});
	$("#chinadishImg3").css({display:'block'});
	$("#chinadishImg5").css({display:'none'});
	}
	else if(sandFlag==2)
	{
		$("#chinadishImg").css({display:'none'});
		$("#chinadishImg2").css({display:'none'});
		$("#chinadishImg3").css({display:'none'});
		$("#chinadishImg4").css({display:'block'});
		$("#chinadishImg5").css({display:'none'});
	}
	$("#compount1LblImg").css({display:'block',left:'14px',top:'291px'});
	if(naphFlag==4)
	{
	$("#displaycomp1").css({display:'block',top:'300px',left:'2px','font-size':'18px'});
	}
	else{
			$("#displaycomp1").css({display:'block',top:'300px',left:'18px','font-size':'18px'});
	}
	$('#displaycomp1').html(string2+" + "+string3);
	$("#compount2LblImg").css({display:'block',left:'302px',top:'291px'});
	$("#displaycomp2").css({display:'block',top:'300px',left:'303px','font-size':'18px'});
	$('#displaycomp2').html(string3+" + "+labelArray[1]);	
	filtration1();
}
//function for start evaporation
function startEvaporation(){
	testFlag=3;
	bgCtx.clearRect(0, 0, BGCanvas.width, BGCanvas.height);
	bgImg.src=simPath+'images/BGEvap.gif';
	bgCtx.drawImage(bgImg,0,0);
	flaming = setInterval(flames, 50);	
	//$("#chinadishwater").css({display:'block' });
//$("#inferenceDiv").css({display:'none' });
if(saltFlag==2){
$("#precautionImg").css({display:'block' });
precautionFlag=1;
}
else{
$("#precautionImg").css({display:'none' });
precautionFlag=0
}
	$("#chinadishShadow").css({display:'none' });
	$("#inferenceDiv").css({display:'none' });
	$("#chinadishImg").css({display:'none'});
	$("#filterFunnelImg").css({display:'none'});
	$("#chinadishImg3").css({display:'none'});
	$("#chinadishImg2").css({display:'none'});//,left: '224px',top:'105px'
	$("#chinadishImg4").css({display:'none'});
	$("#chinadishImg5").css({display:'none'});
	$("#spatulaImg").attr('src', simPath+'images/spatulaSceneEvap.png');
	$("#chinadishUnder").css({display:'block'});
	$("#chinadishTop").css({display:'block'});
	$("#displaycomp2").css({display:'block',left:'16px','z-index': '15'});
	$("#compount2LblImg").css({display:'block',left:'22px','z-index': '14'});
	$('#displaycomp2').html(string3+" + "+labelArray[1]);	
	$("#SpatullaDiv").css({display:'block',left: '445px',top: '200px'});
	$("#flame").css({display:'block',left: '250px',top:'159px'});
	$('#evaporation').prop('disabled', true);
	$("#SpatullaDiv" ).draggable({ disabled: true });
	$("#displaycomp1").css({display:'none'});
	$("#funnelShadow").css({display:'none'});
	$("#watchglassImg").css({display:'none'});
	$("#comp1Img").css({display:'none' });	
	$("#funnelImg").css({display:'none' });	
	$("#funnelFullDiv").css({display:'none' });	
	$("#BeakerWater").css({display:'none' });	
	$("#EvapSolution").css({display:'block'});
	$("#watershadow").css({display:'block',top:'294px',left:'45px' });
	$("#burnerImg").css({display:'none'});
	$("#compount1LblImg").css({display:'block',left:'388px',top:'274px'});
	if(naphFlag==4)	{
	$("#displaycomp1").css({display:'block',left:'371px',top:'284px','font-size':'18px'});
	}
	else{
			$("#displaycomp1").css({display:'block',left:'396px',top:'284px','font-size':'18px'});

	}
	$('#displaycomp1').html(string3);
	dragwaterBeaker();

}
//function for drag the water beaker for evaporation
function dragwaterBeaker(){
$("#EvapSolution" ).draggable({ disabled: false });
	$("#EvapSolution").draggable({
		drag: function(event,ui){
			$('#watershadow').stop(true).fadeTo(100,0);
		},
		stop: function() {			
	if(($("#EvapSolution").position().left>=91)&&($("#EvapSolution").position().left<=270)&&
				($("#EvapSolution").position().top>=-62)&&($("#EvapSolution").position().top<=94))
				{
			$("#EvapSolution").css({display:'none' });
			document.getElementById("animLoad2").style.visibility="visible";
			stage4 = new swiffy.Stage(document.getElementById('animLoad2'),
									   swiffyobject4);
			$("#chinadishwater").css({display:'block' });
			$("#smokeDiv1").css({display:'block'});
			smokeTimerEvap=setInterval(startsmokeEvap,10);
			playAnim03();//animation for pouring water
				}
				else{
				$("#EvapSolution").css({display:'block',top:'199px',left:'49px'});
					$("#watershadow").fadeTo(100,1);
				}
		}
		});	
}
var nextFlag=0;
//next button function
function NextScene(){
		$("#chinadishImg").css({display:'none'});
		$("#chinadishImg3").css({display:'none'});
		$("#chinadishImg2").css({display:'none'});
		$("#chinadishImg4").css({display:'none'});	
		$("#chinadishImg5").css({display:'none'});	
		$("#smokeDiv").css({display:'none'});		
	if(testFlag==1)	{
		nextFlag=1;		
		bgCtx.clearRect(0, 0, BGCanvas.width, BGCanvas.height);
		bgImg.src=simPath+'images/BGSceneTwo.gif';
		bgCtx.drawImage(bgImg,0,0);
		clearInterval(flaming);
		document.getElementById("funnelImg").style.left="-62px";
		document.getElementById("funnelImg").style.top="194px";
		
		document.getElementById("funnelbgWhite").style.left="-155px";
		document.getElementById("funnelbgWhite").style.top="182px";
		
		$("#funnelImg").css({ WebkitTransform: 'rotate(-140deg)'});
		$("#funnelImg").css({ '-moz-transform': 'rotate(-140deg)'});
		$("#funnelImg").css({'-o-transform':'rotate(-140deg)'});
		$("#funnelImg").css({'transform':'rotate(-140deg)'});
		
		$("#funnelbgWhite").css({ WebkitTransform: 'rotate(-140deg)'});
		$("#funnelbgWhite").css({ '-moz-transform': 'rotate(-140deg)'});
		$("#funnelbgWhite").css({'-o-transform':'rotate(-140deg)'});
		$("#funnelbgWhite").css({'transform':'rotate(-140deg)'});
		
		$("#SpatullaDiv").css({display:'block',top: '163px',left: '322px'});
		$("#flame").css({display:'none'});
		$("#burnerImg").css({display:'none'});
		$("#opacityDiv").css({display:'none'});
		$("#watchglassImg").css({display:'block'});
		$("#compount1LblImg").css({display:'block',left:'258px',top:'283px'});
		if(naphFlag==4){
			$("#displaycomp1").css({display:'block',left:'262px',top:'290px',width: '145px','font-size':'15px'});
		}
		else{
		$("#displaycomp1").css({display:'block',left:'264px',top:'290px','font-size':'18px'});
		}
		$('#displaycomp1').html(string1);
		$("#displayNextDiv").css({display:'none'});
		$("#NextDiv").css({display:'none'});
		$("#nextbtnImg").css({display:'none'});
	}
	else if(testFlag==2){
	nextFlag=2;
	document.getElementById("animLoad").style.visibility="hidden";
	document.getElementById("animLoad1").style.visibility="hidden";
		bgCtx.clearRect(0, 0, BGCanvas.width, BGCanvas.height);
	bgImg.src=simPath+'images/BGSceneTwo.gif';
	$("#displayNextDiv").css({display:'none'});
	$("#NextDiv").css({display:'none'});
	$("#nextbtnImg").css({display:'none'});
	$("#funnelImg").css({display:'none'});
	$("#filterFunnelImg").css({display:'block'});
	$("#SpatullaDiv").css({display:'block',left:'350px',top:'178px'});
	$("#SpatullaDiv").css({ WebkitTransform: 'rotate(20deg)'});
	$("#SpatullaDiv").css({ '-moz-transform': 'rotate(20deg)'});
 	$("#SpatullaDiv").css({'-o-transform':'rotate(20deg)'});
    $("#SpatullaDiv").css({'transform':'rotate(20deg)'});
	$("#flame").css({display:'none'});
	$("#burnerImg").css({display:'none'});
	$("#watchglassImg").css({display:'block'});
	$("#compount1LblImg").css({display:'block',left:'261px',top:'283px'});
	if(naphFlag==4){
	$("#displaycomp1").css({display:'block',left:'267px',top:'290px','font-size':'18px'});
	}
	else{
			$("#displaycomp1").css({display:'block',left:'267px',top:'290px','font-size':'18px'});
	}
	$('#displaycomp1').html(string2);
	$("#compount2LblImg").css({display:'none'});
	$("#displaycomp2").css({display:'none'});
	$("#filterwithfunnel").css({display:'none'});
	$("#beakerRight").css({display:'none' });
	extractCompound2()
	}
}
//function for filtration
function filtration1(){
	if(testFlag==2){
		if(sandFlag==1){			
	$("#chinadishImg3" ).draggable({ disabled: false });
	$("#chinadishImg3").draggable({
		drag: function(event,ui){
				$('#chinadishShadow').stop(true).fadeTo(100,0);
			$("#chinadishShadow").css({display:'none' });
		},
		stop: function(){
			if(($("#chinadishImg3").position().left>=61)&&($("#chinadishImg3").position().left<=222)&&
			($("#chinadishImg3").position().top>=-6)&&($("#chinadishImg3").position().top<=188)){
				$("#chinadishImg3").css({display:'none'});
				//play animation for pouring the mixture.
				$("#BeakerWater").css({display:'none' });
				$("#watershadow").css({display:'none' });
				document.getElementById("animLoad3").style.visibility="hidden";
				document.getElementById("animLoad").innerHTML="";
				stage1 = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject);
				document.getElementById("animLoad").style.visibility="visible";				
				playAnim01();//fn for play sand pouring animation
			}
			else{
				$("#chinadishShadow").fadeTo(100,1);
				$("#chinadishShadow").css({display:'block' });
				$("#chinadishImg3").css({display:'block',left: '30px',top: '248px'});
			}
		}
	});
		}
		else if(sandFlag==2){
			$("#chinadishImg4" ).draggable({ disabled: false });
			$("#chinadishImg4").draggable({
			drag: function(event,ui){
			$('#chinadishShadow').stop(true).fadeTo(100,0);
			$("#chinadishShadow").css({display:'none' });
		},
		stop: function(){
			if(($("#chinadishImg4").position().left>=61)&&($("#chinadishImg4").position().left<=222)&&
			($("#chinadishImg4").position().top>=-6)&&($("#chinadishImg4").position().top<=188))
			{
				$("#chinadishImg4").css({display:'none'});
				//play animation for pouring the mixture.
				$("#BeakerWater").css({display:'none' });
				$("#watershadow").css({display:'none' });
				document.getElementById("animLoad3").style.visibility="hidden";
				
				document.getElementById("animLoad").innerHTML="";
				stage3 = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject2);
				document.getElementById("animLoad").style.visibility="visible";
				playsoilAnim();//play soil animation
			}
			else{
				$("#chinadishShadow").fadeTo(100,1);
				$("#chinadishShadow").css({display:'block' });
				$("#chinadishImg4").css({display:'block',left: '30px',top: '248px'});
			}
		}
	});
		}
	}
}
function playAnim01(){
	
	stage1.start();
	timer2=setInterval(anim01completed,10);//animation complete fn for sand
}
function playsoilAnim(){
	stage3.start();
	timer2=setInterval(anim01completed,10);//animation complete function for soil
	
}
function playAnim02(){//animation to filter solution
	stage2.start();
		timer3=setInterval(anim02completed,10);
}
var risewater;
function playAnim03(){//animation to evaporate solution
risewater=setInterval(waterup,10);
	stage4.start();
		timer4=setInterval(anim03completed,10);
}
var counterEvap=0;
//water rise function in chinadish in evaporation
function waterup(){
	counterEvap++;
	if(counterEvap==30){
		$("#chinadishwater").delay(100).animate({top:'112px'});
	}
	if(counterEvap==100){
		clearInterval(risewater);
	}
}
function anim01completed(){
	flagf++;
	if(flagf>=200)
	{
		clearInterval(timer2);
		clearInterval(waterturnTimer);
		stirflag=1;
	if(sandFlag==1){
		$("#waterstill").css({display:'block' });
		
	}
	else if(sandFlag==2){
		$("#waterstillsoil").css({display:'block' });
	}
		document.getElementById("animLoad").style.visibility="hidden";
		$("#beakerafterStir").css({display:'block'});
		$("#watershadow").css({display:'block',left: '165px',top: '299px' });
		$("#chinadishImg").css({display:'none'});
		$("#chinadishImg3").css({display:'none'});
		$("#chinadishImg4").css({display:'none'});	
		$("#chinadishImg2").css({display:'block',left: '27px',top: '248px'});
	
	}
}
function anim02completed(){
	flagC++;
	if(flagC>=500)	{
		clearInterval(timer3);		
		$("#displayNextDiv").css({display:'block'});
		$("#NextDiv").css({display:'block'});
		$("#nextbtnImg").css({display:'block'});
	}
}
function anim03completed(){
	
	flagD++;
	if(flagD>=500){
		if(flagD%10==0){
			if(flagD1<=116){
				flagD1=flagD1+(flagD*0.001);
				$("#chinadishwater").css({top:flagD1+'px'});
			}
		}
	}
	if(flagD==800){
		//$("#smokeDiv").css({display:'none'});
		$("#SpatullaDiv" ).draggable({ disabled: false });
		$("#SpatullaDiv").css({'z-index':'12'});
		DragEvapSpatulla();
	}
	if(flagD==1200){
		clearInterval(timer4);
		clearInterval(flaming);
		//clearInterval(smokeTimerEvap);		
		$('.flame1').hide();
		$('.flame2').hide();
		$('.flame3').hide();
		$('.flame4').hide();
	}
}

function extractCompound2(){
	if(testFlag==2){
		$("#SpatullaDiv" ).draggable({ disabled: false });
		$("#ImgInSpatulla").css({display:'none'});
		$("#ImgInSpatulla1").css({display:'block'});
	}
}