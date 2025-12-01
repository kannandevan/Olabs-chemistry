// JavaScript Document
var BrnrFlag=true;
var flaming;
var degree4=0;
var deg=720;
var Int;
var sceneFlag=1
function groupFiveTest(){
	//initializing the test.
	$("#boardlabel_saltsoln").show();
	$("#saltsolutionlabel_saltsoln").html(salt_solutioncommon);
	initializingExp();
	//Cheching the given salt is Barium,Strontium or Calcium.
	if(result==11||result==12||result==13){
		//if the salte is Barium,Strontium or Calcium, other salt solution will hide.
		$("#saltsolution").hide();	
		$("#solutionInTesttube").show();
		$("#solutionInTesttube_one").show();
		$("#White_precipitate").show();
		$("#White_precipitate_two").show();
		
		}
		else{
			
		$("#saltsolution").show();	
		$("#solutionInTesttube").hide();
		$("#solutionInTesttube_one").hide();
		$("#White_precipitate").hide();
		$("#White_precipitate_two").hide();
		
		}
	$("#saltsolution").css({"top":"214px","left":"168px","height":"25px","opacity":"0.5"});
	$("#flame_groupFiveTest").hide();	 			
	$("#groupFiveTestDIv").show();
	$("#Burner_Swtch").css({"z-index":"0"});
	$("#Solution_Drop").hide();
	$("#BottleSolutionOne_text").html(groupFivelabel[0]);
	$("#BottleSolutionOne_label").html(groupFivelabel[1]);
	$("#BottleSolutionOne_labelSpan").html(groupFivelabel[2]);
	$("#BottleSolutionTwo_text").html(groupFivelabel[3]);
	$("#BottleSolutionTwo_label").html(groupFivelabel[1]);
	$("#BottleSolutionTwo_labelSpan").html(groupFivelabel[4]);
	$("#nextBtnText").html(groupFivelabel[5]);
	$("#BottleSolutionOneTwo_text").html(groupFivelabel[6]);
	$("#BottleSolutionOne_labelTwo").html(groupFivelabel[6]);
	$("#Tooltip_text").html(groupFivelabel[7]);
	$("#nextBtnTextTwo").html(groupFivelabel[5]);
	$("#labelTXTone").html(groupFivelabel[8]);
	$("#labelTXTtwo").html(groupFivelabel[9]);
	$("#labelTXTthree").html(groupFivelabel[10]);
	$("#labelTXT").html(groupFivelabel[11]);
	$("#TooltipTwo_text").html(groupFivelabel[12]);
	
	//Drag function, for dragging the salt.
	function dragg(dragObjct){
		dragObjct.draggable({revert:true,revertDuration:0,
				});
		}
		//Drop function, for dropping the salt into the test tube 
		$("#drop_salt").droppable({
			drop:function(event, ui){
				
			$("#small_SaltDIV").draggable({revert:false});
			$("#small_SaltDIV").animate({"left":"148px","top":"221px",},800,function(){
				//Change of salt opacity.
			$("#small_SaltDIV").css({"opacity":"0.6"});
			if(result==11||result==12||result==13){
					
					//changing of water level in the test tube while adding salt into it.
			$("#solutionInTesttube_one").animate({"top":"17px"},100,function(){
				$("#Burner_Swtch").css({"z-index":"2"});
				});
					}
					else{
						$("#saltsolution").animate({"top":"208px","height":"31px"},200,function(){
							$("#Burner_Swtch").css({"z-index":"2"});
							});
						}
			});
	}
		});
		//Drops initialization
		function Dropini(){
			$("#DropOne").css({"visibility":"hidden","top":"0px"});
			$("#DropTwo").css({"visibility":"hidden","top":"0px"});
			}
		
		//Dropping the NH4OH solution in the test tube.
		$("#Solution_Drop").droppable({
			//Accept the First drpper only
			accept: "#DropperOne_groupFiveTest",
			drop:function(event, ui){
				
				$("#DropperOne_groupFiveTest").draggable({revert:false});
				$("#DropperOne_groupFiveTest").animate({"left":"175px","top":"25px"},10,function(){
					//function for drops in the test tube.
					$("#Dropper_waterWrpr").css({"visibility":"visible"});
					$("#DropOne").css({"visibility":"visible"});
					$("#DropOne").animate({"top":"120px"},1000,function(){
						$("#DropOne").css({"visibility":"hidden"});
						if(result==11||result==12||result==13){
						//Increasing the level of solution in the test tube-Stage one.
						$("#solutionInTesttube_one").animate({"top":"13px"},100);
						$("#DropTwo").css({"visibility":"visible"});
						}
						else{
							$("#saltsolution").animate({"top":"206px","height":"33px"},100);
							$("#DropTwo").css({"visibility":"visible"});
							
							}
							
						$("#DropTwo").animate({"top":"120px"},1000,function(){
							if(result==11||result==12||result==13){
							//Increasing the level of solution in the test tube-Stage two. 
							$("#solutionInTesttube_one").animate({"top":"8px"},100,function(){
								DropOneCpmt();
								});
							}
							else{
								
								$("#saltsolution").animate({"top":"205px","height":"34px"},100,function(){
									DropOneCpmt();
									});
								}
							function DropOneCpmt(){
							$("#DropperOne_groupFiveTest").animate({"left":"429px","top":"83px"},200,function(){
								//disabling dropper drag function.
								$("#DropperOne_groupFiveTest").draggable({disabled:true});
								$("#DropperOne_groupFiveTest").css({"cursor":"default"});
								//Adding Drag functionality to the (NH4)2CO3 solution dropper.
								$("#DropperTwo_groupFiveTest").draggable({disabled:false});
								$("#DropperTwo_groupFiveTest").draggable({revert:true,revertDuration:0});
								$("#DropperTwo_groupFiveTest").css({"cursor":"pointer","z-index":"2"});
								//Calling Drops initialization function.
								Dropini();
								
								$("#Solution_Drop").droppable({
									//Accept the second drpper only
									accept: "#DropperTwo_groupFiveTest",
									drop:function(event, ui){
										$("#DropperTwo_groupFiveTest").draggable({revert:false});
										$("#DropperTwo_groupFiveTest").draggable({disabled:true});
									$("#DropperTwo_groupFiveTest").animate({"left":"175px","top":"25px"},10,function(){							$("#DropOne").css({"visibility":"visible"});
									$("#DropOne").animate({"top":"120px"},1000,function(){
										$("#DropOne").css({"visibility":"hidden"});
										if(result==11||result==12||result==13){
										$("#solutionInTesttube_one").animate({"top":"0px"},100);
										$("#DropperTwo_groupFiveTest").animate({"left":"507px","top":"84px"},200,function(){								
										$("#solutionInTesttube_one").css({"opacity":"1"});
										$("#White_precipitate").css({"visibility":"visible","opacity":"1"});
										$("#White_precipitate_two").css({"visibility":"visible","opacity":"1"});
										//Showing inference div
										$("#Inference").show();
										inferenceMsg=groupFivelabelInferce[0];
										//Showing Next button.
										$("#NextBtn_groupFiveTest,#nextBtnText").css({"visibility":"visible"});
										
										});
										}
										else{
											$("#saltsolution").animate({"top":"204px","height":"35px"},100,function(){
												$("#DropperTwo_groupFiveTest").animate({"left":"507px","top":"84px"},200,function(){
												$("#Inference").show();
												inferenceMsg=noreactionInference;
												});
									});}
									});});
										}});});
							};});});
					
					});
}
			});
		//Drop 
		//calling the drag function.
		dragg($("#small_SaltDIV"));
		//Function for burner on and off.
		function burnerOn(){
			
			flaming = setInterval(flames, 1);	//calling flame function
			$("#Burner_Swtch").css({"z-index":"0"});
			$("#Burner_Swtch").css({"left":"163px"});
			$("#Burner_Swtch").attr({'src': simPath+"/images/"+"burnerOn.png"});
			BrnrFlag=false;//set the flag false 
			//flame function.
			$('.flame1_groupFiveTest').show();
			$("#flame_groupFiveTest").show();	 											
			if(result==11||result==12||result==13){
				$("#small_SaltDIV").animate({"opacity":"0"},1500,function (){
					$("#solutionInTesttube_one").animate({"top":"15px"},2000,function(){
						burnerOff();
					$("#Clock_Container").css({"opacity":"1"});
					Int=setInterval(clockRotate,7);	//caling clock rotation.(Can change the speed of rotation.)
						});
					});
				}
				else{
			$("#small_SaltDIV").animate({"opacity":"0"},1500,function (){
				$("#saltsolution").animate({"top":"207px","height":"32px"},2000,function(){
					burnerOff();
					$("#Clock_Container").css({"opacity":"1"});
					Int=setInterval(clockRotate,7);	//caling clock rotation.(Can change the speed of rotation.)
					});
				});
				}}
			//Function for turn of the burner 
		function burnerOff(){
			
			$("#Burner_Swtch").attr({'src': simPath+"/images/"+"burnerOff.png"});
			$("#Burner_Swtch").css({"left":"152px"});
			BrnrFlag=true;
			clearInterval(flaming);								
			$("#flame_groupFiveTest").hide();	
			}
		
		//Toggling the burner switch.
		$("#Burner_Swtch").click(function(){
			if(BrnrFlag){
			burnerOn();
			}
			});
			
		//flame function.
function flames(){
		if($('.flame1_groupFiveTest').css('display') == "block"){          
			$('.flame1_groupFiveTest,.flame3_groupFiveTest,.flame4_groupFiveTest').hide();
			$('.flame2_groupFiveTest').show();         
		}else if($('.flame2_groupFiveTest').css('display') == "block"){          
			$('.flame1_groupFiveTest,.flame2_groupFiveTest,.flame4_groupFiveTest').hide();
			$('.flame3_groupFiveTest').show();         
		}else if($('.flame3_groupFiveTest').css('display') == "block"){          
			$('.flame1_groupFiveTest,.flame3_groupFiveTest,.flame2_groupFiveTest').hide();
			$('.flame4_groupFiveTest').show();         
		}else{
			$('.flame2_groupFiveTest,.flame3_groupFiveTest,.flame4_groupFiveTest').hide();
			$('.flame1_groupFiveTest').show();
		}
	} 
	
	//function for clock rotate...
	function clockRotate(){
	if(degree4<=deg){
	degree4++;
	$("#Clock_needle").css({'-webkit-transform-origin' :'60% 60%'});
	$("#Clock_needle").css({'-webkit-transform' : 'rotate('+degree4+'deg)'});
	$("#Clock_needle").css({'transform-origin' : '60% 60%'});
	$("#Clock_needle").css({'transform' : 'rotate('+ degree4 +'deg)'});
	}
	else
	{	
	clearInterval(Int);
	//afer clock rotation 
	$("#Clock_Container" ).css({"opacity":"0"});
	$("#DropperOne_groupFiveTest").css({"cursor":"pointer"});
	$("#drop_salt").hide();
	$("#Solution_Drop").show();
	$("#DropperOne_groupFiveTest").draggable({disabled:false});
	dragg($("#DropperOne_groupFiveTest"));
	}
	}
	//function for next button.
	$("#NextBtn_groupFiveTest,#nextBtnText").click(function(){
	$("#boardlabel_saltsoln").hide();
		sceneFlag=2
		//hiding the inference div.
		$("#Inference").hide();
		//hidding the first section of the exprmnt.
		$("#First_part").hide();
		//Showing the second section of the exprmnt.
		$("#Second_part").show();
		
		$("#DropperOneTwo_groupFiveTest").css({"cursor":"pointer"});
		$("#DropperOneTwo_groupFiveTest").draggable({disabled:false});
		$("#DropperOneTwo_groupFiveTest").draggable({revert:true,revertDuration:0,
			drag:function(){
				$("#Tooltip_text,#Tooltip_groupFiveTest").hide();
				$("#Second_Dropdiv").show();
				}
			});
		$("#Second_Dropdiv").droppable({
			//Accept the First drpper only
			accept: "#DropperOneTwo_groupFiveTest",
			drop:function(event, ui){
				$("#DropperOneTwo_groupFiveTest").draggable({revert:false});
				//adjusting the solution dropper. 
				$("#DropperOneTwo_groupFiveTest").animate({"left":"189px","top":"24px"},200,function(){
					//drops Two
					$("#DropSecnd").css({"visibility":"visible"});
					$("#DropSecnd").animate({"top":"198px"},1000,function(){
						$("#DropSecnd").css({"opacity":"0"});
						$("#DropperOneTwo_groupFiveTest").draggable({disabled:true});
						$("#White_precipitateSecond").animate({"top":"208px","height":"19px"},500);
							$("#DropperOneTwo_groupFiveTest").animate({"left":"468px","top":"83px"},300,function(){//reducing the opacity of precipitate.
				
								$("#White_precipitateSecond").animate({"opacity":"0.8"},1000,function(){
									$("#Inference").show();
									inferenceMsg=groupFivelabelInferce[1];
									$("#NextBtnTwo_groupFiveTest,#nextBtnTextTwo").css({"visibility":"visible"});
									});
								});
		});});
				}});});
	//Function showing the last exprmnt
	
	$("#NextBtnTwo_groupFiveTest,#nextBtnTextTwo").click(function (){
	document.getElementById("Dropbox_conformation_test_ID").disabled=false;
		$("#First_part").hide();
		
		$("#Second_part").hide();
		$("#Third_Part").show();
		});
	//Function for initializing the experiment div
	function initializingExp(){
		$("#Burner_Swtch").attr({'src': simPath+"/images/"+"burnerOff.png"});
		$("#small_SaltDIV").css({"top":"267px","left":"259px","opacity":"1"});
		$("#solutionInTesttube_one").css({"top":"20px"});
		$("#drop_salt").show();
		$("#Solution_Drop").hide();
		$("#Burner_Swtch").css({"z-index":"0","left":"152px"});
		$("#flame_groupFiveTest").hide();
		BrnrFlag=true;
		clearInterval(Int);
		clearInterval(flaming);
		degree4=0;
		deg=720;	
		$("#Clock_Container" ).css({"opacity":"0"});
		Dropini();
		$("#DropperOne_groupFiveTest").draggable({disabled:true});
		$("#DropperTwo_groupFiveTest").draggable({disabled:true});
		$("#DropperOne_groupFiveTest").css({"cursor":"default"});
		$("#DropperTwo_groupFiveTest").css({"cursor":"default"});
		$("#solutionInTesttube_one").css({"opacity":"0.8"});
		$("#White_precipitate").css({"visibility":"hidden"});
		$("#White_precipitate_two").css({"visibility":"hidden"});
		$("#NextBtn_groupFiveTest").css({"visibility":"hidden"});
		$("#nextBtnText").css({"visibility":"hidden"});
		$("#Second_Dropdiv").hide();
		$("#First_part").show();
		$("#Second_part").hide();
		$("#Third_Part").hide();
		$("#White_precipitateSecond").css({"opacity":"1"});
		$("#White_precipitateSecond").css({"height":"12px","top":"216px"});
		$("#DropSecnd").css({"visibility":"hidden","top":"102px","opacity":"1"});
		$("#Tooltip_text,#Tooltip_groupFiveTest").show();
		$("#NextBtnTwo_groupFiveTest,#nextBtnTextTwo").css({"visibility":"hidden"});
$("#solutionInTesttube_one,#small_SaltDIV,#saltsolution,#DropperOne_groupFiveTest,#DropOne,#DropTwo,DropperTwo_groupFiveTest").stop(true);
		$("#saltsolution").stop(true);
			$("#saltsolution").css({"top":"214px","left":"168px","height":"25px","opacity":"0.5"});
		
		}		
	}
	
