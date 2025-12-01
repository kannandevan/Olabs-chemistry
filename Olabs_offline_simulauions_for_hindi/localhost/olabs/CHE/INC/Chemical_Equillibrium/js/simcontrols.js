// JavaScript Document


//var labelArray=["[Fe(CNS)]<sup>2+</sup",'[CoCl<sub>4</sub>]<sup>2-</sup>','[CuCl<sub>4</sub>]<sup>2-</sup>'];
var labelArray=[];
var solnOptions=[];
var tubeOptions=[];
var variableArray=[];

var width=$("#sidebar-wrapper").width();
var parentWidth=$("#sidebar-wrapper").offsetParent().width();
var percent=100*width/parentWidth;
var winWidth=$(window).width();	

window.onload = function init(){
	document.getElementById("expName").innerHTML=gt.gettext("Chemical Equilibrium");	
	labelArray=[gt.gettext("[Fe(CNS)]<sup>2+</sup>"),gt.gettext('[CoCl<sub>4</sub>]<sup>2-</sup>'),gt.gettext('[CuCl<sub>4</sub>]<sup>2-</sup>')];
	solnOptions=[ gt.gettext("Ferric and thiocyanate ions"),gt.gettext("Cobalt complex and chloride ions "),gt.gettext("Copper complex and chloride ions")];
	tubeOptions=[gt.gettext("Test tube A"),gt.gettext("Test tube B"),gt.gettext("Test tube C"),gt.gettext("Test tube D")]
	 	//*--Loading option values in drop down----
	addintoDropDown( $('#soln'),solnOptions);
	addintoDropDown($('#tube'),tubeOptions);	
	variableArray=[gt.gettext('Select the test solution:'),gt.gettext('Select the control tube:')];

		$('#labelTxt').html(gt.gettext(labelArray[0]));
		$('#cntrllabelTxt').html(gt.gettext("Control"));
		$('#reset').attr('value',gt.gettext('Reset'));
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$('#selectTube').attr('value',gt.gettext('Select the control tube:'));
	document.getElementById("selectSol").innerHTML=gt.gettext(variableArray[0]);
	document.getElementById("selectTube").innerHTML=gt.gettext(variableArray[1]);
		   document.getElementById("bottle1txt").innerHTML=gt.gettext("FeCl<sub>3</sub>") ;
		   document.getElementById("bottle2txt").innerHTML=gt.gettext("KCNS") ;
		   document.getElementById("bottle3txt").innerHTML=gt.gettext("KCl");

 }

/// Variable declaration
var cntrlLabelPos=51;
var inferenceMsg;
var testtubeColorChngeImg;
var testtube1=testtube2=testtube3=testtube4=0;
/// canvas for background image..

var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 340;

var bgctx = bgCanvas.getContext('2d');
var bgimg = new Image;
bgimg.onload = function(){ 
	bgctx.drawImage(bgimg,-10,-10);
};
bgimg.src=simPath+'images/BG.jpg';

/*var trip=new Trip();
var tripStart=0;*/
/// option for the drop down....

//var solnOptions=[ "Ferric and thiocyanate ions","Cobalt complex and chloride ions ","Copper complex and chloride ions"];
//var tubeOptions=["Test tube A","Test tube B","Test tube C","Test tube D"]



// function called on loading..
$(document).ready(function() {
	
	 document.getElementById("tube").selectedIndex=0;
	 $("#testtubeASolnChangeimg1,#testtubeASolnChangeimg2,#testtubeASolnChangeimg3,#testtubeASolnChangeimg4").css({display:'none',opacity:'0.1'});
	
	 
	 	//*--Loading option values in drop down----
/*	addintoDropDown( $('#soln'),solnOptions);
	addintoDropDown($('#tube'),tubeOptions);	
*/	
	//*--Function to add values into the drop down---					   
/*	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
	}
*/     document.getElementById("dropperDiv3").style.cursor = simPath+'images/BG.gif';
});
	//*--Function to add values into the drop down---					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
	}

///test solution dropdown - onchange function ....
function solnSelection(ID){
	 document.getElementById("tube").disabled=false;
	 //$("#bottle1txt").css({left:'15px',top:'85px'}) ;
	 $("#eqnImg1").css({width:'100%'});
	 document.getElementById("inferenceDiv").style.visibility='hidden';
	 $("#testtubeASolnChangeimg1,#testtubeASolnChangeimg2,#testtubeASolnChangeimg3,#testtubeASolnChangeimg4").css({display:'none'});
	 $("#testtubeASolnChangeimg1,#testtubeASolnChangeimg2,#testtubeASolnChangeimg3,#testtubeASolnChangeimg4").animate({opacity:'0'});
	 testtube1=testtube2=testtube3=testtube4=0;
	 $(".txtFormat1").css({'font-size':'13px'})
	 if(document.getElementById(ID).selectedIndex==0){
		  $("#eqnImg1").css({width:'100%'})
		   document.getElementById("eqnImg1").setAttribute('src', simPath+'images/equation1.png');
		   document.getElementById("eqnImg2").setAttribute('src', simPath+'images/K3.png');
		   $('#labelTxt').html(labelArray[0]);
		  
		  // document.getElementById("testtubeLabel").setAttribute('src', simPath+'images/Fe(SCN)2.png');
		   document.getElementById("bottle1txt").innerHTML=gt.gettext("FeCl<sub>3</sub>") ;
		   document.getElementById("bottle2txt").innerHTML=gt.gettext("KCNS") ;
		   document.getElementById("bottle3txt").innerHTML=gt.gettext("KCl");
		   document.getElementById("testtubeASolnimg").setAttribute('src', simPath+'images/testsolution1.png');
		   document.getElementById("testtubeBSolnimg").setAttribute('src', simPath+'images/testsolution1.png');
		   document.getElementById("testtubeCSolnimg").setAttribute('src', simPath+'images/testsolution1.png');
		   document.getElementById("testtubeDSolnimg").setAttribute('src', simPath+'images/testsolution1.png');
		   document.getElementById("bottleSoln1").setAttribute('src', simPath+'images/bottleFeSoln.png');
		   document.getElementById("dropperSoln1").setAttribute('src', simPath+'images/dropper_red.png');
		  
	 }else if(document.getElementById(ID).selectedIndex==1){
		  $(".txtFormat1").css({'font-size':'9px'});
		  document.getElementById("eqnImg1").setAttribute('src', simPath+'images/equation3.png');
		  document.getElementById("eqnImg2").setAttribute('src', simPath+'images/K1.png');
		 // document.getElementById("testtubeLabel").setAttribute('src', simPath+'images/[CoCl4].png');
		  $('#labelTxt').html(labelArray[1]);
         // $("#bottle1txt").css({left:'0px',top:'86px'});
		  document.getElementById("bottle1txt").innerHTML=gt.gettext("[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>");
		  document.getElementById("bottle2txt").innerHTML=gt.gettext("HCl");
		  document.getElementById("bottle3txt").innerHTML=gt.gettext("H<sub>2</sub>O");
		  document.getElementById("testtubeASolnimg").setAttribute('src', simPath+'images/Testsolution2.png');
		  document.getElementById("testtubeBSolnimg").setAttribute('src', simPath+'images/Testsolution2.png');
		  document.getElementById("testtubeCSolnimg").setAttribute('src', simPath+'images/Testsolution2.png');
		  document.getElementById("testtubeDSolnimg").setAttribute('src', simPath+'images/Testsolution2.png');
		  document.getElementById("bottleSoln1").setAttribute('src', simPath+'images/Co(H2O)62+.png');
		  document.getElementById("dropperSoln1").setAttribute('src', simPath+'images/pinkdropper.png');

	 } else{
		  $('#labelTxt').html(labelArray[2]);
		 // document.getElementById("testtubeLabel").setAttribute('src', simPath+'images/[Cu(H2O).png');
		  document.getElementById("testtubeASolnimg").setAttribute('src', simPath+'images/testSolnCu.png');
		  document.getElementById("testtubeBSolnimg").setAttribute('src', simPath+'images/testSolnCu.png');
		  document.getElementById("testtubeCSolnimg").setAttribute('src', simPath+'images/testSolnCu.png');
		  document.getElementById("testtubeDSolnimg").setAttribute('src', simPath+'images/testSolnCu.png');
		  document.getElementById("eqnImg1").setAttribute('src', simPath+'images/equation4.png');
		  document.getElementById("eqnImg2").setAttribute('src', simPath+'images/K2.png');
		   //$("#bottle1txt").css({left:'0px',top:'86px'});
		    $(".txtFormat1").css({'font-size':'9.5px'});
		   document.getElementById("bottle1txt").innerHTML=gt.gettext("[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>");
		  document.getElementById("bottle2txt").innerHTML=gt.gettext("HCl");
		  document.getElementById("bottle3txt").innerHTML=gt.gettext("H<sub>2</sub>O");
		  document.getElementById("bottleSoln1").setAttribute('src', simPath+'images/Cu(H2O)62+.png');
		  document.getElementById("dropperSoln1").setAttribute('src', simPath+'images/cudropper.png');
	 }
}

///control tube dropdown - onchange function.....
function controlTubeselection(ID){

	 if(document.getElementById(ID).selectedIndex==0){
		 cntrlLabelPos=9.5;
	 } else if(document.getElementById(ID).selectedIndex==1){
		 cntrlLabelPos=18.5;
	 } else if(document.getElementById(ID).selectedIndex==2){
		 cntrlLabelPos=28;
	 } else if(document.getElementById(ID).selectedIndex==3){
		 cntrlLabelPos=37.5;
	 }
		$("#controllabelImg").css({left:cntrlLabelPos+'%' });
		$("#cntrllabelTxt").css({left:(cntrlLabelPos)+'%' });
		
}


/// for dragging the dropper...
function dragSolution(slnId)
{

	if(percent=="0"|| winWidth<768){
		var ID=slnId;
		var id="#"+slnId;
		// var a = ($(id).position().left/$(window).width() * 100);
		// console.log(a);
			
		$(id).draggable({
			
			drag: function(event,ui){
						document.getElementById(ID).style.zIndex=5;
						document.getElementById("dropperSoln1").style.zIndex=5;
						document.getElementById("inferenceDiv").style.visibility='hidden';

						 var l = ( 100 * parseFloat($(this).css("left")) / parseFloat($(this).parent().css("width")) ) ;
						 console.log(l);
						},
						stop: function() {
						//var l = ( 100 * parseFloat($(id).position().left) / parseFloat($(window).width()) )+ "%" ;
						
									  
							if(((($(id).position().left/$(window).width() * 100)>=6)&&(($(id).position().left/$(window).width() * 100)<=13))&&(($(id).position().top>=-50)&&($(id).position().top<=50))){
										if(document.getElementById('tube').selectedIndex!=0&&(testtube1==0)){
										    document.getElementById(ID).style.left="10.8%";
											document.getElementById(ID).style.top="3%";
										   testtube1=1;
										   playDrops(ID,12,'testtube1');
									   }else{
										   getBackPos(ID);/// back to its initial position...
									   }
							 }
							  else if(((($(id).position().left/$(window).width() * 100)>=15)&&(($(id).position().left/$(window).width() * 100)<=20))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
									   if(document.getElementById('tube').selectedIndex!=1&&(testtube2==0)){
										   document.getElementById(ID).style.left="19.3%";
										   document.getElementById(ID).style.top="3%";
											testtube2=1;
											playDrops(ID,21,"testtube2");
									   }else{
											getBackPos(ID);
									   }
							}
							  else if(((($(id).position().left/$(window).width() * 100)>=25)&&(($(id).position().left/$(window).width() * 100)<=30))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
									 if(document.getElementById('tube').selectedIndex!=2&&(testtube3==0)){
										 document.getElementById(ID).style.left="29.4%";
										 document.getElementById(ID).style.top="3%";
										  testtube3=1;
										  playDrops(ID,31,"testtube3");
									}else{
										   getBackPos(ID);
									   }
							}else if(((($(id).position().left/$(window).width() * 100)>=30)&&(($(id).position().left/$(window).width() * 100)<=35))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
											if(document.getElementById('tube').selectedIndex!=3&&(testtube4==0)){
												   document.getElementById(ID).style.left="38.5%";
												   document.getElementById(ID).style.top="3%";
													testtube4=1;
													playDrops(ID,40,"testtube4");
												  
											}else{
												   getBackPos(ID);
											   }
									}else{
								getBackPos(ID);
							}
					}
			});
			}
			
			else{
			
				var ID=slnId;
				var id="#"+slnId;
					
				$(id).draggable({
					
					drag: function(event,ui){
								document.getElementById(ID).style.zIndex=5;
								document.getElementById("dropperSoln1").style.zIndex=5;
								document.getElementById("inferenceDiv").style.visibility='hidden';
								
								},
								stop: function() {
													  
									if((($(id).position().left>=40)&&($(id).position().left<=70))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
												if(document.getElementById('tube').selectedIndex!=0&&(testtube1==0)){
												   document.getElementById(ID).style.left="10.8%";
												   document.getElementById(ID).style.top="3%";
												   testtube1=1;
												   playDrops(ID,12,'testtube1');
											   }else{
												   getBackPos(ID);/// back to its initial position...
											   }
									 }
									  else if((($(id).position().left>=80)&&($(id).position().left<=120))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
											   if(document.getElementById('tube').selectedIndex!=1&&(testtube2==0)){
												   document.getElementById(ID).style.left="19.7%";
												   document.getElementById(ID).style.top="3%";
													testtube2=1;
													playDrops(ID,21,"testtube2");
											   }else{
													getBackPos(ID);
											   }
									}
									  else if((($(id).position().left>=140)&&($(id).position().left<=160))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
											 if(document.getElementById('tube').selectedIndex!=2&&(testtube3==0)){
												 document.getElementById(ID).style.left="29.5%";
												 document.getElementById(ID).style.top="3%";
												  testtube3=1;
												  playDrops(ID,31,"testtube3");
											}else{
												   getBackPos(ID);
											   }
									}else if((($(id).position().left>=193)&&($(id).position().left<=210))&&(($(id).position().top>=-50)&&($(id).position().top<=70))){
											if(document.getElementById('tube').selectedIndex!=3&&(testtube4==0)){
												   document.getElementById(ID).style.left="38.5%";
												   document.getElementById(ID).style.top="3%";
													testtube4=1;
													playDrops(ID,40,"testtube4");
												  
											}else{
												   getBackPos(ID);
											   }
									}else{
										getBackPos(ID);
									}
							}
					});
			
			}
			
}

///getting back to its orginal position...
function getBackPos(ID){
	
				document.getElementById(ID).style.top="28%";
			    document.getElementById(ID).style.zIndex=1;
			
				if(ID=="dropperDiv1"){
					document.getElementById(ID).style.left="54%";
				}else if(ID=="dropperDiv2"){
					document.getElementById(ID).style.left="71%";
				}else if(ID=="dropperDiv3"){
					document.getElementById(ID).style.left="87%";
				}
				if((testtube1==1)||(testtube2==1)||(testtube3==1)||(testtube4==1)){
					document.getElementById("inferenceDiv").style.visibility='visible';
				}
}

/// dropping the solution into the test tube...
function playDrops(ID,leftpos,str){
					testtubeColorChngeImg=str.charAt(str.length-1); 
					document.getElementById("tube").disabled=true;
					document.getElementById("drops1").setAttribute('src', simPath+'images/drops.png');
					document.getElementById("drops2").setAttribute('src', simPath+'images/drops.png');
	               if(ID=="dropperDiv1"){
	  					$("#dropperSoln1").animate({left:'10px',height:'0px',top:'160px'});
						if(document.getElementById("soln").selectedIndex==0){
						  document.getElementById("drops1").setAttribute('src', simPath+'images/dropred.png');
						  document.getElementById("drops2").setAttribute('src', simPath+'images/dropred.png');
						}else if(document.getElementById("soln").selectedIndex==1){
						  document.getElementById("drops1").setAttribute('src', simPath+'images/pinkdrop.png');
						  document.getElementById("drops2").setAttribute('src', simPath+'images/pinkdrop.png');
						}else{
						  document.getElementById("drops1").setAttribute('src', simPath+'images/Cudrop.png');
						  document.getElementById("drops2").setAttribute('src', simPath+'images/Cudrop.png');
						}
					 }
					 else if(ID=="dropperDiv2"){
						$("#dropperSoln2").animate({left:'10px',height:'0px',top:'160px'});
					 }
					 else{
						 $("#dropperSoln3").animate({left:'10px',height:'0px',top:'160px'});
					 }
					$('#drops1').css({
					    display:'block',
					    top:'40%',
						left:leftpos+'%'
				    });
					$('#drops2').css({
						display:'block',
						top:'47%',
						left:leftpos+'%'
					});
					$('#drops2').animate({		
						top:'54%'
					});					
					$('#drops1').animate({		
						top:'60%',														
					},500,function(){	
						$('#drops1,#drops2').css({
					     display:'none',
				       });
					
					 if(ID=="dropperDiv1"){
						    document.getElementById(ID).style.left="54%";
							if(document.getElementById("soln").selectedIndex==0){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution1_deep.png');
							inferenceMsg=gt.gettext("Addition of more Fe<sup>3+</sup> ions results in more Fe(CNS)<sup>2+</sup>complex. Hence the</br>colour intensity of red solution increases and the equilibrium shifts</br>in the forward direction.")
							}
							else if(document.getElementById("soln").selectedIndex==1){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution2_deep.png');
							inferenceMsg=gt.gettext("Addition of more [Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> results in more (CoCl<sub>4</sub>)<sup>2-</sup> complex.</br>Hence the intensity of blue colour increases and the equilibrium</br>shifts in the forward direction.")
							}
							else{
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/testSolnCu_deep.png');
							inferenceMsg=gt.gettext("Addition of more [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> results in the formation of more</br>(CuCl<sub>4</sub>)<sup>2-</sup> and the equilibrium shifts in the forward direction.");
							}
					 }else if(ID=="dropperDiv2"){
						    document.getElementById(ID).style.left="71%";
							if(document.getElementById("soln").selectedIndex==0){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution1_deep.png');
							inferenceMsg=gt.gettext("Addition of more CNS<sup>-</sup> ions results in more Fe(CNS)<sup>2+</sup>complex. Hence the</br>colour intensity of red solution increases and the equilibrium shifts</br>in the forward direction.")
							}else if(document.getElementById("soln").selectedIndex==1){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution2_deep.png');
						    inferenceMsg=gt.gettext("Addition of more Cl<sup>-</sup> ions results in more (CoCl<sub>4</sub>)<sup>2-</sup> complex. Hence the</br>intensity of blue colour increases and the equilibrium shifts</br>in the forward direction.");//
							}
							else{
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/Cu+HCl.png');
							inferenceMsg=gt.gettext("Addition of more Cl<sup>-</sup> ions results in the formation of more (CuCl<sub>4</sub>)<sup>2-</sup></br>and the equilibrium shifts in the forward direction. ");
							}
					 }else if(ID=="dropperDiv3"){
					 	    document.getElementById(ID).style.left="87%";
							if((document.getElementById("soln").selectedIndex==0)){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution1_light.png');
							inferenceMsg= gt.gettext("Addition of K<sup>+</sup> ions affects the dissociation of KCNS and decrease the</br>concentration of CNS<sup>-</sup>, as a result the equilibrium shifts towards</br>backwards and the intensity of red colour decrease.")
							}
							else if((document.getElementById("soln").selectedIndex==1)){
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/solution2_light.png');
							inferenceMsg=gt.gettext("Addition of H<sub>2</sub>O results the formation of pink colour (CoCl<sub>4</sub>)<sup>2-</sup>.</br>Hence the colour of the solution turns to pink and the equilibrium shifts</br>in the backward direction.");
							}
							else{
							document.getElementById("testtubeASolnChangeimg"+testtubeColorChngeImg).setAttribute('src', simPath+'images/Cu+Water.png');
							inferenceMsg=gt.gettext("Addition of water results in the formation of more [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup></br>and the equilibrium shifts in the backward direction. ");
							}
					 }
					  $("#testtubeASolnChangeimg"+testtubeColorChngeImg).css({display:'block'});
					  $("#testtubeASolnChangeimg"+testtubeColorChngeImg).animate({opacity:'1'});
					  document.getElementById("inferenceDiv").style.visibility='visible';
				      document.getElementById(ID).style.top="28%";
					  document.getElementById(ID).style.zIndex=1;
					  $("#dropperSoln1,#dropperSoln2,#dropperSoln3").css({left:'27%',width:'29%',height: "29%",top:'71%'});
			});
}
