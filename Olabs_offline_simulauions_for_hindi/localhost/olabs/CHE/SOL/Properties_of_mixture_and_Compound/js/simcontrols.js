
window.onload=initialFunction;"initEvent";
var testArray=[];
//var declaration 

var test=0;
var stirmix_Int;//set the interval for stir the mix anf compound
var mix;
var stopFlag=0;//flag to stop the mixture stirr 
var rotateEvt;//set interval for shake test tube
var rotateCnt=0;
var rotateCnt2=5;
var count=0;
var stopAnim;//for stop animation
var degree=0;
var deg=720;//clock rot for 2 mins
var clockrot_Int;//set Interval for needle rotatn of clock
var flameglow_Int;// set interval for flames glow
var matchstickFlaming;//set interval for matchstick flame glow
var inform1Flag=0;
var labelArray=[];
var stage1 = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject);

//bg for each scene(dropdwn select)
var path0=simPath+'images/BG.gif';
var path1=simPath+'images/BG1.gif';
var path2=simPath+'images/BG2.gif';
var path3=simPath+'images/BG3.gif';
var path4=simPath+'images/BG4.gif';

var trip;
var tripClickFlag=false;
var contentArray=[];
var instrctnArray=[];
var listArray=[];


//initial function
function initialFunction(){
	
	
		 
	document.getElementById("expName").innerHTML=gt.gettext("Distinguish Between Mixture and Compound");
	 $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	// $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	// $('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	// $(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	
	testArray=[gt.gettext("Basis of appearance"),gt.gettext("Behaviour towards magnet"),gt.gettext("Action with Carbon disulphide"),gt.gettext("Action of heat"),gt.gettext("Action with dil. HCl")];
	
	labelArray=[gt.gettext("Select the test"),gt.gettext("Fe + S"),gt.gettext("FeS"),gt.gettext("Fe + S + dil. HCl"),gt.gettext("FeS + dil. HCl"),gt.gettext("CuSO<sub>4</sub> solution"),gt.gettext("Mixture"),gt.gettext("Compound"),gt.gettext("Carbon disulphide"),gt.gettext("2 mins"),gt.gettext("Reset")];
	
	contentArray=[gt.gettext("The yellow particles of sulphur and iron filings can be clearly seen and they </br>are non-uniformly distributed throughout the mixture. This indicates that </br>the mixture of iron and sulphur is heterogeneous in appearance."),gt.gettext("Uniform grey-black particles can be seen throughout, indicating </br>that the compound FeS is homogeneous in appearance."),gt.gettext("The iron filings cling to the magnet indicating that the iron has retained its </br>original property (magnetic nature) during the formation of the mixture."),gt.gettext("There are no particles clinging to the magnet,  indicating that iron has lost its </br>original property (magnetic nature) on the formation of the compound."),gt.gettext("The yellow particles of sulphur dissolve in carbon disulphide to form a </br>yellow solution, and the particles of iron settle at the bottom of the test tube."),gt.gettext("On the evaporation of carbon disulphide, the yellow particles of </br>sulphur reappear. This indicates that sulphur retains its </br>original property during the formation of a mixture."),gt.gettext("There is no change. This indicates that sulphur loses its </br>original property on the formation of a compound."),gt.gettext("A black mass forms and particles of iron and sulphur cannot be seen </br>separately. Iron and sulphur, both lose their individual properties on </br>heating, and react chemically to form a compound FeS."),gt.gettext("No change is observed.  The compound FeS does not undergo a </br>chemical reaction when heated, nor does it lose its properties."),gt.gettext("Iron filings in the mixture reacts with dil. HCl producing</br> hydrogen gas that extinguishes the burning matchstick with a</br> mild explosion while producing a popping sound."),gt.gettext("The compound FeS reacts with dil. HCl to produce </br>H<sub>2</sub>S gas which reacts with copper sulphate solution </br>to form a black precipitate of copper sulphide.")];
	
	instrctnArray=[gt.gettext('Click on the rod to stir the mixture.'),gt.gettext('Click on the rod to stir the compound.'),gt.gettext('Drag the magnet towards the mixture.'),gt.gettext('Drag the magnet towards the compound.'),gt.gettext('Drag the dropper towards the test tube to </br>pour carbon disulphide into the test tube.'),gt.gettext('Click on the test tube containing the mixture </br>and solution to shake it well. Drag the test tube towards the </br>petri dish to pour the solution  into it and wait for two minutes.'),gt.gettext('Click on the test tube containing the </br>compound and solution to shake it well.'),gt.gettext('Click on the burner to turn it on.'),gt.gettext('Click on the bent tube to remove it.'),gt.gettext('Drag the matchstick towards the mouth of the </br>test tube that is on the test tube rack.')];
	
	listArray=[gt.gettext('Select the test.'),gt.gettext('Select the sample.')];
	
	$("#solutionAftershake").fadeOut(1);
	$("#particle").fadeOut(1);
	$('#label1').html(labelArray[0]);
	$('#reset').attr("value",labelArray[10]);



//ready function
$(document).ready(function()
 {
		for(var i=0;i<testArray.length;i++){//display the combo elements in combobox
			document.lister.theinput.options[i] = new Option(testArray[i], i);
		}
		$('#mixtureSideMenu').css({opacity:'0.3'});
		mix='mixtureDivSideMenu'
		hide();
		$('#mixtureDivSideMenu').css({display:'none'})
		$("#mixtureA").css({display:'block'});
		$("#watchGlass,#rod,#rodDiv").css({display:'block'});
		$("#labelIcon1").html(labelArray[1]);
		$("#labelIcon2").html(labelArray[2]);
		$("#label_mixMenu").html(labelArray[6]);
		$("#label_compMenu").html(labelArray[7]);
		$("#label_mix").css({top:'274px',left:'425px',display:'block',fontSize:'23px',width:'50px'})
		$("#label_mix").html(labelArray[1]);
});
}
//function to rotate rod
function rodRotate(){
	$('.rot').css({//rotate rod
				  '-webkit-animation': 'myOrbit 1s linear infinite', 
				  '-moz-animation': 'myOrbit 1s linear infinite',
				  '-o-animation': 'myOrbit 1s linear infinite', 
				  'animation': 'myOrbit 1s linear infinite'
				  })
}

//function to click on the rod to stir
function rodClick(){
		$('#rodDiv').css({display:'none'})
		$('#theinput').attr('disabled', 'disabled');
		rodRotate();
		stopFlag=0;
		if(mix=='mixtureDivSideMenu'){
			$("#mixturestir").css({display:'block'});
			id='.mixtureA';
		}else{
			$("#compoundstir").css({display:'block'});
			id='.compoundB';
		}
		$('#mixtureDivSideMenu').css({display:'none'})
		$('#compoundDivSideMenu').css({display:'none'})
		stirmix_Int=setInterval(stirMixture,100);//stir the mixture
}

//*--Function to show the mixture stirring ---------
function stirMixture(){
		commonShowORHide()
		if(stopFlag==2){
			clearInterval(stirmix_Int);
			$('.rot').css({
			'animation-name': 'none',
			'-moz-animation-name': 'none',
			'-webkit-animation-name': 'none',
		});
		 $('#informIcon').css({display:'block'});
		 $('#theinput').removeAttr('disabled');
		 visibility();
		}
	} 

//function to hide all images
function hide(){
	$("#mixtureA,#compoundB,#label_mix,#magnetDiv,.Magnet_mix,#testtubeShadow,#testTube,#tubeDiv,#mixtureinTesttube,#mixtureafterStick,#carbondisulphidebotl,#dropperDiv,#testtubeShadow,#carbondisulphidesoln,#testTubeDiv,#chinaDish,#mins,#clockBody,#needle,#watchGlass,#watchGlass2,#solutionAftershake,#testubeAfterPour,#testubeScene5,#animLoad,#burner,#dish,#flames,#smokeDiv,#dilHclStill,#labelboard,#labelCuSO4,#label_soln,#standUnder,#switchOff,#offbtn,#onbtn,#switchOn,#bentTube,#bentTubeDiv,#mixParticleforHcl,#bluesoln,#rod,#rodDiv,#testTubeSolnDiv,#flameOnDiv,#flame,#flameOffDiv,#bubbles,#bubblesInTestTube,#matchStick,#matchStickdiv,#matchStickFlame,#blackSoln,#informIcon,#particle").css({display:'none'});
	
	
	
	$('#mixturestir').hide();
	$('#compoundstir').hide();
	$("#dropperDiv").draggable('enable');
	$("#matchStickdiv").draggable('disable');
	$("#dropperDiv").css({display:'none'})
	$("#magnetDiv").draggable('enable');
	$("#bentTubeDiv1").css({display:'block',zIndex:'1'});
	$('#tubeDiv').draggable('disable')
	$("#dropperSolnDiv").css({top:'121px',display:'block'})
	$("#testTubeSolnDiv").css({top:'190px',height:'0px'});
	$('#matchStickFlameBurst').css({display:'block'});	
	$('#flameblastDark').css({top:'-37px',left:'-4px',width:'22px',height:'59px'});
	$('#matchStickFlameBurst').css({top:'0px',left:'0px',width:'0px',height:'0px'});
	document.getElementById("tubeDiv").style.top="82px";
	document.getElementById("tubeDiv").style.left="95px";
	if(tripClickFlag==true){//after clicking help btn and select combobox,reset all tooltips of help
		trip.stop();
		tripClickFlag=false;
		//$(".content").scrollTop(0);
		}
		
}
//function to reset animation
function resetAnim(){
			clearTimeout(stopAnim);
			stage1.destroy();
			stage1 = null;
			stage1 = new swiffy.Stage(document.getElementById('animLoad'),swiffyobject);
}
//function for select test combo..
function selectTestChange(){
		test=$("#theinput").find(':selected').val();
		hide();
		common();
		if(tripClickFlag==true){//after clicking help btn and select combobox,reset all tooltips of help
		trip.stop();
		tripClickFlag=false;
		}
}
//magnet drag....
$('#magnetDiv').draggable({
					   drag:function(event,ui){
						   $('#theinput').attr('disabled', 'disabled');
						   
						      if(($("#magnetDiv").position().top>65)&&($("#magnetDiv").position().top<260)&&(($("#magnetDiv").position().left>-20)&&($("#magnetDiv").position().left<500))){
							   $("#magnetDiv").draggable('disable');
							if(mix=='mixtureDivSideMenu'){
								$('.Magnet_mix').css({display:'block'});
								$('#mixtureafterStick').css({display:'block'});
								$('#mixtureA').css({display:'none'});
								$('#informIcon').css({display:'block'});
							}if(mix=='compoundDivSideMenu'){
								$('.Magnet_mix').css({display:'none'});
								$('#informIcon').css({display:'block'});
							}
						   }
					   },
					   stop:function(){
						 $('#theinput').removeAttr('disabled');
					   }
					})
//dropper drag
$('#dropperDiv').draggable({
					   drag:function(event,ui){
					   }, stop:function(){
						   if(($("#dropperDiv").position().top>-115)&&($("#dropperDiv").position().top<-5)&&(($("#dropperDiv").position().left>62)&&($("#dropperDiv").position().left<150))){
								$('#mixtureDivSideMenu').css({display:'none'});
								$('#compoundDivSideMenu').css({display:'none'});
								$('#theinput').attr('disabled', 'disabled');
								$("#dropperDiv").css({top:'-42px',left:'104px'});
							//solution to fill in the testube
							$("#dropperSolnDiv").animate({top:'138px',height:'0px'},500,
									function(){
										document.getElementById("dropperDiv").style.top="80px";
							 			document.getElementById("dropperDiv").style.left="430px";
										$("#dropperSolnDiv").css({display:'none'})
										$("#dropperSolnDiv").css({top:'121px'})
										$("#dropperDiv").draggable('disable');
									});
							//drops position
							$('#drops1').css({ display:'block',top:'200px'});
					   		$('#drops2').css({ display:'block',top:'215px'});
					   		$('#drops2').animate({top:'290px'});
							$('#drops1').animate({top:'290px'},500,
									function(){
										$('#drops1,#drops2').css({ display:'none'});
									});
							$('#testTubeSolnDiv,#testTubeDiv').css({ display:'block'});
				    		$("#testTubeSolnDiv").animate({top:'178px',height:'40px'});
						   }else{//dropper to original position
							 document.getElementById("dropperDiv").style.top="80px";
							 document.getElementById("dropperDiv").style.left="430px";
						   }
					   }
})

//function to drag the test tube to pour into the dish
$('#tubeDiv').draggable({
					   drag:function(event,ui){
						$('#testTubeDivPour').css({display:'none'})   
					   },
			stop:function(){
			if(($("#tubeDiv").position().top>05)&&($("#tubeDiv").position().top<155)&&(($("#tubeDiv").position().left>25)&&($("#tubeDiv").position().left<300))){
	$('#testTubeDivPour,#testtubeShadow,#testTube,#mixtureinTesttube,#testTubeSolnDiv,#solutionAftershake').css({display:'none'});
	$('#tubeDiv').css({top:'82px',left:'95px'});
	$('#informIcon').css({display:'none'});
	inform1Flag=0;
	$('#animLoad').css({display:'block'});
	$('#chinaDish').css({display:'none'});
	degree=0;
	stage1.start();//start animation of pour the soln to china dish
	stopAnim=setTimeout(function(){anim01completed();},1950);
				}else{
					$('#tubeDiv').css({top:'82px',left:'95px'});
				}
			}
	})
//function for mixture & compound icons click in sidemenu
function mixtureFN(evt){
	hide();
	mix=evt.id;
	if(mix=='mixtureDivSideMenu'){//mixture
		$('#mixtureSideMenu').css({opacity:'0.3'});
		$('#compoundSideMenu').css({opacity:'1'});
		$('#mixtureDivSideMenu').css({display:'none'})
		$('#compoundDivSideMenu').css({display:'block'});
		$('#matchStickFlameBurst').css({top:'0px',left:'0px',width:'0px',height:'0px'});
	}
	else if(mix=='compoundDivSideMenu'){//compound
		$('#mixtureSideMenu').css({opacity:'1'});
		$('#compoundSideMenu').css({opacity:'0.3'});
		$('#compoundDivSideMenu').css({display:'none'});
		$('#mixtureDivSideMenu').css({display:'block'});	
	}
	common();
}
function visibility(){
	if(mix=='mixtureDivSideMenu'){
		$('#mixtureDivSideMenu').css({display:'none'});
		$('#compoundDivSideMenu').css({display:'block'});	
	}else{
		$('#mixtureDivSideMenu').css({display:'block'});
		$('#compoundDivSideMenu').css({display:'none'});
	}
}
//common function for select dropdwn
function common(){
	test=$("#theinput").find(':selected').val();
	switch(test){
		case '0':
				$('#bgCanvas').css({'background-image':'url('+path0+')'});	
				$("#bgCanvas").attr('src',simPath+'images/BG.gif');
				$("#watchGlass").css({display:'block'});
				$('#rodDiv,#rod').css({display:'block'})
				if(mix=='mixtureDivSideMenu'){
					$('#mixtureA').css({display:'block',top:'170px',left:'140px',width:'284px',height:'84px'});
					$("#label_mix").css({top:'274px',left:'425px',display:'block',fontSize:'23px',width:'50px'});
					$("#label_mix").html(labelArray[1]);
				}if(mix=='compoundDivSideMenu'){
					$('#compoundB').css({display:'block',top:'180px',left:'140px',width:'309px',height:'76px'});
					$("#label_mix").css({top:'274px',left:'430px',display:'block',fontSize:'23px',width:'50px'});
					$("#label_mix").html(labelArray[2]);
				}
		break;
		case '1':
				$('#bgCanvas').css({'background-image':'url('+path1+')'});
				$("#watchGlass2,#magnetDiv").css({display:'block'});
				$("#magnetDiv").css({left: '238px',top: '5px'});
				if(mix=='mixtureDivSideMenu'){
					$('#mixtureA').css({display:'block',top:'198px',left:'133px',width:'258px',height:'79px'});
					$("#label_mix").css({top:'276px',left:'450px',display:'block',fontSize:'23px',width:'258px'});
					$("#label_mix").html(labelArray[1]);
				}if(mix=='compoundDivSideMenu'){
					$('#compoundB').css({display:'block',top:'213px',left:'138px',width:'258px',height:'67px'});
					$("#label_mix").css({top:'276px',left:'455px',width:'150px',display:'block',fontSize:'23px'});
					$("#label_mix").html(labelArray[2]);
				}
		break;
		case '2':
				$('#bgCanvas').css({'background-image':'url('+path2+')'});	
				$('#carbondisulphidebotl,#carbondisulphidesoln,#dropperDiv,#tubeDiv,#testtubeShadow,#testTube,#mixtureinTesttube').css({display:'block'});//,#dropperDiv1
				$('#dropperDiv').css({zIndex:2});
				$("#label_mix").css({top:'240px',left:'420px',display:'block',fontSize:'16px'});
				$("#label_mix").html(labelArray[8]);
				if(mix=='mixtureDivSideMenu'){
					$('#chinaDish').css({display:'block'});
					$('#mixtureinTesttube').css({top:'200px'});
					$('#mixtureinTesttube').attr('src',simPath+'images/mixtureinTesttube.png');
				}if(mix=='compoundDivSideMenu'){
					$('#mixtureinTesttube').css({top:'195px'});
					$('#mixtureinTesttube').attr('src',simPath+'images/compinTesttube.png');
				}
		break;
		case '3':
				$('#bgCanvas').css({'background-image':'url('+path3+')'});
				$('#switchOff,#offbtn').css({display:'block'});
				$('#burner,#dish').css({display:'block'});
				if(mix=='mixtureDivSideMenu'){
					$('#mixtureIndish').css({display:'block'});
					$("#mixtureAfterheat1").css({display:'none'});
				}if(mix=='compoundDivSideMenu'){
					$('#mixtureIndish').css({display:'none'});
					$("#mixtureAfterheat1").css({display:'block'});
				}
		break;
		case '4':
				
				$('#bgCanvas').css({'background-image':'url('+path4+')'});
				$('#dilHclStill,#labelboard,#testubeScene5,#standUnder,#bentTube,#mixParticleforHcl').css({display:'block'});
				$("#flameOnDiv,#bentTubeDiv1,#flameTooltip").css({display:'block'});
				$('#bubbles').css({display:'block'});
				$('.bubble').css({width:'3px',height:'3px'});
				if(mix=='mixtureDivSideMenu'){
					matchFlameFN();
					$('#mixParticleforHcl').attr('src',simPath+'images/mixParticleforHcl.png');
					$("#label_mix").css({top:'109px',left:'38px',width:'200px' ,display:'block',fontSize:'23px'})
					$("#label_mix").html(labelArray[3]);
				}if(mix=='compoundDivSideMenu'){
					$("#bentTubeDiv1").css({display:'none'});
					$('#mixParticleforHcl').attr('src',simPath+'images/compParticleforHcl.png');
					$("#label_mix").css({top:'109px',left:'42px',display:'block',fontSize:'23px',width:'200px' })
					$("#label_mix").html(labelArray[4]);
					$("#bluesoln,#labelCuSO4,#label_soln").css({display:'block'});
					$("#label_soln").html(labelArray[5]);
				}
		break;
	}
}

//function to click on the testTube to shake
function testTubeclick(){
	$('#testTubeDiv').css({display:'none'});
	count=0;rotateCnt=0;rotateCnt2=3;
	rotateEvt=setInterval(rotateFunction,100);
}

//function to shake the test tube
function rotateFunction(){
	if(mix=='mixtureDivSideMenu'){
		$("#solutionAftershake").fadeIn(3000);//the yellow soln to appear	
		$("#mixtureinTesttube,#testTubeSolnDiv").fadeOut(2000);//the soln in testube to disppear	
	}
	if(rotateCnt<3){
		count++;
			$("#tubeDiv").rotate(rotateCnt);
			rotateCnt++;			
		}else{	
			if(rotateCnt2>-3){
				count++;
				$("#tubeDiv").rotate(rotateCnt2);
				rotateCnt2--;
			}else{
				rotateCnt=0;
				rotateCnt2=3;
			}
		}
		if(count>28){
			    rotateCnt=0;
				rotateCnt2=0;
			    clearInterval(rotateEvt);
				$("#tubeDiv").rotate(0);
				inform1Flag=1;
				$('#tubeDiv').css({top:'82px',left:'95px'});
				if(mix=='mixtureDivSideMenu'){
					$('#testTubeDivPour').css({display:'block'});
					$('#tubeDiv').draggable('enable');
					$('#informIcon').css({display:'block'});
				}else{
					$('#testTubeDivPour').css({display:'none'});
					$('#tubeDiv').draggable('disable')
					$('#informIcon').css({display:'block'});
					$('#theinput').removeAttr('disabled');
					$('#mixtureDivSideMenu').css({display:'block'});
					$('#compoundDivSideMenu').css({display:'none'});	
				}
		}
}

//function for animation completion of pour soln and clock to appear
function anim01completed(){
	$('#animLoad').css({display:'none'});
	$("#testubeAfterPour").css({display:'block'});
	$("#clockBody,#needle,#mins").css({display:'block'});
	$('#chinaDish').css({display:'block'});
	$('#mins').html(labelArray[9]);
	$('#solutionStill').css({display:'block'});
	$('#solutionStill').fadeOut(10000);
	$("#particle").fadeIn(15000);
	clockrot_Int=setInterval(clockRotate,10);//clock rotate
}

//function to rotate clock
function clockRotate(){
	if(degree<=deg){
		degree++;
	}
		$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
		$("#needle").css({'-webkit-transform' : 'rotate('+degree+'deg)'});
		$("#needle").css({'transform-origin' : '3px 25px'});
		$("#needle").css({'transform' : 'rotate('+ degree +'deg)'});
		if(degree==720){//if clock rotates 360*2 degree
			clearInterval(clockrot_Int);
			$("#clockBody,#needle,#mins").css({display:'none'})
				if(tripClickFlag==true){
					trip.stop();
					tripClickFlag=false;
				}
			resetAnim();
			if(mix=='mixtureDivSideMenu'){
			$('#informIcon').css({display:'block'});
			$('#theinput').removeAttr('disabled');
			visibility();
		}
		}
}

//on the flame in scene4
function switchOnFn(){
	$('#offbtn').css({display:'none'});
	$('#onbtn').css({display:'block'});
	$('#mixtureDivSideMenu').css({display:'none'});
	$('#compoundDivSideMenu').css({display:'none'});
	$('#theinput').attr('disabled', 'disabled');
	$('.flame1,.flame2,.flame3,.flame4').css({width:'21px',height:'43px'})
	$('#flames').css({display:'block',top:'150px',left:'270px'})
	$('.flame1').show();
	id='.flame';
	flameglow_Int=setInterval(commonShowORHide,50);
	$("#smokeDiv").css({display:'block',top:'2px',left:'220px',zIndex:'3',opacity:'1'});
	if(mix=='mixtureDivSideMenu'){
		$("#mixtureIndish").fadeOut(15000,function(){
				$("#smokeDiv").css({opacity:'0'});
				$('#informIcon').css({display:'block'});
				$('#mixtureDivSideMenu').css({display:'none'});
				$('#compoundDivSideMenu').css({display:'block'});
				clearInterval(flameglow_Int);
				$('#theinput').removeAttr('disabled');
				$("#smokeDiv,#flames").css({display:'none'});
		});
	}if(mix=='compoundDivSideMenu'){
		$("#mixtureAfterheat1").fadeOut(15000,function(){
				$("#smokeDiv").css({opacity:'0'});	
				$('#informIcon').css({display:'block'});
				$('#mixtureDivSideMenu').css({display:'block'});
				$('#compoundDivSideMenu').css({display:'none'});
				clearInterval(flameglow_Int);
				$('#theinput').removeAttr('disabled');
				$("#smokeDiv,#flames").css({display:'none'});
		});
	}
}

//common function to show the flames,stirr mixture etc
function commonShowORHide(){
	if($(id+'1').css('display') == "block"){          
			$(id+'1').hide();
			$(id+'3').hide();
			$(id+'4').hide();
			$(id+'2').show();         
		}else if($(id+'2').css('display') == "block"){          
			$(id+'1').hide();
			$(id+'2').hide();
			$(id+'4').hide();
			$(id+'3').show();         
		}else if($(id+'3').css('display') == "block"){          
			$(id+'1').hide();
			$(id+'3').hide();
			$(id+'2').hide();
			$(id+'4').show();  
			stopFlag++;
		}else{
			$(id+'2').hide();
			$(id+'3').hide();
			$(id+'4').hide();
			$(id+'1').show();
		}
}
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
//function to on the flame in the dil HCL scene
function flameOnFn(){
	$("#flameOffDiv").css({display:'block'});
	$('#theinput').attr('disabled', 'disabled');
	id='.flame';
	$('.flame1,.flame2,.flame3,.flame4').css({width:'17px',height:'29px'})
	$('#flames').css({display:'block',top:'187px',left:'148px'})
	$("#flameOnDiv").css({display:'none'});
	$('.bubble').css({width:'5px',height:'5px'});
	$('.flame1').show();
	$('#mixtureDivSideMenu').css({display:'none'});
	$('#compoundDivSideMenu').css({display:'none'});
	stopFlag=0;
	flameglow_Int=setInterval(flameOffFn,50);
}
//function to off the flame in the dil HCL scene
function flameOffFn(){
	commonShowORHide();
 if(stopFlag==15){
	
	$('.bubble').css({width:'3px',height:'3px'});
	if(mix=='mixtureDivSideMenu'){
		$("#bentTubeDiv1").css({zIndex:'5'});
		$("#bentTubeDiv,#bentTubeDiv1").css({display:'block'});
		$("#flames").css({display:'none'});
		clearInterval(flameglow_Int);
	}
	if(mix=='compoundDivSideMenu'){
		
		$('#theinput').removeAttr('disabled');
		$('#mixtureDivSideMenu').css({display:'block'});
		$('#compoundDivSideMenu').css({display:'none'});
		
		$("#bluesoln").fadeOut(6000,function(){$("#flames").css({display:'none'});
	clearInterval(flameglow_Int);$('#informIcon').css({display:'block'});});
		$('#blackSoln').css({display:'block'});
		$('#bubblesInTestTube').css({display:'block'});
	}
 }
}
function matchFlameFN(){
	$("#matchStickdiv").css({display:'block',zIndex:'3',top:'32px',left:'440px'});
	$("#matchStick").css({display:'block',top:'10px',left:'10px',zIndex:'3'});
	$("#matchStickFlame").css({display:'block',top:'-14px',left:'-2px'});
	$('.stickflame1').show();
	matchstickFlaming=setInterval(matchGlow,150);
}
//to click on the bent tube to show the match stick
function bentTubeClick(){
	$("#bentTube,#bentTubeDiv,#bentTubeDiv1").css({display:'none'});
							$("#matchStickdiv").draggable('enable');
}
//function click & drag the matchstick to move down the matchstick and flame..
$('#matchStickdiv').draggable({
					   drag:function(event,ui){
				if(($("#matchStickdiv").position().top>135)&&($("#matchStickdiv").position().top<155)&&(($("#matchStickdiv").position().left>320)&&($("#matchStickdiv").position().left<365))){
				document.getElementById("matchStickdiv").style.top="140px";
				document.getElementById("matchStickdiv").style.left="340px";
							clearInterval(matchstickFlaming);
							$('#matchStickFlame').css({display:'none'});
							$('#flameblastDark').css({display:'block'});							  		  //$('#flameblastDark').css({top:'-37px',left:'-4px',width:'0px',height:'0px'});
							$("#matchStickdiv").draggable('enable');
							matchstickFlameBurstFn();
							stickFlameDark();
						   }
					   },
					 stop:function(){
					 }
		
})
//matchstickFlameBurst yellow color
function matchstickFlameBurstFn(){
	$('#matchStickFlameBurst').animate({
						top:'-120px',
						left:'-55px',
						width:'122px',
						height:'167px'
				},100,function(){
					$("#matchStickdiv").css({display:'block',zIndex:'1'});
					$('#matchStickFlameBurst').css({display:'none'});
					if(document.getElementById("matchStickFlameBurst").style.top=='-120px'){
						if(mix=='mixtureDivSideMenu'){
					      $('#informIcon').css({display:'block'});
						}
					}
					$('#matchStickFlameBurst').css({top:'0px',left:'0px',width:'0px',height:'0px'});
					$('#theinput').removeAttr('disabled');
					visibility();
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