// Variable declaration

var labelArray=[gt.gettext("Quick lime"),gt.gettext("Distilled water"),gt.gettext("Lime water"),gt.gettext("Blow"),gt.gettext("Next")];
window.onload = function init(){
	
		$('#displayQuicklimeDiv').html(labelArray[0]);
		$('#displaywaterDiv').html(labelArray[1]);
		$('#displayNextDiv').html(labelArray[4]);
		
 }

var timerID,int;
var redMarkHeight,redTop,redImgTop,labeltop,lbl,count1=0,flagf=0;
var count = 0;
var info_msg;
var degree=0;
var sceneFlag=1;
var pickSlnFlag=0;
var widthVal=30;
var heightVal=15;
var topVal=265;
var blowCount=0;
//var top_init=document.getElementById("redmarkDiv").offsetTop;
var stage1;
var pickSampleFlag=0;
var timer2,timer3,timer4;
var watercout=0;

//Responsive init
var width=$("#sidebar-wrapper").width();
var parentWidth=$("#sidebar-wrapper").offsetParent().width();
var percent=100*width/parentWidth;
var winWidth=$(window).width();	

$(document).ready(function(){
	$(window).on('resize',function(){
		if ($(window).width() < 767) {   
		  location.reload();  // refresh page 
		}
		else {  
		  // width more than 768px for PC  
		}
	}); 
});

// canvas for background image

var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 450;
var bgCanvasctx = bgCanvas.getContext('2d');
var bgCanvasimg = new Image;
bgCanvasimg.onload = function(){ 
	bgCanvasctx.drawImage(bgCanvasimg,0,-10);
};
//bgCanvasimg.src=simPath+'images/BG.jpg';

// canvas for still image

var stillCanvas = document.getElementById('stillCanvas');
stillCanvas.width = 568;
stillCanvas.height = 440;
var stillctx = stillCanvas.getContext('2d');
var stillimg = new Image;
stillimg.onload = function(){ 
	stillctx.drawImage(stillimg,10,-40);
};
//stillimg.src=simPath+'images/still.png';

var init_top_beaker=-100;
//function called on loading..

$(document).ready(function(){
$("#expName").html(gt.gettext("Combination Reaction"));
$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
//$('.labName').html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
$('#reset').val(gt.gettext("Reset"));
		if($.browser.mozilla)
		{
			$("#bubbles").css({height:'55px',top:'188px'});
			$("#bubbles2").css({height:'22px',top:'201px'});
		}
		init_top_beaker=$("#waterstillImg").position().top;
		$("#bubbles").css({display:'none' });
		$("#bubbles2").css({display:'none' });
		$("#quicklimeImg").css({display:'none' });
	
		document.getElementById("thermometerLabel").innerHTML="30&degc";
		document.getElementById("instrTxt").innerHTML=gt.gettext("Instructions");
		var instructions=gt.gettext("<li>Drag the spatula over the empty beaker to put quick lime into it.</li><br />")+gt.gettext("<li>Drag the distilled water beaker to the beaker containing quick lime to add water into it.</li><br />")+
		gt.gettext("<li>Wait for some time till the quick lime reacts with water to form slaked lime.</li><br />")+gt.gettext("<li>Click on the inference icon to view the inference.</li><br />")+
		gt.gettext("<li>Click on the 'Next' button.</li><br />");
		document.getElementById("instrList").innerHTML=instructions;
		stage1 = new swiffy.Stage(document.getElementById('animLoad'),
									   swiffyobject);
});

//start the experiment by dragging the spatula

SpatulaDrag();
function SpatulaDrag()
{

	$("#SpatullaDiv").draggable({
		containment: "#draggable",
		snap: '.gridlines',
		stop: function () {
			var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())) ) + "%" ;
			var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).parent().height())) ) + "%" ;
			$(this).css("left", l);
			$(this).css("top", t);
			console.log("l="+l) ;
			console.log("t="+t) ;
			if((l>=70+"%")&&(l<=80+"%")&&(t>=0+"%")&&(t<=20+"%")){
				document.getElementById("SpatullaDiv").style.left=l;
				document.getElementById("SpatullaDiv").style.top=t;
				$(".Drops").css('left', l);

				$("#drops1").css({display:'block'});
				$("#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10").css({display:'block'});
				$("#SpatullaDiv" ).draggable({ disabled: true });
				$('#drops1').css({display:'block',top:'30%'});
				$('#drops2').css({display:'block',top:'35%'});
				$('#drops3').css({display:'block',top:'40%'});
				$('#drops4').css({display:'block',top:'45%'});
				$('#drops5').css({display:'block',top:'50%'});
				$('#drops6').css({display:'block',top:'55%'});
				$('#drops7').css({display:'block',top:'60%'});
				$('#drops8').css({display:'block',top:'65%'});
				$('#drops9').css({display:'block',top:'70%'});
				$('#drops10').css({display:'block',top:'75%'});

				$('#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').animate({top:'80%'});	
				$('#ImgInSpatulla').animate({opacity:'0'},500,function(){	
					$('#ImgInSpatulla').css({display:'none'})
				});
				$('#drops1').animate({top:'270px'},500,function(){	
					$('#drops1,#drops2,#drops3,#drops4,#drops5,#drops6,#drops7,#drops8,#drops9,#drops10').css({display:'none'});
					$("#quicklimeImg").css({display:'block' });	
					$("#quicklimeImg").css('left', l);
				 });

				 pourQuicklime();
			}
			else
			{
				 document.getElementById("SpatullaDiv").style.left="16%";
				 document.getElementById("SpatullaDiv").style.top="63%";	
			}
			 }
			
		
	});
	}


//pouring the quick lime
function pourQuicklime()
{
	timerID1 = setInterval("pourQuicklimeFn()",800);			   
}
function pourQuicklimeFn()
{
	clearInterval(timerID1);
	
	pickSampleFlag=1;
	document.getElementById("SpatullaDiv").style.left="16%";
	document.getElementById("SpatullaDiv").style.top="63%";
	dragwater();//drag water to the beaker

}
	
//function called for playing first animation..
function dragwater()
{
	
	$("#BeakerSlaked").draggable({
		drag: function(event,ui){
			$('#watershadow').stop(true).fadeTo(100,0);
		},
		stop: function() {
			
	if(($("#BeakerSlaked").position().left>=197)&&($("#BeakerSlaked").position().left<=349)&&
				($("#BeakerSlaked").position().top>=-20)&&($("#BeakerSlaked").position().top<=136))
				{
			$("#BeakerSlaked").css({display:'none' });
			document.getElementById("animLoad").style.visibility="visible";
			playAnim01();
				}
				else
				{
					document.getElementById("BeakerSlaked").style.left="34%";
					document.getElementById("BeakerSlaked").style.top="60%";
					$("#watershadow").fadeTo(100,1);
				}
		}
		
		
		});
}

function playAnim01()
{
		stage1.start();
		timer2=setInterval(anim01completed,10);
}

//rising water level
function waterRise()
{
	watercout++;

	if(watercout>=300)
	{
		clearInterval(timer3);
	
	}
}

function quicklimeAction()
{
		$("#needle").css({display:'block' });
		$("#clockBody").css({display:'block' });
		$("#bubbles").css({display:'block' });
		startTimer();
		int=setInterval(clockRotate,10);
}

//function called on completion of first animation..

function anim01completed()
{
	flagf++;
	if(flagf>=500)
	{
		clearInterval(timer2);
		quicklimeAction();
	}
}

// start the timer..

function startTimer(){
	timerID = setInterval("timerFN()",800);
}

// timer function to show the thermometer reading..

function timerFN(){

	if(percent=="0"|| winWidth<768){
		count++;
		if(count%8==0)
			{
				count1=count1+1;
				
			}
			
			lbl=Math.round(30+count1);
			if(lbl<=40)
			{
					document.getElementById("thermometerLabel").innerHTML=lbl+"&degc";
			}
		if(count<24)
		{
			
			$("#redmarkDiv").css({display:'block' });
			redMarkHeight=$("#redmarkDiv").height()+(count/2);
			
			var position = $("#redmarkDiv").position();
			var percentTop = position.top/$(window).height() *100;
			redTop=49-(count*0.3);
			
			//redTop=$("#redmarkDiv").position().top-(count*0.79);
			//labeltop=$("#thermometerLabel").position().top-count*0.7;
			labeltop=40-count*0.3;
			widthVal=$("#quicklimeImg").width()+count;
			heightVal=$("#quicklimeImg").height()-count;
			topVal=$("#quicklimeImg").position().top+count*0.5;
		if(heightVal<=-12)
		{
			$("#quicklimeImg").css({display:'none' });
		}
			if(heightVal>-10)
			{
				$("#quicklimeImg").delay(100).animate({width:widthVal+'px',height:heightVal+'px',top:topVal+'px'});
				
				$("#redmarkDiv").delay(100).animate({height:redMarkHeight+'px',top:redTop+'%',opacity:0.5});
				$("#thermometerLabel").delay(100).animate({top:labeltop+'%'});
			}
			startTimer();
		}
		else
		{
			clearTimeout(timerID);
		}
	}
	
	else{
	
			count++;
		if(count%8==0)
			{
				count1=count1+1;
				
			}
			
			lbl=Math.round(30+count1);
			if(lbl<=40)
			{
					document.getElementById("thermometerLabel").innerHTML=lbl+"&degc";
			}
		if(count<24)
		{
			
			$("#redmarkDiv").css({display:'block' });
			redMarkHeight=$("#redmarkDiv").height()+(count/2);
			
			var position = $("#redmarkDiv").position();
			var percentTop = position.top/$(window).height() *100;
			//redTop=24+percentTop-(count*0.3);
			//redTop=46.5-(count*0.3);
			redTop=49-(count*0.3);
			labeltop=40-(count*0.3);
			
			//redTop=$("#redmarkDiv").position().top-(count*0.79);
			//labeltop=$("#thermometerLabel").position().top-count*0.7;
			widthVal=$("#quicklimeImg").width()+count;
			heightVal=$("#quicklimeImg").height()-count;
			topVal=$("#quicklimeImg").position().top+count*0.5;
		if(heightVal<=-12)
		{
			$("#quicklimeImg").css({display:'none' });
		}
			if(heightVal>-10)
			{
				$("#quicklimeImg").delay(100).animate({width:widthVal+'px',height:heightVal+'px',top:topVal+'px'});
				
				$("#redmarkDiv").delay(100).animate({height:redMarkHeight+'px',top:redTop+'%',opacity:0.5});
				$("#thermometerLabel").delay(100).animate({top:labeltop+'%'});
			}
			startTimer();
		}
		else
		{
			clearTimeout(timerID);
		}
	
	}
}

//turning the clock
function clockRotate()
{

	if(degree<=720)
	{
		degree++;
	}
	$("#needle").css({'-webkit-transform-origin' :'3px 25px'});
	$("#needle").css({'-webkit-transform' : 'rotate('+degree+'deg)'});
	$("#needle").css({'transform-origin' : '3px 25px'});
	$("#needle").css({'transform' : 'rotate('+ degree +'deg)'});
	if(degree==720)
	{
		clearInterval(int);
		$("#bubbles").css({display:'none' });
		$("#needle").css({display:'none' });
		$("#clockBody").css({display:'none' });
		
		$("#nextbtnImg").css({display:'block' });
		$("#NextDiv").css({display:'block' });
		$("#displayNextDiv").css({display:'block' });
		$("#inferenceDiv").css({display:'block' });
	}
}

//drag the dropper
var corkflag=0;
function dropperDrag()
{	
		$("#DropperDiv").draggable({
		drag: function(event,ui){
			if(pickSlnFlag==0)
			{
				if(($("#DropperDiv").position().left>=46)&&($("#DropperDiv").position().left<=201)&&
				($("#DropperDiv").position().top>=75)&&($("#DropperDiv").position().top<=128))
				{
					document.getElementById("DropperDiv").style.left="10%";
					document.getElementById("DropperDiv").style.top="10%";
					$("#dropperSoln1").css({display:'block' });
					$("#dropperSoln1").animate({left:'5px',height:'50px',top:'65%'});
					pickSlnFlag=1;
				}
				else
				{
					document.getElementById("DropperDiv").style.left="293px";
					document.getElementById("DropperDiv").style.top="140px";	
				}
			}
		},
		stop: function() {
		
			var l = ( 100 * parseFloat($("#DropperDiv").position().left / parseFloat($("#DropperDiv").parent().width())) ) ;
			var t = ( 100 * parseFloat($("#DropperDiv").position().top / parseFloat($("#DropperDiv").parent().height())) ) ;
			// $("#DropperDiv").css("left", l);
			// $("#DropperDiv").css("top", t);

			 //console.log(l);
			 //console.log(t);
			if(pickSlnFlag==0)
			{
				document.getElementById("DropperDiv").style.left="52%";
				document.getElementById("DropperDiv").style.top="43%";
			}
			 else if(pickSlnFlag==1)
			{
				 if((l>=74)&&(l<=80)&&(t>=0)&&(t<=20)){
					document.getElementById("DropperDiv").style.left="77%";
					document.getElementById("DropperDiv").style.top="10%";
					$("#testtubeSoln").css({display:'block' });
					$("#dropperSoln1").animate({left:'10px',height:'0px',top:'124px'});
					//$("#testtubeSoln").delay(10).animate({height:'27%',top:'53%',left:'20%'});
					$('#drops1').css({display:'block',top:'150px',left:'78.5%'});
					$('#drops2').css({display:'block',top:'160px',left:'78.5%'});
					$('#drops2').animate({top:'60.5%'});			
					$('#drops1').animate({top:'61%'},500,function(){	
					$('#drops1,#drops2').css({display:'none'});
					document.getElementById("DropperDiv").style.left="52%";
					document.getElementById("DropperDiv").style.top="43%";
					});
					$( "#DropperDiv" ).draggable({ disabled: true });
					$("#maskDiv").css({display:'block' });
					corkflag=1;
					takeCork();
				}
				else
				{
					document.getElementById("DropperDiv").style.left="25%";
					document.getElementById("DropperDiv").style.top="20%";
				}
			}
		}
	});
	
}
//code for next button
function NextScene()
{
	if(sceneFlag==1)
	{
		
	sceneFlag=2;
	instructions=gt.gettext("<li value='6'>Clear solution of lime water is obtained as the suspension of slaked lime settle down at the bottom of the beaker.</li><br />")+gt.gettext("<li>Drag the dropper and dip it in the beaker to suck lime water into it, and then drag it to the test tube to pour the solution into the test tube.</li><br />")+gt.gettext("<li>Click on the 'Next' button.</li><br />");
	document.getElementById("instrList").innerHTML=instructions;
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/BGTwo.gif';
	bgCanvasctx.drawImage(bgCanvasimg,0,10);
	
	document.getElementById("animLoad").style.visibility="hidden";
	$("#displayQuicklimeDiv").css({left:'14%',top:'78%'});
	$('#displayQuicklimeDiv').html(labelArray[2]);
	$("#displaywaterDiv").css({display:'none' });
	//$("#BeakerSoln").css({display:'none' });
	$("#redmarkDiv").css({display:'none' });
	$("#readingMask").css({display:'none' });
	$("#waterstillImg").css({display:'none' });
	$("#thermometerbeakerImg").css({display:'none' });
	$("#BeakerSlaked").css({display:'none' });
	$("#SpatullaDiv").css({display:'none' });
	$("#watchglassImg").css({display:'none' });
	$("#thermometerLabel").css({display:'none' });
	$("#SlakedlimestillImg").css({display:'block' });
	$("#dropperstandImg").css({display:'block' });
	$("#nextbtnImg").css({display:'none' });
	$("#NextDiv").css({display:'none' });
	$("#displayNextDiv").css({display:'none' });
	$("#testtubestandImg").css({display:'block' });
	$("#dropperImg").css({display:'block' });
	$("#DropperDiv").css({display:'block' });
	$("#testtubeImg").css({display:'block' });
	$("#corkTube").css({display:'block' });
	$("#inferenceDiv").css({display:'none' });
	$("#waterlabel").css({display:'none' });
	if(percent=="0"|| winWidth<768){
		$("#corkTube").css({"left": "78%","top":"25%"})
	}
	else{
	
	}
	dropperDrag();
	}
	else if(sceneFlag==2)
	{
		sceneFlag=3;
	instructions=gt.gettext("<li value='9'>Click on the 'Blow' button 3-4 times to blow the exhaled air into the tube.</li><br />")+
	gt.gettext("<li>Click on the inference icon to view the inference.</li><br />");
	document.getElementById("instrList").innerHTML=instructions;
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	bgCanvasimg.src=simPath+'images/boyblowing.gif';
	$("#displayQuicklimeDiv").css({left:'83%',top:'82%',width:'18%',height: '21px'});
	$('#displayQuicklimeDiv').html(labelArray[3]);
	$("#displaywaterDiv").css({display:'none' });
	$("#corkTube").css({display:'none' }); 
	$("#nextbtnImg").css({display:'none' });
	$("#NextDiv").css({display:'none' });
	$("#displayNextDiv").css({display:'none' }); 
	$("#boyblowingSln").css({display:'block' });  
	$("#DropperDiv").css({display:'none' });
	$("#testtubeSoln").css({display:'none' });
	$("#testtubeImg").css({display:'none' });
	$("#BeakerSlaked").css({display:'none' });
	$("#SlakedlimestillImg").css({display:'none' });
	$("#maskDiv").css({display:'none' });
	
	$("#maskDiv").css({display:'none' });
	$("#BlowbtnImg").css({display:'block' });
	$("#BlowDiv").css({display:'block' });
	$("#mouthstillImg").css({display:'block' });
	$("#waterlabel").css({display:'none' });
	//$("#BeakerSoln").css({display:'none' });
	$("#redmarkDiv").css({display:'none' });
	$("#readingMask").css({display:'none' });
	$("#thermometerbeakerImg").css({display:'none' });
	$("#waterstillImg").css({display:'none' });
	$("#BeakerSlaked").css({display:'none' });
	$("#SpatullaDiv").css({display:'none' });
	$("#watchglassImg").css({display:'none' });
	$("#thermometerLabel").css({display:'none' });
	
	$("#dropperstandImg").css({display:'none' });
	$("#testtubestandImg").css({display:'none' });
	$("#dropperImg").css({display:'none' });
	$("#BeakerSlaked").css({display:'none' });
	$("#inferenceDiv").css({display:'none' });
	}
	
}

// code for drag cork
function takeCork()
{
	
	$("#corkTube").draggable({
	
		containment: "#draggable",
		snap: '.gridlines',
		
		stop: function () {
		var l = ( 100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())) ) ;
		var t = ( 100 * parseFloat($(this).position().top / parseFloat($(this).parent().height())) ) ;
		$(this).css("left", l);
		$(this).css("top", t);
		//console.log(l);
		//console.log(t);

		//if(($("#corkTube").position().left>=369)&&($("#corkTube").position().left<=401)&&($("#corkTube").position().top>=-90)&&($("#corkTube").position().top<=135))
		if((l>=67)&&(l<=71)&&(t>=5)&&(t<=25))
			{
		
				corkflag=0;
				if(percent=="0"|| winWidth<768){
					document.getElementById("corkTube").style.left="68.5%";
					document.getElementById("corkTube").style.top="10%";
				}
				else{
					document.getElementById("corkTube").style.left="69.5%";
					document.getElementById("corkTube").style.top="22.5%";
				}
				
				$("#corkTube").css({ WebkitTransform: 'rotate(-6deg)'});
				$("#corkTube").css({ '-moz-transform': 'rotate(-6deg)'});
 			  	$("#corkTube").css({'-o-transform':'rotate(-6deg)'});
    			$("#corkTube").css({'transform':'rotate(-6deg)'});
	  
				$("#corkTube").css({ 'z-index':'6'});
				
				$( "#corkTube" ).draggable({ disabled: true });
				$("#nextbtnImg").css({display:'block' });
				$("#NextDiv").css({display:'block' });
				$("#displayNextDiv").css({display:'block' });
			}
			else
			{
				if(percent=="0"|| winWidth<768)
					{
						$("#corkTube").css({"left": "78%","top":"25%"})
					}
				else{
						document.getElementById("corkTube").style.left="81%";
						document.getElementById("corkTube").style.top="34%";
					}
			}
		}
	});
}

//code for blowing air
var count2=0;
function blowAir()
{
	blowCount++;
	$('#bubbles2').css({display:'block'});
	$("#mouthblowImg").css({display:'block'});
	$("#mouthstillImg").css({display:'none'});
	if(blowCount==1)
	{
				$('#boyblowingSln').delay(100).animate({opacity:'0.6'});
	}
	if(blowCount==2)
	{
				$('#boyblowingSln').delay(100).animate({opacity:'0.8'});
	}
	if(blowCount<3)
	{
		timer4=setInterval(blowBubble,1);
	}
	else if(blowCount>=3)
	{
		$('#boyblowingSln').css({display:'block'});
		$('#boyblowingSln').animate({opacity:'1'},1500,function(){	
		$('#bubbles2').css({display:'none'});
		$("#inferenceDiv").css({display:'block'});
		
		$("#mouthblowImg").css({display:'none'});
$("#mouthstillImg").css({display:'block'});
		$("#BlowbtnImg").css({display:'none' });
		$("#BlowDiv").css({display:'none' });
		$('#displayQuicklimeDiv').css({display:'none' });
		$("#displaywaterDiv").css({display:'none' });
		});
	}
}
function blowBubble()
{
	count2++;
	if(count2>=700)
	{
		
		clearInterval(timer4);
		$('#bubbles2').css({display:'none'});
$("#mouthblowImg").css({display:'none'});
$("#mouthstillImg").css({display:'block'});
				
				count2=0;
	}
	
	
}
function corkup()
{
	if(corkflag==1)
	{
	$("#corkTube").css({'z-index':'10' });
	$("#maskDiv").css({'z-index':'7' });
	}
}

function corkdown()
{
	if(corkflag==1)
	{
	$("#corkTube").css({'z-index':'9' });
	$("#maskDiv").css({'z-index':'10' });
	}
	
}

// JavaScript Document