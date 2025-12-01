/*
author:anishasl
Date:05/03/2014
file name:simcontrols.js
*/
// Variable declaration
var labelArray=[];	
var gt;
var contentArray;
var instrArray=[];
var stoneWeightArray=[84,83,82,80];
var steelWeightArray=[75,77,79,81];
var woodWeightArray=[83,84,82,81];
var randWood,randStone,randSteel;
var weightObj=75;
var initialLen=150;
var val1,val2=200;
var oldVal=50;
var oldVal2=50;
var initialLen1,initialLen;
var WReviesed=0;
var P=50;
var Q=50;
var w=0;
var theta=0;
var CosTheta=0;
var pressing =false;//scale pressing status
//Angle
var totdegree;
var angle;
var totAngle;
var sl1Degree;
var rotatepro=0;var count=0;var count1=0;
var rotateSca=0;var countSca=0;var countSca1=0;
var thetaIndegree=0;
var parallelogramFlag=0;//check the parallelogram status
//Left weight,right weight and object weight
var leftw1=5;
var rightw2=5;
var W=8;//Resultant weight
var point5;
var ansWeight,ansWeightHigh,ansWeightLow;

// canvas for background image
var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
bgCanvasctx.fillStyle = "#FFFFFF";
bgCanvasctx.fillRect(0,0,560,335);

var ParallelCanvas = document.getElementById('ParallelCanvas');
ParallelCanvas.width = 439;
ParallelCanvas.height = 400;
var ParallelCanvasCtx = ParallelCanvas.getContext('2d');
ParallelCanvasCtx.fillStyle = "#FFFFFF";
ParallelCanvasCtx.fillRect(0,0,439,400);

var div = document.getElementById('ObjImgDiv');

// function called on loading..
window.onload = function init(){

		
	document.getElementById("expName").innerHTML=gt.gettext("Parallelogram Law of Vectors");
	
	instrArray=[gt.gettext('Select an object:'),gt.gettext('Change in hanging weight:'),gt.gettext('Right Side:'),gt.gettext('50 g'),gt.gettext('Show Parallelogram'),gt.gettext('Hide Parallelogram'),gt.gettext('Show Protractor'),gt.gettext('Hide Protractor'),gt.gettext('Show Scale'),gt.gettext('Hide Scale')];
	
	contentArray=[gt.gettext('Drag the tubes to</br>adjust the angle.'),gt.gettext('Drag the turning fork</br>towards the end of the tube.'),gt.gettext('Click here to</br>show/hide the protractor.'),gt.gettext('Click here to </br>show/hide the tube'),gt.gettext('Click here to</br>show/hide the wave.')];
	
	c=document.getElementById("myCanvas");
	
	$(document).ready(function() {
		//$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	
		
		//labels
		document.getElementById('slctObjLbl').innerHTML=instrArray[0];
		document.getElementById('ChangeWeighLbl').innerHTML=instrArray[1];
		document.getElementById('RightsideLbl').innerHTML=instrArray[2];
		document.getElementById('rightVal').innerHTML=instrArray[3];	
		document.getElementById('LeftsideLbl').innerHTML=gt.gettext('Left Side:');
		document.getElementById('LeftVal').innerHTML=instrArray[3];
		document.getElementById('LabelDiv').innerHTML=gt.gettext('20 g = 1 cm');
		document.getElementById('WoodLabel').innerHTML=gt.gettext('Wood');
		document.getElementById('StoneLabel').innerHTML=gt.gettext('Stone');
		document.getElementById('SteelLabel').innerHTML=gt.gettext('Steel');
		document.getElementById('OPoint').innerHTML=gt.gettext('O');
		document.getElementById('BPoint').innerHTML=gt.gettext('B');
		document.getElementById('APoint').innerHTML=gt.gettext('A');
		document.getElementById('DPoint').innerHTML=gt.gettext('D');
		document.getElementById('rightminval').innerHTML=gt.gettext('50');
		document.getElementById('rightmaxval').innerHTML=gt.gettext('100');
		document.getElementById('leftminval').innerHTML=gt.gettext('50');
		document.getElementById('leftmaxval').innerHTML=gt.gettext('100');
		document.getElementById('InputTxtLbl').innerHTML=gt.gettext('Enter the weight of the object:');
		document.getElementById('gramLabel').innerHTML=gt.gettext('g');
		document.getElementById('ResultLbl').innerHTML=gt.gettext('Result');
		document.getElementById('WarningLbl').innerHTML=gt.gettext('Please enter the value');
			
		$('#ParallelogramBtn').attr('value',instrArray[4]);
		$('#protractorBtn').attr('value',instrArray[6]);
		$('#scaleBtn').attr('value',instrArray[8]);	
		$('#ResetBtn').attr('value',gt.gettext('Reset'));
		$('#submit').attr('value',gt.gettext('Check'));
		
		
		//randomly select weight
		randStone= stoneWeightArray[Math.floor(Math.random()*stoneWeightArray.length)];
		weightObj=	randStone;
		ansWeight=weightObj;
		W=Number(weightObj/10);
		initialLen=(weightObj*2)+50;//setting initial weight from random weights
		initialLen1=(weightObj*2)+parseInt($("#leftMass").val());
		initialLen2=(weightObj*2)+parseInt($("#rightMass").val());
	//initialLen2=(weightObj*2)+parseInt($("#rightMass").val());
		//initialLen2=(weightObj*2)+50;
		val1=Number(initialLen1)-(10*1.5);
		initialLen1=val1;
		val2=Number(initialLen2)-(10*1.5);
		initialLen2=val2;
		/*//left line
		bgCanvasctx.beginPath();
		bgCanvasctx.moveTo(102,20);
		bgCanvasctx.lineTo(102,initialLen);	
		//right line
		bgCanvasctx.moveTo(435,20);
		bgCanvasctx.lineTo(435,initialLen);	
		bgCanvasctx.lineWidth = 1;
		bgCanvasctx.stroke();*/
			
		setPosition();//get position of the parallelogram
		drawWeightLines(val1,val2);	//call for right weight line draw	
		var barheight=initialLen+5;	
		$('#RightWeight,#LeftWeight').css({top:val1+'px'});
		$('#RightBar').css({top:barheight+'px'});
	});
}
//click on wood
function ClickWood(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	$("#ObjwoodImg").css({'display':'block'});
	$("#ObjStoneImg,#ObjSteelImg").css({'display':'none'});
	$("#ObjwoodImg").css({'left':point5[0].x-40+"px",top:point5[0].y+30+"px"});
	randWood = woodWeightArray[Math.floor(Math.random() * woodWeightArray.length)];
	weightObj=randWood;
	ansWeight=weightObj;
	W=weightObj/10;
	initialLen=(weightObj*2)+50;//set wood weight as initial weight
	initialLen1=(weightObj*2)+parseInt($("#leftMass").val());
	initialLen2=(weightObj*2)+parseInt($("#rightMass").val());;
	val1=Number(initialLen1)-(10*1.5);
	initialLen1=val1;
	val2=Number(initialLen2)-(10*1.5);
	initialLen2=val2;
	setPosition();
	drawWeightLines(val1,val2);	//call for right weight line draw	
	$('#RightWeight').css({top:val2+'px'});
	$('#LeftWeight').css({top:val1+'px'});
	if(parallelogramFlag){		
		ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
		drawParalleogram();		
	}
}
//click on stone 
function ClickStone(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	$("#ObjwoodImg,#ObjSteelImg").css({'display':'none'});
	$("#ObjStoneImg").css({'display':'block'});
	$("#ObjStoneImg").css({'left':point5[0].x-36+"px",top:point5[0].y+30+"px"});
	randStone= stoneWeightArray[Math.floor(Math.random()*stoneWeightArray.length)];
	weightObj=randStone;
	ansWeight=weightObj;
	W=weightObj/10;
	initialLen=(weightObj*2)+50;//set stone weight as initial weight
	//0.005*(parseInt($("#leftMass").val())*parseInt($("#rightMass").val()))
	initialLen1=(weightObj*2)+parseInt($("#leftMass").val());
	initialLen2=(weightObj*2)+parseInt($("#rightMass").val());;
	val1=Number(initialLen1)-(10*1.5);
	initialLen1=val1;
	val2=Number(initialLen2)-(10*1.5);
	initialLen2=val2;
	setPosition();
	drawWeightLines(val1,val2);	//call for right weight line draw	
	$('#RightWeight').css({top:val2+'px'});
	$('#LeftWeight').css({top:val1+'px'});
	if(parallelogramFlag){		
	ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
	drawParalleogram();		
	}
}
//click on steel object
function ClickSteel(){
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
	$("#ObjwoodImg,#ObjStoneImg").css({'display':'none'});
	$("#ObjSteelImg").css({'display':'block'});
	$("#ObjSteelImg").css({'left':point5[0].x-18+"px",top:point5[0].y+30+"px"});
	randSteel= steelWeightArray[Math.floor(Math.random()*steelWeightArray.length)];
	weightObj=randSteel;
	ansWeight=weightObj;
	W=weightObj/10;
	initialLen=(weightObj*2)+50;//set steel weight as initial weight
	initialLen1=(weightObj*2)+parseInt($("#leftMass").val());
	initialLen2=(weightObj*2)+parseInt($("#rightMass").val());;
	val1=Number(initialLen1)-(10*1.5);
	initialLen1=val1;
	val2=Number(initialLen2)-(10*1.5);
	initialLen2=val2;
	setPosition();
	drawWeightLines(val1,val2);	//call for right weight line draw	
	$('#RightWeight').css({top:val2+'px'});
	$('#LeftWeight').css({top:val1+'px'});
	if(parallelogramFlag){		
		ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
		drawParalleogram();		
	}
}
//move right weight slider
function changeRightWeight(val){
	Q=val;	
	$("#rightVal").html((parseInt($("#rightMass").val()))+gt.gettext(' g'));
	switch (Number(val))
	{//set right side weight 
		case 50:$("#bar6,#bar7,#bar8,#bar9,#bar10").css({'display':'none'});
		break;
		case 60:$("#bar7,#bar8,#bar9,#bar10").css({'display':'none'});
		$("#bar6").css({'display':'block'});
		break;
		case 70:$("#bar8,#bar9,#bar10").css({'display':'none'});
		$("#bar6,#bar7").css({'display':'block'});
		break;
		case 80:$("#bar9,#bar10").css({'display':'none'});
		$("#bar6,#bar7,#bar8").css({'display':'block'});
		break;
		case 90:$("#bar10").css({'display':'none'});
		$("#bar6,#bar7,#bar8,#bar9").css({'display':'block'});
		break;
		case 100:$("#bar6,#bar7,#bar8,#bar9,#bar10").css({'display':'block'});
		break;	
	};	
	if(val<=100)
	{
		if(val==100)
		{
			val=92;
		}
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		var result=val-oldVal2;//taking slider difference		
		val1=Number(initialLen1)-(result*1.5);
		initialLen1=val1;
		val2=Number(initialLen2)+(result*1.5);
		initialLen2=val2;
		rightw2=Number(val)/10;	
		if(parseInt($("#leftMass").val())==parseInt($("#rightMass").val()))
		{
			val2=val1;
			$('#RightWeight,#LeftWeight').css({top:val1+'px'});
		}	
		else
		{
			$('#RightWeight').css({top:val2+'px'});
			$('#LeftWeight').css({top:val1+'px'});
		}
		setPosition();
		drawWeightLines(val1,val2);	//call for right weight line draw		
		$('#RightWeight').css({top:val2+'px'});
		$('#LeftWeight').css({top:val1+'px'});
		oldVal2=val;
		if(parallelogramFlag)
		{	
			ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
			drawParalleogram();	
		}
	}	
}
//move left weight slider
function changeLeftWeight(val){
	P=val;
	var steps=6-((100-val)/10+1);
	$("#LeftVal").html((parseInt($("#leftMass").val()))+gt.gettext(' g'));
	switch (Number(val)){	//set left side weight		
		case 50:$("#bar1,#bar2,#bar3,#bar4,#bar5").css({'display':'none'});
		break;
		case 60:$("#bar2,#bar3,#bar4,#bar5").css({'display':'none'});
		$("#bar1").css({'display':'block'});
		break;
		case 70:$("#bar3,#bar4,#bar5").css({'display':'none'});
		$("#bar1,#bar2").css({'display':'block'});
		break;
		case 80:$("#bar4,#bar5").css({'display':'none'});
		$("#bar1,#bar2,#bar3").css({'display':'block'});
		break;
		case 90:$("#bar5").css({'display':'none'});
		$("#bar1,#bar2,#bar3,#bar4").css({'display':'block'});
		break;
		case 100:$("#bar1,#bar2,#bar3,#bar4,#bar5").css({'display':'block'});
		break;	
	};
	if(val<=100){
		if(val==100)
		{
			val=92;
		}
		bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);		
		var result=val-oldVal;	//diff in slider values	
		val1=Number(initialLen1)+(result*1.5);
		initialLen1=val1;		
		val2=Number(initialLen2)-(result*1.5);
		initialLen2=val2;
		oldVal=val;	
		leftw1=Number(val)/10;	
		if(parseInt($("#leftMass").val())==parseInt($("#rightMass").val()))
		{
		val2=val1;
		$('#RightWeight,#LeftWeight').css({top:val1+'px'});
		}	
		else
		{
				$('#RightWeight').css({top:val2+'px'});
		$('#LeftWeight').css({top:val1+'px'});
		}
		setPosition();		
		drawWeightLines(val1,val2);	//call for left weight line draw		
		if(parallelogramFlag){		
		ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
		drawParalleogram();		
		}
	}
}
//function for weight line draw
function drawWeightLines(val1,val2){
	//draw lines while changeing the weight sliders
	bgCanvasctx.beginPath();
	bgCanvasctx.moveTo(102,20);
	bgCanvasctx.lineTo(102,val1);//left line
	bgCanvasctx.moveTo(435,20);
	bgCanvasctx.lineTo(435,val2);//right line
	bgCanvasctx.moveTo(135,30);
	bgCanvasctx.lineTo(point5[0].x,point5[0].y);//left diagonal
	bgCanvasctx.moveTo(400,30);
	bgCanvasctx.lineTo(point5[0].x,point5[0].y);//right diagonal	
	bgCanvasctx.moveTo(point5[0].x,point5[0].y);
	bgCanvasctx.lineTo(point5[0].x,point5[0].y+32);//right diagonal
	bgCanvasctx.lineWidth = 1;
	bgCanvasctx.stroke();
	
	$("#ObjStoneImg").css({'left':point5[0].x-36+"px",top:point5[0].y+30+"px"});
	$("#ObjwoodImg").css({'left':point5[0].x-40+"px",top:point5[0].y+30+"px"});
	$("#ObjSteelImg").css({'left':point5[0].x-18+"px",top:point5[0].y+30+"px"});
	var leftbartop=val1+5;	
	var rightbartop=val2+5;		
	$('#LeftBar').css({top:leftbartop+'px'});
	$('#RightBar').css({top:rightbartop+'px'});
}
//button show/hide parallelogram
function ShowParallelogram(){
	if(document.getElementById('ParallelogramBtn').value==instrArray[4]){
		//show parallelogram
		parallelogramFlag=1;
		$('#ParallelogramBtn').attr('value',instrArray[5]);
		document.getElementById("answer1").disabled=false;
		document.getElementById("submit").disabled=false;		
		drawParalleogram();
	}
	else{	//hide parallelogram
			parallelogramFlag=0;
			$('#ParallelogramBtn').attr('value',instrArray[4]);	
			document.getElementById("answer1").disabled=true;
			document.getElementById("submit").disabled=true;
			$("#CorrectImg,#WrongImg").css({'display':'none'});	
			$("#WarningLbl").css({'opacity':0});			
			$('#parallelDiagonal,#OPoint,#BPoint,#APoint,#DPoint').css({display:'none'});
			ParallelCanvasCtx.clearRect(0, 0, ParallelCanvas.width, ParallelCanvas.height);
	}	
}
//function for showing/hiding the Protractor
function ShowProtractor(){
		if(document.getElementById('protractorBtn').value==instrArray[6]){
			//show protractor
		$('#protractorBtn').attr('value',instrArray[7]);		
		$('#ProtracorDiv').css({display:'block'});
	}
	else{//hide protractor
		$('#protractorBtn').attr('value',instrArray[6]);		
		$('#ProtracorDiv').css({display:'none'});
	}	
}
//function for showing/hiding the scale
function ShowScale(){
		//show scale
	if(document.getElementById('scaleBtn').value==instrArray[8]){
		$('#scaleBtn').attr('value',instrArray[9]);		
		$('#ScaleDiv').css({display:'block'});
	}
	else{
	//hide scale
		$('#scaleBtn').attr('value',instrArray[8]);		
		$('#ScaleDiv').css({display:'none'});
	}
}
//function for find the angles and intersection point
function setPosition(){
	var td=(Math.pow(W,2)-Math.pow(leftw1,2)-Math.pow(rightw2,2))/(2*(leftw1*rightw2));
	totDegree=Math.acos(td)*180/Math.PI;
	var pd=(leftw1+(rightw2*td))/W;
	sl1Degree=Math.acos(pd)*(180/Math.PI);
	
	angle=90-sl1Degree;//angle
	totAngle=-(90-(totDegree-sl1Degree));
	//inbitials points
	var x1y1=135+500*Math.cos(angle*Math.PI/180);
	var x2y2=30+500*Math.sin(angle*Math.PI/180);
	var x3y3=400+500*Math.cos(totAngle*Math.PI/180);
	var x4y4=30+500*Math.sin(totAngle*Math.PI/180);
	
	var point1 = [{x:135, y:30}];
	var point2 = [{x:x1y1, y:x2y2}];
	var point3 = [{x:400, y:30}];
	var point4= [{x:x3y3, y:x4y4}];
	//intersection of two threads
	point5=lineIntersectLine(point1,point2,point3,point4,false);
}
//fn for finding the points for the line segments
function lineIntersectLine(A,B,E,F,as_seg){	
	var ip;	var a1;	var a2;	var b1;
	var b2;	var c1;	var c2;
	a1=B[0].y-A[0].y;
	b1=A[0].x-B[0].x;
	c1=B[0].x*A[0].y-A[0].x*B[0].y;
	a2=F[0].y-E[0].y;
	b2=E[0].x-F[0].x;
	c2=F[0].x*E[0].y-E[0].x*F[0].y;	
	var denom=a1*b2-a2*b1;
	if (denom==0){
		return null;
	}
	var ipX=(b1*c2 - b2*c1)/denom;
	var ipY=(a2*c1 - a1*c2)/denom;
	ip= [{x:ipX, y:ipY}];	
	if (as_seg) {
		if (Math.pow(ip[0].x-B[0].x,2)+Math.pow(ip[0].y-B[0].y,2)>Math.pow(A[0].x-B[0].x,2)+Math.pow(A[0].y-B[0].y,2)){
			return null;
	}
		if (Math.pow(ip[0].x-A[0].x,2)+Math.pow(ip[0].y-A[0].y,2)>Math.pow(A[0].x-B[0].x,2)+Math.pow(A[0].y-B[0].y,2)) {
			return null;
		}
	
		if (Math.pow(ip[0].x-F[0].x,2)+Math.pow(ip[0].y-F[0].y,2)>Math.pow(E[0].x-F[0].x,2)+Math.pow(E[0].y-F[0].y,2)) {
			return null;
		}
		if (Math.pow(ip[0].x-E[0].x,2)+Math.pow(ip[0].y-E[0].y,2)>Math.pow(E[0].x-F[0].x,2)+Math.pow(E[0].y-F[0].y,2)) {
			return null;
		}
	}
	return ip;
}
//drag scale
$('#ScaleDiv').draggable({
drag:function(event,ui){}});
//drag protractor

$('#ProtracorDiv').draggable({
drag:function(event,ui){
}})

//for closewise turn of protractor
function rotateClockwisePro(){
	rotatepro++;
	rotateprotractor();
}

//for anticlosewise turn of protractor
function rotateanticlockPro(){
	rotatepro--;
	rotateprotractor();
}

// function for rotating the protractor
function rotateprotractor(){
	var rotateProtractor = 'rotate('+rotatepro+'deg)';			
	$("#protractorInside").css({ '-moz-transform-origin':'50% 100%',
	'-webkit-transform-origin': '50% 100%',
	'-moz-transform': rotateProtractor,
	'-webkit-transform': rotateProtractor
	});//rotate the protractor
}

//for closewise turn of scale
function rotateScale(){
	rotateSca=rotateSca+2;
	rotateScalefn();
}
//for anticlosewise turn of scale
function rotateScaleAnticlock(){
	rotateSca=rotateSca-2;
	rotateScalefn();
}
// function for rotating the scale
function rotateScalefn(){
	var rotateScaleVar = 'rotate('+rotateSca+'deg)';			
	$("#scaleInside").css({ '-moz-transform-origin':'50% 50%',
	'-webkit-transform-origin': '50% 50%',
	'-moz-transform': rotateScaleVar,
	'-webkit-transform': rotateScaleVar
	});
}
function drawParalleogram(){	
	var dia_length=(W*.5)*28;
	//point on the left diagonal thread connects the paralleogram
	var midsl1x2=point5[0].x+200.0*Math.cos((totAngle+180)*Math.PI/180);
	var midsl1y2=(point5[0].y-dia_length)+200.0*Math.sin((totAngle+180)*Math.PI/180);
	//point on the right diagonal thread connects the paralleogram
	var midsl2x2 =point5[0].x+200.0*Math.cos((angle)*Math.PI/180);
	var midsl2y2 =(point5[0].y-dia_length)+200.0*Math.sin((angle)*Math.PI/180);
	
	
	//points for finding the parallelogram lines
	var para_pnt1 = [{x:point5[0].x, y:point5[0].y+134-dia_length}];
	var para_pnt2 = [{x:midsl1x2,y:midsl1y2+134}];	//mid of left diagonal
	var para_pnt3= [{x:point5[0].x,y:point5[0].y+134}];	
	var para_pnt4= [{x:135,y:164}];	//origin of the left diagonal thread
	var para_pnt5= [{x:midsl2x2,y:midsl2y2+134}];//mid of right diagonal
	var para_pnt6= [{x:400,y:164}];	//origin of the right diagonal thread
	
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.arc(point5[0].x-50,point5[0].y+134, 3, 0, 2 * Math.PI,false);	
	ParallelCanvasCtx.fillStyle = 'black';
	ParallelCanvasCtx.fill();
	ParallelCanvasCtx.strokeStyle = 'black';
	ParallelCanvasCtx.stroke();	
	//fn call for finding the line for the parallelogram
	var point6=lineIntersectLine(para_pnt1,para_pnt2,para_pnt3,para_pnt4,false);	
	var point7=lineIntersectLine(para_pnt1,para_pnt5,para_pnt3,para_pnt6,false);

	//position for the point labels A,B,D,O
	$('#OPoint,#BPoint,#APoint,#DPoint').css({'display':'block'});	
	$('#BPoint').css({left:point7[0].x+10+"px",top:point7[0].y-134+"px"});
	$('#APoint').css({left:point6[0].x-10+"px",top:point6[0].y-134+"px"});
	$('#DPoint').css({left:point5[0].x+10+"px",top:point5[0].y-dia_length-10+"px"})
	$('#OPoint').css({left:point5[0].x+10+"px",top:point5[0].y+"px"});
	
	//point A
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.arc(point6[0].x-50, point6[0].y, 3, 0, 2 * Math.PI, false);	
	ParallelCanvasCtx.fillStyle = 'black';
	ParallelCanvasCtx.fill();
	ParallelCanvasCtx.lineWidth = 0.0;
	ParallelCanvasCtx.strokeStyle = '#003300';
	ParallelCanvasCtx.stroke();	
	
	//point B
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.arc(point7[0].x-50, point7[0].y, 3, 0, 2 * Math.PI, false);	
	ParallelCanvasCtx.fillStyle = 'black';
	ParallelCanvasCtx.fill();
	ParallelCanvasCtx.lineWidth = 0.0;
	ParallelCanvasCtx.stroke();	
	
	//Point D	
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.arc(point5[0].x-50,point5[0].y+134-dia_length,3, 0, 2*Math.PI, false);	
	ParallelCanvasCtx.fillStyle = 'black';
	ParallelCanvasCtx.fill();
	ParallelCanvasCtx.lineWidth = 0.1;
	ParallelCanvasCtx.strokeStyle = '#003300';
	ParallelCanvasCtx.stroke();	

	//diagonal length line OD
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134);
	ParallelCanvasCtx.lineTo(point5[0].x-50,point5[0].y+134-dia_length);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#F0F';
	ParallelCanvasCtx.stroke();
	//line AD
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134-dia_length);
	ParallelCanvasCtx.lineTo(point6[0].x-50,point6[0].y);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#00F';
	ParallelCanvasCtx.stroke();		
	//line DB
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134-dia_length);
	ParallelCanvasCtx.lineTo(point7[0].x-50,point7[0].y);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = 'red';
	ParallelCanvasCtx.stroke();	
	//line OA
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134);
	ParallelCanvasCtx.lineTo(point6[0].x-50,point6[0].y);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = 'red';
	ParallelCanvasCtx.stroke();	
	//line OB
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134);
	ParallelCanvasCtx.lineTo(point7[0].x-50,point7[0].y);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#00F';
	ParallelCanvasCtx.stroke();
	
	//code for arrow line
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+134);
	ParallelCanvasCtx.lineTo(point5[0].x-50,point5[0].y+154);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#F0F';
	ParallelCanvasCtx.stroke();
	
	//arrow left head
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+154);
	ParallelCanvasCtx.lineTo(point5[0].x-54,point5[0].y+149);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#F0F';
	ParallelCanvasCtx.stroke();
	
	//arrow right head
	ParallelCanvasCtx.beginPath();
	ParallelCanvasCtx.moveTo(point5[0].x-50,point5[0].y+154);
	ParallelCanvasCtx.lineTo(point5[0].x-44,point5[0].y+149);
	ParallelCanvasCtx.lineWidth = 2;
	ParallelCanvasCtx.strokeStyle = '#F0F';
	ParallelCanvasCtx.stroke();		
}
//check answer enter in the text box
function checkAnswer()
{
	ansWeightHigh=ansWeight+2.0;
	ansWeightLow=ansWeight-2.0;
	if(document.getElementById("answer1").value=="")
	{
		$("#WarningLbl").css({'opacity':1});		
		$("#WrongImg,#CorrectImg").css({'display':'none'});			
	}
	else
	{
		$("#WarningLbl").css({'opacity':0});
		if(document.getElementById("answer1").value>=ansWeightLow&&document.getElementById("answer1").value<=ansWeightHigh)
		{
			$("#WrongImg").css({'display':'none'});	
			$("#CorrectImg").css({'display':'block'});	
		}
		else
		{
			$("#WrongImg").css({'display':'block'});	
			$("#CorrectImg").css({'display':'none'});	
		}
	}
}

//validate the input text box

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //alert(key);
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;	
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

//restrict the value
function dotRestrict(e){
	
	var count=0;
	var str=e.value;
	var a1 = new Array();
	a1=str.split("");
	var len=a1.length;
	for(var i=0;i<len;i++){
		if(a1[i]=="."){
			count++;
		}
	}
	if(a1[len-1]=="."){
		e.value="";
		
	}
	if(count>1){
		e.value="";
	}
}
//zoomin/zoomout

var zoomVal=1;
function zoomIn()
{
	if(zoomVal>=1)
	{		
		$("#zoomInImg").css({'opacity':0.5});
	}
	if(zoomVal<1)
	{
		$("#zoomOutImg").css({'opacity':1});
		zoomVal=zoomVal+0.05;
		$("#mainDiv").css({ '-webkit-transform':'scale('+zoomVal+', '+zoomVal+')',
		'-moz-transform': 'scale('+zoomVal+', '+zoomVal+')',
		'-o-transform':'scale('+zoomVal+', '+zoomVal+')',
		' transform':'scale('+zoomVal+', '+zoomVal+')'
		});//scale in the parallelogram	
	}
}

function zoomOut()
{	
	if(zoomVal<=0.65)
	{
		$("#zoomOutImg").css({'opacity':0.5});
	}
	if(zoomVal>0.65)
	{
		$("#zoomInImg").css({'opacity':1});
		zoomVal=zoomVal-0.05;
		$("#mainDiv").css({ '-webkit-transform':'scale('+zoomVal+', '+zoomVal+')',
		'-moz-transform': 'scale('+zoomVal+', '+zoomVal+')',
		'-o-transform':'scale('+zoomVal+', '+zoomVal+')',
		' transform':'scale('+zoomVal+', '+zoomVal+')'
		});//scale out the parallelogram
	}
}