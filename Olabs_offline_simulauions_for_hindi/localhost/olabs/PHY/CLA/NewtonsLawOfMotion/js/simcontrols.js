// Animation complete duration in seconds. To be identified and set by calcTime()
var animTime; // Default time
var plot1,plot2;
var distTimePoints = []; 
var gCount = 0;
var m1= 0,m2= 0,s= 0,g= 0,t= 0;
var hStringWidth=0,vStringHeight=0,hookTop=200,myStopTimer,initTime;
var xTime=0,expStatus = true;
var envOptions;
var labArray;
var gvalArray =[9.8,10.67,25.95,1.6]
var t1=0,t2=0;
var increTime;
var cartSpeed;

	//loading the page
	window.onload = function init(){
			document.getElementById("expName").innerHTML=gt.gettext("Verification of Newton's Second Law");
			/*$('#olabmenuBar li:first-child a').html(gt.gettext("SAVE"));
			$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
			$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
			$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));*/
			envOptions=[gt.gettext("Earth (g=9.8 m/s&#178;)"),gt.gettext("Uranus (g=10.67 m/s&#178;)"),gt.gettext("Jupitar (g=25.95 m/s&#178;)"),gt.gettext("Moon (g=1.6 m/s&#178;)")];
			labArray=[gt.gettext("Select the environment:"),gt.gettext("Mass of cart m1 (g) :"),gt.gettext("Vertical Mass m2 (g) :"),gt.gettext("Distance travelled (cm) :"),gt.gettext("Distance-Time"),gt.gettext("m:s:ms"),gt.gettext("T(s)"),gt.gettext("D(m)"),gt.gettext("Start"),gt.gettext("Reset")];		
			distTimePoints.push([0,0]);                         
			      // graph plotting taking values
			renderGraph();       
			$("#label1").html(labArray[0]);
			$("#label2").html(labArray[1]);
			$("#label3").html(labArray[2]);
			$("#label4").html(labArray[3]);
			$("#label5").html(labArray[5]);
			$("#distanceTag").html(labArray[4]);
			$("#runExp").val(labArray[8]);
			$("#resetExp").val(labArray[9]);
			for(var i=0; i<envOptions.length;i++ ){
			var newOption = document.createElement("option");
			newOption.value=gvalArray[i];
			newOption.innerHTML = envOptions[i];
			$("#gravity").append(newOption);
			}
		}
$(document).ready(function(){
		hookHeight=200;
		show();
		$("#distMoveD").html((parseInt($("#distMove").val())+200)+'cm');
		$("#cartMassV").html((parseInt($("#cartMass").val())*50)+'g');
		$("#vertMassV").html((parseInt($("#vertMass").val())*50)+'g');
		$(window).focus(function() {
		if(xTime && !isNaN(initTime) && expStatus){	
			initTime = (new Date()).getTime() - xTime;//get initial time			
			startTimer();
		}
	});

$(window).blur(function() {
	//clearInterval(myStopTimer);
});
	
	$("#distMove").bind("change",function(){//moving the distance slider
		var a = 32 +(parseInt($(this).val()))/6 +'%';
		console.log(a);
		$( "#woodblock" ).css({
		left: 32 + (parseInt($(this).val()))/6.3 +'%'
		//left: parseInt($(this).data("startpos")) + (parseInt($(this).val()) - 40)
	});

	

	woodxVal=$("#woodblock").position().left;
		$("#distMoveD").html((parseInt($("#distMove").val())+200)+'cm');//label
	});
	
	
	$("#vertMass").bind("change",function(){ //add/remove the vertical mass          
		$( "#hookWeight" ).css({
			height: parseInt(($(this).data("initwt"))) + (parseInt($(this).val())* 3)
		});
		$("#vertMassV").html((parseInt($("#vertMass").val())*50)+'g');	
	});
	
	
	$("#cartMass").bind("change",function(){
			$("#stone").html("");
			for(i=0;i<$(this).val();i++){
				$("#stone").append($("<img>").attr("src",simPath+"images/stone.png"));
			}	//adding stones in the cart	
			$("#cartMassV").html((parseInt($("#cartMass").val())*50)+'g');
	    });
	$("#runExp").bind("click",function(){ //click on the start button                      
		$("#runExp").attr("disabled","disabled");
		calcTime();//calculations
		initTime = (new Date()).getTime();//initial time		
		startTimer();//start function
		$("#vertMass").attr("disabled","disabled");
		$("#cartMass").attr("disabled","disabled");
		$("#distMove").attr("disabled","disabled");
		
	});
	$("#resetExp").bind("click",function(){ 
										 resetExp();
										 });
});
function renderGraph() { 
           // graph plotting function starting
    if (plot1) {
        plot1.destroy();
    }
    plot1 = $.jqplot('chart3', [distTimePoints], 
    { 
		seriesColors:["#032E80"],
		/*title:'Distance-Time', */
		axes: {
			xaxis: {
				label: labArray[6],
				min: 0,// minimum numerical value of the axis.  Determined automatically.
				max: 9,
				numberTicks: 10
			},
				yaxis: {
				label: labArray[7],
				min: 0,      // minimum numerical value of the axis.  Determined automatically.
				max: 6,
				numberTicks: 7
			}
		},
	  	  
		// Set default options on all series, turn on smoothing.
		seriesDefaults: {
			rendererOptions: {
			smooth: true
			}
		},
		// for each series.
		series:[ 
			{
				// Change our line width and use a diamond shaped marker.
				lineWidth:2,
				markerOptions:{
					show:false
				},
			}
		]
		}
	);
} 

var calcTime = function(){                                         
        //time calculating function from equations
	m1 = parseFloat($("#cartMass").val() * 50)/1000;	
	//find mass of cart and convert from g to Kg 
	m2 = parseFloat($("#vertMass").val() * 50)/1000;	
	//mass of vertical weight,Convert g to Kg
	s = parseFloat((parseInt($("#distMove").val()) + 200) / 100);
	 //displacement Convert cm to m
	g = parseFloat($("#gravity").val());//acceleration due to gravity
	t = Math.sqrt(((2*s)*(m1+m2))/(m2 * g));
	//time from all the above value
	
	var num = new Number(t);
	animTime=parseInt(num.toPrecision(3) * 1000);//
	cartSpeed=animTime;
}
var woodxVal=170;
var horWidth;
var timer1;
var hookHeight=200;
function startTimer() {		
		//clearInterval(timer1);
		//distTimePoints = []; 
		distTimePoints.push([0,0]); 
		//renderGraph();
		gCount =0;
		expStatus = true;
		$("#cart").css({left:0+"px"});
		$("#distMoveD").html((parseInt($("#distMove").val())+200)+'cm');
		$("#vertMassV").html((parseInt($("#vertMass").val())*50)+'g');
		$("#cartMassV").html((parseInt($("#cartMass").val())*50)+'g');
		$("#vertMass").removeAttr("disabled","disabled");
		$("#cartMass").removeAttr("disabled","disabled");
		$("#distMove").removeAttr("disabled","disabled");
		timer1=setInterval(startClock,50);
		//hookHeight=((parseInt($("#distMove").val()))+200)/2;
		hookHeight=((parseInt($("#distMove").val()))+100)/6;
		
		
		console.log("distMove="+($("#distMove").val()))
		console.log("hookHeight="+hookHeight);

		
		$("#hook").animate({height:hookHeight+"%"},cartSpeed);
		$("#cart").animate({left: $("#woodblock").position().left-110+"px"},cartSpeed);
}
function startClock(){
	
	xTime  = (new Date()).getTime() - initTime;
	var newTime = '';
	gCount = parseInt(xTime)/1000;
	var d = ((m2*g)*(gCount*gCount))/((m1 + m2)*2) ;
	var dis = ((parseInt($("#distMove").val())+200)/100)-.05;

	if((xTime >= animTime)){	
		clearInterval(timer1);
		expStatus = false;
		distTimePoints.splice(distTimePoints.length-1,2);
		distTimePoints.push([gCount, dis]);		
		increTime=animTime;
		var mLast = Math.floor( xTime / (60 * 1000) );
		increTime = increTime % (60 * 1000);
		var s1 = Math.floor( increTime / 1000 );
		var ms1 = increTime % 1000;
		var newTime1 = pad(mLast, 2) + ':' + pad(s1, 2) + ':' + pad(ms1, 3);
		document.getElementById('stop').innerHTML=newTime1;
		renderGraph();//plot graph outside the timer
		$("#resetExp").removeAttr('disabled');
	}else{
		distTimePoints.push([gCount,d]);
		m = Math.floor( xTime / (60 * 1000) );
		xTime = xTime % (60 * 1000);
		s = Math.floor( xTime / 1000 );
		ms = xTime % 1000;
		newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
		document.getElementById('stop').innerHTML=newTime;//display time
		//renderGraph();plot graph inside the timer
	}
}
var stopTimer = function() {
	clearInterval(myStopTimer);
}

function show() {
	var x = pad(0, 2) + ':' + pad(0, 2) + ':' + pad(0, 3);
	document.getElementById('stop').innerHTML=x ;
}

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function resetExp()
{//reset function 
    $("#resetExp").attr("disabled","disabled");
	clearInterval(timer1);
	distTimePoints = []; 
	gCount =0;
	m1= 0;m2= 0;s= 0;g= 0;t= 0;hStringWidth= 0;vStringHeight= 0;hookTop= 200;
	xTime = 0;expStatus = true;
	$("#cart").css({left:0+"px"});
	$( "#woodblock" ).css("left",$( "#woodblock" ).attr("data-init")+"px");
	$( "#hookWeight" ).css("height",$( "#hookWeight" ).attr("data-init")+"px");
	$( "#hook" ).css({height:14+"%"});
	stopTimer();	
	show();
	distTimePoints.push([0,0]); //reset graph
	renderGraph();
	$("#distMove").val("0");
	$("#cartMass").val("1");
	$("#vertMass").val("1");
	$("#gravity option").eq(0).prop("selected","false");
	$("#stone").html("").append($("<img>").attr("src",simPath+"images/stone.png"));
	$("#runExp").removeAttr("disabled");
	$("#distMoveD").html((parseInt($("#distMove").val())+200)+'cm');
	$("#vertMassV").html((parseInt($("#vertMass").val())*50)+'g');
	$("#cartMassV").html((parseInt($("#cartMass").val())*50)+'g');
	$("#vertMass").removeAttr("disabled","disabled");
	$("#cartMass").removeAttr("disabled","disabled");
	$("#distMove").removeAttr("disabled","disabled");	
}

