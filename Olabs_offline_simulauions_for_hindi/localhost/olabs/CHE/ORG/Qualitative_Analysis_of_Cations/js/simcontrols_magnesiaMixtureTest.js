// JavaScript Document
// JavaScript Document
var flaming;
function Magnesiamixturetest(){
	//initializing the experiment 
	MagnesiamixturetestInit();
	//hiding tool tip.
	if(result==4){
	$("#Tooltip_Magnesiamixturetest").css({"visibility":"visible"});
	$("#Tooltip_textMagnesiamixturetest").css({"visibility":"visible"});

	}
	else{
	$("#Tooltip_Magnesiamixturetest").css({"visibility":"hidden"});
	$("#Tooltip_textMagnesiamixturetest").css({"visibility":"hidden"});
	}
	$("#Tooltip_textMagnesiamixturetest").html(AmmoniummolybdateTestText[0]);
	$("#BottleSolutionText_Magnesiamixturetest").html(AmmoniummolybdateTestText[1]);
	$("#BottleSolutionOne_labelMagnesiamixturetest").html(AmmoniummolybdateTestText[2]);
	$("#BottleSolutionOne_labelSpanMagnesiamixturetest").html(AmmoniummolybdateTestText[3]);
	$("#BottleSolutionTwo_labelMagnesiamixturetest").html(MagnesiamixturetestText[0]);
	$("#BottleSolutionTwo_labelSpanMagnesiamixturetest").html(MagnesiamixturetestText[1]);
	$("#BottleSolutionTextTwo_Magnesiamixturetest").html(MagnesiamixturetestText[2]);
	$("#BottleSolutionThree_labelMagnesiamixturetest").html(MagnesiamixturetestText[3]);
	$("#BottleSolutionThree_labelSpanMagnesiamixturetest").html(MagnesiamixturetestText[4]);
	$("#BottleSolutionTextThree_Magnesiamixturetest").html(MagnesiamixturetestText[5]);
	$("#MagnesiamixturetestDIv").show();
	//Adding drag functionality.
	$("#DropperOne_Magnesiamixturetest").draggable({revert:true,revertDuration:0,
	drag:function (){
		$("#Tooltip_Magnesiamixturetest,#Tooltip_textMagnesiamixturetest").css({"visibility":"hidden"});
		}
	});
	//Adding solution drop functionality 
	$("#drop_SolutionMagnesiamixturetest").droppable({
		accept: "#DropperOne_Magnesiamixturetest",
		drop:function(){
		
			$("#DropperOne_Magnesiamixturetest").draggable({revert:false});
			$("#DropperOne_Magnesiamixturetest").animate({"left":"174px","top":"42px"},100,function(){
			$("#MagnesiamixturetestdroprSltn").animate({"top":"53px"},100);
			$("#DropTwo_Magnesiamixturetest").css({"visibility":"visible"});
			$("#DropTwo_Magnesiamixturetest").animate({"top":"206px"},500,function(){
			
			
			$("#DropperOne_Magnesiamixturetest").animate({"left":"414px","top":"43px"},200);
			$("#DropperOne_Magnesiamixturetest").draggable({disabled:true});
			$("#DropTwo_Magnesiamixturetest").css({"visibility":"hidden","top":"126px"});
			if(result==4){
			$("#solution_Magnesiamixturetest").css({"background-color":"#FFF","opacity":"0.8"});
			//first inference text.
			$("#Inference").show();
			inferenceMsg=AmmoniummolybdateInfrnce[0];
			$("#DropperTwo_Magnesiamixturetest").draggable({disabled:false});
			}
			else{
			$("#Inference").show();
			inferenceMsg=noreactionInference;
			$("#DropperTwo_Magnesiamixturetest").draggable({disabled:true});
			
			}
			//Second dopp function.
			$("#DropperTwo_Magnesiamixturetest").draggable({revert:true,revertDuration:0,
			drag:function (){
			$("#Inference").hide();
			$("#drop_SolutionMagnesiamixturetest").droppable({
				accept: "#DropperTwo_Magnesiamixturetest",
				drop:function(){
			$("#DropperTwo_Magnesiamixturetest").draggable({revert:false});
			$("#DropperTwo_Magnesiamixturetest").animate({"left":"174px","top":"42px"},100,function(){
			$("#DropOne_Magnesiamixturetest").css({"visibility":"visible"});
			$("#DropOne_Magnesiamixturetest").animate({"top":"206px"},500,function(){
				$("#DropperTwo_Magnesiamixturetest").animate({"left":"495px","top":"41px"},200);
				$("#DropperTwo_Magnesiamixturetest").draggable({disabled:true});
				$("#DropOne_Magnesiamixturetest").css({"visibility":"hidden"});
				$("#DropOne_Magnesiamixturetest").css({"visibility":"hidden","top":"126px"});
				$("#solution_Magnesiamixturetest").animate({"top":"203px","height":"35px"},function(){
				$("#DropperThree_Magnesiamixturetest").draggable({disabled:false});
					$("#DropperThree_Magnesiamixturetest").draggable({revert:true,revertDuration:0});
					
					$("#drop_SolutionMagnesiamixturetest").droppable({
						accept: "#DropperThree_Magnesiamixturetest",
						drop:function(){
						$("#DropperThree_Magnesiamixturetest").draggable({revert:false});
						$("#DropperThree_Magnesiamixturetest").animate({"left":"174px","top":"42px"},100,function(){
						$("#DropOne_Magnesiamixturetest").css({"visibility":"visible"});
						$("#DropOne_Magnesiamixturetest").animate({"top":"206px"},500,function(){
						$("#DropperThree_Magnesiamixturetest").animate({"left":"455px","top":"188px"},200);
						
						
				$("#DropperThree_Magnesiamixturetest").draggable({disabled:true});
				$("#Solution_ppst").show();
		$("#solution_Magnesiamixturetest").animate({"top":"199px","height":"39px","background-color":"#FFFFFF","opacity":"1"},100,function(){
			
			$("#Inference").show();
			inferenceMsg=MagnesiamixturetestInfrnce[0];
			});});});}
				});});
				});});
				}});}
	});});});
	}});
	function MagnesiamixturetestInit(){
	$("#DropTwo_Magnesiamixturetest").css({"visibility":"hidden","top":"126px"});
	$("#MagnesiamixturetestdroprSltn").css({"top":"3px"});
	$("#DropperThree_Magnesiamixturetest").draggable({disabled:true});
	$("#DropOne_Magnesiamixturetest").css({"visibility":"hidden","top":"126px"});
	$("#solution_Magnesiamixturetest").css({"opacity":"1","height":"31px","top":"207px"});
	$("#DropperOne_Magnesiamixturetest").draggable({disabled:false,revert:true,revertDuration:0});
	$("#Tooltip_Magnesiamixturetest,#Tooltip_textMagnesiamixturetest").css({"visibility":"visible"});
	$("#Inference").hide();
	$("#DropperTwo_Magnesiamixturetest").draggable({disabled:true});
	clearInterval(flaming);
	$("#Solution_ppst").hide();
	if(sampleSalt[result]==sampleSalt[2] || sampleSalt[result]==sampleSalt[3]){
		$("#solution_Magnesiamixturetest").css({'background-color':"#000000"});
	}else if(sampleSalt[result]==sampleSalt[4]){
		$("#solution_Magnesiamixturetest").css({'background-color':"#FFFF00"});
	}else{
		$("#solution_Magnesiamixturetest").css({'background-color':"#ffffff"});
	}
	}
		}