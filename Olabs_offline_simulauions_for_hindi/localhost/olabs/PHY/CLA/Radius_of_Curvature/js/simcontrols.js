var RightIntervalId;
var LeftIntervalId;
var labArray;

var stem_increment = 1; // Distance to move in 500ms
var isRRotating = false;
var isLRotating = false;
var isRotating = false;

var scaleReading;
var scaleReadingPX;
var discReading;
var discReadingPX;

var glass = {
"expSet":[
{
"s1":{"s":2,"d":87,"t":-44,"c":47},             //scaleReading,discReading,scaleReadingPX,discReadingPX  for glass plate
"s2":{"s":0,"d":81,"t":-34,"c":68,"r":2.06}
},

{
"s1":{"s":2,"d":67,"t":-44,"c":-241},
"s2":{"s":0,"d":18,"t":-34,"c":-65,"r":2.49}
},

{
"s1":{"s":3,"d":3,"t":-49,"c":-11},
"s2":{"s":0,"d":2,"t":-34,"c":-7,"r":3.01}
},

{
"s1":{"s":3,"d":54,"t":-49,"c":-194},
"s2":{"s":0,"d":3,"t":-34,"c":-11,"r":3.51}
},

{
"s1":{"s":3,"d":98,"t":-49,"c":8},
"s2":{"s":0,"d":1,"t":-34,"c":-3,"r":3.97}
}]
};

var sphere = {									//scaleReading,discReading,scaleReadingPX,discReadingPX  for glass plate
"expSet":[
{
"s1":{"s":2,"d":96,"t":-44,"c":14},
"s2":{"s":0,"d":41,"t":-34,"c":-147,"r":105.85}
},

{
"s1":{"s":2,"d":13,"t":-44,"c":-47},
"s2":{"s":0,"d":93,"t":-34,"c":25,"r":122.31}
},

{
"s1":{"s":3,"d":67,"t":-49,"c":119},
"s2":{"s":0,"d":57,"t":-34,"c":155,"r":87.57}
},

{
"s1":{"s":3,"d":39,"t":-49,"c":220},
"s2":{"s":0,"d":79,"t":-34,"c":76,"r":75.87}
},

{
"s1":{"s":3,"d":1,"t":-49,"c":-4},
"s2":{"s":0,"d":81,"t":-34,"c":68,"r":84.93}
}]
};
var holdSet;

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var clickVar=0;

window.onload = function init(){
	
		document.getElementById("expName").innerHTML=gt.gettext("Spherometer");
		$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
		//$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
		//$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
		//$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));
		labArray=[gt.gettext("Select/Remove the object:"),gt.gettext("Enter the answer in mm:"),gt.gettext("Spherical surface"),gt.gettext("Glass strip"),gt.gettext("Result"),gt.gettext("Distance between two legs of spherometer = 40 mm"),gt.gettext("Least Count of spherometer = 0.01 mm."),gt.gettext("Check"),gt.gettext("Reset"),gt.gettext("Correct"),gt.gettext("Wrong"),gt.gettext("Show Result")];		
	    $("#label1").html(labArray[0]);
		$("#label2").html(labArray[1]);
		$("#labelg1").html(labArray[2]);
		$("#labelg2").html(labArray[3]);
		$("#result").html(labArray[4]);
		$("#helpL1").html(labArray[5]);
		$("#helpL2").html(labArray[6]);
		$("#checkExp").val(labArray[7]);
        $("#resetExp").val(labArray[8]);				   
		$("#resultSpan").val(labArray[9]);				  
		$("#resultSpan").val(labArray[10]);	
		$("#resultLabel").html(labArray[11]);				  	
}

var functionGlassImage1 = function(){//glass sphere first click									
		if(clickVar==0){
			holdSet = sphere.expSet[(randomIntFromInterval(1,5) - 1)];
			clickVar=1
			scaleReading = holdSet.s1.s;
			discReading = holdSet.s1.d;
			scaleReadingPX = holdSet.s1.t;
			discReadingPX = holdSet.s1.c;
			$("#smallGlass").css("visibility","visible");
			$("#smallGlass2").css("visibility","hidden");
			$("#measureDevice").css({left:'0px',top:"-5px"});
			$("#smallGlass").css({'max-height' : (100 + (Math.random() * 50))});
			$("#galssImg2").unbind("click");
		}
		else{	//glass sphere second click															
			isRRotating = false;
			clickVar=0
			scaleReading = holdSet.s2.s;
			discReading = holdSet.s2.d;
			scaleReadingPX = holdSet.s2.t;
			discReadingPX = holdSet.s2.c;
            $("#textBx").removeAttr("disabled","disabled");
			$("#checkExp").removeAttr("disabled","disabled");
			$("#showAns").removeAttr("disabled","disabled");
			$("#smallGlass").css("visibility","hidden");
			$("#measureDevice").css({left:'0px',top:"0px"});
		    $("#shadow").css("visibility","hidden");
			$("#galssImg2").bind("click",functionGlassImage2);
		}
	};		
		
var functionGlassImage2 = function(){// glass plate first click
		if(clickVar==0){
			holdSet = glass.expSet[(randomIntFromInterval(1,5) - 1)];
			clickVar=1
			scaleReading = holdSet.s1.s;
			discReading = holdSet.s1.d;
			scaleReadingPX = holdSet.s1.t;
			discReadingPX = holdSet.s1.c;
			$("#smallGlass2").css("visibility","visible");
			$("#smallGlass").css("visibility","hidden");
			$("#measureDevice").css({left:'0px',top:"0px"});
			$("#smallGlass2").css({'max-height' : (50 + (Math.random() * 5))});
			$("#galssImg1").unbind("click");
		}
		else{//glass plate second click
			clickVar=0															     
			isRRotating = false;
			clickVar=0
			scaleReading = holdSet.s2.s;
			discReading = holdSet.s2.d;
			scaleReadingPX = holdSet.s2.t;
			discReadingPX = holdSet.s2.c;
			$("#smallGlass2").css("visibility","hidden");
			$("#textBx").removeAttr("disabled","disabled");
			$("#checkExp").removeAttr("disabled","disabled");
			$("#showAns").removeAttr("disabled","disabled");
			$("#shadow").css("visibility","hidden");
			$("#galssImg1").bind("click",functionGlassImage1);	
		}
	};		
		
$(document).ready(function(){
  		$("#textBx").keypress(function(key) {										 //alphabets restricted in the text box.
			if((key.charCode >45 && key.charCode <= 57)||(key.charCode==0) ){	
				keyFlag=true;
				return true;
			}
			else{
				keyFlag=false;
				return false;
			}
		});		
																	
   		$("#textBx").attr("disabled","disabled");
		$("#galssImg1").bind("click",functionGlassImage1);	
		$("#galssImg2").bind("click",functionGlassImage2);
		
		// arrow click function (left arrow)
		
		$("#topArrow1").bind("mousedown",function(){	
			LeftIntervalId = setInterval(rotateLeft,50);	
        	document.getElementById("rotaionAnime").innerHTML="";
			$("#shadow").css("visibility","hidden");
        	$("#shadow2").css("visibility","hidden");	   	
	    	var stage;
			stage = new swiffy.Stage(document.getElementById('rotaionAnime'),rotateobject2);
			stage.start();
			}).bind("mouseup",function(){
					clearInterval(LeftIntervalId);
					document.getElementById("rotaionAnime").innerHTML="";
				});
	
		$("#topArrow1").mouseout(function(){
			clearInterval(LeftIntervalId);
			document.getElementById("rotaionAnime").innerHTML="";
		});
	
		// arrow click function (right  arrow)

		$("#topArrow2").bind("mousedown",function(){
			RightIntervalId = setInterval(rotateRight,60);
			document.getElementById("rotaionAnime").innerHTML="";
	        var stage;
			stage = new swiffy.Stage(document.getElementById('rotaionAnime'),rotateobject);
			stage.start();	
		}).bind("mouseup",function(){
				clearInterval(RightIntervalId);
				document.getElementById("rotaionAnime").innerHTML="";
			});
	
		$("#topArrow2").mouseout(function(){
			clearInterval(RightIntervalId);
			document.getElementById("rotaionAnime").innerHTML="";
		});
	
		// tablet function -touch start and touch end
	
		var arrow1 = document.getElementById("topArrow1");
		arrow1.addEventListener('touchstart',function(event) {
	            document.getElementById("rotaionAnime").innerHTML="";		
	   			var stage;
				stage = new swiffy.Stage(document.getElementById('rotaionAnime'),rotateobject2);
				stage.start();
				rotateLeft();
		},false);
		arrow1.addEventListener('touchmove',function(event) {},false);
		arrow1.addEventListener('touchend',function(event) {},false);
		var arrow2 = document.getElementById("topArrow2");
		arrow2.addEventListener('touchstart',function(event) {
	            document.getElementById("rotaionAnime").innerHTML="";		
	    		var stage;
				stage = new swiffy.Stage(document.getElementById('rotaionAnime'),rotateobject);
				stage.start();
				rotateRight();
		},false);
		arrow2.addEventListener('touchmove',function(event) {},false);
		arrow2.addEventListener('touchend',function(event) {},false);
	
		//check button and text box (answer check)
    	
		$("#checkExp").click(function () {                                           
			if(( $("#textBx").val() == holdSet.s2.r )){
				$("#resultSpan").html(labArray[9]);
				$("#textBx").attr("disabled","disabled");
			 	$('#resultImage').attr('src',simPath+"images/tickicon.png");
			}
			else{
				$("#resultSpan").html(labArray[10]);
				$('#resultImage').attr('src',simPath+"images/wrongicon.png");
			}
		});
	
		 $("#showAns").click(function () { 
	 		$("#answerLabel").html(gt.gettext("Radius of curvature,R=")+'<b>'+holdSet.s2.r+'</b>' +"mm").toggle(this.checked);
		});
  });

var rotateRight = function(){  //down rotation part full or right rotation defining                                                  
	var posSplit = ($("#screw_stem").css("background-position")).split(" ");
	var x = parseInt((posSplit[1].replace("px","")));
	var topX = parseFloat($("#movablePart").position().top);
	var incr = Math.abs(topX+= stem_increment);
	if(incr <= Math.abs(scaleReadingPX)){
	    var stage;
		stage = new swiffy.Stage(document.getElementById('rotaionAnime'),rotateobject);
		stage.start();
		document.getElementById("rotaionAnime").innerHTML="";
		clearInterval(RightIntervalId);
		$("#movablePart").css({"top":(scaleReadingPX) + "px"});
		$('#rotatonImg').css("-webkit-transform","rotate("+(discReadingPX)+"deg)");
		$('#rotatonImg').css("-moz-transform","rotate("+(discReadingPX)+"deg)");
		$('#rotatonImg').css("-ms-transform","rotate("+(discReadingPX)+"deg)");
		$('#rotatonImg').css("-o-transform","rotate("+(discReadingPX)+"deg)");
		$('#rotatonImg').css("transform","rotate("+(discReadingPX)+"deg)");
		$("#shadow").css("visibility","visible");
	}
	else if(incr >= 34){	
		var pos_new = "0px " + (--x)+ "px"
		$("#screw_stem").css({"background-position": pos_new});
		$("#movablePart").css({"top":(topX) + "px"});
		angle1 = parseInt(getRotationDegrees($('#rotatonImg')));
		angle1=angle1+90;
		$('#rotatonImg').css("-webkit-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-moz-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-ms-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-o-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("transform","rotate("+(angle1)+"deg)");
	}
	if(incr <= 34){
		document.getElementById("rotaionAnime").innerHTML="";
		$("#shadow2").css({"visibility":"visible"});
		$("#shadow").css("visibility","hidden");
		$("#galssImg2").unbind("click");
        $("#galssImg1").unbind("click");
	}	
}

var rotateLeft = function(){                                                 //up rotation part or left rotation defining
	var posSplit = ($("#screw_stem").css("background-position")).split(" ");
	var x = parseInt((posSplit[1].replace("px","")));
	var incr = Math.abs(topX+= stem_increment);
	var topX = parseFloat($("#movablePart").position().top);
	if(Math.abs(topX-= stem_increment) <= 84){	
		if((Math.abs(Math.ceil(topX)) == 34) || Math.abs((Math.floor(topX)) == 34)){
			$("#galssImg2").unbind().bind('click',functionGlassImage2);
			$("#galssImg1").unbind().bind('click',functionGlassImage1);
		}
		var pos_new = "0px " + (--x)+ "px"
		$("#screw_stem").css({"background-position": pos_new});
		$("#movablePart").css({"top":(topX) + "px"});
		angle1 = parseInt(getRotationDegrees($('#rotatonImg')));
		angle1=angle1-20;
		$('#rotatonImg').css("-webkit-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-moz-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-ms-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("-o-transform","rotate("+(angle1)+"deg)");
		$('#rotatonImg').css("transform","rotate("+(angle1)+"deg)");
	}
	else{
		document.getElementById("rotaionAnime").innerHTML="";
	}
}
// zoom box rotation
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } 
	else {
		var angle = 0; 
	}
    return (angle < 0) ? angle +=360 : angle;
}

function reloadPage(){
	location.reload();
}

