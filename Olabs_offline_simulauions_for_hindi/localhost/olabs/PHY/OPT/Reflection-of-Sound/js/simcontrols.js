/*
author:anishasl
Date:21/12/2013
file name:simcontrols.js
*/
// Variable declaration
var labelArray=[];	
var gt;
var contentArray;
var sounds,fork;
var forkSound=document.getElementById("bgmusic");
var hitLeft=false;
var showwave=1;
var Twowave=0;
var turningFlag=0;
var offset1;
var count=0;
var count1=0;
var rotatewave=-6;
var rotatewaveRight=-6;
var wave1Flag,wave2Flag=0;
var sin1top=-10;
var sin2top=-200;
var degreeLeft=0;
var xPos2=832;

var topleftDotted=-6;
var toprightDotted=-6;

// canvas for background image
var bgCanvas = document.getElementById('bgCanvas');
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
var bgCanvasimg = new Image;
bgCanvasimg.onload = function(){ 
bgCanvasctx.drawImage(bgCanvasimg,0,-10);
};
bgCanvasimg.src=simPath+'images/BG1.gif';


// function called on loading..
window.onload = function init(){

document.getElementById("expName").innerHTML=gt.gettext("Laws of Reflection of Sound");

labelArray=[gt.gettext("Show Protractor"),gt.gettext("Hide Tube"),gt.gettext("Hide Waves"),gt.gettext("Hide Protractor"),gt.gettext("Show Tube"),gt.gettext("Show Waves")];

contentArray=[gt.gettext('Drag the tubes to</br>adjust the angle.'),gt.gettext('Drag the turning fork</br>towards the end of the tube.'),gt.gettext('Click here to</br>show/hide the protractor.'),gt.gettext('Click here to </br>show/hide the tube'),gt.gettext('Click here to</br>show/hide the wave.')];

c=document.getElementById("myCanvas");

$(document).ready(function() {

	/*$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	*/
	
	$('#ProtractorBtn').attr('value',labelArray[0]);
	$('#tubeBtn').attr('value',labelArray[1]);
	$('#waveBtn').attr('value',labelArray[2]);
	
	document.getElementById("sineWave1").style.visibility='hidden';
	document.getElementById("sineWave2").style.visibility='hidden';
	sounds = setInterval(makeSound,150);//function for sound,icon and wave
	//forkSound.play();
});	
}

//function to show/hide protractor
function showProtractor()
{
	if($('#ProtractorBtn').attr("value")==labelArray[0])
	{
		$('#ProtractorBtn').attr('value',labelArray[3]);
		$("#ProtractorDiv,#divForClose").css({'visibility':'visible'});
	}//show 
	else if($('#ProtractorBtn').attr("value")==labelArray[3])
	{
		$('#ProtractorBtn').attr('value',labelArray[0]);
		$("#ProtractorDiv,#divForClose").css({'visibility':'hidden'});
	}//hide
}

//function to show/hide the tube
function showTube()
{
	if($('#tubeBtn').attr("value")==labelArray[1])
	{
		$('#tubeBtn').attr('value',labelArray[4]);
		$("#LeftTube,#RightTube").css({'visibility':'hidden'});
	}//hide
	else if($('#tubeBtn').attr("value")==labelArray[4])
	{
		$('#tubeBtn').attr('value',labelArray[1]);
		$("#LeftTube,#RightTube").css({'visibility':'visible'});
	}//show
}

//function to show/hide waves
function showWave()
{
	if($('#waveBtn').attr("value")==labelArray[2])
	{
		if($('#sineWave2').css('visibility')=='visible')
		{
			document.getElementById("sineWave2").style.visibility='hidden';
		}
		if($('#sineWave1').css('visibility')=='visible')
		{
			document.getElementById("sineWave1").style.visibility='hidden';
		}
		$('#waveBtn').attr('value',labelArray[5]);
		showwave=0
	}//hide
	else if($('#waveBtn').attr("value")==labelArray[5])
	{
		showwave=1
		$('#waveBtn').attr('value',labelArray[2]);
		if(hitLeft)
		{
			document.getElementById("sineWave1").style.visibility='visible';
			if(Math.abs(Math.round(degree))==Math.abs(Math.round(degree1)))
			{
				document.getElementById("sineWave1").style.visibility='visible';
				document.getElementById("sineWave2").style.visibility='visible';
			}
		}
		if((hitLeft)&&(Twowave))
		{
			document.getElementById("sineWave1").style.visibility='visible';
			document.getElementById("sineWave2").style.visibility='visible';
		}
		
	}//show
}

var vol=0;
var volRight=0;
//function for detect left tube hit with turning fork
function hitforLeft()
{
	var x1 = Math.abs($("#TurningFork" ).offset().left);
	var y1 = Math.abs($("#TurningFork" ).offset().top);
	var h1 = Math.abs($("#TurningFork" ).outerHeight(true));
	var w1 = Math.abs($("#TurningFork" ).outerWidth(true));
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	
	var x2 =Math.abs( $("#sample1" ).offset().left);
	var y2 = Math.abs($("#sample1" ).offset().top);
	var h2 = Math.abs($("#sample1" ).outerHeight(true));
	var w2 = Math.abs($("#sample1" ).outerWidth(true));
	var b2 = y2 + h2;
	var r2 = x2 + w2;
	
	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) 
	{//not hit
		hitLeft=false;
		document.getElementById("sineWave1").style.visibility='hidden';
		document.getElementById("sineWave2").style.visibility='hidden';
		wave1Flag=0;
		forkSound.pause();
		vol=-0.2;
	}
	else if(!(b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2))
	{//tube touches the fork/hit occurs
		hitLeft=true;
		if(showwave)
		{
			document.getElementById("sineWave1").style.visibility='visible';
			if(rotatewave<=6)
			{
				rotatewave++;//positive rotation
			}
			if(rotatewave>6)
			{
				rotatewave=-6;//anticlock wise
			}
			vol=Math.abs((1-(Math.abs(rotatewave)*2)/10));
			vol=vol.toFixed(1);
			var rotateCSS5 = 'rotate('+rotatewave+'deg)';			
			$("#sineWave1").css({ '-moz-transform-origin':'50% 0%',
			'-webkit-transform-origin': '50% 0%',
			'-moz-transform': rotateCSS5,
			'-webkit-transform': rotateCSS5
			});//rotate the wave on turning fork move
			if(Math.abs(Math.round(degree))==Math.abs(Math.round(degree1)))
			{
				document.getElementById("sineWave2").style.visibility='visible';	
				var rotateCSS5 = 'rotate('+rotatewave+'deg)';			
				$("#sineWave2").css({ '-moz-transform-origin':'50% 0%',
				'-webkit-transform-origin': '50% 0%',
				'-moz-transform': rotateCSS5,
				'-webkit-transform': rotateCSS5});//rotate the wave 
				forkSound.play();
				forkSound.volume=vol;
			}
			else
			{
				document.getElementById("sineWave2").style.visibility='hidden';
				forkSound.pause();
			}
		}
		turningFlag=1;
		wave1Flag=1;
	}
}

//dragging the turning fork
$("#TurningFork" ).draggable({ disabled: false,
   		 preventCollision: true,
    	containment: "#moveInHere",//drag inside the div only
		drag:function(event,ui){
			hitforLeft();//call for hit detection
		}
	});

//function for closing the protractor
function closeProtractor()
{
	$("#ProtractorDiv,#divForClose").css({'visibility':'hidden'});
	$('#ProtractorBtn').attr('value',labelArray[0]);
}

//make turning fork sound
function makeSound()
{
	/*start sound icon*/
	if($('.sound1').css('display') == "block"){          
		$('.sound1,.sound3,.sound4').hide();
		$('.sound2').show();         
	}else if($('.sound2').css('display') == "block"){          
		$('.sound1,.sound2,.sound4').hide();
		$('.sound3').show();         
	}else if($('.sound3').css('display') == "block"){          
		$('.sound2,.sound3,.sound1').hide();
		$('.sound4').show(); 
	}
	else if($('.sound4').css('display') == "block"){          
		$('.sound2,.sound3,.sound4').hide();
		$('.sound1').show(); 
	}
	/*end sound icon*/
	
	/*start turning fork icon*/ 
	if($('.TurningFork6').css('display') == "block"){          
		$('.TurningFork6,.TurningFork3,.TurningFork4,.TurningFork5').hide();
		$('.TurningFork2').show();         
	}else if($('.TurningFork2').css('display') == "block"){          
		$('.TurningFork6,.TurningFork2,.TurningFork4,.TurningFork5').hide();
		$('.TurningFork3').show();         
	}else if($('.TurningFork3').css('display') == "block"){          
		$('.TurningFork2,.TurningFork3,.TurningFork6,.TurningFork5').hide();
		$('.TurningFork4').show(); 
	}
	else if($('.TurningFork4').css('display') == "block"){          
		$('.TurningFork2,.TurningFork3,.TurningFork4,.TurningFork6').hide();
		$('.TurningFork5').show(); 
	}
	else if($('.TurningFork5').css('display') == "block"){          
		$('.TurningFork2,.TurningFork3,.TurningFork4,.TurningFork5').hide();
		$('.TurningFork6').show(); 
	}
	/*end turning fork icon*/
	/*if(sin1top>-185)
	{
		count++;
		sin1top=sin1top-count;
	}
	else if(sin1top<=-185)
	{
		sin1top=-10;
		count=0
	}
	$("#sineWaveimg1").css({ top:sin1top+"px"});*/
if ( $.browser.mozilla)
{
	if((sin2top>=-200)&&(sin2top<=-13))
	{
		count1++;
	sin2top=sin2top+count1;
	$("#sineWaveimg2").css({ top:sin2top+"px"});
	}
	else
	{
		sin2top=-200;
		count1=0;
	}
	$("#sineWaveimg2").css({ top:sin2top+"px"});
}
}

/*for dragging left tube*/
var s_xprev,s_yprev;
var dragging = false,target_wp,o_x, o_y, h_x, h_y, last_angle=0;		
var draggingRight = false,target_wpRight,o_xRight, o_yRight, h_xRight, h_yRight, last_angleRight=0;	
var newFlag=0;
var newFlagRight=0;
var degree=0;
var degree1=0;
var topleft1=0;
var leftTop=$("#LeftdottedLine").position().top;
var rightTop=$("#RightdottedLine").position().top;
var LeftFlag=0;
var rightFlag=0;
applyRotation1();//for finding left tube degree
/*start finding left tube degree*/
function applyRotation1() {
	$('#leftTubeDiv').draggable({	
	opacity: 0.01,
	helper: 'clone',
	drag: function (event, ui) {
		LeftFlag=1;
		if(newFlag==0)
		{
			h_x =event.pageX,
			h_y = event.pageY;// clicked point
			newFlag=1;
		}	   
		var s_x =event.pageX,
		s_y = event.pageY;//client point.
		target_wp = $(event.target).closest('#leftTubeDiv');
		if (!target_wp.data("origin")) target_wp.data("origin", {
			left: target_wp.offset().left,
			top: target_wp.offset().top
		});
		o_x = target_wp.data("origin").left;
		o_y = target_wp.data("origin").top; // origin point
		last_angle = target_wp.data("last_angle") || 0;		//angle for rotation
		var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
		s_rad -= Math.atan2((h_y - o_y), h_x - o_x); // handle to origin
		s_rad += last_angle; // relative to the last one
		degree = (s_rad * (360 / (2 * Math.PI)));
		if((Number(degree)>=0) && (Number(degree)<=90))
		{//check left tube turns till the reflector reaches
			var rotateCSS1 = 'rotate(' +degree + 'deg)';			
			$(this).css({ '-moz-transform-origin':'50% 0%',
			'-webkit-transform-origin': '50% 0%',
			'-moz-transform': rotateCSS1,
			'-webkit-transform': rotateCSS1});//rotate the wave
			s_xprev=s_x;
			s_yprev=s_y;
			if(degree>5)
			{
				$("#sample1").css({'display':'block'});
			}
			else
			{
				$("#sample1").css({'display':'none'});
			}
			if(Number(degree)<=45)
			{
				topleftDotted=leftTop-(degree*0.3);
			}
			else
			{
				topleftDotted=leftTop+(degree*0.05)-12;
			}
			$("#LeftdottedLine").css({top:topleftDotted+'px'});
			hitforLeft();//call collision detection function
		}
		if(Math.abs(Math.round(degree))==Math.abs(Math.round(degree1)))
		{//if degree same
			var rotateCSS5 = 'rotate('+rotatewave+'deg)';			
			$("#sineWave2").css({ '-moz-transform-origin':'50% 0%',
			'-webkit-transform-origin': '50% 0%',
			'-moz-transform': rotateCSS5,
			'-webkit-transform': rotateCSS5
			});//rotate the wave 
		}
	
	},//end if
		stop:function(event,ui)
		{
			var s_x = s_xprev,
			s_y =s_yprev;
			var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
			s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
			s_rad += last_angle;
			target_wp.data("last_angle", s_rad);//store the angle for future rotation
			newFlag=0;
			LeftFlag=0;
		}
	})//end drag
}//end fn
/*end finding left tube degree*/

/*start finding right tube degree*/
//dragging right tube
var ele = $('#rightTubeDiv');
var degreeRight=0;
var s_xprevRight,s_yprevRight;//for finding the previous client value
applyRotation();//rotation of the right tube
var flag1=0;
function applyRotation() {//rotate right tube
	$('#rightTubeDiv').draggable({	//dragging the right tube
	opacity: 0.01,
	helper: 'clone',
	drag: function (event, ui) {
		rightFlag=1;
		if(newFlagRight==0)
		{//get initial click point
			h_xRight =event.pageX,
			h_yRight = event.pageY;// clicked point
			newFlagRight=1;
		}
		var s_xRight =event.pageX,
		s_yRight = event.pageY;//client point.
		target_wpRight = $(event.target).closest('#rightTubeDiv');
		if (!target_wpRight.data("origin")) target_wpRight.data("origin", {
			left: target_wpRight.offset().left,
			top: target_wpRight.offset().top
		});//set the target orinin points
		o_xRight = target_wpRight.data("origin").left;
		o_yRight = target_wpRight.data("origin").top; // origin point
		last_angleRight = target_wpRight.data("last_angleRight") || 0;	//angle for rotation
		var s_radRight = Math.atan2(s_yRight - o_yRight, s_xRight - o_xRight); // current to origin
		s_radRight -= Math.atan2((h_yRight - o_yRight), h_xRight - o_xRight); // handle to origin
		s_radRight += last_angleRight; // relative to the last one
		degree1 = (s_radRight * (360 / (2 * Math.PI)));
		 //degree for rotaion		
		if((Number(degree1)>=-90) && (Number(degree1)<=0))
		{//check right tube turns till the reflector reaches
			var rotateCSS1 = 'rotate(' +degree1 + 'deg)';			
			$(this).css({ '-moz-transform-origin':'50% 0%',
			'-webkit-transform-origin': '50% 0%',
			'-moz-transform': rotateCSS1,
			'-webkit-transform': rotateCSS1});//rotate the wave
			s_xprevRight=s_xRight;//for future rotation
			s_yprevRight=s_yRight;
		}
		/*~~~~~~~~~~~~~~~~dotted lines movement~~~*/
		
			if((degree1>=-45)&&(degree1<0))
			{
				toprightDotted=rightTop-(Math.abs(degree1)*0.3);
			}
			else
			{
				//toprightDotted=rightTop+(degree1*0.05)-12;
			}
			$("#RightdottedLine").css({top:toprightDotted+'px'});//right dotted line top
		/*~~~~~~~~~~~~wave occurence~~~~~~~~~~~~~~~~~*/
		if(hitLeft)//if turning fork near to left tube
		{
		if(Math.abs(Math.round(degree))==Math.abs(Math.round(degree1)))
		{
			if(!LeftFlag)
			{//if right tube moves
				if(rotatewaveRight<=6)
				{
					rotatewaveRight++;//positive rotation
				}
				if(rotatewaveRight>6)
				{
					rotatewaveRight=-6;//anticlock wise
				}
				volRight=Math.abs((1-(Math.abs(rotatewaveRight)*2)/10));
				volRight=volRight.toFixed(1);//volume for the sound
				var rotateCSSRight = 'rotate('+rotatewaveRight+'deg)';			
				$("#sineWave2").css({ '-moz-transform-origin':'50% 0%',
				'-webkit-transform-origin': '50% 0%',
				'-moz-transform': rotateCSSRight,
				'-webkit-transform': rotateCSSRight
				});//rotate the wave 
			}
			if(Math.abs(Math.round(degree1))==0)
			{//if not reflects
				document.getElementById("sineWave2").style.visibility='hidden';
				forkSound.pause();
			}
			else
			{
				document.getElementById("sineWave2").style.visibility='visible';
				forkSound.play();
				if(LeftFlag)
				{
					forkSound.volume=vol;
				}
				if(rightFlag)
				{
					forkSound.volume=volRight;
				}
			}	
			if(LeftFlag)
			{//if left tube moves
				var rotateCSS6 = 'rotate('+rotatewave+'deg)';			
				$("#sineWave2").css({ '-moz-transform-origin':'50% 0%',
				'-webkit-transform-origin': '50% 0%',
				'-moz-transform': rotateCSS6,
				'-webkit-transform': rotateCSS6
				});	
			}
		}
		else
		{
			document.getElementById("sineWave2").style.visibility='hidden';
			forkSound.pause();
		}
	}//end hit if
},//end else
		stop:function(event,ui)
		{//drag stops
		var s_xRight = s_xprevRight,
		s_yRight =s_yprevRight;//restore the previous variables
		var s_radRight = Math.atan2(s_yRight - o_yRight, s_xRight - o_xRight);//current to origin
		s_radRight -= Math.atan2(h_yRight - o_yRight, h_xRight - o_xRight); // handle to origin
		s_radRight += last_angleRight;
		target_wpRight.data("last_angleRight", s_radRight);//store the angle for future rotation
		newFlagRight=0;
		rightFlag=0;
		}
	});//end drag
}//end fn
/*end finding right tube degree*/