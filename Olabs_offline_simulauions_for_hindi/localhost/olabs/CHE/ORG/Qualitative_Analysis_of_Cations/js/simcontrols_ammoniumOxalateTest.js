function AmmoniumOxalateTest(){
	//Calling initializing the experiment div
	InitAmmoniumOxalateTest();
	$("#BottleSolutionOne_textAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[0]);
	$("#BottleSolutionOne_labelAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[1]);
	$("#BottleSolutionOne_labelSpanAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[2]);
	$("#BottleSolutionTwo_textAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[3]);
	$("#BottleSolutionTwo_labelAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[4]);
	$("#BottleSolutionTwo_labelSpanAmmoniumOxalateTest").html(AmmoniumOxalateTestlabel[5]);
	$("#glassrodText").html(AmmoniumOxalateTestlabel[6]);
	$("#gFIve_amnOxlt_label").html(groupFivelabel[10]);
	$("#AmmoniumOxalateTestDIV").show();
	$("#saltsolution").show();	
	$("#saltsolution").css({"top":"213px","left":"168px"});
	//Adding drag functionality.
	$("#DropperOne_AmmoniumOxalateTest").css({"cursor":"pointer"});
		$("#DropperOne_AmmoniumOxalateTest").draggable({revert:true,revertDuration:0
			});
				
	$("#Solution_DropAmmoniumOxalateTest").droppable({
		//adding accept to the first dropeer.
	accept: "#DropperOne_AmmoniumOxalateTest",
		drop:function(){
			
		$("#DropperOne_AmmoniumOxalateTest").draggable({revert:false});
		$("#DropperOne_AmmoniumOxalateTest").animate({"left":"173px","top":"42px"},200,function(){
		$("#Drops_AmmoniumOxalateTest").css({"visibility":"visible"});
		$("#Drops_AmmoniumOxalateTest").animate({"top":"216px","opacity":"0"},800,function(){
		$("#saltsolution").animate({"top":"211px","height":"28px"},200);
		$("#DropperOne_AmmoniumOxalateTest").animate({"left":"429px","top":"83px"},300,function(){
		$("#DropperOne_AmmoniumOxalateTest").draggable({disabled:true});
		$("#Drops_AmmoniumOxalateTest").css({"visibility":"hidden","top":"122px","opacity":"1"});
		$("#DropperTwo_AmmoniumOxalateTest").css({"cursor":"pointer"});
		$("#DropperTwo_AmmoniumOxalateTest").draggable({revert:true,revertDuration:0
			});
			$("#DropperTwo_AmmoniumOxalateTest").draggable({disabled:false});
			$("#Solution_DropAmmoniumOxalateTest").droppable({
				//adding accept to the Second dropeer.
	accept: "#DropperTwo_AmmoniumOxalateTest",
		drop:function(){
		$("#DropperTwo_AmmoniumOxalateTest").draggable({revert:false});
		$("#DropperTwo_AmmoniumOxalateTest").animate({"left":"173px","top":"42px"},200,function(){
			
			$("#DropperTwo_AmmoniumOxalateTest").draggable({disabled:true});
		$("#Drops_AmmoniumOxalateTest").css({"visibility":"visible"});
		
		$("#Drops_AmmoniumOxalateTest").animate({"top":"216px","opacity":"0"},800,function(){
		$("#saltsolution").animate({"top":"207px","height":"31px"},200);
		$("#DropperTwo_AmmoniumOxalateTest").animate({"left":"507px","top":"84px"},300,function(){
		$("#glassrod_AmmoniumOxalateTest").css({"cursor":"pointer"});
		$("#glassrod_AmmoniumOxalateTest").draggable({disabled:false});	
		$("#glassrod_AmmoniumOxalateTest").draggable({revert:true,revertDuration:0
			});
			$("#Solution_DropAmmoniumOxalateTest").droppable({
				//adding accept to the Glass rod.
	accept: "#glassrod_AmmoniumOxalateTest",
		drop:function(){
		
		$("#glassrod_AmmoniumOxalateTest").draggable({revert:false});
		$("#glassrod_AmmoniumOxalateTest").animate({"left":"181px","top":"42px","height":"127px","width":"5px"},200,function(){
			//Up and down movement of Glass rod
			$("#glassrod_AmmoniumOxalateTest").draggable({disabled:true});
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"112px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"42px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"112px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"42px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"112px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"top":"42px"},500,function(){
		$("#glassrod_AmmoniumOxalateTest").animate({"width":"4px","height":"65px","left":"465px","top":"261px"},500,function(){
		if(result==13){
		$("#saltsolution").css({"opacity":"1"});
		$("#Inference").show();
		inferenceMsg=AmmoniumOxalateTestlabel[7];
		}
		else{
		$("#Inference").show();
		inferenceMsg=noreactionInference;
		
		}});});});});
		});});});});}
		});});
		});});
		}});
		});
		});
		})
		}
	});			
					//initializing the experiment div
		function InitAmmoniumOxalateTest(){
			$("#saltsolution").css({"top":"214px","left":"168px","height":"25px","opacity":"0.5"});
			
			$("#DropperOne_AmmoniumOxalateTest").draggable({disabled:false});
			$("#Drops_AmmoniumOxalateTest").css({"visibility":"hidden","top":"122px","opacity":"1"});
			$("#glassrod_AmmoniumOxalateTest").stop(true);
			$("#DropperOne_AmmoniumOxalateTest").stop(true);
			$("#DropperTwo_AmmoniumOxalateTest").stop(true);
			$("#Drops_AmmoniumOxalateTest").stop(true);
			}		
				
}