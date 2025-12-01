// JavaScript Document

//Load tray

//var path = document.location.pathname;
//var dir = path.substr(indexOf('/', 1), path.lastIndexOf('/')+1);
//alert(simPath);
//document.write(simPath);

var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 570;
canvas.height = 430;
var ctx = canvas.getContext('2d');

var img = new Image;

img.onload = function(){
	ctx.drawImage(img,100,300);
 };


img.src=simPath+'images/TotalTray.png';
img.width='100'+'%';


function initialFunction(){
	
	}

var mcanvas="";
var cuboidName;
var removeCuboidFlag=false;
var context;
var depthView=false;
var depthctx ;
var depthCanvas;
var scaleCanvas;
var scaleCtx; 
var moveFlag=false;
var offsetX;
var offsetY;
var x;
var y;
var face;
var length;
var breadth;
var height;
var mass=0;
var force=0;
var g=9.8;
var area;
var pressure;
var flagA=0;
var cubeflag=true;

var width=$("#sidebar-wrapper").width();
var parentWidth=$("#sidebar-wrapper").offsetParent().width();
var percent=100*width/parentWidth;
var winWidth=$(window).width();	
var windowWidth = $(window).width();

$(window).on('resize',function(){
    if ($(window).width() < 767) {   
      location.reload();  // refresh page 
    }
    else {  
      // width more than 768px for PC  
    }
    });


window.onload = function init(){

	initialFunction();
	document.getElementById("expName").innerHTML = gt.gettext("Pressure Exerted by a Solid Iron Cuboid on Sand");
	document.getElementById("variable").innerHTML = gt.gettext("Variables");
	document.getElementsByClassName("varTitle")[0].innerHTML = gt.gettext("Select the environment:");
	document.getElementById("dropBox1").innerHTML = gt.gettext("Earth (g=9.8 m/s&#178;)");
	document.getElementById("dropBox2").innerHTML = gt.gettext("Moon (g=1.6 m/s&#178;)");
	document.getElementsByClassName("varTitle")[1].innerHTML = gt.gettext("Select the Cuboid face:");
	document.getElementById("crossSectionVar").innerHTML = gt.gettext("Tray Cross Section");
	document.getElementsByClassName("varTitle")[2].innerHTML = gt.gettext("Enter the values:");
	document.getElementById("areaTitleSpan").innerHTML = gt.gettext("Area (m&#178;):");
	document.getElementById("pressureTitleSpan").innerHTML = gt.gettext("Pressure (Nm&#8315;&#178;):");
	document.getElementById("depressionTitleSpan").innerHTML = gt.gettext("Depression (cm):");
	document.getElementById("check").value = gt.gettext("Check");
	document.getElementById("reset").value = gt.gettext("Reset");
	/*document.getElementsByClassName("labName")[0].innerHTML = gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT");
	$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));*/

	//document.getElementsByClassName("varTitle")[3].textContent = "Area (m&#178;):";
	//console.log(x)
	/*document.getElementById("drag1").addEventListener('mousedown',startDrag,false);
	document.getElementById("drag1").addEventListener('mousemove',drag,false);
	document.getElementById("drag1").addEventListener('mouseup',stopDrag,false);
	
	document.getElementById("drag2").addEventListener('mousedown',startDrag,false);
	document.getElementById("drag2").addEventListener('mousemove',drag,false);
	document.getElementById("drag2").addEventListener('mouseup',stopDrag,false);
	
	document.getElementById("drag3").addEventListener('mousedown',startDrag,false);
	document.getElementById("drag3").addEventListener('mousemove',drag,false);
	document.getElementById("drag3").addEventListener('mouseup',stopDrag,false);*/
}


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


//To change the cursor type
function changeCursor(){
	
	document.body.style.cursor='pointer';
}
function defaultCursor(){
	document.body.style.cursor='default';
}


//On clicking on the cuboid image
function cubeClicked(e){
	if(cubeflag==false){
	 	document.getElementById("crossSection").checked=false;
  		showCrossSection(false);		
	}
    if (mcanvas==""){
	cuboidName=e;
	mcanvas = document.getElementById("cubeface");	
    context = mcanvas.getContext("2d");
	context.clearRect(0, 0, mcanvas.width, mcanvas.height);   
    var imageObj = new Image();	

    imageObj.onload = function(){
		
        context.drawImage(imageObj, 0, 0);
		
    };
	mcanvas.style.cursor='pointer';
	
	//To position the selected face
	switch (cuboidName){
		case "faceA":
			
			mcanvas.width = 154;
			mcanvas.height = 63;
			imageObj.src = simPath+"images/faceA.png";
			face="A";	
			length=0.1;
			breadth=0.04;
			height=0.06;
			mass=2;
			force=g*mass;
			break;
		case "faceB":
			mcanvas.width = 154;
			mcanvas.height = 43;
			imageObj.src = simPath+"images/faceB.png";
			face="B";
			length=0.1;
			breadth=0.06;
			height=0.04;
			mass=2;
			force=g*mass;
			break;
		case "faceC":
			mcanvas.width = 43;
			mcanvas.height = 130;
			$("#cubeface").css({"width":"8%","height":"35%"});
			// mcanvas.width = 38;
			// mcanvas.height = 127;
			imageObj.src = simPath+"images/faceC.png";
			face="C";
			length=0.06;
			breadth=0.04;
			height=0.1;
			mass=2;
			force=g*mass;
			mcanvas.style.left=48+"%";
			break;			
	}
	
	//Tooltip 


	document.getElementById("Tooltip1").style.visibility="visible";	
	document.getElementById("tooltipText").style.visibility="visible";
	
	document.getElementById("tooltipText").innerHTML=gt.gettext("Click the cuboid to place it on the tray.");
		
	if (flagA){
		
		document.getElementById("Tooltip1").style.visibility="hidden";
		document.getElementById("tooltipText").style.visibility="hidden";
	}	
		
	//Click on the selected cuboid face
	mcanvas.addEventListener('click',cuboidClicked,false);
	
	document.getElementById("valTitle").style.display="block";	
	document.getElementById("areaTitle").style.display="block";	
	document.getElementById("pressureTitle").style.display="block";	
	document.getElementById("depressionTitle").style.display="block";	
	document.getElementById("check").style.visibility="visible";	
	document.getElementById("reset").style.visibility="visible";
	dispLabels();

  }
  
		
}


	if(windowWidth != $(window).width()){
		cuboidClicked();
	}

//On clicking on the cuboid	face
function cuboidClicked(){

		if(percent=="0"|| winWidth<768){
			if (!removeCuboidFlag){
			
			switch(cuboidName){
				case "faceA":
				
					mcanvas.style.top=mcanvas.style.top+60+"%";
					document.getElementById("tooltip").style.height=document.getElementById("tooltip").style.height+25+"%";		
					document.getElementById("tooltipText").style.fontSize=document.getElementById("tooltipText").style.fontSize+90+"%";		
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+150+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+40+"%";	
					break;
				case "faceB":
					mcanvas.style.top=mcanvas.style.top+66+"%";
					document.getElementById("tooltip").style.height=document.getElementById("tooltip").style.height+25+"%";		
					document.getElementById("tooltipText").style.fontSize=document.getElementById("tooltipText").style.fontSize+90+"%";	
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+150+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+40+"%";
					break;
				case "faceC":
					mcanvas.style.top=mcanvas.style.top+48+"%";
					document.getElementById("tooltip").style.height=document.getElementById("tooltip").style.height+25+"%";		
					document.getElementById("tooltipText").style.fontSize=document.getElementById("tooltipText").style.fontSize+90+"%";	
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+100+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+30+"%";	
					break;		
			}
			
				document.getElementById("environment").disabled=true;
				document.getElementById("tooltipText").innerHTML=gt.gettext("Click on the face of the cuboid to remove it from the tray.");
				removeCuboidFlag=true;
			}
			
			else{//Hide the selected face and tooltip
				//mcanvas.style.visibility="hidden";
				context.clearRect(0, 0, mcanvas.width, mcanvas.height);
				var depressionImg = new Image;
				depthView=true;
				
				switch(cuboidName){
				case "faceA":
				//alert("fgdhdhs");
					//mcanvas.style.top=mcanvas.style.top+100+"px";
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,-76,0)
					 };
					depressionImg.src=simPath+'images/A&Bdepression.png';
					break;
				case "faceB":
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,-76,-10)
					 };
					depressionImg.src=simPath+'images/A&Bdepression.png';
					break;
				case "faceC":
					
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,10,100)
					 };
					depressionImg.src=simPath+'images/C depression.png';
					break;		
			}
			
				document.getElementById("Tooltip1").style.visibility="hidden";
				document.getElementById("tooltipText").style.visibility="hidden";
			//	document.getElementById("check").disabled=false;
			
				
			}
		}
		else{
			
			if (!removeCuboidFlag){
			
			switch(cuboidName){
				case "faceA":
				
					mcanvas.style.top=mcanvas.style.top+66+"%";
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+280+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+46+"%";	
					break;
				case "faceB":
					mcanvas.style.top=mcanvas.style.top+71+"%";
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+295+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+48+"%";	
					break;
				case "faceC":
					mcanvas.style.top=mcanvas.style.top+48+"%";
					document.getElementById("Tooltip1").style.top=document.getElementById("Tooltip1").style.top+200+"%";	
					document.getElementById("tooltipText").style.top=document.getElementById("tooltipText").style.top+33+"%";	
					break;		
			}
			
				document.getElementById("environment").disabled=true;
				document.getElementById("tooltipText").innerHTML=gt.gettext("Click on the face of the cuboid to remove it from the tray.");
				removeCuboidFlag=true;
			}
			
			else{//Hide the selected face and tooltip
				//mcanvas.style.visibility="hidden";
				context.clearRect(0, 0, mcanvas.width, mcanvas.height);
				var depressionImg = new Image;
				depthView=true;
				
				switch(cuboidName){
				case "faceA":
				//alert("fgdhdhs");
					//mcanvas.style.top=mcanvas.style.top+100+"px";
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,-76,0)
					 };
					depressionImg.src=simPath+'images/A&Bdepression.png';
					break;
				case "faceB":
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,-76,-10)
					 };
					depressionImg.src=simPath+'images/A&Bdepression.png';
					break;
				case "faceC":
					
					depressionImg.onload = function(){ 				
						context.drawImage(depressionImg,10,100)
					 };
					depressionImg.src=simPath+'images/C depression.png';
					break;		
			}
			
				document.getElementById("Tooltip1").style.visibility="hidden";
				document.getElementById("tooltipText").style.visibility="hidden";
			//	document.getElementById("check").disabled=false;
			
				
			}
		
		}

}

//Show cross sectional view
function showCrossSection(chkValue){
	cubeflag=false;
	//alert(ctx);
	if (chkValue){
		flagA=1;
		//alert(context);
		if (removeCuboidFlag){
		document.getElementById("check").disabled=false;
		}
		ctx.clearRect(150,300,canvas.width,canvas.height);
		document.getElementById("cubeface").style.visibility="hidden";
		document.getElementById("Tooltip1").style.visibility="hidden";
		document.getElementById("tooltipText").style.visibility="hidden";
			
		var crossSectionImg = new Image;
		
		crossSectionImg.onload = function(){ 
		ctx.drawImage(crossSectionImg,-100,235)};
		crossSectionImg.src=simPath+'images/crosssection.png';		
		
		scaleCanvas = document.getElementById("scale1");	
    	scaleCtx = scaleCanvas.getContext("2d");
		var scaleImg = new Image;
		
		scaleImg.onload = function(){ 
		scaleCtx.drawImage(scaleImg,0,0)};
		scaleImg.src=simPath+'images/scale.png';
		scaleCanvas.style.top=scaleCanvas.style.top+5+"%";
		scaleCanvas.style.left=scaleCanvas.style.left+25+"%";
		scaleCanvas.height=421;			
		scaleCanvas.width=65;
		
		document.getElementById("scale1").addEventListener('mousedown',startDrag,false);
		document.getElementById("scale1").addEventListener('mousemove',drag,false);
		document.getElementById("scale1").addEventListener('mouseup',stopDrag,false);
		
		if (depthView){
			
			depthCanvas = document.getElementById("depth");	

   			depthctx = depthCanvas.getContext("2d");			
   			var depthImg = new Image();	
			switch(cuboidName){
			case "faceA":
		  	//mcanvas.style.top=mcanvas.style.top+100+"px";
				depthImg.onload = function(){
				
				if (document.getElementById("environment").selectedIndex==0){ 		//Earth	 				
					depthctx.drawImage(depthImg,0,8,254,63);
					depression=2.4;
				}else if (document.getElementById("environment").selectedIndex==1){	//Moon
					depthctx.drawImage(depthImg,0,8,254,10);
					depression=0.4;
				}
			 };
			 			$("#depth").css({"width":"60%"});
			 depthCanvas.style.top=depthCanvas.style.top+60.5+"%";
			depthCanvas.style.left=depthCanvas.style.left+29+"%";
			
			break;
			case "faceB":
			depthImg.onload = function(){ 
				if (document.getElementById("environment").selectedIndex==0){ 		//Earth	 					
					depthctx.drawImage(depthImg,0,8,254,41);
					depression=1.6;
				}else if (document.getElementById("environment").selectedIndex==1){	//Moon
					depthctx.drawImage(depthImg,0,8,254,9);
					depression=0.3;
				}
			};
						$("#depth").css({"width":"60%"});
			depthCanvas.style.top=depthCanvas.style.top+60.5+"%";
			depthCanvas.style.left=depthCanvas.style.left+29+"%";
			break;
			case "faceC":
			depthImg.onload = function(){
			if (document.getElementById("environment").selectedIndex==0){ 		//Earth	 			 				
				depthctx.drawImage(depthImg,80,8,100,104);
				depression=4;
			}else if (document.getElementById("environment").selectedIndex==1){	//Moon
				depthctx.drawImage(depthImg,80,8,100,18);
				depression=.7;
			}
			 };
			 			$("#depth").css({"width":"50%"});
			depthCanvas.style.top=depthCanvas.style.top+60.5+"%";
			depthCanvas.style.left=depthCanvas.style.left+29+"%";
			break;		
	}
   		   depthImg.src=simPath+'images/depth.png';
			 
		}
	}else{
		
		flagA=0;		
		ctx.clearRect(0,100,canvas.width,canvas.height);
		scaleCtx.clearRect(0, 0, scaleCanvas.width, scaleCanvas.height);
		if (depthView )	{
			depthctx.clearRect(0, 0, depthCanvas.width, depthCanvas.height);
			document.getElementById("Tooltip1").style.visibility="hidden";
			document.getElementById("tooltipText").style.visibility="hidden";
			
		}else{
		document.getElementById("Tooltip1").style.visibility="visible";
		document.getElementById("tooltipText").style.visibility="visible";
		}
		if (mcanvas=="" ){
			document.getElementById("Tooltip1").style.visibility="hidden";
			document.getElementById("tooltipText").style.visibility="hidden";	
		}
		
		document.getElementById("cubeface").style.visibility="visible";	
		var fullTrayImg = new Image;
		fullTrayImg.onload = function(){ 
				
		ctx.drawImage(fullTrayImg,100,300)};
		fullTrayImg.src=simPath+'images/TotalTray.png';
		
	}
	
}
//Fn on drag
function startDrag(){
	offsetX=document.getElementById("scale1").offsetLeft;
	offsetY=document.getElementById("scale1").offsetTop;
	
	moveFlag=true;
	//alert(offsetX);
	x=window.event.clientX;
	y=window.event.clientY;	
		
	event.preventDefault();
}
//dragging
function drag(){
	if (moveFlag){
	document.getElementById("scale1").style.left=(offsetX+window.event.clientX-x)+"px";
	document.getElementById("scale1").style.top=(offsetY+window.event.clientY-y)+"px";
	}
}
//Stop drag
function stopDrag(){
	moveFlag=false;
	
}

//Fn to display the label texts
function dispLabels(){
	
	document.getElementById("lblFace").innerHTML=gt.gettext("Cuboid Face: ")+face;
	document.getElementById("lblLength").innerHTML=gt.gettext("Length: ")+length+" m";
	document.getElementById("lblBreadth").innerHTML=gt.gettext("Breadth: ")+breadth+" m";;
	document.getElementById("lblHeight").innerHTML=gt.gettext("Height: ")+height+" m";
	document.getElementById("lblMass").innerHTML=gt.gettext("Mass: ")+mass+" kg";;
	document.getElementById("lblForce").innerHTML=gt.gettext("Force: ")+force+" N";
}
//Fn on combo change
function environmentCombo(){
	if (document.getElementById("environment").selectedIndex==0){ 
		g=9.8;
	}
	else if (document.getElementById("environment").selectedIndex==1){
		
		g=1.63;	
	}
	force=g*mass;	
	if (force!=0){
		dispLabels();
	}
}
//Fn to calculate area and pressure
var pressure1;
var pressure2;
function calculate(){
	area=length*breadth;	
	pressure=(force/area);
	area=area.toFixed(3);
	
	if (cuboidName=="faceA"){
		pressure1=parseInt(pressure);
	pressure2=parseInt(pressure);
	
	}
	else
	{
		pressure=parseFloat(pressure);
		pressure1=pressure.toFixed(1);
		pressure2=pressure.toFixed(1);

		
	}
	area=parseFloat(area);
	depression=parseFloat(depression);
	
/*	alert("pressure "+pressure)
	alert("pressure1 "+pressure1)
	alert("pressure2 "+pressure2)
	alert("area "+area)
	alert("depression "+depression)*/
	
	
	
}
//Fn to check the inserted values
function checkAnswer(){
	var pr1=document.getElementById("pressure").value;
	pr1=parseFloat(pr1);
	pr1=pr1.toFixed(1);
	calculate();
		//alert(pressure1+"=="+pressure2);
if ((document.getElementById("area").value=="") || (document.getElementById("pressure").value=="") || (document.getElementById("depression1").value=="") ){
		
		document.getElementById("chkAnswer").style.display="visible";
		document.getElementById("chkAnswer").innerHTML=gt.gettext("Please enter all values!");
	}else{
if ((document.getElementById("area").value!=area)||(pr1!=pressure1)||(document.getElementById("depression1").value!=depression)){

		
	document.getElementById("chkAnswer").innerHTML=gt.gettext("Sorry.. try again!!!");
	
}else{
	document.getElementById("chkAnswer").innerHTML=gt.gettext("Correct.");
}
	}
}
