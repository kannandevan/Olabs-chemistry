/// javascript document....
var randomVar;//=Math.floor((Math.random()*5));
//var compoundVal=compoundArray[randomVar];
var compoundVal;
var rotateEvt;
var answerFlag=0;
var propertyFlag=0;
var methodFlag=0;
var labelsArray=[];
var helpMsgArray=[];
var noChangeinference=[];
var inferenceMsgArray=[];
var textArray=[];
var testOptions=[];
var methodOptSulphur=[];
var methodOptHalogen=[];
var resltElement=[];
var compoundArray=[];
//var compoundVal;
var inferMsg;
/// canvas for bg image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 569;
BGCanvas.height = 340;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0);
};
bgImg.src=simPath+'images/BG1.gif';

window.onload = function init(){
	document.getElementById("expName").innerHTML=gt.gettext("Detection of Elements: Lassaigne's Test");
	labelsArray=[gt.gettext("Lassaigne's extract"),gt.gettext("Sodium nitroprusside"),gt.gettext("Acetic acid"),gt.gettext("Lead acetate"),gt.gettext("FeSO<sub>4</sub> solution"),gt.gettext("FeCl<sub>3</sub>"),gt.gettext("Conc. HCl"),gt.gettext("Conc. HNO<sub>3</sub>"),gt.gettext("AgNO<sub>3</sub>"),gt.gettext("NH<sub>4</sub>OH"),gt.gettext("dil. HCl"),gt.gettext("Carbon disulphide"),gt.gettext("Chlorine water")];
	
	inferenceMsgArray=[gt.gettext("Nitrogen present in the compound reacts with sodium to form<br>sodium cyanide during fusion. Sodium cyanide is converted to<br>sodium ferrocyanide, Na<sub>4</sub>[Fe(CN)<sub>6</sub>], on treating with ferrous sulphate.<br>On further treating it with ferric chloride, a prussian blue complex,<br>ferricferrocyanide, Fe<sub>4</sub>[Fe(CN)<sub>6</sub>]<sub>3</sub>, is formed."),
gt.gettext("During the preparation of Lassaigne's extract, sulphur from<br>the organic compound reacts with sodium to form sodium sulphide.<br>It gives a purple colour with sodium nitroprusside due to the<br>formation of sodium thionitroprusside, Na<sub>4</sub>[Fe(CN)<sub>5</sub>NOS]."),
gt.gettext("Sulphur from the organic compound reacts with sodium to form<br>sodium sulphide during the preparation of Lassaigne's extract. It reacts<br>with lead acetate to yield lead sulphide, PbS, as black precipitate."),
gt.gettext("During the preparation of Lassaigne's extract, chlorine form<br>the organic compound reacts with sodium to form sodium chloride.<br>Sodium chloride gives a white precipitate of silver chloride, AgCl,<br>with silver nitrate solution. The precipitate is soluble in ammonium hydroxide."),
gt.gettext("Sodium reacts with bromine to form sodium bromide during<br>the preparation of Lassaigne's extract. It reacts with<br>silver nitrate to form pale yellow precipitate of silver bromide,<br>AgBr, which is sparingly soluble in ammonium hydroxide."),
gt.gettext("Sodium reacts with iodine to form sodium iodide during<br>the preparation of Lassaigne's extract. It reacts with<br>silver nitrate solution to form yellow precipitate of silver iodide,<br>AgI, which is insoluble in ammonium hydroxide."),
gt.gettext("When sodium bromide formed in the Lassaigne's extract is treated<br> with chlorine water, the bromide is oxidised to bromine. Bromine dissolved<br>in carbon disulphide and imparts  orange colour in carbon disulphide layer."),
gt.gettext("When sodium iodide formed in the Lassaigne's extract is treated with,<br>chlorine water, iodide oxidised to iodine. Iodine dissolved in<br>carbon disulphide and imparts violet colour in carbon disulphide layer.")];

	noChangeinference=[gt.gettext("No characteristic change. Absence of Nitrogen"),gt.gettext("No characteristic change. Absence of Sulphur"),gt.gettext("No characteristic change. Absence of Chlorine"),gt.gettext("No characteristic change. Absence of Bromine"),gt.gettext("No characteristic change. Absence of Iodine")];
	helpMsgArray=[gt.gettext("To pour FeSO<sub>4</sub> solution into the Lassaigne's extract,<br>drag the test tube towards it."),
gt.gettext("Click on the knob of the<br>burner to turn it on."),
gt.gettext("Drag the test tube over the<br>Bunsen burner to heat it."),
gt.gettext("Drag the test tube to place it back."),
gt.gettext("Drag the dropper containing Conc. HCl to transfer<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing FeCl<sub>3</sub> solution to transfer<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing Sodium Nitroprusside solution<br>to transfer it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the test tube containing acetic acid to pour<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing Lead acetate<br>solution to transfer it into the test tube<br>containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing dil. HCl to transfer it<br>into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing Carbon disulphide to<br>transfer it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the test tube containing chlorine water to add it<br>into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the test tube to shake it."),
gt.gettext("Drag the dropper containing Conc. HNO<sub>3</sub> to transfer<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Click on the knob of the<br>burner to turn it on."),
gt.gettext("Drag the test tube over the<br>Bunsen burner to heat it."),
gt.gettext("Drag the test tube to place it back."),
gt.gettext("Drag the dropper containing AgNO<sub>3</sub> solution to transfer<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Drag the dropper containing NH<sub>4</sub>OH solution to transfer<br>it into the test tube containing Lassaigne's extract."),
gt.gettext("Choose the correct answer."),
gt.gettext("Click on the reset button to<br>redo the experiment.")];

 	textArray=[gt.gettext("Select the unknown element:"),gt.gettext("Select the identification test:"),gt.gettext("Select the method:"),gt.gettext("Select the element:"),gt.gettext("Result:")];   ///text for the controls 
 
  	testOptions=[gt.gettext("Detection of Nitrogen"),gt.gettext("Detection of Sulphur"),gt.gettext("Detection of Chlorine"),gt.gettext("Detection of Bromine"),gt.gettext("Detection of Iodine")];  //// different test options 
  
	methodOptSulphur=[gt.gettext("Sodium nitroprusside test"), gt.gettext("Lead acetate test")];  /// different methods for identifying the element sulphur
	methodOptHalogen=[gt.gettext("Silver nitrate test"),gt.gettext("Carbon disulphide test")];   /// different methods for identifying the element halogen
	resltElement=[gt.gettext("Nitrogen"),gt.gettext("Sulphur"),gt.gettext("Chlorine"),gt.gettext("Bromine"),gt.gettext("Iodine")];
	 compoundArray=['elmnt1','elmnt2','elmnt3','elmnt4','elmnt5',gt.gettext('- Select -')];
	 compoundVal=compoundArray[randomVar];
	 inferMsg=gt.gettext(inferenceMsgArray[0]);

/*	var msgs=[gt.gettext('Click here to turn on the burner.'),gt.gettext('Burner'),gt.gettext('Tripod stand'),gt.gettext('Thermometer'),gt.gettext('Capillary tube'),gt.gettext('Stirrer'),gt.gettext('Beaker'),gt.gettext('Paraffin liquid')];
*/
	$('#labelTxt1,#labelTxt4,#labelTxt7,#labelTxt10').html(gt.gettext(labelsArray[0]));
	$('#labelTxt2').html(gt.gettext(labelsArray[1]));
	$('#labelTxt3').html(gt.gettext(labelsArray[2]));
	$('#labelTxt5').html(gt.gettext(labelsArray[3]));
	$('#labelTxt6').html(gt.gettext(labelsArray[4]));
	$('#labelTxt8').html(gt.gettext(labelsArray[5]));
	$('#labelTxt9').html(gt.gettext(labelsArray[6]));
	$('#labelTxt11').html(gt.gettext(labelsArray[12]));
	$('#labelTxt12').html(gt.gettext(labelsArray[10]));
	$('#labelTxt13').html(gt.gettext(labelsArray[11]));
	$("#reset").val(gt.gettext("Reset"));
	document.getElementById("unknownElment").innerHTML=gt.gettext(textArray[0]);
	document.getElementById("test").innerHTML=gt.gettext(textArray[1]);
	document.getElementById("method").innerHTML=gt.gettext(textArray[2]);
	document.getElementById("element").innerHTML=gt.gettext(textArray[3]);
	document.getElementById("result").innerHTML=gt.gettext(textArray[4]);
	
	//*-- Loading option values in drop down ----
	addintoDropDown( $('#testCombo'),testOptions);
	document.getElementById("elementCombo").options[0]= new Option(gt.gettext(compoundArray[5]),"select");
	document.getElementById("resultCombo").options[0]= new Option(gt.gettext(compoundArray[5]),"select");

	for(var i=1; i<6; i++){
		document.getElementById("elementCombo").options[i]= new Option(gt.gettext("Element ")+(i), "elmnt"+i);
		document.getElementById("resultCombo").options[i]= new Option(gt.gettext(resltElement[i-1]), "elmnt"+i);
	}

	
}
//*-- Function to add values into the drop down ---					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
	}
	
$(document).ready(function() {
		
/*	document.getElementById("elementCombo").options[0]= new Option(compoundArray[5],"select");
	document.getElementById("resultCombo").options[0]= new Option(compoundArray[5],"select");
	for(var i=1; i<6; i++){
		document.getElementById("elementCombo").options[i]= new Option("Element "+(i), "elmnt"+i);
		document.getElementById("resultCombo").options[i]= new Option(gt.gettext(resltElement[i-1]), "elmnt"+i);
	}
*/		
});


///unknown element- drop down event .....
function ElementChange(){
	randomVar=Math.floor((Math.random()*5));
	var onChangeVal=document.getElementById('elementCombo').value;
	compoundVal=compoundArray[randomVar]; /// for dispalying compounds randomly....
	document.getElementById('elementCombo').value=onChangeVal;
	if(document.getElementById('elementCombo').selectedIndex>0){
		document.getElementById('testCombo').disabled=false;
		if(document.getElementById('testCombo').selectedIndex==0){
			$("#testtubeSolnDivFeSO4").draggable({disabled:false});
			dragTube();
		}
	}else{
		$("#testtubeSolnDivFeSO4").draggable({disabled:true});
		resetFN();
	}
}

//Identifying the element...
function actualElement(){
	document.getElementById("resultIcon").src="";
	if(answerFlag==1){	
		if(document.getElementById('resultCombo').value==compoundVal){
			document.getElementById("resultIcon").src=simPath+'images/tickicon.png';
		}
		else{
			document.getElementById("resultIcon").src=simPath+'images/wrongicon.png';
	    } 
	}else{
		document.getElementById("resultIcon").src=simPath+'images/wrongicon.png';
	} 
	$("#resultIcon").css({display:'block'});
}

///changing test ...
function testChange(){
	hideClips();
	propertyFlag=document.getElementById('testCombo').selectedIndex;
	if(document.getElementById('testCombo').selectedIndex>0){
		//document.getElementById('methodCombo').disabled=true;
		$("#method,#methodCombo").css({display:'block'});
		document.getElementById("methodCombo").innerHTML="";
		propertyChange();
		if(document.getElementById('testCombo').selectedIndex==1){
			addintoDropDown( $('#methodCombo'),methodOptSulphur);
		}else{
			if(document.getElementById('testCombo').selectedIndex==2){
				document.getElementById('methodCombo').disabled=true;
			}else{
				document.getElementById('methodCombo').disabled=false;
			}
			document.getElementById("dropperSoln").src=simPath+'images/soln_dropper.png';
			document.getElementById("bottle1").src=simPath+'images/bottle2.png';
			$("#bottleSoln").css({display:'none'});
			$("#testtubeSolnDivFeSO4").draggable({disabled:false});
			document.getElementById("testtubeSolnimgFe").src=simPath+'images/testubeSoln2.png';
			$("#nitogenTest").css({display:'block'});
			$('#labelTxt6').html(gt.gettext(labelsArray[7]));
			$('#labelTxt9').html(gt.gettext(labelsArray[8]));
			$('#labelTxt8').html(gt.gettext(labelsArray[9]));
			addintoDropDown( $('#methodCombo'),methodOptHalogen);
		}
	}else{
		//$("#bottleSoln").css({display:'none'});
		$("#testtubeSolnDivFeSO4").draggable({disabled:false});
		document.getElementById("bottle1").src=simPath+'images/bottle_empty.png';
		document.getElementById("dropperSoln").src=simPath+'images/FeCl3solution.png'; ///to change
		document.getElementById("testtubeSolnimgFe").src=simPath+'images/feso4soln.png';
		$("#method,#methodCombo").css({display:'none'});
		$("#nitogenTest,#bottleSoln").css({display:'block'});
	}
	
}

/// selecting method from the combo.....
function propertyChange(){
	resetMethod();
	methodFlag=document.getElementById('methodCombo').selectedIndex;
	if(document.getElementById('testCombo').selectedIndex==1){
		if(document.getElementById('methodCombo').selectedIndex<1){
			///sulphur test1
			$("#sulphurTest2").css({display:'none'});
			$("#sulphurTest1").css({display:'block'});
		}else{
			$("#sulphurTest1").css({display:'none'});
			$("#sulphurTest2").css({display:'block'});
			///sulphur test2
		}		
	}else if(document.getElementById('testCombo').selectedIndex>1){
		    $('#labelTxt6').html(gt.gettext(labelsArray[7]));
			$('#labelTxt9').html(gt.gettext(labelsArray[8]));
			$('#labelTxt8').html(gt.gettext(labelsArray[9]));
		if(document.getElementById('methodCombo').selectedIndex<1){
			///halogen test1
			$("#halogenTest2").css({display:'none'});
			document.getElementById("bottle2").src=simPath+'images/bottle_black.png';
			document.getElementById("bottle1").src=simPath+'images/bottle2.png';
			$("#nitogenTest").css({display:'block'});
			dragTube();
		}else{
			///halogen test2;
			//testtubeSolnDivFeSO4
			document.getElementById("bottle2").src=simPath+'images/bottle2.png';
			$("#halogenTest2").css({display:'block'});
			$("#nitogenTest").css({display:'none'});
		}
	}
	
}

////resetting the sulphur test....
function resetMethod(){
	
			$("#testtubeSoln1").css({height:'27px',top:'108px','background-color':'none'});
			$("#testtubeSolnimg1").css({top:'-107px',opacity:'1'});
			document.getElementById("resultCombo").disabled=true;
			$("#solnDragDiv2").draggable({disabled:false});
			$("#testtubeSoln3").css({height:'20px',top:'108px','background-color':'none'});
			$("#testtubeSolnimg3").css({opacity:'1',top:'-104px'});
			document.getElementById("resultCombo").selectedIndex=0;
			$('#resultIcon').css({display:'none'});
			dragcount=1;
			hideClips();
}


///event for dragging the test tube(FeSO4 Soln)...
function dragTube(){
	$("#testtubeSolnDivFeSO4").draggable({disabled:false});
	$("#testtubeSolnDivFeSO4").draggable({
			drag: function( event, ui ) {
				document.getElementById('elementCombo').disabled=true;
				},
			containment: "#canvasBox",	
			stop: function() {
				if(($("#testtubeSolnDivFeSO4").position().left>210)&&($("#testtubeSolnDivFeSO4").position().left<240)||($("#testtubeSolnDivFeSO4").position().top>20)&&($("#testtubeSolnDivFeSO4").position().top<130)){
					
					$("#N_solnPour,#N_solnPourStart").css('display','block');
					$("#N_solnPour,#N_solnPourStart").css('opacity','1');
					$("#testtubeSolnDivFeSO4").rotate(90);
					$("#testtubeSolnDivFeSO4").css({left:'265px',top:'111px'});
					$('#testtubeSoln').css({display:'block'});
					//,'background-color':'#97b77c',opacity:'0.1'
					$("#testtubeSoln").delay(100).animate({height:'48px',top:'91px'});
					$("#testtubeSolnimg").delay(100).animate({top:'-76px'});
					$("#burnerOff").click(function(){
						burnerON();
					});
					$("#testtubeSolnDivFeSO4").draggable({disabled:true});
					if(document.getElementById('testCombo').selectedIndex==0){
					    $("#N_solnPourStart").css({'background-color':'#4b7a14'});
						$("#N_solnPour").css({'border-top':'162px solid #4b7a14'});
					}
					else{
						$("#N_solnPourStart").css({'background-color':'#CCCCCC'});
						$("#N_solnPour").css({'border-top':'162px solid #CCCCCC'});
						
					}
					$("#N_solnPour,#N_solnPourStart").animate({
						opacity:'0'						
						},500,function(){							
							$("#N_solnPour,#N_solnPourStart,#testtubeSolnFeSO4").css('display','none');
							$("#testtubeSolnDivFeSO4").css({top:'120px',left:'220px'});
							$("#testtubeSolnDivFeSO4").animate({top:'140px',left:'206px'});
							$("#testtubeSolnDivFeSO4").rotate(0);	
					});	
				}else{
					$("#testtubeSolnDivFeSO4").css({left:'206px',top:'140px'});
				}
			}
		
	});	
	
}

//buerner ON/OFF......
var flaming;
function burnerON(){
	
	dragTube2(); ////drag event for 2nd test tube
	$("#flame").css({display:'block'});
	$('.flame1').show(); 
	flaming = setInterval(flames, 50);//fn call for flames	
	document.getElementById("burnerOff").src=simPath+'images/burneron.png';
	$("#burnerOff").css({left:'57px'});
	$("#burnerOff").unbind('click');
	$("#testtubeSolnDiv").draggable({disabled:false});
	
}


//fn for flames
function flames(){
		if($('.flame1').css('display') == "block"){          
			$('.flame1,.flame3,.flame4,.flame5').hide();
			$('.flame2').show();         
		}else if($('.flame2').css('display') == "block"){          
			$('.flame1,.flame2,.flame4,.flame5').hide();
			$('.flame3').show();         
		}else if($('.flame3').css('display') == "block"){          
			$('.flame1,.flame3,.flame2,.flame5').hide();
			$('.flame4').show(); 
		}else if($('.flame4').css('display') == "block"){          
			$('.flame1,.flame3,.flame2,.flame4').hide();
			$('.flame5').show();         
		}else{
			$('.flame2,.flame3,.flame4,.flame5').hide();
			$('.flame1').show();
		}
	}


///event for dragging the test tube(extract+FeSO4 Soln)...
function dragTube2(){
	
	var angle=180;
	$("#testtubeSolnDiv").draggable({
			drag: function( event, ui ) {
					
				},
			containment: "#canvasBox",	
			stop: function() {
				if(($("#testtubeSolnDiv").position().left>80)&&($("#testtubeSolnDiv").position().left<100)||($("#testtubeSolnDiv").position().top>-1)&&($("#testtubeSolnDiv").position().top<1)){
					
					$("#testtubeSolnDiv").css({left:'90px',top:'0px'});
					document.getElementById("testtubeSolnDiv").style.zIndex=5;
					$("#testtubeSolnDiv").draggable({disabled:true});
					rotateEvt=setInterval(rotateFunction,100);
					
				}else{
					$("#testtubeSolnDiv").css({left:'258px',top:'140px'});
					document.getElementById("testtubeSolnDiv").style.zIndex=1;
					if(count>30){
						$("#testtubeSolnDiv").draggable({disabled:true});
						dragSolution("solnDragDiv_fecl3");
					    dragcount=1;
					}
				}
			}
		
	});	
	
}

/////rotation...
var rotateCnt=0;
var rotateCnt2=3;
var count=0;
function rotateFunction(){
			
		if(rotateCnt<3){	
			count++;
			if(dragcount>1){
				$('#testtubeSolnDiv_halogen').rotate(rotateCnt);
			}else{
				$('#testtubeSolnDiv').rotate(rotateCnt);
			}
			rotateCnt++;			
		}else{	
			if(rotateCnt2>-3){	
			    count++;
			if(dragcount>1){
				$('#testtubeSolnDiv_halogen').rotate(rotateCnt2);
			}else{
				$('#testtubeSolnDiv').rotate(rotateCnt2);
			}
				rotateCnt2--;
			}else{
				rotateCnt=0;
				rotateCnt2=3;
			}
		}	
		if(count>30){
			    rotateCnt=0;
				rotateCnt2=0;
			    clearInterval(rotateEvt);
				if(dragcount>1){
					$('#testtubeSolnDiv_halogen').rotate(rotateCnt2);
					$("#testtubeSolnDiv_halogen").rotate(rotateCnt);
					$("#testtubeSolnDiv_halogen").animate({left:'158px',top:'137px'});
					setTimeout(function(){
						$("#testtubeSoln_color").css({height:'41px',top:'235px',left:'159px',width:'21px'});
					if(document.getElementById('testCombo').selectedIndex==3){
						 if(randomVar==3){
								answerFlag=1;
								$("#testtubeSoln_color").animate({'background-color':'#D3BE6E',opacity:'0.6'});
								$("#testtubeSolnimg_Hal").animate({opacity:'0.2'});
								$("#CO2Layer").animate({'background-color':'#D17E1D'});
								$(".inferenceDiv").css({display:'block'}); 
								inferMsg=gt.gettext(inferenceMsgArray[6]);
						 }else{
							$(".inferenceDiv").css({display:'block'});
							inferMsg=gt.gettext(noChangeinference[3]);						
						}
						 
					}else if(document.getElementById('testCombo').selectedIndex==4){
						if(randomVar==4){
								answerFlag=1;
								$("#testtubeSoln_color").animate({'background-color':'#8d3528',opacity:'0.8'});
								$("#testtubeSolnimg_Hal").animate({opacity:'0.2'});
								$("#CO2Layer").animate({'background-color':'#5f365f'});
								$(".inferenceDiv").css({display:'block'});
								inferMsg=gt.gettext(inferenceMsgArray[7]);
						}else{
							$(".inferenceDiv").css({display:'block'});
							inferMsg=gt.gettext(noChangeinference[4]);						
						}
						
					}
					//$(".inferenceDiv").css({display:'block'});
					document.getElementById("resultCombo").disabled=false;
					},1000);
			    }else{
					$("#testtubeSolnDiv").rotate(rotateCnt);
					$("#testtubeSolnDiv").rotate(rotateCnt2);
					$("#burnerOff").css({left:'47px'});
					clearInterval(flaming);
					$("#flame").css({display:'none'});
					document.getElementById("burnerOff").src=simPath+'images/burneroff.png';
					$("#testtubeSolnDiv").draggable({disabled:false});
				}
				document.getElementById("testtubeSolnDiv").style.zIndex=1;
		}
}

////event for dropper drag...
var dragcount=0;
function dragSolution(slnId){
	

	var ID=slnId;
	var id="#"+slnId;
	if(ID=='solnDragDiv'){
		dragcount++;	
		
	}
	$(id).draggable({disabled:false});
	$(id).draggable({
		
		    drag: function(event,ui){
					document.getElementById(ID).style.zIndex=5;
			},
			containment: "#canvasBox",
			stop: function() {
				
				if(($(id).position().left>=240)&&($(id).position().left<=270)&&($(id).position().top>=-1)&&($(id).position().top<=10))
				{
					$(id).css({left:'258px',top:'1px'});
					$("#testtubeSolnDiv").draggable({disabled:true});
					if(dragcount==1){
						$("#dropperSolnFeCl").animate({left:'10px',height:'0px',top:'160px'});
						document.getElementById("drops1_N").src=simPath+'images/drops.png';
						document.getElementById("drops2_N").src=simPath+'images/drops.png';
						if(document.getElementById('testCombo').selectedIndex!=0){
							
						}
						else{
							//document.getElementById("drops1_N").src=simPath+'images/droppersoln_sulphur.png';
						}
					}else{
						if(document.getElementById('testCombo').selectedIndex!=0){
							document.getElementById("drops1_N").src=simPath+'images/drops.png';
							document.getElementById("drops2_N").src=simPath+'images/drops.png';
						}else{
							document.getElementById("drops1_N").src=simPath+'images/FeCl3drop.png';
							document.getElementById("drops2_N").src=simPath+'images/FeCl3drop.png';
						}
						$("#dropperSoln").animate({left:'10px',height:'0px',top:'160px'});
					}
					$('#drops1_N').css({
					    display:'block',
					    top:'180px'
				    });
					$('#drops2_N').css({
						display:'block',
						top:'200px'
					});
					$('#drops2_N').animate({		
						top:'250px'
					});					
					$('#drops1_N').animate({		
						top:'260px',														
					},500,function(){	
						$('#drops1_N,#drops2_N').css({
					      display:'none',
				        });
						$("#solnDragDiv").css({left:'480px',top:'95px'});
					    $("#solnDragDiv_fecl3").css({left:'371px',top:'95px'});
						
						document.getElementById(ID).style.zIndex=1;
						
					});
					
					$(id).draggable({disabled:true});
					$("#testtubeSoln").delay(100).animate({height:(50+dragcount)+'px',top:(89-dragcount)+'px'});
					$("#testtubeSolnimg").delay(100).animate({top:(-73+dragcount)+'px'});
					setTimeout(function(){
						if(document.getElementById('testCombo').selectedIndex==0){
							
							if(dragcount==1){
								//$("#testtubeSoln").delay(100).animate({'background-color':'#CCCCCC',opacity:'0.3'});
								//$("#testtubeSolnimg").delay(100).animate({opacity:'1'});
								//$("#testtubeSoln_color").css({height:'52px',top:'227px',left:'260px'});
								//$("#testtubeSoln_color").animate({'background-color':'#003153',opacity:'1'});
					        }
							if(randomVar==0&&dragcount==2){
								answerFlag=1;
								$("#testtubeSoln_color").css({height:'52px',top:'227px',left:'260px'});
								$("#testtubeSoln_color").animate({'background-color':'#003153',opacity:'1'});
								$("#testtubeSolnimg").animate({opacity:'0.2'});
								$(".inferenceDiv").css({display:'block'});
								inferMsg=gt.gettext(inferenceMsgArray[0]);
							}else if(randomVar!=0&&dragcount==2){
								$(".inferenceDiv").css({display:'block'});
								inferMsg=gt.gettext(noChangeinference[0]);
							}
							
						}else if(document.getElementById('testCombo').selectedIndex==2){
								$("#testtubeSoln_color").css({height:'52px',top:'227px',left:'260px'});
							    if(randomVar==2){
									if(dragcount==2){
										answerFlag=1;
										$("#testtubeSoln_color").animate({'background-color':'#CCCCCC',opacity:'0.5'});
										$(".inferenceDiv").css({display:'block'});
									}else{
										$("#testtubeSoln_color").animate({'background-color':'#FFFFFF',opacity:'1'});
										$("#testtubeSolnimg").animate({opacity:'0.2'});
									}
									inferMsg=gt.gettext(inferenceMsgArray[3]);
								}else{
									if(dragcount==2){
										$(".inferenceDiv").css({display:'block'});
										inferMsg=gt.gettext(noChangeinference[2]);
									}						
								}
								
							}else if(document.getElementById('testCombo').selectedIndex==3){
								$("#testtubeSoln_color").css({height:'52px',top:'227px',left:'260px'});
									if(randomVar==3){
										if(dragcount==2){
											answerFlag=1;
							 				$("#testtubeSoln_color").animate({'background-color':'#F5F0C8',opacity:'0.7'});
										    //$("#testtubeSoln").animate({opacity:'1'});
											$(".inferenceDiv").css({display:'block'});
										}else{
											$("#testtubeSoln_color").animate({'background-color':'#F5F0C8',opacity:'1'});
											$("#testtubeSolnimg").animate({opacity:'0.2'});
									   }
									   inferMsg=gt.gettext(inferenceMsgArray[4]);
									}else{
										if(dragcount==2){
											$(".inferenceDiv").css({display:'block'});
											inferMsg=gt.gettext(noChangeinference[3]);	
										}					
									}
									
								}else if(document.getElementById('testCombo').selectedIndex==4){
							    	$("#testtubeSoln_color").css({height:'52px',top:'227px',left:'260px'});
								    if(randomVar==4){
										if(dragcount==2){
											answerFlag=1;
											$("#testtubeSolnimg").animate({opacity:'1'});
											$(".inferenceDiv").css({display:'block'});
										}else{
											$("#testtubeSoln_color").animate({'background-color':'#FCEBA6',opacity:'1'});
											$("#testtubeSolnimg").animate({opacity:'0.2'});
									     }
									     inferMsg=gt.gettext(inferenceMsgArray[5]);
								    }else{
								    	if(dragcount==2){
											$(".inferenceDiv").css({display:'block'});
											inferMsg=gt.gettext(noChangeinference[4]);	
										}					
									}
								
							}
							
						
						if(dragcount==1){
					      dragSolution("solnDragDiv");
						}else{
							document.getElementById("resultCombo").disabled=false;
							//$(".inferenceDiv").css({display:'block'});
						}
					},1000);
					
				}else{
					    $("#solnDragDiv").css({left:'480px',top:'95px'});
					    $("#solnDragDiv_fecl3").css({left:'371px',top:'95px'});
					    document.getElementById(ID).style.zIndex=1;
				}
			}
	});
}
///reset fn...
function resetFN(){
	resetMethod();
	//randomVar=Math.floor((Math.random()*5));
	$("#nitogenTest,#bottleSoln").css({display:'block'});
	document.getElementById('elementCombo').disabled=false;
	document.getElementById("dropperSoln").src=simPath+'images/FeCl3solution.png';
	document.getElementById("testtubeSolnimgFe").src=simPath+'images/feso4soln.png';
	document.getElementById('testCombo').disabled=true;
	document.getElementById('methodCombo').disabled=true;
	document.getElementById('resultCombo').disabled=true;
	document.getElementById('testCombo').selectedIndex=0;
	document.getElementById('methodCombo').selectedIndex=0;
	document.getElementById('resultCombo').selectedIndex=0;
	document.getElementById('elementCombo').selectedIndex=0;
	$("#method,#methodCombo").css({display:'none'});
}



///// resetting.....
function hideClips(){   
	
	rotateCnt=0;
	rotateCnt2=3;
	count=0;
	answerFlag=0;
	$(".inferenceDiv").css({display:'block',top:'20px'});
	document.getElementById("bottle1").src=simPath+'images/bottle_empty.png';
	document.getElementById("bottle2").src=simPath+'images/bottle2.png';
	$("#testtubeSoln_color").css({height:'22px',top:'259px','background-color':'#FFFFFF',opacity:'0',width:'19px'});
    $("#burnerOff").unbind('click');
	$("#nitogenTest,#sulphurTest1,#sulphurTest2,,#halogenTest2,#resultIcon,#flame,#CO2Layer,.inferenceDiv").css({display:'none'});
	$("#testtubeSolnDiv_halogen").rotate(rotateCnt);
	$('#testtubeSolnDiv').rotate(rotateCnt);
	document.getElementById("testtubeSolnDiv").style.zIndex=1;
	clearInterval(rotateEvt);
	clearInterval(flaming);
	$("#testtubeSolnDiv").css({left:'258px',top:'140px'});
	$("#testtubeSolnDiv2").draggable({disabled:false});
	$("#testtubeSolnDiv_halogen,#testtubeSolnDiv,#testtubeSolnDiv_cl").draggable({disabled:true});
	$("#solnDragDiv_fecl3,#solnDragDiv,#solnDragDiv5,#solnDragDiv3").draggable({disabled:true});
	document.getElementById("resultCombo").selectedIndex=0;
	$('#testtubeSolnFeSO4,#testtubeSoln_cl,#testtubeSoln2').css({display:'block'});
	$('#testtubeSoln,#testtubeSolnFeSO4').css({height:'20px',top:'119px'});
	$('#testtubeSolnimg').css({top:'-104px',opacity:'1'});
	document.getElementById("burnerOff").src=simPath+'images/burneroff.png';
	$("#burnerOff").css({left:'47px'});
	$("#dropperSoln,#dropperSoln2, #dropperSoln3,#dropperSolnFeCl,#dropperSoln4,#dropperSoln5") .css({display:'block',left:'8px',top:'73px',height: '60px'});
	$('#labelTxt6').html(gt.gettext(labelsArray[4]));
	$('#labelTxt9').html(gt.gettext(labelsArray[6]));
	$('#labelTxt8').html(gt.gettext(labelsArray[5]));
	enabledragHalogen("solnDragDiv4");
	dragcount=1;
	$('#testtubeSoln_halogen,#testtubeSoln_cl').css({height:'27px',top:'112px','background-color':'none'});
	$("#testtubeSolnimg_Hal, #testtubeSolnimg_cl").css({top:'-97px'});
	$("#testtubeSolnimg_Hal").css({opacity:'1'});
	
	$('#CO2Layer').css({height:'1px',top:'112px',opacity:'0.1','background-color':'#CCCCCC'});
	document.getElementById("resultCombo").disabled=true;
	
}

/// event for dragging the dropper -- Sulphurtest1
 
$("#solnDragDiv2").draggable({
		
		    drag: function(event,ui){
					document.getElementById("solnDragDiv2").style.zIndex=3;
				    document.getElementById('elementCombo').disabled=true;

			},
			containment: "#canvasBox",
			stop: function() {
				
				if(($("#solnDragDiv2").position().left>=150)&&($("#solnDragDiv2").position().left<=195)&&($("#solnDragDiv2").position().top>=-5)&&($("#solnDragDiv2").position().top<=15))
				{
					$("#solnDragDiv2").css({left:'187px',top:'11px'});
					$("#dropperSoln2").animate({left:'10px',height:'0px',top:'160px'});
					$('#drops1').css({
					    display:'block',
					    top:'180px'
				    });
					$('#drops2').css({
						display:'block',
						top:'200px'
					});
					$('#drops2').animate({		
						top:'250px'
					});					
					$('#drops1').animate({		
						top:'260px',														
					},500,function(){	
						$('#drops1,#drops2').css({
					     display:'none',
				       });
					   $("#solnDragDiv2").css({left:'404px',top:'92px'});
					   document.getElementById("solnDragDiv2").style.zIndex=1;
					});
					$("#testtubeSoln1").delay(100).animate({height:'37px',top:'97px'});
					$("#testtubeSolnimg1").delay(100).animate({top:'-96px'});
				
					if(randomVar==1){
						answerFlag=1;
						$("#testtubeSoln_color").css({height:'37px',top:'236px',left:'190px'});
						$("#testtubeSoln_color").animate({'background-color':'#800080',opacity:'1'});
						$("#testtubeSolnimg1").animate({opacity:'0.2'});
						$(".inferenceDiv").css({display:'block'});
						inferMsg=gt.gettext(inferenceMsgArray[1]);
					}else{
						$(".inferenceDiv").css({display:'block'});
						inferMsg=gt.gettext(noChangeinference[1]);
					}					
					document.getElementById("resultCombo").disabled=false;
					$("#solnDragDiv2").draggable({disabled:true});
				}
				else{
					$("#solnDragDiv2").css({left:'404px',top:'92px'});
					document.getElementById("solnDragDiv2").style.zIndex=1;
				}
		 }
});
	
	
//// drag event for test tube containing acetic acid..

$("#testtubeSolnDiv2").draggable({
	
	        drag: function(event,ui){
				 document.getElementById('elementCombo').disabled=true;
			},
			containment: "#canvasBox",
			stop: function() {
				if(($("#testtubeSolnDiv2").position().left>=120)&&($("#testtubeSolnDiv2").position().left<=180)&&($("#testtubeSolnDiv2").position().top>=0)&&($("#testtubeSolnDiv2").position().top<=150))
				{
					$("#solnPour,#solnPourStart").css('display','block');
					$("#solnPour,#solnPourStart").css('opacity','1');
					$("#testtubeSolnDiv2").rotate(90);
					$("#testtubeSolnDiv2").css({left:'221px',top:'85px'});
					$("#testtubeSoln3").delay(100).animate({height:'45px',top:'84px'});
					$("#testtubeSolnimg3").delay(100).animate({top:'-78px'});
					$("#solnPour,#solnPourStart").animate({
						opacity:'0'						
						},500,function(){							
							$("#solnPour,#solnPourStart,#testtubeSoln2").css('display','none');
							$("#testtubeSolnDiv2").css({top:'100px',left:'160px'});
							$("#testtubeSolnDiv2").animate({top:'145px',left:'150px'});
							$("#testtubeSolnDiv2").rotate(0);	
							dragleadDropper();
					});	
					$("#testtubeSolnDiv2").draggable({disabled:true});
				}
				else{
					$("#testtubeSolnDiv2").css({top:'145px',left:'150px'});		
				}
			}
	
});	


/// drag event for lead acetate soln....

function dragleadDropper()
{
	$("#solnDragDiv3").draggable({disabled:false});
	$("#solnDragDiv3").draggable({
	
	        drag: function(event,ui){
					document.getElementById("solnDragDiv3").style.zIndex=3;
			},
			containment: "#canvasBox",
			stop: function() {
				if(($("#solnDragDiv3").position().left>=210)&&($("#solnDragDiv3").position().left<=230)&&($("#solnDragDiv3").position().top>=-1)&&($("#solnDragDiv3").position().top<=5))
				{
					$("#solnDragDiv3").css({left:'216px',top:'0px'});
					$("#dropperSoln3").animate({left:'10px',height:'0px',top:'160px'});
					$("#testtubeSoln3").animate({height:($("#testtubeSoln3").height()+2)+'px',top:($("#testtubeSoln3").position().top-5)+'px'});
					$("#testtubeSolnimg3").animate({top:($("#testtubeSolnimg3").position().top+2)+'px'});
					
					$('#drops3').css({
					    display:'block',
					    top:'180px'
				    });
					$('#drops4').css({
						display:'block',
						top:'200px'
					});
					$('#drops4').animate({		
						top:'250px'
					});					
					$('#drops3').animate({		
						top:'260px',														
					},800,function(){	
						$('#drops3,#drops4').css({
					     display:'none',
				       });
					   $("#solnDragDiv3").css({left:'404px',top:'96px'});
					   document.getElementById("solnDragDiv3").style.zIndex=1;
					   if(randomVar==1){
							answerFlag=1;
							$("#testtubeSoln_color").css({height:'44px',top:'228px',left:'224px'});
						    $("#testtubeSoln_color").animate({'background-color':'#000000',opacity:'1'});
							$("#testtubeSolnimg3").animate({opacity:'0.2'});
							$(".inferenceDiv").css({display:'block'});
							 inferMsg=gt.gettext(inferenceMsgArray[2]);
					   }else{
							$(".inferenceDiv").css({display:'block'});
							inferMsg=gt.gettext(noChangeinference[1]);
						}
					  
					});
					document.getElementById("resultCombo").disabled=false;
					$("#solnDragDiv3").draggable({disabled:true});
				}else{
					 $("#solnDragDiv3").css({left:'404px',top:'96px'});
					 document.getElementById("solnDragDiv3").style.zIndex=1;
				}
			}
				
	});
	
	
}


	
//// drag event for carbon disulphide......

function enabledragHalogen(slnId){
	
	var ID=slnId;
	var id="#"+slnId;

	$(id).draggable({disabled:false});
	$(id).draggable({
	
	drag: function(event,ui){
					document.getElementById(ID).style.zIndex=3;
				    document.getElementById('elementCombo').disabled=true;
			},
			containment: "#canvasBox",
			stop: function() {
				if(($(id).position().left>=145)&&($(id).position().left<=170)&&($(id).position().top>=-1)&&($(id).position().top<=5))
				{
					$(id).css({left:'158px',top:'0px'});
					$("#testtubeSoln_halogen").animate({height:($("#testtubeSoln_halogen").height()+dragcount)+'px',top:($("#testtubeSoln_halogen").position().top-dragcount)+'px'});
					$("#testtubeSolnimg_Hal").animate({top:($("#testtubeSolnimg_Hal").position().top+dragcount)+'px'});
						
					if(ID=='solnDragDiv5'){
						dragcount++;	
					}
					if(dragcount==1){
						$("#dropperSoln4").animate({left:'11px',height:'0px',top:'160px'});
					}else{
						
						$("#dropperSoln5").animate({left:'11px',height:'0px',top:'160px'});
					}
					
					$('#drops1_H').css({
					    display:'block',
					    top:'180px'
				    });
					$('#drops2_H').css({
						display:'block',
						top:'200px'
					});
					$('#drops2_H').animate({		
						top:'250px'
					});					
					
					$('#drops1_H').animate({		
						top:'260px',														
					},800,function(){	
					   $('#drops1_H,#drops2_H').css({
					     display:'none',
				       });
					   $("#solnDragDiv4").css({left:'315px',top:'95px'});
					   $("#solnDragDiv5").css({left:'431px',top:'95px'});
					   document.getElementById(ID).style.zIndex=1;
					 
					   if(dragcount==2){
						    $("#CO2Layer").css({display:'block'});
							$("#CO2Layer").animate({opacity:'1',height:'9px',top:'101px'});
							$('#testtubeSolnDiv_cl').draggable({disabled:false});
							dragClWater();  
					   }else{ 
					   		enabledragHalogen("solnDragDiv5");
					   }
					});
					
					$(id).draggable({disabled:true});
				}else{
					 $("#solnDragDiv4").css({left:'315px',top:'95px'});
					 $("#solnDragDiv5").css({left:'431px',top:'95px'});
					 document.getElementById(ID).style.zIndex=1;
				}
			}
	});
}

/// drag event for chlorine water.....
function dragClWater(){
	$("#testtubeSolnDiv_cl").draggable({
	
	        drag: function(event,ui){
			},
			containment: "#canvasBox",
			stop: function() {
				if(($("#testtubeSolnDiv_cl").position().left>=120)&&($("#testtubeSolnDiv_cl").position().left<=180)&&($("#testtubeSolnDiv_cl").position().top>=0)&&($("#testtubeSolnDiv_cl").position().top<=150))
				{
					$("#solnPour_H,#solnPourStart_H").css('display','block');
					$("#solnPour_H,#solnPourStart_H").css('opacity','1');
					$("#testtubeSolnDiv_cl").css({left:'170px',top:'105px'});
					$("#testtubeSolnDiv_cl").rotate(90);
					$("#testtubeSoln_cl").delay(100).animate({height:'45px',top:'84px'});
					$("#testtubeSolnimg_cl").delay(100).animate({top:'-78px'});
					$("#testtubeSoln_cl").css('display','none');
					$("#testtubeSoln_halogen").animate({top:'97px',height:'42px'});
					$("#testtubeSolnimg_Hal").animate({top:'-82px'});
					$("#CO2Layer").animate({height:'17px',top:'81px'});
					$("#solnPour_H,#solnPourStart_H").animate({
						opacity:'0'						
						},500,function(){							
							$("#solnPour_H,#solnPourStart_H,#testtubeSoln_cl").css('display','none');
							$("#testtubeSolnDiv_cl").css({top:'100px',left:'130px'});
							$("#testtubeSolnDiv_cl").animate({top:'137px',left:'106px'});
							$("#testtubeSolnDiv_cl").rotate(0);	
							$("#testtubeSolnDiv_halogen").draggable({disabled:false});
							dragnShakeTube();
					});	
					$("#testtubeSolnDiv_cl").draggable({disabled:true});
				}
				else{
					$("#testtubeSolnDiv_cl").css({top:'137px',left:'106px'});		
				}
			}
    });	
}	


///event for dragging the test tube(extract+CO@ Soln)...
function dragnShakeTube(){
	
	var angle=180;
	$("#testtubeSolnDiv_halogen").draggable({
			drag: function( event, ui ) {
		
				},
			containment: "#canvasBox",	
			stop: function() {
				if(($("#testtubeSolnDiv_halogen").position().left>50)&&($("#testtubeSolnDiv_halogen").position().left<200)||($("#testtubeSolnDiv_halogen").position().top>-1)&&($("#testtubeSolnDiv_halogen").position().top<10)){
					
					$("#testtubeSolnDiv_halogen").css({left:'190px',top:'5px'});
					document.getElementById("testtubeSolnDiv").style.zIndex=5;
					$("#testtubeSolnDiv_halogen").draggable({disabled:true});
					rotateCnt=0;
					rotateCnt2=3;
					count=0;
					rotateEvt=setInterval(rotateFunction,100);
				}else{
					$("#testtubeSolnDiv_halogen").css({left:'158px',top:'137px'});
					document.getElementById("testtubeSolnDiv_halogen").style.zIndex=1;
				}
			}
		
	});	
	
}