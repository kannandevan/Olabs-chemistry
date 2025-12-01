var flamingStarch;
var degree4=0;
var deg=720;
var Int;
var scene=1;
var testTube_flag=1;
var sceneSection=1;
var gAngle=0;
var turningRight=true;
var bblMoveIntvl;
var shwclocktimeOut;
var btnShow;
function starch(){
		resetStarch();
		clearInterval(bblMoveIntvl);
		$("#starchSln_canvas").show();
		$("#clockTimeText").html(timeArray[0]);
		$("#label_StarchPst").html(lablsStarch[0]);
		$("#label_StarSol").html(lablsStarch[1]);
		$("#dialsOfStrh_btnText").html(lablsStarch[2]);
		$("#label_fourText").html(silverNtrt);
		$("#label_fiveText").html(iodineSln);
		$("#waterReset_btnText").html(lablsStarch[3]);
		$("#tooltipOneTxt").html(lablsStarch[4]);
		$("#label_StarchWtr").html(lablsStarch[5]);
		$("#label_threeText").html(water);
		//flame function.
			function flamesStarch(){

				if($('.flame1_starch').css('display') == "block"){          
					$('.flame1_starch,.flame3_starch,.flame4_starch').hide();
					$('.flame2_starch').show();         
				}else if($('.flame2_starch').css('display') == "block"){          
					$('.flame1_starch,.flame2_starch,.flame4_starch').hide();
					$('.flame3_starch').show();         
				}else if($('.flame3_starch').css('display') == "block"){          
					$('.flame1_starch,.flame3_starch,.flame2_starch').hide();
					$('.flame4_starch').show();         
				}else{
					$('.flame2_starch,.flame3_starch,.flame4_starch').hide();
					$('.flame1_starch').show();
				}
			} 


	function clockRotate(){
		if(degree4<=deg){
			degree4++;
			$("#needleImg").css({'-webkit-transform-origin' :'0% 00%'});
			$("#needleImg").css({'-webkit-transform' : 'rotate('+degree4+'deg)'});
			$("#needleImg").css({'transform-origin' : '3px 26px'});
			$("#needleImg").css({'transform' : 'rotate('+ degree4 +'deg)'});

			//Start the clock.
		}
		else
		{	
		//Stop clock.
			clearInterval(Int);

			burnerOff();
			$("#clockContainer").hide();
			$("#burnerOff").hide();
			$("#burnerOn").show();
			if(scene==1){
				$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").hide();
				$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").stop(true);
				$("#glsRdDropArea,#beakerDropArea").hide();
				$("#beaker_Container").css({"cursor":"pointer"})
				$("#beaker_Container").draggable({revert:true});
				$("#beaker_Container").draggable({disabled:false});
				$("#beaker_Container").css({"top":"122px","left":"34px"});
				$("#funnelDropAre").show();
			}
			else if(scene==2){				
					$("#dropper_three").draggable({revert:true});
					$("#dropper_three").draggable({disabled:false});
					$("#dropper_three").css({"cursor":"pointer"});
					$("#dropper_three").draggable({containment:"#canvasBox",revertDuration:0,
						drag:function(){
							$("#tooltipOne").hide();
							$("#dropperSolution_three").hide();
							$("#inference").hide();
							if(testTube_flag==4){
								$('#drprThree_colln').hide();
								$('#beaker_colln').hide();
								$("#testTube_DropAreaTwo,#testTube_DropAreaThree").hide();
								$("#testTube_DropAreaOne").css({"left":"453px"});
								$("#dropper_one").draggable({revert:true});
								$("#dropper_one").draggable({disabled:false});
							}
								
							
						},
						revert:function(){
						$("#dropper_three").css({"top":"192px","left":"438px"});
							}
						});

					$("#dropAreaInsdBkr_starch").droppable({
							accept: "#dropper_three",
							drop: function( event, ui ) {
								$("#dropper_three").draggable({revert:false});
								$("#dropper_three").draggable({disabled:true});
								$("#dropper_three").css({"top":"164px","left":"106px"});
								$('#drprThree_colln').hide();
								$('#beaker_colln').hide();
								$("#dropperSolution_three,#testTube_DropAreaOne").show();
								$("#dropperSolution_three").animate({"top":"48px"},200,function(){
									if(testTube_flag==1){
										$("#dropper_three").animate({"top":"119px","left":"470px"},300,function(){
										moveDrops($("#testTubeSln_one"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
										$("#testTube_DropAreaTwo").show();
										});
									}
									else if(testTube_flag==3){

										$("#dropper_three").animate({"top":"117px","left":"505px"},300,function(){
										
										$("#testTube_DropAreaTwo").show();
										moveDrops($("#testTubeSln_two"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
										});

									}
									else if(testTube_flag==4){
										$("#dropper_three").animate({"top":"119px","left":"470px"},300,function(){
										// moveDrops($("#testTubeSln_one"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
										$("#testTube_DropAreaTwo").show();
										
										moveDrops($("#testTubeSln_one"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
										});
										

									}
								

								});
								}

						});
			}

			
			}
	}

	function burnerOn(){
				flamingStarch = setInterval(flamesStarch, 2);	//calling flame function
				$('.flame1_starch').show();
				$("#flame").show();
				$("#burnerOff").show();
				$("#burnerOn").hide();
			}

			//Function for switch off the burner.
	function burnerOff(){
		
		clearInterval(flamingStarch);								
		$("#flame").hide();
		}

			$("#beaker_Container").draggable({revert:true,containment:"#canvasBox",revertDuration:0,

				drag:function(){


				}

			});


function bblMove(){
		
		
		$("#bubble_1").show()
		$("#bubble_1").animate({"top":"54px"},200,function(){$("#bubble_1").hide();$("#bubble_1").css({"top":"83px"});
		$("#bubble_2").show()
		$("#bubble_2").animate({"top":"54px"},200,function(){$("#bubble_2").hide(); $("#bubble3_Ferric").show();$("#bubble_2").css({"top":"83px"});
		$("#bubble_3").animate({"top":"54px"},200,function(){$("#bubble_3").hide();$("#bubble_4").show();$("#bubble_3").css({"top":"83px"});
		$("#bubble_4").animate({"top":"54px"},200,function(){$("#bubble_4").hide();	$("#bubble_4").css({"top":"83px"});
			bblMove();
				});
			});
		});
	});
}

	$("#beakerDropArea").droppable({
				accept: "#beaker_Container",
				drop: function( event, ui ) {
					$("#beaker_Container").draggable({revert:false});
					$("#beaker_Container").draggable({disabled:true});
					$("#beaker_Container").css({"top":"122px","left":"34px"});
					 $("#burnerOn").css({"cursor":"pointer"});

					 $("#burnerOn").click(function(){
					 	burnerOn();
					 	bblMove();
					 	
						$("#watchGlsDropArea").show();
						$("#watchGlssContainer").css({"cursor":"pointer"});
						$("#watchGlssContainer").draggable({revert:true});
						$("#watchGlssContainer").draggable({disabled:false});
						$("#watchGlssContainer").draggable({containment:"#canvasBox",revertDuration:0,

							drag:function(){
								$("#watchglass_Shadow").hide();

								},
							revert:function(){

								$("#watchglass_Shadow").show();
								$("#watchGlssContainer").css({"top":"283px","left":"170px"});
							}

					});

					});
				}
			});

	$("#watchGlsDropArea").droppable({
				accept: "#watchGlssContainer",
				drop: function( event, ui ) {
					$("#watchGlssContainer").draggable({revert:false});
					$("#watchGlssContainer").draggable({disabled:true});
					$("#watchGlssContainer").css({"cursor":"default"});
					$("#watchGlssContainer").css({"top":"78px","left":"72px"});
					$("#watchGlssContainer").addClass("rotateDiv");
					$("#gum_Paste").fadeOut(100,function(){
						$("#gum_Paste").hide();
					});
					$("#starch_PastePowder").show();

					$("#strchPwdr").animate({"top":"108px"},1500);
					$("#starch_PasteSecond").css({"top":"206px"});

					 $("#starch_PasteSecond").fadeIn(1400,function(){
						 	$("#watchGlssContainer").removeClass("rotateDiv");	
							$("#watchGlssContainer").css({"top":"283px","left":"170px"});
						 	$("#glassRodDiv").css({"cursor":"pointer"});
							$("#glassRodDiv").draggable({revert:true});
							$("#glassRodDiv").draggable({disabled:false});
							$("#glsRdDropArea").show();
							$("#glassRodDiv").draggable({containment:"#canvasBox",revertDuration:0,

							drag:function(){
								
								},
							revert:function(){

							$("#glassRodDiv").css({"top":"187px","left":"414px"});
							}


							});
						 });
				}

			});

function stirGlassRod(ID){//Stiring of glass rod
	$(ID).css({
		'-ms-transform': 'rotate('+gAngle+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+gAngle+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+gAngle+'deg)',
		'transform-origin': '50% 50%'
	});
	if(turningRight)
		gAngle++;
	else{
		gAngle--;
	}
	if(gAngle==15){
		turningRight=false;
	}
	if(gAngle==-15){
		turningRight=true;
	}
	clrGlassRod=setTimeout(function(){stirGlassRod(ID)},8);
}


$("#glsRdDropArea").droppable({
				accept: "#glassRodDiv",
				drop: function( event, ui ) {
					$("#glassRodDiv").draggable({revert:false});
					$("#glassRodDiv").draggable({disabled:true});
					$("#glassRodDiv").css({"cursor":"default"});
					$("#glassRodDiv").css({"top":"90px","left":"71px"});


					stirGlassRod($("#glassRodDiv"));

	setTimeout(function(){
		clearInterval(clrGlassRod)

	},5000)
	shwclocktimeOut =setTimeout(function(){
		$("#glassRodDiv").css({
		'-ms-transform': 'rotate('+207+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+207+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+207+'deg)',
		'transform-origin': '50% 50%'
	});
		$("#glassRodDiv").css({"top":"36px","left":"517px"});
			$("#clockContainer").show();
				Int=setInterval(clockRotate,9);	
	},5020);
				   
				$("#starch_PasteSecond").fadeOut(7000);
				$("#beaker_Water").animate({"opacity":"0.6"},7000);
				
					}


			});


		$("#funnelDropAre").droppable({
				accept: "#beaker_Container",
				drop: function( event, ui ) {
				$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").hide()
				$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").stop(true)
				$("#beaker_Container").draggable({revert:false})
				$("#beaker_Container").draggable({disabled:true})
				$("#conclFlskwaterFlow_wtr").show()
				$("#conclFlskwaterFlow_wtr").animate({"top":"85px"},500)
				$("#beaker_Container").css({"top":"53px","left":"408px"})
				$("#beaker_Container").addClass("beakerSecondRtn")
				$("#beaker_Water").fadeOut(300)
				$("#waterFive").fadeIn(600,function(){
					$("#beaker_Container").removeClass("beakerSecondRtn");
					$("#beaker_Container").css({"top":"220px","left":"285px","cursor":"default"});
					$("#label_Two,#label_StarSol").fadeIn(0,function(){
						
						btnShow=setTimeout(function(){
							$("#dialsOfStrh_btn").show();
						},1000)
						

					$("#glassRodDiv").css({
							'-ms-transform': 'rotate('+0+'deg)',
							'-ms-transform-origin': '50% 50%',
							'-webkit-transform': 'rotate('+0+'deg)',
							'-webkit-transform-origin': '50% 50%',
							'transform': 'rotate('+0+'deg)',
							'transform-origin': '50% 50%'
						});
				  				$("#glassRodDiv").css({"top":"187px","left":"414px"});
				 				$("#dialsOfStrh_btn").click(function(){

				 					$("#starchSln_canvas").hide();
				  					$("#starchSlnDialysis_canvas").show();
				  					$("#conicalFlask_Container").css({"cursor":"pointer"});
				  					$("#conicalFlask_Container").draggable({revert:true});
									$("#conicalFlask_Container").draggable({disabled:false});
									sceneSection=2;
				  				});
				  			});
				});
				
				
				}
			});
			

			$("#conicalFlask_Container").draggable({containment:"#canvasBox",revertDuration:0,

							drag:function(){
								
								$("#conicalFlask_Shadow").hide();
								},
							revert:function(){

							$("#conicalFlask_Container").css({"top":"229px","left":"177px"});
							$("#conicalFlask_Shadow").show();
							}

					});

				$("#dropArea_StrchDyls").droppable({
				accept: "#conicalFlask_Container",
				drop: function( event, ui ) {
					$("#conicalFlask_Container").draggable({revert:false});
					$("#conicalFlask_Container").draggable({disabled:true});
					$("#conicalFlask_Container").css({"cursor":"default"});
					$("#conicalFlask_Container").css({"left":"106px","top":"81px"});
					$("#conicalFlask_Container").addClass("conicalFlask_ContainerRt");
				$("#conicalFlaskWtr").fadeOut(100);
				$("#waterTwo_1").animate({"opacity":"0"},115);
				$("#waterTwo_2").animate({"opacity":"0"},225);
				$("#waterTwo_2").fadeOut(500,function(){
				$("#balloonOne").fadeOut(500);
				$("#balloonFilled").fadeIn(500);
				$("#beakerWtr_two").animate({"top":"230px","height":"70px"},500,function(){
					$("#conicalFlask_Container").removeClass("conicalFlask_ContainerRt");
					$("#conicalFlask_Container").css({"top":"229px","left":"177px"});
					$("#conicalFlask_Shadow").show();
					$("#clockTimeText").html(timeArray[1])
					$("#clockContainer").show();
					degree4=0;
					deg=720;
				    clearInterval(Int);	
				   Int=setInterval(clockRotate,9);
				   scene=2;

				});
				
				});

				}


			});

//=======
function moveDrops(solution,dropperSln,dropper,dropOne,dropTwo,dropThree,drpr_top,drpr_left){

	dropOne.show();
	dropperSln.animate({"top":"81px"},500);
	dropOne.animate({"top":"283"},300,function(){
	dropOne.hide();
	dropOne.css({"top":"200px"});
	dropTwo.show();
	dropTwo.animate({"top":"283"},300,function(){
		dropTwo.css({"top":"200px"});
		dropTwo.hide();
		dropThree.show();
		dropThree.animate({"top":"283"},300,function(){
		dropThree.css({"top":"200px"});
		dropThree.hide();
		solution.show();
		dropper.animate({"top":drpr_top+"px","left":drpr_left+"px"},function(){
		if(testTube_flag==1){
				$("#dropper_two").css({"cursor":"pointer"});
				$("#dropper_two").draggable({revert:true});
				$("#dropper_two").draggable({disabled:false});
				$("#dropper_two").draggable({revert:true,containment:"#canvasBox",revertDuration:0,
					drag:function(){}});
				
			}
			else if(testTube_flag==2){

				$("#inference").show();
				inferenceMsg=inferenceArray[0];
				$("#dropper_three").draggable({revert:true});
				$("#dropper_three").draggable({disabled:false});
				$("#testTube_DropAreaOne").show();
				$("#testTube_DropAreaOne").css({"left":"491px"});
				$('#drprThree_colln').show();
				$('#beaker_colln').show();
				$(".dropsSet").css({"left":"510px"});
				$("#testTube_DropAreaTwo,#testTube_DropAreaThree,#testTube_DropAreaOne").hide();

				testTube_flag=3
				}
				else if(testTube_flag==3){
				$("#dropper_three").draggable({revert:false});
				$("#dropper_three").draggable({disabled:true});
				$("#dropper_one").css({"cursor":"pointer"});
				$("#dropper_one").draggable({revert:true});
				$("#dropper_one").draggable({disabled:false});
				$("#testTube_DropAreaTwo").hide();
				
				$("#testTube_DropAreaThree").show();
				testTube_flag=4

				}
				else if(testTube_flag==4){
					
					$("#testTube_DropAreaOne").css({"left":"453px"});
					$("#testTube_DropAreaThree").show();
					$("#testTube_DropAreaTwo").hide();
					$("#testTube_DropAreaThree").css({"left":"453px"});
					testTube_flag=5;
					
				}
		})
	});
		
	})
	})
}

$("#testTube_DropAreaOne").droppable({
	accept: "#dropper_three",
	drop:function(){
		$("#dropper_three").draggable({revert:false});
		$("#dropper_three").draggable({disabled:true});
		if(testTube_flag==1){
		$("#dropper_three").css({"top":"116px","left":"470px"});	
		moveDrops($("#testTubeSln_one"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
		}
			else if(testTube_flag==2){
				$("#dropper_three").css({"top":"122px","left":"506px"});
				moveDrops($("#testTubeSln_two"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
			}
			else if(testTube_flag==3){
				$("#dropper_three").css({"top":"122px","left":"506px"});
				moveDrops($("#testTubeSln_two"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
			}
			else if(testTube_flag==4){
				$("#dropper_three").css({"top":"122px","left":"470px"});
				moveDrops($("#testTubeSln_one"),$("#dropperSolution_three"),$("#dropper_three"),$("#drops_1"),$("#drops_2"),$("#drops_3"),192,438);
				
			}
		$("#testTube_DropAreaOne").hide();
		$("#testTube_DropAreaTwo").show();

		
	}
});

// Iodine solution 

$("#testTube_DropAreaTwo").droppable({
		accept: "#dropper_two",
		drop:function(){
			$("#dropper_two").draggable({revert:false});
			$("#dropper_two").draggable({disabled:true});
			$("#dropper_two").css({"top":"116px","left":"470px"});
			moveDrops($("#testTubeSln_one"),$("#dropperSolution_Idn"),$("#dropper_two"),$("#dropsTwo_1"),$("#dropsTwo_2"),$("#dropsTwo_3"),186,376);
			testTube_flag=2;
			}
				});


$("#testTube_DropAreaThree").droppable({
		accept: "#dropper_one",
		drop:function(){
			$("#dropper_one").draggable({revert:false});
			$("#dropper_one").draggable({disabled:true});
			if(testTube_flag==5){
				$("#dropper_one").css({"top":"116px","left":"470px"});	
			}
			else if(testTube_flag==4){
				$("#dropper_one").css({"top":"119px","left":"506px"});	
			}

			moveDrops($("#testTubeSln_one"),$("#dropperSolution_SlvrNtrt"),$("#dropper_one"),$("#drops_1"),$("#drops_2"),$("#drops_3"),186,286);
			$("#testTubeSln_two").animate({"opacity":"1"},1000,function(){

				if(testTube_flag==5){
				
				inferenceMsg=inferenceArray[2];
				$("#inference").show();
				}
			else if(testTube_flag==4){
				
				$("#inference").show();
				inferenceMsg=inferenceArray[1];
				$("#waterReset_btn").show();

				
			}	

			})

			}
				});

		$("#waterReset_btn").click(function(){
			sceneSection=3;
			$("#testTubeSln_one").css({"display":"none","opacity":"0.5"});
			$("#dropperSolution_SlvrNtrt").css({"top":"50px"});
			$("#tooltipOne").show();
			$("#clockTimeText").html(timeArray[0]);
			$("#waterReset_btn,#bottleBrown_two,#conicalFlask_Container,#conicalFlask_Shadow,#dropper_two,#label_fiveText,#label_five").hide();
			$("#clockContainer").show();
			degree4=0;
			deg=720;
			clearInterval(Int);	
			Int=setInterval(clockRotate,9);
			$("#inference").hide();
			scene=2;
			$('#drprThree_colln').show();
			$('#beaker_colln,#testTube_DropAreaTwo').show();
			testTube_flag=4;
			$(".dropsSet").css({"left":"475px"});
		});

	};
function resetStarch(){
		$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").hide();
		$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").stop(true);
		clearInterval(flamingStarch);		
		$("#beaker_Container").css({"top":"220px","left":"285px","cursor":"pointer"});
		$("#flame").hide();
		$("#watchGlssContainer").css({"top":"283px","left":"170px"});
		$("#burnerOff").hide();
		$("#burnerOn").show();
		$("#gum_Paste").css({"top":"-2px","left":"21px"});
		$("#gum_Paste").show();
		$("#starch_PasteSecond").hide();
		$("#starch_PasteSecond").css({"top":"206px","left":"50px"});
		clearInterval(clrGlassRod);
		$("#glassRodDiv").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%'
		});
		$("#glassRodDiv").css({"top":"187px","left":"414px"})
		
		clearTimeout(glsMove);
		clearTimeout(rotateGlsrod);
		clearTimeout(shwclocktimeOut);
		scene=1;
		$("#beaker_colln,#drprThree_colln").show();
		$("#beaker_Water").css({"opacity":"0.3"});
		$("#beaker_Water").show();
		$("#beaker_Water").stop();
		$("#beakerDropArea,#conicalFlaskWtr").show();
		$("#watchGlsDropArea").hide();
		$("#glsRdDropArea,#dialsOfStrh_btn,#testTube_DropAreaTwo").hide();
		$("#funnelDropAre").hide();
		$("#clockContainer").hide();
		clearInterval(Int);
		$("#inference").hide();
		$("#waterFive").hide();
		$("#beaker_Container").draggable({"revert":true});
		$("#beaker_Container").draggable({"disabled":false});
		$("#label_Two,#label_StarSol").hide();
		degree4=0;
		deg=720;
		testTube_flag=1;
		$("#bubble_1").stop(true);
		$("#bubble_1").css({"top":"83px"});
		$("#bubble_2").stop(true);
		$("#bubble_2").css({"top":"83px"});
		$("#bubble_3").stop(true);
		$("#bubble_3").css({"top":"83px"});
		$("#bubble_4").stop(true);
		$("#bubble_4").css({"top":"83px"});
		$(".bubbles").hide();
		$(".flame1_starch,.flame2_starch,.flame3_starch,.flame4_starch").hide();
		$(".flame1_starch,.flame2_starch,.flame3_starch,.flame4_starch").stop(true)
		$("#bbldiv").hide();

		$("#balloonOne").show();
		$("#balloonFilled,#testTube_DropAreaOne,#dropperSolution_three").hide();
		$("#beakerWtr_two").css({"top":"234px","height":"66px"});
		$("#dropper_three,#dropper_two,#dropper_one").draggable({revert:false});
		$("#dropper_three,#dropper_two,#dropper_one").draggable({disabled:true});
		$("#dropper_three,#dropper_two,#dropper_one").css({"cursor":"default"});
		$("#testTubeSln_one").css({"display":"none","opacity":"0.5"});
		
		$("#testTube_DropAreaOne").css({"left":"453px"});
		$("#dropperSolution_Idn,#dropperSolution_SlvrNtrt").css({"top":"50px"});
		$(".dropsSet").css({"left":"475px"});
		$(".dropsSetTwo").css({"left":"477px"});
		$("#testTube_DropAreaThree").css({"left":"491px"});
		$("#testTube_DropAreaThree,#testTubeSln_two,#waterReset_btn,#tooltipOne").hide();

		$("#testTubeSln_two").css({"display":"none","opacity":"0.5"});
		$("#starch_PastePowder").hide();
		$("#strchPwdr").css({"top":"0px"});
		
		$("#conclFlskwaterFlow_wtr").css({"top":"-48px"});
		$("#conclFlskwaterFlow_wtr").hide();
		$("#conclFlskwaterFlow_wtr").stop(true);
		sceneSection=1;
		clearInterval(btnShow);
		$("#bottleBrown_two,#conicalFlask_Container,#conicalFlask_Shadow,#dropper_two,#label_fiveText,#label_five").show();
	};
