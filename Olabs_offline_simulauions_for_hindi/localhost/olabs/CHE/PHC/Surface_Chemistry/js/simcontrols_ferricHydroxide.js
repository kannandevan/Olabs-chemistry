var flamingferric;
var scene=1;
var fogAnimationIntvl;
var flaskRvrt;
var Intfrc;
var degree4_frc=0;
var degFrc=720;
var sceneFlag=false;
var sceneSection_Ferric=1;
// var colorChangeTime;
	
	function ferricHydroxide(){
	
		$("#ferricHydroxide_canvas").show();
		$("#ferricHydroxideDlsy_canvas").hide();
		$("#label_FerricText").html(lablsFerric[0]);
		$("#bottlewhtLblText").html(lablsFerric[1]);
		$("#dialsOfFerric_btnText").html(lablsFerric[2]);
		$("#label_fourTextFerric").html(lablsFerric[3]);
		$("#label_threeTextFerric").html(lablsFerric[4]);
		$("#waterReset_btnTextFerric").html(lablsFerric[5]);
		$("#tooltipOneTxtFerric").html(lablsFerric[6]);
		$("#label_FerricWtr").html(lablsFerric[7])
			resetferricHydroxide();
		
		//flame function.
			function flamesferric(){

				if($('.flame1_ferric').css('display') == "block"){          
					$('.flame1_ferric,.flame3_ferric,.flame4_ferric').hide();
					$('.flame2_ferric').show();         
				}else if($('.flame2_ferric').css('display') == "block"){          
					$('.flame1_ferric,.flame2_ferric,.flame4_ferric').hide();
					$('.flame3_ferric').show();         
				}else if($('.flame3_ferric').css('display') == "block"){          
					$('.flame1_ferric,.flame3_ferric,.flame2_ferric').hide();
					$('.flame4_ferric').show();         
				}else{
					$('.flame2_ferric,.flame3_ferric,.flame4_ferric').hide();
					$('.flame1_ferric').show();
				}
			} 

		// fog animation
		function fogHide(){
			$("#fogTwo").animate({"opacity":"0.4"},1000,function(){$("#fogThree").animate({"opacity":"0.4"},1000,function(){fogAnimation();})});
			}
		function fogAnimation(){
			$("#fogOne").animate({"opacity":"1"},2000,function(){$("#fogTwo").animate({"opacity":"1"},2000,function(){$("#fogThree").animate({"opacity":"1"},2000,function(){fogHide();})})})
			}


function bblMove_frc(){
		$("#bubble1_Ferric").show()
		$("#bubble1_Ferric").animate({"top":"194px"},200,function(){$("#bubble1_Ferric").hide();$("#bubble1_Ferric").css({"top":"207px"});
		$("#bubble2_Ferric").show()
		$("#bubble2_Ferric").animate({"top":"194px"},200,function(){$("#bubble2_Ferric").hide(); $("#bubble3_Ferric").show();$("#bubble2_Ferric").css({"top":"207px"});
		$("#bubble3_Ferric").animate({"top":"194px"},200,function(){$("#bubble3_Ferric").hide();	$("#bubble4_Ferric").show();$("#bubble3_Ferric").css({"top":"207px"});
		$("#bubble4_Ferric").animate({"top":"194px"},200,function(){$("#bubble4_Ferric").hide();	$("#bubble4_Ferric").css({"top":"207px"});
			bblMove_frc();
				});
			});
		});
	});
}
		$("#conicalFlask_ContainerFerric").draggable({revert:true,revertDuration:0});
		$("#conicalFlask_ContainerFerric").draggable({disabled:false});
		$("#conicalFlask_DropAreaFrrc").droppable({
				accept: "#conicalFlask_ContainerFerric",
				drop: function( event, ui ) {
					$("#conicalFlask_ContainerFerric").draggable({revert:false});
					$("#conicalFlask_ContainerFerric").draggable({disabled:true});
					$("#conicalFlask_ContainerFerric").css({"top":"136px","left":"43px"});
					$("#burnerOn_ferric").css({"cursor":"pointer"});

					// Burnter On function
					$("#burnerOn_ferric").click(function(){

						$("#burnerOn_ferric").hide();
						$("#burnerOff_ferric").show();
						flamingferric = setInterval(flamesferric, 2);	//calling flame function\
						$('.flame1_ferric').show();
						$("#flame_ferric").show();
						fogAnimation();
						bblMove_frc();
						$("#dropper_Ferric").css({"cursor":"pointer"});
						$("#dropper_Ferric").draggable({revert:true,revertDuration:0});
						$("#dropper_Ferric").draggable({disabled:false});
						$("#conicalFlask_DropAreaFrrc").hide();
						$("#dropprDropArea_frrc").show()

						// Dropper function

						$("#dropprDropArea_frrc").droppable({
				accept: "#dropper_Ferric",
				drop: function( event, ui ) {
					$("#dropper_Ferric").draggable({revert:false});
					$("#dropper_Ferric").draggable({disabled:true});
					$("#dropper_Ferric").css({"top":"55px","left":"67px"});
					// Drops function
					$(".dropsSetTwo_frrc").show();
					$("#dropsTwofrrc_1").animate({"top":"207px"},100,function(){
							$("#dropsTwofrrc_2").animate({"top":"207px"},100,function(){
								$("#dropsTwofrrc_3").animate({"top":"207px"},100,function(){
									$("#dropsTwofrrc_1,#dropsTwofrrc_2,#dropsTwofrrc_3").hide();
									$("#dropsTwofrrc_1,#dropsTwofrrc_2,#dropsTwofrrc_3").css({"top":"140px"});
							});});});

						$("#dropperSolution_frc").animate({"top":"80px"},300,function(){
						
							// Result
							$("#conicalFlaskWtr_FerricTwo").animate({"opacity":"0.8"},15000,function(){
							$("#fogOne,#fogTwo,#fogThree").stop(true);
							$("#fogOne,#fogTwo,#fogThree").css({"opacity":"0"});
							clearInterval(flamingferric);
							$('.flame1_ferric').hide();
							$("#flame_ferric,#bubble1_Ferric").hide();
							$("#burnerOn_ferric").show();
							$("#burnerOff_ferric").hide();
							$("#bubble1_Ferric,#bubble2_Ferric,#bubble3_Ferric,#bubble4_Ferric").stop(true);
							$("#bubble1_Ferric,#bubble2_Ferric,#bubble3_Ferric,#bubble4_Ferric").hide();
							$("#inference").show();
							inferenceMsg=inferenceArray_Ferric[0];
							$("#dialsOfFerric_btn").show();
								

								$("#dialsOfFerric_btn").click(function(){
									sceneSection_Ferric=2;
								$("#inference").hide();
								$("#ferricHydroxide_canvas").hide();
								$("#ferricHydroxideDlsy_canvas").show();
								});	

							})


							$("#dropper_Ferric").css({"top":"158px","left":"443px"});


						});
					
				}
			});});
				}
			});

		// Dialysis of ferric sol
		$("#conicalFlask_ContainerFerricTwo").draggable({revert:true,revertDuration:0});
		$("#conicalFlask_ContainerFerricTwo").draggable({disabled:false});
		
		$("#conicalFlskDrop").droppable({
				accept: "#conicalFlask_ContainerFerricTwo",
				drop: function( event, ui ) {

					$("#conicalFlask_ContainerFerricTwo").draggable({revert:false});
					$("#conicalFlask_ContainerFerricTwo").draggable({disabled:true});	
					$("#conicalFlask_ContainerFerricTwo").css({
						'-ms-transform': 'rotate('+232+'deg)',
						'-ms-transform-origin': '50% 50%',
						'-webkit-transform': 'rotate('+232+'deg)',
						'-webkit-transform-origin': '50% 50%',
						'transform': 'rotate('+232+'deg)',
						'transform-origin': '50% 50%',
						'left':'92px',
						'top':'71px'
					});
					
					$("#conicalFlaskWtrfrcTwo").fadeOut(100);
					
					$("#beakerWtr_twoFerric").animate({"top":"230px","height":"71px"});
					
					$("#balloonOne_Ferric").fadeOut(500);
					$("#balloonFilled_Ferric").fadeIn(500);


					flaskRvrt=setTimeout(function(){
					
					$("#conicalFlask_ContainerFerricTwo").css({
						'-ms-transform': 'rotate('+0+'deg)',
						'-ms-transform-origin': '50% 50%',
						'-webkit-transform': 'rotate('+0+'deg)',
						'-webkit-transform-origin': '50% 50%',
						'transform': 'rotate('+0+'deg)',
						'transform-origin': '50% 50%',
						'left':'92px',
						'top':'71px'
					});
					$("#conicalFlask_ContainerFerricTwo").animate({"top":"229px","left":"177px"},200,function(){
						$("#clockTimeText").html(timeArray[1]);
						$("#clockContainer").show();
						Intfrc=setInterval(clockRotateFerric,9);

					});
					},1000);


				}
			});

// clock rotate function
function clockRotateFerric(){
		if(degree4_frc<=degFrc){
			degree4_frc++;
			$("#needleImg").css({'-webkit-transform-origin' :'0% 00%'});
			$("#needleImg").css({'-webkit-transform' : 'rotate('+degree4_frc+'deg)'});
			$("#needleImg").css({'transform-origin' : '3px 26px'});
			$("#needleImg").css({'transform' : 'rotate('+ degree4_frc +'deg)'});

			//Start the clock.
		}
		else
		{	
		//Stop clock.
			clearInterval(Intfrc);
			$("#clockContainer").hide();
			
				$("#dropper_threeFerric").draggable({disabled:false});
				$("#dropprColltn_frrc").show();
				$("#drprThree_collnFerric").show();
				$("#dropper_threeFerric").css({"cursor":"pointer"});

			$("#dropper_threeFerric").draggable({revert:true,revertDuration:0,drag:function(){
			// collisionFcc($("#dropprColltn_frrc"), $("#drprThree_collnFerric"));
			$("#tooltipOneFerric").hide();
			
			
				// $("#dropprColltn_frrc").hide();
				// $("#drprThree_collnFerric").hide();
				// $("#dropperSolution_threeFerric,#testTubeDropAreaFrc_1").show();
				
			}});

			
				$("#dropAreaInsideBkr_frrc").droppable({
				accept: "#dropper_threeFerric",
				drop: function( event, ui ) {

					$("#dropper_threeFerric").draggable({revert:false});
					$("#dropper_threeFerric").draggable({disabled:true});
					$("#dropper_threeFerric").animate({"left":"106px","top":"165px"},500,function(){
						$("#dropperSolution_threeFerric,#testTubeDropAreaFrc_1").show();
						$("#dropper_threeFerric").animate({"top":"115px","left":"472px"},500,function(){

							if(!sceneFlag){
						$("#dropper_threeFerric").css({"top":"120px","left":"471px"});	
					}
					else{

						$("#dropper_threeFerric").css({"top":"123px","left":"505px"});	

					}
					
					// Drops
					$("#dropsdylsfrrc_1").show();
					$("#dropsdylsfrrc_1").animate({"top":"284px"},300,function(){
						$("#dropsdylsfrrc_1").hide();
						$("#dropsdylsfrrc_1").css({"top":"202px"});
						$("#dropsdylsfrrc_2").show();
						$("#dropsdylsfrrc_2").animate({"top":"284px"},300,function(){
								if(!sceneFlag){
									$("#precipitate_one").fadeIn(100);
								}
								else{

								$("#precipitate_two").fadeIn(100);	
								}
							$("#dropsdylsfrrc_2").hide();
							$("#dropsdylsfrrc_2").css({"top":"202px"});
							$("#dropsdylsfrrc_3").show();
							$("#dropsdylsfrrc_3").animate({"top":"284px"},300,function(){
								$("#dropsdylsfrrc_3").hide();
								$("#dropsdylsfrrc_3").css({"top":"202px"});
								$("#dropper_threeFerric").css({"top":"192px","left":"438px"});
								$("#dropper_oneFerric").css({"cursor":"pointer"});
								$("#dropper_oneFerric").draggable({revert:true,revertDuration:0});
								$("#dropper_oneFerric").draggable({disabled:false});

								$("#dropper_threeFerric").css({"cursor":"default"});

								$("#testTubeDropAreaFrc_1").hide();
								$("#dropslvrNtrt_One").show();
								
							});
						});
					});
					//--- Drops
				$("#dropperSolution_threeFerric").animate({"top":"83px"},200,function(){
						$("#dropperSolution_threeFerric").hide();
						$("#dropperSolution_threeFerric").css({"top":"48px"});
						});

						});
					});
					
					
				}
			});
		}
	}
	

		// First testtube Silver Nitrate - Drop function
	$("#dropslvrNtrt_One").droppable({
				accept: "#dropper_oneFerric",
				drop: function( event, ui ) {
					$("#dropper_oneFerric").draggable({revert:false});
					$("#dropper_oneFerric").draggable({disabled:true});
					if(!sceneFlag){

						$("#dropper_oneFerric").css({"top":"120px","left":"471px"});
					}
					else{
					$("#dropper_oneFerric").css({"top":"123px","left":"505px"});	
					}

					$("#dropsdylsfrrc_1").show();
					$("#dropsdylsfrrc_1").animate({"top":"284px"},300,function(){
						$("#dropsdylsfrrc_1").hide();
						$("#dropsdylsfrrc_1").css({"top":"202px"});
						$("#dropsdylsfrrc_2").show();
						$("#dropsdylsfrrc_2").animate({"top":"284px"},300,function(){
							$("#precipitate_one").animate({"opacity":"1"},300);
							$("#dropsdylsfrrc_2").hide();
							$("#dropsdylsfrrc_2").css({"top":"202px"});
							$("#dropsdylsfrrc_3").show();
							$("#dropsdylsfrrc_3").animate({"top":"284px"},300,function(){
								$("#dropsdylsfrrc_3").hide();
								$("#dropsdylsfrrc_3").css({"top":"202px"});
								$("#dropper_oneFerric").css({"top":"186px","left":"317px"});
								$("#dropper_oneFerric").css({"cursor":"default"});
								$("#dropslvrNtrt_One").hide();
								if(!sceneFlag){
								inferenceMsg=inferenceArray_Ferric[1];
								$("#inference,#waterReset_btnFerric").show();
							}else{
								inferenceMsg=inferenceArray_Ferric[2];
								$("#inference").show();

							}
							});
						});
					});

					$("#dropperSolution_Ferric").animate({"top":"83px"},200,function(){
						$("#dropperSolution_Ferric").hide();
						$("#dropperSolution_Ferric").css({"top":"48px"});
						});

				}
			});

			// Water Reset function

			$("#waterReset_btnFerric").click(function(){
				sceneSection_Ferric=3;

				$("#tooltipOneFerric").show();
				$("#waterReset_btnFerric").hide();
				$("#conicalFlask_ContainerFerricTwo,#label_FerricWtr,#label_dstldWtrFerric").hide();

				$("#clockTimeText").html(timeArray[0]);
				$("#clockContainer").show();
				degree4_frc=0;
				degFrc=720;
				clearInterval(Intfrc);	
				Intfrc=setInterval(clockRotateFerric,9);
				$("#inference").hide();
				sceneFlag=true
				collisionValFrc=false;
				Intfrc;
				$("#testTubeDropAreaFrc_1,#dropslvrNtrt_One").css({"left":"492px"});
				$(".dropsSetdyls_frrc").css({"left":"510px"});

				
			});


	// Function End	
	};

	// Reset function
	function resetferricHydroxide(){
		sceneFlag=false
		degree4_frc=0;
		degFrc=720;
		clearInterval(flamingferric);
		$("#conicalFlask_ContainerFerricTwo,#label_FerricWtr,#label_dstldWtrFerric").show();
		$("#conicalFlask_ContainerFerric").css({"top":"217px","left":"240px"});
		$("#conicalFlask_ContainerFerric").draggable({revert:true,revertDuration:0});
		$("#conicalFlask_ContainerFerric").draggable({disabled:false});
		$("#bubble1_Ferric,#bubble2_Ferric,#bubble3_Ferric,#bubble4_Ferric,#flame_ferric,#conicalFlaskWtr_FerricTwo").stop(true);
		$(".flame1_ferric,.flame2_ferric,.flame3_ferric,.flame4_ferric,#dropperSolution_frc").stop(true);
		$("#flame_ferric,#bubble1_Ferric,#bubble2_Ferric,#bubble3_Ferric,#bubble4_Ferric").hide();
		$(".flame1_ferric,.flame2_ferric,.flame3_ferric,.flame4_ferric").hide();
		$('.flame1_ferric').hide();
		$("#burnerOn_ferric").show();
		$("#burnerOff_ferric").hide();
		$("#conicalFlaskWtr_FerricTwo").css({"opacity":"0"});
		$("#dropperSolution_frc").css({"top":"49px"});
		$("#ferricHydroxideDlsy_canvas").hide();

		$("#dropper_Ferric").draggable({revert:false});
		$("#dropper_Ferric").draggable({disabled:true});
		$("#fogOne,#fogTwo,#fogThree").stop(true);
		$("#fogOne,#fogTwo,#fogThree").css({"opacity":"0"});
		$("#conicalFlask_DropAreaFrrc").show();
		$("#dialsOfFerric_btn").hide();	
			$("#dropprDropArea_frrc").hide();
			$("#conicalFlask_ContainerFerricTwo").draggable({revert:true,revertDuration:0});
			$("#conicalFlask_ContainerFerricTwo").draggable({disabled:false});
			$("#conicalFlask_ContainerFerricTwo").css({"top":"229px","left":"177px"});
			$("#conicalFlaskWtrfrcTwo").show();
			$("#beakerWtr_twoFerric").css({"top":"234px","height":"66px"});
			$("#beakerWtr_twoFerric,#conicalFlask_ContainerFerricTwo").stop(true);
			$("#balloonOne_Ferric").show();
			$("#balloonFilled_Ferric").hide();
			

			$("#clockTimeText").html(timeArray[1]);
			$("#dropper_threeFerric").draggable({revert:false});
			$("#dropper_threeFerric").draggable({disabled:true});	
			$("#dropper_threeFerric").css({"cursor":"default"});
			$("#dropprColltn_frrc").hide();
			$("#drprThree_collnFerric").hide();
			$("#dropperSolution_threeFerric").hide();
			$("#dropperSolution_threeFerric").css({"top":"48px"});
			$("#dropsdylsfrrc_1,#dropsdylsfrrc_2,#dropsdylsfrrc_3").hide();
			$("#dropsdylsfrrc_1,#dropsdylsfrrc_2,#dropsdylsfrrc_3,#dropperSolution_threeFerric,#precipitate_one,#dropperSolution_Ferric").stop(true);
			$("#dropper_oneFerric").draggable({revert:false});
			$("#dropper_oneFerric").draggable({disabled:true});
			$("#dropslvrNtrt_One").hide();
			$("#conicalFlask_ContainerFerricTwo").css({
						'-ms-transform': 'rotate('+0+'deg)',
						'-ms-transform-origin': '50% 50%',
						'-webkit-transform': 'rotate('+0+'deg)',
						'-webkit-transform-origin': '50% 50%',
						'transform': 'rotate('+0+'deg)',
						'transform-origin': '50% 50%',
						
					});

			clearInterval(flaskRvrt);
			$("#clockContainer,#waterReset_btnFerric,#precipitate_one,#tooltipOneFerric,#dropslvrNtrt_One,#precipitate_two").hide();
			
			$("#precipitate_one").css({"opacity":"0.5"});
			$("#dropperSolution_Ferric").show();
			$("#dropperSolution_Ferric").css({"top":"49px"});
			$("#testTubeDropAreaFrc_1,#dropslvrNtrt_One").css({"left":"457px"});
			$(".dropsSetdyls_frrc").css({"left":"476px"});
			sceneSection_Ferric=1;


	}
