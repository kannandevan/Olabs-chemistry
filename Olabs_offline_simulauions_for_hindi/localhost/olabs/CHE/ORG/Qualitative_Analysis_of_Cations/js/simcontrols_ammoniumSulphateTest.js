// JavaScript Document
var flaming;
function AmmoniumSulphateTest(){
	//Calling initializing the experiment div
initfunction();
$("#gFIve_amnSulph_label").html(groupFivelabel[9]);
$("#BottleSolutionOneText_AmmoniumSulphateTest").html(AmmoniumSulphateTestlabel[2]);
$("#BottleSolutionlabe_AmmoniumSulphateTest").html(AmmoniumSulphateTestlabel[0]);
$("#BottleSolutionlabeTwo_AmmoniumSulphateTest").html(AmmoniumSulphateTestlabel[1]);
	$("#AmmoniumSulphateTestDIV").show();
	$("#saltsolution").show();	
	$("#saltsolution").css({"top":"210px","left":"187px"});
	$("#DropperOne_AmmoniumSulphateTest").css({"cursor":"pointer"});
		//Adding drag functionality.
		$("#DropperOne_AmmoniumSulphateTest").draggable({revert:true,revertDuration:0
			});
			
			//Drop function 
		$("#DropPoint_AmmoniumSulphateTest").droppable({
			drop:function(event,ui){
				$("#DropperOne_AmmoniumSulphateTest").draggable({revert:false});
				$("#DropperOne_AmmoniumSulphateTest").draggable({disabled:true});
				$("#DropperOne_AmmoniumSulphateTest").animate({"left":"194px","top":"38px"},100,function(){
					$("#Drops_AmmoniumSulphateTest").css({"visibility":"visible"});
					$("#Drops_AmmoniumSulphateTest").animate({"top":"210px"},500,function(){
						$("#Drops_AmmoniumSulphateTest").animate({"opacity":"0"},function(){
						$("#DropperOne_AmmoniumSulphateTest").animate({"left":"468px","top":"83px"},500,function(){
						$("#Burner_SwtchAmmoniumSulphateTest").css({"cursor":"pointer"});
						$("#Burner_SwtchAmmoniumSulphateTest").bind("click");
						$("#Burner_SwtchAmmoniumSulphateTest").click(function(){
							burnerOn();
							$("#Burner_SwtchAmmoniumSulphateTest").unbind("click");
							$("#DropperOne_AmmoniumSulphateTest").draggable({disabled:true});
							
							
							$("#DropperOne_AmmoniumSulphateTest").animate({"left":"468px"},2000,function(){
							$("#Burner_SwtchAmmoniumSulphateTest").css({"cursor":"default"});
							burnerOff();
						//If the salt is in the 11 index position, the salt is Barium 
						if(result==12){
							$("#saltsolution").animate({"opacity":"1"});
							$("#Inference").show();
										inferenceMsg=AmmoniumSulphateTestlabel[3];
										$("#DropperOne_AmmoniumSulphateTest").draggable({disabled:true});
						}
						//else the salt solution have no change.
						else{
						
							$("#Inference").show();
										inferenceMsg=noreactionInference;
										$("#DropperOne_AmmoniumSulphateTest").draggable({disabled:true});
							}	
							
							});
							});
							
							
							
							});
		});
						
						});
					
					});
	
				}
			});
				//flame function.
function flames(){
		if($('.flame1_AmmoniumSulphateTest').css('display') == "block"){          
			$('.flame1_AmmoniumSulphateTest,.flame3_AmmoniumSulphateTest,.flame4_AmmoniumSulphateTest').hide();
			$('.flame2_AmmoniumSulphateTest').show();         
		}else if($('.flame2_AmmoniumSulphateTest').css('display') == "block"){          
			$('.flame1_AmmoniumSulphateTest,.flame2_AmmoniumSulphateTest,.flame4_AmmoniumSulphateTest').hide();
			$('.flame3_AmmoniumSulphateTest').show();         
		}else if($('.flame3_AmmoniumSulphateTest').css('display') == "block"){          
			$('.flame1_AmmoniumSulphateTest,.flame3_AmmoniumSulphateTest,.flame2_AmmoniumSulphateTest').hide();
			$('.flame4_AmmoniumSulphateTest').show();         
		}else{
			$('.flame2_AmmoniumSulphateTest,.flame3_AmmoniumSulphateTest,.flame4_AmmoniumSulphateTest').hide();
			$('.flame1_AmmoniumSulphateTest').show();
		}
	} 
		
		function burnerOn(){
			$("#Burner_SwtchAmmoniumSulphateTest").attr({'src': simPath+"/images/"+"burnerOn.png"});
			$("#Burner_SwtchAmmoniumSulphateTest").css({"left":"182px"});
			flaming = setInterval(flames, 1);	
			$("#flame_AmmoniumSulphateTest").show();
			$('.flame1_groupFiveTest').show();
			$("#flame_groupFiveTest").show();
			
			}
		//Function for turn of the burner 
		function burnerOff(){
			
			$("#Burner_SwtchAmmoniumSulphateTest").attr({'src': simPath+"/images/"+"burnerOff.png"});
			$("#Burner_SwtchAmmoniumSulphateTest").css({"left":"174px"});
			clearInterval(flaming);								
			$("#flame_AmmoniumSulphateTest").hide();	
			}
			//initializing the experiment div
		function initfunction(){
		$("#saltsolution").animate({"opacity":"0.5"});
		$("#Drops_AmmoniumSulphateTest").css({"visibility":"hidden","top":"117px","opacity":"1"});
		$("#DropperOne_AmmoniumSulphateTest").draggable({disabled:false});
		clearInterval(flaming);	
		$("#saltsolution").css({"top":"214px","left":"168px","height":"25px"});		
		$("#DropperOne_AmmoniumSulphateTest").stop(true);
		$("#Drops_AmmoniumSulphateTest").stop(true);
		$("#saltsolution").stop(true);
		}
			
			
			
	}