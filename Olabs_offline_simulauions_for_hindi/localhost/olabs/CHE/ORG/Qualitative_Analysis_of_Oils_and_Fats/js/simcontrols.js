/*--------------- Global variable declarations--------------- */
var testName,selectSubTest,testVal=solventVal=0,paperPressHelp,dragDropperHelp_initTransluscentSpot,dragSpatula_acrolein,burnerOnHelp,testtubeToHeat,baudouinHubleHelp;
var dragDropperDesiGheeHelp,dragDropperVegGheeHelp,dragDropperRefOilHelp,testtubeToShake,inference_solubility=[];
var testtubeDesiGheeToHeat,testtubeVegGheeToHeat,testtuberefOilToHeat,helpMessage,inferenceMsg,helpFunctions,helpclickFlag=false,smellTripFlag=false,inferenceClickFalg=false,trip,trip1;
//---------------Onloading events--------------
var gt=$;
window.onload = function init(){
	//---------------Document ready function--------------
	$(document).ready(function() {
		/*--------------- Variable declarations--------------- */
		var selectTestFunctions,selectTestDiv,changeSample,sampleNames,shakeCount=0,flameCount=0,flame,flag_rotate=false,rotateAmt=5,dropTestube=0;
		var testtubeInt,burnerFlag=false,count=0,testCount_solubility=0,testtubeleftPosMax;
		var clockInt,degree=0,dropFlag=false,dropperLeftMin,dropperLeftMax;
		var testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft,testtubeSolnImg,testInitial,candleflameCount=0,candleflame;
		var topBottleLabel=[121,115,121];
		var topLabel=[7,0,7];
		/*--------------- Language translating object--------------- */	
		var tests=[gt.gettext("Solubility test"),gt.gettext("Transluscent Spot test"),gt.gettext("Acrolein test"),
		gt.gettext("Baudouin test"),gt.gettext("Huble test")];
		testName=["Solubility test","Transluscent Spot test","Acrolein test","Baudouin test","Huble’s test"];
		var solvents=[gt.gettext("Water"),gt.gettext("Alcohol"),gt.gettext("Chloroform")];	
		var oils=[gt.gettext("Desi ghee"),gt.gettext("Vegetable ghee"),gt.gettext("Refined oil")];
		var fliterPaperLabel=gt.gettext("Filter papers");
		var potassiumbisulphate=gt.gettext("Potassium bisulphate");
		var vanaspatiLabel="5ml melted vanaspati ghee";
		var desiLabel="5ml melted desi ghee";
		var	mainTop=$('#mainDiv').position().top;
		var	mainLeft=$('#mainDiv').position().left;	
		var cottonSeedOil=gt.gettext("Cotton seed oil");
		var linseedOil=gt.gettext("Linseed oil ");
		var hubleReagent=gt.gettext("Huble reagent");
		var h2so4Label=gt.gettext("Conc.H<sub>2</sub>SO<sub>4</sub>");
		var hclLabel=gt.gettext("Conc. HCl");
		var furfuralLabel=gt.gettext("Furfural solution");
		var smellPopUp=gt.gettext("A pungent irritating odour of acrolein is produced");
		var solventLabel=gt.gettext("Select the solvent:");
		var sampleLabel=gt.gettext("Select the sample:");
		
		/* Help message for drag the scale */
		var smellTrip = new Trip([
		{
			sel : $('#testtube_acroleinTest'),
			position : 'n',
			content :  smellPopUp,
			expose : false,
			delay : 4000
		}
		])	
		/*--------------- Template icon labels--------------- */
		$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		$('#reset').val(gt.gettext("Reset"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University Under research grant from department of IT"));
		/*--------------- Experiment heading--------------- */
		$('#expName').html(gt.gettext("Qualitative Analysis of Oils and Fats"));
		/*--------------- Add labels--------------- */
		$('#dropboxTestLbl').html(gt.gettext("Select the test:"));

		$('#dropboxSolventLbl').html(solventLabel);
		/*--------------- Solubility test help and inference--------------- */
		var solubilityDesigheeHelp=[gt.gettext("Drag the dropper towards the test tube containing desi ghee to drop water into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing desi ghee to drop alcohol into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing desi ghee to drop chloroform into it. ")];
		var solubilityVegGheeHelp=[gt.gettext("Drag the dropper towards the test tube containing vegetable ghee to drop water into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing vegetable ghee to drop alcohol into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing vegetable ghee to drop chloroform into it. ")];
		var solubilityRefOilHelp=[gt.gettext("Drag the dropper towards the test tube containing refined oil to drop water into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing refined oil to drop alcohol into it. ")
		,gt.gettext("Drag the dropper towards the test tube containing refined oil to drop chloroform into it. ")];
		burnerOnHelp=gt.gettext("Click on the knob of the burner to turn it on.");
		testtubeToHeat=gt.gettext("Drag the test tube towards the burner to heat the contents of the test tube.");
		testtubeDesiGheeToHeat=gt.gettext("Drag the test tube containing desi ghee towards the burner to heat the contents of the test tube.");	
		testtubeVegGheeToHeat=gt.gettext("Drag the test tube containing vegetable ghee towards the burner to heat the contents of the test tube.");
		testtuberefOilToHeat=gt.gettext("Drag the test tube containing refined oil towards the burner to heat the contents of the test tube.");
		testtubeToShake=gt.gettext("Drag the test tube towards the canvas area to shake the contents of the test tube well. ");
		var solubilitTestInference=gt.gettext("The samples are immiscible in water indicating the presence of oil or fat.");	
		var solubilityAlcoholTestInference=gt.gettext("The samples form lower layer, which dissolves on heating indicating the presence of oil or fat.");	
		var solubilityChloroformTestInference=gt.gettext("The samples are miscible in chloroform indicating the presence of oil or fat.");	
		
		inference_solubility[0]=solubilitTestInference;
		inference_solubility[1]=solubilityAlcoholTestInference;
		inference_solubility[2]=solubilityChloroformTestInference;
		var bottleSolubility=['bottle','bottle','brownBottle'];
		/*--------------- Transluscent Spot test help and inference--------------- */
		var dragGheeTestHelp=[gt.gettext("Drag the dropper towards the first filter paper to drop desi ghee into it."),gt.gettext("Drag the dropper towards the first filter paper to drop vanaspati ghee into it."),
		gt.gettext("Drag the dropper towards the first filter paper to drop refined oil into it.")];
		var dragfilterPaperTestHelp=[gt.gettext("Drag the filter paper to the lighting candle. Move the <br>filter paper over the flame, the light will be visible <br>only through the spot formed by the desi ghee."),gt.gettext("Drag the filter paper to the lighting candle. Move the <br>filter paper over the flame, the light will be visible <br>only through the spot formed by the vegetable ghee."),gt.gettext("Drag the filter paper to the lighting candle. Move the <br>filter paper over the flame, the light will be visible <br>only through the spot formed by the refined oil.")];
		paperPressHelp=gt.gettext("Drag the second filter paper towards the filter paper containing sample to press the sample with it. "); 
		var spotTestInference=gt.gettext("Fats and oils have higher boiling points so at room temperature they cannot absorb enough heat to evaporate. When fat or oil is place on the sheet of paper, it diffracts light. The diffracted light can pass from one side of the paper to another side and gives translucent spot.");	
		/*--------------- Acrolein test help and inference--------------- */
		var dragHelp_acrolein=[gt.gettext("Drag the spatula towards the test tube to put potassium bisulphate crystals into desi ghee.")
		,gt.gettext("Drag the spatula towards the test tube to put potassium bisulphate crystals into vanaspati ghee.")
		,gt.gettext("Drag the spatula towards the test tube to put potassium bisulphate crystals into refined oil.")]
		var acroleinTestInference=gt.gettext("Acrolein test is used to detect the presence of glycerol or fat. When fat is treated strongly in presence of dehydrating agent like potassium bisulphate,  the glycerol portion of the molecule is dehydrated to form an unsaturated aldehyde, acrolein that has a pungent irritating odour.");
		/*--------------- Boudouin test help and inference--------------- */
		var boudouinTestHelp=[gt.gettext("Drag the dropper towards the test tube containing melted desi ghee to drop Conc. HCl into it."),
		gt.gettext("Drag the dropper towards the test tube containing melted desi ghee to drop 2% furfural solution in alcohol into it."),gt.gettext("Drag the dropper towards the test tube containing melted vanaspati ghee to drop Conc. HCl into it."),gt.gettext("Drag the dropper towards the test tube containing melted vanaspati ghee to drop 2% furfural solution in alcohol into it."),gt.gettext("Wait for some time to complete the reaction.")];
		var boudouinTestInference1=gt.gettext("No charateristic cahnge.");
		var boudouinTestInference2=gt.gettext("This test is used to detect the presence of seasame oil. Seasame oil gives characteristic rose red colour with concentrated hydrochloric acid and furfural solution. Vanaspati ghee contains 5% seasame oil while pure desi ghee does not contain seasame oil.");
		/*--------------- Huble's help and inference--------------- */
		var hubleTestHelp=[gt.gettext("Drag the dropper towards the test tube containing cotton seed oil to drop chloroform into it."),gt.gettext("Drag the dropper towards the test tube containing cotton seed oil to drop Huble reagent into it."),gt.gettext("Drag the dropper towards the test tube containing linseed oil to drop chloroform into it."),gt.gettext("Drag the dropper towards the test tube containing linseed oil to drop Huble reagent into it.")];
		var hubleTestInference=gt.gettext("Huble reagent is an alcoholic solution of iodine which contains some mercuric chloride. During the reaction, the violet colour of iodine fades away if the oil or fat is unsaturated. If the oil or fat is saturated, the violet colour of iodine does not fade away. Here linseed oil is more unsaturated than cotton seed oil");
		testtubeCottonSeedToShake=gt.gettext("Drag the cotton seed oil test tube towards the canvas area to shake it.");
		testtubeLinseedOilToShake=gt.gettext("Drag the linseed oil test tube towards the canvas area to shake it.");
		
		/*--------------- Prevent the selection --------------- */
		$('#canvasBox').mousedown(function(event){	event.preventDefault();	});	
		//---------Add values into combobox--------	
		addintoDropDown($('#dropboxTest'),tests);
		//-------Test function array ------	
		selectTestFunctions=[solubilityTest,transluscentSpotTest,acroleinTest,baudouinTest,baudouinTest];
		selectTestDiv=["solubilityTest","transluscentSpotTest","acroleinTest","baudouinTest","baudouinTest"];			
		selectSubTest=["water","alcohol","chloroform"];
		testInitial=[[initSolubilityTest,initSolubilityTest,initSolubilityTest],[initTransluscentSpotTest,initTransluscentSpotTest,initTransluscentSpotTest],[initAcroleinTest,initAcroleinTest,initAcroleinTest]];
		//-------Call first test ------	
		selectTestFunctions[testVal]();
		//-------Function to add values into combobox------
		function addintoDropDown(getId,valueSet){
			$.each(valueSet, function(val, text) {
				getId.append(
					$('<option ></option>').val(val).html(text) 
				);
			});
		}
		//-------Function for changing test combobox values------		
	    $testChange=$('#dropboxTest').on('change', function() {	    	
			testVal=$testChange.val();	// get attribute value of test combobox	
			solventVal=0;		
			$('#solventContainer').show();		// Display solvent/ combobox
			$('.addSpace').css ({padding: '162px 0px 0px 0px'});
			$('#dropboxSolvent').empty(); // Empty solvent/ combobox			
			$('#solubilityTest,#transluscentSpotTest,#solubilityTest,#acroleinTest,#baudouinTest,#baudouinTest').hide();	// Hide all test
			$('#burnerContainer,#Inference,#labelDiv,#clockDiv,#labelBoard').hide();
			$('#label1Div,#label2Div,#label3Div').show();
			 resetAll();//Reset common changes 
			$('#'+selectTestDiv[testVal]).show();		// Display selected test
			selectTestFunctions[testVal]();	//Call different test functions				
			$('#inference').css({display:'none'}); // Inference
	    });
	    //-------Function for changing solvent combobox values------		
	    $solventChange=$('#dropboxSolvent').on('change', function() {
	    	solventVal=$solventChange.val();	// get attribute value of solvent combobox			
			resetAll();//Reset common changes 
			$("#"+changeSample).html(sampleNames[solventVal]); 
			testInitial[testVal][solventVal]();
			$('#inference').css({display:'none'}); // Inference
	    });		       
	    //-------Function for testing solubility------	
	   	function solubilityTest(){
	   		initSolubilityTest();//Initial settings
	   		showLabel();//Show Labels
	   		changeSample="solventName";
			sampleNames=solvents;
			$('#dropboxSolventLbl').html(solventLabel);
			addintoDropDown($('#dropboxSolvent'),solvents);	//---------Add different values into combobox--------	
			$("#"+changeSample).html(sampleNames[solventVal]);
			//---------Drag dropper to drop sample ---------
	 		$('#dropper_solubility').draggable({
				start:function(event, ui) {
					$('#dropper_solubility').css({zIndex:1}); ///dropper
				},
				stop:function(event, ui){
					if(this.offsetTop>=mainTop-75 && this.offsetTop<=mainTop+100 && this.offsetLeft>=mainLeft+dropperLeftMin &&this.offsetLeft<=mainLeft+dropperLeftMax){
						$(this).css({top:'7px',left:dropperLeft+'px'});	
						$('.drop1').css({top:'144px',left:dropLeft+'px'});
						$('.drop2').css({top:'144px',left:dropLeft+'px'});			
						$('#dropper_solubility').draggable({ disabled: true });
						$('#dropper_solubility').css({cursor:'default'});
						$('#dropper_solubility').css({zIndex:0});
						$('.drop1').css({display:'block'}); //Drops
						$('.drop1').animate({top:mainTop+195+'px'},500,function(){							
							$('.drop1').css({display:'none'});
							$('.drop2').css({display:'block'});
							increaseTesttubeSample(solutionDiv,solutionImg);//increasing solution							
							$("#"+solutionImg).animate({backgroundColor:solnBgColor,opacity:solnOpacity});
							$("#"+solutionImgLayer).animate({backgroundColor:layerBgColor,opacity:layerOpacity});						
							$('.drop2').animate({top:mainTop+267+'px'},500,function(){									
								$('.drop2').css({display:'none'});					
								$('#dropper_solubility').css({zIndex:0}); ///dropper
								$('#dropper_solubility').animate({top:'120px',left:dropperDefaultLeft+'px'},function(){
									$('#dropperSoln_solubility').animate({top:'63px',height:'56px',left:'6px',width:'9px'},function(){
										$('.drop1,.drop2,#dropper_solubility,#dropperSoln_solubility').stop(true);
										//Drag testtube for shake
										testCount_solubility++;										
										if(selectSubTest[solventVal] != "alcohol"){//water ,chloroform
											testtubeleftPosMax=510;
											dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft);
										}else{//alcohol
											testtubeleftPosMax=310;
											$('#burnerhelpDiv').css({zIndex:0});											
											burnerOn();	//On the burner 
										}										
									});	
								});	
							});							
						});	
						//Animate solution to drop
						$('#dropperSoln_solubility').delay(100).animate({top:'110px',height:'0px',width:'0px',left:'8px'});		
					}else{
						$('#dropper_solubility').css({zIndex:0}); ///dropper
						$('#dropper_solubility').css({top:'120px',left:dropperDefaultLeft+'px'});	
					}						
				}
			})	    
	   	}
		//-------Function to increase solution-------
		function increaseTesttubeSample(solutionDiv,solutionImg){
			var solnDivTop=$('#'+solutionDiv).position().top;
			var solnHeight=$('#'+solutionDiv).height();
			var solnTop=$('#'+solutionImg).position().top;						
			$('#'+solutionDiv).animate({top:solnDivTop-4+'px',height:solnHeight+3+'px'});				
			$('#'+solutionImg).animate({top:solnTop+4+'px'});
		}		
	    //-------Function for initial settings : Solubility Test-------
	    function initSolubilityTest(){
	    	$('#inference').css({display:'none'}); // Inference
	   		dragDropperDesiGheeHelp=solubilityDesigheeHelp[solventVal];	
	   		dragDropperVegGheeHelp=solubilityVegGheeHelp[solventVal];	
	   		dragDropperRefOilHelp=solubilityRefOilHelp[solventVal];	
	   		inferenceMsg=inference_solubility[solventVal];		   		  
	   		$('#bottleImg_solubility').attr('src',simPath+'images/'+bottleSolubility[solventVal]+'.png');
	   		clearInterval(testtubeInt);						
			$('#dropper_solubility').draggable({ disabled: false });    	
			$('#dropper_solubility').css({top:'120px',zIndex:0,cursor:'pointer'});//dropper
			$('#dropper_solubility,#testtubeSoln1_solubility,#testtubeSoln2_solubility,#testtubeSoln3_solubility,#testtubeSolnImg1_solubility,#testtubeSolnImg2_solubility,#testtubeSolnImg3_solubility').stop(true)
			$("#solnLayer_testtube1,#solnLayer_testtube2,#solnLayer_testtube3").stop(true);		
			$('#testtubeSoln1_solubility,#testtubeSoln2_solubility,#testtubeSoln3_solubility').css({top:'130px',height:'34px'});				
			$('#testtubeSolnImg1_solubility,#testtubeSolnImg2_solubility,#testtubeSolnImg3_solubility').css({backgroundColor:'#C4BD1B',opacity:'0.7',top:'-2px',height:'31px'});
			$("#solnLayer_testtube1,#solnLayer_testtube2,#solnLayer_testtube3").animate({opacity:0});
			$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility').css('cursor','default');
			$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility').draggable({disabled:true});
			$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility,#testtube1_solubility,#testtube2_solubility,#testtube3_solubility').css({zIndex:0,top:'126px'});
			$("#testtube1_solubility,#testtube2_solubility,#testtube3_solubility").rotate(0);
			$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility').stop(true);
			$('#testtube1_solubility,#testtube2_solubility,#testtube3_solubility').stop(true);
			flag_rotate=false;
			rotateAmt=5;
			testCount_solubility=0;	
			dropperLeft=101;
			dropperLeftMin=56;
			dropperLeftMax=146;
			testtubeImgTop=126;
			testtubeImgLeft=97;
			dropLeft=110;
			dropperDefaultLeft=460;
			solutionDiv='testtubeSoln1_solubility';
			solutionImg='testtubeSolnImg1_solubility';
			solutionImgLayer='solnLayer_testtube1';
			testtubeDrag='testtubeDrag1_solubility';
			testtubeImg='testtube1_solubility';				
			solnOpacity=0.5;
			$('#dropper_solubility').css({left:'460px'});
			$('#bottle_solubility').css({left:'442px'});
			$('#stand_solubility').css({left:'55px'});
			$('#labelDiv').css({left:'48px'});
			$('#testtubeDrag1_solubility,#testtube1_solubility').css({left:'97px'});
			$('#testtubeDrag2_solubility,#testtube2_solubility').css({left:'184px'});	
			$('#testtubeDrag3_solubility,#testtube3_solubility').css({left:'266px'});
			$('#burnerContainer').hide();
			if(selectSubTest[solventVal] == "water"){//in the case of water
				layerBgColor='#C4BD1B';
				solnBgColor='#CCC';
				layerOpacity=0.7;								
			}else if(selectSubTest[solventVal] == "alcohol"){//in the case of  alcohol
				layerBgColor='#CCC';
				solnBgColor='#C4BD1B';
				layerOpacity=0.5;
				showBurner();
				$('#dropper_solubility').css({left:'490px'});
				$('#bottle_solubility').css({left:'469px'});
				$('#stand_solubility').css({left:'150px'});
				$('#labelDiv').css({left:'143px'});
				$('#testtubeDrag1_solubility,#testtube1_solubility').css({left:'192px'});
				$('#testtubeDrag2_solubility,#testtube2_solubility').css({left:'279px'});	
				$('#testtubeDrag3_solubility,#testtube3_solubility').css({left:'361px'});
				dropperLeft=197;
				dropperLeftMin=150;
				dropperLeftMax=240;
				testtubeImgTop=126;
				testtubeImgLeft=192;
				dropLeft=204;
				dropperDefaultLeft=490;
			}else if(selectSubTest[solventVal] == "chloroform"){//in the case of chloroform				
				solnBgColor='#CCC';
				layerOpacity=0;
			}

	    }
	   
	    //-------Function for testing transluscent spot------	
	    function transluscentSpotTest(){
	    	initTransluscentSpotTest();//Initail settings function call
	    	changeSample="sampleName_transluscentSpot";
			sampleNames=oils;				
			$("#"+changeSample).html(sampleNames[solventVal]);
			$('#labelBoard').show();
			$('#labelBoard').css({top: '237px',left: '223px'});
			$('#labelBoardText').html(fliterPaperLabel); 
			$('#dropboxSolventLbl').html(sampleLabel);
	    	addintoDropDown($('#dropboxSolvent'),oils);	//---------Add different values into combobox--------	
	 		//---------Drag dropper to drop sample on the filter paper---------
	 		$('#dropper_transluscentSpot').draggable({
				start:function(event, ui) {
					$('#dropper_transluscentSpot').css({zIndex:1}); ///dropper
				},
				stop:function(event, ui){
					if(this.offsetTop>=mainTop-100 &&this.offsetTop<=mainTop+200 && this.offsetLeft>=mainLeft+97 &&this.offsetLeft<=mainLeft+422){
						$(this).css({top: '35px',left: '183px'});
						$('#dropper_transluscentSpot').draggable({ disabled: true });
						$('#dropper_transluscentSpot').css({cursor:'default'});
						$('#dropper_transluscentSpot').css({zIndex:0});
						$('.drop1').css({display:'block'}); //Drops
						$('.drop1').animate({top:mainTop+252+'px'},100,function(){							
							$('.drop1').css({display:'none'});
							$('.drop2,#spotStill_transluscentSpot').css({display:'block'});
							$('.drop2').animate({top:mainTop+280+'px'},500,function(){	
								//Animate to display transluscent spot
								$('#spotStill_transluscentSpot').animate({width:'97px',height:'25px', top: '4px', left: '40px'});								
								$('.drop2').css({display:'none'});
								$('#dropper_transluscentSpot').animate({top:'27px',left:'495px'},1000,function(){
									$('#dropperSoln_transluscentSpot').animate({top:'93px',height:'89px',left:'10px'});	
									//Drag the filter paper 
									$('#filterPaperDrag').css({cursor:'pointer'});
									$('#filterPaperDrag').draggable({ disabled: false });								
									$('#filterPaperDrag').draggable({
										start:function(event, ui) {
											$('#filterPaperDrag').css({zIndex:1});
										},
										stop:function(event, ui){	
											if(this.offsetTop>=mainTop+190 &&this.offsetTop<=mainTop+300 && this.offsetLeft>=mainLeft-115 &&this.offsetLeft<=mainLeft+170){
												$('#dropper_transluscentSpot').stop(true);
												$(this).css({top: '273px',left: '104px'});												
												$('#filterPaperDrag').css({cursor:'default'});
												$('#filterPaperDrag').draggable({ disabled: true });
												//Transluscent spot animatation
												$('#spot_transluscentSpot').css({display:'block'});
												$('#spot_transluscentSpot').animate({width:'97px',height:'25px', top: '4px', left: '40px'},function(){
													$('#filterPaperDrag').animate({top: '271px',left: '285px'},1000,function(){														
														$('#filterPaperDrag,#dropper_transluscentSpot,#dropperSoln_transluscentSpot').stop(true);
														$('.drop1,.drop2').stop(true);	
														$('#filterPaperStill').css({cursor:'pointer'});
														$('#filterPaperStill').draggable({ disabled: false });								
														$('#filterPaperStill').draggable({
															drag:function(event, ui) {
																$('#inference').css({display:'block'}); // Inference
																$('#filterPaperStill').css({top:'173px'});
																$('#filterPaperStill').css({zIndex:99});	
																$('#filterPaperStillImg').attr('src',simPath+'images/TransluscentSpotTest/filterpaperTransparent.png');
																$('#spotStill_transluscentSpot').css({display:'none'});																
															},
															stop:function(event, ui){	
																$('#filterPaperStill').css({top:'103px',left:'-26px'});																
															}

														});												
													});
												});	
																						
											}else{
												$('#filterPaperDrag').css({zIndex:0});
												$('#filterPaperDrag').css({top: '271px',left: '285px'});	
											}
										}
									});
								});
							}); 
						});
						//Animate solution to drop
						$('#dropperSoln_transluscentSpot').delay(100).animate({top:'185px',height:'0px',left:'18px'});					
					}else{
						$('#dropper_transluscentSpot').css({zIndex:0});
						$('#dropper_transluscentSpot').css({top:'27px',left:'495px'});						
					}
				}
			})
	    }
	    //-------Function for initial settings : Transluscent Spot Test-------
	    function initTransluscentSpotTest(){
	    	$('#inference').css({display:'none'}); // Inference
	    	inferenceMsg=spotTestInference;
	    	dragDropperHelp_initTransluscentSpot=dragGheeTestHelp[solventVal];	
	    	dragFilterPaperHelp_initTransluscentSpot=dragfilterPaperTestHelp[solventVal];
	    	$('.drop1').css({top:'215px',left:'196px'});
			$('.drop2').css({top:'224px',left:'196px'});
			$('#dropper_transluscentSpot').css({cursor:'pointer'});
	   		$('#spotStill_transluscentSpot,#spot_transluscentSpot').css({display:'none'});
	   		$('#dropper_transluscentSpot').draggable({ disabled: false });
	   		$('#dropper_transluscentSpot').css({zIndex:0});
			$('#dropper_transluscentSpot').css({top:'27px',left:'495px'});	
			$('#dropper_transluscentSpot,.drop1,.drop2').stop(true);
			$('#dropperSoln_transluscentSpot').stop(true);
			$('#filterPaperDrag').css({cursor:'default'});
	    	$('#filterPaperDrag').draggable({ disabled: true });
	    	$('#filterPaperStill').css({cursor:'default'});
			$('#filterPaperStill').draggable({ disabled: true });
	    	$('#filterPaperDrag').css({zIndex:0});
			$('#filterPaperDrag').css({top: '271px',left: '285px'});
			$('#dropperSoln_transluscentSpot').css({top:'93px',height:'89px',left:'10px'});	
			$('.labelTextClass').css({top:'4px',fontSize:'19px'});
			$('.bottleLabel').css({top:topBottleLabel[solventVal]+'px',fontSize:'19px',width:'88px',left:'0px'});
			$('#filterPaperStillImg').attr('src',simPath+'images/TransluscentSpotTest/filterPaper.png');	
	   		candleflame= setInterval(candleflameFn,100);
	   		$('#filterPaperDrag,#dropper_transluscentSpot,#dropperSoln_transluscentSpot').stop(true);
			$('.drop1,.drop2,#spotStill_transluscentSpot,#spot_transluscentSpot').stop(true);	
			$('#filterPaperStill').css({top:'273px',left:'105px'});
			$('#filterPaperStill').css({zIndex:0});
			$('#spot_transluscentSpot,#spotStill_transluscentSpot').css({width:'60px',height:'15px', top: '9px', left: '59px'});
	   		
	    }
	    function candleflameFn(){
	    	candleflameCount++;
			$("#candleFlame").attr('src',simPath+"images/TransluscentSpotTest/candleFlames/flame"+candleflameCount+".png");
			if(candleflameCount==5){
				candleflameCount=0;
			}
	    }
	    //-------Acrolein test function------
	    function acroleinTest(){
	    	initAcroleinTest();//Initail settings function call
	    	changeSample="labelText1";
	    	sampleNames=oils;
	    	showLabel();
	    	showBurner();
	    	$('#label2Div,#label3Div').hide();
	    	$('#dropboxSolventLbl').html(sampleLabel);	
	    	addintoDropDown($('#dropboxSolvent'),oils);	//---------Add different values into combobox--------	
			$("#"+changeSample).html(sampleNames[solventVal]); 
	    	//---------Drag dropper to drop sample on the filter paper---------
	 		$('#spatulaDiv').draggable({
				start:function(event, ui) {
					$('#spatulaDiv').css({zIndex:1}); //Spatula
				},
				stop:function(event, ui){
					if(this.offsetTop>=mainTop-50 && this.offsetTop<=mainTop+200 && this.offsetLeft>=mainLeft+150 &&this.offsetLeft<=mainLeft+330){
						$(this).css({top: '69px',left: '278px'});
						$('#spatulaDiv').draggable({ disabled: true });
						$('#spatulaDiv').css({cursor:'default'});
						$('#spatulaDiv').css({zIndex:0});
						$('#spatulaPowder').css({display:'none'}); // KHSO4 powder 
						$('#powderKHSO4').css({display:'block'}); // KHSO4 powder 
						$('#powderKHSO4').animate({top: '148px'},1000,function(){
							$('#spatulaDiv').animate({top: '232px',left: '463px'},1000);
							$('#burnerhelpDiv').css({zIndex:0});
							burnerOn();	//On the burner 													
						});
					}else{
						$('#spatulaDiv').css({top: '232px',left: '463px'});
						$('#spatulaDiv').css({zIndex:0});
					}
				}	
	 		})

	    }
	    //-------Function for initial settings : Acrolein Test-------
	    function initAcroleinTest(){
	    	testtubeleftPosMax=310;
	    	$('#inference').css({display:'none'}); // Inference
	    	$('#labelText1').css({top:topLabel[solventVal]+'px'});
	    	dragSpatula_acrolein=dragHelp_acrolein[solventVal];
	    	$('#labelBoard').show();	    	
	    	$('#labelBoard').css({top: '285px',left: '402px'});
	    	$('#labelBoardText').html(potassiumbisulphate); 
			$('#spatulaDiv').css({cursor:'pointer'});
			$('#spatulaDiv').draggable({ disabled: false });
			$('#spatulaDiv').css({zIndex:0});
			$('#spatulaDiv').css({top: '232px',left: '463px'});
			$('#spatulaPowder').css({display:'block'}); // KHSO4 powder 
			$('#powderKHSO4').css({display:'none'});
			$('#powderKHSO4,#spatulaDiv').stop(true);
			$('#powderKHSO4').css({top: '2px',opacity:1});					
			$('#testtubeDrag_acroleinTest').draggable({disabled:true});	
			$('#testtubeDrag_acroleinTest').css({cursor:'default'});
			$('#testtube_acroleinTest').css({zIndex:0});
			$('#testtubeDrag_acroleinTest,#testtube_acroleinTest').css({top:'127px',left:'262px'});
			$('#labelDiv').css({left:'217px'});			
			$('#testtubeSoln1_acroleinTest').rotate(0);
		}	
		  //-------Function :- Baudouin Test and Huble's Test ------	
	   	function baudouinTest(){
	   		initBaudouinTest();
	   		if(testName[testVal]==testName[4]){//Huble's Test
	   			inferenceMsg=hubleTestInference;
	   			baudouinHubleHelp=hubleTestHelp;
	   			$('#labelText1_baudouinTest,#labelText2_baudouinTest').css({top:'9px'});
	   			$("#labelText1_baudouinTest").html(cottonSeedOil);
	   			$("#labelText2_baudouinTest").html(linseedOil); 
	   			$('#bottle1Label_baudouinTest').html(solvents[2]);
				$('#bottle2Label_baudouinTest').html(hubleReagent);
				$('#dropperSoln2_baudouinTest').attr('src',simPath+'images/dropperSolnViolet.png');
		   		$("#bottleSoln2_baudouinTest").css({backgroundColor: '#621780',opacity:1});	
		   		$('#bottleImg_baudouinTest').attr('src',simPath+'images/'+bottleSolubility[2]+'.png');
	   		}else if(testName[testVal]==testName[3]){// Baudouin Test
	   			inferenceMsg=boudouinTestInference1;
	   			baudouinHubleHelp=boudouinTestHelp;
				$('#labelText1_baudouinTest,#labelText2_baudouinTest').css({top:'0px'});
		   		$('#bottle1Label_baudouinTest').html(hclLabel);
				$('#bottle2Label_baudouinTest').html(furfuralLabel);	
		   		$("#labelText1_baudouinTest").html(desiLabel);
		   		$("#labelText2_baudouinTest").html(vanaspatiLabel);
		   		$('#dropperSoln2_baudouinTest').attr('src',simPath+'images/dropperSolnYellow.png');
		   		$("#bottleSoln2_baudouinTest").css({backgroundColor: '#e3ce4e',opacity:1});	
		   		$('#bottleImg_baudouinTest').attr('src',simPath+'images/'+bottleSolubility[0]+'.png');	   				   	
	   		}
	   		$('#solventContainer,#label3Div').hide();		// Hide solvent/ combobox
	   		$('#labelDiv_baudouinTest').show();
	   		$('#labelDiv_baudouinTest').css({top:'255px',left:'63px'});
	   		$('.drop1,.drop2').css({left:'123px'});		
	   		$('#dropper1_baudouinTest').draggable({ disabled: false });		
	   		$('#dropper1_baudouinTest').css({cursor:'pointer'});
	   		dropperLeft_baudouinTest=115;
	   		dragDropper_baudouinTest('dropper1_baudouinTest',-11,dropperLeft_baudouinTest,103,366);
	   		solutionDiv='testtubeSoln1_baudouinTest';
			solutionImg='testtubeSolnImg1_baudouinTest';
			testtubeDrag='testtubeDrag1_baudouinTest';
			testtubeImg='testtube1_baudouinTest';
			testtubeSolnImg='testtubeSolnImg1_baudouinTest';
			testtubeImgTop=108;
			testtubeImgLeft=110;
			colorChange_baudouinTest='#621780';
			opacity_baudouinTest=1;
	   	}	
	 	//---------Drag dropper to drop sample ---------
	 	function dragDropper_baudouinTest(dropperId,topPos,leftPos,defaultTopPos,defaultLeftPos){
	 		$('#'+dropperId).draggable({
				start:function(event, ui) {
					$('#inference').css({display:'none'}); // Inference	
					$('#'+dropperId).css({zIndex:1}); //spatula
				},
				stop:function(event, ui){
					if(this.offsetTop>=mainTop-90 && this.offsetTop<=mainTop+140 && this.offsetLeft>=mainLeft+30 &&this.offsetLeft<=mainLeft+300){
						dropTestube++;
						$('#dropper1_baudouinTest').stop(true);
						$('#'+dropperId).css({top: topPos+'px',left:leftPos+'px'});
						$('#'+dropperId).draggable({ disabled: true });
						$('#'+dropperId).css({cursor:'default'});
						$('#'+dropperId).css({zIndex:0});
						$('.drop1').css({top:'114px'});
						$('.drop2').css({top:'124px'});
						$('.drop1').css({display:'block'});//Drops							
						$('.drop1').animate({top:mainTop+200+'px'},500,function(){							
							$('.drop1').css({display:'none'});
							$('.drop2').css({display:'block'});
							increaseTesttubeSample(solutionDiv,solutionImg);//increasing solution	*/
							$('.drop2').animate({top:mainTop+234+'px'},500,function(){	
								$('.drop1,.drop2').css({display:'none'});										
								$('#'+dropperId).animate({top: defaultTopPos+'px',left:defaultLeftPos+'px'},function(){
									$('#dropper1_baudouinTest,#dropper2_baudouinTest,.drop1,.drop2,#dropperSoln1_baudouinTest,#dropperSoln2_baudouinTest').stop(true);
									if(dropTestube==1){//Conc. HCl
										if(testName[testVal]==testName[4]){//Huble's Test	   										
	   										$('#'+testtubeSolnImg).animate({backgroundColor:'#CCC',opacity:0.5});
	   										dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft);		   									
	   									}else{//Baudouin Test	
	   										solutionDiv='testtubeSoln2_baudouinTest';
											solutionImg='testtubeSolnImg2_baudouinTest';
											dropperLeft_baudouinTest=200;
											$('.drop1,.drop2').css({left:'210px'});							
											$('#dropper1_baudouinTest').css({cursor:'pointer'});
											$('#dropper1_baudouinTest').draggable({ disabled: false });
											dragDropper_baudouinTest('dropper1_baudouinTest',-11,dropperLeft_baudouinTest,103,366);
	   									}	   										
									}else if(dropTestube==2){//Furfural solution	
										if(testName[testVal]==testName[4]){//Huble's Test	
											$('#'+testtubeSolnImg).animate({backgroundColor:colorChange_baudouinTest,opacity:opacity_baudouinTest},function(){
												animationStop();
												solutionDiv='testtubeSoln2_baudouinTest';
												solutionImg='testtubeSolnImg2_baudouinTest';
												dropperLeft_baudouinTest=200;
												testtubeDrag='testtubeDrag2_baudouinTest';
												testtubeImg='testtube2_baudouinTest';
												testtubeSolnImg='testtubeSolnImg2_baudouinTest';
												testtubeImgTop=108;
												testtubeImgLeft=196;
												colorChange_baudouinTest='#ccc';
												opacity_baudouinTest=0.5;
												$('.drop1,.drop2').css({left:'210px'});	
												$('#dropper1_baudouinTest').css({cursor:'pointer'});
												$('#dropper1_baudouinTest').draggable({ disabled: false });
												dragDropper_baudouinTest('dropper1_baudouinTest',-11,dropperLeft_baudouinTest,103,366);
											});	
										}else{//Baudouin Test
											$('.drop1,.drop2').css({left:'123px'});	
											solutionDiv='testtubeSoln1_baudouinTest';
											solutionImg='testtubeSolnImg1_baudouinTest';
											dropperLeft_baudouinTest=115;
											$('#dropper2_baudouinTest').css({cursor:'pointer'});
											$('#dropper2_baudouinTest').draggable({ disabled: false });
		   									dragDropper_baudouinTest('dropper2_baudouinTest',-11,dropperLeft_baudouinTest,103,453);
										}
									}else if(dropTestube==3){//Furfural solution
										if(testName[testVal]==testName[4]){//Huble's Test
											$('#'+testtubeSolnImg).animate({backgroundColor:'#CCC',opacity:0.5});
	   										dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft);
										}else{//Baudouin Test
											$('.drop1,.drop2').css({left:'210px'});	
											solutionDiv='testtubeSoln2_baudouinTest';
											solutionImg='testtubeSolnImg2_baudouinTest';
											dropperLeft_baudouinTest=200;
											$('#dropper2_baudouinTest').css({cursor:'pointer'});
											$('#dropper2_baudouinTest').draggable({ disabled: false });
	   										dragDropper_baudouinTest('dropper2_baudouinTest',-11,dropperLeft_baudouinTest,103,453);
										}
											   									
									}else if(dropTestube==4){
										if(testName[testVal]==testName[3]){//Baudouin Test
											showClock();//Show time
										}else{
											$('#inference').css({display:'block'}); // Inference
										}
									}
									$('#dropperSoln1_baudouinTest,#dropperSoln2_baudouinTest').css({top:'63px',height:'56px',width:'9px',left:'6px'});																			
								})															
							})
						})							
						if(dropperId=='dropper1_baudouinTest'){
							//Animate solution to drop
							$('#dropperSoln1_baudouinTest').delay(100).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
						}else{//Furfural soln
							//Animate solution to drop
							$('#dropperSoln2_baudouinTest').delay(100).animate({top:'110px',height:'0px',width:'0px',left:'8px'});	
						}
					}else{
						$('#'+dropperId).css({top: defaultTopPos+'px',left:defaultLeftPos+'px'});
						$('#'+dropperId).css({zIndex:0});
					}
				}	
	 		})	
	 		//Function for showing clock		
	 	 	function showClock(){
		   		$('.drop1,.drop2,#dropper1_baudouinTest,#dropper2_baudouinTest').stop(true); 		   			
				$('#clockDiv').show();		   									
				clockInt= setInterval(needleRotate,30);
		   	}
		   	//Function for rotating needle of clock
			function needleRotate(){
				degree=degree+2;
				//Clock needle rotate 
				$("#needle").css({"transform-origin":'4px 30px',"transform":'rotate(' + degree + 'deg)',"-webkit-transform-origin":'4px 30px',' -webkit-transform':'rotate(' + degree + 'deg)','-moz-transform-origin':'4px 30px',' -moz-transform':'rotate(' + degree + 'deg)'});
				if(degree>360){
					$('#clockDiv').hide();				
					clearInterval(clockInt);
					degree=0;	
					$('#inference').css({display:'block'}); // Inference					 
					inferenceMsg=boudouinTestInference2;
					$('#testtubeSolnImg2_baudouinTest').animate({backgroundColor:'#ef034e'});
				}
			}
	   	} 
	  	//-------Function for initial settings : Baudouin Test-------	  	   
	   function initBaudouinTest(){
	   		$('#inference').css({display:'none'}); // Inference
	   		testtubeleftPosMax=510;
		   	clearInterval(clockInt);
			$('#dropper1_baudouinTest').css({top: '103px',left:'366px'});
			$('#dropper2_baudouinTest').css({top: '103px',left:'453px'});
			$('#dropper1_baudouinTest,#dropper2_baudouinTest').css({zIndex:0});
			$('#dropper2_baudouinTest').draggable({ disabled: true });	
			$('.drop1,.drop2').css({left:'123px'});	
			$('#dropper2_baudouinTest').css({cursor:'default'});
			$('#dropperSoln1_baudouinTest,#dropperSoln2_baudouinTest').css({top:'63px',height:'56px',width:'9px',left:'6px'});	
			animationStop();
			$('#testtubeSolnImg1_baudouinTest,#testtubeSolnImg2_baudouinTest').css({backgroundColor:'#C4BD1B',opacity:1});
			degree=0,dropTestube=0;	
			$('#clockDiv').hide();	
			$('#testtubeSoln1_baudouinTest,#testtubeSoln2_baudouinTest').css({top:'130px',height:'34px'});				
			$('#testtubeSolnImg1_baudouinTest,#testtubeSolnImg2_baudouinTest').css({top:'-82px'});
			$('#testtube1_baudouinTest,#testtube1_baudouinTest').rotate(0);
	   }
	  	//-------Function to stop all animation : Baudouin Test------	
	    function animationStop(){
	   		$('.drop1,.drop2,#dropper1_baudouinTest,#dropper2_baudouinTest,#dropperSoln1_baudouinTest').stop(true); 	
			$('#testtubeSolnImg2_baudouinTest,#dropperSoln2_baudouinTest').stop(true); 
			$('#testtubeSoln1_baudouinTest,#testtubeSoln2_baudouinTest').stop(true);
			$('#testtubeSolnImg1_baudouinTest,#testtubeSolnImg2_baudouinTest').stop(true);
			$('#dropperSoln1_baudouinTest,#dropperSoln2_baudouinTest').stop(true);
	    }
		//-------Start test tube drag for heating-------
		function dragTesttubeFn(dragId,testubeid,testubetop,testubeleft){	
			$('#'+dragId).draggable({disabled:false});		
			$('#'+dragId).css('cursor','pointer');
			$('#'+dragId).draggable({
				start:function(event, ui) {
					$('#'+testubeid).css({zIndex:2});				
				},
				drag:function(event, ui) {
					$('#'+testubeid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				},
				stop : function(event, ui) {					
					if(this.offsetTop>-100 &&this.offsetTop<=160 && this.offsetLeft>=0 &&this.offsetLeft<=testtubeleftPosMax){
						$('#'+dragId).css('cursor','default');
						if(selectTestDiv[testVal]=="solubilityTest"){//Solubility Test
							if(selectSubTest[solventVal] == "alcohol"){//Alcohol
								$('#'+dragId).css({top:'-25px',left:'60px'});
							}else{
								$('#'+dragId).css({top:'10px',left:'367px'});
							}
						}else if(selectTestDiv[testVal]=="acroleinTest"){//Acrolein Test
							$('#'+dragId).css({top:'-25px',left:'60px'});
						}else{//Baudouin Test
							$('#'+dragId).css({top:'11px',left:'286px'});
						}
						$('#'+dragId).draggable({disabled:true});
						if(selectTestDiv[testVal]=="solubilityTest"){//Solubility Test	
							//all testubes drag disable for the time of shake shake
							$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility').css('cursor','default');
							$('#testtubeDrag1_solubility,#testtubeDrag2_solubility,#testtubeDrag3_solubility').draggable({disabled:true});
							$('#dropper_solubility').draggable({ disabled: true });
							$('#dropper_solubility').css({cursor:'default'});
							testtubeInt= setInterval( function() { testtubeShake(dragId,testubeid,testubetop,testubeleft); }, 20 );
						}else if(selectTestDiv[testVal]=="acroleinTest"){//Acrolein Test
							inferenceMsg=acroleinTestInference;
							$('#powderKHSO4').animate({opacity:0},1000,function(){								
								$('#inference').css({display:'block'}); // Inference
								$('#'+testubeid).css({zIndex:0});
								$('#'+dragId).css({top:testubetop+'px',left:testubeleft+'px'});
								$('#'+testubeid).animate({top:testubetop+'px',left:testubeleft+'px'},function(){
									smellTripFlag=true;
									smellTrip.start(); 
									window.smellTrip = smellTrip;
								});

							});
						}else{//Baudouin Test
							testtubeInt= setInterval( function() { testtubeShake(dragId,testubeid,testubetop,testubeleft); }, 20 );
						}
					}else {//Reset test tube drag
						$('#'+testubeid).css({zIndex:0});
						$('#'+dragId).css({top:testubetop+'px',left:testubeleft+'px'});	
					}
					$('#'+testubeid).css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
				}
			})
		}
		//------- Function to rotate test tube ------- 
		function testtubeShake(dragId,testubeid,testubetop,testubeleft){
			degreeRotate=rotateValue(10);
			//Shake the test tube
			$("#"+testubeid).rotate(degreeRotate);
			count++;
			//after start shaking
			if(count>210){
				if(selectTestDiv[testVal]=="solubilityTest"){//Solubility Test						
					 if(selectSubTest[solventVal] == "alcohol"){//alcohol
						if(testubeid=="testtube1_solubility"){//change on heating :- Desi ghee
							$("#solnLayer_testtube1").css({opacity:0});
							$("#testtubeSolnImg1_solubility").css({backgroundColor:'#CCC',opacity:'0.5'});
						}else if(testubeid=="testtube2_solubility"){//change on heating :- Veg ghee
							$("#solnLayer_testtube2").css({opacity:0});
							$("#testtubeSolnImg2_solubility").css({backgroundColor:'#CCC',opacity:'0.5'});
						}else if(testubeid=="testtube3_solubility"){//change on heating : -Refined oil
							$("#solnLayer_testtube3").css({opacity:0});
							$("#testtubeSolnImg3_solubility").css({backgroundColor:'#CCC',opacity:'0.5'});						
						}
					}
					
				}else if(selectTestDiv[testVal]=="acroleinTest"){//Acrolein Test				
					inferenceMsg=acroleinTestInference;
					$('#powderKHSO4').animate({opacity:0},1000,function(){								
						$('#inference').css({display:'block'}); // Inference						
					});						
				}
			}
			//after shaking
			if(count==250){
				clearInterval(testtubeInt);
				$("#"+testubeid).rotate(0);
				$("#"+testubeid).css({zIndex:0});
				$("#"+testubeid).animate({top:testubetop+'px',left:testubeleft+'px'});
				$("#"+dragId).animate({top:testubetop+'px',left:testubeleft+'px'},function(){
					if(selectTestDiv[testVal]=="solubilityTest"){//Solubility Test						
						$('#dropper_solubility').draggable({ disabled: false });
						$('#dropper_solubility').css({cursor:'pointer'});
						if(testCount_solubility==1){//Desi ghee test over	
							if(selectSubTest[solventVal] == "alcohol"){//in the case of  alcohol
								dropperLeft=285;
								dropperLeftMin=240;
								dropperLeftMax=330;
								dropLeft=292;
								testtubeImgLeft=279;
							}else{
								dropperLeft=188;
								dropperLeftMin=140;
								dropperLeftMax=227;
								dropLeft=197;
								testtubeImgLeft=184;
							}	
							solutionDiv='testtubeSoln2_solubility';
							solutionImg='testtubeSolnImg2_solubility';
							solutionImgLayer='solnLayer_testtube2';
							testtubeDrag='testtubeDrag2_solubility';
							testtubeImg='testtube2_solubility';																													
						}else if(testCount_solubility==2){//Veg ghee test over							
							if(selectSubTest[solventVal] == "alcohol"){//in the case of  alcohol
								dropperLeft=367;
								dropperLeftMin=330;
								dropperLeftMax=420;
								dropLeft=374;
								testtubeImgLeft=361;	
							}else{
								dropperLeft=272;
								dropperLeftMin=227;
								dropperLeftMax=320;
								dropLeft=280;
								testtubeImgLeft=266;	
							}
							solutionDiv='testtubeSoln3_solubility';
							solutionImg='testtubeSolnImg3_solubility';
							solutionImgLayer='solnLayer_testtube3';
							testtubeDrag='testtubeDrag3_solubility';
							testtubeImg='testtube3_solubility';																	
						}else if(testCount_solubility==3){//refined oil test over
							$('#inference').css({display:'block'}); // Inference							
							$('#dropper_solubility').draggable({ disabled: true });
							$('#dropper_solubility').css({cursor:'default'});
						}
											
					}else if(selectTestDiv[testVal]=="acroleinTest"){//Acrolein Test
						smellTripFlag=true;				
						smellTrip.start(); 				
						window.smellTrip = smellTrip;
					}
					else{//Baudouin Test
						$('#'+dragId).draggable({disabled:true});		
						$('#'+dragId).css('cursor','default');
						$('#dropper2_baudouinTest').css({cursor:'pointer'});
						$('#dropper2_baudouinTest').draggable({ disabled: false });
						dragDropper_baudouinTest('dropper2_baudouinTest',-11,dropperLeft_baudouinTest,103,453);
					}

				});
				count=0;
				//burner off at the end of all testtube shaking											
				$('#burnerFlame,#burnerOn').hide();	//Flame		
				$('#burnerOff').show();				
				$('#burnerhelpDiv').css({zIndex:5});	
			}
		}
		//-------Function to turn on the burner-------
		function burnerOn(){
			$('#burnerOff').click(function(){									
				$('#burnerFlame,#burnerOn').show();			
				$('#burnerOff').hide();
				flame= setInterval(flameFn,50);
				burnerFlag=true;
				if(selectTestDiv[testVal]=="solubilityTest"){//Solubility Test	
					dragTesttubeFn(testtubeDrag,testtubeImg,testtubeImgTop,testtubeImgLeft);
				}else{//Acrolein Test						
					dragTesttubeFn('testtubeDrag_acroleinTest','testtube_acroleinTest',127,262);	
				}			
			})
		}	
		//-------Show Flame on the burner	-------
		function flameFn(){
			flameCount++;
			$("#burnerFlame").attr('src',simPath+"images/Flames/flame"+flameCount+".png");
			if(flameCount==5){
				flameCount=0;
			}
		}	
	    //-------Function for showing labels ------	
	    function showLabel(){
	    	$("#labelText1").html(oils[0]);
	   		$("#labelText2").html(oils[1]);
	   		$("#labelText3").html(oils[2]);
	   		$('#labelDiv').css({top:'272px'});
	   		$('#labelDiv').show();
	    }
	     //-------Function for showing burner ------	
	    function showBurner(){
	   		$('#burnerContainer').show();
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
		//-------Function to reset all -------
		$('#reset').click(function(){			
			window.location.reload();
		})
		//-------Function to reset common changes -------
		function resetAll(){
			clearInterval(flame);
			clearInterval(testtubeInt);
			clearInterval(clockInt);
			$('.labelTextClass').css({fontSize:'16px'});
			$('#inference').css({display:'none'}); // Inference
			$('#burnerFlame,#burnerOn').hide();	//Flame		
			$('#burnerOff').show();	
			$('.drop1,.drop2').css({display:'none'});	
			$('#burnerhelpDiv').css({zIndex:5});
			$('.bottleLabel').css({top:'79px',fontSize:'14px',width:'59px',left:'0px'});
			shakeCount=0;
			if(helpclickFlag==true){//trip hide
				$('.trip-block').hide();
				trip.stop();
				helpclickFlag=false;
			}
			if(smellTripFlag==true)	{
				smellTrip.stop(); 
				smellTripFlag=false;
			}
			if(inferenceClickFalg==true){
				trip1.stop(); 
				inferenceClickFalg=false;
			}			
		}				
	});
}
