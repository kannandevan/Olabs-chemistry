// JavaScript Document

//Load  BG
var canvas = document.getElementsByTagName('canvas')[0];
canvas.width =742;
canvas.height =623;
var ctx = canvas.getContext('2d');
var img = new Image;
img.onload = function(){ ctx.drawImage(img,-90,-100);
 };
img.src=simPath+'images/Bg.png';

//Load total BG
var totalBgCanvas = document.getElementById('bgtotal');
var totalBgCtx = totalBgCanvas.getContext('2d');
totalBgCanvas.width = 624;
totalBgCanvas.height = 514;
var totalBgImg = new Image;
totalBgImg.onload = function(){ totalBgCtx.drawImage(totalBgImg,0,20);
 };
totalBgImg.src=simPath+'images/bgTotal.png';

//Load bell
var bellCanvas = document.getElementById('bell');
var bellCtx = bellCanvas.getContext('2d');
var bellImg = new Image;
bellImg.onload = function(){ bellCtx.drawImage(bellImg,0,0);
 };

bellImg.src=simPath+'images/bell.png';

function checkWidth()
{
	if(($(window).width())<768)
		{
			bellCanvas.style.left= 55+"%";
			bellCanvas.style.top= 15+"%";
			bellCanvas.style.width= 50+"%";
		}
	else
		{
			bellCanvas.style.left= 54+"%";
			bellCanvas.style.top= 18+"%";
			bellCanvas.style.width= 58+"%";
		}
}
//Load Graphdraw canvas
var lineCanvas = document.getElementById('linegraph');
var lineCtx = lineCanvas.getContext('2d');

var pressure=1;
var timerOn=false;
var changePos=0;
var bellSound;
var timer;
//Graph variables
var a = 6;
var b = 1;
var a1 = 30;
var wid = 30;
var copy_a = 6;
var copy_a1 = 30;//1
var copy_wid = 30;
var flag = 0;
var partical_a = 6;
var partical_a1 = 30;
var partical_wid = 30;
var partical_flag = 0;
var loop_a = -3;//2;
var loop_a1 = 1;
var loop = 0;
var setflag = 0;
var low=0;
var high=1;
var controlStrings
var toolTipMsg;
window.onload = function(){	
	controlStrings=[gt.gettext("Instruction:"),gt.gettext("Click on the Power On button."),gt.gettext("Click on the Show Wave Propagation check box."),gt.gettext("Move slider to vary the air pressure."),gt.gettext("Air pressure: "),gt.gettext("Show Wave Propagation"),gt.gettext("Reset"),gt.gettext("Power On"),gt.gettext("atm"),gt.gettext("Power Off")];
	toolTipMsg=[gt.gettext("Vaccuum Pump"),gt.gettext("Battery"),gt.gettext("Key"),gt.gettext("Bell Jar"),gt.gettext("Cork"),gt.gettext("Electric Bell"),gt.gettext("Connecting Wires") ];
	document.getElementById("expName").innerHTML=gt.gettext("Bell Jar Experiment");
	//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULL SCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	$('#instHead').html(controlStrings[0]);
	$('#instr1').html(controlStrings[1]);
	$('#instr2').html(controlStrings[2]);
	$('#instr3').html(controlStrings[3]);
	$('#pressureTxt').html(controlStrings[4]);
	$('#waveTxt').html(controlStrings[5]);
	$('#atmtxt').html(controlStrings[8]);
	$('#powerOn').attr('value', controlStrings[7]);
	$('#reset').attr('value', controlStrings[6]);
	showToolTip('pump',toolTipMsg[0],'topMiddle','topMiddle',130,2,15+"px",'bottomMiddle');
	showToolTip('battery',toolTipMsg[1],'bottomMiddle','bottomMiddle',130,2,15+"px",'topMiddle');
	showToolTip('key',toolTipMsg[2],'leftMiddle','rightMiddle',130,2,15+"px",'rightMiddle');
	showToolTip('belljartip',toolTipMsg[3],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');
	showToolTip('cork',toolTipMsg[4],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');
	showToolTip('ebell',toolTipMsg[5],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');
	showToolTip('cwires',toolTipMsg[6],'rightMiddle','leftMiddle',130,2,15+"px",'leftMiddle');
}	
function showToolTip(name,msg,tgt,tooltipPos,toolWidth,toolPad,toolFontSize,tipPos){
	$("#"+name).qtip({							
		content: msg,
		position: {corner:{target: tgt,tooltip: tooltipPos}
		},style: { width:toolWidth,padding:toolPad,background: '#FFFF99',color: 'black',textAlign: 'center',			
		fontSize:toolFontSize ,border: {width: 1,radius: 5,color: '#FFFFCC'},tip:tipPos }
	});
}
//Get the pressure value from slider
function passPressureValue(Pressure){	
	pressure=Pressure.slice(0,5);	
	document.getElementById("divPressure").innerHTML=pressure+controlStrings[8];
	bellSound.volume=pressure;		
}
//Fn on click of PowerOn button
function powerOn(audioObj){
	bellSound=document.getElementById("bgmusic");
	timerOn=!timerOn;
	if (timerOn){	
	   document.getElementById('bell').style.visibility='hidden';
		document.getElementById('bellMoveimg').style.visibility='visible';
		document.getElementById("volume").style.visibility="visible";	
		document.getElementById("powerOn").value=controlStrings[9];
		$('#connector,#key').css('display','block');
		document.getElementById("graphwave").disabled=false;
		$('#pressure').removeAttr("disabled");
		if(document.getElementById("graphwave").checked==true){
			showGraph(true);
		}
		bellSound.play();		
	}else{		
		document.getElementById("volume").style.visibility="hidden";
		document.getElementById("powerOn").value=controlStrings[7];
		$('#connector,#key').css('display','none');
		document.getElementById("graphwave").disabled=true;
		document.getElementById('bell').style.visibility='visible';
		document.getElementById('bellMoveimg').style.visibility='hidden';
		$('#pressure').attr("disabled", "disabled");
		if(document.getElementById("graphwave").checked==true){
			showGraph(false);
		}		
		bellSound.pause();	
	}	
	var t=setTimeout("clearImgTimer()",0);
	
}//Timer start function..clear the bell image
function clearImgTimer()
{
	if (timerOn){
		bellCtx.clearRect(0,0,bellCanvas.width, bellCanvas.height);
		//bellCanvas.style.left=bellCanvas.style.left+15+"px";	
		var s=setTimeout("drawImgTimer()",0);
	}
	
}
//Draw the bell image in timer event
function drawImgTimer(){
    if (!changePos){
	
	 	bellCtx.drawImage(bellImg,-3,0);
	 	changePos=1;	
	}else{
		bellCtx.drawImage(bellImg,0,0);
	 	changePos=0;
	}
	var p=setTimeout("clearImgTimer()",0);	
}

//Fn to show the graph
function showGraph(chkValue){	
	if (chkValue){
			document.getElementById("linegraph").style.visibility="visible";
			timer = setInterval(drawDiagram,1,700,400,60,200,68,150);
	
	}else{
			clearInterval(timer);
			document.getElementById("linegraph").style.visibility="hidden";
		
	}
	
}
//Drawing graph
function drawDiagram(intensity1,intensity2,width1,width2, length1, length2)
		{
			var x1= 0;
			var y1= 0;
					
			lineCtx.clearRect(0,0,lineCanvas.width,lineCanvas.height);
			
			move_particles(intensity1,intensity2,width1,width2, length1, length2);
			for (i=0; i<intensity2; i++)
			{
				
				x1 = randomNumber(10,width2 + 9);
				y1 = randomNumber(0,length2);
				lineCtx.beginPath();
				lineCtx.moveTo(x1,y1);
				lineCtx.lineTo(x1+1, y1);				
				lineCtx.closePath();
				lineCtx.stroke();
			}		
			clearInterval(timer);
			timer=setInterval(drawDiagram,25,700*pressure,200*pressure,60,400,68,150);
		}
		function move_particles(intensity1,intensity2,width1,width2, length1, length2)
		{
			if ((a<220))
			{
				for (var i=0; i<intensity1; i++)
				{
					x1 = randomNumber(0,width1);
					y1 = randomNumber(0,length1);

					x1 = randomNumber(a,a1);//x,width
					y1 = randomNumber(b,150);//y,height
					
					lineCtx.beginPath();
					lineCtx.moveTo(x1,y1);
					lineCtx.lineTo(x1+1, y1);	
					lineCtx.closePath();			
					lineCtx.stroke();					
					if (a == 70)
					{
						flag = 1;
					}
				}
				a++;
				a1++;
			}
			if ((a>=163.5))
			{//160&&(a<194)
				x1 = randomNumber(0,wid);//x,width
				y1 = randomNumber(0,150);//y,height
				a = a + .5;
				wid = wid - 1;
				if ((wid>1)&&(a>180))
				{
					for (var i=0; i<intensity1; i++)
					{
						x11 = randomNumber(loop_a,loop_a1);//x,width
						y11 = randomNumber(1,150);//y,height
						
						lineCtx.beginPath();
						lineCtx.moveTo(x11,y11);
						lineCtx.lineTo(x11+1, y11);	
						lineCtx.closePath();			
						lineCtx.stroke();
					}
					loop_a = loop_a + .5;
					loop_a1 = loop_a1 + .5;
					if (loop_a1 <= 22)
					{
						loop_a1 = loop_a1 + 1;
					}
				}
				if (wid == 1)
				{
					a = -2;//33;
					b = 1;
					a1 = wid = 25;//43//57
					loop_a1 = 1;
					loop_a = -3;
					drawDiagram(intensity1,intensity2,width1,width2, length1, length2);
				}
			}

			//2nd partical code
			var x11 = 0;
			var y11 = 0;

			if ((flag==1)&&(copy_a<210))
			{
				for (var i=0; i<intensity1; i++)
				{
					x11 = randomNumber(copy_a,copy_a1);//x,width
					y11 = randomNumber(1,150);//y,height
					
					lineCtx.beginPath();
					lineCtx.moveTo(x11,y11);
					lineCtx.lineTo(x11+1, y11);	
					lineCtx.closePath();			
					lineCtx.stroke();
				}
				copy_a++;
				copy_a1++;
				if (copy_a == 70)
				{
					partical_flag = 1;
				}

			}

			if ((copy_a>=163.5))
			{//160
				x11 = randomNumber(0,copy_wid);//x,width
				y11 = randomNumber(0,150);//y,height
				copy_a = copy_a + .5;
				copy_wid = copy_wid - 1;

				if ((wid>1)&&(copy_a>180))
				{
					for (var i=0; i<intensity1; i++)
					{
						x11 = randomNumber(loop_a,loop_a1);//x,width
						y11 = randomNumber(1,150);//y,height
						
						lineCtx.beginPath();
						lineCtx.moveTo(x11,y11);
						lineCtx.lineTo(x11+1, y11);	
						lineCtx.closePath();			
						lineCtx.stroke();
					}
					loop_a = loop_a + .5;
					loop_a1 = loop_a1 + .5;
					if (loop_a1 <= 22)
					{
						loop_a1 = loop_a1 + 1;
					}
				}
				if (copy_wid == 1)
				{
					copy_a = -2;//18//33;
					b = 1;
					copy_a1 = copy_wid = 25;//43//57
					loop_a1 = 1;
					loop_a = -3;
					//loop_a=-1
					drawDiagram(intensity1,intensity2,width1,width2, length1, length2);
				}
			}
			//3rd partical code
			var x3= 0;
			var y3= 0;

			if ((partical_flag==1)&&(partical_a<210))
			{
				for (var i=0; i<intensity1; i++)
				{
					x3 = randomNumber(partical_a,partical_a1);//x,width
					y3 = randomNumber(1,150);//y,height
					
					lineCtx.beginPath();
					lineCtx.moveTo(x3,y3);
					lineCtx.lineTo(x3+1, y3);	
					lineCtx.closePath();			
					lineCtx.stroke();
				}
				partical_a++;
				partical_a1++;
			}

			if ((partical_a>=163.5))
			{
				x3 = randomNumber(0,partical_wid);//x,width
				y3 = randomNumber(0,150);//y,height
				partical_a = partical_a + .5;
				partical_wid = partical_wid - 1;
				if ((partical_wid>1)&&(partical_a>180))
				{
					for (var i=0; i<intensity1; i++)
					{
						x11 = randomNumber(loop_a,loop_a1);//x,width
						y11 = randomNumber(1,150);//y,height
						
						lineCtx.beginPath();
						lineCtx.moveTo(x11,y11);
						lineCtx.lineTo(x11+1, y11);	
						lineCtx.closePath();			
						lineCtx.stroke();
					}
					loop_a = loop_a + .5;
					loop_a1 = loop_a1 + .5;
					if (loop_a1 <= 22)
					{
						loop_a1 = loop_a1 + 1;
					}
				}
				if (partical_wid == 1)
				{
					partical_a = -2;//18//33;
					b = 1;
					partical_a1 = partical_wid = 30;//43//57
					loop_a1 = 1;
					loop_a = -3;
					drawDiagram(intensity1,intensity2,width1,width2, length1, length2);
				}
			}

		}

function randomNumber(low,high)
{
	return Math.floor(Math.random() * (1+high-low)) + low;
}
	


