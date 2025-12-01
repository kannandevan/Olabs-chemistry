// JavaScript Document
var labelArray=[gt.gettext("BaCl<sub>2</sub>"),gt.gettext('Na<sub>2</sub>SO<sub>4</sub>'),gt.gettext('Dil.HCl'),gt.gettext('Back')];
$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
window.onload = function init(){
		$('#labelTxt1').html(labelArray[0]);
		$('#labelTxt2').html(labelArray[1]);
		$('#labelTxt3').html(labelArray[2]);
		$('#backButtonText').html(labelArray[3]);
}
/// Variable declaration

var heightVal=40;
var topVal=257;
var imgTop=-117;
var countFlag=0
var stage1;
var enableClick=0;
var currZoom=0;
var imgZoom =backbtnFlag= 0;
var zoomIntrvl
var imgID;
var rotateEvt;
var inferenceMsg;
/// canvas for background image..

var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 340;

var bgctx = bgCanvas.getContext('2d');
var bgimg = new Image;
bgimg.onload = function(){ 
	bgctx.drawImage(bgimg,-10,-10);
};
bgimg.src=simPath+'images/BG.gif';


// function called on loading..
$(document).ready(function() {
	$("#expName").html(gt.gettext("Double Displacement Reaction"))
	 $( "#hclDiv,#sodiumDiv" ).draggable({ disabled: true });
	 $('#testtube').bind('click', tubeClick);
	 $('#testtubeZoom,#zoommilky,#zoomhcl').css("transform","scale(0)").css("-moz-transform","scale(0)").css("-webkit-transform","scale(0)");	
     document.getElementById("hclDiv").style.cursor = simPath+'images/BG.gif';
     document.getElementById("instrTxt").innerHTML=gt.gettext("Instructions");

	 var instructions=gt.gettext("<li>Drag the dropper to add BaCl<sub>2</sub> to the test tube.</li><br />")+gt.gettext("<li>Drag the dropper to add Na<sub>2</sub>SO<sub>4</sub> to the test tube.</li><br />")+gt.gettext("<li>Drag the test tube to decant the upper solution to the beaker.</li><br />")+gt.gettext("<li>Drag the dropper to add HCl to the test tube.</li><br />")+gt.gettext("<li>Click on the test tube to zoom in.</li><br />");
	 inferenceMsg=[gt.gettext('Drag the dropper to add BaCl<sub>2</sub><br/>to the test tube.'),gt.gettext('Drag the dropper to add Na<sub>2</sub>SO<sub>4</sub><br/>to the test tube.'),gt.gettext('Drag the test tube to decant<br/>the upper solution to the beaker.'),gt.gettext('Drag the dropper to add HCl<br/>to the test tube.'),gt.gettext('A white precipitate of barium sulphate is formed.'),gt.gettext('The precipitate obtained is insoluble in dil.HCl.')];
	 $("#reset").val(gt.gettext("Reset"));
	 document.getElementById("instrList").innerHTML=instructions;
	stage1 = new swiffy.Stage(document.getElementById('animLoad4'),
                                   swiffyobject);

});


/// for dragging the dropper...
function dragSolution(slnId)
{
	var ID=slnId;
	var id="#"+slnId;
	
$(id).draggable({
	
	drag: function(event,ui){
				document.getElementById(ID).style.zIndex=5;
				},
				stop: function() {
					
					if(($(id).position().left>=160)&&($(id).position().left<=205)&&($(id).position().top>=-10)&&($(id).position().top<=60))
					{
					document.getElementById(ID).style.left="198px";
				    document.getElementById(ID).style.top="7px";
					$('#testtubeSoln,#testtubeSolnimg,#solnmilky').css({  display:'block' });
					$("#testtubeSoln").delay(100).animate({height:heightVal+'px',top:topVal+'px'});
					$("#testtubeSolnimg,#solnmilky").delay(100).animate({top:imgTop+'px'});
					
					countFlag++;
					
					 if(ID=="bariumDiv"){
						$("#dropperSoln1").animate({left:'10px',height:'0px',top:'160px'});
						
					heightVal=65;
					topVal=232;	
					imgTop=-92;	
					 }
					 else if(ID=="sodiumDiv"){
						$("#dropperSoln2").animate({left:'10px',height:'0px',top:'160px'});
						$("#testtube").css({cursor: '-moz-zoom-in'});
						document.getElementById("testtube").style.cursor='-webkit-zoom-in';
						$("#solnmilky").animate({opacity:'1'});
						enableClick=1;
									
					 }else if(ID=="hclDiv"){
						 enableClick=0;
						 $("#solnmilky").css({display:'none'});
					 	 $("#dropperSoln3").animate({left:'10px',height:'0px',top:'160px'});
					 }
					 $( id ).draggable({ disabled: true });
					
					$('#drops1').css({
					    display:'block',
					    top:'180px'
				    });
					$('#drops2').css({
						display:'block',
						top:'200px'
					});
					$('#drops2').animate({		
						top:'288px'
					});					
					
					$('#drops1').animate({		
						top:'290px',														
					},500,function(){	
						$('#drops1,#drops2').css({
					     display:'none',
				       });
					
					 if(ID=="bariumDiv"){
						 document.getElementById(ID).style.left="300px";
						 $("#sodiumDiv").draggable({ disabled: false });
					 }else if(ID=="sodiumDiv"){
						document.getElementById(ID).style.left="390px";
						
						setTimeout(function(){$("#solnmilky").animate({opacity:'0.2'},500,function(){	
						  document.getElementById("testtubeppt").style.display='block';
						  $("#testtubeppt").animate({opacity:'1'});
						   enabletesttubeDrag();
						}); },1000)
						
						document.getElementById("inferenceDiv").style.visibility="visible";
					 }else if(ID=="hclDiv"){
					 	document.getElementById(ID).style.left="480px";
						document.getElementById("inferenceDiv02").style.visibility="visible";
						document.getElementById("inferenceDiv").style.visibility="hidden";
						enableClick=1;
						rotateEvt=setInterval(rotateFunction,100);
					 }
				     document.getElementById(ID).style.top="101px";
					 document.getElementById(ID).style.zIndex=5;
					
				 });
			   }  else{
					document.getElementById(ID).style.top="101px";
					document.getElementById(ID).style.zIndex=2;
					
					if(ID=="bariumDiv"){
						document.getElementById(ID).style.left="300px";
					}else if(ID=="sodiumDiv"){
						document.getElementById(ID).style.left="390px";
					}else if(ID=="hclDiv"){
					 	document.getElementById(ID).style.left="480px";
					}
				}
			}
	});
}

function enabletesttubeDrag(){
	
	$("#testtube").draggable({
	
		drag: function(event,ui){
			        
					 $("#testtube").css({cursor: 'pointer'});
					 document.getElementById("testtube").style.cursor='pointer';
					 enableClick=0;
					 $('#testtube').unbind('click');
					 var dragDivPosTop=$("#testtube").position().top+101;
		      		 var dragDivPosLeft=$("#testtube").position().left;
			         document.getElementById("testtubeSoln").style.top=dragDivPosTop+"px";
					 document.getElementById("testtubeSoln").style.left=dragDivPosLeft+"px";
					 document.getElementById("testtubeppt").style.top=(dragDivPosTop+57)+"px";
					 document.getElementById("testtubeppt").style.left=dragDivPosLeft+"px";
				},
				stop: function() {
					if(($("#testtube").position().left>=10)&&($("#testtube").position().left<=190)&&($("#testtube").position().top>=-30)&&($("#testtube").position().top<=160))
					{
						document.getElementById("testtubeppt").style.display='none';
						playAnim();
						heightVal=30;
						topVal=260;
						imgTop=-123;
						$( "#testtube" ).draggable({ disabled: true });
						$( "#hclDiv" ).draggable({ disabled: false });
					}
					else{
						document.getElementById("testtube").style.top="130px";
						document.getElementById("testtube").style.left="195px";
						document.getElementById("testtubeSoln").style.top="233px";
					    document.getElementById("testtubeSoln").style.left="196px";
						document.getElementById("testtubeppt").style.top="288px";
					    document.getElementById("testtubeppt").style.left="196px";
						
					}
					 $("#testtube").css({cursor: '-moz-zoom-in'});
					 document.getElementById("testtube").style.cursor='-webkit-zoom-in';
					 setTimeout(function(){ enableClick=1;   $('#testtube').bind('click', tubeClick);},100)
				}	

	 });
	
}

// play the animation decanting the upper solution..

function playAnim(){
	//document.getElementById("inferenceDiv").style.visibility=
	document.getElementById("animLoad4").style.visibility="visible";
	document.getElementById("testtube").style.visibility=document.getElementById("flaskDiv02").style.visibility="hidden";
	document.getElementById("testtubeSolnimg").style.display=document.getElementById("solnmilky").style.display='none';
	stage1.start();
	$("#BeakerSoln").delay(400).animate({height:'18px',top:'282px',opacity:'0.6'});
	$("#BeakerSolnimg").animate({top:'-100px'});
	setTimeout(function(){document.getElementById("animLoad4").style.visibility="hidden"; 
	document.getElementById("testtube").style.visibility="visible";
	document.getElementById("testtube").style.top="130px";
	document.getElementById("testtube").style.left="195px";
	$('#testtubeppt').css({display:'block',top:'288px',left:'196px' });
	$("#testtubeSoln").css({height:'0px',top:'286px',left:'196px'});
	enableClick=1;
	$("#BeakerSoln").css({display:'block' });
	},2000);
	countFlag++;
}


////zooming function...
function tubeClick() {
	if(enableClick>0){
		backbtnFlag=0;
		imgZoom=0;
		$('#fadeDiv').css({display:'block' });
		clearInterval(zoomIntrvl);
		zoomIntrvl=setInterval(zoom,60);
	}
}

function zoom(){
	
		 if(countFlag==2){
			 imgID="#zoommilky";
		 }else  if(countFlag==3){
			 imgID="#testtubeZoom";
		 }else{
			 imgID="#zoomhcl";
		 }
	
		if(backbtnFlag==1){		
			if(imgZoom>=0){	
				imgZoom-=.15
			 	imageScale();
			}
			if(imgZoom<=0){
				$(imgID).css({display:'none' });
				$('#fadeDiv').css({display:'none' });
			}
		}else{
	
			$(imgID).css({display:'block' });
			if(imgZoom<=1){
				imgZoom+=.15;
			 	imageScale();
			}
			if(imgZoom>1){
				$('#back,#backButtonText').css({display:'block' });

			}
	 }
}

/// function for back button to zoom out
function backFN(){
	clearInterval(zoomIntrvl);
	zoomIntrvl=setInterval(zoom,60);
	backbtnFlag=1;
	$('#back,#backButtonText').css({display:'none' });
}

/// scaling image....
function imageScale(){
	
	$(imgID).css({top:"-"+(10+(5*imgZoom))+'px',left:-80+(75*imgZoom)+'px' });
	$(imgID).css("transform","scale("+imgZoom+")").css("-moz-transform","scale("+imgZoom+")").css("-webkit-transform","scale("+imgZoom+")");	
}


/////rotation...
var rotateCnt=0;
var rotateCnt2=3;
var count=0;
var pptLeft=196;
function rotateFunction(){
			
		if(rotateCnt<3){	
			count++;
			$('#testtube').rotate(rotateCnt);
			$("#testtubeSolnimg").rotate(rotateCnt*1.3);
			$("#testtubeppt").css({left:(pptLeft-(rotateCnt))+'px',width:'23px',height:'10px',top:'287px'});
			rotateCnt++;			
		}else{	
			if(rotateCnt2>-3){	
			    count++;
				$('#testtube').rotate(rotateCnt2);
				$("#testtubeSolnimg").rotate(rotateCnt2*1.3);
			    $("#testtubeppt").css({left:(pptLeft-(rotateCnt2-0.4))+'px',width:'23px'});
				rotateCnt2--;
			}else{
				rotateCnt=0;
				rotateCnt2=3;
			}
		}	
		if(count>30){
			    rotateCnt=0;
				rotateCnt2=0;
				$("#testtubeSolnimg,#testtube").rotate(rotateCnt);
				$("#testtubeSolnimg,#testtube").rotate(rotateCnt2);
				$("#testtubeppt").css({left:pptLeft+'px',width:'24px',height:'9px',top:'288px'});
			    clearInterval(rotateEvt);
		}
}