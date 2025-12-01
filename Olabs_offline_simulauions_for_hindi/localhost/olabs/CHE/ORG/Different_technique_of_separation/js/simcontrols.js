// JavaScript Document

var propertyFlag=1;
var moveFlag=false;
var degree=0;
var keyFlag=false;
var openFlag=false;
var angle=270;
var topVal=0;
var pointFlag=0;
var flaskLabel=0;
var dropcount=0;
var milkFlag=0;
var waterFlag=0;
var openinterval;
var correctFlag=0;
var count=0;
var posFlag=0;
var tapRotFlag=0;
var rotNum=1;

var tempValue=30;
var boilingPoint;
var i=-480;
var imgTop;
var zoomTop
var interval;
var filterTimer;
var clockinterval
var resltImg=["correct.png","wrong.png"];
var solvntDist=[4,3.5];
var bInkDist=3.9;
var rInkDist=3.5;
var pigmntDistnce=[0.8,1.6,3.1,3.3]//[3.3,3.1,1.6,0.8];
var flaskTop=0;
var rotateCount=0;
var rotateEvt;
var gt=$;

/// canvas for bg image
var BGCanvas = document.getElementById("bgCanvas");
BGCanvas.width = 569;
BGCanvas.height = 340;
var bgCtx = BGCanvas.getContext('2d');
var bgImg = new Image;
bgImg.onload = function(){ 
bgCtx.drawImage(bgImg,0,0);
};
bgImg.src=simPath+'images/BG1.gif';
var inferenceMsg;

var techOptions;
var labelArray;
/// labels for components in the control.....
var textArray;
var solnOptions1;
var solnOptions2;
var solnOptions3;
var solnOptions4;
var solnOptions5;
var infMsgArray;

var helpMsgArray;
var timeoutEvt;
var solnTmpVal=[56,36,69];
var solnTmpValFract=[[65,78],[56,69],[82.5,99.5]];// change 82.5
var mixtureNum=0;
var filterString;




window.onload = function init(){
	
	
	document.getElementById("expName").innerHTML=gt.gettext("Separation of Mixtures Using Different Techniques");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	// $('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	// $('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	// $(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
	
	textArray=[gt.gettext("Select the technique:"),gt.gettext("Selected mixture:"),gt.gettext("Show scale"),gt.gettext("Result"),
	gt.gettext("Distance travelled by the solvent"),gt.gettext("Distance travelled by blue ink"),gt.gettext("Distance travelled by red ink "),
	gt.gettext("Rf value of blue ink"),gt.gettext("Rf value of red ink"),gt.gettext(" Distance travelled by Chlorophyll b (dark green)  "),
	gt.gettext("Distance travelled by Chlorophyll a (light green)  "),gt.gettext("Distance travelled by Xanthophyll (yellow) "),
	gt.gettext("Distance travelled by Carotene (orange) "),gt.gettext("Rf value of Chlorophyll b "),gt.gettext("Rf value of Chlorophyll a"),
	gt.gettext("Rf value of Xanthophyll "),gt.gettext("Rf value of Carotene"),gt.gettext("Only opposite side is possible."),
	gt.gettext("The procedure was wrong. Redo the experiment."),gt.gettext("Centrifuge machine."),gt.gettext("Click here to stop.")];
		
	techOptions=[gt.gettext("Chromatography"),gt.gettext("Centrifugation "),gt.gettext("Simple Distillation"),gt.gettext("Fractional Distillation"),
	gt.gettext("Separating Funnel")];
		
	solnOptions1=[gt.gettext("Red ink + Blue ink"),gt.gettext("Spinach leaves")];
	solnOptions2=[gt.gettext('Milk'),gt.gettext('Ferric hydroxide sol'),gt.gettext('Muddy water')];
    solnOptions3=[gt.gettext('Water + Acetone'),gt.gettext('Pentane + Heptane'),gt.gettext('Toluene + Hexane')];
    solnOptions4=[gt.gettext('Methanol + Ethanol'),gt.gettext('Hexane + Acetone'),gt.gettext('2-Propanol + 2-Butanol')];
	solnOptions5=[gt.gettext('Oil + Water'),gt.gettext('Kerosene oil + water')];
	

	labelArray=[gt.gettext("Red ink + Blue ink"),gt.gettext('Isopropyl alcohol + Water'),gt.gettext('Water'),gt.gettext('Milk'),gt.gettext('Cream layer'),gt.gettext('Skim milk (Plasma phase)'),gt.gettext('Supernatant liquid'),gt.gettext('Ferric hydroxide precipitate'),gt.gettext('Mud'),gt.gettext('Spinach leaves')];
	
	infMsgArray=[gt.gettext("Chromatography is the technique used for the separation of<br>those solutes that dissolve in the same solvent."),gt.gettext("Fractional distillation is used for the separation oftwo or more miscible<br>liquids for which the differencein boiling points is less than 25K.<br>Methanol boils at 65°C and ethanol boils at 78°C."),gt.gettext("Simple distillation is used for the separation of a mixture containing<br/>two miscible liquids that boil without decomposition and have<br/>sufficient difference(>25k) in their boiling points.<br/>At 56°C acetone boils and the vapours are collected<br/>in a RB flask and water is left behind in the flask."),gt.gettext("The denser particles forced to the bottom and the<br>lighter particles stay at the top when spin rapidly."),gt.gettext("The denser liquid at the bottom forms the lower layer and the lighter<br>liquid forms the top layer. This indicates water is denser than oil.")];
	
	helpMsgArray=[gt.gettext('To take ink drag the capillary tube to the beaker<br/>and drag it back to drop it on the paper.'),gt.gettext('Click on the lid of the<br/>chamber to open it.'),gt.gettext('Drag and place the paper in the chamber.'),gt.gettext('Click on the lid of<br/>the chamber to close it.'),gt.gettext('Click on the chamber to<br/>take the filter paper out.'),gt.gettext('Click here to open the lid.'),gt.gettext('Drag each tube to place it<br/>in the holder of the machine.'),gt.gettext('Click here to close the lid.'),gt.gettext('Click on the button to switch on the machine.'),gt.gettext('Click here to open the machine.'),gt.gettext('Click on the tube<br/>containing milk.'),gt.gettext('Click here to<br/>start the experiment.'),gt.gettext('Click here to<br/>start the experiment.'),gt.gettext('Drag the RB flask containing Methanol<br>and place it over the thermocol.'),gt.gettext('Drag the flask and place it over<br>the ice box to collect ethanol.'),gt.gettext('Click here to<br/>restart the heating mantle.'),gt.gettext('To pour the mixture into the separating funnel,<br>drag the beaker.'),gt.gettext('Click on the funnel<br/>to remove it.'),gt.gettext('Drag the separating funnel to<br>take it from the stand.'),gt.gettext('Click on the separating funnel<br>to shake it.'),'Click here to release<br/>the pressure inside the funnel.','Drag the funnel<br/>to place it back.',gt.gettext('To collect water from the separating funnel,<br>drag the beaker. '),gt.gettext('Click here to open/close<br/>the stop cock.'),gt.gettext('Click on the beaker to <br/>place it back.'),gt.gettext('•To collect the oil from the separating funnel,<br>drag the beaker.'),gt.gettext('Click here to open/close<br/>the stop cock.'),gt.gettext('Click on the beaker to <br/>place it back.')];
	
	$('#reset').attr('value',gt.gettext('Reset'));
	$('#start').attr('value',gt.gettext('Start'));
	filterString=gt.gettext('Whatman Filter Paper');
	 
	$('#bottletxt').html(labelArray[0]);
	$('#chambertxt').html(labelArray[1]);
	
	document.getElementById("tech").innerHTML=textArray[0];
	document.getElementById("soln").innerHTML=textArray[1];
	document.getElementById("shwtxt").innerHTML=textArray[2];
	
	document.getElementById("reslt").innerHTML=textArray[3];
	document.getElementById("txt1").innerHTML=document.getElementById("solvnt").innerHTML=textArray[4];
	document.getElementById("txt2").innerHTML=textArray[5];
	document.getElementById("txt3").innerHTML=textArray[6];
	document.getElementById("txt4").innerHTML=textArray[7];
	document.getElementById("txt5").innerHTML=textArray[8];
	document.getElementById("txt6").innerHTML=textArray[9];
	document.getElementById("txt7").innerHTML=textArray[10];
	document.getElementById("txt8").innerHTML=textArray[11];
	document.getElementById("txt9").innerHTML=textArray[12];
	document.getElementById("txt10").innerHTML=textArray[13];
	document.getElementById("txt11").innerHTML=textArray[14];
	document.getElementById("txt12").innerHTML=textArray[15];
	document.getElementById("txt13").innerHTML=textArray[16];
	
	//*--Loading option values in drop down----
	addintoDropDown( $('#theinput'),techOptions);
	addintoDropDown( $('#mixture'),solnOptions1);
	
	
}
   //*--Function to add values into the drop down---					   
	function addintoDropDown(getId,valueSet){		
		var selected = getId;
		$.each(valueSet, function(val, text) {
			selected.append(
				$('<option></option>').val(val).html(text)
			);
		});
	}
// function called on loading..
$(document).ready(function() {
		
	//*--Function to calculate the distance travelled by the solvent... --
	$("#solvnt_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#solvnt_txt').val()==solvntDist[0]){
				$('#resltImg1').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg1').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg1').css({display:'inline'});
		}
	});
	
	$("#solvnt_txt1").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#solvnt_txt1').val()==solvntDist[1]){
				$('#resltImg14').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg14').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg14').css({display:'inline'});
		}
	});
	
	$("#dGrInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#dGrInk_txt').val()==pigmntDistnce[0]){
				$('#resltImg6').attr('src',simPath+"images/"+resltImg[0]);	
			}else{
				$('#resltImg6').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg6').css({display:'inline'});
		}
	});
	$("#lGrInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#lGrInk_txt').val()==pigmntDistnce[1]){
				$('#resltImg7').attr('src',simPath+"images/"+resltImg[0]);	
			}else{
				$('#resltImg7').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg7').css({display:'inline'});
		}
	});
	$("#yInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#yInk_txt').val()==pigmntDistnce[2]){
				$('#resltImg8').attr('src',simPath+"images/"+resltImg[0]);	
			}else{
				$('#resltImg8').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg8').css({display:'inline'});
		}
	});
	$("#oInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#oInk_txt').val()==pigmntDistnce[3]){
				$('#resltImg9').attr('src',simPath+"images/"+resltImg[0]);	
			}else{
				$('#resltImg9').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg9').css({display:'inline'});
		}
	});
	
	$("#dGr_txt").keyup(function() { 
	
	  var rfble = (($('#dGrInk_txt').val())/($('#solvnt_txt1').val()));

		if(keyFlag==true){				
			if($('#dGr_txt').val()==Math.round(rfble*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg10').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg10').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg10').css({display:'inline'});
		}
	});
	$("#lGr_txt").keyup(function() { 
	
	     var rfred = ($('#lGrInk_txt').val()/$('#solvnt_txt1').val());
		if(keyFlag==true){				
			if($('#lGr_txt').val()== Math.round(rfred*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg11').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg11').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg11').css({display:'inline'});
		}
	});
	
	$("#y_txt").keyup(function() { 
	
	  var rfble = (($('#yInk_txt').val())/($('#solvnt_txt1').val()));

		if(keyFlag==true){				
			if($('#y_txt').val()==Math.round(rfble*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg12').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg12').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg12').css({display:'inline'});
		}
	});
	$("#o_txt").keyup(function() { 
	
	     var rfred = ($('#oInk_txt').val()/$('#solvnt_txt1').val());
		
		 
		if(keyFlag==true){				
			if($('#o_txt').val()== Math.round(rfred*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg13').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg13').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg13').css({display:'inline'});
		}
	});
	
	
	
	$("#bInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#bInk_txt').val()==bInkDist){
				$('#resltImg2').attr('src',simPath+"images/"+resltImg[0]);	
				document.getElementById("b_txt").disabled=false;	
			}else{
				$('#resltImg2').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg2').css({display:'inline'});
		}
	});
	$("#rInk_txt").keyup(function() { 
	
		if(keyFlag==true){				
			if($('#rInk_txt').val()==rInkDist){
				$('#resltImg3').attr('src',simPath+"images/"+resltImg[0]);	
				document.getElementById("r_txt").disabled=	false;		
			}else{
				$('#resltImg3').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg3').css({display:'inline'});
		}
	});
	$("#b_txt").keyup(function() { 
	
	  var rfble = (($('#bInk_txt').val())/($('#solvnt_txt').val()));

		if(keyFlag==true){				
			if($('#b_txt').val()==Math.round(rfble*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg4').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg4').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg4').css({display:'inline'});
		}
	});
	$("#r_txt").keyup(function() { 
	
	     var rfred = ($('#rInk_txt').val()/$('#solvnt_txt').val());
		
		 
		if(keyFlag==true){				
			if($('#r_txt').val()== Math.round(rfred*Math.pow(10,2))/Math.pow(10,2)){
				$('#resltImg5').attr('src',simPath+"images/"+resltImg[0]);			
			}else{
				$('#resltImg5').attr('src',simPath+"images/"+resltImg[1]);			
			}
			$('#resltImg5').css({display:'inline'});
		}
	});
	
	$("#solvnt_txt,#bInk_txt,#rInk_txt,#b_txt,#r_txt,#solvnt_txt1,#o_txt,#y_txt,#lGr_txt,#dGr_txt,#oInk_txt,#yInk_txt,#lGrInk_txt,#dGrInk_txt").keypress(function(key) {
		if((key.charCode >45 && key.charCode <= 57)||(key.charCode==0) ){	
			keyFlag=true;
			return true;
		}else{
			keyFlag=false;
			return false;
		}
	});		
																	 
	$("#solvnt_txt,#bInk_txt,#rInk_txt,#b_txt,#r_txt").change(function() {
		dotRestrict(this);																	  
	});
	
});



//combo change......
function propertyChange(){
	
	if (document.getElementById("theinput").selectedIndex==0){ 
	$('#infersampleDiv').css({display:'none'});
		 hideAll();
		 if(propertyFlag!=1){
			 document.getElementById("mixture").innerHTML="";
			 addintoDropDown( $('#mixture'),solnOptions1);
		 }
		 propertyFlag=1;
		 $('#capTube,#filterPaper,#inkBottle,#chamber,#champerDoor,#tubeInbeaker,#inputbx,#filterPaperOuter').css({ display:'block'});
		 $('#bottleLabel1,#bottletxt,#bottleLabel2,#chambertxt,#reslt').css({ display:'block',})
		 document.getElementById("checkboxId").style.visibility=document.getElementById("show").style.visibility="visible";
		 document.getElementById("filterPaperImg").style.width='100%';
	     document.getElementById("filterPaperImg").setAttribute('src', simPath+'images/on_table.png');
		 bgCtx.drawImage(bgImg,0,0);
		 bgImg.src=simPath+'images/BG1.gif';
		 $('#filterPaper').css({left:'200px',top:'262px'});
		 $('#paperColor3,#paperColor2,#paperColor,#inkDIV').css({ display:'none'});
		 $("#capTube").draggable({ disabled: false });
		 document.getElementById("bInk_txt").disabled=document.getElementById("rInk_txt").disabled=document.getElementById("solvnt_txt").disabled=true;
         document.getElementById("b_txt").disabled=document.getElementById("r_txt").disabled=true; 
		 $('#resltImg1,#resltImg2,#resltImg3,#resltImg4,#resltImg5,#resltImg6,#resltImg7,#resltImg8').css({ display:'none'});
		 $('#resltImg9,#resltImg10,#resltImg11,#resltImg12,#resltImg13,#resltImg14').css({ display:'none'});
		 document.getElementById('bInk_txt').value=document.getElementById('rInk_txt').value=document.getElementById('solvnt_txt').value="";
		 document.getElementById('b_txt').value=document.getElementById('r_txt').value="";
		 document.getElementById("o_txt").value=document.getElementById("y_txt").value=document.getElementById("lGr_txt").value=document.getElementById("dGr_txt").value="";
		 document.getElementById("oInk_txt").value=document.getElementById("yInk_txt").value=document.getElementById("solvnt_txt1").value="";
		 document.getElementById("lGrInk_txt").value=document.getElementById("dGrInk_txt").value="";		 
		DragTubeFirst();
	}
	else if (document.getElementById("theinput").selectedIndex==1){ 
	$('#infersampleDiv').css({display:'none'});
		 hideAll();
		 if(propertyFlag!=2){
			 document.getElementById("mixture").innerHTML="";
			 addintoDropDown( $('#mixture'),solnOptions2);
		 }
		 propertyFlag=2;
		 bgCtx.drawImage(bgImg,0,0);
		 bgImg.src=simPath+'images/BG_centrifug.gif';
		 document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeA.png');
		 document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeB.png');
		 $('#start_centrifug').css({display:'block'});
		 $('#tubeA,#tubeB,#machine,#center_rotate,#closed_top,#doorClick,#readingTxt1,#readingTxt2,#readingTxt3').css({ display:'block',})
		 $('#tubeA').css({left:'50px',top:'50px'});
		 $('#tubeB').css({left:'50px',top:'190px'});
		 $('#readingTxt1').html("45");
		 $('#readingTxt2').html("25");
		 $('#readingTxt3').html("22");
	}
	else if (document.getElementById("theinput").selectedIndex==2){ 
	
	$('#infersampleDiv').css({display:'block'});
		 hideAll();
		 if(propertyFlag!=3){
		   document.getElementById("mixture").innerHTML="";
		   addintoDropDown( $('#mixture'),solnOptions3);
		 }
		 propertyFlag=3;
		 boilingPoint=solnTmpVal[document.getElementById("mixture").selectedIndex];
		 bgCtx.drawImage(bgImg,0,0);
		 bgImg.src=simPath+'images/BG_simpleDist.gif';
		 $('#simpledistDiv,#dist_button,#zoomThermo,#circleInFlask,#start,#circleDiv').css({ display:'block',})
		 document.getElementById('start').disabled=false;
	}else if (document.getElementById("theinput").selectedIndex==3){ 
	$('#infersampleDiv').css({display:'none'});
		 hideAll();	
		  if(propertyFlag!=4){
		   document.getElementById("mixture").innerHTML="";
		   addintoDropDown( $('#mixture'),solnOptions4);
		  }
		  propertyFlag=4;
		 bgCtx.drawImage(bgImg,0,0);
		 bgImg.src=simPath+'images/BG_fract.gif';
		 $('#fractDist,#dist_button2,#zoomThermo2,#circleInFlaskFract,#start,#dist_flask1,#icebox,#clipunder,#clipup,#dist_flask2,#flsk2Div,#circleFractDiv').css({ display:'block',})
		 document.getElementById('start').disabled=false;
	}
	else if (document.getElementById("theinput").selectedIndex==4){ 
	$('#infersampleDiv').css({display:'none'});
		 hideAll();	
		 if(propertyFlag!=5){
		  document.getElementById("mixture").innerHTML="";
		  addintoDropDown( $('#mixture'),solnOptions5);
		 }
		  propertyFlag=5;
		 bgCtx.drawImage(bgImg,0,0);
		 bgImg.src=simPath+'images/BG_separation.gif';
		 $('#bottle1,#bottle2,#bottle3,#funnelwithStand,#funnel,#glass_tube,#bottle1Shadow,#bottle2Shadow,#bottle3Shadow,#stand_top,#tap_close,#pouring_objectDiv').css({ display:'block',})
		 enableBeakerDrag();
		 $('#bottle3').draggable('enable');
		 document.getElementById("bottle3").setAttribute('src', simPath+'images/solution_drag.png');
	}else{
		 hideAll();	
    }

}

///changing mixture.....
function mixtureChange(){
	 propertyChange();
	 mixtureNum=document.getElementById("mixture").selectedIndex;
	 if (document.getElementById("theinput").selectedIndex==0){ 
	 	if(document.getElementById("mixture").selectedIndex==0){
			$('#inputbx').css({ display:'block'});
			$('#inputbx1').css({ display:'none'});
			
			 document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln.png');
			 $('#bottletxt').html(labelArray[0]);
			 $('#inkDIV').css({ 'background-color':'#003'});
		}else{
			$('#inputbx').css({ display:'none'});
			$('#inputbx1').css({ display:'block'});
			document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln_01.png');
			$('#bottletxt').html(labelArray[9]);
			$('#inkDIV').css({ 'background-color':'#060'});
		}
	 }
	 else if (document.getElementById("theinput").selectedIndex==1){ 
		if (document.getElementById("theinput").selectedIndex==1){ 
			if(document.getElementById("mixture").selectedIndex==0){
				document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeB.png');
			}else if(document.getElementById("mixture").selectedIndex==1){
				document.getElementById("tubeB").setAttribute('src', simPath+'images/TubeFerric.png');///to change
			}else{
				document.getElementById("tubeB").setAttribute('src', simPath+'images/Tube_muddy.png');////to change
			}
		}
	 }else if (document.getElementById("theinput").selectedIndex==4){ 
	 	document.getElementById("bottle3").setAttribute('src', simPath+'images/beaker_Kerosene.png');
	 }
	
}
var picktube=0;
DragTubeFirst();
///for dragging capillary tube towards the beaker...
function DragTubeFirst()
{
	if(picktube==0)
	{
		$("#capTube").draggable({
	containment: "#canvasBox",
		drag: function(event,ui){ 
		 if(($("#capTube").position().top>=98)&&($("#capTube").position().top<135)&&(($("#capTube").position().left>25)&&($("#capTube").position().left<121)))
			 
			 {
				 document.getElementById("capTube").style.zIndex=1;  
				 document.getElementById("inkDIV").style.display="block";
				 $('#inkDIV').animate({height:'10px',top:"0px"},100,function(){
					 $('#inkDIV').stop();
					  
					 });
					document.getElementById("theinput").disabled=document.getElementById("mixture").disabled=true;
		picktube=1;
					  DragtubetoPaper();
			 }
		},
		stop:function(event,ui)
		{
		$('#capTube').css({left:'218px',top:"100px"}); 
		}
});
	}
}

//drag the capillery tube to the filter paper
function DragtubetoPaper()
{
	if(picktube==1)
	{
	$("#capTube").draggable({
	drag: function(event,ui){ 
	if(($("#capTube").position().top>=25)&&($("#capTube").position().top<=190)&&(($("#capTube").position().left>=200)&&($("#capTube").position().left<=270))){
		openFlag=true;
		$('#inkDIV').stop();
			$('#inkDIV').animate({height:'1px',top:"10px"},function(){
			document.getElementById("paperColor").style.display='block';
			if(document.getElementById("mixture").selectedIndex==0){
			document.getElementById("paperColor3").style.display=document.getElementById("paperColor2").style.display="block";
			}
			else{
				$('#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ display:'block',});
				}	
				doorOpen();
				$('#capTube').css({ display:'none',left:'200px',top:'100px'});	
			});
	}
	else
	{
		openFlag=false;
	}
	},
	});
	}
}
////chamber door open
function doorOpen(){
	$("#champerDoor").click(function() {
		if(openFlag==true){
			openFlag=false;
			$('#filterPaper').draggable({disabled:false});
			if(pointFlag==0){
			 enableFilterdrag();
			}
			$("#champerDoor").css({top:'40px',left:'425px'});
			$("#champerDoor").css("-moz-transform", "rotate(45deg)");
			$("#champerDoor").css("-webkit-transform", "rotate(45deg)");
		}else{
			openFlag=true;
			$("#champerDoor").css("-moz-transform", "rotate(0deg)");
			$("#champerDoor").css("-webkit-transform", "rotate(0deg)");
			$("#champerDoor").css({top:'77px',left:'375px'});
			if(pointFlag==1){
				pointFlag++;
				clockinterval=setInterval("clockRotation()",10);
				topVal=0;
				$("#waterDIV,#OuterwaterDIV").css({display:'block'});
				filterTimer=setInterval("inkPosMovment()",110);
				$('#champerDoor').unbind('click');
			}
	   }
  });
}

//// to enable filter ppaer drag property....
function enableFilterdrag(){
	$("#filterPaperOuter").css({display:'none'});
	
	$("#filterPaper").mousedown(function() {
			if(pointFlag==0){
				filterMouseDown();
				$('#filterPaper').draggable({disabled:false});
			}else{
				$('#filterPaper').draggable({disabled:true});	
			}
	});
    if(pointFlag==0){
	$("#filterPaper").draggable({
		
			drag: function(event,ui){ 
			},
			containment: "#canvasBox",
			stop: function() {
			
				if(($("#filterPaper").position().top>0)&&($("#filterPaper").position().top<80)&&(($("#filterPaper").position().left>300)&&($("#filterPaper").position().left<500))){
					if(openFlag==false){
						filterTimer=setInterval("filterRotation()",10);
						pointFlag=1;
						$('#needle,#clockBody').css({ display:'block',})
					}else{
						document.getElementById("filterPaperImg").setAttribute('src', simPath+'images/on_table.png');
					    $("#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'19px',top:'37px'});	
					    document.getElementById("filterPaper").style.left="200px";
					    document.getElementById("filterPaper").style.top="262px";
				   }
				}else{
					  document.getElementById("filterPaperImg").setAttribute('src', simPath+'images/on_table.png');
					  $("#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'19px',top:'37px'});	
					  document.getElementById("filterPaper").style.left="200px";
					  document.getElementById("filterPaper").style.top="262px";
				}
			}
	});
	}
}
///mouse down event for filterpaper...
function filterMouseDown(){
		document.getElementById("filterPaperImg").setAttribute('src', simPath+'images/paper_inbox.png');
		$("#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'13px',top:'130px'});
		
}


///placing  filter paper into the chamber...
function filterRotation(){
	
	
	if(openFlag==false){
		angle=270;
	    $("#filterPaper").css({left:'455px'});
		if(angle==270){
		  topVal+=5;
		  if(topVal>50){
			  openFlag=false;
		      clearInterval(filterTimer) ;
		  }	
		  	 $("#filterPaper").css({top:(65+topVal)+'px'});
		}	
	}
}

////// separation of inks.....
function inkPosMovment(){
	
	 	 topVal+=1;
		 if(topVal>18){
			  if(topVal<=165){
			   $("#paperColor2").css({top:(130-((topVal-22)/1.5))+'px'});
			  }
			   $("#paperColor3").css({top:(130-((topVal-18)/1.5))+'px'});
		 }
		 else{
			  if(topVal<95){
			  $("#waterDIV").css({top:(135-(topVal*1.2))+'px',height:(topVal*1.2)+'px'});
			 }
			  if(topVal>18){
				  document.getElementById("paperColor").style.display='none';
				  if(topVal<=145){
					 $("#paperColorO").css({top:(128-((topVal-22)/1.5))+'px'}); //3.3
				  }
				 if(topVal<=139){
					 $("#paperColorY").css({top:(128-((topVal-22)/1.6))+'px'}); //3.1
				 }
				 if(topVal<=65){
					 $("#paperColorLGr").css({top:(128-((topVal-22)/1.7))+'px'}); //1.6
				 }
				 if(topVal<=40){
				 	$("#paperColorDGr").css({top:(128-((topVal-22)/1.8))+'px'}); //0.77
				 }
			  }
		 }
        if(topVal>=165){
				 if(topVal>=180){
				  clearInterval(filterTimer) ;
				  openFlag=true;
				  enableChamberClcik();
				 }
		}
}


var rotationCount=5; // clock rotating time..
//function for rotate needle of clock...
function clockRotation(){
	degree++;
	
	if(degree>=(360*rotationCount)){
		 rotationCount=0;
		 clearInterval(clockinterval);
		 if (document.getElementById("theinput").selectedIndex==1){ 
		 	  document.getElementById("reset").disabled=false;
			  clearInterval(rotateEvt);
			  $('#start_centrifug').unbind('click');
			  $('#tubeA,#tubeB').stop(true,true); 
			  adjustTubePos();
			  correctFlag=2;
			  $('#tubeB').click(function(){tubeB_zoom();});	
			  $('#center_rotate').rotate(155);
		 }
		degree=0;//
	}
	document.getElementById("needle").style.webkitTransformOrigin='5px 35px';
	document.getElementById("needle").style.webkitTransform = 'rotate(' + degree + 'deg)';
	document.getElementById("needle").style.MozTransformOrigin='5px 35px';
	document.getElementById("needle").style.MozTransform ='rotate('+ degree +'deg)';
}

///click function on chamber....
function enableChamberClcik(){
	
	  $("#chamber").click(function() {
		  $('#filterPaper').draggable({disabled:true});
		      hidecurrentScene();
			  document.getElementById("filterPaper").style.position='relative';
			  document.getElementById("OuterwaterDIV").style.position='relative';
			  $("#filterPaper").css({left:'45%',top:'24%',display: 'block'});
			  $("#OuterwaterDIV").css({left:'45%',top:'-36%',height:'60%',width:'8%'});
			  $("#paperColor2,#paperColor,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'17px'});
			  $("#paperColor").css({top:'173px',opacity:'0.0'});
			  if(document.getElementById("mixture").selectedIndex==0){
			  	$("#waterDIV").css({top:'13%',height:'86%',width:'89%'});
				$("#paperColor2").css({top:'42px'});
			  	
			  	$("#paperColor3").css({top:'26px'});
			  }else{
				$("#waterDIV").css({top:'22%',height:'77%',width:'89%'});
				$("#paperColorDGr").css({top:'147px'});
				$("#paperColorLGr").css({top:'115px'});
				$("#paperColorY").css({top:'57px'});
				$("#paperColorO").css({top:'50px'});
			  }
			  document.getElementById('filterPaperImg').style.width = "7%";
			  inferenceMsg=infMsgArray[0];
			  document.getElementById("inferenceDiv").style.visibility="visible";
			  document.getElementById("show").disabled=false;
			  $('#bottleLabel1,#bottletxt,#bottleLabel2,#chambertxt').css({ display:'none',})
			  $("#chamber").unbind("click");
			  
	  });
 }


///hide allll

function hidecurrentScene(){
	
	$('#inkBottle,#chamber,#champerDoor,#tubeInbeaker,#capTube').css({ display:'none',})
	$('#needle,#clockBody').css({ display:'none',})
	
}
///FN for scale dragging ......
function enableScale(){

	$("#scale").draggable({
		
			drag: function(event,ui){ 
					},
			stop: function() {
			}
			
	});
}

//// hiding images.......
function hideAll(){
	
		$('#simpledistDiv,#dist_button,#zoomOuterDiv,#zoomThermo,#circleInFlask,#start,#circleRightFlask,#dist_flask1,#fractDist,#icebox').css({ display:'none',})
		$('#clipunder,#clipup,#dist_button2,#circleRightFlaskFract,#dist_flask2,#flsk2Div,#zoomThermo2,#circleFractDiv,#toolTip,#zoomedImg').css({ display:'none',})
		document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln.png');
		$('#bottletxt').html(labelArray[0]);
	    $('#inkDIV').css({ 'background-color':'#003'});
		$('#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6').css({display:'none'});
		$('#circleFractDiv').css({height:'10px',top:'270px'});
		$('#circleInFlaskFract').css({top:'-5px'});
		$('#circleDiv').css({top:'242px'});
		$('#needle').css({top:'86px',left:'287px'});
		$('#clockBody').css({top:'70px',left:'240px'});
		$('#tubeA,#tubeB,#machine,#center_rotate,#closed_top,#doorClick,#readingTxt1,#readingTxt2,#readingTxt3,#door2,#start_centrifug,#tube_zoomDiv1,#tube_zoomDiv2').css({ display:'none'});
		$('#doorClick').css({top:'215px'});
		$('#center_rotate').rotate(0);
		$('#bottle1,#bottle2,#bottle3,#funnelwithStand,#stirrer,#funnel,#glass_tube,#bottle1Shadow,#bottle2Shadow,#bottle3Shadow,#stand_top').css({ display:'none',}) ;
		$('#glass_tube2,#tap_close,#waterpouring_objectDiv,#oilpouring_objectDiv,#waterFlow,#BeakerSoln,#BeakerSoln1,#toolTip,#pouring_objectDiv,#oilSepStill').css({ display:'none',}) ;
		
		$("#BeakerSoln,#BeakerSoln1").css({height:'1px',top:'-3px',opacity:'0.6'});
	    $("#BeakerSolnimg,#BeakerSolnimg1").css({top:'-60px'});
		
		document.getElementById("pouring_objectDiv").innerHTML=document.getElementById("waterpouring_objectDiv").innerHTML=document.getElementById("oilpouring_objectDiv").innerHTML="";
		$('#bottle1').css({left:'50px',top:'250px'});
		$('#bottle2').css({left:'130px',top:'250px'});
		$('#bottle3').css({left:'210px',top:'250px'});
		$('#funnel').css({left:'348px',top:'45px'});
		$('#lidDiv').css({left:'565px',top:'110px'});
		$('#glass_tube2').css({left:'346px',top:'58px'});
		
		$('#vapoursDiv').css({height:'10px',top:'220px'});
		$('#whiteDiv').css({top:'-100px'});
		$('#vapoursSideDiv').css({width:'16px',top:'145px',opacity:'0px'});
		$('#inkBottle,#chamber,#champerDoor,#tubeInbeaker,#capTube,#inputbx,#inputbx1,#inkDIV,#bubbles,#outlayer_Water,#circleDiv,#soln_inFunnel').css({ display:'none'});
		$('#needle,#clockBody,#filterPaper,#OuterwaterDIV,#filterPaperOuter,#vapoursFractDiv,#vapoursSideFractDiv,#vapoursDiv,#vapoursSideDiv,#dropImg').css({ display:'none'});
		document.getElementById("show").checked=false;
		document.getElementById("show").disabled=true;
		document.getElementById("checkboxId").style.visibility=document.getElementById("show").style.visibility=document.getElementById("inferenceDiv").style.visibility=document.getElementById("scale").style.visibility= "hidden";
		$('#bottleLabel1,#bottletxt,#bottleLabel2,#chambertxt,#reslt,#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ display:'none'});
		$('#tap_close').css({left:'373px',top:'176px','-moz-transform':'rotate(0deg)','-webkit-transform':'rotate(0deg)','-o-transform':'rotate(0deg)',
			 '-ms-transform':'rotate(0deg)',});
		tempValue=30;
		dropcount=0;
		flaskLabel=0;
		rotationCount=5;
		i=-480;
		openFlag=false;
		correctFlag=0;
		document.getElementById("imgZoom2").style.top=document.getElementById("imgZoom").style.top=i+'px';
		waterFlag=0;
		milkFlag=0;
		funnelTop=45;
		funnelLeft=348;
		lidLeft=555;
		tapRotFlag=0;
		rotNum=1;
		posFlag=0;
		topVal=0;
		pointFlag=0;
		degree=0;
		picktube=0;
		$("#OuterwaterDIV").css({top:'139px',left:'455px',height:'133px',width:'30px'});
		$("#waterDIV").css({top:'148px',height:'2px',width:'99%'});
		$("#bubbles_fract").css({height:'6px',top:'267px'});
		
		document.getElementById("filterPaper").style.position='absolute';
		document.getElementById("OuterwaterDIV").style.position='absolute';
		$("#champerDoor").css("-moz-transform", "rotate(0deg)");
		$("#champerDoor").css("-webkit-transform", "rotate(0deg)");
		$("#champerDoor").css({top:'77px',left:'375px'});
		$("#champerDoor").unbind('click');
		$("#chamber").unbind('click');
		clearInterval(filterTimer);
		clearInterval(clockinterval);
		clearInterval(interval);
		clearInterval(rotateEvt);
		$('#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ left:'19px',top:'37px'});
		$('#tubeA,#tubeB').draggable({disabled:true});
		$("#circleRightFlask").css({height:'2px',top:'268px'});
		$("#circleInRFlask").css({top:'-30px'});
		$("#icebox").css({top:'170px'});
		$('#dist_flask1').css({ left:'447px',top:'142px','z-index':'5'});
		
		$('#flsk2Div,#dist_flask2').css({ left:'490px',top:'280px'});
		$('#icebox,#flsk2Div').draggable({disabled:true}); 
		document.getElementById("theinput").disabled=document.getElementById('mixture').disabled=false;
		$("#funnel").unbind("click");
		document.getElementById("glass_tube2").setAttribute('src', simPath+'images/glass_tube2.png');
		$('#bottle2,#bottle1').draggable({disabled:true});
		$("#filterPaper").draggable({disabled:true});
		clearInterval(timeoutEvt);
		$('#tubeB').unbind("click");
		$('#outlayer_Water').css({top:'165px',left:'447px'});
		
	    document.getElementById("needle").style.webkitTransform = 'rotate(0deg)';
	    document.getElementById("needle").style.MozTransform ='rotate(0deg)';
		
}

//*--Function for valaidation---
		
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

/////for scale.....
function showscale_FN(){
	
	document.getElementById("show").style.visibility="visible";
	if(document.getElementById("show").checked==true){
		document.getElementById("scale").style.visibility="visible";	
		document.getElementById("scale").style.top="0px";
		document.getElementById("scale").style.left="125px";
		
		if(document.getElementById("mixture").selectedIndex==0){
			$('#arrow1,#arrow2').css({display:'block',left:'258px'});
			$('#arrow1').css({top:'100px'});
			$('#arrow2').css({top:'116px'});
			document.getElementById("b_txt").disabled=document.getElementById("r_txt").disabled=false;
			document.getElementById("bInk_txt").disabled=document.getElementById("rInk_txt").disabled=document.getElementById("solvnt_txt").disabled=false;
		}else{
			$('#arrow3,#arrow4,#arrow5,#arrow6').css({display:'block',left:'258px'});
			$('#arrow3').css({top:'124px'});
			$('#arrow4').css({top:'131px'});
			$('#arrow5').css({top:'189px'});
			$('#arrow6').css({top:'221px'});
			
			document.getElementById("o_txt").disabled=document.getElementById("y_txt").disabled=document.getElementById("lGr_txt").disabled=document.getElementById("dGr_txt").disabled=false;
			document.getElementById("oInk_txt").disabled=document.getElementById("yInk_txt").disabled=document.getElementById("solvnt_txt1").disabled=false;
			document.getElementById("lGrInk_txt").disabled=document.getElementById("dGrInk_txt").disabled=false;
		}
	}else{
		document.getElementById("scale").style.visibility="hidden";	
		$('#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6').css({display:'none'});
		if(document.getElementById("mixture").selectedIndex==0){
			document.getElementById("b_txt").disabled=document.getElementById("r_txt").disabled=true;
			document.getElementById("bInk_txt").disabled=document.getElementById("rInk_txt").disabled=document.getElementById("solvnt_txt").disabled=true;
		}else{
			document.getElementById("o_txt").disabled=document.getElementById("y_txt").disabled=document.getElementById("lGr_txt").disabled=document.getElementById("dGr_txt").disabled=true;
			document.getElementById("oInk_txt").disabled=document.getElementById("yInk_txt").disabled=document.getElementById("solvnt_txt1").disabled=true;
			document.getElementById("lGrInk_txt").disabled=document.getElementById("dGrInk_txt").disabled=true;
		}
	}
	enableScale();
}


///simplw distillation.....
function buttonClick(){
	if(tempValue==30||(flaskLabel>0)){
		clearInterval(interval);
		interval=setInterval("tempIncreasing()",400);
		if(flaskLabel>=2){
			$('#icebox').draggable({disabled:true});  
		}
	}
	document.getElementById('start').disabled=document.getElementById('theinput').disabled=document.getElementById('mixture').disabled=true;
	
}


/// for increasing the temperature......
function tempIncreasing(){
	if (document.getElementById("theinput").selectedIndex==3){
		if(flaskLabel==2){
			if(tempValue<=solnTmpValFract[document.getElementById("mixture").selectedIndex][1]){ ///second temp change.....
			
				tempValue++;
				if(document.getElementById("mixture").selectedIndex!=2){
					i+=5.1;
				}else{
					i+=5.16;
				}
				if(tempValue>(solnTmpValFract[document.getElementById("mixture").selectedIndex][1]-10)){
					document.getElementById('bubbles_fract').style.display=document.getElementById('circleRightFlaskFract').style.display='block';
				}
		    }else{
				if(document.getElementById("mixture").selectedIndex==0){
					inferenceMsg=infMsgArray[1];
				}else if(document.getElementById("mixture").selectedIndex==1){
					inferenceMsg=infMsgArray[7];
				}else{
					inferenceMsg=infMsgArray[8];
				}
				showVapours();
			}
		}else if(tempValue<=solnTmpValFract[document.getElementById("mixture").selectedIndex][0]){///first temp change
			    tempValue++;
			    if(document.getElementById("mixture").selectedIndex!=2){
					i+=5.05;
				}else{
					i+=5.15;
				}
				if(tempValue>(solnTmpValFract[document.getElementById("mixture").selectedIndex][0]-5)){
					document.getElementById('bubbles_fract').style.display=document.getElementById('circleRightFlaskFract').style.display='block';
				}
		}else{
			showVapours();
		}
		imgTop=i+"px";
	    document.getElementById("imgZoom2").style.top=imgTop;
	}else{
		if(tempValue<=solnTmpVal[document.getElementById("mixture").selectedIndex]){
			tempValue++;
			if(document.getElementById("mixture").selectedIndex==0){
				i+=5;
			}else if(document.getElementById("mixture").selectedIndex==0){
				i+=4.4;
			}else{
				i+=5.1;
			}
			if(tempValue>48){
				document.getElementById('bubbles').style.display=document.getElementById('circleRightFlask').style.display='block';
			}
		}
		else{
		    clearInterval(interval);
		    document.getElementById('vapoursDiv').style.display='block';
			$("#vapoursDiv").delay(1000).animate({height:'100px',top:'130px'},function(){
				   document.getElementById('vapoursSideDiv').style.display='block'; 
			      $("#vapoursSideDiv").delay(500).animate({width:'190px',top:'160px',opacity:'0.3'});
			  } );
			$("#whiteDiv").animate({top:'-20px'});
			timeoutEvt=setTimeout(function(){
			interval=setInterval("dropPlay()",1000);
			$('#circleDiv').animate({top:'246px'});
			document.getElementById('bubbles').style.display='none';
			 },3000)
		}
		imgTop=i+"px";
	    document.getElementById("imgZoom").style.top=imgTop;
	}
		
}

///function for clearing the interval &  to play the animation..
function showVapours(){
	        clearInterval(interval);
		    document.getElementById('vapoursFractDiv').style.display='block';
			$("#vapoursFractDiv").delay(500).animate({height:'175px',top:'90px'},function(){
				   document.getElementById('vapoursSideFractDiv').style.display='block'; 
			      $("#vapoursSideFractDiv").delay(500).animate({width:'160px',top:'103px',opacity:'0.5'});
			  } );
			$("#whiteFractDiv").animate({top:'0px'});
			timeoutEvt=setTimeout(function(){
				dropcount=0;
				interval=setInterval("dropPlay()",800);
				$("#circleInFlaskFract").animate({top:'-10px'});$('#circleFractDiv').delay(600).animate({top:($('#circleFractDiv').position().top+5)+'px',height:($('#circleFractDiv').height()-5)+'px'});
				document.getElementById('bubbles_fract').style.display='none';
			},2000);
			
}



/// for playing drop animation...
function dropPlay(){
	dropcount++;  
	
	
	if(dropcount<5){
		if (document.getElementById("theinput").selectedIndex==3){
			$('#dropImg_fract').css({top:'160px',display:'block'});
			$('#dropImg_fract').animate({top:'170px'});	
			$('#circleRightFlaskFract').css({top:(172-dropcount)+'px',height:(2+dropcount)+'px',display:'block'});
			$('#circleInRFlaskFract').css({top:(-10+dropcount)+'px',display:'block'});
		}else{
			$('#circleRightFlask').css({display:'block'});
			$('#dropImg').css({top:'230px',display:'block'});
			$('#dropImg').animate({	top:'265px'});	
			$('#circleRightFlask').css({top:(268-dropcount)+'px',height:(2+dropcount)+'px'});
			$('#circleInRFlask').css({top:(-30+dropcount)+'px'});
		}
	}
	else{
		clearInterval(interval);
		if (document.getElementById("theinput").selectedIndex==3){
			$("#vapoursFractDiv,#vapoursSideFractDiv").fadeOut("slow");
			$('#dropImg_fract').css({display:'none'});
			if(flaskLabel!=2){
				$("#circleRightFlaskFract").css({display:'none'});
				$('#outlayer_Water').css({left:'447px',top:'165px',display:'block'});
				$('#icebox').draggable({disabled:false}); 
				dragIcebox();
			}
			else{
			  if(tempValue!=solnTmpValFract[document.getElementById("mixture").selectedIndex][1]){
					document.getElementById("inferenceDiv").style.visibility="visible";

			  }
			}
		}else{
			$("#vapoursDiv,#vapoursSideDiv").fadeOut("slow");
			$('#dropImg').css({display:'none'});
			 if(document.getElementById("mixture").selectedIndex==0){
				 inferenceMsg=infMsgArray[2];
			 }else if(document.getElementById("mixture").selectedIndex==1){
				 inferenceMsg=infMsgArray[5];
			 }else{
				 inferenceMsg=infMsgArray[6];
			 }
			document.getElementById("inferenceDiv").style.visibility="visible";
			
		}
	}
}


///function for dragging the ice tray...
function dragIcebox(){
	var y1=240//350//240;
	var y2=290//430//290;
   
	$("#icebox").draggable({
				axis: "y",
				drag: function(event,ui){ 
					
				},
				containment: [435, y1, 435, y2],//"#canvasBox",
				stop: function() {
					if(flaskLabel==2){
						if($("#icebox").position().top<=170){
							$('#vapoursSideFractDiv').css({width:'13px',top:'90px',opacity:'0.1'});
							$('#vapoursFractDiv').css({height:'10px',top:'255px'});
							$('#dist_flask1').css({	'z-index':'2'});
						}
					}else if($("#icebox").position().top>=220){
						$('#icebox').draggable({disabled:true});  
						 enableFlaskDrag();
					}else{
						$("#icebox").css({top:'170px'})                       
					}
				}
		  });
	
}



///Fn for dragging the flaskk...

function enableFlaskDrag(){
	
	$("#dist_flask1").draggable({
		 
		drag: function(event,ui){ 
			
			var Top=$('#dist_flask1').position().top;
			var Left=$('#dist_flask1').position().left;
			
			document.getElementById("outlayer_Water").style.left=Left+'px';
			document.getElementById("outlayer_Water").style.top=(Top+25)+'px';
				
			$("#clipup").css({ WebkitTransform: 'rotate(-10deg)'});
			$("#clipup").css({'-moz-transform': 'rotate(-10deg)'});
			$("#clipup").css({'-o-transform':'rotate(-10deg)'});
			$("#clipup").css({'transform':'rotate(-10deg)'});
			$('#dist_flask1').css({	'z-index':'2'});
			
			},
			containment: "#canvasBox",
			stop: function() {
				if($('#dist_flask1').position().left>=428&&$('#dist_flask1').position().left<=438&&$('#dist_flask1').position().top>=250&&$('#dist_flask1').position().top<=285){
					$('#dist_flask1').css({top:'280px',left:'434px'});
					$('#outlayer_Water').css({top:'306px',left:'434px'});
					interval=setInterval("tempDecreasing()",800);
					$('#flsk2Div').draggable({disabled:false});
					enable2ndFlaskDrag();
				}
				else{
					$('#dist_flask1').css({top:'142px',left:'447px'});
					$('#outlayer_Water').css({top:'165px',left:'447px'});
					$("#clipup").css({ WebkitTransform: 'rotate(0deg)'});
					$("#clipup").css({'-moz-transform': 'rotate(0deg)'});
					$("#clipup").css({'-o-transform':'rotate(0deg)'});
					$("#clipup").css({'transform':'rotate(0deg)'});
					$('#dist_flask1').css({	'z-index':'5'});
				}
			}
			
	});
	
	
	
}
///for placing the second flask....

function enable2ndFlaskDrag(){
	
	
	
	$("#flsk2Div").draggable({
		drag: function(event,ui){ 
		var Top=document.getElementById("flsk2Div").style.top;
		var Left=document.getElementById("flsk2Div").style.left;
		
		document.getElementById("dist_flask2").style.left=Left;
		document.getElementById("dist_flask2").style.top=Top;
		
		
		},
		containment: "#canvasBox",
		stop: function() {
			if($('#flsk2Div').position().left>=435&&$('#flsk2Div').position().left<=450&&$('#flsk2Div').position().top>=130&&$('#flsk2Div').position().top<=170){
				$('#dist_flask2').css({top:'142px',left:'447px'});
				flaskLabel=2;
				$('#icebox').draggable({disabled:false});  
				document.getElementById('start').disabled=false;
				dragIcebox();
				placeFlask();
				$("#flsk2Div").draggable('disable');
			}else{
				$('#dist_flask2,#flsk2Div').css({top:'280px',left:'490px'});
			}
		}
	});
	
	
}

///placing second flask....
function placeFlask(){
 
	$('#circleRightFlaskFract').css({height:'2px',top:'172px'}); 
	$('#vapoursFractDiv').css({height:'10px',top:'255px'});
	$('#whiteFractDiv').css({top:'-165px'}); 
	$('#vapoursSideFractDiv').css({width:'13px',top:'90px',opacity:'0.1'});
	$("#bubbles_fract").css({height:'2px',top:'273px'});
	
}

////decreasing temp...

function tempDecreasing(){
	
	if(tempValue>30){
		tempValue--;
		i-=5;
		imgTop=i+"px";
	    document.getElementById("imgZoom2").style.top=imgTop;
	}else{
		clearInterval(interval);
	}
}


////centrifugation......

function centrifugOpenFN(){
	
	if(openFlag==true &&correctFlag>1){
		
		openFlag=false;
		$('#tubeA,#tubeB').draggable({disabled:true});

	}
	if(correctFlag<1){
		$('#tubeA,#tubeB').draggable({disabled:false});
	}
	
	
	if(openFlag==false){
		
		if(correctFlag!=1){
			$('#closed_top').hide();
			$('#door1').show(); 
			openFlag=true;
			openinterval = setInterval(doorOpenStages, 200);//fn call for openingg....	
		}
	}else{
		 if(correctFlag==0&&(waterFlag!=0||milkFlag!=0)){
			 $('#toolTip').css({display:'block',left:'390px',top:'205px'});
			 $('#tipTxt').html(textArray[17]);
		 }else{
			 openFlag=false;
			 $('#doorClick').css({top:'215px'});
			 openinterval = setInterval(doorOpenStages, 200);//closingg 
		 }
	}
	
}


function doorOpenStages(){
	
	if(openFlag==true){//openingg
		if($('#door1').css('display') == "block"){          
			 $('#door1').hide();
			 $('#door2').show();
			 $('#doorClick').css({top:'0px'});
			 enabletubeDragFN();
		}
	}else{///closingg
		if($('#door2').css('display') == "block"){          
			 $('#door2').hide();
			 $('#door1').show();
		}else if($('#door1').css('display') == "block"){          
		 	 $('#door1').hide();
		  	 $('#closed_top').show(); 
		}
	}
		
		
}


/// Fn for dragging  the tubes
function enabletubeDragFN(){
	document.getElementById("theinput").disabled=true;
	
	$("#tubeA").draggable({
		drag: function(event,ui){ 
		$('#toolTip,#popup,#popup2').css({display:'none'});
		document.getElementById('mixture').disabled=true;
			if(waterFlag>0){
			document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeA.png');
		}
		},
		stop: function() {
		if(openFlag==true){
			
			if(($("#tubeA").position().top>20)&&($("#tubeA").position().top<40)&&(($("#tubeA").position().left>230)&&($("#tubeA").position().left<240))){
				if(milkFlag!=1){
					waterFlag=1;
					adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn1.png');
					positionCheck('#tubeA');
				}
				else{
					 backtoTubeAPos();
				}
			}
			else if(($("#tubeA").position().top<0)&&($("#tubeA").position().top>-10)&&(($("#tubeA").position().left>245)&&($("#tubeA").position().left<255))){
				 if(milkFlag!=2){
					 waterFlag=2;
					 adjustPos_tubeA();
					 document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn2.png');
					 positionCheck('#tubeA');
				 }
					else{
					    backtoTubeAPos();
				}
			}
			else if(($("#tubeA").position().top<-10)&&($("#tubeA").position().top>-25)&&(($("#tubeA").position().left>280)&&($("#tubeA").position().left<290))){
				if(milkFlag!=3){
					waterFlag=3;
					adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn3.png');
					positionCheck('#tubeA');
				 }
			else{
				 backtoTubeAPos();
			}	
			}
			else if(($("#tubeA").position().top<0)&&($("#tubeA").position().top>-10)&&(($("#tubeA").position().left>315)&&($("#tubeA").position().left<325))){
				 if(milkFlag!=4){
					 waterFlag=4;
					 adjustPos_tubeA();
					 document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn4.png');
				     positionCheck('#tubeA');
				 }else{
					 backtoTubeAPos();
				}	
			}
			else if(($("#tubeA").position().top>20)&&($("#tubeA").position().top<40)&&(($("#tubeA").position().left>330)&&($("#tubeA").position().left<340))){
				 if(milkFlag!=5){
					waterFlag=5;
					adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn5.png');
					positionCheck('#tubeA');
				 }
				else{
					 backtoTubeAPos();
				}
			}
			else if(($("#tubeA").position().top>60)&&($("#tubeA").position().top<70)&&(($("#tubeA").position().left>316)&&($("#tubeA").position().left<325))){
				 if(milkFlag!=6){
					waterFlag=6;
                    adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn6.png');
					positionCheck('#tubeA');
				 }
					else{
					    backtoTubeAPos();
				}
			}
			else if(($("#tubeA").position().top>70)&&($("#tubeA").position().top<90)&&(($("#tubeA").position().left>280)&&($("#tubeA").position().left<290))){
				 if(milkFlag!=7){
					waterFlag=7;
					adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn7.png');
					positionCheck('#tubeA');
				 }else{
					 backtoTubeAPos();
				}
			}
			else if(($("#tubeA").position().top>50)&&($("#tubeA").position().top<75)&&(($("#tubeA").position().left>240)&&($("#tubeA").position().left<260))){
				 if(milkFlag!=8){
					waterFlag=8;
					adjustPos_tubeA();
					document.getElementById("tubeA").setAttribute('src', simPath+'images/tubeIn8.png');
					positionCheck('#tubeA');
				 }else{
					 backtoTubeAPos();
				 }
			}else{
				 backtoTubeAPos();/// back to its initial position....
			}
		}else{
			 backtoTubeAPos();/// back to its initial position....
		 }
		}
	});
	
	$("#tubeB").draggable({
		drag: function(event,ui){ 
			$('#toolTip,#popup,#popup2').css({display:'none'});
			document.getElementById('mixture').disabled=true;
			if(milkFlag>0){
				if(document.getElementById("mixture").selectedIndex==0){
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeB.png');
				}else if(document.getElementById("mixture").selectedIndex==1){
					document.getElementById("tubeB").setAttribute('src', simPath+'images/TubeFerric.png');///to change
				}else{
					document.getElementById("tubeB").setAttribute('src', simPath+'images/Tube_muddy.png');////to change
				}
			}
		},
		stop: function() {
			
		  if(openFlag==true){
			if(($("#tubeB").position().top>20)&&($("#tubeB").position().top<40)&&(($("#tubeB").position().left>230)&&($("#tubeB").position().left<240))){
				if(waterFlag!=1){
					milkFlag=1;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn1.png');
					positionCheck('#tubeB');
				}else{
					backToOrgin();
				}
			}
			else if(($("#tubeB").position().top<0)&&($("#tubeB").position().top>-10)&&(($("#tubeB").position().left>245)&&($("#tubeB").position().left<255))){
				if(waterFlag!=2){
					milkFlag=2;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn2.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}
				}
				
			else if(($("#tubeB").position().top<-10)&&($("#tubeB").position().top>-25)&&(($("#tubeB").position().left>280)&&($("#tubeB").position().left<290))){
				if(waterFlag!=3){
					milkFlag=3;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn3.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}
				
			}else if(($("#tubeB").position().top<0)&&($("#tubeB").position().top>-10)&&(($("#tubeB").position().left>315)&&($("#tubeB").position().left<325))){
				if(waterFlag!=4){
					milkFlag=4;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn4.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}	
			}else if(($("#tubeB").position().top>20)&&($("#tubeB").position().top<40)&&(($("#tubeB").position().left>330)&&($("#tubeB").position().left<340))){
				if(waterFlag!=5){
					milkFlag=5;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn5.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}	
			}else if(($("#tubeB").position().top>50)&&($("#tubeB").position().top<70)&&(($("#tubeB").position().left>315)&&($("#tubeB").position().left<325))){
				if(waterFlag!=6){
					milkFlag=6;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn6.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}	
			}else if(($("#tubeB").position().top>70)&&($("#tubeB").position().top<90)&&(($("#tubeB").position().left>280)&&($("#tubeB").position().left<290))){
				if(waterFlag!=7){
					milkFlag=7;
                    adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn7.png');
					positionCheck('#tubeB');
				}else{
						backToOrgin();
					}	
			}else if(($("#tubeB").position().top>45)&&($("#tubeB").position().top<70)&&(($("#tubeB").position().left>240)&&($("#tubeB").position().left<250))){
			
				if(waterFlag!=8){
					milkFlag=8;
					adjustPos_tubeB();
					document.getElementById("tubeB").setAttribute('src', simPath+'images/tubeIn8.png');
					positionCheck('#tubeB');
				}else{
					backToOrgin();
				}
			}else{
				milkFlag=0;
				backToOrgin();/// back to its initial position....
			}
		}else{
				
				backToOrgin();/// back to its initial position....
			}
		}
		
	});
}

function backToOrgin(){/// back to tubeB's initial position....
	    milkFlag=count=0;
		correctFlag=0;
		document.getElementById("tubeB").style.left="50px";
		document.getElementById("tubeB").style.top="190px";
}

function backtoTubeAPos(){/// back to its initial position....
		waterFlag=count=0;
		correctFlag=0;
		document.getElementById("tubeA").style.left="50px";
		document.getElementById("tubeA").style.top="50px";	
}


function positionCheck(ID){
	
		if(milkFlag==1&&waterFlag==5){
			correctFlag=1;
		}
		else if(milkFlag==2&&waterFlag==6){
			correctFlag=1;
		}
		else if(milkFlag==3&&waterFlag==7){
			correctFlag=1;	
		}
		else if(milkFlag==4&&waterFlag==8){
			correctFlag=1;
		}
		else if(milkFlag==5&&waterFlag==1){
			correctFlag=1;	
		}
		else if(milkFlag==6&&waterFlag==2){
			correctFlag=1;	
		}
		else if(milkFlag==7&&waterFlag==3){
			correctFlag=1;	
		}
		else if(milkFlag==8&&waterFlag==4){
			correctFlag=1;	
		}
		else{
			correctFlag=0;
		}
		
}

function adjustPos_tubeA(){  // to adjust the position of tubeA...
	if(waterFlag==1){
		$("#tubeA").css({left:'236px',top:'123px'});
	}else if(waterFlag==2){
		$("#tubeA").css({left:'249px',top:'88px'});
	}else if(waterFlag==3){
		$("#tubeA").css({left:'286px',top:'73px'});
	}else if(waterFlag==4){
		$("#tubeA").css({left:'319px',top:'88px'});
	}else if(waterFlag==5){
		$("#tubeA").css({left:'333px',top:'123px'});
	}else if(waterFlag==6){
		$("#tubeA").css({left:'317px',top:'155px'});
	}else if(waterFlag==7){
		$("#tubeA").css({left:'286px',top:'168px'});
	}else if(waterFlag==8){
		$("#tubeA").css({left:'252px',top:'155px'});
	}
}

function adjustPos_tubeB(){  // to adjust the position of tubeB...
	if(milkFlag==1){
		$("#tubeB").css({left:'236px',top:'123px'});
	}else if(milkFlag==2){
		$("#tubeB").css({left:'249px',top:'88px'});
	}else if(milkFlag==3){
		$("#tubeB").css({left:'286px',top:'73px'});
	}else if(milkFlag==4){
		$("#tubeB").css({left:'319px',top:'88px'});
	}else if(milkFlag==5){
		$("#tubeB").css({left:'333px',top:'123px'});
	}else if(milkFlag==6){
		$("#tubeB").css({left:'317px',top:'155px'});
	}else if(milkFlag==7){
		$("#tubeB").css({left:'286px',top:'168px'});
	}else if(milkFlag==8){
		$("#tubeB").css({left:'252px',top:'155px'});
	}
}



////start centrifugation 

function start_centrifugFN(){
	if(openFlag==false&&(correctFlag==1)){
		$('#needle,#clockBody').css({ display:'block',})
		$('#needle').css({top:'40px',left:'68px'});
		$('#clockBody').css({top:'20px',left:'20px'});
		rotationCount=2;
		rotateEvt=setInterval(rotateFunction,5);
		clockinterval=setInterval("clockRotation()",10);
		moveit();
		$('#tubeA,#tubeB').draggable('disable');
		openFlag=true;
		document.getElementById("reset").disabled=true;
		
	}
}

///rotating the plate inside the machine...

function rotateFunction(){
	rotateCount+=5;
	$('#center_rotate').rotate(rotateCount);
}

///rotating tubes....
var p = 0;
function moveit() {
    p +=0.1;
    var r = 50;
    var xcenter = 286;
    var ycenter = 125;
	var newLeft = Math.floor(xcenter + (r* Math.cos(p)));
    var newTop = Math.floor(ycenter + (r * Math.sin(p)));
    var newLeft1 = Math.floor(xcenter + -(r* Math.cos(p)));
    var newTop1 = Math.floor(ycenter + -(r * Math.sin(p)));
    $('#tubeA').animate({
            top: newTop,
            left: newLeft,
        }, 10, function() {
			if(rotationCount>0){
			      moveit();
			}
       });
    $('#tubeB').animate({
        top: newTop1,
        left: newLeft1,
    },10, function() {
		if(rotationCount>0){
       		 moveit();
		}
    });
 }
 
 
// adjust the tube position after rotation.....
function adjustTubePos(){  
	if(milkFlag==1){
		$("#tubeA").css({left:'330px',top:'140px'});
		$("#tubeB").css({left:'240px',top:'105px'});
	}else if(milkFlag==2){
		$("#tubeA").css({left:'304px',top:'165px'});
		$("#tubeB").css({left:'266px',top:'78px'});
	}else if(milkFlag==3){
		$("#tubeA").css({left:'269px',top:'165px'});
		$("#tubeB").css({left:'303px',top:'76px'});
	}else if(milkFlag==4){
		$("#tubeA").css({left:'242px',top:'141px'});
		$("#tubeB").css({left:'330px',top:'100px'});
	}else if(milkFlag==5){
		$("#tubeA").css({left:'239px',top:'105px'});
		$("#tubeB").css({left:'330px',top:'138px'});
	}else if(milkFlag==6){
		$("#tubeA").css({left:'265px',top:'79px'});
		$("#tubeB").css({left:'302px',top:'165px'});
	}else if(milkFlag==7){
		$("#tubeA").css({left:'302px',top:'75px'});
		$("#tubeB").css({left:'268px',top:'166px'});
	}else if(milkFlag==8){
		$("#tubeA").css({left:'328px',top:'102px'});
		$("#tubeB").css({left:'243px',top:'140px'});
	}
}

////zoomed view of the tube
function tubeB_zoom(){
	
	hideAll();
	$('#zoomedImg').css({display:'block'});
	if(document.getElementById("mixture").selectedIndex==0){
		document.getElementById("zoomedImg").setAttribute('src', simPath+'images/Tube_zoomed.png');
		$('#popupTxt2').css({top:'-6px'});
		$('#popupTxt1').html(labelArray[4]);
		$('#popupTxt2').html(labelArray[5]);
		$('#popupTxt1').css({top:'0px'});
	}else if(document.getElementById("mixture").selectedIndex==1){
	
		document.getElementById("zoomedImg").setAttribute('src', simPath+'images/TubeZoomed_ferri.png');
		$('#popupTxt1').html(labelArray[6]);
		$('#popupTxt2').html(labelArray[7]);
		$('#popupTxt2,#popupTxt1').css({top:'-6px'});
	}else{
		
		document.getElementById("zoomedImg").setAttribute('src', simPath+'images/TubeZoomed_muddy.png');
		$('#popupTxt1').html(labelArray[2]);
		$('#popupTxt2').html(labelArray[8]);
		$('#popupTxt2,#popupTxt1').css({top:'0px'});
		
	}
	$('#tube_zoomDiv1,#tube_zoomDiv2').css({display:'block'});
	document.getElementById("inferenceDiv").style.visibility="visible";
	inferenceMsg=infMsgArray[3];
	
}

//reset.....
function resetFN(){
	picktube=0;
	propertyChange();
	document.getElementById("mixture").selectedIndex=0;
}

///showing tooltip for all the equipments.... 
function showmsg_FN(){
  if(document.getElementById("showmsg").checked==true){
	if(propertyFlag==2){
			$('#popup2').css({display:'block',left:($("#tubeB").position().left+20)+'px',top:($("#tubeB").position().top-20)+'px'});
			$('#popup').css({display:'block',left:($("#tubeA").position().left+20)+'px',top:($("#tubeA").position().top-20)+'px'});
			$('#popupTxt').html(labelArray[2]);
			$('#popupTxtmilk').html(labelArray[3]);
			$('#toolTip').css({display:'block',top:'250px',left:'380px'});
			$('#tipTxt').html(textArray[19]);
	}
  else if(propertyFlag==3){
   }
  }else{
	  $('#toolTip,#popup2,#popup').css({display:'none'});
  }
}


//////separating funnel....
var stage1;
var stage;
function enableBeakerDrag(){
	
	$("#bottle3").draggable({
		
			drag: function(event,ui){ 
			    $('#bottle3Shadow').css({ display:'none',}); 
			},
			containment: "#canvasBox",
			stop: function() {
				
			  if(($("#bottle3").position().top>-10)&&($("#bottle3").position().top<60)&&(($("#bottle3").position().left>210)&&($("#bottle3").position().left<320))){
				     
					 document.getElementById('bottle3').style.display='none';
					 $('#stirrer').css({ display:'block',});
					 $("#bottle3").draggable('disable');
					 document.getElementById("mixture").disabled=document.getElementById("theinput").disabled=true;
					 document.getElementById("pouring_objectDiv").innerHTML=" ";
					 if(document.getElementById("mixture").selectedIndex==0){
					      stage1 = new swiffy.Stage(document.getElementById('pouring_objectDiv'),pouring_object);
						  document.getElementById("soln_inFunnel").setAttribute('src', simPath+'images/soln_inFunnel.png');
						  document.getElementById("glass_tube2").setAttribute('src', simPath+'images/glass_tube2.png');
					 }else{
						 stage1 = new swiffy.Stage(document.getElementById('pouring_objectDiv'),beakerPour_KerosceneObject);///change to keroscene
						 document.getElementById("soln_inFunnel").setAttribute('src', simPath+'images/solnwht_inFunnel.png');///change to keroscene
						 document.getElementById("glass_tube2").setAttribute('src', simPath+'images/glassKerosene_still.png');///change to keroscene
					 }
	                 stage1.start();
					 timeoutEvt=setTimeout(function(){
					 document.getElementById('stirrer').style.display='none';
					 timeoutEvt=setTimeout(function(){ 
								  $('#soln_inFunnel').css({display:'block'});
						          document.getElementById("pouring_objectDiv").innerHTML=" ";
								  document.getElementById("bottle3").setAttribute('src', simPath+'images/beaker.png');
		  						  $('#bottle3').css({left:'212px',top:'250px',display:'block'});
	                              $("#funnel").bind("click",funnelClick());  ///enable funnel click event after the animation
						 },5500);
					 },4550);
				}
				else{
					document.getElementById('bottle3').style.top='250px';
					document.getElementById('bottle3').style.left='210px';
					$('#bottle3Shadow').css({ display:'block',}); 
				}
			}
	});
}


///funnel removingg...
var funnelTop=45;
var funnelLeft=348;
var lidLeft=555;

function funnelClick(){
	
	$("#funnel").click(function() {
		interval=setInterval("timer_Funnel()",30);
	});
}


/// replaccing funnel with cork....


function timer_Funnel(){
	if(funnelTop==30){
		funnelLeft-=5;
		if(funnelLeft<=-20){
	      clearInterval(interval);
		  interval=setInterval("timer_Lid()",30);
		  document.getElementById("lidDiv").style.display="block";
		  document.getElementById("funnel").style.display="none";
		  
	   }
	}else{
		funnelTop-=	5;	
	}
	document.getElementById("funnel").style.top=funnelTop+"px";
	document.getElementById("funnel").style.left=funnelLeft+"px";
}


function timer_Lid(){
	  if(lidLeft<=363){
		  funnelTop=60;
		  clearInterval(interval);
		  $('#glass_tube2').css({display:'block'});
		  $('#soln_inFunnel').css({display:'none'});
		  $('#glass_tube,#lidDiv,#tap_close,#pouring_objectDiv').css({display:'none'});
		  $("#glass_tube2").draggable({disabled:false});
		  $("#glass_tube2").draggable({
			  drag: function(event,ui){ 
			},
			containment: "#canvasBox",
			stop: function() {
				
				if(($("#glass_tube2").position().top>0)&&($("#glass_tube2").position().top<100)&&(($("#glass_tube2").position().left>0)&&($("#glass_tube2").position().left<250))){
					$('#glass_tube2').css({left:'170px',top:'50px'});
					if(document.getElementById("mixture").selectedIndex==0){
						document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake1.png');
					}else{
						document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake_1.png');
					}
					interval=setInterval("timer_TubeShake()",200);
					$("#glass_tube2").draggable({disabled:true});
				}else{
					 $('#glass_tube2').css({left:'346px',top:'58px'});
				}
				
			}
			  
		  });
			  }else{
		  lidLeft-=3;
	  }
	   document.getElementById("lidDiv").style.left=lidLeft+"px";
	   document.getElementById("lidDiv").style.top=funnelTop+"px";
	
}


function timer_TubeShake(){
	
		if(posFlag==0){
			if(rotNum<=3){
				rotNum++;
			}else{
				clearInterval(interval);
				enablefunnelClick();
			}
		}else if(posFlag==1){
			if(rotNum<=7){
				rotNum++;
			}else{
				posFlag=2;
				rotNum--;
			}
		}else{
			rotNum--;
			if(rotNum<=4){
				
			clearInterval(interval);
			if(posFlag==2){
				rotNum=0;
			}
			if(document.getElementById("mixture").selectedIndex==0){
				$('#tap_close').css({display:'block',left:'276px',top:'74px','-moz-transform':'rotate(-104deg)',
				 '-webkit-transform':'rotate(-104deg)',
				 '-o-transform':'rotate(-104deg)',
				 '-ms-transform':'rotate(-104deg)',});
			}else{
				$('#tap_close').css({display:'block',left:'283px',top:'74px','-moz-transform':'rotate(-91deg)',
				 '-webkit-transform':'rotate(-91deg)',
				 '-o-transform':'rotate(-91deg)',
				 '-ms-transform':'rotate(-91deg)',});
			}
			 $('#tap_close').click(function(){ ////
			 	tapRotFlag=1;
			 	if(tapRotFlag==1){
					tapRotFlag=2;
					
					document.getElementById("tap_close").setAttribute('src', simPath+'images/tapOpen.png');
					if(tapRotFlag==2){
						tapRotFlag=3;
						document.getElementById("tap_close").setAttribute('src', simPath+'images/tap_close.png');
						if(tapRotFlag==3){
							document.getElementById("tap_close").setAttribute('src', simPath+'images/tapOpen.png');
							if(posFlag==2){
								if(document.getElementById("mixture").selectedIndex==0){
									$('#tap_close').animate({top:'67px',left:'280px'});
								}
								else{ 
									$('#tap_close').animate({top:'67px',left:'289px'});
									
								}
								 timeoutEvt=setTimeout(function(){
									 if(document.getElementById("mixture").selectedIndex==0){
										  $('#tap_close').animate({top:'74px',left:'276px'})
									 }else{
										  $('#tap_close').animate({top:'74px',left:'283px'});
									 }
									 
									 $('#funnel_objectDiv').animate({top:'85px',left:'160px'}); 
									 document.getElementById("funnel_objectDiv").style.display='block';
								     document.getElementById("tap_close").setAttribute('src', simPath+'images/tap_close.png');
								     enableGlassTubeDrag();/// enabling the drag property of the funnel....
								     posFlag=0;
								},1000);
							}else if(posFlag==3){
								$('#tap_close').animate({top:'182px',left:'380px'});
								$('#waterFlow').css({'background-color':'#CCC'});
								$('#waterFlow').animate({height:'100px'});
								document.getElementById("waterpouring_objectDiv").innerHTML="";
								document.getElementById("waterFlow").style.display=document.getElementById("waterpouring_objectDiv").style.display='block';
								if(document.getElementById("mixture").selectedIndex==0){
									 stage = new swiffy.Stage(document.getElementById('waterpouring_objectDiv'),waterpouring_object);
								}else{
									 stage = new swiffy.Stage(document.getElementById('waterpouring_objectDiv'),kWater_pourobject);//to keroscene oil...
								}
	                            stage.start();
								$('#disableEvntDiv').css({display:'block'});
								timeoutEvt=setTimeout(function(){
									document.getElementById("waterpouring_objectDiv").innerHTML="";
									if(document.getElementById("mixture").selectedIndex==0){
										 document.getElementById("oilSepStill").setAttribute('src', simPath+'images/oilSepStill.png');
									}else{
										document.getElementById("oilSepStill").setAttribute('src', simPath+'images/oilSepStill_k.png');
									}
									$("#oilSepStill").css({display:'block' });
									$('#toolTip').css({display:'block',left:'390px',top:'205px'});
									$('#tipTxt').html(textArray[20]);
									posFlag=5;
									playnextAnim();
								},450);
								posFlag=4;
								document.getElementById("soln_inFunnel").style.display='none';
								$("#BeakerSoln").css({display:'block' });
								$("#BeakerSoln").delay(400).animate({height:'12px',top:'-14px',opacity:'0.6'});
	                            $("#BeakerSolnimg").animate({top:'-50px'});
							}else if(posFlag==5){
								posFlag=6;
								$('#tap_close').animate({top:'176px',left:'373px'});
								$('#waterFlow').animate({height:'0px'});
								$('#toolTip').css({display:'none'});
								$('#disableEvntDiv').css({display:'none'});
							}else if(posFlag==8){
								posFlag=9;
								$('#tap_close').animate({top:'182px',left:'380px'});
								$("#waterpouring_objectDiv").css({display:'none' });
								if(document.getElementById("mixture").selectedIndex==0){
									 stage = new swiffy.Stage(document.getElementById('oilpouring_objectDiv'),oilpouring_object);
									 $('#waterFlow').css({'background-color':'#FC3'});
									 document.getElementById("BeakerSolnimg1").setAttribute('src', simPath+'images/soln_oil.png');
								}else{
									stage = new swiffy.Stage(document.getElementById('oilpouring_objectDiv'),kOil_pourobject); ///to keroscene oil......
									$('#waterFlow').css({'background-color':'#CCC'}); ////to keroscene...
									document.getElementById("BeakerSolnimg1").setAttribute('src', simPath+'images/soln_water.png');//to change...
								}
								document.getElementById("waterFlow").style.display=document.getElementById("oilpouring_objectDiv").style.display='block';
	                            stage.start();
								$("#oilSepStill").css({display:'none' });
								$('#disableEvntDiv').css({display:'block'});
								setTimeout(function(){
									document.getElementById("oilpouring_objectDiv").innerHTML="";},550);
							    $("#BeakerSoln1").css({display:'block' });
							    $("#BeakerSoln1").delay(100).animate({height:'12px',top:'-14px',opacity:'0.6'});
							    $("#BeakerSolnimg1").animate({top:'-50px'});
							    $('#waterFlow').css({'background-color':'#FC3'});
							    $('#waterFlow').animate({height:'100px'});
								setTimeout(function(){$('#waterFlow').css({display:'none'});$('#disableEvntDiv').css({display:'none'});},1000);
								     $('#tap_close').unbind("click");
								  
							}else if(posFlag==7){
								stage1.destroy();
								resetFN();
							    $('#glass_tube2').draggable('enable');
								$('#disableEvntDiv').css({display:'none'});
							}
						}
					}
				}
			});
		}
	}
	if(document.getElementById("mixture").selectedIndex==0){
	  document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake'+rotNum+'.png');
	}else{
	  document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake_'+rotNum+'.png');///to keroscene
	}
	  $('#glass_tube2').css({top:'70px'});
}

////enabling dragging functionality...
function enableGlassTubeDrag(){
	
	 $("#funnel_objectDiv").draggable({
		 
		  drag: function(event,ui){ 
	
			 $('#tap_close').css({ display:'none'});
			 if(document.getElementById("mixture").selectedIndex==0){
		  	      document.getElementById("glass_tube2").setAttribute('src', simPath+'images/glass_tube2.png');
			 }else{
				  document.getElementById("glass_tube2").setAttribute('src', simPath+'images/glassKerosene_still.png');/// to change...
			 }
			 document.getElementById("glass_tube2").style.top=($("#funnel_objectDiv").position().top)+'px';
			 document.getElementById("glass_tube2").style.left=($("#funnel_objectDiv").position().left+20)+'px';
		  },
			containment: "#canvasBox",
			stop: function() {
			
				if(($("#funnel_objectDiv").position().top>0)&&($("#funnel_objectDiv").position().top<100)&&(($("#funnel_objectDiv").position().left>300)&&($("#funnel_objectDiv").position().left<370))){
					  $('#soln_inFunnel').css({left:'345px',top:'128px',display:'block'});
					  $('#funnel_objectDiv,#glass_tube2').css({display:'none'});
					  $('#lidDiv,#glass_tube').css({ display:'block'});
					  $('#tap_close').css({display:'block',left:'373px',top:'176px','-moz-transform':'rotate(0deg)',
						 '-webkit-transform':'rotate(0deg)',
						 '-o-transform':'rotate(0deg)',
						 '-ms-transform':'rotate(0deg)',});
					  enablebottle2Drag();
					  $('#bottle2').draggable("enable");
				}else{
					 $('#soln_inFunnel').css({display:'none'});
					  $('#glass_tube2').css({left:'250px',top:'50px'});
					  $('#funnel_objectDiv').css({left:'230px',top:'70px'});
					  if(document.getElementById("mixture").selectedIndex==0){
					     document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake1.png');
					  }else{
						 document.getElementById("glass_tube2").setAttribute('src', simPath+'images/shake_1.png');///to keroscene...
					  }
				}
			}
		 });
}

///adding drag property to the bottle2 to collect the oil.....

function enablebottle2Drag(){
	
	 $("#bottle2").draggable({
		  drag: function(event,ui){ 
		    $("#bottle2Shadow").css({display:'none'});
			
		  },
		  containment: "#canvasBox",
			stop: function() {
				if(posFlag<3){
					if(($("#bottle2").position().top>150)&&($("#bottle2").position().top<320)&&(($("#bottle2").position().left>250)&&($("#bottle2").position().left<370))){
						 $('#bottle2').css({left:'342px',top:'235px'});
						 posFlag=3;
						 tapRotFlag=1;
						 $('#tap_close').css({display:'block',left:'373px',top:'176px','-moz-transform':'rotate(360deg)','-webkit-transform':'rotate(360deg)','-o-transform':'rotate(360deg)','-ms-transform':'rotate(360deg)'});
					}else{
						$('#bottle2').css({left:'130px',top:'250px'});
						$('#bottle2Shadow').css({display:'block'});
					}
				}else{
					if(($("#bottle2").position().top>120)&&($("#bottle2").position().top<260)&&(($("#bottle2").position().left>100)&&($("#bottle2").position().left<155))){
						//alert(posFlag+"hellooo");
						if(posFlag==6){
						 $('#bottle2').css({left:'130px',top:'250px'});
						 $('#bottle2').draggable("disable");
						 $("#bottle1").draggable({disabled:false});
						 enablebottle1Drag();
						}
					}else{
						$('#bottle2').css({left:'342px',top:'235px'});
					}
				}
			}
	  });
		  
	
}
////event to click the funnel for shaking
function enablefunnelClick(){
	
	$('#glass_tube2').click(function(){
		posFlag=1; 
		interval=setInterval("timer_TubeShake()",200);
		$('#glass_tube2').unbind('click');
	});
}

///playing next animation: oil separation

function playnextAnim(){
	timeoutEvt=setTimeout(function(){
	if((posFlag>0)&&(posFlag!=6)){
			 posFlag=7;
			 $('#toolTip').css({display:'block',left:'390px',top:'205px'});
	         $('#tipTxt').html(textArray[18]);
		}
	},3000);
}


///drag event for bottle1....


function enablebottle1Drag(){
	
	
	 $("#bottle1").draggable({
		 
		  drag: function(event,ui){ 
		   
		    $("#bottle1Shadow").css({display:'none'});
				  
		  },
		  containment: "#canvasBox",
			stop: function() {
			 if(posFlag<8){
				if(($("#bottle1").position().top>150)&&($("#bottle1").position().top<320)&&(($("#bottle1").position().left>250)&&($("#bottle1").position().left<370))){
			         $('#bottle1').css({left:'342px',top:'235px'});
					 posFlag=8;
					 tapRotFlag=1;
					 $('#tap_close').css({display:'block',left:'373px',top:'176px','-moz-transform':'rotate(360deg)','-webkit-transform':'rotate(360deg)',
					 '-o-transform':'rotate(360deg)','-ms-transform':'rotate(360deg)'});
				}else{
					$('#bottle1').css({left:'50px',top:'250px'});
					$('#bottle1Shadow').css({display:'block'});
				}
			 }else{
				if(($("#bottle2").position().top>120)&&($("#bottle2").position().top<260)&&(($("#bottle2").position().left>100)&&($("#bottle2").position().left<145))){
			         $('#bottle1').css({left:'50px',top:'250px'});
					 $('#bottle1Shadow').css({display:'block'});
					 if(posFlag==9){
					 $('#bottle1').draggable("disable");
					 if(document.getElementById("mixture").selectedIndex==0){
					 	inferenceMsg=infMsgArray[4];
					 }else{
						inferenceMsg=infMsgArray[9];
					 }
					 document.getElementById("inferenceDiv").style.visibility="visible";
					 }
				}else{
					 $('#bottle1').css({left:'342px',top:'235px'});
				}
			}
		  }
	  });
	
}

