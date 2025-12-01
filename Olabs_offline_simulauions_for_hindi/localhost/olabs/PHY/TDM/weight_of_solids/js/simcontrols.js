// JavaScript Document
var conc=10;
var knownConc=10;
var cmb="Air";
var solid="Earth";
var arrw=0;
var imgId;
var currentMass=110;
var upthrustval=0;
var lossval=0;
var canvasBG = document.getElementById('BG');
width= 570+"px";
height= 442+"px";
var ctxBG = canvasBG.getContext('2d');
var imgBG = new Image;
imgBG.onload = function(){ ctxBG.drawImage(imgBG,0,0);
 };
 
imgBG.src=simPath+'images/BG.png';

	//localization variable.
 
var ContrlHead=gt.gettext("Select Environment");
var VoptinOne=gt.gettext("Earth (g=9.8 m/s&#178;)");
var VoptinTwo=gt.gettext("Mars (g=3.69 m/s&#178;)");
var VoptinThree=gt.gettext("Moon (g=1.63 m/s&#178;)");
var ControlHeadTwo=gt.gettext("Mass of solid in");
var Controlheadthree_One=gt.gettext("Dip object:");
var Controlheadthree_Two =gt.gettext(" 0% immersed");
var Air=gt.gettext("Air");
var Tapwater=gt.gettext("Tap water");
var Saltywater=gt.gettext("Salty water");
var LossOfWeight=gt.gettext("Loss of weight");
var EnterTheUpthrust=gt.gettext("Enter the upthrust");
var textN=gt.gettext("N");
var chk=gt.gettext("Check");
var rst=gt.gettext("Reset");
var g=gt.gettext("g");
var Wronglossinput=gt.gettext("Wrong loss input");
var Wrongupthrust=gt.gettext("Wrong upthrust");
var Emptylossinput=gt.gettext("Empty loss input");
var Correctupthrust=gt.gettext("Correct upthrust");
var Correctlossinput=gt.gettext("Correct loss input");
var EmptyUpthrustinput=gt.gettext("Empty Upthrust input");
var immersed=gt.gettext("0% immersed");
var IronBlock=gt.gettext("Iron Block");
var CopperBlock=gt.gettext("Copper Block");
var immersedTen=gt.gettext( "10% immersed");
var immersedTwoFive=gt.gettext("25% immersed");
var immersedFiveFive=gt.gettext("50% immersed");
var immersedSevenFive=gt.gettext("75% immersed");
var immersedHundred=gt.gettext("100% immersed");
//localization variable.


/*alert(ContrlHead);*/
 
// initializing......

window.onload = function init(){
	


	
	document.getElementsByClassName("varTitle")[0].innerHTML=ContrlHead;
	document.getElementById("OptnOne").innerHTML=VoptinOne;
	document.getElementById("OptnTwo").innerHTML=VoptinTwo;
	document.getElementById("OptnTree").innerHTML=VoptinThree;
	document.getElementById("varTitleTwo").innerHTML=ControlHeadTwo;
	document.getElementById("OptnFour").innerHTML=Air;
	document.getElementById("OptnFive").innerHTML=Tapwater;
	document.getElementById("OptnSix").innerHTML=Saltywater;
	document.getElementById("varTitle_one").innerHTML=Controlheadthree_One;
	document.getElementById("varTitle_two").innerHTML=Controlheadthree_Two;
	document.getElementById("txt1").innerHTML=LossOfWeight;
	document.getElementById("txt2").innerHTML=EnterTheUpthrust;
	document.getElementById("txtn").innerHTML=textN;
	document.getElementById("txtn1").innerHTML=textN;
	document.getElementById("submit").value=chk;
	document.getElementById("reset").value=rst;
	document.getElementById("Mainimage").style.visibility='hidden';
	document.getElementById("imageMachine").style.visibility='hidden';
	document.getElementById("imageBeaker").style.visibility='hidden';
	document.getElementById("imagesmallBeaker").style.visibility='hidden';
	document.getElementById("imageWater").style.height="35"; //initializing the height 
	document.getElementById("imageWater").style.top=378+"px";
	document.getElementById("imageWaterblue").style.height="55"; //initializing the height 
	document.getElementById("imageWaterblue").style.top=378+"px";
	$("#expName").html(gt.gettext("Verification of Archimedes' Principle"));
	/*$(".labName").html(gt.gettext("Developed by CDAC Mumbai &amp; Amrita University <br> Under research grant from department of IT"));
	
$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));*/
								}
// image clicks with arrow positions....
function imageClick1(e){
	document.getElementById("imageWater").style.visibility='hidden';
	document.getElementById("imageWater").height="35"; //initializing the height
	document.getElementById("imageWater").style.top=378+"px";
	
	document.getElementById("imageWaterblue").style.visibility='hidden';
	document.getElementById("imageWaterblue").height="55"; //initializing the height
	document.getElementById("imageWaterblue").style.top=378+"px";
	
	document.getElementById("answer1").value="";
	document.getElementById("answer2").value="";
	
	imgId=e.id;
	 if(e.id=="image3"){
		document.getElementById("Mvalue").style.visibility='visible'; 
		document.getElementById("txtChek1").innerHTML="";
	    document.getElementById("txtChek").innerHTML="";
		 document.getElementById("theinput3").disabled=false;
		  if(solid=="Earth"){
		   if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
			document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167+"px";
			
			
		}else if(cmb=="Tapwater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
            document.getElementById("imagearrow").style.top=176+"px"; //intialize the top of the arrow
			
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
			document.getElementById("imagearrow").style.top=176+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167+"px";
		}
	  }
	  else if(solid=="Mars"){
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}else if(cmb=="Tapwater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
			 document.getElementById("imagearrow").style.top=158+"px"; //intialize the top of the arrow
		    //document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			//document.getElementById("theinput3").disabled=false;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
			document.getElementById("imagearrow").style.top=158+"px";
		    //document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
	  }else if(solid=="Moon"){
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
			document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}else if(cmb=="Tapwater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
			document.getElementById("imagearrow").style.top=153+"px"; //intialize the top of the arrow
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
			document.getElementById("imagearrow").style.top=153+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}  
	  }
			document.getElementById("theinput3").value="0";
			document.getElementById("divConc").innerHTML=immersed;
			document.getElementById("img3").style.visibility='hidden';
			document.getElementById("img4").style.visibility='visible';
		//document.getElementById("imagearrow").style.top=252+"px";
	

		
		}else if(e.id=="image4"){
		document.getElementById("Mvalue").style.visibility='visible'; 	
		 document.getElementById("theinput3").disabled=false;
		 document.getElementById("txtChek1").innerHTML="";
	     document.getElementById("txtChek").innerHTML="";
		 if(solid=="Earth"){	
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementsByTagName('canvas')[0].style.top=-5+"px";
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+205+"px";
			document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+169+"px";
		}else if(cmb=="Tapwater"){
			
			 document.getElementsByTagName('canvas')[0].style.top=-5+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+205+"px";
			document.getElementById("imagearrow").style.top=178+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+169+"px";
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=-5+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+205+"px";
			document.getElementById("imagearrow").style.top=178+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+169+"px";
		}
	  }else if(solid=="Mars"){
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}else if(cmb=="Tapwater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
			document.getElementById("imagearrow").style.top=158+"px";
		   // document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
			document.getElementById("imagearrow").style.top=158+"px";
		    //document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
	  }else if(solid=="Moon"){
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("theinput3").disabled=true;
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
			document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
		}else if(cmb=="Tapwater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
		    document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
			document.getElementById("imagearrow").style.top=153+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
		}else if(cmb=="Saltywater"){
			
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
			document.getElementById("imagearrow").style.top=153+"px";
			//document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
		}
	  }
			document.getElementById("theinput3").value="0";
			document.getElementById("divConc").innerHTML=immersed;
			document.getElementById("img3").style.visibility='visible';
			document.getElementById("img4").style.visibility='hidden';
		}
	
}
// image clicks....
function imageClick2(e){
	     var topPos0=10+"px";
	
		if(e.id=="image4"){
			
			document.getElementsByTagName('canvas')[0].style.visibility="visible";
			var canvas = document.getElementsByTagName('canvas')[0];
			canvas.width = 350;
			canvas.height = 270;
			var ctx = canvas.getContext('2d'); 
			var img11 = new Image;
			img11.onload = function(){ ctx.drawImage(img11,138,174,45,45)};
			img11.src=simPath+'images/copperTag.png';
			document.getElementById("imageSpring").style.top=topPos0;
		  }
		else if(e.id=="image3"){
			
			document.getElementsByTagName('canvas')[0].style.visibility="visible";
			var canvas = document.getElementsByTagName('canvas')[0];
			canvas.width = 350;
			canvas.height = 270;
			var ctx = canvas.getContext('2d'); 
			var img11 = new Image;
			img11.onload = function(){ ctx.drawImage(img11,138,174,45,45)};
			img11.src=simPath+'images/iron2.png';
			document.getElementById("imageSpring").style.top=topPos0;
		    
			
		}
}

//validating inputBox
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
//Environment  combo selecting.....
function combo2(thelist4, theinput)
{
	document.getElementById("imageWater").style.visibility='hidden';
	document.getElementById("imageWaterblue").style.visibility='hidden';
    document.getElementById("theinput3").disabled=true;
	document.getElementById("answer1").value="";
	document.getElementById("answer2").value="";	
	document.getElementById("txtChek1").innerHTML="";
	document.getElementById("txtChek").innerHTML="";
	solid=document.getElementsByName('thelist3').item(0).value;
    document.getElementsByTagName('canvas')[0].style.visibility="hidden";
	document.getElementById("img3").style.visibility='visible';
	document.getElementById("img4").style.visibility='visible';
	document.getElementById("topValue").style.visibility='hidden';  
	document.getElementById("imageSpring").style.top=10+"px";	
	if(solid=="Earth"){
	document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementById("theinput3").disabled=true;
		}
		else if(cmb=="Tapwater"){
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="110"+g;
		document.getElementById("Mvalue").innerHTML="110"+g;
			
		}else if(cmb=="Saltywater"){
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="110"+g;
		document.getElementById("Mvalue").innerHTML="110"+g;	
		}
		
	}else if(solid=="Mars"){
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementById("theinput3").disabled=true;
			}
		else if(cmb=="Tapwater"){
			
			 
			 document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("topValue").innerHTML="42"+g;
			 document.getElementById("Mvalue").innerHTML="42"+g;
		}else if(cmb=="Saltywater"){
			 
			 document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("topValue").innerHTML="42"+g;	
			 document.getElementById("Mvalue").innerHTML="42"+g;
		}
		
	}else if(solid=="Moon"){
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
		if(cmb=="Air"){
			document.getElementById("Mvalue").style.visibility='hidden'; 
			document.getElementById("theinput3").disabled=true;
			
		}
	      else if(cmb=="Tapwater"){
			 
			 document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("topValue").innerHTML="18"+g;
			 document.getElementById("Mvalue").innerHTML="18"+g;
		}else if(cmb=="Saltywater"){
			
			 document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("topValue").innerHTML="18"+g;
			  document.getElementById("Mvalue").innerHTML="18"+g;	
		}
			
	}
}

//mass  combo selecting.....
function combo1(thelist1, theinput1)
{
	document.getElementById("imageWater").style.visibility='hidden';
	document.getElementById("imageWaterblue").style.visibility='hidden';
	document.getElementById("theinput3").disabled=true;
	cmb=document.getElementsByName('thelist2').item(0).value;
	document.getElementById("answer1").value="";
	document.getElementById("answer2").value="";
	document.getElementById("txtChek1").innerHTML="";
	document.getElementById("txtChek").innerHTML="";
	var topPos0=10+"px"	;
	document.getElementsByTagName('canvas')[0].style.visibility="hidden";
	document.getElementById("img3").style.visibility='visible';
	document.getElementById("img4").style.visibility='visible';
	document.getElementById("theinput3").value="0";
	document.getElementById("divConc").innerHTML=immersed;
	document.getElementById("imageSpring").style.top=topPos0;
    
	if(thelist1.options[thelist1.selectedIndex].value=="Air"){
		
	cmb=thelist1.options[thelist1.selectedIndex].value;
	document.getElementById("Mvalue").style.visibility='hidden'; 	
	document.getElementById("submit").style.visibility='hidden';
	document.getElementById("txtn").style.visibility='hidden';
	 document.getElementById("txtn1").style.visibility='hidden'; 
	document.getElementById("topValue").style.visibility='hidden'; 
	document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";

    document.getElementById("theinput3").disabled=true;
	document.getElementById("answer1").style.visibility='hidden';
	document.getElementById("answer2").style.visibility='hidden';
	document.getElementById("txt1").style.visibility='hidden';
	document.getElementById("txt2").style.visibility='hidden';
	document.getElementById("Mainimage").style.visibility='hidden';
	document.getElementById("imageMachine").style.visibility='hidden';
	document.getElementById("imageBeaker").style.visibility='hidden';
	document.getElementById("imagesmallBeaker").style.visibility='hidden';
	 }
   else if(thelist1.options[thelist1.selectedIndex].value=="Tapwater"){
	   
	   document.getElementById("submit").style.visibility='visible';  
	document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
	  if(arrw==1){
		//document.getElementById("imagearrow").style.top=80+"px";
	}
	    if(solid=="Earth"){
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="110"+g;	
		  document.getElementById("Mvalue").innerHTML="110"+g;
		 }else if(solid=="Mars"){
			document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="42"+g;
		  document.getElementById("Mvalue").innerHTML="42"+g;	
		 }else{
			document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="18"+g;
		  document.getElementById("Mvalue").innerHTML="18"+g;	 
		 }
	//document.getElementById("imagearrow").style.top=145.5+"px";
	//document.getElementById("arrowimage1").style.top=155+"px";
	document.getElementById("answer1").style.visibility='visible';
	document.getElementById("answer2").style.visibility='visible';
	document.getElementById("txtn").style.visibility='visible';
	 document.getElementById("txtn1").style.visibility='visible';
	document.getElementById("txt1").style.visibility='visible';
	document.getElementById("txt2").style.visibility='visible'; 
	document.getElementById("Mainimage").style.visibility='visible';
	document.getElementById("imageMachine").style.visibility='visible';
	document.getElementById("imageBeaker").style.visibility='visible';
	document.getElementById("imagesmallBeaker").style.visibility='visible';
		        
  }
  else if(thelist1.options[thelist1.selectedIndex].value=="Saltywater"){
	  document.getElementById("submit").style.visibility='visible';  
	document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+150+"px";
	document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
	   if(solid=="Earth"){
			 document.getElementById("topValue").style.visibility='visible';
		     document.getElementById("topValue").innerHTML="110"+g;
			  document.getElementById("Mvalue").innerHTML="110"+g;	
		 }else if(solid=="Mars"){
			 document.getElementById("topValue").style.visibility='visible';
		     document.getElementById("topValue").innerHTML="42"+g;
			  document.getElementById("Mvalue").innerHTML="42"+g;	
		 }else{
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="18"+g;
			 document.getElementById("Mvalue").innerHTML="18"+g;	
		 }
	//document.getElementById("imagearrow").style.top=145.5+"px";
	//document.getElementById("arrowimage1").style.top=155+"px";
	document.getElementById("answer1").style.visibility='visible';
	document.getElementById("answer2").style.visibility='visible';
	document.getElementById("txtn").style.visibility='visible';
	document.getElementById("txtn1").style.visibility='visible';
	document.getElementById("txt1").style.visibility='visible';
	document.getElementById("txt2").style.visibility='visible'; 
	document.getElementById("Mainimage").style.visibility='visible';
	document.getElementById("imageMachine").style.visibility='visible';
	document.getElementById("imageBeaker").style.visibility='visible';
	document.getElementById("imagesmallBeaker").style.visibility='visible';
	 	
 }
 
}
//checking the  upthrustvalue and loss values
function checkAnswer(){
		
	var loss=document.getElementById("answer1").value;
	
	var up=document.getElementById("answer2").value;
	
	if(document.getElementById("answer2").value==""){
		document.getElementById("txtChek1").innerHTML=EmptyUpthrustinput;
       }
	else{
		if(up==upthrustval)
	    {
		document.getElementById("txtChek1").innerHTML=Correctupthrust;	
		}
		else{
		document.getElementById("txtChek1").innerHTML=Wrongupthrust;
		}
	}
	if(document.getElementById("answer1").value==""){
	  document.getElementById("txtChek").innerHTML= Emptylossinput;
	 }
	else{
		if(loss==upthrustval)
		{
		document.getElementById("txtChek").innerHTML=Correctlossinput;	
		
		}
		else{
		document.getElementById("txtChek").innerHTML=Wronglossinput;
		
		}
 }
	
}
//function to Show Tooltip 
function  showTooltip(e){
		document.getElementById("tooltip2").style.display="";		
		var leftPos;
		var topPos;
		document.getElementById("tooltip2").style.left=leftPos;
		document.getElementById("tooltip2").style.top=topPos;
		if (e.id=="img3"){	
			leftPos=e.offsetLeft+400+"px";
			topPos=e.offsetTop+345+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=IronBlock;
		}else if(e.id=="img4"){
			leftPos=e.offsetLeft+470+"px";
			topPos=e.offsetTop+345+"px"	;	
			document.getElementById("tooltip2").style.left=leftPos;
			document.getElementById("tooltip2").style.top=topPos;	
			document.getElementById("tooltip2").innerHTML=CopperBlock;
		}
		document.getElementById("tooltip2").style.fontWeight = "bold";
		
}
//Hide tool tip of cuvettes
function  hideTooltip(){	
	document.getElementById("tooltip2").style.display="none";
}

//slider movements with each combo's 
function passDipValue(){
	
	document.getElementById("Mvalue").style.visibility='visible'; 
		
	conc=document.getElementById("theinput3").selectedIndex;
	knownConc=conc;
	
	var topPos0=40+"px"	;
	var topPos01=45+"px"	;
	var topPos1=50+"px";
	var topPos2=60+"px";
	var topPos3=69+"px";
	var topPos4=71+"px";
 if(solid=="Earth"){
	
	
	if(cmb=="Air"){
		document.getElementById("Mvalue").style.visibility='hidden'; 
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		if(conc==0)
	   {
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		
		}
    if(conc==1)
	   {
	    document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		
		}
	else if(conc==2)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=11+"px";
		}
	else if(conc==3)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=16+"px";
		}
	else if(conc==4)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=26+"px";
		}
	else if(conc==5){
		    document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=36+"px";
		}
	}else if(cmb=="Tapwater"){
		
		if(imgId=="image3"){
			
		if(conc==0)
	   {
		   upthrustval=0;
		    document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
			document.getElementById("topValue").innerHTML="110"+g;	
			 document.getElementById("Mvalue").innerHTML="110"+g;
			document.getElementById("imageSpring").style.top=13+"px";
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167+"px";
		}
    if(conc==1)
	   {
		  
		upthrustval=0.0098;
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("topValue").innerHTML="111"+g;
		 document.getElementById("Mvalue").innerHTML="111"+g;
		// document.getElementById("imagearrow").style.top=208+"px"
				document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+201+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+166+"px";
		}
	else if(conc==2)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="113"+g;	
			 document.getElementById("Mvalue").innerHTML="113"+g;
			upthrustval=0.0245;
			document.getElementById("imageSpring").style.top=topPos1;		   
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+200.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+166+"px";	
			
		}
	else if(conc==3)
		{
			upthrustval=0.049;
		    document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="115"+g;
			 document.getElementById("Mvalue").innerHTML="115"+g;	
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+199.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+165+"px";	
		}
	else if(conc==4)
		{
			upthrustval=0.0735;
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="118"+g;
			 document.getElementById("Mvalue").innerHTML="118"+g;	
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+198.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+164.5+"px";	
		}
	else if(conc==5){
		 upthrustval=0.098;
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='visible'; 
	    document.getElementById("imageWaterblue").height="68";
		document.getElementById("imageWaterblue").style.top=365+"px";
		    document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="120"+g;	
			 document.getElementById("Mvalue").innerHTML="120"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+197.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+163.5+"px";
			
		}
	  }if(imgId=="image4"){
		if(conc==0)
	   {
		 upthrustval=0;
		 document.getElementById("imageWater").style.visibility='hidden';
		  document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="110"+g;
		  document.getElementById("Mvalue").innerHTML="110"+g;	
	     document.getElementById("imageSpring").style.top=13+"px";
		 document.getElementsByTagName('canvas')[0].style.top=1+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+205+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+169+"px";
		}
    if(conc==1)
	   {
		 upthrustval=0.0098;
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("topValue").innerHTML="111"+g;	
		 document.getElementById("Mvalue").innerHTML="111"+g;
		document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos01;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+204.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+168.5+"px";
		
		}
	else if(conc==2)
		{
			
			upthrustval=0.0245;
	        document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
            document.getElementById("imageWaterblue").style.visibility='hidden';
            document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="113"+g;	
			 document.getElementById("Mvalue").innerHTML="113"+g;
		    document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+203.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167.5+"px";
			
		}
	else if(conc==3)
		{
			upthrustval=0.049;
		 document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="115"+g;	
			 document.getElementById("Mvalue").innerHTML="115"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+166.5+"px";
		}
	else if(conc==4)
		{
		   upthrustval=0.0735;
		 
            document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";
			 document.getElementById("topValue").style.visibility='visible';
		     document.getElementById("topValue").innerHTML="118"+g;	
			  document.getElementById("Mvalue").innerHTML="118"+g;
			 document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+201.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+165.5+"px";
		}
	else if(conc==5){
		    upthrustval=0.098;
	    document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='visible'; 
	    document.getElementById("imageWaterblue").height="68";
		document.getElementById("imageWaterblue").style.top=365+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="120"+g;
			 document.getElementById("Mvalue").innerHTML="120"+g;	
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+199.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+164.5+"px";
			
		}  
	  }
		
	}
	else if(cmb=="Saltywater"){
		if(imgId=="image3"){
		if(conc==0)
	   {
		 upthrustval=0;
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").innerHTML="110"+g;
		  document.getElementById("Mvalue").innerHTML="110"+g;	
		 document.getElementById("imageSpring").style.top=13+"px";
		 document.getElementsByTagName('canvas')[0].style.top=1+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
		 document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167+"px";
		}
    if(conc==1)
	   {
		 upthrustval=0.011;
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='hidden';
		  document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").innerHTML="111"+g;	
		  document.getElementById("Mvalue").innerHTML="111"+g;
		 document.getElementById("divConc").innerHTML= immersedTen;
		 document.getElementById("imageSpring").style.top=topPos0;
	 	 document.getElementsByTagName('canvas')[0].style.top=30+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202+"px";
		 document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167+"px";
		
		}
	else if(conc==2)
		{
			 upthrustval=0.027;
			 document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
		     document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";
            document.getElementById("topValue").innerHTML="113"+g;	
			 document.getElementById("Mvalue").innerHTML="113"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+200.5+"px";
            document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+166+"px";	
		}
	else if(conc==3)
		{
			upthrustval=0.054;
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("imageWaterblue").style.visibility='hidden';
		    document.getElementById("imageWater").style.visibility='visible'; 
		    document.getElementById("imageWater").height="45";
		    document.getElementById("imageWater").style.top=369+"px";
		    document.getElementById("topValue").innerHTML="115"+g;
			 document.getElementById("Mvalue").innerHTML="115"+g;	
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+199.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+165+"px";	

			
		}
	else if(conc==4)
		{
			upthrustval=0.081;
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("imageWaterblue").style.visibility='hidden';
		    document.getElementById("imageWater").style.visibility='visible'; 
		    document.getElementById("imageWater").height="65";
		    document.getElementById("imageWater").style.top=354+"px";
		    document.getElementById("topValue").innerHTML="118"+g;
			 document.getElementById("Mvalue").innerHTML="118"+g;	
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+198.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+164.5+"px";
			
		}
	else if(conc==5){
		     upthrustval=0.11;
		    document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("imageWater").style.visibility='visible'; 
		 document.getElementById("imageWater").height="75";
		 document.getElementById("imageWater").style.top=346+"px";
		    document.getElementById("topValue").innerHTML="120"+g;	
			 document.getElementById("Mvalue").innerHTML="120"+g;
		   document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+197.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+163.5+"px";
			
		}
	   }
	   else if(imgId=="image4"){
		if(conc==0)
	   {
		 upthrustval=0;
		 document.getElementById("imageWater").style.visibility='hidden';
		  document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("topValue").style.visibility='visible';
	    document.getElementById("topValue").innerHTML="110"+g;	
		 document.getElementById("Mvalue").innerHTML="110"+g;
		document.getElementById("imageSpring").style.top=13+"px";
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+205+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+169+"px";

		}
    if(conc==1)
	   {
		upthrustval=0.011;
		document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="111"+g;
		  document.getElementById("Mvalue").innerHTML="111"+g;	
		 document.getElementById("divConc").innerHTML= immersedTen;
		 document.getElementById("imageSpring").style.top=topPos01;
		 document.getElementsByTagName('canvas')[0].style.top=30+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+204.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+168.5+"px";
		
		}
	else if(conc==2)
		{
			upthrustval=0.027;
			document.getElementById("topValue").style.visibility='visible';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";
		    document.getElementById("topValue").innerHTML="113"+g;
			 document.getElementById("Mvalue").innerHTML="113"+g;	
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+203.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+167.5+"px";

			
		}
	else if(conc==3)
		{
			upthrustval=0.054;
			 document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("imageWater").style.visibility='visible'; 
		document.getElementById("imageWater").height="45";
		document.getElementById("imageWater").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="115"+g;
			 document.getElementById("Mvalue").innerHTML="115"+g;	
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+202.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+166.5+"px";

			
		}
	else if(conc==4)
		{
			upthrustval=0.081;
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
		   document.getElementById("imageWater").style.visibility='visible'; 
		   document.getElementById("imageWater").height="65";
		   document.getElementById("imageWater").style.top=354+"px";
            document.getElementById("topValue").innerHTML="118"+g;
			 document.getElementById("Mvalue").innerHTML="118"+g;	
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+201.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+165.5+"px";
			
		}
	else if(conc==5){
		    upthrustval=0.11;
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='visible'; 
		 document.getElementById("imageWater").height="75";
		 document.getElementById("imageWater").style.top=346+"px";
		    document.getElementById("topValue").innerHTML="120"+g;
			 document.getElementById("Mvalue").innerHTML="120"+g;	
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+199.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+164.5+"px";
         }
	   }
	 }
   }
   else if(solid=="Mars"){
	if(cmb=="Air"){
		document.getElementById("Mvalue").style.visibility='hidden'; 
		if(conc==0)
	   {
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
    if(conc==1)
	   {
		document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=2+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+146.5+"px";
		}
	else if(conc==2)
		{
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageWater").style.visibility='hidden';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=18+"px";
		}
	else if(conc==3)
		{
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageWater").style.visibility='hidden';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=22+"px";
		}
	else if(conc==4)
		{
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageWater").style.visibility='hidden';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=25+"px";
		}
	else if(conc==5){
			document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageWater").style.visibility='hidden';
			 document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=33+"px";
		}
	}else if(cmb=="Tapwater"){
		if(imgId=="image3"){
		if(conc==0)
	   {
		  upthrustval=0;
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").innerHTML="42"+g;	
		  document.getElementById("Mvalue").innerHTML="42"+g;
		 document.getElementById("imageSpring").style.top=13+"px";
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";

		}
    if(conc==1)
	   {
		 upthrustval=0.0037;
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").innerHTML="43"+g;
		  document.getElementById("Mvalue").innerHTML="43"+g;	
	    document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+146.5+"px";

		
		}
	else if(conc==2)
		{
			upthrustval=0.00925;
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
            document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="44"+g;
			 document.getElementById("Mvalue").innerHTML="44"+g;	
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145.5+"px";
			
		}
	else if(conc==3)
		{
		  upthrustval=0.0185;	
		 document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		   document.getElementById("topValue").innerHTML="47"+g;	
		    document.getElementById("Mvalue").innerHTML="47"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+167.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145+"px";
		}
	else if(conc==4)
		{
			upthrustval=0.02775;
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";
		    document.getElementById("topValue").innerHTML="49"+g;	
			 document.getElementById("Mvalue").innerHTML="49"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+165+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+144+"px";
			
		}
	else if(conc==5){
		    upthrustval=0.037;
		  document.getElementById("topValue").style.visibility='visible';
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='visible'; 
	    document.getElementById("imageWaterblue").height="68";
		document.getElementById("imageWaterblue").style.top=365+"px";
		   document.getElementById("topValue").innerHTML="52"+g;	
		    document.getElementById("Mvalue").innerHTML="52"+g;
		   document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+164+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
			
		}
	  }if(imgId=="image4"){
		if(conc==0)
	   {
		  upthrustval=0;
		  document.getElementById("imageWater").style.visibility='hidden';
		   document.getElementById("imageWaterblue").style.visibility='hidden';
		  document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="42+g";	
		  document.getElementById("Mvalue").innerHTML="42+g";
		 document.getElementById("imageSpring").style.top=13+"px";
		 document.getElementsByTagName('canvas')[0].style.top=1+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
    if(conc==1)
	   {
		upthrustval=0.0037;
		document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="43+g";	
		  document.getElementById("Mvalue").innerHTML="43+g";
		document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos01;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+146+"px";
		}
	else if(conc==2)
		{
			upthrustval=0.00925;
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
            document.getElementById("imageWaterblue").style.visibility='hidden';
            document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="44"+g;
			 document.getElementById("Mvalue").innerHTML="44"+g;	
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145.5+"px";
		}
	else if(conc==3)
		{
			upthrustval=0.0185;
		   document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";
            document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="47"+g;
			 document.getElementById("Mvalue").innerHTML="47"+g;	
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+167.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145+"px";
			
		}
	else if(conc==4)
		{
			upthrustval=0.02775;
		   document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="49"+g;
			 document.getElementById("Mvalue").innerHTML="49"+g;	
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+166+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+144+"px";
			
		}
	else if(conc==5){
		    upthrustval=0.037;
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='visible'; 
	    document.getElementById("imageWaterblue").height="68";
		document.getElementById("imageWaterblue").style.top=365+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="52"+g;	
			 document.getElementById("Mvalue").innerHTML="52"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=192.5+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+166.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
			}  
	  }
		
	}
	else if(cmb=="Saltywater"){
		if(imgId=="image3"){
		if(conc==0)
	    {
		    upthrustval=0;
			document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';	
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="42"+g;
		 document.getElementById("Mvalue").innerHTML="42"+g;	
		document.getElementById("imageSpring").style.top=13+"px";
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
    if(conc==1)
	   {
		 upthrustval=0.004;
		 document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
	    document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="43"+g;
		 document.getElementById("Mvalue").innerHTML="43"+g;  
		document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+146.5+"px";
		}
	else if(conc==2)
		{
			upthrustval=0.010;
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="44"+g;
			 document.getElementById("Mvalue").innerHTML="44"+g;
            document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+168.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145.5+"px";
		}
	else if(conc==3)
		{
			upthrustval=0.020;
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageWater").style.visibility='visible'; 
		document.getElementById("imageWater").height="45";
		document.getElementById("imageWater").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="47"+g;
			 document.getElementById("Mvalue").innerHTML="47"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+167.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145+"px";
			
		}
	else if(conc==4)
		{
			upthrustval=0.031;
			document.getElementById("imageWaterblue").style.visibility='hidden';
           document.getElementById("imageWater").style.visibility='visible'; 
		   document.getElementById("imageWater").height="65";
		   document.getElementById("imageWater").style.top=354+"px";
             document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="49+g";
			 document.getElementById("Mvalue").innerHTML="49+g";
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+164.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+144+"px";
		   
		}
	else if(conc==5){
		    upthrustval=0.041;
			document.getElementById("imageWaterblue").style.visibility='hidden';
		  document.getElementById("imageWater").style.visibility='visible'; 
		  document.getElementById("imageWater").height="75";
		  document.getElementById("imageWater").style.top=346+"px";
            document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="52"+g;
			 document.getElementById("Mvalue").innerHTML="52"+g;
			document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+164+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
         }
	   }
	   else if(imgId=="image4"){
		if(conc==0)
	   {
		    upthrustval=0;
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="42"+g;
		 document.getElementById("Mvalue").innerHTML="42"+g;
		document.getElementById("imageSpring").style.top=13+"px";
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+170+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+147+"px";
		}
    if(conc==1)
	   {
		upthrustval=0.004;
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("topValue").style.visibility='visible';
		document.getElementById("topValue").innerHTML="43"+g;
		 document.getElementById("Mvalue").innerHTML="43"+g;
		document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageSpring").style.top=topPos01;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+146+"px";
		
		}
	else if(conc==2)
		{
			upthrustval=0.010;
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
			document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";
            document.getElementById("topValue").innerHTML="44"+g;
			 document.getElementById("Mvalue").innerHTML="44"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+169.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145.5+"px";
			
		}
	else if(conc==3)
		{
			upthrustval=0.020;
			document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("imageWater").style.visibility='visible'; 
		document.getElementById("imageWater").height="45";
		document.getElementById("imageWater").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="47"+g;
			 document.getElementById("Mvalue").innerHTML="47"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+167.7+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+145+"px";
			
		}
	else if(conc==4)
		{
			upthrustval=0.031;
			document.getElementById("imageWaterblue").style.visibility='hidden';
		   document.getElementById("imageWater").style.visibility='visible'; 
		   document.getElementById("imageWater").height="65";
		   document.getElementById("imageWater").style.top=354+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="49"+g;
			 document.getElementById("Mvalue").innerHTML="49"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+166+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+144+"px";
			
		}
	else if(conc==5){
		    upthrustval=0.041;
			document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("imageWater").style.visibility='visible'; 
		 document.getElementById("imageWater").height="75";
		 document.getElementById("imageWater").style.top=346+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="52"+g;
			 document.getElementById("Mvalue").innerHTML="52"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+166.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+143+"px";
			
		}
	   }
	 }
   }
   
    else if(solid=="Moon"){
	if(cmb=="Air"){
		document.getElementById("Mvalue").style.visibility='hidden'; 
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		if(conc==0)
	   {
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}
    if(conc==1)
	   {
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';
		document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=10+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+156.5+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141.5+"px";
		}
	else if(conc==2)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=18+"px";
		}
	else if(conc==3)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=22+"px";
		}
	else if(conc==4)
		{
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=25+"px";
		}
	else if(conc==5){
		    document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=33+"px";
		}
	}else if(cmb=="Tapwater"){
		if(imgId=="image3"){
		if(conc==0)
	   {
		    upthrustval=0;
		 document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="18"+g;
		  document.getElementById("Mvalue").innerHTML="18"+g;
		 document.getElementById("imageSpring").style.top=13+"px";
		document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}
    if(conc==1)
	   {
		    upthrustval=0.0016;
		 document.getElementById("imageWaterblue").style.visibility='hidden';
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='hidden';
		 document.getElementById("topValue").innerHTML="19"+g;
		  document.getElementById("Mvalue").innerHTML="19"+g;
		 document.getElementById("divConc").innerHTML= immersedTen;
		 document.getElementById("imageSpring").style.top=topPos0;
		 document.getElementsByTagName('canvas')[0].style.top=30+"px";
		 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157.3+"px";
		 document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		
		}
	else if(conc==2)
		{
			upthrustval=0.004;
			document.getElementById("topValue").style.visibility='visible';
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
            document.getElementById("imageWaterblue").style.visibility='hidden';
		    document.getElementById("topValue").innerHTML="20"+g;
			 document.getElementById("Mvalue").innerHTML="20"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141.5+"px";
		}
	else if(conc==3)
		{
			upthrustval=0.008;
			document.getElementById("topValue").style.visibility='visible';
		   document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";
		    document.getElementById("topValue").innerHTML="23"+g;
			 document.getElementById("Mvalue").innerHTML="23"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+156.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141+"px";
		}
	else if(conc==4)
		{
			upthrustval=0.012;
			document.getElementById("topValue").style.visibility='visible';
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";
		    document.getElementById("topValue").innerHTML="25"+g;
			 document.getElementById("Mvalue").innerHTML="25"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+155.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+140+"px";
		}
	else if(conc==5){
		   upthrustval=0.016;
		   document.getElementById("topValue").style.visibility='visible';
		   document.getElementById("imageWater").style.visibility='hidden';
		   document.getElementById("imageWaterblue").style.visibility='visible'; 
	       document.getElementById("imageWaterblue").height="68";
		   document.getElementById("imageWaterblue").style.top=365+"px";
		   document.getElementById("topValue").innerHTML="28"+g;
		    document.getElementById("Mvalue").innerHTML="28"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+153.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
			
		}
	  }if(imgId=="image4"){
		if(conc==0)
	   {
		    upthrustval=0;
			document.getElementById("imageWater").style.visibility='hidden'; 
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
		  document.getElementById("topValue").style.visibility='visible';
		  document.getElementById("topValue").innerHTML="18"+g;
		   document.getElementById("Mvalue").innerHTML="18"+g;
		 document.getElementById("imageSpring").style.top=13+"px";
		 document.getElementsByTagName('canvas')[0].style.top=1+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142.5+"px";
		}
    if(conc==1)
	   {
		upthrustval=0.0016;
		document.getElementById("imageWater").style.visibility='hidden'; 
		document.getElementById("imageWaterblue").style.visibility='hidden'; 
		 document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="19"+g;
		  document.getElementById("Mvalue").innerHTML="19"+g;
		 document.getElementById("divConc").innerHTML= immersedTen;
		document.getElementById("imageSpring").style.top=topPos01;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142.5+"px";
		
		}
	else if(conc==2)
		{
			upthrustval=0.004;
			document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="55"; //initializing the height
	        document.getElementById("imageWaterblue").style.top=378+"px";
           document.getElementById("imageWaterblue").style.visibility='hidden';
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="20"+g;
			 document.getElementById("Mvalue").innerHTML="20"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157.4+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141.5+"px";
		}
	else if(conc==3)
		{
			
			upthrustval=0.008;
		   document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible';
	        document.getElementById("imageWaterblue").height="59";
		    document.getElementById("imageWaterblue").style.top=369+"px";

			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="23"+g;
			 document.getElementById("Mvalue").innerHTML="23"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141+"px";
			
		}
	else if(conc==4)
		{
			upthrustval=0.012;
			 document.getElementById("imageWater").style.visibility='hidden';
			document.getElementById("imageWaterblue").style.visibility='visible'; 
	        document.getElementById("imageWaterblue").height="64";
		    document.getElementById("imageWaterblue").style.top=368+"px";

			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="25"+g;
			 document.getElementById("Mvalue").innerHTML="25"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+155.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+140+"px";
		}
	else if(conc==5){
		    upthrustval=0.016;
		 document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='visible'; 
	    document.getElementById("imageWaterblue").height="68";
		document.getElementById("imageWaterblue").style.top=365+"px";
           document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="28"+g;
			 document.getElementById("Mvalue").innerHTML="28"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=192.5+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+153.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+139+"px";

		}  
	  }
		
	}
	else if(cmb=="Saltywater"){
		if(imgId=="image3"){
		if(conc==0)
	   {
		    upthrustval=0;
			document.getElementById("imageWater").style.visibility='hidden'; 
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("topValue").style.visibility='visible';
			document.getElementById("topValue").innerHTML="18"+g;
			 document.getElementById("Mvalue").innerHTML="18"+g;
			document.getElementById("imageSpring").style.top=13+"px";
			document.getElementsByTagName('canvas')[0].style.top=1+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		}
    if(conc==1)
	   {
		upthrustval=0.0018;
		document.getElementById("imageWater").style.visibility='hidden';
		document.getElementById("imageWaterblue").style.visibility='hidden';  
		document.getElementById("topValue").style.visibility='visible';
	    document.getElementById("topValue").innerHTML="19"+g;
		 document.getElementById("Mvalue").innerHTML="19"+g;
		document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos0;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157.3+"px";
	    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142+"px";
		
		}
	else if(conc==2)
		{
			upthrustval=0.0044;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";
            document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="20"+g;
			 document.getElementById("Mvalue").innerHTML="20"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141.5+"px";
		}
	else if(conc==3)
		{
			upthrustval=0.0088;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
		document.getElementById("imageWater").style.visibility='visible'; 
		document.getElementById("imageWater").height="45";
		document.getElementById("imageWater").style.top=369+"px";
       document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="23"+g;
			 document.getElementById("Mvalue").innerHTML="23"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+156.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141+"px";
			
		}
	else if(conc==4)
		{
			upthrustval=0.0013;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='visible'; 
		   document.getElementById("imageWater").height="65";
		   document.getElementById("imageWater").style.top=354+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="25"+g;
			 document.getElementById("Mvalue").innerHTML="25"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+155.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+140+"px";
		}
	else if(conc==5){
		    upthrustval=0.018;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("imageWater").style.visibility='visible'; 
		 document.getElementById("imageWater").height="75";
		  document.getElementById("imageWater").style.top=346+"px";
            document.getElementById("topValue").innerHTML="28"+g;
			 document.getElementById("Mvalue").innerHTML="28"+g;
			document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+152+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+138+"px";
		}
	   }
	   else if(imgId=="image4"){
		if(conc==0)
	   {
		      upthrustval=0;
			  document.getElementById("imageWaterblue").style.visibility='hidden'; 
			  document.getElementById("imageWater").style.visibility='hidden'; 
			 document.getElementById("topValue").style.visibility='visible';
		     document.getElementById("topValue").innerHTML="18"+g;
			  document.getElementById("Mvalue").innerHTML="18"+g;
		     document.getElementById("imageSpring").style.top=13+"px";
		     document.getElementsByTagName('canvas')[0].style.top=1+"px";
			 document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
		     document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142.5+"px";
		}
    if(conc==1)
	   {
		upthrustval=0.0018;
		document.getElementById("imageWaterblue").style.visibility='hidden'; 
		document.getElementById("imageWater").style.visibility='hidden'; 
		document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="19"+g;
		  document.getElementById("Mvalue").innerHTML="19"+g;
		document.getElementById("divConc").innerHTML=immersedTen;
		document.getElementById("imageSpring").style.top=topPos01;
		document.getElementsByTagName('canvas')[0].style.top=30+"px";
		document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+158+"px";
		document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+142.5+"px";

		
		}
	else if(conc==2)
		{
			upthrustval=0.0044;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='visible';
	        document.getElementById("imageWater").height="35"; //initializing the height
	        document.getElementById("imageWater").style.top=378+"px";

			document.getElementById("topValue").style.visibility='visible';
		 document.getElementById("topValue").innerHTML="20"+g;
		  document.getElementById("Mvalue").innerHTML="20"+g;
			document.getElementById("divConc").innerHTML=immersedTwoFive;
			document.getElementById("imageSpring").style.top=topPos1;
			document.getElementsByTagName('canvas')[0].style.top=35+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157.4+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141.5+"px";
		}
	else if(conc==3)
		{
			upthrustval=0.0088;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
		document.getElementById("imageWater").style.visibility='visible'; 
		document.getElementById("imageWater").height="45";
		document.getElementById("imageWater").style.top=369+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="23"+g;
			 document.getElementById("Mvalue").innerHTML="23"+g;
			document.getElementById("divConc").innerHTML=immersedFiveFive;
			document.getElementById("imageSpring").style.top=topPos2;
			document.getElementsByTagName('canvas')[0].style.top=46+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+157+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+141+"px";
		}
	else if(conc==4)
		{
			upthrustval=0.0013;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
		   document.getElementById("imageWater").style.visibility='visible'; 
		   document.getElementById("imageWater").height="65";
		   document.getElementById("imageWater").style.top=355+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="25"+g;
			 document.getElementById("Mvalue").innerHTML="25"+g;
			document.getElementById("divConc").innerHTML=immersedSevenFive;
			document.getElementById("imageSpring").style.top=topPos3;
			document.getElementsByTagName('canvas')[0].style.top=51+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+155.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+140+"px";
		}
	else if(conc==5){
		    upthrustval=0.018;
			document.getElementById("imageWaterblue").style.visibility='hidden'; 
			document.getElementById("imageWater").style.visibility='visible'; 
		    document.getElementById("imageWater").height="75";
		    document.getElementById("imageWater").style.top=346+"px";
			document.getElementById("topValue").style.visibility='visible';
		    document.getElementById("topValue").innerHTML="28"+g;
			 document.getElementById("Mvalue").innerHTML="28"+g;
		    document.getElementById("divConc").innerHTML=immersedHundred;
			document.getElementById("imageSpring").style.top=topPos4;
			document.getElementsByTagName('canvas')[0].style.top=58+"px";
			document.getElementById("arrowimage1").style.top=document.getElementById("zoomimage").offsetTop+153.5+"px";
		    document.getElementById("imagearrow").style.top=document.getElementById("imageSpring").offsetTop+139+"px";
		}
	   }
	 }
	}
	
}

function Showtip(){
document.getElementById("Mvalue").style.visibility='visible'; 	
}
function hidetip(){
document.getElementById("Mvalue").style.visibility='hidden'; 	
}


