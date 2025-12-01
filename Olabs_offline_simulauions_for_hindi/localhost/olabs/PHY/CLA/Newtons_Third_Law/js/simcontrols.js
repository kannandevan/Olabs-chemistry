// JavaScript Document


window.onload = function init(){
	
	document.getElementById("expName").innerHTML = gt.gettext("Newton's Third Law of Motion");
	document.getElementById("var1").innerHTML =gt.gettext("Variables");
	document.getElementById("var2").innerHTML = gt.gettext("Acting force (N): ");
	document.getElementById("reset").value = gt.gettext("Reset");
	//document.getElementsByClassName("labName")[0].innerHTML = gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT");
	//$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
}

	// Function called for slider movement
function forceApplied(newVal){
	document.getElementById("force").innerHTML=newVal;
	
	if(newVal<=5){
		val=newVal;	
	}else{
		val=5;	
	}
}
 
 
var bal_pos2=document.getElementById("springBal02Canvas").offsetLeft;
var bal_pos3=document.getElementById("springBal03Canvas").offsetLeft;
var bal_pos4=document.getElementById("springBal04Canvas").offsetLeft; 	 	
var bal_pos5=document.getElementById("springBal05Canvas").offsetLeft;
var spring_posX=document.getElementById("handCanvas").offsetLeft;
var point_pos1=document.getElementById("pointer01").offsetLeft;
var point_pos2=document.getElementById("pointer02").offsetLeft;
var scale1_posX=document.getElementById("scaleImg01").offsetLeft;
var scale2_posX=document.getElementById("scaleImg02").offsetLeft;
var mark1_posX=document.getElementById("mark01").offsetLeft;
var mark2_posX=document.getElementById("mark02").offsetLeft;


/// canvas for back ground image
var canvas = document.getElementById('bgCanvas');
// canvas.width = 570;
// canvas.height = 440;
var ctx = canvas.getContext('2d');
var img = new Image;
img.onload = function(){ 
	ctx.drawImage(img,0,0);
};
img.src=simPath+'images/bg.png';


/// canvas for table image
var tableCanvas = document.getElementById('tableCanvas');
tableCanvas.width = 480;
tableCanvas.height = 400;
var tableCtx = tableCanvas.getContext('2d');
var tableImg = new Image;
tableImg.onload = function(){ 
	tableCtx.drawImage(tableImg,0,0);
};
tableImg.src=simPath+'images/table.png';


/// canvas for standtop image
var standtopCanvas = document.getElementById('standtopCanvas');
// standtopCanvas.width = 480;
// standtopCanvas.height = 400;
var standtopCtx = standtopCanvas.getContext('2d');
var standtopImg = new Image;
standtopImg.onload = function(){ 
	standtopCtx.drawImage(standtopImg,0,0);
};
standtopImg.src=simPath+'images/standtop.png';


/// canvas for springBal01 image
var springBal01Canvas = document.getElementById('springBal01Canvas');
// springBal01Canvas.width = 480;
// springBal01Canvas.height = 400;
var springBal01Ctx = springBal01Canvas.getContext('2d');
var springBal01Img = new Image;
springBal01Img.onload = function(){ 
	springBal01Ctx.drawImage(springBal01Img,0,0);
};
springBal01Img.src=simPath+'images/springBal01.png';


/// canvas for springBal02 image							
var springBal02Canvas = document.getElementById('springBal02Canvas');
// springBal02Canvas.width = 480;
// springBal02Canvas.height = 400;
var springBal02Ctx = springBal02Canvas.getContext('2d');
var springBal02Img = new Image;
springBal02Img.onload = function(){ 
	springBal02Ctx.drawImage(springBal02Img,0,0);
};
springBal02Img.src=simPath+'images/springBal02.png';


/// canvas for springBal03 image
var springBal03Canvas = document.getElementById('springBal03Canvas');
// springBal03Canvas.width = 480;
// springBal03Canvas.height = 400;
var springBal03Ctx = springBal03Canvas.getContext('2d');
var springBal03Img = new Image;
springBal03Img.onload = function(){ 
	springBal03Ctx.drawImage(springBal03Img,0,0);
};
springBal03Img.src=simPath+'images/springBal03.png';


/// canvas for springBal04 image
var springBal04Canvas = document.getElementById('springBal04Canvas');
// springBal04Canvas.width = 480;
// springBal04Canvas.height = 400;
var springBal04Ctx = springBal04Canvas.getContext('2d');
var springBal04Img = new Image;
springBal04Img.onload = function(){ 
	springBal04Ctx.drawImage(springBal04Img,0,0);
};
springBal04Img.src=simPath+'images/springBal04.png';


/// canvas for springBal05 image
var springBal05Canvas = document.getElementById('springBal05Canvas');
// springBal05Canvas.width = 480;
// springBal05Canvas.height = 400;
var springBal05Ctx = springBal05Canvas.getContext('2d');
var springBal05Img = new Image;
springBal05Img.onload = function(){ 
	springBal05Ctx.drawImage(springBal05Img,0,0);
};
springBal05Img.src=simPath+'images/springBal05.png';


/// canvas for hand image
var handCanvas = document.getElementById('handCanvas');
// handCanvas.width = 160;
// handCanvas.height = 200;
var handCtx = handCanvas.getContext('2d');
var handImg = new Image;
handImg.onload = function(){ 
	handCtx.drawImage(handImg,0,0);
};
handImg.src=simPath+'images/hand.png';



 function move(){
	
	var width=$("#sidebar-wrapper").width();
	var parentWidth=$("#sidebar-wrapper").offsetParent().width();
	var percent=100*width/parentWidth;
	//console.log(percent);
	var winWidth=$(window).width();
	var canvasOffset=$("#wireCanvas").offset();
	//console.log(winWidth);
	if(percent=="0" || winWidth<768)
		{
			var f1=0.8;
			var f2=2;
			var f3=4;
			var f4=50;
			var f5=28.8;
			var f6=13.8;
			var f7=2.25;
			var f8=0.8;
			var f9=1.8;
			var f10=4;
			var f11=8;
			//console.log("Inside IFPercentMove");
			var balNew = 16 + f1*Number(val);
			var springNew = 75 + f2*Number(val);
			var newPoint1 = point_pos1 + f3*Number(val);
			var newPoint2 = point_pos2 - f4*Number(val);
			var newScale1 = -122- f5*Number(val);
			var newScale2 = -183.5+ f6*Number(val);
			var newMark1 = 20 + f7*Number(val);
			var newMark2 = 60.5 + f8*Number(val);
			var balNew3 = 39 + f1*Number(val);
			var balNew4 = 40 + f1*Number(val);	
			var balNew5 = 46 + f9*Number(val);

			// console.log("bal_pos2="+bal_pos2);
			// console.log("bal_pos3="+bal_pos3);
			// console.log("bal_pos4="+bal_pos4);
			// console.log("bal_pos5="+bal_pos5);


			if ( $.browser.mozilla == true){
			newScale1 += 3;
			newScale2 += 3;
			}

			document.getElementById("springBal02Canvas").style.left=balNew+"%";
			document.getElementById("springBal03Canvas").style.left=balNew3+"%";
			document.getElementById("springBal04Canvas").style.left=balNew4+"%";
			document.getElementById("springBal05Canvas").style.left=balNew5+"%";
			document.getElementById("handCanvas").style.left=springNew+"%";
			document.getElementById("scaleImg01").style.left=newScale1+"%";
			document.getElementById("scaleImg02").style.left=newScale2+"%";
			document.getElementById("mark01").style.left=newMark1+"%";
			document.getElementById("mark02").style.left=newMark2+"%";
		}
		else 
		{	
			// Variable declaration
			var f1=0.8;
			var f2=2;
			var f3=4;
			var f4=50;
			var f5=28.8;
			var f6=14.15;
			var f7=2.25;
			var f8=0.01;
			var f9=1.8;
			var f10=4;
			var f11=8;
			//console.log("Outside ELSEPercentMove");
			var balNew = 101-bal_pos2 + f1*Number(val);
			var springNew = 466-spring_posX + f2*Number(val);
			var newPoint1 = point_pos1 + f3*Number(val);
			var newPoint2 = point_pos2 - f4*Number(val);
			var newScale1 = 117+scale1_posX - f5*Number(val);
			var newScale2 = 185+scale2_posX + f6*Number(val);
			var newMark1 = 128-mark1_posX + f7*Number(val);
			var newMark2 = 384-mark2_posX + f8*Number(val);
			var balNew3 = 246-bal_pos3 + f1*Number(val);
			var balNew4 = 252-bal_pos4 + f1*Number(val);	
			var balNew5 = 290-bal_pos5 + f9*Number(val);

			// console.log("bal_pos2="+bal_pos2);
			// console.log("bal_pos3="+bal_pos3);
			// console.log("bal_pos4="+bal_pos4);
			// console.log("bal_pos5="+bal_pos5);


			if ( $.browser.mozilla == true){
			newScale1 += 3;
			newScale2 += 3;
			}

			document.getElementById("springBal02Canvas").style.left=balNew+"%";
			document.getElementById("springBal03Canvas").style.left=balNew3+"%";
			document.getElementById("springBal04Canvas").style.left=balNew4+"%";
			document.getElementById("springBal05Canvas").style.left=balNew5+"%";
			document.getElementById("handCanvas").style.left=springNew+"%";
			document.getElementById("scaleImg01").style.left=newScale1+"%";
			document.getElementById("scaleImg02").style.left=newScale2+"%";
			document.getElementById("mark01").style.left=newMark1+"%";
			document.getElementById("mark02").style.left=newMark2+"%";
		}
}
