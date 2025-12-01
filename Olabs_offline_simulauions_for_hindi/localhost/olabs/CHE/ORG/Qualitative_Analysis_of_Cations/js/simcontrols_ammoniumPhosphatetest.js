// JavaScript Document


var sampleId, DragFlag;
function AmmoniumPhosphateTest(){
	 resetammonium();
	$("#saltsolution").show();
	$("#Ammonium_Phosphate_test").show();
	$("#labelTXT__NH42").html(groupThreelabel[6]);
	//adding labels 
	$("#BottleSolutionOne_textNH4").html(groupThreelabel[0]);
	$("#BottleSolutionOne_labelNH4").html(groupThreelabel[1]);
	$("#BottleSolutionOne_labelSpanNH4").html(groupThreelabel[9]);
	$("#BottleSolutionTwo_textNH4").html(groupThreelabel[8]);
	$("#BottleSolutionTwo_labelNH4").html(groupThreelabel[1]);
	$("#BottleSolutionTwo_labelSpanNH4").html(groupThreelabel[2]);
	$("#labelTXT__NH4").html(groupThreelabel[6]);
	$("#Glassrod_textNH4").html(groupThreelabel[7]);
	$("#labelTXT1__NH4").html(groupThreelabel[10]);
	
	dragDroppergroupTest3('small_SaltDIV_AmmoniumTest',267,259,0,200,90,280);
	dragDroppergroupTest3('Nh4dropper_PhosphateTest',30,429,0,125,112,250);
	dragDroppergroupTest3('DropperTwo_NH4Test',30,507,0,125,112,250);
	dragDroppergroupTest3('glassrod_NH4',222,474,0,160,130,320);
	//drag Function
	function dragDroppergroupTest3(sampleId,sampleTop,sampleLeft,MinTops,MaxTops,MinLefts,MaxLefts){		
		$('#'+sampleId).draggable({
			start:function(event, ui) {
				$('#'+sampleId).css({zIndex:2});
			},
			stop : function(event, ui) {	
				if(this.offsetTop>=mainTop+MinTops &&this.offsetTop<=mainTop+MaxTops && this.offsetLeft>=mainLeft+MinLefts &&this.offsetLeft<=mainLeft+MaxLefts ){
					$('#'+sampleId).draggable({ disabled: true });
					$('#'+sampleId).css({'cursor':'default'});
					if(sampleId=="small_SaltDIV_AmmoniumTest"){
						DragFlag=0;
						$('#'+sampleId).css({top:mainTop+110+'px',left:mainLeft+143+'px','z-index':'1'});										
						$('#'+sampleId).animate({top:mainTop+227+'px'},1000,function(){
							$("#saltsolution").animate({"top":mainTop+211+"px","height": "28px"},100);
							$('#'+sampleId).animate({'opacity':0.5},1000);
							$("#labeldiv_NH4").css({"display":"none"});							
							$('#Nh4dropper_PhosphateTest').draggable({ disabled: false });
							$('#Nh4dropper_PhosphateTest').css({'cursor':'pointer'});
						});	
					}
					else if(sampleId=="Nh4dropper_PhosphateTest"){	
						DragFlag=1;	
						$('#'+sampleId).css({top:mainTop+35+'px',left:mainLeft+174+'px'});	
						$("#Dropper_waterWrprNH4").css({"display":"block"});
						$("#DropOneNH4").css({"display":"block"});				
						$("#Nh4dropperImg_PhosphateTest").animate({"top":mainTop+65+"px","height": "29px"},50);
						$("#DropOneNH4").animate({"top":mainTop+90+"px"},800,function(){
							//Increasing the level of solution in the test tube-Stage one.			
							$("#saltsolution").animate({"top":mainTop+209+"px","height": "29px"},100);
							$("#DropOneNH4").fadeOut();
							//decresing the sol level in dropper
							$("#Nh4dropperImg_PhosphateTest").animate({"top":mainTop+91+"px","height": "0px"},50);
							$("#DropTwoNH4").css({"display":"block"});
							$("#DropTwoNH4").animate({"top":mainTop+90+"px"},800,function(){
								$("#saltsolution").animate({"top":mainTop+207+"px","height": "31px"},50);
								//Increasing the level of solution in the test tube-Stage two.
								$("#DropTwoNH4").fadeOut();
								$('#'+sampleId).css({zIndex:0});
								$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});
								$('#DropperTwo_NH4Test').draggable({ disabled: false });
								$('#DropperTwo_NH4Test').css({'cursor':'pointer'});
							});
						});	
					}
					else if(sampleId=="DropperTwo_NH4Test"){	
						DragFlag=2;	
						$('#'+sampleId).css({top:mainTop+35+'px',left:mainLeft+174+'px'});	
						$("#Dropper_waterWrprNH4").css({"display":"block"});
						$("#DropOneNH4,#DropTwoNH4").css({top:mainTop+0+'px',left:mainLeft+4+'px',height:"44px"});
						$("#DropOneNH4").css({"display":"block"});				
						$("#DroppersolImg_NH4").animate({"top":mainTop+65+"px","height": "29px"},50);
						$("#DropOneNH4").animate({"top":mainTop+90+"px"},800,function(){
							//Increasing the level of solution in the test tube-Stage one.			
							$("#saltsolution").animate({"top":mainTop+205+"px","height": "33px"},100);
							$("#DropOneNH4").fadeOut();
							//decresing the sol level in dropper
							$("#DroppersolImg_NH4").animate({"top":mainTop+91+"px","height": "0px"},50);
							$("#DropTwoNH4").css({"display":"block"});
							$("#DropTwoNH4").animate({"top":mainTop+90+"px"},800,function(){
								$("#saltsolution").animate({"top":mainTop+204+"px","height": "35px"},50);
								$("#small_SaltDIV_AmmoniumTest").fadeOut(1000);
								//Increasing the level of solution in the test tube-Stage two.
								$("#DropTwoNH4").fadeOut();
								$('#'+sampleId).css({zIndex:0});
								$('#'+sampleId).animate({'top':mainTop+sampleTop+'px','left':mainLeft+sampleLeft+'px'});
								$('#glassrod_NH4').draggable({ disabled: false });
								$('#glassrod_NH4').css({'cursor':'pointer'});
							});
						});	
					}
					else if(sampleId=="glassrod_NH4"){
						DragFlag=3;	
						$('#'+sampleId).css({'top':mainTop+42+'px','left':mainLeft+186+'px','z-index': 1});	
						$('#glassrod_NH4 img').css({'width':'4px','height':'126px'});
						$('#'+sampleId).animate({"top":"112px"},500,function(){
						$('#'+sampleId).animate({"top":"42px"},500,function(){
						$('#'+sampleId).animate({"top":"112px"},500,function(){
						$('#'+sampleId).animate({"top":"42px"},500,function(){
						$('#'+sampleId).animate({"top":"112px"},500,function(){
							if(sampleSalt[result]==sampleSalt[14]){
								$('#saltsolution').animate({'background-color':'#ffffff','opacity':'1'},500);
								}
						$('#'+sampleId).animate({"top":"42px"},500,function(){						
						$('#glassrod_NH4 img').css({width:'4px',height:'65px'});	
						$('#'+sampleId).animate({'top':mainTop+222+'px','left':mainLeft+474+'px','z-index': 0},500,function(){		
						if(sampleSalt[result]==sampleSalt[14]){
						//
						$("#Inference").show();
						inferenceMsg=NH4_Inference[0];
						}
						else{
						$("#Inference").show();
						inferenceMsg=noreactionInference;
						}
						});});});});
						});});});

					}						
				}
				else
				{

					$('#'+sampleId).css({zIndex:0});
					$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});	
				}
			}
		});	
	}
	//Function for resetting the whole group	
	function resetammonium(){
		//label texts
		$("#BottleSolutionOne_textNH4").css({top:mainTop+133+'px',left:mainLeft+424+'px'});
		$("#BottleSolutionTwo_textNH4").css({top:mainTop+133+'px',left:mainLeft+494+'px'});
		$("#BottleSolutionTwo_labelSpanNH4").css({left:mainLeft+403+'px'});
		$("#BottleSolutionTwo_labelNH4").css({left:mainLeft+481+'px'});
		$("#BottleSolutionOne_labelSpanNH4").css({left:mainLeft+483+'px'});
		$("#labelTXT__NH4").css({top:mainTop+305+'px'});
		//cursors 
		$('#small_SaltDIV_AmmoniumTest').draggable({ disabled: false });
		$('#small_SaltDIV_AmmoniumTest').css({'cursor':'pointer'});	
		$('#Nh4dropper_PhosphateTest').draggable({ disabled: true});
		$('#Nh4dropper_PhosphateTest').css({'cursor':'default'});
		$('#DropperTwo_NH4Test').draggable({ disabled: true});
		$('#DropperTwo_NH4Test').css({'cursor':'default'});
		$('#glassrod_NH4').draggable({ disabled: true });
		$('#glassrod_NH4').css({'cursor':'default'});
		//stopping animations
		$("#Nh4dropper_PhosphateTest,#saltsolution,#small_SaltDIV_AmmoniumTest").stop(true);
		$("#DropOneNH4,#DropTwoNH4,#Nh4dropperImg_PhosphateTest,#DroppersolImg_NH4,#glassrod_NH4").stop(true);
		//display none
		$("#labeldiv_NH4").css({"display":"block"});
		//$("#DropOneNH4").css({"display":"none"});
		
		//reset of positions 	
		$("#saltsolution").css({top:mainTop+214+'px',left:mainLeft+168+'px',height: "25px",'opacity':'0.7','background-color' : random_solution[result]});
		$("#small_SaltDIV_AmmoniumTest").css({top:mainTop+267+'px',left:mainLeft+259+'px','z-index':0,'opacity':1,'display':'block'});
		$("#DropOneNH4,#DropTwoNH4").css({top:mainTop+0+'px',left:mainLeft+4+'px',height:"44px",'display': 'none'});
		$("#Dropper_waterWrprNH4").css({"display":"none","top":mainTop+127+"px","left":mainLeft+174+'px'});
		$("#Nh4dropperImg_PhosphateTest,#DroppersolImg_NH4").css({top:mainTop+53+'px',height:"42px"});
		$('#glassrod_NH4').css({top:mainTop+222+'px',left:mainLeft+474+'px','z-index': 0});	
		$('#glassrod_NH4 img').css({width:'4px',height:'65px'});

	}
				
}
	