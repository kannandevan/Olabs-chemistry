var acetanilideHelp,acetanilideInference,dibenzalAcetoneHelp,dibenzalAcetoneInference,pNitroacetanilideHelp,pNitroacetanilideInference,naphtholAnilinedyeHelp,naphtholAnilinedyeInference;
var helpIndex=0,nextClick=0,trip,trip1,rbFlaskShake,conicalFlaskShake,burnerOnHelp,inferenceMsg,helpclickFlag=false,inferenceClickFalg=false,bigBtnClick=0;
var gt=$;
//---------------Onloading events--------------
window.onload = function init(){
	/*--------------- Prevent the selection --------------- */
	$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
	var rotateInt,flag_rotate=false,rotateAmt=5,count=0,stirCount=0,stirInt;
	var rbsolnDivTop,rbsolnTop,rbsolnborderWidth,rbsolnborderLeft,dragDropperCount=0,dropFlag=false,alerttripFlag2=false,alerttripFlag=false,stirrerClick=0,addMixtureFlag=false;
	var selectOrganicCompund="acetanilide",flameCount=0,flame,dragSpatulaCount=0,cylinderCount=0,alertInference;
	var clockInt,degree=0,flag2=new Boolean(true),rotCount2=0,degree2 = -14,alertInference2;
	var corkFlag=0;
	/*--------------- Experiment heading--------------- */
	$('#expName').html(gt.gettext("Preparation of Organic Compounds"));
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	/*--------------- Experiment labels--------------- */
	var acetanilideLabel=gt.gettext("Acetanilide");
	var dibenzalAcetoneLabel=gt.gettext("Dibenzal acetone");
	var pNitroacetanilideLabel=gt.gettext("p-Nitroacetanilide");
	var naphtholAnilinedyeLabel=gt.gettext("2-Naphthol aniline dye");
	var glacialAceticLabel=gt.gettext("Glacial acetic acid");
	var anilineLabel=gt.gettext("Aniline");
	var aceticAnhydrideLabel=gt.gettext("Acetic anhydride");
	var waterLabel=gt.gettext("Water");
	var mixtureLabel=gt.gettext("Mixture");
	var iceColdWater=gt.gettext("Ice cold water");
	var buchnerFunnel=gt.gettext("Buchner funnel");
	var aceticacidWater=gt.gettext("Acetic acid + Water");
	var filterPaperLabel=gt.gettext("Filter paper");
	var iceBathContainerLabel=gt.gettext("Ice bath");
	var rectifiedSpirit=gt.gettext("Rectified spirit"); 
	var acetanilidePre=gt.gettext("Acetanilide (Precipitate)"); 
	var acetoneBenzaldehyde=gt.gettext("Acetone(1ml) + Be- nzaldehyde"); 
	var placeInWater=gt.gettext("Place the conical flask to  dish containing cold water"); 
	var naoh=gt.gettext("10% NaOH"); 
	var coldWater=gt.gettext("Cold water"); 
	var corkLabel=gt.gettext("Cork"); 
	var waterBottle=gt.gettext("Water bottle");
	var hotrectifiedSpirit=gt.gettext("Hot rectified spirit"); 
	var concH2SO4Label=gt.gettext("Conc.H<sub>2</sub>SO<sub>4</sub>");
	var recrystallizationacetanilide=gt.gettext("Recrystallization of acetanilide"); 
	var recrystallizationDibenzalAcetone=gt.gettext("Recrystallization of dibenzal acetone");
	var recrystallizationpNitroacetanilide=gt.gettext("Recrystallization of p-Nitroacetanilide");
	var recrystallization2naphthol=gt.gettext("Recrystallization of 2-Naphthol aniline dye");
	var iceCubesLabel=gt.gettext("Ice cubes"); 
	var methylatedSpiritLabel=gt.gettext("Methylated spirit"); 
	var minLabel=gt.gettext("Min");
	var concHCl=gt.gettext("Conc. HCl");
	var distWater=gt.gettext("Distilled water");
	var sodiumNitriteLabel=gt.gettext("Sodium nitrite");
	var naphthol2=gt.gettext("2-naphthol");
	var sodiumHydroxide10 =gt.gettext("10% sodium hydroxide");
	var freezingMixture=gt.gettext("Freezing Mixture");
	var nextLabelText=gt.gettext("Next");
	var hotSolnAcetanilide=gt.gettext("Hot solution of Acetanilide");
	var crystalsAcetanilide=gt.gettext("Acetanilide crystals");
	var pptDibenzalAcetone =gt.gettext("Precipitate of Dibenzal acetone");
	var crushedIce=gt.gettext("Crushed Ice");
	var pptNitroacetanilide=gt.gettext("Precipitate of pNitroacetanilide");
	var hotSolnNitroAcetanilide=gt.gettext("Hot solution of pNitroacetanilide");
 	var crystalsNitroAcetanilide=gt.gettext("Crystals of pNitroacetanilide");
 	var sodiumNitrateSoln=gt.gettext("Sodium nitrite solution");
 	var anilineWater=gt.gettext("Aniline + HCl + Water");
 	var anilinHcl=gt.gettext("Aniline + HCl + Sodium nitrite");
	var alkaline2Naphthol=gt.gettext("Alkaline 2Naphthol");
	var natholHot=gt.gettext("Hot solution of 2Naphthol aniline Dye");
	var natholCrystal=gt.gettext("Crystals of 2Naphthol aniline Dye");
	/*--------------- Helps and inferences--------------- */
	acetanilideHelp=[gt.gettext("Drag the measuring jar to the RB flask to pour glacial acetic acid into acetic anhydride."),gt.gettext("Drag the measuring jar to the RB flask to pour aniline into it."),gt.gettext("Drag the RB flask to the trough to place it in water."),gt.gettext("Drag the RB flask to the beaker to pour the contents into ice cold water."),gt.gettext("Drag the beaker to the Buchner funnel to filter the precipitate of acetanilide."),gt.gettext("Drag the bottle to the Buchner funnel to wash the precipitate with water."),gt.gettext("Drag the beaker to the beaker containing precipitate of acetanilide to pour acetic acid water mixture into it."),gt.gettext("Drag the beaker to the burner to heat the contents."),gt.gettext("Drag the beaker to the funnel to filter the hot solution into the conical flask."),gt.gettext("Drag the conical flask to the ice bath to cool its contents."),gt.gettext("Drag the conical flask to the Buchner funnel to filter the crystals of acetanilide."),gt.gettext("Click and drag the spatula to the Buchner funnel to transfer the crystals to the filter paper.")];
	rbFlaskShake=gt.gettext("Drag the RB flask to shake it.");
	burnerOnHelp=gt.gettext("Click on the knob of the burner to turn it on.")
	conicalFlaskShake=gt.gettext("Drag the conical flask to shake it.");
	acetanilideInference=gt.gettext("White shining flakes of acetanilide are obtained.");
	dibenzalAcetoneHelp=[gt.gettext("Drag the measuring jar to the conical flask to pour rectified spirit into the mixture of acetone and benzaldehyde."),gt.gettext("Drag the dropper to the conical flask to add 5ml 10% NaOH solution into it."),gt.gettext("Drag the cork to close the conical flask."),gt.gettext("Drag the conical flask to the trough to place it in cold water."),gt.gettext("Drag the conical flask to the Buchner funnel to filter the precipitate of dibenzal acetone."),gt.gettext("Drag the beaker to the beaker containing precipitate of dibenzal acetone to pour hot rectified spirit into it."),gt.gettext("Drag the beaker to the Buchner funnel to filter the crystals of dibenzal acetone.")];
	dibenzalAcetoneInference=gt.gettext("Pale yellow crystals of dibenzal acetone are obtained.");
	pNitroacetanilideHelp=[gt.gettext("Drag the measuring jar to the conical flask to pour glacial acetic acid into acetanilide."),gt.gettext("Drag the conical flask to the trough to place it in water."),gt.gettext("Drag the dropper to the conical flask to add conc. H2SO4 to it."),gt.gettext("Click on the glass rod to stir the contents of the conical flask."),gt.gettext("Drag the dropper to the freezing mixture to take the mixture of fuming nitric acid and conc. H2SO4 from the test tube."),gt.gettext("Drag the dropper to the conical flask to add the mixture of fuming nitric acid and conc. H2SO4 to it."),gt.gettext("Drag the conical flask to leave it undisturbed for 30 minutes."),gt.gettext("Drag the conical flask to the beaker to pour the solution into crushed ice."),gt.gettext("Drag the beaker to the Buchner funnel to filter the precipitate of pnitroacetanilide."),gt.gettext("Drag the beaker to the beaker containing precipitate of pnitroacetanilide to pour methylated spirit into it."),gt.gettext("Drag the conical flask to the Buchner funnel to filter the crystals of pnitroacetanilide.")]; 
	pNitroacetanilideInference=gt.gettext("Colourless crystals of pnitroacetanilide are obtained.")
	naphtholAnilinedyeHelp=[gt.gettext("Drag the measuring jar to the conical flask to add conc.HCl into aniline."), gt.gettext("Drag the measuring jar to the conical flask to pour water into it."), gt.gettext("Drag the conical flask to the ice bath to cool the contents."), gt.gettext("Drag the beaker to the beaker containing sodium nitrite to add water into it."),gt.gettext("Drag the beaker to the ice bath to cool the contents."),gt.gettext("Drag the beaker to the conical flask to add sodium nitrite solution to it."),gt.gettext("Drag the beaker to the beaker containing 2- naphthol to add 10% NaOH into it."), gt.gettext("Drag the conical flask to the beaker to add the mixture of aniline and sodium nitrite solution into the beaker containing 2 naphthol solution."),gt.gettext("Click on the glass rod to stir the contents of the beaker."),gt.gettext("Drag the beaker to the Buchner funnel to filter the precipitate of 2naphthol aniline dye."),gt.gettext("Drag the beaker to the beaker containing precipitate of 2-naphthol aniline dye to add glacial acetic acid to it."), gt.gettext("Drag the conical flask to the Buchner funnel to filter the crystals of 2naphthol aniline dye.")];
	naphtholAnilinedyeInference=gt.gettext("Deep red crystals of 2-naphthol aniline dye are obtained.");
	h2so4Inference=gt.gettext("8ml of conc. H2SO4 is added into the conical flask");
	acetanilideconcH2so4=gt.gettext("Acetanilide + Glacial acetic acid + Conc. H2SO4");
	alertInference2=gt.gettext("Fuming HNO3 (2 ml) + Conc. H2SO4 (2 ml)");
	
	/*--------------- Add labels--------------- */
	$('#title').html(gt.gettext("Select organic compound to be prepared:"));
	$('#compound1').html(acetanilideLabel);
	$('#compound2').html(dibenzalAcetoneLabel);
	$('#compound3').html(pNitroacetanilideLabel);
	$('#compound4').html(naphtholAnilinedyeLabel);
	$('#reset').val(gt.gettext("Reset"));
	$('#nextLabel').html(nextLabelText);
	$('#waterLabel').html(distWater);
	alertDiv="conicalFlask";				
	alertPosition='w';
	alertInference=h2so4Inference;
	var alerttrip = new Trip([
	{
		sel : $('#'+alertDiv),
		position : alertPosition,
		content : alertInference,
		expose : false,
		delay : 6000
	}
	])
	alertDiv2="testtubeAImg";				
	alertPosition2='e';
	var alerttrip2 = new Trip([
	{
		sel : $('#'+alertDiv2),
		position : alertPosition2,
		content : alertInference2,
		expose : false,
		delay : 6000
	}
	])

	//---------------Document ready function--------------
	$(document).ready(function() {
  		acetanilidePreparation();//Preparation of acetanilide
  		//Function for preparing acetanilide
  		function acetanilidePreparation(){
  			init();//initialization  	
  			inferenceMsg=acetanilideInference;		
  			$('#whiteSolnline1Div,#whiteSolnline2Div').css({top:'71px',left:'426px'});
  			$('#bg1,#labelBoard1,#labelBoard2,#labelBoard3').css({display:'block'});
  			dragCylinder('cylinder1','cylinder1Soln','cylSoln1Horizontal',100,80,-40,309,-100,300,265,530);//Drag cylinder1	
			$('#cylinder1Soln,#cylinder2Soln,#rbFlask,#thermoCoal,#cylinder1,#cylinder2').css({display:'block'});
			rbsolnDivTop=6,rbsolnTop=5,rbsolnborderWidth=9,rbsolnborderLeft=4;
			$('#labelBoardText2').css({top:'7px'});
			$('#labelBoardText1,#labelBoardText3').css({top:'0px'});
			$('#thermoCoal').attr('src',simPath+'images/thermocoal.png');
			$('#rbflaskImg').attr('src',simPath+'images/rbflask.png');
			$('#labelBoard1,#labelBoard2,#labelBoard3').css({top:'277px'});	
			$('#cylinder2SolnImg').css({backgroundColor:'#FFFF00'});	
			$('#labelBoard1').css({left:'58px'});	
			$('#labelBoard2').css({left:'181px'});
			$('#labelBoard3').css({left:'380px'});
			$(".cylinderDivStyle").css({top:'126px',height:'34px'});
			$('#labelBoardText1').html(glacialAceticLabel+" (10ml)");
			$('#labelBoardText2').html(anilineLabel+" (10ml)");
			$('#labelBoardText3').html(aceticAnhydrideLabel+" (10ml)");
			$('#labelBoardZoomText').html(acetanilideLabel);
			$('#beaker3Mixture').attr('src',simPath+'images/compound1.png');
			$('#result1').attr('src',simPath+'images/Acetanilide.png');
  		} 
  		//Function for preparing dibenzal acetone 		
  		function dibenzalAcetonePreparation(){
  			init();//initialization
  			inferenceMsg=dibenzalAcetoneInference;	
  			$('#bg1,#labelBoard1,#labelBoard2,#labelBoard3,#cylinder1,#conicalFlask,#dropper1,#bottle1,#cylinder1Soln,#conicalFlaskSoln').css({display:'block'});
  			$('#conicalFlask').css({top:'161px',left:'215px'});
  			$('#labelBoard2').css({top:'277px',left:'207px'});
  			$('#labelBoard3').css({left:'396px'});
  			$('#labelBoard1').css({left:'58px'});
  			$('#labelBoardText2').css({top:'0px'});
  			$('#bottle1SolnName').css({top:'78px'});
  			$('#cylinder1').css({left:'80px'});
  			$('#conicalFlask').css({top:'161px',left:'215px'});
  			$('#conicalFlaskSolnImg').css({top:'-94px'});
			$('.conicalFlaskSolnBorderStyle').css({left:'3px',width:'82px'});	
	 		$('#conicalFlaskSoln').css({top:'106px',height:'15px'});
  			$('#dropper1').css({top:'98px',left:'435px'});  
  			$('#bottle1').css({top:'152px',left:'416px'});
  			$('#labelBoardText1').css({top:'1px'});
  			$(".cylinderDivStyle").css({top:'86px',height:'76px'});
  			$('#bottle1SolnStyle').css({backgroundColor:'#CCC'});
  			$('#labelBoardText3').css({top:'8px'});
  			$('#labelBoardText1').html(rectifiedSpirit+" (25ml)");
			$('#labelBoardText2').html(acetoneBenzaldehyde+" (2.5ml)");
			$('#labelBoardText3').html(naoh+" (5ml)");  
			$('#bottle1SolnName').html(naoh);
			$('#whiteSolnline1Div').css({left:'260px',top:'158px',display:'block'});
			$('#whiteSolnline1Div').css({height:'26px'});	
			$('#whiteSolnline1Div,#conicalMixture').css({display:'none'});			
			$('#cylinder1').draggable({disabled:false});			 
	 	    $('#cylinder1').css({cursor:'pointer'});
	 	    $('#labelBoardZoomText').html(dibenzalAcetoneLabel);
	 	    $('#conicalFlaskSolnImg').attr('src',simPath+'images/conicalFlaskSolnTransparent.png');
	 	    $('#beaker3Mixture').attr('src',simPath+'images/compound1.png');
	 	    $('#result1').attr('src',simPath+'images/DibenzalAcetone.png');
	 	    $('#resultSample').attr('src',simPath+'images/compound2.png');
	 	    $('#spatulapowder').attr('src',simPath+'images/yellowSpatula.png');
	 	    $('#corkInconicalFlask,#conicalFlask,#conicalFlaskSoln,#conicalFlaskSolnImg').stop(true);										
	 		$('#cylinder1').draggable({//Start to drag cylinder
				start:function(event, ui) {
					$('#cylinder1').css({zIndex:1});
				},
				stop:function(event, ui){//Stop to drag cylinder
					if(this.offsetTop>=-100 && this.offsetTop<=300 && this.offsetLeft>=115 &&this.offsetLeft<=315){
						unbindClickIcons();
						$('#cylinder1').css({top:'41px',left:'144px'});	
	 					$('#cylinder1').draggable({disabled:true});
	 					$('#cylinder1').rotate(90);
	 					$('#cylinder1Soln').css({display:'none'});	
	 					$('#whiteSolnline1Div').css({display:'block'});	
	 					$('#whiteSolnline1Div').animate({height:'117px'},function(){
	 						$('#conicalFlaskSolnImg').animate({top:'-83px'});
							$('.conicalFlaskSolnBorderStyle').animate({left:'7px',width:'73px'});	
	 						$('#conicalFlaskSoln').animate({top:'94px',height:'29px'},function(){
	 							$('#whiteSolnline1Div').css({display:'none'});	
	 							$('#cylinder1').rotate(0);
	 							setTimeout(function(){ 
	 								$('#cylinder1').animate({top:'100px',left:'80px'});
	 								$('#dropper1').draggable({disabled:false});			 
							 	    $('#dropper1').css({cursor:'pointer'});
							 		$('#dropper1').draggable({
										start:function(event, ui) {
											$('#dropper1').css({zIndex:1});
										},
										stop:function(event, ui){
											if(this.offsetTop>=-100 && this.offsetTop<=300 && this.offsetLeft>=115 &&this.offsetLeft<=315){
												$('#dropper1').css({top: '43px',left:'250px'});
												$('#dropper1').draggable({ disabled: true });
												$('#dropper1').css({cursor:'default'});
												$('#dropper1').css({zIndex:0});	
												$('#drop1').css({top:'161px',left:'255px'});
												$('#drop2').css({top:'173px',left:'255px'});
												$('#drop1').css({display:'block'});//Drops							
												$('#drop1').animate({top:'200px'},500,function(){							
													$('#drop1').css({display:'none'});
													$('#drop2').css({display:'block'});							
													$('#drop2').animate({top:'260px'},500,function(){														
														$('#drop2').css({display:'none'});
														$('#conicalFlaskSolnImg').animate({top:'-81px'});
														$('.conicalFlaskSolnBorderStyle').animate({left:'9px',width:'71px'});	
								 						$('#conicalFlaskSoln').animate({top:'92px',height:'31px'},function(){
								 							$('#dropper1').animate({top: '98px',left:'435px'});
								 							$('#dropperSoln1').css({top:'63px',height:'56px',width:'9px',left:'6px'});	
								 							dragToShake('conicalFlask',161,215,25,300);
								 						});								 						
													});
												});
							  					$('#dropperSoln1').delay(500).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
											}else{
												$('#dropper1').css({zIndex:0});	
												$('#dropper1').css({top: '98px',left:'435px'});
											}
										}

									})
	 							}, 1000);
	 						});					
	 					});
					}else{
						$('#cylinder1').css({zIndex:0});
						$('#cylinder1').css({top:'100px',left:'80px'});		
					}
				}
			})
  		}
  		//Function for preparing p-Nitroacetanilide 	
  		function pNitroacetanilidePreparation(){
  			init();//initialization
  			inferenceMsg=pNitroacetanilideInference;
  			$('#conicalMixture').css({left: '23px',width:'43px'});  			
  			$('#conicalMixture').attr('src',simPath+'images/salt.png');
  			$('#bg1,#labelBoard1,#labelBoard2,#labelBoard3,#cylinder1,#conicalFlask,#cylinder1Soln,#bigBeaker3,#glassRod3,#dropper1,#bottle1,#conicalMixture').css({display:'block'});
  			$('#conicalFlaskSoln').css({display:'none'});  			
  			$('#bottle1SolnStyle').css({backgroundColor:'#CCC'});
  			$('#cylinder1').css({top: '100px',left: '33px'});  			  
 		    $('#labelBoard1').css({top:'277px',left:'10px'});
 		    $('#conicalFlask').css({top:'157px',left:'134px'});
 		    $('#dropper1').css({top: '100px', left: '288px'}); 
 		    $('#bottle1').css({top: '156px', left: '269px'}); 
 		    $('#labelBoard2').css({top:'277px',left:'131px'});
 		    $('#labelBoard3').css({top:'277px',left:'405px'});
 		    $('#bigBeaker3').css({top: '203px',left: '370px'});
 		    $('#glassRod3').css({top:'105px',left:'150px'});
 		    $('#glassRod3').rotate(-10);  
 		    $('#labelBoardText1').css({top:'0px'}); 
 		    $('#labelBoardText2').css({top:'7px'}); 
 		    $('#labelBoardText3').css({top:'7px'}); 	
 		    $('#bottle1SolnName').css({top:'70px'});
 		    $(".cylinderDivStyle").css({top:'140px',height:'21px'});	    
 		    $('#labelBoardText1').html(glacialAceticLabel+" (5ml)");
			$('#labelBoardText2').html(acetanilideLabel+" (5g)");
			$('#labelBoardText3').html(waterLabel);
			$('#bottle1SolnName').html(concH2SO4Label);			
			$('#cylinder1').draggable({disabled:false});
	 	    $('#cylinder1').css({cursor:'pointer'});
	 	    $('#labelBoardZoomText').html(pNitroacetanilideLabel);
	 	    $('#bigBtnLabel').css({left:'53px',width:'117px'});
	 	    $('#bigBtnLabel').html(recrystallizationpNitroacetanilide);	
	 	    $('#result1').attr('src',simPath+'images/Nitroacetanilide.png');
	 	    $('#resultSample').attr('src',simPath+'images/compound1.png');
	 	    $('#spatulapowder').attr('src',simPath+'images/whiteSpatula.png');
	 		$('#cylinder1').draggable({//Start to drag cylinder
	 			start:function(event, ui) {
					$('#cylinder1').css({zIndex:1});
				},
				stop:function(event, ui){	
					unbindClickIcons()				
				 	stirInt = setInterval( function() { stirGlassRod('glassRod3',505); }, 20 );			
					$('#cylinder1').css({top:'41px',left:'54px'});	
 					$('#cylinder1').draggable({disabled:true});
 					$('#cylinder1').css({cursor:'default'});
 					$('#cylinder1').rotate(90); 				
 					$('#cylinder1Soln').css({display:'none'});
 					$('#conicalFlaskSoln').css({top:'114px',height:'5px'});
					$('#conicalFlaskSolnImg').css({top:'-102px'});
					$('#conicalFlaskSoln').css({display:'block'});
 					$('#whiteSolnline1Div').css({height:'26px'});
 					$('#whiteSolnline1Div').css({ top: '150px',left: '171px'});  		
 					$('#whiteSolnline1Div').animate({height:'100px'},function(){	
 						$('#whiteSolnline1Div').css({display:'block'});
 						$('#cylinder1').rotate(0);
 						$('#whiteSolnline1Div').css({display:'none'});
						$('#conicalFlaskSoln').animate({top:'106px',height:'15px'});
						$('#conicalFlaskSolnImg').animate({top:'-94px'},function(){
							$('#cylinder1').animate({top: '100px',left: '33px'}); 
 						});
 					})
	 			}
	 		})

  		}
  		//Functi n for preparing 2-Naphthol aniline dye
  		function naphtholAnilinedyePreparation(){
  			init();//initialization
  			inferenceMsg=naphtholAnilinedyeInference;
  			$('#labelBoardZoomText').html(naphtholAnilinedyeLabel);
  			$('#bigBtnLabel').html(recrystallization2naphthol);	
  			$('#conicalMixture').attr('src',simPath+'images/compound2.png');
  			$('#bg1,#labelBoard1,#labelBoard2,#labelBoard3,#labelBoard4,#conicalFlask,#icebathBottom,#conicalFlaskSoln,#icebathTop,#cylinder1,#cylinder2,#cylinder1Soln,#cylinder2Soln').css({display:'block'});
 			$('#result1').attr('src',simPath+'images/NaphtholDye.png'); 			
 			$('#conicalFlaskSolnImg').attr('src',simPath+'images/ConicalflaskYellowsoln.png');
 			$('#cylinder2SolnImg').css({backgroundColor:'#CCC'});
 			$('#cylinder1').css({top: '100px',left: '14px'});
 			$('#cylinder2').css({top: '100px',left: '138px'});
 			$('#icebathTop').css({top: '181px', left: '359px'});
 			$('#icebathBottom').css({top: '182px', left: '359px'});
 			$('#conicalFlask').css({top: '163px', left: '242px'});
 			$('#labelBoard1').css({top: '277px', left: '0px'}); 
 			$('#labelBoard2').css({top: '277px', left: '119px'}); 
 			$('#labelBoard3').css({top: '277px', left: '404px'}); 
 			$('#labelBoard4').css({top: '277px', left: '234px'});  			
 			$('.labelTextClass').css({top: '7px'}); 
 			$(".cylinderDivStyle").css({top:'126px',height:'34px'});
 			$("#cylinder2Soln").css({top:'100px',height:'60px'});
 			$('#conicalFlaskSolnImg').css({top:'-94px'});
			$('.conicalFlaskSolnBorderStyle').css({left:'3px',width:'82px'});	
	 		$('#conicalFlaskSoln').css({top:'106px',height:'15px'});
 			$('#labelBoardText1').html(concHCl+" (10ml)");
			$('#labelBoardText2').html(waterLabel+" (20ml)");
			$('#labelBoardText3').html(iceBathContainerLabel);
			$('#labelBoardText4').html(anilineLabel+" (4.5ml)");
			$('#cylinder1').draggable({disabled:false});
	 	    $('#cylinder1').css({cursor:'pointer'});
	 		$('#cylinder1').draggable({
				start:function(event, ui) {
					$('#cylinder1').css({zIndex:1});
				},
				stop:function(event, ui){
					if(this.offsetTop>=-100 && this.offsetTop<=250 && this.offsetLeft>=145 &&this.offsetLeft<=370){
						unbindClickIcons()
						$('#cylinder1').css({top:'45px',left:'170px'});	
	 					$('#cylinder1').draggable({disabled:true});
	 					$('#cylinder1').rotate(90);
	 					$('#cylinder1Soln').css({display:'none'});
	 					$('#whiteSolnline1Div').css({height:'26px',top: '158px',left: '287px'});		
	 					$('#whiteSolnline1Div').css({display:'block'});	
	 					$('#whiteSolnline1Div').animate({height:'121px'},function(){	 					
 							$('#whiteSolnline1Div').css({display:'none'});	 								 							
 							$('#cylinder1').rotate(0);
 							$('.conicalFlaskSolnBorderStyle').animate({width:'76px',left:'5px'});
 							$('#conicalFlaskSoln').animate({top:'102px',height:'18px'});
							$('#conicalFlaskSolnImg').animate({top:'-89px'},function(){
								$('#cylinder1').animate({top: '100px',left: '33px'},function(){
									$('#cylinder2').draggable({disabled:false});
							 	    $('#cylinder2').css({cursor:'pointer'});
							 		$('#cylinder2').draggable({
										start:function(event, ui) {
											$('#cylinder2').css({zIndex:1});
										},
										stop:function(event, ui){
											if(this.offsetTop>=-100 && this.offsetTop<=250 && this.offsetLeft>=145 &&this.offsetLeft<=370){
												$('#cylinder2').css({top:'45px',left:'170px'});	
							 					$('#cylinder2').draggable({disabled:true});
							 					$('#cylinder2').rotate(90);
							 					$('#cylinder2Soln').css({display:'none'});
							 					$('#whiteSolnline1Div').css({height:'26px',top: '158px',left: '287px'});		
							 					$('#whiteSolnline1Div').css({display:'block'});	
							 					$('#whiteSolnline1Div').animate({height:'121px'},function(){	 					
						 							$('#whiteSolnline1Div').css({display:'none'});
						 							$('#cylinder2').rotate(0);
						 							$('.conicalFlaskSolnBorderStyle').animate({width:'76px',left:'5px'});
						 							$('#conicalFlaskSoln').animate({top:'98px',height:'25px'});
													$('#conicalFlaskSolnImg').animate({top:'-86px'},function(){
														$('#cylinder2').animate({top: '100px',left: '138px'},function(){
															$('#conicalFlask').draggable({ disabled: false });
															$('#conicalFlask').css({cursor:'pointer'});
															$('#conicalFlask').draggable({
																start:function(event, ui) {
																	$('#conicalFlask').css({zIndex:1});
																},
																stop:function(event, ui) {
																	$('#conicalFlask').css({zIndex:0});
																	if(this.offsetTop>=0 && this.offsetTop<=250 && this.offsetLeft>=300 &&this.offsetLeft<=530){										
																		$('#conicalFlask').draggable({ disabled: true });
																		$('#conicalFlask').css({cursor:'default'});
																		$('#conicalFlask').css({top:'151px',left:'413px'});
																		$('#clockDiv').css({display:'block'});
																		$('#conicalMixture').css({display:'none'});										
																		$('#timeLabel').html(30+" "+minLabel);
																		clockInt = setInterval(needleRotate,20);																		
																	}else{
																		$('#conicalFlask').css({top: '163px', left: '242px'});
																	}  
																}
															});
														}); 
							 						}); 						
							 					});
											}else{
												$('#cylinder2').css({zIndex:0});
												$('#cylinder2').css({top: '100px',left: '138px'});	
											}
										}
									})    
								}); 
	 						}); 						
	 					});
					}else{
						$('#cylinder1').css({zIndex:0});
						$('#cylinder1').css({top: '100px',left: '14px'});	
					}
				}
			})    
  		}
		
		//Function to unbind all icons  
 	    function unbindClickIcons(){
 	    	$('#acetanilideClick,#dibenzalAcetoneClick,#pNitroacetanilideClick,#naphtholAnilinedyeClick').css({cursor:'default'})
 	    	$('#acetanilideClick').unbind('click');
	 	    $('#dibenzalAcetoneClick').unbind('click');
	 	    $('#pNitroacetanilideClick').unbind('click');
	 	    $('#naphtholAnilinedyeClick').unbind('click');
 	    }
 	    //Click the acetanilide icon 	
		$('#acetanilideClick').click(function() {
			selectOrganicCompund="acetanilide";
			helpIndex=0;
			$('#acetanilideIcon,#dibenzalAcetoneIcon,#pNitroacetanilideIcon,#naphtholAnilinedyeIcon').css({opacity: 1});
			$('#acetanilideIcon').css({opacity: 0.3});
			acetanilidePreparation();	
		});	
		//Click the dibenzalAcetone icon 	
		$('#dibenzalAcetoneClick').click(function() {
			selectOrganicCompund="dibenzalAcetone";
			helpIndex=1;
			$('#acetanilideIcon,#dibenzalAcetoneIcon,#pNitroacetanilideIcon,#naphtholAnilinedyeIcon').css({opacity: 1});
			$('#dibenzalAcetoneIcon').css({opacity: 0.3});
			dibenzalAcetonePreparation();
		});	
		//Click the pNitroacetanilide icon 	
		$('#pNitroacetanilideClick').click(function() {
			selectOrganicCompund="pNitroacetanilide";
			helpIndex=2;
			$('#acetanilideIcon,#dibenzalAcetoneIcon,#pNitroacetanilideIcon,#naphtholAnilinedyeIcon').css({opacity: 1});
			$('#pNitroacetanilideIcon').css({opacity: 0.3});
			pNitroacetanilidePreparation();
		});	
		//Click the naphtholAnilinedye  icon  	
		$('#naphtholAnilinedyeClick').click(function() {
			selectOrganicCompund="naphtholAnilinedye";
			helpIndex=3;
			$('#acetanilideIcon,#dibenzalAcetoneIcon,#pNitroacetanilideIcon,#naphtholAnilinedyeIcon').css({opacity: 1});
			$('#naphtholAnilinedyeIcon').css({opacity: 0.3});
			naphtholAnilinedyePreparation();
		});
  		//---------Drag dropper to drop sample solutions---------
	 	function dragCylinder(cylinderId,cylinderSolnId,cylSolnHorizontal,cylOriginalTop,cylOriginalLeft,cylTop,cylLeft,cylMinTop,cylMaxTop,cylMinLeft,cylMaxLeft){
	 	    $('#'+cylinderId).draggable({disabled:false});
	 	    $('#'+cylinderId).css({cursor:'pointer'});
	 		$('#'+cylinderId).draggable({
				start:function(event, ui) {
					$('#'+cylinderId).css({zIndex:1});
				},
				stop:function(event, ui){
					if(this.offsetTop>=cylMinTop && this.offsetTop<=cylMaxTop && this.offsetLeft>=cylMinLeft &&this.offsetLeft<=cylMaxLeft){
						unbindClickIcons();
						$('#'+cylinderId).css({top:cylTop+'px',left:cylLeft+'px'});	
	 					$('#'+cylinderId).draggable({disabled:true});
	 					$('#'+cylinderId).rotate(90);
	 					$('#'+cylinderSolnId).css({display:'none'});
	 					$('#'+cylSolnHorizontal).css({display:'block'});
	 					$('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});		
	 					$('#whiteSolnline1Div').css({display:'block'});	
	 					$('#whiteSolnline1Div').animate({height:'155px'},function(){
	 						$('#whiteSolnline2Div').css({display:'block'});
    						$('#whiteSolnline2Div').animate({height:'155px'},function(){
    							$('#'+cylSolnHorizontal).css({display:'none'});	
	 							$('#cylSoln1Horizontal,#whiteSolnline2Div,#whiteSolnline1Div').css({display:'none'});	 								 							
	 							increasrbFlaskSample('rbFlaskSoln','rbFlaskSolnImg','rbFlask1SolnBorderStyle');//increasing solution
	 							$('#'+cylinderId).rotate(0);
	 							setTimeout(function(){ 
									$('#'+cylinderId).animate({top:cylOriginalTop+'px',left:cylOriginalLeft+'px'},function(){
										$('#'+cylinderId).css({zIndex:0,cursor:'default'});
										dragToShake('rbFlask',81,383,25,332);	
										rbsolnDivTop=3,rbsolnTop=4,rbsolnborderWidth=2,rbsolnborderLeft=1;										
									});										
								}, 1000);
								
	 						});
	 					});
					}else{
						$('#'+cylinderId).css({zIndex:0});
						$('#'+cylinderId).css({top:cylOriginalTop+'px',left:cylOriginalLeft+'px'});		
					}
				}
			})
	 	}
	 	//Function to clear all events
	 	function clearIntervalFun(){
	 		clearInterval(rotateInt);
			clearInterval(flame);
			clearInterval(stirInt);
			clearInterval(clockInt);
	 	}
	 	//--------Function to click next button-----------
		$('#nextBtnDiv').click(function(){
			clearIntervalFun();
			if(helpclickFlag==true){
	   			trip.stop(); 
	   		}
	   		if(alerttripFlag==true){
				alerttrip.stop();
			}	
			$('#nextBtnDiv').css({display:'none'});
			nextClick++;
			if(nextClick==1){//Second step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#thermoCoal,#cylinder1,#cylinder2,#bg1,#labelBoard1,#labelBoard2,#labelBoard3,#rbFlask').css({display:'none'});
						$('#bg2,#equipment,#burnerOnDiv,#burnerOff,#burnerhelpDiv').css({display:'block'});
						clearInterval(flame);
						$('#burnerhelpDiv').css({top:'288px',left:'173px'});						
						$('#burnerOn,#clockDiv').css({display:'none'});
						$('#burnerOff').css({display:'block'});
						$('#burnerOnDiv').click(function(){	
							$('#burnerOn').css({display:'block'});
							$('#burnerOnDiv,#burnerOff').css({display:'none'});
							$('#clockDiv').css({display:'block'});
							$('#timeLabel').html(10+" "+minLabel);
							flame= setInterval(flameFn,20);
						})
					break;
					case "dibenzalAcetone"://Dibenzal acetone
						$('#bigBeaker3,#cork,#labelBoard2').css({display:'none'});
						$('#waterBottle,#buchnerFunnel').css({display:'block'});
						$('#conicalFlask').css({top: '166px',left: '22px'});  
						$('#labelBoard1').css({left:'10px'});	
						$('#labelBoard2').css({left:'185px'});
						$('#labelBoard3').css({left:'440px'});
						$('#labelBoardText1').css({top:'0px'})
						$('#labelBoardText1').html(pptDibenzalAcetone);
						$('#labelBoardText2').html(waterBottle);
						$('#labelBoardText3').html(buchnerFunnel);
						$('#conicalFlask').draggable({ disabled: false });
						$('#conicalFlask').css({cursor:'pointer'});
						$('#conicalFlask').draggable({
							start:function(event, ui) {
								$('#conicalFlask').css({zIndex:1});
							},
							stop:function(event, ui) {
								$('#conicalFlask').css({zIndex:0});
								if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=150 &&this.offsetLeft<=370){
									$('#conicalFlask').css({top:'40px',left:'344px'});
									$('#conicalFlask').rotate(-90);
									$('#conicalMixture,#conicalFlaskSoln').css({display:'none'});
									$('#conicalFlask').draggable({ disabled: true });
									$('#conicalFlask').css({cursor:'default'});
									$('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
									$('#whiteSolnline1Div').css({display:'block',top: '212px', left: '325px'});
 								    $('#whiteSolnline1Div').animate({height: '64px'},function(){
 								    	$('#buchnerFunnelSoln,.buchnerFunnelSolnDivStyle').css({display:'block'});
 								   		$('#whiteSolnline1Div').css({display:'none'});
 								   		$('#conicalFlask').rotate(0); 
 								   		$('.buchnerFunnelSolnDivStyle').animate({ top: '142px', height: '33px'});
 								   		$('.buchnerFunnelSolnStyle').animate({ top: '-47px'});
 								   		$('.buchnerFunnelSolnBorderStyle').animate({ width: '50px',left: '8px'});
 								   		setTimeout(function(){
 								   			$('#conicalFlask').animate({top:'166px',left:'22px'},function(){
	 								   			$('#waterBottle').draggable({ disabled: false });
	 								   			$('#waterBottle').css({cursor:'pointer'});
	 								   			$('#waterBottle').draggable({
	 								   				start:function(event, ui) {
														$('#waterBottle').css({zIndex:1});
													},
													stop:function(event, ui) {
														if(this.offsetTop>=0 && this.offsetTop<=145 && this.offsetLeft>=180 &&this.offsetLeft<=300){														
															$('#waterBottle').draggable({ disabled: true });
	 								   						$('#waterBottle').css({cursor:'default'});
															$('#waterBottle').css({top:'73px',left:'192px'});
															$('#waterSolnlineDiv').css({display:'block'});
															$('#waterSolnlineDiv').animate({height:'26px'},function(){
																$('#waterSolnlineDiv').css({display:'none'});
																$('.buchnerFunnelSolnDivStyle').animate({ top: '130px', height: '45px'});
	 								   							$('.buchnerFunnelSolnStyle').animate({ top: '-37px'});
	 								   							$('.buchnerFunnelSolnBorderStyle').animate({ width: '42px',left: '12px'});
	 								   							$('#waterBottle').animate({top:'69px',left:'151px'},function(){
	 								   								$('#waterBottle').css({zIndex:0});
	 								   								$('#bigBtnLabel').html(recrystallizationDibenzalAcetone);
																	$('#bigBtnDiv').css({display:'block',left:'317px',top:'5px'});
	 								   							});
															});
														}else{
															$('#waterBottle').css({zIndex:0});
															$('#waterBottle').css({top:'69px',left:'151px'});
														}
													}
	 								   			});
 								   			});					   			
 								   			
 								   		},100)
 								   	});
								}else{
									$('#conicalFlask').css({top:'174px',left:'14px'});
								}
							}
						});
					break;					
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#glassRod3').css({zIndex:0});		
						$('#conicalFlask').css({zIndex:0});
						$('#labelBoardText1').css({top:'7px'});
						$('#labelBoardText1').html(freezingMixture);
						$('#labelBoardText3').html(crushedIce);
						$('#cylinder1,#bottle1,#dropper1,#bigBeaker3,#labelBoard2').css({display:'none'});
						$('#beaker3,#icebathTop,#icebathBottom,#dropperTwo,#testtubeAImg,#testtubeASoln,#dropperStand,#iceCubes').css({display:'block'});
						$('#conicalFlask').css({left:'59px'});
						$('#glassRod3').css({left:'70px'});
						$('#icebathBottom,#icebathTop').css({left:'198px'});
						$('#labelBoard1').css({left:'48px'});	
						$('#labelBoard2').css({left:'262px'});
						$('#labelBoard3').css({left:'446px'});
						$('#icebathTop').css({top:'180px',left:'13px'});
						$('#icebathBottom').css({top:'180px',left:'12px'});
						$('#glassRod3').rotate(-10);
						$('#glassRod3').css({cursor:'pointer'});
						alertPosition='n';
						alertInference=acetanilideconcH2so4;	
						alerttrip = new Trip([
						{
							sel : $('#'+alertDiv),
							position : alertPosition,
							content : alertInference,
							expose : false,
							delay : 6000
						}
						])						
					    setTimeout(function() {
						    alerttripFlag=true;
							alerttrip.start(); 
							window.alerttrip = alerttrip;   				
						},1000) 					
						setTimeout(function() {
							alerttripFlag2=true;
							alerttrip2.start(); 
							window.alerttrip2 = alerttrip2; 
						},4000);				
						
						$('#glassRod3').click(function(){
						 	$('#glassRod3').unbind('click');
							stirInt = setInterval( function() { stirGlassRod('glassRod3',505); }, 20 );	
						})
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#cylinder1,#cylinder2,#conicalFlask,#labelBoard4').css({display:'none'});
						$('#labelBoardText2').css({top:'0px'});
						$('#labelBoardText1').html(sodiumNitriteLabel+" (4g)");
						$('#labelBoardText2').html(distWater+" (20ml)");
						$('#labelBoardText3').html(iceBathContainerLabel);
						$('#beaker3Mixture').css({top:'93px'});
						$('#beaker3Mixture').attr('src',simPath+'images/salt.png');
						preparationOfSolution();											
					break;
				}
			}else if(nextClick==2){//Third step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#burnerFlame').hide();
						$('#bg1').css({display:'block'});
						$('#bg2,#equipment,#burnerOnDiv,#burnerOff,#burnerOn').css({display:'none'});
						$('#bigBeaker3').css({top: '179px',left: '103px'});
 		    			$('#glassRod3').css({top:'111px',left:'505px'}); 
 		   				$('#glassRod3').rotate(0);
						$('#thermoCoal3,#rbFlask3,#glassRod3,#beaker3,#beakerBig,#Stand3,#labelBoard1,#labelBoard2,#labelBoard3,#bigBeaker3,#stand3,#beaker3Soln').css({display:'block'});
						$('#labelBoard1,#labelBoard2,#labelBoard3').css({top:'277px'});	
						$('#labelBoard1').css({left:'145px'});	
						$('#labelBoard2').css({left:'323px'});
						$('#labelBoard3').css({left:'446px'});
						$('#labelBoardText1').css({top:'7px'});
						$('#labelBoardText1').html(waterLabel);
						$('#labelBoardText2').html(mixtureLabel);
						$('#labelBoardText3').html(iceColdWater+" (200 ml)");
						$('#beaker3').css({left:'452px'});
						$('#rbFlask3').css({cursor:'pointer'});
						$('#rbFlask3').draggable({
							start:function(event, ui) {
								$('#rbFlask3').css({zIndex:1});
							},
							stop:function(event, ui){
								$('#rbFlask3').css({zIndex:0});
								if(this.offsetTop>=0 && this.offsetTop<=270 && this.offsetLeft>=0 &&this.offsetLeft<=270){
 								   $('#rbFlask3').css({left: '175px', top: '114px'}); 								   
 								   $('#clockDiv').css({display:'block'});
 								   $('#timeLabel').html(10+" "+minLabel);
								   clockInt = setInterval(needleRotate,20);
 								}else{
 								   $('#rbFlask3').css({left: '331px', top: '100px'});
 								}
							} 
						});
					break;
					case "dibenzalAcetone"://Dibenzal acetone
						$('#bg1,#beaker3,#conicalFlask,#beaker,#labelBoard1,#labelBoard2,#labelBoard3,#buchnerFunnel').css({display:'none'});
						$('#bgZoom,#resultZoom,#labelBoardZoom,#inference').css({display:'block'});
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#icebathTop,#icebathBottom,#dropperTwo,#testtubeAImg,#testtubeASoln,#dropperStand,#glassRod3,#conicalFlask').css({display:'none'});
						$('#labelBoard2').css({display:'block'});
						$('#labelBoardText2').html(buchnerFunnel);
						$('#labelBoardText3').css({top:'0px'});
						$('#labelBoardText3').html(pptNitroacetanilide);
						filterBeakerSoln();	//Filter solution
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye	
						$('#beaker3Mixture').attr('src',simPath+'images/Naphthol.png');
						alertDiv="beaker3";
						alertPosition='n';		
						alertDiv2="conicalFlask";
						alertPosition2='n';
						alerttrip = new Trip([
						{
							sel : $('#'+alertDiv),
							position : alertPosition,
							content : sodiumNitrateSoln,
							expose : false,
							delay : 6000
						}
						])			
						alerttrip2 = new Trip([
						{
							sel : $('#'+alertDiv2),
							position : alertPosition2,
							content : anilineWater,
							expose : false,
							delay : 6000
						}
						])					
					    setTimeout(function() {
						    alerttripFlag=true;
							alerttrip.start(); 
							window.alerttrip = alerttrip;   				
						},1000) 					
						setTimeout(function() {
							alerttripFlag2=true;
							alerttrip2.start(); 
							window.alerttrip2 = alerttrip2; 
						},4000);					
						addSolution();
					break;
				}
			}else if(nextClick==3){//Fourth step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide						
						$('#labelBoardText3').css({top:'0px'});
						$('#labelBoardText2').html(buchnerFunnel);
						$('#labelBoardText3').html(acetanilidePre);
						filterBeakerSoln();//Filter solution				
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#hot_machine').css({display:'none'});
						$('#labelBoard2').css({display:'block'});
						$('#labelBoardText2').css({top:'7px'});
						$('#labelBoardText3').html(hotSolnNitroAcetanilide);
						$('#labelBoardText2').html(iceBathContainerLabel);
						recrystalizationFilterFunction();
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#icebathTop2,#icebathBottom2,#conicalFlask,#labelBoard4').css({display:'none'});
						$('#labelBoardText2').css({top:'4px'});  
						$('#labelBoardText1').html(naphthol2+" (7g)");
						$('#labelBoardText2').html(sodiumHydroxide10+" (60ml)");
						$('#labelBoardText3').html(iceBathContainerLabel);
						preparationOfSolution();											
					break;
				}
			}else if(nextClick==4){//Fifth step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#beaker3SolnImg').animate({opacity:0.3});						
						$('#labelBoardText2').css({top:'4px'}); 
						$('#labelBoardText2').html(aceticacidWater+" (50 ml)");
						$('#nextBtn').attr('src',simPath+'images/nextbtn.png');
						$('#nextLabel').html(nextLabelText);	
						$('#nextBtnDiv').css({left:'458px'}); 
						$('#nextLabel').css({top:'9px',left:'-8px',width: '96px'});
						$('#beaker3Mixture').css({top:'93px'});
						$('#beaker3Mixture').attr('src',simPath+'images/salt.png');
						recrystalizationHotFunction();
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#labelBoardText3').html(crystalsNitroAcetanilide);
						$('#conicalMixture').attr('src',simPath+'images/compound1.png');
						$('#conicalMixture').css({opacity:1});
						recrystalizationReFilterFunction();	
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye	
						alertDiv="beaker3";
						alertPosition='n';		
						alertDiv2="conicalFlask";
						alertPosition2='n';
						alerttrip = new Trip([
						{
							sel : $('#'+alertDiv),
							position : alertPosition,
							content : alkaline2Naphthol,
							expose : false,
							delay : 6000
						}
						])			
						alerttrip2 = new Trip([
						{
							sel : $('#'+alertDiv2),
							position : alertPosition2,
							content : anilinHcl,
							expose : false,
							delay : 6000
						}
						])					
					  					
						setTimeout(function() {
							alerttripFlag2=true;
							alerttrip2.start(); 
							window.alerttrip2 = alerttrip2; 
						},1000);
						setTimeout(function() {
						    alerttripFlag=true;
							alerttrip.start(); 
							window.alerttrip = alerttrip;   				
						},4000) 

						prepare2NaptholAniline();
					break;
				}
			}else if(nextClick==5){//Sixth step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#labelBoardText2').css({top:'7px'}); 
						$('#labelBoardText3').html(hotSolnAcetanilide);
						$('#labelBoardText2').html(iceBathContainerLabel);
						recrystalizationFilterFunction();						
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						displayZoomResult();	
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						preparationOfCrystalsOf2Naphthol();
					break;				
					
				}
			}else if(nextClick==6){//Seventh step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#labelBoardText3').html(crystalsAcetanilide);
						$('#conicalMixture').attr('src',simPath+'images/compound1.png');
						recrystalizationReFilterFunction();
					break;
					case "naphtholAnilinedye"://Acetanilide					
						$('#labelBoard1').css({display:'none'});
						$('#labelBoardText2').css({top:'7px'});
						$('#labelBoardText2').html(iceBathContainerLabel);
						$('#labelBoardText3').css({top:'0px'});
						$('.labelTextClass').css({fontSize:'12px'});
						$('#labelBoardText3').html(natholHot);
						$('#conicalMixture').attr('src',simPath+'images/compound3.png');
						$('#conicalFlaskSolnImg').attr('src',simPath+'images/ConicalflaskRedsolution.png');
						recrystalizationFilterFunction();						
					break;
					
				
				}
			}else if(nextClick==7){//Eighth step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						displayZoomResult();
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye	
						$('#labelBoardText3').css({top:'0px'});
						$('#labelBoardText3').html(natholCrystal);
						$('#resultSample').attr('src',simPath+'images/compound3.png');
						$('#spatulapowder').attr('src',simPath+'images/redSpatula.png');
						$('#conicalMixture').attr('src',simPath+'images/compound3.png');	
						recrystalizationReFilterFunction();						
					break;
					
				}
			}else if(nextClick==8){//Eighth step of Acetanilide,Dibenzal acetone,p-Nitroacetanilide and 2-Naphthol aniline dye
				switch (selectOrganicCompund){
					case "naphtholAnilinedye"://2-Naphthol aniline dye			
						displayZoomResult();				
					break;
				}
			}
		})
		function preparationOfSolution(){
			$('#beaker3,#beaker,#glassRodInBeaker3,#beaker3Mixture,#labelBoard1,#labelBoard2,#labelBoard3,#beakerSoln,#beakerSoln').css({display:'block'});	
			$('#icebathTop').css({top:'181px',left:'359px'}); 	
  			$('#icebathBottom').css({top:'182px',left:'359px'});	
			$('#beakerSoln').css({top:'99px',height:'19px'});
			$('#beakerSolnImg').css({top:'-149px'});
			$('#beaker3').css({top: '172px',left:'31px'});
			$('#beaker').css({top:'172px',left:'183px'});
			$('#labelBoard1').css({left:'25px'});
			$('#labelBoard2').css({left:'182px'});
			$('#labelBoard3').css({left:'432px'});
			$('#beaker3Mixture').css({opacity:1});			
			$('#glassRod3').css({top:'99px',left:'19px'});
			$('#beaker').draggable({ disabled: false });
			$('#beaker').css({cursor:'pointer'});
			$('#beaker').draggable({
				start:function(event, ui) {
					$('#beaker').css({zIndex:1});
				},
				stop:function(event, ui){
					if(this.offsetTop>=0 && this.offsetTop<=215 && this.offsetLeft>=0 &&this.offsetLeft<=260){
						 $('#beaker').draggable({ disabled: true });
						 $('#beaker').css({cursor:'default'});
						 $('#beaker').css({top:'50px',left:'90px'});
						 $('#beaker').rotate(-90);																									
						 $('#beakerSoln').css({display:'none'});
						 $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
						 $('#whiteSolnline1Div').css({display:'block',top: '161px', left: '84px'});
						 $('#whiteSolnline1Div').animate({height: '109px'},function(){
						   		$('#whiteSolnline1Div').css({display:'none'});
						   		$('#beaker3Soln').css({display:'block'});
						   		$('#beaker3Soln').css({top:'99px',height:'9px'});
						   		$('#beaker3SolnImg').css({top:'-146px'});
						   		$('#beaker3Soln').animate({top:'88px',height:'22px'});
						   		$('#beaker3SolnImg').animate({top:'-136px'},function(){
						   			$('#beaker').rotate(0);	
						   			setTimeout(function(){ 
						   				$('#beaker').css({zIndex:0});
										$('#beaker').animate({top:'172px',left:'183px'},function(){
											$('#glassRodInBeaker3').animate({left:'17px'},function(){
												stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
											});														
										})
									},1000);
																		   			
						   		});									   		
						   	});
					}else{
						$('#beaker').css({zIndex:0});
						$('#beaker').css({top:'172px',left:'183px'});
					}
				}
			});
		}
		//Function to prepare crystals of 2-Naphthol aniline 
		function prepare2NaptholAniline(){
			$('#icebathTop,#icebathBottom').css({left:'25px'});
			$('#icebathTop2,#icebathBottom2').css({left:'330px'});
			$('#icebathTop,#icebathTop2').css({top:'181px'});
			$('#labelBoardText1').html(iceBathContainerLabel);
			$('#beaker3').css({top:'150px',left:'383px'});
			$('#beaker3SolnImg').css({top: '-107px'});
			$('#beaker3Soln').css({top: '60px', height: '52px'});  
			$('#conicalFlask').css({top:'151px',left:'90px'});
			$('#conicalFlaskSoln').css({height:'31px',top:'92px'}); 
			$('#conicalFlaskSolnImg').css({top:'-81px'});   
			$('.conicalFlaskSolnBorderStyle').css({left: '9px', width: '71px'}); 
			$('#icebathTop2,#icebathBottom2,#conicalFlask,#glassRodInBeaker3').css({display:'block'});
			$('#beaker,#labelBoard2').css({display:'none'});
			$('#conicalFlask').draggable({ disabled: false });
			$('#conicalFlask').css({cursor:'pointer'});
			$('#conicalFlask').draggable({
				start:function(event, ui) {
					$('#conicalFlask').css({zIndex:1});
				},
				stop:function(event, ui){
					$('#conicalFlask').css({zIndex:0});
					if(this.offsetTop>=0 && this.offsetTop<=250 && this.offsetLeft>=200 &&this.offsetLeft<=525){
						$('#conicalFlask').css({top:'70px',left:'314px'});
						$('#conicalFlask').draggable({ disabled: true });
						$('#conicalFlask').css({cursor:'default'});	
						$('#conicalFlask').rotate(90); 	
						$('#conicalFlaskSoln').css({display:'none'});
						$('#whiteSolnline1Div').css({height: '16px',top: '145px',left: '415px',display:'block'});
						$('#whiteSolnline1Div').animate({height: '98px'},function(){
							$('#glassRodInBeaker3').animate({left:'17px'},function(){
								stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
							});	
							$('#whiteSolnline1Div').css({display:'none'});										
							$('#conicalFlask').rotate(0); 											
							setTimeout(function(){
								$('#conicalFlask').css({zIndex:0}); 
								$('#conicalFlask').animate({top:'153px',left:'237px'});	
							});							
						});
					}else{
						$('#conicalFlask').css({top:'151px',left:'90px'});
					}
				}
			});
		}
		function preparationOfCrystalsOf2Naphthol(){
			$('#icebathTop2,#icebathBottom2').css({left:'0px'});
			$('#beaker3').css({left:'58px'});
			$('.beaker3SolnStyle').css({opacity:1});
			$('#beaker3SolnImg').css({backgroundColor:'#9b0404'});
			$('#labelBoardText1').html(freezingMixture);
			$('#labelBoardText3').html(buchnerFunnel);
			$('#icebathTop,#icebathBottom,#conicalFlask').css({display:'none'});
			$('#buchnerFunnel,#beaker3Mixture').css({display:'block'});
			$('#beaker3Mixture').css({opacity:1});
			$('#beaker3Mixture').attr('src',simPath+'images/compound3.png');
			$('#glassRodInBeaker3').css({cursor:'pointer'});
			$('#buchnerFunnel').css({left:'335px'});
			$('#glassRodInBeaker3').click(function(){
			 	$('#glassRodInBeaker3').unbind('click');
				$('#glassRodInBeaker3').animate({left:'17px'},function(){
					$('#clockDiv').css({display:'block'});										
					$('#timeLabel').html(30+" "+minLabel);
					clockInt = setInterval(needleRotate,20);
					stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
				});	
			})
		}
		//Function to add solution 
		function addSolution(){
			$('#icebathTop,#icebathBottom').css({left:'25px'});
			$('#icebathTop2,#icebathBottom2').css({left:'330px'});
			$('#icebathTop,#icebathTop2').css({top:'181px'});
			$('#labelBoardText1').html(iceBathContainerLabel);
			$('#beaker3').css({top:'150px',left:'83px'});
			$('#conicalFlask').css({left:'373px'});
			$('#conicalFlaskSoln').css({height:'31px',top:'92px'}); 
			$('#conicalFlaskSolnImg').css({top:'-81px'});   
			$('.conicalFlaskSolnBorderStyle').css({left: '9px', width: '71px'}); 
			$('#icebathTop2,#icebathBottom2,#conicalFlask').css({display:'block'});
			$('#beaker,#labelBoard2,#glassRodInBeaker3').css({display:'none'});
			$('#beaker3').draggable({ disabled: false });
			$('#beaker3').css({cursor:'pointer'});
			$('#beaker3').draggable({
				start:function(event, ui) {
					$('#beaker3').css({zIndex:1});
				},
				stop:function(event, ui){
					$('#beaker3').css({zIndex:0});
					if(this.offsetTop>=0 && this.offsetTop<=250 && this.offsetLeft>=200 &&this.offsetLeft<=525){
						$('#beaker3').css({top:'46px',left:'314px'});
						$('#beaker3').draggable({ disabled: true });
						$('#beaker3').css({cursor:'default'});	
						$('#beaker3').rotate(90); 
						$('#beaker3Soln').css({display:'none'});	
						$('#whiteSolnline1Div').css({height: '16px',top: '145px',left: '415px',display:'block'});
						$('#whiteSolnline1Div').animate({height: '98px'},function(){
							$('#whiteSolnline1Div').css({display:'none'});										
							$('#beaker3').rotate(0); 											
							setTimeout(function(){
								$('#beaker3').css({zIndex:0}); 
								$('#beaker3').animate({top:'150px',left:'230px'},function(){
									$('#nextBtnDiv').css({display:'block'});
								});												
							});								
						});
					}else{
						$('#beaker3').css({top:'150px',left:'83px'});
					}
				}
			});
		}
		//Function to display zoomed view of result
		function displayZoomResult(){
			$('#bgZoom,#resultZoom,#labelBoardZoom,#inference').css({display:'block'});
			$('#conicalFlask').css({top:'174px',left:'14px'});
			$('#bg1,#conicalFlask,#filterPaperDrag,#filterPaperStill,#buchnerFunnel,#labelBoard1,#labelBoard2,#labelBoard3,#spatulaDiv,#resultSample').css({display:'none'});
			$('#spatulaDiv').rotate(27);
			$('#labelBoardText2').html(buchnerFunnel);
			$('#beaker3').css({left:'250px'});
			$('#labelBoard3').css({left:'4px'});
			$('#labelBoard2').css({left:'360px'});
			$('#labelBoard1').css({left:'191px'});
		}
		//Function to third recrystalization process
		function recrystalizationReFilterFunction(){			
			$('#bg1,#conicalFlask,#filterPaperStill,#buchnerFunnel,#labelBoard1,#spatulaDiv,#conicalMixture').css({display:'block'});	
			$('.buchnerFunnelSolnDivStyle').css({ top: '169px', height: '2px'});
			$('.buchnerFunnelSolnStyle').css({ top: '-76px'});
			$('.buchnerFunnelSolnBorderStyle').css({ width: '65px',left: '1px'});
			$('#buchnerFunnel').css({ left: '289px'});
			$('#conicalFlask').css({top:'164px',left:'14px'});
			$('#beaker3,#filter,#icebathTop,#icebathBottom,.buchnerFunnelSolnDivStyle').css({display:'none'});
			$('#spatulaDiv').rotate(27);
			$('#labelBoardText1').html(filterPaperLabel);
			$('#labelBoardText2').html(buchnerFunnel);
			$('#beaker3').css({left:'250px'});
			$('#labelBoard3').css({left:'4px'});
			$('#labelBoard2').css({left:'449px'});
			$('#labelBoard1').css({left:'191px'});
			$('#conicalFlask').draggable({ disabled: false });
			$('#conicalFlask').css({cursor:'pointer'});
			$('#conicalFlask').draggable({
				start:function(event, ui) {
					$('#conicalFlask').css({zIndex:1});
				},
				stop:function(event, ui) {
					$('#conicalFlask').css({zIndex:0});
					if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=150 &&this.offsetLeft<=370){
						$('#conicalFlask').css({top:'40px',left:'344px'});
						$('#conicalFlask').rotate(-90);
						$('#conicalMixture,#conicalFlaskSoln').css({display:'none'});
						$('#conicalFlask').draggable({ disabled: true });
						$('#conicalFlask').css({cursor:'default'});
						$('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
						$('#whiteSolnline1Div').css({display:'block',top: '212px', left: '325px'});
						    $('#whiteSolnline1Div').animate({height: '64px'},function(){
						    	$('#buchnerFunnelSoln,.buchnerFunnelSolnDivStyle').css({display:'block'});
						   		$('#whiteSolnline1Div').css({display:'none'});
						   		$('#conicalFlask').rotate(0); 
						   		$('.buchnerFunnelSolnDivStyle').animate({ top: '142px', height: '33px'});
						   		$('.buchnerFunnelSolnStyle').animate({ top: '-47px'});
						   		$('.buchnerFunnelSolnBorderStyle').animate({ width: '50px',left: '8px'});
						   		setTimeout(function(){
						   			$('#conicalFlask').animate({top:'164px',left:'14px'});
						   			$('#spatulaDiv').click(function(){	
						   				$('#spatulaDiv').css({top:'214px',left:'163px'});
						   				$('#spatulaDiv').rotate(0);
						   				$('#spatulaDiv').unbind('click');
						   				$('#spatulaDiv').draggable({ disabled: false });
										$('#spatulaDiv').css({cursor:'pointer'});
						   				$('#spatulaDiv').draggable({													
										start:function(event, ui) {
											$('#spatulaDiv').css({zIndex:1});
										},
										stop:function(event, ui) {
											$('#spatulaDiv').css({zIndex:0});														
											if(dragSpatulaCount==0){
												if(this.offsetTop>=0 && this.offsetTop<=150 && this.offsetLeft>=245 &&this.offsetLeft<=370){
													$('#spatulaDiv').css({top:'77px',left:'315px'});
													$('#spatulapowder').css({display:'block',opacity:'0.4'});	
													dragSpatulaCount=1;						
												}else{
													$('#spatulaDiv').css({top:'214px',left:'163px'});
												}
											}else{
												if(this.offsetTop>=160 && this.offsetTop<=300 && this.offsetLeft>=60 &&this.offsetLeft<=250){
													$('#spatulaDiv').css({top:'214px',left:'163px'});
													$('#spatulapowder').css({display:'none'});
													$('#resultSample').css({display:'block'});	
													$('#spatulaDiv').draggable({ disabled: true });
													$('#spatulaDiv').css({cursor:'default'});	
													$('#spatulaDiv').animate({top:'77px',left:'315px'},function(){
														$('#nextBtnDiv').css({display:'block'});	
													});
												}else{
													$('#spatulaDiv').css({top:'214px',left:'163px'});
												}
											}
										}
									})
						   		})						   			
						   	},100)
						 });
					}else{
						$('#conicalFlask').css({zIndex:0});
						$('#conicalFlask').css({top:'164px',left:'14px'});
					}
				}
			});
		}		
		//Function to second recrystalization process
		function recrystalizationFilterFunction(){
			$('#bg1,#beaker3,#filter,#conicalFlask,#icebathTop,#icebathBottom').css({display:'block'});
			$('#burnerWithStandContainer,#beaker,#glassRodInBeaker3,#conicalFlaskSoln,#burnerFlame').css({display:'none'});			
			$('#icebathTop').css({left:'353px'});
			$('#icebathBottom').css({left:'354px'});
			$('#beaker3').css({left:'250px',top:'170px'});
			$('#conicalFlask').css({left:'111px',top:'146px'});
			$('#labelBoard3').css({left:'250px'});
			$('#labelBoard2').css({left:'423px'});
			$('#conicalFlaskSoln').css({top:'114px',height:'5px'});
			$('#conicalFlaskSolnImg').css({top:'-102px'});
			$('#conicalFlask').draggable({ disabled: true });
			$('#conicalFlask').css({cursor:'default'});
			$('#beaker3').draggable({ disabled: false });
			$('#beaker3').css({cursor:'pointer'});
			$('#beaker3').draggable({
				start:function(event, ui) {
					$('#beaker3').css({zIndex:1});
				},
				stop:function(event, ui){								
					if(this.offsetTop>=0 && this.offsetTop<=140 && this.offsetLeft>=90 &&this.offsetLeft<=230){
						$('#beaker3').draggable({ disabled: true });
						$('#beaker3').css({cursor:'default'});
						$('#beaker3').css({top:'-10px',left:'160px'});
						$('#beaker3').rotate(-90);
						$('#beaker3Soln').css({display:'none'});
						$('#conicalFlaskSoln').css({display:'block'});
						$('#conicalFlaskSoln').animate({top:'106px',height:'15px'});
						$('#conicalFlaskSolnImg').animate({top:'-94px'},function(){
							$('#beaker3').rotate(0);
							setTimeout(function(){
								$('#beaker3').css({zIndex:0}); 
								$('#beaker3').animate({top:'170px',left:'250px'});
								$('#conicalFlask').draggable({ disabled: false });
								$('#conicalFlask').css({cursor:'pointer'});
								$('#conicalFlask').draggable({
									start:function(event, ui) {
										$('#conicalFlask').css({zIndex:1});
									},
									stop:function(event, ui) {
										$('#conicalFlask').css({zIndex:0});
										if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=300 &&this.offsetLeft<=530){
											$('#clockDiv').css({display:'block'});
						   					$('#timeLabel').html(10+" "+minLabel);
					   						clockInt = setInterval(needleRotate,20);
											$('#conicalFlask').css({top:'114px',left:'412px'});
											$('#conicalFlask').draggable({ disabled: true });
											$('#conicalFlask').css({cursor:'default'});
										}else{
											$('#conicalFlask').css({top:'146px',left:'111px'});
										}
									}
								});
							},1000);
						});									
					}else{
						$('#beaker3').css({top:'170px',left:'250px'});
					}
				}
			});
		}
		//Function to first recrystalization process
		function recrystalizationHotFunction(){
			$('#bg1,#beaker3,#beaker,#burnerhelpDiv,#burnerWithStandContainer,#beaker3Mixture,#glassRodInBeaker3,#beaker3Mixture,#beakerSoln,#labelBoard2').css({display:'block'});
			$('#buchnerFunnel,#waterBottle,#beaker3Powder,#beaker3Soln').css({display:'none'});			
			$('#beaker3SolnImg').css({backgroundColor:'#CCC'});
			$('#beakerSoln').css({top:'99px',height:'19px'});
			$('#burnerhelpDiv').css({top:'252px',left:'456px'});
			$('#beakerSolnImg').css({top:'-149px'});
			$('#beaker3').css({top:'172px',left:'31px'});
			$('#beaker').css({top:'172px',left:'183px'});
			$('#labelBoard3').css({left:'22px'});
			$('#labelBoard2').css({left:'180px'});
			$('#labelBoard3').css({left:'26px'});
			$('#glassRod3').css({top:'99px',left:'19px'});
			$('#beaker3Mixture').css({opacity:1});
			$('#beaker').draggable({ disabled: false });
			$('#beaker').css({cursor:'pointer'});
			switch (selectOrganicCompund){					
				case "pNitroacetanilide"://p-Nitroacetanilide
					$('#burnerWithStandContainer').css({display:'none'});
					$('#hot_machine').css({display:'block'});
					$( "#switchOff" ).bind( "click", function() {
						$( "#switchOff" ).unbind( "click");								
						$('#switchOff,#lightOff').css({display:'none'});
						$('#switchOn,#lightOn,#clockDiv').css({display:'block'});
					})
				break;
			}
			$('#beaker').draggable({
				start:function(event, ui) {
					$('#beaker').css({zIndex:1});
				},
				stop:function(event, ui){
					if(this.offsetTop>=0 && this.offsetTop<=215 && this.offsetLeft>=0 &&this.offsetLeft<=260){
						 $('#beaker').draggable({ disabled: true });
						 $('#beaker').css({cursor:'default'});
						 $('#beaker').css({top:'50px',left:'90px'});
						 $('#beaker').rotate(-90);
						 $('#beakerSoln').css({display:'none'});
						 $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
						 $('#whiteSolnline1Div').css({display:'block',top: '161px', left: '84px'});
						 $('#whiteSolnline1Div').animate({height: '109px'},function(){
						   		$('#whiteSolnline1Div').css({display:'none'});
						   		$('#beaker3Soln').css({display:'block'});
						   		$('#beaker3Soln').css({top:'99px',height:'9px'});
						   		$('#beaker3SolnImg').css({top:'-146px'});
						   		$('#beaker3Soln').animate({top:'88px',height:'22px'});
						   		$('#beaker3SolnImg').animate({top:'-136px'},function(){
						   			$('#beaker').rotate(0);
						   			setTimeout(function(){ 
						   				$('#beaker').css({zIndex:0});
										$('#beaker').animate({top:'172px',left:'183px'},function(){
										$('#beaker3').draggable({ disabled: false });
										$('#beaker3').css({cursor:'pointer'});
										$('#beaker3').draggable({
											start:function(event, ui) {
												$('#beaker3').css({zIndex:1});
											},
											stop:function(event, ui){
												$('#beaker3').css({zIndex:0});
												if(this.offsetTop>=0 && this.offsetTop<=200 && this.offsetLeft>=330 &&this.offsetLeft<=465){
													$('#beaker3').draggable({ disabled: true });
													$('#beaker3').css({cursor:'default'});
													$('#burnerWithStandContainerDiv').css({display:'block'});
													switch (selectOrganicCompund){					
														case "pNitroacetanilide"://p-Nitroacetanilide
															$('#beaker3').css({top:'72px',left:'412px'});
															$('#burnerWithStandContainer').css({display:'none'});
															$('#hot_machine').css({display:'block'});
															$( "#switchOff" ).bind( "click", function() {
																$("#switchOff" ).unbind( "click");																						
																$('#switchOff,#lightOff,#clockDiv').css({display:'none'});
																$('#switchOn,#lightOn').css({display:'block'});
																$('#glassRodInBeaker3').animate({left:'17px'},function(){
																	stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
																});	
															})
														break;
														default:
															$('#beaker3').css({top:'44px',left:'393px'});
															$('#burnerWithStandContainerDiv').click(function(){	
																$('#burnerWithStandOn').css({display:'block'});
																$('#burnerWithStandContainerDiv,#burnerWithStandOff').css({display:'none'});
																$('#burnerFlame').css({width:'27px',height:'52px',top:'144px',left:'430px'});																	
																flame= setInterval(flameFn,10);
																$('#glassRodInBeaker3').css({cursor:'pointer'});
																$('#glassRodInBeaker3').animate({left:'17px'},function(){
																	stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
																});																
															})
													}

													
												}else{
													$('#beaker3').css({top:'172px',left:'31px'});
												}
											}
										}); 

									});
								}, 1000);
						   		});
						   		
						   	});
					}else{
						$('#beaker').css({zIndex:0});
						$('#beaker').css({top:'172px',left:'183px'});
					}
				}
			});
		}

		//Function to filter solution
		function filterBeakerSoln(){
			$('#buchnerFunnel').css({left:'289px'});
			$('#thermoCoal3,#rbFlask3,#glassRod3,#beakerBig,#Stand3,#labelBoard1,#bigBeaker3,#stand3').css({display:'none'});
			$('#bg1,#beaker3,#beaker3Powder,#waterBottle,#buchnerFunnel,#beaker3Soln').css({display:'block'});						
			$('#beaker3').css({left:'10px'});
			$('#labelBoard3').css({left:'4px'});
			$('#beaker3').draggable({ disabled: false });
			$('#beaker3').css({cursor:'pointer'});
			$('#beaker3').draggable({
				start:function(event, ui) {
					$('#beaker3').css({zIndex:1});
				},
				stop:function(event, ui){
					$('#beaker3').css({zIndex:0});
					if(this.offsetTop>=0 && this.offsetTop<=178 && this.offsetLeft>=130 &&this.offsetLeft<=415){
						   $('#beaker3').draggable({ disabled: true });
						   $('#beaker3').css({cursor:'default'});
						   $('#beaker3').css({top: '15px', left: '350px'});
						   $('#beaker3').rotate(-90);
						   $('#beaker3Powder,#beaker3Soln').css({display:'none'});
						   $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
						   $('#whiteSolnline1Div').css({display:'block',top: '212px', left: '325px'});
						   $('#whiteSolnline1Div').animate({height: '64px'},function(){ 								   		
						   		$('#buchnerFunnelSoln').css({display:'block'});
						   		$('#beaker3').rotate(0);
						   		$('.buchnerFunnelSolnDivStyle').animate({ top: '142px', height: '33px'});
						   		$('.buchnerFunnelSolnStyle').animate({ top: '-47px'});
						   		$('.buchnerFunnelSolnBorderStyle').animate({ width: '50px',left: '8px'},function(){
						   			$('#beaker3').animate({top: '172px', left: '10px'});
						   			$('#whiteSolnline1Div').css({display:'none'});
						   			$('#waterBottle').draggable({ disabled: false });
						   			$('#waterBottle').css({cursor:'pointer'});
						   			$('#waterBottle').draggable({
						   				start:function(event, ui) {
										$('#waterBottle').css({zIndex:1});
									},
									stop:function(event, ui) {
										if(this.offsetTop>=0 && this.offsetTop<=145 && this.offsetLeft>=180 &&this.offsetLeft<=300){														
											$('#waterBottle').draggable({ disabled: true });
						   					$('#waterBottle').css({cursor:'default'});
											$('#waterBottle').css({top:'73px',left:'192px'});
											$('#waterSolnlineDiv').css({display:'block'});
											$('#waterSolnlineDiv').animate({height:'26px'},function(){
												$('#waterSolnlineDiv').css({display:'none'});
												$('.buchnerFunnelSolnDivStyle').animate({ top: '130px', height: '45px'});
						   							$('.buchnerFunnelSolnStyle').animate({ top: '-37px'});
						   							$('.buchnerFunnelSolnBorderStyle').animate({ width: '42px',left: '12px'});
						   							$('#waterBottle').animate({top:'69px',left:'151px'},function(){
						   								$('#waterBottle').css({zIndex:0});
						   								switch (selectOrganicCompund){
															case "acetanilide"://Acetanilide
																$('#nextBtn').attr('src',simPath+'images/bigButton.png');
																$('#nextLabel').html(recrystallizationacetanilide);
																$('#nextBtnDiv').css({left:'311px'}); 
																$('#nextLabel').css({top:'25px',left:'26px',width: '170px'});  
																$('#nextBtnDiv').css({display:'block'});
						   									break;
						   									case "pNitroacetanilide"://p-Nitroacetanilide						   														   										
																$('#bigBtnDiv').css({display:'block',left:'317px',top:'5px'});
															break;
						   								}
						   								
						   							});
											});
										}else{
											$('#waterBottle').css({zIndex:0});
											$('#waterBottle').css({top:'69px',left:'151px'});
										}
									}
						   			});
						   		});	
						   });    								  
						}else{
						   $('#beaker3').css({top: '172px', left: '10px'});
						}
				} 
			});
		}
		//-----Function for rotating needle of clock------------
		function needleRotate(){
			degree=degree+2;	
			$('#corkInconicalFlask,#conicalFlask,#conicalFlaskSoln,#conicalFlaskSolnImg').stop(true);										
			//Clock needle rotate 
			$("#needle").css({"transform-origin":'4px 30px',"transform":'rotate(' + degree + 'deg)',"-webkit-transform-origin":'4px 30px',' -webkit-transform':'rotate(' + degree + 'deg)','-moz-transform-origin':'4px 30px',' -moz-transform':'rotate(' + degree + 'deg)'});
			if(degree>360){
				clearInterval(clockInt);
				degree=0;				
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide	
						$('#clockDiv').css({display:'none'});
						if(nextClick==1){	
							clearInterval(flame);
							$('#burnerFlame').hide();		
							$('#nextBtnDiv').css({display:'block'});
							$('#burnerOn,#clockDiv,#burnerFlame').css({display:'none'});
							$('#burnerOff').css({display:'block'});
						}else if(nextClick==2){
							$('#glassRod3').animate({left: '475px'},function(){			
								$('#rbFlaskDiv3').css({display:'block',cursor:'pointer'});
								$('#rbFlaskDiv3').draggable({
									start:function(event, ui) {
										$('#rbFlask3').css({zIndex:1});										
									},
									drag:function(event, ui) {
										$('#rbFlask3').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
									},
									stop:function(event, ui){
										$('#rbFlask3').css({zIndex:0});
										if(this.offsetTop>=-50 && this.offsetTop<=200 && this.offsetLeft>=300 &&this.offsetLeft<=500){				  
											  $('#rbFlaskDiv3').css({left: '380px', top: '90px'});	 
										   	  $('#rbFlask3').rotate(90);
										   	  $('#whiteSolnline1Div').css({display:'block'});
										   	  $('#rbFlask3Soln').css({opacity: '0'});
										   	  $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
										   	  $('#whiteSolnline1Div,#whiteSolnline2Div').css({top:'165px',left:'489px'});
										   	  $('#whiteSolnline1Div').animate({height:'67px'},function(){
										   	  	 $('#whiteSolnline2Div').css({display:'block'});
							    				 $('#whiteSolnline2Div').animate({height:'67px'},function(){ 
							    				 	 $('#whiteSolnline1Div,#whiteSolnline2Div').css({display:'none'});
													 $('#beaker3Soln').animate({height: '80px', top: '29px'},function(){
													   	 stirInt = setInterval( function() { stirGlassRod('glassRod3',505); }, 20 );
													   	 $('#rbFlask3').rotate(0);			   	  	 
													   	 $('#rbFlaskDiv3,#rbFlask3').animate({left: '331px', top: '100px'});
													   	 $('#rbFlaskDiv3').css({display:'none'});
													   	 $('#rbFlask3').draggable({disabled:true});	
													   	 $('#rbFlask3').css({cursor:'default'});	
													 });
													 $('#beaker3SolnImg').animate({ top: '-78px'});	
										   	  	 });
							    			  });				  			 
										}else{
										   $('#rbFlaskDiv3').css({left: '175px', top: '114px'});
										}
										$('#rbFlask3').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
									} 
								});
							});	
						}else if(nextClick==5){
							$('#nextBtnDiv').css({display:'block'});
						}
						
					break;
					case "dibenzalAcetone"://Dibenzal acetone
						$('#clockDiv').css({display:'none'});		
						if(corkFlag==1){
							$('#conicalFlask').draggable({ disabled: false });
							$('#conicalFlask').css({cursor:'pointer'});
							$('#conicalFlask').draggable({
								start:function(event, ui) {
									$('#conicalFlask').css({zIndex:1});
								},
								stop:function(event, ui) {
									$('#conicalFlask').css({zIndex:0});
									if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=0 &&this.offsetLeft<=170){										
										$('#conicalFlask').css({top:'169px',left:'75px'});
										$('#conicalFlask').draggable({ disabled: true });
										$('#conicalFlask').css({cursor:'default'});	
										$('#clockDiv').css({display:'block'});										
										$('#timeLabel').html(15+" "+minLabel);
										clockInt = setInterval(needleRotate,20);
										corkFlag=2;
									}else{
										$('#conicalFlask').css({top:'160px',left:'404px'});
									}  
								}
							});
						}else if(corkFlag==2){
							$('#conicalFlask').css({top:'169px',left:'75px',cursor:'default'});
							$('#conicalFlask').draggable({disabled:true});	
							$('.conicalFlaskSolnBorderStyle').css({width:'68px'});	
							$('#conicalFlaskSolnImg').css({top:'-53px',left:'0px'});						
							$('#conicalFlaskSolnImg').attr('src',simPath+'images/conicalFlask-solution.png');
							$('#nextBtnDiv').css({display:'block'});	
							$('#conicalFlask').draggable({ disabled: true });
							$('#conicalFlask').css({cursor:'default'});							
						}else if(corkFlag==3){
							$('#beaker3Mixture').css({display:'block'});
							$('#beaker3Mixture').css({opacity:1});
							$('#beaker3Mixture').attr('src',simPath+'images/compound2.png');
							$('#glassRodInBeaker3').animate({top:'-190px'},function(){
								$('#glassRodInBeaker3').animate({left:'600px'},function(){
									$('#glassRodInBeaker3').css({display:'none'});																
									$('#beaker3').draggable({ disabled: false });
									$('#beaker3').css({cursor:'pointer'});
									$('#beaker3').draggable({
										start:function(event, ui) {
											$('#beaker3').css({zIndex:1});
										},
										stop:function(event, ui){
											$('#beaker3').css({zIndex:0});
											if(this.offsetTop>=0 && this.offsetTop<=240 && this.offsetLeft>=300 &&this.offsetLeft<=530){
												$('#beaker3').css({top:'14px',left:'360px'});
												$('#beaker3').draggable({ disabled: true });
												$('#beaker3').css({cursor:'default'});	
												$('#beaker3').rotate(90); 
												$('#beaker3Soln,#beaker3Mixture').css({display:'none'});	
												$('#whiteSolnline1Div').css({height: '16px',top: '214px',left: '459px',display:'block'});
												$('#whiteSolnline1Div').animate({height: '66px'},function(){											
													$('#buchnerFunnelSoln').css({display:'block'});
													$('#beaker3').rotate(0);
													$('.buchnerFunnelSolnDivStyle').animate({ top: '142px', height: '33px'});
													$('.buchnerFunnelSolnStyle').animate({ top: '-47px'});
													$('.buchnerFunnelSolnBorderStyle').animate({ width: '50px',left: '8px'},function(){
												   		$('#beaker3').css({zIndex:0});
												   		$('#beaker3').animate({top:'172px',left:'51px'},function(){
															$('#nextBtnDiv').css({display:'block'});													 
														});	
												   		$('#whiteSolnline1Div').css({display:'none'});
												   												   			
												   	});										
												});
											}else{
												$('#beaker3').css({top:'172px',left:'51px'});
											}
										}
									});
								});
							});
							
						}			
					break;	
					case "pNitroacetanilide"://p-Nitroacetanilide
						if(nextClick==3){
							$('#clockDiv').css({display:'none'});	
							$('#conicalFlask').draggable({ disabled: true });
							$('#conicalFlask').css({cursor:'default'});
							$('#nextBtnDiv').css({display:'block'});
						}else{
							$('#clockDiv').css({display:'none'});	
							$('#conicalFlask').draggable({ disabled: false});
							$('#conicalFlask').css({cursor:'pointer'});	
							$('#conicalFlask').draggable({
								start:function(event, ui) {
									$('#conicalFlask').css({zIndex:1});													
								},
								drag:function(event, ui) {
									$('#glassRod3').css({top:'106px',left:'506px'});										
								},
								stop:function(event, ui) {
									$('#conicalFlask').css({zIndex:0});									
									if(addMixtureFlag==true){
										if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=310 &&this.offsetLeft<=500){	
											$('#conicalFlask').rotate(90);		
											$('#conicalFlaskSoln').css({ display:'none'});										
											$('#conicalFlask').draggable({ disabled: true });
											$('#conicalFlask').css({cursor:'default',top:'72px',left:'419px'});
											$('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});  
											$('#whiteSolnline1Div').css({display:'block',top: '143px', left: '521px'});
											    $('#whiteSolnline1Div').animate({height: '113px'},function(){					 								    	
											   		$('#whiteSolnline1Div').css({display:'none'});
											   		$('#conicalFlask').rotate(0); 
											   		$('#beaker3Soln').css({display:'block',top: '68px',height: '74px'});
											   		$('#beaker3SolnImg').css({top: '-116px'});
											   		$('#conicalFlask').css({cursor:'default'});
											   		$('#conicalFlask').animate({top:'160px',left:'229px'});
											   		$('#glassRod3').animate({left:'478px'});
											   		stirrerClick=2;
											   		stirInt = setInterval( function() { stirGlassRod('glassRod3',505); }, 20 );	
											   	});
										}else{
											$('#conicalFlask').css({top:'160px',left:'229px'});
										} 
									}	 
								}
							});
						}
					break;	
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#clockDiv').css({display:'none'});	
						if(nextClick!=5){							
							$('#nextBtnDiv').css({display:'block'});
						}
					break;
				}
			}
		}	
		//function to shake objects 	
	 	function dragToShake(dragObjId,dragObjTop,dragObjLeft,dragObjRotateTop,dragObjRotateLeft){
	 		$('#corkInconicalFlask,#conicalFlask,#conicalFlaskSoln,#conicalFlaskSolnImg').stop(true);	
	 		$('#'+dragObjId).draggable({disabled:false});		
			$('#'+dragObjId).css('cursor','pointer');
			$('#'+dragObjId).draggable({
				start:function(event, ui) {
					$('#'+dragObjId).css({zIndex:2});				
				},
				stop:function(event, ui) {
					if(this.offsetTop>=-100 &&this.offsetTop<=160 && this.offsetLeft>=0 &&this.offsetLeft<=500){
						$('#'+dragObjId).css('cursor','default');
						$('#'+dragObjId).draggable({disabled:true});	
						$('#'+dragObjId).css({top:dragObjRotateTop+'px',left:dragObjRotateLeft+'px'});
						rotateInt = setInterval( function() { shakeObj(dragObjId,dragObjTop,dragObjLeft); }, 20 );
					}else{
						$('#'+dragObjId).css('cursor','pointer');
						$('#'+dragObjId).css({top:dragObjTop+'px',left:dragObjLeft+'px'});
					}
				}
			});
	 	}
	 	//function to stir glass rod  	
	 	function stirGlassRod(stirrerId,stirrerLeft){
	 		degree2=stirringFn2();
			stirCount++;
			$("#"+stirrerId).rotate(degree2);
			if(stirCount==100)	{
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						if(nextClick==2){
							$('#beaker3Powder').css({display:'block',opacity:0});
							$('#beaker3SolnImg').animate({opacity:0.9});
							$('#beaker3Powder').animate({opacity:0.9});
						}else if(nextClick==4){
							$('#beaker3Mixture').animate({opacity:0});
						}
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide	
						if(stirrerClick==2){
							$('#iceCubes').animate({ opacity:0});
						}else{
							$('#conicalMixture').animate({opacity:0});
						}
						if(nextClick==2){
							$('#beaker3Mixture').animate({opacity:0});
						}
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#beaker3Mixture').animate({opacity:0});						
						if(bigBtnClick==1){
							$('#beaker3SolnImg').css({backgroundColor:'#ff0000'});	
						}	
					break;
				}
			}
			if(stirCount>=200){
				stirCount=0;
				clearInterval(stirInt);	
				$('#'+stirrerId).rotate(0);			
				degree=0,flag2=new Boolean(true),degree2 = -14;				
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#'+stirrerId).animate({left:stirrerLeft+'px'});
						if(nextClick==2){
							$('#nextBtnDiv').css({display:'block'});
						}else{
							$('#burnerFlame').hide();
							clearInterval(flame);
							$('#nextBtnDiv').css({display:'block'});
							$('#burnerWithStandOn').css({display:'none'});
							$('#burnerWithStandOff').css({display:'block'});
						}
					break;
					case "dibenzalAcetone"://Dibenzal acetone
						$('#beaker3Mixture').animate({opacity:0});
						$('#glassRodInBeaker3').animate({left:'51px'});
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#glassRod3').rotate(-10); 
						if(nextClick==0){
							$('#conicalFlask').draggable({ disabled: false });
							$('#conicalFlask').css({cursor:'pointer'});
							$('#conicalFlask').draggable({
								start:function(event, ui) {
									$('#conicalFlask').css({zIndex:1});
									$('#'+stirrerId).css({zIndex:1});
								},
								drag:function(event, ui) {
									$('#glassRod3').css({top:this.offsetTop-50+'px',left:this.offsetLeft+10+'px'});
								},
								stop:function(event, ui) {
									if(this.offsetTop>=0 && this.offsetTop<=220 && this.offsetLeft>=310 &&this.offsetLeft<=505){									
										$('#conicalFlask').css({top:'160px',left:'409px'});
										$('#conicalMixture').css({display:'none'});
										$('#conicalMixture').css({left: '29px',width:'32px'});
										$('#conicalFlask').draggable({ disabled: true });
										$('#conicalFlask').css({cursor:'default'});										
										$('#dropper1').draggable({disabled:false});			 
								 	    $('#dropper1').css({cursor:'pointer'});
								 		$('#dropper1').draggable({
											start:function(event, ui) {
												$('#dropper1').css({zIndex:1});
											},
											stop:function(event, ui){
												if(this.offsetTop>=0 && this.offsetTop<=200 && this.offsetLeft>=360 &&this.offsetLeft<=540){
													$('#dropper1').css({top: '39px',left:'439px'});
													$('#dropper1').draggable({ disabled: true });
													$('#dropper1').css({cursor:'default'});
													$('#dropper1').css({zIndex:0});	
													$('#drop1').css({top:'161px',left:'445px'});
													$('#drop2').css({top:'169px',left:'445px'});
													$('#drop1').css({display:'block'});//Drops							
													$('#drop1').animate({top:'260px'},500,function(){							
														$('#drop1').css({display:'none'});
														$('#drop2').css({display:'block'});							
														$('#drop2').animate({top:'260px'},500,function(){														
															$('#drop2').css({display:'none'});
															setTimeout(function() {
															    alerttripFlag=true;
																alerttrip.start(); 
																window.alerttrip = alerttrip; 
															}, 1000);

															$('#conicalFlaskSolnImg').animate({top:'-81px'});
															$('.conicalFlaskSolnBorderStyle').animate({left:'9px',width:'71px'});	
									 						$('#conicalFlaskSoln').animate({top:'92px',height:'31px'},function(){
									 							$('#dropper1').animate({top: '100px',left:'288px'});
									 							$('#dropperSoln1').css({top:'63px',height:'56px',width:'9px',left:'6px'});	
									 							$('#nextBtnDiv').css({display:'block'});
									 						});
									 						
														});
													});
								  					$('#dropperSoln1').delay(500).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
												}else{
													$('#dropper1').css({zIndex:0});	
													$('#dropper1').css({top: '100px',left:'288px'});
												}
											}
										})
									}else{
										$('#'+stirrerId).css({zIndex:0});
										$('#conicalFlask').css({zIndex:0});
										$('#conicalFlask').css({top:'157px',left:'134px'});
									}
									$('#'+stirrerId).css({top:this.offsetTop-50+'px',left:this.offsetLeft+10+'px'});
								}
							});	
						}else if(nextClick==1){
							if(stirrerClick==0){
								$('#dropperTwo').draggable({disabled:false});			 
								$('#dropperTwo').css({cursor:'pointer'});
								$('#dropperTwo').draggable({
									start:function(event, ui) {
										$('#dropperTwo').css({zIndex:1});
									},
									stop:function(event, ui){
										$('#dropperTwo').css({zIndex:0});
										if(dragDropperCount==0){
											if(this.offsetTop>=0 && this.offsetTop<=200 && this.offsetLeft>=60 &&this.offsetLeft<=250){
												dragDropperCount++;
												$('#dropperTwo').css({top:'98px',left:'161px'});
												$('#dropperTwoSoln').css({display:'block'});
											}else{
												$('#dropperTwo').css({top:'156px',left:'374px'});
											}
										}else{
											if(this.offsetTop>=0 && this.offsetTop<=200 && this.offsetLeft>=40 &&this.offsetLeft<=130){
												$('#dropperTwo').css({top:'32px',left:'95px'});
												$('#dropperTwo').draggable({disabled:true});			 
												$('#dropperTwo').css({cursor:'default'});
												$('#dropperTwoSoln').css({display:'none'});
												$('#drop1').css({top:'147px',left:'99px'});
												$('#drop1').css({display:'block'});//Drops	
												stirrerClick=1;
												stirInt = setInterval( function() { stirGlassRod('glassRod3',505); }, 20 );	
												$('#drop1').animate({top:'160px'},function(){
													$('#drop1').css({display:'none'});//Drops	
													$('#dropperTwo').animate({top:'156px',left:'374px'});
												});											
											}else{
												$('#dropperTwo').css({top:'98px',left:'161px'});
											}	
										}
									}
								});
							}else if(stirrerClick==1){
								$('#glassRod3').animate({top:'-28px',left:'88px'},function(){
									$('#glassRod3').animate({left:'506px'},function(){
										$('#glassRod3').animate({top:'106px'},function(){
											$('#glassRod3').css({cursor:'default'});											
											$('#glassRod3').stop(true);
											$('#conicalFlask').draggable({ disabled: false });
											$('#conicalFlask').css({cursor:'pointer'});
											$('#conicalFlask').draggable({
												start:function(event, ui) {
													$('#conicalFlask').css({zIndex:1});													
												},
												drag:function(event, ui) {
													$('#glassRod3').css({top:'106px',left:'506px'});										
												},
												stop:function(event, ui) {
													$('#conicalFlask').css({zIndex:0});														
													if(addMixtureFlag==false){
														if(this.offsetTop>=0 && this.offsetTop<=300 && this.offsetLeft>=160 &&this.offsetLeft<=300){	
															$('#conicalFlask').draggable({ disabled: true });
															$('#conicalFlask').css({cursor:'default'});	
															$('#conicalFlask').css({top:'160px',left:'229px'});
															addMixtureFlag=true;
															$('#clockDiv').css({display:'block'});										
															$('#timeLabel').html(30+" "+minLabel);
															clockInt = setInterval(needleRotate,20);
														}else{
															$('#conicalFlask').css({top:'160px',left:'59px'});
														} 
													}
													 
												}
											});
										});
									})
								});

							}else if(stirrerClick==2){
								$('#beaker3Powder').css({ display:'block',width:'86px',height:'38px',top:'69px',opacity:0});	
								$('#beaker3Powder').animate({opacity:1});
								$('#beaker3SolnImg').animate({opacity:1});
								$('#iceCubes').css({ display:'none'});
								$('#glassRod3').animate({left:'506px'},function(){
									$('#nextBtnDiv').css({display:'block'});									
								});
							}
						}else if(nextClick==2){
							$('#nextBtnDiv').css({display:'block'});
							switch (selectOrganicCompund){													
								case "pNitroacetanilide"://p-Nitroacetanilide									
									$('#switchOff,#lightOff').css({display:'block'});
									$('#switchOn,#lightOn,#clockDiv').css({display:'none'});
								break;
								default:							
									$('#burnerFlame').hide();
									clearInterval(flame);									
									$('#burnerWithStandOn').css({display:'none'});
									$('#burnerWithStandOff').css({display:'block'});
							}

						}					
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#glassRodInBeaker3').animate({left:'50px'},function(){	
							if(nextClick==4 || bigBtnClick==1){
								$('#burnerFlame').hide();
								clearInterval(flame);
								$('#burnerWithStandOn').css({display:'none'});
								$('#burnerWithStandOff').css({display:'block'});
								$('#nextBtnDiv').css({display:'block'});	
								
							}else if(nextClick==5){
								$('#glassRodInBeaker3').animate({top:'-190px'},function(){
									$('#glassRodInBeaker3').animate({left:'600px'},function(){	
										$('#glassRodInBeaker3').css({display:'none'});													
										$('#beaker3').draggable({ disabled: false });
										$('#beaker3').css({cursor:'pointer'});
										$('#beaker3').draggable({
											start:function(event, ui) {
												$('#beaker3').css({zIndex:1});
											},
											stop:function(event, ui){
												
												if(this.offsetTop>=0 && this.offsetTop<=178 && this.offsetLeft>=130 &&this.offsetLeft<=415){
												   $('#beaker3').draggable({ disabled: true });
												   $('#beaker3').css({cursor:'default'});
												   $('#beaker3').css({top: '15px', left: '396px'});
												   $('#beaker3').rotate(-90);
												   $('#beaker3Powder,#beaker3Soln').css({display:'none'});
												   $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
												   $('#whiteSolnline1Div').css({display:'block',top: '212px', left: '371px'});
												   $('#whiteSolnline1Div').animate({height: '64px'},function(){ 								   		
												   		$('#buchnerFunnelSoln').css({display:'block'});
												   		$('#beaker3').rotate(0);
												   		$('.buchnerFunnelSolnDivStyle').animate({ top: '142px', height: '33px'});
												   		$('.buchnerFunnelSolnStyle').animate({ top: '-47px'});
												   		$('.buchnerFunnelSolnBorderStyle').animate({ width: '50px',left: '8px'},function(){
												   			$('#beaker3').animate({top: '170px', left: '216px'},function(){
												   				$('#beaker3').css({zIndex:0});
												   				$('#bigBtnDiv').css({display:'block',left:'317px',top:'5px'});
												   			});
												   			$('#whiteSolnline1Div').css({display:'none'});
												   													   			
												   		});	
												   });    								  
												}else{
													$('#beaker3').css({zIndex:0});
													$('#beaker3').css({top: '150px', left: '58px'});  
												}
											} 
										});
									});
								});
							}
							else{
								$('#beaker3').draggable({ disabled: false });
								$('#beaker3').css({cursor:'pointer'});
								$('#beaker3').draggable({
									start:function(event, ui) {
										$('#beaker3').css({zIndex:1});
									},
									stop:function(event, ui){
										$('#beaker3').css({zIndex:0});
										if(this.offsetTop>=0 && this.offsetTop<=200 && this.offsetLeft>=330 &&this.offsetLeft<=465){
											$('#beaker3').css({top:'160px',left:'420px'});
											$('#beaker3').draggable({ disabled: true });
											$('#beaker3').css({cursor:'default'});
											$('#clockDiv').css({display:'block'});																											
											$('#timeLabel').html(20+" "+minLabel);
											clockInt = setInterval(needleRotate,20);
										}else{
											$('#beaker3').css({top:'172px',left:'31px'});
										}
									}
								})
							}
							
						});	
					break;
				}
			}
	 	}
	 	//*--Function to start stir the glass rod ---
		function stirringFn2(){			
			if(flag2==true){
				if(degree2<=0){
					degree2++;
					if(degree2==0){
						flag2=false;
					}
				}
			}else{
				degree2--;
				if(degree2==-30){
					flag2=true;
				}
			}
			return degree2;			
		}	 		
	 	//------- Function to rotate  ------- 
		function shakeObj(dragObjId,dragObjTop,dragObjLeft){
			degreeRotate=rotateValue(10);
			count++;
			$("#"+dragObjId).rotate(degreeRotate);				
			switch (selectOrganicCompund){				
				case "dibenzalAcetone"://Acetanilide
					$('#clockDiv').css({display:'block',left:'200px'});
					$('#clockDiv').css({left:'200px'});
					$('#timeLabel').html(10+" "+minLabel);
					needleRotate();	//Clock needle rotate				
				break;
			}
			//after shaking
			if(count==250){
				count=0;
				$('#'+dragObjId).css({zIndex:0});
				$('#'+dragObjId).rotate(0);
				clearInterval(rotateInt);
				$('#'+dragObjId).draggable({disabled:'true'});
				$('#'+dragObjId).css({cursor:'defalut'});
				cylinderCount++;
				switch (selectOrganicCompund){
					case "acetanilide"://Acetanilide
						$('#burnerOff').css({display:'block'});
						$('#burnerOnDiv,#burnerOn').css({display:'none'});		
						if(cylinderCount==2){
							$('#'+dragObjId).animate({top:dragObjTop+'px',left:dragObjLeft+'px'});
							$('#nextBtnDiv').css({display:'block'});
						}else{
							$('#'+dragObjId).animate({top:dragObjTop+'px',left:dragObjLeft+'px'},function(){				
								dragCylinder('cylinder2','cylinder2Soln','cylSoln2Horizontal',100,200,-40,312,-100,300,265,530);//Drag cylinder2
							});
						}						
					break;
					case "dibenzalAcetone"://Acetanilide
						$('#'+dragObjId).animate({top:dragObjTop+'px',left:dragObjLeft+'px'},function(){
							if(bigBtnClick==0){
								$('#bigBtnLabel').html(placeInWater);
								$('#bigBtnDiv').css({display:'block',left:'317px',top:'5px'});
							}else if(bigBtnClick==1){
								$('#corkInconicalFlask').animate({top: '-30px'},function(){
									$('#corkInconicalFlask').animate({top: '92px', left: '-113px'},function(){
										$('#corkInconicalFlask').css({display:'none'});
										$('#cork').css({top: '253px', left: '291px',display:'block'});
										degree=0;
										$("#needle").css({"transform-origin":'4px 30px',"transform":'rotate(' + degree + 'deg)',"-webkit-transform-origin":'4px 30px',' -webkit-transform':'rotate(' + degree + 'deg)','-moz-transform-origin':'4px 30px',' -moz-transform':'rotate(' + degree + 'deg)'});
										$('#clockDiv').css({display:'block',left:'200px'});										
										$('#clockDiv').css({left:'200px'});
										$('#timeLabel').html(20+" "+minLabel);
										clockInt = setInterval(needleRotate,20);
										corkFlag=1;
									});
								});	

							}
						});
						$('#clockDiv').css({display:'none'});
					break;
				}				
			}
		}
		//--------Function to click recrystalisation button-----------
		$('#bigBtnDiv').click(function(){
			clearIntervalFun();
			$('#bigBtnDiv').css({display:'none'});
			bigBtnClick++;
			if(bigBtnClick==1){	
				switch (selectOrganicCompund){					
					case "dibenzalAcetone"://Dibenzal acetone
						$('#labelBoard1,#labelBoard2,#labelBoard3,#bigBeaker3,#conicalFlask,#cork').css({display:'block'});
						$('#cylinder1,#dropper1,#bottle1,#cylinder1Soln').css({display:'none'});
						$('#bigBeaker3').css({top:'206px',left:'33px'});
						$('#conicalFlask').css({top:'169px',left:'75px'});
						$('#labelBoardText2').css({top:'8px'});
						$('#labelBoard2').css({left:'250px'});
						$('#labelBoardText1').css({top:'7px'});
						$('#labelBoardText1').html(coldWater);
						$('#labelBoardText2').html(corkLabel);
						$('#labelBoardText3').html(mixtureLabel);
						$('#cork').css({cursor:'pointer'});
						$('#cork').draggable({ disabled: false });
						$('#cork').draggable({
							start:function(event, ui) {
								$('#cork').css({zIndex:1});
							},
							stop:function(event, ui){
								$('#cork').css({zIndex:0});
								if(this.offsetTop>=0 && this.offsetTop<=270 && this.offsetLeft>=0 &&this.offsetLeft<=220){
 								   $('#cork').css({top: '157px', left: '106px'});
 								   $('#cork').draggable({ disabled: true });
 								   $('#cork').css({cursor:'default'});
 								   $('#corkInconicalFlask').css({display:'block'});
								   $('#cork').css({display:'none'});
 								   $('#rbFlaskDiv3').css({display: 'block',zIndex:'9',cursor:'pointer',top:'155px',left:'76px'});
 								   $('#rbFlaskDiv3').draggable({ disabled: false });
 								   $('#rbFlaskDiv3').draggable({
										start:function(event, ui) {
											$('#conicalFlask').css({zIndex:1});											
										},
										drag:function(event, ui) {
											$('#conicalFlask').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});											
										},
										stop:function(event, ui){
											$('#conicalFlask').css({zIndex:0});	
											$('#rbFlaskDiv3').draggable({ disabled: true });
											$('#rbFlaskDiv3').css({ cursor: 'default' });									  
											$('#rbFlaskDiv3').css({left: '309px', top: '73px'});											
											$('#conicalFlask').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
											rotateInt = setInterval( function() { shakeObj('conicalFlask',160,404); }, 20 );
										} 
									});
 								}else{
 								   $('#cork').css({top: '253px', left: '291px'});
 								}
							} 
						});
					break;
					case "pNitroacetanilide"://p-Nitroacetanilide
						$('#labelBoardText2').css({top:'0px'});
						$('#beaker3SolnImg').css({opacity:0.3});
						$('#labelBoardText2').html(methylatedSpiritLabel+" (20ml)");
						recrystalizationHotFunction();
					break;
					case "naphtholAnilinedye"://2-Naphthol aniline dye
						$('#icebathTop,#icebathTop2,#icebathBottom,#icebathBottom2,#conicalFlask').css({display:'none'});						
						$('#glassRodInBeaker3').css({top:'-64px',left:'50px'});	
						$('#glassRodInBeaker3').css({display:'block'});	
						$('#labelBoardText2').css({top:'0px'});
						$('.beaker3SolnStyle').css({opacity:0.3});
						$('#labelBoardText3').css({top:'0px'});
						$('#labelBoardText3').html(naphtholAnilinedyeLabel);
						$('#labelBoardText2').html(glacialAceticLabel+" (40ml)");						
						recrystalizationHotFunction();	
					break;				
				}
			}else if(bigBtnClick==2){	
				switch (selectOrganicCompund){					
					case "dibenzalAcetone"://Dibenzal acetone
						$("#beaker3Mixture").attr('src',simPath+"images/yellow.png");
						$('#waterBottle,#buchnerFunnel,#beaker3Powder,#beaker3Soln,#conicalFlask,#buchnerFunnelSoln').css({display:'none'});
						$('#beaker3,#beaker,#beaker3Mixture,#buchnerFunnel,#glassRodInBeaker3,#labelBoard2,#beakerSoln').css({display:'block'});
						$('.buchnerFunnelSolnDivStyle').css({ top: '169px', height: '2px'});
						$('.buchnerFunnelSolnStyle').css({ top: '-76px'});
						$('.buchnerFunnelSolnBorderStyle').css({ width: '65px',left: '1px'});
						$('#beakerSoln').css({top:'99px',height:'19px',width:'101px'});
						$('#beakerSolnImg').css({top:'-149px'});
						$('#beaker3').css({top:'172px',left:'51px'});
						$('#beaker').css({top:'165px',left:'225px'}); 
						$("#beaker3Mixture").css({opacity:1,top:'93px'});
						$('#buchnerFunnel').css({left:'423px'});
						$('#labelBoard1').css({top:'277px',left:'44px'});
						$('#labelBoard2').css({top:'277px',left:'223px'});
						$('#labelBoardText2').css({top:'0px'});
						$('#labelBoardText2').html(hotrectifiedSpirit+" (25ml)");
						$('#beaker').draggable({ disabled: false });
						$('#beaker').css({cursor:'pointer'});
						$('#beaker').draggable({
							start:function(event, ui) {
								$('#beaker').css({zIndex:1});
							},
							stop:function(event, ui){
								if(this.offsetTop>=0 && this.offsetTop<=215 && this.offsetLeft>=0 &&this.offsetLeft<=260){
									$('#beaker').draggable({ disabled: true });
 								     $('#beaker').css({cursor:'default'});
									 $('#beaker').css({top:'50px',left:'120px'});
									 $('#beaker').rotate(-90);
									 $('#beakerSoln').css({display:'none'});
									 $('#glassRodInBeaker3').animate({left:'17px'},function(){
										stirInt = setInterval( function() { stirGlassRod('glassRodInBeaker3',51); }, 20 );																	
									 });
									 $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
									 $('#whiteSolnline1Div').css({display:'block',top: '161px', left: '112px'});
									 $('#whiteSolnline1Div').animate({height: '109px'},function(){
 								   		$('#whiteSolnline1Div').css({display:'none'});
 								   		$('#beaker3Soln').css({display:'block'});
 								   		$('#beaker3SolnImg').css({backgroundColor:'#FFFF00',opacity:0.2});
 								   		$('#beaker3Soln').css({top:'99px',height:'9px'});
 								   		$('#beaker3SolnImg').css({top:'-146px'});
 								   		$('#beaker3Soln').animate({top:'88px',height:'22px'});
 								   		$('#beaker3SolnImg').animate({top:'-136px'},function(){
 								   			$('#beaker').rotate(0);
 								   			corkFlag=3; 								   			
 								   			$('#beaker').css({zIndex:0}); 								   									   				
												$('#beaker').animate({top:'165px',left:'225px'},function(){
												$('#clockDiv').css({display:'block',left:'200px'});										
												$('#clockDiv').css({left:'200px'});
												$('#timeLabel').html(20+" "+minLabel);
												clockInt = setInterval(needleRotate,20);
											});											
 								   		});
 								   	});
								}else{
									$('#beaker').css({zIndex:0});
									$('#beaker').css({top:'165px',left:'225px'});
								}
							}
						});
					break;					
				}
			}
		});
		//-------Show Flame on the burner	-------
		function flameFn(){			
			$('#burnerFlame').show();
			flameCount++;
			$("#burnerFlame").attr('src',simPath+"images/flame"+flameCount+".png");
			if(flameCount==5){
				flameCount=0;
			}
			if(nextClick==1){
				needleRotate();
			}				
		}	
		//-------Function to set testube rotate value-------
		function rotateValue(limit){
			if(flag_rotate==true){
				if(rotateAmt>=-limit){
					rotateAmt--;
					if(rotateAmt==-limit){
						flag_rotate=false;
					}
				}
			}else{
				rotateAmt++;
				if(rotateAmt==limit){
					flag_rotate=true;
				}
			}
			return rotateAmt;
		}
		 //-------Function to increase solution-------
		function increasrbFlaskSample(solutionDiv,solutionImg,solnBorder){
			var solnDivTop=$('#'+solutionDiv).position().top;
			var solnHeight=$('#'+solutionDiv).height();
			var solnTop=$('#'+solutionImg).position().top;	
			var solnBorderWidth=$('#'+solnBorder).width();	
			var solnBorderLeft=$('#'+solnBorder).position().left;				
			$('#'+solutionDiv).animate({top:solnDivTop-rbsolnDivTop+'px'});
			$('#'+solutionImg).animate({top:solnTop+rbsolnTop+'px'});
			$('#'+solnBorder).animate({width:solnBorderWidth+rbsolnborderWidth+'px',left:solnBorderLeft-rbsolnborderLeft+'px'});			
		}
		 //-------Function to reset all -------
		$('#reset').click(function(){			
			window.location.reload();
		})
		//-------Function to initialization -------
		function init(){
			clearIntervalFun();
			$('#rbFlaskSoln,#rbFlaskSolnImg,#rbFlask1SolnBorderStyle,#whiteSolnline1Div,#whiteSolnline2Div').stop(true);
			$('#bg2,#bgZoom').css({display:'none'});
			$('#whiteSolnline1Div,#whiteSolnline2Div,#cylSoln1Horizontal,#labelBoard1,#labelBoard2,#labelBoard3,#burnerOff,#burnerOn').css({display:'none'});
			$('#thermoCoal,#cylinder1,#cylinder2,#bg1,#labelBoard1,#labelBoard2,#labelBoard3,#labelBoard4,#rbFlask,#glassRod3').css({display:'none'});
			$('#icebathTop,#icebathBottom,#icebathTop2,#icebathBottom2,#conicalFlask,#bigBeaker3,#dropper1,#bottle1').css({display:'none'});
			$('#cylinder1Soln,#cylinder2Soln').css({display:'block'});
			$('#equipment').css({display:'none'});
			$('.labelTextClass').css({top:'3px'});
			$('#rbFlaskSoln').css({top:'130px'});
			$('#rbFlaskSolnImg').css({top:'-88px'});
			$('#rbFlask1SolnBorderStyle').css({width:'74px',left:'13px'});
			$('#cylinder1').rotate(0);
			$('#cylinder2').rotate(0);
			$('#rbFlask3').rotate(0);			
			$('#whiteSolnline1Div,#whiteSolnline2Div,#cylSoln1Horizontal,#burnerhelpDiv').css({display:'none'});
			$('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});
			$('#cylinder1').css({top:'100px',left:'80px'});	
			$('#cylinder2').css({top:'100px',left:'200px'});
			$('#burnerOff').css({display:'block'});
			$('#burnerOnDiv,#burnerOn,#burnerOff,#hot_machine').css({display:'none'});
			$('#nextBtnDiv').css({display:'none'});
			$('#cylinder1,#cylinder2,#rbFlask').css({zIndex:0});
			$('#cylinder1,#cylinder2,#rbFlask').draggable({disabled:true});
			$('#rbFlask3').css({cursor:'default'});
			$('#rbFlask3').css({left: '331px', top: '100px'});
			$('#bigBeaker3SolnImg,#bigBeaker3Soln,#beaker3Soln').stop(true);
			$('#bigBeaker3Soln').css({height: '38px', top: '41px'});
 			$('#bigBeaker3SolnImg').css({ top: '-117px'});
 			$('#rbFlask3Soln').css({opacity: '1'});
 			$('#rbFlaskDiv3').css({left: '175px', top: '117px'}); 
 			$('#bigBtnLabel').css({left:'11px',width:'187px'});  
 			$('#beaker3Powder').css({display:'none'});
 			$('#clockDiv,#beaker3Soln,#cylinder1,#cylinder2,#rbFlask,#thermoCoal,#rbFlaskDiv3').css({display:'none'});
 			$('#clockDiv').css({left:'300px'});
 			$('#cylinder1,#cylinder2').draggable({disabled:true});
	 	    $('#cylinder1,#cylinder2').css({cursor:'default'});
	 	    $('#cylinder1,#cylinder2').css({zIndex:0});
	 	    $('#cylinder1,#cylinder2').rotate(0);
	 	    $('#cylinder2Soln,#cylinder1Soln,#cylSoln1Horizontal,#cylSoln2Horizontal,#conicalMixture').css({display:'none'});
	 	    $('#conicalFlask,#bottle1,#dropper1,#resultZoom,#labelBoardZoom,#burnerFlame').css({display:'none'});
	 	    $('#whiteSolnline1Div,#whiteSolnline2Div').css({height:'26px'});	
	 	    $('#buchnerFunnel').css({left:'289px'});
	 	    $('#conicalFlaskSolnImg').attr('src',simPath+'images/Conicalflasksolution.png');
	 	    $('#spatulapowder').attr('src',simPath+'images/whiteSpatula.png');
	 	    $('#resultSample').attr('src',simPath+'images/compound1.png');
	 	    $('#conicalMixture').attr('src',simPath+'images/compound1.png'); 
	 	    $('#nextBtnDiv').css({display:'none'});
			$("#needle").css({"transform-origin":'4px 30px',"transform":'rotate(' + degree + 'deg)',"-webkit-transform-origin":'4px 30px',' -webkit-transform':'rotate(' + degree + 'deg)','-moz-transform-origin':'4px 30px',' -moz-transform':'rotate(' + degree + 'deg)'});
			$('#spatulaDiv').rotate(0);
			$('#spatulaDiv').css({top: '239px',left: '162px'});
			$('#dropperSoln1').css({top:'63px',height:'56px',width:'9px',left:'6px'});
			$('#burnerFlame').hide();
			clearInterval(flame);
			$('#burnerOn,#clockDiv,#burnerOff').css({display:'none'});
			flag_rotate=false,rotateAmt=5,count=0,stirCount=0;
			dragDropperCount=0,dropFlag=false,stirrerClick=0,addMixtureFlag=false;
			nextClick=0,flameCount=0,dragSpatulaCount=0,cylinderCount=0,bigBtnClick=0;
			clockInt,degree=0,flag2=new Boolean(true),rotCount2=0,degree2 = -14;
			corkFlag=0;
			if(helpclickFlag==true){
	   			trip.stop(); 
	   		}
			if(inferenceClickFalg==true){
				trip1.stop(); 
			}
			if(alerttripFlag==true){
				alerttrip.stop();
			}				
			helpclickFlag=inferenceClickFalg=alerttripFlag=false;
			$('#beakerSoln').css({top:'99px',height:'19px',width:'101px'});
		}		
	});
}
 