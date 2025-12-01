var time;
var clockTimer;
var longHandAnim = 300;
var longspeed =[[5100,2550,1600,1250,1000],[6100,3050,2100,1500,1200],[7100,3550,2300,1750,1400],[8100,4050,2600,2000,1600],[9100,4550,3000,2250,1800],
				 [10100,5050,3350,2500,2000]]; //speed of longitudinal wave[[speed1 length5],[speed1 length6]...........]
var transpeed = [[5100,2700,1900,1300,1050],[6300,3200,2200,1600,1250],[7000,3700,2400,1800,1450],[8200,4200,2700,2000,1650],[9200,4600,3100,2300,1850],
			  [10000,5100,3400,2600,2050]];//speed of transverse wave[[speed1 length5],[speed1 length6]...........]
var lengthstart =[258,220,182,144,106,68];
var lengthend = [213,253,289,329,366,405];
var transrevend = [245,281,320,357,395,433];
var longstart = [264,227,189,151,113,75]
var longend = [270,307,346,384,421,459];
var waveFlag = 0;
var waverevFlag = 0;
var slinky_length = 5;
var slinky_speed = 1;
var longAnimStart = longstart[0];
var longAnimrev = longend[0];
var wavePos = lengthstart[0];
var wavePosEnd = lengthend[0];
var transAnimEnd = transrevend[0];
var sceneFlag;
var gt;
var dropBox;
var waveType;
var gt=$;
$(document).ready(function()
						   {
							   	waveType =gt.gettext('Transverse');
							   	dropBox =[gt.gettext('Transverse'),gt.gettext('Longitudinal')];
							    var  HelpArray=[gt.gettext("Select the wave type."),gt.gettext("Change the length of the slinky."),gt.gettext("Change the pulse speed."),gt.gettext("Click here to start the experiment."),gt.gettext("Click here to start timer."),gt.gettext("Click here to stop the experiment.")];
							   	sceneFlag=1;
							   	HelpMSG_One=HelpArray[0];
							   	HelpMSG_Two=HelpArray[1];
							   	HelpMSG_Three=HelpArray[2];
							   	HelpMSG_Four=HelpArray[3];
							   	HelpMSG_Five=HelpArray[4];
							   	HelpMSG_Six=HelpArray[5];
							 	/*$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
							   	$('#olabmenuBar li:nth-child(2) a').html(gt.gettext("FULLSCREEN"));
							   	$('#olabmenuBar li:last-child a').html(gt.gettext("EXIT"));
							   	$(".labName").html(gt.gettext("Developed by CDAC Mumbai & Amrita University <br> Under research grant from department of IT"));	*/
							   	$('#Transverse').html(dropBox[0]);
							   	$('#Longitudinal').html(dropBox[1]);
							   	$('#select').html(gt.gettext('Select wave type:'));
							   	$('#text').html(gt.gettext('Slinky length:&nbsp;'));
							   	$('#text1').html(gt.gettext('Pulse Speed:&nbsp;'));
							   	$('#range').html(5);
							   	$('#minrange').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+5);
							   	$('#maxrange').html(10)
							   	$('#minrange1').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+1);
							   	$('#maxrange1').html(5);
							   	$('#text2').html(gt.gettext('&nbsp;m'));
							   	$('#range1').html(1);
							   	$('#startsin').attr('value',gt.gettext('Start'));
							   	$('#stopsin').attr('value',gt.gettext('Stop'));
							   	$('#timerstyle').html(gt.gettext('min  &nbsp;s&nbsp;&nbsp;&nbsp;ms'));
							    $('#timer').html('00:00:000');
							   	$('#start').html(gt.gettext('START'));
							   	$('#stop').html(gt.gettext('STOP'));
							    $('#expName').html(gt.gettext("Velocity of a Pulse Propagated Through a Slinky"));
								$('#stopsin').attr("disabled","disabled");
								draw();
								$('#startsin').click(function()        //start button
								{
									$('.rangeSlider').attr("disabled","disabled");
									if(waveType == dropBox[0])
									{
										transeverse();
									}
									else if(waveType == dropBox[1] )
									{ 
										longitudinal();
									}
								});
								$('#stopsin').click(function()        //stop button
								{
									$('#stopsin').attr("disabled","disabled");
									$('#startsin').removeAttr('disabled');
									$('.rangeSlider').removeAttr('disabled');
									obj.stop();
									$('#stop').hide();
									$('#start').show();
									if(waveType == dropBox[0])  //transeverse
									{
										if(waveFlag==1)
										{
											$('#transwave').stop();
											$('#transwave').show(1);	
										}
										if(waverevFlag==1)
										{
											$('#transrevwave').stop();
											$('#transrevwave').show(1);	
										}
									}
									else if(waveType == dropBox[1] )  //longitudinal
									{
										if(waveFlag==1)
										{
											$('#longwave1').stop(1);
											$('#longwave1').show(1);	
										}
										if(waverevFlag==1)
										{
											$('#longrevwave1').stop(1);
											$('#longrevwave1').show(1);	
										}
									}
								});
						    });

var clsStopwatch = function() 
				   { 
        				var    startAt    = 0;    
        				var    lapTime    = 0;    
        				var    now    = function() {
                							return (new Date()).getTime(); 
            	   						}; 
						this.start = function() 
						{   
							startAt    = startAt ? startAt : now();
						};
						this.reset = function() 
						{
							lapTime = startAt = 0;
						}; 
						this.stop = function()   // Stop 
						{  
							lapTime    = startAt ? lapTime + now() - startAt : lapTime;  
							startAt    = 0; 
						};
						this.time = function()
						{       
							return lapTime + (startAt ? now() - startAt : 0); 
						};
    				};
var obj = new clsStopwatch();   
function pad(num, size) 
{
        var s = "0000" + num;
        return s.substr(s.length - size);
}
function formatTime(time) 
{
        var m = s = ms = 0;
        var newTime = '';
        m = Math.floor( time / (60 * 1000) );
        time = time % (60 * 1000);
        s = Math.floor( time / 1000 );
        ms = time % 1000;
        newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
        return newTime;
}
function update() 
{
		time = document.getElementById('timer');
        time.innerHTML = formatTime(obj.time());
}
function start() 
{
		obj.reset();
        clockTimer = setInterval("update()", 1);
        obj.start();
		$('#start').hide();
	    $('#stop').show();
}
function stop() 
{
        obj.stop();
        clearInterval(clockTimer);
		$('#stop').hide();
	    $('#start').show();
}
function showValue(value)//slider     length of the slinky
{ 
	 	$('#transwave').hide(1);	
		$('#transrevwave').hide(1);	
		$('#longwave1').hide(1);
		$('#longrevwave1').hide(1);
	 	longHandAnim = 300+((value-5)*38);  //animation value of longitudinal wave
		$('#range').html(value);
		$('#hand_long').animate({right:300+((value-5)*38)+"px"},1);
		$('#hand_trans').animate({right:300+((value-5)*38)+"px"},1);
		wavePos = lengthstart[value-5];	
		wavePosEnd = lengthend[value-5];
		transAnimEnd = transrevend[value-5];
		longAnimStart = longstart[value-5];
		longAnimrev = longend[value-5];
		draw();
		slinky_length = value;
}
function showValue1(value)  // slider   speed of the slinky
{
	slinky_speed = value;
	$('#range1').html(value);
}
function combo(wave)  //select wavetype  Longitudinal or Transverse
{
	 $('#stopsin').attr("disabled","disabled");
	 $('#startsin').removeAttr('disabled');
	 $('.rangeSlider').removeAttr('disabled');
	 if(wave == dropBox[1])
	 {
	   	waveType = wave;
		$('#transwave').stop();
		$('#transrevwave').stop();
		$('#transrevwave').hide(1);	
		$('#transwave').hide(1);
	    draw();
	  	$('#hand_trans').css({'display':'none'});
	   	$('#hand_long').css({'display':'block'});
	 }
	 else
	 {
		waveType = wave;
		$('#longwave1').stop();
		$('#longrevwave1').stop();	
		$('#longwave1').hide(1);
		$('#longrevwave1').hide(1);
		draw();
		$('#hand_long').css({'display':'none'});
		$('#hand_trans').css({'display':'block'});
	 } 
}
function draw()   //  default length of slinky
{
	$(".hold").remove();
	var div1 = document.createElement('div');
	$("#canvasBox").append(div1);
	div1.style.left = wavePos+'px'; 
	div1.style.top = '165px';
	div1.style.position = 'absolute';
	div1.className = 'hold'
	for(i=0;i<wavePosEnd;i+=4)
	{
		var div2 = document.createElement('div');
		$(".hold").append(div2);
		div2.style.width = '15px';
		div2.style.height = '15px';
		div2.style.border = '#FFF solid 1px';
		$(div2).css("border-radius","15px");
		div2.style.position = 'absolute';
		div2.style.top = '16px';
		div2.style.left = i+'px';
	}						  
}
function transeverse()  //animation of transverse wave
{
	waveFlag=1;
	waverevFlag = 0;
	$('#hand_trans').animate({top:153+'px'},100);
	$('#hand_trans').animate({top:173+'px'},100);
	$('#startsin').attr("disabled","disabled");
	$('#stopsin').removeAttr('disabled');
	$('#transwave').css("left",wavePos+"px");
	$('#transwave').show(1);
	$('#transwave').animate({left:"428px"},{ duration: transpeed[slinky_length-5][slinky_speed-1], complete: transrev });
	$('#transwave').hide(1);
	$('#transrevwave').hide();
	
}
function transrev()   //animation reverse of transverse wave
{
	waveFlag=0;
	waverevFlag = 1;
	$('#transrevwave').css("right","75px");
	$('#transrevwave').delay().show(1);
	$('#transrevwave').animate({right:transAnimEnd+"px"},{ duration: transpeed[slinky_length-5][slinky_speed-1], complete: transeverse });
	$('#transrevwave').hide();
}

function longitudinal()  //animation of longitudinal waves
{
	waveFlag=1;
	waverevFlag = 0;
	$('#hand_long').animate({right:longHandAnim-4+'px'},100);
	$('#hand_long').animate({right: longHandAnim+'px'},100);
	$('#startsin').attr("disabled","disabled");
	$('#stopsin').removeAttr('disabled');
	$('#longwave1').css("left",longAnimStart+"px");
	$('#longwave1').show(1);
	$('#longwave1').animate({left:"457px"},{duration:longspeed[slinky_length-5][slinky_speed-1],complete:longrev});
	$('#longwave1').hide(1);
	$('#longrevwave1').hide(1);
}
function longrev() //animation reverse of longitudinal wave
{
	waveFlag=0;
	waverevFlag = 1;
	$('#longrevwave1').css("right","82px");
	$('#longrevwave1').show(1);
	$('#longrevwave1').animate({right:longAnimrev+"px"},{duration:longspeed[slinky_length-5][slinky_speed-1],complete:longitudinal});
}