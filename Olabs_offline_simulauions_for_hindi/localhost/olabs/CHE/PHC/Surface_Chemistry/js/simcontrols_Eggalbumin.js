var DragFlag=0;
var inferenceArray_EggAlbm;
var clrGlassRodEgg;
var thrdinrval;
var secndinvrtl;
var IntEgg;
var degree4_Egg=0;
var degEgg=720;
function Eggalbumintest(){

	$("#label_albPst").html(lablsEgg[0]);
	$("#label_albSol").html(lablsEgg[1]);
	$("#label_bkralbSol").html(lablsEgg[2]);
	resetgroup_albumin();
	function stirGlassRodEgg(ID){//Stiring of glass rod
		
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
		clrGlassRodEgg=setTimeout(function(){stirGlassRodEgg(ID)},8);
	}



// clock rotate function
function clockRotateEgg(){
		if(degree4_Egg<=degEgg){
			degree4_Egg++;
			$("#needleImg").css({'-webkit-transform-origin' :'0% 00%'});
			$("#needleImg").css({'-webkit-transform' : 'rotate('+degree4_Egg+'deg)'});
			$("#needleImg").css({'transform-origin' : '3px 26px'});
			$("#needleImg").css({'transform' : 'rotate('+ degree4_Egg +'deg)'});

			//Start the clock.
		}
		else
		{	
		//Stop clock.
			clearInterval(IntEgg);
			$("#clockContainer").hide();
		}
	}
	$('#Egg_albumindiv').show();
	$("#watchGlssContainer_albumin").css({"cursor":"pointer"});
	$("#watchGlssContainer_albumin").draggable({revert:true,revertDuration:0});
	$("#watchGlssContainer_albumin").draggable({disabled:false});

	$("#dropAreaEgg_first").droppable({
	accept:"#watchGlssContainer_albumin",
	drop:function( event, ui ){
	$("#watchGlssContainer_albumin").css({"cursor":"default"});
	$("#watchGlssContainer_albumin").draggable({revert:false});
	$("#watchGlssContainer_albumin").draggable({disabled:true});
	$("#watchGlssContainer_albumin").css({
		'-ms-transform': 'rotate('+82+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+82+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+82+'deg)',
		'transform-origin': '50% 50%',
		'left': '114px',
		 'top': '120px'
		
		});
	
	$("#eggdropFlowSltn").show();
	$("#albumin_Paste_alb").hide();
	$("#beaker_Water_alb").animate({"top":"48px","height":"47px","background-color":"#DBD392"},500);
	$("#eggdropFlowSltn").animate({"top":"82px"},500,function(){
		
		$("#watchGlssContainer_albumin").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%',
		'left': '36px',
		 'top': '203px'
		
		});

		$("#glassRodDiv_alb").css({"cursor":"pointer"});
 		$("#glassRodDiv_alb").draggable({revert:true,revertDuration:0});
 		$("#glassRodDiv_alb").draggable({disabled:false});
	});

	}
});


	$("#glssrdDroparea_egg").droppable({
	accept:"#glassRodDiv_alb",
	drop:function( event, ui ){
		// Show clock function
		$("#clockTimeText").html(timeArray[1]);
		$("#clockContainer").show();
		IntEgg=setInterval(clockRotateEgg,9);

		$("#glassRodDiv_alb").draggable({revert:false});
		$("#glassRodDiv_alb").draggable({disabled:true});
		$("#glassRodDiv_alb").css({"top":"186px","left":"232px"});
		stirGlassRodEgg($("#glassRodDiv_alb"))
		$("#alb_PasteSecond").fadeOut(7000);

		secndinvrtl =setTimeout(function(){
		clearInterval(clrGlassRodEgg);

		$("#glassRodDiv_alb").css({
		'-ms-transform': 'rotate('+207+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+207+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+207+'deg)',
		'transform-origin': '50% 50%',
		'left':'522px',
		'top':'26px'
		});
		beaker_Containeralb
		$("#glassRodDiv_alb").css({"cursor":"default"});
		$("#beaker_Containeralb").css({"cursor":"pointer"});
		
		$("#beaker_Containeralb").draggable({revert:true,revertDuration:0});
		$("#beaker_Containeralb").draggable({disabled:false});
		},8000);

			}
		});

	
	$("#beakerDroparea_egg").droppable({
		accept:"#beaker_Containeralb",
		drop:function(event, ui){
		$("#beaker_Containeralb").draggable({revert:false});
		$("#beaker_Containeralb").draggable({disabled:true});
			$("#conclFlskwaterFlow_wtrEgg").show();
			$("#conclFlskwaterFlow_wtrEgg").animate({"top":"85px"},500);
		$("#beaker_Containeralb").css({"left":"388px","top":"49px"});
		$("#beaker_Containeralb").css({
		'-ms-transform': 'rotate('+440+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+440+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+440+'deg)',
		'transform-origin': '50% 50%',
		
		});
		$("#beaker_Water_alb").fadeOut(100);
		$("#waterFivealbt").fadeIn(100);
	thrdinrval=setTimeout(function(){
	$("#beaker_Containeralb").css({"left":"203px","top":"213px","cursor":"default"});
		$("#beaker_Containeralb").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%',
		
		});
		
		$("#label_Twoalb,#label_albSol").fadeIn(0);
		$("#inference").show();
		inferenceMsg=inferenceArray_EggAlbmn[0];
	},500);

	
	
		}
	})




}
function resetgroup_albumin(){

	 degEgg=720;
	 degree4_Egg=0;
	clearInterval(IntEgg);
	$("#beaker_Water_alb").show();
	$("#waterFivealbt").hide();
	$("#beaker_Containeralb").css({"left":"194px","top":"203px"});
	$("#beaker_Containeralb").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%',
		
	});
	$("#albumin_Paste_alb").show();
	$("#alb_PasteSecond").hide();
	$("#alb_PasteSecond").css({"left":"182px","top":"217px","opacity":"1"});
	$("#glassRodDiv_alb").css({"cursor":"default"});
	$("#glassRodDiv_alb").draggable({revert:false});
	$("#glassRodDiv_alb").draggable({disabled:true});
	$("#glassRodDiv_alb").css({"left":"374px","top":"187px"});
	clearInterval(clrGlassRodEgg);
	clearInterval(thrdinrval);
	clearInterval(secndinvrtl);


	$("#glassRodDiv_alb").css({
		'-ms-transform': 'rotate('+0+'deg)',
		'-ms-transform-origin': '50% 50%',
		'-webkit-transform': 'rotate('+0+'deg)',
		'-webkit-transform-origin': '50% 50%',
		'transform': 'rotate('+0+'deg)',
		'transform-origin': '50% 50%'
		});
	$("#beaker_Containeralb").css({"cursor":"default"});
	$("#beaker_Containeralb").draggable({revert:false});
	$("#beaker_Containeralb").draggable({disabled:true});
	$("#inference").hide();

	$("#watchGlssContainer_albumin").css({"cursor":"pointer"});
	$("#watchGlssContainer_albumin").draggable({revert:true,revertDuration:0});
	$("#watchGlssContainer_albumin").draggable({disabled:false});
	
	
	$("#clockContainer,#label_Twoalb,#label_albSol").hide();
	$("#alb_PasteSecond").stop(true);
	
	$("#eggdropFlowSltn,#conclFlskwaterFlow_wtrEgg").hide();
	$("#eggdropFlowSltn,#conclFlskwaterFlow_wtrEgg").css({"top":"0"});
	$("#beaker_Water_alb").css({"top":"65px","height":"29px","background-color":"#fff"});

	
	}