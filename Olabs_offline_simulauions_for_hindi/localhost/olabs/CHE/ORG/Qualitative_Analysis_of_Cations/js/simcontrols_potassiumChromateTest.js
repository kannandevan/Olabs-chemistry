// JavaScript Document
function PotassiumChromateTest(){
	//initializing the experiment div
	INIExp()
	$("#BottleSolutionOneText_potassiumChromateTes").html(PotassiumChromateTestlabel[0]);
	$("#BottleSolutionlabe_potassiumChromateTes").html(PotassiumChromateTestlabel[1]);
	$("#BottleSolutionlabeTwo_potassiumChromateTes").html(PotassiumChromateTestlabel[2]);
	$("#gFIve_pChromate_label").html(groupFivelabel[8]);
	$("#potassiumChromateTestDiv").show();
	//Showing the Experiment  Div.
		$("#saltsolution").show();	
		$("#saltsolution").css({"top":"210px","left":"187px"});
		$("#DropperOne_potassiumChromateTes").css({"cursor":"pointer"});
		//Adding drag functionality.
		$("#DropperOne_potassiumChromateTes").draggable({revert:true,revertDuration:0
			});
			//Drop function 
		$("#DropPoint_potassiumChromateTes").droppable({
			drop:function(event,ui){
				$("#DropperOne_potassiumChromateTes").draggable({revert:false});
				$("#DropperOne_potassiumChromateTes").animate({"left":"194px","top":"38px"},100,function(){
				$("#gFivedroprSltn").animate({"top":"53px"},100);
					$("#Drops_potassiumChromateTes").css({"visibility":"visible"});
					$("#Drops_potassiumChromateTes").animate({"top":"210px"},500,function(){
						$("#Drops_potassiumChromateTes").animate({"opacity":"0"},function(){
							
							$("#DropperOne_potassiumChromateTes").animate({"left":"468px","top":"83px"},500);
		});
						//If the salt is in the 11 index position, the salt is Barium 
						if(result==11){
							$("#saltsolution").animate({"background-color":"#FF0"});
							$("#Inference").show();
										inferenceMsg=PotassiumChromateTestlabel[3];
										$("#DropperOne_potassiumChromateTes").draggable({disabled:true});
						}
						//else the salt solution have no change.
						else{
							/*$("#saltsolution").animate({"background-color":"#FFF"});*/
							$("#Inference").show();
										inferenceMsg=noreactionInference;
										$("#DropperOne_potassiumChromateTes").draggable({disabled:true});
							}
						});
					
					});
	
				}
			});
		 
		 //Function for initializing the experiment div
		 function INIExp(){
			$("#gFivedroprSltn").css({"top":"3px"});
			 $("#DropperOne_potassiumChromateTes").draggable({disabled:false});
			 $("#Drops_potassiumChromateTes").css({"visibility":"hidden"});
			 $("#Drops_potassiumChromateTes").css({"top":"117px","opacity":"1"});
			 $("#saltsolution").css({"top":"214px","left":"168px","height":"25px"});
			 }
	
	
	}