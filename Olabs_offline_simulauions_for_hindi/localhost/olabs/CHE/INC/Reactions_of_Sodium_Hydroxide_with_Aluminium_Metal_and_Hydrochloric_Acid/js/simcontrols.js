var displayArray,selectDragItem,dropbox,helpMsg,labelString,controlStr,alertArray;
var testIndex=0;
var Droped;
var trip,iconSelect;
var inferenceMsg;
var count=0,alertCount=0,dropperCount=0,count1=0,helpCount=0;
var flaming,candleflaming,candleblueflame;
var angle=0;
var turningRight=true;
var helpCnt=0,helpCnt1=0,procStatus = 0;

$(document).ready(function(){
			gt = new Gettext({ 'domain' : 'messages' });
			$("#buttonText").html(gt.gettext("Combustion Test"));
			$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
			$('#expName').html(gt.gettext("Reactions of NaOH with Aluminium Metal and HCl"));
			$(".labName").html(gt.gettext("Developed by Amrita University Under research grant from <br> Department of Electronics & Information Technology"));	
			selectDragItem=['#spatulaDiv','#cylinderDiv','#litmusRed','#litmusBlue','#testtubeDiv1','#candleDiv','#dropperWrapper','#cylinderDiv1','#testtubeDiv2','#litmusRed1','#litmusBlue1']
			displayArray=['block','none'];
			helpMsg=[
				gt.gettext('Select the compound'),
				gt.gettext('Drag the spatula towards<br> the test tube to drop <br>aluminium metal into test tube'),
				gt.gettext('Drag the measuring cylinder towards<br> the test tube to drop 5ml NaOH'),
				gt.gettext('Drag moist red litmus towards the test tube'),
				gt.gettext('Drag moist blue litmus paper<br>towards the test tube'),
				gt.gettext('Click on the button','Click on knob of the burner'),
				gt.gettext('Drag the test tube towards the burner'),
				gt.gettext('Drag the candle towards the test tube'),
				gt.gettext('Drag the dropper towards the measuring <br> cylinder to drop 2ml dil.Hcl'),
				gt.gettext('Drag the measuring cylinder <br>towards the test tube'),
				gt.gettext('Drag the test tube towards the left'),
				gt.gettext('Drag the dropper towards the <br> measuring cylinder to drop 3ml dil.Hcl'),
				gt.gettext('Drag the measuring cylinder<br>  towards the test tube to<br>  drop the solution'),
				gt.gettext('Drag the red litmus <br>paper towards the test tube'),
				gt.gettext('Drag the blue litmus paper<br> towards the test tube'),
				gt.gettext('Click on the Reset button to redo the experiment')
			];
			alertArray=[
				gt.gettext('Never smell chemical substance directly close to your nose'),
				gt.gettext('In the lab do the experiment again<br> because the Hydrogen gas get out quickly')
			];
			inferenceMsg=[
				gt.gettext('Colourless gas is coming out.No characteristic smell for H<sub>2</sub> gas'),
				gt.gettext('No colour change in red litmus because of the neutral nature of H<sub>2</sub> Gas'),
				gt.gettext('No colour change in blue litmus because of the neutral nature of H<sub>2</sub> Gas.'),
				gt.gettext('Hydrogen burns out at the mouth of test tube with pop sound'),
				gt.gettext('The solution is neutral to litmus paper<br>(No colour change of litmus takes place PH=7)'),
				gt.gettext('The test tube is warm after the addition of complete HCL')];
			labelString=[
				gt.gettext('Moist Litmus paper'),
				gt.gettext('Aluminium Metal'),
				gt.gettext('NaOH'),
				gt.gettext('Litmus paper'),
				gt.gettext('5ml dil NaOH'),
				gt.gettext('Dil hcl')
			];
			controlStr=[
				gt.gettext('Select the compound:'),
				gt.gettext('Reset')
			];
			mainTop=$('#mainDiv').position().top;
			mainLeft=$('#mainDiv').position().left;
			dropbox = [
				gt.gettext('Aluminium metal'),
				gt.gettext('Hydrochloric acid')
			];
			//$('#canvasBox').mousedown(function(event){	event.preventDefault();	});
			document.addEventListener("dragstart", function( event ) {
			event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);}, false);
			iconSelect=dropbox[0];
			addintoDropDown($('#DropboxTest'),dropbox);  //Add values into combobox
			aluminiummetal();

			//dropdownbox change function------
			$("#DropboxTest").change(function(){
				testIndex=$('#DropboxTest option:selected').val();
				helpCnt1=0;
				helpCnt=0;
				if(testIndex==0){
					iconSelect=dropbox[0];
					$('.trip-block').hide();
					removeTrip();
					hclResetfun();
					aluminiummetal();
					dragdrop('#spatulaDiv','#dropAreaTube');
				}
				else{
					iconSelect=dropbox[1];
					$('.trip-block').hide();
					removeTrip();
					hcl();
					dragdrop('#dropperWrapper','#dropAreaDropper');	
				}
			});
			
			   //*--Function to click reset button to reset all events---
			$("#reset").click(function(){
				window.location.reload();	   
			});
		
			      //Drag the spatula
			dragdrop('#spatulaDiv','#dropAreaTube');
			$("#buttonDiv").bind('click', function(){ //combustion button event
				helpCount=1;
				removeTrip();
				helpCnt++;
				resetfun();
				$('#burner').css({display:displayArray[0]});
				$('#tubeStandUnder2').css({display:displayArray[0]});
				$('#tubeStandTop2').css({display:displayArray[0]});
				$('#candle').css({display:displayArray[0]});
				$('#testtubeDiv1').css({display:displayArray[0]});
				$('#burnerDiv').css({display:displayArray[0]});
				$('#powderInTesttube1').css({display:displayArray[0]});
				$("#AlertIcon").css('display',displayArray[0]);
				alertmsg();
				alertCount=0;
				setTimeout(function(){
					$("#AlertIcon").css('display',displayArray[1]);
				},6000);
				candle();
				burner();	
			});
	});

	function dragdrop(dragElement,dropArea){
				$(dragElement).draggable({containment:"#canvasBox",revertDuration:0,  // Drag spatula	
					revert:function(){                          
						if(!Droped){
							return true;
						}
					},
					drag:function(){
						removeTrip();
						$("#DropboxTest").prop("disabled", true);
						$("#Inference").css('display',displayArray[1]);
						$(dropArea).show();
					}
				});
				$( dropArea ).droppable({       //Drop Function
					drop: function() {
						if(dragElement==selectDragItem[0]){ //Drag spatula
							Droped=true;		
							$(dragElement).css({top:mainTop+80+"px",left:mainLeft+246+"px"});
							$('#ImgInSpatula').animate({opacity:'0'},100,function(){// powder in spatula	
								$('#ImgInSpatula').css({display:displayArray[1]});
							});
							$('#ImgInSpatula').css({display:displayArray[0]});	
							$(dragElement).css({'cursor':'default'});
							$(dragElement).delay(500).animate({top:mainTop+250+"px",left:mainLeft+364+"px"});
							$(dragElement).draggable({disabled:true});
							$("#powderDrop").css({display:displayArray[0]});
							$("#powderDrop").animate({top:mainTop+100+'px',height:0+'px'});
							$('#powderInTesttube').css({display:displayArray[0]});// powder in beaker
							Droped=false;
							$(dropArea).css({display:displayArray[1]});
							$(selectDragItem[1]).css({'cursor':'pointer'});
							$(selectDragItem[1]).draggable({disabled:false});
							dragdrop('#cylinderDiv','#dropAreaTube');
							helpCnt++;
						}
						else if(dragElement==selectDragItem[1]){  // Drag cylinder
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;
							$(dragElement).css({top:mainTop+44+"px",left:mainLeft+303+"px"});
							rotation(document.getElementById("cylinderDiv"),-90);// rotate cylinder
							$('#cylinderwaterDiv').css({height:130+'px',top:mainTop+-7+'px'});
							$('#cylinderwaterImg').css({left:mainLeft-87+'px',top:mainTop-18+'px'});
							rotation(document.getElementById("cylinderwaterImg"),-5);
							$("#solnPourStart,#pourline1").css('display',displayArray[0]);
							$("#solnPourStart").css('opacity','0.4');
							$('#cylinderwaterDivAll').delay(1000).animate
							({'opacity':'0'},function(){
									$("#cylinderwaterDivAll").css('display',displayArray[1]);
							});
							$('#tubeSolution').animate({'top':parseInt($(tubeSolution).css('top'))-51+"px",'height':parseInt($(tubeSolution).css('height'))+51+"px"},1000);
							$("#pourline1").animate({height:95+'px'},900);
							$("#pourline2").css('display','block');
							$("#solnPourStart,#pourline1,#pourline2").animate({opacity:'0'},1000,function(){
												$("#solnPourStart,#pourline1,#pourline2").css('display',displayArray[1]);
												rotation(document.getElementById("cylinderDiv"),0);// rotate cylinder										
												$(dragElement).delay(500).animate({top:mainTop+137+'px',left:mainLeft+502+'px'});
											});
							$("#AlertIcon").css('display',displayArray[0]);
							alertmsg();
							alertCount=1;
							setTimeout(function(){
								$("#AlertIcon").css('display',displayArray[1]);
								$("#Inference").css('display',displayArray[0]);
								Droped=false;
								$(dropArea).css({display:displayArray[1]});
								$(selectDragItem[2]).css({'cursor':'pointer'});
								$(selectDragItem[2]).draggable({disabled:false});
								dragdrop('#litmusRed','#dropAreaTube');	
							}, 4000);	
							helpCnt++;
						}
						else if(dragElement==selectDragItem[2]){   //redlitmus
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+135+"px",left:mainLeft+206+"px"});	
							$(dragElement).css('display',displayArray[1]);
							$("#litmusRedVertical1").css('display',displayArray[0]);
							$("#Inference").css('display',displayArray[0]);
							count++;
							setTimeout(function(){
								Droped=false;
								$(dropArea).css({display:displayArray[1]});
								$(selectDragItem[3]).css({'cursor':'pointer'});
								$("#litmusRedVertical1").css('display',displayArray[1]);
								$(selectDragItem[3]).draggable({disabled:false});
								dragdrop('#litmusBlue','#dropAreaTube');	
							}, 5000);
							helpCnt++;
						}
						else if(dragElement==selectDragItem[3]){   //bluelitmus
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+135+"px",left:mainLeft+206+"px"});	
							$(dragElement).css('display',displayArray[1]);
							$("#litmusBlueVertical1").css('display',displayArray[0]);
							// setTimeout(function(){
							// 	$("#litmusBlueVertical1").css('display',displayArray[1]);
							// 	$("#litmusRedChange").css('display',displayArray[0]);
							// },2000);
							$("#Inference").css('display',displayArray[0]);
							count++;
							setTimeout(function(){
								Droped=false;
								$("#litmusBlueVertical1").css('display',displayArray[1]);
								$(dropArea).css({display:displayArray[1]});		
								setTimeout(function()
								{	helpCnt++;
									$("#buttonDiv").css('display',displayArray[0]);	
								},1000)
							},5000);
						}
						else if(dragElement==selectDragItem[4]){   //combustion testtube drag
							helpCnt++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+7+"px",left:mainLeft+72+"px"});
							$(dropArea).css('display',displayArray[1]);
							setTimeout(function(){
								
								Droped=false;
								$(dragElement).animate({top:mainTop+50+'px',left:mainLeft+293+'px'},500);	
								$(dragElement).animate({top:mainTop+125+'px',left:mainLeft+293+'px'},500);	
								clearInterval(flaming);
								$("#flame").css('display',displayArray[1]);
								$("#burnerOn").css('display',displayArray[1]);
								$("#burnerOff").css('display',displayArray[0]);
								$('#candleDiv').css({cursor:'pointer'});
								$(selectDragItem[5]).draggable({disabled:false});								
								dragdrop('#candleDiv','#dropArea2');	
							},5000);
							$("#burnerDiv").unbind( "click" );	
							$('#burnerDiv').css({cursor:'default'});	
						}
						else if(dragElement==selectDragItem[5]){ //candle drag
							procStatus++;
							helpCnt++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+60+"px",left:mainLeft+348+"px"});
							$(dropArea).css('display',displayArray[1]);
							rotation(document.getElementById("candleDiv"),-63);
							rotation(document.getElementById("candleFlame"),60)
							$("#candleFlame").css({top:mainTop+-21+'px',left:mainLeft+40+"px"});;
							setTimeout(function(){
								Droped=false;
								$("#candleFlame").css('display',displayArray[1]);
								clearInterval(candleflaming);
								$('#blueFlame').css('display',displayArray[0]);								
								candleblueflame=setInterval(candleblueflames,20);
								setTimeout(function(){	
									audio = $("audio");
								    audio[0].play();								
									setTimeout(function(){
										$("#blueFlame").css('display',displayArray[1]);
										clearInterval(candleblueflame);	
									},2000)
									setTimeout(function(){
										rotation(document.getElementById("candleDiv"),0);
										$(dragElement).animate({top:mainTop+180+"px",left:mainLeft+471+"px"});
									},2000)	
									helpCnt++;					
									$("#Inference").css('display',displayArray[0]);
									$("#DropboxTest").prop("disabled", false);
									count++;
								},2000);
							},500);
						}
						else if((dragElement==selectDragItem[6])&&(dropperCount==0)){// dropper drag 1st time
							helpCnt1++;
							$("#DropboxTest").prop("disabled", true);
							dropperCount=1;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+-115+"px",left:mainLeft+-84+"px"});
							$(dropArea).css('display',displayArray[1]);
							setTimeout(function(){
								Droped=false;
								$("#drops1").css('display',displayArray[0]);
								$("#dropperSolution").animate({'top':'11px','border-top-width':'40px'});
								$("#drops1").animate({top:mainTop+274+'px'},200);
								$('#cylinderwaterDiv1').animate({'top':parseInt($(cylinderwaterDiv1).css('top'))-11+"px",'height':parseInt($(cylinderwaterDiv1).css('height'))+13+"px"});
								setTimeout(function(){
									$("#drops1").css('display',displayArray[1]);
									$("#drops2").css('display',displayArray[0]);
								 	$("#dropperSolution").animate({'top':'24px','border-top-width':'26px'});
									$("#drops2").animate({top:mainTop+268+'px'},200,function(){
										$("#drops2").css('display',displayArray[1]);
									});
									$('#cylinderwaterDiv1').animate({'top':parseInt($(cylinderwaterDiv1).css('top'))-15+"px",'height':parseInt($(cylinderwaterDiv1).css('height'))+16+"px"},200,function(){
										$(dragElement).animate({top:mainTop-115+"px",left:mainLeft+0+"px"});
										$(dragElement).animate({top:mainTop+2+"px"});
										setTimeout(function(){
											$('#dropperSolution').animate({top:-2+"px",'border-top-width':55+'px'});
											$('#bottleSolution').animate({top:32+"px",height:53+"px"});
										},700);
										$(selectDragItem[7]).css({'cursor':'pointer'});
										$(selectDragItem[7]).draggable({disabled:false});
										dragdrop('#cylinderDiv1','#dropAreaTubeHcl');	
									}); 
								},200); 
							},200);	
						}
						else if(dragElement==selectDragItem[7]){   // drag cylinder in Hcl
							helpCnt1++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+9+"px",left:mainLeft+336+"px"});
							rotation(document.getElementById("cylinderDiv1"),-90);// rotate cylinder
							$(dropArea).css('display',displayArray[1]);
							$('#cylinderwaterDiv1').css({height:130+'px',top:mainTop+-7+'px'});
							$('#cylinderwaterImg1').css({left:mainLeft-87+'px',top:mainTop-18+'px'});
							rotation(document.getElementById("cylinderwaterImg1"),-5);
							$("#solnPourStartHcl,#pourline1Hcl").css('display',displayArray[0]);
							$("#solnPourStartHcl").css('opacity','0.4');
							$('#cylinderwaterDivAll1').delay(1000).animate({'opacity':'0'},function(){
								Droped=false;
								$("#cylinderwaterDivAll1").css('display',displayArray[1]);
							});
							$('#tubeSolutionHcl').animate({'top':parseInt($(tubeSolutionHcl).css('top'))-25+"px",'height':parseInt($(tubeSolutionHcl).css('height'))+25+"px"},1000);
							if(dropperCount==2) //2nd time drag cylinder
								$("#pourline1Hcl").animate({'height':'80px'},1000);
							else
								$("#pourline1Hcl").animate({'height':'110px'},1000);
							$("#pourline2Hcl").css('display',displayArray[0]);
							$("#solnPourStartHcl,#pourline1Hcl,#pourline2Hcl").animate({opacity:'0'},1000,function(){
								$("#solnPourStartHcl,#pourline1Hcl,#pourline2Hcl").css('display',displayArray[1]);
								rotation(document.getElementById("cylinderDiv1"),0);// rotate cylinder
								$(dragElement).animate({left:mainLeft+406+'px'},500);									
								$(dragElement).animate({top:mainTop+156+'px',left:mainLeft+406+'px'},500);									
								if(dropperCount==1) //1st time drag cylinder
								{
									$(selectDragItem[8]).css({'cursor':'pointer'});
									$(selectDragItem[8]).draggable({disabled:false});
									dragdrop('#testtubeDiv2','#dropAreaShakeHcl');	
								}
								else{
									$(selectDragItem[9]).css({'cursor':'pointer'});
									$(selectDragItem[9]).draggable({disabled:false});
									dragdrop('#litmusRed1','#dropAreaTubeHcl');	
								}
							});							
						}
						else if(dragElement==selectDragItem[8]){  //Drag test tube in HCL exp
							helpCnt1++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+20+"px",left:mainLeft+60+"px"});
							$(dropArea).css('display',displayArray[1]);
							testTubeShaking(dragElement);
							setTimeout(function(){
								clearTimeout(clrTimeOutTube);
								$(dragElement).css({'-ms-transform': 'rotate(0deg)','-webkit-transform': 'rotate(0deg)','transform': 'rotate(0deg)'});
								$(dragElement).animate({top:mainTop+20+'px',left:mainLeft+271+'px'},500);	
								$(dragElement).animate({top:mainTop+137+'px',left:mainLeft+271+'px'},500);
								$(selectDragItem[6]).css({'cursor':'pointer'});
								$('#dropperWrapper').draggable({disabled:false});
								dragdrop('#dropperWrapper','#dropAreaDropper');	
								Droped=false;
							},3000);
							$('.Drops').css({top:160+"px"});
							$('#cylinderwaterDiv1').css({top:120+"px",left:-1+"px",height:0+"px"});
							$('#cylinderwaterDivAll1').css({opacity:1,display:displayArray[0]});
							$('#cylinderwaterImg1').css({opacity:0.3,display:displayArray[0],top:-102+"px",left:2+"px"});
							rotation(document.getElementById("cylinderwaterImg1"),0);
						}
						else if((dragElement==selectDragItem[6])&&(dropperCount==1)){ //drag dropper second time
							helpCnt1++;
							dropperCount=2;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+-115+"px",left:mainLeft+-84+"px"});
							$(dropArea).css('display',displayArray[1]);
							setTimeout(function(){
								Droped=false;
								$("#dropperSolution").animate({'top':'11px','border-top-width':'40px'});
								$("#drops1").css('display',displayArray[0]);
								$("#drops1").animate({top:mainTop+274+'px'},200);
								$('#cylinderwaterDiv1').animate({'top':parseInt($(cylinderwaterDiv1).css('top'))-11+"px",'height':parseInt($(cylinderwaterDiv1).css('height'))+13+"px"});
								setTimeout(function(){
									$("#drops1").css('display',displayArray[1]);
									$("#dropperSolution").animate({'top':'24px','border-top-width':'26px'});
									$("#drops2").css('display',displayArray[0]);
									$("#drops2").animate({top:mainTop+268+'px'},200,function(){
										$("#drops2").css('display',displayArray[1]);
									});
									$('#cylinderwaterDiv1').animate({'top':parseInt($(cylinderwaterDiv1).css('top'))-15+"px",'height':parseInt($(cylinderwaterDiv1).css('height'))+16+"px"},200); 
									setTimeout(function(){
										$("#drops2").css('display',displayArray[1]);
										$("#dropperSolution").animate({'top':'45px','border-top-width':'0px'},function(){
											$("#drops3").css('display',displayArray[0]);
											$("#drops3").animate({top:mainTop+260+'px'},200,function(){
												$("#drops3").css('display',displayArray[1]);
											});
											$('#cylinderwaterDiv1').animate({'top':parseInt($(cylinderwaterDiv1).css('top'))-11+"px",'height':parseInt($(cylinderwaterDiv1).css('height'))+13+"px"},function(){
												$(dragElement).animate({top:-115+"px",left:0+"px"});
												$(dragElement).animate({top:2+"px"});
												setTimeout(function()
												{
													$('#dropperSolution').animate({top:-2+"px",'border-top-width':55+'px'});
													$('#bottleSolution').animate({top:36+"px",height:49+"px"});
													
												},700);
												$("#solnPourStartHcl").css({opacity:0.7});
												$("#pourline1Hcl,#pourline2Hcl").css({opacity:1});
												$(selectDragItem[7]).css({'cursor':'pointer'});
												$('#cylinderDiv1').draggable({disabled:false});
												dragdrop('#cylinderDiv1','#dropAreaTubeHcl');
											});
										}); 	
									},200); 
								},200); 
							},200);	
						}
						else if(dragElement==selectDragItem[9]){// Drag litmus red
							helpCnt1++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;	
							$(dragElement).css({top:mainTop+-179+"px",left:mainLeft+184+"px"});
							$(dragElement).css('display',displayArray[1]);
							$("#litmusRedVertical").css('display',displayArray[0]);
							setTimeout(function(){
								$("#litmusRedVertical").css('display',displayArray[1]);
								Droped=false;
								$(dropArea).css({display:displayArray[1]});
								$(selectDragItem[10]).css({'cursor':'pointer'});
								$(selectDragItem[10]).draggable({disabled:false});
								dragdrop('#litmusBlue1','#dropAreaTubeHcl');
							},4000)
						}
						else if(dragElement==selectDragItem[10]){ //Drag litmus blue
							
							helpCnt1++;
							$(dragElement).draggable({disabled:true});
							$(dragElement).css({'cursor':'default'});
							Droped=true;
							$(dragElement).css({top:mainTop+-179+"px",left:mainLeft+184+"px"});
							$(dragElement).css('display',displayArray[1]);
							$("#litmusBlueVertical").css('display',displayArray[0]);
							setTimeout(function(){
								$("#litmusBlueVertical").css('display',displayArray[1]);
								$("#Inference").css('display',displayArray[0]);
								setTimeout(function(){
									count1=1;
									$("#hand").css('display',displayArray[0]);
									$("#hand").animate({left:295+"px"},2000,function(){
										$("#Inference").css('display',displayArray[0]);
										$("#DropboxTest").prop("disabled", false);
										procStatus++;
									});
									Droped=false;
									$(dropArea).css({display:displayArray[1]});		
								},4000);
							},4000)
						}
					}
				});					
	}
	
	
	
	function aluminiummetal(){
		resetcombustionfun();
		$('#bg').css({display:displayArray[0]});
		$('#testtubeDiv').css({display:displayArray[0]});
		$('#testtubeStand').css({display:displayArray[0]});
		$('#watchglassDiv').css({display:displayArray[0]});
		$('#spatulaDiv').css({display:displayArray[0]});
		$('#cylinderDiv').css({display:displayArray[0]});
		$('#litmusRed').css({display:displayArray[0],top:mainTop+284+"px",left:mainLeft+52+"px" });
		$('#litmusBlue').css({display:displayArray[0],top:mainTop+295+"px",left:mainLeft+63+"px" });
		$('#tubeStandTop1').css({display:displayArray[0]});
		$('#litmusString').css({display:displayArray[0]});
		$('#metalString').css({display:displayArray[0]});
		$('#cylinderString').css({display:displayArray[0]});
		$("#litmusString").html(labelString[0]);
		$("#metalString").html(labelString[1]);
		$("#cylinderString").html(labelString[2]);
		$('#DropboxTestLbl').html(controlStr[0]);
		$('#reset').attr('value',controlStr[1]);
		$(selectDragItem[0]).draggable({disabled:false});
		$(selectDragItem[0]).css({'cursor':'pointer'});
		$('#ImgInSpatula').css({display:displayArray[0],opacity:1});
		$('#tubeSolution').css({height:0+'px',top:137+'px'});
		$("#powderDrop").css({height:171+'px',top:103+'px'});
		$('#cylinderwaterDivAll').css({opacity:1,display:displayArray[0]});
		$('#cylinderwaterDiv').css({top:67+"px",height:54+"px"});
		$('#cylinderwaterImg').css({top:-102+"px",left:2+"px"});
		rotation(document.getElementById("cylinderwaterImg"),0);
		$('#pourline1').css({opacity:1,height:153+"px",'z-index':1});
		$('#pourline2').css({opacity:1,'z-index':1});
		$('#solnPourStart').css({opacity:0.7});
		$('#candleFlame').css({display:displayArray[0],top:-28+"px",left:10+"px"});
		rotation(document.getElementById("candleFlame"),0);
		count=0;
		helpCount=0
	}
		
	function hcl(){
		resetfun();	
		resetcombustionfun();
		dropperCount=0;
		count1=0;
		$('#tubeStandUnder,#tubeStandTop').css({display:displayArray[0]});
		$('#testtubeDiv2').css({display:displayArray[0]});
		$('#cylinderDiv1').css({display:displayArray[0]});
		$('#dropbottle').css({display:displayArray[0]});
		$('#litmusDiv').css({display:displayArray[0]});
		$('#bottle').css({display:displayArray[0]});
		$('#label1').css({display:displayArray[0]});
		$('#label2').css({display:displayArray[0]});
		$('#litmusString1').css({display:displayArray[0]});
		$('#tubeString').css({display:displayArray[0]});
		$('#bottleString').css({display:displayArray[0]});
		$('#litmusString1').html(labelString[3]);
		$('#tubeString').html(labelString[4]);
		$('#bottleString').html(labelString[5]);
		$(selectDragItem[6]).draggable({disabled:false});
		$(selectDragItem[6]).css({'cursor':'pointer'});
		$('#cylinderwaterDivAll1').css({opacity:1,display:displayArray[0]});
		$('#cylinderwaterDiv1').css({top:120+"px",height:0+"px"});
		$('#cylinderwaterImg1').css({top:-102+"px",left:2+"px"});
		rotation(document.getElementById("cylinderwaterImg1"),0);
		$('.Drops').css({top:160+"px"});
		$('#dropperSolution').css({top:-2+"px",'border-top-width':55+'px'});
		$('#tubeSolutionHcl').css({top:85+"px",'height':52+'px'});
		$('#pourline1Hcl').css({opacity:1,height:129+"px"});
		$('#pourline2Hcl').css({opacity:1});
		$('#solnPourStartHcl').css({opacity:0.7});	
		$('#litmusRed1').css({top:3+"px",left:17+"px",display:displayArray[0]});
		$('#litmusBlue1').css({top:14+"px",left:27+"px",display:displayArray[0]});
		$('#hand').css({left:562+"px"});
		$('#bottleSolution').css({top:29+"px",'height':57+'px'});	
	}
	
	//-------Function to add values into dropdownbox------
	function addintoDropDown(getId,valueSet){
		$.each(valueSet, function(val,text){
			getId.append(
				$('<option ></option>').val(val).html(text) 
			);
		});
	}
	//Function for rotating an Element
	function rotation(rotateId,degree){
		rotateId.style.webkitTransformOrigin='50% 50%';
		rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
		rotateId.style.MozTransformOrigin='50% 50%';
		rotateId.style.MozTransform ='rotate('+ degree +'deg)';
	}
		
	function alertmsg(){
		if(alertCount==0){
			trip = new Trip([{
				sel : $('#AlertIcon'),
				position : 'e',
				content : alertArray[0],
				expose : false,
				delay : 4000
			}]); 
		}
		else if(alertCount==1){
			trip = new Trip([{
				sel : $('#AlertIcon'),
				position : 'e',
				content : alertArray[1],
				expose : false,
				delay : 6000
			}]); 
		}
		trip.start(); 
		window.trip = trip;
	}
		
	function resetfun(){
		$('#bg').css({display:displayArray[1]});
		$('#testtubeDiv').css({display:displayArray[1]});
		$('#testtubeStand').css({display:displayArray[1]});
		$('#watchglassDiv').css({display:displayArray[1]});
		$('#spatulaDiv').css({display:displayArray[1]});
		$('#cylinderDiv').css({display:displayArray[1]});
		$('#litmusRed').css({display:displayArray[1]});
		$('#litmusBlue').css({display:displayArray[1]});
		$('#powderInTesttube').css({display:displayArray[1]});
		$('#Inference').css({display:displayArray[1]});
		$('#buttonDiv').css({display:displayArray[1]});
		$('#litmusString').css({display:displayArray[1]});
		$('#metalString').css({display:displayArray[1]});
		$('#cylinderString').css({display:displayArray[1]});
		$('#tubeStandTop1').css({display:displayArray[1]});
		$('#powderDrop').css({display:displayArray[1]});
		$('#bg1').css({display:displayArray[0]});
	}
	
	function resetcombustionfun(){
		$('#burner').css({display:displayArray[1]});
		$('#burnerDiv').css({display:displayArray[1]});
		$('#tubeStandUnder2').css({display:displayArray[1]});
		$('#tubeStandTop2').css({display:displayArray[1]});
		$('#candleDiv').css({display:displayArray[1]});
		$('#testtubeDiv1').css({display:displayArray[1]});
	}
	
	function hclResetfun(){
		$('#tubeStandUnder').css({display:displayArray[1]});
		$('#tubeStandTop').css({display:displayArray[1]});
		$('#testtubeDiv2').css({display:displayArray[1]});
		$('#cylinderDiv1').css({display:displayArray[1]});
		$('#dropbottle').css({display:displayArray[1]});
		$('#litmusDiv').css({display:displayArray[1]});
		$('#label1').css({display:displayArray[1]});
		$('#label2').css({display:displayArray[1]});
		$('#litmusString1').css({display:displayArray[1]});
		$('#tubeString').css({display:displayArray[1]});
		$('#bottleString').css({display:displayArray[1]});
		$('#powderDrop').css({display:displayArray[1]});
		$('#hand').css({display:displayArray[1]});
		$('#Inference').css({display:displayArray[1]});
		$('#tubeStandTop1').css({display:displayArray[1]});
		$('#bottle').css({display:displayArray[1]});	
	}
	
	//*--Function to show the flame ---------
	function flames(){
		if($('#flame1').css('display') == displayArray[0]){          
			$('#flame1,#flame3,#flame4,#flame5').hide();
			$('#flame2').show();         
		}else if($('#flame2').css('display') == displayArray[0]){          
			$('#flame1,#flame2,#flame4,#flame5').hide();
			$('#flame3').show();         
		}else if($('#flame3').css('display') == displayArray[0]){          
			$('#flame1,#flame3,#flame2,#flame5').hide();
			$('#flame4').show();         
		}else if($('#flame4').css('display') == displayArray[0]){          
			$('#flame1,#flame3,#flame2,#flame4').hide();
			$('#flame5').show();         
		}else{
			$('#flame2,#flame3,#flame4,#flame5').hide();
			$('#flame1').show();
		}
	} 
		
	// burner on.........
	function burner(){
		$('#burnerDiv').css({cursor:'pointer'});
		$('#burnerDiv').click(function(){
			removeTrip();
			helpCnt++;
			$('#burnerOff').css({display:displayArray[1]});	
			$('#burnerOn').css({display:displayArray[0]});	
			$('#flame').show(); 
			$("#burnerDiv").unbind( "click" );	
			flaming = setInterval(flames, 7);	//calling flame function	
			$('#testtubeDiv1').css({'cursor':'pointer'});
			$(selectDragItem[4]).draggable({disabled:false});
			dragdrop('#testtubeDiv1','#dropArea1');	
		});	
	}

	//*--Function to show the yellow candle flame ---------
	function candleflames(){
		if($('#candleFlame1').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame2').show();         
		}else if($('#candleFlame2').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame3').show();         
		}else if($('#candleFlame3').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame4').show();         
		}else if($('#candleFlame4').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame5').show();         
		}else if($('#candleFlame5').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame6').show(); 
		}else if($('#candleFlame6').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame8,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame7').show(); 
		}else if($('#candleFlame7').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame9,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame8').show(); 
		}else if($('#candleFlame8').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame10,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame9').show(); 
		}else if($('#candleFlame9').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame9,#candleFlame11,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame10').show(); 
		}else if($('#candleFlame10').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame10,#candleFlame9,#candleFlame12,#candleFlame13').hide();
			$('#candleFlame11').show(); 
		}else if($('#candleFlame11').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame10,#candleFlame9,#candleFlame11,#candleFlame13').hide();
			$('#candleFlame12').show(); 
		}else if($('#candleFlame12').css('display') == displayArray[0]){          
			$('#candleFlame1,#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8,#candleFlame10,#candleFlame9,#candleFlame11,#candleFlame12').hide();
			$('#candleFlame13').show(); 
		}
		else{
			$('#candleFlame2,#candleFlame3,#candleFlame4,#candleFlame5,#candleFlame6,#candleFlame7,#candleFlame8').hide();
			$('#candleFlame1').show();
		}
	} 
		
	//*--Function to show the blue candle flame ---------
	function candleblueflames(){
		if($('#blueFlame1').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame2').show();         
		}else if($('#blueFlame2').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame3').show();         
		}else if($('#blueFlame3').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame4').show();         
		}else if($('#blueFlame4').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame5').show();         
		}else if($('#blueFlame5').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame6').show(); 
		}else if($('#blueFlame6').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame8,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame7').show(); 
		}else if($('#blueFlame7').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame9,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame8').show(); 
		}else if($('#blueFlame8').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame10,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame9').show(); 
		}else if($('#blueFlame9').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame9,#blueFlame11,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame10').show(); 
		}else if($('#blueFlame10').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame10,#blueFlame9,#blueFlame12,#blueFlame13').hide();
			$('#blueFlame11').show(); 
		}else if($('#blueFlame11').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame10,#blueFlame9,#blueFlame11,#blueFlame13').hide();
			$('#blueFlame12').show(); 
		}else if($('#blueFlame12').css('display') == displayArray[0]){          
			$('#blueFlame1,#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8,#blueFlame10,#blueFlame9,#blueFlame11,#blueFlame12').hide();
			$('#blueFlame13').show(); 
		}
		else{
			$('#blueFlame2,#blueFlame3,#blueFlame4,#blueFlame5,#blueFlame6,#blueFlame7,#blueFlame8').hide();
			$('#blueFlame1').show();
		}
	} 
		
	function candle(){
		$('#candleDiv').show();
		candleflaming=setInterval(candleflames,25);
	}
		
	function testTubeShaking(dragElement){ //shake testtube
		$(dragElement).css({'-ms-transform': 'rotate('+angle+'deg)','-webkit-transform': 'rotate('+angle+'deg)','transform': 'rotate('+angle+'deg)'});
		if(turningRight)
			angle++;
		else{
			angle--;
		}
		if(angle==10){
			turningRight=false;
		}
		if(angle==-10){
			turningRight=true;
		}
		clrTimeOutTube=setTimeout(function(){testTubeShaking(dragElement)},10);
	}
		
	//*--Function to remove help tooltip---
	function removeTrip(){
		if(tripClickFlag==true){
			$('.trip-block').hide();
			trip.stop();
			tripClickFlag=false;
		}
	}
		