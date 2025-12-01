var flaming;
var degree4=0;
var deg=720;
var Int;
var scene=1;
var testTube_flag=1;
var gAngle=0;
var turningRight=true;
var clrGlassRod;
var glsMove;
var rotateGlsrod;
	
	function gum(){
		resetGum();
		$("#gumSln_canvas").show();
		$("#clockTimeText").html(timeArray[0]);
		$("#label_gumPst").html(lablsGum[0]);
		$("#label_GumSol").html(lablsGum[1]);
		$("#label_GumhWtr").html(lablsStarch[5]);
		

		//flame function.
			function flamesGum(){

				if($('.flame1_gum').css('display') == "block"){          
					$('.flame1_gum,.flame3_gum,.flame4_gum').hide();
					$('.flame2_gum').show();         
				}else if($('.flame2_gum').css('display') == "block"){          
					$('.flame1_gum,.flame2_gum,.flame4_gum').hide();
					$('.flame3_gum').show();         
				}else if($('.flame3_gum').css('display') == "block"){          
					$('.flame1_gum,.flame3_gum,.flame2_gum').hide();
					$('.flame4_gum').show();         
				}else{
					$('.flame2_gum,.flame3_gum,.flame4_gum').hide();
					$('.flame1_gum').show();
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
			$("#burnerOffGum").hide();
			$("#burnerOnGum").show();
			$("#glsRdDropArea_Gum,#beakerDropArea_Gum").hide();
			$("#beaker_ContainerGum").css({"cursor":"pointer"})
			$("#beaker_ContainerGum").draggable({revert:true});
			$("#beaker_ContainerGum").draggable({disabled:false});
			$("#beaker_ContainerGum").css({"top":"122px","left":"34px"});
			$("#funnelDropAre_Gum").show();

			}
	}


	var collisionVal=false//Collision Detection between two Divs
	function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
	 if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return collisionVal=false;
      return collisionVal=true;
	}
			


	function burnerOnGum(){
		flaming = setInterval(flamesGum, 2);	//calling flame function
		$('.flame1_gum').show();
		$("#flame_gum").show();
		$("#burnerOffGum").show();
		$("#burnerOnGum").hide();
	}

	//Function for switch off the burner.
	function burnerOff(){
		clearInterval(flaming);								
		$("#flame_gum").hide();
	}

	$("#beaker_ContainerGum").draggable({revert:true,containment:"#canvasBox",revertDuration:0,drag:function(){}});

			$("#beakerDropArea_Gum").droppable({
				accept: "#beaker_ContainerGum",
				drop: function( event, ui ) {
					$("#beaker_ContainerGum").draggable({revert:false});
					$("#beaker_ContainerGum").draggable({disabled:false});
					$("#beaker_ContainerGum").css({"top":"122px","left":"34px"});
					 $("#burnerOnGum").css({"cursor":"pointer"});

					 $("#burnerOnGum").click(function(){
					 	burnerOnGum();
						$("#watchGlsDropArea_Gum").show();
						$("#watchGlssContainerGum").css({"cursor":"pointer"});
						$("#watchGlssContainerGum").draggable({revert:true});
						$("#watchGlssContainerGum").draggable({disabled:false});
						$("#watchGlssContainerGum").draggable({containment:"#canvasBox",revertDuration:0,

							drag:function(){
								$("#watchglass_ShadowGum").hide();

								},
							revert:function(){

								$("#watchglass_ShadowGum").show();
								$("#watchGlssContainerGum").css({"top":"283px","left":"170px"});
							}

					});

					});
				}
			});

	$("#watchGlsDropArea_Gum").droppable({
				accept: "#watchGlssContainerGum",
				drop: function( event, ui ) {



					$("#watchGlssContainerGum").draggable({revert:false});
					$("#watchGlssContainerGum").draggable({disabled:true});
					$("#watchGlssContainerGum").css({"cursor":"default"});
					$("#watchGlssContainerGum").css({"top":"78px","left":"72px"});
					$("#watchGlssContainerGum").addClass("rotateDiv");
					$("#gum_PasteTwo").fadeOut(100,function(){
						$("#gum_PasteTwo").hide();
					});
					$("#gum_PastePowder").show();

					$("#gumPwdr").animate({"top":"108px"},1500);
					$("#gum_PasteSecondTwo").css({"top":"206px"});

					 $("#gum_PasteSecondTwo").fadeIn(1400,function(){
						 	$("#watchGlssContainerGum").removeClass("rotateDiv");	
							$("#watchGlssContainerGum").css({"top":"283px","left":"170px"});
						 	$("#glassRodDiv_Gum").css({"cursor":"pointer"});
							$("#glassRodDiv_Gum").draggable({revert:true});
							$("#glassRodDiv_Gum").draggable({disabled:false});
							$("#glsRdDropArea_Gum").show();
							$("#glassRodDiv_Gum").draggable({containment:"#canvasBox",revertDuration:0,

							drag:function(){
								
								},
							revert:function(){

							$("#glassRodDiv_Gum").css({"top":"187px","left":"414px"});
							}


							});
						 });

				}

			});

//========

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
	if(gAngle==10){
		turningRight=false;
	}
	if(gAngle==-10){
		turningRight=true;
	}
	clrGlassRod=setTimeout(function(){stirGlassRod(ID)},10);
}
//===


$("#glsRdDropArea_Gum").droppable({
				accept: "#glassRodDiv_Gum",
				drop: function( event, ui ) {
					$("#glassRodDiv_Gum").draggable({revert:false});
					$("#glassRodDiv_Gum").draggable({disabled:true});
					$("#glassRodDiv_Gum").css({"cursor":"default"});
					$("#glassRodDiv_Gum").css({"top":"90px","left":"71px"});

stirGlassRod($("#glassRodDiv_Gum"));

	glsMove=setTimeout(function(){
		clearInterval(clrGlassRod)

	},5000)
	rotateGlsrod=setTimeout(function(){
		
		$("#glassRodDiv_Gum").css({
		'-ms-transform': 'rotate('+207+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+207+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+207+'deg)',
		'transform-origin': '50% 50%'
	});
		$("#glassRodDiv_Gum").css({"top":"36px","left":"517px"});
			$("#clockContainer").show();
				Int=setInterval(clockRotate,9);	
	},5020);

				$("#gum_PasteSecondTwo").fadeOut(7000);
				$("#beaker_WaterGum").animate({"opacity":"0.6"},7000);
				
				}


			});


		
$("#funnelDropAre_Gum").droppable({
				accept: "#beaker_ContainerGum",
				drop: function( event, ui ) {
					$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").hide();
					$("#bubble_1,#bubble_2,#bubble_3,#bubble_4").stop();
				$("#beaker_ContainerGum").draggable({revert:false});
				$("#beaker_ContainerGum").draggable({disabled:true});
				$("#beaker_ContainerGum").css({"top":"53px","left":"408px"});
				$("#conclFlskwaterFlow_wtrGum").show();
				$("#conclFlskwaterFlow_wtrGum").animate({"top":"85px"},500);
				
				$("#beaker_ContainerGum").addClass("beakerSecondRtn");
				 $("#beaker_WaterGum").fadeOut(300);
				
				$("#waterFive_gum").fadeIn(600,function(){
					$("#beaker_ContainerGum").removeClass("beakerSecondRtn");
					$("#beaker_ContainerGum").css({"top":"220px","left":"285px","cursor":"default"});
					$("#label_Two,#label_GumSol").fadeIn(0,function(){
								$("#glassRodDiv_Gum").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%'
	});
				  				$("#glassRodDiv_Gum").css({"top":"187px","left":"414px"});
				 				 $("#inference").show();
				 				 inferenceMsg=inferenceArrayGum[0];
				  			});
				});
				
				
				}
			});
			


	};


	function resetGum(){
		$("#beaker_ContainerGum").css({"top":"220px","left":"285px","cursor":"pointer"});
		$("#flame_gum").hide();
		
		$("#watchGlssContainerGum").css({"top":"283px","left":"170px"});
		$("#burnerOffGum").hide();
		$("#burnerOnGum").show();
		$("#gum_PasteTwo").css({"top":"-2px","left":"21px"});
		$("#gum_PasteTwo").show();
		$("#gum_PasteSecondTwo").hide();
		$("#gum_PasteSecondTwo").css({"top":"123px","left":"50px"});
		clearInterval(clrGlassRod);
		$("#glassRodDiv_Gum").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%'
		});
		$("#glassRodDiv_Gum").css({"top":"187px","left":"414px"})
		
		clearTimeout(glsMove);
		clearTimeout(rotateGlsrod);

		$("#beaker_WaterGum").css({"opacity":"0.3"});
		$("#beaker_WaterGum").show();
		$("#beaker_WaterGum").stop(true);
		$("#beakerDropArea_Gum").show();
		$("#watchGlsDropArea_Gum").hide();
		$("#glsRdDropArea_Gum").hide();
		$("#funnelDropAre_Gum").hide();
		$("#clockContainer").hide();
		clearInterval(Int);
		$("#inference").hide();
		$("#waterFive_gum").hide();
		$("#beaker_ContainerGum").draggable({"revert":true});
		$("#beaker_ContainerGum").draggable({"disabled":false});
		$("#label_Two,#label_GumSol").hide();
		degree4=0;
		deg=720;
		clearInterval(flaming);
		$("#starch_PastePowder").hide();
		$("#strchPwdr").css({"top":"0px"});
		$("#conclFlskwaterFlow_wtrGum").css({"top":"-48px"});
		$("#conclFlskwaterFlow_wtrGum").hide();
		$("#conclFlskwaterFlow_wtrGum").stop(true);
		$("#gumPwdr").css({"top":"0px"});
		$("#gum_PastePowder").hide();
	}
