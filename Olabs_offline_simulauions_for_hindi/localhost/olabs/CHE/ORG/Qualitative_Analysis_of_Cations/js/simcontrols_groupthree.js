// JavaScript Document
var BrnrFlag_grp3;
var flaming_grp3;
var degree4=0;
var deg_grp3=360;
var timer;
var Int_grp3;
var sampleId, DragFlag;
var clockflag;
var rotCount9=0;
var flag9=true;
var degree9=-14;
var rotateEvt9;
var rotation_flags3;
var sceneFlag
var help_grp3Flag=0;
function groupThreeTest(){
	resetgroup3();
	groupTestIndex=groupIndex;
	$("#saltsolution").show();
	$("#groupThreeTestDIv").show();
	$("#saltsolution").css({top:mainTop+214+'px',left:mainLeft+168+'px'});
	$(".BottleSolutionOne_textgroup3").html(groupThreelabel[3]);
	$(".BottleSolutionOne_labelgroup3").html(groupThreelabel[4]);
	$(".BottleSolutionOne_labelSpangroup3").html(groupThreelabel[5]);
	$(".BottleSolutionTwo_textgroup3").html(groupThreelabel[0]);
	$(".BottleSolutionTwo_labelgroup3").html(groupThreelabel[1]);
	$(".BottleSolutionTwo_labelSpangroup3").html(groupThreelabel[2]);
	$(".labelTXT_groupThree").html(groupThreelabel[6]);	
	$("#labelTXT1__grp3").html(groupThreelabel[10]);	
	$("#nextBtnText_groupFourTest").html(GroupTwoTestText[1]);
	
	
	dragDroppergroupTest3(0,'hno3dropper_groupTest3',30,429,0,125,112,250);
	dragDroppergroupTest3(1,'small_SaltDIV_grp3',222,437,0,210,112,259);
	dragDroppergroupTest3(2,'holderdiv_group3',291,402,100,260,0,202);
	dragDroppergroupTest3(3,'holder_div2_grp3',122,38,74,210,50,225);
	dragDroppergroupTest3(5,'DropperTwo_groupTest3',30,507,-30,120,185,340);
	function dragDroppergroupTest3(Dragno,sampleId,sampleTop,sampleLeft,MinTops,MaxTops,MinLefts,MaxLefts){		
		$('#'+sampleId).draggable({
			start:function(event, ui) {
				$('#'+sampleId).css({zIndex:2});	
				if(sampleId=="holder_div2_grp3" && Dragno==4){
					$("#beakersoldiv_group3").css({"top":mainTop+29+"px","height": "53px"});
				}
			},
			stop : function(event, ui) {	
				if(this.offsetTop>=mainTop+MinTops &&this.offsetTop<=mainTop+MaxTops && this.offsetLeft>=mainLeft+MinLefts &&this.offsetLeft<=mainLeft+MaxLefts ){
					$('#'+sampleId).draggable({ disabled: true });
					$('#'+sampleId).css({'cursor':'default'});
					
					if(sampleId=="hno3dropper_groupTest3"){	
						DragFlag=0;	
						$('#'+sampleId).css({top:mainTop+35+'px',left:mainLeft+174+'px'});	
						$("#Dropper_waterWrprgrp3").css({"display":"block"});
						$("#DropOnegrp3").css({"display":"block"});	
									
						$("#hno3dropperImg_groupTest3").animate({"top":mainTop+65+"px","height": "29px"},50);
						$("#DropOnegrp3").animate({"top":mainTop+120+"px"},800,function(){
							
							$("#labeldiv_grp3").css({"display":"none"});
							//Increasing the level of solution in the test tube-Stage one.			
							$("#saltsolution").animate({"top":mainTop+211+"px","height": "28px"},100);
							$("#DropOnegrp3").fadeOut();
							//decresing the sol level in dropper
							$("#hno3dropperImg_groupTest3").animate({"top":mainTop+91+"px","height": "0px"},50);
							$("#DropTwogrp3").css({"display":"block"});
							$("#DropTwogrp3").animate({"top":mainTop+120+"px"},800,function(){
								$("#saltsolution").animate({"top":mainTop+209+"px","height": "30px"},50);
								//Increasing the level of solution in the test tube-Stage two.
								$("#DropTwogrp3").fadeOut();
								$('#'+sampleId).css({zIndex:0});
								$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});
								$('#BurnerSwtchon_group3').css({'cursor':'pointer'});
								BrnrFlag_grp3=0;
							});
						});	
					}
					else if(sampleId=="small_SaltDIV_grp3"){
						DragFlag=1;	
						$('#'+sampleId).css({top:mainTop+110+'px',left:mainLeft+143+'px','z-index':'1'});										
						$('#'+sampleId).animate({top:mainTop+227+'px','opacity':0.7},1000,function(){
							$('#BurnerSwtchon_group3').css({'cursor':'pointer'});
							BrnrFlag_grp3=0;
						});	
					}
					else if(sampleId=="holderdiv_group3"){
						help_grp3Flag=1;
						DragFlag=2;	
						
						$('#holder_div2_grp3').css({'display':'block'});
						$('#holderdiv_group3,#testTube_groupThreeTest,#saltsolution').css({'display':'none'});
					}
					else if(sampleId=="holder_div2_grp3" && Dragno==3){
						DragFlag=3;	;
						$("#beakersoldiv_group3").animate({"top":mainTop+19+"px","height": "62px"},100);
						$('#'+sampleId).css({top:mainTop+208+'px',left:mainLeft+175+'px'});
						$("#Clock_Container_grp3").css({"opacity":"1"});
						$('#burnerTwo_groupThreeTest').css({'z-index':'1'});
						Int_grp3=setInterval(clockRotate_grp3,11);	
					}
					else if(sampleId=="holder_div2_grp3" && Dragno==4){
						$('#'+sampleId).css({top:mainTop+82+'px',left:mainLeft+164+'px'});
						$('#DropperTwo_groupTest3').draggable({ disabled: false });
						$('#DropperTwo_groupTest3').css({ 'cursor': 'pointer' });								
					}
					else if(sampleId=="DropperTwo_groupTest3"){
						$('#'+sampleId).css({top:mainTop+6+'px',left:mainLeft+301+'px'});
						$("#Dropper_waterWrprgrp3").css({"display":"block","top":mainTop+60+"px","left":mainLeft+297+'px'});
						$("#DropOnegrp3 img,#DropTwogrp3 img").attr('src',simPath+'images/drop.png');
						$("#DropOnegrp3").css({"display":"block","top":mainTop+29+"px","left":mainLeft+8+'px'});
						$("#DroppersolImg_group3").animate({"top":mainTop+65+"px","height": "29px"},50);
						$("#DropOnegrp3").animate({"top":mainTop+120+"px"},800,function(){
							//Increasing the level of solution in the test tube-Stage one.	
							$("#saltsol2_grp3").animate({"top":mainTop+82+"px","height": "35px"},100);
							$("#DropOnegrp3").fadeOut();
							//decresing the sol level in dropper
							$("#DroppersolImg_group3").animate({"top":mainTop+91+"px","height": "0px"},50);
							$("#DropTwogrp3").css({"display":"block","top":mainTop+29+"px","left":mainLeft+8+'px' });
							$("#DropTwogrp3").animate({"top":mainTop+120+"px"},800,function(){
								
								$("#saltsol2_grp3").animate({"top":mainTop+80+"px","height": "38px"},50);
								$("#DropTwogrp3").fadeOut();
								$('#'+sampleId).css({zIndex:0});
								$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});
								$('#holder_div2_grp3').css({'cursor':'pointer'});
								rotation_flags3=true;
								$('#holder_div2_grp3').click(function(){
									if(rotation_flags3==true){
									clearInterval(rotateEvt9);
									rotateEvt9=setInterval(rotateFunction,10);
									
									}
								});							
							});
						});
					}							
				}
				else
				{
					if(sampleId=="holderdiv_group3" || sampleId=="holder_div2_grp3")
					{
					$('#'+sampleId).css({zIndex:2});
					}
					else
					{
					$('#'+sampleId).css({zIndex:0});
					}
					$('#'+sampleId).animate({top:mainTop+sampleTop+'px',left:mainLeft+sampleLeft+'px'});
					if(sampleId=="holder_div2_grp3" && Dragno==4){
					$("#beakersoldiv_group3").css({"top":mainTop+19+"px","height": "62px"});
					}	
				}
			}
		});	
	}
	//burner click function
	$("#BurnerSwtchon_group3").click(function(){
		if(BrnrFlag_grp3==0){	
			burnerOn_grp3();
		}	
	});
	//Function for burner on and off.
	function burnerOn_grp3(){		
		flaming_grp3 = setInterval(flames_grp3, 1);	//calling flame function
		$('#bubblesBeaker').css({display:'block'});		
		$("#Clock_Container_grp3").css({"opacity":"1"});
		Int_grp3=setInterval(clockRotate_grp3,7);
		$("#BurnerSwtchon_group3").css({'display':'none'});
		$("#BurnerSwtchoff_group3").css({'display':'block'});
		BrnrFlag_grp3=1;
		//flame function.
		$('.flame1_groupThreeTest').show();
		$("#flame_groupThreeTest").show();
		if(DragFlag==1){
			$('#small_SaltDIV_grp3').fadeOut(3000);
			$("#saltsolution").animate({"top":mainTop+206+"px","height": "33px"},3000);
		}
	}
	//Function for turn off the burner 
	function burnerOff_grp3(){	
		$('#BurnerSwtchon_group3').css({'cursor':'default'});
		
		console.log(simPath)
		$("#BurnerSwtchon_group3").css({'display':'block'});
		$("#BurnerSwtchoff_group3").css({'display':'none'});
		clearInterval(flaming_grp3);
		$('#bubblesBeaker').css({display:'none'});			
		$("#flame_groupThreeTest").hide();
		$("#flame_groupThreeTest img").css('display','none');	
		degree4=0;
		deg_grp3=360;
		if(DragFlag==0){
			$('#small_SaltDIV_grp3').draggable({ disabled: false });
			$('#small_SaltDIV_grp3').css({'cursor':'pointer'});	
		}
		else if(DragFlag==1){
			$('#holderdiv_group3').draggable({ disabled: false });
			$('#holderdiv_group3').css({'cursor':'pointer'});
			$('#holder_div2_grp3').css({'cursor':'pointer'});
		}
	}
	//flames function
	function flames_grp3(){
		if($('.flame1_groupThreeTest').css('display') == "block"){          
			$('.flame1_groupThreeTest,.flame3_groupThreeTest,.flame4_groupThreeTest').hide();
			$('.flame2_groupThreeTest').show();         
		}else if($('.flame2_groupThreeTest').css('display') == "block"){          
			$('.flame1_groupThreeTest,.flame2_groupThreeTest,.flame4_groupThreeTest').hide();
			$('.flame3_groupThreeTest').show();         
		}else if($('.flame3_groupThreeTest').css('display') == "block"){          
			$('.flame1_groupThreeTest,.flame3_groupThreeTest,.flame2_groupThreeTest').hide();
			$('.flame4_groupThreeTest').show();         
		}else{
			$('.flame2_groupThreeTest,.flame3_groupThreeTest,.flame4_groupThreeTest').hide();
			$('.flame1_groupThreeTest').show();
		}
	} 
	
	//function for clock rotate...
	function clockRotate_grp3(){
		if(degree4<=deg_grp3){
			degree4++;
			$("#Clockneedle_grp3").css({'-webkit-transform-origin' :'60% 60%'});
			$("#Clockneedle_grp3").css({'-webkit-transform' : 'rotate('+degree4+'deg)'});
			$("#Clockneedle_grp3").css({'transform-origin' : '60% 60%'});
			$("#Clockneedle_grp3").css({'transform' : 'rotate('+ degree4 +'deg)'});
			}
		else
		{	
			clearInterval(Int_grp3);
			//afer clock rotation 
			$("#Clock_Container_grp3" ).css({"opacity":"0"});
			burnerOff_grp3();
			if(DragFlag==3){
				$('#holder_div2_grp3').draggable({ disabled: false });
				$('#holder_div2_grp3').css({'cursor':'pointer'});	
				dragDroppergroupTest3(4,'holder_div2_grp3',208,175,0,118,62,235);
			}
		}
	}
	
	
		//shaking testtube
	function rotateFunction(){	
	rotation_flags3=false;	
		rotCount9++;	
		if(flag9==true){	
			if(degree9<=0){//0
				switch (groupTestIndex+"-"+sampleSalt[result]) {
					case "4-"+sampleSalt[5]:
					$('#saltsol2_grp3').animate({'background-color':'#752c17','opacity':'1'},4000);
					break;
					case "4-"+sampleSalt[6]:
					$('#saltsol2_grp3').animate({'background-color':'#ffffff','opacity':'1'},4000);
					break;
						
				}
				
				degree9++;
				if(degree9==0){//0		
					flag9=false;	
				}
			}
		}
		else{
			degree9--;
			if(degree9==-20){//20
				flag9=true;
			}
		}	
		rotation(document.getElementById("holder_div2_grp3"),degree9);
		if(rotCount9>=250){	
			clearInterval(rotateEvt9);	
			rotation(document.getElementById("holder_div2_grp3"),0);
			if(groupTestIndex==4){
			$('#Inference').css({display:'block'});
			
			}
			else
			{
			$("#nextbtn_grp4").css({"visibility":"visible"});
			$("#nextbtn_grp4").click(function(){
				groupTwoTestfn();
					help_grp3Flag=2
				//StopBBl();
				$("#groupThreeTestDIv,#ExpOne,#ExpThree,#boardlabel_saltsoln").hide();
				$("#groupTwoTestDIv").show();
					$("#ExpTwo").show();
					$("#saltsolution").hide();
			//Setting the testube salt solution background color accoding to the result.
			$("#DrggTestubSolution_groupTwoTest").css({"background-color":random_solution[result]});
			//Drag function to the test tube.
			$("#DrggTestub").draggable({revert:true,revertDuration:0});
				});
			}
			$('#Dropbox_conformation_test_ID').removeAttr('disabled');	
				switch (groupTestIndex+"-"+sampleSalt[result]) {
					
					case "4-"+sampleSalt[5]://fe
					inferenceMsg=group3_Inference[0];
					break;
					case "4-"+sampleSalt[6]://aluminium
					inferenceMsg=group3_Inference[1];
					break;
					case "5-"+sampleSalt[7]://coS or NiS
					inferenceMsg=group3_Inference[2];
					break;
					case "5-"+sampleSalt[8]://coS or NiS
					inferenceMsg=group3_Inference[2];
					break																	
					case "5-"+sampleSalt[9]://Mn								
					inferenceMsg=group3_Inference[3];
					break;
					case "5-"+sampleSalt[10]://Zn								
					inferenceMsg=group3_Inference[4];
					break;
					default://no change								
					inferenceMsg=noreactionInference;
					$('#Dropbox_conformation_test_ID').attr('disabled','disabled');
					break;
						
				}
		}	
	}
	//Function to rotate object
	function rotation(rotateId,degree){
		rotateId.style.webkitTransformOrigin='50% 50%';
		rotateId.style.webkitTransform = 'rotate(' + degree+ 'deg)';
		rotateId.style.MozTransformOrigin='50% 50%';
		rotateId.style.MozTransform ='rotate('+ degree +'deg)';
	}
	//Function for resetting the whole group	
	function resetgroup3(){
		console.log(sampleSalt[result]);
		$("#nextbtn_grp4").css({"visibility":"hidden"});
		$('#bubblesBeaker').css({display:'none'});
		$('#x1,#x2,#x3,#x4').css({'opacity':'1'});
		$('#x1,#x2,#x3,#x4').stop(true);
		$("#labeldiv_grp3").css({"display":"block"});
		$('#BurnerSwtchon_group3,#BurnerSwtchoff_group3').css({'cursor':'default'});
		BrnrFlag_grp3=1;
		$("#groupThree_part1").show();
		$("#saltsolution").css({top:mainTop+214+'px',left:mainLeft+168+'px',height: "25px",'opacity':'0.7','background-color' : random_solution[result]});
		$("#Dropper_waterWrprgrp3").css({"display":"none","top":mainTop+98+"px","left":mainLeft+176+'px'});
		$("#DropOnegrp3 img,#DropTwogrp3 img").attr('src',simPath+'images/yellowdrop.png');
		
		$('#hno3dropper_groupTest3').draggable({ disabled: false});
		$('#holder_div2_grp3').draggable({ disabled: false});
		$('#small_SaltDIV_grp3').draggable({ disabled: true });
		$('#holderdiv_group3').draggable({ disabled: true });
		$('#DropperTwo_groupTest3').draggable({ disabled: true });
		
		$('#hno3dropper_groupTest3').css({'cursor':'pointer'});	
		$('#small_SaltDIV_grp3').css({'cursor':'default'});
		$('#holderdiv_group3').css({'cursor':'default'});
		$('#DropperTwo_groupTest3').css({'cursor':'default'});	
		
		$("#hno3dropperImg_groupTest3,#DropOnegrp3,#saltsolution,#DropTwogrp3,#small_SaltDIV_grp3").stop(true);
		$("#DroppersolImg_group3,#saltsol2_grp3").stop(true);
		$("#hno3dropperImg_groupTest3").css({top:mainTop+53+'px',height:"42px"});
		
		$("#DropOnegrp3,#DropTwogrp3").css({top:mainTop+0+'px',left:mainLeft+4+'px',height:"44px",'display': 'none'});
		$("#BurnerSwtchon_group3,#BurnerSwtchoff_group3").css({"z-index":"2"});
		$("#BurnerSwtchon_group3").css({'display':'block'});
		$("#BurnerSwtchoff_group3").css({'display':'none'});
		$("#flame_groupThreeTest").hide();
		clearInterval(flaming_grp3);
		clearInterval(Int_grp3);
		degree4=0;
		deg_grp3=360;
		$("#Clock_Container_grp3" ).css({"opacity":"0"});
		$('#small_SaltDIV_grp3').css({top:mainTop+222+'px',left:mainLeft+437+'px','z-index':0,'opacity':1,'display':'block'});
		$("#saltsol2_grp3").css({"background-color" : random_solution[result],'opacity':'0.7'});
		$('#holder_div2_grp3').css({'display':'none',top:mainTop+122+'px',left:mainLeft+38+'px'});
		$('#holderdiv_group3,#testTube_groupThreeTest,#saltsolution').css({'display':'block'});
		$('#holderdiv_group3').css({top:mainTop+291+'px',left:mainLeft+402+'px'});
		$("#beakersoldiv_group3").css({"top":mainTop+29+"px","height": "53px"});
		$('#burnerTwo_groupThreeTest').css({'z-index':'3'});
		$("#saltsol2_grp3").css({"top":mainTop+84+"px","height":"34px"});
		$('#DroppersolImg_group3').css({top:mainTop+53+'px',height:"42px"});
		rotCount9=0;
		flag9=true;
		degree9=-14;
		clearInterval(rotateEvt9);	
		help_grp3Flag=0;
		rotation(document.getElementById("holder_div2_grp3"),0);
	}
				
}
	