var flaming;
var degree4=0;
var deg=720;
var Int;
var flag=false;
var experimentID=0;
var inferenceMsg;
var helpFlag=0;
var helparray_BiuretTest;
var helparray_XanthoproteicTest;
var helparray_NinhydrinTest;
var helparray_MillonTest;
var timeOutFunction;
var stopDarg=1;
var dropFlag=true;
var millonFlag=true;
var gt=$;
window.onload = function(){
	
	$(document).ready(function(){
	showBurnerSet();//showing the burner set while document get ready- for the Biuret test.
	var exprmntName=[gt.gettext("Biuret test"),gt.gettext("Xanthoproteic test"),gt.gettext("Ninhydrin test"),gt.gettext("Millon's test")];
	var solutionText=gt.gettext("Solution");
	var reagentText=gt.gettext("Reagent");
	var acidText=gt.gettext("Acid");
	$("#eggAlbuminLabelText").html(gt.gettext("Egg albumin"));
	$("#gelatinDisnLabelText").html(gt.gettext(" Gelatin <br/>dispersion"));
	$("#frstStickerTextOne").html(gt.gettext("NaOH"));
	$("#frstStickerTextTwo").html(solutionText);
	$("#scndStickerTextOne").html(gt.gettext("1% CuSO<sub>4</sub>"))
	$("#scndStickerTextTwo").html(solutionText)
	$("#resetBtn").val(gt.gettext("Reset"));
	document.getElementById("expName").innerHTML=gt.gettext("Qualitative Analysis of Proteins");
	$("#clockTimeText").html(gt.gettext("5 Minutes"));
	$("#selectTest").html(gt.gettext("Select the test:"));
	biuretTestInfrnc=gt.gettext("In an alkaline solution, the copper (II) ion forms a violet coloured coordination<br/>  complex with the peptide bond present in the protein.<br/> This complex is called biuret.");
	
	xanthoproteicTestInfrnc=gt.gettext("The yellow precipitate is due to xanthoproteic acid.  It is <br />  formed by the nitration of certain amino acids, such as tyrosine and<br />  tryptophan, present in the protein.");
	
	ninhydrinTestInfrnc=gt.gettext("This test is mainly used for the detection of amino acids and proteins with <br/>free &oline;NH<sub>2</sub> group. When such an &oline;NH<sub>2</sub> group reacts with <br/>ninhydrin, an intense blue coloured imino derivative is formed.");
	
	millonsTestInfrncOne=gt.gettext("A white precipitate is formed.");
	
	millonsTestInfrncTwo=gt.gettext("In Millon's test, the phenol group of tyrosine (amino acid) is first nitrated<br/> by nitric acid in the test solution.The nitrated tyrosine then complexes <br/>mercury(I) and mercury(II) ions in the solution to form a red precipitate.");
	
	millonsTestInfrncThree=gt.gettext("No characteristic changes.");
	
	var infMsgArray=[biuretTestInfrnc,xanthoproteicTestInfrnc,ninhydrinTestInfrnc,millonsTestInfrncOne,millonsTestInfrncTwo,millonsTestInfrncThree];

	helparray_BiuretTest=[gt.gettext("Drag the dropper to the test tubes A and B<br/> respectively to drop NaOH solution."),gt.gettext("Drag the dropper to the test tubes A and B<br/> respectively to drop 1% copper sulphate solution."),gt.gettext("Click on the knob of the<br/>  burner to turn it on."),gt.gettext("Drag the test tube A to<br/> the burner to heat it."),gt.gettext("Drag the test tube B to<br/> the burner to heat it.")];
	
	helparray_XanthoproteicTest=[gt.gettext("Drag the dropper to the test tubes A and B<br/> respectively to drop Conc.Nitric acid."),gt.gettext("Click on the knob of the<br/>  burner to turn it on."),gt.gettext("Drag the test tube A to<br/> the burner to heat it."),gt.gettext("Drag the test tube B to<br/> the burner to heat it.")];
	
	helparray_NinhydrinTest=[gt.gettext("Drag the dropper to the test tubes A and B<br/> respectively to drop ninhydrin solution."),gt.gettext("Click on the knob of the<br/> burner to turn it on."),gt.gettext("Drag the test tube A to<br/> the burner to heat it."),gt.gettext("Drag the test tube B to<br/> the burner to heat it.")];
	
	helparray_MillonTest=[gt.gettext("Drag the dropper to the test tubes A and B<br/> respectively to drop Millon's reagent."),gt.gettext("Click on the knob of <br/>the burner to turn it on."),gt.gettext("Drag the test tube A to<br/> the burner to heat it."),gt.gettext("Drag the test tube B to<br/> the burner to heat it.")];
	
	testLables=[gt.gettext("NaOH"),gt.gettext("Conc. Nitric"),gt.gettext("Ninhydrin"),gt.gettext("Millon's")];
	
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	 
	 //Function for flame.
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
	
	//Function for switch on the burner. 
	function burnerOn(){
		$("#burnerSwitch").css({"left":"87px"});// Changing the left position of switch image container.(Switch On).
		$("#burnerSwitch").hide();
		$("#burnerSwitchON").show();
		flaming = setInterval(flames, 1);	//calling flame function
		$('.flame1').show();
		$("#flame").show();
	}
	
	//Function for switch off the burner.
	function burnerOff(){
		$("#burnerSwitch").css({"left":"70px"});// Changing the left position of switch image container.(Switch Off).
			$("#burnerSwitch").show();
		$("#burnerSwitchON").hide();
		clearInterval(flaming);								
		$("#flame").hide();
		$( "#burnerSwitch" ).css({"cursor":"default"});
	
	}
	//Switch on the burner using the burner switch click.
	 function afterBurnerOn(){
		$( "#burnerSwitch" ).unbind("click");
		burnerOn();//calling the burnerOn function.
		dragThis($("#testTubeOne"));//adding the drag functionality into the test tube while switch on the burner.
		dragThis($("#testTubeTwo"));
		$("#testTubeTwo").draggable({revert:true});
		$("#testTubeOne").draggable({revert:true});
		$("#testTubeTwo").draggable({disabled:false});
		$("#testTubeOne").draggable({disabled:false});
		
		}
		
		//drop the test tube on the burner.
		$("#dropAreaBrnr").droppable({ //Drop Function
			accept: "#testTubeOne",
			drop: function( event, ui ) {
			//in the case of first test tube.
			dropFlag=true;
			$("#testTubeOne").css({"left":"-60px","top":"-3px"});//placing the drag object to the correct drop area.
			$("#testTubeOne").draggable({revert:false});
			$("#testTubeTwo").draggable({revert:false});
			$("#testTubeOne").draggable({disabled:true});
			$("#testTubeTwo").draggable({disabled:true});
			testTubeShakingFn($("#testTubeOne"));//calling the testTube shaking function.
			stopDragTesttube();
			stopDarg++;
			timeOutFunction=setTimeout(function(){
				moveToInitial($("#testTubeOne"),51,128);
				$("#testTubeTwo").draggable({revert:true});
				$("#testTubeTwo").draggable({disabled:false});
				if(experimentID==1){
				inferenceMsg=infMsgArray[1];
				stopDragTesttube();
				stopDarg++;
				}
				else if(experimentID==2){
					inferenceMsg=infMsgArray[2];
					stopDragTesttube();
					stopDarg++;
				}
				else if(experimentID==3){
					inferenceMsg=infMsgArray[4];
					stopDragTesttube();
					stopDarg++;
				}
				else if(experimentID==0){
					inferenceMsg=infMsgArray[0];
					stopDragTesttube();
					stopDarg++;
				}
			},9000);
		}
		});
		//Drop Function.
		$("#dropAreaBrnrTwo").droppable({ 
			accept: "#testTubeTwo",
			drop: function( event, ui ) {
			testTubeShakingFn($("#testTubeTwo"));
			dropFlag=false;
			//In the case of first test tube
			$("#testTubeTwo").css({"left":"-60px","top":"-3px"});//placing the drag object to the correct drop area.
			$("#testTubeTwo").css({"left":"-60px","top":"-3px"});
			$("#testTubeTwo").draggable({revert:false});
			$("#testTubeOne").draggable({revert:false});
			$("#testTubeTwo").draggable({disabled:true});
			$("#testTubeOne").draggable({disabled:true});
			timeOutFunction=setTimeout(function(){
			moveToInitial($("#testTubeTwo"),138,128);
			$("#testTubeOne").draggable({revert:true});
			$("#testTubeOne").draggable({disabled:false});
			//showInference();
			if(experimentID==1){
			changeColor($("#testTubeTwoSolution"),"f3e509");//Xanthoproteic test result.
			inferenceMsg=infMsgArray[1];
			stopDragTesttube();
			stopDarg++;
			}
			else if(experimentID==2){
			changeColor($("#testTubeTwoSolution"),"090854");//Ninhydrin test test result.
			inferenceMsg=infMsgArray[2];
			stopDragTesttube();
			stopDarg++;
			}
			else if(experimentID==3){
			inferenceMsg=infMsgArray[5];
			stopDragTesttube();
			stopDarg++;
			}
			else if(experimentID==0){
			stopDragTesttube();
			stopDarg++;
			}
			},9000);
		}
		});
		
	//Function for displaying the burner set.
	function showBurnerSet(){
		$("#burnerSet").show();
		burnerOff();
		$( "#burnerSwitch" ).unbind("click");
		}
	//Function for hide burner set.
	function hideBurnerSet(){
		$("#burnerSet").hide();
		burnerOff();
	}
	//Function for changing the bottle image.
	function changeBottle(){
		$("#firstBottle").hide();
		$("#firstBottleBrwn").show();
	}
	//Function for Restring the bottle image.
	function resetBottle(){
		$("#firstBottle").show();
		$("#firstBottleBrwn").hide();
	}
	//Function for clock rotate...
	function clockRotate(){
		if(degree4<=deg){
			degree4++;
			$("#needleImg").css({'-webkit-transform-origin' :'0% 00%'});
			$("#needleImg").css({'-webkit-transform' : 'rotate('+degree4+'deg)'});
			$("#needleImg").css({'transform-origin' : '3px 26px'});
			$("#needleImg").css({'transform' : 'rotate('+ degree4 +'deg)'});
			//Start the clock.
		}
		else
		{	
		//Stop clock.
			clearInterval(Int);
			$("#start").prop("disabled", true);
			
			
		}
	}
//function for text tube shaking.
var angle=0;
var turningRight=true;
var clrTimeOutTube;
function testTubeShaking(ID){
	$(ID).css({
		'-ms-transform': 'rotate('+angle+'deg)',
		'-webkit-transform': 'rotate('+angle+'deg)',
		'transform': 'rotate('+angle+'deg)',
	});
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
	clrTimeOutTube=setTimeout(function(){testTubeShaking(ID)},10);
}

	function testTubeShakingFn(ID){
			testTubeShaking(ID);
			if(experimentID==0){
				showClock();
				}
		setTimeout(function(){
		clearTimeout(clrTimeOutTube);
		ID.css({
					'-ms-transform': 'rotate(0deg)',
					'-webkit-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
				//Color changes
			if(experimentID==0){// Result - Biuret test.
				//Changing the color of the solution in the test tube.
				if(dropFlag){
					changeColor($("#testTubeOneSolution"),"363973"); 
					$("#testTubeOnePrcptt").hide();
				}
				else{
					changeColor($("#testTubeTwoSolution"),"363973");
					$("#testTubeTwoPrcptt").hide();
				}
				
				}
			else if(experimentID==1){
					if(dropFlag){
						changeColor($("#testTubeOneSolution"),"f3e509");//Xanthoproteic test result.
					}
					else{
						changeColor($("#testTubeTwoSolution"),"f3e509");//Xanthoproteic test result.
					}
				}
			else if(experimentID==2){
					if(dropFlag){
						changeColor($("#testTubeOneSolution"),"090854");//Ninhydrin test  result.
					}
					else{
					changeColor($("#testTubeTwoSolution"),"090854");//Ninhydrin test  result.
					}
				
				}
			else if(experimentID==3){
				if(dropFlag){
				changeColor($("#testTubeOneSolution"),"5e2e31");// Millon's test result.
				}
				else{
				changeColor($("#testTubeTwoSolution"),"FFE9B0");// Millon's test result.
				}
				}
	},8000);
}


	//Clock functionality - Show;
	function showClock(){
		clearInterval(Int);
		Int=setInterval(clockRotate,9);	
		$("#clockContainer").show();
		degree4=0;
		deg=720;
	}
	//Clock functionality - hide;
	function hideClock(){
		clearInterval(Int);
		$("#clockContainer").hide();
	}
	//function for test tube solution change- (Normal mode.)
	function testtubeReset(){
		$("#testTubeOneSolution").css({"top":"124px","height":"35px","background-color":"#E7DDB8"});
		$("#testTubeTwoSolution").css({"top":"124px","height":"35px","background-color":"#FFE9B0"});
		$("#testTubeOne").css({"left":"51px","top":"128px"});
		$("#testTubeTwo").css({"left":"138px","top":"128px"});
	}
	//function for color changing the test tube solution.
	function changeColor(solutionName,color){
		solutionName.animate({"background-color":"#"+color},500,function(){
		//alert(1);
		showInference();
		});
	}
	//function for displaying inference.
	function showInference(){
		$("#inference").show();
	}
	//function for hiding inference
	function hideInference(){
	$("#inference").hide();
	}
	//Function for changing the bottle label
	function changeLabel(textOne,textTwo){
	
		$("#frstStickerTextOne").html(textOne);
		$("#frstStickerTextTwo").html(textTwo);
	}
	//Function for drops.
	function drop(firstDrop,secondDrop,thirdDrop){
		$("#dropperSolnOne").animate({"margin-top":"-1px"});
		firstDrop.css({"visibility":"visible"});
		firstDrop.animate({"top":"200px"},100,function(){
		firstDrop.css({"visibility":"hidden","top":"119px"});
		secondDrop.css({"visibility":"visible"});
		secondDrop.animate({"top":"200px"},100,function(){
		secondDrop.css({"visibility":"hidden","top":"119px"});
		thirdDrop.css({"visibility":"visible"});
		thirdDrop.animate({"top":"200px"},100,function(){
		thirdDrop.css({"visibility":"hidden","top":"119px"});
		moveToInitial($("#dropperOne"),279,124);
		moveToInitial($("#dropperTwo"),375,124);
		
		if(experimentID==3 && millonFlag ){
			changeColor($("#testTubeOneSolution"),"FFFFFF");//Millon's test  result in the first test tube.
			inferenceMsg=infMsgArray[3];
			millonFlag=false;
		}
		else{
		 hideInference();
		}
	});});
	});
	}
	//function for changing the drop image.
	function changeDropImage(dropImgOne,dropImgTwo,dropImgThree,imageName){
		dropImgOne.attr('src',simPath+"images/"+imageName+".png");
		dropImgTwo.attr('src',simPath+"images/"+imageName+".png");
		dropImgThree.attr('src',simPath+"images/"+imageName+".png");
	}
	//Function for drag.
	function dragThis(dragObjct){
		dragObjct.css({"cursor":"pointer"});
		dragObjct.draggable({ revert:true,containment: "#experimentCanvas",revertDuration:0,
			drag: function(){
			hideInference();//hiding the inference div while dragging the dropper.
			//hide and show the drop area of corresponding test tube.
			if(dragObjct.attr('id')=="testTubeOne"){
				$("#dropAreaBrnr").show();
				$("#dropAreaBrnrTwo").hide();
			}
			else if(dragObjct.attr('id')=="testTubeTwo"){
				$("#dropAreaBrnr").hide();
				$("#dropAreaBrnrTwo").show();
			}
		}
		});
	}
	//function for move to the initial position.
	function moveToInitial(dragObjct,leftValue,topValue){
		dragObjct.css({"left":leftValue+"px","top":topValue+"px"});

	}
	//function for increasing the solution level
	function increaseLevel(solution){
		var solutionHeight=solution.height();//current solution height.
		var position = solution.position();//Current solution position.
		solution.animate({"top":position.top-5,"height":solutionHeight+5},100,function(){
		//After first drop.
			dragThis($("#dropperOne"));
			$("#dropperOne").draggable({revert:true});
			$("#dropperOne").draggable({disabled:false});
			$("#dropAreaOne").css({"left":"244px"}); //changing the position of drop area of first dropper.

			$("#dropAreaOne").droppable({ //Drop Function
				accept: "#dropperOne",
				drop: function( event, ui ) {
					$("#dropperSolnOne").animate({"margin-top":"31px"});
					$("#dropperOne").css({"left":"141px","top":"7px"});//placing the drag object to the correct drop area.
					drop($("#DropsImgOne_two"),$("#DropsImgTwo_two"),$("#DropsImgThree_two"));
					stopDrag();
					$("#testTubeTwoSolution").animate({"top":position.top-5,"height":solutionHeight+5},100);
					changeDropImage($("#DropsImgOne"),$("#DropsImgTwo"),$("#DropsImgThree"),"dropTwo");
					$("#burnerSwitch" ).css({"cursor":"pointer"});
					$("#burnerSwitch" ).bind("click",function(){//bind the burner on function ,
					if(experimentID>=1){
					afterBurnerOn();
					}
					});
				}
			});
			if(flag){
				//adding the drop functionality into the second dropper.
				$("#dropperTwo").draggable({revert:true});
				$("#dropperTwo").draggable({disabled:false});
				$("#dropperSolnTwo").animate({"margin-top":"-1px"});

				$("#dropAreaOne").droppable({
					accept: "#dropperTwo",
					drop: function( event, ui ) {

			$("#testTubeTwoPrcptt").show();
			$("#burnerSwitch").css({"cursor":"pointer"});
			$("#dropperTwo,#dropperOne").css({"cursor":"default"});
						$("#dropperTwo").draggable({revert:false});
						$("#dropperTwo").draggable({disabled:true});
						$("#dropperTwo").css({"left":"141px","top":"7px"});//placing the drag object to the correct drop area.
						drop($("#DropsImgOne_two"),$("#DropsImgTwo_two"),$("#DropsImgThree_two"));
						$("#dropperSolnTwo").animate({"margin-top":"31px"});
						increaseLevel($("#testTubeTwoSolution"));

						timeOutFunction=setTimeout(function(){
							$("#dropperOne").draggable({disabled:true});
							$("#dropperTwo").draggable({disabled:true});
							$("#dropAreaOne").css({"left":"156px"});
							//============== last drop second....
						$("#burnerSwitch" ).bind("click",function(){
						if(experimentID==0){
							afterBurnerOn();
						}
						});
							
						},1000);
					}
				});
			
			}
			
		});
	
	}
	//function for stopping the drag functionality of the object. 
	function stopDrag(){
		$("#dropperTwo").draggable({disabled:false});
		$("#dropperOne").draggable({revert:false});
		$("#dropperOne").draggable({disabled:true});
		dragThis($("#dropperTwo"));
		$("#dropAreaOne").css({"left":"156px"});
		$("#dropAreaOne").droppable({ 
			accept: "#dropperTwo",
				drop: function( event, ui ) {
				changeDropImage($("#DropsImgOne_two"),$("#DropsImgTwo_two"),$("#DropsImgThree_two"),"dropTwo");
				$("#dropperTwo").draggable({revert:false});
				$("#dropperTwo").draggable({disabled:true});
				$("#dropperTwo").css({"left":"55px","top":"7px"});//placing the drag object to the correct drop area.
				drop($("#DropsImgOne"),$("#DropsImgTwo"),$("#DropsImgThree"));
				$("#dropperSolnTwo").animate({"margin-top":"31px"});
				increaseLevel($("#testTubeOneSolution"));

				flag=true;
					$("#testTubeOnePrcptt").show();
			
		}
		});
	}
	//function for reset all.
	function resetAll(){
		stopDarg=1;
		clearTimeout(clrTimeOutTube);
		$("#testTubeOneSolution,#testTubeOneSolution,#dropperSolnOne,#dropperSolnTwo").stop(true);
		$("#testTubeOne,#testTubeTwo").css({
					'-ms-transform': 'rotate(0deg)',
					'-webkit-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)',
				});
				clearInterval(flaming);	
				clearInterval(Int);
		$('#changeOne').attr('id','dropAreaBrnr');
		$('#changeTwo').attr('id','dropAreaBrnrTwo');
		$("#testTubeOne,#testTubeTwo").css({"cursor":"default"})
		$("#testTubeTwo,#dropAreaBrnr").show();
		$("#dropAreaOne").css({"left":"156px"});
		changeDropImage($("#DropsImgOne_two"),$("#DropsImgTwo_two"),$("#DropsImgThree_two"),"drop");
		changeDropImage($("#DropsImgOne"),$("#DropsImgTwo"),$("#DropsImgThree"),"drop");
		testtubeReset();
		$("#scondBottleConatiner,#dropperTwo").show();
		$("#firstBottleSolution").css({"background-color":"#FFFFFF"});
		$("#dropperOne").css({"left":"279px","top":"124px"});
		$("#dropperSolnOne").css({"margin-top":"-1px"});
		$("#dropperTwo").css({"left":"375px","top":"124px"});
		$("#dropperSolnTwo").css({"margin-top":"-1px"});
		hideInference();
		hideClock();
		hideBurnerSet();
		millonFlag=true;
			$("#testTubeOnePrcptt").hide();
			$("#testTubeTwoPrcptt").hide();
	}
		//Function for select test: drop-down.
	function selestTest(getid,array_set){
			$.each(array_set, function(val, text) {
			getid.append(
			$('<option></option>').val(val).html(text));
			});
			}
	//calling the select test function.
	selestTest($("#selectTestDrpdwn"),exprmntName);
	//Function for Biuret test
	function biuretTest(){
		dragThis($("#dropperOne"));
		$("#dropAreaOne").droppable({ //Drop Function
		accept: "#dropperOne",
			drop: function( event, ui ) {
			$("#dropperOne").draggable({revert:false});
			$("#dropperOne").draggable({disabled:true});
			$("#dropperOne").css({"left":"55px","top":"7px"});//placing the drag object to the correct drop area.
			$("#dropperSolnOne").animate({"margin-top":"31px"});
			drop($("#DropsImgOne"),$("#DropsImgTwo"),$("#DropsImgThree"));
			increaseLevel($("#testTubeOneSolution"));

		}
		});
	}
		biuretTest();
	//Function for changing the drop-down menu. Select experiment
	$("#selectTestDrpdwn").change(function(){
		experimentID=$("#selectTestDrpdwn").find(':selected').val();
		$("#dropperOne").draggable({disabled:false});
		resetAll();
		helpFlag=experimentID;
		clearTimeout(timeOutFunction);
		changeLabel(testLables[experimentID],solutionText);
		//label text arranging according to the experiment. 
		if(experimentID==0){// Biuret test
			biuretTest();
			flag=false;
			$("#frstStickerTextOne").css({"left":"33px","font-size":"1.4em"});
			
			resetBottle()//replace the white bottle.
			$("#frstStickerTextTwo").css({"left":"30px"});
			
			showBurnerSet();
			$("#testTubeOnePrcptt").hide();
			$("#testTubeTwoPrcptt").hide();
			
		}
		else {
			biuretTest();
			flag=false;
			$("#scondBottleConatiner,#dropperTwo").hide();
			showBurnerSet();
		}
		$("#testTubeTwo").draggable({revert:false});
		$("#testTubeOne").draggable({revert:false});
		$("#testTubeTwo").draggable({disabled:true});
		$("#testTubeOne").draggable({disabled:true});
		if(experimentID==2){//Ninhydrin test
			changeBottle();
			$("#frstStickerTextOne").css({"left":"25px","font-size":"1.4em"});
			  
			
			$("#frstStickerTextTwo").css({"left":"32px"});
			
		}
		
		
		if(experimentID==1){ // Xanthoproteic test
			changeLabel(testLables[experimentID],acidText);
			$("#frstStickerTextOne").css({"left":"21px","font-size":"1.3em"});
			
			$("#frstStickerTextTwo").css({"left":"40px"});
			
			resetBottle()//replace the white bottle.
		}
		if(experimentID==3){//Millon's test
			changeLabel(testLables[experimentID],reagentText);
			$("#frstStickerTextOne").css({"left":"30px","font-size":"1.4em"});
			
			$("#frstStickerTextTwo").css({"left":"29px"});
			
			// resetBottle()//replace the white bottle.
			changeBottle();
		}
		});
		//function for stop test tube drag after finish the experiment.
		function stopDragTesttube(){
			if(experimentID==3 && stopDarg==3){
				$("#testTubeTwo").draggable({disabled:true});
				$("#testTubeOne").draggable({disabled:true});
				burnerOff();
				showInference();
			}
			else if(stopDarg==3 && experimentID>=1 && experimentID<=2){
				$("#testTubeTwo").draggable({disabled:true});
				$("#testTubeOne").draggable({disabled:true});
				burnerOff();
			}
			else if(stopDarg==3 && experimentID==0 ){
				$("#testTubeTwo").draggable({disabled:true});
				$("#testTubeOne").draggable({disabled:true});
				burnerOff();
			}
		}
	});
};