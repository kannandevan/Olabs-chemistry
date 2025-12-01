// JavaScript Document
var flaming;
function AmmoniumMolybdateTest(){
	
	//initializing the experiment 
	AmmoniumMolybdateTestInit();
	//hiding tool tip.
	if(result==4){
	$("#Tooltip_ammoniumMolybdatetest").css({"visibility":"visible"});
	$("#Tooltip_textAmmoniumMolybdatetest").css({"visibility":"visible"});

	}
	else{
	$("#Tooltip_ammoniumMolybdatetest").css({"visibility":"hidden"});
	$("#Tooltip_textAmmoniumMolybdatetest").css({"visibility":"hidden"});
	}
	$("#Tooltip_textAmmoniumMolybdatetest").html(AmmoniummolybdateTestText[0]);
	$("#BottleSolutionText_ammoniumMolybdatetest").html(AmmoniummolybdateTestText[1]);
	$("#BottleSolutionOne_labelAmmoniumMolybdatetest").html(AmmoniummolybdateTestText[2]);
	$("#BottleSolutionOne_labelSpanAmmoniumMolybdatetest").html(AmmoniummolybdateTestText[3]);
	$("#BottleSolutionTwo_labelAmmoniumMolybdatetest").html(AmmoniummolybdateTestText[4]);
	$("#BottleSolutionTwo_labelSpanAmmoniumMolybdatetest").html(AmmoniummolybdateTestText[5]);
	$("#BottleSolutionTextTwo_ammoniumMolybdatetest").html(AmmoniummolybdateTestText[6]);
	
	$("#AmmoniumMolybdateTestDiv").show();
	//Adding drag functionality.
	$("#DropperOne_ammoniumMolybdatetest").draggable({revert:true,revertDuration:0,
	drag:function (){
		$("#Tooltip_ammoniumMolybdatetest,#Tooltip_textAmmoniumMolybdatetest").css({"visibility":"hidden"});
		}
	});
	//Adding solution drop functionality 
	$("#drop_SolutionammoniumMolybdatetest").droppable({
		accept: "#DropperOne_ammoniumMolybdatetest",
		drop:function(){
			$("#DropperOne_ammoniumMolybdatetest").draggable({revert:false});
			$("#DropperOne_ammoniumMolybdatetest").animate({"left":"174px","top":"42px"},100,function(){
			$("#ammoniumMolybdatetestdroprSltn").animate({"top":"53px"},100);
			$("#DropOne_ammoniumMolybdatetest").css({"visibility":"visible"});
			$("#DropOne_ammoniumMolybdatetest").animate({"top":"206px"},500,function(){
			
			$("#DropperOne_ammoniumMolybdatetest").animate({"left":"417px","top":"83px"},200);
			$("#DropOne_ammoniumMolybdatetest").css({"visibility":"hidden","top":"126px"});
			$("#DropperOne_ammoniumMolybdatetest").draggable({disabled:true});
			if (result==4){
			$("#solution_ammoniumMolybdatetest").css({"background-color":"#FFF","opacity":"0.8"});
			//first inference text.
			$("#Inference").show();
			inferenceMsg=AmmoniummolybdateInfrnce[0];
			$("#DropperTwo_ammoniumMolybdatetest").draggable({disabled:false});
						}
						else{
						$("#Inference").show();
						inferenceMsg=noreactionInference;
						$("#DropperTwo_ammoniumMolybdatetest").draggable({disabled:true});
						}
			//Second dopp function.
			$("#DropperTwo_ammoniumMolybdatetest").draggable({revert:true,revertDuration:0,
			drag:function (){
			$("#Inference").hide();
			$("#Tooltip_ammoniumMolybdatetest,#Tooltip_textAmmoniumMolybdatetest").css({"visibility":"hidden"});
		
			$("#drop_SolutionammoniumMolybdatetest").droppable({
				accept: "#DropperTwo_ammoniumMolybdatetest",
				drop:function(){
		
			$("#DropperTwo_ammoniumMolybdatetest").draggable({revert:false});
			$("#DropperTwo_ammoniumMolybdatetest").animate({"left":"174px","top":"42px"},100,function(){
					$("#DropTwo_ammoniumMolybdatetest").css({"visibility":"visible"});
			$("#DropTwo_ammoniumMolybdatetest").animate({"top":"206px"},500,function(){
				
				$("#DropperTwo_ammoniumMolybdatetest").animate({"left":"498px","top":"83px"},200);
				$("#DropperTwo_ammoniumMolybdatetest").draggable({disabled:true});
				$("#DropTwo_ammoniumMolybdatetest").css({"visibility":"hidden"});
				
				$("#Burner_Swtch_ammoniumMolybdatetest").css({"cursor":"pointer","z-index":"2"});
				$("#Burner_Swtch_ammoniumMolybdatetest").bind( "click");
				$("#Burner_Swtch_ammoniumMolybdatetest").click(function(){
					
					$("#Burner_Swtch_ammoniumMolybdatetest").attr({'src': simPath+"/images/"+"burnerOn.png"});
					$("#Burner_Swtch_ammoniumMolybdatetest").css({"left":"164px"});
					flaming = setInterval(flames, 1);
					$("#flame_ammoniumMolybdatetest").show();
						$("#Burner_Swtch_ammoniumMolybdatetest").css({"cursor":"default","z-index":"2"});
					
							$("#Burner_Swtch_ammoniumMolybdatetest").unbind( "click");
							setTimeout(function(){
				clearInterval(flaming);
				$("#flame_ammoniumMolybdatetest").hide();
				$("#Burner_Swtch_ammoniumMolybdatetest").attr({'src': simPath+"/images/"+"burnerOff.png"});
				$("#Burner_Swtch_ammoniumMolybdatetest").css({"left":"152px"});
				$("#solution_ammoniumMolybdatetest").animate({"background-color":"#FF0","opacity":"0.8"},800,function(){
				$("#Inference").show();
				inferenceMsg=AmmoniummolybdateInfrnce[1];
					});
				},2000);
					});
					
				
				
				});});
					}
		
		
		});
		}
	});

			
			});});
	}});
	
	
		
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
	
	
function AmmoniumMolybdateTestInit(){
	$("#ammoniumMolybdatetestdroprSltn").css({"top":"3px"});
	$("#Burner_Swtch_ammoniumMolybdatetest").attr({'src': simPath+"/images/"+"burnerOff.png"});
	$("#Burner_Swtch_ammoniumMolybdatetest").css({"left":"152px"});
	$("#DropperOne_ammoniumMolybdatetest").css({"left":"417px","top":"83px"});
	$("#DropOne_ammoniumMolybdatetest,#DropTwo_ammoniumMolybdatetest").css({"visibility":"hidden","top":"126px"});
	$("#solution_ammoniumMolybdatetest").css({"opacity":"1"});
	$("#DropperOne_ammoniumMolybdatetest").draggable({disabled:false,revert:true,revertDuration:0});
	$("#Tooltip_ammoniumMolybdatetest,#Tooltip_textAmmoniumMolybdatetest").css({"visibility":"visible"});
	$("#Inference").hide();
	$("#Burner_Swtch_ammoniumMolybdatetest").unbind( "click");
	$("#DropperTwo_ammoniumMolybdatetest").draggable({disabled:true});
	clearInterval(flaming);
	if(sampleSalt[result]==sampleSalt[15] || sampleSalt[result]==sampleSalt[3]){
		$("#solution_ammoniumMolybdatetest").css({'background-color':"#000000"});
	}else if(sampleSalt[result]==sampleSalt[4]){
		$("#solution_ammoniumMolybdatetest").css({'background-color':"#FFFF00"});
	}else{
		$("#solution_ammoniumMolybdatetest").css({'background-color':random_solution[result]});
	}
	
}
	
}