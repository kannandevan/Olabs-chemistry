var msgArray;
var testArray;
var labelsArray;
var Int;
var instruction;
var toolTipMessage;
var selectWater=0;
var opacitynum=.3;
var variable0;
var variable1;
var variable2;
var variable3;
var degree = 0;
var flag=new Boolean(false);
var flag1=new Boolean(true);
var dragClothFlag=new Boolean(false);
var TestTubeToShakeFlag=new Boolean(false);
var stir_heatFlag=new Boolean(false);
var id;
var Int1
var Int2;
var Int3;
var Int4;
var FirstStirFlag=false;
var degree1=.3;
var testTubeFoamZoomFlag=false;
msgArray=[gt.gettext("Drag the soap to add it in to the beaker containing distilled water."),gt.gettext("Drag the soap to add it in to the beaker containing well water."),gt.gettext("Drag the soap to add it into the beaker containing Distilled water with dissolved CaCl<sub>2</sub>(s).")];
 testArray = [gt.gettext("Distilled Water"),gt.gettext("Well Water"),gt.gettext("Distilled Water+ CaCl&#8322;")]
//onload function
$(document).ready(function() {
		document.getElementById("expName").innerHTML=gt.gettext("Cleaning Capacity of Soap with Hard and Soft Water");
		document.getElementById("msgTxt").innerHTML=gt.gettext("Drag the soap to add it into the beaker containing distilled water.");
		document.getElementById("reset").value=gt.gettext("Reset");
		$('#procedureSelect').html(gt.gettext("Select Procedure: "));
		$('#InstrId').html(gt.gettext("Instructions"));
//$("#thelist").removeAttr('disabled');
	document.getElementById("thelist").disabled = false;
	for(var i=0; i<testArray.length; i++){
		var newOption = document.createElement("option");
		newOption.value=i;
		newOption.innerHTML = testArray[i];
		$("#thelist").append(newOption);
	}
	instruction=document.getElementById("msgTxt")
	toolTipMessage=document.getElementById("tooltpMSG")
	variable0=gt.gettext("In beaker, soap solution formed is almost clear.");
	variable1=gt.gettext("It was observed that lather has formed in the test tube.");
	variable2=gt.gettext("Soap solution with distilled water produces maximum length of lather.");
	variable3=gt.gettext("Ink spot on the cloth has almost completely disappeared indicating that soap solution with distilled water (soft water) has most cleansing capability.");
	document.getElementById("infertooltpId").style.display="none";
	document.getElementById("infertooltpId").innerHTML=gt.gettext("Click here to see the inference");
	bgLeft=document.getElementById("bgCanvas").offsetLeft;
	bgTop=document.getElementById("bgCanvas").offsetTop;
	dragSoap();
	
	$("#soapDiv").qtip({
   		content: gt.gettext('Drag the soap to add it in to the beaker containing distilled water.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',  
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});$("#soapDiv").trigger("mouseover");
	
	$("#rodDiv").qtip({
   		content: gt.gettext('Click on the glass rod to stir the mixture.'),
   		position: {corner:{target: 'rightMiddle',tooltip: 'bottomMiddle'}
   		},style: { width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',			
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#offStateId").qtip({
   		content: gt.gettext('Click on the knob of the burner to turn it on.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: { width: 140,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#beakerrodsolnDiv").qtip({
   		content: gt.gettext('Drag the beaker and place it over the Bunsen burner to gently heat it.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
  		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#rod1").qtip({
   		content: gt.gettext('Click on the glass rod to stir the mixture.'),
   		position: {corner: {target: 'rightMiddle',tooltip: 'rightMiddle'}
   		},
  		style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'rightMiddle'}	
	});
	$("#onStateId").qtip({
   		content: gt.gettext('Click on the knob of the burner to turn it off.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 140,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#testTubeId").qtip({
   		content: gt.gettext('Click on the test tube to move it up.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#beakerTotestTubeId").qtip({
   		content: gt.gettext('Click on the beaker to pour soap solution in to the test tube.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#closeBtndiv").qtip({
   		content: gt.gettext('Click on the close button to go to previous stage.'),
   		position: {corner: {target: 'rightMiddle',tooltip: 'rightMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'rightMiddle'}
	});
	$("#testTubediv").qtip({
   		content: gt.gettext('Click on the test tube to zoom it.'),
   		 position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
   	 	fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#testTubediv1").qtip({
   		content: gt.gettext('Click on the test tube to shake it up and down.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
  		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',   
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#testTubediv2").qtip({
   		content: gt.gettext('Click on the test tube to zoom it.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',		        fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#clothDiv").qtip({
   		content: gt.gettext('Drag the cloth to put it into the beaker.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',		        fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	$("#clothzoomDiv").qtip({
   		content: gt.gettext('Click on the beaker to see the zoomed view of cloth.'),
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',			        fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});
	//document.getElementById("thelist").disabled = false;
});

//function to select procedure from dropdown
function selectProcedure(){
	
	selectWater=document.getElementById("thelist").selectedIndex
	//document.getElementById("thelist").disabled = true;
	if (stir_heatFlag==true){
	$("#testTubeId").qtip({
			content: gt.gettext('Click on the test tube to move it up.'),
			position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
			},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
			fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
		});
	}
	Initial()
	if(selectWater==0){
		instruction.innerHTML=gt.gettext("Drag the soap to add it into the beaker containing Distilled Water.");
		$("#soapDiv").qtip("destroy")
		$("#soapDiv").qtip({
   		content: msgArray[0],
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',  
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});$("#soapDiv").trigger("mouseover");
		
		opacitynum=.3
		document.getElementById("zoomTestTubeBubbleImg").src=simPath+'images/zoomTestTubeBubbleImg.png';
		document.getElementById("zoomTestTubeImg").src=simPath+'images/zoomTestTubeImg.png';
		variable0=gt.gettext("In beaker, soap solution formed is almost clear.")
		variable1=gt.gettext("It was observed that lather has formed in the test tube.")
		variable3=gt.gettext("Ink spot on the cloth has almost completely disappeared indicating that soap solution with distilled water (soft water) has most cleansing capability");
		variable2=gt.gettext("Soap solution with distilled water produces maximum length of lather.");
		//document.getElementById("resultzoom_1").style.visibility="visible";
	}else if(selectWater==1){
		opacitynum=.6
		instruction.innerHTML=gt.gettext("Drag the soap to add it into the beaker containing Well Water.");
		$("#soapDiv").qtip("destroy")
		$("#soapDiv").qtip({
   		content: msgArray[1],
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',  
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});$("#soapDiv").trigger("mouseover");
		document.getElementById("zoomTestTubeBubbleImg").src=simPath+'images/zoomTestTubeBubbleImg2.png';
		document.getElementById("zoomTestTubeImg").src=simPath+'images/zoomTestTubeImg2.png';
		variable0=gt.gettext("In beaker, some turbidity is formed.")
		variable1=gt.gettext("It was observed that lather has formed in the test tube.")
		variable3=gt.gettext("Ink spot on the cloth has partially disappeared indicating that soap solution with well water has less cleansing capability than soft water.");
		variable2=gt.gettext("Soap solution with well water (hard water) produces smaller length of lather.")
		//document.getElementById("resultzoom_2").style.visibility="visible";
	}else{
		opacitynum=.8;
		$("#soapDiv").qtip("destroy");
		instruction.innerHTML=gt.gettext("Drag the soap to add it into the beaker containing Distilled water with dissolved CaCl&#8322; (s)."); 
		$("#soapDiv").qtip({
   		content: msgArray[2],
   		position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
   		},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',  
		fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
	});$("#soapDiv").trigger("mouseover");
		document.getElementById("zoomTestTubeBubbleImg").src=simPath+'images/zoomTestTubeBubbleImg3.png';
		document.getElementById("zoomTestTubeImg").src=simPath+'images/zoomTestTubeImg3.png';
		variable0=gt.gettext("In beaker, scum is formed.")
		variable1=gt.gettext("It was observed that very small lather is formed in the test tube.")
		variable3=gt.gettext("No change in the colour of the ink spot indicating that soap solution with distilled water containing dissolved CaCl &#8322; has least cleansing capability.");
		variable2=gt.gettext("Soap solution with distilled water containing dissolved CaCl &#8322;(very hard water) produces minimum length of lather.");
	}
	if(testTubeFoamZoomFlag==true){
		$("#testTubeId").qtip("destroy");
	}
	
}
//initial reset function
function Initial(){
	document.getElementById("BG3Img").style.visibility="hidden"
	document.getElementById("inference").style.visibility="hidden"
	document.getElementById("resultzoomPaper").style.visibility="hidden";
	document.getElementById("resultzoom_1").style.visibility="hidden";
	document.getElementById("resultzoom_2").style.visibility="hidden";
	document.getElementById("resultzoom_3").style.visibility="hidden";
	dragSoap();
	document.getElementById("bgCanvas").style.visibility="visible"
	document.getElementById("beaker").style.visibility="visible";
	document.getElementById("beaker_under").style.visibility="visible";
	document.getElementById("distilledWaterTop").style.visibility="visible";
	document.getElementById("distilledWater_under").style.visibility="visible";
	opacitynum=.3;
	document.getElementById("burner").style.visibility="visible";
	document.getElementById("glassplate").style.visibility="visible";
	document.getElementById("soap").style.visibility="visible";
	
	document.getElementById("soap").style.left=bgLeft+255+"px";
	document.getElementById("soap").style.top=bgTop+389+"px";
	document.getElementById("soap").style.zIndex=9999;
	document.getElementById("rod").style.left=bgLeft+600+"px";
	document.getElementById("rod").style.top=bgTop+20+"px";
	flag=false;flag1=true;degree=0;degree1=.3;
 	dragClothFlag=false;
	TestTubeToShakeFlag=false;
	testTubeFoamZoomFlag=false;
    stir_heatFlag=false;
	FirstStirFlag=false;
	$("#beakerDrag").draggable( 'enable' )
	document.getElementById("waterMilky0").src=simPath+'images/waterMilky.png';
	document.getElementById("waterMilky0").style.left=3+"px";
	document.getElementById("waterMilky0").style.top=102+"px";
	document.getElementById("soapDiv").style.visibility="visible";
	document.getElementById("soap0").style.left=38+"px";
	document.getElementById("soap0").style.top=116+"px";
	$("#soapDiv").trigger("mouseover");
	$('#soap0').css({
		opacity:1,
	});
	
	//$("#testTubeId").trigger("mouseover");
	document.getElementById("testTube").style.left=bgLeft+335+"px";
	document.getElementById("testTube").style.top=bgTop+280+"px";
	document.getElementById("cloth").src=simPath+'images/cloth.png';	
	document.getElementById("cloth").style.left=245+"px";
	document.getElementById("cloth").style.top=385+"px";
	document.getElementById("cloth").style.width=62+"px"
	document.getElementById("cloth").style.height=19+"px"
	document.getElementById("cloth").style.zIndex=9999;
	
	}
//function to drag soap
function dragSoap(){
	
	$("#soap").draggable({
					start : function(event,ui){
						document.getElementById("soapDiv").style.visibility="hidden";
						document.getElementById("thelist").disabled = true;
						//$("#thelist").attr('disabled',true);
						$("#soapDiv").qtip("hide")
					}
				});
	$("#soap").draggable({
					stop : function(event,ui){
	 if (((((this.offsetTop>=150)&& (this.offsetLeft>=45)) && ((this.offsetTop<=270)&&(this.offsetLeft<=120))) )){
			 this.style.left=bgLeft+75+"px";							
			 this.style.top=bgTop+250+"px";
			$('#soap').animate({
				 top:'383px',
				 zIndex:999
			},1000,function(){
				document.getElementById("diswaterShakeTop").style.visibility="visible";
				document.getElementById("diswaterShake_under").style.visibility="visible";
				document.getElementById("distilledWaterTop").style.visibility="hidden";
				document.getElementById("distilledWater_under").style.visibility="hidden";
				})
			$('#soap').animate({
				 top:'396px',
				 zIndex:999
			},1000,function(){
				//$( "#soap" ).draggable( 'disable' );
				document.getElementById("diswaterShakeTop").style.visibility="hidden";
				document.getElementById("diswaterShake_under").style.visibility="hidden";
				document.getElementById("distilledWaterTop").style.visibility="visible";
				document.getElementById("distilledWater_under").style.visibility="visible";
				 $('#rod').animate({
				 left:'90px',
			},1000,function(){
				document.getElementById("rodDiv").style.visibility="visible";
				$("#rodDiv").trigger("mouseover");
				instruction.innerHTML=gt.gettext("Click on the glass rod to stir the mixture."); 
			});
		});	
			
		 }else{
			 this.style.left=bgLeft+255+"px";								
			 this.style.top=bgTop+390+"px";
			 document.getElementById("soapDiv").style.visibility="visible";
		 }
		}
	});
}


//function to stirr  after adding soap & before heating
function Stir_FN(){
	FirstStirFlag=true
	document.getElementById("rodDiv").style.visibility="hidden";
	 $('#rod').animate({
				 top:'200px',
	 },2000,function(){
		 id=document.getElementById("rod");
		 Int=setInterval(stir,1);
		 soapMovementFirst()
		 opacityOfSoln()
		 document.getElementById("burner").style.visibility="visible";
		 document.getElementById("waterMilky").style.visibility="visible";
		 document.getElementById("diswaterShakeTop").style.visibility="hidden";
		 document.getElementById("diswaterShake_under").style.visibility="hidden";
		 document.getElementById("distilledWaterTop").style.visibility="hidden";
		 document.getElementById("distilledWater_under").style.visibility="hidden";
	})
 }
//function for next button
function next_FN(){	
	document.getElementById("glassplate").style.visibility="hidden";
	document.getElementById("inference").style.visibility="hidden";
	document.getElementById("nextbtnId").style.visibility="hidden";
	if (stir_heatFlag==true){
		//alert("fff");
		$("#offStateId").qtip("hide");
		document.getElementById("beakerDrag").style.visibility="visible";
		document.getElementById("burner").style.visibility="hidden";
		document.getElementById("onStateId").style.visibility="hidden";
		document.getElementById("offStateId").style.visibility="hidden";
		
		$("#onStateId").qtip("hide");
		document.getElementById("testubestandtop").style.visibility="visible";
		document.getElementById("testubestandunder").style.visibility="visible";
		document.getElementById("testTube").style.visibility="visible";
		document.getElementById("testTubeId").style.visibility="visible";
		$("#testTubeId").trigger("mouseover");
		instruction.innerHTML=gt.gettext("Click on the test tube to move it up.");
		document.getElementById("soap").style.visibility="hidden";
		document.getElementById("BG02Img").style.visibility="visible";
			$('#waterMilky0').css({
						opacity:opacitynum
						})
	}
	if(testTubeFoamZoomFlag==true){
		document.getElementById("scale").style.visibility="hidden";
		document.getElementById("testubestandtop").style.visibility="hidden";
		document.getElementById("zoomTestTubeBubbleImg").style.visibility="hidden";
		document.getElementById("testubestandunder").style.visibility="hidden";
		document.getElementById("testTubeId").style.visibility="hidden";
		document.getElementById("testTube").style.visibility="hidden";
		document.getElementById("zoomTestTubeImg").style.visibility="hidden";
		document.getElementById("glassplate").style.visibility="visible";
		document.getElementById("cloth").style.visibility="visible";
		document.getElementById("clothDiv").style.visibility="visible";
		instruction.innerHTML=gt.gettext("Drag the cloth to put it into the beaker.");
		$("#clothDiv").trigger("mouseover");
		$("#testTubeId").qtip("destroy");
			/*$("#testTubeId").qtip({
			content: 'Click on the test tube.',
			position: {corner: {target: 'topMiddle',tooltip: 'bottomMiddle'}
			},style: {width: 180,padding: 2,background: '#FFFF99',color: 'black',textAlign: 'center',
			fontSize: 15+"px",border: {width: 1,radius: 5,color: '#FFFFCC'},tip: 'bottomMiddle'}
		});*/

		dragcloth();
	}
	
}
//function to turn on the burner
function OntheBurner(){
	document.getElementById("waterMilky").style.visibility="hidden";
	$('#waterMilky0').css({
				opacity:opacitynum		 
			 })
	document.getElementById("beaker").style.visibility="hidden";
	document.getElementById("beakerDrag").style.visibility="visible";
	document.getElementById("flame").style.visibility="visible";
	$('.flameshake').css({
			'animation-name': 'flameshake',
			'animation-duration': '70ms',
			'animation-iteration-count': 'infinite',
			'animation-timing-function': 'linear',
			
			'-moz-animation-name': 'flameshake',
			'-moz-animation-duration': '70ms',
			'-moz-animation-iteration-count':'infinite',
			'-moz-animation-timing-function': 'linear',
			
			'-webkit-animation-name': 'flameshake',
			'-webkit-animation-duration': '70ms',
			'-webkit-animation-iteration-count': 'infinite',
			'-webkit-animation-timing-function': 'linear',	
		});
	document.getElementById("burner_on").style.visibility="visible";
	document.getElementById("beaker_under").style.visibility="hidden";
	document.getElementById("soap").style.visibility="hidden";
	document.getElementById("offStateId").style.visibility="hidden";
	document.getElementById("beakerrodsolnDiv").style.visibility="visible";
	$("#beakerrodsolnDiv").trigger("mouseover");
	instruction.innerHTML=gt.gettext("Drag the beaker and place it over the Bunsen burner to gently heat it.  ");
	beakerDragToHeat();
	}
//function to turn off the burner
function OfftheBurner(){
	document.getElementById("flame").style.visibility="hidden";
	document.getElementById("burner_on").style.visibility="hidden";
	document.getElementById("onStateId").style.visibility="hidden";
	document.getElementById("nextbtnId").style.visibility="visible";
	$('#nxtTxt').html(gt.gettext('NEXT STEP'));
	document.getElementById("inference").style.visibility="visible";
	instruction.innerHTML=gt.gettext("Click on the information icon to see the Inference.</br></br>Click on the 'NEXT STEP' icon to go to the next process.");
	}
//function to drag the beaker to bunsen flame
function beakerDragToHeat(){
	$("#beakerDrag").draggable({
					start : function(event,ui){
					document.getElementById("beakerrodsolnDiv").style.visibility="hidden";
					$("#beakerrodsolnDiv").qtip("hide")
					}
				});
	$("#beakerDrag").draggable({
					stop : function(event,ui){
	 if (((((this.offsetTop>=70)&& (this.offsetLeft>=350)) && ((this.offsetTop<=150)&&(this.offsetLeft<=480))))){
			this.style.left=bgLeft+420+"px";							
			this.style.top=bgTop+130+"px";
			$("#beakerDrag").draggable( 'disable' );
			//document.getElementById("beakerDrag").disabled=false
			$('#rod').animate({
				 top:'-100px',
			 },function(){
			 $('#rod').animate({
				 left:'470px',
			 },1000,function(){
				 document.getElementById("rod1").style.visibility="visible"
				 $("#rod1").trigger("mouseover");
				 instruction.innerHTML=gt.gettext("Click on the glass rod to stir the mixture. ");
				 })
			 })
			document.getElementById("rod").style.visibility="visible";
		 }else{
			this.style.left=bgLeft+37+"px";								
			this.style.top=bgTop+280+"px";
			document.getElementById("beakerrodsolnDiv").style.visibility="visible";
		 }
		}
	});
}

//stir after heating 
function Stir_FNHeat(){
	document.getElementById("rod1").style.visibility="hidden";
	stir_heatFlag=true;
	$('#rod').animate({
				 top:'60px',
			 },1000,function(){
				 id=document.getElementById("rod");
				 Int=setInterval(stir,1)
				 soapMovementSecond()
			 })
}
//function to click on test tube
function ClickOnTestTube(){
	document.getElementById("testTubeId").style.visibility="hidden";
	$("#testTubeId").qtip("hide");
	$('#testTube').animate({
					 top:'160px',
				},500);
	 $('#testTube').animate({
					left:'280px',
				},500,function(){
					 document.getElementById("beakerTotestTubeId").style.visibility="visible";
					$("#beakerTotestTubeId").trigger("mouseover");/////////////
					instruction.innerHTML=gt.gettext("Click on the beaker to pour soap solution in to the test tube.");
				});
}

//function to pour solution frm beaker to test tube
function beakerTotestTube(){
	document.getElementById("beakerTotestTubeId").style.visibility="hidden";
	 $('#beakerDrag').animate({
					 top:'70px',
				},500);
	 $('#beakerDrag').animate({
					left:'160px',
				},500,function(){
					id=document.getElementById("beakerDrag");
					Int1=setInterval(beakerTotestTubeAnimation,15)
					});
}
//function to pour beaker soln to testtube
function beakerTotestTubeAnimation(){
	if(degree<=40){
			degree++
	}
	if(degree==40){
			degree=0;
			document.getElementById("testtubeSolution").style.visibility="visible";
			$('#testtubeSolution').css({
						opacity:opacitynum
						})
			document.getElementById("waterMilky0").src=simPath+'images/10mlSoln.png';
			document.getElementById("waterMilky0").style.top=115+"px";
			$('#waterMilky0').css({
						opacity:opacitynum		 
						 })
		if(degree==0){
			clearInterval(Int1)
			 $('#beakerDrag').animate({
					left:'37px',
				},500);
			 $('#beakerDrag').animate({
					 top:'277px',
			 },500,function(){
					document.getElementById("testTubediv").style.visibility="visible";
					$("#testTubediv").trigger("mouseover");
					instruction.innerHTML=gt.gettext("Click on the test tube to zoom it");
			});
		}
	}
			rotate();
	}
//function for click on zoom test tube 
function ClickOnTestTubeToZoom(){
	document.getElementById("beakerDrag").style.visibility="hidden";
	document.getElementById("testTubediv").style.visibility="hidden";
	document.getElementById("testubestandtop").style.visibility="hidden";
	document.getElementById("testubestandunder").style.visibility="hidden";
	document.getElementById("testtubeSolution").style.visibility="hidden";
	document.getElementById("testTube").style.visibility="hidden"
	document.getElementById("zoomTestTubeImg").style.visibility="visible";
	document.getElementById("scale").style.visibility="visible";
	instruction.innerHTML=gt.gettext("Drag the scale to measure the initial length of the soap solution");
	$("#scale").draggable({
					start : function(event,ui){
						document.getElementById("closeBtndiv").style.visibility="visible";
						$("#closeBtndiv").trigger("mouseover");
						instruction.innerHTML=gt.gettext("Click on the close button to go to the previous stage.");
					}
				});
	$("#scale").draggable({
					stop : function(event,ui){
				}
			 });
}
//function to close the close buttn
function ClickCloseBtn(){
	document.getElementById("beakerDrag").style.visibility="visible";
	document.getElementById("closeBtndiv").style.visibility="hidden";
	document.getElementById("testubestandtop").style.visibility="visible";
	document.getElementById("testubestandunder").style.visibility="visible";
	document.getElementById("testtubeSolution").style.visibility="visible";
	document.getElementById("scale").style.visibility="hidden";
	document.getElementById("zoomTestTubeImg").style.visibility="hidden";
	document.getElementById("testTubediv1").style.visibility="visible";
	document.getElementById("testTube").style.visibility="visible"
	$("#testTubediv1").trigger("mouseover");
	instruction.innerHTML=gt.gettext("Click on the test tube to shake it up and down.");
}
//function to click on testtube to shake
function ClickOnTestTubeToShake(){
	TestTubeToShakeFlag=true;
	id=document.getElementById("testtubeShakediv");
	document.getElementById("testtubeSolution").style.visibility="hidden";
	document.getElementById("testTubediv1").style.visibility="hidden";
	document.getElementById("zoomTestTubeImg").style.visibility="hidden";
	document.getElementById("scale").style.visibility="hidden";
	document.getElementById("testTube").style.visibility="hidden"
	document.getElementById("testtubeShakediv").style.visibility="visible";
	$('#testtubeSolution0').css({
			 opacity:opacitynum 
			  })
	Int3=setInterval(shake,8)
}
//function to shake hand or stir rod
function shakeORstir(){
	flag++
	if(flag1==true){
	if(degree<=20){
		degree++;
		if(degree==20){
		flag1=false;
		}
	}
	}else{
		degree--;
		if(degree==-20){
		flag1=true;
		}
	}
	if(degree1<=opacitynum){
	degree1=degree1+.01;
	}
}
//function to rotate object
function rotate(){
	id.style.webkitTransformOrigin='50% 50%';
	id.style.webkitTransform = 'rotate(' + degree + 'deg)';
	id.style.MozTransformOrigin='50% 50%';
	id.style.MozTransform ='rotate('+ degree +'deg)';
}
//function opacity
function opacityOfSoln(){
	 $('#waterMilky').css({
			opacity:degree1
		})
	}
//function for first soap movement
function soapMovementFirst(){
	if(FirstStirFlag==true){
	 $('#soap').animate({
		left:'77px',
	});
	$('#soap').animate({
		left:'73px',
	});
	$('#soap').animate({
		left:'75px',
	});
	}
}
//function for second soap movement
function soapMovementSecond(){
	$('#soap0').animate({
		left:'40px',
		opacity:.2,
	});
	$('#soap0').animate({
		left:'36px',
		opacity:.1,
	});
	$('#soap0').animate({
		left:'38px',
		opacity:0,
	});
}

//function to shake hand
function shake(){
	shakeORstir()
	rotate()
	if(flag==120){
		clearInterval(Int3)
		document.getElementById("inference").style.visibility="visible";
		document.getElementById("testTubediv2").style.visibility="visible";
		$("#testTubediv2").trigger("mouseover");
		document.getElementById("testubeBubbles").style.visibility="visible";
		instruction.innerHTML=gt.gettext("Click on the information icon to see the Inference.</br></br>Click on the test tube to zoom it.");
	}
}

//function to click testtube containg foam to zoom that test tube
function ClickOnTstTubeFoamToZoom(){
	testTubeFoamZoomFlag=true
	document.getElementById("beakerDrag").style.visibility="hidden";
	document.getElementById("testubestandtop").style.visibility="hidden";
	document.getElementById("testubestandunder").style.visibility="hidden";
	document.getElementById("zoomTestTubeImg").style.visibility="hidden";
	document.getElementById("testubeBubbles").style.visibility="hidden";
	document.getElementById("zoomTestTubeBubbleImg").style.visibility="visible";
	document.getElementById("scale").style.visibility="visible";
	document.getElementById("scale").style.top=120+"px";
	document.getElementById("scale").style.left=200+"px";
	document.getElementById("testTubediv2").style.visibility="hidden";
	document.getElementById("testTube").style.visibility="hidden";
	document.getElementById("testtubeShakediv").style.visibility="hidden";
	document.getElementById("inference").style.visibility="hidden";
	instruction.innerHTML=gt.gettext("Drag the scale to measure the length of the lather and the final length of the soap solution.");
	$("#scale").draggable({
					start : function(event,ui){
					}
				});
	$("#scale").draggable({
					stop : function(event,ui){
						document.getElementById("inference").style.visibility="visible";
						document.getElementById("nextbtnId").style.visibility="visible";
						$('#nxtTxt').html(gt.gettext('NEXT STEP'));
						instruction.innerHTML=gt.gettext("Click on the information icon to see the Inference.</br></br>Click on the 'NEXT STEP' icon to go to the next process.");
				}
			 });
}

//function to drag cloth in to beaker comtaining remaining soln
function dragcloth(){
	dragClothFlag=true
	//$("#testTubeId").qtip("destroy")
	$("#cloth").draggable({
					start : function(event,ui){
						document.getElementById("clothDiv").style.visibility="hidden";
						document.getElementById("cloth").src=simPath+'images/clothTakeoff.png';
						this.style.left=bgLeft+245+"px";
						this.style.top=bgTop+385+"px";
						this.style.height=30+"px";
						this.style.width=30+"px";
						$("#clothDiv").qtip("hide")
					}
					});
	
	$("#cloth").draggable({
					stop : function(event,ui){
	 if (((((this.offsetTop>=150)&& (this.offsetLeft>=45)) && ((this.offsetTop<=270)&&(this.offsetLeft<=120))) )){
		 
			 this.style.left=bgLeft+75+"px";							
			 this.style.top=bgTop+250+"px";
			  $('#cloth').animate({
				top:'380px',
				zIndex:999
			},100,function(){
				//document.getElementById("cloth").style.visibility="hidden";
				document.getElementById("cloth").src=simPath+'images/clothinBeaker.png';
				document.getElementById("cloth").style.height=10+"px";
				document.getElementById("cloth").style.width=50+"px";
				document.getElementById("cloth").style.left=72+"px";
				document.getElementById("cloth").style.top=390+"px";
				document.getElementById("clockBody").style.visibility="visible";
				document.getElementById("needle").style.visibility="visible";
				document.getElementById("minutLabel").style.visibility="visible";
				Int2=setInterval(rotateTarget,10);
			});	
		 }else{
			 document.getElementById("cloth").src=simPath+'images/cloth.png';
			 document.getElementById("clothDiv").style.visibility="visible";
			 document.getElementById("cloth").style.width=62+"px";
			 document.getElementById("cloth").style.height=19+"px";
			 this.style.left=bgLeft+245+"px";								
			 this.style.top=bgTop+385+"px";
		 }
		}
	});
}
//function for rotate needle of clocks
function rotateTarget(){
	degree++
	document.getElementById("needle").style.webkitTransformOrigin='3px 25px';
	document.getElementById("needle").style.webkitTransform = 'rotate(' + degree + 'deg)';
	document.getElementById("needle").style.MozTransformOrigin='3px 25px';
	document.getElementById("needle").style.MozTransform ='rotate('+ degree +'deg)';
	if(degree==360){
		clearInterval(Int2)
		document.getElementById("clothzoomDiv").style.visibility="visible";
		$("#clothzoomDiv").trigger("mouseover");
		instruction.innerHTML=gt.gettext("Click on the beaker to see the zoomed view of cloth.");
	}
}
//function to zoom the cloth(result)
function clothzoomDiv(){
	$("#clothDiv").qtip("hide")
	document.getElementById("thelist").disabled = false;
	document.getElementById("beakerDrag").style.visibility="hidden";
	document.getElementById("clothzoomDiv").style.visibility="hidden";
	document.getElementById("clockBody").style.visibility="hidden";
	document.getElementById("needle").style.visibility="hidden";
	document.getElementById("minutLabel").style.visibility="hidden";
	document.getElementById("glassplate").style.visibility="hidden";
	document.getElementById("cloth").style.visibility="hidden";
	document.getElementById("inference").style.visibility="visible";
	document.getElementById("BG3Img").style.visibility="visible";
	document.getElementById("resultzoomPaper").style.visibility="visible";
	if(selectWater==0){
	document.getElementById("resultzoom_1").style.visibility="visible";
	}else if(selectWater==1){
	document.getElementById("resultzoom_2").style.visibility="visible";
	}else{
	document.getElementById("resultzoom_3").style.visibility="visible";
	}
	instruction.innerHTML=gt.gettext("Click on the information icon to see the Inference.");
	/*$('#resultzoom').css({
			 opacity:opacitynum 
	})*/
	}

//function for stirr
function stir(){
	shakeORstir();
	rotate();
	opacityOfSoln();
	if(flag==240){		
		clearInterval(Int)	
		flag=false;
		$('#rod').animate({
				 top:'-100px',
		},1000);
		$('#rod').animate({
				 left:'580px',
		},1000,function(){
			$('#beakerDrag').animate({
					left:'37px',
			},1000)
			$('#beakerDrag').animate({
					top:'280px',
			},500,function(){
				if(stir_heatFlag==true){
					document.getElementById("onStateId").style.visibility="visible";	
					$("#onStateId").trigger("mouseover");
					instruction.innerHTML=gt.gettext("Click on the knob of the burner to turn it off.");
				}else{
					document.getElementById("offStateId").style.visibility="visible";	
					$("#offStateId").trigger("mouseover");
					instruction.innerHTML=gt.gettext("Click on the knob of the burner to turn it on.");
				}	
			});
			
		});
	}
}
//function for mouse over toltip
function overtoolTip(){
	document.getElementById("infertooltpImg").style.visibility="visible";
	document.getElementById("infertooltpId").style.display="block";
}
//function for remove tooltip
function removetooltip(){
	document.getElementById("infertooltpImg").style.visibility="hidden";
	document.getElementById("infertooltpId").style.display="none";
	document.getElementById("tooltpImg").style.visibility="hidden";
	document.getElementById("tooltpMSG").style.visibility="hidden";
}
//function for Information icon click
function inferClickFn(){
	document.getElementById("tooltpImg").style.visibility="visible";
	document.getElementById("tooltpMSG").style.visibility="visible";
	document.getElementById("infertooltpImg").style.visibility="hidden";
	document.getElementById("tooltpMSG").style.display="block";
	document.getElementById("infertooltpId").style.display="none";
	for(var i=0;i<3;i++){
		if(selectWater==i){
		toolTipMessages()	
		}
	}
}
//function for toolTipMeassages
function toolTipMessages(){
			document.getElementById("tooltpImg").style.height=50+"px";
			toolTipMessage.innerHTML=variable0;
		if(TestTubeToShakeFlag==true){
			document.getElementById("tooltpImg").style.height=50+"px";
			toolTipMessage.innerHTML=variable1;
		} if(testTubeFoamZoomFlag==true){
			document.getElementById("tooltpImg").style.height=70+"px";
			toolTipMessage.innerHTML=variable2;
		} if(dragClothFlag==true){
			document.getElementById("tooltpImg").style.height=70+"px";
			toolTipMessage.innerHTML=variable3;
		} 
}
function resetFN(){	

$("#thelist").attr('disabled',false);
	//alert("devi");
	//document.getElementById("thelist").disabled = false;	
	//$("#thelist").removeAttr('disabled');
}