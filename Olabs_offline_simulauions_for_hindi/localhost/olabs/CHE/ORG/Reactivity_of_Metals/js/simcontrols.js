// JavaScript Document

window.onload=initialFunction;"initEvent";

//array for result section
var metalArrayforResult;
var orderOfReactivity;
var helpLabel;

var metalArray ;
var metalParticleImgs=['aluminium.png','Zinc.png','Iron.png','Copper.png'];
var forcepsOfMetalImgs=['Al2drag.png','Zn2drag.png','Fe2drag.png','Cu2drag.png'];
//first metalpiece for Al,Zn,Fe,Cu
var metalPieceImgsC1=metalPieceImgsB1=metalPieceImgsA1=["metalPiece1.png","metalPiece1Zn.png","metalPiece1Fe.png","metalPiece1Cu.png"];
//second metalpiece for Al,Zn,Fe,Cu
var metalPieceImgsC2=metalPieceImgsB2=metalPieceImgsA2=["metalPiece2.png","metalPiece2Zn.png","metalPiece2Fe.png","metalPiece2Cu.png"];

var beakerSolnAlA;//while selecting aluminium 
var beakerSolnZnA;//while selecting Zinc
var beakerSolnFeA;//while selecting Iron
var beakerSolnCuA;//while selecting copper

//while selecting aluminium color change in corresbonding beakers
var metalSolnAlA=['waterblue.png','waterwhite.png','watergreen.png'];
//while selecting zinc color change in corresbonding beakers
var metalSolnZnA=['waterblue.png','waterwhite.png','watergreen.png'];
//while selecting Iron color change in corresbonding beakers
var metalSolnFeA=['waterblue.png','waterwhite.png','waterwhite.png'];
//while selecting copper color change in corresbonding beakers
var metalSolnCuA=['waterwhite.png','waterwhite.png','watergreen.png'];

var degree=0;
var deg=360;
var int;
var delay=5800;
var delayForMetal=200;
var beakerAFlag=new Boolean(false);//to check whether beaker A is entered
var beakerBFlag=new Boolean(false);//to check whether beaker B is entered
var beakerCFlag=new Boolean(false);//to check whether beaker C is entered

var AlFlag=new Boolean(false);//to check whether Al is selected
var ZnFlag=new Boolean(false);//to check whether Zn is selected
var FeFlag=new Boolean(false);//to check whether Fe is selected
var CuFlag=new Boolean(false);//to check whether Cu is selected

var cons=0;
var int1;
var opac=1;
var cons1=0
var opac1=0;
var e;
var selectMetals;
var e1;
var beakerA;
var e2;
var beakerB;
var e3;
var beakerC;
var j;
var tripClickFlag=0;
var trip;


//inference msg while selecting aluminium
	var contentArrayAl;
	
//inference msg while selecting zinc
	var contentArrayZn;
	
//inference msg while selecting iron
	var contentArrayFe;
	
//inference msg while selecting copper
	var contentArrayCu;
	
//array for clicking help button
	var listArray;
	
var tripContentA;	//content for beakerA
var tripContentB;	//content for beakerB
var tripContentC;	//content for beakerC

var width=$("#sidebar-wrapper").width();
var parentWidth=$("#sidebar-wrapper").offsetParent().width();
var percent=100*width/parentWidth;
var winWidth=$(window).width();	


var labelArray;
//initial function
function initialFunction(){
		 fadeOut();
		 
		 dropMetal();
		 
		 
     document.getElementById("expName").innerHTML=gt.gettext("Reactivity of Metals");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
//	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
//	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
		 
	 //label name for all controls in side menu
	labelArray=[gt.gettext('Select the metal:'),gt.gettext('Beaker A:'),gt.gettext('Beaker B:'),gt.gettext('Beaker C:'),gt.gettext('Most reactive metal:'),gt.gettext('Least reactive metal:'),gt.gettext('Increasing order of reactivity:'),gt.gettext('Reset'),gt.gettext('1 hour'),gt.gettext('CHEMISTRY LAB'),gt.gettext('Result')];
	
	
	 metalArray = [gt.gettext("Aluminium"),gt.gettext("Zinc"),gt.gettext("Iron"),gt.gettext("Copper")];
		 
	//inference msg while selecting aluminium
	contentArrayAl=[gt.gettext("Al is more reactive than Cu and it can displace Cu from </br>CuSO<sub>4 </sub>solution and forms colourless solution of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>."),gt.gettext("Al is more reactive than Zn and it can displace Zn from </br>ZnSO<sub>4 </sub>solution and forms colourless solution of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>."),gt.gettext("Al is more reactive than Fe and it can displace Fe from </br>FeSO<sub>4 </sub>solution and forms colourless solution of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.")];
	
	//inference msg while selecting zinc
	contentArrayZn=[gt.gettext("Zn is more reactive than Cu and it can displace Cu from </br>CuSO<sub>4</sub> solution and forms colourless solution of ZnSO<sub>4</sub>."),gt.gettext("No change is observed. Because Zn is less reactive than Al </br>so it cannot displace Al from Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> solution."),gt.gettext("Zn is more reactive than Fe and it can displace Fe from </br>FeSO<sub>4</sub> solution and forms colourless solution of ZnSO<sub>4</sub>.")];
	
	//inference msg while selecting iron
	contentArrayFe=[gt.gettext("Fe is is more reactive than Cu and it can displace Cu from </br>CuSO<sub>4</sub> solution and forms light green coloured FeSO<sub>4</sub> solution."),gt.gettext("No change is observed. This indicates that Fe is less reactive </br>than Zn so it cannot displace Zn from ZnSO<sub>4</sub> solution."),gt.gettext("No change is observed. This indicates that Fe is less reactive </br>than Al so it cannot displace Al from Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> solution.")];
	
	//inference msg while selecting copper
	contentArrayCu=[gt.gettext("No change is observed. This indicates that Cu is less reactive </br>than Zn so it cannot displace Zn from ZnSO<sub>4</sub> solution."),gt.gettext("No change is observed. This indicates that Cu is less reactive </br>than Al so it cannot displace Al from from Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> solution."),gt.gettext("No change is observed. This indicates that Cu is less reactive </br>than Fe so it cannot displace Fe from FeSO<sub>4</sub> solution.")];
	
	//array for clicking help button
	listArray=[gt.gettext('Select the metal.'),gt.gettext('Select the solution in beaker A.'),gt.gettext('Select the solution in beaker B.'),gt.gettext('Select the solution in beaker C.'),gt.gettext('Click and drag the forceps to add </br>two pieces of metal to the beaker.')];
	
	metalArrayforResult = [gt.gettext("-Select-"),gt.gettext("Iron"),gt.gettext("Zinc"),gt.gettext("Aluminium"),gt.gettext("Copper")];
var orderOfReactivity=[gt.gettext("-Select-"),gt.gettext("Al<Cu<Fe<Zn"),gt.gettext("Cu<Fe<Zn<Al"),gt.gettext("Cu<Zn<Al<Fe"),gt.gettext("Fe<Zn<Cu<Al")];


	orderOfReactivity=[gt.gettext("-Select-"),gt.gettext("Al<Cu<Fe<Zn"),gt.gettext("Cu<Fe<Zn<Al"),gt.gettext("Cu<Zn<Al<Fe"),gt.gettext("Fe<Zn<Cu<Al")];
	helpLabel=gt.gettext("HELP");
	
	beakerSolnAlA=[gt.gettext('Copper sulphate'),gt.gettext('Zinc sulphate'),gt.gettext('Ferrous sulphate')];//while selecting aluminium 
 beakerSolnZnA=[gt.gettext('Copper sulphate'),gt.gettext('Aluminium sulphate'),gt.gettext('Ferrous sulphate')];//while selecting Zinc
 beakerSolnFeA=[gt.gettext('Copper sulphate'),gt.gettext('Zinc sulphate'),gt.gettext('Aluminium sulphate')];//while selecting Iron
beakerSolnCuA=[gt.gettext('Zinc sulphate'),gt.gettext('Aluminium sulphate'),gt.gettext('Ferrous sulphate')];
		 
		 
		 $('#label1').html(labelArray[0]);
		 $('#label2').html(labelArray[1]);
		 $('#label3').html(labelArray[2]);
		 $('#label4').html(labelArray[3]);
		 $('#label5').html(labelArray[4]);
		 $('#label6').html(labelArray[5]);
		 $('#label7').html(labelArray[6]);
		 $('#reset').attr('value',labelArray[7]);
		 $("#cheLab").html(labelArray[9]);
		 $('#result').html(labelArray[10]);


//ready function
$(document).ready(function(){
			for(var i=0; i<metalArray.length; i++){//display of select metal dropdwn
					document.lister.thelist0.options[i] = new Option(metalArray[i], i);
			}
			for(var i=0; i<beakerSolnAlA.length; i++){
				document.lister.thelist1.options[i] = new Option(beakerSolnAlA[i], i);//display of beakerA dropdwn
				document.lister.thelist2.options[i] = new Option(beakerSolnAlA[i], i);//display of beakerB dropdwn
				document.lister.thelist3.options[i] = new Option(beakerSolnAlA[i], i);//display of beakerC dropdwn
			}
			for(var i=0; i<metalArrayforResult.length; i++){//display of select metal dropdwn
				document.lister.thelist4Result.options[i] = new Option(metalArrayforResult[i], i);
				document.lister.thelist5Result.options[i] = new Option(metalArrayforResult[i], i);
			}
			$('.resltIcon').css({display:'none'});
			for(var i=0; i<orderOfReactivity.length; i++){//display of select metal dropdwn
				document.lister.thelist6Result.options[i] = new Option(orderOfReactivity[i], i);
			}
			
			  	e=document.getElementById('thelist0');	
				selectMetals=e.options[e.selectedIndex].text;
				AlFlag=true;
				beakerA=beakerSolnAlA[0];//initially beakerA contains CuSO4 soln
				beakerB=beakerSolnAlA[1];//initially beakerA contains ZnSO4 soln
				beakerC=beakerSolnAlA[2];//initially beakerA contains FeSO4 soln
				
				//list2 order shuffling
				document.lister.thelist2.options[0]=new Option(beakerSolnAlA[1], 1);
				document.lister.thelist2.options[1]=new Option(beakerSolnAlA[0], 0);
				//list3 order shuffling
				document.lister.thelist3.options[0]=new Option(beakerSolnAlA[2], 2);
				document.lister.thelist3.options[2]=new Option(beakerSolnAlA[0], 0);
				
				dropMetal();
});

}

//function for fadeout
function fadeOut(){
		//Al2SO4 soln completely fadout initially
		 $('#AlSulphateB,#AlSulphateA,#AlSulphateC').fadeOut(1);
		 //ZnSO4 soln completely fadout initially
		 $('#ZnSulphateA,#ZnSulphateB,#ZnSulphateC').fadeOut(1);
		 //FeSO4 soln completely fadout initially
		 $('#FeSulphateA,#FeSulphateB,#FeSulphateC').fadeOut(1);
		 
//metalpieces of beakerA,beakerB,beakerC completely fadeOut		 
$('#metalPieceA1,#metalPieceA2,#metalPieceB1,#metalPieceB2,#metalPieceC1,#metalPieceC2').fadeOut(1);

//the particles which is seen after color change in all beakers fade out completely
$('#coppersulphate_AluminiumA,#coppersulphate_AluminiumB,#coppersulphate_AluminiumC').fadeOut(1);
$('#zincsulphate_AluminiumA,#zincsulphate_AluminiumB,#zincsulphate_AluminiumC').fadeOut(1);
$('#Ferroussulphate_AluminiumA,#Ferroussulphate_AluminiumB,#Ferroussulphate_AluminiumC').fadeOut(1);
$('#coppersulphate_zincA,#coppersulphate_zincB,#coppersulphate_zincC').fadeOut(1);
$('#Ferroussulphate_zincA,#Ferroussulphate_zincB,#Ferroussulphate_zincC').fadeOut(1);
$('#coppersulphate_IronA,#coppersulphate_IronB,#coppersulphate_IronC').fadeOut(1);
}
//function to rotate clock
function clockRotate(){
	if(degree<=deg){
		degree++;
	}
		$("#needle").css({'-webkit-transform-origin' :'76% 89% 0px'});
		$("#needle").css({'-webkit-transform' : 'rotate('+degree+'deg)'});
		$("#needle").css({'transform-origin' : '76% 89% 0px'});
		$("#needle").css({'transform' : 'rotate('+ degree +'deg)'});
		
		if(degree==360){//if clock rotates 360 degree
			clearInterval(int);
			$("#imgDrag").draggable('enable');
			$("#clockBody,#needle,#onehour").css({display:'none'})
			if(beakerAFlag==true){
				$("#informIconA").css({display:'block'});
			}if(beakerBFlag==true){
				$("#informIconB").css({display:'block'});
			}if(beakerCFlag==true){
				$("#informIconC").css({display:'block'});
			}
		}
}

//function for reseting while selecting select metals combo
function Reset(){
	beakerAFlag=false;
	beakerBFlag=false;
	beakerCFlag=false;
	$('#metalPieceC1,#metalPieceC2').css({ top:'115px',left:'325px'})
	$('#metalPieceB1,#metalPieceB2').css({top:'115px',left:'210px'})
	$('#metalPieceA1,#metalPieceA2').css({top:'115px', left:'100px' })
	beakersCombosId();
	e1.disabled=e2.disabled=e3.disabled=false;
}
function beakersCombosId(){
	e1=document.getElementById('thelist1');	
	e2=document.getElementById('thelist2');
	e3=document.getElementById('thelist3');	
}
function helpDisable(){
	if(tripClickFlag==1){//after clicking help btn and select combobox,reset all tooltips of help
		trip.stop();
		tripClickFlag=false;
		}
}
//function for select metals change..
function metalChange(){	
	
		j=$("#thelist0").find(':selected').val();
			$('#imgMetal').attr('src',simPath+"images/"+metalParticleImgs[j]);
			$('#imgDrag').attr('src',simPath+"images/"+forcepsOfMetalImgs[j]);
			$("#metalPieceC1").attr('src',simPath+"images/"+metalPieceImgsC1[j]);
			$("#metalPieceC2").attr('src',simPath+"images/"+metalPieceImgsC2[j]);
			$("#metalPieceB1").attr('src',simPath+"images/"+metalPieceImgsB1[j]);
			$("#metalPieceB2").attr('src',simPath+"images/"+metalPieceImgsB2[j]);
			$("#metalPieceA1").attr('src',simPath+"images/"+metalPieceImgsA1[j]);
			$("#metalPieceA2").attr('src',simPath+"images/"+metalPieceImgsA2[j]);
										 
	e=document.getElementById('thelist0');	
	selectMetals=e.options[e.selectedIndex].text;
	$('#waterA,#waterB,#waterC').fadeIn(1);
	Reset();
	fadeOut();
	switch(selectMetals){
		case metalArray[0]:	
				AlFlag=true;
				ZnFlag=FeFlag=CuFlag=false;
				//while selecting Al,the display of solns txt in beakerA,B,C dropdwn
				for(var i=0; i<beakerSolnAlA.length; i++){
						document.lister.thelist1.options[i] = new Option(beakerSolnAlA[i], i);
						document.lister.thelist2.options[i] = new Option(beakerSolnAlA[i], i);
						document.lister.thelist3.options[i] = new Option(beakerSolnAlA[i], i);
			}
				//list2 order shuffling
				document.lister.thelist2.options[0]=new Option(beakerSolnAlA[1], 1);
				document.lister.thelist2.options[1]=new Option(beakerSolnAlA[0], 0);
				//list3 order shuffling
				document.lister.thelist3.options[0]=new Option(beakerSolnAlA[2], 2);
				document.lister.thelist3.options[2]=new Option(beakerSolnAlA[0], 0);
		break;
		case metalArray[1]:
				ZnFlag=true;
				AlFlag=FeFlag=CuFlag=false;
				//while selecting Zn,the display of solns txt in beakerA,B,C dropdwn
				for(var i=0;i<beakerSolnZnA.length;i++){
						document.lister.thelist1.options[i] = new Option(beakerSolnZnA[i], i);	
						document.lister.thelist2.options[i] = new Option(beakerSolnZnA[i], i);	
						document.lister.thelist3.options[i] = new Option(beakerSolnZnA[i], i);
				}
				//list2 order shuffling
				document.lister.thelist2.options[0]=new Option(beakerSolnZnA[1], 1);
				document.lister.thelist2.options[1]=new Option(beakerSolnZnA[0], 0);
				//list3 order shuffling
				document.lister.thelist3.options[0]=new Option(beakerSolnZnA[2], 2);
				document.lister.thelist3.options[2]=new Option(beakerSolnZnA[0], 0);
		break;
		case metalArray[2]:
				FeFlag=true;
				AlFlag=ZnFlag=CuFlag=false;
				//while selecting Fe,the display of solns txt in beakerA,B,C dropdwn
				for(var i=0;i<beakerSolnFeA.length;i++){
						document.lister.thelist1.options[i] = new Option(beakerSolnFeA[i], i);
						document.lister.thelist2.options[i] = new Option(beakerSolnFeA[i], i);
						document.lister.thelist3.options[i] = new Option(beakerSolnFeA[i], i);
				}
				//list2 order shuffling
				document.lister.thelist2.options[0]=new Option(beakerSolnFeA[1], 1);
				document.lister.thelist2.options[1]=new Option(beakerSolnFeA[0], 0);
				//list3 order shuffling
				document.lister.thelist3.options[0]=new Option(beakerSolnFeA[2], 2);
				document.lister.thelist3.options[2]=new Option(beakerSolnFeA[0], 0);
		break;
		case metalArray[3]:	
		//alert(beakerSolnCuA[0]);
				CuFlag=true;
				AlFlag=ZnFlag=FeFlag=false;
				//while selecting Cu,the display of solns txt in beakerA,B,C dropdwn
				for(var i=0;i<beakerSolnCuA.length;i++){
						document.lister.thelist1.options[i] = new Option(beakerSolnCuA[i], i);
						document.lister.thelist2.options[i] = new Option(beakerSolnCuA[i], i);
						document.lister.thelist3.options[i] = new Option(beakerSolnCuA[i], i);
				}
				//list2 order shuffling
				document.lister.thelist2.options[0]=new Option(beakerSolnCuA[1], 1);
				document.lister.thelist2.options[1]=new Option(beakerSolnCuA[0], 0);
				//list3 order shuffling
				document.lister.thelist3.options[0]=new Option(beakerSolnCuA[2], 2);
				document.lister.thelist3.options[2]=new Option(beakerSolnCuA[0], 0);
		break;
	}
	
	beakerChange();
	clearInterval(int);
	$("#clockBody,#needle,#onehour").css({display:'none'});
	$("#informIconA,#informIconB,#informIconC").css({display:'none'});
	$("#imgDrag").draggable('enable');
	helpDisable();
}
//function for beakerA,B,C change...
function beakerChange(){
	beakersCombosId();
	beakerA=e1.options[e1.selectedIndex].text;
	beakerB=e2.options[e2.selectedIndex].text;
	beakerC=e3.options[e3.selectedIndex].text;
	var i=$("#thelist1").find(':selected').val();
	var j=$("#thelist2").find(':selected').val();
	var k=$("#thelist3").find(':selected').val();
	switch(selectMetals){
		case metalArray[0]:
				//while selecting Al,the display of solns images in beakerA,beakerB,beakerC
				for(var i=0;i<beakerSolnAlA.length;i++){
					if(beakerA==beakerSolnAlA[i] ){//to change beakerA soln
						$('#waterA').attr('src',simPath+"images/"+metalSolnAlA[i]);
					}if(beakerB==beakerSolnAlA[i] ){//to change beakerB soln
						$('#waterB').attr('src',simPath+"images/"+metalSolnAlA[i]);
					}if(beakerC==beakerSolnAlA[i] ){//to change beakerC soln
						$('#waterC').attr('src',simPath+"images/"+metalSolnAlA[i]);
					}
				}
		break;
		case metalArray[1]:
					//while selecting Zn,the display of solns images in beakerA,beakerB,beakerC
					for(var i=0;i<beakerSolnZnA.length;i++){
						if(beakerA==beakerSolnZnA[i] ){//to change beakerA soln
							$('#waterA').attr('src',simPath+"images/"+metalSolnZnA[i]);
						}if(beakerB==beakerSolnZnA[i] ){//to change beakerB soln
							$('#waterB').attr('src',simPath+"images/"+metalSolnZnA[i]);
						}if(beakerC==beakerSolnZnA[i] ){//to change beakerC soln
							$('#waterC').attr('src',simPath+"images/"+metalSolnZnA[i]);
						}
					}
		break;
		case metalArray[2]:
					//while selecting Fe,the display of solns images in beakerA,beakerB,beakerC
					for(var i=0;i<beakerSolnFeA.length;i++){
						if(beakerA==beakerSolnFeA[i] ){//to change beakerA soln
							$('#waterA').attr('src',simPath+"images/"+metalSolnFeA[i]);
						}if(beakerB==beakerSolnFeA[i] ){//to change beakerB soln
							$('#waterB').attr('src',simPath+"images/"+metalSolnFeA[i]);
						}if(beakerC==beakerSolnFeA[i] ){//to change beakerC soln
							$('#waterC').attr('src',simPath+"images/"+metalSolnFeA[i]);
						}
					}
		break;
		case metalArray[3]:
					//while selecting Cu,the display of solns images in beakerA,beakerB,beakerC	
					
					for(var i=0;i<beakerSolnCuA.length;i++){
						if(beakerA==beakerSolnCuA[i] ){//to change beakerA soln
							$('#waterA').attr('src',simPath+"images/"+metalSolnCuA[i]);
						}if(beakerB==beakerSolnCuA[i] ){//to change beakerB soln
							$('#waterB').attr('src',simPath+"images/"+metalSolnCuA[i]);
						}if(beakerC==beakerSolnCuA[i] ){//to change beakerC soln
							$('#waterC').attr('src',simPath+"images/"+metalSolnCuA[i]);
						}
					}
		break;
	}
}

//drag the forceps of each metal
function dropMetal(){
	if(percent=="0"|| winWidth<768){
		$("#imgDrag").draggable({
				drag: function(event,ui){
					beakersCombosId();
					degree=0;
				},
				stop: function() {
					var left = ( 100 * parseFloat($("#imgDrag").position().left / parseFloat($("#imgDrag").parent().width())) ) + "%" ;

					//while forceps drag,the hit area for beaker C
					if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>60+"%")&&(left<80+"%"))){//beaker C
					console.log("left in percentage="+left);

						if(beakerCFlag==false){
								beakerCFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,335,"metalPieceC1","metalPieceC2",63,64,67,84,67,84,55,61);
						}else{
								pos();
						}
						solutionChange('C',beakerC);
					}
					//while forceps drag,the hit area for beaker B
					else if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>28+"%")&&(left<50+"%"))){//beaker B 
					console.log(left);
						if(beakerBFlag==false){
								beakerBFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,195,"metalPieceB1","metalPieceB2",38,39,67,84,67,84,30,36);
						}else{
								pos();
						}
						solutionChange('B',beakerB);
					}
					//while forceps drag,the hit area for beaker A
					else if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>0+"%")&&(left<25+"%"))){//beaker A 
					console.log(left);
						if(beakerAFlag==false){
								beakerAFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,65,"metalPieceA1","metalPieceA2",11,12,67,84,67,84,3,10);
						}else{
								pos();
						}
						solutionChange('A',beakerA);
					}
				else{
					pos();
				}
			}
		})

	}

	else{

		$("#imgDrag").draggable({
				drag: function(event,ui){
					beakersCombosId();
					degree=0;
				},
				stop: function() {
					var left = ( 100 * parseFloat($("#imgDrag").position().left / parseFloat($("#imgDrag").parent().width())) ) + "%" ;

					//while forceps drag,the hit area for beaker C
					if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>60+"%")&&(left<80+"%"))){//beaker C
					console.log("left in percentage="+left);

						if(beakerCFlag==false){
								beakerCFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,335,"metalPieceC1","metalPieceC2",63,64,67,75,67,75,55,61);
						}else{
								pos();
						}
						solutionChange('C',beakerC);
					}
					//while forceps drag,the hit area for beaker B
					else if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>28+"%")&&(left<50+"%"))){//beaker B 
					console.log(left);
						if(beakerBFlag==false){
								beakerBFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,195,"metalPieceB1","metalPieceB2",38,39,67,75,67,75,30,36);
						}else{
								pos();
						}
						solutionChange('B',beakerB);
					}
					//while forceps drag,the hit area for beaker A
					else if(($("#imgDrag").position().top>15)&&($("#imgDrag").position().top<115)&&((left>0+"%")&&(left<25+"%"))){//beaker A 
					console.log(left);
						if(beakerAFlag==false){
								beakerAFlag=true;
								e1.disabled=e2.disabled=e3.disabled=true;
								drag(85,65,"metalPieceA1","metalPieceA2",11,12,67,75,67,75,3,10);
						}else{
								pos();
						}
						solutionChange('A',beakerA);
					}
				else{
					pos();
				}
			}
		})

	}
}
//the original position of forceps
function pos(){
	if(percent=="0"|| winWidth<768)
	{
		document.getElementById("imgDrag").style.left="84%";
		document.getElementById("imgDrag").style.top="80%";
	}	
	else
	{
		document.getElementById("imgDrag").style.left="84%";
		document.getElementById("imgDrag").style.top="73%";
	}
}
//common function for change the soln according to the dropdown selection
function solutionChange(id,beakerID){
	//alert(beakerID+beakerSolnAlA[0])
				if(e.selectedIndex==0){//Aluminium
						$('#water'+id).fadeOut(delay);//original soln change
						$('#AlSulphate'+id).fadeIn(delay);//display Al2SO4 soln
						//2 metal pieces cleared
						$('#metalPiece'+id+'1').fadeOut(delayForMetal);
						$('#metalPiece'+id+'2').fadeOut(delayForMetal);
						if(beakerID==beakerSolnAlA[0]){
							$('#coppersulphate_Aluminium'+id).fadeIn(delay);//display copper particle
						}if(beakerID==beakerSolnAlA[1]){
							$('#zincsulphate_Aluminium'+id).fadeIn(delay);//display zinc particle
						}if(beakerID==beakerSolnAlA[2]){
							$('#Ferroussulphate_Aluminium'+id).fadeIn(delay);//display iron particle
						}
				}if(e.selectedIndex==1){//zinc
						if(beakerID==beakerSolnZnA[1]){
							//No reaction	
						}else{
								$('#water'+id).fadeOut(delay);//original soln change
								$('#ZnSulphate'+id).fadeIn(delay);//display ZnSO4 soln
								//2 metal pieces cleared
								$('#metalPiece'+id+'1').fadeOut(delayForMetal);
								$('#metalPiece'+id+'2').fadeOut(delayForMetal);
								if(beakerID==beakerSolnZnA[0]){
									$('#coppersulphate_zinc'+id).fadeIn(delay);//display copper particle
								} if(beakerID==beakerSolnZnA[2]){
									$('#Ferroussulphate_zinc'+id).fadeIn(delay);//display iron particle
								}
						}
				}if(e.selectedIndex==2){//Iron
						if(beakerID==beakerSolnFeA[0]){
							$('#water'+id).fadeOut(5600);//original soln change
							$('#FeSulphate'+id).fadeIn(5600);//display FeSO4 soln
							//2 metal pieces cleared
							$('#metalPiece'+id+'1').fadeOut(delayForMetal);
							$('#metalPiece'+id+'2').fadeOut(delayForMetal);
							$('#coppersulphate_Iron'+id).fadeIn(5600);//display copper particle
						}else {
							//No reaction	
						}
				}if(e.selectedIndex==3){//copper
					//No reaction	
				}
}
//common function for drag the forceps
function drag(top,left,metalpieceid1,metalpieceid2,metalLeft1,metalLeft2,metalPieceTopid1,metalPieceTopid11,metalPieceTopid2,metalPieceTopid21,waveLeft,splashLeft){
				$('#wave').css({left:waveLeft+"%"})
				$('#splash1,#splash2').css({left:splashLeft+"%"})
				$("#imgDrag").draggable('disable');
				//$("#imgDrag").css({top:top+"%",left:left+"%"})
				$("#imgDrag").attr('src',simPath+"images/forceps.png");
				$("#"+metalpieceid1).css({display:'block',left:metalLeft1+"%"})
				$("#"+metalpieceid2).css({display:'block',left:metalLeft2+"%"})
				$("#"+metalpieceid1).animate({//when metal1 touches the top of water
									 top: metalPieceTopid1+"%"
									  },500,function(){
										  	opac=1;
											cons=0;
										  int1=setInterval(waveScale,50);
										  $('#splash1').css({display:'block'})
									  })
				$("#"+metalpieceid2).animate({//when metal2 touches the top of water
									 top: metalPieceTopid2+"%"
									  },700,function(){
										$('#splash1').css({display:'none'})	 
										$('#splash2').css({display:'block'}) 
								})
				$("#"+metalpieceid1).animate({//metal1 touches the bottom of water
									 top: metalPieceTopid11+"%"
								 })
				$("#"+metalpieceid2).animate({//metal2 touches the bottom of water
									 top: metalPieceTopid21+"%"
								})
								//once drag the forceps to hit area and success,display the forceps with metal for the nxt drag 
								i=$("#thelist0").find(':selected').val();
								$('#imgDrag').attr('src',simPath+"images/"+forcepsOfMetalImgs[i]);
								
								$("#clockBody,#needle,#onehour").css({display:'block'})
								$("#onehour").html(labelArray[8]);
								int=setInterval(clockRotate,10);
								pos();
}

//function for water wave ripple effect
function waveScale(){
	if(cons>=0 && cons<=1){
		cons+=.1;
		opac-=.1;
		cons1=cons.toFixed(1);
		opac1=opac.toFixed(1);
		$('#wave').css("-webkit-transform","scaleX("+cons1+")");
		$('#wave').css("-moz-transform","scaleX("+cons1+")")
		$('#wave,#splash2').css({ opacity:opac1})
	}
	if(cons1>=1){
		clearInterval(int1);
	}
}

var mostReactive;
var leastReactive;
function mostReactiveFN(evt){
	mostReactive=evt.selectedIndex
	//alert(mostReactive)
	$('#reslticon4').css({display:'inline'});
	if(mostReactive==3){
		$('#reslticon4').attr('src',simPath+'images/correct.png');					
	}else{
		//$('reslticon4').css({display:'none'});
		$('#reslticon4').attr('src',simPath+'images/wrong.png');
	}
	
}
function leastReactiveFN(evt){
	leastReactive=evt.selectedIndex
	$('#reslticon5').css({display:'inline'});
	if(leastReactive==4){
		$('#reslticon5').attr('src',simPath+'images/correct.png');					
	}else{
		//$('reslticon4').css({display:'none'});
		$('#reslticon5').attr('src',simPath+'images/wrong.png');
	}
}
function orderOfReactivityFN(evt){
	order=evt.selectedIndex
	$('#reslticon6').css({display:'inline'});
	if(order==2){
		$('#reslticon6').attr('src',simPath+'images/correct.png');					
	}else{
		//$('reslticon4').css({display:'none'});
		$('#reslticon6').attr('src',simPath+'images/wrong.png');
	}
	
}



