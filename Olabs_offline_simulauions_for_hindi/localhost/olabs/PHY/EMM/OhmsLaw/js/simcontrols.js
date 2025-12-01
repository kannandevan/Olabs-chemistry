/*
author:anishasl
Date:22/05/2014
file name:simcontrols.js
*/
// Variable declaration
var labelArray=[];	
var helpArray=[];
var variableArray=[];
var resistance=2;
var wireLen=0.5;
var wireCount=0;
var len=0;
var timer;
var t=0;
var decimals=0;
var WireRadius=0.5;
var row=0.652;
var resistance=0;
var maxVoltage=1.4;
var voltage=3.33;
var ammeterCurrent=1.67;
var LabelString="00.00";
var SetKey=false;
var resiswireWidth=30;
var resistanceWire=2;
var emf=5;

// canvas for background image
var bgCanvas = document.getElementById('wireCanvas');
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
/*var bgCanvasimg = new Image;
bgCanvasimg.onload = function(){ 
	//bgCanvasctx.drawImage(bgCanvasimg,0,-10);
};*/
//bgCanvasimg.src=simPath+'images/BG.jpg';

var WireCanvas = document.getElementById('wireCanvas');
WireCanvas.width = 568;
WireCanvas.height = 440;
var WireCanvasctx = WireCanvas.getContext('2d');
//WireCanvasctx.fillStyle = "#FFFFFF";
//WireCanvasctx.fillRect(0,0,560,335);
var canvasOffset=$("#wireCanvas").offset();
var xPos,yPos,nextx,nexty,flag = false;
setInitialXYpos($("#batteryPos"));

// function called on loading..
window.onload = function init(){

	document.getElementById("expName").innerHTML=gt.gettext("Ohm's Law");	
	variableArray=[gt.gettext('Readings'),gt.gettext('Voltage (V) :'),gt.gettext('Ammeter reading (I) :'),gt.gettext('Rheostat resistance :'),gt.gettext('Length of the resistance wire :'),gt.gettext('Show Circuit Diagram'),gt.gettext('Results'),gt.gettext('Enter the resistance of the wire:'),gt.gettext('Enter the resistance per cm of the wire:'),gt.gettext('Please enter the value'),gt.gettext(' V'),gt.gettext(' A'),gt.gettext(' Show result')];
	helpArray=[gt.gettext('Drag and connect the terminal</br>of each apparatus as shown</br>in the circuit diagram'),gt.gettext('Drag the resistance wire</br>to the voltmeter'),gt.gettext('Drag the switch key</br>to the switch'),gt.gettext('Drag the rheostat key to</br>adjust the rheostat resistance'),gt.gettext('Select the length of</br>the resistance wire')];
	
	$(document).ready(function() {
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	
	
	$('#resetBtn').attr('value',gt.gettext('Reset'));
	$('#submit').attr('value',gt.gettext('Check'));
	document.getElementById('readingHdng').innerHTML=gt.gettext(variableArray[0]);
	document.getElementById('voltageLbl').innerHTML=gt.gettext(variableArray[1]);
	document.getElementById('currentLbl').innerHTML=gt.gettext(variableArray[2]);
	document.getElementById('voltReading').innerHTML=LabelString;
	document.getElementById('ammeterReading').innerHTML=LabelString;
	document.getElementById('sliderLbl').innerHTML=gt.gettext(variableArray[4]);
	document.getElementById('checkLbl').innerHTML=gt.gettext(variableArray[5]);
	document.getElementById('resultLbl').innerHTML=gt.gettext(variableArray[6]);
	document.getElementById('inputTxtLbl1').innerHTML=gt.gettext(variableArray[7]);
	document.getElementById('ohmLabel').innerHTML="Ω";
	document.getElementById('ohmLabel1').innerHTML="Ω/cm";
	document.getElementById('inputTxtLbl2').innerHTML=gt.gettext(variableArray[8]);
	document.getElementById('sliderVal').innerHTML=gt.gettext('0.5m');	
	document.getElementById('voltMeasure').innerHTML=gt.gettext('0 V');	
	document.getElementById('currentMeasure').innerHTML=gt.gettext('0 A');
	document.getElementById('WarningLbl').innerHTML=gt.gettext(variableArray[9]);
	document.getElementById('WarningLbl1').innerHTML=gt.gettext(variableArray[9]);	
	document.getElementById('minVal').innerHTML=0.5;	
	document.getElementById('maxVal').innerHTML=2;		 
	DragRheostat();	
	});
}
var rheoRes=1;
var resPerMeter=4;
var reswireFlag=false;
function DragRheostat(){//adjust the rheostat resistance
	$("#rheoKeyImg").draggable({ axis: "x",containment:"#rheoKeyDiv",
	drag:function(){
		rheoRes=($("#rheoKeyImg").position().left/10)
		if(rheoRes==0)
		{
			rheoRes=1;
		}
		CalculateResistance(rheoRes);
		}
	});
}
//connections 
	$("#ammeterPos").draggable({disabled:false,
	drag:function(e){
		drawWire(e,78, 229);	
	},stop:function(e){
		clearBg();
		if($("#ammeterPos").position().left>=110&&$("#ammeterPos").position().left<=130&&
		$("#ammeterPos").position().top>=100&&$("#ammeterPos").position().top<=130){	
			$("#voltmetertobatteryImg").css({display:"block"});
			$("#batteryPos,#ammeterPos").css({display:"none"});	
			wireCount++;
			DragKey();
		}
		else{		
			$("#ammeterPos").css({left:"65px",top:"227px"});
		}	
	}
})
 
//connection battery pos
	$("#batteryNeg").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,145,138);	
	},stop:function(e){
		clearBg();	
		if($("#batteryNeg").position().left>=139&&$("#batteryNeg").position().left<=250&&
	$("#batteryNeg").position().top>=146&&$("#batteryNeg").position().top<=181){		
			$("#batterytoKeyImg").css({display:"block"});
			$("#keyNeg,#batteryNeg").css({display:"none"});
			wireCount++;
			DragKey();
		}
		else{
			$("#batteryNeg").css({left:"140px",top:"125px"});
			setInitialXYpos($("#batteryNeg"));
		}	
	}
}) 
 //connect key neg to battery Pos
	$("#keyNeg").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,245,160);	
	},stop:function(e){
		clearBg();		
		if($("#keyNeg").position().left>=125&&$("#keyNeg").position().left<=150&&
		$("#keyNeg").position().top>=100&&$("#keyNeg").position().top<=140){			
			$("#batterytoKeyImg").css({display:"block"});
			$("#keyNeg,#batteryNeg").css({display:"none"});
			wireCount++;
			DragKey();
		}
		else{
			$("#keyNeg").css({left:"236px",top:"155px"});	
			setInitialXYpos($("#keyNeg"));
		}	
	}
}) 
  
 //// rheo neg to key pos
	$("#rheoNeg").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,353,133);	
	},stop:function(e){
		clearBg();		
		if($("#rheoNeg").position().left>=263&&$("#rheoNeg").position().left<=298&&
		$("#rheoNeg").position().top>=146&&$("#rheoNeg").position().top<=178){		
			$("#keytoRheostatImg").css({display:"block"});
			$("#rheoNeg,#keyPos").css({display:"none"});
			wireCount++;
			DragKey();		
		}
		else{
			$("#rheoNeg").css({left:"345px",top:"123px"});	
			setInitialXYpos($("#rheoNeg"));
		}	
	}
}) 
 //key pos to rheo neg
	$("#keyPos").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,291,160);	
	},stop:function(e){
		clearBg();		
		if($("#keyPos").position().left>=329&&$("#keyPos").position().left<=364&&
		$("#keyPos").position().top>=103&&$("#keyPos").position().top<=140){		
			$("#keytoRheostatImg").css({display:"block"});
			$("#rheoNeg,#keyPos").css({display:"none"});
			wireCount++;
			DragKey();	
		}
		else{
			$("#keyPos").css({left:"278px",top:"155px"});	
			setInitialXYpos($("#rheoNeg"));
		}	
	}
}) 
//battery neg to ammeter pos
	$("#batteryPos").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,130,138);	
	},stop:function(e){
		clearBg();
		if($("#batteryPos").position().left>=45&&$("#batteryPos").position().left<=89&&
	$("#batteryPos").position().top>=208&&$("#batteryPos").position().top<=291){	
			$("#voltmetertobatteryImg").css({display:"block"});
			$("#batteryPos,#ammeterPos").css({display:"none"});	
			wireCount++;
			DragKey();
		}
		else{
			$("#batteryPos").css({left:"123px",top:"126px"});
			setInitialXYpos($("#batteryPos"));
		}	
	}
})
 ///ammeter neg to volt pos
 
	$("#ammeterNeg").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,135,229);	
	},stop:function(e){
	clearBg();	
		if($("#ammeterNeg").position().left>=379&&$("#ammeterNeg").position().left<=421&&
	$("#ammeterNeg").position().top>=205&&$("#ammeterNeg").position().top<=248){	
			$("#voltmetertoammeterImg").css({display:"block"});
			$("#ammeterNeg,#voltPos").css({display:"none"});
			wireCount++;
			DragKey();	
		}
		else{
			$("#ammeterNeg").css({left:"124px",top:"227px"});	
			setInitialXYpos($("#ammeterNeg"));
		}	
	}
}) 
 //voltPos to amme neg
	$("#voltPos").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,410,228);	
	},stop:function(e){
		clearBg();		
		if($("#voltPos").position().left>=105&&$("#voltPos").position().left<=147&&
		$("#voltPos").position().top>=207&&$("#voltPos").position().top<=250){	
			$("#voltmetertoammeterImg").css({display:"block"});
			$("#ammeterNeg,#voltPos").css({display:"none"});
			wireCount++;
			DragKey();		
		}
		else{
			$("#voltPos").css({left:"401px",top:"225px"});	
			setInitialXYpos($("#voltPos"));
		}	
	}
})
 //volt Neg to rheo pos
	$("#voltNeg").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,465,228);	
	},stop:function(e){
		clearBg();	
		if($("#voltNeg").position().left>=488&&$("#voltNeg").position().left<=518&&
		$("#voltNeg").position().top>=49&&$("#voltNeg").position().top<=85){	
			$("#rheotoAmmeImg").css({display:"block"});
			$("#voltNeg,#rheoPos").css({display:"none"});
			wireCount++;
			DragKey();	
		}
		else{
			$("#voltNeg").css({left:"454px",top:"225px"});	
			setInitialXYpos($("#voltNeg"));
		}	
	}
})
 //rheoPos to volt neg 
	$("#rheoPos").draggable({disabled:false,
	drag:function(e){	
		drawWire(e,515,74);	
	},stop:function(e){
		clearBg();	
		if($("#rheoPos").position().left>=441&&$("#voltNeg").position().left<=472&&
		$("#rheoPos").position().top>=205&&$("#voltNeg").position().top<=256)
		{	
			$("#rheotoAmmeImg").css({display:"block"});
			$("#voltNeg,#rheoPos").css({display:"none"});
			wireCount++;
			DragKey();	
		}
		else{
			$("#rheoPos").css({left:"504px",top:"64px"});	
			setInitialXYpos($("#voltNeg"));
		}		
	}
}) // end connections 
function drawWire(e,pos1,pos2){//draw wire from one point to another

	WireCanvasctx.beginPath();	
	nextx = e.clientX-canvasOffset.left; 
	nexty = e.clientY-canvasOffset.top; 
	WireCanvasctx.lineJoin = 'round';
	WireCanvasctx.lineCap = 'round';
	WireCanvasctx.lineWidth = 5;
	WireCanvasctx.strokeStyle = 'black';
	WireCanvasctx.closePath();
	WireCanvasctx.stroke();
	xPos = nextx;
	yPos = nexty;	
	WireCanvasctx.beginPath();
	WireCanvasctx.strokeStyle = "black";
	WireCanvasctx.lineWidth = "5";
	clearBg();
	WireCanvasctx.moveTo(pos1,pos2); 
	WireCanvasctx.arcTo(xPos,yPos, nextx, nexty, 70); // Create an arc.
	WireCanvasctx.stroke(); 
}
function clearBg(){//for clearing the canvas for line drawing
	bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
}
 
 /////initial x y position
function setInitialXYpos(ObjElmt){//setting the initial xpos and ypos
	xPos = ObjElmt.position().left+10;// 51;
	yPos =  ObjElmt.position().top+10;//40;
}

//drag the resistance wire to the volt meter
	$("#resiswireDiv").draggable({
	drag:function()
	{		
		$("#resisShadowImg").css({opacity:0});
	},stop:function(){
		if($("#resiswireDiv").position().left>=309&&
		$("#resiswireDiv").position().left<=473&&
		$("#resiswireDiv").position().top>=207&&$("#resiswireDiv").position().top<=251){
			$("#resisImg,#resisShadowImg").css({display:"none"});
			$("#resiswireImg").css({opacity:1});
			$('#lengthRange').attr("disabled", "disabled");
			$("#resiswireDiv").css({left:"418px",top:"231px"});
			$("#resiswireDiv").draggable({disabled:true});
			reswireFlag=true;
			DragKey();
		}
		else{
		$("#resiswireDiv").css({left:"230px",top:"262px"});
		$("#resisShadowImg").css({opacity:1});
		}
	}
});

function DragKey(){//connect the key to the switch
	if(wireCount==5&&reswireFlag==true){
		$("#switchKeyDiv").draggable({disabled:false,
		drag:function(e){	
		},stop:function(e){
			if($("#switchKeyDiv").position().left>=221&&$("#switchKeyDiv").position().left<=273&&$("#switchKeyDiv").position().top>=131&&$("#switchKeyDiv").position().top<=169){	
				$(this).css({left: "253px",top:"145px"});
				SetKey=true;
				$("#switchKeyDiv").draggable({disabled:true});
				startCurrentFlow();
			}
			else{
					$(this).css({left: "248px",top:"123px"});
				}		
			}
		})
	}
}//end drag key
function changeResisLength(val){//change the resistance wire length
	wireLen=val;
	resistanceWire=(resPerMeter*val);
	var resisLength=resiswireWidth+((val*100)*0.3);
	$("#resiswireDiv").css({width:resisLength+"px"});//resis wire length
	document.getElementById('sliderVal').innerHTML=wireLen+gt.gettext('m');
}
function showCircuit(Cb){//check box for showing the circuit
	if(Cb.checked){
		//code for show circuit diagram
		$("#circuitdiaDiv").css({display:"block"});
	}
	else{
		//code for hide circuit diagram
		$("#circuitdiaDiv").css({display:"none"});
	}
}
function startCurrentFlow(){//start current flowing on insert key
	document.getElementById("answer1").disabled=false;
	document.getElementById("answer2").disabled=false;
	document.getElementById("submit").disabled=false;
	CalculateResistance(rheoRes);
}
var resisPerCm=0.04;
function CalculateResistance(rheoRes){//calculating the resistance
	ammeterCurrent=emf/(rheoRes+resistanceWire);	
	voltage=ammeterCurrent*resistanceWire;
	resisPerCm=Number(resistanceWire/(wireLen*100));
	if(SetKey){
		startVoltmeter(voltage,ammeterCurrent);
	}	
}
function startVoltmeter(voltage,ammeterCurrent){//voltmeter reading
	voltage=voltage.toFixed(2);
	var strVol=voltage.toString();
	var numarrayVol=strVol.split('.');	
	ammeterCurrent=ammeterCurrent.toFixed(2);
	var str=ammeterCurrent.toString();
	var numarray=str.split('.');		
	if(numarrayVol[0].toString().length<2){
	numarrayVol[0]="0"+numarrayVol[0];
	}
	if(numarrayVol[1].toString().length<2){
	numarrayVol[1]="0"+numarrayVol[1];
	}	
	if(numarray[0].toString().length<2){
	numarray[0]="0"+numarray[0];
	}
	if(numarray[1].toString().length<2){
	numarray[1]="0"+numarray[1];
	}	
	document.getElementById('voltMeasure').innerHTML=voltage+variableArray[10];	
	document.getElementById('currentMeasure').innerHTML=ammeterCurrent+variableArray[11];	
	document.getElementById('voltReading').innerHTML=numarrayVol[0]+"."+numarrayVol[1];	
	document.getElementById('ammeterReading').innerHTML=numarray[0]+"."+numarray[1];
}
function checkAnswer(){//check the answer entered in the text box

 
	var resistanceLow=resistanceWire-0.2;
	var resistanceHigh=resistanceWire+0.2;
	var resisPerCmLow=resisPerCm-0.005;
	var resisPerCmHigh=resisPerCm+0.004;
	if(document.getElementById("answer1").value==""){
		$("#WarningLbl").css({'display':'block'});		
		$("#wrongImg,#correctImg").css({'display':'none'});			
	}
	else{
		$("#WarningLbl").css({'display':'none'});
		if(document.getElementById("answer1").value<=Number(resistanceHigh)&&document.getElementById("answer1").value>=Number(resistanceLow)){
			$("#wrongImg").css({'display':'none'});	
			$("#correctImg").css({'display':'block'});	
		}//check resistance
		else{
			$("#wrongImg").css({'display':'block'});	
			$("#correctImg").css({'display':'none'});	
		}
	}	
	if(document.getElementById("answer2").value==""){
		$("#WarningLbl1").css({'display':'block'});
		$("#wrongImg1,#correctImg1").css({'display':'none'});	
	}
	else
	{
		$("#WarningLbl1").css({'display':'none'});	
		if(document.getElementById("answer2").value<=Number(resisPerCmHigh)&&document.getElementById("answer2").value>=Number(resisPerCmLow)){
			$("#wrongImg1").css({'display':'none'});	
			$("#correctImg1").css({'display':'block'});	
		}//check resistance per cm 
		else{
			$("#wrongImg1").css({'display':'block'});	
			$("#correctImg1").css({'display':'none'});	
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