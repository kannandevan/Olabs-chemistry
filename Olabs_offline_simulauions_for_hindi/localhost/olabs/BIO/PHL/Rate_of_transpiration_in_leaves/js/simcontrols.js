///variable declaration 

var leafArray;
var msgArray;
var msgTimeArray;
var msgTimeFlipArray;
var sideArray;
var paperArray;
var cons=Number(.9);
var degree=0;
var top1=-9;
var cons1=0;
var deg//=90;degree to stop
var Int;
var leaf;
var msg;
var conszoom=Number(.9);
var conszoom1=0;
var msgs;
var msgsForTime;
var msgsForFlipTime;
var pottedplantVar;
var zoomImageVar;

//ready function......
$(document).ready(function() {
	window.onload=initialFunction;	
	
 });
/*..Onloading functions.... */
function initialFunction(){	
		//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	    document.getElementById("expName").innerHTML=gt.gettext("Rate of Transpiration in Plants");
		leafArray=[gt.gettext('Apple'),gt.gettext('Lilly'),gt.gettext('Tomato')];
		msgArray=[gt.gettext('Rate of transpiration is same on both the upper and lower surfaces.'),gt.gettext('Rate of transpiration is higher on the lower surface than the upper surface.'),gt.gettext('Rate of transpiration is higher on the upper surface than the lower surface.')];
		msgTimeArray=[gt.gettext("No change"),gt.gettext("15 Mins"),gt.gettext("20 Mins")];
		msgTimeFlipArray=[gt.gettext("15 Mins")];
		sideArray=[gt.gettext("Upper surface of leaf"),gt.gettext("Lower surface of leaf")];
		paperArray=[gt.gettext("Cobalt chloride paper")];
		$('#lillyImg,#lillyTxt').css({opacity:'0.3'})
		leaf='lilly';
		deg=90;
		pottedplantVar=simPath+'images/pottedplant.jpg';
		zoomImageVar=simPath+'images/zoomImage.jpg';
		document.getElementById("pottedplantImg").src=pottedplantVar;
		document.getElementById("zoomImg").src=zoomImageVar;
		$('#applTxt').html(leafArray[0]);
		$('#lillyTxt').html(leafArray[1]);
		$('#tomTxt').html(leafArray[2]);
		$('#sampleIcon').html(gt.gettext('Click on the icon to choose sample:'));
		$('#res').html(gt.gettext('Result'));
		$('#eResult').html(gt.gettext('Expected result:'));
		$('#oColor').html(gt.gettext('Original colour:'));
		$('#procTxt').html(gt.gettext('PROCEED'));
		$('#start').attr('value',gt.gettext('Start'));
		$('#reset').attr('value',gt.gettext('Reset'));
		msgs=msgArray[0];//tooltip msgs for conclusion
		msgsForTime=msgTimeArray[0];//tooltip msgs to show the time at which color change.
		msgsForFlipTime=msgTimeFlipArray[0];//tooltip msgs to show the time at which color 
		$('#paperappleLower').qtip({
		 content: paperArray[0], style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'topRight',tooltip: 'leftMiddle'}}
		});
		$('#paperappleUpper').qtip({
		 content: paperArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'topRight',tooltip: 'bottomLeft'}}
		});
		
		$('#paperlillyUpper').qtip({
		 content: paperArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'topRight',tooltip: 'bottomLeft'}}
		});
		$('#paperlillyLower').qtip({
		 content: paperArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'topRight',tooltip: 'bottomLeft'}}
		});
		$('#papertomatoUpper').qtip({
		 content: paperArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'topLeft'}}
		});
		$('#papertomatoLower').qtip({
		 content: paperArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomLeft',tooltip: 'topRight'}}
		}); 
}
//function for tooltip msgs 
function msgTooltip(){
	$('#imgInfrm').qtip({
	 content: msgs,style: { textAlign: 'center','font-size': 14,color:'#593E1A',width:250,border: {width: 1,radius: 3 },tip: true,name: 'cream'},position: {adjust: {x: 0, y: -30},corner: {target: 'bottomRight',tooltip: 'topLeft'}}
	});
	
}
//function tooltip msg to mention the lower and upper surface of leaf
function sidemsgtoolTip(){
	$('#appleUpper').qtip({
	 content: sideArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'leftMiddle'}}
	});
	$('#appleLower').qtip({
	 content: sideArray[1],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'topRight'}}
	});
	$('#lillyUpper').qtip({
	 content: sideArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'topLeft'}}
	});
	$('#lillyLower').qtip({
	 content: sideArray[1],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'leftMiddle'}}
	});
	$('#tomatoUpper').qtip({
	 content: sideArray[0],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'topLeft'}}
	});
	$('#tomatoLower').qtip({
	 content: sideArray[1],style: {classes: 'qtip-bootstrap'},position: {corner: {target: 'bottomRight',tooltip: 'leftMiddle'}}
	});
}
//function for select leaf
function selectleaf_FN(evt){
	clearInterval(Int);
	leaf=evt.id;
	if(leaf=='apple'){
		pottedplantVar=simPath+'images/pottedplantApple.jpg';
		zoomImageVar=simPath+'images/zoomImageApple.jpg';
		deg=90;
		msgs=msgArray[1];
		msgsForTime=msgTimeArray[0];
		msgsForFlipTime=msgTimeFlipArray[0];
		$('#appleImg,#applTxt').css({opacity:'0.3'})
		$('#lillyImg,#lillyTxt').css({opacity:'1'});
		$('#tomatoImg,#tomTxt').css({opacity:'1'});
		
	}
	else if(leaf=='lilly'){
		pottedplantVar=simPath+'images/pottedplant.jpg';
		zoomImageVar=simPath+'images/zoomImage.jpg';
		deg=90;
		msgs=msgArray[0];
		msgsForTime=msgTimeArray[1];
		msgsForFlipTime=msgTimeFlipArray[0];
		$('#lillyImg,#lillyTxt').css({opacity:'0.3'});
		$('#appleImg,#applTxt').css({opacity:'1'});
		$('#tomatoImg,#tomTxt').css({opacity:'1'});
	}
	else if(leaf=='tomato'){
		pottedplantVar=simPath+'images/pottedplantTomato.jpg';
		zoomImageVar=simPath+'images/zoomImageTomato.jpg';
		msgs=msgArray[2];
		msgsForTime=msgTimeArray[2];
		msgsForFlipTime=msgTimeFlipArray[0];
		deg=120;
		$('#tomatoImg,#tomTxt').css({opacity:'0.3'});
		$('#lillyImg,#lillyTxt').css({opacity:'1'});
		$('#appleImg,#applTxt').css({opacity:'1'});
	}
		document.getElementById("pottedplantImg").src=pottedplantVar;
		document.getElementById("zoomImg").src=zoomImageVar;

	if(proceedFlag==1){
		hide();
		initial();
	}
}
var proceedFlag=0;
//function to go to the next stage
function proceed_FN(){
	proceedFlag=1;
	$('#zoomImg,#applTxt,#lillyTxt,#tomTxt').css({"visibility":"visible"});
	$('#procClick').css({"visibility":"hidden"});
	$('#apple').css({"visibility":"auto"});
	$('#lilly').css({"visibility":"auto"});
	$('#tomato').css({"visibility":"auto"});
	$('#applTxt').html(leafArray[0]);
	$('#lillyTxt').html(leafArray[1]);
	$('#tomTxt').html(leafArray[2]);

	sidemsgtoolTip();
	Int=setInterval(zoom,100);
	if(leaf=='apple'){
		$('#paperappleUpper').css({"visibility":"visible"});
		$('#paperappleLower').css({"visibility":"visible"});
	}else if(leaf=='lilly'){
		$('#paperlillyUpper').css({"visibility":"visible"});
		$('#paperlillyLower').css({"visibility":"visible"});
	}else if(leaf=='tomato'){
		$('#papertomatoUpper').css({"visibility":"visible"});
		$('#papertomatoLower').css({"visibility":"visible"});
	}
	$('#clockBGImg').css({"visibility":"visible"});
	$('#clockBody').css({"visibility":"visible"});
	$('#needle').css({"visibility":"visible"});
	$('#colorAppleFlip').fadeOut(1);
	$('#colorLilly').fadeOut(1);
	$('#colorLillyFlip').fadeOut(1);
	$('#colorTomato').fadeOut(1);
	$('#colorTomatoFlip').fadeOut(1);
}

//function for zoom the plant
function zoom(){
	plantZoom();
	$('#pottedplantImg').fadeOut(1600);
	if(cons1==2.5){
		document.getElementById("start").disabled=false;
		if(leaf=='apple'){
			$('#appleUpper').css({"visibility":"visible"});
			$('#appleLower').css({"visibility":"visible"});
		}else if(leaf=='lilly'){
			$('#lillyUpper').css({"visibility":"visible"});
			$('#lillyLower').css({"visibility":"visible"});
		}else if(leaf=='tomato'){
			$('#tomatoUpper').css({"visibility":"visible"});
			$('#tomatoLower').css({"visibility":"visible"});
		}
	}
	zoomImgZoom();
	$('#zoomImg').fadeIn(1600);
}
//function for pooted plant zoom
function plantZoom(){
	if(cons>=.9 && cons<=2.5){
		cons+=.1;
		cons1=cons.toFixed(1);
		$('#pottedplantImg').css("transform","scale("+cons1+")").css("-moz-transform","scale("+cons1+")").css("-webkit-transform","scale("+cons1+")");
		top1=top1+9;
		document.getElementById("pottedplantImg").style.top=top1+"px"; 
	}
}
//function for zoomImage zoom
function zoomImgZoom(){
	if(conszoom>=.9 && conszoom<=1){
		conszoom+=.01;
		conszoom1=conszoom.toFixed(3);
		$('#zoomImg').css("transform","scale("+conszoom1+")").css("-moz-transform","scale("+conszoom1+")").css("-webkit-transform","scale("+conszoom1+")");
	}
}
//function to start the xperimnt
function start_FN(){
	clearInterval(Int);
	document.getElementById("start").disabled=true;
	msgTooltip();
	Int2=setInterval(rotateTarget,100);
	if(leaf=='apple'){
		$('#colorAppleFlip').css({"visibility":"visible"});
		$('#colorAppleFlip').fadeIn(13000);
	}else if(leaf=='lilly'){
		$('#colorLilly').css({"visibility":"visible"});
		$('#colorLilly').fadeIn(13000);
		$('#colorLillyFlip').css({"visibility":"visible"});
		$('#colorLillyFlip').fadeIn(13000);
  	}else if(leaf=='tomato'){
		$('#colorTomato').css({"visibility":"visible"});
		$('#colorTomato').fadeIn(17000);
		$('#colorTomatoFlip').css({"visibility":"visible"});
		$('#colorTomatoFlip').fadeIn(13000);
	}
}
//function for needle rotate
function needleRotate(){
	document.getElementById("needle").style.webkitTransformOrigin='50% 84%';
	document.getElementById("needle").style.webkitTransform = 'rotate(' + degree + 'deg)';
	document.getElementById("needle").style.MozTransformOrigin='3px 25px';
	document.getElementById("needle").style.MozTransform ='rotate('+ degree +'deg)';
}
//function for rotation of needle
function rotateTarget(){
	degree++;
	needleRotate()
	if(degree==deg){
		clearInterval(Int2);
		$('#imgInfrm').css({"visibility":"visible"});
		if(leaf=='apple'){
			$('#minAppleLower').css({"visibility":"visible"});
			document.getElementById("minAppleLower").innerHTML="15 m";
			
			/*$('#minLillyLower').css({"visibility":"hidden"});
			$('#minLillyUpper').css({"visibility":"hidden"});
			$('#mintomatoUpper').css({"visibility":"hidden"});
			$('#mintomatoLower').css({"visibility":"hidden"});*/
			
			$('#colorLilly').css({"visibility":"hidden"});
			$('#colorLillyFlip').css({"visibility":"hidden"});
			$('#colorTomato').css({"visibility":"hidden"});
			$('#colorTomatoFlip').css({"visibility":"hidden"});
			
		}else if(leaf=='lilly'){
			$('#minLillyLower').css({"visibility":"visible"});
			document.getElementById("minLillyLower").innerHTML="15 m";
			$('#minLillyUpper').css({"visibility":"visible"});
			document.getElementById("minLillyUpper").innerHTML="15 m";
			
			/*$('#minAppleLower').css({"visibility":"hidden"});
			$('#mintomatoUpper').css({"visibility":"hidden"});
			$('#mintomatoLower').css({"visibility":"hidden"});*/
			
			$('#colorAppleFlip').css({"visibility":"hidden"});
			$('#colorApple').css({"visibility":"hidden"});
			$('#colorTomato').css({"visibility":"hidden"});
			$('#colorTomatoFlip').css({"visibility":"hidden"});
		}else if(leaf=='tomato'){
			$('#mintomatoUpper').css({"visibility":"visible"});
			document.getElementById("mintomatoUpper").innerHTML="20 m";
			
			/*$('#minAppleLower').css({"visibility":"hidden"});
			$('#mintomatoUpper').css({"visibility":"hidden"});
			$('#mintomatoLower').css({"visibility":"hidden"});*/
			
			$('#colorAppleFlip').css({"visibility":"hidden"});
			$('#colorApple').css({"visibility":"hidden"});
			$('#colorLilly').css({"visibility":"hidden"});
			$('#colorLillyFlip').css({"visibility":"hidden"});
		}
		$('#apple').css({"visibility":"visible"});
		$('#lilly').css({"visibility":"visible"});
		$('#tomato').css({"visibility":"visible"});
	}else if(leaf=='tomato' && degree==90){
			$('#mintomatoLower').css({"visibility":"visible"});
			document.getElementById("mintomatoLower").innerHTML="15 m";
	}
}
//function to hide tooltips
function hide(){
			$('#imgInfrm').css({"visibility":"hidden"});
			$('#colorAppleFlip').css({"visibility":"hidden"});
			$('#colorApple').css({"visibility":"hidden"});
		
			$('#colorLillyFlip').css({"visibility":"hidden"});
			$('#colorLilly').css({"visibility":"hidden"});
		
			$('#colorTomatoFlip').css({"visibility":"hidden"});
			$('#colorTomato').css({"visibility":"hidden"});
			
			$('#minAppleLower').css({"visibility":"hidden"});
			$('#minLillyLower').css({"visibility":"hidden"});
			$('#minLillyUpper').css({"visibility":"hidden"});
			$('#mintomatoUpper').css({"visibility":"hidden"});
			$('#mintomatoLower').css({"visibility":"hidden"});

		
			$('#clockBGImg').css({"visibility":"hidden"});
			$('#clockBody').css({"visibility":"hidden"});
			$('#needle').css({"visibility":"hidden"});
			$('#procClick').css({"visibility":"visible"});
			//$('#procTxt').html('PROCEED');
			
			$('#appleUpper').qtip('hide');
			$('#appleLower').qtip('hide');
			$('#appleUpper').css({"visibility":"hidden"});
			$('#appleLower').css({"visibility":"hidden"});
			
			$('#lillyUpper').qtip('hide');
			$('#lillyLower').qtip('hide');
			$('#lillyUpper').css({"visibility":"hidden"});
			$('#lillyLower').css({"visibility":"hidden"});
			
			$('#tomatoUpper').qtip('hide');
			$('#tomatoLower').qtip('hide');
			$('#tomatoUpper').css({"visibility":"hidden"});
			$('#tomatoLower').css({"visibility":"hidden"});
			
			$('#paperappleLower').css({"visibility":"hidden"});
			$('#paperappleUpper').css({"visibility":"hidden"});
			$('#paperlillyLower').css({"visibility":"hidden"});
			$('#paperlillyUpper').css({"visibility":"hidden"});
			$('#papertomatoLower').css({"visibility":"hidden"});
			$('#papertomatoUpper').css({"visibility":"hidden"});
}
//initial function...initial to reset to original position	
function initial(){ 
		cons=Number(.9);
		degree=0;
		top1=-9;
		cons1=0;
		conszoom=Number(.9);
		conszoom1=0;
		$('#zoomImg').fadeOut(1);
		$('#pottedplantImg').fadeIn(1);
		needleRotate();
		plantZoom();
		zoomImgZoom();
		document.getElementById("pottedplantImg").style.zIndex=999;
		document.getElementById("zoomImg").style.zIndex=99;
}