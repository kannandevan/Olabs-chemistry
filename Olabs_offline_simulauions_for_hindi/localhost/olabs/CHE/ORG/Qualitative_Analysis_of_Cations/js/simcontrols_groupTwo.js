var flaming;
var bbl=1;
var clickFlag=1;
var bblone;
var bbltwo;
var sceneFlag=1;
function groupTwoTestfn(){
	groupTwoTestInitfn();
	

	$("#groupTwoTestDIv,#boardlabel_saltsoln").show();
	$("#saltsolutionlabel_saltsoln").html(salt_solutioncommon);
	$("#BottleSolutionText_groupTwoTest").html(GroupTwoTestText[0]);
	$("#nextBtnText_groupTwoTest").html(GroupTwoTestText[1]);
	$("#Kippsapparatus_text").html(GroupTwoTestText[2]);
	$("#nextBtnText_groupTwoTestTwo").html(GroupTwoTestText[1]);
	$("#TooltipThree_text").html(GroupTwoTestText[3]);
	//flame function.
function flames(){
		if($('.flame1_groupTwoTest').css('display') == "block"){          
			$('.flame1_groupTwoTest,.flame3_groupTwoTest,.flame4_groupTwoTest').hide();
			$('.flame2_groupTwoTest').show();         
		}else if($('.flame2_groupTwoTest').css('display') == "block"){          
			$('.flame1_groupTwoTest,.flame2_groupTwoTest,.flame4_groupTwoTest').hide();
			$('.flame3_groupTwoTest').show();         
		}else if($('.flame3_groupTwoTest').css('display') == "block"){          
			$('.flame1_groupTwoTest,.flame3_groupTwoTest,.flame2_groupTwoTest').hide();
			$('.flame4_groupTwoTest').show();         
		}else{
			$('.flame2_groupTwoTest,.flame3_groupTwoTest,.flame4_groupTwoTest').hide();
			$('.flame1_groupTwoTest').show();
		}
	} 
	//adding drag functionality to the dropper. 
	$("#DropperOne_groupTwoTest").draggable({revert:true,revertDuration:0});
	//Drop function.
	$("#drop_SolutionGroupTwoTest").droppable({
		drop:function(){
			$("#DropperOne_groupTwoTest").draggable({revert:false});
			
			$("#DropperOne_groupTwoTest").animate({"left":"174px","top":"46px"},200,function(){
			$("#DropOne_groupTwoTest").css({"visibility":"visible"});
			$("#DropOne_groupTwoTest").animate({"top":"216px"},500,function(){
			$("#DropOne_groupTwoTest").css({"visibility":"hidden"});
			$("#saltsolution").animate({"top":"210px","height":"29px"});
			$("#DropperOne_groupTwoTest").animate({"left":"468px","top":"83px"},200,function(){
				$("#DropperOne_groupTwoTest").draggable({disabled:true});
				$("#DropperOne_groupTwoTest").css({"cursor":"default"});
				$("#Burner_SwtchgroupTwoTest").css({"cursor":"pointer"});
				$("#Burner_SwtchgroupTwoTest").bind( "click");
				//Burner on function.
				$("#Burner_SwtchgroupTwoTest").click(function(){
					$("#Burner_SwtchgroupTwoTest_On").show();
					$("#Burner_SwtchgroupTwoTest").hide();
					$("#Burner_SwtchgroupTwoTest").css({"left":"163px"});	
					//Flaming function on.
					flaming = setInterval(flames, 1);
					$('.flame1_groupTwoTest').show();
					$("#flame_groupTwoTest").show();
					$("#saltsolution").animate({"top":"210px","height":"29px"},1500,function(){
					//Flaming off
						clearInterval(flaming);	
						$("#Burner_SwtchgroupTwoTest").css({"cursor":"default"});	
						$("#Burner_SwtchgroupTwoTest").unbind( "click");					
						$("#flame_groupTwoTest").hide();
						$("#Burner_SwtchgroupTwoTest_On").hide();
						$("#Burner_SwtchgroupTwoTest").show();
						$("#Burner_SwtchgroupTwoTest").animate({"left":"152px"},100,function(){
							//Next button visible.
						$("#NextBtnTwo_groupTwoTest,#nextBtnText_groupTwoTest").css({"visibility":"visible"});
							});
						});
				});});});
				});
		}});
		//Next button click 
		$("#NextBtnTwo_groupTwoTest,#nextBtnText_groupTwoTest").click(function(){
			$("#boardlabel_saltsoln").css({display:'none'});
			sceneFlag=2;
			StopBBl();
			//hiding the first section.
			$("#ExpOne").hide();
			//Showing the second section.
			$("#ExpTwo").show();
			//Salt solution hiding here.
			$("#saltsolution").hide();
			//Setting the testube salt solution background color accoding to the result.
			$("#DrggTestubSolution_groupTwoTest").css({"background-color":random_solution[result]});
			//Drag function to the test tube.
			$("#DrggTestub").draggable({revert:true,revertDuration:0});
			});
			//dropping the test tube into the kipp's apparatus.
			$("#DropArea_groupTwoTest").droppable({
				drop:function(){
					$("#DrggTestubSolution_groupTwoTest").css({"borderTopLeftRadius":"4em"});
					$("#DrggTestub").draggable({revert:false});
					$("#DrggTestub").css({"cursor":"default"});
					$("#DrggTestub").draggable({disabled:true});
					$("#DrggTestub").animate({"left":"175px","top":"188px","cursor":"default"},100);
					$("#DrggTestub").addClass('testtub_rotate testtub_transition');
					$("#kippsclose_groupTwoTest").css({"cursor":"pointer"});
					//Kipp's apparatus nozzle open 
					$("#kippsclose_groupTwoTest").click(function(){
						StopBBl();
						if(clickFlag==1){
						BubbleFnOne();
							TesttubeBBl();
					$("#kippsclose_groupTwoTest").css({"top":"200px","left":"270px"});
					$("#kippsclose_groupTwoTestOne").show();
                    $("#kippsclose_groupTwoTestTwo").hide();
					$("#kippsclose_groupTwoTest").css({"cursor":"default"});
					$("#KippsapparatusTopSolution").animate({"top":"15px"},500);
					$("#KippsapparatusBottomSolution").animate({"top":"8px"},500,function(){
					if(groupIndex==3){
					if(result==15||result==3){
						$("#DrggTestubSolution_groupTwoTest").css({"background-color":"#000"});
					inferenceMsg=GroupTwoTestInfrnc[0];
					$("#CentrifugedSln").css({"background-color":"#000"});
						}
						else if (result==4){
							
					$("#DrggTestubSolution_groupTwoTest").css({"background-color":"#FF0"});
					$("#CentrifugedSln").css({"background-color":"#FF0"});
					inferenceMsg=GroupTwoTestInfrnc[1];
							}
							else {
					inferenceMsg=noreactionInference;					
					
					}}
					if(groupIndex==5){
                    switch (groupTestIndex+"-"+sampleSalt[result]){
                    case "5-"+sampleSalt[7]:
                    $('#DrggTestubSolution_groupTwoTest').animate({'background-color':'#0f100b','opacity':'1'},4000);
                    break;
                    case "5-"+sampleSalt[8]:
                    $('#DrggTestubSolution_groupTwoTest').animate({'background-color':'#0f100b','opacity':'1'},4000);
                    break                                                                   
                    case "5-"+sampleSalt[9]:                              
                    $('#DrggTestubSolution_groupTwoTest').animate({'background-color':'#efdce9','opacity':'1'},4000);
                    break;
                    case "5-"+sampleSalt[10]:                             
                    $('#DrggTestubSolution_groupTwoTest').animate({'background-color':'#e8d8d6','opacity':'1'},4000);
                    break;
                    }
                    }
						});
					bblone=setInterval(BubbleFnOne,3000);
					bbltwo=setInterval(TesttubeBBl,3000);
					}
					else if(clickFlag==2){
							StopBBl();
						clearInterval(bblone);
						clearInterval(bbltwo);
                        $("#kippsclose_groupTwoTest").css({"top":"200px","left":"270px"});
                         $("#kippsclose_groupTwoTestOne").hide();
                         $("#kippsclose_groupTwoTestTwo").show();
						$("#DrggTestub").removeClass('testtub_rotate testtub_transition');
						$("#DrggTestub").animate({"top":"81px"},450);
						$("#DrggTestubSolution_groupTwoTest").css({"borderTopLeftRadius":"0em"});
						$("#Bbl_sctnOne").hide();
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").stop(true);
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").stop(true);
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").hide();
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").hide();
	 if(groupIndex==3){
	if(result==15||result==3||result==4){
		$("#NextBtnTwo_groupTwoTestTwo,#nextBtnText_groupTwoTestTwo").css({"visibility":"visible"});
		
		}}
	$("#Inference").show();
				}});}
				})
	
	//Bubble function one
	function BubbleFnOne(){
		//setInterval(functionname,5000);
		$("#Bbl_sctnOne").show();
	$("#kippsBbl_one,#kippsBbl_two").show();
	$("#kippsBbl_one,#kippsBbl_two").animate({"top":"248px"},1800,function(){
		$("#kippsBbl_one,#kippsBbl_two").hide();
		$("#kippsBbl_one,#kippsBbl_two").css({"top":"260px"});
		$("#kippsBbl_three,#kippsBbl_four").show();
		$("#kippsBbl_three,#kippsBbl_four").animate({"top":"248px"},1800,function(){
			$("#kippsBbl_three,#kippsBbl_four").hide();
			$("#kippsBbl_three,#kippsBbl_four").css({"top":"250px"});
			$("#kippsBbl_five,#kippsBbl_six,#kippsBbl_one").show();
			$("#kippsBbl_five,#kippsBbl_six,#kippsBbl_one").animate({"top":"248px"},1800,function(){
			$("#kippsBbl_five,#kippsBbl_six,#kippsBbl_one").hide();
			$("#kippsBbl_five,#kippsBbl_six,#kippsBbl_one").css({"top":"255px"});
			});});
		});
		}
//function for test tube bubble
	function TesttubeBBl(){
		$("#TstBbl_one").show();
	$("#TstBbl_one").animate({"top":"265px","left":"170px"},1900,function(){
		$("#TstBbl_one").hide();
		$("#kippsclose_groupTwoTest").css({"cursor":"pointer"});
		$("#kippsclose_groupTwoTest").bind( "click");
		clickFlag=2;
	$("#TstBbl_one").css({"top":"302px","left":"145px"});
	$("#TstBbl_two").show();
		$("#TstBbl_two").animate({"top":"265px","left":"170px"},1900,function(){
		$("#TstBbl_two").hide();
		$("#TstBbl_two").css({"top":"302px","left":"140px"});
			});
				$("#TstBbl_three").show();
			$("#TstBbl_three").animate({"top":"265px","left":"170px"},1900,function(){
				$("#TstBbl_three").hide();
				$("#TstBbl_three").css({"top":"302px","left":"148px"});									
				$("#TstBbl_four").show();
				$("#TstBbl_four").animate({"top":"265px","left":"170px"},1900,function(){
				$("#TstBbl_four").hide();
				$("#TstBbl_four").css({"top":"302px","left":"150px"});
				$("#TstBbl_five").show();
				$("#TstBbl_five").animate({"top":"265px","left":"170px"},1900,function(){
				$("#TstBbl_five").hide();	
				$("#TstBbl_five").css({"top":"302px","left":"152px"});
				});
				$("#TstBbl_six").show();
				$("#TstBbl_six").animate({"top":"265px","left":"170px"},1900,function(){
				$("#TstBbl_six").hide();
				$("#TstBbl_six").css({"top":"302px","left":"153px"});
				});
				});});});}
$("#NextBtnTwo_groupTwoTestTwo,#nextBtnText_groupTwoTestTwo").click(function (){
	
	$("#ExpThree").show();
	$("#ExpTwo,#ExpOne").hide();
	$('#Dropbox_conformation_test_ID ').removeAttr('disabled');
	sceneFlag=3;
	});
	//function for stop bubble.
	function StopBBl(){
		
		clearInterval(bblone);
			clearInterval(bbltwo);
	$("#Bbl_sctnOne").hide();
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").stop(true);
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").stop(true);
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").hide();
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").hide();
		}
	function groupTwoTestInitfn(){
			$("#DropperOne_groupTwoTest").draggable({revert:true,revertDuration:0});
			$("#DropperOne_groupTwoTest").stop(true);
			$("#DropOne_groupTwoTest").css({"visibility":"hidden","top":"126px"});
			$("#DropperOne_groupTwoTest").draggable({disabled:false});
			$("#DropperOne_groupTwoTest").css({"cursor":"pointer"});
			$("#NextBtnTwo_groupTwoTest,#nextBtnText_groupTwoTest").css({"visibility":"hidden"});
			$("#ExpTwo").hide();
			$("#ExpOne").show();
			$("#saltsolution").show();	
			$("#saltsolution").css({"top":"214px","left":"168px","height":"25px","opacity":"0.5"});
			$("#groupTwoTestDIv").show();
			$("#DrggTestub").draggable({revert:true,revertDuration:0});
			$("#DrggTestub").draggable({disabled:false});
			$("#DrggTestub").css({"left":"56px","top":"175px","cursor":"pointer"});
			$("#DrggTestub").removeClass('testtub_rotate testtub_transition');
			clearInterval(flaming);	
			$('.flame1_groupTwoTest').hide();
			$("#flame_groupTwoTest").hide();
			$("#ExpThree").hide();
			$("#NextBtnTwo_groupTwoTestTwo,#nextBtnText_groupTwoTestTwo").css({"visibility":"hidden"});
			$("#Burner_SwtchgroupTwoTest").unbind( "click");
			$("#Burner_SwtchgroupTwoTest").css({"cursor":"default"});
			$("#DrggTestubSolution_groupTwoTest").css({"borderTopLeftRadius":"0em"});
			clearInterval(bblone);
			clearInterval(bbltwo);
			$("#DrggTestub").removeClass('testtub_rotate testtub_transition');
			$("#Bbl_sctnOne").hide();
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").stop(true);
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").stop(true);
	$("#kippsBbl_one,#kippsBbl_two,#kippsBbl_three,#kippsBbl_four,#kippsBbl_five,#kippsBbl_six").hide();
	$("#TstBbl_one,#TstBbl_two,#TstBbl_three,#TstBbl_four,#TstBbl_five,#TstBbl_six").hide();
	$("#KippsapparatusTopSolution").css({"top":"8px"});
	$("#KippsapparatusBottomSolution").css({"top":"30px"});
	$("#kippsclose_groupTwoTest").css({"top":"200px","left":"270px","cursor":"default"});
	$("#kippsclose_groupTwoTestOne").hide();
    $("#kippsclose_groupTwoTestTwo").show();
	clickFlag=1;
	sceneFlag=1;
	StopBBl();
	$("#kippsclose_groupTwoTest").unbind( "click");
		}
	}