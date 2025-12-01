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
var solvntDist=[5,5];
var bInkDist=4.9;
var rInkDist=4.4;
var pigmntDistnce=[1.1,2.3,4.5,4.7]//[3.3,3.1,1.6,0.8];
var flaskTop=0;
var rotateCount=0;
var rotateEvt;

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
var solventOpt;
var labelArray;
/// labels for components in the control.....
var textArray;
var solnOptions1;
var infMsgArray;
var helpMsgArray;
var timeoutEvt;


window.onload = function init(){
	
	document.getElementById("expName").innerHTML=gt.gettext("Paper Chromatography");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$("#timeText").html(gt.gettext("30 minutes"));
	textArray=[gt.gettext("Select the solvent:"),gt.gettext("Select the mixture:"),gt.gettext("Show scale"),gt.gettext("Result"),
	gt.gettext("Distance travelled by the solvent"),gt.gettext("Distance travelled by blue ink"),gt.gettext("Distance travelled by red ink "),
	gt.gettext("Rf value of blue ink"),gt.gettext("Rf value of red ink"),gt.gettext(" Distance travelled by Chlorophyll b (dark green)  "),
	gt.gettext("Distance travelled by Chlorophyll a (light green)  "),gt.gettext("Distance travelled by Xanthophyll (yellow) "),
	gt.gettext("Distance travelled by Carotene (orange) "),gt.gettext("Rf value of Chlorophyll b "),gt.gettext("Rf value of Chlorophyll a"),
	gt.gettext("Rf value of Xanthophyll "),gt.gettext("Rf value of Carotene")];
	solventOpt=[gt.gettext("Isopropyl alcohol + water")];
	solnOptions1=[gt.gettext("Red ink + Blue ink"),gt.gettext("Spinach leaves extract")];
	labelArray=[gt.gettext("Red ink + Blue ink"),gt.gettext('Isopropyl alcohol + Water'),gt.gettext('Spinach leaves extract')];
	infMsgArray=[gt.gettext("Chromatography is the technique used for the separation of<br>those solutes that dissolve in the same solvent.")];
	helpMsgArray=[gt.gettext('Drag the capillary tube to the watch glass to collect the ink <br/>and drop it back on the paper.'),
	gt.gettext('Click on the lid of the<br/>chamber to open it.'),
	gt.gettext('Drag and place the paper in the chamber.'),
	gt.gettext('Click on the lid of<br/>the chamber to close it.'),
	gt.gettext('Click on the chamber to<br/>take the filter paper out.')];
	$('#reset').attr('value',gt.gettext('Reset'));
	$('#start').attr('value',gt.gettext('Start'));
	filterString=gt.gettext('Whatman Filter Paper');
	$('#bottletxt').html(labelArray[0]);
	$('#chambertxt').html(labelArray[1]);
	
	document.getElementById("solvntSelect").innerHTML=textArray[0];
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
	addintoDropDown( $('#theinput'),solventOpt);
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

		$("#zoomInnnerDiv").draggable({revert:true,containment:"#zoomInnnerDivTop", axis:"y",revert:false,
			drag:function(){
				
			}
	})
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
	else{
		 hideAll();	

    }

}

///changing mixture.....
function mixtureChange(){
	 propertyChange();
	 mixtureNum=document.getElementById("mixture").selectedIndex;
	 if (document.getElementById("theinput").selectedIndex==0){ 
	 	if(document.getElementById("mixture").selectedIndex==0){
	 		$('#bottletxt').html(labelArray[0]);
			$('#inputbx').css({ display:'block'});
			$('#inputbx1').css({ display:'none'});
			$('#bottletxt').css({"top":"289px"})
			
			 document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln.png');
			 $('#bottletxt').html(labelArray[0]);
			 $('#inkDIV').css({ 'background-color':'#003'});
		}else{
			$('#bottletxt').css({"top":"290px"})
			$('#bottletxt').html(labelArray[2]);
			$('#inputbx').css({ display:'none'});
			$('#inputbx1').css({ display:'block'});
			document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln_01.png');
			$('#bottletxt').html(labelArray[9]);
			$('#inkDIV').css({ 'background-color':'#060'});
		}
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
		 if(($("#capTube").position().top>=140)&&($("#capTube").position().top<150)&&(($("#capTube").position().left>25)&&($("#capTube").position().left<121)))
			 
			 {
			 	$("#capTube").css({"z-index":"10"});
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
		//alert("helloo");
		$('#capTube').css({left:'218px',top:"50px"}); 
		    $('#inkDIV').animate({height:'1px',top:"10px"},function(){
			 document.getElementById("paperColor").style.display='block';
			if(document.getElementById("mixture").selectedIndex==0){
			 
			 		$('#paperColorRED, #paperColorBlue').css({display:'block'});

			}
			else{
				$('#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ display:'block',});
				$("#paperColorREDT").hide();		
						

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
		}
		else{
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

// to enable filter ppaer drag property....
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
			
				if(($("#filterPaper").position().top>-1)&&($("#filterPaper").position().top<140)&&(($("#filterPaper").position().left>350)&&($("#filterPaper").position().left<510))){
					if(openFlag==false){
						filterTimer=setInterval("filterRotation()",10);
						pointFlag=1;
						$('#needle,#clockBody,#timeText').css({ display:'block',})
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
		$("#paperColor,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'12px',top:'130px'});
		$("#paperColor2").css({"left":"10px"});
}


///placing  filter paper into the chamber...
function filterRotation(){
				$('#paperColor2second').attr('src',simPath+"images/"+"paperColorRed.png");		
	  	 		$('#paperColorOsecond').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColor2').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColorO').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColorRED').attr('src',simPath+"images/"+"zoomRedTwo.png");
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
		 if(document.getElementById("mixture").selectedIndex==0){
			 if(topVal>18){
				 $("#paperColor").fadeOut(2500);
				  if(topVal<=165){
				  	 // document.getElementById("").style.display=document.getElementById("paperColor2").style.display="block";
				  	 $("#paperColor3").css({"left":"7px"});
				  	 $("#paperColor3").fadeIn(2500);
				  	 $("#paperColor2").fadeIn(2500);


				  	 
					$("#paperColor2").css({top:(129-((topVal-22)/1.5))+'px'});
				  }
				   $("#paperColor3").css({top:(129-((topVal-19)/1.5))+'px'});
			 }
			
			 if(topVal<145){
			  $("#waterDIV").css({top:(135-(topVal*0.99))+'px',height:(topVal*0.99)+'px'});
			 }
		 }
		 else{
			  if(topVal<145){
			  	
			  $("#waterDIV").css({top:(135-(topVal*1.1))+'px',height:(topVal*1.1)+'px'});
			 }
			  if(topVal>22){
				  $("#paperColor").fadeOut(950);
				  // console.log('TEST');
				  if(topVal<=145){
					 $("#paperColorO").css({top:(128-((topVal-22)/1.2))+'px'}); //3.3
				  }
				 if(topVal<=139){
					 $("#paperColorY").css({top:(128-((topVal-22)/1.25))+'px'}); //3.1
				 }
				 if(topVal<=65){
					 $("#paperColorLGr").css({top:(128-((topVal-22)/1.5))+'px'}); //1.6
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
		 degree=0;//
	}
	document.getElementById("needle").style.webkitTransformOrigin='5px 35px';
	document.getElementById("needle").style.webkitTransform = 'rotate(' + degree + 'deg)';
	document.getElementById("needle").style.MozTransformOrigin='5px 35px';
	document.getElementById("needle").style.MozTransform ='rotate('+ degree +'deg)';
}

///click function on chamber....
function enableChamberClcik(){
	
	  $("#chamber,#champerDoor").click(function() {

	  	 $("#paperColor3").css({"left":"11px"});
	  	 $("#paperColor2").css({"left":"13px"});
	  	 $("#filterPaperImg").css({"width":"39px"});
	  	 $("#filterPaperextn,#waterDIVxtn,#paperColor3Second,#paperColor2second").show();
	  	 $('#paperColor2second').attr('src',simPath+"images/"+"paperColorRed.png");		
	  	 $('#paperColorOsecond').attr('src',simPath+"images/"+"paperColorRed.png");		
		 $("#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").hide();
	  	 $("#waterDIV,#paperColor2,#paperColor3").hide();
		 $('#filterPaper').draggable({disabled:true});
		      hidecurrentScene();
			  document.getElementById("filterPaper").style.position='relative';
			  document.getElementById("OuterwaterDIV").style.position='relative';
			  $("#filterPaper").css({left:'21%',top:'30%',display: 'block'});
			  $("#OuterwaterDIV").css({left:'21%',top:'-30%',height:'60%',width:'8%'});
			  $("#paperColor,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr").css({left:'16px'});
			  $('#paperColorY2, #paperColorLGr2').css({left:'81px'});
			  $("#paperColor").css({top:'173px',opacity:'0.0'});
			  if(document.getElementById("mixture").selectedIndex==0){
			  	$("#zoomInnnerDiv").css({"top":"162px"});
			  	$('#paperColor2second').attr('src',simPath+"images/"+"paperColorRed.png");	
			  	$('#paperColor2second').css({"width":"10px"})	
	  	 		$('#paperColorOsecond').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColor2').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColorO').attr('src',simPath+"images/"+"paperColorRed.png");
	  	 		$('#paperColorRED').attr('src',simPath+"images/"+"zoomRedTwo.png");
				$("#waterDIV").css({top:'13%',height:'86%',width:'89%'});
				$("#paperColor2").css({top:'42px'});
			  	$("#paperColor3").css({top:'26px'});
				$("#paperColorRED").css({"top":"170px","left":"45px"});
			  	$("#paperColorBlue").css({"top":"147px","left":"43px"});

			  
			  }else{
			  	$("#zoomInnnerDiv").css({"top":"192px"});
			  	$('#paperColor2second').attr('src',simPath+"images/"+"paperColor7.png");		
	  	 		$('#paperColorOsecond').attr('src',simPath+"images/"+"paperColor7.png");
	  	 		$('#paperColor2').attr('src',simPath+"images/"+"paperColor7.png");
	  	 		$('#paperColorO').attr('src',simPath+"images/"+"paperColor7.png");


			  	$("#paperColorO2").css({"top":"152px","left":"43px"});
			  	$("#paperColor3Second,#paperColor2second").hide();
			  	$("#paperColorOsecond,#paperColorYsecond,#paperColorLGrsecond,#paperColorDGrsecond").show();
				$("#waterDIV").css({top:'22%',height:'77%',width:'89%'});
				$("#paperColorDGr").css({top:'147px'});
				$("#paperColorLGr").css({top:'115px'});
				$("#paperColorY").css({top:'57px'});
				$("#paperColorO").css({top:'50px'});
				$("#paperColorDGr2").css({"top":"335px","left":"43px"});
				$("#paperColorLGr2").css({top:'275px'});
				$("#paperColorY2").css({top:'164px'});
				
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
	$('#needle,#clockBody,#timeText').css({ display:'none',})
	
}

//// hiding images.......
function hideAll(){
			
		document.getElementById("inkBottle").setAttribute('src', simPath+'images/beaker_soln.png');
		$('#bottletxt').html(labelArray[0]);
	    $('#inkDIV').css({ 'background-color':'#003'});
		$('#arrow1,#arrow2,#arrow3,#arrow4,#arrow5,#arrow6').css({display:'none'});
		$('#needle').css({top:'86px',left:'287px'});
		$('#clockBody').css({top:'70px',left:'240px'});
    	$('#doorClick').css({top:'215px'});
		$("#BeakerSoln,#BeakerSoln1").css({height:'1px',top:'-3px',opacity:'0.6'});
	    $("#BeakerSolnimg,#BeakerSolnimg1").css({top:'-60px'});
		$('#inkBottle,#chamber,#champerDoor,#tubeInbeaker,#capTube,#inputbx,#inputbx1,#inkDIV,#bubbles,#outlayer_Water,#circleDiv,#soln_inFunnel').css({ display:'none'});
		$('#needle,#clockBody,#filterPaper,#OuterwaterDIV,#filterPaperOuter,#vapoursFractDiv,#vapoursSideFractDiv,#vapoursDiv,#vapoursSideDiv,#dropImg').css({ display:'none'});
		document.getElementById("show").checked=false;
		document.getElementById("show").disabled=true;
		document.getElementById("checkboxId").style.visibility=document.getElementById("show").style.visibility=document.getElementById("inferenceDiv").style.visibility=document.getElementById("scale").style.visibility= "hidden";
		$('#bottleLabel1,#bottletxt,#bottleLabel2,#chambertxt,#reslt,#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ display:'none'});
		$('#tap_close').css({left:'373px',top:'176px','-moz-transform':'rotate(0deg)','-webkit-transform':'rotate(0deg)','-o-transform':'rotate(0deg)',
			 '-ms-transform':'rotate(0deg)',});
		dropcount=0;
		rotationCount=5;
		i=-480;
		openFlag=false;
		correctFlag=0;
		lidLeft=555;
		tapRotFlag=0;
		posFlag=0;
		topVal=0;
		pointFlag=0;
		degree=0;
		picktube=0;
		
		document.getElementById("filterPaper").style.position='absolute';
		$("#champerDoor").css("-moz-transform", "rotate(0deg)");
		$("#champerDoor").css("-webkit-transform", "rotate(0deg)");
		$("#champerDoor").css({top:'77px',left:'375px'});
		$("#champerDoor").unbind('click');
		$("#chamber").unbind('click');
		clearInterval(filterTimer);
		clearInterval(clockinterval);
		clearInterval(interval);
		clearInterval(rotateEvt);
		$('#paperColor,#paperColor2,#paperColor3,#paperColorO,#paperColorY,#paperColorLGr,#paperColorDGr').css({ left:'17px',top:'37px'});
		document.getElementById("theinput").disabled=document.getElementById('mixture').disabled=false;
		clearInterval(timeoutEvt);
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
		document.getElementById("scale").style.top="-131px";
		document.getElementById("scale").style.left="157px";
		document.getElementById("ZommDiv").style.display="block";
		// $("#arrow3,#arrow31,#arrow31").show()	
		// $("#arrow3").css({"left":"125px","top":"78px"});
		$("#arrow31,#arrow31").show()
		if(document.getElementById("mixture").selectedIndex==0){
			$('#arrow1,#arrow2').css({display:'block',left:'125px'});
			$('#arrow21').css({display:'block',left:'34px'});
			$("#zoomWater").css({"top":"144px"});
			$('#arrow1').css({top:'101px'});
			$('#arrow2').css({top:'82px'});
			$('#arrow11').css({top:'34px'});
			$('#arrow21').css({top:'139px'});
			$('#arrow31').css({"top":"164px","left":"34px"});
			document.getElementById("b_txt").disabled=document.getElementById("r_txt").disabled=false;
			document.getElementById("bInk_txt").disabled=document.getElementById("rInk_txt").disabled=document.getElementById("solvnt_txt").disabled=false;
		}else{
			$
			$("#paperColorO2, #paperColorY2, #paperColorLGr2, #paperColorDGr2").show();
			$("#zoomWater").css({"top":"144px"});
			// $("#arrow21").show();
			$("#arrow21").css({"top":"34px","left":"66px"});
			$("#arrow2").css({"top":"78px","left":"125px"});
			$('#arrow3,#arrow4,#arrow5,#arrow6').css({display:'block',left:'125px'});
			$('#arrow31,#arrow41,#arrow51,#arrow61').css({display:'block',left:'32px'});
			$('#arrow3').css({top:'90px'});
			$('#arrow4').css({top:'97px'});
			$('#arrow5').css({top:'182px'});
			$('#arrow6').css({top:'228px'});
			$('#arrow31').css({top:'149px'});
			$('#arrow41').css({top:'159px'});
			$('#arrow51').css({top:'269px'});
			$('#arrow61').css({top:'329px'});
			
			document.getElementById("o_txt").disabled=document.getElementById("y_txt").disabled=document.getElementById("lGr_txt").disabled=document.getElementById("dGr_txt").disabled=false;
			document.getElementById("oInk_txt").disabled=document.getElementById("yInk_txt").disabled=document.getElementById("solvnt_txt1").disabled=false;
			document.getElementById("lGrInk_txt").disabled=document.getElementById("dGrInk_txt").disabled=false;
		}
	}else{
		document.getElementById("scale").style.visibility="hidden";	
		document.getElementById("ZommDiv").style.display="none";	
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
	// enableScale();
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
	
  }else{
	  $('#toolTip,#popup2,#popup').css({display:'none'});
  }
}