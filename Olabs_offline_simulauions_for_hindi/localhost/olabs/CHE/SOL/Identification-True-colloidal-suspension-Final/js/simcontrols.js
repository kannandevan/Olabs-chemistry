//*--Ready function---------
var controlLabel,gt,propertyContents,selectedSolnLabel,solnImgs,displayArray,solnAImgs,solnBImgs,solnCImgs,solnALabelStr1,solnBLabelStr1,solnCLabelStr1,testtubeStandImg,testtubeImg,solnAcontents1,solnBcontents1,solnCcontents1,timeLabelArray,startArr,testtubeStandTop,testtubeStandLeft,solnLabelTop,solnLabelLeft,testubeALeft,testubeBLeft,testubeCLeft,testtubeDragwidth,testtubeDragheight,dragSelectedLeft,tubeSolnLabelLeft,tubeSolnLabelTop,solnPourColor;
var bgTop,bgLeft,iconSelect,varTitleFont,testtubeTop,solnTop,dragSelected,dragObj,powderImgs,usedSolns,usedSolns1,usedSolns2,usedSolns0;
var timer1,timer2,count=0,propertyValue=0;
var stopFlag=false;
var solnOver,helpTransparency,helpFiltrations,helpStability,helpTyndal,inferenceTransparency,inferenceFiltrations,inferenceStability,inferenceTyndal;

window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Distinguish Between Solutions");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	// $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	// $('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	// $(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	selectedSolnLabel=[gt.gettext("True solutions"),gt.gettext("Suspensions"),gt.gettext("Colloids")];
	propertyContents=[gt.gettext("Transparency"),gt.gettext("Filtrations"),gt.gettext("Stability"),gt.gettext("Tyndall effect")];
	$('#allsolnLabel').html(selectedSolnLabel[0]);
	controlLabel=[gt.gettext("Select the property"),gt.gettext("Select the solution to be tested"),gt.gettext("Reset"),gt.gettext("True solutions"),gt.gettext("Suspensions"),gt.gettext("Colloids")];
	helpTransparency=[gt.gettext("Drag the cellophane paper behind <br> the solutions in the test tubes for checking <br> the transparency of true solution."),gt.gettext("Click and drag the cellophane paper behind <br> the solutions in the test tubes for checking <br> the transparency of suspension."),gt.gettext("Click and drag the cellophane paper behind <br> the solutions in the test tubes for checking <br> the transparency of colloid.")];
	helpFiltrations=[gt.gettext("Drag the test tube and pour the solution into the <br> test tube through the funnel and glass rod."),gt.gettext("Click on the funnel to see the <br> zoomed view of the filter paper content.")];
	helpStability=[gt.gettext("Click on on the start button to wait<br>  for 20 minutes for the particles<br> in the solution to settle.")];
	helpTyndal=[gt.gettext("Drag the test tube to fit it in the stand."),gt.gettext("Drag the light source to view tyndall effect clearly.")];
	inferenceTransparency=[gt.gettext("A true solution is transparent."),gt.gettext("A suspension is opaque."),gt.gettext("A colloid is a translucent.")];
	inferenceFiltrations=[gt.gettext("Solid particles cannot be separated from <br>true solution by filtration."),gt.gettext("Suspended components of suspension <br> can be separated by filtration."),gt.gettext("Components causing colloid cannot be <br> separated by filtration.")];
	inferenceStability=[gt.gettext("The true solutions are stable and do not<br> show the depositions of components."),gt.gettext("Suspension is unstable and show <br>settlement of heavier particles."),gt.gettext("Colloids are stable. Their solute particles <br>do not settle down when left undisturbed.")];
	inferenceTyndal=[gt.gettext("In true solutions, the solute completely dissolves in the <br>solvent and is present in its molecular size.  Because of <br>this small size,the solute particles do not scatter the <br>light passed through the solution. "),gt.gettext("The size of the particles in a suspension is of the order <br>of 10<sup>-5</sup> cm or larger.Because of the large size of the <br>particles, suspensions do not show Tyndall effect."),gt.gettext("When a strong beam of light is passed through a colloidal solution <br>the light is scattered by the particles of the colloid. Thus the <br>path of light is clearly visible in the colloid.")];
	
	solnAcontents1=['solnTransparent.png','solnDarkBrown.png','solnWhiteTransparent.png'];
	solnBcontents1=['solnTransparent.png','solnWhite.png','solnWhiteTransparent.png'];
	solnCcontents1=['solnTransparent.png','solnBrown.png','solnWhiteTransparent.png'];
	solnAcontents2=['solnTransparent2.png','solnDarkBrown2.png','solnWhiteTransparent2.png'];
	solnBcontents2=['solnTransparent2.png','solnWhite2.png','solnWhiteTransparent2.png'];
	solnCcontents2=['solnTransparent2.png','solnBrown2.png','solnWhiteTransparent2.png'];
	solnAcontents3=['solnTransparent3.png','solnDarkBrown3.png','solnWhiteTransparent3.png'];
	solnBcontents3=['solnTransparent3.png','solnWhite3.png','solnWhiteTransparent3.png'];
	solnCcontents3=['solnTransparent3.png','solnBrown3.png','solnWhiteTransparent3.png'];	
	testtubeImg=['testtube1.png','testtube2.png','testtube1.png','testtube3.png'];
	testtubeStandImg=['testtubeStand1.png','testtubeStand2.png','testtubeStand1.png','testtubeStand3.png'];
	powderImgs=['powderdarkbrown2.png','powderwhite2.png','powderBrown2.png','powderwet.png'];
	solnALabelStr1=['A','D','G'];
	solnBLabelStr1=['B','E','H'];
	solnCLabelStr1=['C','F','I'];
	iconSelected=['trueClick','susClick','colloidClick'];
	dragSelected=['testtubeDrag0','testtubeDrag1','testtubeDrag2'];
	timeLabelArray=[gt.gettext('h'),gt.gettext('min'),gt.gettext('sec')];
	startArr=[gt.gettext("START"),gt.gettext("STOP")];
	displayArray=['block','none'];
	usedSolns0=[gt.gettext('Sugar'),gt.gettext('Salt'),gt.gettext('Alum')];
	usedSolns1=[gt.gettext('Soil'),gt.gettext('Chalk'),gt.gettext('Sand')];
	usedSolns2=[gt.gettext('Starch'),gt.gettext('Egg Albumin'),gt.gettext('Egg Albumin')];
	usedSolns=usedSolns0;
	varTitleFont=[20,14,18,12];
	testtubeStandTop=[159,197,159,207];
	testtubeStandLeft=[142,303,70,376];
	solnLabelTop=[304,306,304,292];
	solnLabelLeft=[184,309,116,362];
	testtubeTop=[116,165,116,182];
	tubeSolnLabelTop=[19,14,19,10];
	tubeSolnLabelLeft=[7,6,7,3];
	solnTop=[105,78,105,62];
	testubeALeft=[188,338,117,405];
	testubeBLeft=[269,397,198,453];
	testubeCLeft=[348,457,277,500];
	testtubeDragwidth=['27px','21px','27px','16px'];
	testtubeDragheight=['175px','131px','175px','105px'];
	solnPourColor=[ '130px solid #F1E4D8','130px solid #CCC', '130px solid #F1E4D8'];
	iconSelect=iconSelected[0];	
	
	$(document).ready(function() {		
		//*--Apply selectable false--------
		$('#mainDiv').mousedown(function(event){event.preventDefault();});
		bgTop=$('#mainDiv').position().top;
		bgLeft=$('#mainDiv').position().left;	
		//*--Add label for all controls----	
		addLabel();	
		//*--Loading option values in drop down----
		addintoDropDown($('#property'),propertyContents);
		//*-----Start drag event ----------------	
		$('#handDrag').draggable({containment: "#handContainer", scroll: false,//stop the drag event
			drag: function(event,ui){
				$('#handWithPaper').css({top:this.offsetTop+54});
				$('#handWithPaper').css({left:this.offsetLeft+100});
				$("#inference").css({display:displayArray[1]});
				if ((this.offsetTop>=bgTop+120) && (this.offsetTop<=bgTop+200)&&(this.offsetLeft>=bgLeft+114) &&(this.offsetLeft<=bgLeft+370)){
					$("#inference").css({display:displayArray[0]});
				 }
			}
		});
		//*--Function to click icons---	
		$('#trueClick,#susClick,#colloidClick').click(function() {
			iconSelect=this.id;
			solutionChange();
			commonChange();	
			for(var i=0;i<iconSelected.length;i++){
				if(iconSelect==iconSelected[i]){
					$('#allsolnLabel').html(selectedSolnLabel[i]);
					$('#solnA1Label').html(solnALabelStr1[i]);
					$('#solnB1Label').html(solnBLabelStr1[i]);
					$('#solnC1Label').html(solnCLabelStr1[i]);
										
				}
			}
			if(iconSelect==iconSelected[2]){
				$("#tubeWithSolution2,#testtubeDrag2").css({display:displayArray[1]});
				$("#filteredTubeSoln").attr('src',simPath+"images/"+solnAcontents2[2]);	
				usedSolns=usedSolns2;				
			}else{
				$("#tubeWithSolution2,#testtubeDrag2").css({display:displayArray[0]});
				$("#filteredTubeSoln").attr('src',simPath+"images/"+solnAcontents2[0]);	
				if(iconSelect==iconSelected[1]){
					usedSolns=usedSolns1;					
				}else{
					usedSolns=usedSolns0;
				}
			}
			if(propertyValue==1){
				$("#testtubeDrag0,#tubeWithSolution0").css({left:bgLeft+testubeALeft[1]+'px'});					
				$("#testtubeDrag1,#tubeWithSolution1").css({left:bgLeft+testubeBLeft[1]+'px'});
				$("#testtubeDrag2,#tubeWithSolution2").css({left:bgLeft+testubeCLeft[1]+'px'});
				$(".testtubeDrag").css({top:bgTop+testtubeTop[1]+'px',width:testtubeDragwidth[1],height:testtubeDragheight[1]});
			}else if(propertyValue==3){
				$("#testtubeDrag0,#tubeWithSolution0").css({left:bgLeft+testubeALeft[3]+'px'});					
				$("#testtubeDrag1,#tubeWithSolution1").css({left:bgLeft+testubeBLeft[3]+'px'});
				$("#testtubeDrag2,#tubeWithSolution2").css({left:bgLeft+testubeCLeft[3]+'px'});
				$(".testtubeDrag").css({top:bgTop+testtubeTop[3]+'px',width:testtubeDragwidth[3],height:testtubeDragheight[3]});
			}			
			resetEvent();
		})	
		//*--Function to select the property---
		$('#property').change(function () {			
			propertyValue=$("#property").find(':selected').val();
			commonChange();								
			for(var i=0;i<testubeALeft.length;i++){
				if($("#property").find(':selected').val()==i){
					$("#testtubeDrag0,#tubeWithSolution0").css({left:bgLeft+testubeALeft[i]+'px'});					
					$("#testtubeDrag1,#tubeWithSolution1").css({left:bgLeft+testubeBLeft[i]+'px'});
					$("#testtubeDrag2,#tubeWithSolution2").css({left:bgLeft+testubeCLeft[i]+'px'});
					$(".testtubeDrag").css({top:bgTop+testtubeTop[i]+'px',width:testtubeDragwidth[i],height:testtubeDragheight[i]});					
					$("#testtubeStand1").css({top:bgTop+testtubeStandTop[i]+'px',left:bgLeft+testtubeStandLeft[i]+'px'});
					$("#allsolnLabel").css({top:bgTop+solnLabelTop[i]+'px',left:bgLeft+solnLabelLeft[i]+'px'});
					$(".varTitleCanvas,.solnLabel").css({fontSize: varTitleFont[i]});
					$(".testtube1").attr('src',simPath+"images/"+testtubeImg[i]);
					$("#testtubeStand1").attr('src',simPath+"images/"+testtubeStandImg[i]);	
					$(".solnLabel").css({top:bgTop+tubeSolnLabelTop[i]+'px',left:bgLeft+tubeSolnLabelLeft[i]+'px'});
					$(".soln").css({top:bgTop+solnTop[i]+'px'});
					
				}
			}							
			if($("#property").find(':selected').val()==0){//Transparency
				$("#transparencyArea,#BG1").css({display:displayArray[0]});
				$("#filtrationsArea,#stabilityArea,#tyndalleffectArea,#BG2,#BG3").css({display:displayArray[1]});	
			}else if($("#property").find(':selected').val()==1){//Filtrations
				$("#filtrationsArea,#BG2").css({display:displayArray[0]});
				$("#transparencyArea,#stabilityArea,#tyndalleffectArea,#BG1,#BG3").css({display:displayArray[1]});
				dragItem('testtubeDrag','mainDiv',bgTop+0,bgTop+100,bgLeft+0,bgLeft+285);
			}else if($("#property").find(':selected').val()==2){ //Stability
				$("#stabilityArea,#BG1").css({display:displayArray[0]});				
				$("#transparencyArea,#filtrationsArea,#tyndalleffectArea,#BG2,#BG3").css({display:displayArray[1]});
			}else{//Tyndall effect
				$('#power').draggable({containment: "#powerBlock", scroll: false, 
					
				});
				
				$("#tyndalleffectArea,#BG3").css({display:displayArray[0]});
				$("#transparencyArea,#filtrationsArea,#stabilityArea,#BG1,#BG2").css({display:displayArray[1]});				
				dragItem('testtubeDrag','mainDiv',bgTop+0,bgTop+200,bgLeft+25,bgLeft+115);
			}		
			solutionChange();			
			resetEvent();				
		});
		//*--Function to change the solution---
		function solutionChange(){
			if($("#property").find(':selected').val()==0){//Transparency
				solnAImgs=solnAcontents1;
				solnBImgs=solnBcontents1;
				solnCImgs=solnCcontents1;
			}else if($("#property").find(':selected').val()==1){//Filtrations
				solnAImgs=solnAcontents2;
				solnBImgs=solnBcontents2;
				solnCImgs=solnCcontents2;
			}else if($("#property").find(':selected').val()==2){ //Stability
				solnAImgs=solnAcontents1;
				solnBImgs=solnBcontents1;
				solnCImgs=solnCcontents1;
			}else{//Tyndall effect
				solnAImgs=solnAcontents3;
				solnBImgs=solnBcontents3;
				solnCImgs=solnCcontents3;
			}
			for(var i=0;i<iconSelected.length;i++){
				if(iconSelect==iconSelected[i]){
					$("#solnA1").attr('src',simPath+"images/"+solnAImgs[i]);
					$("#solnB1").attr('src',simPath+"images/"+solnBImgs[i]);
					$("#solnC1").attr('src',simPath+"images/"+solnCImgs[i]);
				}
			}
			if($("#property").find(':selected').val()==1){//Filtrations
				$(".testtubeDrag").draggable({disabled:false});	
			}else if($("#property").find(':selected').val()==3){//Tyndall effect
				$(".testtubeDrag").draggable({disabled:false});	
			}else{
				$(".testtubeDrag").draggable({disabled:true});	
			}
		}		
		//*--Function to start drag events---------
		function dragItem(sampleid,container,minTop,maxTop,minLeft,maxLeft){						
			//*-----Start drag event ----------------
			$('.'+sampleid).draggable({containment: "#"+container, scroll: false,//stop the drag event
				start: function(event,ui){
					dragObj=this;
					if($("#property").find(':selected').val()==1){//Filtrations
						$('#filteredTubeSolnDiv,#inference').css({display:displayArray[1]});
						$('#filteredTubeSolnDiv').animate({height:'5px',top:bgTop+230+'px'});
						$('#filteredTubeSoln').animate({top:bgTop-47+'px'});
					}
				},
				drag: function(event,ui){
					if(count<4){
						for(var j=0;j<dragSelected.length;j++){
							if(dragObj.id==dragSelected[j]){
								$('#tubeWithSolution'+j).css({top:this.offsetTop,left:this.offsetLeft});
							}
						}
						if($("#property").find(':selected').val()==1){//Filtrations
							$("#zoompaper2,#powder,#funnelDiv").css({display:displayArray[1]});
							$("#funnelDiv").css({cursor:'default'});
							if(iconSelect==iconSelected[1]){
								for(var q=0;q<dragSelected.length;q++){
									if(dragObj.id==dragSelected[q]){
										$('#solnPour').css({borderTop:solnPourColor[q]});
										$("#powder").attr('src',simPath+"images/"+powderImgs[q]);
									}
								}
							}else{
								$('#solnPour').css({borderTop:solnPourColor[1]});
								$("#powder").attr('src',simPath+"images/"+powderImgs[3]);
							}
						}
					}
				},
				stop : function(event, ui) {							
					if (((((this.offsetTop>=minTop)&& (this.offsetLeft>=minLeft)) && ((this.offsetTop<=maxTop)&&(this.offsetLeft<=maxLeft))))){						
						if($("#property").find(':selected').val()==1){//Filtrations
							count++;							
							$(".testtubeDrag").draggable({disabled:true});							
							this.style.left=bgLeft+207+"px";							
							this.style.top=bgTop-15+"px";
							for(var m=0;m<dragSelected.length;m++){
								if(dragObj.id==dragSelected[m]){
									$('#tubeWithSolution'+m).css({top:this.offsetTop,left:this.offsetLeft});
									$("#filterBlock"+m).css({display:displayArray[0]});
								}
							}
							if(dragObj.id==dragSelected[0]){
								rotation(document.getElementById("tubeWithSolution0"),-90);// rotate test tube 1
								$("#solnA1").css({opacity:0});
							}else if(dragObj.id==dragSelected[1]){
								rotation(document.getElementById("tubeWithSolution1"),-90);// rotate test tube 2
								$("#solnB1").css({opacity:0});
							}else{
								rotation(document.getElementById("tubeWithSolution2"),-90);// rotate test tube 3
								$("#solnC1").css({opacity:0});
							}
							timer1=setTimeout(function(){								
								$("#solnPour,#filteredTubeSolnDiv").css({display:displayArray[0]});
								$('#filteredTubeSolnDiv').animate({height:'55px',top:bgTop+180+'px'});
								$('#filteredTubeSoln').animate({top:bgTop+0+'px'});
							},100)									
								
							timer2=setTimeout(function(){
								$("#solnPour").css({display:displayArray[1]});
								if(dragObj.id==dragSelected[0]){
									rotation(document.getElementById("tubeWithSolution0"),0);// glass bowl for cleaning
								}else if(dragObj.id==dragSelected[1]){
									rotation(document.getElementById("tubeWithSolution1"),0);// glass bowl for cleaning
								}else{
									rotation(document.getElementById("tubeWithSolution2"),0);// glass bowl for cleaning
								}
								 for(var p=0;p<dragSelected.length;p++){
									if($("#property").find(':selected').val()==1){//Filtrations
										dragSelectedLeft=[338,397,457];									
										if(dragObj.id==dragSelected[p]){
											$('#testtubeDrag'+p).animate({left:bgLeft+dragSelectedLeft[p]+'px',top:bgTop+testtubeTop[1]+'px'});
											$('#tubeWithSolution'+p).animate({left:bgLeft+dragSelectedLeft[p]+'px',top:bgTop+testtubeTop[1]+'px'});
		
										}
									}else{
										dragSelectedLeft=[405,453,500];
										if(dragObj.id==dragSelected[p]){
											$('#testtubeDrag'+p).animate({left:bgLeft+dragSelectedLeft[p]+'px',top:bgTop+testtubeTop[3]+'px'});
											$('#tubeWithSolution'+p).animate({left:bgLeft+dragSelectedLeft[p]+'px',top:bgTop+testtubeTop[3]+'px'});		
										}
									}
								 }
								 $("#funnelDiv").css({display:displayArray[0]});
								 $("#funnelDiv").css({cursor:'pointer'});							
							},500);						
						}else{	
							$("#dragBlockDiv,#inference").css({display:displayArray[0]});
							this.style.left=bgLeft+87+"px";							
							this.style.top=bgTop+133+"px";
							for(var m=0;m<dragSelected.length;m++){
								if(dragObj.id==dragSelected[m]){
									$('#tubeWithSolution'+m).css({top:this.offsetTop,left:this.offsetLeft});
								}
							}
						}						
					 }else{						 	
						resetDargPosition();
					 }
				}						 
			});
		}
		function resetDargPosition(){
			 for(var i=0;i<dragSelected.length;i++){
				if($("#property").find(':selected').val()==1){//Filtrations
					dragSelectedLeft=[338,397,457];
					dragObj.style.top=bgTop+testtubeTop[1]+"px";
					if(dragObj.id==dragSelected[i]){
						dragObj.style.left=bgLeft+dragSelectedLeft[i]+"px";
					}
				}else{
					$("#dragBlockDiv,#inference").css({display:displayArray[1]});
					dragSelectedLeft=[405,453,500];
					dragObj.style.top=bgTop+testtubeTop[3]+"px";
					if(dragObj.id==dragSelected[i]){
						dragObj.style.left=bgLeft+dragSelectedLeft[i]+"px";
					}
				}
			 }
			for(var k=0;k<dragSelected.length;k++){
				if(dragObj.id==dragSelected[k]){
					$('#tubeWithSolution'+k).css({top:dragObj.offsetTop,left:dragObj.offsetLeft});
				}
			}
		}
		//*--Function to click funnel---	
		$('#funnelDiv').click(function() {
			$("#zoompaper2,#powder,#inference").css({display:displayArray[0]});
			 $(".testtubeDrag").draggable({disabled:false});
		 });
		$( ".testtubeDrag" )
		 .mouseover(function() {
			$("#tooltip").css({left:this.offsetLeft-20+'px',top:this.offsetTop-40+'px'});			 
			for(var i=0;i<dragSelected.length;i++){
				if(this.id==dragSelected[i]){
					solnOver=usedSolns[i];
				}
			}
			$("#tooltip").html(solnOver);
			$("#tooltip").css({display:displayArray[0]});			 
		 })
		 .mouseout(function() {
			$("#tooltip").css({display:displayArray[1]});
		 });
		 //*--Function to start rotation---	
		function rotation(rotateId,degree){
			rotateId.style.webkitTransformOrigin='50% 50%';
			rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
			rotateId.style.MozTransformOrigin='50% 50%';
			rotateId.style.MozTransform ='rotate('+ degree +'deg)';
		}
		// Function to clicking stop watch "START/STOP" buttton 
		$("#startTxt").click(function() { 
			if(stopFlag==false){
				if(m==20){
					stop();		
				}
				start();
				startClicked();	
			}
		 });
		// Function to change start/stop button label 
		function startClicked(){	
			var checked=$("#startTxt").html();
			if(checked==startArr[0]){
				$("#startTxt").html(startArr[1]);
			}
			else{
				pause();
				$("#startTxt").html(startArr[0]);
			}
		}
		function commonChange(){
			$("#solnStable").css({display:displayArray[1]});
			$(".soln").css({display:displayArray[0]});
			$("#power").css('z-index','0');
			if(iconSelect==iconSelected[1]){			
				if(propertyValue==2){					
					$("#solnStable").css({display:displayArray[0]});
					$(".soln").css({display:displayArray[1]});
				}
				
			}else{			
				if(iconSelect==iconSelected[2]){
					$("#power").css('z-index','999');
					$("#tubeWithSolution2,#testtubeDrag2").css({display:displayArray[1]});
				}else{
					$("#tubeWithSolution2,#testtubeDrag2").css({display:displayArray[0]});
				}
			}
		}
		//*--Function to reset all events ---
		function resetEvent(){
			$("#startTxt").html(startArr[0]);
			$("#inference,#zoompaper2,#powder,#funnelDiv,#filteredTubeSolnDiv,#dragBlockDiv").css({display:displayArray[1]});
			$("#filterBlock0,#filterBlock1,#filterBlock2").css({display:displayArray[1]});
			count=0,topCountImg=0,topCount=106,solnDivHeight=70;
			stopFlag=false;
			$('#solnDarkBrown,#solnWhite,#solnBrown').css({top:bgTop+topCount+'px',height:solnDivHeight+'px'});
			$('#solnDarkBrownImg,#solnWhiteImg,#solnBrownImg').css({top:bgTop+topCountImg+'px'});
			stop();
			clearIntervalFn();
			$('#handDrag').css({top:bgTop+0+'px',left:bgLeft+295+'px'});
			$('#handWithPaper').css({top:bgTop+54+'px',left:bgLeft+395+'px'});
			$("#solnA1,#solnB1,#solnC1").css({opacity:1});
			$('#filteredTubeSolnDiv,#filteredTubeSoln,#testtubeDrag0,#testtubeDrag1,#testtubeDrag2').stop(true);
			$('#tubeWithSolution0,#tubeWithSolution1,#tubeWithSolution2').stop(true);			
			$("#funnelDiv").css({cursor:'default'});
			$('#filteredTubeSolnDiv').css({height:'5px',top:bgTop+230+'px'});
			$('#filteredTubeSoln').csss({top:bgTop-47+'px'});
			trip.stop();
		}
		//*--Function for adding label for all controls---	
		function addLabel(){
			$('#propertyText').html(controlLabel[0]);
			$('#solnText').html(controlLabel[1])
			$('#reset').attr('value',controlLabel[2]);	
			$('#truecntrl').html(controlLabel[3]);
			$('#suscntrl').html(controlLabel[4]);
			$('#colloidcntrl').html(controlLabel[5]);
			$('#allsolnLabel').html(selectedSolnLabel[0]);
			$('#min').html(timeLabelArray[0]);
			$('#sec').html(timeLabelArray[1]);
			$('#msec').html(timeLabelArray[2]);
			$('#startTxt').html(startArr[0]);
		}
		//*--Function to add values into the drop down---					   
		function addintoDropDown(getId,valueSet){		
			var selected = getId;
			$.each(valueSet, function(val, text) {
				selected.append(
					$('<option></option>').val(val).html(text)
				);
			});				
		}	
		//*--Function to clear all setIntervals ---
		function clearIntervalFn(){			
			clearTimeout(timer1);
			clearTimeout(timer2);
		}
		//*--Function to click reset button to reset all events---
		$("#reset").click(function(){
		   window.location.reload();	   
		});
	});	
};	
