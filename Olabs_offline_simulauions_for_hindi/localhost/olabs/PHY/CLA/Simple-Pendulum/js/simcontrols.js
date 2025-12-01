// Variable declaration

var variableArray=[];
var environmentOptions=[];
var shapeOptions=[];
var materialOptions=[];
var wireOptions=[];
var gt;
var len=0.97;       //length of the thread
var instrArray=[];
var newFlag=0;
var degree;
var sim;
var initAngle=0
var newFlagRight=0;
var timeInterval=50;    
var diminish=.5;	
var temp;  //angle when pause pendulum
var rotatepro=0;
var bobWidth=25;
//var answer="Acceleration due to gravity on Earth is 9.8 m/s<sup>2</sup>";
var answer;
var value=1; //default value of length of the thread 
var g=9.8;  //gravity
var drop='earth'; //drop box value
var tempnum = 0.014;
var imgArray = [['domeSteel.png','domeCopper.png','eomeAlum.png','domeIron.png','domeBrass.png','domeLead.png'],
['pendSteel.png','pendCopper.png','pendAluminum.png','pendIron.png','pendBrass.png','pendLead.png'],
['squareSteel.png','squareCopper.png','squareAlum.png','squareIron.png','squareBrass.png','squareLead.png'],
['recSteel.png','recCopper.png','recAlum.png','recIron.png','recBrass.png','recLead.png']]   //imagge array
var dropShape=0;  //value of shape combo box
var dropMat=0;  //value of material combo box
var flag = 0;//answer flag
var time; 
var gt=$;
// function called on loading..
window.onload = function init(){

	document.getElementById("expName").innerHTML=gt.gettext("Simple Pendulum");	
	variableArray=[gt.gettext('Solution Controls'),gt.gettext('Select Environment'),gt.gettext('Select Shape'),gt.gettext('Select Material'),gt.gettext('Select Wire'),gt.gettext('Pendulum Length(m):'),gt.gettext('Change Diameter(mm):'),gt.gettext('Acceleration due to gravity on Earth is 9.8 m/s<sup>2</sup>')];
	environmentOptions=[gt.gettext("earth"),gt.gettext("moon"),gt.gettext("uranus"),gt.gettext("saturn"),gt.gettext("jupiter")];
	addintoDropDown( $('#envmnt'),environmentOptions); /** Adding environments to drop down list */
	shapeOptions=[gt.gettext("Sphere"),gt.gettext("Clock Pendulum"),gt.gettext("Square"),gt.gettext("Rectangle")];
	addintoDropDown( $('#shape'),shapeOptions); /** Adding shapes to drop down list */
	materialOptions=[gt.gettext("Steel"),gt.gettext("Copper"),gt.gettext("Aluminum"),gt.gettext("Iron"),gt.gettext("Brass"),gt.gettext("Lead")];
	addintoDropDown( $('#material'),materialOptions); /** Adding materials to drop down list */
	wireOptions=[gt.gettext("Twine Thread"),gt.gettext("Steel String"),gt.gettext("Twisted Copper Wire")];
	addintoDropDown( $('#wire'),wireOptions); /** Adding type of wire to drop down list */
	document.getElementById("solnCntrl").innerHTML=gt.gettext(variableArray[0]);
	document.getElementById("selectEnv").innerHTML=gt.gettext(variableArray[1]);
	document.getElementById("selectShape").innerHTML=gt.gettext(variableArray[2]);
	document.getElementById("selectMatrial").innerHTML=gt.gettext(variableArray[3]);
	document.getElementById("selectWire").innerHTML=gt.gettext(variableArray[4]);
	document.getElementById("pendlm").innerHTML=gt.gettext(variableArray[5]);
	document.getElementById("changeDiamtr").innerHTML=gt.gettext(variableArray[6]);
	$('#protractorBtn').attr('value',gt.gettext('Show Protractor'));
	$('#play').attr('value',gt.gettext('Play/Pause'));
	$('#reset').attr('value',gt.gettext('Reset'));
	$('#answer').attr('value',gt.gettext('Answer'));
    answer=gt.gettext(variableArray[7]);
}
  /** Adding items to the drop down list */
  function addintoDropDown(getId,valueSet){	
	var _selected = getId;
	$.each(valueSet, function(val, text){
	  _selected.append(
	    $('<option></option>').val(val).html(text)
	  );
    });
  }	

$(document).ready(function() {
	time = document.getElementById('timer'); 
	applyRotationL();   //drag function
	$("#ans_lbl").html(answer)
	$("#play").click(function(e) {   //play/pause	
        pause();
    });
	
	$("#input1").val(1);                   
	$("#DR").change(function() {       //Function Length slider 
			value=$(this).val();
			$("#input1").val(value);
			len = value - tempnum;
			var b = 56 + ( ( value - 0.5 ) * 30 );  //length of thread
			$("#thread1").css({height:b+'px'});
			var top = 57+((value-0.5)*30); //top position of bob
			$(".bob").css({top:top+'px'});
	});
									
	$("#input2").val(15);
	$("#DR1").change(function() {  //Function Diameter Slider
		var val = $(this).val();
		$("#input2").val(val);
		bobWidth = parseInt(val) + 10;   // width of bob
		var pos = -(8.5+((val-10)*0.5))  //left position of bob
		$(".bob").css({width:bobWidth+'px',left:pos+'px'});
	});
	
	/*$('#ProtracorDiv').draggable({    //drag protractor
		drag:function(event,ui){}
		})*/
});

function comboEnvi(value) { //Function for environment dropdown
	drop=value;
	var value=document.getElementById("envmnt").selectedIndex;
	console.log("fff"+value);
	switch(value){
		case 0:
		//case gt.gettext('earth'):	
					answer=gt.gettext("Acceleration due to gravity on Earth is 9.8 m/s<sup>2</sup>");
					g=9.8;
					break;
		case 1:
		//case gt.gettext('moon'):
					answer=gt.gettext("Acceleration due to gravity on Moon is 1.6 m/s<sup>2</sup>");
					g=1.6;
					break;
		case 2:
		//case gt.gettext('uranus'):
					answer=gt.gettext("Acceleration due to gravity on Uranus is 8.69 m/s<sup>2</sup>");
					g=8.69;
					break;
		case 3:
		//case gt.gettext('saturn'):
					answer=gt.gettext("Acceleration due to gravity on Saturn is 11.171 m/s<sup>2</sup>");
					g=11.171;
					break;
		case 4:
		//case gt.gettext('jupiter'):
					answer=gt.gettext("Acceleration due to gravity on Jupiter is 25.95 m/s<sup>2</sup>");
					g=25.95;
					break;				
	}	
}

function comboShape(value) {  // Function for shape dropdown
	dropShape=value
	$('.bob').attr('src', simPath+'/images/'+imgArray[dropShape][dropMat]);
}

function comboMaterial(value) {  //Function for material dropdown
	dropMat=value
	$('.bob').attr('src', simPath+'/images/'+imgArray[dropShape][dropMat]);	
}

function comboWire(value) {  //Function for wire dropdown
    var wireType=document.getElementById("wire").selectedIndex;
	console.log(wireType);
	switch(wireType)
	{
		case 0: 
						$("#thread1").css('border','1px solid #FFFFFF');	
						break;
		case 1:
						$("#thread1").css('border','1px solid #D8D8D8');	
						break;
		case 2:
						$("#thread1").css('border','1px solid #FE9A2E'); 
						break;
	}
}

function applyRotationL() {      //left drag 
	$('#thread').draggable({	
		opacity: 0.01,helper: 'clone',handle :".bob",
		drag: function (event, ui) {
			clearInterval(sim);
			disable_fn()
			$("#play").removeAttr('disabled');
			$("#hdplay").val('play');
			LeftFlag=1;
			flag=1
			resetFun();
			if(newFlag==0)
			{
				h_x =event.pageX,
				h_y = event.pageY;// clicked point
				newFlag=1;
			}	   
			var s_x =event.pageX,
			s_y = event.pageY;//client point.
			target_wp = $(event.target).closest('#thread');
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
			{
				var rotateCSS1 = 'rotate(' +degree + 'deg)';			
				$(this).css({ '-moz-transform-origin':'0% 0%',
				'-webkit-transform-origin': '0% 0%',
				'-moz-transform': rotateCSS1,
				'-webkit-transform': rotateCSS1});//rotate pendulum
				s_xprev=s_x;
				s_yprev=s_y;
			}
			applyRotationR()
		},	
	})//end drag 
	
	$( "#dropArea" ).droppable({        //Drop Function
				drop: function( event, ui ) {
					initAngle=degree;
					repeatAfterRotation(initAngle)
				}
	});
}
		
function applyRotationR() {  //drag right
	$('#thread').draggable({	 
		opacity: 0.01,helper: 'clone',handle :".bob",
		drag: function (event, ui) {
			clearInterval(sim);
			disable_fn()
			rightFlag=1;
			flag=1;
			$("#play").removeAttr('disabled');
			$("#hdplay").val('play');
			resetFun();
			if(newFlagRight==0)
			{//get initial click point
				h_xRight =event.pageX,
				h_yRight = event.pageY;// clicked point
				newFlagRight=1;
			}
			var s_xRight =event.pageX,
			s_yRight = event.pageY;//client point.
			target_wpRight = $(event.target).closest('#thread');
			if (!target_wpRight.data("origin")) target_wpRight.data("origin", {
				left: target_wpRight.offset().left,
				top: target_wpRight.offset().top
			});//set the target origin points
			o_xRight = target_wpRight.data("origin").left;
			o_yRight = target_wpRight.data("origin").top; // origin point
			last_angleRight = target_wpRight.data("last_angleRight") || 0;	//angle for rotation
			var s_radRight = Math.atan2(s_yRight - o_yRight, s_xRight - o_xRight); // current to origin
			s_radRight -= Math.atan2((h_yRight - o_yRight), h_xRight - o_xRight); // handle to origin
			s_radRight += last_angleRight; // relative to the last one
			degree1 = (s_radRight * (360 / (2 * Math.PI)));
			 //degree for rotaion		
			if((Number(degree1)>=-90) && (Number(degree1)<=0))
			{
				var rotateCSS1 = 'rotate(' +degree1 + 'deg)';			
				$(this).css({ '-moz-transform-origin':'0% 0%',
				'-webkit-transform-origin': '0% 0%',
				'-moz-transform': rotateCSS1,
				'-webkit-transform': rotateCSS1});//rotate pendulum
			}
			applyRotationL()
		},
	});
}			
			
function PendulumSim(length_m, gravity_mps2, initialAngle_rad, timestep_ms, callback) {    //pendulum movement
    var velocity = 0;
    var angle = initialAngle_rad;
    var k = -gravity_mps2/length_m;
    var timestep_s = timestep_ms / 1000;
	var flgDecrement=true;
	var prevAngle=0;
    return setInterval(function () {
		if($("#hdplay").val()=='play') 
		{
			var acceleration = k * Math.sin(angle);
      		velocity += acceleration * timestep_s;
      		angle    += velocity     * timestep_s;
			if(prevAngle!=0)
			{
				if(!flgDecrement && angle<prevAngle)
				{
					if(initAngle>0)
					{
						clearInterval(sim);
						repeatAfterRotation(initAngle-diminish);
						diminish+=(initAngle-diminish)*2/100;
					}
				}
				if(flgDecrement && angle>prevAngle)
				{
					if(initAngle<0)
					{
						initAngle=Math.abs(initAngle);
					}
				}
				if(angle<prevAngle)
				{
					flgDecrement=true;
				}
				else
				{
					flgDecrement=false;
				}	
			}
			prevAngle=angle;
			callback(angle);
		}
	  	temp=angle*(180/Math.PI)
    },timestep_ms );
}	
  	
function repeatAfterRotation(angle) {  //repeat rotation
	if((drop =='jupiter')&&(value == 1.5)){
		len = 1.4799
	}
	if((drop =='saturn')&&(value == .5)){
		len = 0.4789
	}
	if((drop =='saturn')&&(value == 1)){
		len = 0.968
	}
	sim = PendulumSim(len,g, Math.PI*(angle/2)/100, timeInterval,movePendulum);
}
		
function movePendulum(angle) {  //move pendulum		
	$('#thread').css({'transform':'rotate('+angle * (180/Math.PI)+'deg)','transform-origin': '0% 0%'});	
  }
	
function pause() {  //play / pause function
	if($("#hdplay").val()=='play')  //pause
	{
		$("#hdplay").val('pause');
		clearInterval(sim)		
	}
	else               //play
	{
		$("#hdplay").val('play');
		clearInterval(sim)
		initAngle=temp;
		repeatAfterRotation(temp)
	}
}
	
function resetFun() { //reset button
	$("#reset").removeAttr('disabled');
	$("#reset").click(function(){
		window.location.reload();
	});
}		

function ShowProtractor() {    //function for showing/hiding the Protractor
	if($('#protractorBtn').val()==gt.gettext('Show Protractor'))
	{//show protractor
		$('#protractorBtn').val(gt.gettext(('Hide Protractor')));
		$('#ProtracorDiv').css({display:'block'});
	}
	else
	{
		$('#protractorBtn').val(gt.gettext('Show Protractor'));
		$('#ProtracorDiv').css({display:'none'});
	}
}

function rotateClockwisePro() {   //for closewise turn of protractor
	rotatepro++;
	rotateprotractor();
}

function rotateanticlockPro() {   //for anticlosewise turn of protractor
	rotatepro--;
	rotateprotractor();
}

function rotateprotractor() {      // function for rotating the protractor
	var rotateProtractor = 'rotate('+rotatepro+'deg)';			
	$("#protractorInside").css({ '-moz-transform-origin':'50% 0%',
	'-webkit-transform-origin': '50% 0%',
	'-moz-transform': rotateProtractor,
	'-webkit-transform': rotateProtractor
	});//rotate the protractor
}

function answer_ftn() {  //display answer
	$('#ans_lbl').show();
	$("#ans_lbl").html(answer)
	console.log("vlick");
	$("#answer").attr("disabled","disabled");	  	
}

function disable_fn() {
	$('.rangeSlider').attr("disabled","disabled");
	$('.dropBox').attr("disabled","disabled");
}

function onlyNumbers(evt)///Function for  restrict characters
{ 
	var e = event || evt; // for trans-browser compatibility
	
		var charCode = e.which || e.keyCode;
		
		if(((charCode == 190) ||(charCode == 110))||(charCode >= 96 && charCode <= 105))
		{
			return true;
		}
		if ((charCode > 31) && (charCode < 48 || charCode > 57))
		{			
			return false;		
		}
		 
}

var clsStopwatch = function() {            //StopWatch
        				var    startAt    = 0;    
        				var    lapTime    = 0;    
        				var    now    = function() {
                							return (new Date()).getTime(); 
            	   						}; 
						this.start = function(){ 
							startAt    = startAt ? startAt : now();
						};
						this.reset = function(){ 
							lapTime = startAt = 0;
						}; 
						this.stop = function(){   // Stop 
							lapTime    = startAt ? lapTime + now() - startAt : lapTime;  
							startAt    = 0; 
						};
						this.time = function(){   
							return lapTime + (startAt ? now() - startAt : 0); 
						};
    				};
					
var obj = new clsStopwatch(); 
function pad(num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size);
}

function formatTime(time) {
        var m = s = ms = 0;
        var newTime = '';
        m = Math.floor( time / (60 * 1000) );
        time = time % (60 * 1000);
        s = Math.floor( time / 1000 );
        ms = time % 1000;
        newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
        return newTime;
}

function update() {
        time.innerHTML = formatTime(obj.time());
}

function start() {
		obj.reset();
        clockTimer = setInterval("update()", 1);
        obj.start();
		$('#start').hide();
	    $('#stop').show();
}

function stop() {
        obj.stop();
        clearInterval(clockTimer);
		$('#stop').hide();
	    $('#start').show();
		if(flag==1)    //check the movement of pendulum
		{
			$("#answer").removeAttr('disabled');	  
		}
}