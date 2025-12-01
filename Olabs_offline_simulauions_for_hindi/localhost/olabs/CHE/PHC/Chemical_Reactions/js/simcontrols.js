//*--Ready function---------
var controlLabels,reactionIcon,iconSelected,displayArray,identIcon,burningMagnesiumHelp,burningMagnesiumInfer,sodiumSO4BariumCl2Help,sodiumSO4BariumCl2Infer,ironCuSO4Help,ironCuSO4Infer,litmusTestHelp,litmusTestInfer,hydrogenPopTestHelp,hydrogenPopTestInfer,zinkSO4NaOHHelp,zinkSO4NaOHInfer,zinkSO4H2SHelp,zinkSO4H2SInfer,		heatinCuso4Help,heatinCuso4Infer,sublimationIceHelp,sublimationIceInfer,meltingIceHelp,meltingIceInfer,reactionSet,imageContent,Litmuslabel,Hydrogenpoplabel;
var flaming1,flaming2,flaming5,mainTop,mainLeft,dragobjects,boardLabel,litmusArray,DragMaterial ,corkLeft,corkTop,naohlabel;
var rotateEvt,rotCount=0,flag=true,degree=0,anim1Count=0,dryRedpaper=false,redPaper=false,bluePaper=false;
var timer1,answer,correctResult,wrongResult,stage2,stage3;
var powderFlag=false;
var candleFlaming;//set interval for candle flame glow
var stirEvt,rotCount3=0,degree3 =14;
var flag3=new Boolean(true);
var stirFlag=true;
var copperInf=false;
var dropFlag=false;
var degree4=0;
var Int;
var deg=90;
var leftFlag=0;
var rightFlag=0;
var id;
var instrcn1;
var minTxt;
var path0=simPath+'images/nailStraightImg.png';
var path1=simPath+'images/nailInTesttubeWhite.png';
var path2=simPath+'images/nail1.png';
var path3=simPath+'images/nailStraightBrownImg.png';
var path4=simPath+'images/nailBrownImg.png';
var smokeTimer;
var inst1,inst2,inst3;
var rotateEvt9;
var rotCount9=0;
var flag9=true;
var degree9=-14;
var testtubflag=false;
var popupsFlag=false;
var dragCount=0;
var candleFlag=false;
var dragtongFlag=true;
var beakerflag=false;
var testLeft,testTop,KipsFlag=false,degval;
var KnobFlag=false;
var greenFlag=false;
var inferenceFlag=false;
var NaohFlag=false;
var kipsinferFlag=false;
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Chemical Reactions");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	/*$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));*/
	$(document).ready(function() {
		controlLabels=[gt.gettext("Reset"),gt.gettext("Select the reaction"),gt.gettext("Burning of magnesium in air"),gt.gettext("Sublimation of dry ice"),gt.gettext("Na<sub>2</sub>SO<sub>4</sub> (aq) with BaCl<sub>2</sub> (aq)"),gt.gettext("Iron nail with CuSO<sub>4</sub>   (aq)"),gt.gettext("Heating of CuSO<sub>4</sub>"),gt.gettext("Melting of ice"),gt.gettext("Zinc with dil.H<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Litmus test"),gt.gettext("Hydrogen pop test"),gt.gettext("ZnSO<sub>4</sub> (aq) with NaOH"),gt.gettext("ZnSO<sub>4</sub> (aq) with H<sub>2</sub>S gas"),gt.gettext("Select the Identification test"),gt.gettext("Result")];
		boardLabel=[gt.gettext("Moist red litmus paper"),gt.gettext("Magnesium oxide"),gt.gettext("BaCl<sub>2</sub>"),gt.gettext("Na<sub>2</sub>SO<sub>4</sub>"),gt.gettext("Dil.HCl"),gt.gettext("Dry red litmus paper"),gt.gettext("Blue litmus paper"),gt.gettext("Distilled Water"),gt.gettext("Hydrated CuSO<sub>4</sub>")];
		burningMagnesiumHelp=[gt.gettext("Turn on the burner by clicking the knob of the burner."),gt.gettext("Click on the tong to burn the magnesium ribbon."),gt.gettext("Drag the spatula to add <br>magnesium oxide to the litmus paper.")];
		burningMagnesiumInfer=[gt.gettext("Red litmus turns blue, indicating MgO is basic in <br>nature."),gt.gettext("Magnesium burns in air and utilize atmospheric <br>oxygen to form magnesium oxide."),gt.gettext("Dazzling flame")];
		sodiumSO4BariumCl2Help=[gt.gettext("Drag BaCl<sub>2</sub> bottle to pour<br> the solution into the conical flask."),gt.gettext("Drag Na<sub>2</sub>SO<sub>4</sub> bottle to pour <br>the solution into the conical flask."),
gt.gettext("Click on the conical flask and then click<br> on the stirrer to stir the solution."),gt.gettext("Drag the conical flask to decant <br>the upper solution from the flask to a beaker."),gt.gettext("Drag Dil.HCl bottle to pour <br>the solution into the conical flask."),gt.gettext("Click on the cork to open the bottle.")];
		sodiumSO4BariumCl2Infer=[gt.gettext("Sodium sulphate chemically reacts with Barium chloride<br> to form a white precipitate of Barium sulphate."),gt.gettext("The precipitate (Barium sulphate) obtained <br>is insoluble in dilute HCl.")];
		ironCuSO4Help=[gt.gettext("Drag the iron nail to immerse it in one of the test tube."),gt.gettext("Click on the thread to remove the iron nail from <br>the test tube and compare it with the other iron nail.")];
		ironCuSO4Infer=[gt.gettext("Iron is more reactive than copper as Fe<sup>2+</sup> ions <br> have displaced Cu<sup>2+</sup> ions from CuSO<sub>4</sub> <br>and form light green coloured FeSO<sub>4</sub> solution."),gt.gettext("The displaced copper is deposited as <br> a reddish -brown coating on the iron nail.")];
		litmusTestHelp=[gt.gettext("Drag the spatula to add  Zinc granules <br> to dil.Sulphuric acid."),
gt.gettext("Drag the litmus paper and bring it<br> over the mouth of the test tube.")];
		litmusTestInfer=[gt.gettext("Hydrogen gas is produced when zinc metal reacts with dil. H<sub>2</sub>SO<sub>4</sub>."),gt.gettext("No change in the colour of the litmus paper <br>(Hydrogen gas is neither acidic nor basic).")];
		hydrogenPopTestHelp=[gt.gettext("Drag the spatula to add Zinc granules<br> to  dil.Sulphuric acid."),
gt.gettext("Drag the cork to close the test tube."),gt.gettext("Drag the candle to show it <br>over the mouth of the test tube.")];
		hydrogenPopTestInfer=[gt.gettext("Zn reacts with dil.Sulphuric acid to produce hydrogen gas<br>which dips out the flame with mild explosion.")];
		zinkSO4NaOHHelp=[gt.gettext("Drag the spatula to add Zinc granules<br> to dil.Sulphuric acid."),
gt.gettext("Drag the dropper to add<br> NaOH solution into the test tube."),gt.gettext("Click on the test tube to shake it.")];
		zinkSO4NaOHInfer=[gt.gettext("Zinc reacts with dil. H<sub>2</sub>SO<sub>4</sub> to form<br>  zinc sulphate and hydrogen gas."),gt.gettext("Zinc sulphate  reacts with NaOH to form<br> a white gelatinous precipitate of Zinc hydroxide ."),gt.gettext("The white precipitate dissolves<br> when Sodium hydroxide is added in excess.")];
		zinkSO4H2SHelp=[gt.gettext("Drag the spatula to add  Zinc granules <br> to dil.Sulphuric acid."),gt.gettext("Drag the test tube to fit  <br>it in the Kipps apparatus."),gt.gettext("Click on the knob of Kipps apparatus to pass  <br>hydrogen sulphide gas to the solution."),gt.gettext("Click on the knob of Kipps apparatus<br> to turn off."),gt.gettext("Click on the test tube<br> to shake it."),gt.gettext("Drag the test tube <br>to place it in the stand.")];
		zinkSO4H2SInfer=[gt.gettext("Zinc sulphate reacts with Hydrogen sulphide gas<br> to form a white precipitate of Zinc sulphide.")];
		heatinCuso4Help=[gt.gettext("Turn on the burner by clicking the knob of the  burner."),gt.gettext("Drag the holder to heat the boiling tube<br> containing hydrated copper sulphate."),gt.gettext("Drag the dropper to add 2-3 drops of water to the<br> boiling tube containing anhydrous copper sulphate.")];
		heatinCuso4Infer=[gt.gettext("Hydrated copper sulphate crystals turn from blue to white <br>on losing water of crystallization."),gt.gettext("On adding water, anhydrous copper sulphate rehydrated to <br>form blue coloured hydrated copper sulphate.")];
		sublimationIceHelp=[gt.gettext("Keep a piece of dry ice (solid carbon dioxide) in a dish")];
		sublimationIceInfer=[gt.gettext("It is observed that the  solid carbon dioxide<br> directly converted to gaseous carbon dioxide.")];
		meltingIceHelp=[gt.gettext("Keep an ice cube (or ice cubes) in a bowl for a short period of time")];
		meltingIceInfer=[gt.gettext("It is observed that ice cubes slowly melts into water.")];
		Litmuslabel=[gt.gettext("Dil.Sulphuric acid"),gt.gettext("Zinc granules"),gt.gettext("Kipps Apparatus")];
		naohlabel=[gt.gettext("NaOH"),gt.gettext("Zinc Sulphate"),gt.gettext("Zinc Hydroxide")];
		reactionSet=[gt.gettext("Physical change"),gt.gettext("Chemical change")];
		correctResult=gt.gettext(" Correct. ");
		wrongResult=gt.gettext(' Wrong.Try agian! ');
		minTxt=gt.gettext("15 Mins");
		iconSelected=["icon1Click","icon2Click","icon3Click","icon4Click","icon5Click","icon6Click","icon7Click","icon8Click","icon9Click","icon10Click","icon11Click"];
		displayArray=["block","none"];
		dragobjects=['tong1','spatula1Full','testtube5','dropperDrag5'];
		imageContent=['right.png','wrong.png'];
		DragMaterial=["zincspatula","zincspatula8","candlediv","corkdrag","zincspatula9","dropper_div","zincspatula10","testtube_drag","testtub_div10"];
		litmusArray=["redPaper7","bluePaper7"];
		reactionIcon=iconSelected[0];
		identIcon=iconSelected[7];
		//*--Add label for all controls----	
		addLabel();		
		burnerOnFn();//Burner on function in the first reaction
		//*--Apply selectable false--------
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;		
		$('#icon1Click,#icon2Click,#icon3Click,#icon4Click,#icon5Click,#icon6Click,#icon7Click').click(function() {	//Click the reaction icons															
			reactionIcon=this.id;
			resetAllEvents();// Reset events all
			$("#icon1,#icon2,#icon3,#icon4,#icon5,#icon6,#icon7").css("opacity","1");						
			$("#tooltipLabelforClock,#TesttubegreenSolnImg").css({display:'none'	});
			$("#inference").css({display:displayArray[1]});
			$('#identificationTest,#nailInTesttube').css({display:displayArray[1]});
			$('#TesttubeBlueSolnImgRight,#TesttubeBlueSolnImg').css({opacity:1});
			$('#TesttubegreenSolnImg,#nailInTesttube,#TesttubeBlueSolnImgRight,#TesttubeBlueSolnImg,#nail1Img,#nail2Img').stop(true);
			$("#nailInTesttube").css({opacity:0});
			 $('#nail1Img').css({backgroundImage:'url('+path2+')',top:mainTop+302+'px',left:mainLeft+225+'px',display:'block',height:'30px'});
			 $('#nail2Img').css({backgroundImage:'url('+path2+')',top:mainTop+280+'px',left:mainLeft+225+'px',display:'block',height:'30px'});			 			
			if(reactionIcon==iconSelected[0]){//Burning of Magnesium in air	
				$("#icon1").css("opacity","0.3");
				$('#Na2SO4WithBaCl2,#ironCuSO4,#zincH2SO4').css({display:displayArray[1]});
				$('#heatinCuso4,#sublimationIce,#meltingIce').css({display:displayArray[1]});
				$('#burnMagnesium').css({display:displayArray[0]});	
			}else if(reactionIcon==iconSelected[1]){//Sublimation of dry ice
				$("#icon2").css("opacity","0.3");
				$('#burnMagnesium,#ironCuSO4,#zincH2SO4').css({display:displayArray[1]});
				$('#heatinCuso4,#Na2SO4WithBaCl2,#meltingIce').css({display:displayArray[1]});					
				$('#sublimationIce').css({display:displayArray[0]});
				
				$('#dishwaterFull2').delay(1000).animate({height:'168px',top:mainTop+163+'px'},5000,function(){																								 					$("#inference").css({display:displayArray[0]});	
					$("#dishsmoke2").css({display:displayArray[0]});
					$("#dishsmoke2Div").delay(1000).animate({height:'200px'},5000,function(){
						$('#resultOption').css({display:displayArray[0]});																   
					 });				
				});				
				$('#dishwater2').delay(1000).animate({top:mainTop+0+'px'},5000);
				$('#iceCubes2').delay(1000).animate({height:'0px',width:'0px',top:mainTop+313+'px',left:mainLeft+290+'px'},5000);	
			}else if(reactionIcon==iconSelected[2]){//Na2SO4(aq) with BaCl2(aq)
				$("#icon3").css("opacity","0.3");
				$('#burnMagnesium,#ironCuSO4,#zincH2SO4').css({display:displayArray[1]});
				$('#heatinCuso4,#sublimationIce,#meltingIce').css({display:displayArray[1]});					
				$('#Na2SO4WithBaCl2').css({display:displayArray[0]});					
			}else if(reactionIcon==iconSelected[3]){//Iron nail with CuSO4(aq)
				$("#icon4,#icon8").css("opacity","0.3");
				$('#burnMagnesium,#Na2SO4WithBaCl2,#zincH2SO4').css({display:displayArray[1]});
				$('#heatinCuso4,#sublimationIce,#meltingIce').css({display:displayArray[1]});
				$('#ironCuSO4').css({display:displayArray[0]});
			}else if(reactionIcon==iconSelected[4]){//Heating of CuSO4
				$("#icon5").css("opacity","0.3");
				$('#burnMagnesium,#Na2SO4WithBaCl2,#zincH2SO4,#ironCuSO4').css({display:displayArray[1]});
				$('#hydrogenPopTest,#sublimationIce,#meltingIce').css({display:displayArray[1]});				
				$('#heatinCuso4').css({display:displayArray[0]});	
				burnerOnFn5();
			}else if(reactionIcon==iconSelected[5]){//Melting an ice cube
				$("#icon6").css("opacity","0.3");	
				$('#burnMagnesium,#Na2SO4WithBaCl2,#zincH2SO4').css({display:displayArray[1]});
				$('#ironCuSO4,#heatinCuso4,#sublimationIce').css({display:displayArray[1]});	
				$('#meltingIce').css({display:displayArray[0]});					
				;
				$('#dishwaterFull6').animate({height:'107px',top:mainTop+211+'px'},12000);
				
				$('#dishwhite6').animate({top:mainTop+0+'px'},12000);
				$('#dishwater6').animate({top:mainTop+0+'px'},12000,function(){
					$('#resultOption').css({display:displayArray[0]});														 					$("#inference").css({display:displayArray[0]})
				});
				$('#iceCubes6').animate({height:'0px',width:'0px',top:mainTop+316+'px',left:mainLeft+290+'px',opacity:0},25000);	
				
			}else if(reactionIcon==iconSelected[6]){//Zinc with dil.H2SO4
				$("#icon9,#icon10,#icon11").css("opacity","1");
				$("#icon7,#icon8").css("opacity","0.3");
				$('#identificationTest').css({display:displayArray[0]});
				$('#burnMagnesium,#Na2SO4WithBaCl2,#heatinCuso4').css({display:displayArray[1]});
				$('#ironCuSO4,#sublimationIce,#meltingIce').css({display:displayArray[1]});	
				$('#hydrogenPopTest,#ZnSO4NaOH,#ZnSO4H2S').css({display:displayArray[1]});	
				$('#zincH2SO4,#litmusTest').css({display:displayArray[0]});
				dragobjs('zincspatula',mainTop-20,mainLeft+65,mainTop+95,mainLeft+200);
				dragobjs('redPaper7',mainTop+0,mainLeft+60,mainTop+140,mainLeft+225);
				dragobjs('bluePaper7',mainTop+0,mainLeft+60,mainTop+140,mainLeft+225);
			}			
			
		})	

		//Click the identification icons  	
		$('#icon8Click,#icon9Click,#icon10Click,#icon11Click').click(function() {
			$("#icon8,#icon9,#icon10,#icon11").css("opacity","1");			 
			//$('#icon8Click,#icon9Click,#icon10Click,#icon11Click').css({display:displayArray[0]});
			identIcon=this.id;
			resetAllEvents();// Reset events all
			$("#inference").css({display:displayArray[1]});
			if(identIcon==iconSelected[7]){//Litmus test
				$("#icon8").css("opacity","0.3");
				$('#hydrogenPopTest,#ZnSO4NaOH,#ZnSO4H2S').css({display:displayArray[1]});	
				$('#zincH2SO4,#litmusTest').css({display:displayArray[0]});
				dragobjs('zincspatula',mainTop-20,mainLeft+65,mainTop+95,mainLeft+200);
				dragobjs('redPaper7',mainTop+0,mainLeft+60,mainTop+140,mainLeft+225);
				dragobjs('bluePaper7',mainTop+0,mainLeft+60,mainTop+140,mainLeft+225);
			}else if(identIcon==iconSelected[8]){//Hydrogen pop test
				$("#icon9").css("opacity","0.3");
				$('#litmusTest,#ZnSO4NaOH,#ZnSO4H2S').css({display:displayArray[1]});	
				$('#hydrogenPopTest,#zincH2SO4').css({display:displayArray[0]});
				dragobjs('zincspatula8',mainTop-25,mainLeft+200,mainTop+105,mainLeft+350);
				dragobjs('candlediv',mainTop+20,mainLeft+267,mainTop+77,mainLeft+287);
				dragobjs('corkdrag',mainTop-50,mainLeft+150,mainTop+95,mainLeft+300);
				candleFlameFN();
			}else if(identIcon==iconSelected[9]){//ZnSO4(aq) with NaOH
				$("#icon10").css("opacity","0.3");	
				$('#hydrogenPopTest,#litmusTest,#ZnSO4H2S').css({display:displayArray[1]});	
				degval=0;
				$('#ZnSO4NaOH,#zincH2SO4').css({display:displayArray[0]});
				dragobjs('zincspatula9',mainTop-45,mainLeft+245,mainTop+85,mainLeft+350);
				dragobjs('dropper_div',mainTop-30,mainLeft+150,mainTop+100,mainLeft+325);
			}else if(identIcon==iconSelected[10]){//ZnSO4(aq) with H2S gas
				$("#icon11").css("opacity","0.3");
				$('#hydrogenPopTest,#ZnSO4NaOH,#litmusTest').css({display:displayArray[1]});	
				$('#ZnSO4H2S,#zincH2SO4').css({display:displayArray[0]});
				degval=20;
				dragobjs('zincspatula10',mainTop+100,mainLeft+40,mainTop+210,mainLeft+175);
				dragobjs('testtube_drag',mainTop+80,mainLeft+220,mainTop+250,mainLeft+400);
				dragobjs('testtub_div10',mainTop+20,mainLeft+20,mainTop+200,mainLeft+200);
			}																																						  		})
		
		//litmus paper drag , candle drag, cork drag ,dropper drag
		$('#redPaper7,#bluePaper7,#candlediv,#corkdrag,#dropper_div,#testtube_drag,#testtub_div10').draggable({ disabled: true });
		$('#redPaper7,#bluePaper7,#candlediv,#corkdrag,#dropper_div,#testtube_drag,#testtub_div10').css('cursor','default');
	function dragobjs(dragid,MinTops,MinLefts,MaxTops,MaxLefts){		
				$('#'+dragid).draggable({
										
						start: function(event, ui) {
							
							//
							
						// setting position to cork 
						//cork drag
						if(event.target.id==DragMaterial[3]){	
						if(popupsFlag==true)
						{
							$('#candlediv').draggable({ disabled: true });
							$('#candlediv').css('cursor','default');
						}
							corkLeft=this.offsetLeft;
							corkTop=this.offsetTop;
							$('#cork8').css({top:corkTop+'px',left:corkLeft+'px'});
							}
					else if(event.target.id==DragMaterial[7]){
						//$('#bubblesBeaker').stop(true);
						$('#bubblesBeaker').css({display:displayArray[1]}); 
						//$('#granuletesttube9').css({display:displayArray[1]});
					testLeft=this.offsetLeft;
					testTop=this.offsetTop;
							$('#testtub_div10').css({top:testTop+'px',left:testLeft+'px'});
							
							}
							else if(event.target.id==DragMaterial[5]){
					
							$("#inference").css({display:displayArray[1]});	
							
							}
							
							
							
				},
						drag: function(event, ui) {
						
							//candle drag
						if(event.target.id==DragMaterial[2]){
								if (((((this.offsetTop>=MinTops)&& (this.offsetLeft>=MinLefts)) && ((this.offsetTop<=MaxTops)&&(this.offsetLeft<=MaxLefts))) )){
						stickFlameDark()
			
						$("#candleFlame").css({display:displayArray[1]});			
						if(popupsFlag==false){
						candleFlag=true;
						$('#popup1').css({display:displayArray[0]});
						$('#popup2').css({display:displayArray[0]});	
						$('#popup3').css({display:displayArray[0]});
						$('#popup4').css({display:displayArray[0]});
						$('#popup5').css({display:displayArray[0]});
						popupsFlag=true;
						}	
						$("#inference,#resultOption").css({display:displayArray[0]});
						$("#candlediv").delay(700).animate({top:mainTop+32+'px',left:mainLeft+440+'px'},function(){
						$('#candlediv').draggable({ disabled: true });
						$('#candlediv').css('cursor','default');																				 
																												 });
						}
						}
						// setting position to cork 
						//cork drag
						else if(event.target.id==DragMaterial[3]){	
							corkLeft=this.offsetLeft;
							corkTop=this.offsetTop;
							$('#cork8').css({top:corkTop+'px',left:corkLeft+'px'});
							}
							
							else if(event.target.id==DragMaterial[7]){
									$("#inference").css({display:displayArray[1]});	
							$('#bubblesBeaker').css({display:displayArray[1]}); 
							$('#granuletesttube10').css({display:displayArray[1]});
							testLeft=this.offsetLeft;
							testTop=this.offsetTop;
							$('#testtub_div10').css({top:testTop+'px',left:testLeft+'px'});
							}	
							
							
							},
					stop : function(event, ui) {//stop the drag event
				if (((((this.offsetTop>=MinTops)&& (this.offsetLeft>=MinLefts)) && ((this.offsetTop<=MaxTops)&&(this.offsetLeft<=MaxLefts))) )){		//litmus test function	
							//spatula drag
								
						if(event.target.id==DragMaterial[0]){		
							inferenceFlag=true;
						$('#'+dragid).css({top:mainTop+20+'px',left:mainLeft+120+'px'});
						$('#zinc7').css({display:displayArray[1]});
						rotation(document.getElementById("zincspatula"),-20);
						dropZinc(event.target.id);
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');	
						$('#redPaper7,#bluePaper7').draggable({ disabled: false});
						$('#redPaper7,#bluePaper7').css('cursor','pointer');	
						}
						//litmus paper drag 
						else if(event.target.id==litmusArray[0]){
								inferenceFlag=false;
						//console.log(event.target.id);
						$('#'+dragid).css({top:mainTop+80+'px',left:mainLeft+120+'px'});
						$('#'+dragid).delay(900).animate({top:mainTop+271+'px',left:mainLeft+444+'px'});
						$("#inference,#resultOption").css({display:displayArray[0]});
						
						}
						else if(event.target.id==litmusArray[1]){
								inferenceFlag=false;
						$('#'+dragid).css({top:mainTop+80+'px',left:mainLeft+120+'px'});
						$('#'+dragid).delay(900).animate({top:mainTop+284+'px',left:mainLeft+462+'px'});
						$("#inference,#resultOption").css({display:displayArray[0]});
						
						}
						
						//hydrogen pop test function
						//spatula drag
						else if(event.target.id==DragMaterial[1]){
						$('#'+dragid).css({top:mainTop+27+'px',left:mainLeft+260+'px'});
						$('#zinc8').css({display:displayArray[1]});
						rotation(document.getElementById("zincspatula8"),-20);
						dropZinc(event.target.id);
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');	
						}
						// candle stop
							else if(event.target.id==DragMaterial[2])
							{
								if(candleFlag==false){
							$('#'+dragid).draggable({ disabled: false });
							$('#'+dragid).css({ cursor: 'pointer'});
							console.log(candleFlag);
						}else if(candleFlag==true)
						{
								$('#'+dragid).draggable({ disabled: true });
							$('#'+dragid).css({ cursor: 'default'});
								console.log(candleFlag);
						}
								}
							
						//cork drag
						else if(event.target.id==DragMaterial[3]){
							
						$('#cork8').css({top:mainTop+57+'px',left:mainLeft+265+'px'});
						 $('#'+dragid).css({top:mainTop+57+'px',left:mainLeft+265+'px'});
						$('#testtubes8').css({zIndex:'5'});
						$('#candlediv').draggable({ disabled: false });
						$('#candlediv').css('cursor','pointer');
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');	
					
						}
						//NaOH 	TEST 
						//spatula drag
						else if(event.target.id==DragMaterial[4]){
							NaohFlag=true;
						$('#'+dragid).css({top:mainTop+2+'px',left:mainLeft+267+'px'});
						$('#zinc9').css({display:displayArray[1]});
						rotation(document.getElementById("zincspatula9"),-10);
						dropZinc(event.target.id);
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');	
						}
						//dropper drag 
						else if(event.target.id==DragMaterial[5]){
							NaohFlag=false;
							$('#granuletesttube9,#bubblesBeaker').css({display:displayArray[1]});
console.log(dragCount);
						dragCount++;
						$('#'+dragid).css({top:mainTop+8+'px',left:mainLeft+271+'px'});
						$('#dropperpress9').css({'display':displayArray[0]});
						$('#dropper9,#dropper_sol').css({'display':displayArray[1]});
						dropSolns(event.target.id);
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');	
						}
						//Kipss aparatus test  //spatualla drag 
						else if(event.target.id==DragMaterial[6]){	
						//console.log(this.offsetLeft+"--"+this.offsetTop);
						 kipsinferFlag=true;
						$('#'+dragid).css({top:mainTop+158+'px',left:mainLeft+63+'px'});
						$('#zinc10').css({display:displayArray[1]});
						rotation(document.getElementById("zincspatula10"),-20);
						dropZinc(event.target.id);
						$('#'+dragid).draggable({ disabled: true});
						$('#'+dragid).css('cursor','default');
						}
						//Kipss aparatus test  //testtubedrag 
						else if(event.target.id==DragMaterial[7]){
					
							KnobFlag=false;
					$('#'+dragid).css({top:mainTop+186+'px',left:mainLeft+323+'px'});	
					$('#testtub_div10').css({top:mainTop+186+'px',left:mainLeft+323+'px'});				$('#testtube_drag').css({display:displayArray[1]});
					rotation(document.getElementById("testtube10"),+40);
					rotation(document.getElementById("testtub_sol10"),+40);
					rotation(document.getElementById("testtub_solwhite10"),+40);
					$('#testtube_water').css({top:mainTop+35+'px',left:mainLeft-23+'px',width:'55px',height:'57px',overflow: 'hidden'});
					$('#testtube10').css({top:mainTop+2+'px',left:mainLeft+1+'px'});
	
					$('#tube_whites').css({left:'28px',width:'17px'});
					$('#testtub_sol10').css({top:mainTop-11+'px',left:mainLeft+17+'px'});
					$('#testtub_solwhite10').css({top:mainTop-11+'px',left:mainLeft+17+'px'});
					$('#kipsopen,#kipsclose,#knob').css({cursor:'pointer'});
					$('#knob').click(function(){
					if(KnobFlag==false)
					{
					kipsOpen();	
					}
					else if(KnobFlag==true)
					{
						
					$('#testtub_div10').css({cursor:'pointer',zIndex:'5' });
					kipsClose();
					$( "#knob").unbind( "click" );
					$('#kipsopen,#kipsclose,#knob').css({cursor:'default'});
					$('#testtub_div10').click(function() {
					//test tube click function
					clearInterval(rotateEvt9);
					KipsFlag=true;
					rotateEvt9=setInterval(rotateFunction,10);
					});
					}
					});
				
					}
						//Kipss aparatus test  //last part testtubedrag 
					else if(event.target.id==DragMaterial[8]){
							 kipsinferFlag=false;
						$('#testtub_div10').css({top:mainTop+209+'px',left:mainLeft+63+'px',zIndex:'3'});
						$("#inference,#resultOption").css({display:displayArray[0]});
						
					}	
						//
					}
					else{
						//Litmus test 
						//spatula original position
						if(event.target.id==DragMaterial[0]){	
						$('#'+dragid).css({top:mainTop+228+'px',left:mainLeft+335+'px'});
						}
						//litmus original position
						else if(event.target.id==litmusArray[0]){	
						$('#'+dragid).css({top:mainTop+271+'px',left:mainLeft+444+'px'});
						}
						//litmus2 original position
						else if(event.target.id==litmusArray[1]){	
						$('#'+dragid).css({top:mainTop+284+'px',left:mainLeft+462+'px'});
						}
						//hydrogen test -spatuala original position
						else if(event.target.id==DragMaterial[1]){	
							$('#'+dragid).css({top:mainTop+224+'px',left:mainLeft+420+'px'});
						}
						//hydrogen test -candle original position
						else if(event.target.id==DragMaterial[2]){	
						//console.log(this.offsetTop+"---"+this.offsetLeft);
						$('#'+dragid).css({top:mainTop+32+'px',left:mainLeft+440+'px'})
						;	
						
						
						
						$('#'+dragid).draggable({ disabled: false });
							$('#'+dragid).css({ cursor: 'pointer'});
						}
						//hydrogen test -cork original position
						else if(event.target.id==DragMaterial[3]){	
						 $('#'+dragid).css({top:mainTop+182+'px',left:mainLeft+87+'px'});
						  $('#cork8').css({top:mainTop+182+'px',left:mainLeft+87+'px'});
						}
							//NaOHtest -spatula original position
						else if(event.target.id==DragMaterial[4]){	
						 $('#'+dragid).css({top:mainTop+234+'px',left:mainLeft+412+'px'});
						}
						//NaOHtest -dropper original position
						else if(event.target.id==DragMaterial[5]){	
						 $('#'+dragid).css({top:mainTop+159+'px',left:mainLeft+102+'px'});
						}
						//Kipss aparatus test-spatula original position
						else if(event.target.id==DragMaterial[6]){	
						 $('#'+dragid).css({top:mainTop+258+'px',left:mainLeft+212+'px'});
						}//Kipss aparatus test-test tube  original position
						else if(event.target.id==DragMaterial[7]){	
						 $('#'+dragid).css({top:mainTop+208+'px',left:mainLeft+63+'px'});						$('#testtub_div10').css({top:mainTop+208+'px',left:mainLeft+63+'px'});
						}
						else if(event.target.id==DragMaterial[8]){	
						$('#testtub_div10').css({top:mainTop+157+'px',left:mainLeft+285+'px'});}						
					}
					}
					})}
			
				
	//dropping of water 
	function dropSolns(ev){
			if(ev==DragMaterial[5]){

	$('#waterdrop,#waterdrops2,#waterdrops3').css({display:'block' });

	//$('#whiteblock').animate({top:'145px'});
$('#waterdrops2').animate({	//	First drop animation
			top:'230px'
		 });					
		 $('#waterdrops3').animate({	//	Second drop animation
			top:'210px'
		 });
		 	$('#waterdrop').animate({	//	Third drop animation
			top:'198px'
		 },500,function(){
			 	$('#whiteblock').css({display:'block' });
			 	$('#dropperpress9').css({'display':displayArray[1]});
				$("#label9").html(naohlabel[2]);
				$('#dropper9').css({'display':displayArray[0]})
			 	$('#waterdrop,#waterdrops2,#waterdrops3').css({display:'none' });
				$('#dropper_div').animate({top:mainTop+159+'px',left:mainLeft+102+'px'});
				$('#dropper_sol').css({'display':displayArray[0]});
				$('#testtube_div').css({"cursor":"pointer"});
				$('#testtube_div').click(function() {//test tube click function
						clearInterval(rotateEvt9);
						console.log(dragCount);
						if(dragCount==1){// first shake function
							rotateEvt9=setInterval(rotateFunction,10);		
						}
							else if(dragCount==2){	//second test tube shake
							rotCount9=0,degree9=-14,flag9=true;	
							rotateEvt9=setInterval(rotateFunction,10);
						}
						
				});
				
			});
		 
		}
	}
	//shaking testtube
	function rotateFunction(){	
		rotCount9++;	
	
		if(flag9==true){
			if(degree9<=degval){//0
				
				if(dragCount==1)
				{
				$('#test_solwhite').animate({'opacity':'1'},4000);
	
				}
				else if(dragCount==2)
				{
					$('#test_solwhite').stop(true);
					$('#whiteblock').css({display:displayArray[1]});
					$('#test_solwhite').animate({'opacity':'0'},4000);
					$('#dropper_div').draggable({ disabled: true});
					$('#dropper_div').css('cursor','default');
				}
				else if(KipsFlag==true)
				{
						$('#testtub_solwhite10').animate({'opacity':'0.6'},4000);
				}
				
				degree9++;
				if(degree9==degval){//0		
					flag9=false;	
				}
			}
		}else{
			degree9--;
			if(degree9==-20){//20
				flag9=true;
			}
		}
		
		if(KipsFlag==true){
			rotation(document.getElementById("testtub_div10"),degree9);
			}
			else
			{
				rotation(document.getElementById("testtube_div"),degree9);
			}
			
		
		if(rotCount9>=250){	
		if(KipsFlag==true){
			clearInterval(rotateEvt9);	
			rotation(document.getElementById("testtub_div10"),0);
			$('#testtub_div10').draggable({disabled:false});
			
			//
			}
		else{
			clearInterval(rotateEvt9);	
			rotation(document.getElementById("testtube_div"),0);
			$("#inference").css({display:displayArray[0]});
			$("#waterdrop").css({top:'166px',left:'276px',zIndex:'3'});
			$("#waterdrops2").css({top:'203px',left:'276px',zIndex:'3'});
			$("#waterdrops3").css({top:'233px',left:'276px',zIndex:'3'});
			$('#testtube_div').css({"cursor":"default"});
						if(dragCount==1){
							$('#dropper_div').draggable({ disabled: false });
							$('#dropper_div').css('cursor','pointer');
							
						}
						else
						{
							dragCount=0;
							$("#resultOption").css({display:displayArray[0]});
						}
		}
		
		}	
}
	
//dropping function of zinc granules 
	function dropZinc(e){	
	 /*Show drops */
	 //litmus test
	if(e==DragMaterial[0]){
		$('#drops,#drops2,#drops3').css({
			display:'block'
		 })
		$('#drops2').animate({	//	First drop animation
			top:'270px'
		 });					
		 $('#drops3').animate({	//	Second drop animation
			top:'260px'
		 });
		
		 $('#drops').animate({	//	Third drop animation
			top:'240px'
		 },500,function(){//call back function after finishing drops
			 rotation(document.getElementById("zincspatula"),0);	
			 $('#zincspatula').css({top:mainTop+228+'px',left:mainLeft+335+'px'});
			 $('#granuletesttube').css({display:displayArray[0]});
			 $('#bubblesBeaker').css({display:displayArray[0]});	
			$('#zinc7').css({display:displayArray[0]});
			$('#drops,#drops2,#drops3').css({display:'none'});
			$("#inference").css({display:displayArray[0]});
			
		})
		
	}
	//	hydrogen test  (zinc drops)
		if(e==DragMaterial[1]){
			$("#drops").css({display:'block',top:'126px',left:'276px',zIndex:'1'});
			$("#drops2").css({display:'block',top:'171px',left:'276px',zIndex:'1'});
			$("#drops3").css({display:'block',top:'220px',left:'276px',zIndex:'1'});
			
			$('#drops2').animate({	//	First drop animation
			top:'260px'
		 });					
		 $('#drops3').animate({	//	Second drop animation
			top:'240px'
		 });
		 $('#drops').animate({	//	Third drop animation
			top:'220px'
		 },300,function(){//call back function after finishing drops
			 		rotation(document.getElementById("zincspatula8"),0);	
			 		$('#zincspatula8').css({top:mainTop+224+'px',left:mainLeft+420+'px'});
			 		$('#granuletesttube8').css({display:displayArray[0]});
					//bubbles
				 	$('#x1').css({left:'10px'});
				  	$('#x2').css({left:'17px'});
				   	$('#x3').css({left:'22px'});
					$('#x4').css({left:'24px'});
					$('#bubblesBeaker').css({display:displayArray[0],top:'208px',
left: '260px'});	
					$('#zinc8').css({display:displayArray[0]});
					$('#drops,#drops2,#drops3').css({display:'none'});
					$('#corkdrag').draggable({ disabled: false });
					$('#corkdrag').css('cursor','pointer');
		})
		}
	 if(e==DragMaterial[4]){//NaOH function (zinc drops)
		
		$("#drops").css({display:'block',top:'159px',left:'276px',zIndex:'1'});
			$("#drops2").css({display:'block',top:'194px',left:'276px',zIndex:'1'});
			$("#drops3").css({display:'block',top:'232px',left:'276px',zIndex:'1'});
			
		$('#drops2').animate({	//	First drop animation
			top:'240px'
		 });					
		 $('#drops3').animate({	//	Second drop animation
			top:'220px'
		 });
		 $('#drops').animate({	//	Third drop animation
			top:'202px'
		 },300,function(){//call back function after finishing drops
			 		rotation(document.getElementById("zincspatula9"),0);	
			 		$('#zincspatula9').css({top:mainTop+234+'px',left:mainLeft+412+'px'});
			 		$('#granuletesttube9').css({display:displayArray[0]});
					//bubbles
					
				 	$('#x1').css({left:'10px'});
				  	$('#x2').css({left:'17px'});
				   	$('#x3').css({left:'22px'});
					$('#x4').css({left:'26px'});
					$('#bubblesBeaker').css({display:displayArray[0],top:'193px',left: '258px',height: '57px'});
					$('#zinc9').css({display:displayArray[0]});
					$('#drops,#drops2,#drops3').css({display:'none'});
				$('#granuletesttube9').fadeOut(12000);
					$('#x1').animate({'opacity':'0'},12000);
					$('#x2').animate({'opacity':'0'},12000);
					$('#x3').animate({'opacity':'0'},12000);
					$('#x4').animate({'opacity':'0'},12000);
					$('#dropper_div').draggable({ disabled: false });
					$('#dropper_div').css('cursor','pointer');
			
					$("#label9").html(naohlabel[1]);
					$("#inference").css({display:displayArray[0]});
		})
		}
		// kips appratus zinc drops
		else if(e==DragMaterial[6]){
			$("#drops").css({display:'block',top:'217px',left:'69px',height: '7px',zIndex:'1'});
			$("#drops2").css({display:'block',top:'238px',left:'69px',height: '7px',zIndex:'1'});
			$("#drops3").css({display:'block',top:'258px',left:'69px',height: '7px',zIndex:'1'});
			
 		$('#drops2').animate({	//	First drop animation
			top:'279px'
		 });					
		 $('#drops3').animate({	//	Second drop animation
			top:'266px'
		 });
			$('#drops').animate({	//	Third drop animation
			top:'246px'
		 },300,function(){//call back function after finishing drops
			 		rotation(document.getElementById("zincspatula10"),0);	
			 		$('#zincspatula10').css({top:mainTop+258+'px',left:mainLeft+212+'px'});
			 		$('#granuletesttube10').css({display:displayArray[0]});
					$('#zinc10').css({display:displayArray[0]});
					$('#drops,#drops2,#drops3').css({display:'none'});
					$('.bubbleBeakr ').css({width: '4px',height: '4px'});
					//bubbles
				 	$('#x1').css({left:'11px'});
				  	$('#x2').css({left:'15px'});
				   	$('#x3').css({left:'18px'});
					$('#x4').css({left:'19px'});
					$('#bubblesBeaker').css({display:displayArray[0],top:'231px',left: '52px',height: '53px'});
				$('#granuletesttube10').fadeOut(25000);
					$('#x1').animate({'opacity':'0'},25000);
					$('#x2').animate({'opacity':'0'},2500);
					$('#x3').animate({'opacity':'0'},25000);
					$('#x4').animate({'opacity':'0'},25000);
					$('#testtube_drag').draggable({ disabled: false });
					$('#testtube_drag').css('cursor','pointer');
					$("#inference").css({display:displayArray[0]});
		})
		}
}	
//Hydrogen pop test 
	//candle flame 	function 
	function candleGlow(){
	if($('#stickflame1').css('display') == "block"){  
		$('#stickflame1,#stickflame3,#stickflame4,#stickflame5').hide();
		$('#stickflame2').show();
	}else if($('#stickflame2').css('display') == "block"){ 
		$('#stickflame2,#stickflame1,#stickflame4,#stickflame5').hide();
		$('#stickflame3').show();
	}
	else if($('#stickflame3').css('display') == "block"){ 
		$('#stickflame2,#stickflame1,#stickflame3,#stickflame5').hide();
		$('#stickflame4').show();
	}
	else if($('#stickflame4').css('display') == "block"){ 
		$('#stickflame2,#stickflame1,#stickflame3,#stickflame4').hide();
		$('#stickflame5').show();
	}
	else{
	$('#stickflame2,#stickflame3,#stickflame4,#stickflame5').hide();
		$('#stickflame1').show();
	}
	
}	//display the flame 
	function candleFlameFN(){
	$("#candlediv").css({display:'block',zIndex:'4',top:'32px',left:'440px'});
	$("#candle").css({display:'block',top:'8px',left:'3px',zIndex:'3'});
	$("#candleFlame").css({display:'block',top:'-26px',left:'-9px'});
	$('.stickflame1').show();
	candleFlaming=setInterval(candleGlow,150);
}
	//pop ups from candle explosion
	function stickFlameDark(){
		$('#popup1').animate({
						top:'-73px',
						left:'-25px',
						width:'50px',
						height:'100px'
				},300,function(){
					
					$('#popup1').css({display:displayArray[1]});
					$('#popup1').css({top:'0px',left:'0px',width:'0px',height:'0px'});	
			});
			$('#popup2').animate({
			top:'0px',
			left:'0px',
			width:'0px',
			height:'0px'
			},400,function(){
			$('#popup2').css({display:displayArray[1]});
			$('#popup2').css({top:'-41px',left:'-12px',width:'22px',height:'59px'});	
			});
			$('#popup5').animate({
			bottom:'54px',
			},500,function(){
			$('#popup5').css({display:displayArray[1]});	
			$('#popup5').css({bottom: '38px'});	
			});
			$('#popup3').animate({
				bottom:'80px',
			},600,function(){
			$('#popup3').css({display:displayArray[1]});	
			$('#popup3').css({bottom: '30px'});		
			});
		
			$('#popup4').animate({
			bottom:'70px',
			},700,function(){
			$('#popup4').css({display:displayArray[1]});	
			$('#popup4').css({bottom: '39px'});	
			});
	
}
		//Kipps apparatus knob on function 
		function kipsOpen()
		{
			$('#kipsopen').css({display:displayArray[0]});	
			$('#kipsclose').css({display:displayArray[1]});
			$('#kipsbubblesBeaker').css({"visibility":"visible"});
			rotation(document.getElementById("kipsbubblesBeaker"),-50);
			$('#kippswater1').animate({height:'19px',top:mainTop+158+'px',width:'53px'},1000);
			$('#kipsol1').animate({top:mainTop-6+'px'},1000);
			$('#testtub_solwhite10').animate({'opacity':'0.4'},4000);
			$('#kippsbottomwater').css({display:displayArray[0]});
			$('#kippsbottomwater').animate({top:mainTop+232+'px',height:'25px'},1000);
			$('#kipsol2').animate({top:mainTop-3+'px',width: '56px'},1000);
			$('#kipswht2').animate({top:mainTop-27+'px'},1000);
			KnobFlag=true;
			$('.bubbleBeakr ').css({width: '4px',height: '4px'});
			$('#kipsapparatusbubbles').css({display:displayArray[0]});
			
		}
		function kipsClose()
		{
			$('#kipsopen').css({display:displayArray[1]});
			$('#kipsapparatusbubbles').css({display:displayArray[1]});
			$('#kipsclose').css({display:displayArray[0]});
			$('#kipsbubblesBeaker').stop(true);
			$('#kipsbubblesBeaker').css({"visibility":"hidden"});
			$('#testtub_div10').animate({top:mainTop+157+'px',left:mainLeft+285+'px'});	
			$('#testtube_drag').css({display:displayArray[1]});
			rotation(document.getElementById("testtube10"),+0);
			rotation(document.getElementById("testtub_sol10"),+0);
			rotation(document.getElementById("testtub_solwhite10"),+0);
			$('#testtube10').css({top:mainTop+0+'px',left:mainLeft+0+'px'});
			$('#testtube_water').css({top:mainTop+22+'px',left:mainLeft+1+'px',width:'13px',height:'57px',overflow: 'visible'});
			$('#tube_whites').css({left:mainLeft-1+'px',width:'13px'});
			$('#testtub_sol10').css({top:mainTop+1+'px',left:mainLeft+1+'px'});
			$('#testtub_solwhite10').css({top:mainTop+1+'px',left:mainLeft+0+'px'});
		
		}
		//*--Function to start click burner knob ---------
		function burnerOnFn(){
			$('#burner1off').click(function() {
				flaming1 = setInterval(flamesInScene1,1);	
				$('#scene1flame,#burner1on').css({display:displayArray[0]});
				$('#burner1off').css({display:displayArray[1]});
				$('#tong1').css('cursor','pointer');
				$('#tong1').css({ display: 'block' });
				//dragItem('tong1',mainTop+45,mainTop+115,mainLeft+168,mainLeft+310);
				
			})
		}
		$('#tong1').click(function() {
			$('#tong1').css({ display: 'none' });					   
			$('#tongwithAshes').animate({top:mainTop-43+'px',left:mainLeft+118+'px'},function(){
				$('#tongwithAshes').delay(500).animate({top:mainTop+0+'px',left:mainLeft+30+'px'});
									$('#tongContainer').delay(500).animate({width:230+'px'});
									$('#tong1flame').delay(500).animate({top:mainTop-38+'px',left:mainLeft+270+'px'});
									$('#sparkflame').delay(500).animate({top:mainTop+90+'px',left:mainLeft+224+'px'});
									$('#ashImg').delay(500).animate({top:mainTop-26+'px'});
									$('#ashContainer').delay(500).animate({top:mainTop+153+'px',left:mainLeft+277+'px'},function(){
									$("#dazzle,#tong1flame,#sparkflame").css({display:displayArray[1]});																												 							$('#ashImg').delay(1).animate({top:mainTop+10+'px'});
									$('#tongContainer').delay(1).animate({top:mainTop+110+'px'});																						  		
									$('#tongwithAshes').delay(1).animate({top:mainTop+65+'px'});
									$('#ashContainer').delay(1).animate({height:0+'px',top:mainTop+180+'px'},function(){
										$('#tongwithAshes').delay(1).animate({top:mainTop+0+'px',left:mainLeft-300+'px'});	
										 animComplete();	
					 
									});	
								});
				
								$('#spatula1Full').css('cursor','pointer');
								$("#dazzle,#tong1flame,#sparkflame,#ashContainer").css({display:displayArray[0]});
								flaming2 = setInterval(flamesOnTung, 50);																			  
																							  
  			});							
		})
		//*--Function to start drag events---------
		function dragItem(sampleid,minTop,maxTop,minLeft,maxLeft){			
			//*-----Start drag event ----------------
			$('#'+sampleid).draggable({//stop the drag event				
				start:function(event, ui) {
					$('#'+sampleid).css({zIndex:'1'});
					if(sampleid==dragobjects[1]){//Spatula
						$("#spatula1powder").css({display:displayArray[0]});
						$("#inference").css({display:displayArray[1]});
						if(redPaper==true && dryRedpaper==true && bluePaper==true){
							$('#'+sampleid).draggable({ disabled: true });
							$('#'+sampleid).css('cursor','default');
						}						
					}
				},
				drag:function(event, ui) {					
					if(sampleid==dragobjects[3] || sampleid==dragobjects[4]){//Dropper in reaction 5
						$('#dprWaterDiv5,#dprSecondDrag5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});							
					}else if(sampleid==dragobjects[0]){
						$('#tongwithAshes').css({top:this.offsetTop-97+'px',left:this.offsetLeft-55+'px'});
					}
					if (((((this.offsetTop>=minTop)&& (this.offsetLeft>=minLeft)) && ((this.offsetTop<=maxTop)&&(this.offsetLeft<=maxLeft))) )){						
							if(sampleid==dragobjects[0]){//Tong
								if(dragtongFlag==true){									
									dragtongFlag=false;
									$('#'+sampleid).css('cursor','default');	
									$('#'+sampleid).draggable({disabled:true });
									$('#'+sampleid).css({top:mainTop+68+'px',left:mainLeft+175+'px'});
									
									$('#tongwithAshes').delay(500).animate({top:mainTop+0+'px',left:mainLeft+30+'px'});
									$('#tongContainer').delay(500).animate({width:230+'px'});
									$('#tong1flame').delay(500).animate({top:mainTop-38+'px',left:mainLeft+270+'px'});
									$('#sparkflame').delay(500).animate({top:mainTop+90+'px',left:mainLeft+224+'px'});
									$('#ashImg').delay(500).animate({top:mainTop-26+'px'});
									$('#ashContainer').delay(500).animate({top:mainTop+153+'px',left:mainLeft+277+'px'},function(){
									$("#dazzle,#tong1flame,#sparkflame").css({display:displayArray[1]});																												 							$('#ashImg').delay(1).animate({top:mainTop+10+'px'});
									$('#tongContainer').delay(1).animate({top:mainTop+110+'px'});																						  		
									$('#tongwithAshes').delay(1).animate({top:mainTop+65+'px'});
									$('#ashContainer').delay(1).animate({height:0+'px',top:mainTop+180+'px'},function(){
										$('#tongwithAshes').delay(1).animate({top:mainTop+0+'px',left:mainLeft-300+'px'});	
										 animComplete();	
					 
									});	
								});
				
								$('#spatula1Full').css('cursor','pointer');
								$("#dazzle,#tong1flame,#sparkflame,#ashContainer").css({display:displayArray[0]});
								flaming2 = setInterval(flamesOnTung, 50);
							}
						  }else if(sampleid==dragobjects[3]){//dropper in  scene 5
							$("#inference").css({display:displayArray[1]});
							$('#'+sampleid).css({top:mainTop+129+'px',left:mainLeft+76+'px'});
							$('#dprWaterDiv5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
							$("#dprWhiteDiv5,#dropperWater5").css({display:displayArray[0]});
							
							$('#dprWaterDiv5,#dropperDrag5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
							beakerflag=true;
							
						}
					}
										
				},
				stop : function(event, ui) {	
				
				if (((((this.offsetTop>=minTop)&& (this.offsetLeft>=minLeft)) && ((this.offsetTop<=maxTop)&&(this.offsetLeft<=maxLeft))) )){	
						if(sampleid==dragobjects[1]){//Spatula							
							$('#spatula1Full').css({zIndex:'0'});
							powderFlag=true;							
							if((this.offsetLeft>=minLeft)&& (this.offsetLeft<=minLeft+80)){							
								$('#'+sampleid).css({top:mainTop+200+'px',left:mainLeft+37+'px'});
								$("#spatula1powder").css({display:displayArray[1]});
								$("#powder,#inference").css({display:displayArray[0]}); 																
								$('#spatula1Full').animate({top:mainTop+190+'px',left:mainLeft+326+'px'});
								$('#litmusred').delay(500).animate({opacity:'0'});
								$('#litmusblue').delay(500).animate({opacity:'1'});								
								redPaper=true;
								changeSpatulaDrag();
							}else if((this.offsetLeft>=minLeft+80)&& (this.offsetLeft<=minLeft+155)){
								$('#'+sampleid).css({top:mainTop+200+'px',left:mainLeft+116+'px'});
								$("#spatula1powder").css({display:displayArray[1]});
								$("#powderRed").css({display:displayArray[0]}); 															
								$('#spatula1Full').animate({top:mainTop+190+'px',left:mainLeft+326+'px'});
								dryRedpaper=true;
								changeSpatulaDrag();
							}else{
								$('#'+sampleid).css({top:mainTop+200+'px',left:mainLeft+194+'px'});
								$("#spatula1powder").css({display:displayArray[1]});
								$("#powderBlue").css({display:displayArray[0]}); 															
								$('#spatula1Full').animate({top:mainTop+190+'px',left:mainLeft+326+'px'});
								bluePaper=true;
								changeSpatulaDrag();
							}
						
						}else if(sampleid==dragobjects[2]){//test tube in  scene 5
							$('#'+sampleid).css({top:mainTop-49+'px',left:mainLeft+277+'px'});
							rotateEvt=setInterval(rotateFn,20);
						}else if(sampleid==dragobjects[3]){//dropper in  scene 5
							$('#'+sampleid).css({top:mainTop+129+'px',left:mainLeft+76+'px'});
							$('#dprWaterDiv5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
						}
					}else{
						
						if(sampleid==dragobjects[0]){//Tong
							$('#'+sampleid).css({zIndex:'0'});
							$('#'+sampleid).css({top:mainTop+97+'px',left:mainLeft+55+'px'});
							$('#tongwithAshes').css({top:this.offsetTop-97+'px',left:this.offsetLeft-55+'px'});
						}else if(sampleid==dragobjects[1]){//Spatula
							$('#'+sampleid).css({zIndex:'0'});
							$('#'+sampleid).css({top:mainTop+190+'px',left:mainLeft+326+'px'});
						}else if(sampleid==dragobjects[2]){//test tube in  scene 5
							$('#'+sampleid).css({zIndex:'0'});
							$('#'+sampleid).css({top:mainTop+100+'px',left:mainLeft+47+'px'});
						}
						else if(sampleid==dragobjects[3] ){//dropper in  scene 5	
						
							if(beakerflag==true){
								if (((((this.offsetTop>=mainTop-100)&& (this.offsetLeft>=mainLeft+237)) && ((this.offsetTop<=mainTop)&&(this.offsetLeft<=mainLeft+267))) )){
									$('#'+sampleid).css({top:mainTop-14+'px',left:mainLeft+250+'px'});
									$('#dprWaterDiv5,#dropperDrag5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
									$('#tubePowderBlue5,#tubePowderWhite5').stop(true);
									dropSoln();
									dropFlag=true;
									$("#dprWhiteDiv5,#dropperWater5").delay(100).animate({opacity:0},100,function(){
										$('#tubePowderBlue5').delay(100).animate({opacity:1});	
										$('#tubePowderWhite5').delay(100).animate({opacity:0});	
										$('#dprWaterDiv5').delay(1000).animate({top:mainTop+157+'px',left:mainLeft+328+'px'});
										copperInf=true;
										$("#inference").css({display:displayArray[0]});
										$('#resultOption').css({display:displayArray[0]});
									});	
								}else{
									$('#'+sampleid).css({top:mainTop+129+'px',left:mainLeft+76+'px'});
									$('#dprWaterDiv5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'});
								}
									
							}else{
								$('#'+sampleid).css({top:mainTop+157+'px',left:mainLeft+328+'px'});
								$('#dprWaterDiv5,#dropperDrag5').css({top:this.offsetTop+'px',left:this.offsetLeft+'px'}); 
							}
						}
						
					}
				}
			});
		}
		//*--Function to show the flame ---------
		function flamesOnTung(){			
			flameFn($(".tong1flame1"),$(".tong1flame2"),$(".tong1flame3"),$(".tong1flame4"),$(".tong1flame5"));
			flameFn($(".sparkflame1"),$(".sparkflame2"),$(".sparkflame3"),$(".sparkflame4"),$(".sparkflame5"));			
		}
		//Function to tung animation
		function animComplete(){
			clearInterval(flaming1);				
			$('#burner1off').css('cursor','default');	
			$('#scene1flame,#burner1on').css({display:displayArray[1]});
			$('#burner1off').unbind('click');
			$('#burner1off').css({display:displayArray[0]});				
			$("#dazzle").css({display:displayArray[1]}); 				
			$("#inference").css({display:displayArray[0]});					
			$('#spatula1Full').css('cursor','pointer');	
			$('#spatula1Full').draggable({ disabled: false });	
			$('#tongunselect').css({display:displayArray[1]});
			dragItem('spatula1Full',mainTop+50,mainTop+250,mainLeft+10,mainLeft+250);
		}
		// function to disable spatula drag 
		function changeSpatulaDrag(){
			if(redPaper==true && dryRedpaper==true && bluePaper==true){
				$('#spatula1Full').draggable({ disabled: true });
				$('#spatula1Full').css('cursor','default');
				$('#resultOption').css({display:displayArray[0]});
			}
		}
		//Function to click BaCl2 bottle cork
		$('#bCork3Div').click(function() {	
			$('#bCork3').animate({left:mainLeft+350+'px',top:mainTop+160+'px'});		
			$('#bCork3Div').css({display:'none'});	
			$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},function(){
				$('#stirrer3').animate({top:mainTop+72+'px'})
				$('#botBwaterDiv3').css('cursor','pointer');
				$('#botBwaterDiv3').draggable({ disabled: false });
				$('#botBwaterDiv3').draggable({//stop the drag event
					containment: "#canvasBox",
					stop : function(event, ui) {					 
						if (((((this.offsetTop>=mainTop+90)&& (this.offsetLeft>=mainLeft+90)) && ((this.offsetTop<=mainTop+170)&&(this.offsetLeft<=mainLeft+300))) )){						
							$('#botBwaterDiv3').draggable({ disabled: true });
							$('#botBwaterDiv3').css('cursor','default');						
							$('#botBwater3Container').css({top:'43px',left:'-13px',width:'80px',overflow: 'hidden'});						
							$('#botBwater3').css({top:'-43px',left:'13px'});
							$('#botBwhiteDiv3').css({width:'75px'});
							rotation(document.getElementById("botBwater3"),-90);
							rotation(document.getElementById("bBottle3"),-90);						
							$('#botBwaterDiv3').css({top:mainTop+105+'px',left:mainLeft+213+'px'})
							$('#flaskSolnDiv3,#botBselectDiv,#whiteInfunnel').css({display:displayArray[0]});
							$('#whiteInfunnel').css({display:displayArray[0]});
							$('#flaskwater3').delay(100).animate({top:mainTop-86+'px'});						
							$('#flaskoffwhitewater3').delay(500).animate({top:mainTop-86+'px'},100);
							$('#botBwhiteDiv3').css({opacity:0});
							$('#flaskwhite3').delay(500).animate({top:mainTop-86+'px'},100,function(){
								$('#whiteInfunnel').css({display:displayArray[1]});																	
								rotation(document.getElementById("botBwater3"),0);
								rotation(document.getElementById("bBottle3"),0);
								$('#botBwhiteDiv3').css({opacity:0.5});
								$('#botBwhiteDiv3').css({width:'47px',left:'12px'});
							});
							$('#flaskSolnDiv3').delay(500).animate({height:11+'px',top:mainTop+120+'px'},100,function(){
								$('#botBwaterDiv3').delay(500).animate({top:mainTop+207+'px',left:mainLeft+318+'px'},function(){
			$('#bCork3').delay(500).animate({top:mainTop+201+'px',left:mainLeft+331+'px'},function(){
			$('#nCork3Div').css('cursor','pointer');
			$('#botNselectDiv').css({display:displayArray[1]});																							  });																														  });					
								$('#stirrer3').delay(500).animate({top:mainTop+0+'px'},function(){																						
									$('#stirrer3').delay(500).animate({left:mainLeft-46+'px'})																																										 								
								});	
										
								
							});				
						}else{
							$('#botBwaterDiv3').css({top:mainTop+207+'px',left:mainLeft+318+'px'});
						}
					}
				})
			});
			
		})	
		//Function to click Na2SO4  bottle cork
		$('#nCork3Div').click(function() {
			$('#nCork3Div').css({display:'none'});
			$('#nCork3').animate({left:mainLeft+435+'px',top:mainTop+160+'px'});
			$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},function(){
				$('#stirrer3').animate({top:mainTop+72+'px'});
				$('#botNwaterDiv3').css('cursor','pointer');
				$('#botNwaterDiv3').draggable({ disabled: false });
				$('#botNwaterDiv3').draggable({//stop the drag event
					containment: "#canvasBox",
					stop : function(event, ui) {					 
						if (((((this.offsetTop>=mainTop+90)&& (this.offsetLeft>=mainLeft+90)) && ((this.offsetTop<=mainTop+170)&&(this.offsetLeft<=mainLeft+300))) )){
							$('#nCork3Div').css('cursor','pointer');
							$('#botNwaterDiv3').draggable({ disabled: true });
							$('#botNwater3Container').css({top:'43px',left:'-13px',width:'80px',overflow: 'hidden'});
							$('#botNwater3').css({top:'-43px',left:'13px'});
							rotation(document.getElementById("botNwater3"),-90);
							rotation(document.getElementById("nBottle3"),-90);
							$('#whiteInfunnel').css({display:displayArray[0]});
							$('#botNwaterDiv3').css({top:mainTop+105+'px',left:mainLeft+213+'px'})
							$('#botNselectDiv,#flaskoffwhitewater3,#whiteInfunnel').css({display:displayArray[0]});				
							$('#botNwhiteDiv3').css({opacity:0});
							$('#flaskwater3').delay(500).animate({top:mainTop-66+'px'},100,function(){
																						 });
							$('#flaskoffwhitewater3').delay(500).animate({top:mainTop-68+'px'},100);
							$('#flaskwhite3').delay(500).animate({top:mainTop-66+'px'},function(){
								$('#whiteInfunnel').css({display:displayArray[1]});																			
								rotation(document.getElementById("botNwater3"),0);
								rotation(document.getElementById("nBottle3"),0);
								$('#botNwhiteDiv3').css({width:'47px',left:'12px'});
								$('#botNwhiteDiv3').css({opacity:0.5});
								$('#stirrer3').delay(500).animate({top:mainTop+0+'px'},
								function(){	
									$('#inference').css({display:displayArray[0]});
									$('#stirrer3').delay(500).animate({left:mainLeft-46+'px'},function(){
										$('#flask3').css('cursor','pointer');
										shakeFlask();																						   })																																										 									
									});	
							});
													
							$('#flaskSolnDiv3').delay(500).animate({height:33+'px',top:mainTop+100+'px'},100,function(){
								$('#botNwaterDiv3').delay(500).animate({top:mainTop+207+'px',left:mainLeft+403+'px'},function(){
			$('#nCork3').delay(300).animate({top:mainTop+201+'px',left:mainLeft+415+'px',});				
			$('#nCork3Div').delay(300).animate({top:mainTop+189+'px',left:mainLeft+400+'px'});																														  });							
											
							});	
							
							
						}else{
							$('#botNwaterDiv3').css({top:mainTop+207+'px',left:mainLeft+403+'px'});
						}
					}
				})
			});
			
		})
		//Function to click HCl  bottle cork
		$('#hCork3Div').click(function() {
			$('#hCork3Div').css({display:'none'});
			$('#hCork3').animate({left:mainLeft+535+'px',top:mainTop+160+'px'});
			$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},function(){
				$('#stirrer3').animate({top:mainTop+72+'px'});
				$('#botHwaterDiv3').css('cursor','pointer');
				$('#botHwaterDiv3').draggable({ disabled: false });
				$('#botHwaterDiv3').draggable({//stop the drag event
					containment: "#canvasBox",
					stop : function(event, ui) {					 
						if (((((this.offsetTop>=mainTop+90)&& (this.offsetLeft>=mainLeft+90)) && ((this.offsetTop<=mainTop+170)&&(this.offsetLeft<=mainLeft+300))) )){
							$('#botHwaterDiv3').draggable({ disabled: true });
							$('#botHwaterDiv3').css('cursor','default');						
							$('#botHwaterDiv3').css({top:mainTop+105+'px',left:mainLeft+213+'px'});
							$('#flaskSolnDiv3').css({opacity:1});
							$('#flaskSolnDiv3,#botHselectDiv,#whiteInfunnel').css({display:displayArray[0]});
							$('#botHwater3Container').css({top:'43px',left:'-13px',width:'80px',overflow: 'hidden'});		
							rotation(document.getElementById("botHwater3"),-90);
							rotation(document.getElementById("hBottle3"),-90);
							$('#whiteInfunnel').css({display:displayArray[0]});	
							$('#botHwater3').css({top:'-43px',left:'13px'});
							$('#botHwhiteDiv3').css({width:'75px'});
							$('#botHwhiteDiv3').css({opacity:0});
							$('#flaskwater3').delay(500).animate({top:mainTop-86+'px'},function(){
								$('#whiteInfunnel').css({display:displayArray[1]});	
								rotation(document.getElementById("botHwater3"),0);
								rotation(document.getElementById("hBottle3"),0);														  								$('#botHwhiteDiv3').css({width:'47px',left:'12px'});
								$('#botHwhiteDiv3').css({opacity:0.5});
								$('#botHwaterDiv3').delay(500).animate({top:mainTop+207+'px',left:mainLeft+484+'px'},function(){
									$('#hCork3').delay(500).animate({top:mainTop+201+'px',left:mainLeft+497+'px',});						
									$('#hCork3Div').delay(500).animate({top:mainTop+189+'px',left:mainLeft+482+'px',});																											  });		
									$('#stirrer3').delay(500).animate({top:mainTop+0+'px'},function(){
										$('#stirrer3').delay(500).animate({left:mainLeft-46+'px'})																																										 								
									});	
							});
							$('#flaskSolnDiv3').delay(500).animate({height:11+'px',top:mainTop+119+'px'})
							$('#flaskoffwhitewater3').delay(500).animate({top:mainTop-86+'px'});
							$('#flaskwhite3').delay(500).animate({top:mainTop-86+'px'});						
											
													
										
						$('#flask3').css('cursor','pointer');
						//Function to click on flask 
						$('#flask3').click(function() {
							rotCount3=0;
							flag3=true;
							degree3=14;
							stirFlag=false;
							$("#flask3").unbind('click');
							$('#flask3').css('cursor','default');0
							$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},500,function(){
							$('#stirrer3').animate({top:mainTop+145+'px',left:mainLeft+190+'px'})
							$('#stirrer3').css('cursor','pointer');
								stirFn();
							});
						})						
																			
						}else{
							$('#botHwaterDiv3').css({top:mainTop+207+'px',left:mainLeft+484+'px'});
						}
					}
				})
			});
			
		})
		//Function to drag flask 
		function dragFlask3Fn(){
			$('#flask3').draggable({//stop the drag event
				containment: "#canvasBox",
			    drag:function(){					
					$('#inference').css({display:displayArray[1]});
			    },
				stop : function(event, ui) {
					if (((((this.offsetTop>=mainTop+0)&& (this.offsetLeft>=mainLeft-10)) && ((this.offsetTop<=mainTop+220)&&(this.offsetLeft<=mainLeft+160))) )){	
						$("#flask3").draggable({ disabled: true });
						$('#flask3').css('cursor','default');
						$('#flask3').css({top:mainTop+125+'px',left:mainLeft+115+'px'});
						rotation(document.getElementById("flask3"),-90);
						$('#beakerwhite3,#beakerwater3').delay(100).animate({top:mainTop-40+'px'});
						$('#bkrSolnDiv3').css({display:displayArray[0]});
						$('#bkrSolnDiv3').delay(100).animate({height:92+'px',top:mainTop+270+'px'});																								 			 			$('#flaskSolnDiv3').delay(500).animate({opacity:0},100,function(){	
							rotation(document.getElementById("flask3"),0);
							$('#flask3').delay(500).animate({top:mainTop+180+'px',left:mainLeft+165+'px'	});
						$('#stirrer3').stop(true);
						$('#stirrer3').delay(500).animate({top:mainTop+0+'px',left:mainLeft+65+'px'},function(){
							$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft-46+'px'});
							$('#flask3').draggable({ disabled: true });});
						 });	
						$('#flaskoffwhitewater3,#botHselectDiv').css({display:displayArray[1]});
						
						$('#flaskSolnDiv3').css({height:1+'px',top:mainTop+129+'px',left:mainLeft+0+'px'});
						$('#flaskwater3').css({top:mainTop-96+'px'});						
						$('#flaskwhite3').css({top:mainTop-96+'px'});
						$('#hCork3Div').css('cursor','pointer');
					}else{
						$('#flask3').css({top:mainTop+180+'px',left:mainLeft+165+'px'});	
								
					}
				}
			})
		}		
		//*--Function to shake the flask---------
		function shakeFlask(){
			//Function to click on flask 
			$('#flask3').click(function() {
				$("#flask3").unbind('click');	
				$('#stirrer3').stop(true);			
				$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},500,function(){
																							   //Change
				$('#stirrer3').animate({top:mainTop+140+'px',left:mainLeft+190+'px'},function(){
		$('#stirrer3').css('cursor','pointer');
		stirFlag=true;
		stirFn();																					  })
				
			});
			})
		}
		//Function to click on stirrer
		function stirFn(){
			$("#stirrer3").click(function(){										  
				$("#stirrer3").unbind('click');
				$('#stirrer3').css({'cursor':'default'});
				stirEvt=setInterval(stirringFn,1);				
			});
		}
		//*--Function to start stir the glass rod ---
		function stirringFn(){			
			rotCount3++;			
			if(flag3==true){
				if(degree3>=0){
					degree3--;
					if(degree3==0){
						flag3=false;
					}
				}
			}else{
				degree3++;
				if(degree3==25){
					flag3=true;
				}
			}
			rotation(document.getElementById("stirrer3"),degree3);
			if(stirFlag==false){
				if(rotCount3==50){
					$('#whitePowder3').css({display:displayArray[1]});
					$('#whitePdr1').css({display:displayArray[0]});
				}else if(rotCount3==100){	
					$('#whitePdr1').css({display:displayArray[1]});
					$('#whitePdr2').css({display:displayArray[0]});				
				}
			}
			if(rotCount3>150){							
				clearInterval(stirEvt);
				if(stirFlag==true){
					$("#flask3").bind('click');
					$('#flaskoffwhitewater3').css('opacity','0');
					$('#whitePdr1,#whitePdr2').css({display:displayArray[1]});
					$('#whitePowder3').css({display:displayArray[0]});
					rotation(document.getElementById("stirrer3"),0);
					$('#stirrer3').stop(true);					
					$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},function(){
						$('#stirrer3').animate({left:mainLeft+65+'px'},function(){
							$('#stirrer3').animate({top:mainTop+106+'px'})													
						});																 						$('#flask3').draggable({ disabled: false });
						dragFlask3Fn();
					})
				}else{
					$('#stirrer3').animate({top:mainTop+0+'px',left:mainLeft+175+'px'},function(){
						$('#stirrer3').animate({left:mainLeft-46+'px'});
					})	
					$('#whitePowder3').css({display:displayArray[0]});
					$('#inference').css({display:displayArray[0]});
					$('#resultOption').css({display:displayArray[0]});
				}				
			}
		}
		// Function to click on burner knob in the reaction 5
		function burnerOnFn5(){
			$('#burnerOn5').click(function() {
				flaming5 = setInterval(flamesInScene5, 50);	
				$('#testtube5').css('cursor','pointer');
				$('#testtube5').draggable({ disabled: false });
				dragItem('testtube5',mainTop-111,mainTop+100,mainLeft+230,mainLeft+330);
				$('#scene5flame,#burnerOff5').css({display:displayArray[0]});
				$('#burnerOn5').css({display:displayArray[1]});
			})
		}
		//*--Function to show the flame ---------
		function flamesInScene5(){
			flameFn($(".scene5flame1"),$(".scene5flame2"),$(".scene5flame3"),$(".scene5flame4"),$(".scene5flame5"));			
		}
		function flameFn(flameclass1,flameclass2,flameclass3,flameclass4,flameclass5){
			if(flameclass1.css('display') == "block"){
				flameclass1.css({display:'none' });	
				flameclass3.css({display:'none' });	
				flameclass4.css({display:'none' });	
				flameclass5.css({display:'none' });	
				flameclass2.css({display:'block' });	         
			}else if(flameclass2.css('display') == "block"){          
				flameclass1.css({display:'none' });
				flameclass2.css({display:'none' });
				flameclass4.css({display:'none' });
				flameclass5.css({display:'none' });
				flameclass3.css({display:'block' });        
			}else if(flameclass3.css('display') == "block"){          
				flameclass1.css({display:'none' });
				flameclass3.css({display:'none' });
				flameclass2.css({display:'none' });
				flameclass5.css({display:'none' });
				flameclass4.css({display:'block' });       
			}else if(flameclass4.css('display') == "block"){          
				flameclass1.css({display:'none' });
				flameclass3.css({display:'none' });
				flameclass4.css({display:'none' });
				flameclass2.css({display:'none' });
				flameclass5.css({display:'block' });      
			}else{
				flameclass2.css({display:'none' });
				flameclass3.css({display:'none' });
				flameclass4.css({display:'none' });
				flameclass5.css({display:'none' });
				flameclass1.css({display:'block' });
			}
		}
		//Function for drop the Iodine solution...
		function dropSoln(){	
			 /*Show drops */			 
			$('#drops51,#drops52,#drops53').css({	display:'block' });				
			 $('#drops52').animate({	//	First drop animation
				top:mainTop+260+'px'
			 });					
			 $('#drops51').animate({	//	Second drop animation
				top:mainTop+260+'px'
			 });	
			 $('#drops53').animate({	//	Third drop animation
				top:mainTop+260+'px'
			 },500,function(){//call back function after finishing drops			
				$('#drops51,#drops52,#drops53').css({display:'none'})
			})
			 
		}
		//*--Function to rotate testtube in scene 5 ---
		function rotateFn(){			
			rotCount++;		
			if(flag==true){
				if(degree<=8){
					degree++;
					if(degree==8){
						flag=false;
					}
				}
			}else{
				degree--;
				if(degree==-10){
					flag=true;
				}
			}
			if(rotCount>=150){
				$('#tubePowderBlue5').delay(100).animate({opacity:0});	
				$('#tubePowderWhite5').delay(100).animate({opacity:1});	
			}
			rotation(document.getElementById("testtube5"),degree);			
			if(rotCount>=200){				
				clearInterval(rotateEvt);
				$("#inference").css({display:displayArray[0]});
				$('#burnerOn5').css({display:displayArray[0]});
				$('#burnerOff5').css({display:displayArray[1]});				
				rotation(document.getElementById("testtube5"),0);
				$('#testtube5').css({zIndex:'0'});
				$('#testtube5').animate({top:mainTop+100+'px',left:mainLeft+47+'px'});
				$('#scene5flame').css({display:displayArray[1]});
				$('#testtube5').draggable({ disabled: true });
				$('#testtube5').css('cursor','default');
				$("#burnerOn5").unbind('click');
				$('#dropperDrag5').css('cursor','pointer');
				$('#dropperDrag5').css({display:displayArray[0]});				
				dragItem('dropperDrag5',mainTop+90,mainTop+179,mainLeft+39,mainLeft+119);				
			}
		}
		//Function to click chemical change option in the result part
		$('#chemClick').click(function() {
			$('#correct1').css({display:displayArray[0]});						   
			if(reactionIcon==iconSelected[1] || reactionIcon==iconSelected[5]){
				$("#correct1").attr('src',simPath+"images/"+imageContent[1]);
			}else{
				$("#correct1").attr('src',simPath+"images/"+imageContent[0]);
			}			
		});
		//Function to click physical change option in the result part
		$('#phyClick').click(function() {
			$('#correct2').css({display:displayArray[0]});						   
			if(reactionIcon==iconSelected[1] || reactionIcon==iconSelected[5]){
				$("#correct2").attr('src',simPath+"images/"+imageContent[0]);
			}else{
				$("#correct2").attr('src',simPath+"images/"+imageContent[1]);
			}			
		});
		//Function to rotate object
		function rotation(rotateId,degree){
			rotateId.style.webkitTransformOrigin='50% 50%';
			rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
			rotateId.style.MozTransformOrigin='50% 50%';
			rotateId.style.MozTransform ='rotate('+ degree +'deg)';
		}
		//*--Function to show the flame ---------
		function flamesInScene1(){
			flameFn($(".scene1flame1"),$(".scene1flame2"),$(".scene1flame3"),$(".scene1flame4"),$(".scene1flame5"));			
		}
		//*--Function for adding label for all controls---	
		function addLabel(){		
			$('#reset').attr('value',controlLabels[0]);	
			$('#reaction').html(controlLabels[1]);
			$('#icon1Label').html(controlLabels[2]);
			$('#icon2Label').html(controlLabels[3]);
			$('#icon3Label').html(controlLabels[4]);
			$('#icon4Label').html(controlLabels[5]);
			$('#icon5Label').html(controlLabels[6]);
			$('#icon6Label').html(controlLabels[7]);
			$('#icon7Label').html(controlLabels[8]);
			$('#icon8Label').html(controlLabels[9]);
			$('#icon9Label').html(controlLabels[10]);
			$('#icon10Label').html(controlLabels[11]);
			$('#icon11Label').html(controlLabels[12]);
			$('#idntTest').html(controlLabels[13]);
			$('#litmusLabel').html(boardLabel[0]);
			$('#sampleLabel').html(boardLabel[1]);
			$('#litmusLabelconst1').html(boardLabel[5]);
			$('#litmusLabelconst2').html(boardLabel[6]);
			$('#bstring3').html(boardLabel[2]);
			$('#nstring3').html(boardLabel[3]);
			$('#hstring3').html(boardLabel[4]);
			$("#cntrlSpan5").html(controlLabels[14]);
			$("#cntrlSpan3").html(reactionSet[1]);
			$("#cntrlSpan4").html(reactionSet[0]);
			$('#waterLabel5').html(boardLabel[7]);
			$('#copperLabel5').html(boardLabel[8]);
			$("#label7").html(Litmuslabel[0]);
			$("#zincLabel7").html(Litmuslabel[1]);
			$("#label8").html(Litmuslabel[0]);
			$("#zincLabel8").html(Litmuslabel[1]);
			$("#label9").html(Litmuslabel[0]);
			$("#zincLabel9").html(Litmuslabel[1]);
			$("#naohLabel9").html(naohlabel[0]);
			$("#label10").html(Litmuslabel[0]);
			$("#zincLabel10").html(Litmuslabel[1]);
			$("#kipsLabel0").html(Litmuslabel[2]);
		}
		//Function clear all set intervals
		function clearIntervalFn(){
			clearInterval(flaming1);
			clearInterval(flaming2);
			clearInterval(Int);
			clearInterval(stirEvt);
			clearInterval(flaming5);
			clearInterval(rotateEvt);
			clearInterval(candleFlaming);
			clearInterval(rotateEvt9);
		}
		//Function to reset all events
		function resetAllEvents(){
			$('#spatula1Full,#litmusred,#litmusblue,#tongwithAshes').stop(true);
			$('#tongContainer,#tong1flame,#sparkflame,#ashContainer,#ashImg').stop(true);
			$('#scene1flame,#burner1on,#powder,#powderRed,#powderBlue').css({display:displayArray[1]});	
			$(".scene1flame1,.scene5flame1,.tong1flame1,.sparkflame1").css({display:'block' });
			$(".scene5flame2,.scene5flame3,.scene5flame4,.scene5flame5").css({display:'none' });	
			$(".scene1flame2,.scene1flame3,.scene1flame4,.scene1flame5").css({display:'none' });
			$(".tong1flame2,.tong1flame3,.tong1flame4,.tong1flame5").css({display:'none' });	
			$(".sparkflame2,.sparkflame3,.sparkflame4,.sparkflame5").css({display:'none' });
			$('#burner1off,#tong1').css({display:displayArray[0]});			
			clearIntervalFn();	
			//---Burning of Magnesium in air----
			anim1Count=0;			
			dryRedpaper=redPaper=bluePaper=powderFlag=false;
			dragtongFlag=true;
			beakerflag=false;
			copperInf=false
			$("#spatula1powder").css({display:displayArray[0]});	
			
			$('#tongContainer').css({width:334+'px',top:mainTop+97+'px',height:110+'px'});
			$('#tong1flame').css({top:mainTop-9+'px',left:mainLeft+374+'px'});						
			$('#sparkflame').css({top:mainTop+116+'px',left:mainLeft+324+'px'});
			$('#ashContainer').css({top:mainTop+182+'px',left:mainLeft+375+'px',height:106+'px'})
			$('#ashImg').animate({top:mainTop-95+'px'});
			$("#tong1flame,#sparkflame,#ashContainer").css({display:displayArray[1]});
			$("#litmusred").css({opacity:1});
			$("#litmusblue").css({opacity:0});
			burnerOnFn();
			$('#burner1off').css('cursor','pointer');
			$('#spatula1Full').css('cursor','default');			
			$("#dazzle").css({display:displayArray[0]});
			$('#spatula1Full,#tong1').draggable({ disabled: true });
			$('#tong1').css({top:mainTop+97+'px',left:mainLeft+55+'px' });
			$('#tongwithAshes').css({top:mainTop+0+'px',left:mainLeft+0+'px' });
			//---Melting point of Ice----
			$('#dishwaterFull6,#dishwhite6,#dishwater6,#iceCubes6').stop(true);
			$('#dishwaterFull6').css({height:'0px',top:mainTop+313+'px'});
			$('#dishwhite6').css({top:mainTop-107+'px'});
			$('#dishwater6').css({top:mainTop-107+'px'});
			$('#iceCubes6').css({height:'90px',width:'235px',top:mainTop+221+'px',left:mainLeft+173+'px',opacity:1});
			//---Barium chloride with sodium sulphate----
			$('#bCork3,#stirrer3,#flaskwater3,#flaskoffwhitewater3,#flaskwhite3,#botBwater3,#botBwhiteDiv3,#flaskSolnDiv3,#stirrer3,#bCork3').stop(true);
			rotation(document.getElementById("botBwaterDiv3"),0);
			$('#botBwaterDiv3').css({top:mainTop+207+'px',left:mainLeft+318+'px'});	
			$('#stirrer3').css({top:mainTop+0+'px',left:mainLeft-46+'px'});
			$('#bCork3').css({top:mainTop+201+'px',left:mainLeft+331+'px'});
			$('#bCork3Div,#hCork3Div,#nCork3Div').css({display:'block'});	
			$('#bCork3Div').css({top:mainTop+189+'px',left:mainLeft+315+'px'});
			$('#flaskSolnDiv3,#botBselectDiv,#botNselectDiv,#botHselectDiv').css({display:displayArray[1]});
			$('#botNselectDiv,#botHselectDiv').css({display:displayArray[0]});
			$('#flaskwater3').css({top:mainTop-96+'px'});
			$('#flaskoffwhitewater3').css({top:mainTop-96+'px'});
			$('#flaskwhite3').css({top:mainTop-96+'px'})									
			$('#botBwater3').css({top:mainTop-32+'px',left:mainLeft+0+'px'});
			$('#botBwhiteDiv3').css({top:mainTop+0+'px',width:'47px',left:mainLeft+0+'px'});
			$('#botBwhiteDiv3').css({opacity:0.5});
			$('#botBwater3Container').css({top:'33px',left:'0px',width:'52px',overflow: 'hidden'});
			$('#botBwater3').css({height:84+'px'});
			$('#botwater3Img').css({top:mainTop-0+'px'});									
			$('#flaskSolnDiv3').css({height:1+'px',top:mainTop+129+'px',left:mainLeft+0+'px'});
			$('#whitePdr1,#whitePdr2').css({display:displayArray[1]});
			$('#nCork3').css({top:mainTop+201+'px',left:mainLeft+415+'px'});
			$('#nCork3Div').css({top:mainTop+189+'px',left:mainLeft+400+'px'});
			$('#nCork3Div,#botBwaterDiv3').css('cursor','default');
			$('#botNwaterDiv3').css({top:mainTop+207+'px',left:mainLeft+403+'px'});
			rotation(document.getElementById("botNwaterDiv3"),0);
			$('#flaskoffwhitewater3,#bkrSolnDiv3,#whitePowder3,#whiteInfunnel').css({display:displayArray[1]});
			$('#flaskoffwhitewater3,#botNwater3,#botNwhiteDiv3,#botBwater3Container,#botNwater3Container,#botHwater3Container').stop(true);					
			$('#botNwater3').css({top:mainTop-32+'px',left:mainLeft+0+'px'});
			$('#botNwhiteDiv3').css({top:mainTop-0+'px',width:'47px',left:mainLeft+0+'px'});
			$('#botNwhiteDiv3').css({opacity:0.5});
			$('#botNwater3Container').css({top:'33px',left:'0px',width:'52px',overflow: 'hidden'});
			$('#botBwaterDiv3,#botNwaterDiv3,#botHwaterDiv3').draggable({ disabled: true });
			$("#flask3").draggable({ disabled: true });
			$("#flask3").bind('click');
			$("#stirrer3").bind('click');
			rotCount3=0;
			flag3=true;
			stirFlag=true;
			degree3=14;
			rotation(document.getElementById("stirrer3"),0);			
			$('#flaskoffwhitewater3').css('opacity','0.7');
			$('#beakerwhite3,#beakerwater3').css({top:mainTop-72+'px'});
			$('#bkrSolnDiv3').css({height:92+'px',top:mainTop+300+'px'});
			$('#flaskSolnDiv3').css({opacity:1});
			$('#hCork3').css({top:mainTop+201+'px',left:mainLeft+497+'px'});
			$('#hCork3Div').css({top:mainTop+189+'px',left:mainLeft+482+'px'});
			$('#botHwater3').css({top:mainTop-32+'px',left:mainLeft+0+'px'});
			$('#botHwhiteDiv3').css({top:mainTop+0+'px',width:'47px',left:mainLeft+0+'px'});
			$('#botHwhiteDiv3').css({opacity:0.5});
			$('#botHwater3Container').css({top:'33px',left:'0px',width:'52px',overflow: 'hidden'});
			//---Sublimation of dry ice----
			$('#dishsmoke2Div,#dishwater2,#iceCubes2,#dishwaterFull2').stop(true);
			$("#dishsmoke2").css({display:displayArray[1]});
			$("#dishsmoke2Div").css({height:'0px'});
			$('#dishwaterFull2').css({height:'1px',top:mainTop+315+'px'});				
			$('#dishwater2').css({top:mainTop-153+'px'},5000);
			$('#iceCubes2').css({height:'87px',width:'195px',top:mainTop+228+'px',left:mainLeft+200+'px'});	
			$("#nail2Img").css({ zIndex:'9'})
			$("#nail1Img").css({ zIndex:'9' })
			$("#ThreadDiv,#clockBody,#needle,#nailInTesttube").css({display:'none'	});	
			$('#resultdiv').css({top:mainTop+315+'px'});
			greenFlag=false
			degree4=0;
			 deg=90;
			 leftFlag=0;
			 rightFlag=0;
			 rotCount=0,flag=true,degree=0;
			 rotation(document.getElementById("testtube5"),0);
			 $('#testtube5').css({top:mainTop+100+'px',left:mainLeft+47+'px'});
			 $('#testtube5').css({zIndex:'0'});
			 $('#burnerOn5').css({display:displayArray[0]});
			 $('#scene5flame,#burnerOff5').css({display:displayArray[1]});
			 $('#tubePowderBlue5,#dprWhiteDiv5,#dropperWater5').css({opacity:1});	
			 $('#tubePowderWhite5').css({opacity:0});
			 $('#testtube5').draggable({ disabled: true });
			 $('#testtube5').css('cursor','default');
			 $("#dprWhiteDiv5,#dropperWater5,#dropperDrag5").css({display:displayArray[1]});
			$('#dprWaterDiv5,#dropperDrag5').css({top:mainTop+157+'px',left:mainLeft+328+'px'}); 
			$('#testtube5,#tubePowderBlue5,#tubePowderWhite5').stop(true);
			$('#dprWhiteDiv5,#dropperWater5,#dprWaterDiv5').stop(true);	
			dropFlag=false;
			$('#drops51,#drops52,#drops53').css({display:'none'});
			$('#drops53,#drops52,#drops51').stop(true);	
			$('#drops52').css({top:mainTop+150+'px'});					
			$('#drops53').css({top:mainTop+110+'px'});	
			$('#drops51').css({top:mainTop+166+'px'});
			$('#resultOption').css({display:displayArray[1]});
			$('#correct1,#correct2').css({display:displayArray[1]});
			//-----Litmus test------
			inferenceFlag=false;
			$('#granuletesttube').css({display:displayArray[1]});
			$('#bubblesBeaker').css({display:displayArray[1],top:'205px',left:'100px',height: '66px'});	
			$('#zincspatula').draggable({ disabled: false });
			$('#zincspatula').css('cursor','pointer');	
			$('#redPaper7,#bluePaper7').draggable({ disabled: true});
			$('#redPaper7,#bluePaper7').css('cursor','default');	
			$("#drops").css({top:'158px',left:'122px',zIndex:'0'});
			$("#drops2").css({top:'206px',left:'122px',zIndex:'0'});
			$("#drops3").css({top:'112px',left:'122px',zIndex:'0'});
			
			$('#x1').css({left:'14px','-webkit-animation': "movebubbles 5s  infinite",'-moz-animation': "movebubbles 3s  infinite",'-o-animation': "movebubbles 3s  infinite"});
			$('#x2').css({left:'19px','-webkit-animation': "movebubbles 3s  infinite",'-moz-animation': "movebubbles 2s  infinite",'-o-animation': "movebubbles 2s  infinite"});
			$('#x3').css({left:'23px','-webkit-animation': "movebubbles 4s  infinite",'-moz-animation': "movebubbles 4s  infinite",'-o-animation': "movebubbles 4s  infinite"});
			$('#x4').css({left:'27px','-webkit-animation': "movebubbles 2s  infinite",'-moz-animation': "movebubbles 5s  infinite",'-o-animation': "movebubbles 5s  infinite"});
				
			//-----hydrogen test------
			$('#granuletesttube8').css({display:displayArray[1]});
			$('#zincspatula8').draggable({ disabled: false });
			$('#zincspatula8').css('cursor','pointer');
			 $('#cork8').css({top:'182px',left:'87px'});
			 $('#corkdrag').css({top:'182px',left:'87px'});
			 $('#candlediv').draggable({ disabled: true });
			$('#candlediv').css('cursor','default');
			$('#popup1').css({display:displayArray[0]});
			 $('#corkdrag').draggable({ disabled: true });
			$('#corkdrag').css('cursor','default');
			 $('#testtubes8').css({zIndex:'1'});
			 ////-----NaOH test------
			 //spatula
		
			$('#zincspatula9').draggable({ disabled: false });
			$('#zincspatula9').css('cursor','pointer');
			//$('#bubblesBeaker').fadeIn();
			$('#x1,#x2,#x3,#x4').css({'opacity':'0.5'});
			$('#x1,#x2,#x3,#x4').stop(true);
			//dropper
			 $('#dropper_div').css({top:mainTop+159+'px',left:mainLeft+102+'px'});
			 $('#dropper_div').draggable({ disabled: true });
			$('#dropper_div').css('cursor','default');
			$('#test_solwhite').css({'opacity':'0'});
			$('#test_solwhite').stop(true);
			$('#whiteblock').css({display:displayArray[1]});
			$("#waterdrop").css({top:'166px',left:'276px'});
			$("#waterdrops2").css({top:'203px',left:'276px'});
			$("#waterdrops3").css({top:'233px',left:'276px'});
			$('#testtube_div').unbind('click');
			 $('#testtube_div').css({"cursor":"default"});
			rotCount9=0,flag9=true,degree9=-14,dragCount=0;
			rotation(document.getElementById("testtube_div"),0);
			$("#label9").html(Litmuslabel[0]);
			$('#granuletesttube10').css({display:displayArray[1],opacity:'1'});
			$('#zincspatula10').draggable({ disabled: false });
			$('#zincspatula10').css('cursor','pointer');
			$('.bubbleBeakr ').css({width: '5px',height: '5px'});
				$('#granuletesttube10').stop(true);
				
			$('#testtube_drag').css({display:displayArray[0]});
			$('#testtube_drag').css({top:mainTop+208+'px',left:mainLeft+63+'px'});			$('#testtub_div10').css({top:mainTop+208+'px',left:mainLeft+63+'px',zIndex:'3'});
			$('#testtube_drag').draggable({ disabled: true });
			$('#testtube_drag').css('cursor','default');
			rotation(document.getElementById("testtube10"),0);
			rotation(document.getElementById("testtub_sol10"),0);
			$('#testtube_water').css({top:mainTop+22+'px',left:mainLeft+1+'px',width:'13px',height:'57px',overflow: 'visible'});
			$('#tube_whites').css({left:mainLeft-1+'px',width:'13px'});
			$('#testtub_sol10').css({top:mainTop+1+'px',left:mainLeft+1+'px'});
			$('#kipsbubblesBeaker').css({"visibility":"hidden"});
			$('#kipsopen').css({display:displayArray[1]});	
			$('#kipsclose').css({display:displayArray[0]});
			$('#kippswater1').css({height:'25px',top:mainTop+152+'px',width:'54px'});
			$('#kipsol1').css({top:mainTop+0+'px'});
			$('#kippsbottomwater').css({top:mainTop+250+'px',height:'0px',display:displayArray[0]});
			$('#kipsol2').css({top:mainTop-18+'px'});
			//$('#kips_whites2').css({top:mainTop-5+'px'});
				$('#testtub_solwhite10').stop(true);
			$('#testtub_solwhite10').css({opacity:'0'});
			rotation(document.getElementById("testtub_div10"),0);
			$( "#knob").unbind( "click" );
			$('#kipsopen,#kipsclose,#knob').css({cursor:'default'});
			$('#testtub_div10').draggable({ disabled: true});
			$('#testtub_div10').css('cursor','default');
			KipsFlag=false;
			popupsFlag=false;
			candleFlag=false;
			KnobFlag=false;
			$('#testtube10').css({top:mainTop+0+'px',left:mainLeft+0+'px'});
			rotation(document.getElementById("testtub_solwhite10"),+0);
			$('#testtub_solwhite10').css({top:mainTop+1+'px',left:mainLeft+0+'px'});
			$('#kipsapparatusbubbles').css({display:displayArray[1]});
			if(tripFlag==true){
				trip.stop();
				tripFlag=false;
			}
			if(trip1Flag==true){
				trip1.stop();
				trip1Flag=false;
			}
			if(trip2Flag==true){
				trip2.stop();
				trip2Flag=false;
			}
			
		}
		
		//*--Function to click reset button to reset all events---
		$("#reset").click(function(){
		   window.location.reload();	   
		});		
		/*-----------------------------------------------------------------*/		
	});	
};	
//function for clock rotate...
function clockRotate(){
	if(degree4<=deg){
		degree4++;
	}
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degree4+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degree4 +'deg)'});
	if(degree4==deg){
		$("#inference").css({display:'block'})
		if(leftFlag==1){
			$("#ThreadDiv").css({
					display:'block',
					left:'172px'			
			});
		}else{
			$("#ThreadDiv").css({
					left:'452px',	
					display:'block'	
			})
		}
		
	}
}
//function for drag the nail to move into the test tube...
function dragNail(nailId){//1,nailId2
	id="#"+nailId;
}
//function for image change while drag  the iron nail
function changeImg(nailId){	
	if(id=="#nail1Img"){
			$("#nail2Img").css({
						 zIndex:'3'  
			})
			
	}else{
			$("#nail1Img").css({
						 zIndex:'3'  
			})
			
	}
	id="#"+nailId;
	$(id).css({
			 height:'400px',
			 top:'-75px',
			'background-image':'url('+path0+')'		   
			  });
	
	$(id).draggable({
			stop: function(event,ui) {
				
					 if (((this.offsetTop>=mainTop+(-385))&&(this.offsetLeft>=mainLeft+45)) && ((this.offsetTop<=mainTop+(-100))&&(this.offsetLeft<=mainLeft+135))){//to put the nail in to the testube left
						 leftFlag=1;
						this.style.left=mainLeft+85+"px";
						this.style.top=mainTop+(-340)+"px";
						this.style.zIndex=4;
						dragDisable();
						$(id).animate({
			 					top:'-76px'
							},1000,function(){
								$(id).css({
									'left':'90px',
									top:'10px',
									height:'320px',
									'background-image':'url('+path1+')'
			  					});
								$('#TesttubegreenSolnImg').css({
												left:'120px',
												display:'block'
												
											 })
								$('#TesttubeBlueSolnImg').delay(3000).animate({opacity:0});
								commonLeftAndRight()
						});
					}else if(((this.offsetTop>=mainTop+(-385))&&((this.offsetLeft>=mainLeft+320)))&& ((this.offsetTop<=mainTop+(-100))&&(this.offsetLeft<=mainLeft+415))){//to put the nail in to the testube right
						rightFlag=1;
						this.style.left=mainLeft+360+"px";
						this.style.top=mainTop+(-340)+"px";
						this.style.zIndex=4;
						dragDisable();
						$(id).animate({
			 					top:'-76px'
							},1000,function(){
								$(id).css({
									'left':'367px',
									top:'10px',
									height:'320px',
									'background-image':'url('+path1+')'
			 					 });
								
								
								$("#nailInTesttube").css({
										  left:'412px'
										  })
							
								$('#TesttubeBlueSolnImgRight').delay(3000).animate({opacity:0});							
								$('#TesttubegreenSolnImg').css({
												left:'397px',
												display:'block'
												
											 })
								commonLeftAndRight()
							});
					}
					else{
						position();
							$(id).css({
									 'background-image':'url('+path2+')'		   
							});
							$("#nail2Img,#nail1Img").css({
								 zIndex:'8'  
							})
				}
			}
		});
}
//function commonForleft and right testTube
function commonLeftAndRight(){
	$("#clockBody,#needle,#tooltipLabelforClock").css({
					display:'block'
	})
	$("#tooltipLabelforClock").html(minTxt);
	Int=setInterval(clockRotate,50);
	$("#nailInTesttube").delay(3000).animate({opacity:1});
	$("#TesttubegreenSolnImg").delay(3000).animate({opacity:1});
	
}
//function for drag disable
function dragDisable(){
	$("#helpDiv").css({
		display:'block' ///click on the help buton,which shows"reset the simualtion to enable help"
	})
	if(id=="#nail1Img"){
		
			$("#nail2Img").css({
						 zIndex:'3'  
			})
			$("#resultdiv").css({
								top:'312px'
						
			})
	}else{
			$("#nail1Img").css({
						 zIndex:'3'  
			})
			$("#resultdiv").css({
								top:'290px'
						
			})
	}
}
//fnctn to click on the thread to moveinto the orignl postn(change in color of nail)
function clickThread(){
	greenFlag=true;
	$("#ThreadDiv,#clockBody,#needle,#nailInTesttube,#tooltipLabelforClock").css({
				display:'none'			
		});
	if(leftFlag==1){
		$(id).css({
				   top:'-76px',
				   left:'85px',
				   zIndex:'4'
			})
	}else{
		$(id).css({
			   left:'360px',
			   top:'-76px',
			   zIndex:'4'
		})
	}
	$(id).css({
				'background-image':'url('+path3+')'		   
			  });
	$(id).animate({
			 	top:'-280px',
			},1000);
	$(id).animate({
			 	left:'232px',
			},1000);
	$(id).animate({
			 	top:'-10px',
			},1000,function(){
				position();
					$(id).css({
							 'background-image':'url('+path4+')'		   
			  			});
					$("#inference").css({display:'block'})
				});
	$("#resultOption").css({display:'block'})
}
//function for the image position while dropping...
function position(){
	if(id=="#nail1Img"){
		$(id).css({
				 top:'302px',
				 left:'225px',
				 height:'30px',
		});
	}else{
		$(id).css({
				top:'280px',
				left:'225px',
				height:'30px',
		});
	}
}

